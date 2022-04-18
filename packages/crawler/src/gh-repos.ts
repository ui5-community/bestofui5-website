// import { Octokit } from "@octokit/core";
import { Octokit } from "@octokit/rest";
import { throttling } from "@octokit/plugin-throttling";
const MyOctokit = Octokit.plugin(throttling);
import * as jsdoc2md from "jsdoc-to-markdown";
import * as yaml from "js-yaml";

import { Package, Source } from "./types";

export default class GitHubRepositoriesProvider {
	static source = "github-packages";

	static octokit = new MyOctokit({
		auth: process.env.GITHUB_TOKEN,
		throttle: {
			onRateLimit: (retryAfter: any, options: any) => {
				GitHubRepositoriesProvider.octokit.log.warn(`Request quota exhausted for request ${options.method} ${options.url}`);

				// Retry four times after hitting a rate limit error, then give up
				if (options.request.retryCount <= 4) {
					console.log(`Retrying after ${retryAfter} seconds!`);
					return true;
				}
			},
			onAbuseLimit: (retryAfter: any, options: any) => {
				// does not retry, only logs a warning
				GitHubRepositoriesProvider.octokit.log.warn(`Abuse detected for request ${options.method} ${options.url}`);
			},
		},
	});

	static async get(sources: Source[]): Promise<Package[]> {
		const packages: Package[] = [];

		for (const source of sources) {
			source.path = `${source.owner}/${source.repo}`;
			if (source.subpath && source.subpackages) {
				const repoInfo = await this.getRepoInfo(source);
				for (const subpackage of source.subpackages) {
					const path = `${source.subpath}/${subpackage.name}/`;
					const packageInfo = await this.fetchRepo(source, path, repoInfo, subpackage);
					if (source.type === "task" || source.type === "middleware" || source.type === "tooling") {
						try {
							packageInfo["jsdoc"] = await this.getJsdoc(source, path);
						} catch (error) {
							console.log(`Error while fetching jsdoc for ${source.path}`);
						}
					}
					packages.push(packageInfo);
				}
			} else {
				const repoInfo = await this.getRepoInfo(source);
				const packageInfo = await this.fetchRepo(source, "", repoInfo, source);
				if (source.type === "task" || source.type === "middleware" || source.type === "tooling") {
					try {
						packageInfo["jsdoc"] = await this.getJsdoc(source, "");
					} catch (error) {
						console.log(`Error while fetching jsdoc for ${source.path}`);
					}
				}
				packages.push(packageInfo);
			}
		}

		return packages;
	}

	static async getRepoInfo(source: Source) {
		const packageObject: Package = {
			name: source.repo,
			description: "",
			type: "",
			githublink: ``,
			readme: "",
			createdAt: "",
			updatedAt: "",
			author: "",
			license: "",
			stars: 0,
			forks: 0,
			npmlink: "",
			addedToBoUI5: "",
			downloads365: 0,
			downloadsCurrentMonth: 0,
			tags: [],
			gitHubOwner: "",
			gitHubRepo: "",
			downloadsCurrentFortnight: 0,
			downloadsFortnightGrowth: 0,
		};
		const repo = await GitHubRepositoriesProvider.octokit.rest.repos.get({
			owner: source.owner,
			repo: source.repo,
		});
		packageObject.createdAt = repo.data.created_at;
		packageObject.updatedAt = repo.data.updated_at;
		packageObject.githublink = repo.data.html_url;
		packageObject.forks = repo.data.forks;
		packageObject.stars = repo.data.stargazers_count;
		packageObject.license = repo.data.license.key;
		return packageObject;
	}

