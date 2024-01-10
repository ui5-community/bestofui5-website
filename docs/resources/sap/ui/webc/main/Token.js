/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/Token"],function(e,a){"use strict";var t=e.extend("sap.ui.webc.main.Token",{metadata:{library:"sap.ui.webc.main",tag:"ui5-token-ui5",interfaces:["sap.ui.webc.main.IToken"],properties:{readonly:{type:"boolean",defaultValue:false},selected:{type:"boolean",defaultValue:false},text:{type:"string",defaultValue:""}},aggregations:{closeIcon:{type:"sap.ui.webc.main.IIcon",multiple:true,slot:"closeIcon"}},events:{select:{parameters:{}}}}});return t});
//# sourceMappingURL=Token.js.map