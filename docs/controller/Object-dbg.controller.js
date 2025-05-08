"use strict";

sap.ui.define(["./BaseController", "sap/m/library"], function (__BaseController, sap_m_library) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseController = _interopRequireDefault(__BaseController);
  const URLHelper = sap_m_library["URLHelper"];
  /**
   * @namespace org.openui5.bestofui5.controller
   */
  const Object = BaseController.extend("org.openui5.bestofui5.controller.Object", {
    onInit: function _onInit() {
      this.getRouter().getRoute("RouteObjectView").attachPatternMatched(this.onPatternMatched, this);
    },
    onPatternMatched: async function _onPatternMatched(event) {
      this.getView().getModel("settings").setProperty("/headerKey", "allPackages");
      const objectName = event.getParameter("arguments").name;
      const model = this.getModel("data");
      await model.dataLoaded();
      const data = model.getData();
      // replace underscore with slash to find package
      const searchParamName = objectName.replace("_", "/");
      // find object index in data
      const objectIndex = data.packages.findIndex(object => object.name === searchParamName);
      if (objectIndex === -1) {
        await this.getRouter().getTargets().display("objectNotFound");
        return;
      }
      this.getView().byId("ObjectPageLayout").setSelectedSection(null);
      this.getView().bindElement({
        path: `/packages/${objectIndex}`,
        model: "data"
      });
      this.getView().getParent().getParent().getParent().scrollTo(0);
    },
    onPressStandardListItemNpmLink: function _onPressStandardListItemNpmLink(event) {
      const link = event.getSource().getBindingContext("data").getObject().link;
      URLHelper.redirect(link, true);
    }
  });
  return Object;
});
//# sourceMappingURL=Object.controller.js.map