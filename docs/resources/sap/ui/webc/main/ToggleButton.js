/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","sap/ui/core/EnabledPropagator","./thirdparty/ToggleButton"],function(e,t,a){"use strict";var i=t.ButtonDesign;var p=t.ButtonType;var l=e.extend("sap.ui.webc.main.ToggleButton",{metadata:{library:"sap.ui.webc.main",tag:"ui5-toggle-button-ui5",properties:{accessibilityAttributes:{type:"object",defaultValue:{}},accessibleName:{type:"string",defaultValue:undefined},design:{type:"sap.ui.webc.main.ButtonDesign",defaultValue:i.Default},enabled:{type:"boolean",defaultValue:true,mapping:{type:"property",to:"disabled",formatter:"_mapEnabled"}},icon:{type:"string",defaultValue:""},iconEnd:{type:"boolean",defaultValue:false},pressed:{type:"boolean",defaultValue:false},text:{type:"string",defaultValue:"",mapping:"textContent"},type:{type:"sap.ui.webc.main.ButtonType",defaultValue:p.Button},width:{type:"sap.ui.core.CSSSize",mapping:"style"}},associations:{ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,mapping:{type:"property",to:"accessibleNameRef",formatter:"_getAriaLabelledByForRendering"}}},events:{click:{parameters:{}}}}});a.call(l.prototype);return l});
//# sourceMappingURL=ToggleButton.js.map