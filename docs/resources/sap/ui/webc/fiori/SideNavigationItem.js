/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/SideNavigationItem"],function(e,i){"use strict";var t=e.extend("sap.ui.webc.fiori.SideNavigationItem",{metadata:{library:"sap.ui.webc.fiori",tag:"ui5-side-navigation-item-ui5",interfaces:["sap.ui.webc.fiori.ISideNavigationItem"],properties:{expanded:{type:"boolean",defaultValue:false},icon:{type:"string",defaultValue:""},selected:{type:"boolean",defaultValue:false},text:{type:"string",defaultValue:""},wholeItemToggleable:{type:"boolean",defaultValue:false}},defaultAggregation:"items",aggregations:{items:{type:"sap.ui.webc.fiori.ISideNavigationSubItem",multiple:true}},events:{click:{parameters:{}}},designtime:"sap/ui/webc/fiori/designtime/SideNavigationItem.designtime"}});return t});
//# sourceMappingURL=SideNavigationItem.js.map