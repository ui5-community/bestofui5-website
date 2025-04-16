sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/i18nBundle","sap/ui/webc/common/thirdparty/base/UI5Element","sap/ui/webc/common/thirdparty/base/delegate/ItemNavigation","sap/ui/webc/common/thirdparty/base/decorators/property","sap/ui/webc/common/thirdparty/base/decorators/slot","sap/ui/webc/common/thirdparty/base/decorators/customElement","sap/ui/webc/common/thirdparty/base/delegate/ResizeHandler","sap/ui/webc/common/thirdparty/base/types/Integer","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer","sap/ui/webc/common/thirdparty/base/Keys","./generated/templates/ProductSwitchTemplate.lit","./generated/i18n/i18n-defaults","./generated/themes/ProductSwitch.css"],function(e,t,i,s,o,n,r,a,d,c,l,u,h,p){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;i=m(i);s=m(s);o=m(o);n=m(n);r=m(r);a=m(a);d=m(d);c=m(c);u=m(u);p=m(p);function m(e){return e&&e.__esModule?e:{default:e}}var _=void 0&&(void 0).__decorate||function(e,t,i,s){var o=arguments.length,n=o<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,i):s,r;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)if(r=e[a])n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n;return o>3&&n&&Object.defineProperty(t,i,n),n};var f;let w=f=class e extends i.default{constructor(){super();this._currentIndex=0;this._rowSize=4;this._itemNavigation=new s.default(this,{rowSize:this._rowSize,getItemsCallback:()=>this.items});this._handleResizeBound=this._handleResize.bind(this)}static get ROW_MIN_WIDTH(){return{ONE_COLUMN:600,THREE_COLUMN:900}}static async onDefine(){f.i18nBundle=await(0,t.getI18nBundle)("@ui5/webcomponents-fiori")}get _ariaLabelText(){return f.i18nBundle.getText(h.PRODUCT_SWITCH_CONTAINER_LABEL)}onEnterDOM(){a.default.register(document.body,this._handleResizeBound)}onExitDOM(){a.default.deregister(document.body,this._handleResizeBound)}onBeforeRendering(){this.desktopColumns=this.items.length>6?4:3}_handleResize(){const e=document.body.clientWidth;if(e<=this.constructor.ROW_MIN_WIDTH.ONE_COLUMN){this._setRowSize(1)}else if(e<=this.constructor.ROW_MIN_WIDTH.THREE_COLUMN||this.items.length<=6){this._setRowSize(3)}else{this._setRowSize(4)}}handleProductSwitchItemClick(e){this.items.forEach(e=>{e.selected=false});e.target.selected=true}_onfocusin(e){const t=e.target;this._itemNavigation.setCurrentItem(t);this._currentIndex=this.items.indexOf(t)}_setRowSize(e){this._rowSize=e;this._itemNavigation.setRowSize(e)}_onkeydown(e){if((0,l.isDown)(e)){this._handleDown(e)}else if((0,l.isUp)(e)){this._handleUp(e)}}_handleDown(e){const t=this.items.length;if(this._currentIndex+this._rowSize>t){e.stopPropagation()}}_handleUp(e){if(this._currentIndex-this._rowSize<0){e.stopPropagation()}}};_([(0,o.default)({validator:d.default})],w.prototype,"desktopColumns",void 0);_([(0,n.default)({type:HTMLElement,default:true})],w.prototype,"items",void 0);w=f=_([(0,r.default)({tag:"ui5-product-switch",renderer:c.default,styles:p.default,template:u.default})],w);w.define();var b=w;e.default=b});
//# sourceMappingURL=ProductSwitch.js.map