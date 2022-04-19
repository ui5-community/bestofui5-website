import AppController from "./App.controller";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import formatter from "../model/formatter";
import Sorter from "sap/ui/model/Sorter";

/**
 * @namespace org.openui5.ui5community.controller
 */
export default class Tags extends AppController {
	private formatter = formatter;

	public onInit(): void {
		this.getRouter().getRoute("tags").attachPatternMatched(this.onPatternMatched, this);
	}

	public onPatternMatched(event): void {
		this.getView().getModel("settings").setProperty("/iconTabHeaderKey", "tags");
	}

	public onSelectionChange(event): void {
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

	public onPress(event): void {
		const item = event.getSource().getBindingContext("data").getObject();
		let tokenArray = [];
		let tokenObject = {
			key: item.name,
			type: item.type,
		};
		tokenArray.push(tokenObject);

		this.getView().getModel("settings").setProperty("/tokens", tokenArray);
		this.getView().getModel("settings").setProperty("/search", "");
		this.navTo("allPackages");
	}
}
