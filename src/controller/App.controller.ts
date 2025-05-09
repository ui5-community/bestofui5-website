import ResourceBundle from "sap/base/i18n/ResourceBundle";
import MessageToast from "sap/m/MessageToast";
import Event from "sap/ui/base/Event";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import BaseController from "./BaseController";
import QueryUtil from "./QueryUtil";

/**
 * @namespace org.openui5.bestofui5.controller
 */
export default class App extends BaseController {
	protected queryUtil: QueryUtil;
	private timerId: number;

	public onInit(): void {
		this.queryUtil = new QueryUtil(this.getView());
	}

	public liveSearch(event: Event): void {
		const value = (event.getParameter("value") as string).trim();
		// delay search input
		if (this.timerId) {
			clearTimeout(this.timerId);
		}
		this.timerId = setTimeout(() => {
			this.liveSearchHandler(value);
		}, 500) as unknown as number;
	}

	public liveSearchHandler(value: string): void {
		// const value = event.getParameter("value").trim();
		this.getView().getModel("settings").setProperty("/search", value);
		this.applySearch();
	}

	public applySearch(): void {
		if (!this.getRouter().getHashChanger().getHash().startsWith("packages")) {
			this.getView().getModel("settings").setProperty("/headerKey", "allPackages");
			this.navTo("allPackages", null, null, this.getRouter().getHashChanger().getHash());
		} else {
			this.getOwnerComponent().byId("AllPackages").getController().applySearchFilter();
		}
	}

	public async copyLinkToClipboard(event: Event): Promise<void> {
		const resourceBundle = <ResourceBundle>(this.getView().getModel("i18n") as ResourceModel).getResourceBundle();
		try {
			// try using standard clipboard API
			if ("clipboard" in navigator) {
				await navigator.clipboard.writeText(window.location.href);
				return MessageToast.show(resourceBundle.getText("app_view_link_copy"));
			}
			// fallback if clipboard API is not supported
			const dummy = document.createElement("input");
			document.body.appendChild(dummy);
			dummy.setAttribute("value", window.location.href);
			dummy.select();
			document.execCommand("copy");
			document.body.removeChild(dummy);
			MessageToast.show(resourceBundle.getText("app_view_link_copy"));
		} catch (error) {
			console.error(error);
			MessageToast.show(resourceBundle.getText("app_view_link_copy_failed"));
		}
	}

	/**
	 * Remove the Splash screen after the application has been loaded!
	 */
	public onAfterRendering(): void {
		document.body.classList.remove("splash");

		// Focus the search input field on startup
		const multiInput = this.byId("multiInput");
		if (multiInput && this.getView().getModel("settings").getProperty("/route") !== "RouteObjectView") {
			multiInput.focus();
		}
	}
}
