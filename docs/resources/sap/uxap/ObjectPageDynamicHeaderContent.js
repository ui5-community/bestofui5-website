/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","./ObjectPageDynamicHeaderContentRenderer","sap/f/DynamicPageHeader"],function(e,t,n){"use strict";var r=n.extend("sap.uxap.ObjectPageDynamicHeaderContent",{metadata:{interfaces:["sap.uxap.IHeaderContent"],library:"sap.uxap"},renderer:t});r.createInstance=function(e,t,n,a,i){return new r({content:e,visible:t,pinnable:a,id:i})};r.prototype.supportsPinUnpin=function(){return true};r.prototype.supportsChildPageDesign=function(){return false};r.prototype.supportsAlwaysExpanded=function(){return false};r.prototype.setContentDesign=function(e){};r.prototype.setVisible=function(e){this.getParent()&&this.getParent().toggleStyleClass("sapUxAPObjectPageLayoutNoHeaderContent",!e);return this.setProperty("visible",e)};return r});
//# sourceMappingURL=ObjectPageDynamicHeaderContent.js.map