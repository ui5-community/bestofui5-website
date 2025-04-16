"use strict";

sap.ui.define(["./App.controller"], function (__AppController) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const AppController = _interopRequireDefault(__AppController);
  /**
   * @namespace org.openui5.bestofui5.controller
   */
  const HotPackages = AppController.extend("org.openui5.bestofui5.controller.HotPackages", {
    onInit: function _onInit() {
      this.getRouter().getRoute("default").attachPatternMatched(this.onPatternMatched, this);
    },
    onPatternMatched: function _onPatternMatched(event) {
      this.getView().getModel("settings").setProperty("/headerKey", "hotPackages");
      this.getView().getParent().getParent().getParent().scrollTo(this.getView().getModel("scrollState").getProperty("/hot"));
    },
    onPress: function _onPress(event) {
      // get object name from oevent
      const objectName = event.getSource().getBindingContext("data").getObject().name;
      //route to object view
      this.navTo("RouteObjectView", {
        name: objectName
      });
    }
  });
  return HotPackages;
});
//# sourceMappingURL=HotPackages.controller.js.map