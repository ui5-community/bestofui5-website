import BaseController from "./BaseController";
import History from "sap/ui/core/History";

/**
 * @namespace com.sap.ui5community.controller
 */
export default class Main extends BaseController {

	public onInit() : void {
		this.getRouter().getRoute("RouteObjectView").attachPatternMatched(this.onPatternMatched, this);
	}

	public onPatternMatched(event) : void {
        const objectName = event.getParameter("arguments").name;
        let model = this.getModel("packages");
        let data = model.getData();
        // find object index in data
        let objectIndex = data.findIndex((object) => object.name === objectName);
        if (!objectIndex) {
          //object not found
          // return
        }
        this.getView().bindElement({
          path: `/${objectIndex}`,
          model: "packages",
        });
	}

	public onNavBack(event) : void {
        var sPreviousHash = History.getInstance().getPreviousHash();

        if (sPreviousHash !== undefined) {
          history.go(-1);
        } else {
          this.getRouter().navTo("RouteMainView", {}, true);
        }
	}





}
