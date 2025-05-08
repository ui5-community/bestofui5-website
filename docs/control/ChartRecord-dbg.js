"use strict";

sap.ui.define(["sap/ui/core/Element"], function (UI5Element) {
  /**
   * @name org.openui5.bestofui5.control.ChartRecord
   */
  const ChartRecord = UI5Element.extend("org.openui5.bestofui5.control.ChartRecord", {
    metadata: {
      properties: {
        label: "string",
        value: "int"
      }
    },
    constructor: function _constructor(id, settings) {
      UI5Element.prototype.constructor.call(this, id, settings);
    }
  });
  return ChartRecord;
});
//# sourceMappingURL=ChartRecord.js.map