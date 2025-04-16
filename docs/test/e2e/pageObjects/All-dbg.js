"use strict";

const Page = require("./Page");
class All extends Page {
  async open() {
    await super.open(`#/packages`);
  }
  _viewName = "org.openui5.bestofui5.view.AllPackages";
  async getList() {
    const cbSelector2 = {
      selector: {
        interaction: "root",
        id: "listAllPackages",
        viewName: this._viewName,
        controlType: "sap.m.List"
      }
    };
    return await browser.asControl(cbSelector2);
  }
  async getMultiComboBox() {
    const cbSelector2 = {
      forceSelect: true,
      selector: {
        interaction: "root",
        id: "multiComboBox",
        viewName: this._viewName
      }
    };
    return await browser.asControl(cbSelector2);
  }
  async getMultiComboBoxFocus() {
    const cbSelector2 = {
      forceSelect: true,
      selector: {
        interaction: "root",
        id: "multiComboBox",
        viewName: this._viewName
      }
    };
    return await browser.asControl(cbSelector2);
  }
  async getSortSelect() {
    const cbSelector2 = {
      selector: {
        id: "selectSort",
        viewName: this._viewName,
        controlType: "sap.m.Select"
      }
    };
    return await browser.asControl(cbSelector2);
  }
  async getPopup() {
    const cbSelector2 = {
      selector: {
        id: "multiComboBox-popup",
        viewName: this._viewName,
        controlType: "sap.m.Popover"
      }
    };
    return await browser.asControl(cbSelector2);
  }
  async getItemById() {
    const cbSelector2 = {
      selector: {
        id: "__item15",
        viewName: this._viewName
      }
    };
    return await browser.asControl(cbSelector2);
  }
}
module.exports = new All();
//# sourceMappingURL=All.js.map