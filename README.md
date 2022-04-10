# ui5community

"Best of UI5" is the new entry page for the ui5-community.  
It will show the best of community projects, be it applications, libraries, custom controls, tooling extensions, middlewares, tasks or Easy UI5 generators.  
Everyone can be able to register their projects at Best of UI5.  
The projects will be ranked by various information about the projects and filterable by important criteria.  
This should help to find you the best suited reuse project for your development needs!  

## Add your package

Just create a [issue with this template](https://github.com/ui5-community/ui5-community.github.io/issues/new?assignees=&labels=new%20package&template=new_package.md&title=Add%20new%20package:) with your package and just check if you meet the prerequisites

## Views

### Hot Packages

Overview of the most popular packages.  
The packages are sorted by the growth of downloads in the last 30 days.

### All Packages

You can here search/filter/sort the packages.  
Each packages has metadata added what type it is and what tags are associated with it.  
Most data is coming from GitHub and NPM.

### Tags

Here are all types and tags list that are used in the packages.  
If you click on a tag, you will see all the packages that have this tag.

### Object View

You can click on any package to get more information about it.  
If there is a readme available, it will be displayed.

# Technical

## Frontend

The frontend is generated with the [UI5-TS-App Generator](https://github.com/ui5-community/generator-ui5-ts-app).
In the folder `packages/ui` is the source code in Typescript.

### Build & Deployment

Build is automated with GitHub Actions.  
On every push to `main`, the [`build`](https://github.com/ui5-community/ui5-community.github.io/blob/main/.github/workflows/build.yml) workflow is triggered.  
This will transpile typescript to javascript and will also run `ui5 build self-contained --all`.  
The result will be moved to the new folder `docs` and force pushed to the `docs` branch.  
From there, GitHub Pages will automatically deploy the new version to the webpage <https://ui5-community.github.io/> .

## Backend

We crawl data from GitHub and NPM.  
The source code is written in typescript and in folder `packages/crawler`.
It creates a json file which will be used as a model in the UI5 App.  
The file is located at `packages/ui/src/model/data.json`.  
The packages are crawled from are located in `crawler/sources.json`.

## Requirements

Either [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for dependency management.

## Run local

git clone:
`git clone https://github.com/ui5-community/ui5-community.github.io`

Install `yarn`:
`> npm install yarn --global`

Install all modules:
`> yarn`

Run crawler to fetch current data:
`>  yarn workspace crawler fetch`

Start UI5 App:
`> yarn workspace ui start`

## Changelog

View the [Changelog here](CHANGELOG.md)

## License

This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSE) file.
