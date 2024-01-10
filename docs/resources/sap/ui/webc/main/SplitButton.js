/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","sap/ui/core/EnabledPropagator","./thirdparty/SplitButton"],function(e,t,a){"use strict";var i=t.ButtonDesign;var n=e.extend("sap.ui.webc.main.SplitButton",{metadata:{library:"sap.ui.webc.main",tag:"ui5-split-button-ui5",properties:{accessibleName:{type:"string"},activeIcon:{type:"string",defaultValue:""},design:{type:"sap.ui.webc.main.ButtonDesign",defaultValue:i.Default},enabled:{type:"boolean",defaultValue:true,mapping:{type:"property",to:"disabled",formatter:"_mapEnabled"}},icon:{type:"string",defaultValue:""},text:{type:"string",defaultValue:"",mapping:"textContent"}},events:{arrowClick:{parameters:{}},click:{parameters:{}}}}});a.call(n.prototype);return n});
//# sourceMappingURL=SplitButton.js.map