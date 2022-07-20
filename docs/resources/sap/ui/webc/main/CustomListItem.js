/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","./thirdparty/CustomListItem"],function(e,t){"use strict";var i=t.ListItemType;var a=e.extend("sap.ui.webc.main.CustomListItem",{metadata:{library:"sap.ui.webc.main",tag:"ui5-li-custom-ui5",interfaces:["sap.ui.webc.main.IListItem"],properties:{accessibleName:{type:"string",defaultValue:""},selected:{type:"boolean",defaultValue:false},type:{type:"sap.ui.webc.main.ListItemType",defaultValue:i.Active}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true}},events:{detailClick:{parameters:{}}},designtime:"sap/ui/webc/main/designtime/CustomListItem.designtime"}});return a});