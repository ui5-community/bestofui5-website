/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","./thirdparty/Card"],function(e,t){"use strict";var a=e.extend("sap.ui.webc.main.Card",{metadata:{library:"sap.ui.webc.main",tag:"ui5-card-ui5",properties:{accessibleName:{type:"string",defaultValue:""},height:{type:"sap.ui.core.CSSSize",mapping:"style"},width:{type:"sap.ui.core.CSSSize",mapping:"style"}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true},header:{type:"sap.ui.core.Control",multiple:true,slot:"header"}},associations:{ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,mapping:{type:"property",to:"accessibleNameRef",formatter:"_getAriaLabelledByForRendering"}}},designtime:"sap/ui/webc/main/designtime/Card.designtime"}});return a});