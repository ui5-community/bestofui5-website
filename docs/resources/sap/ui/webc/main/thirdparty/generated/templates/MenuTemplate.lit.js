sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"],function(e,i){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;function t(e,t,n){return n?(0,i.html)`<${(0,i.scopeTag)("ui5-responsive-popover",t,n)} id="${(0,i.ifDefined)(this._id)}-menu-rp" class="ui5-menu-rp" horizontal-align="Left" placement-type=${(0,i.ifDefined)(this.placementType)} vertical-align=${(0,i.ifDefined)(this.verticalAlign)} hide-arrow allow-target-overlap ?sub-menu=${this._isSubMenu} @ui5-before-open=${(0,i.ifDefined)(this._beforePopoverOpen)} @ui5-after-open=${(0,i.ifDefined)(this._afterPopoverOpen)} @ui5-before-close=${(0,i.ifDefined)(this._beforePopoverClose)} @ui5-after-close=${(0,i.ifDefined)(this._afterPopoverClose)}>${this.isPhone?s.call(this,e,t,n):undefined}<div id="${(0,i.ifDefined)(this._id)}-menu-main">${this._currentItems.length?a.call(this,e,t,n):c.call(this,e,t,n)}</div></${(0,i.scopeTag)("ui5-responsive-popover",t,n)}><div class="ui5-menu-submenus"></div>`:(0,i.html)`<ui5-responsive-popover id="${(0,i.ifDefined)(this._id)}-menu-rp" class="ui5-menu-rp" horizontal-align="Left" placement-type=${(0,i.ifDefined)(this.placementType)} vertical-align=${(0,i.ifDefined)(this.verticalAlign)} hide-arrow allow-target-overlap ?sub-menu=${this._isSubMenu} @ui5-before-open=${(0,i.ifDefined)(this._beforePopoverOpen)} @ui5-after-open=${(0,i.ifDefined)(this._afterPopoverOpen)} @ui5-before-close=${(0,i.ifDefined)(this._beforePopoverClose)} @ui5-after-close=${(0,i.ifDefined)(this._afterPopoverClose)}>${this.isPhone?s.call(this,e,t,n):undefined}<div id="${(0,i.ifDefined)(this._id)}-menu-main">${this._currentItems.length?a.call(this,e,t,n):c.call(this,e,t,n)}</div></ui5-responsive-popover><div class="ui5-menu-submenus"></div>`}function s(e,t,s){return s?(0,i.html)`<div slot="header" class="ui5-menu-dialog-header">${this.isSubMenuOpened?n.call(this,e,t,s):undefined}<div class="ui5-menu-dialog-title"><div>${(0,i.ifDefined)(this.menuHeaderTextPhone)}</div></div><${(0,i.scopeTag)("ui5-button",t,s)} icon="decline" design="Transparent" aria-label="${(0,i.ifDefined)(this.labelClose)}" @click=${this.close}></${(0,i.scopeTag)("ui5-button",t,s)}></div>`:(0,i.html)`<div slot="header" class="ui5-menu-dialog-header">${this.isSubMenuOpened?n.call(this,e,t,s):undefined}<div class="ui5-menu-dialog-title"><div>${(0,i.ifDefined)(this.menuHeaderTextPhone)}</div></div><ui5-button icon="decline" design="Transparent" aria-label="${(0,i.ifDefined)(this.labelClose)}" @click=${this.close}></ui5-button></div>`}function n(e,t,s){return s?(0,i.html)`<${(0,i.scopeTag)("ui5-button",t,s)} icon="nav-back" class="ui5-menu-back-button" design="Transparent" aria-label="${(0,i.ifDefined)(this.labelBack)}" @click=${this._navigateBack}></${(0,i.scopeTag)("ui5-button",t,s)}>`:(0,i.html)`<ui5-button icon="nav-back" class="ui5-menu-back-button" design="Transparent" aria-label="${(0,i.ifDefined)(this.labelBack)}" @click=${this._navigateBack}></ui5-button>`}function a(e,t,s){return s?(0,i.html)`<${(0,i.scopeTag)("ui5-list",t,s)} id="${(0,i.ifDefined)(this._id)}-menu-list" mode="None" ?busy="${this.busy}" busy-delay="${(0,i.ifDefined)(this.busyDelay)}" separators="None" accessible-role="menu" @ui5-item-click=${(0,i.ifDefined)(this._itemClick)} @mouseover="${this._busyMouseOver}">${(0,i.repeat)(this._currentItems,(e,i)=>e._id||i,(i,n)=>u.call(this,e,t,s,i,n))}</${(0,i.scopeTag)("ui5-list",t,s)}>`:(0,i.html)`<ui5-list id="${(0,i.ifDefined)(this._id)}-menu-list" mode="None" ?busy="${this.busy}" busy-delay="${(0,i.ifDefined)(this.busyDelay)}" separators="None" accessible-role="menu" @ui5-item-click=${(0,i.ifDefined)(this._itemClick)} @mouseover="${this._busyMouseOver}">${(0,i.repeat)(this._currentItems,(e,i)=>e._id||i,(i,n)=>u.call(this,e,t,s,i,n))}</ui5-list>`}function u(e,t,s,n,a){return s?(0,i.html)`<${(0,i.scopeTag)("ui5-li",t,s)} .associatedItem="${(0,i.ifDefined)(n.item)}" class="ui5-menu-item" id="${(0,i.ifDefined)(this._id)}-menu-item-${a}" .icon="${(0,i.ifDefined)(n.item.icon)}" accessible-name=${(0,i.ifDefined)(n.item.ariaLabelledByText)} accessible-role="menuitem" .additionalText="${(0,i.ifDefined)(n.item._additionalText)}" ._ariaHasPopup=${(0,i.ifDefined)(n.ariaHasPopup)} ?disabled=${n.item.disabled} ?starts-section=${n.item.startsSection} ?selected=${n.item.subMenuOpened} ?is-phone=${this.isPhone} @mouseover=${this._itemMouseOver} @mouseout=${this._itemMouseOut} @keydown=${this._itemKeyDown}>${n.item.hasDummyIcon?o.call(this,e,t,s,n,a):undefined}${(0,i.ifDefined)(n.item.text)}${n.item.hasSubmenu?l.call(this,e,t,s,n,a):d.call(this,e,t,s,n,a)}</${(0,i.scopeTag)("ui5-li",t,s)}>`:(0,i.html)`<ui5-li .associatedItem="${(0,i.ifDefined)(n.item)}" class="ui5-menu-item" id="${(0,i.ifDefined)(this._id)}-menu-item-${a}" .icon="${(0,i.ifDefined)(n.item.icon)}" accessible-name=${(0,i.ifDefined)(n.item.ariaLabelledByText)} accessible-role="menuitem" .additionalText="${(0,i.ifDefined)(n.item._additionalText)}" ._ariaHasPopup=${(0,i.ifDefined)(n.ariaHasPopup)} ?disabled=${n.item.disabled} ?starts-section=${n.item.startsSection} ?selected=${n.item.subMenuOpened} ?is-phone=${this.isPhone} @mouseover=${this._itemMouseOver} @mouseout=${this._itemMouseOut} @keydown=${this._itemKeyDown}>${n.item.hasDummyIcon?o.call(this,e,t,s,n,a):undefined}${(0,i.ifDefined)(n.item.text)}${n.item.hasSubmenu?l.call(this,e,t,s,n,a):d.call(this,e,t,s,n,a)}</ui5-li>`}function o(e,t,s,n,a){return(0,i.html)`<div class="ui5-menu-item-dummy-icon"></div>`}function l(e,t,s,n,a){return s?(0,i.html)`<${(0,i.scopeTag)("ui5-icon",t,s)} part="icon" name="slim-arrow-right" class="ui5-menu-item-icon-end"></${(0,i.scopeTag)("ui5-icon",t,s)}>`:(0,i.html)`<ui5-icon part="icon" name="slim-arrow-right" class="ui5-menu-item-icon-end"></ui5-icon>`}function d(e,t,s,n,a){return(0,i.html)`${n.item._siblingsWithChildren?r.call(this,e,t,s,n,a):undefined}`}function r(e,t,s,n,a){return(0,i.html)`<div class="ui5-menu-item-no-icon-end"></div>`}function c(e,t,s){return(0,i.html)`${this.busy?m.call(this,e,t,s):undefined}`}function m(e,t,s){return s?(0,i.html)`<${(0,i.scopeTag)("ui5-busy-indicator",t,s)} id="${(0,i.ifDefined)(this._id)}-menu-busy-indicator" delay="${(0,i.ifDefined)(this.busyDelay)}" class="ui5-menu-busy-indicator" @mouseover="${this._busyMouseOver}" active></${(0,i.scopeTag)("ui5-busy-indicator",t,s)}>`:(0,i.html)`<ui5-busy-indicator id="${(0,i.ifDefined)(this._id)}-menu-busy-indicator" delay="${(0,i.ifDefined)(this.busyDelay)}" class="ui5-menu-busy-indicator" @mouseover="${this._busyMouseOver}" active></ui5-busy-indicator>`}var f=t;e.default=f});
//# sourceMappingURL=MenuTemplate.lit.js.map