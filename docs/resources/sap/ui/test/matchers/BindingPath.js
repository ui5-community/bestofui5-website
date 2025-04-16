/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/isPlainObject","sap/ui/test/matchers/Matcher","sap/ui/model/StaticBinding"],function(e,t,n){"use strict";return t.extend("sap.ui.test.matchers.BindingPath",{metadata:{publicMethods:["isMatching"],properties:{path:{type:"any"},modelName:{type:"string"},propertyPath:{type:"any"},value:{type:"any"}}},isMatching:function(e){var t=this.getModelName()||undefined;var r=this.getPropertyPath();var o=this.getPath();var a=this.getValue();if(!o&&!r&&!a){this._oLogger.debug("Matcher requires context path, property path or value but none is defined! No controls will be matched");return false}var s=true;var g=true;var h=true;var d=e.mObjectBindingInfos&&e.mObjectBindingInfos[t];var u=e.getBindingContext(t);if(o){if(d){s=i(d.path,o);if(s){this._oLogger.debug("Control '"+e+"' has object binding with the expected context path '"+o+"' for model '"+t+"'")}else{this._oLogger.debug("Control '"+e+"' has object binding with context path '"+d.path+"' for model '"+t+"' but should have context path '"+o+"'")}}else{s=!!u&&i(u.getPath(),o);if(s){this._oLogger.debug("Control '"+e+"' has binding context with the expected path '"+o+"' for model '"+t+"'")}else if(u){this._oLogger.debug("Control '"+e+"' has binding context with path '"+u.getPath()+"' for model '"+t+"' but should have context path '"+o+"'")}else{this._oLogger.debug("Control '"+e+"' does not have a binding context for model '"+t+"' but should have a binding context with path '"+o+"'")}}}if(r){var l=[];var p=Object.keys(e.mBindingInfos).filter(function(n){var o=e.mBindingInfos[n];var a=o.parts?o.parts:[o];var s=a.filter(function(e){var n=i(e.path,r,!!u);var o=d||e.model===t;if(!n&&o){l.push(e.path)}return n&&o});return!!s.length});g=!!p.length;if(g){this._oLogger.debug("Control '"+e+"' has the expected binding property path '"+r+"' for model '"+t+"'")}else if(l.length){this._oLogger.debug("Control '"+e+"' has binding property paths ['"+l.join("', '")+"'] for model '"+t+"' but should have binding property path '"+r+"'")}else{this._oLogger.debug("Control '"+e+"' has no binding property paths for model '"+t+"' but should have binding property path '"+r+"'")}}if(a){var p=Object.keys(e.mBindingInfos).filter(function(t){var i=e.getBinding(t);var r=e.mBindingInfos[t];var o=r.parts?r.parts:[r];var s=o.filter(function(e,t){var r=i.getBindings?i.getBindings()[t]:i;return r instanceof n&&r.getValue()===a});return!!s.length});h=!!p.length;if(h){this._oLogger.debug("Control '"+e+"' has the expected static binding value '"+a+"'")}}return s&&g}});function i(t,n,i){if(e(n)&&n.regex&&n.regex.source){n=new RegExp(n.regex.source,n.regex.flags)}if(n instanceof RegExp){var r;var o=n.source.match(/\^?\//);if(i&&o){r=new RegExp(n.source.substr(o.index+1),n.flags)}else if(!i&&!o){r=new RegExp("/"+n.source,n.flags)}else{r=n}return r.test(t)}else if(t){var a=t.charAt(0)==="/";if(i&&a){n=n.substr(1)}else if(!i&&!a){n="/"+n}return t===n}else{return false}}});
//# sourceMappingURL=BindingPath.js.map