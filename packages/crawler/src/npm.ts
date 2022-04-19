import { IPackage, NPMDownloads, NPMDownloadsHistory, NPMDownloadsHistoryDownloads, PackageDownloadsHistory } from "./types";
// import { getPackageManifest, searchPackages } from "query-registry";
import axios from "axios";
import { type } from "os";
// import removeMarkdown from "markdown-to-text";

function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// could use bulk API if needed, but no support for scoped packages
// 2021-07-01:2021-07-31/express,generator-easy-ui5
async function getDownloads(packageName: string, periode: string): Promise<number | null> {
	try {
		const res = await axios(`https://api.npmjs.org/downloads/point/${periode}/${packageName}`);
		const npmDownloads = res.data as NPMDownloads;
		if (npmDownloads.package === packageName && npmDownloads.downloads > -1) {
			return npmDownloads.downloads;
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

async function getDownloadsHistory(packageName: string, periode: string): Promise<NPMDownloadsHistory> {
	try {
		const res = await axios(`https://api.npmjs.org/downloads/range/${periode}/${packageName}`);
		const npmDownloads = res.data as NPMDownloadsHistory;
		if (npmDownloads.package === packageName && npmDownloads.downloads.length > -1) {
			return npmDownloads;
		}
		throw `Invalid reponse from npm-stat.com ${packageName}.`;
	} catch (err: any) {
		if (err?.response?.status === 404) {
			return null; //return 0 for packages that were just added and don't have downloads yet
		}
		if (err?.response?.status === 429) {
			throw "Too Many Requests";
		}
		// console.error(`Error reponse from npm-stat.com ${packageName} https://api.npmjs.org/downloads/point/${start}:${end}/${packageName}}.`)
		console.error(err);
		return null;
	}
}

async function getDownloadsBulk(bulkNamesConcat: string, periode: string): Promise<NPMDownloads[]> {
	try {
		const res = await axios(`https://api.npmjs.org/downloads/point/${periode}/${bulkNamesConcat}`);
		return res.data as NPMDownloads[];
		throw `Invalid reponse from npm-stat.com ${bulkNamesConcat}.`;
	} catch (err: any) {
		if (err?.response?.status === 404) {
			return null; //return 0 for packages that were just added and don't have downloads yet
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
		const datePeriodHistory = this.getDatesHistory();
		let downlodsPreviousFortnight = 0;
		let downlodsCurrentFortnight = 0;
		let downloadsMonth = 0;
		let downloadsYear = 0;

		const bulkDownloads: IPackage[] = packages
			.filter((p) => p.name.charAt(0) !== "@" && p.type !== "generator")
			.map((p) => {
				return p;
			});
		const bulkNamesConcat: string = bulkDownloads.map((p) => p.name).join(",");
		// maximum of 128 packages per request
		const bulkDataCurrentFortnight = await getDownloadsBulk(bulkNamesConcat, dates.currentFortnight);
		const bulkDataPreviousFortnight = await getDownloadsBulk(bulkNamesConcat, dates.lastFortnight);
		const bulkDataMonth = await getDownloadsBulk(bulkNamesConcat, "last-month");
		const bulkDataYear = await getDownloadsBulk(bulkNamesConcat, "last-year");

		for (const { idx, source } of packages.map((source, idx) => ({ idx, source }))) {
			await sleep(Math.floor(idx / 20) * 1000);
			// set values for generator because there is no npm package
			if (source.type === "generator") {
				source.downloadsCurrentMonth = -1;
				source.downloadsCurrentFortnight = -1;
				source.downloads365 = -1;
				continue;
			}
			// get downloads
			try {
				// packages with `@` are scoped packages are can not be in bulk API
				if (source.name.charAt(0) === "@") {
					downlodsPreviousFortnight = bulkDataPreviousFortnight.filter((d) => d.package === source.name)[0].downloads;
					downlodsCurrentFortnight = bulkDataCurrentFortnight.filter((d) => d.package === source.name)[0].downloads;
					downloadsMonth = bulkDataMonth.filter((d) => d.package === source.name)[0].downloads;
					downloadsYear = bulkDataYear.filter((d) => d.package === source.name)[0].downloads;
				} else {
					downlodsPreviousFortnight = await getDownloads(source.name, dates.lastFortnight);
					downlodsCurrentFortnight = await getDownloads(source.name, dates.currentFortnight);
					downloadsMonth = await getDownloads(source.name, "last-month");
					downloadsYear = await getDownloads(source.name, "last-year");
				}
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
			// get npm downloads history for each month
			try {
				const NPMDownloadsHistory = await getDownloadsHistory(source.name, datePeriodHistory);
				source.downloadsHistory = this.groupNPMDownloadsHistoryByMonth(NPMDownloadsHistory.downloads);
			} catch (error) {
				console.log(error);
			}
			// get metadata
			try {
				const metaData = await getMetaData(source.name);
				source.createdAt = metaData?.data?.time?.created;
				source.updatedAt = metaData?.data?.time?.modified;
				source.versions = metaData?.data?.time;
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

	static getDatesHistory(): string {
		// get last day of last month
		const endMonth = new Date();
		endMonth.setDate(1);
		endMonth.setMonth(endMonth.getMonth());
		endMonth.setDate(endMonth.getDate() - 1);
		// get first day of last month
		const startMonth = new Date();
		startMonth.setDate(1);
		startMonth.setMonth(startMonth.getMonth() - 11);
		return `${this.formatDate(startMonth)}:${this.formatDate(endMonth)}`;
	}

	static formatDate(date: Date): string {
		return date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2);
	}

	static groupNPMDownloadsHistoryByMonth(NPMDownloadsHistory: NPMDownloadsHistoryDownloads[]): PackageDownloadsHistory[] {
		const groupedByYearMonth: PackageDownloadsHistory[] = [];
		for (const { downloads, day } of NPMDownloadsHistory) {
			const yearMonth = day.substring(0, 7);
			const yearMonthIndex = groupedByYearMonth.findIndex((m) => m.yearMonth === yearMonth);
			if (yearMonthIndex === -1) {
				groupedByYearMonth.push({
					yearMonth: yearMonth,
					downloads: downloads,
				});
			} else {
				groupedByYearMonth[yearMonthIndex].downloads += downloads;
			}
		}
		return groupedByYearMonth;
	}
}
