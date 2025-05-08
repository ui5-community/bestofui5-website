/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides class sap.ui.webc.common.WebComponentMetadata
sap.ui.define([
	"sap/ui/core/webc/WebComponentMetadata"
],
function(CoreWebComponentMetadata) {
	"use strict";

	/**
	 * Creates a new metadata object for a WebComponent Wrapper subclass.
	 *
	 * @param {string} sClassName fully qualified name of the class that is described by this metadata object
	 * @param {object} oClassInfo static info to construct the metadata from
	 *
	 * @class
	 * @author SAP SE
	 * @version 1.120.28
	 * @since 1.92.0
	 * @experimental Since 1.92.0 The API might change. It is not intended for productive usage yet!
	 * @deprecated Since 1.118.0 Use sap.ui.core.webc.WebComponentMetadata instead!
	 * @alias sap.ui.webc.common.WebComponentMetadata
	 * @extends sap.ui.core.webc.WebComponentMetadata
	 * @public
	 */
	var WebComponentMetadata = function(sClassName, oClassInfo) {
		// call super constructor
		CoreWebComponentMetadata.apply(this, arguments);
	};

	//chain the prototypes
	WebComponentMetadata.prototype = Object.create(CoreWebComponentMetadata.prototype);
	WebComponentMetadata.prototype.constructor = WebComponentMetadata;

	return WebComponentMetadata;

});
