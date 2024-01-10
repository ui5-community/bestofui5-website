/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","sap/ui/core/EnabledPropagator","./thirdparty/Option"],function(e,t,a){"use strict";var i=e.extend("sap.ui.webc.main.Option",{metadata:{library:"sap.ui.webc.main",tag:"ui5-option-ui5",interfaces:["sap.ui.webc.main.ISelectOption"],properties:{additionalText:{type:"string"},enabled:{type:"boolean",defaultValue:true,mapping:{type:"property",to:"disabled",formatter:"_mapEnabled"}},icon:{type:"string"},selected:{type:"boolean",defaultValue:false},text:{type:"string",defaultValue:"",mapping:"textContent"},value:{type:"string"}}}});a.call(i.prototype);return i});
//# sourceMappingURL=Option.js.map