// require("dotenv").config();
import { readFileSync, writeFileSync } from "fs";

import GitHubRepositoriesProvider from "./gh-repos";
import NPMProvider from "./npm";
import { Package, Source, Tags, DataJson } from "./types";

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
  const tagsArray: Tags[] = [];
  for (const packageContent of githubPackages) {
    
      const typeExists: Tags = typesArray.find(typeObj => typeObj.name === packageContent.type);
      if (!typeExists) {
        const typeObj: Tags = {
          name: packageContent.type,
          count: 1,
          type: "type"
        };
        typesArray.push(typeObj);
      } else {
        typeExists.count += 1;
      }
    for (const tag of packageContent.tags) {
      const tagExists: Tags = tagsArray.find(tagObj => tagObj.name === tag);
      if (!tagExists) {
        const tagObj: Tags = {
          name: tag,
          count: 1,
          type: "tag"
        };
        tagsArray.push(tagObj);
      } else {
        tagExists.count += 1;
      }
    }
  }

  dataJson.packages = githubPackages;
  dataJson.tags = typesArray.concat(tagsArray);


  writeFileSync(`${__dirname}/../../ui/src/model/data.json`, JSON.stringify(dataJson));

})();
