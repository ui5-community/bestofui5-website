# Best of UI5

"Best of UI5" is the new entry page for the ui5-community.  
It will show the best of community projects, be it applications, libraries, custom controls, tooling extensions, middlewares, tasks or Easy UI5 generators.  
Everyone can be able to register their projects at Best of UI5.  
The projects will be ranked by various information about the projects and filterable by important criteria.  
This should help to find you the best suited reuse project for your development needs!

## Add your package

Just create a [issue with this template in the `bestofui5-data repo`](https://github.com/ui5-community/bestofui5-data/issues/new?assignees=marianfoo&labels=new%20package&template=new_package.md&title=Add%20new%20Package:) with your package and just check if you meet the prerequisites

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
Currently not only npm metadata is displayed, also the readme, historic npm downloads and all versions are displayed.

# Technical

## Frontend

The frontend is generated with the [UI5-TS-App Generator](https://github.com/ui5-community/generator-ui5-ts-app) and written completly in TypeScript.
In the folder `src` is the source code.

### External Dependencies

We use two external modules (`ui5-cc-md` and `chart.js`) that are integrated in two different ways.

#### `ui5-cc-md`

For each package we load the `README.md` to show it on the object page.  
To render this we use [`ui5-cc-md`](https://github.com/ui5-community/ui5-cc-md) integrated via NPM.  
To use this simply install `ui5-cc-md` and add `ui5-cc-md` to your `package.json` at ["ui5"-->"dependencies"](https://github.com/ui5-community/bestofui5-website/blob/5a33b4b710d8143f1d07195bba9ca28696871995/package.json#L77-L82).  
Now we can use simply use this in the [`Object.view.xml`](https://github.com/ui5-community/bestofui5-website/blob/5a33b4b710d8143f1d07195bba9ca28696871995/src/view/Object.view.xml#L94) to render the markdown.

#### `chart.js`

We also get the historical download data from all npm packages.  
To display this data we use [`chart.js`](https://www.npmjs.com/package/chart.js) in the in the `Object.view.xml`.  
To use this library install via NPM [`ui5-tooling-modules`](https://www.npmjs.com/package/ui5-tooling-modules) and `chart.js`.  
As template to integrate `chart.js` we use almost the same implementation from [@akudev](https://github.com/akudev) in this tutorial:
[ui5-typescript-tutorial - Using NPM Packages](https://github.com/SAP-samples/ui5-typescript-tutorial/tree/main/exercises/ex8)  
For a better usage we create a [custom control](https://github.com/ui5-community/bestofui5-website/blob/main/src/control/BarChart.ts) to use a bar chart.
Now we can use this chart in the [`Object.view.xml#L61-L63`](https://github.com/ui5-community/bestofui5-website/blob/5a33b4b710d8143f1d07195bba9ca28696871995/src/view/Object.view.xml#L83-L85) to display the data.

### UI5 Web Components

Even though the [UI5 Web Components](https://sap.github.io/ui5-webcomponents/) were originally intended for use outside of the UI5 framework, the components are now integrated into the OpenUI5 framework.  
They will replace the standard controls in the long run and therefore it makes sense to use them already.  
As a use case, we wanted to display the individual released versions of the NPM packages sorted by date.  
In [SAPUI5 there is a timeline](https://ui5.sap.com/#/api/sap.suite.ui.commons.Timeline) for this, but unfortunately not in OpenUI5, however in the [UI5 web components](https://sap.github.io/ui5-webcomponents/playground/components/Timeline/) there is.  
To use the UI5 web components, [@petermuessig](https://github.com/petermuessig) has already written a [detailed blog](https://blogs.sap.com/2022/03/10/ui5-web-components-enablement-for-openui5-sapui5/) about it.  
Through direct integration with OpenUI5 the use is as simple as any other control [`Timeline.view.xml#L18-L37`](https://github.com/ui5-community/bestofui5-website/blob/5a33b4b710d8143f1d07195bba9ca28696871995/src/view/Timeline.view.xml#L18-L37)

### Build & Deployment

Build is automated with GitHub Actions.  
On every push to `main`, the [`build`](https://github.com/ui5-community/bestofui5-website/blob/main/.github/workflows/build.yml) workflow is triggered.  
This will transpile typescript to javascript and run `ui5 build self-contained --all`.  
The result will be moved to the new folder [`docs`](https://github.com/ui5-community/bestofui5-website/tree/docs) and force pushed to the `docs` branch.  
From there, GitHub Pages will automatically deploy the new version to the webpage <https://bestofui5.org/> .

### Testing

We run [`wdi5`](https://github.com/js-soft/wdi5) tests on every Pull Request.  
The tests are located in the [`test`](https://github.com/ui5-community/bestofui5-website/tree/main/src/test) folder.

## Backend

**The backend is located in a seperate repository [`bestofui5-data`](https://github.com/ui5-community/bestofui5-data).**

We crawl data from GitHub and NPM.  
The source code is written in typescript and in folder [`src`](https://github.com/ui5-community/bestofui5-data/tree/main/src).
It creates two json files (`data`, `versions`) which will be used as a model in the UI5 App.  
The latest update of the files are located in the [`data`](https://github.com/ui5-community/bestofui5-data/tree/live-data/data) folder on the `live-data` branch. 
The frontend is using these raw files [directly from the branch](https://github.com/ui5-community/bestofui5-website/blob/5a33b4b710d8143f1d07195bba9ca28696871995/src/manifest.json#L17-L27).  
The packages are crawled from are located in [`sources.json`](https://github.com/ui5-community/bestofui5-data/blob/main/sources.json).

## Requirements

Either [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for dependency management.

## Run local

git clone:
`> git clone https://github.com/ui5-community/bestofui5-website`

Install:
`> npm install`

Start UI5 App:
`> npm start`

## Changelog

View the [Changelog here](CHANGELOG.md)

## License

This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSE) file.
