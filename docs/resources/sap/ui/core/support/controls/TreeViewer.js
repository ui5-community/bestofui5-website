/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/base/ManagedObject","sap/base/security/encodeXML"],function(jQuery,e,t){"use strict";var a=e.extend("sap.ui.core.support.controls.TreeViewer",{metadata:{library:"sap.ui.core"},constructor:function(){e.apply(this,arguments);this._oRenderParent=null;this._oRootObject=null}});var i={nodestart:'<div tabindex="0" idx="{idx}" class="node start {cssclass}" haschildnodes="{haschildnodes}" visible="{visible}" collapsed="{collapsed}" level="{level}" raise="_selectNode" args="{idx}"><span class="expand" raise="_toggleNode" args="{idx}"></span>&lt;<span class="nstag" reason="tagName"><span class="ns" reason="namespace">{namespaceURI}</span><span class="tag"  reason="localName">{localName}</span></span>',nodestartend:"&gt;</div>",nodenochildend:'&gt;&lt;/<span class="nstagend"><span class="nstag"><span class="ns">{namespaceURI}</span><span class="tag">{localName}</span></span></span>&gt;</div><div class="node end sapUiSupportViewInfoElementHidden" visible="{visible}" haschildnodes="{haschildnodes}" collapsed="{collapsed}" level="{level}">&lt;/<span class="nstag"><span class="ns">{namespaceURI}</span><span class="tag">{localName}</span></span>&gt;</div>',nodeend:'<div class="node end {cssclass}" visible="{visible}" haschildnodes="{haschildnodes}" collapsed="{collapsed}" level="{level}">&lt;/<span class="nstag"><span class="ns">{namespaceURI}</span><span class="tag">{localName}</span></span>&gt;</div>',attribute:'&nbsp;<span class="attr" modified="{modified}" oldValue="{oldValue}" title="{oldValue}" reason="attributeName"><span class="attrname">{attributeName}</span>=&quot;<span class="attrvalue" reason="attributeValue">{attributeValue}</span>&quot;</span>',idattribute:'&nbsp;<span class="attr" modified="{modified}" oldValue="{oldValue}" title="originalValue: {oldValue}" reason="attributeName"><span class="attrname">{attributeName}</span>=&quot;<span class="attrvalue attrvalue1" reason="attributeValue">{attributeValue1}</span><span class="attrvalue attrvalue2" reason="attributeValue">{attributeValue2}</span>&quot;</span>',nodeinfo:'<span class="info {color}" selected="{selected}"title="{tooltip}" raise="_onInfoClick" args="{idx},{infoidx}"></span>'};var n=1;var s=-1;function r(e){var t=parseInt(e.getAttribute("level"));e=e.nextSibling;while(e){if(parseInt(e.getAttribute("level"))==t){return e}e=e.nextSibling}return null}function o(e){var t=e.childNodes;for(var a=0;a<t.length;a++){if(t[a].nodeType===1){return true}}return false}function l(e,a){var n=e._modified||[];var s=e._oldValues;var r=e.attributes;var o=n.concat([])||[];for(var l=0;l<r.length;l++){var d=o.indexOf(r[l].name);if(d===-1){o.push(r[l])}else{o[d]=r[l]}}for(var l=0;l<o.length;l++){var c=o[l];var u=a.fnAttributeInfos(e,c);if(u){if(u.visible===false){continue}}if(c.name==="__id"){continue}if(c.name==="__inactive"){continue}if(c.namespaceURI==="http://schemas.sap.com/sapui5/extension/sap.ui.core.support.Support.info/1"){continue}if(c.name.indexOf("__changed")>-1){continue}if(c.name==="xmlns:support"){continue}var p=false,f="";if(n.indexOf(c.name)>-1){p=true;f="originalValue: "+s[n.indexOf(c.name)]}if(c.name==="id"){if(!a.bIgnoreIds){a.addWithParam(i.idattribute,{attributeName:c.name,attributeValue1:t(String(c.value||"")),attributeValue2:e.getAttribute("__id"),modified:p,oldValue:t(f)})}}else{a.addWithParam(i.attribute,{attributeName:c.name,attributeValue:t(String(c.value||"")),modified:p,oldValue:t(f)})}}}function d(e,t){var a=e.childNodes;for(var i=0;i<a.length;i++){if(a[i].nodeType===1){if(e.getAttribute("__inactive")==="true"){a[i].setAttribute("__inactive","true")}n++;c(a[i],t);n--}}}function c(e,a){s++;var r=o(e);var c="";if(e.getAttribute("__inactive")==="true"){c="inactive"}else if(e.getAttribute("__replace")==="true"){c="replace"}a.addWithParam(i.nodestart,{idx:s,haschildnodes:r,visible:n<a.initialExpandedLevel,cssclass:c,level:n,collapsed:n>=a.initialExpandedLevel-1,localName:e.localName,namespaceURI:e.namespaceURI?t(String(e.namespaceURI))+":":""});var u=a.fnNodeInfos(e);if(u){for(var p=0;p<u.length;p++){var f=u[p];a.addWithParam(i.nodeinfo,{idx:s+"",infoidx:p+"",selected:f.selected||false,color:t(f.color)||"orange",tooltip:t(f.tooltip)||""})}}l(e,a);if(r){a.addWithParam(i.nodestartend,{});d(e,a);a.addWithParam(i.nodeend,{idx:s,haschildnodes:r,visible:n<a.initialExpandedLevel,level:n,cssclass:c,collapsed:n>=a.initialExpandedLevel-1,localName:e.localName,namespaceURI:e.namespaceURI?t(String(e.namespaceURI))+":":""})}else{a.addWithParam(i.nodenochildend,{idx:s,haschildnodes:r,visible:n<a.initialExpandedLevel,level:n,collapsed:n>=a.initialExpandedLevel-1,localName:e.localName,namespaceURI:e.namespaceURI?t(String(e.namespaceURI))+":":""})}}function u(){this._aBuffer=[];var e=this;this.add=function(){e._aBuffer.push.apply(e._aBuffer,arguments)};this.addWithParam=function(t,a){for(var i in a){var n=new RegExp("{"+i+"}","g");t=t.replace(n,a[i])}e.add(t)};this.toString=function(){return e._aBuffer.join("")}}a.prototype.initialExpandedLevel=4;a.prototype.fnSelectionChange=function(){};a.prototype.fnInfoPress=function(){};a.prototype.ignoreIds=function(){this.bIgnoreIds=true};a.prototype.setRootObject=function(e){if(e.nodeType&&e.nodeType===9){e=e.firstChild}this._oRootObject=e};a.prototype.attachSelectionChange=function(e){this.fnSelectionChange=e};a.prototype.attachInfoPress=function(e){this.fnInfoPress=e};a.prototype.attachNodeInfos=function(e){this.fnNodeInfos=e};a.prototype.attachAttributeInfos=function(e){this.fnAttributeInfos=e};a.prototype._getDataObjectByIndex=function(e){if(e===0){return this._oRootObject}else{e--;var t=this._oRootObject.querySelectorAll("*");return t[e]}};a.prototype._getIndexOfNode=function(e){if(e===this._oRootObject){return 0}else{var t=this._oRootObject.querySelectorAll("*");for(var a=0;a<t.length;a++){if(t[a]===e){return a+1}}}return-1};a.prototype._getStartNodeByIndex=function(e){return this._oRenderParent.firstChild.querySelector("[idx='"+e+"']")};a.prototype.toggleIds=function(){var e=this._oRenderParent.firstChild.className;if(e.indexOf(" id1")>-1){this._oRenderParent.firstChild.className=e.replace(" id1"," id2");return true}else{this._oRenderParent.firstChild.className=e.replace(" id2"," id1");return false}};a.prototype.toggleNS=function(){var e=this._oRenderParent.firstChild.className;if(e.indexOf(" hideNS")>-1){this._oRenderParent.firstChild.className=e.replace(" hideNS","");return true}else{this._oRenderParent.firstChild.className=e+" hideNS";return false}};a.prototype.toggleInactive=function(){var e=this._oRenderParent.firstChild.className;if(e.indexOf(" hideInactive")>-1){this._oRenderParent.firstChild.className=e.replace(" hideInactive","");return true}else{this._oRenderParent.firstChild.className=e+" hideInactive";return false}};a.prototype._iSelectedIndex=-1;a.prototype._selectNode=function(e,t){e=parseInt(e);var a=this._getStartNodeByIndex(e);if(this._oSelectedNode===a){return}if(this._oSelectedNode){this._oSelectedNode.className=this._oSelectedNode.className.replace(" select","")}this._iSelectedIndex=e;this._oSelectedNode=a;this._oSelectedNode.className+=" select";this.fnSelectionChange(this._getDataObjectByIndex(e),t);return true};a.prototype._onInfoClick=function(e,t){e=parseInt(e);this._selectNode(e,["template"]);this.fnInfoPress(this._getDataObjectByIndex(e),parseInt(t));return true};a.prototype.expandNode=function(e){var t=this._getIndexOfNode(e);this.expandNodesToIndex(t)};a.prototype.expandNodesToIndex=function(e){var t=this._oRenderParent.firstChild.querySelector("div[idx='"+e+"']");if(!t||t.getAttribute("visible")==="true"){return}var a=parseInt(t.getAttribute("level"));t=t.previousSibling;while(t){var i=parseInt(t.getAttribute("level"));if(i<a&&t.getAttribute("collapsed")==="true"){this._toggleNode(parseInt(t.getAttribute("idx")))}t=t.previousSibling}};a.prototype.expandNodesWithSelectedInfo=function(e){var t=this._oRenderParent.firstChild.querySelectorAll("div[idx]");for(var a=0;a<t.length;a++){var i=t[a].querySelector("[args='"+a+","+e+"'][selected='true']");if(i){this.expandNodesToIndex(a)}}return this._iSelectedIndex};a.prototype.getSelectedIndex=function(){return this._iSelectedIndex};a.prototype.setInfoSelected=function(e,t,a,i){var n=this._oRenderParent.firstChild.querySelector("[args='"+e+","+t+"']");if(n){n.setAttribute("selected",a+"");if(i){n.setAttribute("title",i)}}};a.prototype._toggleNode=function(e){e=parseInt(e);var t=this._getStartNodeByIndex(e);if(t){var a=parseInt(t.getAttribute("level"));var i=t.nextSibling;while(i){if(parseInt(i.getAttribute("level"))>a){if(t.getAttribute("collapsed")==="true"){if(i.getAttribute("collapsed")==="true"){i.setAttribute("visible","true");var n=r(i);if(n){i=n}}else{i.setAttribute("visible","true")}}else{i.setAttribute("visible","false")}}if(parseInt(i.getAttribute("level"))===a){if(t.getAttribute("collapsed")==="true"){i.setAttribute("visible","true")}else{i.setAttribute("visible","false")}break}i=i.nextSibling}if(t.getAttribute("collapsed")==="true"){t.setAttribute("collapsed","false")}else{t.setAttribute("collapsed","true")}}this._oSelectedNode&&this._oSelectedNode.focus();return true};a.prototype.highlightedDomNodes=[];a.prototype.clearHighlights=function(){for(var e=0;e<this.highlightedDomNodes.length;e++){this.highlightedDomNodes[e].className=this.highlightedDomNodes[e].className.replace(" highlight","")}this.highlightedDomNodes=[]};a.prototype.highlightNodeById=function(e){var t=this._oRootObject.querySelector("[id='"+e+"']");if(t){this.highlightNode(t)}};a.prototype.highlightNode=function(e){var t=this._getIndexOfNode(e);if(t>-1){var a=this._getStartNodeByIndex(t);a.className+=" highlight";this.highlightedDomNodes.push(a)}};a.prototype.update=function(e){if(!e&&!this._oRenderParent){return}if(this._oRenderParent&&e){this._oRenderParent.innerHTML=""}this._oRenderParent=e||this._oRenderParent;if(this._oRootObject){var t=new u;t.initialExpandedLevel=this.initialExpandedLevel;t.fnNodeInfos=this.fnNodeInfos||function(){};t.fnAttributeInfos=this.fnAttributeInfos||function(){};t.bIgnoreIds=this.bIgnoreIds;s=-1;t.add('<div class="treeviewer id2" id="'+this.getId()+'">');if(this._oRootObject&&this._oRootObject.nodeType&&this._oRootObject.nodeType===1){c(this._oRootObject,t)}t.add("</div>");this._oRenderParent.innerHTML=t.toString();jQuery(this._oRenderParent).find(".node.start, .node.end").each(function(e,t){t.style.paddingLeft=16*parseFloat(t.getAttribute("level"))+"px"});var a=this;this._oRenderParent.firstChild.addEventListener("click",function(e){var t=e.target,i=false,n=[];while(!i){if(t.getAttribute("raise")){if(t.getAttribute("args")){var s=t.getAttribute("args").split(",");s=s.concat(n);i=a[t.getAttribute("raise")].apply(a,s)}else{var s=[t];s=s.concat(n);i=a[t.getAttribute("raise")].apply(a,s)}}else if(t.getAttribute("reason")){n.push(t.getAttribute("reason"))}t=t.parentNode;if(t===a._oRenderParent){break}}});this._oRenderParent.firstChild.addEventListener("mouseover",function(e){var t=e.target;while(t&&t.getAttribute&&!t.getAttribute("collapsed")){t=t.parentNode;if(t.className==="nstagend"){return}if(t.getElementsByClassName("nstagend").length>0){t.getElementsByClassName("nstagend")[0].firstChild.style.border="1px dotted green";return}}if(!t||e.target.tagName==="DIV"){return}if(t.getAttribute&&t.getAttribute("collapsed")==="false"){t=r(t);if(t){var a=t.getElementsByClassName("nstag")[0];a.style.border="1px dotted green"}}});this._oRenderParent.firstChild.addEventListener("mouseout",function(e){var t=e.target;while(t&&t.getAttribute&&!t.getAttribute("collapsed")){t=t.parentNode;if(t.className==="nstagend"){return}if(t.getElementsByClassName("nstagend").length>0){t.getElementsByClassName("nstagend")[0].firstChild.style.border="";return}}if(!t||e.target.tagName==="DIV"){return}if(t.getAttribute&&t.getAttribute("collapsed")==="false"){t=r(t);if(t){var a=t.getElementsByClassName("nstag")[0];a.style.border=""}}})}};return a});
//# sourceMappingURL=TreeViewer.js.map