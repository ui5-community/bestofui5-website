/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/upload/p13n/mediator/BaseMediator","sap/m/p13n/SortPanel","sap/m/upload/p13n/modules/CustomDataConfig","sap/ui/core/Configuration","sap/base/util/deepEqual","sap/ui/model/Sorter"],function(e,t,n,r,o,a){"use strict";const i=e.extend("sap.m.upload.p13n.mediator.SortMediator",{constructor:function(t){e.call(this,t)}});i.prototype.createPanel=function(){return Promise.resolve(this.createUi(this.getPanelData()))};i.prototype.createUi=function(e){this._oPanel=new t;this._oPanel.setP13nData(e);return this._oPanel};i.prototype.getPanelData=function(){const e=this.arrayToMap(this.getCurrentState(),true);const t=[],n=this.getControl()._getP13nMetadata();n[this.getP13nMetadataTarget()].forEach(n=>{t.push({name:n.key,label:n.label||n.key,tooltip:n.tooltip,index:e[n.key]?e[n.key].index:undefined,sorted:!!e[n.key],descending:e[n.key]?e[n.key].descending:undefined})});const o=r.getLocale().toString(),a=window.Intl.Collator(o,{});t.sort((e,t)=>{if(e.sorted&&t.sorted){return(e.index||0)-(t.index||0)}if(e.sorted){return-1}if(t.sorted){return 1}return a.compare(e.label,t.label)});t.forEach(e=>delete e.index);return t};i.prototype.getCurrentState=function(){const e=n.read(this.getControl())||{};const t=e.hasOwnProperty("properties")&&e.properties[this.getTargetAggregation()]?e.properties[this.getTargetAggregation()]:{};const r=Object.values(t).filter(e=>e.sorted).sort((e,t)=>e.index-t.index);return r.map(e=>({key:e.key,descending:e.descending}))};i.prototype.getChanges=function(){const e=[],t=this.getCurrentState(),n=this._getP13nData(),r=n.filter(e=>!!e.sorted).map(e=>({key:e.name,descending:e.descending}));if(o(t,r)){return e}const a=this._getDeletes(t,r),i=this._getInserts(t,r),s=this._getMove(t,r,a,i);e.push(this.createChange("uploadSetTableSortStateChange",{deleted:a,moved:s,inserted:i}));return e};i.prototype._getP13nData=function(){return this._oPanel?this._oPanel.getP13nData():{}};i.prototype._getDeletes=function(e,t){const n=[],r=this.arrayToMap(t);e.forEach((e,t)=>{if(!r[e.key]){n.push({key:e.key,prevIndex:t,prevDescending:e.descending})}});return n};i.prototype._getInserts=function(e,t){const n=[],r=this.arrayToMap(e);t.forEach((e,t)=>{if(!r[e.key]){n.push({key:e.key,index:t,descending:e.descending})}});return n};i.prototype._getMove=function(e,t){const n=[],r=this.arrayToMap(t,true);e.forEach((e,t)=>{if(r[e.key]&&(r[e.key].index!==t||r[e.key].descending!==e.descending)){n.push({key:e.key,index:r[e.key].index,prevIndex:t,descending:r[e.key].descending,prevDescending:e.descending})}});return n};i.prototype.applyStateToTable=function(e={}){const t=this.getCurrentState();if(t.length){const n=this.getControl()._getP13nMetadata()[this.getP13nMetadataTarget()]??[],r=this.arrayToMap(n);t.forEach(t=>{if(!r[t.key]){return}if(e[t.key]){e[t.key].bDescending=t.descending}else{e[t.key]=new a(r[t.key].path,t.descending)}})}};return i});
//# sourceMappingURL=SortMediator.js.map