/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","sap/ui/core/library","./thirdparty/TreeItemCustom"],function(e,t,a){"use strict";var i=a.ValueState;var l=t.ListItemType;var u=e.extend("sap.ui.webc.main.TreeItemCustom",{metadata:{library:"sap.ui.webc.main",tag:"ui5-tree-item-custom-ui5",interfaces:["sap.ui.webc.main.ITreeItem"],properties:{accessibilityAttributes:{type:"object",defaultValue:{}},accessibleName:{type:"string"},additionalTextState:{type:"sap.ui.core.ValueState",defaultValue:i.None},expanded:{type:"boolean",defaultValue:false},hasChildren:{type:"boolean",defaultValue:false},hideSelectionElement:{type:"boolean",defaultValue:false},icon:{type:"string",defaultValue:""},indeterminate:{type:"boolean",defaultValue:false},navigated:{type:"boolean"},selected:{type:"boolean",defaultValue:false},type:{type:"sap.ui.webc.main.ListItemType",defaultValue:l.Active}},defaultAggregation:"items",aggregations:{content:{type:"sap.ui.core.Control",multiple:true,slot:"content"},deleteButton:{type:"sap.ui.webc.main.IButton",multiple:false,slot:"deleteButton"},items:{type:"sap.ui.webc.main.ITreeItem",multiple:true}},events:{detailClick:{parameters:{}}},methods:["toggle"]}});return u});
//# sourceMappingURL=TreeItemCustom.js.map