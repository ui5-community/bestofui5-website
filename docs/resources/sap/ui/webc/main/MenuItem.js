/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","sap/ui/core/EnabledPropagator","./thirdparty/MenuItem"],function(e,t,a){"use strict";var i=e.extend("sap.ui.webc.main.MenuItem",{metadata:{library:"sap.ui.webc.main",tag:"ui5-menu-item-ui5",interfaces:["sap.ui.webc.main.IMenuItem"],properties:{accessibleName:{type:"string",defaultValue:""},additionalText:{type:"string"},busy:{type:"boolean",defaultValue:false},busyDelay:{type:"int",defaultValue:1e3},enabled:{type:"boolean",defaultValue:true,mapping:{type:"property",to:"disabled",formatter:"_mapEnabled"}},icon:{type:"string",defaultValue:""},startsSection:{type:"boolean",defaultValue:false},text:{type:"string",defaultValue:""}},defaultAggregation:"items",aggregations:{items:{type:"sap.ui.webc.main.IMenuItem",multiple:true}}}});a.call(i.prototype);return i});
//# sourceMappingURL=MenuItem.js.map