/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","./SinglePlanningCalendarView","sap/ui/core/LocaleData","sap/ui/unified/calendar/CalendarDate","sap/ui/unified/calendar/CalendarUtils"],function(t,e,a,n,r){"use strict";var i=e.extend("sap.m.SinglePlanningCalendarWeekView",{metadata:{library:"sap.m"}});i.prototype.getEntityCount=function(){return 7};i.prototype.getScrollEntityCount=function(){return 7};i.prototype.calculateStartDate=function(t){var e=n.fromLocalJSDate(t),i=r._getFirstDateOfWeek(e),o=i.toLocalJSDate(),l=o.getDay(),u=this.getFirstDayOfWeek(),g;if(u===-1){g=a.getInstance(sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale());u=g.getFirstDayOfWeek()}o.setDate(o.getDate()-l+u);return o};return i});