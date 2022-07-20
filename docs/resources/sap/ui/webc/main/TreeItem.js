/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","sap/ui/core/library","./thirdparty/TreeItem"],function(e,t,a){"use strict";var i=a.ValueState;var l=e.extend("sap.ui.webc.main.TreeItem",{metadata:{library:"sap.ui.webc.main",tag:"ui5-tree-item-ui5",interfaces:["sap.ui.webc.main.ITreeItem"],properties:{additionalText:{type:"string"},additionalTextState:{type:"sap.ui.core.ValueState",defaultValue:i.None},expanded:{type:"boolean",defaultValue:false},hasChildren:{type:"boolean",defaultValue:false},icon:{type:"string",defaultValue:""},indeterminate:{type:"boolean",defaultValue:false},selected:{type:"boolean",defaultValue:false},text:{type:"string",defaultValue:""}},defaultAggregation:"items",aggregations:{items:{type:"sap.ui.webc.main.ITreeItem",multiple:true}},methods:["toggle"]}});return l});