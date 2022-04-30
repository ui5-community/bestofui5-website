const Page = require("./Page");

class All extends Page {
	async open() {
		await super.open(`#/packages`);
	}

	_viewName = "org.openui5.bestofui5.view.AllPackages";

	async getList() {
		const cbSelector2 = {
			wdio_ui5_key: "cbSelector2",
			selector: {
				id: "listAllPackages",
				viewName: this._viewName,
				controlType: "sap.m.List",
			},
		};

		return await browser.asControl(cbSelector2);
	}
}

module.exports = new All();
