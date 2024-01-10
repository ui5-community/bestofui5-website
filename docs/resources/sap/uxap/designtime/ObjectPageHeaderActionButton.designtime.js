/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";return{actions:{remove:{changeType:"hideControl"},rename:function(e){if(e.getIcon()){return null}return{changeType:"rename",domRef:function(e){return e.$().find(".sapMBtnContent")[0]}}},reveal:{changeType:"unhideControl"}}}});
//# sourceMappingURL=ObjectPageHeaderActionButton.designtime.js.map