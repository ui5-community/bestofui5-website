import AppController from "./App.controller";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import formatter from "../model/formatter";
import Sorter from "sap/ui/model/Sorter";

/**
 * @namespace org.openui5.bestofui5.controller
 */
export default class HotPackages extends AppController {
	private formatter = formatter;

	public onInit(): void {
		this.getRouter().getRoute("default").attachPatternMatched(this.onPatternMatched, this);
	}

	public onPatternMatched(event): void {
		this.getView().getModel("settings").setProperty("/tokens", []);
		this.getView().getModel("settings").setProperty("/search", "");
	}

	public onPress(event): void {
		// get object name from oevent
		const objectName = event.getSource().getBindingContext("data").getObject().name;
		//route to object view
		this.navTo("RouteObjectView", {
			name: objectName,
		});
	}
}
