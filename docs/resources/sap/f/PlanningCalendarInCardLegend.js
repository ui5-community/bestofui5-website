/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/PlanningCalendarLegend","sap/ui/unified/CalendarLegendItem","./PlanningCalendarInCardLegendRenderer","sap/ui/core/Core"],function(e,t,n,i){"use strict";var a=e.extend("sap.f.PlanningCalendarInCardLegend",{metadata:{library:"sap.m",properties:{visibleLegendItemsCount:{type:"int",group:"Data",defaultValue:2}}}});a.prototype.exit=function(){e.prototype.exit.call(this,arguments);if(this._oItemsLink){this._oItemsLink.destroy();this._oItemsLink=null}};a.prototype._getMoreItemsText=function(e){if(!this._oItemsLink){var n=i.getLibraryResourceBundle("sap.f");this._oItemsLink=new t({text:n.getText("CALENDAR_LEGEND_MORE")+" ("+e+")"})}return this._oItemsLink};return a});