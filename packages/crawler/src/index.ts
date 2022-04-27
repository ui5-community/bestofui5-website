/* eslint-disable @typescript-eslint/no-floating-promises */
// require("dotenv").config();
import { readFileSync, writeFileSync } from "fs";

import GitHubRepositoriesProvider from "./gh-repos";
import NPMProvider from "./npm";
import { IPackage, Source, Tags, DataJson } from "./types";

// TEST

(async () => {
	const dataJson: DataJson = {
		packages: [],
		tags: [],
	};

	const sourcesJsonString = readFileSync(`${__dirname}/../sources.json`, "utf8");
	const sources: Source[] = JSON.parse(sourcesJsonString);

	let githubPackages: IPackage[] = await GitHubRepositoriesProvider.get(sources);
	githubPackages = await NPMProvider.get(githubPackages);

	// extract tags from packages info
	const typesArray: Tags[] = [];
	const tagsArray: Tags[] = [];
	const versionsArray: any[] = [];
	for (const packageContent of githubPackages) {
		const typeExists: Tags = typesArray.find((typeObj) => typeObj.name === packageContent.type);
		if (!typeExists) {
			const typeObj: Tags = {
				name: packageContent.type,
				count: 1,
				type: "type",
			};
			typesArray.push(typeObj);
		} else {
			typeExists.count += 1;
		}
		for (const tag of packageContent.tags) {
			const tagExists: Tags = tagsArray.find((tagObj) => tagObj.name === tag);
			if (!tagExists) {
				const tagObj: Tags = {
					name: tag,
					count: 1,
					type: "tag",
				};
				tagsArray.push(tagObj);
			} else {
				tagExists.count += 1;
			}
		}
		// create verions array
		if (packageContent.versions) {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			for (const [key, value] of Object.entries(packageContent.versions)) {
				if (key !== "created" && key !== "modified") {
					const versionObject = {
						name: packageContent.name,
						version: key,
						date: value,
					};
					versionsArray.push(versionObject);
				}
			}
		}
	}

	dataJson.packages = githubPackages;
	dataJson.tags = typesArray.concat(tagsArray);

	writeFileSync(`${__dirname}/../../ui/src/model/data.json`, JSON.stringify(dataJson));
	writeFileSync(`${__dirname}/../../ui/src/model/versions.json`, JSON.stringify(versionsArray));
})();
