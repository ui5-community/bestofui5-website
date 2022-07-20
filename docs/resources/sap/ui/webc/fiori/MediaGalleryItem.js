/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","sap/ui/core/EnabledPropagator","./thirdparty/MediaGalleryItem"],function(e,a,t){"use strict";var i=a.MediaGalleryItemLayout;var l=e.extend("sap.ui.webc.fiori.MediaGalleryItem",{metadata:{library:"sap.ui.webc.fiori",tag:"ui5-media-gallery-item-ui5",interfaces:["sap.ui.webc.fiori.IMediaGalleryItem"],properties:{enabled:{type:"boolean",defaultValue:true,mapping:{type:"attribute",to:"disabled",formatter:"_mapEnabled"}},layout:{type:"sap.ui.webc.fiori.MediaGalleryItemLayout",defaultValue:i.Square},selected:{type:"boolean",defaultValue:false}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:false},thumbnail:{type:"sap.ui.core.Control",multiple:false,slot:"thumbnail"}}}});t.call(l.prototype);return l});