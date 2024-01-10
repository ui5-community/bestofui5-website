/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/TableColumn"],function(e,a){"use strict";var i=a.TableColumnPopinDisplay;var n=e.extend("sap.ui.webc.main.TableColumn",{metadata:{library:"sap.ui.webc.main",tag:"ui5-table-column-ui5",interfaces:["sap.ui.webc.main.ITableColumn"],properties:{demandPopin:{type:"boolean",defaultValue:false},minWidth:{type:"int",defaultValue:Infinity},popinDisplay:{type:"sap.ui.webc.main.TableColumnPopinDisplay",defaultValue:i.Block},popinText:{type:"string",defaultValue:""}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true}},designtime:"sap/ui/webc/main/designtime/TableColumn.designtime"}});return n});
//# sourceMappingURL=TableColumn.js.map