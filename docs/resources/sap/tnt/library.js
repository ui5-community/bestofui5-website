/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/library","sap/m/library"],function(){"use strict";var t=sap.ui.getCore().initLibrary({name:"sap.tnt",version:"1.120.3",dependencies:["sap.ui.core","sap.m"],designtime:"sap/tnt/designtime/library.designtime",types:["sap.tnt.RenderMode"],interfaces:["sap.tnt.IToolHeader"],controls:["sap.tnt.NavigationList","sap.tnt.ToolHeaderUtilitySeparator","sap.tnt.ToolHeader","sap.tnt.SideNavigation","sap.tnt.ToolPage","sap.tnt.InfoLabel"],elements:["sap.tnt.NavigationListItem"],extensions:{flChangeHandlers:{"sap.tnt.NavigationListItem":"sap/tnt/flexibility/NavigationListItem"}}});t.RenderMode={Narrow:"Narrow",Loose:"Loose"};return t});
//# sourceMappingURL=library.js.map