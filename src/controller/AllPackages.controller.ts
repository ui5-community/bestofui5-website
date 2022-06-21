import AppController from "./App.controller";
import Sorter from "sap/ui/model/Sorter";
import Event from "sap/ui/base/Event";
import Log from "sap/base/Log";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import ViewSettingsDialog from "sap/ui/webc/fiori/ViewSettingsDialog";

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
		if ("sort" in eventArguments) {
			this.sortList(eventArguments.sort);
		}
	}

	private async openDialog(): void {
		const oView = this.getView();

		if (!this.dialog) {
			this.dialog = (await this.loadFragment({
				id: oView.getId(),
				name: "org.openui5.bestofui5.view.ViewSettingsDialog",
				controller: this,
				addToDependents: false,
			})) as ViewSettingsDialog;
			// TODO: should be handled internally by WebC dialogs
			this.dialog.placeAt(sap.ui.getCore().getStaticAreaRef());
			sap.ui.getCore().applyChanges();
			setTimeout(
				function () {
					this.show();
				}.bind(this.dialog)
			);
		} else {
			this.dialog.show();
		}
	}

	private handleOpenDialog(event: Event): void {
		this.openDialog();
	}
}
