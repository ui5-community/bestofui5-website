/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Item","sap/m/Button","sap/ui/core/CustomStyleClassSupport"],function(t,e,s,o){"use strict";var i=e.extend("sap.m.SegmentedButtonItem",{metadata:{library:"sap.m",properties:{icon:{type:"string",group:"Appearance",defaultValue:null},visible:{type:"boolean",group:"Appearance",defaultValue:true},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null}},events:{press:{}}}});o.apply(i.prototype);i.prototype.init=function(){var t=new s(this.getId()+"-button");this.aCustomStyleClasses;this.mCustomStyleClassMap;t.aCustomStyleClasses=this.aCustomStyleClasses;t.mCustomStyleClassMap=this.mCustomStyleClassMap;t.getCustomData=this.getCustomData.bind(this);t.getLayoutData=this.getLayoutData.bind(this);t.firePress=function(){this.firePress();s.prototype.firePress.call(t)}.bind(this);this.getDomRef=t.getDomRef.bind(t);this.oButton=t};i.prototype.exit=function(){if(this.oButton){this.oButton.destroy();this.oButton=null}};i.prototype.setText=function(t){this.setProperty("text",t,true);if(this.oButton){this.oButton.setText(this.getText())}return this};i.prototype.setIcon=function(t){this.setProperty("icon",t,true);if(this.oButton){this.oButton.setIcon(this.getIcon())}return this};i.prototype.setEnabled=function(t){this.setProperty("enabled",t,true);if(this.oButton){this.oButton.setEnabled(this.getEnabled())}return this};i.prototype.setTextDirection=function(t){this.setProperty("textDirection",t,true);if(this.oButton){this.oButton.setTextDirection(this.getTextDirection())}return this};i.prototype.setVisible=function(t){this.setProperty("visible",t,true);if(this.oButton){this.oButton.setVisible(t)}return this};i.prototype.setWidth=function(t){this.setProperty("width",t,true);if(this.oButton){this.oButton.setWidth(this.getWidth())}return this};i.prototype.setTooltip=function(t){this.setAggregation("tooltip",t,true);if(this.oButton){this.oButton.setTooltip(t)}return this};return i});
//# sourceMappingURL=SegmentedButtonItem.js.map