import Event from "sap/ui/base/Event";
import JSONModel from "sap/ui/model/json/JSONModel";
import BaseController from "./BaseController";

/**
 * @namespace org.openui5.bestofui5.controller
 */
export default class Timeline extends BaseController {
	public onInit(): void {
		this.getRouter().getRoute("contributors").attachPatternMatched(this.onPatternMatched, this);
	}

	public navToGithubUser(event: Event): void {
		window.open(event.getSource().getBindingContext("contributors").getObject().url, "_blank");
	}

	public onPatternMatched(event: Event): void {
		(this.getView().getModel("settings") as JSONModel).setProperty("/headerKey", "contributors");
	}
}
