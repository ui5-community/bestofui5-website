import Event from "sap/ui/base/Event";
import BaseController from "./BaseController";
import QueryControl from "./QueryControl";

/**
 * @namespace org.openui5.bestofui5.controller
 */
export default class App extends BaseController {
	private queryControl: QueryControl;

	public onInit(): void {
		this.queryControl = new QueryControl(this.getView());
	}

	public liveSearch(event: Event): void {
		const value = event.getParameter("value").trim();
		this.getView().getModel("settings").setProperty("/search", value);
		if (this.getRouter().getHashChanger().getHash() != "packages") {
			this.getView().getModel("settings").setProperty("/headerKey", "allPackages");
			this.navTo("allPackages");
		} else {
			this.getView().getParent().byId("AllPackages").getController().onPatternMatched();
		}
	}

	public onUpdateToken(event: Event): void {
		this.queryControl.onUpdateToken(event);
		if (this.getRouter().getHashChanger().getHash() != "packages") {
			this.getView().getModel("settings").setProperty("/headerKey", "allPackages");
			this.navTo("allPackages");
		} else {
			this.getView().getParent().byId("AllPackages").getController().onPatternMatched();
		}
	}
}
