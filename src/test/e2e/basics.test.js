const Main = require("./pageObjects/Main");

describe("ui5 basic", () => {
	before(async () => {
		await Main.open();
	});

	it("should have the right title", async () => {
		const title = await browser.getTitle();
		expect(title).toEqual("Best of UI5");
	});
});
