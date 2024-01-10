/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/Timeline"],function(e,i){"use strict";var t=i.TimelineLayout;var a=e.extend("sap.ui.webc.fiori.Timeline",{metadata:{library:"sap.ui.webc.fiori",tag:"ui5-timeline-ui5",properties:{accessibleName:{type:"string"},height:{type:"sap.ui.core.CSSSize",mapping:"style"},layout:{type:"sap.ui.webc.fiori.TimelineLayout",defaultValue:t.Vertical},width:{type:"sap.ui.core.CSSSize",mapping:"style"}},defaultAggregation:"items",aggregations:{items:{type:"sap.ui.webc.fiori.ITimelineItem",multiple:true}}}});return a});
//# sourceMappingURL=Timeline.js.map