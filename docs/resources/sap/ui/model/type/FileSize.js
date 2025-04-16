/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/each","sap/ui/core/format/FileSizeFormat","sap/ui/model/FormatException","sap/ui/model/ParseException","sap/ui/model/SimpleType","sap/ui/model/ValidateException"],function(t,e,i,o,r,n){"use strict";var a=r.extend("sap.ui.model.type.FileSize",{constructor:function(){r.apply(this,arguments);this.sName="FileSize"}});a.prototype.formatValue=function(t,e){var o;if(t==undefined||t==null){return null}if(this.oInputFormat&&typeof t==="string"){o=this.oInputFormat.parse(t);if(isNaN(o)){throw new i("Cannot format file size: "+t+" has the wrong format")}}else if(!this.oInputFormat&&typeof t==="string"){throw new i("Cannot format file size: "+t+" of type string without input/source formatter")}else if(typeof t==="number"){o=t}else{throw new i("Cannot format file size: "+t+" has wrong type: "+typeof t)}if(o==undefined||o==null){return null}switch(this.getPrimitiveType(e)){case"string":return this.oOutputFormat.format(o);case"int":return Math.floor(o);case"float":case"any":return o;default:throw new i("Don't know how to format FileSize to "+e)}};a.prototype.parseValue=function(t,e){var i,r;if(t==undefined||t==null){return null}switch(this.getPrimitiveType(e)){case"string":i=this.oOutputFormat.parse(t);if(isNaN(i)){r=sap.ui.getCore().getLibraryResourceBundle();throw new o(r.getText("FileSize.Invalid"))}break;case"int":case"float":i=t;break;default:throw new o("Don't know how to parse FileSize from "+e)}if(this.oInputFormat){i=this.oInputFormat.format(i)}return i};a.prototype.validateValue=function(e){if(this.oConstraints){var i=sap.ui.getCore().getLibraryResourceBundle(),o=[],r=[],a=this.oInputFormat;if(a&&typeof e==="string"){e=a.parse(e)}else if(!a&&typeof e==="string"){throw new Error("No Validation possible: '"+e+"' is of type string but not input/source format specified.")}t(this.oConstraints,function(t,n){if(a&&typeof n==="string"){n=a.parse(n)}else if(!a&&typeof n==="string"){throw new Error("No Validation possible: Compare value ("+t+") '"+n+"' is of type string but not input/source format specified.")}switch(t){case"minimum":if(e<n){o.push("minimum");r.push(i.getText("FileSize.Minimum",[n]))}break;case"maximum":if(e>n){o.push("maximum");r.push(i.getText("FileSize.Maximum",[n]))}break;default:break}});if(o.length>0){throw new n(this.combineMessages(r),o)}}};a.prototype.setFormatOptions=function(t){this.oFormatOptions=t;this._handleLocalizationChange()};a.prototype._handleLocalizationChange=function(){this.oOutputFormat=e.getInstance(this.oFormatOptions);if(this.oFormatOptions.source){this.oInputFormat=e.getInstance(this.oFormatOptions.source)}};return a});
//# sourceMappingURL=FileSize.js.map