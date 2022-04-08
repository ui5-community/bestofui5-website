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
      if (!typesArray.find((tag) => tag.name === type)) {
        const tags: Tags = {
          name: "",
        };
        tags.name = type;
        typesArray.push(tags);
      }
    }
    for (const tag of packageContent["ui5-community"].tags) {
      if (!tagsArray.find((tagArray) => tagArray.name === tag)) {
        const tags: Tags = {
          name: "",
        };
        tags.name = tag;
        tagsArray.push(tags);
      }
    }
  }

  dataJson.packages = githubPackages;
  dataJson.types = typesArray;
  // for now combine them
  dataJson.tags = tagsArray.concat(typesArray);


  writeFileSync(`${__dirname}/../../ui/src/model/data.json`, JSON.stringify(dataJson));

})();
