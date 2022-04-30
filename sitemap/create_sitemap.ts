#!/usr/bin/env ts-node-script
import * as fs from "fs";
import { SitemapStream } from "sitemap";
import fetch from "node-fetch";

async function buildSitemap() {
	// Creates a sitemap object given the input configuration with URLs
	const sitemap = new SitemapStream({ hostname: "https://bestofui5.org" });

	const res = await fetch("https://raw.githubusercontent.com/ui5-community/bestofui5-data/live-data/data/data.json");
	const data = await res.json();

	const writeStream = fs.createWriteStream("./docs/sitemap.xml");
	sitemap.pipe(writeStream);

	sitemap.write({ url: "/#/packages" });
	sitemap.write({ url: "/#/tags" });
	sitemap.write({ url: "/#/timeline" });
	for (const item of data.packages) {
		sitemap.write({ url: `/#/packages/${item.name}` });
	}
	sitemap.end();
}
void buildSitemap();
