"use strict";

sap.ui.define(["sap/ui/core/util/MockServer", "sap/base/Log", "sap/ui/model/json/JSONModel"], function (MockServer, Log, JSONModel) {
  "use strict";

  return {
    /**
     * Initializes the mock server.
     * You can configure the delay with the URL parameter "serverDelay".
     * The local mock data in this folder is returned instead of the real data for testing.
     * @public
     */
    init: function () {
      // create
      var oMockServer = new MockServer({
        rootUri: "https://raw.githubusercontent.com/",
        requests: [{
          method: "GET",
          path: "ui5-community/bestofui5-data/live-data/data/data.json",
          response: function (xhr) {
            // debugger;
            var oMockModel = new JSONModel();
            oMockModel.loadData("/localService/mockData/data.json", {}, false);
            // oMockModel.attachRequestCompleted(function() {
            xhr.respondJSON(200, {}, oMockModel.getJSON());
            // });
          }
        }, {
          method: "GET",
          path: "ui5-community/bestofui5-data/live-data/data/contributors.json",
          response: function (xhr) {
            // debugger;
            var oMockModel = new JSONModel();
            oMockModel.loadData("/localService/mockData/contributors.json", {}, false);
            // oMockModel.attachRequestCompleted(function() {
            xhr.respondJSON(200, {}, oMockModel.getJSON());
            // });
          }
        }, {
          method: "GET",
          path: "ui5-community/bestofui5-data/live-data/data/clones.json",
          response: function (xhr) {
            // debugger;
            var oMockModel = new JSONModel();
            oMockModel.loadData("/localService/mockData/clones.json", {}, false);
            // oMockModel.attachRequestCompleted(function() {
            xhr.respondJSON(200, {}, oMockModel.getJSON());
            // });
          }
        }, {
          method: "GET",
          path: "ui5-community/bestofui5-data/live-data/data/versions.json",
          response: function (xhr) {
            // debugger;
            var oMockModel = new JSONModel();
            oMockModel.loadData("/localService/mockData/versions.json", {}, false);
            // oMockModel.attachRequestCompleted(function() {
            xhr.respondJSON(200, {}, oMockModel.getJSON());
            // });
          }
        }]
      });

      // simulate against the metadata and mock data
      // oMockServer.simulate("../localService/metadata.xml", {
      // 	sMockdataBaseUrl: "../localService/mockdata",
      // 	bGenerateMissingMockData: true
      // });

      // start
      oMockServer.start();
      Log.info("Running the app with mock data");
    }
  };
});
//# sourceMappingURL=mockserver.js.map