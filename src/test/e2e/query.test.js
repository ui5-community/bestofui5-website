const All = require("./pageObjects/All");

describe("ui5 filter", () => {
	before(async () => {
		await browser.goTo({ sHash: "#/packages?tokens=task:type" });
	});

	it("filter from url query hash", async () => {
		// get type infolabel
		const firstItemInfolabelType = await browser.asControl({
			selector: {
				viewName: "org.openui5.bestofui5.view.AllPackages",
				id: "__component0---AllPackages--trend-item-type-__clone11",
			},
		});
		const infolabelInnerText = await firstItemInfolabelType.getText();

		expect(infolabelInnerText).toEqual("task");
	});
});
