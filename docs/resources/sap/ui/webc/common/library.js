/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/library","sap/ui/core/Lib","sap/ui/base/DataType","./Icons","./thirdparty/base/features/OpenUI5Support","./thirdparty/base/features/OpenUI5Enablement","./thirdparty/base/AssetRegistry","./thirdparty/base/CustomElementsScope","./thirdparty/base/CSP","./thirdparty/base/UI5Element"],function(e,t,s,i,a,n,r,o,p,u){"use strict";var c=t.init({name:"sap.ui.webc.common",version:"1.120.3",dependencies:["sap.ui.core"],noLibraryCSS:true,designtime:"sap/ui/webc/common/designtime/library.designtime",interfaces:[],types:[],controls:["sap.ui.webc.common.WebComponent"],elements:[],extensions:{}});o.setCustomElementsScopingSuffix("ui5");p.setUseLinks(!document.adoptedStyleSheets);p.setPreloadLinks(false);p.setPackageCSSRoot("@ui5/webcomponents-base",sap.ui.require.toUrl("sap/ui/webc/common/thirdparty/base/css/"));p.setPackageCSSRoot("@ui5/webcomponents-theming",sap.ui.require.toUrl("sap/ui/webc/common/thirdparty/theming/css/"));n.default.enrichBusyIndicatorSettings(u.default);return c});
//# sourceMappingURL=library.js.map