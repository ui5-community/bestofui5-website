/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the Design Time Metadata for the sap.uxap.ObjectPageSubSection control
sap.ui.define([],
	function() {
		"use strict";

		return {
			palette: {
				group: "CONTAINER",
				icons: {
					svg: "sap/uxap/designtime/ObjectPageSubSection.icon.svg"
				}
			},
			actions: {
				remove: {
					changeType: "hideControl",
					isEnabled: function (oElement) {
						var oSection = oElement.getParent(),
							aVisibleSubSections;

						if (oSection) {
							aVisibleSubSections = oSection.getSubSections().filter(function (oSubSection) {
								return oSubSection.getVisible();
							});

							return aVisibleSubSections.length > 1;
						}

						return false;
					}
				},
				reveal: {
					changeType: "unhideControl"
				},
				rename: function () {
					return {
						changeType: "rename",
						domRef: ".sapUxAPObjectPageSubSectionHeaderTitle",
						isEnabled : function (oElement) {
							return oElement.$("headerTitle").get(0) != undefined;
						}
					};
				}
			},
			aggregations: {
				actions: {
					domRef : ":sap-domref .sapUxAPObjectPageSubSectionHeaderActions",
					actions : {
						move: {
							changeType: "moveControls"
						}
					}
				}
			}
		};

	});