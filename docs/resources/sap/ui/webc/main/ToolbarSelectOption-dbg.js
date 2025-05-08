/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.ui.webc.main.ToolbarSelectOption.
sap.ui.define([
	"sap/ui/core/webc/WebComponent",
	"./library",
	"./thirdparty/ToolbarSelectOption"
], function(WebComponent, library) {
	"use strict";

	/**
	 * Constructor for a new <code>ToolbarSelectOption</code>.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @extends sap.ui.core.webc.WebComponent
	 * @class
	 *
	 * <h3>Overview</h3>
	 *
	 * The <code>sap.ui.webc.main.ToolbarSelectOption</code> component defines the content of an option in the <code>sap.ui.webc.main.ToolbarSelect</code>.
	 *
	 * @author SAP SE
	 * @version 1.120.28
	 *
	 * @constructor
	 * @public
	 * @since 1.120.0
	 * @experimental Since 1.120.0 This control is experimental and its API might change significantly.
	 * @deprecated As of version 1.120, this Web Components consumption model has been discarded. Until an alternative Web Components consumption model is available in the future, use sap.m and sap.f controls with similar functionality.
	 * @alias sap.ui.webc.main.ToolbarSelectOption
	 * @implements sap.ui.webc.main.IToolbarSelectOption
	 */
	var ToolbarSelectOption = WebComponent.extend("sap.ui.webc.main.ToolbarSelectOption", {
		metadata: {
			library: "sap.ui.webc.main",
			tag: "ui5-toolbar-select-option-ui5",
			interfaces: [
				"sap.ui.webc.main.IToolbarSelectOption"
			],
			properties: {

				/**
				 * Defines the selected state of the component.
				 */
				selected: {
					type: "boolean",
					defaultValue: false
				},

				/**
				 * Defines the content of the control
				 */
				text: {
					type: "string",
					defaultValue: "",
					mapping: "textContent"
				}
			}
		}
	});

	/* CUSTOM CODE START */
	/* CUSTOM CODE END */

	return ToolbarSelectOption;
});
