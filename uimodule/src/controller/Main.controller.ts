import BaseController from "./BaseController";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import formatter from "../model/formatter";
import Sorter from "sap/ui/model/Sorter";

/**
 * @namespace com.sap.ui5community.controller
 */
export default class Main extends BaseController {
  private formatter = formatter;

  public onInit(): void {
   }

  public onAfterRendering(event): void {
	let binding = this.getView().byId("_IDGenList1").getBinding("items");
    const oSorter = new Sorter({
      path: "downloads",
	  descending: true,
    });
    binding.sort(oSorter);
  }


  public onUpdateToken(event): void {
    const model = this.getView().getModel("settings");
    let value = model.getProperty("/search");
    value = value.trim();
    let tokenArray = model.getProperty("/tokens");

    let addOrRemove = event.getParameter("type");
    if (addOrRemove === "added") {
      tokenArray.push(event.getParameter("addedTokens")[0].getProperty("key"));
    } else if (addOrRemove === "removed") {
      let removedToken = event.getParameter("removedTokens")[0].getProperty("key");
      tokenArray = tokenArray.filter((token) => token !== removedToken);
    }
    this._applySearchFilter(value, tokenArray);
  }

  public onPress(event): void {
    // get object name from oevent
    const objectName = event.getSource().getBindingContext("data").getObject().name;
    //route to object view
    this.navTo("RouteObjectView", {
      name: objectName,
    });
  }

  public liveSearch(event): void {
    const model = this.getView().getModel("settings");
    let value = event.getParameter("value").trim();
    let tokenArray = model.getProperty("/tokens");

    this._applySearchFilter(value, tokenArray);
  }
  public _applySearchFilter(value, valueTypes): void {
    if (!value) {
      value = "";
    }
    // make sure values are set in model, needed for formatter
    this.getView().getModel("settings").setProperty("/search", value);
    this.getView().getModel("settings").setProperty("/tokens", valueTypes);
    const list = this.getView().byId("_IDGenList1");
    const listBinding = list.getBinding("items");
    const nameFilter = new Filter({
      path: "name",
      operator: FilterOperator.Contains,
      value1: value,
    });
    const descFilter = new Filter({
      path: "description",
      operator: FilterOperator.Contains,
      value1: value,
    });
    let typeFilters = [];
    for (let i = 0; i < valueTypes.length; i++) {
      let typeFilter = new Filter({
        path: "type",
        operator: FilterOperator.Contains,
        value1: valueTypes[i],
      });
      typeFilters.push(typeFilter);
    }
    const typeFilter = new Filter({
      filters: typeFilters,
      and: false,
    });
    const searchFilter = new Filter({
      filters: [nameFilter, descFilter],
      and: false,
    });
    if (typeFilters.length > 0) {
      listBinding.filter(
        new Filter({
          filters: [searchFilter, typeFilter],
          and: true,
        })
      );
    } else {
      listBinding.filter(searchFilter);
    }
  }
}
