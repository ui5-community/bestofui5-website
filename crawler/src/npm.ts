import { Artifact, Package, Type, Source, DataJson } from "./types";
// import { getPackageManifest, searchPackages } from "query-registry";
import axios from "axios";
// import { getFirstDayOfMonth, getLastDayOfMonth } from "../helper";
// import removeMarkdown from "markdown-to-text";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// could use bulk API if needed, but no support for scoped packages
// 2021-07-01:2021-07-31/express,generator-easy-ui5
async function getMonthlyDownloads(packageName: string): Promise<number | null> {
  try {
    const res = await axios(`https://api.npmjs.org/downloads/point/last-month/${packageName}`);
    if (res.data.package === packageName && res.data.downloads > -1) {
      return res.data.downloads;
    }
    throw `Invalid reponse from npm-stat.com ${packageName}.`;
  } catch (err: any) {
    if (err?.response?.status === 404) {
      return 0; //return 0 for packages that were just added and don't have downloads yet
    }
    if (err?.response?.status === 429) {
      throw "Too Many Requests";
    }
    // console.error(`Error reponse from npm-stat.com ${packageName} https://api.npmjs.org/downloads/point/${start}:${end}/${packageName}}.`)
    console.error(err);
    return null;
  }
}

async function getMetaData(packageName: string): Promise<any | null> {
  try {
    const res = await axios(`https://registry.npmjs.org/${packageName}`);
    return res;
  } catch (err: any) {
    if (err?.response?.status === 404) {
      throw `Package ${packageName} not found.`;
    }
    if (err?.response?.status === 429) {
      throw "Too Many Requests";
    }
    // console.error(`Error reponse from npm-stat.com ${packageName} https://api.npmjs.org/downloads/point/${start}:${end}/${packageName}}.`)
    console.error(err);
    return null;
  }
}

export default class NpmProvider {
  static async get(packages: Package[]): Promise<Package[]> {
    for (const { idx, source } of packages.map((source, idx) => ({ idx, source }))) {
      await sleep(Math.floor(idx / 20) * 1000);

      const { name } = source;
      try {
        const downloads = await getMonthlyDownloads(name);
        if (downloads > 0) {
            source.downloads = downloads;
          }
      } catch (error) {
        console.error(`Error fetching npm downloads for ${source.name}`);
      }
      try {
        const metaData = await getMetaData(name);
        source.createdAt = metaData?.data?.time?.created;
        source.updatedAt = metaData?.data?.time?.modified;
        source.npmlink = `https://www.npmjs.com/package/${name}`;
      } catch (error) {
        console.error(`Error fetching npm metadata for ${source.name}`);
      }

    }
    return packages;
  }
}
