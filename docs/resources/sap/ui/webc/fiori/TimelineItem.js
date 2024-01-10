/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/TimelineItem"],function(e,t){"use strict";var i=e.extend("sap.ui.webc.fiori.TimelineItem",{metadata:{library:"sap.ui.webc.fiori",tag:"ui5-timeline-item-ui5",interfaces:["sap.ui.webc.fiori.ITimelineItem"],properties:{icon:{type:"string",defaultValue:""},name:{type:"string",defaultValue:""},nameClickable:{type:"boolean",defaultValue:false},subtitleText:{type:"string",defaultValue:""},titleText:{type:"string",defaultValue:""}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true}},events:{nameClick:{parameters:{}}}}});return i});
//# sourceMappingURL=TimelineItem.js.map