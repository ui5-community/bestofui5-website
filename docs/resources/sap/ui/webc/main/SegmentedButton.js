/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","./thirdparty/SegmentedButton"],function(e,t){"use strict";var i=e.extend("sap.ui.webc.main.SegmentedButton",{metadata:{library:"sap.ui.webc.main",tag:"ui5-segmented-button-ui5",interfaces:["sap.ui.core.IFormContent"],properties:{accessibleName:{type:"string"},width:{type:"sap.ui.core.CSSSize",mapping:"style"}},defaultAggregation:"items",aggregations:{items:{type:"sap.ui.webc.main.ISegmentedButtonItem",multiple:true}},events:{selectionChange:{parameters:{selectedItem:{type:"HTMLElement"}}}},getters:["selectedItem"]}});i.prototype.getFormDoNotAdjustWidth=function(){return true};return i});