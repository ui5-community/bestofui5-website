import AppController from "./App.controller";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import Event from "sap/ui/base/Event";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace org.openui5.bestofui5.controller
 */
export default class Tags extends AppController {
	public onInit(): void {
		this.getRouter().getRoute("tags").attachPatternMatched(this.onPatternMatched, this);
	}

	public onPatternMatched(event: Event): void {
		(this.getView().getModel("settings") as JSONModel).setProperty("/headerKey", "tags");
		this.getView().getParent().getParent().getParent().scrollTo(this.getView().getModel("scrollState").getProperty("/tags"));
	}

	/**
	 * filter the list of tags with the segmented button
	 * @param {sap.ui.base.Event} event
	 */
	public onSelectionChange(event: Event): void {
		const binding = this.getView().byId("tagsLits").getBinding("items");
		const key = event.getParameter("item").getKey();
		const filter = new Filter({
			path: "type",
			operator: FilterOperator.EQ,
			value1: key,
		});
		if (key === "all") {
			binding.filter([]);
		} else {
			binding.filter(filter);
		}
	}

	/**
	 * when clicking on an tag in the list, the token object for filtering is extracted and set
	 * as the filter for the AllPackages List
	 * @param event
	 */

	public onPress(event: Event): void {
		const item = event.getSource().getBindingContext("data").getObject();
		const tokenArray = [];
		const tokenObject = {
			key: item.name,
			type: item.type,
		};
		tokenArray.push(tokenObject);

		(this.getView().getModel("settings") as JSONModel).setProperty("/tokens", tokenArray);
		(this.getView().getModel("settings") as JSONModel).setProperty("/search", "");
		this.getView().getModel("scrollState").setProperty(`/packages`, 0);
		this.applySearch();
	}
}
