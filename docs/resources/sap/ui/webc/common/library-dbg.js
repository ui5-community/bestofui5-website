/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/**
 * Initialization Code and shared classes of library sap.ui.webc.common
 */
sap.ui.define([
		"sap/ui/core/library",
		"sap/ui/core/Lib",
		"sap/ui/base/DataType",
		"./Icons",
		"./thirdparty/base/features/OpenUI5Support",
		"./thirdparty/base/features/OpenUI5Enablement",
		"./thirdparty/base/AssetRegistry",
		"./thirdparty/base/CustomElementsScope",
		"./thirdparty/base/CSP",
		"./thirdparty/base/UI5Element"
	],
	function(coreLibrary, Library, DataType, Icons, OpenUI5Support, OpenUI5Enablement, AssetRegistry, CustomElementsScope, CSP, UI5Element) {

	"use strict";

	/**
	 * Namespace for UI5 Web Components Retrofit libraries
	 *
	 * @namespace
	 * @name sap.ui.webc
	 * @author SAP SE
	 * @version 1.120.28
	 * @public
	 * @since 1.92.0
	 * @experimental Since 1.92.0
	 * @deprecated As of version 1.120, this Web Components consumption model has been discarded. An alternative consumption model is planned for the future.
	 */

	/**
	 * UI5 library: sap.ui.webc.common
	 *
	 * @namespace
	 * @alias sap.ui.webc.common
	 * @author SAP SE
	 * @version 1.120.28
	 * @public
	 * @since 1.92.0
	 * @experimental Since 1.92.0
	 * @deprecated As of version 1.120, this Web Components consumption model has been discarded. An alternative consumption model is planned for the future.
	 */
	var thisLib = Library.init({
		name : "sap.ui.webc.common",
		version: "1.120.28",
		dependencies : ["sap.ui.core"],
		noLibraryCSS: true,
		designtime: "sap/ui/webc/common/designtime/library.designtime",
		interfaces: [
		],
		types: [
		],
		controls: [
			"sap.ui.webc.common.WebComponent"
		],
		elements: [
		],
		extensions: {
		}
	});

	CustomElementsScope.setCustomElementsScopingSuffix("ui5");

	CSP.setUseLinks(!document.adoptedStyleSheets);
	CSP.setPreloadLinks(false);
	CSP.setPackageCSSRoot("@ui5/webcomponents-base", sap.ui.require.toUrl("sap/ui/webc/common/thirdparty/base/css/"));
	CSP.setPackageCSSRoot("@ui5/webcomponents-theming", sap.ui.require.toUrl("sap/ui/webc/common/thirdparty/theming/css/"));

	OpenUI5Enablement.default.enrichBusyIndicatorSettings(UI5Element.default);

	return thisLib;
});
