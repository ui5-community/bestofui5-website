enum BoUI5Types {
	task = "task",
	middleware = "middleware",
	tooling = "tooling",
	customControl = "customControl",
	module = "module",
	generator = "generator",
}

export interface Ranking {
	id: string;
	name: string;
	description: string;
	link: string;
	tags: string[];
	score: number;
	rank: number;
	pastRank?: number;
	updatedAt: string;
	createdAt?: string;
	type: string;
}

export interface TrendsFile {
	overall: Ranking[];
	recentlyUpdated: Ranking[];
	newlyAdded: Ranking[];
}

export interface IPackage {
	name: string;
	description: string;
	author: string;
	license: string;
	main?: string;
	jsdoc?: any;
	type: string;
	tags: string[];
	readme: string;
	forks: number;
	stars: number;
	updatedAt: string;
	createdAt: string;
	addedToBoUI5: string;
	githublink: string;
	npmlink: string;
	downloads365: number;
	downloadsCurrentMonth: number;
	downloadsCurrentFortnight: number;
	downloadsFortnightGrowth: number;
	gitHubOwner: string;
	gitHubRepo: string;
	defaultBranch: string;
	downloadsHistory?: PackageDownloadsHistory[];
	versions?: any;
}

export interface Tags {
	name: string;
	count: number;
	type: string;
}

export interface Source {
	path: string;
	owner: string;
	repo: string;
	subpath?: string;
	addedToBoUI5: string;
	subpackages?: SubPackage[];
	type: BoUI5Types;
	tags: string[];
}

export interface SubPackage {
	name: string;
	addedToBoUI5: string;
	type: BoUI5Types;
	tags: string[];
}

export interface DataJson {
	packages: IPackage[];
	tags: Tags[];
}

export interface Jsdoc {
	middleware?: JsdocType;
	task?: JsdocType;
}

export interface JsdocType {
	markdown: string;
	params: Params[];
}

export interface Params {
	type: string;
	description: string;
	name: string;
	optional: boolean;
}

export interface UI5Yaml {
	specVersion: string;
	kind: string;
	type: string;
	metadata: {
		name: string;
	};
	middleware?: {
		path: string;
	};
	task?: {
		path: string;
	};
}

export interface NPMDownloads {
	downloads: number;
	start: string;
	end: string;
	package: string;
}

export interface PackageDownloadsHistory {
	yearMonth: string;
	downloads: number;
}
export interface NPMDownloadsHistory {
	downloads: NPMDownloadsHistoryDownloads[];
	start: string;
	end: string;
	package: string;
}

export interface NPMDownloadsHistoryDownloads {
	downloads: number;
	day: string;
}
