sap.ui.define(["exports","../Device","../EventProvider","../animations/scroll"],function(t,s,e,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;e=i(e);o=i(o);function i(t){return t&&t.__esModule?t:{default:t}}const r="scroll";const n=(0,s.supportsTouch)()?"touchend":"mouseup";class h extends e.default{constructor(t){super();this.supportsTouch=(0,s.supportsTouch)();this.containerComponent=t;this.mouseMove=this.ontouchmove.bind(this);this.mouseUp=this.ontouchend.bind(this);this.touchStart=this.ontouchstart.bind(this);this.supportsTouch=(0,s.supportsTouch)();this.cachedValue={dragX:0,dragY:0};this.startX=0;this.startY=0;if(this.supportsTouch){t.addEventListener("touchstart",this.touchStart,{passive:true});t.addEventListener("touchmove",this.mouseMove,{passive:true});t.addEventListener("touchend",this.mouseUp,{passive:true})}else{t.addEventListener("mousedown",this.touchStart,{passive:true})}}set scrollContainer(t){this._container=t}get scrollContainer(){return this._container}async scrollTo(t,s,e=0,o=0){let i=this.scrollContainer.clientHeight>0&&this.scrollContainer.clientWidth>0;while(!i&&e>0){await new Promise(t=>{setTimeout(()=>{i=this.scrollContainer.clientHeight>0&&this.scrollContainer.clientWidth>0;e--;t()},o)})}this._container.scrollLeft=t;this._container.scrollTop=s}move(t,s,e){if(e){this._container.scrollLeft+=t;this._container.scrollTop+=s;return}if(this._container){return(0,o.default)(this._container,t,s)}}getScrollLeft(){return this._container.scrollLeft}getScrollTop(){return this._container.scrollTop}_isTouchInside(t){let s=null;if(this.supportsTouch&&t instanceof TouchEvent){s=t.touches[0]}const e=this._container.getBoundingClientRect();const o=this.supportsTouch?s.clientX:t.x;const i=this.supportsTouch?s.clientY:t.y;return o>=e.left&&o<=e.right&&i>=e.top&&i<=e.bottom}ontouchstart(t){let s=null;if(this.supportsTouch&&t instanceof TouchEvent){s=t.touches[0]}if(!this.supportsTouch){document.addEventListener("mouseup",this.mouseUp,{passive:true});document.addEventListener("mousemove",this.mouseMove,{passive:true})}else{this.startX=s.pageX;this.startY=s.pageY}if(this.supportsTouch&&t instanceof TouchEvent){this._prevDragX=s.pageX;this._prevDragY=s.pageY}if(t instanceof MouseEvent){this._prevDragX=t.x;this._prevDragY=t.y}this._canScroll=this._isTouchInside(t)}ontouchmove(t){if(!this._canScroll){return}const s=this._container;const e=this.supportsTouch?t.touches[0]:null;const o=this.supportsTouch?e.pageX:t.x;const i=this.supportsTouch?e.pageY:t.y;s.scrollLeft+=this._prevDragX-o;s.scrollTop+=this._prevDragY-i;this.fireEvent(r,{isLeft:o>this._prevDragX,isRight:o<this._prevDragX});this.cachedValue.dragX=this._prevDragX;this.cachedValue.dragY=this._prevDragY;this._prevDragX=o;this._prevDragY=i}ontouchend(t){if(this.supportsTouch){const s=Math.abs(t.changedTouches[0].pageX-this.startX);const e=Math.abs(t.changedTouches[0].pageY-this.startY);if(s<10&&e<10){return}}if(!this._canScroll){return}const s=this._container;const e=this.supportsTouch?t.changedTouches[0].pageX:t.x;const o=this.supportsTouch?t.changedTouches[0].pageY:t.y;s.scrollLeft+=this._prevDragX-e;s.scrollTop+=this._prevDragY-o;const i=e===this._prevDragX;const r=i?this.cachedValue.dragX:e;this.fireEvent(n,{isLeft:r<this._prevDragX,isRight:r>this._prevDragX});this._prevDragX=e;this._prevDragY=o;if(!this.supportsTouch){document.removeEventListener("mousemove",this.mouseMove);document.removeEventListener("mouseup",this.mouseUp)}}}var c=h;t.default=c});
//# sourceMappingURL=ScrollEnablement.js.map