/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import Event from "sap/ui/base/Event";
import View from "sap/ui/core/mvc/View";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";

export default class QueryControl {
	private view: View;

	// create constructor
	constructor(view: View) {
		this.view = view;
	}

	public liveSearch(event: Event): void {
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
			"tags",
			function (array) {
				for (const valueType of valueTypes) {
					if (array.includes(valueType.key) && valueType.type === "tag") {
						return true;
					}
				}
			}.bind(this)
		);
		const typeFilters = [];
		for (let i = 0; i < valueTypes.length; i++) {
			const typeFilter = new Filter({
				path: "type",
				operator: FilterOperator.Contains,
				value1: valueTypes[i].key,
			});
			typeFilters.push(typeFilter);
		}
		const typeFilter = new Filter({
			filters: typeFilters,
			and: true,
		});
		const typesTagsFilter = new Filter({
			filters: [tagsFilter, typeFilter],
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

	public onUpdateToken(event: Event): void {
		const model = this.view.getModel("settings");
		let tokenArray = model.getProperty("/tokens");

		const addOrRemove = event.getParameter("type");
		if (addOrRemove === "added") {
			const keyArray = event.getParameter("addedTokens")[0].getProperty("key").split(";");
			const tokenObject = {
				key: keyArray[0],
				type: keyArray[1],
			};
			tokenArray.push(tokenObject);
		} else if (addOrRemove === "removed") {
			const keyArray = event.getParameter("removedTokens")[0].getProperty("key").split(";");
			const tokenObject = {
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
