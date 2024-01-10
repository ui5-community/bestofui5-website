/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/IllustratedMessage"],function(e,t){"use strict";var a=t.IllustrationMessageSize;var i=t.IllustrationMessageType;var s=e.extend("sap.ui.webc.fiori.IllustratedMessage",{metadata:{library:"sap.ui.webc.fiori",tag:"ui5-illustrated-message-ui5",properties:{name:{type:"sap.ui.webc.fiori.IllustrationMessageType",defaultValue:i.BeforeSearch},size:{type:"sap.ui.webc.fiori.IllustrationMessageSize",defaultValue:a.Auto},subtitleText:{type:"string",defaultValue:""},titleText:{type:"string",defaultValue:""}},defaultAggregation:"actions",aggregations:{actions:{type:"sap.ui.webc.main.IButton",multiple:true},subtitle:{type:"sap.ui.core.Control",multiple:false,slot:"subtitle"},title:{type:"sap.ui.core.Control",multiple:false,slot:"title"}},associations:{ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,mapping:{type:"property",to:"accessibleNameRef",formatter:"_getAriaLabelledByForRendering"}}}}});return s});
//# sourceMappingURL=IllustratedMessage.js.map