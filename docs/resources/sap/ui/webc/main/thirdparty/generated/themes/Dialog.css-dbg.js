sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/asset-registries/Themes", "sap/ui/webc/common/thirdparty/theming/generated/themes/sap_fiori_3/parameters-bundle.css", "./sap_fiori_3/parameters-bundle.css"], function (_exports, _Themes, _parametersBundle, _parametersBundle2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _parametersBundle = _interopRequireDefault(_parametersBundle);
  _parametersBundle2 = _interopRequireDefault(_parametersBundle2);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  (0, _Themes.registerThemePropertiesLoader)("@ui5/webcomponents-theming", "sap_fiori_3", async () => _parametersBundle.default);
  (0, _Themes.registerThemePropertiesLoader)("@ui5/webcomponents", "sap_fiori_3", async () => _parametersBundle2.default);
  const styleData = {
    packageName: "@ui5/webcomponents",
    fileName: "themes/Dialog.css",
    content: ".ui5-hidden-text{clip:rect(1px,1px,1px,1px);font-size:0;left:-1000px;pointer-events:none;position:absolute;top:-1000px;user-select:none}:host{border-radius:var(--sapElement_BorderCornerRadius);box-shadow:var(--sapContent_Shadow3);flex-direction:column;max-height:94%;max-width:90%;min-height:6rem;min-width:20rem}:host([stretch]){height:94%;width:90%}:host([stretch][on-phone]){border-radius:0;height:100%;max-height:100%;max-width:100%;width:100%}:host([draggable]) .ui5-popup-header-root,:host([draggable]) ::slotted([slot=header]){cursor:move}:host([draggable]) .ui5-popup-header-root *{cursor:auto}:host([draggable]) .ui5-popup-root{user-select:text}.ui5-popup-root{display:flex;flex-direction:column;max-width:100vw}.ui5-popup-header-root{position:relative}.ui5-popup-header-root:before{background:var(--sapObjectHeader_BorderColor);content:\"\";height:var(--_ui5-v1-18-0_dialog_header_state_line_height);inset-block-end:0;inset-block-start:auto;inset-inline-end:0;inset-inline-start:0;position:absolute}:host([state=Error]) .ui5-popup-header-root:before{background:var(--sapErrorBorderColor)}:host([state=Information]) .ui5-popup-header-root:before{background:var(--sapInformationBorderColor)}:host([state=Success]) .ui5-popup-header-root:before{background:var(--sapSuccessBorderColor)}:host([state=Warning]) .ui5-popup-header-root:before{background:var(--sapWarningBorderColor)}.ui5-dialog-value-state-icon{margin-inline-end:.5rem}:host([state=Error]) .ui5-dialog-value-state-icon{color:var(--_ui5-v1-18-0_dialog_header_error_state_icon_color)}:host([state=Information]) .ui5-dialog-value-state-icon{color:var(--_ui5-v1-18-0_dialog_header_information_state_icon_color)}:host([state=Success]) .ui5-dialog-value-state-icon{color:var(--_ui5-v1-18-0_dialog_header_success_state_icon_color)}:host([state=Warning]) .ui5-dialog-value-state-icon{color:var(--_ui5-v1-18-0_dialog_header_warning_state_icon_color)}.ui5-popup-header-root{outline:none}.ui5-popup-header-root:focus:after{border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5-v1-18-0_dialog_header_border_radius) var(--_ui5-v1-18-0_dialog_header_border_radius) 0 0;bottom:var(--_ui5-v1-18-0_dialog_header_focus_bottom_offset);content:\"\";left:var(--_ui5-v1-18-0_dialog_header_focus_left_offset);pointer-events:none;position:absolute;right:var(--_ui5-v1-18-0_dialog_header_focus_right_offset);top:var(--_ui5-v1-18-0_dialog_header_focus_top_offset)}:host([stretch]) .ui5-popup-content{height:100%;width:100%}.ui5-popup-content{flex:1 1 auto;min-height:var(--_ui5-v1-18-0_dialog_content_min_height)}.ui5-popup-resize-handle{bottom:var(--_ui5-v1-18-0_dialog_resize_handle_bottom);color:var(--_ui5-v1-18-0_dialog_resize_handle_color);cursor:var(--_ui5-v1-18-0_dialog_resize_cursor);inset-inline-end:var(--_ui5-v1-18-0_dialog_resize_handle_right);position:absolute}::slotted([slot=footer]){height:var(--_ui5-v1-18-0_dialog_footer_height)}::slotted([slot=footer][ui5-bar][design=Footer]){border-top:none}::slotted([slot=header][ui5-bar]){box-shadow:none}"
  };
  var _default = styleData;
  _exports.default = _default;
});