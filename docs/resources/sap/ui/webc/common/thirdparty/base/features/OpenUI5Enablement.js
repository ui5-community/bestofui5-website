sap.ui.define(["../FeaturesRegistry","../generated/css/BusyIndicator.css","../thirdparty/merge","../Keys"],function(e,t,s,i){"use strict";const r={properties:{__isBusy:{type:Boolean}}};const o=()=>t;const a=(e,t,s)=>{if(t.isOpenUI5Component&&t.__isBusy){s=e`
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
		</div>`}return s};const n=e=>{e.metadata=s(e.metadata,r)};const c=e=>{Object.defineProperties(e,{__redirectFocus:{value:true,writable:true},__suppressFocusBack:{get(){const e=this;return{handleEvent:t=>{if(i.isTabPrevious(t)){const t=e.shadowRoot.querySelector("[busy-indicator-before-span]");e.__redirectFocus=false;t.focus();e.__redirectFocus=true}},capture:true,passive:false}}},isOpenUI5Component:{get:()=>true}});e.__suppressFocusIn=function e(){const t=this.shadowRoot.querySelector("[busy-indicator]");if(t&&this.__redirectFocus){t.focus()}};e.getDomRef=function e(){if(typeof this._getRealDomRef==="function"){return this._getRealDomRef()}if(!this.shadowRoot||this.shadowRoot.children.length===0){return}const t=[...this.shadowRoot.children].filter(e=>!["link","style"].includes(e.localName));if(t.length!==1){console.warn(`The shadow DOM for ${this.constructor.getMetadata().getTag()} does not have a top level element, the getDomRef() method might not work as expected`)}if(this.__isBusy){return t[0].querySelector(".busy-indicator-wrapper > :not([busy-indicator-before-span]):not(.busy-indicator-overlay):not(.busy-indicator-busy-area)")}return t[0]}};const u=e=>{n(e);c(e.prototype)};const d={enrichBusyIndicatorSettings:u,wrapTemplateResultInBusyMarkup:a,getBusyIndicatorStyles:o};e.registerFeature("OpenUI5Enablement",d);return d});