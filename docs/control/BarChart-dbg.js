"use strict";

sap.ui.define(["sap/ui/core/Control", "chart.js/auto"], function (Control, __Chart) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  // https://www.chartjs.org/docs/latest/getting-started/integration.html#bundlers-webpack-rollup-etc
  const Chart = _interopRequireDefault(__Chart);
  /**
   * @name org.openui5.bestofui5.control.BarChart
   */
  const BarChart = Control.extend("org.openui5.bestofui5.control.BarChart", {
    renderer: {
      apiVersion: 2,
      render: (rm, chart) => {
        rm.openStart("div", chart);
        rm.style("color", chart.getColor());
        rm.class("chartPadding");
        rm.openEnd();
        rm.openStart("canvas", chart.getId() + "-canvas");
        rm.openEnd();
        rm.close("canvas");
        rm.close("div");
      }
    },
    metadata: {
      properties: {
        title: "string",
        color: "sap.ui.core.CSSColor"
      },
      aggregations: {
        records: {
          type: "org.openui5.bestofui5.control.ChartRecord"
        }
      },
      defaultAggregation: "records"
    },
    constructor: function _constructor(id, settings) {
      Control.prototype.constructor.call(this, id, settings);
    },
    _getChartData: function _getChartData() {
      const aRecords = this.getRecords();
      return {
        labels: aRecords.map(record => {
          return record.getLabel();
        }),
        datasets: [{
          label: this.getTitle(),
          backgroundColor: this.getColor(),
          borderColor: this.getColor(),
          data: aRecords.map(record => {
            return record.getValue();
          })
        }]
      };
    },
    onAfterRendering: function _onAfterRendering() {
      if (!this._chart) {
        this._chart = new Chart(this.getDomRef("canvas"), {
          type: "bar",
          data: this._getChartData(),
          options: {
            responsive: true,
            animation: false,
            scales: {
              x: {
                display: false
              }
            }
          }
        });
      } else {
        this._chart.data = this._getChartData();
        this._chart.update();
      }
    }
  });
  return BarChart;
});
//# sourceMappingURL=BarChart.js.map