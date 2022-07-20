/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","./thirdparty/FilterItem"],function(e,i){"use strict";var t=e.extend("sap.ui.webc.fiori.FilterItem",{metadata:{library:"sap.ui.webc.fiori",tag:"ui5-filter-item-ui5",interfaces:["sap.ui.webc.fiori.IFilterItem"],properties:{text:{type:"string",defaultValue:""}},aggregations:{values:{type:"sap.ui.webc.fiori.IFilterItemOption",multiple:true,slot:"values"}}}});return t});