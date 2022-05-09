import Event from "sap/ui/base/Event";
import BaseController from "./BaseController";
import QueryUtil from "./QueryUtil";

/**
 * @namespace org.openui5.bestofui5.controller
 */
export default class App extends BaseController {
	protected queryUtil: QueryUtil;

	public onInit(): void {
		this.queryUtil = new QueryUtil(this.getView());
	}

	public liveSearch(event: Event): void {
		const value = event.getParameter("value").trim();
		this.liveSearchHandler(value);
	}

	public liveSearchHandler(value: string): void {
		// const value = event.getParameter("value").trim();
		this.getView().getModel("settings").setProperty("/search", value);
		if (!this.getRouter().getHashChanger().getHash().startsWith("packages")) {
			this.getView().getModel("settings").setProperty("/headerKey", "allPackages");
			this.navTo("allPackages");
		} else {
			this.getView().getParent().byId("AllPackages").getController().applySearchFilter();
		}
	}

	public onUpdateToken(event: Event): void {
		this.queryUtil.onUpdateToken(event);
		if (!this.getRouter().getHashChanger().getHash().startsWith("packages")) {
			this.getView().getModel("settings").setProperty("/headerKey", "allPackages");
			this.navTo("allPackages");
		} else {
			this.getView().getParent().byId("AllPackages").getController().applySearchFilter();
		}
	}

}
