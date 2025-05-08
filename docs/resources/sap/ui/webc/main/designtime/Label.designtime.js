/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{name:{singular:"LABEL_NAME",plural:"LABEL_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"},rename:{changeType:"rename",domRef:function(e){return e.getDomRef().shadowRoot.querySelector(".ui5-title-root")},getTextMutators:function(e){return{getText:function(){return e.getText()},setText:function(t){e.setText(t)}}}}}}});
//# sourceMappingURL=Label.designtime.js.map