import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";
import AppComponent from "../Component";
import Model from "sap/ui/model/Model";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import Router from "sap/ui/core/routing/Router";
import History from "sap/ui/core/routing/History";
import UI5Event from "sap/ui/base/Event";
import JSONModel from "sap/ui/model/json/JSONModel";
import formatter from "../model/formatter";
import Page from "sap/m/Page";

/**
 * @namespace org.openui5.bestofui5.controller
 */
export default abstract class BaseController extends Controller {
	static formatter = formatter;

	/**
	 * Convenience method for accessing the component of the controller's view.
	 * @returns The component of the controller's view
	 */
	public getOwnerComponent(): AppComponent {
		return super.getOwnerComponent() as AppComponent;
	}

	/**
	 * Convenience method to get the components' router instance.
	 * @returns The router instance
	 */
	public getRouter(): Router {
		return UIComponent.getRouterFor(this);
	}

	/**
	 * Convenience method for getting the i18n resource bundle of the component.
	 * @returns The i18n resource bundle of the component
	 */
	public getResourceBundle(): ResourceBundle | Promise<ResourceBundle> {
		const oModel = this.getOwnerComponent().getModel("i18n") as ResourceModel;
		return oModel.getResourceBundle();
	}

	/**
	 * Convenience method for getting the view model by name in every controller of the application.
	 * @param [sName] The model name
	 * @returns The model instance
	 */
	public getModel(sName?: string): Model {
		return this.getView().getModel(sName);
	}
	/**
	 * Convenience method for setting the view model in every controller of the application.
	 * @param oModel The model instance
	 * @param [sName] The model name
	 * @returns The current base controller instance
	 */
	public setModel(oModel: Model, sName?: string): BaseController {
		this.getView().setModel(oModel, sName);
		return this;
	}
	/**
	 * Convenience method for triggering the navigation to a specific target.
	 * @public
	 * @param sName Target name
	 * @param [oParameters] Navigation parameters
	 * @param [bReplace] Defines if the hash should be replaced (no browser history entry) or set (browser history entry)
	 */
	public navTo(sName: string, oParameters?: object, bReplace?: boolean, source?: string): void {
		if (source !== "object") {
			this.getView().getModel("scrollState").setProperty(`/${source}`, this.getScrollTop());
		}
		// replace slash in package name because it cant be in url
		try {
			oParameters.name = oParameters.name.replace("/", "_");
		} catch (error) {
			console.info("no name parameter");
		}
		this.getRouter().navTo(sName, oParameters, undefined, bReplace);
	}

	/**
	 * Convenience event handler for navigating back.
	 * It there is a history entry we go one step back in the browser history
	 * If not, it will replace the current entry of the browser history with the master route.
	 */
	public onNavBack(event: UI5Event): void {
		const sPreviousHash = History.getInstance().getPreviousHash();
		if (sPreviousHash !== undefined) {
			window.history.go(-1);
		} else {
			this.getRouter().navTo("default", {}, undefined, true);
		}
	}

	public onButtonHeaderSelect(event: UI5Event, headerKey: string): void {
		(this.getView().getModel("settings") as JSONModel).setProperty("/headerKey", headerKey);
		let sourceHash = this.getRouter().getHashChanger().getHash();
		// make clear what the current view is
		sourceHash = sourceHash.split("?")[0];
		if (sourceHash.indexOf("/") > -1) {
			sourceHash = "object";
		}
		if (sourceHash === "") {
			sourceHash = "hot";
		}
		// sourceHash = sourceHash.substring(0, sourceHash.indexOf('?'))
		this.navTo(headerKey, null, null, sourceHash);
	}

	private getScrollTop(): number {
		try {
			return this.getView().byId("page").getScrollDelegate().getScrollTop();
		} catch (error) {
			try {
				return (sap.ui.getCore().byId("__component0---rootView--page") as Page).getScrollDelegate().getScrollTop();
			} catch (error) {
				try {
					return this.getView().getParent().getParent().getParent().getScrollDelegate().getScrollTop();
				} catch (error) {
					console.info("no scroll delegate");
				}
			}
		}
	}
}
