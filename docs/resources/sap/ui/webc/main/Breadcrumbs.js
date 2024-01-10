/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/Breadcrumbs"],function(e,a){"use strict";var t=a.BreadcrumbsDesign;var r=a.BreadcrumbsSeparatorStyle;var i=e.extend("sap.ui.webc.main.Breadcrumbs",{metadata:{library:"sap.ui.webc.main",tag:"ui5-breadcrumbs-ui5",properties:{design:{type:"sap.ui.webc.main.BreadcrumbsDesign",defaultValue:t.Standard},separatorStyle:{type:"sap.ui.webc.main.BreadcrumbsSeparatorStyle",defaultValue:r.Slash}},defaultAggregation:"items",aggregations:{items:{type:"sap.ui.webc.main.IBreadcrumbsItem",multiple:true}},events:{itemClick:{allowPreventDefault:true,parameters:{item:{type:"HTMLElement"},altKey:{type:"boolean"},ctrlKey:{type:"boolean"},metaKey:{type:"boolean"},shiftKey:{type:"boolean"}}}}}});return i});
//# sourceMappingURL=Breadcrumbs.js.map