"use strict";

sap.ui.define(["sap/m/MessageToast", "./BaseController", "./QueryUtil"], function (MessageToast, __BaseController, __QueryUtil) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseController = _interopRequireDefault(__BaseController);
  const QueryUtil = _interopRequireDefault(__QueryUtil);
  /**
   * @namespace org.openui5.bestofui5.controller
   */
  const App = BaseController.extend("org.openui5.bestofui5.controller.App", {
    onInit: function _onInit() {
      this.queryUtil = new QueryUtil(this.getView());
    },
    liveSearch: function _liveSearch(event) {
      const value = event.getParameter("value").trim();
      // delay search input
      if (this.timerId) {
        clearTimeout(this.timerId);
      }
      this.timerId = setTimeout(() => {
        this.liveSearchHandler(value);
      }, 500);
    },
    liveSearchHandler: function _liveSearchHandler(value) {
      // const value = event.getParameter("value").trim();
      this.getView().getModel("settings").setProperty("/search", value);
      this.applySearch();
    },
    applySearch: function _applySearch() {
      if (!this.getRouter().getHashChanger().getHash().startsWith("packages")) {
        this.getView().getModel("settings").setProperty("/headerKey", "allPackages");
        this.navTo("allPackages", null, null, this.getRouter().getHashChanger().getHash());
      } else {
        this.getOwnerComponent().byId("AllPackages").getController().applySearchFilter();
      }
    },
    copyLinkToClipboard: async function _copyLinkToClipboard(event) {
      const resourceBundle = this.getView().getModel("i18n").getResourceBundle();
      try {
        // try using standard clipboard API
        if ("clipboard" in navigator) {
          await navigator.clipboard.writeText(window.location.href);
          return MessageToast.show(resourceBundle.getText("app_view_link_copy"));
        }
        // fallback if clipboard API is not supported
        const dummy = document.createElement("input");
        document.body.appendChild(dummy);
        dummy.setAttribute("value", window.location.href);
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
        MessageToast.show(resourceBundle.getText("app_view_link_copy"));
      } catch (error) {
        console.error(error);
        MessageToast.show(resourceBundle.getText("app_view_link_copy_failed"));
      }
    },
    onAfterRendering: function _onAfterRendering() {
      document.body.classList.remove("splash");
    }
  });
  return App;
});
//# sourceMappingURL=App.controller.js.map