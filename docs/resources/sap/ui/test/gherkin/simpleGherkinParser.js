/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery"],function(jQuery){"use strict";var a={parse:function(a){if(typeof a!=="string"&&!(a instanceof String)){throw new Error("simpleGherkinParser.parse: parameter 'sText' must be a valid string")}var r=a.split("\n").map(function(a){return a.replace(/^\s*#.*/,"").trim()});var e=null,t=null,n=null,i=[],s=[],u=[];for(var c=0;c<r.length;++c){var o=r[c];var p=!!o.match(/^(?:@[^ @]+)(?:\s+@[^ @]+)*$/);if(p){i=o.split(/\s+/);continue}var l=o.match(/^Feature:(.+)$/);if(l){s=i;e={tags:s,name:l[1].trim(),scenarios:[]};i=[];continue}var m=!!o.match(/^Background:/);if(m){t=e.background={name:"<background>",steps:[]};continue}var f=o.match(/^Scenario Outline:(.+)/);var h=o.match(/^Scenario:(.+)/)||f;if(h){u=s.concat(i);t={tags:u,name:h[1].trim(),steps:[]};if(f){t.examples=[]}e.scenarios.push(t);i=[];continue}var d=o.match(/^(Given|When|Then|And|But|\*)\s+(.+)$/);if(d){n={text:d[2].trim(),keyword:d[1].trim()};t.steps.push(n);continue}var g=o.match(/^Examples:(.+)?/);if(g){t.examples.push({tags:u.concat(i),name:g[1]?g[1].trim():"",data:[]});i=[];continue}var v=o.match(/^\|(.*)\|$/);if(v){var y=v[1].split("|").map(function(a){return a.trim()});if(y.length===1){y=y[0]}if(t.examples){t.examples[t.examples.length-1].data.push(y);continue}n.data=n.data||[];n.data.push(y)}}e.scenarios.forEach(function(a){a.steps.forEach(function(a){if(Array.isArray(a.data)&&a.data.length===1&&Array.isArray(a.data[0])){a.data=a.data[0]}})});return e},parseFile:function(a){if(typeof a!=="string"&&!(a instanceof String)){throw new Error("simpleGherkinParser.parseFile: parameter 'sPath' must be a valid string")}a=sap.ui.require.toUrl(a.replace(/\./g,"/"))+".feature";var r;jQuery.ajax({url:a,dataType:"text",async:false,success:function(a){r=a}});if(r===undefined){throw new Error("simpleGherkinParser.parseFile: error loading URL: "+a)}return this.parse(r)}};return a},true);
//# sourceMappingURL=simpleGherkinParser.js.map