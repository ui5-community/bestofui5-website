sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/decorators/customElement","sap/ui/webc/common/thirdparty/base/decorators/property","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer","sap/ui/webc/common/thirdparty/localization/features/calendar/Gregorian","sap/ui/webc/common/thirdparty/base/types/Integer","sap/ui/webc/common/thirdparty/base/Keys","./TimePickerInternals","./Input","./SegmentedButton","./types/InputType","./generated/i18n/i18n-defaults","./generated/templates/TimeSelectionInputsTemplate.lit","./generated/themes/TimeSelectionInputs.css"],function(t,e,i,n,s,r,o,a,u,h,_,d,p,c){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;e=l(e);i=l(i);n=l(n);r=l(r);a=l(a);u=l(u);h=l(h);_=l(_);p=l(p);c=l(c);function l(t){return t&&t.__esModule?t:{default:t}}var f=void 0&&(void 0).__decorate||function(t,e,i,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)if(o=t[a])r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r;return s>3&&r&&Object.defineProperty(e,i,r),r};let m=class t extends a.default{get enterHoursLabel(){return a.default.i18nBundle.getText(d.TIMEPICKER_INPUTS_ENTER_HOURS)}get enterMinutesLabel(){return a.default.i18nBundle.getText(d.TIMEPICKER_INPUTS_ENTER_MINUTES)}get enterSecondsLabel(){return a.default.i18nBundle.getText(d.TIMEPICKER_INPUTS_ENTER_SECONDS)}get _numberType(){return _.default.Number}get _isHoursInput(){const t=this._componentKey("hours");return this._componentMap[t]===this._activeIndex}get _is24HoursFormat(){return this.formatPattern.indexOf("HH")!==-1||this.formatPattern.indexOf("H")!==-1}onBeforeRendering(){this._createComponents()}_addNumericAttributes(){this._entities.forEach((t,e)=>{const i=this._inputComponent(e);if(i){const t=this._innerInput(i);t.setAttribute("autocomplete","off");t.setAttribute("pattern","[0-9]*");t.setAttribute("inputmode","numeric")}})}_inputComponent(t){const e=typeof t==="string"?this._indexFromName(t):t;const i=this._entities[e].entity;return i?this.shadowRoot?.querySelector(`#${this._id}_input_${i}`):undefined}_innerInput(t){return t&&t.getInputDOMRefSync()}_createComponents(){let t;this._entities=[];this._periods=[];this._componentMap={hours:-1,minutes:-1,seconds:-1};if(this._hasHoursComponent){this._componentMap.hours=this._entities.length;t=parseInt(this._hours);this._entities.push({entity:"hours",label:this.enterHoursLabel,value:t,stringValue:this._editedInput===this._entities.length?this._editedInputValue:this._formatNumberToString(t,this._zeroPaddedHours),hasSeparator:this._entities.length>0,prependZero:this._zeroPaddedHours,attributes:{min:this._hoursConfiguration.minHour,max:this._hoursConfiguration.maxHour,step:1}})}if(this._hasMinutesComponent){this._componentMap.minutes=this._entities.length;t=parseInt(this._minutes);this._entities.push({entity:"minutes",label:this.enterMinutesLabel,value:t,stringValue:this._editedInput===this._entities.length?this._editedInputValue:this._formatNumberToString(t,true),hasSeparator:this._entities.length>0,prependZero:true,attributes:{min:0,max:59,step:1}})}if(this._hasSecondsComponent){this._componentMap.seconds=this._entities.length;t=parseInt(this._seconds);this._entities.push({entity:"seconds",label:this.enterSecondsLabel,value:t,stringValue:this._editedInput===this._entities.length?this._editedInputValue:this._formatNumberToString(t,true),hasSeparator:this._entities.length>0,prependZero:true,attributes:{min:0,max:59,step:1}})}this._createPeriodComponent()}_switchInput(t){if(t>=this._entities.length){t=0}this._inputComponent(t).focus()}_switchNextInput(t=false){let e=this._activeIndex;const i=e;if(!this._entities.length){return}do{e++;if(e>=this._entities.length){e=t?0:this._entities.length-1}}while(this._inputComponent(e).disabled&&e!==i&&(t||e<this._entities.length));if(e!==i&&!this._inputComponent(e).disabled){this._switchInput(e)}}_formatNumberToString(t,e){return t<10&&e?`0${t}`:t.toString()}_onkeydown(t){if(this._activeIndex===-1){return}if((0,o.isEnter)(t)){this.fireEvent("close-inputs")}else if((0,o.isNumber)(t)&&this._entities[this._activeIndex]){const e=t.key;const i=this._keyboardBuffer+e;const n=parseInt(i);t.preventDefault();this._resetCooldown(true);if(n>this._entities[this._activeIndex].attributes.max){this._inputChange(parseInt(this._keyboardBuffer));this._switchNextInput();this._keyboardBuffer=e;this._inputChange(parseInt(e));this._resetCooldown(true)}else{this._keyboardBuffer=i;this._inputChange(parseInt(this._keyboardBuffer));if(this._keyboardBuffer.length===2||parseInt(`${this._keyboardBuffer}0`)>this._entities[this._activeIndex].attributes.max){this._resetCooldown(this._keyboardBuffer.length!==2);this._keyboardBuffer="";this._switchNextInput()}}}}_inputChange(t){const e=this._formatNumberToString(t,this._entities[this._activeIndex].prependZero);if(this._activeIndex===-1){return}t=parseInt(e);this._entities[this._activeIndex].value=t;this._inputComponent(this._activeIndex).value=this._formatNumberToString(t,this._entities[this._activeIndex].prependZero);switch(this._activeIndex){case this._componentMap.hours:this._hoursChange(t);break;case this._componentMap.minutes:this._minutesChange(t);break;case this._componentMap.seconds:this._secondsChange(t);break}}_onfocusin(t){const e=t.target;const i=this._innerInput(e);this._editedInput=-1;i.select();this._activeIndex=this._getIndexFromId(e.id)}_onfocusout(){let t=this._inputComponent(this._activeIndex).value===""?0:this._entities[this._activeIndex].value;this._editedInput=-1;if(this._isHoursInput&&!this._is24HoursFormat&&t===0){t=12}this._inputChange(t);this._activeIndex=-1}_oninput(){const t=this._inputComponent(this._activeIndex).value;const e=t===""?0:parseInt(t);if(e!==this._entities[this._activeIndex].value){this._editedInput=this._activeIndex;this._editedInputValue=t;this._inputChange(e);this._keyboardBuffer=t}}};f([(0,i.default)({validator:r.default,defaultValue:-1})],m.prototype,"_editedInput",void 0);f([(0,i.default)()],m.prototype,"_editedInputValue",void 0);m=f([(0,e.default)({tag:"ui5-time-selection-inputs",renderer:n.default,styles:c.default,template:p.default,dependencies:[u.default,h.default]})],m);m.define();var I=m;t.default=I});
//# sourceMappingURL=TimeSelectionInputs.js.map