/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{name:{singular:"BADGE_NAME",plural:"BADGE_NAME_PLURAL"},actions:{remove:{changeType:"hideControl"},rename:{changeType:"rename",domRef:function(e){return e.getDomRef()},getTextMutators:function(e){return{getText:function(){return e.getText()},setText:function(t){e.setText(t)}}}},reveal:{changeType:"unhideControl"}}}});
//# sourceMappingURL=Badge.designtime.js.map