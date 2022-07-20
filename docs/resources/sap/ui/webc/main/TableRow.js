/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","./thirdparty/TableRow"],function(e,a){"use strict";var t=a.TableRowType;var i=e.extend("sap.ui.webc.main.TableRow",{metadata:{library:"sap.ui.webc.main",tag:"ui5-table-row-ui5",interfaces:["sap.ui.webc.main.ITableRow"],properties:{selected:{type:"boolean",defaultValue:false},type:{type:"sap.ui.webc.main.TableRowType",defaultValue:t.Inactive}},defaultAggregation:"cells",aggregations:{cells:{type:"sap.ui.webc.main.ITableCell",multiple:true}}}});return i});