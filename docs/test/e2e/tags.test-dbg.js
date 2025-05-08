"use strict";

const Tags = require("./pageObjects/Tags");
describe("ui5 tags", () => {
  before(async () => {
    await Tags.open();
  });
  it("filter from tags view should return only type task", async () => {
    try {
      await $("filtekuzfutkfk424214").waitForExist({
        timeout: 1000
      });
    } catch (error) {}
    const listTags = await Tags.getList();
    const itemsTags = await listTags.getAggregation("items");
    const item2 = await itemsTags[2];
    await item2.press(); // press the second item `task`
    try {
      await $("#__component0---AllPackages--trend-item-type-__clone0").waitForExist({
        timeout: 2000
      });
    } catch (error) {}
    // get type infolabel
    const firstItemInfolabelType = await $("[id^=__component0---AllPackages--_IDGenCustomListItem1-__]");
    const firstItemInfolabelTypeSpan = await firstItemInfolabelType.$(".sapTntInfoLabelText");
    const infolabelInnerText = await firstItemInfolabelTypeSpan.getText();
    expect(infolabelInnerText).toEqual("TASK");
  });
});
//# sourceMappingURL=tags.test.js.map