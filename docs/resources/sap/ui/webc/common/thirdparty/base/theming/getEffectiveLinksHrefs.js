sap.ui.define(["exports","../CSP","../FeaturesRegistry"],function(e,t,r){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;const s=10;const a=(e,a=false)=>{const n=e[a?"staticAreaStyles":"styles"];if(!n){return}const i=Array.isArray(n)?n:[n];const u=(0,r.getFeature)("OpenUI5Enablement");if(u){i.push(u.getBusyIndicatorStyles())}return i.flat(s).filter(e=>!!e).map(e=>(0,t.getUrl)(e.packageName,e.fileName))};var n=a;e.default=n});
//# sourceMappingURL=getEffectiveLinksHrefs.js.map