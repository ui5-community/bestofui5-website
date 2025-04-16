/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e=/^(?:([^:\/?#]+):)?((?:[\/\\]{2,}((?:\[[^\]]+\]|[^\/?#:]+))(?::([0-9]+))?)?([^?#]*))(?:\?([^#]*))?(?:#(.*))?$/;var t=/^([a-z0-9-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*$/i;var a=/^([a-z0-9-._~!$&'()*+,;=:@\/?]|%[0-9a-f]{2})*$/i;var r=a;var f=/^([a-z0-9!$'*+:^_`{|}~-]|%[0-9a-f]{2})+(?:\.([a-z0-9!$'*+:^_`{|}~-]|%[0-9a-f]{2})+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;var s=/^([0-9]{1,3}\.){3}[0-9]{1,3}$/;var i=/^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;var n=/^\[[^\]]+\]$/;var u=/^\[(((([0-9a-f]{1,4}:){6}|(::([0-9a-f]{1,4}:){5})|(([0-9a-f]{1,4})?::([0-9a-f]{1,4}:){4})|((([0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::([0-9a-f]{1,4}:){3})|((([0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::([0-9a-f]{1,4}:){2})|((([0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:)|((([0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::))(([0-9a-f]{1,4}:[0-9a-f]{1,4})|(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])))|((([0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4})|((([0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::))\]$/i;var l=/^([a-z0-9]([a-z0-9\-]*[a-z0-9])?\.)*[a-z0-9]([a-z0-9\-]*[a-z0-9])?$/i;var p=/^((?:ftp|https?|wss?):)([\s\S]+)$/;var o=/[\u0009\u000A\u000D]/;var v={};v._createEntry=function(e,t,a,r){return new h(e,t,a,r)};function h(e,t,a,r){Object.defineProperties(this,{protocol:{value:e&&e.toUpperCase(),enumerable:true},host:{value:t&&t.toUpperCase(),enumerable:true},port:{value:a,enumerable:true},path:{value:r,enumerable:true}})}var c=[];v.clear=function(){c=[]};v.add=function(e,t,a,r){var f=this._createEntry(e,t,a,r);c.push(f)};v._delete=function(e){c.splice(c.indexOf(e),1)};v.entries=function(){return c.slice()};v.validate=function(v){if(typeof v==="string"){if(o.test(v)){return false}}var h=p.exec(v);if(h&&!/^[\/\\]{2}/.test(h[2])){v=h[1]+"//"+h[2]}h=e.exec(v);if(!h){return false}var $=h[1],g=h[2],z=h[3],_=h[4],x=h[5],R=h[6],d=h[7];if($){$=$.toUpperCase();if(c.length<=0){if(!/^(https?|ftp)/i.test($)){return false}}}if(z){if(s.test(z)){if(!i.test(z)){return false}}else if(n.test(z)){if(!u.test(z)){return false}}else if(!l.test(z)){return false}z=z.toUpperCase()}if(x){if($==="MAILTO"){var b=g.split(",");for(var m=0;m<b.length;m++){if(!f.test(b[m])){return false}}}else{var C=x.split("/");for(var m=0;m<C.length;m++){if(!t.test(C[m])){return false}}}}if(R){if(!a.test(R)){return false}}if(d){if(!r.test(d)){return false}}if(c.length>0){var E=false;for(var m=0;m<c.length;m++){if(!$||!c[m].protocol||$==c[m].protocol){var U=false;if(z&&c[m].host&&/^\*/.test(c[m].host)){if(!c[m]._hostRegexp){var y=c[m].host.slice(1).replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");c[m]._hostRegexp=RegExp(y+"$")}var O=c[m]._hostRegexp;if(O.test(z)){U=true}}else if(!z||!c[m].host||z==c[m].host){U=true}if(U){if(!z&&!_||!c[m].port||_==c[m].port){if(c[m].path&&/\*$/.test(c[m].path)){if(!c[m]._pathRegexp){var w=c[m].path.slice(0,-1).replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");c[m]._pathRegexp=RegExp("^"+w)}var O=c[m]._pathRegexp;if(O.test(x)){E=true}}else if(!c[m].path||x==c[m].path){E=true}}}}if(E){break}}if(!E){return false}}return true};return v});
//# sourceMappingURL=URLListValidator.js.map