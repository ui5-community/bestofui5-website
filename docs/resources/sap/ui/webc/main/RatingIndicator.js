/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","sap/ui/core/EnabledPropagator","./thirdparty/RatingIndicator"],function(e,a,t){"use strict";var i=e.extend("sap.ui.webc.main.RatingIndicator",{metadata:{library:"sap.ui.webc.main",tag:"ui5-rating-indicator-ui5",interfaces:["sap.ui.core.IFormContent"],properties:{accessibleName:{type:"string"},enabled:{type:"boolean",defaultValue:true,mapping:{type:"attribute",to:"disabled",formatter:"_mapEnabled"}},max:{type:"int",defaultValue:5},readonly:{type:"boolean",defaultValue:false},value:{type:"float",defaultValue:0},width:{type:"sap.ui.core.CSSSize",mapping:"style"}},events:{change:{parameters:{}}},designtime:"sap/ui/webc/main/designtime/RatingIndicator.designtime"}});t.call(i.prototype);return i});