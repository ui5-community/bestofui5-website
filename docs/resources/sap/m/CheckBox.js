/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./Label","./library","sap/ui/core/Control","sap/ui/core/Element","sap/ui/core/EnabledPropagator","sap/ui/core/AccessKeysEnablement","sap/ui/core/library","sap/ui/core/Lib","./CheckBoxRenderer","sap/ui/events/KeyCodes","sap/ui/core/LabelEnablement","sap/ui/core/message/MessageMixin"],function(e,t,i,a,r,o,n,s,l,p,u,c){"use strict";var g=n.ValueState;var h=n.TextAlign;var d=n.TextDirection;var y=i.extend("sap.m.CheckBox",{metadata:{interfaces:["sap.m.IToolbarInteractiveControl","sap.ui.core.IFormContent","sap.ui.core.ISemanticFormContent","sap.ui.core.IAccessKeySupport"],library:"sap.m",properties:{selected:{type:"boolean",group:"Data",defaultValue:false},partiallySelected:{type:"boolean",group:"Data",defaultValue:false},enabled:{type:"boolean",group:"Behavior",defaultValue:true},name:{type:"string",group:"Misc",defaultValue:null},text:{type:"string",group:"Appearance",defaultValue:null},textDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:d.Inherit},textAlign:{type:"sap.ui.core.TextAlign",group:"Appearance",defaultValue:h.Begin},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:""},useEntireWidth:{type:"boolean",group:"Appearance",defaultValue:false},activeHandling:{type:"boolean",group:"Misc",defaultValue:true},editable:{type:"boolean",group:"Behavior",defaultValue:true},valueState:{type:"sap.ui.core.ValueState",group:"Data",defaultValue:g.None},valueStateText:{type:"string",group:"Misc",defaultValue:null,visibility:"hidden"},displayOnly:{type:"boolean",group:"Behavior",defaultValue:false},wrapping:{type:"boolean",group:"Appearance",defaultValue:false},highlightAccKeysRef:{type:"boolean",defaultValue:false,visibility:"hidden"},accesskey:{type:"string",defaultValue:"",visibility:"hidden"}},aggregations:{_label:{type:"sap.m.Label",group:"Behavior",multiple:false,visibility:"hidden"}},associations:{ariaDescribedBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaDescribedBy"},ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},events:{select:{parameters:{selected:{type:"boolean"}}}},dnd:{draggable:true,droppable:false},designtime:"sap/m/designtime/CheckBox.designtime"},renderer:l});r.call(y.prototype);c.call(y.prototype);y.prototype.init=function(){this._handleReferencingLabels();o.registerControl(this)};y.prototype.onAccKeysHighlightStart=function(){this._getLabel().setProperty("highlightAccKeysRef",true)};y.prototype.onAccKeysHighlightEnd=function(){this._getLabel().setProperty("highlightAccKeysRef",false)};y.prototype.onBeforeRendering=function(){if(this.getText()){this.setProperty("accesskey",this.getText()[0].toLowerCase())}};y.prototype.exit=function(){this._oLabel=null;delete this._iTabIndex};y.prototype.setText=function(e){var t=this._getLabel();this.setProperty("text",e);t.setText(e);return this};y.prototype.setWidth=function(e){this.setProperty("width",e,true);this._setWidth();return this};y.prototype.setUseEntireWidth=function(e){this.setProperty("useEntireWidth",e,true);this._setWidth();return this};y.prototype.setTextDirection=function(e){var t=this._getLabel();this.setProperty("textDirection",e);t.setTextDirection(e);return this};y.prototype.setTextAlign=function(e){var t=this._getLabel();this.setProperty("textAlign",e);t.setTextAlign(e);return this};y.prototype.setValueStateText=function(e){return this.setProperty("valueStateText",e)};y.prototype.setWrapping=function(e){var t=this._getLabel();this.setProperty("wrapping",e);t.setWrapping(e);return this};y.prototype.getFormattedState=function(){var e=s.getResourceBundleFor("sap.m");return this.getSelected()?e.getText("ACC_CTR_STATE_CHECKED"):e.getText("ACC_CTR_STATE_NOT_CHECKED")};y.prototype.getFormFormattedValue=function(){return this.getFormattedState()};y.prototype.getFormValueProperty=function(){return"selected"};y.prototype.ontouchstart=function(e){e.originalEvent._sapui_handledByControl=true};y.prototype.ontap=function(e){var t;if(this.getEnabled()&&this.getEditable()&&!this.getDisplayOnly()){this.$().trigger("focus");t=this._getSelectedState();this.setSelected(t);this.setPartiallySelected(false);this.fireSelect({selected:t});e&&e.setMarked()}};y.prototype.onkeyup=function(e){if(e&&e.which===p.SPACE&&!e.shiftKey){this.ontap(e);e.preventDefault()}};y.prototype.onsapspace=function(e){e.preventDefault()};y.prototype.onsapenter=function(e){this.ontap(e)};y.prototype.setTabIndex=function(e){this._iTabIndex=e;this.$("CbBg").attr("tabindex",e);return this};y.prototype.getTabIndex=function(){if(this.hasOwnProperty("_iTabIndex")){return this._iTabIndex}return this.getEnabled()&&!this.getDisplayOnly()?0:-1};y.prototype._getLabel=function(){if(!this._oLabel){this._oLabel=new e(this.getId()+"-label").addStyleClass("sapMCbLabel");this._oLabel.getAccessKeysFocusTarget=function(){return this.getFocusDomRef()}.bind(this);this.setAggregation("_label",this._oLabel,true)}return this.getAggregation("_label")};y.prototype._setWidth=function(){var e=this._getLabel(),t=this.$(),i=this.getWidth();if(this.getUseEntireWidth()){e.setWidth("");t.outerWidth(i)}else{t.outerWidth("");e.setWidth(i)}};y.prototype._getSelectedState=function(){var e=this.getSelected(),t=this.getPartiallySelected();return e===t||!e&&t};y.prototype._getAriaChecked=function(){var e=this.getSelected();if(this.getPartiallySelected()&&e){return"mixed"}return e};y.prototype._fnLabelTapHandler=function(){this.$().trigger("focus")};y.prototype._handleReferencingLabels=function(){var e=u.getReferencingLabels(this),t=this;if(e.length>0){e.forEach(function(e){a.registry.get(e).addEventDelegate({ontap:function(){t._fnLabelTapHandler()}})})}};y.prototype.getAccessibilityInfo=function(){var e=s.getResourceBundleFor("sap.m"),t=this.getText();return{role:"checkbox",type:e.getText("ACC_CTR_TYPE_CHECKBOX"),description:(t?t+" ":"")+this.getFormattedState(),focusable:this.getEnabled()&&!this.getDisplayOnly(),enabled:this.getEnabled(),editable:this.getEditable()}};y.prototype._getToolbarInteractive=function(){return true};y.prototype.getFormDoNotAdjustWidth=function(){return this.getText()?false:true};return y});
//# sourceMappingURL=CheckBox.js.map