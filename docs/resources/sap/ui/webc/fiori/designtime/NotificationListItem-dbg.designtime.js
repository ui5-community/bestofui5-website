/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the design-time metadata for the sap.ui.webc.fiori.NotificationListItem control
sap.ui.define([],
	function () {
		"use strict";

		return {
			name: {
				singular: "NOTIFICATION_LIST_ITEM_NAME",
				plural: "NOTIFICATION_LIST_ITEM_PLURAL"
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