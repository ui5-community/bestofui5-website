sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"],function(l,t){"use strict";Object.defineProperty(l,"__esModule",{value:true});l.default=void 0;function s(l,s,e){return(0,t.html)`<div class="ui5-illustrated-message-root"><div class="ui5-illustrated-message-illustration">${(0,t.unsafeHTML)(this.effectiveIllustration)}</div>${this.hasTitle?i.call(this,l,s,e):undefined}${this.hasSubtitle?a.call(this,l,s,e):undefined}${this.hasActions?u.call(this,l,s,e):undefined}<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="ui5-illustrated-message-util">${n.call(this,l,s,e)}</svg></div>`}function i(l,s,i){return(0,t.html)`${this.hasFormattedTitle?e.call(this,l,s,i):r.call(this,l,s,i)}`}function e(l,s,i){return(0,t.html)`<slot name="title"></slot>`}function r(l,s,i){return i?(0,t.html)`<${(0,t.scopeTag)("ui5-title",s,i)} level="H2" class="ui5-illustrated-message-title" wrapping-type="Normal">${(0,t.ifDefined)(this.effectiveTitleText)}</${(0,t.scopeTag)("ui5-title",s,i)}>`:(0,t.html)`<ui5-title level="H2" class="ui5-illustrated-message-title" wrapping-type="Normal">${(0,t.ifDefined)(this.effectiveTitleText)}</ui5-title>`}function a(l,s,i){return(0,t.html)`<div class="ui5-illustrated-message-subtitle">${this.hasFormattedSubtitle?c.call(this,l,s,i):o.call(this,l,s,i)}</div>`}function c(l,s,i){return(0,t.html)`<slot name="subtitle"></slot>`}function o(l,s,i){return(0,t.html)`${(0,t.ifDefined)(this.effectiveSubitleText)}`}function u(l,s,i){return(0,t.html)`<div class="ui5-illustrated-message-actions"><slot></slot></div>`}function n(l,s,i){return(0,t.svg)`<defs><pattern id="sapIllus_PatternShadow" data-name="sapIllus_PatternShadow" width="3" height="5.5" patternUnits="userSpaceOnUse" viewBox="0 0 3 5.5"><rect class="sapIllus_NoColor sapIllus_NoColor_Fill" width="3" height="5.5" /><circle class="sapIllus_BrandColorPrimary sapIllus_BrandColorPrimary_Fill" cx="3" cy="5.5001" r="0.5" /><circle class="sapIllus_BrandColorPrimary sapIllus_BrandColorPrimary_Fill" cy="5.5001" r="0.5" /><circle class="sapIllus_BrandColorPrimary sapIllus_BrandColorPrimary_Fill" cx="1.5" cy="2.7501" r="0.5" /><circle class="sapIllus_BrandColorPrimary sapIllus_BrandColorPrimary_Fill" cx="3" cy="0.0001" r="0.5" /><circle class="sapIllus_BrandColorPrimary sapIllus_BrandColorPrimary_Fill" cy="0.0001" r="0.5" /></pattern><pattern id="sapIllus_PatternHighlight" data-name="sapIllus_PatternHighlight" width="3" height="5.5" patternTransform="translate(35.9059 309.6208)" patternUnits="userSpaceOnUse" viewBox="0 0 3 5.5"><rect class="sapIllus_NoColor sapIllus_NoColor_Fill" width="3" height="5.5" /><circle class="sapIllus_ObjectFillColor sapIllus_ObjectFillColor_Fill" cx="3.0001" cy="5.5001" r="0.5" /><circle class="sapIllus_ObjectFillColor sapIllus_ObjectFillColor_Fill" cx="0.0001" cy="5.5001" r="0.5" /><circle class="sapIllus_ObjectFillColor sapIllus_ObjectFillColor_Fill" cx="1.5001" cy="2.7501" r="0.5" /><circle class="sapIllus_ObjectFillColor sapIllus_ObjectFillColor_Fill" cx="3.0001" cy="0.0001" r="0.5" /><circle class="sapIllus_ObjectFillColor sapIllus_ObjectFillColor_Fill" cx="0.0001" cy="0.0001" r="0.5" /></pattern></defs>`}var d=s;l.default=d});
//# sourceMappingURL=IllustratedMessageTemplate.lit.js.map