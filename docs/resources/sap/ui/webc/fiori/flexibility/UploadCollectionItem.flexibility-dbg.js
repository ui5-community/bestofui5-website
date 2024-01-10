/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/ui/fl/changeHandler/BaseRename"
], function (BaseRename) {
	"use strict";

	return {
		"renameUploadCollectionItem": BaseRename.createRenameChangeHandler({
			propertyName: "fileName",
			translationTextType: "XACT"
		}),
		hideControl: "default",
		unhideControl: "default"
	};
});