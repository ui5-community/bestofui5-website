/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/features/ColorPaletteMoreColors","./thirdparty/ColorPalette"],function(e,t){"use strict";var r=e.extend("sap.ui.webc.main.ColorPalette",{metadata:{library:"sap.ui.webc.main",tag:"ui5-color-palette-ui5",defaultAggregation:"colors",aggregations:{colors:{type:"sap.ui.webc.main.IColorPaletteItem",multiple:true}},events:{itemClick:{parameters:{color:{type:"string"}}}}}});return r});
//# sourceMappingURL=ColorPalette.js.map