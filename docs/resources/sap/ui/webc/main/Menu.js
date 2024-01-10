/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/Menu"],function(e,t){"use strict";var a=e.extend("sap.ui.webc.main.Menu",{metadata:{library:"sap.ui.webc.main",tag:"ui5-menu-ui5",properties:{busy:{type:"boolean",defaultValue:false},busyDelay:{type:"int",defaultValue:1e3},headerText:{type:"string",defaultValue:""},open:{type:"boolean",defaultValue:false}},defaultAggregation:"items",aggregations:{items:{type:"sap.ui.webc.main.IMenuItem",multiple:true}},associations:{opener:{type:"sap.ui.core.Control",multiple:false,mapping:{type:"property",to:"opener"}}},events:{afterClose:{parameters:{}},afterOpen:{parameters:{}},beforeClose:{allowPreventDefault:true,parameters:{escPressed:{type:"boolean"}}},beforeOpen:{allowPreventDefault:true,parameters:{item:{type:"HTMLElement"}}},itemClick:{allowPreventDefault:true,parameters:{item:{type:"HTMLElement"},text:{type:"string"}}}},methods:["close","showAt"]}});return a});
//# sourceMappingURL=Menu.js.map