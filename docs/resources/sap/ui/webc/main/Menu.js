/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","./thirdparty/Menu"],function(e,t){"use strict";var i=e.extend("sap.ui.webc.main.Menu",{metadata:{library:"sap.ui.webc.main",tag:"ui5-menu-ui5",properties:{headerText:{type:"string",defaultValue:""}},defaultAggregation:"items",aggregations:{items:{type:"sap.ui.webc.main.IMenuItem",multiple:true}},events:{itemClick:{parameters:{item:{type:"object"},text:{type:"string"}}}},methods:["close","showAt"]}});return i});