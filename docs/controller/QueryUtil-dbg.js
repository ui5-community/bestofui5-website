"use strict";

sap.ui.define(["sap/ui/model/Filter", "sap/ui/model/FilterOperator"], function (Filter, FilterOperator) {
  class QueryUtil {
    // create constructor
    constructor(view) {
      this.view = view;
    }
    liveSearch(event) {
      const value = event.getParameter("value").trim();
      this.view.getModel("settings").setProperty("/search", value);
      this.applySearchFilter();
    }
    applySearchFilter() {
      let value = this.view.getModel("settings").getProperty("/search");
      const valueTypes = this.view.getModel("settings").getProperty("/tokens");
      if (!value) {
        value = "";
      }
      const list = this.view.byId("listAllPackages");
      const listBinding = list.getBinding("items");

      // filter by input field on name and description
      const nameFilter = new Filter({
        path: "name",
        operator: FilterOperator.Contains,
        value1: value
      });
      const descFilter = new Filter({
        path: "description",
        operator: FilterOperator.Contains,
        value1: value
      });
      // filter valueTypes by type "tag"
      const valueTypesTags = valueTypes.filter(function (obj) {
        return obj.type === "tag";
      });

      // filter tag array on object
      const tagsFilter = new Filter("tags", function (array) {
        let checker = (arr, target) => target.every(v => arr.includes(v.key) && v.type === "tag");
        if (checker(array, valueTypesTags)) {
          return true;
        }
      }.bind(this));

      // filter types on object
      const typeFilters = [];
      for (let i = 0; i < valueTypes.length; i++) {
        if (valueTypes[i].type === "type") {
          const typeFilter = new Filter({
            path: "type",
            operator: FilterOperator.EQ,
            value1: valueTypes[i].key
          });
          typeFilters.push(typeFilter);
        }
      }
      const typeFilter = new Filter({
        filters: typeFilters,
        and: true
      });

      // filter license on object
      const licenseFilters = [];
      for (let i = 0; i < valueTypes.length; i++) {
        if (valueTypes[i].type === "license") {
          const licenseFilter = new Filter({
            path: "licenseSource",
            operator: FilterOperator.EQ,
            value1: valueTypes[i].key
          });
          licenseFilters.push(licenseFilter);
        }
      }
      const licenseFilter = new Filter({
        filters: licenseFilters,
        and: true
      });
      const filters = [];
      if (valueTypesTags.length > 0) {
        filters.push(tagsFilter);
      }
      if (typeFilter.aFilters && typeFilter.aFilters.length > 0) {
        filters.push(typeFilter);
      }
      if (licenseFilter.aFilters && licenseFilter.aFilters.length > 0) {
        filters.push(licenseFilter);
      }
      const typesTagsFilter = new Filter({
        filters: filters,
        and: true
      });
      const searchFilter = new Filter({
        filters: [nameFilter, descFilter],
        and: false
      });
      if (valueTypes.length > 0) {
        listBinding.filter(new Filter({
          filters: [searchFilter, typesTagsFilter],
          and: true
        }));
      } else {
        listBinding.filter(searchFilter);
      }
      this.setQueryParameters();
    }
    onSelectionChange(event) {
      const model = this.view.getModel("settings");
      let tokenArray = model.getProperty("/tokens");
      const selected = event.getParameter("selected");
      if (selected) {
        const keyArray = event.getParameter("changedItem").getKey().split(";");
        const tokenObject = {
          key: keyArray[0],
          type: keyArray[1]
        };
        tokenArray.push(tokenObject);
      } else {
        const keyArray = event.getParameter("changedItem").getKey().split(";");
        const tokenObject = {
          key: keyArray[0],
          type: keyArray[1]
        };
        // filter token object array with key and type values
        tokenArray = tokenArray.filter(function (obj) {
          return !(obj.key === tokenObject.key && obj.type === tokenObject.type);
        });
      }
      this.view.getModel("settings").setProperty("/tokens", tokenArray);
    }
    getParameterFromQuery(eventArguments) {
      if ("search" in eventArguments) {
        this.view.getModel("settings").setProperty("/search", eventArguments.search);
      }
      if ("tokens" in eventArguments) {
        // create tokens objects
        const tokens = eventArguments.tokens.split(",").map(function (obj) {
          const attributes = obj.split(":");
          return {
            key: attributes[0],
            type: attributes[1]
          };
        });
        this.view.getModel("settings").setProperty("/tokens", tokens);
      }
      if ("sort" in eventArguments) {
        this.view.getModel("settings").setProperty("/selectKey", eventArguments.sort);
      }
      if ("order" in eventArguments) {
        const order = eventArguments.order === "asc" ? false : true;
        this.view.getModel("settings").setProperty("/sortOrderDecending", order);
      }
    }
    setQueryParameters() {
      const searchParameter = this.view.getModel("settings").getProperty("/search");
      const tokens = this.view.getModel("settings").getProperty("/tokens");
      let sortKey = this.view.getModel("settings").getProperty("/selectKey");
      let sortOrder = this.view.getModel("settings").getProperty("/sortOrderDecending");
      // dont set 'downloads365' in query because it is default value
      if (sortKey === "downloads365") {
        sortKey = "";
      }
      // join tokens objects attributes to string
      const tokenString = tokens.map(function (obj) {
        return `${obj.key}:${obj.type}`;
      }).join(",");
      const queries = {
        search: searchParameter,
        tokens: tokenString,
        sort: sortKey,
        order: sortOrder ? "" : "asc"
      };
      // remove empty values from queries
      Object.keys(queries).forEach(function (key) {
        if (!queries[key]) {
          delete queries[key];
        }
      });
      let queryString = "packages?";
      // concat query string for hash with loop over dict, the first one without "&"
      for (let key in queries) {
        if (queries[key] !== undefined && queries[key] !== null && queries[key] !== "") {
          // the first one without "&"
          if (key === Object.keys(queries)[0]) {
            queryString += key + "=" + queries[key];
          } else {
            queryString += "&" + key + "=" + queries[key];
          }
        }
      }
      if (queryString !== "packages?") {
        this.view.getController().getRouter().getHashChanger().setHash(queryString);
      } else {
        this.view.getController().getRouter().getHashChanger().setHash("packages");
      }
    }
  }
  return QueryUtil;
});
//# sourceMappingURL=QueryUtil.js.map