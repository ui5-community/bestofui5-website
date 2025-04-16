"use strict";

sap.ui.define(["./BaseController"], function (__BaseController) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseController = _interopRequireDefault(__BaseController);
  /**
   * @namespace org.openui5.bestofui5.controller
   */
  const Applications = BaseController.extend("org.openui5.bestofui5.controller.Applications", {
    onInit: function _onInit() {
      this.getRouter().getRoute("applications").attachPatternMatched(this.onPatternMatched, this);
    },
    onPatternMatched: function _onPatternMatched(event) {
      this.getView().getModel("settings").setProperty("/headerKey", "applications");
      this.getView().getParent().getParent().getParent().scrollTo(this.getView().getModel("scrollState").getProperty("/applications"));
    }
  });
  return Applications;
});
//# sourceMappingURL=Applications.controller.js.map