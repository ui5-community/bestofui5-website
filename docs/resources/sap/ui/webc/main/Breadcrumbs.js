/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","./thirdparty/Breadcrumbs"],function(e,a){"use strict";var r=a.BreadcrumbsDesign;var t=a.BreadcrumbsSeparatorStyle;var i=e.extend("sap.ui.webc.main.Breadcrumbs",{metadata:{library:"sap.ui.webc.main",tag:"ui5-breadcrumbs-ui5",properties:{design:{type:"sap.ui.webc.main.BreadcrumbsDesign",defaultValue:r.Standard},separatorStyle:{type:"sap.ui.webc.main.BreadcrumbsSeparatorStyle",defaultValue:t.Slash}},defaultAggregation:"items",aggregations:{items:{type:"sap.ui.webc.main.IBreadcrumbsItem",multiple:true}},events:{itemClick:{allowPreventDefault:true,parameters:{item:{type:"HTMLElement"}}}}}});return i});