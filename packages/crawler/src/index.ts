/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
// require("dotenv").config();
import { readFileSync, writeFileSync } from "fs";

import GitHubRepositoriesProvider from "./gh-repos";
import NPMProvider from "./npm";
import { Package, Source, Tags, Types, DataJson } from "./types";

(async () => {
  const dataJson: DataJson = {
    types: [],
    packages: [],
    tags: []
  };

  const sourcesJsonString = readFileSync(`${__dirname}/../sources.json`, "utf8");
  const sources: Source[] = JSON.parse(sourcesJsonString);

  let githubPackages: Package[] = await GitHubRepositoriesProvider.get(sources);
  githubPackages = await NPMProvider.get(githubPackages);

  // extract tags from packages info
  const typesArray: Tags[] = [];
  const tagsArray: Types[] = [];
  for (const packageContent of githubPackages) {
    
    for (const type of packageContent["ui5-community"].types) {
      const typeExists: Types = typesArray.find(typeObj => typeObj.name === type);
      if (!typeExists) {
        const typeObj: Types = {
          name: type,
          count: 1
        };
        typesArray.push(typeObj);
      } else {
        typeExists.count += 1;
      }
    }
    for (const tag of packageContent["ui5-community"].tags) {
      const tagExists: Tags = tagsArray.find(tagObj => tagObj.name === tag);
      if (!tagExists) {
        const tagObj: Types = {
          name: tag,
          count: 1
        };
        tagsArray.push(tagObj);
      } else {
        tagExists.count += 1;
      }
    }
  }

  dataJson.packages = githubPackages;
  dataJson.types = typesArray;
  // for now combine them
  dataJson.tags = tagsArray.concat(typesArray);


  writeFileSync(`${__dirname}/../../ui/src/model/data.json`, JSON.stringify(dataJson));

})();
