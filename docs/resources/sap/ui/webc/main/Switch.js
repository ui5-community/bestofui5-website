/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","sap/ui/core/EnabledPropagator","./thirdparty/features/InputElementsFormSupport","./thirdparty/Switch"],function(e,t,a){"use strict";var r=t.SwitchDesign;var i=e.extend("sap.ui.webc.main.Switch",{metadata:{library:"sap.ui.webc.main",tag:"ui5-switch-ui5",interfaces:["sap.ui.core.IFormContent"],properties:{accessibleName:{type:"string"},checked:{type:"boolean",defaultValue:false},design:{type:"sap.ui.webc.main.SwitchDesign",defaultValue:r.Textual},enabled:{type:"boolean",defaultValue:true,mapping:{type:"property",to:"disabled",formatter:"_mapEnabled"}},name:{type:"string",defaultValue:""},required:{type:"boolean",defaultValue:false},textOff:{type:"string",defaultValue:""},textOn:{type:"string",defaultValue:""},width:{type:"sap.ui.core.CSSSize",mapping:"style"}},associations:{ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,mapping:{type:"property",to:"accessibleNameRef",formatter:"_getAriaLabelledByForRendering"}}},events:{change:{parameters:{}}}}});a.call(i.prototype);return i});
//# sourceMappingURL=Switch.js.map