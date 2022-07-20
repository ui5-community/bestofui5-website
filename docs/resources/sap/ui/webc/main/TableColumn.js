/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","./thirdparty/TableColumn"],function(e,t){"use strict";var a=e.extend("sap.ui.webc.main.TableColumn",{metadata:{library:"sap.ui.webc.main",tag:"ui5-table-column-ui5",interfaces:["sap.ui.webc.main.ITableColumn"],properties:{demandPopin:{type:"boolean",defaultValue:false},minWidth:{type:"int",defaultValue:Infinity},popinText:{type:"string",defaultValue:""}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true}},designtime:"sap/ui/webc/main/designtime/TableColumn.designtime"}});return a});