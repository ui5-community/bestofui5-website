sap.ui.define(["exports","../config/RTL"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;const r="--_ui5_dir";const n=e=>{const n=window.document;const d=["ltr","rtl"];const i=getComputedStyle(e).getPropertyValue(r);if(d.includes(i)){return i}if(d.includes(e.dir)){return e.dir}if(d.includes(n.documentElement.dir)){return n.documentElement.dir}if(d.includes(n.body.dir)){return n.body.dir}return(0,t.getRTL)()?"rtl":undefined};var d=n;e.default=d});
//# sourceMappingURL=getEffectiveDir.js.map