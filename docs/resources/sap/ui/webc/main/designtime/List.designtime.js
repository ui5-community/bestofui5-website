/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";function e(e){var t=e;while(t){if(t.isA("sap.ui.webc.main.List")){var n=t.getBinding("items");if(n){return true}return false}t=t.getParent()}return false}return{name:{singular:"LIST_NAME",plural:"LIST_NAME_PLURAL"},aggregations:{items:{propagateMetadata:function(t){if(e(t)){return{actions:{remove:null,rename:null}}}},actions:{move:"moveControls"}}},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"},rename:function(){return{changeType:"rename",domRef:function(e){return e.getDomRef().getDomRef().querySelector(".ui5-list-header")},getTextMutators:function(e){return{getText:function(){return e.getHeaderText()},setText:function(t){e.setHeaderText(t)}}},isEnabled:function(e){return e.getHeaderText().length>0},validators:["noEmptyText"]}}}}});
//# sourceMappingURL=List.designtime.js.map