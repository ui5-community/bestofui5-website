/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{name:{singular:"TABLE_NAME",plural:"TABLE_NAME_PLURAL"},aggregations:{columns:{domRef:function(e){return e.getDomRef().shadowRoot.querySelector(".ui5-table-header-row")}},rows:{domRef:function(e){return e.getDomRef().shadowRoot.querySelector("tbody")}}},actions:{remove:{changeType:"hideControl"},reveal:{changeType:"unhideControl"}}}});
//# sourceMappingURL=Table.designtime.js.map