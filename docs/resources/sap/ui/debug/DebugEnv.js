/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define("sap/ui/debug/DebugEnv",["sap/base/config","sap/base/i18n/Localization","sap/ui/base/Interface","./ControlTree","./LogViewer","./PropertyList","sap/base/Log","sap/ui/thirdparty/jquery","sap/ui/core/Supportability","sap/ui/core/Rendering"],function(e,t,o,i,s,r,n,jQuery,d,a){"use strict";var l=function(){};l.prototype.startPlugin=function(t,o){this.oCore=t;this.oWindow=window;try{this.bRunsEmbedded=typeof window.top.testfwk==="undefined";n.info("Starting DebugEnv plugin ("+(this.bRunsEmbedded?"embedded":"testsuite")+")");if(!this.bRunsEmbedded||d.isControlInspectorEnabled()){this.init(o)}if(!this.bRunsEmbedded||e.get({name:"sapUiTrace",type:e.Type.Boolean})){this.initLogger(n,o)}}catch(e){n.warning("DebugEnv plugin can not be started outside the Testsuite.")}};l.prototype.stopPlugin=function(){n.info("Stopping DebugEnv plugin.");this.oCore=null};l.prototype.init=function(e){this.oControlTreeWindow=this.bRunsEmbedded?this.oWindow:top.document.getElementById("sap-ui-ControlTreeWindow")||top.frames["sap-ui-ControlTreeWindow"]||top;this.oPropertyListWindow=this.bRunsEmbedded?this.oWindow:top.document.getElementById("sap-ui-PropertyListWindow")||top.frames["sap-ui-PropertyListWindow"]||top;var o=t.getRTL();var s=(this.oControlTreeWindow.document||this.oControlTreeWindow).querySelector("#sap-ui-ControlTreeRoot"),n=(this.oPropertyListWindow.document||this.oPropertyListWindow).querySelector("#sap-ui-PropertyWindowRoot");if(!s){s=this.oControlTreeWindow.document.createElement("DIV");s.setAttribute("id","sap-ui-ControlTreeRoot");s.setAttribute("tabindex",-1);s.style.position="absolute";s.style.fontFamily="Arial";s.style.fontSize="8pt";s.style.backgroundColor="white";s.style.color="black";s.style.border="1px solid gray";s.style.overflow="auto";s.style.zIndex="999999";s.style.top="1px";if(o){s.style.left="1px"}else{s.style.right="1px"}s.style.height="49%";s.style.width="200px";this.oControlTreeWindow.document.body.appendChild(s)}else{s.innerHTML=""}this.oControlTreeRoot=s;if(!n){n=this.oPropertyListWindow.document.createElement("DIV");n.setAttribute("id","sap-ui-PropertyWindowRoot");n.setAttribute("tabindex",-1);n.style.position="absolute";n.style.fontFamily="Arial";n.style.fontSize="8pt";n.style.backgroundColor="white";n.style.color="black";n.style.border="1px solid gray";n.style.overflow="auto";n.style.zIndex="99999";n.style.width="196px";n.style.height="49%";if(o){n.style.left="1px"}else{n.style.right="1px"}n.style.bottom="1px";this.oPropertyListWindow.document.body.appendChild(n)}else{n.innerHTML=""}this.oPropertyWindowRoot=n;this.oControlTree=new i(this.oCore,this.oWindow,s,this.bRunsEmbedded);this.oPropertyList=new r(this.oCore,this.oWindow,n);this.oControlTree.attachEvent(i.M_EVENTS.SELECT,this.oPropertyList.update,this.oPropertyList);if(!e){this.oControlTree.renderDelayed()}window.addEventListener("unload",()=>{})};l.prototype.initLogger=function(e,t){this.oLogger=e;this.oLogger.setLogEntriesLimit(Infinity);if(!this.bRunsEmbedded){this.oTraceWindow=top.document.getElementById("sap-ui-TraceWindow");if(this.oTraceWindow){this.oTraceViewer=top.oLogViewer=new s(this.oTraceWindow,"sap-ui-TraceWindowRoot")}else{this.oTraceWindow=top.frames["sap-ui-TraceWindow"];this.oTraceViewer=this.oTraceWindow.oLogViewer=new s(this.oTraceWindow,"sap-ui-TraceWindowRoot")}this.oTraceViewer.sLogEntryClassPrefix="lvl";this.oTraceViewer.lock()}else{this.oTraceWindow=this.oWindow;this.oTraceViewer=new s(this.oTraceWindow,"sap-ui-TraceWindowRoot")}this.oLogger.addLogListener(this.oTraceViewer);a.attachUIUpdated(this.enableLogViewer,this);if(!t){var o=this;this.oTimer=setTimeout(function(){o.enableLogViewer()},0)}};l.prototype.enableLogViewer=function(){if(this.oTimer){clearTimeout(this.oTimer);this.oTimer=undefined}a.detachUIUpdated(this.enableLogViewer,this);if(this.oTraceViewer){this.oTraceViewer.unlock()}};l.prototype.isRunningEmbedded=function(){return this.bRunsEmbedded};l.prototype.isControlTreeShown=function(){return jQuery(this.oControlTreeRoot).css("visibility")==="visible"||jQuery(this.oControlTreeRoot).css("visibility")==="inherit"};l.prototype.showControlTree=function(){if(!this.oControlTreeRoot){this.init(false)}jQuery(this.oControlTreeRoot).css("visibility","visible")};l.prototype.hideControlTree=function(){jQuery(this.oControlTreeRoot).css("visibility","hidden")};l.prototype.isTraceWindowShown=function(){var e=this.oTraceWindow&&this.oTraceWindow.document.getElementById("sap-ui-TraceWindowRoot");return e&&(jQuery(e).css("visibility")==="visible"||jQuery(e).css("visibility")==="inherit")};l.prototype.showTraceWindow=function(){if(!this.oTraceWindow){this.initLogger(n,false)}var e=this.oTraceWindow&&this.oTraceWindow.document.getElementById("sap-ui-TraceWindowRoot");if(e){jQuery(e).css("visibility","visible")}};l.prototype.hideTraceWindow=function(){var e=this.oTraceWindow&&this.oTraceWindow.document.getElementById("sap-ui-TraceWindowRoot");if(e){jQuery(e).css("visibility","hidden")}};l.prototype.isPropertyListShown=function(){return jQuery(this.oPropertyWindowRoot).css("visibility")==="visible"||jQuery(this.oPropertyWindowRoot).css("visibility")==="inherit"};l.prototype.showPropertyList=function(){if(!this.oPropertyWindowRoot){this.init(false)}jQuery(this.oPropertyWindowRoot).css("visibility","visible")};l.prototype.hidePropertyList=function(){jQuery(this.oPropertyWindowRoot).css("visibility","hidden")};(function(){var e=new l;sap.ui.getCore().registerPlugin(e);var t=new o(e,["isRunningEmbedded","isControlTreeShown","showControlTree","hideControlTree","isTraceWindowShown","showTraceWindow","hideTraceWindow","isPropertyListShown","showPropertyList","hidePropertyList"]);l.getInstance=function(){return t}})();return l},true);
//# sourceMappingURL=DebugEnv.js.map