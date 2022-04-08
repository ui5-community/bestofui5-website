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
    githublink: string;
    npmlink: string;
    downloads: number;
    "ui5-community": UI5Community;
}

export interface Tags {
    name: string;
}export interface Types {
    name: string;
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
    subpackages: string[];

}

export interface DataJson {
    packages: Package[];
    types: Type[];
    tags: Tags[];
}
