sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"],function(e,i){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;function t(e,t,s){return s?(0,i.html)`<${(0,i.scopeTag)("ui5-select",t,s)} class="ui5-tb-popover-item" data-ui5-external-action-item-id="${(0,i.ifDefined)(this._id)}" value-state="${(0,i.ifDefined)(this.valueState)}" ?disabled="${this.disabled}" accessible-name="${(0,i.ifDefined)(this.accessibleName)}" accessible-name-ref="${(0,i.ifDefined)(this.accessibleNameRef)}">${(0,i.repeat)(this.options,(e,i)=>e._id||i,(i,n)=>a.call(this,e,t,s,i,n))}</${(0,i.scopeTag)("ui5-select",t,s)}>`:(0,i.html)`<ui5-select class="ui5-tb-popover-item" data-ui5-external-action-item-id="${(0,i.ifDefined)(this._id)}" value-state="${(0,i.ifDefined)(this.valueState)}" ?disabled="${this.disabled}" accessible-name="${(0,i.ifDefined)(this.accessibleName)}" accessible-name-ref="${(0,i.ifDefined)(this.accessibleNameRef)}">${(0,i.repeat)(this.options,(e,i)=>e._id||i,(i,n)=>a.call(this,e,t,s,i,n))}</ui5-select>`}function a(e,t,a,s,n){return a?(0,i.html)`<${(0,i.scopeTag)("ui5-option",t,a)} ?selected="${s.selected}" data-ui5-external-action-item-index="${n}">${(0,i.ifDefined)(s.textContent)}</${(0,i.scopeTag)("ui5-option",t,a)}>`:(0,i.html)`<ui5-option ?selected="${s.selected}" data-ui5-external-action-item-index="${n}">${(0,i.ifDefined)(s.textContent)}</ui5-option>`}var s=t;e.default=s});
//# sourceMappingURL=ToolbarPopoverSelectTemplate.lit.js.map