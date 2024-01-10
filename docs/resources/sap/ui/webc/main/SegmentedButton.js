/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/SegmentedButton"],function(e,t){"use strict";var n=t.SegmentedButtonMode;var i=e.extend("sap.ui.webc.main.SegmentedButton",{metadata:{library:"sap.ui.webc.main",tag:"ui5-segmented-button-ui5",interfaces:["sap.ui.core.IFormContent"],properties:{accessibleName:{type:"string",defaultValue:undefined},mode:{type:"sap.ui.webc.main.SegmentedButtonMode",defaultValue:n.SingleSelect},width:{type:"sap.ui.core.CSSSize",mapping:"style"}},defaultAggregation:"items",aggregations:{items:{type:"sap.ui.webc.main.ISegmentedButtonItem",multiple:true}},events:{selectionChange:{parameters:{selectedItem:{type:"HTMLElement"},selectedItems:{type:"HTMLElement[]"}}}},getters:["selectedItems"]}});i.prototype.getFormDoNotAdjustWidth=function(){return true};return i});
//# sourceMappingURL=SegmentedButton.js.map