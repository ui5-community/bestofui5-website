"use strict";

sap.ui.define(["./App.controller", "sap/ui/model/Filter", "sap/ui/model/FilterOperator"], function (__AppController, Filter, FilterOperator) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const AppController = _interopRequireDefault(__AppController);
  /**
   * @namespace org.openui5.bestofui5.controller
   */
  const Tags = AppController.extend("org.openui5.bestofui5.controller.Tags", {
    onInit: function _onInit() {
      this.getRouter().getRoute("tags").attachPatternMatched(this.onPatternMatched, this);
    },
    onPatternMatched: function _onPatternMatched(event) {
      this.getView().getModel("settings").setProperty("/headerKey", "tags");
      this.getView().getParent().getParent().getParent().scrollTo(this.getView().getModel("scrollState").getProperty("/tags"));
    },
    onSelectionChange: function _onSelectionChange(event) {
      const binding = this.getView().byId("tagsLits").getBinding("items");
      const key = event.getParameter("item").getKey();
      const filter = new Filter({
        path: "type",
        operator: FilterOperator.EQ,
        value1: key
      });
      if (key === "all") {
        binding.filter([]);
      } else {
        binding.filter(filter);
      }
    },
    onPress: function _onPress(event) {
      const item = event.getSource().getBindingContext("data").getObject();
      const tokenArray = [];
      const tokenObject = {
        key: item.name,
        type: item.type
      };
      tokenArray.push(tokenObject);
      this.getView().getModel("settings").setProperty("/tokens", tokenArray);
      this.getView().getModel("settings").setProperty("/search", "");
      this.getView().getModel("scrollState").setProperty(`/packages`, 0);
      this.applySearch();
    }
  });
  return Tags;
});
//# sourceMappingURL=Tags.controller.js.map