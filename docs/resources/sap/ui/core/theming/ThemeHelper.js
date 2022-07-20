/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(e){"use strict";var t={};var a={};a.reset=function(){t={}};a.getMetadata=function(a){if(!a){return null}var r=a.replace("sap-ui-theme-","").replace(/\./g,"-");if(t[r]){return t[r]}var n=document.createElement("span");n.classList.add("sapThemeMetaData-UI5-"+r);document.documentElement.appendChild(n);var c=window.getComputedStyle(n).getPropertyValue("background-image");document.documentElement.removeChild(n);var u=/\(["']?data:text\/plain;utf-8,(.*?)['"]?\)/i.exec(c);if(!u||u.length<2){return null}var l=u[1];if(l.charAt(0)!=="{"&&l.charAt(l.length-1)!=="}"){try{l=decodeURI(l)}catch(e){}}l=l.replace(/\\"/g,'"');var d=l.replace(/%20/g," ");var i;try{i=JSON.parse(d);t[r]=i}catch(t){e.error("Could not parse theme metadata for library "+r+".")}return i};return a});