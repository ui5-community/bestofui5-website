import Event from "sap/ui/base/Event";
import JSONModel from "sap/ui/model/json/JSONModel";
import BaseController from "./BaseController";

/**
 * @namespace org.openui5.bestofui5.controller
 */
export default class Applications extends BaseController {
	public onInit(): void {
		this.getRouter().getRoute("applications").attachPatternMatched(this.onPatternMatched, this);
	}

	public onPatternMatched(event: Event): void {
		(this.getView().getModel("settings") as JSONModel).setProperty("/headerKey", "applications");
		this.getView().getParent().getParent().getParent().scrollTo(this.getView().getModel("scrollState").getProperty("/applications"));
	}
}
