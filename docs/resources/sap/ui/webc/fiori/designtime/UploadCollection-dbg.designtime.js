/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the design-time metadata for the sap.ui.webc.fiori.UploadCollection control
sap.ui.define([],
	function () {
		"use strict";

		return {
			name: {
				singular: "UPLOAD_COLLECTION_NAME",
				plural: "UPLOAD_COLLECTION_PLURAL"
			},
			aggregations: {
				items: {
					domRef: function (oControl) {
						return oControl.getDomRef().shadowRoot.querySelector(".ui5-uc-content");
					},
					actions: {
						move: {
							changeType: "moveControls"
						}
					}
				}
			}
		};
	});