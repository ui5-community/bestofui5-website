/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/MediaGallery"],function(e,a){"use strict";var i=a.MediaGalleryLayout;var l=a.MediaGalleryMenuHorizontalAlign;var t=a.MediaGalleryMenuVerticalAlign;var r=e.extend("sap.ui.webc.fiori.MediaGallery",{metadata:{library:"sap.ui.webc.fiori",tag:"ui5-media-gallery-ui5",properties:{interactiveDisplayArea:{type:"boolean",defaultValue:false},layout:{type:"sap.ui.webc.fiori.MediaGalleryLayout",defaultValue:i.Auto},menuHorizontalAlign:{type:"sap.ui.webc.fiori.MediaGalleryMenuHorizontalAlign",defaultValue:l.Left},menuVerticalAlign:{type:"sap.ui.webc.fiori.MediaGalleryMenuVerticalAlign",defaultValue:t.Bottom},showAllThumbnails:{type:"boolean",defaultValue:false}},defaultAggregation:"items",aggregations:{items:{type:"sap.ui.webc.fiori.IMediaGalleryItem",multiple:true}},events:{displayAreaClick:{parameters:{}},overflowClick:{parameters:{}},selectionChange:{parameters:{item:{type:"HTMLElement"}}}}}});return r});
//# sourceMappingURL=MediaGallery.js.map