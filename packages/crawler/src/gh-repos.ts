/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import { Octokit } from "@octokit/core";
import { Octokit } from "@octokit/rest";
import { throttling } from "@octokit/plugin-throttling";
const MyOctokit = Octokit.plugin(throttling);
import * as jsdoc2md from "jsdoc-to-markdown";
import *  as yaml from "js-yaml";

import axios from "axios";
import { readFileSync, writeFileSync } from "fs";
import { Package, Source, SubPackage } from "./types";

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
    const packages: Package[] = [];

    for (const source of sources) {
      source.path = `${source.owner}/${source.repo}`;
      if (source.subpath && source.subpackages) {
        const repoInfo = await this.getRepoInfo(source);
        for (const subpackage of source.subpackages) {
          const path = `${source.subpath}/${subpackage.name}/`;
          let packageInfo = await this.fetchRepo(source, path, repoInfo, subpackage.addedToBoUI5);
          packageInfo["jsdoc"] = await this.getJsdoc(source, path);

          packages.push(packageInfo);
        }
      } else {
        const repoInfo = await this.getRepoInfo(source);
        let packageInfo = await this.fetchRepo(source, "", repoInfo, source.addedToBoUI5);
        packageInfo["jsdoc"] = await this.getJsdoc(source, "");

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
      "ui5-community": {
        types: [],
        tags: [],
      },
      addedToBoUI5: "",
      downloads365: 0,
      downloadsCurrentMonth: 0,
      downloadsLastMonth: 0,
      downloadsMonthlyGrowth: 0,
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

  static async fetchRepo(source: Source, path: string, repoInfo: any, addedToBoUI5: string): Promise<Package> {
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
      "ui5-community": {
        types: [],
        tags: [],
      },
      addedToBoUI5: "",
      downloads365: 0,
      downloadsCurrentMonth: 0,
      downloadsLastMonth: 0,
      downloadsMonthlyGrowth: 0,
      main: "",
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
      let packageJson = JSON.parse(string);
      packageReturn = packageJson;
      // TODO: replace with specific reference to type
      try {
        packageReturn.type = packageJson["ui5-community"]["types"].join(",");
      } catch (error) {}
      packageReturn.license = repoInfo.license;
      packageReturn.forks = repoInfo.forks;
      packageReturn.stars = repoInfo.stars;
      packageReturn.addedToBoUI5 = addedToBoUI5;

      // data only from npm
      // packageJson.updatedAt = repoInfo.updatedAt;
      // packageJson.createdAt = repoInfo.createdAt;
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
      let jsdoc:any = {};
      for (const yaml of yamlArray) {
        if (yaml.type === "server-middleware"){
          yaml.type = "middleware";
          entryPath = yaml["middleware"].path;
        } else if (yaml.type === "task") {
          entryPath = yaml["task"].path;
        }
        const returnObject = await this.fetchParams(source, path, entryPath);
        jsdoc[yaml.type]= {};
        jsdoc[yaml.type]["params"] = returnObject.params;
        jsdoc[yaml.type]["markdown"] = returnObject.markdown;
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
      const yamlStringArray = indexString.split('---');
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
    let returnObject: any = {
      params: undefined,
      markdown: ""
    }
    let arr: any[] = [];
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
        files: undefined
      };
      const markdown = jsdoc2md.renderSync(opt);
      const data = jsdoc2md.getTemplateDataSync(opt);
      const typedef: any = data.filter((x: any) => x.kind === "typedef");
      
      typedef[0].properties.forEach((property: any) => {
        const obj = { ...property };
        obj.type = obj.type.names[0];
        arr.push(obj);
      });
      returnObject.params = arr;
      returnObject.markdown = markdown;
      return returnObject;
    } catch (error) {
      console.log(error);
    }
  }
}
