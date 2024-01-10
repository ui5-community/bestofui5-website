/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/FilterItem"],function(e,t){"use strict";var i=e.extend("sap.ui.webc.fiori.FilterItem",{metadata:{library:"sap.ui.webc.fiori",tag:"ui5-filter-item-ui5",interfaces:["sap.ui.webc.fiori.IFilterItem"],properties:{additionalText:{type:"string",defaultValue:""},text:{type:"string",defaultValue:""}},aggregations:{values:{type:"sap.ui.webc.fiori.IFilterItemOption",multiple:true,slot:"values"}}}});return i});
//# sourceMappingURL=FilterItem.js.map