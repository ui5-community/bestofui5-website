/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","./thirdparty/CardHeader"],function(e,t){"use strict";var a=e.extend("sap.ui.webc.main.CardHeader",{metadata:{library:"sap.ui.webc.main",tag:"ui5-card-header-ui5",properties:{interactive:{type:"boolean",defaultValue:false},status:{type:"string",defaultValue:""},subtitleText:{type:"string",defaultValue:""},titleText:{type:"string",defaultValue:""}},aggregations:{action:{type:"sap.ui.core.Control",multiple:true,slot:"action"},avatar:{type:"sap.ui.core.Control",multiple:true,slot:"avatar"}},events:{click:{parameters:{}}}}});return a});