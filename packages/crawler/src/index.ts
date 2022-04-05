// require("dotenv").config();
import { readFileSync, writeFileSync } from "fs";

import GitHubRepositoriesProvider from "./gh-repos";
import NPMProvider from "./npm";
import { Artifact, Package, Source, Type, DataJson } from "./types";

(async () => {
  let dataJson: DataJson = {
    types: [],
    packages: [],
  };

  const sourcesJsonString = readFileSync(`${__dirname}/../sources.json`, "utf8");
  let sources: Source[] = JSON.parse(sourcesJsonString);

  let githubPackages: Package[] = await GitHubRepositoriesProvider.get(sources);
  githubPackages = await NPMProvider.get(githubPackages);

  // extract type from packages info
  let typesArray: Type[] = [];
  for (const packageContent of githubPackages) {
    let type: Type = {
      name: packageContent.type,
    };
    if (!typesArray.find((type) => type.name === packageContent.type)) {
      typesArray.push(type);
    }
  }

  dataJson.packages = githubPackages;
  dataJson.types = typesArray;

  writeFileSync(`${__dirname}/../../ui/src/model/data.json`, JSON.stringify(dataJson));

})();
