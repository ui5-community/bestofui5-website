/*!
	* OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
	*/
sap.ui.define(["sap/ui/core/util/reflection/JsControlTreeModifier","sap/ui/fl/changeHandler/UnstashControl"],function(e,t){"use strict";var r=Object.assign({},t);r.getChangeVisualizationInfo=function(t,r){var n=t.getSelector();var o=e.bySelector(n,r);var a=o.getParent().getAggregation("_anchorBar");var i=[n];var g=[n];a.getAggregation("content").forEach(function(e){e.getAggregation("customData").some(function(t){if(t.getKey()==="sectionId"&&o.getId()===t.getProperty("value")){g.push(e.getId())}})});return{affectedControls:i,displayControls:g}};return r},true);
//# sourceMappingURL=UnstashObjectPageSection.js.map