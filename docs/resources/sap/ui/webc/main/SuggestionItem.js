/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","sap/ui/core/library","./thirdparty/SuggestionItem"],function(e,t,i){"use strict";var a=i.ValueState;var n=t.ListItemType;var u=e.extend("sap.ui.webc.main.SuggestionItem",{metadata:{library:"sap.ui.webc.main",tag:"ui5-suggestion-item-ui5",interfaces:["sap.ui.webc.main.IInputSuggestionItem"],properties:{additionalText:{type:"string"},additionalTextState:{type:"sap.ui.core.ValueState",defaultValue:a.None},description:{type:"string"},icon:{type:"string"},iconEnd:{type:"boolean",defaultValue:false},image:{type:"string"},text:{type:"string",defaultValue:""},type:{type:"sap.ui.webc.main.ListItemType",defaultValue:n.Active}}}});return u});
//# sourceMappingURL=SuggestionItem.js.map