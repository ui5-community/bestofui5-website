/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{name:{singular:"TAB_NAME",plural:"TAB_NAME_PLURAL"},domRef:function(e){return e.getParent().getItems().find(function(t){return t.sId===e.sId}).getDomRef()._getRealDomRef()},actions:{rename:{changeType:"rename",domRef:function(e){return e.getDomRef()._getRealDomRef().querySelector(".ui5-tab-strip-itemText")},getTextMutators:function(e){return{getText:function(){return e.getText()},setText:function(t){e.setText(t)}}}}}}});
//# sourceMappingURL=Tab.designtime.js.map