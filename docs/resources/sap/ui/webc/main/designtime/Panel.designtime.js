/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{name:{singular:"PANEL_NAME",plural:"PANEL_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl",getLabel:function(e){return e.getHeaderText()||e.getId()}},rename:{changeType:"rename",domRef:function(e){return e.getDomRef().shadowRoot.querySelector(".ui5-panel-header-title")},getTextMutators:function(e){return{getText:function(){return e.getDomRef().getAttribute("header-text")},setText:function(t){e.getDomRef().setAttribute("header-text",t)}}}}},aggregations:{header:{domRef:function(e){return e.getDomRef().shadowRoot.querySelector(".ui5-panel-header")}},content:{domRef:function(e){return e.getDomRef().shadowRoot.querySelector(".ui5-panel-content")},actions:{move:"moveControls"}}}}});