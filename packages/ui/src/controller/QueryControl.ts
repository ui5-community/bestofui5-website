/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
export default class QueryControl {
	private view: sap.ui.core.mvc.View;
	// create constructor
	constructor(view) {
		this.view = view;
	}

	public liveSearch(event): void {
		const value = event.getParameter("value").trim();
		this.view.getModel("settings").setProperty("/search", value);
		this.applySearchFilter();
	}

	public applySearchFilter(): void {
		let value = this.view.getModel("settings").getProperty("/search");
		const valueTypes = this.view.getModel("settings").getProperty("/tokens");
		if (!value) {
			value = "";
		}
		const list = this.view.byId("listAllPackages");
		const listBinding = list.getBinding("items");
		const nameFilter = new Filter({
			path: "name",
			operator: FilterOperator.Contains,
			value1: value,
		});
		const descFilter = new Filter({
			path: "description",
			operator: FilterOperator.Contains,
			value1: value,
		});
		const tagsFilter = new Filter(
			"ui5-community/tags",
			function (array) {
				for (const valueType of valueTypes) {
					if (array.includes(valueType.key) && valueType.type === "tag") {
						return true;
					}
				}
			}.bind(this)
		);
		const typesFilter = new Filter(
			"ui5-community/types",
			function (array) {
				for (const valueType of valueTypes) {
					if (array.includes(valueType.key) && valueType.type === "type") {
						return true;
					}
				}
			}.bind(this)
		);
		const typesTagsFilter = new Filter({
			filters: [tagsFilter, typesFilter],
			and: false,
		});
		const searchFilter = new Filter({
			filters: [nameFilter, descFilter],
			and: false,
		});
		if (valueTypes.length > 0) {
			listBinding.filter(
				new Filter({
					filters: [searchFilter, typesTagsFilter],
					and: true,
				})
			);
		} else {
			listBinding.filter(searchFilter);
		}
	}

	public onUpdateToken(event): void {
		const model = this.view.getModel("settings");
		let tokenArray = model.getProperty("/tokens");

		let addOrRemove = event.getParameter("type");
		if (addOrRemove === "added") {
			let keyArray = event.getParameter("addedTokens")[0].getProperty("key").split(";");
			let tokenObject = {
				key: keyArray[0],
				type: keyArray[1],
			};
			tokenArray.push(tokenObject);
		} else if (addOrRemove === "removed") {
			let keyArray = event.getParameter("removedTokens")[0].getProperty("key").split(";");
			let tokenObject = {
				key: keyArray[0],
				type: keyArray[1],
			};
			// filter token object array with key and type values
			tokenArray = tokenArray.filter(function (obj) {
				return obj.key !== tokenObject.key && obj.type !== tokenObject.type;
			});
		}
		this.view.getModel("settings").setProperty("/tokens", tokenArray);
		// this.applySearchFilter(value, tokenArray);
	}
}
