/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","sap/m/OverflowToolbarRenderer","sap/m/BarInPageEnabler"],function(e,r,t){"use strict";var n=e.extend(r);n.apiVersion=2;n.renderBarContent=function(e,r){var o=false,a;r._getVisibleContent().forEach(function(i){a=i.isA("sap.tnt.ToolHeaderUtilitySeparator");if(!o&&a&&r._getOverflowButtonNeeded()){n.renderOverflowButton(e,r);o=true}t.addChildClassTo(i,r);e.renderControl(i)});if(!o&&r._getOverflowButtonNeeded()){n.renderOverflowButton(e,r)}};return n},true);