"use strict";

const All = require("./pageObjects/All");
const Main = require("./pageObjects/Main");
describe("ui5 search", () => {
  before(async () => {
    await All.open();
  });
  it("search should return wdi5 as first result", async () => {
    // get search field
    const multiInput = await Main.getMultiInput();
    // get list
    const list = await All.getList();
    // enter search value
    await multiInput.enterText("wdio-ui5-service");
    // get list items aggregation
    const listItems = await list.getAggregation("items");
    // get first item
    const listItem = await listItems[0];
    // get web element
    const webElement = await listItem.getWebElement();
    // get text from h3 title
    const innerText = await webElement.$("h3").getText();
    // check if text is equal to wdio-ui5-service
    expect(innerText).toEqual("wdio-ui5-service");
  });
  it("search should return only two results", async () => {
    // get list
    const list = await All.getList();
    // get list items aggregation
    const listItems = await list.getAggregation("items");

    // check if text is equal to wdio-ui5-service
    expect(listItems.length).toEqual(2);
  });
});
//# sourceMappingURL=search.test.js.map