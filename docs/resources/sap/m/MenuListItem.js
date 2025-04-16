/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ListItemBase","./library","sap/ui/core/IconPool","sap/ui/core/library","./MenuListItemRenderer","sap/m/Image"],function(e,t,i,r,a,s){"use strict";var o=r.TextDirection;var n=t.ListType;var p=e.extend("sap.m.MenuListItem",{metadata:{library:"sap.m",properties:{enabled:{type:"boolean",group:"Misc",defaultValue:true},title:{type:"string",group:"Misc",defaultValue:null},icon:{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},iconDensityAware:{type:"boolean",group:"Misc",defaultValue:true},titleTextDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:o.Inherit},startsSection:{type:"boolean",group:"Behavior",defaultValue:false}},associations:{menuItem:{type:"sap.m.MenuItem",multiple:false}}},renderer:a});p.prototype.exit=function(){if(this._image){this._image.destroy()}if(this._imageRightArrow){this._imageRightArrow.destroy()}e.prototype.exit.apply(this,arguments)};p.prototype._getImage=function(e,t,r,a){var o=this._image;if(o){o.setSrc(r);if(o.isA("sap.m.Image")){o.setDensityAware(a)}}else{o=i.createControlByURI({id:e,src:r,densityAware:a,useIconTooltip:false},s).setParent(this,null,true)}if(o.isA("sap.m.Image")){o.addStyleClass(t,true)}else{o.addStyleClass(t+"Icon",true)}this._image=o;return this._image};p.prototype._getIconArrowRight=function(){if(!this._imageRightArrow){this._imageRightArrow=i.createControlByURI({id:this.getId()+"-arrowRight",src:"sap-icon://slim-arrow-right",useIconTooltip:false},s).setParent(this,null,true);this._imageRightArrow.addStyleClass("sapMMenuLIArrowRightIcon",true)}return this._imageRightArrow};p.prototype._hasSubItems=function(){return!!(this.getMenuItem()&&sap.ui.getCore().byId(this.getMenuItem()).getItems().length)};p.prototype.setProperty=function(t,i){e.prototype.setProperty.apply(this,arguments);this.fireEvent("propertyChanged",{propertyKey:t,propertyValue:i});if(t==="enabled"){this.setType(i?n.Active:n.Inactive)}};return p});
//# sourceMappingURL=MenuListItem.js.map