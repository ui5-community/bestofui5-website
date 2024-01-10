/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/AvatarGroup"],function(e,t){"use strict";var a=t.AvatarGroupType;var r=e.extend("sap.ui.webc.main.AvatarGroup",{metadata:{library:"sap.ui.webc.main",tag:"ui5-avatar-group-ui5",properties:{type:{type:"sap.ui.webc.main.AvatarGroupType",defaultValue:a.Group}},defaultAggregation:"items",aggregations:{items:{type:"sap.ui.webc.main.IAvatar",multiple:true},overflowButton:{type:"sap.ui.core.Control",multiple:false,slot:"overflowButton"}},events:{click:{parameters:{targetRef:{type:"HTMLElement"},overflowButtonClicked:{type:"boolean"}}},overflow:{parameters:{}}},getters:["colorScheme","hiddenItems"]}});return r});
//# sourceMappingURL=AvatarGroup.js.map