import Event from "sap/ui/base/Event";
import JSONModel from "sap/ui/model/json/JSONModel";
import BaseController from "./BaseController";

/**
 * @namespace org.openui5.bestofui5.controller
 */
export default class Timeline extends BaseController {
	public onInit(): void {
		this.getRouter().getRoute("timeline").attachPatternMatched(this.onPatternMatched, this);
	}

	public onNameClick(event: Event): void {
		this.navTo("RouteObjectView", {
			name: event.getSource().getBindingContext("versions").getObject().name,
		});
	}

	public onPatternMatched(event: Event): void {
		(this.getView().getModel("settings") as JSONModel).setProperty("/headerKey", "timeline");
		this.getView().getParent().getParent().getParent().scrollTo(this.getView().getModel("scrollState").getProperty("/timeline"));
	}
}
