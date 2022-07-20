/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","./thirdparty/IllustratedMessage"],function(e,t){"use strict";var a=t.IllustrationMessageType;var i=e.extend("sap.ui.webc.fiori.IllustratedMessage",{metadata:{library:"sap.ui.webc.fiori",tag:"ui5-illustrated-message-ui5",properties:{name:{type:"sap.ui.webc.fiori.IllustrationMessageType",defaultValue:a.BeforeSearch},subtitleText:{type:"string",defaultValue:""},titleText:{type:"string",defaultValue:""}},defaultAggregation:"actions",aggregations:{actions:{type:"sap.ui.webc.main.IButton",multiple:true},subtitle:{type:"sap.ui.core.Control",multiple:false,slot:"subtitle"}}}});return i});