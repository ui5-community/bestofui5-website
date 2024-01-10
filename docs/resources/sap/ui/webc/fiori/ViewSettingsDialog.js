/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/ViewSettingsDialog"],function(e,t){"use strict";var r=e.extend("sap.ui.webc.fiori.ViewSettingsDialog",{metadata:{library:"sap.ui.webc.fiori",tag:"ui5-view-settings-dialog-ui5",properties:{sortDescending:{type:"boolean",defaultValue:false}},aggregations:{filterItems:{type:"sap.ui.webc.fiori.IFilterItem",multiple:true,slot:"filterItems"},sortItems:{type:"sap.ui.webc.fiori.ISortItem",multiple:true,slot:"sortItems"}},events:{beforeOpen:{parameters:{}},cancel:{parameters:{sortOrder:{type:"string"},sortBy:{type:"string"},sortByItem:{type:"HTMLElement"},sortDescending:{type:"boolean"},filters:{type:"Array"}}},confirm:{parameters:{sortOrder:{type:"string"},sortBy:{type:"string"},sortByItem:{type:"HTMLElement"},sortDescending:{type:"boolean"},filters:{type:"Array"}}}},methods:["setConfirmedSettings","show"]}});return r});
//# sourceMappingURL=ViewSettingsDialog.js.map