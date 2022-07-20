/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","./thirdparty/ColorPicker"],function(e,r){"use strict";var i=e.extend("sap.ui.webc.main.ColorPicker",{metadata:{library:"sap.ui.webc.main",tag:"ui5-color-picker-ui5",properties:{color:{type:"sap.ui.core.CSSColor"}},events:{change:{parameters:{}}}}});return i});