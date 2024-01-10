/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/SideNavigation"],function(e,i){"use strict";var t=e.extend("sap.ui.webc.fiori.SideNavigation",{metadata:{library:"sap.ui.webc.fiori",tag:"ui5-side-navigation-ui5",properties:{collapsed:{type:"boolean",defaultValue:false}},defaultAggregation:"items",aggregations:{fixedItems:{type:"sap.ui.webc.fiori.ISideNavigationItem",multiple:true,slot:"fixedItems"},header:{type:"sap.ui.core.Control",multiple:true,slot:"header"},items:{type:"sap.ui.webc.fiori.ISideNavigationItem",multiple:true}},events:{selectionChange:{allowPreventDefault:true,parameters:{item:{type:"sap.ui.webc.fiori.ISideNavigationItem|sap.ui.webc.fiori.ISideNavigationSubItem"}}}},designtime:"sap/ui/webc/fiori/designtime/SideNavigation.designtime"}});return t});
//# sourceMappingURL=SideNavigation.js.map