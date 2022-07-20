/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","./thirdparty/Badge"],function(e,i){"use strict";var t=e.extend("sap.ui.webc.main.Badge",{metadata:{library:"sap.ui.webc.main",tag:"ui5-badge-ui5",properties:{colorScheme:{type:"string",defaultValue:"1"},text:{type:"string",defaultValue:"",mapping:"textContent"}},aggregations:{icon:{type:"sap.ui.webc.main.IIcon",multiple:false,slot:"icon"}},designtime:"sap/ui/webc/main/designtime/Badge.designtime"}});return t});