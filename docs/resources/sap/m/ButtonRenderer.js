/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/library","sap/ui/core/IconPool","sap/ui/core/ShortcutHintsMixin","sap/m/library","sap/ui/core/InvisibleText","sap/ui/core/AccessKeysEnablement"],function(e,t,a,i,n,s){"use strict";var r=i.ButtonType;var c=i.ButtonAccessibilityType;var o=i.ButtonAccessibleRole;var l=e.TextDirection;var p=i.BadgeState;var d=e.aria.HasPopup;var u={apiVersion:2};u.render=function(e,i){var n=i.getId();var s=i.getType();var c=i.getEnabled();var o=i.getWidth();var p=i._getTooltip();var d=i._getText();var g=i.getTextDirection();var I=g===l.Inherit;var T=t.getIconURI("nav-back");var A;e.openStart("button",i);e.class("sapMBtnBase");e.attr("data-ui5-accesskey",i.getProperty("accesskey"));if(!i._isUnstyled()){e.class("sapMBtn");if((s===r.Back||s===r.Up)&&i._getAppliedIcon()&&!d){e.class("sapMBtnBack")}}var B=u.generateAccProps(i);if(this.renderAccessibilityAttributes){this.renderAccessibilityAttributes(e,i,B)}e.accessibilityState(i,B);if(!c){e.attr("disabled","disabled");if(!i._isUnstyled()){e.class("sapMBtnDisabled")}}else{switch(s){case r.Accept:case r.Reject:case r.Emphasized:case r.Attention:e.class("sapMBtnInverted");break;default:break}}if(p&&!a.isDOMIDRegistered(n)){e.attr("title",p)}if(o!=""||o.toLowerCase()==="auto"){e.style("width",o);if(i._getAppliedIcon()&&d){A="4rem"}else{A="2.25rem"}e.style("min-width",A)}b(i,e);e.openEnd();e.openStart("span",n+"-inner");if(!i._isUnstyled()){e.class("sapMBtnInner")}if(i._isHoverable()){e.class("sapMBtnHoverable")}if(c){e.class("sapMFocusable")}if(!i._isUnstyled()){if(d){e.class("sapMBtnText")}if(s===r.Back||s===r.Up){e.class("sapMBtnBack")}if(i._getAppliedIcon()){if(i.getIconFirst()){e.class("sapMBtnIconFirst")}else{e.class("sapMBtnIconLast")}}}if(this.renderButtonAttributes){this.renderButtonAttributes(e,i)}if(!i._isUnstyled()&&s!==""){e.class("sapMBtn"+s)}b(i,e);e.openEnd();if(s===r.Back||s===r.Up){this.writeInternalIconPoolHtml(e,i,T)}if(i.getIconFirst()&&i._getAppliedIcon()){this.writeImgHtml(e,i)}if(d){this.writeButtonText(e,i,g,I)}if(!i.getIconFirst()&&i._getAppliedIcon()){this.writeImgHtml(e,i)}e.close("span");if(p){e.openStart("span",n+"-tooltip");e.class("sapUiInvisibleText");e.openEnd();e.text(p);e.close("span")}e.close("button")};u.writeImgHtml=function(e,t){var a=t.getType(),i=t.getIcon(),n=a===r.Back||a===r.Up;if(!i&&n){return}e.renderControl(t._getImage(t.getId()+"-img",t._getAppliedIcon(),t.getActiveIcon(),t.getIconDensityAware()))};u.writeInternalIconPoolHtml=function(e,t,a){e.renderControl(t._getInternalIconBtn(t.getId()+"-iconBtn",a))};u.writeButtonText=function(e,t,a,i){e.openStart("span",t.getId()+"-content");e.class("sapMBtnContent");if(a!==l.Inherit){e.attr("dir",a.toLowerCase())}if(t.getProperty("highlightAccKeysRef")){e.class(s.CSS_CLASS)}e.openEnd();if(i){e.openStart("bdi",t.getId()+"-BDI-content");e.openEnd()}e.text(t.getText());if(i){e.close("bdi")}e.close("span")};function b(e,t){if(e._bExcludeFromTabChain){t.attr("tabindex",-1)}}var g={Accept:"BUTTON_ARIA_TYPE_ACCEPT",Reject:"BUTTON_ARIA_TYPE_REJECT",Attention:"BUTTON_ARIA_TYPE_ATTENTION",Emphasized:"BUTTON_ARIA_TYPE_EMPHASIZED",Critical:"BUTTON_ARIA_TYPE_CRITICAL",Negative:"BUTTON_ARIA_TYPE_NEGATIVE",Success:"BUTTON_ARIA_TYPE_SUCCESS"};u.getButtonTypeAriaLabelId=function(e){return n.getStaticId("sap.m",g[e])};u.getBadgeTextId=function(e){return e._oBadgeData&&e._oBadgeData.value!==""&&e._oBadgeData.state!==p.Disappear?e._getBadgeInvisibleText().getId():""};u.generateAccProps=function(e){var t=e._getText(),a=e.getAriaHasPopup(),i,n=e.getAccessibleRole();if(t){i=u.generateTextButtonAccProps(e)}else{i=u.generateIconOnlyButtonAccProps(e)}i["disabled"]=null;if(n===o.Link){i["role"]="link"}i["haspopup"]=a===d.None?null:a.toLowerCase();return i};u.generateIconOnlyButtonAccProps=function(e){var t=u.getButtonTypeAriaLabelId(e.getType()),a=this.getBadgeTextId(e),i=e._getTooltip(),n=e.getId()+"-tooltip",s=e._determineAccessibilityType(),r={},o;switch(s){case c.Default:r["label"]={value:i,append:true};break;case c.Described:r["label"]={value:i,append:true};o=(t+" "+a).trim();o&&(r["describedby"]={value:o,append:true});break;case c.Labelled:r["describedby"]={value:n,append:true};break;case c.Combined:r["describedby"]={value:(n+" "+t+" "+a).trim(),append:true};break;default:break}return r};u.generateTextButtonAccProps=function(e){var t=e.getId(),a=u.getButtonTypeAriaLabelId(e.getType()),i=this.getBadgeTextId(e),n=e._getTooltip()?t+"-tooltip":"",s=t+"-content",r=e._determineAccessibilityType(),o=e._determineSelfReferencePresence(),l={},p;switch(r){case c.Default:n&&(l["describedby"]={value:n,append:true});break;case c.Described:p=(n+" "+a+" "+i).trim();p&&(l["describedby"]={value:p,append:true});break;case c.Labelled:o&&(l["labelledby"]={value:s,append:true});n&&(l["describedby"]={value:n,append:true});break;case c.Combined:p=(n+" "+a+" "+i).trim();p&&(l["describedby"]={value:p,append:true});o&&(l["labelledby"]={value:s,append:true});break;default:break}return l};return u},true);
//# sourceMappingURL=ButtonRenderer.js.map