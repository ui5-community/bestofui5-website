/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{name:{singular:"RADIO_BUTTON_NAME",plural:"RADIO_BUTTON_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},rename:{changeType:"rename",domRef:function(e){return e.getDomRef().shadowRoot.querySelector(".ui5-radio-label")},getTextMutators:function(e){return{getText:function(){return e.getText()},setText:function(t){e.setText(t)}}}},reveal:{changeType:"unhideControl"}}}});
//# sourceMappingURL=RadioButton.designtime.js.map