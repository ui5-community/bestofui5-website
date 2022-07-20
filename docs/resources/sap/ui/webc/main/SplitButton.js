/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","sap/ui/core/EnabledPropagator","./thirdparty/SplitButton"],function(t,e,a){"use strict";var i=e.ButtonDesign;var n=t.extend("sap.ui.webc.main.SplitButton",{metadata:{library:"sap.ui.webc.main",tag:"ui5-split-button-ui5",properties:{accessibleName:{type:"string"},activeIcon:{type:"string",defaultValue:""},design:{type:"sap.ui.webc.main.ButtonDesign",defaultValue:i.Default},enabled:{type:"boolean",defaultValue:true,mapping:{type:"attribute",to:"disabled",formatter:"_mapEnabled"}},icon:{type:"string",defaultValue:""},text:{type:"string",defaultValue:"",mapping:"textContent"}},events:{arrowClick:{parameters:{}},click:{parameters:{}}}}});a.call(n.prototype);return n});