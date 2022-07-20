/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device"],function(e){"use strict";var t={apiVersion:2};t.render=function(e,t){var r=t._sSymbolId;e.openStart("svg",t);e.class("sapMIllustration");e.openEnd();e.openStart("use");e.attr("href","#"+r);e.attr("width","100%");e.attr("height","100%");e.openEnd();e.close("use");e.close("svg")};return t},true);