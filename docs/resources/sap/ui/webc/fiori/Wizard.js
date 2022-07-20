/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","./thirdparty/Wizard"],function(e,t){"use strict";var i=e.extend("sap.ui.webc.fiori.Wizard",{metadata:{library:"sap.ui.webc.fiori",tag:"ui5-wizard-ui5",properties:{height:{type:"sap.ui.core.CSSSize",mapping:"style"}},defaultAggregation:"steps",aggregations:{steps:{type:"sap.ui.webc.fiori.IWizardStep",multiple:true}},events:{stepChange:{parameters:{step:{type:"HTMLElement"},previousStep:{type:"HTMLElement"},changeWithClick:{type:"boolean"}}}}}});return i});