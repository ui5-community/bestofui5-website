sap.ui.define(["exports","../EventProvider"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.fireThemeRegistered=e.attachThemeRegistered=void 0;t=r(t);function r(e){return e&&e.__esModule?e:{default:e}}const i=new t.default;const n="themeRegistered";const s=e=>{i.attachEvent(n,e)};e.attachThemeRegistered=s;const d=e=>i.fireEvent(n,e);e.fireThemeRegistered=d});
//# sourceMappingURL=ThemeRegistered.js.map