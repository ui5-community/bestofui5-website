const All = require("./pageObjects/All");
const Main = require("./pageObjects/Main");

describe("ui5 search", () => {
	before(async () => {
		await All.open();
	});

	it("search should return wdi5 as first result", async () => {
		try {
			await $("filtekuzfutkfk424214").waitForExist({ timeout: 2000 });
		} catch (error) {}
		// get search field
		const multiComboBox = await All.getMultiComboBoxFocus();
		// open multi combo box popover
		await multiComboBox.open();
		try {
			await $("#__component0---AllPackages--multiComboBox-popup").waitForExist({ timeout: 2000 });
		} catch (error) {}
		// let popup = await All.getPopup();
		let popoverList = await $("#__component0---AllPackages--multiComboBox-popup-list-listUl");
		let checkboxList = await popoverList.$$('[role="checkbox"]');
		const typeItemWebCheckbox = checkboxList[0];
		await typeItemWebCheckbox.click();

		popoverList = await $("#__component0---AllPackages--multiComboBox-popup-list-listUl");
		checkboxList = await popoverList.$$('[role="checkbox"]');
		const tagItemWebCheckbox = checkboxList[9];
		await tagItemWebCheckbox.click();

		popoverList = await $("#__component0---AllPackages--multiComboBox-popup-list-listUl");
		checkboxList = await popoverList.$$('[role="checkbox"]');
		const licenseItemWebCheckbox = checkboxList[44];
		await licenseItemWebCheckbox.click();

		// let popup = await All.getPopup();
		// let content = await popup.getContent()
		// let content1 = await content[0]
		// let items = await content1.getAggregation("items");

		// const typeItem = await items[1]
		// const typeItemWeb = await typeItem.getWebElement()
		// const typeItemWebCheckbox = await typeItemWeb.$('[role="checkbox"]')

		// const tagItem = await items[11]
		// const tagItemWeb = await tagItem.getWebElement()
		// const tagItemWebCheckbox = await tagItemWeb.$('[role="checkbox"]')

		// const licenseItem = await items[46]
		// const licenseItemWeb = await licenseItem.getWebElement()
		// licenseItemWeb.click()
		// const licenseItemWebCheckbox = await licenseItemWeb.$('[role="checkbox"]')

		// get list
		const list = await All.getList();
		// get list items binding
		const binding = await list.getBinding("items");

		// check if text is equal to wdio-ui5-service
		expect(binding.iLength).toEqual(3);
	});
});
