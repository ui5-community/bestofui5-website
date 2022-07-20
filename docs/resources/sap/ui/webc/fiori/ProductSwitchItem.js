/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","./thirdparty/ProductSwitchItem"],function(t,e){"use strict";var i=t.extend("sap.ui.webc.fiori.ProductSwitchItem",{metadata:{library:"sap.ui.webc.fiori",tag:"ui5-product-switch-item-ui5",interfaces:["sap.ui.webc.fiori.IProductSwitchItem"],properties:{icon:{type:"string",defaultValue:""},subtitleText:{type:"string",defaultValue:""},target:{type:"string",defaultValue:"_self"},targetSrc:{type:"string",defaultValue:""},titleText:{type:"string",defaultValue:""}},events:{click:{parameters:{}}}}});return i});