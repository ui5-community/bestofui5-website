/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/Device","sap/ui/base/Object","./ObjectPageSubSection","./library","sap/base/Log","sap/base/util/isEmptyObject"],function(jQuery,e,i,t,o,s,r){"use strict";var n=i.extend("sap.uxap._helpers.LazyLoading",{constructor:function(e){this._oObjectPageLayout=e;this._$html=jQuery("html");this._iPreviousScrollTop=0;this._iScrollProgress=0;this._iPreviousScrollTimestamp=0;this._sLazyLoadingTimer=null;this._bSuppressed=false;this._oPrevSubSectionsInView={};this.setLazyLoadingParameters()},getInterface:function(){return this}});n.prototype.setLazyLoadingParameters=function(){this.LAZY_LOADING_DELAY=200;if(this._isPhone()){this.NUMBER_OF_SUBSECTIONS_TO_PRELOAD={FirstRendering:1,ScrollToSection:1}}else if(this._isTablet()){this.NUMBER_OF_SUBSECTIONS_TO_PRELOAD={FirstRendering:2,ScrollToSection:1}}else if(this._isTabletSize()){this.NUMBER_OF_SUBSECTIONS_TO_PRELOAD={FirstRendering:2,ScrollToSection:2}}else{this.NUMBER_OF_SUBSECTIONS_TO_PRELOAD={FirstRendering:3,ScrollToSection:3}}this.LAZY_LOADING_FAST_SCROLLING_THRESHOLD=5};n.prototype.suppress=function(){this._bSuppressed=true};n.prototype.resume=function(){this._bSuppressed=false};n.prototype._triggerVisibleSubSectionsEvents=function(){this._oPrevSubSectionsInView={};this._oObjectPageLayout._requestAdjustLayout(true);this.doLazyLoading()};n.prototype.lazyLoadDuringScroll=function(e,i,t,o){var r,n,a=false;if(this._bSuppressed){return}if(e){if(this._sLazyLoadingTimer){clearTimeout(this._sLazyLoadingTimer)}this._sLazyLoadingTimer=null;this.doLazyLoading();return}this._iScrollProgress=i-this._iPreviousScrollTop;r=Math.round(Math.abs(this._iScrollProgress)/o*100);if(r>=this.LAZY_LOADING_FAST_SCROLLING_THRESHOLD){a=true}this._iPreviousScrollTop=i;this._iPreviousScrollTimestamp=t||0;n=i===0?0:this.LAZY_LOADING_DELAY;if(a&&this._sLazyLoadingTimer){s.debug("ObjectPageLayout :: lazyLoading","delayed by "+n+" ms because of fast scroll");clearTimeout(this._sLazyLoadingTimer);this._sLazyLoadingTimer=null}if(!this._sLazyLoadingTimer){this._sLazyLoadingTimer=setTimeout(this.doLazyLoading.bind(this),n)}};n.prototype.doLazyLoading=function(){var e=this._oObjectPageLayout._getHeightRelatedParameters(),i=this._oObjectPageLayout.getUseIconTabBar(),t=sap.ui.getCore().byId(this._oObjectPageLayout.getSelectedSection()),o=this._oObjectPageLayout._oSectionInfo,r,n,a,u=this._iPreviousScrollTop>=e.iHeaderContentHeight,c={},_={},h,l,L;if(this._bSuppressed){return}a=e.iScreenHeight-(u?e.iAnchorBarHeight:0)-(u?e.iHeaderTitleHeightStickied:0);r=e.iScrollTop;h=Date.now()-this._iPreviousScrollTimestamp;l=h<this.LAZY_LOADING_DELAY/2&&Math.abs(this._iScrollProgress)>5;if(l){if(this._iScrollProgress>=0){L=Math.round(Math.min(this._iScrollProgress*20,a/2))}else{L=-1*Math.round(Math.min(Math.abs(this._iScrollProgress)*20,a/2))}r+=L;s.debug("ObjectPageLayout :: lazyLoading","Visible page shifted from : "+L)}n=r+a;r+=16;jQuery.each(o,jQuery.proxy(function(e,o){if(!o.isSection&&o.sectionReference.getParent()&&o.sectionReference.getParent().getVisible()){if(i&&t&&t.indexOfSubSection(o.sectionReference)<0){return}if(o.positionTop<=n&&r<o.positionBottom-1){_[e]=e;if(!o.loaded){c[e]=e}}}},this));jQuery.each(c,jQuery.proxy(function(e,i){s.debug("ObjectPageLayout :: lazyLoading","connecting "+i);sap.ui.getCore().byId(i).connectToModels();o[i].loaded=true},this));jQuery.each(_,jQuery.proxy(function(e,i){if(!this._oPrevSubSectionsInView[e]){s.debug("ObjectPageLayout :: lazyLoading","subSectionEnteredViewPort "+i);this._oObjectPageLayout.fireEvent("subSectionEnteredViewPort",{subSection:sap.ui.getCore().byId(i)})}},this));this._oPrevSubSectionsInView=_;if(l){this._sLazyLoadingTimer=setTimeout(this.doLazyLoading.bind(this),this.LAZY_LOADING_DELAY)}else{this._sLazyLoadingTimer=null}};n.prototype.getSubsectionsToPreload=function(e,i){var o,s;if(i){o=this.NUMBER_OF_SUBSECTIONS_TO_PRELOAD.ScrollToSection;s=false}else{o=this.NUMBER_OF_SUBSECTIONS_TO_PRELOAD.FirstRendering;s=true}var r=[];e.some(function(e){if(!s&&i){s=e.getId()==i}if(s&&e instanceof t){if(e.getVisible()&&e._getInternalVisible()){r.push(e);o--}}return o<=0});return r};n.prototype.destroy=function(){if(this._sLazyLoadingTimer){clearTimeout(this._sLazyLoadingTimer)}};n.prototype._isPhone=function(){return o.Utilities.isPhoneScenario(this._oObjectPageLayout._getCurrentMediaContainerRange())};n.prototype._isTablet=function(){return e.system.tablet};n.prototype._isTabletSize=function(){return o.Utilities.isTabletScenario(this._oObjectPageLayout._getCurrentMediaContainerRange())};return n});
//# sourceMappingURL=LazyLoading.js.map