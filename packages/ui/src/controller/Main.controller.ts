import BaseController from "./BaseController";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import formatter from "../model/formatter";
import Sorter from "sap/ui/model/Sorter";
import QueryControl from "./QueryControl";

/**
 * @namespace org.openui5.ui5community.controller
 */
export default class Main extends BaseController {
	private formatter = formatter;

	public onInit(): void {
		this.queryControl = new QueryControl(this.getView());
	}

	public liveSearch(event): void {
		let value = event.getParameter("value").trim();
		this.getView().getModel("settings").setProperty("/search", value);
		if (this.getRouter().getHashChanger().getHash() != "packages") {
			this.getView().getModel("settings").setProperty("/iconTabHeaderKey", "allPackages");
			this.navTo("allPackages");
		} else {
			this.getView().getParent().byId("AllPackages").getController().onPatternMatched();
		}
	}

	public onUpdateToken(event): void {
		this.queryControl.onUpdateToken(event);
		if (this.getRouter().getHashChanger().getHash() != "packages") {
			this.getView().getModel("settings").setProperty("/iconTabHeaderKey", "allPackages");
			this.navTo("allPackages");
		} else {
			this.getView().getParent().byId("AllPackages").getController().onPatternMatched();
		}
	}
}
