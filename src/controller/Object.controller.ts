import BaseController from "./BaseController";
import History from "sap/ui/core/History";
import UI5Event from "sap/ui/base/Event";
import JSONModel from "sap/ui/model/json/JSONModel";
import formatter from "../model/formatter";
// import formatter from "../model/formatter_ts";

/**
 * @namespace org.openui5.bestofui5.controller
 */
export default class Object extends BaseController {
	public formatter = formatter;

	public onInit(): void {
		this.getRouter().getRoute("RouteObjectView").attachPatternMatched(this.onPatternMatched, this);
	}

	public async onPatternMatched(event): Promise<void> {
		const objectName = event.getParameter("arguments").name;
		const model = this.getModel("data");
		await model.dataLoaded();
		const data = model.getData();
		// find object index in data
		const objectIndex = data.packages.findIndex((object) => object.name === objectName);
		if (!objectIndex) {
			//object not found
			// return
		}
		this.getView().bindElement({
			path: `/packages/${objectIndex}`,
			model: "data",
		});
	}

	public onNavBack(event: UI5Event): void {
		const sPreviousHash = History.getInstance().getPreviousHash();

		if (sPreviousHash !== undefined) {
			history.go(-1);
		} else {
			this.getRouter().navTo("default", {}, true);
		}
	}
}
