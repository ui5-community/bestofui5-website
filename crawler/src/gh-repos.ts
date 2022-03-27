// import { Octokit } from "@octokit/core";
import { Octokit } from "@octokit/rest";
import { throttling } from "@octokit/plugin-throttling";
const MyOctokit = Octokit.plugin(throttling);

import axios from "axios";
import { readFileSync, writeFileSync } from "fs";
import { Artifact, Package, Type, Sources } from "./types";

export default class GitHubRepositoriesProvider {
  static source = "github-packages";

  static repos: string[] = ["ui5-community/ui5-ecosystem-showcase"];

  // static octokitRest = new OctokitRest({ auth: "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" });

  static octokit = new MyOctokit({
    auth: process.env.GITHUB_TOKEN,
    throttle: {
      onRateLimit: (retryAfter: any, options: any) => {
        GitHubRepositoriesProvider.octokit.log.warn(`Request quota exhausted for request ${options.method} ${options.url}`);

        // Retry four times after hitting a rate limit error, then give up
        if (options.request.retryCount <= 4) {
          // console.log(`Retrying after ${retryAfter} seconds!`);
          return true;
        }
      },
      onAbuseLimit: (retryAfter: any, options: any) => {
        // does not retry, only logs a warning
        GitHubRepositoriesProvider.octokit.log.warn(`Abuse detected for request ${options.method} ${options.url}`);
      },
    },
  });

  static transformRepo(rawRepo: any, lastMonth: any) {
    const id = `gh-repo-stars-${rawRepo.full_name}`;
    const old: Artifact | undefined = Object.values(lastMonth).find(
      //@ts-ignore
      (old: Artifact) => old.id === id
    );
    const tags = [`${rawRepo.stargazers_count} ${rawRepo.stargazers_count === 1 ? "star" : "stars"}`, `${rawRepo.forks} ${rawRepo.forks === 1 ? "fork" : "forks"}`];
    rawRepo.license && tags.push(rawRepo.license.spdx_id);
    if (old) {
      return {
        ...old,
        name: rawRepo.full_name,
        description: rawRepo.description,
        link: rawRepo.html_url,
        tags,
        updatedAt: rawRepo.updated_at,
        type: "code-repository",
        aggregatedCount: rawRepo.stargazers_count + rawRepo.forks,
        currentCount: rawRepo.stargazers_count + rawRepo.forks - old.aggregatedCount,
      };
    }
    return {
      id,
      name: rawRepo.full_name,
      description: rawRepo.description,
      link: rawRepo.html_url,
      createdAt: rawRepo.created_at,
      aggregatedCount: rawRepo.stargazers_count + rawRepo.forks,
      currentCount: rawRepo.stargazers_count + rawRepo.forks,
      updatedAt: rawRepo.updated_at,
      type: "code-repository",
      tags,
    };
  }

  static async fetchOrgRepos(org: string, page = 1): Promise<Artifact[]> {
    let repos: any[] = [];
    while (true) {
      let currentRepos = await GitHubRepositoriesProvider.octokit.request("GET /orgs/{org}/repos", {
        per_page: 100,
        org,
        page,
      });
      repos = repos.concat(currentRepos.data);
      if (currentRepos.data.length < 100) {
        break;
      }
      page++;
    }

    return repos;
  }

  static async fetchUserRepos(user: string, page = 1): Promise<Artifact[]> {
    let repos: any[] = [];
    while (true) {
      let currentRepos = await GitHubRepositoriesProvider.octokit.request("GET /users/{user}/repos", {
        per_page: 100,
        user,
        page,
      });
      if (currentRepos.data.length < 100) {
        break;
      }
      page++;
      repos = repos.concat(currentRepos.data);
    }

    return repos;
  }

  static async fetchMonoRepos(source: Sources): Promise<Package[]> {
    let packagesReturn: Package[] = [];
    let packages = await GitHubRepositoriesProvider.octokit.request(`GET /repos/${source.path}/contents/${source.subpath}`);
    for (const packageContent of packages.data) {
      try {
        const data = await GitHubRepositoriesProvider.octokit.rest.repos.getContent({
          mediaType: {
            format: "raw",
          },
          owner: source.owner,
          repo: source.repo,
          path: `${source.subpath}/${packageContent.name}/package.json`,
        });
        let string = data.data.toString();
        let packageJson: Package = JSON.parse(string);
        try {
          let nameArray = packageJson.name.split("-");
          packageJson.type = nameArray[1];
        } catch (error) {}
        try {
            const readme = await GitHubRepositoriesProvider.octokit.rest.repos.getContent({
                mediaType: {
                  format: "raw",
                },
                owner: source.owner,
                repo: source.repo,
                path: `${source.subpath}/${packageContent.name}/README.md`,
              });
              let readmeString = readme.data.toString();
              packageJson.readme = readmeString;
        } catch (error) {
            console.log("No README found");
        }


        packagesReturn.push(packageJson);
      } catch (error) {
        console.log(error);
      }
    }
    return packagesReturn;
  }

  static async fetchSingleRepos(source: Sources): Promise<Package[]> {
    let packagesReturn: Package[] = [];
      try {
        const data = await GitHubRepositoriesProvider.octokit.rest.repos.getContent({
          mediaType: {
            format: "raw",
          },
          owner: source.owner,
          repo: source.repo,
          path: `package.json`,
        });
        let string = data.data.toString();
        let packageJson: Package = JSON.parse(string);
        try {
          // TODO: read from keywords
          packageJson.type = "cc";
        } catch (error) {}
        try {
            const readme = await GitHubRepositoriesProvider.octokit.rest.repos.getContent({
                mediaType: {
                  format: "raw",
                },
                owner: source.owner,
                repo: source.repo,
                path: `README.md`
              });
              let readmeString = readme.data.toString();
              packageJson.readme = readmeString;
        } catch (error) {
            console.log("No README found");
        }


        packagesReturn.push(packageJson);
      } catch (error) {
        console.log(error);
    }
    return packagesReturn;
  }

  static async get(lastMonth: any): Promise<Package[]> {
    let packages: Package[] = [];

    const sourcesJsonString = readFileSync(`${__dirname}/../sources.json`, "utf8");
    let Sources: Sources[] = JSON.parse(sourcesJsonString);

    for (const source of Sources) {
      source.path = `${source.owner}/${source.repo}`;
      if (source.type === "mono") {
        const monoRepos = await this.fetchMonoRepos(source);
        packages = packages.concat(monoRepos);

      } else if (source.type === "single") {
        const singleRepos = await this.fetchSingleRepos(source);
        packages = packages.concat(singleRepos);
      }
    }

    let typesArray: Type[] = [];
    for (const packageContent of packages) {
      let type: Type = {
        name: packageContent.type,
      };
      if (!typesArray.find((type) => type.name === packageContent.type)) {
        typesArray.push(type);
      }
    }
    writeFileSync(`${__dirname}/../../uimodule/src/model/packages.json`, JSON.stringify(packages));
    writeFileSync(`${__dirname}/../../uimodule/src/model/types.json`, JSON.stringify(typesArray));
    
    return packages;


  }
}
