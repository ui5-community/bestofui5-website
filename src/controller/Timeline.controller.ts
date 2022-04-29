import BaseController from "./BaseController";

/**
 * @namespace org.openui5.bestofui5.controller
 */
export default class Timeline extends BaseController {
	public onInit(): void {
		this.getRouter().getRoute("timeline").attachPatternMatched(this.onPatternMatched, this);
	}

	public onNameClick(event: sap.ui.base.Event): void {
		this.navTo("RouteObjectView", {
			name: event.getSource().getBindingContext("versions").getObject().name,
		});
	}

	public onPatternMatched(event): void {
		this.getView().getModel("settings").setProperty("/headerKey", "timeline");
	}
}
