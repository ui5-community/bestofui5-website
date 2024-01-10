/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{name:{singular:"PANEL_NAME",plural:"PANEL_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl",getLabel:function(e){return e.getHeaderText()||e.getId()}},rename:{changeType:"rename",domRef:function(e){return e.getDomRef().shadowRoot.querySelector(".ui5-panel-header-title")},getTextMutators:function(e){return{getText:function(){return e.getDomRef().shadowRoot.querySelector(".ui5-panel-header-title").textContent},setText:function(t){var o=e.getDomRef().shadowRoot.querySelector(".ui5-panel-header-title");var n=[].find.call(o.childNodes,function(e){return e.nodeType===3});n.nodeValue=t}}}}},aggregations:{header:{domRef:function(e){return e.getDomRef().shadowRoot.querySelector(".ui5-panel-header")}},content:{domRef:function(e){return e.getDomRef().shadowRoot.querySelector(".ui5-panel-content")},actions:{move:"moveControls"}}}}});
//# sourceMappingURL=Panel.designtime.js.map