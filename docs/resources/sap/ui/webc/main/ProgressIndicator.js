/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","sap/ui/core/EnabledPropagator","sap/ui/core/library","./thirdparty/ProgressIndicator"],function(e,a,t,r){"use strict";var i=r.ValueState;var p=e.extend("sap.ui.webc.main.ProgressIndicator",{metadata:{library:"sap.ui.webc.main",tag:"ui5-progress-indicator-ui5",interfaces:["sap.ui.core.IFormContent"],properties:{accessibleName:{type:"string",defaultValue:""},displayValue:{type:"string"},enabled:{type:"boolean",defaultValue:true,mapping:{type:"property",to:"disabled",formatter:"_mapEnabled"}},hideValue:{type:"boolean",defaultValue:false},value:{type:"int",defaultValue:0},valueState:{type:"sap.ui.core.ValueState",defaultValue:i.None},width:{type:"sap.ui.core.CSSSize",mapping:"style"}}}});t.call(p.prototype);return p});
//# sourceMappingURL=ProgressIndicator.js.map