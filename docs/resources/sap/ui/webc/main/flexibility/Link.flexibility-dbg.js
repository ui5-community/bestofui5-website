/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/ui/fl/changeHandler/BaseRename",
	"sap/ui/webc/main/changeHandler/ChangeLinkTarget"
], function (BaseRename,ChangeLinkTarget) {
	"use strict";

	return {
		"hideControl": "default",
		"unhideControl": "default",
		"rename": BaseRename.createRenameChangeHandler({
			propertyName: "text",
			translationTextType: "XBUT"
		}),
		"changeLinkTarget": {
			"changeHandler": ChangeLinkTarget,
			"layers": {
				"CUSTOMER": false
			}
		}
	};
});