"use strict";

sap.ui.define(["./App.controller", "sap/ui/model/Sorter", "sap/base/Log"], function (__AppController, Sorter, Log) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const AppController = _interopRequireDefault(__AppController);
  /**
   * @namespace org.openui5.bestofui5.controller
   */
  const AllPackages = AppController.extend("org.openui5.bestofui5.controller.AllPackages", {
    onInit: function _onInit() {
      AppController.prototype.onInit.call(this);
      this.getRouter().getRoute("allPackages").attachEventOnce("patternMatched", this.onPatternMatchedOnce, this);
    },
    onPatternMatchedOnce: function _onPatternMatchedOnce(event) {
      this.getView().getModel("settings").setProperty("/headerKey", "allPackages");
      this.getRouter().getRoute("allPackages").attachPatternMatched(this.onPatternMatched, this);
      try {
        const routerArgsObject = event.getParameter("arguments")["?query"] ? event.getParameter("arguments")["?query"] : {};
        // check if object is empty
        if (!(routerArgsObject && Object.keys(routerArgsObject).length === 0 && Object.getPrototypeOf(routerArgsObject) === Object.prototype)) {
          this.queryUtil.getParameterFromQuery(routerArgsObject);
          this.filterFromQuery(routerArgsObject);
        }
      } catch (error) {
        Log.error(this.getResourceBundle().getText("all_packages_controller_queryparsing"));
      }
      this.applySearchFilter();
      this.sortList(this.getView().getModel("settings").getProperty("/selectKey"), true);
    },
    onPatternMatched: function _onPatternMatched(event) {
      this.getView().getParent().getParent().getParent().scrollTo(this.getView().getModel("scrollState").getProperty("/packages"));
      this.getView().getModel("settings").setProperty("/headerKey", "allPackages");
      this.applySearchFilter();
    },
    applySearchFilter: function _applySearchFilter() {
      this.queryUtil.applySearchFilter();
      this.setSelectedItems();
    },
    setSelectedItems: function _setSelectedItems() {
      const multiComboBox = this.byId("multiComboBox");
      const selectedItems = this.getView().getModel("settings").getProperty("/tokens");
      let keyArray = [];
      for (let i = 0; i < selectedItems.length; i++) {
        keyArray.push(`${selectedItems[i].key};${selectedItems[i].type}`);
      }
      multiComboBox.setSelectedKeys(keyArray);
    },
    onPress: function _onPress(event) {
      // get object name from oevent
      const objectName = event.getSource().getBindingContext("data").getObject().name;
      //route to object view
      this.navTo("RouteObjectView", {
        name: objectName
      }, null, "object");
    },
    onSortSelectChange: function _onSortSelectChange(event) {
      const selectKey = event.getParameter("selectedItem").getKey();
      this.sortList(selectKey);
      this.queryUtil.setQueryParameters();
    },
    sortList: function _sortList(sortKey) {
      const sortOrderDecending = this.getView().getModel("settings").getProperty("/sortOrderDecending");
      const binding = this.getView().byId("listAllPackages").getBinding("items");
      const oSorter = new Sorter({
        path: sortKey,
        descending: sortOrderDecending
      });
      binding.sort(oSorter);
      this.getView().getModel("settings").setProperty("/selectKey", sortKey);
    },
    filterFromQuery: function _filterFromQuery(eventArguments) {
      if ("sort" in eventArguments) {
        this.sortList(eventArguments.sort);
      }
    },
    onSelectionChange: function _onSelectionChange(event) {
      this.queryUtil.onSelectionChange(event);
      this.applySearchFilter();
    },
    changeSortOrder: function _changeSortOrder(event) {
      const sortOrderDecending = this.getView().getModel("settings").getProperty("/sortOrderDecending");
      const sortKey = this.getView().getModel("settings").getProperty("/selectKey");
      this.getView().getModel("settings").setProperty("/sortOrderDecending", !sortOrderDecending);
      this.sortList(sortKey);
      this.queryUtil.setQueryParameters();
    },
    onUpdateFinished: function _onUpdateFinished(event) {
      const iTotalItems = event.getParameter("total");
      this.getView().getModel("settings").setProperty("/allPackagesCount", iTotalItems);
    }
  });
  return AllPackages;
});
//# sourceMappingURL=AllPackages.controller.js.map