/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.ui.webc.main.MultiComboBoxGroupItem.
sap.ui.define([
	"sap/ui/core/webc/WebComponent",
	"./library",
	"./thirdparty/MultiComboBoxGroupItem"
], function(WebComponent, library) {
	"use strict";

	/**
	 * Constructor for a new <code>MultiComboBoxGroupItem</code>.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @extends sap.ui.core.webc.WebComponent
	 * @class
	 *
	 * The <code>sap.ui.webc.main.MultiComboBoxGroupItem</code> is type of suggestion item, that can be used to split the <code>sap.ui.webc.main.MultiComboBox</code> suggestions into groups.
	 *
	 * @author SAP SE
	 * @version 1.120.28
	 *
	 * @constructor
	 * @public
	 * @since 1.92.0
	 * @experimental Since 1.92.0 This control is experimental and its API might change significantly.
	 * @deprecated As of version 1.120, this Web Components consumption model has been discarded. Until an alternative Web Components consumption model is available in the future, use sap.m and sap.f controls with similar functionality.
	 * @alias sap.ui.webc.main.MultiComboBoxGroupItem
	 * @implements sap.ui.webc.main.IMultiComboBoxItem
	 */
	var MultiComboBoxGroupItem = WebComponent.extend("sap.ui.webc.main.MultiComboBoxGroupItem", {
		metadata: {
			library: "sap.ui.webc.main",
			tag: "ui5-mcb-group-item-ui5",
			interfaces: [
				"sap.ui.webc.main.IMultiComboBoxItem"
			],
			properties: {

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

	return MultiComboBoxGroupItem;
});
