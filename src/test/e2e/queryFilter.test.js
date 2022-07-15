describe("ui5 query filter", () => {
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
});
