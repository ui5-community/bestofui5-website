/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/support/Plugin","sap/base/security/encodeXML","sap/base/util/each","sap/ui/events/KeyCodes","sap/ui/thirdparty/jquery","sap/ui/dom/jquery/cursorPos","sap/ui/dom/jquery/selectText"],function(e,t,s,o,jQuery){"use strict";var a=e.extend("sap.ui.core.support.plugins.Debugging",{constructor:function(t){e.apply(this,["sapUiSupportDebugging","Debugging",t]);this._aEventIds=[this.getId()+"ReceiveClasses",this.getId()+"ReceiveClassMethods",this.getId()+"SaveUrlIfNew",this.getId()+"AppendUserUrls"];this._breakpointId="sapUiSupportBreakpoint";this._localStorageId="sapUiSupportLocalStorage";this._techInfoId="sapUiSupportTechInfo";this._aClasses=[];this._mAddedClasses={};this._sSelectedClass="";this._mRebootUrls={}}});a.prototype.isToolPlugin=function(){return true};a.prototype.isAppPlugin=function(){return false};a.prototype.init=function(t){e.prototype.init.apply(this,arguments);this.renderContainer();this._populateRebootUrls();this._oStub.sendEvent(this._breakpointId+"RequestClasses",{callback:this.getId()+"ReceiveClasses"})};a.prototype.exit=function(t){e.prototype.exit.apply(this,arguments)};a.prototype.renderContainer=function(){var e=sap.ui.getCore().createRenderManager();e.openStart("div",this.getId()+"-RebootContainer").class("sapUiSupportContainer").openEnd();e.openStart("div").class("sapUISupportLabel").class("sapUISupportLabelBold").openEnd().text("Note: Designed to work with apps loaded with the standard UI5 loading bootstrap script tag:").close("div");e.openStart("div").class("sapUISupportLabel").class("sapUISupportLabelBold").openEnd().text("<"+'script id="sap-ui-bootstrap" src="somepath/resources/sap-ui-core.js" ...');e.voidStart("br").voidEnd();e.voidStart("br").voidEnd();e.close("div");e.openStart("div").class("sapUISupportLabel").openEnd().text("Boot application with different UI5 version on next reload:").close("div");e.openStart("select",this.getId()+"-RebootSelect").class("sapUiSupportSelect").openEnd();e.openStart("option").attr("value","none").openEnd().text("Disabled (no custom reboot URL)").close("option");e.openStart("option",this.getId()+"-RebootOther").attr("value","other").openEnd().text("Other (enter URL to sap-ui-core.js below)...:").close("option");e.close("select");e.voidStart("input",this.getId()+"-RebootInput").attr("type","text").attr("disabled","disabled").voidEnd();e.openStart("button",this.getId()+"-Reboot").class("sapUiSupportRoundedButton").openEnd().text("Activate Reboot URL").close("button");e.close("div");e.openStart("div",this.getId()+"-ClassContainer").class("sapUiSupportContainer").openEnd().close("div");e.openStart("div",this.getId()+"-MethodContainer").class("sapUiSupportContainer").openEnd().close("div");e.flush(this.dom());e.destroy();this.dom("Reboot").addEventListener("click",this._onUseOtherUI5Version.bind(this));this.dom("RebootSelect").addEventListener("change",this._onUI5VersionDropdownChanged.bind(this))};a.prototype.renderClasses=function(){var e=this;var t=this._aClasses;var o=sap.ui.getCore().createRenderManager();o.openStart("div").class("sapUISupportLabel").openEnd().text("Select Class:").close("div");o.openStart("select",this.getId()+"-ClassSelect").class("sapUiSupportAutocomplete").class("sapUiSupportSelect").openEnd();o.openStart("option").openEnd().close("option");s(t,function(t,s){if(typeof e._mAddedClasses[s]==="undefined"){o.openStart("option").openEnd();o.text(s);o.close("option")}});o.close("select");o.voidStart("input",this.getId()+"-ClassInput").class("sapUiSupportAutocomplete").attr("type","text").voidEnd();o.openStart("button",this.getId()+"-AddClass").class("sapUiSupportRoundedButton").openEnd().text("Add class").close("button");o.voidStart("hr").class("no-border").voidEnd();o.openStart("ul",this.getId()+"-ClassList").class("sapUiSupportList").openEnd();s(t,function(t,s){if(typeof e._mAddedClasses[s]==="undefined"){return}var a=e._mAddedClasses[s].bpCount;var n="";if(a){n=a.active+" / "+a.all}o.openStart("li").attr("data-class-name",s);if(e._sSelectedClass===s){o.class("selected")}o.openEnd();o.openStart("div").openEnd().openStart("span").class("className").openEnd().text(s).close("span").openStart("span").class("breakpoints").openEnd().text(n).close("span").close("div").voidStart("img").class("remove-class").attr("src","../../debug/images/delete.gif").attr("alt","X").voidEnd();o.close("li")});o.close("ul");o.flush(this.dom("ClassContainer"));o.destroy();this.dom("ClassInput").addEventListener("keyup",this._autoComplete.bind(this));this.dom("ClassInput").addEventListener("blur",this._updateSelectOptions.bind(this));this.dom("ClassSelect").addEventListener("change",this._selectOptionsChanged.bind(this));this.dom("AddClass").addEventListener("click",this._onAddClassClicked.bind(this));this.dom("ClassList").addEventListener("click",this._onSelectOrRemoveClass.bind(this))};a.prototype.renderMethods=function(e){var t=sap.ui.getCore().createRenderManager();if(typeof e==="undefined"){t.openStart("p").openEnd().text("Select a class in the list on the left side to add breakpoint.").close("p");t.flush(this.dom("MethodContainer"));t.destroy();return}t.openStart("div").class("sapUISupportLabel").openEnd().text("Select Method").close("div");t.openStart("select",this.getId()+"-MethodSelect").class("sapUiSupportAutocomplete").class("sapUiSupportSelect").openEnd().openStart("option").openEnd().close("option");s(e,function(e,s){if(!s.active){t.openStart("option").attr("data-method-type",s.type).openEnd();t.text(s.name);t.close("option")}});t.close("select");t.voidStart("input",this.getId()+"-MethodInput").class("sapUiSupportAutocomplete").attr("type","text").voidEnd();t.openStart("button",this.getId()+"-AddBreakpoint").class("sapUiSupportRoundedButton").openEnd().text("Add breakpoint").close("button");t.voidStart("hr").class("no-border").voidEnd();t.openStart("ul",this.getId()+"-BreakpointList").class("sapUiSupportList").class("sapUiSupportBreakpointList").openEnd();s(e,function(e,s){if(!s.active){return}t.openStart("li").attr("data-method-name",s.name).attr("data-method-type",s.type).openEnd().openStart("span").openEnd().text(s.name).close("span").voidStart("img").class("remove-breakpoint").attr("src","../../debug/images/delete.gif").attr("alt","Remove").voidEnd().close("li")});t.close("ul");t.flush(this.dom("MethodContainer"));t.destroy();this.dom("MethodInput").addEventListener("keyup",this._autoComplete.bind(this));this.dom("MethodInput").addEventListener("blur",this._updateSelectOptions.bind(this));this.dom("MethodSelect").addEventListener("change",this._selectOptionsChanged.bind(this));this.dom("AddBreakpoint").addEventListener("click",this._onAddBreakpointClicked.bind(this));this.dom("BreakpointList").addEventListener("click",this._onRemoveBreakpoint.bind(this))};a.prototype.onsapUiSupportDebuggingReceiveClasses=function(e){this._aClasses=JSON.parse(e.getParameter("classes"));this.renderClasses();this.renderMethods();this.dom("ClassInput").focus()};a.prototype.onsapUiSupportDebuggingReceiveClassMethods=function(e){var t=JSON.parse(e.getParameter("methods"));this.renderMethods(t);var s=e.getParameter("className");var o=JSON.parse(e.getParameter("breakpointCount"));this._mAddedClasses[s]={bpCount:o};var a=this.dom('li[data-class-name="'+s+'"] span.breakpoints');a.textContent=o.active+" / "+o.all;this.dom("MethodInput").focus()};a.prototype._autoComplete=function(e){var t=e.target;if(e.keyCode==o.ENTER){this._updateSelectOptions(e);if(t.id===this.getId()+"-ClassInput"){this._onAddClassClicked()}else{this._onAddBreakpointClicked()}return}if(e.keyCode>=o.ARROW_LEFT&&e.keyCode<=o.ARROW_DOWN){return}var s=t.value,a=t.previousElementSibling;if(s==""){return}var n=Array.from(a.querySelectorAll("option")).map(function(e){return e.value});var i;for(var r=0;r<n.length;r++){i=n[r];if(i.toUpperCase().indexOf(s.toUpperCase())==0){var d=jQuery(t),p=d.cursorPos();if(e.keyCode==o.BACKSPACE){p--}t.value=i;d.selectText(p,i.length);break}}return};a.prototype._onAddClassClicked=function(){var e=this.dom("ClassInput").value;this._mAddedClasses[e]={};this.renderClasses();this.dom("ClassInput").focus()};a.prototype._onRemoveClass=function(e){var t=e.target.closest("li[data-class-name]");var s=t.dataset.className;delete this._mAddedClasses[s];var o=false;if(this._sSelectedClass===s){this._sSelectedClass="";o=true}this._oStub.sendEvent(this._breakpointId+"RemoveAllClassBreakpoints",{className:s});this.renderClasses();if(o){this.renderMethods()}this.dom("ClassInput").focus()};a.prototype._onAddBreakpointClicked=function(){this.changeBreakpoint(this.dom("ClassList").querySelector("li.selected").dataset.className,this.dom("MethodInput").value,this.dom("MethodSelect").querySelector("option:checked").dataset.methodType,true)};a.prototype._onRemoveBreakpoint=function(e){if(e.target.nodeName==="IMG"&&e.target.classList.contains("remove-breakpoint")){var t=e.target.closest("li");this.changeBreakpoint(this.dom("ClassList").querySelector("li.selected").dataset.className,t.dataset.methodName,t.dataset.methodType,false)}};a.prototype._updateSelectOptions=function(e){var t=e.srcElement||e.target;if(t.tagName=="INPUT"){var s=t.value;t=t.previousSibling;var o=t.options;for(var a=0;a<o.length;a++){var n=o[a].value||o[a].text;if(n.toUpperCase()==s.toUpperCase()){t.selectedIndex=a;break}}}var i=t.selectedIndex;var r=t.options[i].value||t.options[i].text;if(t.nextSibling&&t.nextSibling.tagName=="INPUT"){t.nextSibling.value=r}};a.prototype._selectOptionsChanged=function(e){var t=e.srcElement||e.target;var s=t.nextSibling;s.value=t.options[t.selectedIndex].value};a.prototype._onSelectOrRemoveClass=function(e){if(e.target.nodeName==="IMG"&&e.target.classList.contains("remove-class")){this._onRemoveClass(e)}else{this._onSelectClass(e)}};a.prototype._onSelectClass=function(e){var t=e.target.closest("li[data-class-name]");if(t==null||t.classList.contains("selected")){return}t.parentElement.querySelectorAll("li.selected").forEach(function(e){e.classList.remove("selected")});t.classList.add("selected");var s=this._sSelectedClass=t.dataset.className;this._oStub.sendEvent(this._breakpointId+"RequestClassMethods",{className:s,callback:this.getId()+"ReceiveClassMethods"})};a.prototype._isClassSelected=function(){var e=false;s(this._mClasses,function(t,s){if(s.selected===true){e=true}});return e};a.prototype.changeBreakpoint=function(e,t,s,o){this._oStub.sendEvent(this._breakpointId+"ChangeClassBreakpoint",{className:e,methodName:t,active:o,type:parseInt(s),callback:this.getId()+"ReceiveClassMethods"})};a.prototype._populateRebootUrls=function(){this._mRebootUrls={"https://sdk.openui5.org/resources/sap-ui-core.js":"Public OpenUI5 server","https://sdk.openui5.org/nightly/resources/sap-ui-core.js":"Public OpenUI5 PREVIEW server","https://ui5.sap.com/resources/sap-ui-core.js":"Public SAPUI5 server","http://localhost:8080/resources/sap-ui-core.js":"Localhost (port 8080)"};this._testAndAddUrls(this._mRebootUrls);var e=this;window.setTimeout(function(){e._oStub.sendEvent(e._localStorageId+"GetItem",{id:"sap-ui-reboot-URLs",callback:e.getId()+"AppendUserUrls"})},0)};a.prototype._testAndAddUrls=function(e){var s=this.dom("RebootOther");function o(o){return function(){var a="<option value='"+t(o)+"'>"+e[o]+"</option>";s.insertAdjacentHTML("beforebegin",a)}}for(var a in e){jQuery.ajax({type:"HEAD",url:a,success:o(a)})}};a.prototype.onsapUiSupportDebuggingAppendUserUrls=function(e){var s=e.getParameter("value"),o={},a=s.split(" ");for(var n=0;n<a.length;n++){var i=a[n];if(i&&!this._mRebootUrls[i]){o[i]=t(i)+" (user-defined URL)"}}this._testAndAddUrls(o)};a.prototype._onUI5VersionDropdownChanged=function(){var e=this.dom("RebootSelect").value,t=this.dom("RebootInput");if(e==="other"){t.disabled=false}else{t.disabled=true;if(e==="none"){t.value=""}else{t.value=e}}};a.prototype._onUseOtherUI5Version=function(){var e=this.dom("RebootSelect").value;if(e==="other"){e=this.dom("RebootInput").value}if(!e||e==="none"){this._oStub.sendEvent(this._techInfoId+"SetReboot",{rebootUrl:null});alert("Reboot URL cleared. App will start normally.")}else{if(!this._mRebootUrls[e]){this._oStub.sendEvent(this._localStorageId+"GetItem",{id:"sap-ui-reboot-URLs",passThroughData:e,callback:this.getId()+"SaveUrlIfNew"})}this.confirmReload(function(){this._oStub.sendEvent(this._techInfoId+"SetReboot",{rebootUrl:e});this._oStub.sendEvent(this._oStub.getMetadata().getClass().EventType.RELOAD)}.bind(this))}};a.prototype.onsapUiSupportDebuggingSaveUrlIfNew=function(e){var t=e.getParameter("value"),s=e.getParameter("passThroughData"),o=t.split(" ");if(o.indexOf(s)===-1){o.push(s.replace(/ /g,"%20"));this._oStub.sendEvent(this._localStorageId+"SetItem",{id:"sap-ui-reboot-URLs",value:o.join(" ")})}};return a});
//# sourceMappingURL=Debugging.js.map