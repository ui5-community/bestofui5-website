/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/MessageStrip"],function(e,a){"use strict";var t=a.MessageStripDesign;var i=e.extend("sap.ui.webc.main.MessageStrip",{metadata:{library:"sap.ui.webc.main",tag:"ui5-message-strip-ui5",properties:{design:{type:"sap.ui.webc.main.MessageStripDesign",defaultValue:t.Information},height:{type:"sap.ui.core.CSSSize",mapping:"style"},hideCloseButton:{type:"boolean",defaultValue:false},hideIcon:{type:"boolean",defaultValue:false},text:{type:"string",defaultValue:"",mapping:"textContent"},width:{type:"sap.ui.core.CSSSize",mapping:"style"}},aggregations:{icon:{type:"sap.ui.webc.main.IIcon",multiple:false,slot:"icon"}},events:{close:{parameters:{}}}}});return i});
//# sourceMappingURL=MessageStrip.js.map