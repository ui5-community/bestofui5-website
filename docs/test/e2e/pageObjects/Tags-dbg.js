"use strict";

const Page = require("./Page");
class Tags extends Page {
  async open() {
    await super.open(`#/tags`);
  }
  _viewName = "org.openui5.bestofui5.view.Tags";
  async getList() {
    const cbSelector2 = {
      selector: {
        viewName: this._viewName,
        controlType: "sap.m.List"
      }
    };
    return await browser.asControl(cbSelector2);
  }
}
module.exports = new Tags();
//# sourceMappingURL=Tags.js.map