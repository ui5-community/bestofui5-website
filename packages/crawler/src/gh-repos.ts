// import { Octokit } from "@octokit/core";
import { Octokit } from "@octokit/rest";
import { throttling } from "@octokit/plugin-throttling";
const MyOctokit = Octokit.plugin(throttling);

import axios from "axios";
import { readFileSync, writeFileSync } from "fs";
import { Artifact, Package, Type, Source, DataJson } from "./types";

export default class GitHubRepositoriesProvider {
  static source = "github-packages";

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

  static async get(sources: Source[]): Promise<Package[]> {


    let packages: Package[] = [];

    
    

    for (const source of sources) {
      source.path = `${source.owner}/${source.repo}`;
      if (source.subpath && source.subpackages) {
        let repoInfo = await this.getRepoInfo(source);
        for (const subpackage of source.subpackages) {
          let path: string = `${source.subpath}/${subpackage}/`;
          let packageInfo = await this.fetchRepo(source, path, repoInfo);
          packages.push(packageInfo);
        }
      } else {
        let repoInfo = await this.getRepoInfo(source);
        let packageInfo = await this.fetchRepo(source, "", repoInfo);
        packages.push(packageInfo);
      }
    }

    return packages;
  }

  static async getRepoInfo(source: Source) {
    let packageObject: Package = {
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
      downloads: 0,
      npmlink: ""
    };
    let repo = await GitHubRepositoriesProvider.octokit.rest.repos.get({
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

  static async fetchRepo(source: Source, path: string, repoInfo: any): Promise<Package> {
    let packageJson: Package = {
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
      downloads: 0,
      npmlink: ""
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
      let string = data.data.toString();
      packageJson = JSON.parse(string);
      // TODO: replace with specific reference to type
      try {
        let nameArray = packageJson.name.split("-");
        packageJson.type = nameArray[1];
      } catch (error) {}
      packageJson.license = repoInfo.license;
      packageJson.forks = repoInfo.forks;
      packageJson.stars = repoInfo.stars;
      // data only from npm
      // packageJson.updatedAt = repoInfo.updatedAt;
      // packageJson.createdAt = repoInfo.createdAt;
      packageJson.githublink = `${repoInfo.githublink}/tree/main/${path}`;
      try {
        const readme = await GitHubRepositoriesProvider.octokit.rest.repos.getContent({
          mediaType: {
            format: "raw",
          },
          owner: source.owner,
          repo: source.repo,
          path: `${path}README.md`,
        });
        let readmeString = readme.data.toString();
        packageJson.readme = readmeString;
      } catch (error) {
        console.log(`No README.md found for ${packageJson.githublink}`);
      }
    } catch (error) {
      console.log(error);
    }

    return packageJson;
  }
}
