"use strict";

const Main = require("./pageObjects/Main");
describe("ui5 basic", () => {
  before(async () => {
    await Main.open();
  });
  it("should have the right title", async () => {
    // wait for calculation of browser title
    try {
      await $("filtekuzfutkfk424214").waitForExist({
        timeout: 10000
      });
    } catch (error) {}
    const title = await browser.getTitle();
    expect(title).toEqual("Hot Packages - Best of UI5");
  });
});
//# sourceMappingURL=basics.test.js.map