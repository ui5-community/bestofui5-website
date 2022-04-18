import { IPackage } from "./types";
// import { getPackageManifest, searchPackages } from "query-registry";
import axios from "axios";
// import removeMarkdown from "markdown-to-text";

function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// could use bulk API if needed, but no support for scoped packages
// 2021-07-01:2021-07-31/express,generator-easy-ui5
async function getDownloads(packageName: string, periode: string): Promise<number | null> {
	try {
		const res = await axios(`https://api.npmjs.org/downloads/point/${periode}/${packageName}`);
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
	static async get(packages: IPackage[]): Promise<IPackage[]> {
		const dates = this.getDates();
		for (const { idx, source } of packages.map((source, idx) => ({ idx, source }))) {
			await sleep(Math.floor(idx / 20) * 1000);
			if (source.type === "generator") {
				source.downloadsCurrentMonth = -1;
				source.downloadsCurrentFortnight = -1;
				source.downloads365 = -1;
				continue;
			}

			try {
				const downlodsPreviousFortnight = await getDownloads(source.name, dates.lastFortnight);
				const downlodsCurrentFortnight = await getDownloads(source.name, dates.currentFortnight);
				const downloadsMonth = await getDownloads(source.name, "last-month");
				const downloadsYear = await getDownloads(source.name, "last-year");
				source.downloadsCurrentMonth = downloadsMonth > 0 ? downloadsMonth : 0;
				source.downloadsCurrentFortnight = downlodsCurrentFortnight > 0 ? downlodsCurrentFortnight : 0;
				source.downloads365 = downloadsYear > 0 ? downloadsYear : 0;
				try {
					source.downloadsFortnightGrowth = Math.round(((downlodsCurrentFortnight / downlodsPreviousFortnight) * 100 - 100) * 100) / 100;
				} catch (error) {
					console.log("Error calculating growth", error);
				}
			} catch (error) {
				console.error(`Error fetching npm downloads for ${source.name}`);
				continue;
			}
			try {
				const metaData = await getMetaData(source.name);
				source.createdAt = metaData?.data?.time?.created;
				source.updatedAt = metaData?.data?.time?.modified;
				source.npmlink = `https://www.npmjs.com/package/${source.name}`;
			} catch (error) {
				console.error(`Error fetching npm metadata for ${source.name}`);
			}
		}
		return packages;
	}

	static getDates() {
		const currentFortnightEnd = new Date();
		currentFortnightEnd.setDate(currentFortnightEnd.getDate() - 1);
		const currentFortnightStart = new Date();
		currentFortnightStart.setDate(currentFortnightStart.getDate() - 15);
		const lastFortnightEnd = new Date();
		lastFortnightEnd.setDate(lastFortnightEnd.getDate() - 16);
		const lastFortnightStart = new Date();
		lastFortnightStart.setDate(lastFortnightStart.getDate() - 30);
		return {
			currentFortnight: `${this.formatDate(currentFortnightStart)}:${this.formatDate(currentFortnightEnd)}`,
			lastFortnight: `${this.formatDate(lastFortnightStart)}:${this.formatDate(lastFortnightEnd)}`,
		};
	}

	static formatDate(date: Date): string {
		return date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2);
	}
}
