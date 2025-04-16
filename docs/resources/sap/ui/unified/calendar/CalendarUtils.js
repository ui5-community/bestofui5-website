/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/date/UniversalDate","./CalendarDate","sap/ui/core/CalendarType","sap/ui/core/Locale","sap/ui/core/LocaleData","sap/ui/core/Configuration","sap/ui/core/date/UI5Date"],function(e,t,a,n,r,i,s){"use strict";var g={};g.MAX_MILLISECONDS=864e13;g.HOURS24=1e3*3600*24;g._createLocalDate=function(t,a){var n;if(t){var r;if(t instanceof e){r=t.getJSDate()}else{r=t}n=s.getInstance(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate());if(r.getFullYear()<1e3){n.setFullYear(r.getFullYear())}if(a){n.setHours(r.getUTCHours());n.setMinutes(r.getUTCMinutes());n.setSeconds(r.getUTCSeconds());n.setMilliseconds(r.getUTCMilliseconds())}}return n};g._createUTCDate=function(t,a){var n;if(t){var r;if(t instanceof e){r=t.getJSDate()}else{r=t}n=s.getInstance(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate()));if(r.getFullYear()<1e3){n.setUTCFullYear(r.getFullYear())}if(a){n.setUTCHours(r.getHours());n.setUTCMinutes(r.getMinutes());n.setUTCSeconds(r.getSeconds());n.setUTCMilliseconds(r.getMilliseconds())}}return n};g._createUniversalUTCDate=function(t,a,n){var r;if(a){r=e.getInstance(this._createUTCDate(t,n),a)}else{r=new e(this._createUTCDate(t,n).getTime())}return r};g.calculateWeekNumber=function(t,a,n,r){var i=0;var s=0;var g=r.getFirstDayOfWeek();var u=r.firstDayStartsFirstWeek();if(u){var l=new e(t.getTime());l.setUTCFullYear(a,0,1);s=l.getUTCDay();var o=new e(t.getTime());o.setUTCDate(o.getUTCDate()-o.getUTCDay()+s);i=Math.round((o.getTime()-l.getTime())/864e5/7)+1}else{var c=new e(t.getTime());c.setUTCDate(c.getUTCDate()-g);s=c.getUTCDay();c.setUTCDate(c.getUTCDate()-s+4);var T=new e(c.getTime());T.setUTCMonth(0,1);s=T.getUTCDay();var C=0;if(s>4){C=7}var f=new e(T.getTime());f.setUTCDate(1-s+4+C);i=Math.round((c.getTime()-f.getTime())/864e5/7)+1}return i};g.getFirstDateOfWeek=function(t,a){var n=new e(t.getTime()),s,g,u=r.getInstance(i.getFormatSettings().getFormatLocale()),l=i.getLocale(),o=u.getFirstDayOfWeek(),c;if(!a||(a.firstDayOfWeek===-1||a.firstDayOfWeek===undefined)){a={firstDayOfWeek:u.getFirstDayOfWeek(),minimalDaysInFirstWeek:u.getMinimalDaysInFirstWeek()}}c=e.getWeekByDate(n.getCalendarType(),n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate(),l,a);s=e.getFirstDateOfWeek(n.getCalendarType(),c.year,c.week,l,a);g=new e(e.UTC(s.year,s.month,s.day));if(a&&(a.firstDayOfWeek===-1||a.firstDayOfWeek===undefined)){while(g.getUTCDay()!==o){g.setUTCDate(g.getUTCDate()-1)}}return new e(e.UTC(g.getUTCFullYear(),g.getUTCMonth(),g.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds())).getJSDate()};g.getFirstDateOfMonth=function(t){var a=new e(t.getTime());a.setUTCDate(1);return a};g._getNumberOfWeeksForYear=function(e){var t=i.getFormatLocale(),a=r.getInstance(new n(t)),g=s.getInstance(Date.UTC(e,0,1)),u=g.getUTCDay(),l=52;if(a.getFirstDayOfWeek()===0){if(u===5||u===6){l=53}}else{if(u===3||u===4){l=53}}return l};g.monthsDiffer=function(e,t){return e.getMonth()!==t.getMonth()||e.getFullYear()!==t.getFullYear()};g.isDateLastInMonth=function(e){var t=s.getInstance(e.getTime()+24*60*60*1e3);return t.getUTCDate()<e.getUTCDate()};g._updateUTCDate=function(e,t,a,n,r,i,s,g){if(t!=null){e.setUTCFullYear(t)}if(a!=null){e.setUTCMonth(a)}if(n!=null){e.setUTCDate(n)}if(r!=null){e.setUTCHours(r)}if(i!=null){e.setUTCMinutes(i)}if(s!=null){e.setUTCSeconds(s)}if(g!=null){e.setUTCMilliseconds(g)}};g._checkJSDateObject=function(e){if(!e||Object.prototype.toString.call(e)!=="[object Date]"||isNaN(e)){throw new Error("Date must be a JavaScript or UI5Date date object.")}};g._checkYearInValidRange=function(e,n){var r=i.getCalendarType(),s=new t(this._minDate(a.Gregorian),n||r),g=new t(this._maxDate(a.Gregorian),n||r);if(typeof e!=="number"||e<s.getYear()||e>g.getYear()){throw new Error("Year must be in valid range (between year 0001 and year 9999 in Gregorian calendar type).")}};g._isNextMonth=function(e,t){return e.getMonth()>t.getMonth()&&e.getFullYear()===t.getFullYear()||e.getFullYear()>t.getFullYear()};g._minutesBetween=function(e,t){var a=(t.getTime()-e.getTime())/1e3;a=a/60;return Math.abs(Math.round(a))};g._areCurrentMinutesLessThan=function(e){var t=s.getInstance().getMinutes();return e>=t};g._areCurrentMinutesMoreThan=function(e){var t=s.getInstance().getMinutes();return e<=t};g._monthsBetween=function(e,t,a){var n=s.getInstance(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())),r=s.getInstance(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate())),i;n.setUTCFullYear(e.getUTCFullYear());r.setUTCFullYear(t.getUTCFullYear());i=r.getUTCFullYear()*12+r.getUTCMonth()-(n.getUTCFullYear()*12+n.getUTCMonth());if(!a){i=Math.abs(i)}return i};g._hoursBetween=function(e,t){var a=s.getInstance(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours()));var n=s.getInstance(Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours()));a.setUTCFullYear(e.getUTCFullYear());n.setUTCFullYear(t.getUTCFullYear());return Math.abs((a.getTime()-n.getTime())/(1e3*60*60))};g._isMidnight=function(e){return e.getHours()===0&&e.getMinutes()===0&&e.getSeconds()===0&&e.getMilliseconds()===0};g._daysInMonth=function(e){this._checkCalendarDate(e);e=new t(e);e.setDate(1);e.setMonth(e.getMonth()+1);e.setDate(0);return e.getDate()};g._isLastDateInMonth=function(e){return e.getDate()===g._daysInMonth(e)};g._getFirstDateOfWeek=function(e,a){var n=r.getInstance(i.getFormatSettings().getFormatLocale());this._checkCalendarDate(e);if(!a||(a.firstDayOfWeek===-1||a.firstDayOfWeek===undefined)){a={firstDayOfWeek:n.getFirstDayOfWeek(),minimalDaysInFirstWeek:n.getMinimalDaysInFirstWeek()}}if(e.getDay()!==a.firstDayOfWeek){var s=g.getFirstDateOfWeek(e.toUTCJSDate(),a);s.setFullYear(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate());return t.fromLocalJSDate(s,e.getCalendarType())}return e};g._getFirstDateOfMonth=function(e){this._checkCalendarDate(e);var a=new t(e,e.getCalendarType());a.setDate(1);return a};g._minDate=function(e){var a=new t(1,0,1,e);a.setYear(1);a.setMonth(0);a.setDate(1);return a};g._maxDate=function(e){var a=new t(9999,11,1,e);a.setYear(9999);a.setMonth(11);a.setDate(this._daysInMonth(a));return new t(a)};g._isBetween=function(e,t,a,n){this._checkCalendarDate(e);this._checkCalendarDate(t);this._checkCalendarDate(a);if(n){return e.isSameOrAfter(t)&&e.isSameOrBefore(a)}else{return e.isAfter(t)&&e.isBefore(a)}};g._daysBetween=function(e,t){this._checkCalendarDate(e);this._checkCalendarDate(t);return Math.ceil((e.valueOf()-t.valueOf())/this.HOURS24)};g._isOutside=function(e,t,a){return!this._isBetween(e,t,a,true)};g._isSameMonthAndYear=function(e,t){this._checkCalendarDate(e);this._checkCalendarDate(t);return e.getEra()===t.getEra()&&e.getYear()===t.getYear()&&e.getMonth()===t.getMonth()};g._checkCalendarDate=function(e){if(!e||!(e instanceof t)){throw"Invalid calendar date: ["+e+"]. Expected: sap.ui.unified.calendar.CalendarDate"}};g._getWeek=function(t){this._checkCalendarDate(t);return e.getWeekByDate(t.getCalendarType(),t.getYear(),t.getMonth(),t.getDate())};g._isWeekend=function(e,t){var a=e.getDay();return a===t.getWeekendStart()||a===t.getWeekendEnd()};return g},true);
//# sourceMappingURL=CalendarUtils.js.map