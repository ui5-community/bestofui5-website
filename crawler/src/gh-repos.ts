// import { Octokit } from "@octokit/core";
import { Octokit } from "@octokit/rest";
import { throttling } from "@octokit/plugin-throttling";
const MyOctokit = Octokit.plugin(throttling);

import axios from "axios";
import { readFileSync, writeFileSync } from "fs";
import { Artifact, Package, Type } from "./types";

export default class GitHubRepositoriesProvider {
  static source = "github-packages";

  static repos: string[] = ["ui5-community/ui5-ecosystem-showcase"];

  // static octokitRest = new OctokitRest({ auth: "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" });

  static octokit = new MyOctokit({
    auth: "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",
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

  static async fetchUI5EcossystemShowcase(): Promise<Package[]> {
    let typesArray: Type[] = [];
    let packagesReturn: Package[] = [];
    let packages = await GitHubRepositoriesProvider.octokit.request(`GET /repos/ui5-community/ui5-ecosystem-showcase/contents/packages`);
    for (const packageContent of packages.data) {
      try {
        const data = await GitHubRepositoriesProvider.octokit.rest.repos.getContent({
          mediaType: {
            format: "raw",
          },
          owner: "ui5-community",
          repo: "ui5-ecosystem-showcase",
          path: `packages/${packageContent.name}/package.json`,
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
                owner: "ui5-community",
                repo: "ui5-ecosystem-showcase",
                path: `packages/${packageContent.name}/README.md`,
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

  static async fetchSingleRepos(repo: string, page = 1): Promise<Artifact[]> {
    let currentRepo = await GitHubRepositoriesProvider.octokit.request(`GET /repos/${repo}`);

    return [currentRepo.data];
  }

  static async get(lastMonth: any): Promise<Artifact[]> {
    var packages = await this.fetchUI5EcossystemShowcase();
    let typesArray: Type[] = [];
    for (const packageContent of packages) {
      let type: Type = {
        name: packageContent.type,
      };
      if (!typesArray.find((type) => type.name === packageContent.type)) {
        typesArray.push(type);
      }
    }
    writeFileSync(`${__dirname}/../../uimodule//webapp/model/packages.json`, JSON.stringify(packages));
    writeFileSync(`${__dirname}/../../uimodule//webapp/model/types.json`, JSON.stringify(typesArray));

    const artifacts = await Promise.all([...this.repos.map(async (repo: string) => await this.fetchSingleRepos(repo, 0))]);

    const ids = new Set();

    return artifacts
      .flat()
      .filter((rawRepo: any) => {
        //filter dups
        if (ids.has(rawRepo.full_name)) {
          return false;
        }
        ids.add(rawRepo.full_name);
        return true;
      })
      .map((rawRepo: any) => this.transformRepo(rawRepo, lastMonth));
  }
}
