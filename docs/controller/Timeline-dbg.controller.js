"use strict";

sap.ui.define(["./BaseController", "sap/ui/webc/common/thirdparty/base/asset-registries/Icons", "org/openui5/bestofui5/resources/font-awesome/fa-brands-sap"], function (__BaseController, sap_ui_webc_common_thirdparty_base_asset_registries_Icons, __IconCollection) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseController = _interopRequireDefault(__BaseController);
  const registerIconLoader = sap_ui_webc_common_thirdparty_base_asset_registries_Icons["registerIconLoader"];
  const IconCollection = _interopRequireDefault(__IconCollection);
  /**
   * @namespace org.openui5.bestofui5.controller
   */
  const Timeline = BaseController.extend("org.openui5.bestofui5.controller.Timeline", {
    onInit: function _onInit() {
      this.getRouter().getRoute("timeline").attachPatternMatched(this.onPatternMatched, this);
      registerIconLoader("font-awesome-icons", () => {
        return IconCollection;
      });
    },
    onNameClick: function _onNameClick(event) {
      this.navTo("RouteObjectView", {
        name: event.getSource().getBindingContext("versions").getObject().name
      });
    },
    onPatternMatched: function _onPatternMatched(event) {
      this.getView().getModel("settings").setProperty("/headerKey", "timeline");
      this.getView().getParent().getParent().getParent().scrollTo(this.getView().getModel("scrollState").getProperty("/timeline"));
    },
    expandPanel: function _expandPanel(event) {
      const isExpanded = this.getView().getModel("settings").getProperty("/timelinePanelExpanded");
      this.getView().getModel("settings").setProperty("/timelinePanelExpanded", !isExpanded);
    }
  });
  return Timeline;
});
//# sourceMappingURL=Timeline.controller.js.map