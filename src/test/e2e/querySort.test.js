describe("ui5 filter", () => {
	before(async () => {
		await browser.goTo({ sHash: "#/packages?sort=addedToBoUI5" });
	});

	it("sort from url query hash", async () => {
		try {
			await $("filtekuzfutkfk424214").waitForExist({ timeout: 1000 });
		} catch (error) {}
		const firstItemTitle = await $("#__title0-__clone0-inner");
		const textInnerText = await firstItemTitle.getText();

		expect(textInnerText).toEqual("create-wdi5");
	});
});
