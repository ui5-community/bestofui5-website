import MainController from "./Main.controller";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import formatter from "../model/formatter";
import Sorter from "sap/ui/model/Sorter";

/**
 * @namespace org.openui5.ui5community.controller
 */
export default class Tags extends MainController {
  private formatter = formatter;

  public onInit(): void {}
}
