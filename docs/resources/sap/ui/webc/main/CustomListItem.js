/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/CustomListItem"],function(e,t){"use strict";var i=t.ListItemType;var a=e.extend("sap.ui.webc.main.CustomListItem",{metadata:{library:"sap.ui.webc.main",tag:"ui5-li-custom-ui5",interfaces:["sap.ui.webc.main.IListItem"],properties:{accessibilityAttributes:{type:"object",defaultValue:{}},accessibleName:{type:"string",defaultValue:""},navigated:{type:"boolean"},selected:{type:"boolean",defaultValue:false},type:{type:"sap.ui.webc.main.ListItemType",defaultValue:i.Active}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true},deleteButton:{type:"sap.ui.webc.main.IButton",multiple:false,slot:"deleteButton"}},events:{detailClick:{parameters:{}}},designtime:"sap/ui/webc/main/designtime/CustomListItem.designtime"}});return a});
//# sourceMappingURL=CustomListItem.js.map