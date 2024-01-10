/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var e={apiVersion:2};e.render=function(e,t){if(!t.getVisible()){return}e.openStart("div",t);if(t._getSelectedViewContent()){e.class("sapUxAPBlockBase").class("sapUxAPBlockBase"+t.getMode())}else{var n=t.getMetadata().getName().split(".").pop();e.class(n+t.getMode())}e.openEnd();if(t._getSelectedViewContent()){e.renderControl(t._getSelectedViewContent())}e.close("div")};return e},true);
//# sourceMappingURL=BlockBaseRenderer.js.map