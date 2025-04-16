sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"], function (_exports, _LitRenderer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  /* eslint no-unused-vars: 0 */

  function block0(context, tags, suffix) {
    return (0, _LitRenderer.html)`<div class="ui5-wiz-root" aria-label="${(0, _LitRenderer.ifDefined)(this.ariaLabelText)}" role="region"><nav class="ui5-wiz-nav" part="navigator" aria-label="${(0, _LitRenderer.ifDefined)(this.navAriaLabelText)}" tabindex="-1"><div class="ui5-wiz-nav-list" role="list" aria-label="${(0, _LitRenderer.ifDefined)(this.listAriaLabelText)}" aria-describedby="wiz-nav-descr" aria-controls="${(0, _LitRenderer.ifDefined)(this._id)}-wiz-content">${(0, _LitRenderer.repeat)(this._stepsInHeader, (item, index) => item._id || index, (item, index) => block1.call(this, context, tags, suffix, item, index))}</div></nav><span id="wiz-nav-descr" class="ui5-hidden-text">${(0, _LitRenderer.ifDefined)(this.navAriaDescribedbyText)}</span><div id="${(0, _LitRenderer.ifDefined)(this._id)}-wiz-content" class="ui5-wiz-content" @scroll="${this.onScroll}">${(0, _LitRenderer.repeat)(this._steps, (item, index) => item._id || index, (item, index) => block2.call(this, context, tags, suffix, item, index))}</div></div>`;
  }
  function block1(context, tags, suffix, item, index) {
    return suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-wizard-tab", tags, suffix)} title-text="${(0, _LitRenderer.ifDefined)(item.titleText)}" subtitle-text="${(0, _LitRenderer.ifDefined)(item.subtitleText)}" icon="${(0, _LitRenderer.ifDefined)(item.icon)}" number="${(0, _LitRenderer.ifDefined)(item.number)}" ?disabled="${item.disabled}" ?selected="${item.selected}" ?hide-separator="${item.hideSeparator}" ?active-separator="${item.activeSeparator}" ?branching-separator="${item.branchingSeparator}" ._wizardTabAccInfo="${(0, _LitRenderer.ifDefined)(item.accInfo)}" data-ui5-content-ref-id="${(0, _LitRenderer.ifDefined)(item.refStepId)}" data-ui5-index="${(0, _LitRenderer.ifDefined)(item.pos)}" _tab-index="${(0, _LitRenderer.ifDefined)(item.tabIndex)}" @ui5-selection-change-requested="${(0, _LitRenderer.ifDefined)(this.onSelectionChangeRequested)}" @ui5-focused="${(0, _LitRenderer.ifDefined)(this.onStepInHeaderFocused)}" @click="${this._onGroupedTabClick}" style=${(0, _LitRenderer.styleMap)(item.styles)}></${(0, _LitRenderer.scopeTag)("ui5-wizard-tab", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-wizard-tab title-text="${(0, _LitRenderer.ifDefined)(item.titleText)}" subtitle-text="${(0, _LitRenderer.ifDefined)(item.subtitleText)}" icon="${(0, _LitRenderer.ifDefined)(item.icon)}" number="${(0, _LitRenderer.ifDefined)(item.number)}" ?disabled="${item.disabled}" ?selected="${item.selected}" ?hide-separator="${item.hideSeparator}" ?active-separator="${item.activeSeparator}" ?branching-separator="${item.branchingSeparator}" ._wizardTabAccInfo="${(0, _LitRenderer.ifDefined)(item.accInfo)}" data-ui5-content-ref-id="${(0, _LitRenderer.ifDefined)(item.refStepId)}" data-ui5-index="${(0, _LitRenderer.ifDefined)(item.pos)}" _tab-index="${(0, _LitRenderer.ifDefined)(item.tabIndex)}" @ui5-selection-change-requested="${(0, _LitRenderer.ifDefined)(this.onSelectionChangeRequested)}" @ui5-focused="${(0, _LitRenderer.ifDefined)(this.onStepInHeaderFocused)}" @click="${this._onGroupedTabClick}" style=${(0, _LitRenderer.styleMap)(item.styles)}></ui5-wizard-tab>`;
  }
  function block2(context, tags, suffix, item, index) {
    return (0, _LitRenderer.html)`<div class="ui5-wiz-content-item" ?hidden="${item.disabled}" ?selected="${item.selected}" ?stretch="${item.stretch}" part="step-content" aria-label="${(0, _LitRenderer.ifDefined)(item.stepContentAriaLabel)}" role="region" data-ui5-content-item-ref-id="${(0, _LitRenderer.ifDefined)(item._id)}"><div class="ui5-wiz-content-item-wrapper"><slot name="${(0, _LitRenderer.ifDefined)(item._individualSlot)}"></slot></div></div>`;
  }
  var _default = block0;
  _exports.default = _default;
});