/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","sap/ui/core/EnabledPropagator","./thirdparty/Tab"],function(e,a,t){"use strict";var i=a.SemanticColor;var n=e.extend("sap.ui.webc.main.Tab",{metadata:{library:"sap.ui.webc.main",tag:"ui5-tab-ui5",interfaces:["sap.ui.webc.main.ITab"],properties:{additionalText:{type:"string",defaultValue:""},design:{type:"sap.ui.webc.main.SemanticColor",defaultValue:i.Default},enabled:{type:"boolean",defaultValue:true,mapping:{type:"property",to:"disabled",formatter:"_mapEnabled"}},icon:{type:"string",defaultValue:""},selected:{type:"boolean",defaultValue:false},text:{type:"string",defaultValue:""}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true},subTabs:{type:"sap.ui.webc.main.ITab",multiple:true,slot:"subTabs"}},methods:["getTabInStripDomRef"],designtime:"sap/ui/webc/main/designtime/Tab.designtime"}});t.call(n.prototype);return n});
//# sourceMappingURL=Tab.js.map