	static async fetchRepo(source: Source, path: string, repoInfo: any, sourcePackage: any): Promise<Package> {
		let packageReturn: Package = {
			name: "",
			description: "",
			author: "",
			license: "",
			type: "",
			readme: "",
			forks: 0,
			stars: 0,
			updatedAt: "",
			createdAt: "",
			githublink: "",
			npmlink: "",
			addedToBoUI5: "",
			downloads365: 0,
			downloadsCurrentMonth: 0,
			main: "",
			tags: [],
			gitHubOwner: "",
			gitHubRepo: "",
			downloadsCurrentFortnight: 0,
			downloadsFortnightGrowth: 0,
		};
		try {
			const data = await GitHubRepositoriesProvider.octokit.rest.repos.getContent({
				mediaType: {
					format: "raw",
				},
				owner: source.owner,
				repo: source.repo,
				path: `${path}package.json`,
			});
			const string = data.data.toString();
			const packageJson = JSON.parse(string);
			packageReturn = packageJson;
			packageReturn.type = sourcePackage.type;
			packageReturn.tags = sourcePackage.tags;
			packageReturn.gitHubOwner = source.owner;
			packageReturn.gitHubRepo = source.repo;
			packageReturn.license = repoInfo.license;
			packageReturn.forks = repoInfo.forks;
			packageReturn.stars = repoInfo.stars;
			packageReturn.addedToBoUI5 = sourcePackage.addedToBoUI5;
			packageReturn.createdAt = repoInfo.createdAt;
			packageReturn.updatedAt = repoInfo.updatedAt;

			packageReturn.githublink = `${repoInfo.githublink}/tree/main/${path}`;
			try {
				const readme = await GitHubRepositoriesProvider.octokit.rest.repos.getContent({
					mediaType: {
						format: "raw",
					},
					owner: source.owner,
					repo: source.repo,
					path: `${path}README.md`,
				});
				const readmeString = readme.data.toString();
				packageReturn.readme = readmeString;
			} catch (error) {
				console.log(`No README.md found for ${packageReturn.githublink}`);
			}
		} catch (error) {
			console.log(error);
		}

		return packageReturn;
	}

	static async getJsdoc(source: Source, path: string): Promise<any> {
		let entryPath = "";
		const yamlArray = await this.parseYaml(source, path);
		let jsdoc: any = {};
		for (const yaml of yamlArray) {
			if (yaml.type === "server-middleware") {
				yaml.type = "middleware";
				entryPath = yaml["middleware"].path;
			} else if (yaml.type === "task") {
				entryPath = yaml["task"].path;
			} else {
				continue;
			}

			const returnObject = await this.fetchParams(source, path, entryPath);
			if (returnObject && returnObject.params && returnObject.markdown) {
				jsdoc = {};
				jsdoc[yaml.type] = {
					params: returnObject.params,
					markdown: returnObject.markdown,
				};
			}
		}
		return jsdoc;
	}

	static async parseYaml(source: Source, path: string): Promise<any[]> {
		const yamlArray: any[] = [];
		try {
			const indexJs = await GitHubRepositoriesProvider.octokit.rest.repos.getContent({
				mediaType: {
					format: "raw",
				},
				owner: source.owner,
				repo: source.repo,
				path: `${path}ui5.yaml`,
			});
			const indexString = indexJs.data.toString();
			const yamlStringArray = indexString.split("---");
			for (const yamlString of yamlStringArray) {
				if (yamlString.length > 0) {
					const yamlObject = yaml.load(yamlString);
					yamlArray.push(yamlObject);
				}
			}
			return yamlArray;
		} catch (error) {
			console.log(error);
		}
	}

	static async fetchParams(source: Source, path: string, entryPath: string): Promise<any> {
		const returnObject: any = {
			params: undefined,
			markdown: "",
		};
		const arr: any[] = [];

		try {
			const indexJs = await GitHubRepositoriesProvider.octokit.rest.repos.getContent({
				mediaType: {
					format: "raw",
				},
				owner: source.owner,
				repo: source.repo,
				path: `${path}${entryPath}`,
			});
			const indexString = indexJs.data.toString();
			const opt: jsdoc2md.JsdocOptions = {
				source: indexString,
				files: undefined,
			};
			const markdown = await jsdoc2md.render(opt);
			const data = await jsdoc2md.getTemplateData(opt);
			const typedef: any = data.filter((x: any) => x.kind === "typedef");
			if (typedef.length > 0) {
				typedef[0].properties.forEach((property: any) => {
					const obj = { ...property };
					obj.type = obj.type.names[0];
					arr.push(obj);
				});
				returnObject.params = arr;
			}
			returnObject.markdown = markdown;
			return returnObject;
		} catch (error) {
			console.log(error);
		}
	}
}
