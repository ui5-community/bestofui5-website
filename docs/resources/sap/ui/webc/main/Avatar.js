/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","sap/ui/core/EnabledPropagator","./thirdparty/Avatar"],function(e,a,t){"use strict";var i=a.AvatarColorScheme;var r=a.AvatarShape;var l=a.AvatarSize;var p=e.extend("sap.ui.webc.main.Avatar",{metadata:{library:"sap.ui.webc.main",tag:"ui5-avatar-ui5",interfaces:["sap.ui.webc.main.IAvatar"],properties:{accessibleName:{type:"string",defaultValue:""},colorScheme:{type:"sap.ui.webc.main.AvatarColorScheme",defaultValue:i.Accent6},enabled:{type:"boolean",defaultValue:true,mapping:{type:"property",to:"disabled",formatter:"_mapEnabled"}},fallbackIcon:{type:"string",defaultValue:""},icon:{type:"string",defaultValue:""},initials:{type:"string",defaultValue:""},interactive:{type:"boolean",defaultValue:false},shape:{type:"sap.ui.webc.main.AvatarShape",defaultValue:r.Circle},size:{type:"sap.ui.webc.main.AvatarSize",defaultValue:l.S}},defaultAggregation:"image",aggregations:{badge:{type:"sap.ui.core.Control",multiple:false,slot:"badge"},image:{type:"sap.ui.core.Control",multiple:false}},events:{click:{parameters:{}}},designtime:"sap/ui/webc/main/designtime/Avatar.designtime"}});t.call(p.prototype);return p});
//# sourceMappingURL=Avatar.js.map