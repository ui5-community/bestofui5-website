# ui5community

This website shows the best packages related to UI5.

## Frontend

The frontend is generated with the [UI5-TS-App Generator](https://github.com/ui5-community/generator-ui5-ts-app).
In the folder `uimodule` is the source code in Typescript.

### Build & Deployment

Build is automated with GitHub Actions.  
On every push to `main`, the [`build`](https://github.com/ui5-community/ui5-community.github.io/blob/main/.github/workflows/build.yml) workflow is triggered.  
This will transpile typescript to javascript and will also run `ui5 build self-contained --all`.  
The result will be moved to the new folder `docs` and force pushed to the `docs` branch.  
From there, GitHub Pages will automatically deploy the new version to the webpage <https://ui5-community.github.io/> .

## Backend

We crawl data from GitHub and NPM.  
The source code is written in typescript and in folder `crawler`.
It creates a json file which will be used as a model in the UI5 App.
The packages are crawled from are located in `crawler/sources.json`.

## Requirements

Either [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for dependency management.

## License

This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSE) file.
