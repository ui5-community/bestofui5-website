sap.ui.define(["exports","../EventProvider"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.fireThemeLoaded=e.detachThemeLoaded=e.attachThemeLoaded=void 0;t=d(t);function d(e){return e&&e.__esModule?e:{default:e}}const a=new t.default;const o="themeLoaded";const n=e=>{a.attachEvent(o,e)};e.attachThemeLoaded=n;const c=e=>{a.detachEvent(o,e)};e.detachThemeLoaded=c;const h=e=>a.fireEvent(o,e);e.fireThemeLoaded=h});
//# sourceMappingURL=ThemeLoaded.js.map