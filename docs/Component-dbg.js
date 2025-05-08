"use strict";

sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/Device", "./model/models", "sap/ui/model/json/JSONModel", "sap/ui/core/IconPool", "sap/ui/core/ComponentSupport", "sap/ui/core/date/Gregorian", "sap/ui/model/type/Date", "sap/base/Log"], function (UIComponent, sap_ui_Device, __models, JSONModel, IconPool, sap_ui_core_ComponentSupport, sap_ui_core_date_Gregorian, sap_ui_model_type_Date, Log) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const support = sap_ui_Device["support"];
  const models = _interopRequireDefault(__models);
  // TEST
  /**
   * @namespace org.openui5.bestofui5
   */
  const Component = UIComponent.extend("org.openui5.bestofui5.Component", {
    metadata: {
      manifest: "json",
      // marker to identify async content creation
      // makes async: true for rootView obsolete!
      interfaces: ["sap.ui.core.IAsyncContentCreation"]
    },
    init: function _init() {
      // call the base component's init function
      UIComponent.prototype.init.call(this);

      // create the views based on the url/hash
      this.getRouter().initialize();
      this.getRouter().attachRoutePatternMatched(this.onTitleChanged, this);
      IconPool.registerFont({
        collectionName: "font-awesome-icons",
        fontFamily: "fa-brands",
        fontURI: "resources/font-awesome",
        lazy: true
      });
      IconPool.registerFont({
        collectionName: "font-awesome-icons-solid",
        fontFamily: "fa-solid",
        fontURI: "resources/font-awesome",
        lazy: true
      });
      const settingsModel = new JSONModel({
        filter: "all",
        tokens: [],
        search: "",
        route: "",
        selectedTab: "hotPackagesView",
        selectKey: "downloads365",
        sortOrderDecending: true,
        headerKey: "hotPackages",
        tagFilter: "tag",
        timelinePanelExpanded: false,
        allPackagesCount: 0
      });
      this.setModel(settingsModel, "settings");
      const scrollStateModel = new JSONModel({
        packages: 0,
        tags: 0,
        timeline: 0,
        contributors: 0,
        applications: 0
      });
      this.setModel(scrollStateModel, "scrollState");
      this.getRouter().attachRouteMatched(this.onBeforeRouteMatched, this);

      // set the device model
      this.setModel(models.createDeviceModel(), "device");
    },
    getContentDensityClass: function _getContentDensityClass() {
      if (this.contentDensityClass === undefined) {
        // check whether FLP has already set the content density class; do nothing in this case
        if (document.body.classList.contains("sapUiSizeCozy") || document.body.classList.contains("sapUiSizeCompact")) {
          this.contentDensityClass = "";
        } else if (!support.touch) {
          // apply "compact" mode if touch is not supported
          this.contentDensityClass = "sapUiSizeCompact";
        } else {
          // "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
          this.contentDensityClass = "sapUiSizeCozy";
        }
      }
      return this.contentDensityClass;
    },
    onTitleChanged: async function _onTitleChanged(event) {
      try {
        const oResourceBundle = this.getModel("i18n").getResourceBundle();
        const routeName = event.getParameter("config").name;
        let title = oResourceBundle.getText("component_title");
        switch (routeName) {
          case "RouteObjectView":
            let packageName = event.getParameter("arguments").name;
            const model = this.getModel("data");
            await model.dataLoaded();
            const data = model.getData();
            const objectIndex = data.packages.findIndex(object => object.name === packageName);
            const object = this.getModel("data").getProperty(`/packages/${objectIndex}`);
            title = `${object.name} - ${title}`;
            document.querySelector('meta[name="description"]').setAttribute("content", `${title} - ${object.description}`);
            document.querySelector('meta[property="og:description"]').setAttribute("content", `${title} - ${object.description}`);
            break;
          case "default":
            title = `${oResourceBundle.getText("component_hot")} - ${title}`;
            break;
          case "allPackages":
            title = `${oResourceBundle.getText("component_all")} - ${title}`;
            break;
          case "tags":
            title = `${oResourceBundle.getText("component_tags")} - ${title}`;
            break;
          case "timeline":
            title = `${oResourceBundle.getText("component_timeline")} - ${title}`;
            break;
        }
        // set window title
        document.title = title;
      } catch (error) {
        Log.warning("Title could not be set");
      }
    },
    onBeforeRouteMatched: function _onBeforeRouteMatched(event) {
      const routeName = event.getParameter("name");
      this.getModel("settings").setProperty("/route", routeName);
    }
  });
  return Component;
});
//# sourceMappingURL=Component.js.map