/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","sap/ui/core/EnabledPropagator","sap/ui/webc/main/library","./thirdparty/NotificationAction"],function(t,i,a,e){"use strict";var n=e.ButtonDesign;var o=t.extend("sap.ui.webc.fiori.NotificationAction",{metadata:{library:"sap.ui.webc.fiori",tag:"ui5-notification-action-ui5",interfaces:["sap.ui.webc.fiori.INotificationAction"],properties:{design:{type:"sap.ui.webc.main.ButtonDesign",defaultValue:n.Transparent},enabled:{type:"boolean",defaultValue:true,mapping:{type:"attribute",to:"disabled",formatter:"_mapEnabled"}},icon:{type:"string",defaultValue:""},text:{type:"string",defaultValue:""}}}});a.call(o.prototype);return o});