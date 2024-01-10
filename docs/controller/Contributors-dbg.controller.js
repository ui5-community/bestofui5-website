"use strict";

sap.ui.define(["sap/ui/model/json/JSONModel", "./BaseController"], function (JSONModel, __BaseController) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseController = _interopRequireDefault(__BaseController);
  /**
   * @namespace org.openui5.bestofui5.controller
   */
  const Timeline = BaseController.extend("org.openui5.bestofui5.controller.Timeline", {
    onInit: function _onInit() {
      this.getRouter().getRoute("contributors").attachPatternMatched(this.onPatternMatched, this);
      const jsonModel = new JSONModel();
      jsonModel.setData({
        direction: "Row",
        wrap: "Wrap"
      });
      this.getView().setModel(jsonModel, "contributorsView");
    },
    onPatternMatched: function _onPatternMatched(event) {
      this.getView().getModel("settings").setProperty("/headerKey", "contributors");
      this.getView().getParent().getParent().getParent().scrollTo(this.getView().getModel("scrollState").getProperty("/contributors"));
    },
    onExpandDetails: function _onExpandDetails(event) {
      const viewModel = this.getView().getModel("contributorsView");
      const flexBox = this.getView().byId("contributorsFlexBox");
      const direction = flexBox.getDirection();
      if (direction === "Column") {
        viewModel.setProperty("/direction", "Row");
        viewModel.setProperty("/wrap", "Wrap");
      } else {
        viewModel.setProperty("/direction", "Column");
        viewModel.setProperty("/wrap", "NoWrap");
      }
    }
  });
  return Timeline;
});
//# sourceMappingURL=Contributors.controller.js.map