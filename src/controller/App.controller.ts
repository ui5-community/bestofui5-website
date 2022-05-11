import MessageToast from "sap/m/MessageToast";
import Event from "sap/ui/base/Event";
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

	public copyLinkToClipboard(event: Event): void {
		const oBundle = this.getView().getModel("i18n").getResourceBundle();
		try {
			// copy currentHash to clipboard
			const dummy = document.createElement("input");
			document.body.appendChild(dummy);
			dummy.setAttribute("value", window.location.href);
			dummy.select();
			document.execCommand("copy");
			document.body.removeChild(dummy);
			// show message toast
			MessageToast.show(oBundle.getText("app_view_link_copy"));
		} catch (error) {
			console.error(error);
			MessageToast.show(oBundle.getText("app_view_link_copy_failed"));
		}
	}

		/**
	 * Remove the Splash screen after the application has been loaded!
	 */
	public onAfterRendering(): void {
		document.body.classList.remove("splash");
	}
}
