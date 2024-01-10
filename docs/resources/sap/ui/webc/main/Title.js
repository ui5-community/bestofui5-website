/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/Title"],function(e,i){"use strict";var t=i.TitleLevel;var a=i.WrappingType;var p=e.extend("sap.ui.webc.main.Title",{metadata:{library:"sap.ui.webc.main",tag:"ui5-title-ui5",properties:{level:{type:"sap.ui.webc.main.TitleLevel",defaultValue:t.H2},text:{type:"string",defaultValue:"",mapping:"textContent"},width:{type:"sap.ui.core.CSSSize",mapping:"style"},wrappingType:{type:"sap.ui.webc.main.WrappingType",defaultValue:a.None}},designtime:"sap/ui/webc/main/designtime/Title.designtime"}});return p});
//# sourceMappingURL=Title.js.map