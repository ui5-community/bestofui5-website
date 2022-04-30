import AppController from "./App.controller";
import Sorter from "sap/ui/model/Sorter";
import Event from "sap/ui/base/Event";

/**
 * @namespace org.openui5.bestofui5.controller
 */
export default class AllPackages extends AppController {
	public onInit(): void {
		super.onInit();
		this.getRouter().getRoute("allPackages").attachPatternMatched(this.onPatternMatched, this);
	}

	public onPatternMatched(event: Event): void {
		this.getView().getModel("settings").setProperty("/headerKey", "allPackages");
		const search = this.getView().getModel("settings").getProperty("/search");
		const token = this.getView().getModel("settings").getProperty("/tokens");
		this.queryControl.applySearchFilter();
		// // save the current query state
		// this._oRouterArgs = event.getParameter("arguments");
		// this._oRouterArgs["?query"] = this._oRouterArgs["?query"] || {};
		// // search/filter via URL hash
		// if (this._oRouterArgs["?query"].search || this._oRouterArgs["?query"].filterType) {
		//   this._applySearchFilter(this._oRouterArgs["?query"].search, this._oRouterArgs["?query"].filterType);
		// }
	}

	public onAfterRendering(): void {
		const binding = this.getView().byId("listAllPackages").getBinding("items");
		const oSorter = new Sorter({
			path: "downloads365",
			descending: true,
		});
		binding.sort(oSorter);
	}

	public onPress(event: Event): void {
		// get object name from oevent
		const objectName = event.getSource().getBindingContext("data").getObject().name;
		//route to object view
		this.navTo("RouteObjectView", {
			name: objectName,
		});
	}

	public onSortSelectChange(event: Event): void {
		const selectKey = event.getParameter("selectedItem").getKey();
		const binding = this.getView().byId("listAllPackages").getBinding("items");
		const oSorter = new Sorter({
			path: selectKey,
			descending: true,
		});
		binding.sort(oSorter);
	}
}
