import MainController from "./Main.controller";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import formatter from "../model/formatter";
import Sorter from "sap/ui/model/Sorter";
import QueryControl from "./QueryControl";

/**
 * @namespace org.openui5.ui5community.controller
 */
export default class AllPackages extends MainController {
  private formatter = formatter;

  public onInit(): void {
    this.queryControl = new QueryControl(this.getView());
    this.getRouter().getRoute("allPackages").attachPatternMatched(this.onPatternMatched, this);
  }

  public onPatternMatched(event): void {
    const search = this.getView().getModel("settings").getProperty("/search");
    const token = this.getView().getModel("settings").getProperty("/tokens");
    this.queryControl.applySearchFilter();
    // // save the current query state
    // this._oRouterArgs = event.getParameter("arguments");
    // this._oRouterArgs["?query"] = this._oRouterArgs["?query"] || {};
    // // search/filter via URL hash
    // if (this._oRouterArgs["?query"].search || this._oRouterArgs["?query"].filterType) {
    //   this._applySearchFilter(this._oRouterArgs["?query"].search, this._oRouterArgs["?query"].filterType);
    // }
  }

  public onAfterRendering(event): void {
    let binding = this.getView().byId("listAllPackages").getBinding("items");
    const oSorter = new Sorter({
      path: "downloads365",
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

  public onSortSelectChange(event): void {
    const selectKey = event.getParameter("selectedItem").getKey();
    let binding = this.getView().byId("listAllPackages").getBinding("items");
    const oSorter = new Sorter({
      path: selectKey,
      descending: true,
    });
    binding.sort(oSorter);
    
  }
}
