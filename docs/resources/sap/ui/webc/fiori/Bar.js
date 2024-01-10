/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/Bar"],function(e,t){"use strict";var i=t.BarDesign;var r=e.extend("sap.ui.webc.fiori.Bar",{metadata:{library:"sap.ui.webc.fiori",tag:"ui5-bar-ui5",interfaces:["sap.ui.webc.fiori.IBar"],properties:{design:{type:"sap.ui.webc.fiori.BarDesign",defaultValue:i.Header},width:{type:"sap.ui.core.CSSSize",mapping:"style"}},defaultAggregation:"middleContent",aggregations:{endContent:{type:"sap.ui.core.Control",multiple:true,slot:"endContent"},middleContent:{type:"sap.ui.core.Control",multiple:true},startContent:{type:"sap.ui.core.Control",multiple:true,slot:"startContent"}}}});return r});
//# sourceMappingURL=Bar.js.map