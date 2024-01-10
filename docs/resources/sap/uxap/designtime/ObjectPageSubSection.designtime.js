/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{palette:{group:"CONTAINER",icons:{svg:"sap/uxap/designtime/ObjectPageSubSection.icon.svg"}},actions:{remove:{changeType:"hideControl",isEnabled:function(e){var n=e.getParent(),t;if(n){t=n.getSubSections().filter(function(e){return e.getVisible()});return t.length>1}return false}},reveal:{changeType:"unhideControl"},rename:function(){return{changeType:"rename",domRef:".sapUxAPObjectPageSubSectionHeaderTitle",isEnabled:function(e){return e.$("headerTitle").get(0)!=undefined}}}},aggregations:{actions:{domRef:":sap-domref .sapUxAPObjectPageSubSectionHeaderActions",actions:{move:{changeType:"moveControls"}}}}}});
//# sourceMappingURL=ObjectPageSubSection.designtime.js.map