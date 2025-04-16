/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library","sap/ui/core/Lib"],function(e,a){"use strict";var t=a.getResourceBundleFor("sap.m");var s=e.DeviationIndicator,r=e.LoadState,n=e.ValueColor;var l={apiVersion:2};l.render=function(e,a){var s=a.getState();var n=a.getWithMargin();var l=n?"":"WithoutMargin";e.openStart("div",a);var o=a.getTooltip_AsString();if(typeof o!=="string"){o=""}e.attr("aria-label",o);e.attr("role","img");e.attr("aria-roledescription",t.getText("NUMERIC_CONTENT_ROLE_DESCRIPTION"));if(s===r.Failed||s===r.Loading){e.attr("aria-disabled","true")}if(a.getAnimateTextChange()){e.class("sapMNCAnimation")}if(a.getWidth()){e.style("width",a.getWidth())}e.class("sapMNC");e.class(l);if(a.hasListeners("press")){e.attr("tabindex",0);e.class("sapMPointer")}e.openEnd();e.openStart("div");e.class("sapMNCInner");e.class(l);e.openEnd();this._renderValue(e,a,l);e.close("div");e.close("div")};l._prepareAndRenderIcon=function(e,a,t,s){if(t){var n,l=a.getState();for(n in r){if(r.hasOwnProperty(n)&&n!==l){t.removeStyleClass(n)}else if(r.hasOwnProperty(n)&&n===l){t.addStyleClass(n)}}t.addStyleClass("sapMNCIconImage");var o={sapMNCLargeFontSize:false,sapMNCMediumFontSize:false,sapMNCSmallFontSize:false};o[s]=true;Object.keys(o).forEach(function(e){t.toggleStyleClass(e,o[e])});e.renderControl(t)}};l._renderScaleAndIndicator=function(e,a,t,r,n,l){var o=s.None!==a.getIndicator()&&r!=="";var i=n&&r;if(o||i){var d=a.getState();var c=a.getValueColor();e.openStart("div",a.getId()+"-indicator");e.class("sapMNCIndScale");e.class(t);e.class(d);e.class(d);if(l){e.class(l)}e.openEnd();e.renderControl(a._oIndicatorIcon);if(i){e.openStart("div",a.getId()+"-scale");e.class("sapMNCScale");e.class(d);e.class(c);e.openEnd();e.text(n);e.close("div")}e.close("div")}};l._renderValue=function(e,a,t){var s=a.getValue();var l=a.getScale();if(a.getFormatterValue()){var o=a._parseFormattedValue(s);l=o.scale;s=o.value}var i=a.getNullifyValue()?"0":"";e.openStart("div",a.getId()+"-value");e.class("sapMNCValue");e.class(t);if(a.getValueColor()===n.None){e.class("Neutral")}else{e.class(a.getValueColor())}e.class(a.getState());e.openEnd();if(a.getState()===r.Loading){e.openStart("div").class("sapMNCContentShimmerPlaceholderItem");e.openEnd();e.openStart("div").class("sapMNCContentShimmerPlaceholderRows").openEnd();e.openStart("div").class("sapMNCContentShimmerPlaceholderItemHeader").class("sapMNCLoadingShimmer").openEnd().close("div");e.close("div");e.close("div");e.close("div")}else{var d=a._getMaxDigitsData();this._prepareAndRenderIcon(e,a,a._oIcon,d.fontClass);var c=a.getTruncateValueTo()||d.maxLength;e.openStart("span",a.getId()+"-value-inner");if(d.fontClass){e.class(d.fontClass)}e.openEnd();if(s.length>=c&&(s[c-1]==="."||s[c-1]===",")){e.text(s.substring(0,c-1))}else{e.text(s?s.substring(0,c):i)}e.close("span");this._renderScaleAndIndicator(e,a,t,s,l,d.fontClass);e.close("div")}};return l},true);
//# sourceMappingURL=NumericContentRenderer.js.map