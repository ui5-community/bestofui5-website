/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","./ObjectPageDynamicHeaderContentRenderer","sap/base/Log","sap/f/DynamicPageHeader"],function(e,t,n,a){"use strict";var r=a.extend("sap.uxap.ObjectPageDynamicHeaderContent",{metadata:{interfaces:["sap.uxap.IHeaderContent"],library:"sap.uxap"}});r.createInstance=function(e,t,n,a,s){return new r({content:e,visible:t,pinnable:a,id:s})};r.prototype.supportsPinUnpin=function(){return true};r.prototype.supportsChildPageDesign=function(){return false};r.prototype.supportsAlwaysExpanded=function(){return false};r.prototype.setContentDesign=function(e){};r.prototype.setVisible=function(e){this.getParent()&&this.getParent().toggleStyleClass("sapUxAPObjectPageLayoutNoHeaderContent",!e);return this.setProperty("visible",e)};return r});