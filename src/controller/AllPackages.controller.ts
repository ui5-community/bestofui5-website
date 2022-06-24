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
			// default sort is by downloads365
			this.dialog.setSelectedSortItem("downloads365");
			this.setViewSettingsDialogFilterFromTokens();
			this.dialog.open();
		} else {
			this.getView().getModel("settings").setProperty("/viewSettingsBusy", false);
			try {
				this.dialog.setSelectedSortItem(this.getView().getModel("settings").setProperty("/selectKey"));
			} catch (error) {
				console.info("selectKey not set");
			}

			this.setViewSettingsDialogFilterFromTokens();
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

	private setViewSettingsDialogFilterFromTokens(): void {
		const tokensModel = this.getView().getModel("settings").getProperty("/tokens");
		let filterObject: { [key: string]: any } = {};
		for (const token of tokensModel) {
			if (filterObject[token.type]) {
				filterObject[token.type][`${token.key};${token.type}`] = true;
			} else {
				filterObject[token.type] = {};
				filterObject[token.type][`${token.key};${token.type}`] = true;
			}
		}
		this.dialog.setSelectedFilterCompoundKeys(filterObject);
	}

	private onTokenDelete(event: Event): void {
		const key: string = event.getParameter("tokens")[0].getKey();
		const keyArray = key.split(";");
		const tokensModel = this.getView().getModel("settings").getProperty("/tokens");
		// remove token from model
		const indexRemove = tokensModel.findIndex((token) => token.key === keyArray[0] && token.type === keyArray[1]);
		const removedToken = tokensModel.splice(indexRemove, 1);
		(this.getView().getModel("settings") as JSONModel).setProperty("/tokens", tokensModel);
		// event.getSource().getTokensPopup().getContent()[0].removeItem(indexRemove);
		this.queryUtil.applySearchFilter();
	}
}
