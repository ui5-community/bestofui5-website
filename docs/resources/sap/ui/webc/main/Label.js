/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","sap/ui/core/LabelEnablement","./thirdparty/Label"],function(e,a,i){"use strict";var t=a.WrappingType;var p=e.extend("sap.ui.webc.main.Label",{metadata:{library:"sap.ui.webc.main",tag:"ui5-label-ui5",interfaces:["sap.ui.core.Label"],properties:{required:{type:"boolean",defaultValue:false},showColon:{type:"boolean",defaultValue:false},text:{type:"string",defaultValue:"",mapping:"textContent"},width:{type:"sap.ui.core.CSSSize",mapping:"style"},wrappingType:{type:"sap.ui.webc.main.WrappingType",defaultValue:t.None}},associations:{labelFor:{type:"sap.ui.core.Control",multiple:false,mapping:{type:"property",to:"for"}}},designtime:"sap/ui/webc/main/designtime/Label.designtime"}});i.enrich(p.prototype);return p});
//# sourceMappingURL=Label.js.map