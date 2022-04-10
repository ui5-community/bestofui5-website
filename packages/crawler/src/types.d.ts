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

export interface Package {
    name: string;
    description: string;
    author: string;
    license: string;
    type: string;
    readme: string;
    forks: number;
    stars: number;
    updatedAt: string;
    createdAt: string;
    addedToBoUI5: string;
    githublink: string;
    npmlink: string;
    downloads365: number;
    downloads30: number;
    "ui5-community": UI5Community;
}

export interface Tags {
    name: string;
    count: number;
    type: string;
}

export interface UI5Community {
    types: string[];
    tags: string[];
}

export interface Source {
    path: string;
    owner: string;
    repo:   string;
    subpath: string;
    addedToBoUI5: string;
    subpackages: SubPackage[];
}

export interface SubPackage {
    name: string;
    addedToBoUI5: string;
}

export interface DataJson {
    packages: Package[];
    types: Type[];
    tags: Tags[];
}
