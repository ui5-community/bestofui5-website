/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
export default class QueryControl {
  private view: sap.ui.core.mvc.View;
  // create constructor
  constructor(view) {
    this.view = view;
  }

  public liveSearch(event): void {
    const value = event.getParameter("value").trim();
    this.view.getModel("settings").setProperty("/search", value);
    this.applySearchFilter();
  }

  public applySearchFilter(): void {
    let value =  this.view.getModel("settings").getProperty("/search");
    const valueTypes = this.view.getModel("settings").getProperty("/tokens");
    if (!value) {
      value = "";
    }
    const list = this.view.byId("listAllPackages");
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
    const tagsFilter = new Filter(
      // currently types and tags are both in tags, may need to differ in future
      "ui5-community/tags",
      function (array) {
        // check if the array contains values of another array
        return valueTypes.some(function (value) {
          return array.indexOf(value) > -1;
        });
      }.bind(this)
    );
    const typesFilter = new Filter(
      // currently types and tags are both in tags, may need to differ in future
      "ui5-community/types",
      function (array) {
        // check if the array contains values of another array
        return valueTypes.some(function (value) {
          return array.indexOf(value) > -1;
        });
      }.bind(this)
    );
    const typesTagsFilter = new Filter({
      filters: [tagsFilter, typesFilter],
      and: false,
    });
    const searchFilter = new Filter({
      filters: [nameFilter, descFilter],
      and: false,
    });
    if (valueTypes.length > 0) {
      listBinding.filter(
        new Filter({
          filters: [searchFilter, typesTagsFilter],
          and: true,
        })
      );
    } else {
      listBinding.filter(searchFilter);
    }
  }

  public onUpdateToken(event): void {
    const model = this.view.getModel("settings");
    let tokenArray = model.getProperty("/tokens");

    let addOrRemove = event.getParameter("type");
    if (addOrRemove === "added") {
      tokenArray.push(event.getParameter("addedTokens")[0].getProperty("key"));
    } else if (addOrRemove === "removed") {
      let removedToken = event.getParameter("removedTokens")[0].getProperty("key");
      tokenArray = tokenArray.filter((token) => token !== removedToken);
    }
    this.view.getModel("settings").setProperty("/tokens", tokenArray);
    // this.applySearchFilter(value, tokenArray);
  }
}
