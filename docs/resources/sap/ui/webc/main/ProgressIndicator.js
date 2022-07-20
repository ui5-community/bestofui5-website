/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","sap/ui/core/EnabledPropagator","sap/ui/core/library","./thirdparty/ProgressIndicator"],function(e,a,t,r){"use strict";var i=r.ValueState;var o=e.extend("sap.ui.webc.main.ProgressIndicator",{metadata:{library:"sap.ui.webc.main",tag:"ui5-progress-indicator-ui5",interfaces:["sap.ui.core.IFormContent"],properties:{displayValue:{type:"string"},enabled:{type:"boolean",defaultValue:true,mapping:{type:"attribute",to:"disabled",formatter:"_mapEnabled"}},hideValue:{type:"boolean",defaultValue:false},value:{type:"int",defaultValue:0},valueState:{type:"sap.ui.core.ValueState",defaultValue:i.None},width:{type:"sap.ui.core.CSSSize",mapping:"style"}}}});t.call(o.prototype);return o});