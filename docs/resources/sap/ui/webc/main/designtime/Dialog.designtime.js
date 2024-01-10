/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{name:{singular:"DIALOG_NAME",plural:"DIALOG_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"},rename:{changeType:"rename",domRef:function(e){return e.getDomRef().shadowRoot.querySelector(".ui5-popup-header-text")},getTextMutators:function(e){return{getText:function(){return e.getDomRef().getAttribute("header-text")},setText:function(t){e.getDomRef().setAttribute("header-text",t)}}}}}}});
//# sourceMappingURL=Dialog.designtime.js.map