/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","./thirdparty/ColorPalettePopover","./thirdparty/features/ColorPaletteMoreColors"],function(e,o){"use strict";var t=e.extend("sap.ui.webc.main.ColorPalettePopover",{metadata:{library:"sap.ui.webc.main",tag:"ui5-color-palette-popover-ui5",properties:{defaultColor:{type:"sap.ui.core.CSSColor"},showDefaultColor:{type:"boolean",defaultValue:false},showMoreColors:{type:"boolean",defaultValue:false},showRecentColors:{type:"boolean",defaultValue:false}},defaultAggregation:"colors",aggregations:{colors:{type:"sap.ui.webc.main.IColorPaletteItem",multiple:true}},events:{itemClick:{parameters:{color:{type:"string"}}}},methods:["openPopover","showAt"]}});return t});