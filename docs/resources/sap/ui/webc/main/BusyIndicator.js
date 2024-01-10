/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/BusyIndicator"],function(e,i){"use strict";var t=i.BusyIndicatorSize;var a=e.extend("sap.ui.webc.main.BusyIndicator",{metadata:{library:"sap.ui.webc.main",tag:"ui5-busy-indicator-ui5",properties:{active:{type:"boolean",defaultValue:false},delay:{type:"int",defaultValue:1e3},display:{type:"string",defaultValue:"inline-block",mapping:"style"},size:{type:"sap.ui.webc.main.BusyIndicatorSize",defaultValue:t.Medium},text:{type:"string",defaultValue:""},width:{type:"sap.ui.core.CSSSize",mapping:"style"}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true}},designtime:"sap/ui/webc/main/designtime/BusyIndicator.designtime"}});return a});
//# sourceMappingURL=BusyIndicator.js.map