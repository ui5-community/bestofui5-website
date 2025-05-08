"use strict";

const Page = require("./Page");
class Main extends Page {
  async open() {
    await super.open(`#`);
  }
  _viewName = "org.openui5.bestofui5.view.App";
  async getMultiInput() {
    const cbSelector1 = {
      wdio_ui5_key: "cbSelector1",
      selector: {
        id: "multiInput",
        viewName: this._viewName,
        controlType: "sap.m.Input"
      }
    };
    return await browser.asControl(cbSelector1);
  }
}
module.exports = new Main();
//# sourceMappingURL=Main.js.map