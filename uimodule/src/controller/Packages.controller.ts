import MainController from "./Main.controller";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import formatter from "../model/formatter";
import Sorter from "sap/ui/model/Sorter";

/**
 * @namespace com.sap.ui5community.controller
 */
export default class Packages extends MainController {
  private formatter = formatter;

  public onInit(): void {}

  public onAfterRendering(event): void {
    let binding = this.getView().byId("_IDGenList1").getBinding("items");
    const oSorter = new Sorter({
      path: "downloads",
      descending: true,
    });
    binding.sort(oSorter);
  }

  public onPress(event): void {
    // get object name from oevent
    const objectName = event.getSource().getBindingContext("data").getObject().name;
    //route to object view
    this.navTo("RouteObjectView", {
      name: objectName,
    });
  }
}
