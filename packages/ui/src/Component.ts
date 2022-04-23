import UIComponent from "sap/ui/core/UIComponent";
import { support } from "sap/ui/Device";
import models from "./model/models";
import JSONModel from "sap/ui/model/json/JSONModel";
import IconPool from "sap/ui/core/IconPool";

// import additional dependencies to bundle them properly
import "sap/ui/core/ComponentSupport";
import "sap/ui/core/date/Gregorian";
import "sap/ui/model/type/Date";

/**
 * @namespace org.openui5.bestofui5
 */
export default class Component extends UIComponent {
	public static metadata = {
		manifest: "json",
		// marker to identify async content creation
		// makes async: true for rootView obsolete!
		interfaces: ["sap.ui.core.IAsyncContentCreation"],
	};

	private contentDensityClass: string;

	public init(): void {
		// call the base component's init function
		super.init();

		// create the views based on the url/hash
		this.getRouter().initialize();

		IconPool.registerFont({
			collectionName: "font-awesome-icons",
			fontFamily: "fa-brands",
			fontURI: "font-awesome",
			lazy: false,
		});

		const settingsModel = new JSONModel({
			filter: "all",
			tokens: [],
			search: "",
			selectedTab: "hotPackagesView",
			selectKey: "downloads365",
			iconTabHeaderKey: "hotPackages",
			tagFilter: "tag",
		});
		this.setModel(settingsModel, "settings");

		// set the device model
		this.setModel(models.createDeviceModel(), "device");
	}

	/**
	 * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
	 * design mode class should be set, which influences the size appearance of some controls.
	 *
	 * @public
	 * @return {string} css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
	 */
	public getContentDensityClass(): string {
		if (this.contentDensityClass === undefined) {
			// check whether FLP has already set the content density class; do nothing in this case
			if (document.body.classList.contains("sapUiSizeCozy") || document.body.classList.contains("sapUiSizeCompact")) {
				this.contentDensityClass = "";
			} else if (!support.touch) {
				// apply "compact" mode if touch is not supported
				this.contentDensityClass = "sapUiSizeCompact";
			} else {
				// "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
				this.contentDensityClass = "sapUiSizeCozy";
			}
		}
		return this.contentDensityClass;
	}
}
