/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/Toolbar"],function(e,a){"use strict";var t=e.extend("sap.ui.webc.main.Toolbar",{metadata:{library:"sap.ui.webc.main",tag:"ui5-toolbar-ui5",properties:{accessibleName:{type:"string"},alignContent:{type:"sap.ui.webc.main.ToolbarAlign"}},defaultAggregation:"items",aggregations:{items:{type:"sap.ui.webc.main.IToolbarItem",multiple:true}},associations:{ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,mapping:{type:"property",to:"accessibleNameRef",formatter:"_getAriaLabelledByForRendering"}}}}});return t});
//# sourceMappingURL=Toolbar.js.map