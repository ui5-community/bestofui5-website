import BaseController from "./BaseController";
import Event from "sap/ui/base/Event";

/**
 * @namespace org.openui5.bestofui5.controller
 */
export default class Object extends BaseController {
	public onInit(): void {
		this.getRouter().getRoute("RouteObjectView").attachPatternMatched(this.onPatternMatched, this);
	}

	public async onPatternMatched(event: Event): Promise<void> {
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
}
