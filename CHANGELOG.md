# Change Log

All notable changes to this project will be documented in this file.

# 2022-04-02

## Frontend

### Features

* **theme:** set darkmode depending on oss settings #40 ([7ed35b0](https://github.com/ui5-community/ui5-community.github.io/commit/7ed35b0ed4c0490e5b37a7ccfce6b339bf4d10c8))
* **list:** show metadata and link from npm on list items #44 ([3b27060](https://github.com/ui5-community/ui5-community.github.io/commit/3b270607d3c86f324186dc3de5b76c7fab8a1048))
* **list:** sort list by npm downloads #45 ([a36230f](https://github.com/ui5-community/ui5-community.github.io/commit/a36230f5b751ba14a45d10471a6dd5b06b7a3b4c))

### Bug Fixes

* **controller:** fix bug introduced in #45, #46 ([7449072](https://github.com/ui5-community/ui5-community.github.io/commit/74490727c784e4a313a1c3e686b0abc89c9ada0b))

## Crawler

### Features

* **sources:**  change sources.json to specify the subpackages in monorepos #42 ([515b842](https://github.com/ui5-community/ui5-community.github.io/commit/515b8428b14634fbcce4f7bc66ec131e7309b148))
* **data:**  combine data jsons into one `data.json` file for frontend #42 ([c1575b9](https://github.com/ui5-community/ui5-community.github.io/commit/c1575b9b95b9eaf2238d05e3c51a9b214c9f3294))
* **workflow:**  run build workflow every day at 6 UTC #43 ([132a347](https://github.com/ui5-community/ui5-community.github.io/commit/132a347a925f8f87014dec64fd538cc21a52ed74))
* **npm:**  read updatedAt, createdAt and downloads from npm #44 ([3b27060](https://github.com/ui5-community/ui5-community.github.io/commit/3b270607d3c86f324186dc3de5b76c7fab8a1048))

### Bug Fixes

* **github:**  refactor github crawler and remove unnecessary code #44 ([3b27060](https://github.com/ui5-community/ui5-community.github.io/commit/3b270607d3c86f324186dc3de5b76c7fab8a1048))




# 2022-03-31

## Frontend

### Bug Fixes

* **i18n:** force english language #32 ([3a5e15d](https://github.com/ui5-community/ui5-community.github.io/commit/3a5e15d260ab5f0a1af2cac86a5c77489d004ed0))

# 2022-03-30

## Frontend

### Features

* **theme:** switch to dark horizon theme #28 ([a5521a5](https://github.com/ui5-community/ui5-community.github.io/commit/a5521a518998e0bda887252e4e137ee2b64c7c2b))

## Crawler

### Features

* **crawler:**  read stars and forks from github repo #30 ([fe804db](https://github.com/ui5-community/ui5-community.github.io/commit/fe804db86386acc61591fbd77b3ac05cc4d4f6d8))

# 2022-03-27

## Frontend

### Features

* **i18n:** added default language to avoid 404s #19 ([2d632aa](https://github.com/ui5-community/ui5-community.github.io/commit/2d632aac1f5bf0ef318f71f1f4219a119cd97586))

### Bug Fixes

* **formatter:** convert formatter to typescript #20 ([f7229ae](https://github.com/ui5-community/ui5-community.github.io/commit/f7229ae89c4d669f6f4b6ffb620ab7fcf1325a7a))

## Crawler

### Features

* **workflow:** added GitHub Workflow for building frontend and deploying to GitHub Pages #15 ([13abbf0](https://github.com/ui5-community/ui5-community.github.io/commit/13abbf060ba5318b9437c2d13085fc12b3fbdd50))
* **workflow:** added Crawling Data from GitHub before building frontend #17 ([9e5e367](https://github.com/ui5-community/ui5-community.github.io/commit/9e5e36785eb31fd359a037240351afb5d43beead))
* **crawler:** create `sources.json` file with all relevant sources to crawl from #22 ([dfeea0bc](https://github.com/ui5-community/ui5-community.github.io/commit/dfeea0bc81cbc5e94892577b731ddfd016fff2a4))
* **crawler:**  read more data from github #24 ([dfeea0bc](https://github.com/ui5-community/ui5-community.github.io/commit/dfeea0bc81cbc5e94892577b731ddfd016fff2a4))

## Other

* dependencies: update dependencies to latest version #26 ([37a71ae](https://github.com/ui5-community/ui5-community.github.io/commit/37a71aec02a10f1ef8472505218811860537bc1a))

# 2022-03-27

Initial Creation ([0426442](https://github.com/ui5-community/ui5-community.github.io/commit/0426442f4344ff27c3851dae84a2b7fc0a4a4c5e))