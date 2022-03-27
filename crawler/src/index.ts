// require("dotenv").config();
// import { readFileSync, writeFileSync } from "fs";

import GitHubRepositoriesProvider from "./gh-repos";
import { Artifact, Package } from "./types";

(async () => {
  // get current month data
  let currentTrendsJson: any = {};
  // let currentAllItemsJson: any = {};
  // try {
  //   const filecontentTrends = readFileSync(`${__dirname}/../../frontend/trends/webapp/model/trends.json`, "utf8");
  //   currentTrendsJson = JSON.parse(filecontentTrends);
  // } catch (e) {
  //   if (e.code !== "ENOENT") {
  //       throw e;
  //     }
  // }
  // try {
  //   const filecontentAllItems = readFileSync(`${__dirname}/../../frontend/trends/webapp/model/allItems.json`, "utf8");
  //   currentAllItemsJson = JSON.parse(filecontentAllItems);
  // } catch (e) {
  //   if (e.code !== "ENOENT") {
  //     throw e;
  //   }
  // }

  // update only github an npm
  const Providers = [GitHubRepositoriesProvider];

  const artifacts = await Promise.all(
    Providers.map(async (provider) => {
      // console.log(`Start provider '${provider.name}'.`);
      const items: Package[] = await provider.get(currentTrendsJson);
      // console.log(`Provider '${provider.name}' returned ${items.length} items.`);
      return items;
    })
  );

})();
