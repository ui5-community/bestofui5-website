/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"./thirdparty/base/config/Theme",
	"./thirdparty/base/config/Language"
], function(Theme, Language) {
	"use strict";

	var Configuration = {
		getTheme: Theme.getTheme,
		setTheme: Theme.setTheme,
		getLanguage: Language.getLanguage,
		setLanguage: Language.setLanguage
	};

	return Configuration;
});
