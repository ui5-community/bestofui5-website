/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/Wizard"],function(e,i){"use strict";var t=i.WizardContentLayout;var a=e.extend("sap.ui.webc.fiori.Wizard",{metadata:{library:"sap.ui.webc.fiori",tag:"ui5-wizard-ui5",properties:{contentLayout:{type:"sap.ui.webc.fiori.WizardContentLayout",defaultValue:t.MultipleSteps},height:{type:"sap.ui.core.CSSSize",mapping:"style"}},defaultAggregation:"steps",aggregations:{steps:{type:"sap.ui.webc.fiori.IWizardStep",multiple:true}},events:{stepChange:{parameters:{step:{type:"sap.ui.webc.fiori.IWizardStep"},previousStep:{type:"sap.ui.webc.fiori.IWizardStep"},changeWithClick:{type:"boolean"}}}}}});return a});
//# sourceMappingURL=Wizard.js.map