"use strict";

describe("ui5 query sort", () => {
  before(async () => {
    await browser.goTo({
      sHash: "#/packages?sort=createdAt&order=asc"
    });
  });
  it("sort from url query hash", async () => {
    try {
      await $("#__component0---AllPackages--listAllPackages-listUl li").waitForExist({
        timeout: 5000
      });
    } catch (error) {}
    const list = await $$("#__component0---AllPackages--listAllPackages-listUl li");
    const firstItem = await list[0];
    const firstItemh3 = await firstItem.$("h3");
    const firstItemText = await firstItemh3.getText();
    expect(firstItemText).toEqual("openui5-sample-app");
  });
});
//# sourceMappingURL=querySort.test.js.map