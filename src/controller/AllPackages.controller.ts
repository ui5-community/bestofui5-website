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
		const routerArgsObject = event.getParameter("arguments") || {};
		this.queryUtil.getParameterFromQuery(routerArgsObject);
		this.filterFromQuery(routerArgsObject);
		this.queryUtil.applySearchFilter();
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
		this.sortList(selectKey);
		this.queryUtil.setQueryParameters();
	}

	private sortList(sortKey: string): void {
		const binding = this.getView().byId("listAllPackages").getBinding("items");
		const oSorter = new Sorter({
			path: sortKey,
			descending: true,
		});
		binding.sort(oSorter);
	}

	private filterFromQuery(eventArguments: any): void {
		if (eventArguments.sort) {
			this.sortList(eventArguments.sort);
		}
	}
}
