sap.ui.define(["exports","../FeaturesRegistry","../generated/css/BusyIndicator.css","../thirdparty/merge","../Keys"],function(e,t,s,i,a){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;s=r(s);i=r(i);function r(e){return e&&e.__esModule?e:{default:e}}const o={properties:{__isBusy:{type:Boolean}}};class n{static wrapTemplateResultInBusyMarkup(e,t,s){if(t.isOpenUI5Component&&t.__isBusy){s=e`
			<div class="busy-indicator-wrapper">
				<span tabindex="0" busy-indicator-before-span @focusin=${t.__suppressFocusIn}></span>
				${s}
				<div class="busy-indicator-overlay"></div>
				<div busy-indicator
					class="busy-indicator-busy-area"
					tabindex="0"
					role="progressbar"
					@keydown=${t.__suppressFocusBack}
					aria-valuemin="0"
					aria-valuemax="100"
					aria-valuetext="Busy">
					<div>
						<div class="busy-indicator-circle circle-animation-0"></div>
						<div class="busy-indicator-circle circle-animation-1"></div>
						<div class="busy-indicator-circle circle-animation-2"></div>
					</div>
				</div>
			</div>`}return s}static enrichBusyIndicatorSettings(e){n.enrichBusyIndicatorMetadata(e);n.enrichBusyIndicatorMethods(e.prototype)}static enrichBusyIndicatorMetadata(e){e.metadata=(0,i.default)(e.metadata,o)}static enrichBusyIndicatorMethods(e){Object.defineProperties(e,{__redirectFocus:{value:true,writable:true},__suppressFocusBack:{get(){return{handleEvent:e=>{if((0,a.isTabPrevious)(e)){const e=this.shadowRoot.querySelector("[busy-indicator-before-span]");this.__redirectFocus=false;e.focus();this.__redirectFocus=true}},capture:true,passive:false}}},isOpenUI5Component:{get:()=>true}});e.__suppressFocusIn=function e(){const t=this.shadowRoot?.querySelector("[busy-indicator]");if(t&&this.__redirectFocus){t.focus()}};e.getDomRef=function e(){if(typeof this._getRealDomRef==="function"){return this._getRealDomRef()}if(!this.shadowRoot||this.shadowRoot.children.length===0){return}const t=[...this.shadowRoot.children].filter(e=>!["link","style"].includes(e.localName));if(t.length!==1){console.warn(`The shadow DOM for ${this.constructor.getMetadata().getTag()} does not have a top level element, the getDomRef() method might not work as expected`)}if(this.__isBusy){return t[0].querySelector(".busy-indicator-wrapper > :not([busy-indicator-before-span]):not(.busy-indicator-overlay):not(.busy-indicator-busy-area)")}return t[0]}}static getBusyIndicatorStyles(){return s.default}}(0,t.registerFeature)("OpenUI5Enablement",n);var c=n;e.default=c});
//# sourceMappingURL=OpenUI5Enablement.js.map