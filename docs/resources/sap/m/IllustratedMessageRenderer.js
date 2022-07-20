/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e={apiVersion:2};e.render=function(e,t){var n=t._getIllustration(),s=t._getTitle(),r=t._getDescription(),a=t.getAdditionalContent(),o=t.getEnableVerticalResponsiveness();e.openStart("figure",t);e.class("sapMIllustratedMessage");if(o){e.class("sapMIllustratedMessageScalable")}e.openEnd();e.renderControl(n);e.openStart("figcaption").openEnd();e.renderControl(s);e.renderControl(r.addStyleClass("sapMIllustratedMessageDescription"));e.close("figcaption");e.openStart("div");e.class("sapMIllustratedMessageAdditionalContent");e.openEnd();a.forEach(function(t){e.renderControl(t)});e.close("div");e.close("figure")};return e},true);