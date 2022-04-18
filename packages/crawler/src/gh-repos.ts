// import { Octokit } from "@octokit/core";
import { Octokit } from "@octokit/rest";
import { throttling } from "@octokit/plugin-throttling";
const MyOctokit = Octokit.plugin(throttling);
import * as jsdoc2md from "jsdoc-to-markdown";
import * as yaml from "js-yaml";

import { IPackage, Jsdoc, JsdocType, Params, Source, SubPackage, UI5Yaml } from "./types";
import Package from "./Package";

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

	static async get(sources: Source[]): Promise<IPackage[]> {
		const packages: IPackage[] = [];

		for (const source of sources) {
			source.path = `${source.owner}/${source.repo}`;
			if (source.subpath && source.subpackages) {
				const repoInfo = await this.getRepoInfo(source);
				for (const subpackage of source.subpackages) {
					const path = `${source.subpath}/${subpackage.name}/`;
					const packageInfo = await this.fetchRepo(source, path, repoInfo, subpackage);
					if (packageInfo.type === "task" || packageInfo.type === "middleware" || packageInfo.type === "tooling") {
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
				if (packageInfo.type === "task" || packageInfo.type === "middleware" || packageInfo.type === "tooling") {
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

	static async getRepoInfo(source: Source): Promise<IPackage> {
		const packageObject: IPackage = new Package();
		const repo = await GitHubRepositoriesProvider.octokit.rest.repos.get({
			owner: source.owner,
			repo: source.repo,
		});
		packageObject.createdAt = repo.data.created_at;
		// generator don´t have a npm module, get updatedat from last commit
		if (source.type === "generator") {
			try {
				packageObject.updatedAt = await this.getLastCommitDate(source, repo.data.default_branch);
			} catch (error) {
				console.log(error);
				console.log(`Error while fetching last commit date for ${source.path}`);
				packageObject.updatedAt = repo.data.updated_at;
			}
		} else {
			packageObject.updatedAt = repo.data.updated_at;
		}

		packageObject.githublink = repo.data.html_url;
		packageObject.forks = repo.data.forks;
		packageObject.stars = repo.data.stargazers_count;
		packageObject.license = repo.data.license.key;
		packageObject.defaultBranch = repo.data.default_branch;
		return packageObject;
	}

	static async fetchRepo(source: Source, path: string, repoInfo: Package, sourcePackage: Source | SubPackage): Promise<IPackage> {
		let packageReturn: IPackage = new Package();
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
			packageReturn = JSON.parse(string) as Package;
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

	static async getJsdoc(source: Source, path: string): Promise<Jsdoc> {
		let entryPath = "";
		const yamlArray = await this.parseYaml(source, path);
		const jsdoc: Jsdoc = {};
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
				if (yaml.type === "middleware") {
					jsdoc.middleware = {
						params: returnObject.params,
						markdown: returnObject.markdown,
					};
				} else if (yaml.type === "task") {
					jsdoc.task = {
						params: returnObject.params,
						markdown: returnObject.markdown,
					};
				}
			}
		}
		return jsdoc;
	}

	static async parseYaml(source: Source, path: string): Promise<UI5Yaml[]> {
		const yamlArray: UI5Yaml[] = [];
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
					const yamlObject = yaml.load(yamlString) as UI5Yaml;
					yamlArray.push(yamlObject);
				}
			}
			return yamlArray;
		} catch (error) {
			console.log(error);
		}
	}

	static async fetchParams(source: Source, path: string, entryPath: string): Promise<JsdocType> {
		const returnObject: JsdocType = {
			params: undefined,
			markdown: "",
		};
		const arr: Params[] = [];

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
			const typedef: any[] = data.filter((x: any) => x.kind === "typedef");
			if (typedef.length > 0) {
				typedef[0].properties.forEach((property: any) => {
					const param: Params = {
						type: "",
						description: "",
						name: "",
						optional: false,
					};
					param.name = property.name as string;
					param.description = property.description as string;
					param.optional = property.optional as boolean;
					param.type = property.type.names[0] as string;
					arr.push(param);
				});
				returnObject.params = arr;
			}
			returnObject.markdown = markdown;
			return returnObject;
		} catch (error) {
			console.log(error);
		}
	}

	static async getLastCommitDate(source: Source, defaultBranch: string): Promise<string> {
		const defaultBranchReference = await GitHubRepositoriesProvider.octokit.rest.git.getRef({
			owner: source.owner,
			repo: source.repo,
			ref: `heads/${defaultBranch}`,
		});
		const latestCommit = await GitHubRepositoriesProvider.octokit.rest.git.getCommit({
			owner: source.owner,
			repo: source.repo,
			commit_sha: defaultBranchReference.data.object.sha,
		});

		return latestCommit.data.committer.date;
	}
}
