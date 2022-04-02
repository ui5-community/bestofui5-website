// import { Octokit } from "@octokit/core";
import { Octokit } from "@octokit/rest";
import { throttling } from "@octokit/plugin-throttling";
const MyOctokit = Octokit.plugin(throttling);

import axios from "axios";
import { readFileSync, writeFileSync } from "fs";
import { Artifact, Package, Type, Sources } from "./types";

export default class GitHubRepositoriesProvider {
  static source = "github-packages";


  static octokit = new MyOctokit({
    // auth: process.env.GITHUB_TOKEN,
    auth: "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",
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

  static async getRepoInfo(source: Sources) {
    let packageObject: Package = {
      name: source.repo,
      description: "",
      type: "cc",
      link: ``,
      readme: "",
      createdAt: "",
      updatedAt: "",
      author: "",
      license: "",
      stars: 0,
      forks: 0
      }
    let repo = await GitHubRepositoriesProvider.octokit.rest.repos.get({
      owner: source.owner,
      repo: source.repo,
      });
    packageObject.createdAt = repo.data.created_at;
    packageObject.updatedAt = repo.data.updated_at;
    packageObject.link = repo.data.html_url;
    packageObject.forks = repo.data.forks;
    packageObject.stars = repo.data.stargazers_count;
    packageObject.license = repo.data.license.key;
    return packageObject;
  }

  static async fetchMonoRepos(source: Sources): Promise<Package[]> {
    let packagesReturn: Package[] = [];
    let repoInfo = await this.getRepoInfo(source);
    for (const subpackage of source.subpackages) {
      try {
        const data = await GitHubRepositoriesProvider.octokit.rest.repos.getContent({
          mediaType: {
            format: "raw",
          },
          owner: source.owner,
          repo: source.repo,
          path: `${source.subpath}/${subpackage}/package.json`,
        });
        let string = data.data.toString();
        let packageJson: Package = JSON.parse(string);
        try {
          let nameArray = packageJson.name.split("-");
          packageJson.type = nameArray[1];
        } catch (error) {}
        packageJson.license = repoInfo.license;
        packageJson.forks = repoInfo.forks;
        packageJson.stars = repoInfo.stars;
        packageJson.updatedAt = repoInfo.updatedAt;
        packageJson.createdAt = repoInfo.createdAt;
        packageJson.link = `${repoInfo.link}/tree/main/${source.subpath}/${subpackage}`;
        try {
            const readme = await GitHubRepositoriesProvider.octokit.rest.repos.getContent({
                mediaType: {
                  format: "raw",
                },
                owner: source.owner,
                repo: source.repo,
                path: `${source.subpath}/${subpackage}/README.md`,
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
    let repoInfo = await this.getRepoInfo(source);

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
        packageJson.license = repoInfo.license;
        packageJson.forks = repoInfo.forks;
        packageJson.stars = repoInfo.stars;
        packageJson.updatedAt = repoInfo.updatedAt;
        packageJson.createdAt = repoInfo.createdAt;
        packageJson.link = repoInfo.link;
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
      if (source.subpath && source.subpackages) {
        const monoRepos = await this.fetchMonoRepos(source);
        packages = packages.concat(monoRepos);

      } else {
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
