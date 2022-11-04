import Event from "sap/ui/base/Event";
import JSONModel from "sap/ui/model/json/JSONModel";
import BaseController from "./BaseController";
import { registerIconLoader } from "sap/ui/webc/common/thirdparty/base/asset-registries/Icons";
import IconCollection from "org/openui5/bestofui5/resources/font-awesome/fa-brands-sap";

/**
 * @namespace org.openui5.bestofui5.controller
 */
export default class Timeline extends BaseController {
	public onInit(): void {
		this.getRouter().getRoute("timeline").attachPatternMatched(this.onPatternMatched, this);
		registerIconLoader("font-awesome-icons", () => {
			return IconCollection;
		});
	}

	public onNameClick(event: Event): void {
		this.navTo("RouteObjectView", {
			name: event.getSource().getBindingContext("versions").getObject().name,
		});
	}

	public onPatternMatched(event: Event): void {
		(this.getView().getModel("settings") as JSONModel).setProperty("/headerKey", "timeline");
		this.getView().getParent().getParent().getParent().scrollTo(this.getView().getModel("scrollState").getProperty("/timeline"));
	}

	private expandPanel(event: Event): void {
		const isExpanded = (this.getView().getModel("settings") as JSONModel).getProperty("/timelinePanelExpanded");
		(this.getView().getModel("settings") as JSONModel).setProperty("/timelinePanelExpanded", !isExpanded);
	}
}
