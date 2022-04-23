---
name: "\U0001F680 Add new package"
about: Add your new package to the website
---

# Add new NPM Package

Please make sure you meet these requirements first:

## Prerequisites

- [ ] Add link to your GitHub Repo in `package.json` ([example](https://github.com/ui5-community/ui5-ecosystem-showcase/blob/054d9a6ae2836fdcdef076af765b2cc292082cbd/packages/ui5-tooling-modules/package.json#L7-L11))
- [ ] Add a license to your project.
- [ ] Add Author to your `package.json` ([example](https://github.com/ui5-community/ui5-ecosystem-showcase/blob/054d9a6ae2836fdcdef076af765b2cc292082cbd/packages/ui5-tooling-modules/package.json#L5)).
- [ ] NPM module published with current version.
- [ ] `ui5.yaml` file present ([example](https://github.com/ui5-community/ui5-ecosystem-showcase/blob/main/packages/ui5-middleware-livereload/ui5.yaml))

## Pull Request

After checking the prerequisites, you can create a pull request, to edit [`source.json`](https://github.com/ui5-community/bestofui5-website/blob/main/packages/crawler/sources.json) with the following content:

For example, if you want to add the module `https://github.com/ui5-community/ui5-cc-md`, your commit would look like this:

```json
{
  "owner": "ui5-community",
  "repo": "ui5-cc-md",
  "addedToBoUI5": "2022-04-09T11:37:57.868Z",
  "type": "tooling",
  "tags": ["markdown"]
}
```

**owner:** is the organization or your username

**repo:** is the repo name

**addedToBoUI5:** is a timestamp with the current date

**type:** is the type of the module, please choose on of the types in the enum [BoUI5Types](https://github.com/ui5-community/bestofui5-website/blob/17eac7bc6f4f39b2b085395df3485be64bb0a864/packages/crawler/src/types.d.ts#L1)

**tags:** Here you can name relevant tags for your module, as inspiration, which are already used you can find [here](https://bestofui5-website/#/tags)
