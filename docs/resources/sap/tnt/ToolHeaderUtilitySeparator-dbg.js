/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.tnt.ToolHeaderUtilitySeparator.
sap.ui.define([
	'./library',
	'sap/ui/core/Control'
], function (library, Control) {
	"use strict";


	/**
	 * Constructor for a new ToolHeaderUtilitySeparator.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @class
	 * The ToolHeaderUtilitySeparator control is used in the sap.tnt.ToolHeader control
	 * to specify where the overflow button is placed.
	 * @extends sap.ui.core.Control
	 *
	 * @author SAP SE
	 * @version 1.120.28
	 *
	 * @constructor
	 * @public
	 * @since 1.16
	 * @alias sap.tnt.ToolHeaderUtilitySeparator
	 */
	var ToolHeaderUtilitySeparator = Control.extend("sap.tnt.ToolHeaderUtilitySeparator", /** @lends sap.tnt.ToolHeaderUtilitySeparator.prototype */ {
		metadata: {
			library: "sap.tnt",
			properties: {
			}
		},
		renderer: {
			apiVersion: 2,
			render : function() {}
		}
	});

	return ToolHeaderUtilitySeparator;
});