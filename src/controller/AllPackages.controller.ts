import AppController from "./App.controller";
import Sorter from "sap/ui/model/Sorter";
import Event from "sap/ui/base/Event";
import Log from "sap/base/Log";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import MultiComboBox from "sap/m/MultiComboBox";

/**
 * @namespace org.openui5.bestofui5.controller
 */
export default class AllPackages extends AppController {
	public onInit(): void {
		super.onInit();
		this.getRouter().getRoute("allPackages").attachEventOnce("patternMatched", this.onPatternMatchedOnce, this);
	}

	public onPatternMatchedOnce(event: Event): void {
		this.getView().getModel("settings").setProperty("/headerKey", "allPackages");
		this.getRouter().getRoute("allPackages").attachPatternMatched(this.onPatternMatched, this);
		try {
			const routerArgsObject = event.getParameter("arguments")["?query"] ? event.getParameter("arguments")["?query"] : ({} as any);
			// check if object is empty
			if (!(routerArgsObject && Object.keys(routerArgsObject).length === 0 && Object.getPrototypeOf(routerArgsObject) === Object.prototype)) {
				this.queryUtil.getParameterFromQuery(routerArgsObject);
				this.filterFromQuery(routerArgsObject);
			}
		} catch (error) {
			Log.error((this.getResourceBundle() as ResourceBundle).getText("all_packages_controller_queryparsing"));
		}
		this.applySearchFilter();
		this.sortList((this.getView().getModel("settings") as JSONModel).getProperty("/selectKey"), true);
	}

	public onPatternMatched(event: Event): void {
		this.getView().getParent().getParent().getParent().scrollTo(this.getView().getModel("scrollState").getProperty("/packages"));
		this.getView().getModel("settings").setProperty("/headerKey", "allPackages");
		this.applySearchFilter();
	}

	public applySearchFilter(): void {
		this.queryUtil.applySearchFilter();
		this.setSelectedItems();
	}
	private setSelectedItems() {
		const multiComboBox = this.byId("multiComboBox") as MultiComboBox;
		const selectedItems = this.getView().getModel("settings").getProperty("/tokens");
		let keyArray = [];
		for (let i = 0; i < selectedItems.length; i++) {
			keyArray.push(`${selectedItems[i].key};${selectedItems[i].type}`);
		}

		multiComboBox.setSelectedKeys(keyArray);
	}

	public onPress(event: Event): void {
		// get object name from oevent
		const objectName = event.getSource().getBindingContext("data").getObject().name;
		//route to object view
		this.navTo("RouteObjectView", { name: objectName }, null, "object");
	}

	public onSortSelectChange(event: Event): void {
		const selectKey = event.getParameter("selectedItem").getKey();
		this.sortList(selectKey, true);
		this.queryUtil.setQueryParameters();
	}

	private sortList(sortKey: string, descendingParameter: boolean): void {
		const binding = this.getView().byId("listAllPackages").getBinding("items");
		const oSorter = new Sorter({
			path: sortKey,
			descending: descendingParameter,
		});
		binding.sort(oSorter);
		this.getView().getModel("settings").setProperty("/selectKey", sortKey);
	}

	private filterFromQuery(eventArguments: any): void {
		if ("sort" in eventArguments) {
			this.sortList(eventArguments.sort);
		}
	}

	private onSelectionChange(event: Event): void {
		this.queryUtil.onSelectionChange(event);
		this.applySearchFilter();
	}
}
