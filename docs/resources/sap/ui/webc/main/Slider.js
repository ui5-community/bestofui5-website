/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","sap/ui/core/EnabledPropagator","./thirdparty/Slider"],function(e,a,t){"use strict";var i=e.extend("sap.ui.webc.main.Slider",{metadata:{library:"sap.ui.webc.main",tag:"ui5-slider-ui5",interfaces:["sap.ui.core.IFormContent"],properties:{accessibleName:{type:"string"},enabled:{type:"boolean",defaultValue:true,mapping:{type:"property",to:"disabled",formatter:"_mapEnabled"}},labelInterval:{type:"int",defaultValue:0},max:{type:"float",defaultValue:100},min:{type:"float",defaultValue:0},showTickmarks:{type:"boolean",defaultValue:false},showTooltip:{type:"boolean",defaultValue:false},step:{type:"int",defaultValue:1},value:{type:"float",defaultValue:0},width:{type:"sap.ui.core.CSSSize",mapping:"style"}},events:{change:{parameters:{}},input:{parameters:{}}},designtime:"sap/ui/webc/main/designtime/Slider.designtime"}});t.call(i.prototype);return i});
//# sourceMappingURL=Slider.js.map