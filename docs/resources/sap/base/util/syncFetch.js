/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./fetch","sap/ui/base/SyncPromise"],function(e,n){"use strict";function r(){this.text=s;this.json=t}function s(){return n.resolve(this.xhr.responseText).unwrap()}function t(){if(this.xhr.responseType==="json"){return n.resolve(this.xhr.response).unwrap()}else{try{return n.resolve(JSON.parse(this.xhr.responseText)).unwrap()}catch(e){return n.reject(e).unwrap()}}}function i(s,t){return e(s,t,{promiseImpl:n,responseMixin:r}).unwrap()}i.ContentTypes=e.ContentTypes;return i});