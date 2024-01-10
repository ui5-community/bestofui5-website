/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","sap/ui/core/EnabledPropagator","./thirdparty/RangeSlider"],function(e,a,t){"use strict";var l=e.extend("sap.ui.webc.main.RangeSlider",{metadata:{library:"sap.ui.webc.main",tag:"ui5-range-slider-ui5",properties:{accessibleName:{type:"string"},enabled:{type:"boolean",defaultValue:true,mapping:{type:"property",to:"disabled",formatter:"_mapEnabled"}},endValue:{type:"float",defaultValue:100},labelInterval:{type:"int",defaultValue:0},max:{type:"float",defaultValue:100},min:{type:"float",defaultValue:0},showTickmarks:{type:"boolean",defaultValue:false},showTooltip:{type:"boolean",defaultValue:false},startValue:{type:"float",defaultValue:0},step:{type:"int",defaultValue:1},width:{type:"sap.ui.core.CSSSize",mapping:"style"}},events:{change:{parameters:{}},input:{parameters:{}}},designtime:"sap/ui/webc/main/designtime/RangeSlider.designtime"}});t.call(l.prototype);return l});
//# sourceMappingURL=RangeSlider.js.map