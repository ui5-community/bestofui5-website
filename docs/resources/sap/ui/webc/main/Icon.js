/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/Icon"],function(e,a){"use strict";var t=a.IconDesign;var i=e.extend("sap.ui.webc.main.Icon",{metadata:{library:"sap.ui.webc.main",tag:"ui5-icon-ui5",interfaces:["sap.ui.webc.main.IIcon"],properties:{accessibleName:{type:"string",defaultValue:""},accessibleRole:{type:"string",defaultValue:""},backgroundColor:{type:"sap.ui.core.CSSColor",mapping:"style"},color:{type:"sap.ui.core.CSSColor",mapping:"style"},design:{type:"sap.ui.webc.main.IconDesign",defaultValue:t.Default},height:{type:"sap.ui.core.CSSSize",mapping:"style"},interactive:{type:"boolean",defaultValue:false},name:{type:"string",defaultValue:""},showTooltip:{type:"boolean",defaultValue:false},width:{type:"sap.ui.core.CSSSize",mapping:"style"}},events:{click:{parameters:{}}}}});i.prototype.getFormDoNotAdjustWidth=function(){return true};return i});
//# sourceMappingURL=Icon.js.map