"use strict";

sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/UIComponent", "sap/ui/core/routing/History", "../model/formatter"], function (Controller, UIComponent, History, __formatter) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const formatter = _interopRequireDefault(__formatter);
  /**
   * @namespace org.openui5.bestofui5.controller
   */
  const BaseController = Controller.extend("org.openui5.bestofui5.controller.BaseController", {
    getOwnerComponent: function _getOwnerComponent() {
      return Controller.prototype.getOwnerComponent.call(this);
    },
    getRouter: function _getRouter() {
      return UIComponent.getRouterFor(this);
    },
    getResourceBundle: function _getResourceBundle() {
      const oModel = this.getOwnerComponent().getModel("i18n");
      return oModel.getResourceBundle();
    },
    getModel: function _getModel(sName) {
      return this.getView().getModel(sName);
    },
    setModel: function _setModel(oModel, sName) {
      this.getView().setModel(oModel, sName);
      return this;
    },
    navTo: function _navTo(sName, oParameters, bReplace, source) {
      if (source !== "object") {
        this.getView().getModel("scrollState").setProperty(`/${source}`, this.getScrollTop());
      }
      // replace slash in package name because it cant be in url
      try {
        oParameters.name = oParameters.name.replace("/", "_");
      } catch (error) {
        console.info("no name parameter");
      }
      this.getRouter().navTo(sName, oParameters, undefined, bReplace);
    },
    onNavBack: function _onNavBack(event) {
      const sPreviousHash = History.getInstance().getPreviousHash();
      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getRouter().navTo("default", {}, undefined, true);
      }
    },
    onButtonHeaderSelect: function _onButtonHeaderSelect(event, headerKey) {
      this.getView().getModel("settings").setProperty("/headerKey", headerKey);
      let sourceHash = this.getRouter().getHashChanger().getHash();
      // make clear what the current view is
      sourceHash = sourceHash.split("?")[0];
      if (sourceHash.indexOf("/") > -1) {
        sourceHash = "object";
      }
      if (sourceHash === "") {
        sourceHash = "hot";
      }
      // sourceHash = sourceHash.substring(0, sourceHash.indexOf('?'))
      this.navTo(headerKey, null, null, sourceHash);
    },
    getScrollTop: function _getScrollTop() {
      try {
        return this.getView().byId("page").getScrollDelegate().getScrollTop();
      } catch (error) {
        try {
          return sap.ui.getCore().byId("__component0---rootView--page").getScrollDelegate().getScrollTop();
        } catch (error) {
          try {
            return this.getView().getParent().getParent().getParent().getScrollDelegate().getScrollTop();
          } catch (error) {
            console.info("no scroll delegate");
          }
        }
      }
    }
  });
  BaseController.formatter = formatter;
  return BaseController;
});
//# sourceMappingURL=BaseController.js.map