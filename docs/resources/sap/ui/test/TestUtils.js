/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/base/util/merge","sap/ui/base/SyncPromise","sap/ui/core/Lib","sap/ui/core/Rendering","sap/ui/thirdparty/jquery"],function(e,t,r,n,s,jQuery){"use strict";var a=/\/\$batch($|\?)/,i=/(?:^|\r\n)Content-Id\s*:\s*(\S+)/i,o=/^(.*)?:\s*(.*)$/,u="application/json;charset=UTF-8;IEEE754Compatible=true",c={},f="\r\nContent-Type: application/http\r\n"+"Content-Transfer-Encoding: binary\r\n",p=/^Content-Type:\s*multipart\/mixed;\s*boundary=/i,l=new URLSearchParams(window.location.search),d=l.get("autoRespondAfter"),h=l.get("realOData"),y=/^(\S+) (\S+)$/,g=/^(GET|DELETE|MERGE|PATCH|POST) (\S+) HTTP\/1\.1$/,m={},E=/^(OData-Version|DataServiceVersion)$/,x=h==="true"||h==="direct",v=null,T;if(x){document.title=document.title+" (real OData)"}function b(e,t,r){var n=QUnit.objectType(e),s=QUnit.objectType(t),a;if(n==="string"&&s==="regexp"){if(!t.test(e)){throw new Error(r+": actual value "+e+" does not match expected regular expression "+t)}return}if(n!==s){throw new Error(r+": actual type "+n+" does not match expected type "+s)}if(n==="array"){if(e.length<t.length){throw new Error(r+": array length: "+e.length+" < "+t.length)}}if(n==="array"||n==="object"){for(a in t){b(e[a],t[a],r==="/"?r+a:r+"/"+a)}}else if(e!==t){throw new Error(r+": actual value "+e+" does not match expected value "+t)}}function R(e,t,r,n){try{b(e,t,"/");QUnit.assert.pushResult({result:n,actual:e,expected:t,message:r})}catch(s){QUnit.assert.pushResult({result:!n,actual:e,expected:t,message:(r||"")+" failed because of "+s.message})}}T={awaitRendering:function(){return new Promise(function(e){function t(){if(s.isPending()){setTimeout(t,1)}else{e()}}t()})},checkGetAndRequest:function(e,t,n,s,a,i){var o,u=s.replace("fetch","get"),c=e.mock(Promise),f=new Error("rejected"),p=Promise.reject(f),l=s.replace("fetch","request"),d={},h=r.resolve(p);o=e.mock(t).expects(s).exactly(4);o=o.withExactArgs.apply(o,a);o.returns(r.resolve(d));n.strictEqual(t[u].apply(t,a),d);o.returns(h);c.expects("resolve").withExactArgs(sinon.match.same(h)).returns(p);n.strictEqual(t[l].apply(t,a),p);c.restore();if(i){n.throws(function(){t[u].apply(t,a)},new Error("Result pending"))}else{n.strictEqual(t[u].apply(t,a),undefined,"pending")}return h.catch(function(){if(i){n.throws(function(){t[u].apply(t,a)},f)}else{n.strictEqual(t[u].apply(t,a),undefined,"rejected")}})},deepContains:function(e,t,r){R(e,t,r,true)},notDeepContains:function(e,t,r){R(e,t,r,false)},useFakeServer:function(r,n,s,l,h,y){var m,x;function T(e,t){var r=A(e,t.requestBody),n=k(t);if(v){v(t.requestBody)}t.respond(200,jQuery.extend({},n,{"Content-Type":"multipart/mixed;boundary="+r.boundary}),D(r,n))}function b(e){var t={buildResponse:e.buildResponse,code:e.code||200,headers:e.headers||{},ifMatch:e.ifMatch};if(e.source){t.message=j(n+e.source);t.headers["Content-Type"]=t.headers["Content-Type"]||q(e.source)}else if(typeof e.message==="object"){t.headers["Content-Type"]=u;t.message=JSON.stringify(e.message)}else{t.message=e.message}return t}function R(){var e,t,r={};for(t in s){e=s[t];if(!t.includes(" ")){t="GET "+t}if(Array.isArray(e)){r[t]=e.map(b)}else{r[t]=[b(e)]}}return r}function q(e){if(/\.xml$/.test(e)){return"application/xml"}if(/\.json$/.test(e)){return u}return"application/x-octet-stream"}function w(t,r,n){e.error(r.requestLine||r.method+" "+r.url,n,"sap.ui.test.TestUtils");return{code:t,headers:{"Content-Type":"text/plain"},message:n}}function O(e){return e.slice(0,e.indexOf("\r\n"))}function D(e,t){var r=[""];e.parts.every(function(e){r.push(e.boundary?"\r\nContent-Type: multipart/mixed;boundary="+e.boundary+"\r\n\r\n"+D(e,t):C(e,t));return!e.code||e.code<400||t.DataServiceVersion==="2.0"});r.push("--\r\n");return r.join("--"+e.boundary)}function C(e,t){var r=jQuery.extend({},t,e.headers);return f+(e.contentId?"Content-ID: "+e.contentId+"\r\n":"")+"\r\nHTTP/1.1 "+e.code+" \r\n"+Object.keys(r).map(function(e){return e+": "+r[e]}).join("\r\n")+"\r\n\r\n"+(e.message||"")+"\r\n"}function S(t,r){var n,s,a=t+" "+r;if(x[a]){return{responses:x[a]}}if(!m){return undefined}n=[];s=m.filter(function(e){var t=a.match(e.regExp);if(t){n.push(t)}return t});if(s.length>1){e.warning("Multiple matches found for "+a,undefined,"sap.ui.test.TestUtils");return undefined}return s.length?{responses:s[0].response,match:n[0]}:undefined}function k(e){var t,r={};for(t in e.requestHeaders){if(E.test(t)){r[t]=e.requestHeaders[t]}}return r}function M(r,n){var s,a=S(r.method,r.url),i,o=a&&a.responses;o=(o||[]).filter(function(e){if(typeof e.ifMatch==="function"){return e.ifMatch(r)}return!e.ifMatch||e.ifMatch.test(r.requestBody)});if(o.length){i=o[0];if(typeof i.buildResponse==="function"){i=t({},i);try{i.buildResponse(a.match,i,r)}catch(e){i=w(500,r,e.stack)}}if(a.responses.length>1){s=a.responses.indexOf(i)}}else if(!y){switch(r.method){case"HEAD":i={code:200};break;case"DELETE":case"MERGE":case"PATCH":i={code:204};break;case"POST":i={code:200,headers:{"Content-Type":u},message:r.requestBody};break}}if(i){e.info(r.method+" "+r.url+(s!==undefined?", alternative (ifMatch) #"+s:""),'{"If-Match":'+JSON.stringify(r.requestHeaders["If-Match"])+"}","sap.ui.test.TestUtils")}else{i=w(404,r,"No mock data found")}i.headers=jQuery.extend({},k(r),i.headers);if(n&&i.code<300){i.contentId=n}return i}function A(e,t){var r;t=t.replace(/^\s+/,"");r=O(t);return{boundary:O(t).slice(2),parts:t.split(r).slice(1,-1).map(function(t){var r,n,s,a,o,u;t=t.slice(2);n=O(t);if(p.test(n)){a=A(e,t.slice(n.length+4));r=a.parts.filter(function(e){return e.code>=300});return r.length?r[0]:a}u=t.indexOf("\r\n\r\n")+4;o=H(e,t.slice(u));s=i.exec(t.slice(0,u));return M(o,s&&s[1])})}}function H(e,t){var r=t.indexOf("\r\n\r\n"),n,s,a={requestHeaders:{}};a.requestBody=t.slice(r+4,t.length-2);t=t.slice(0,r);n=t.split("\r\n");a.requestLine=n.shift();s=g.exec(a.requestLine);if(s){a.method=s[1];a.url=e+s[2];n.forEach(function(e){var t=o.exec(e);if(t){a.requestHeaders[t[1]]=t[2]}})}return a}function P(e){var t=e.url;if(a.test(t)){T(t.slice(0,t.indexOf("/$batch")+1),e)}else{F(e)}}function j(e){var t=c[e];if(!t){jQuery.ajax({async:false,url:e,dataType:"text",success:function(e){t=e}});if(!t){throw new Error(e+": resource not found")}c[e]=t}return t}function F(e){var t=M(e);if(v){v(e.requestBody)}e.respond(t.code,t.headers,t.message)}function L(){var e,t;x=R();if(l){m=l.map(function(e){return{regExp:e.regExp,response:Array.isArray(e.response)?e.response.map(b):[b(e.response)]}})}t=sinon.fakeServer.create();if(r.getFakes){r.getFakes().push(t)}else{r.add(t)}t.autoRespond=true;if(d){t.autoRespondAfter=parseInt(d)}t.respondWith("GET",/./,F);t.respondWith("DELETE",/./,F);t.respondWith("HEAD",/./,F);t.respondWith("PATCH",/./,F);t.respondWith("MERGE",/./,F);t.respondWith("POST",/./,P);e=t.restore;t.restore=function(){sinon.FakeXMLHttpRequest.filters=[];e.apply(this,arguments)};sinon.xhr.supportsCORS=jQuery.support.cors;sinon.FakeXMLHttpRequest.useFilters=true;sinon.FakeXMLHttpRequest.addFilter(function(e,t){var r=S(e,t)||(h?t.startsWith(h)||a.test(t):e==="DELETE"||e==="HEAD"||e==="MERGE"||e==="PATCH"||e==="POST");return!r});return t}n=sap.ui.require.toUrl(n).replace(/(^|\/)resources\/(~[-a-zA-Z0-9_.]*~\/)?/,"$1test-resources/")+"/";return L()},withNormalizedMessages:function(e){var t;if(sinon.createSandbox){t=sinon.createSandbox()}else{t=sinon.sandbox.create()}try{var r=n.prototype._loadResourceBundle;t.stub(n.prototype,"_loadResourceBundle").callsFake(function(){var e=r.apply(this,[arguments[0],true]);return{getText:function(t,r){var n=t,s=e.getText(t),a;for(a=0;a<10;a+=1){if(s.indexOf("{"+a+"}")>=0){n+=" "+(a>=r.length?"{"+a+"}":r[a])}}return n}}});e.apply(this)}finally{t.verifyAndRestore()}},isRealOData:function(){if(h==="proxy"){throw new Error("realOData=proxy is no longer supported")}return x},getRealOData:function(){return h?"&realOData="+h:""},onRequest:function(e){v=e},proxy:function(t){e.warning("#proxy is no longer supported",null,"sap.ui.test.TestUtils");return t},retrieveData:function(e){var t=m[e];delete m[e];return t},setData:function(e,t){m[e]=t},setupODataV4Server:function(e,t,r,n,s){if(this.isRealOData()){return}if(!n){n="/"}else if(n.slice(-1)!=="/"){n+="/"}T.useFakeServer(e,r||"sap/ui/core/qunit/odata/v4/data",T.normalizeFixture(t,n),s,n!=="/"?n:undefined)},normalizeFixture:function(e,t){var r={};Object.keys(e).forEach(function(n){var s=y.exec(n),a,i;if(s){a=s[1]||"GET";i=s[2]}else{a="GET";i=n}if(!i.startsWith("/")){i=t+i}r[a+" "+i]=e[n]});return r},spyFetch:function(e){var t=e.spy(XMLHttpRequest.prototype,"open");t.calledWithUrl=function(e){return t.getCall(e).args[1]};return t}};return T},true);
//# sourceMappingURL=TestUtils.js.map