/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Core"],function(e){"use strict";var t={apiVersion:2};var a=e.getLibraryResourceBundle("sap.tnt");t.render=function(e,t){var r,i=t.getItems(),n=t.getExpanded(),s=[],o=false,l=t._getOverflowItem();i.forEach(function(e){if(e.getVisible()){s.push(e);if(e.getIcon()){o=true}}});e.openStart("ul",t);var I=t.getWidth();if(I&&n){e.style("width",I)}e.class("sapTntNavLI");if(!n){e.class("sapTntNavLICollapsed")}if(!o){e.class("sapTntNavLINoIcons")}r=!n&&!t.hasStyleClass("sapTntNavLIPopup")?"menubar":"tree";e.attr("role",r);if(r==="menubar"){e.attr("aria-orientation","vertical");e.attr("aria-roledescription",a.getText("NAVIGATION_LIST_ITEM_ROLE_DESCRIPTION_MENUBAR"))}else{e.attr("aria-roledescription",a.getText("NAVIGATION_LIST_ITEM_ROLE_DESCRIPTION_TREE"))}e.openEnd();s.forEach(function(a){a.render(e,t)});if(!n){l.render(e,t)}e.close("ul")};return t},true);
//# sourceMappingURL=NavigationListRenderer.js.map