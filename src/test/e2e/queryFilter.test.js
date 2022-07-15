describe("ui5 filter", () => {
	before(async () => {
		await browser.goTo({ sHash: "#/packages?tokens=task:type" });
	});

	it("filter from url query hash", async () => {
		try {
			await $("filtekuzfutkfk424214").waitForExist({ timeout: 1000 });
		} catch (error) {}
		const firstItemInfolabelType = await $("#__component0---AllPackages--trend-item-type-__clone19");
		const firstItemInfolabelTypeSpan = await firstItemInfolabelType.$(".sapTntInfoLabelText");
		const infolabelInnerText = await firstItemInfolabelTypeSpan.getText();

		expect(infolabelInnerText).toEqual("TASK");
	});

	// it("sort from url query hash", async () => {
	// 	await browser.goTo({ sHash: "#/packages?sort=addedToBoUI5" });
	// 	// get type infolabel
	// 	// const firstItemTitle = await browser.asControl({
	// 	// 	selector: {
	// 	// 		viewName: "org.openui5.bestofui5.view.AllPackages",
	// 	// 		id: "__title0-__clone0-inner",
	// 	// 	},
	// 	// });
	// 	const firstItemTitle = await $("#__title0-__clone0-inner");
	// 	const textInnerText = await firstItemTitle.getText();

	// 	expect(textInnerText).toEqual("create-wdi5");
	// });
});
