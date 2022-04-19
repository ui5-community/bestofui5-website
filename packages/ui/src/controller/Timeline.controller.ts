import BaseController from "./BaseController";

/**
 * @namespace org.openui5.ui5community.controller
 */
export default class Timeline extends BaseController {
	public onInit(): void {
		console.log("Timeline.onInit");
	}

	public onNameClick(event: sap.ui.base.Event): void {
		this.navTo("RouteObjectView", {
			name: event.getSource().getBindingContext("versions").getObject().name,
		});
	}
}
