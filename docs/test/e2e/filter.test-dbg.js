"use strict";

const All = require("./pageObjects/All");
describe("ui5 filter", () => {
  before(async () => {
    await All.open();
  });

  // it("predefined filter should return three items", async () => {
  // 	try {
  // 		await $("filtekuzfutkfk424214").waitForExist({ timeout: 2000 });
  // 	} catch (error) {}
  // 	// get search field
  // 	const multiComboBox = await All.getMultiComboBoxFocus();
  // 	// open multi combo box popover
  // 	await multiComboBox.open();
  // 	try {
  // 		await $("#__component0---AllPackages--multiComboBox-popup").waitForExist({ timeout: 2000 });
  // 	} catch (error) {}

  // 	// get popover list
  // 	let popoverList = await $("#__component0---AllPackages--multiComboBox-popup-list-listUl");
  // 	// get checkbox item so popover does not close by itself
  // 	let checkboxList = await popoverList.$$('[role="checkbox"]');
  // 	// get item 'middleware'
  // 	const typeItemWebCheckbox = checkboxList[0];
  // 	// select item to filter list
  // 	await typeItemWebCheckbox.click();

  // 	popoverList = await $("#__component0---AllPackages--multiComboBox-popup-list-listUl");
  // 	checkboxList = await popoverList.$$('[role="checkbox"]');
  // 	// get item 'proxy'
  // 	const tagItemWebCheckbox = checkboxList[9];
  // 	await tagItemWebCheckbox.click();

  // 	popoverList = await $("#__component0---AllPackages--multiComboBox-popup-list-listUl");
  // 	checkboxList = await popoverList.$$('[role="checkbox"]');
  // 	// get item 'license'
  // 	const licenseItemWebCheckbox = checkboxList[43];
  // 	await licenseItemWebCheckbox.click();

  // 	// get list
  // 	const list = await All.getList();
  // 	// get list items binding
  // 	const binding = await list.getBinding("items");

  // 	// check if text is equal to wdio-ui5-service
  // 	expect(binding.iLength).toEqual(3);
  // });
});
//# sourceMappingURL=filter.test.js.map