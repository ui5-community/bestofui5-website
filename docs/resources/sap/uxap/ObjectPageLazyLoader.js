/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Element","sap/ui/core/StashedControlSupport","sap/base/assert"],function(e,t,a,n){"use strict";var r=t.extend("sap.uxap.ObjectPageLazyLoader",{metadata:{library:"sap.uxap",aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content"}},defaultAggregation:"content"}});a.mixInto(r);r.prototype.setParent=function(e){if(!(e===null||e instanceof sap.uxap.ObjectPageSubSection)){n(false,"setParent(): oParent must be an instance of sap.uxap.ObjectPageSubSection or null")}return t.prototype.setParent.apply(this,arguments)};return r});