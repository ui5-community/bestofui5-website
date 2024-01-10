/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{domRef:function(e){return e.getDomRef().getDomRef()},actions:{remove:{changeType:"hideControl"},rename:{changeType:"rename",domRef:function(e){return e.getDomRef().getDomRef()},getTextMutators:function(e){return{getText:function(){return e.getText()},setText:function(t){e.setText(t)}}},isEnabled:function(e){return e.getText().length>0},validators:["noEmptyText"]},reveal:{changeType:"unhideControl"}}}});
//# sourceMappingURL=BreadcrumbsItem.designtime.js.map