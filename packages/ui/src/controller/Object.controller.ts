import BaseController from "./BaseController";
import History from "sap/ui/core/History";

/**
 * @namespace org.openui5.ui5community.controller
 */
export default class Main extends BaseController {
  public onInit(): void {
    this.getRouter().getRoute("RouteObjectView").attachPatternMatched(this.onPatternMatched, this);
  }

  public onPatternMatched(event): void {
    const objectName = event.getParameter("arguments").name;
    let model = this.getModel("data");
    let data = model.getData();
    // find object index in data
    let objectIndex = data.packages.findIndex((object) => object.name === objectName);
    if (!objectIndex) {
      //object not found
      // return
    }
    this.getView().bindElement({
      path: `/packages/${objectIndex}`,
      model: "data",
    });
  }

  public onNavBack(event): void {
    var sPreviousHash = History.getInstance().getPreviousHash();

    if (sPreviousHash !== undefined) {
      history.go(-1);
    } else {
      this.getRouter().navTo("RouteMainView", {}, true);
    }
  }
}
