import BaseController from "./BaseController";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import formatter from "../model/formatter";
import Sorter from "sap/ui/model/Sorter";
import QueryControl from "./QueryControl";

/**
 * @namespace com.sap.ui5community.controller
 */
export default class Main extends BaseController {
  private formatter = formatter;

  public onInit(): void {
    this.queryControl = new QueryControl(this.getView());
    this.oRouter = this.getRouter();
    this.oRouter.getRoute("RouteMainView").attachMatched(this.onRouteMatchedMain, this);
    this.oRouter.getRoute("RouteTagsView").attachMatched(this.onRouteMatchedTags, this);
  }

  public liveSearch(event): void {
    this.queryControl.liveSearch(event);
  }

  public onUpdateToken(event): void {
    this.queryControl.onUpdateToken(event);
  }

  public onRouteMatchedMain(event): void {
    this.getOwnerComponent().getModel("settings").setProperty("/packagesVisible", true);
    this.getOwnerComponent().getModel("settings").setProperty("/tagsVisible", false);
    this.getRouter().getHashChanger().setHash("");
  }

  public onRouteMatchedTags(event): void {
    this.getOwnerComponent().getModel("settings").setProperty("/packagesVisible", false);
    this.getOwnerComponent().getModel("settings").setProperty("/tagsVisible", true);
    this.getRouter().getHashChanger().setHash("tags");
  }
}
