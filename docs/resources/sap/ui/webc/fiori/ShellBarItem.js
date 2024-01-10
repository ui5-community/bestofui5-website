/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/ShellBarItem"],function(e,t){"use strict";var a=e.extend("sap.ui.webc.fiori.ShellBarItem",{metadata:{library:"sap.ui.webc.fiori",tag:"ui5-shellbar-item-ui5",interfaces:["sap.ui.webc.fiori.IShellBarItem"],properties:{count:{type:"string",defaultValue:""},icon:{type:"string",defaultValue:""},text:{type:"string",defaultValue:""}},events:{click:{allowPreventDefault:true,parameters:{targetRef:{type:"HTMLElement"}}}}}});return a});
//# sourceMappingURL=ShellBarItem.js.map