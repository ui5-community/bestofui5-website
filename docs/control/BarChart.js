"use strict";sap.ui.define(["sap/ui/core/Control","chart.js/auto"],function(t,e){function o(t){return t&&t.__esModule&&typeof t.default!=="undefined"?t.default:t}const a=o(e);const r=t.extend("org.openui5.bestofui5.control.BarChart",{renderer:{apiVersion:2,render:(t,e)=>{t.openStart("div",e);t.style("color",e.getColor());t.class("chartPadding");t.openEnd();t.openStart("canvas",e.getId()+"-canvas");t.openEnd();t.close("canvas");t.close("div")}},metadata:{properties:{title:"string",color:"sap.ui.core.CSSColor"},aggregations:{records:{type:"org.openui5.bestofui5.control.ChartRecord"}},defaultAggregation:"records"},constructor:function e(o,a){t.prototype.constructor.call(this,o,a)},_getChartData:function t(){const e=this.getRecords();return{labels:e.map(t=>t.getLabel()),datasets:[{label:this.getTitle(),backgroundColor:this.getColor(),borderColor:this.getColor(),data:e.map(t=>t.getValue())}]}},onAfterRendering:function t(){if(!this._chart){this._chart=new a(this.getDomRef("canvas"),{type:"bar",data:this._getChartData(),options:{responsive:true,animation:false,scales:{x:{display:false}}}})}else{this._chart.data=this._getChartData();this._chart.update()}}});return r});
//# sourceMappingURL=BarChart.js.map