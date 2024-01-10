/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","sap/ui/core/EnabledPropagator","./thirdparty/MediaGalleryItem"],function(e,a,t){"use strict";var l=a.MediaGalleryItemLayout;var i=e.extend("sap.ui.webc.fiori.MediaGalleryItem",{metadata:{library:"sap.ui.webc.fiori",tag:"ui5-media-gallery-item-ui5",interfaces:["sap.ui.webc.fiori.IMediaGalleryItem"],properties:{enabled:{type:"boolean",defaultValue:true,mapping:{type:"property",to:"disabled",formatter:"_mapEnabled"}},layout:{type:"sap.ui.webc.fiori.MediaGalleryItemLayout",defaultValue:l.Square},selected:{type:"boolean",defaultValue:false}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:false},thumbnail:{type:"sap.ui.core.Control",multiple:false,slot:"thumbnail"}}}});t.call(i.prototype);return i});
//# sourceMappingURL=MediaGalleryItem.js.map