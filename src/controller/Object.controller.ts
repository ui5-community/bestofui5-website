import BaseController from "./BaseController";
import Event from "sap/ui/base/Event";
import Filter from "sap/ui/model/Filter";
import { URLHelper } from "sap/m/library";

/**
 * @namespace org.openui5.bestofui5.controller
 */
export default class Object extends BaseController {
	public onInit(): void {
		this.getRouter().getRoute("RouteObjectView").attachPatternMatched(this.onPatternMatched, this);
	}

	public async onPatternMatched(event: Event): Promise<void> {
		(this.getView().getModel("settings") as JSONModel).setProperty("/headerKey", "allPackages");
		const objectName = event.getParameter("arguments").name;
		const model = this.getModel("data");
		await model.dataLoaded();
		const data = model.getData();
		// replace underscore with slash to find package
		const searchParamName = objectName.replace("_", "/");
		// find object index in data
		const objectIndex = data.packages.findIndex((object) => object.name === searchParamName);
		if (objectIndex === -1) {
			await this.getRouter().getTargets().display("objectNotFound");
			return;
		}
		this.getView().byId("ObjectPageLayout").setSelectedSection(null);
		this.getView().bindElement({
			path: `/packages/${objectIndex}`,
			model: "data",
		});
		this.getView().getParent().getParent().getParent().scrollTo(0);
	}

	public onPressStandardListItemNpmLink(event: Event): void {
		const link = event.getSource().getBindingContext("data").getObject().link;
		URLHelper.redirect(link, true);
	}
}
