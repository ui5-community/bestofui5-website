/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library","sap/ui/core/Renderer","sap/m/OverflowToolbarRenderer","sap/m/BarInPageEnabler"],function(e,r,t,n){"use strict";var o=e.OverflowToolbarPriority;var i=r.extend(t);i.apiVersion=2;i.renderBarContent=function(e,r){var t=false,i;if(r.getActive()){e.renderControl(r._getActiveButton())}r._getVisibleContent().forEach(function(l){n.addChildClassTo(l,r);i=l.isA("sap.tnt.ToolHeaderUtilitySeparator");if(i&&!t){this._renderOverflowButton(e,r);t=true}if(r._getControlPriority(l)!==o.AlwaysOverflow){e.renderControl(l)}}.bind(this));if(t){return}this._renderOverflowButton(e,r)};i._renderOverflowButton=function(e,r){var n=r.getContent().some(function(e){return e.getVisible()&&r._getControlPriority(e)===o.AlwaysOverflow}),i=r.getContent().some(function(e){return e.getVisible()});if(n||r._getOverflowButtonNeeded()){t.renderOverflowButton(e,r)}if(i){t.renderOverflowButtonClone(e,r)}};return i},true);
//# sourceMappingURL=ToolHeaderRenderer.js.map