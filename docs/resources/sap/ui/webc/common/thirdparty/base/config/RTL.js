sap.ui.define(["exports","../InitialConfiguration","./Language","../util/getDesigntimePropertyAsArray","../util/detectNavigatorLanguage"],function(e,t,n,i,r){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.getRTL=void 0;i=u(i);r=u(r);function u(e){return e&&e.__esModule?e:{default:e}}const a={iw:"he",ji:"yi",in:"id",sh:"sr"};const o=(0,i.default)("$cldr-rtl-locales:ar,fa,he$")||[];const d=e=>{e=e&&a[e]||e;return o.indexOf(e)>=0};const s=()=>{if(typeof document==="undefined"){return false}const e=(0,t.getRTL)();if(e!==undefined){return!!e}return d((0,n.getLanguage)()||(0,r.default)())};e.getRTL=s});
//# sourceMappingURL=RTL.js.map