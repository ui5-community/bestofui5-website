
/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
// Provides the Design Time Metadata for the sap.ui.webc.main.Table control
sap.ui.define([],
	function() {
	"use strict";
	return {
		name: {
			singular: "TABLE_NAME",
			plural: "TABLE_NAME_PLURAL"
		},
		aggregations: {
			columns: {
				domRef: function (oControl) {
					return oControl.getDomRef().shadowRoot.querySelector(".ui5-table-header-row");
				}
			},
			rows: {
				domRef: function (oControl) {
					return oControl.getDomRef().shadowRoot.querySelector("tbody");
				}
			}
		},
		actions: {
			remove: {
				changeType: "hideControl"
			},
			reveal: {
				changeType: "unhideControl"
			}
		}
	};
});