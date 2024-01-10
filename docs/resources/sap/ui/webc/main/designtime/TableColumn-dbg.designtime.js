/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/ui/dt/ElementUtil"
], function (Utils) {
	"use strict";

	return {
		domRef: function(oColumn) {
			return oColumn.getDomRef().shadowRoot.querySelector("th");
		},
		aggregations: {
			content: {
				domRef: function (oControl) {
					return oControl.getDomRef().shadowRoot.querySelector("th");
				},
				actions: {
					remove : {
						removeLastElement: true
					}
				}
			}
		}
	};
});