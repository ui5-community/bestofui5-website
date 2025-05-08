sap.ui.define(["exports","./lit-html"],function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.withStatic=t.unsafeStatic=t.svg=t.literal=t.html=void 0;
/**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const i=Symbol.for(""),l=t=>{var e,l;if((null===(e=t)||void 0===e?void 0:e.r)===i)return null===(l=t)||void 0===l?void 0:l._$litStatic$},r=t=>({_$litStatic$:t,r:i}),a=(t,...e)=>({_$litStatic$:e.reduce((e,i,l)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[l+1],t[0]),r:i}),s=new Map,o=t=>(e,...i)=>{const r=i.length;let a,o;const u=[],n=[];let c,$=0,v=!1;for(;$<r;){for(c=e[$];$<r&&void 0!==(o=i[$],a=l(o));)c+=a+e[++$],v=!0;n.push(o),u.push(c),$++}if($===r&&u.push(e[r]),v){const t=u.join("$$lit$$");void 0===(e=s.get(t))&&(u.raw=u,s.set(t,e=u)),i=n}return t(e,...i)},u=o(e.html),n=o(e.svg);t.svg=n;t.html=u;t.withStatic=o;t.literal=a;t.unsafeStatic=r});
//# sourceMappingURL=static.js.map