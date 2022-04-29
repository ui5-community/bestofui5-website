import AppController from "./App.controller";
import Event from "sap/ui/base/Event";

/**
 * @namespace org.openui5.bestofui5.controller
 */
export default class HotPackages extends AppController {
	public onInit(): void {
		this.getRouter().getRoute("default").attachPatternMatched(this.onPatternMatched, this);
	}

	public onPatternMatched(event: Event): void {
		this.getView().getModel("settings").setProperty("/tokens", []);
		this.getView().getModel("settings").setProperty("/search", "");
	}

	public onPress(event: Event): void {
		// get object name from oevent
		const objectName = event.getSource().getBindingContext("data").getObject().name;
		//route to object view
		this.navTo("RouteObjectView", {
			name: objectName,
		});
	}
}
