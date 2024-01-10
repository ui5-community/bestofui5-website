/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","sap/ui/core/EnabledPropagator","./thirdparty/WizardStep"],function(e,t,a){"use strict";var i=e.extend("sap.ui.webc.fiori.WizardStep",{metadata:{library:"sap.ui.webc.fiori",tag:"ui5-wizard-step-ui5",interfaces:["sap.ui.webc.fiori.IWizardStep"],properties:{branching:{type:"boolean",defaultValue:false},enabled:{type:"boolean",defaultValue:true,mapping:{type:"property",to:"disabled",formatter:"_mapEnabled"}},icon:{type:"string",defaultValue:""},selected:{type:"boolean",defaultValue:false},subtitleText:{type:"string",defaultValue:""},titleText:{type:"string",defaultValue:""}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true}}}});a.call(i.prototype);return i});
//# sourceMappingURL=WizardStep.js.map