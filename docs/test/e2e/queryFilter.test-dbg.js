"use strict";

describe("ui5 query filter", () => {
  before(async () => {
    await browser.goTo({
      sHash: "#/packages?tokens=task:type"
    });
  });
  it("filter from url query hash", async () => {
    try {
      await $("filtekuzfutkfk424214").waitForExist({
        timeout: 1000
      });
    } catch (error) {}
    const firstItemInfolabelType = await $("[id^=__component0---AllPackages--_IDGenCustomListItem1-__]");
    const firstItemInfolabelTypeSpan = await firstItemInfolabelType.$(".sapTntInfoLabelText");
    const infolabelInnerText = await firstItemInfolabelTypeSpan.getText();
    expect(infolabelInnerText).toEqual("TASK");
  });
});
//# sourceMappingURL=queryFilter.test.js.map