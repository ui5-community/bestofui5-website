/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/Toast"],function(e,t){"use strict";var a=t.ToastPlacement;var i=e.extend("sap.ui.webc.main.Toast",{metadata:{library:"sap.ui.webc.main",tag:"ui5-toast-ui5",properties:{duration:{type:"int",defaultValue:3e3},height:{type:"sap.ui.core.CSSSize",mapping:"style"},placement:{type:"sap.ui.webc.main.ToastPlacement",defaultValue:a.BottomCenter},text:{type:"string",defaultValue:"",mapping:"textContent"},width:{type:"sap.ui.core.CSSSize",mapping:"style"}},methods:["show"]}});return i});
//# sourceMappingURL=Toast.js.map