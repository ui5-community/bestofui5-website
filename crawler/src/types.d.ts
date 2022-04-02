export interface Artifact {
    id: string;
    name: string;
    description: string;
    link: string;
    aggregatedCount: number;
    currentCount: number;
    updatedAt: string;
    createdAt?: string;
    type: string;
    tags: string[];
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
    link: string;
}

export interface Type {
    name: string;
}

export interface Sources {
    path: string;
    owner: string;
    repo:   string;
    subpath: string;
    subpackages: string[];

}

export interface DataJson {
    packages: Package[];
    types: Type[];
}
