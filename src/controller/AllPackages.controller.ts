import AppController from "./App.controller";
import Sorter from "sap/ui/model/Sorter";
import Event from "sap/ui/base/Event";
import Log from "sap/base/Log";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import ViewSettingsDialog from "sap/ui/webc/fiori/ViewSettingsDialog";
import { truncateSync } from "fs";

/**
 * @namespace org.openui5.bestofui5.controller
 */
export default class AllPackages extends AppController {
	private dialog: ViewSettingsDialog;

	public onInit(): void {
		super.onInit();
		this.getRouter().getRoute("allPackages").attachPatternMatched(this.onPatternMatched, this);
		this.getRouter().getRoute("allPackages").attachEventOnce("patternMatched", this.onPatternMatchedOnce, this);
	}

	public onPatternMatchedOnce(event: Event): void {
		try {
			const routerArgsObject = event.getParameter("arguments")["?query"] ? event.getParameter("arguments")["?query"] : ({} as any);
			this.queryUtil.getParameterFromQuery(routerArgsObject);
			this.filterFromQuery(routerArgsObject);
			this.applySearchFilter();
		} catch (error) {
			Log.error((this.getResourceBundle() as ResourceBundle).getText("all_packages_controller_queryparsing"));
		}
	}

	public onPatternMatched(event: Event): void {
		this.getView().getModel("settings").setProperty("/headerKey", "allPackages");
		this.applySearchFilter();
	}

	public applySearchFilter(): void {
		this.queryUtil.applySearchFilter();
	}

	public onPress(event: Event): void {
		// get object name from oevent
		const objectName = event.getSource().getBindingContext("data").getObject().name;
		//route to object view
		this.navTo("RouteObjectView", {
			name: objectName,
		});
	}

	// public onSortSelectChange(event: Event): void {
	// 	const selectKey = event.getParameter("selectedItem").getKey();
	// 	this.sortList(selectKey);
	// 	this.queryUtil.setQueryParameters();
	// }

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

	private async openDialog(): void {
		this.getView().getModel("settings").setProperty("/viewSettingsBusy", true);
		const oView = this.getView();

		if (!this.dialog) {
			this.dialog = (await this.loadFragment({
				id: oView.getId(),
				name: "org.openui5.bestofui5.view.ViewSettingsDialog",
				controller: this,
			})) as ViewSettingsDialog;
			this.getView().getModel("settings").setProperty("/viewSettingsBusy", false);
			this.dialog.open();

			// TODO: should be handled internally by WebC dialogs
			// this.dialog.placeAt(sap.ui.getCore().getStaticAreaRef());
			// sap.ui.getCore().applyChanges();
			// setTimeout(
			// 	function () {
			// 		this.getView().getModel("settings").setProperty("/viewSettingsBusy", false);
			// 		this.dialog.show();
			// 	}.bind(this as AllPackages)
			// );
		} else {
			const jsonModelTest = this.getView().getModel("settings");
			this.dialog.setModel(jsonModelTest, "settings");
			this.getView().getModel("settings").setProperty("/viewSettingsBusy", false);
			this.dialog.open();
		}
	}

	private handleOpenDialog(event: Event): void {
		this.openDialog();
	}

	private handleConfirm(event: Event): void {
		let tokenArray = [];
		this.sortList(event.getParameter("sortItem").getKey(), event.getParameter("sortDescending"));
		const filterItems = event.getParameter("filterItems");
		for (const filterItem of filterItems) {
			const keyArray = filterItem.getKey().split(";");
			const tokenObject = {
				key: keyArray[0],
				type: keyArray[1],
			};
			tokenArray.push(tokenObject);
		}
		(this.getView().getModel("settings") as JSONModel).setProperty("/tokens", tokenArray);
		this.queryUtil.applySearchFilter();
	}
}
