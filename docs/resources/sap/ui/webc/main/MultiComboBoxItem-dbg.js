/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.ui.webc.main.MultiComboBoxItem.
sap.ui.define([
	"sap/ui/core/webc/WebComponent",
	"./library",
	"./thirdparty/MultiComboBoxItem"
], function(WebComponent, library) {
	"use strict";

	/**
	 * Constructor for a new <code>MultiComboBoxItem</code>.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @extends sap.ui.core.webc.WebComponent
	 * @class
	 *
	 * The <code>sap.ui.webc.main.MultiComboBoxItem</code> represents the item for a <code>sap.ui.webc.main.MultiComboBox</code>.
	 *
	 * @author SAP SE
	 * @version 1.120.28
	 *
	 * @constructor
	 * @public
	 * @since 1.92.0
	 * @experimental Since 1.92.0 This control is experimental and its API might change significantly.
	 * @deprecated As of version 1.120, this Web Components consumption model has been discarded. Until an alternative Web Components consumption model is available in the future, use sap.m and sap.f controls with similar functionality.
	 * @alias sap.ui.webc.main.MultiComboBoxItem
	 * @implements sap.ui.webc.main.IMultiComboBoxItem
	 */
	var MultiComboBoxItem = WebComponent.extend("sap.ui.webc.main.MultiComboBoxItem", {
		metadata: {
			library: "sap.ui.webc.main",
			tag: "ui5-mcb-item-ui5",
			interfaces: [
				"sap.ui.webc.main.IMultiComboBoxItem"
			],
			properties: {

				/**
				 * Defines the additional text of the component.
				 */
				additionalText: {
					type: "string",
					defaultValue: ""
				},

				/**
				 * Defines the selected state of the component.
				 */
				selected: {
					type: "boolean",
					defaultValue: false
				},

				/**
				 * Defines the text of the component.
				 */
				text: {
					type: "string",
					defaultValue: ""
				}
			}
		}
	});

	/* CUSTOM CODE START */
	/* CUSTOM CODE END */

	return MultiComboBoxItem;
});
