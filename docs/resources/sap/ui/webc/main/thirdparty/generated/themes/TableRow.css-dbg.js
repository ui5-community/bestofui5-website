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
    fileName: "themes/TableRow.css",
    content: ":host{display:contents}:host([_busy]) .ui5-table-row-root{opacity:.72;pointer-events:none}.ui5-table-row-root{background-color:var(--sapList_Background);border-top:1px solid var(--sapList_BorderColor);color:var(--sapList_TextColor)}.ui5-table-row-root:focus{outline:var(--ui5-v1-18-0_table_row_outline_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:var(--ui5-v1-18-0_table_focus_outline_offset)}.ui5-table-popin-row{background-color:var(--sapList_Background)}.ui5-table-popin-row.all-columns-popped-in.popin-header{border-top:1px solid var(--sapList_BorderColor)}.ui5-table-popin-row td:not(.ui5-table-row-navigated){padding-top:.5rem;padding-inline-start:1rem}.ui5-table-popin-row:last-child td{padding-bottom:.5rem}.ui5-table-row-popin-title{color:var(--sapContent_LabelColor);font-family:\"72override\",var(--sapFontFamily);font-size:var(--sapFontSize)}.ui5-table-cell-display-inline{margin-inline-start:.5rem}.ui5-table-display-inline-container{align-items:center;display:flex}.ui5-table-multi-select-cell{box-sizing:border-box;padding:.25rem 0;text-align:center;vertical-align:middle}:host([mode=SingleSelect]) .ui5-table-row-root{cursor:pointer}:host([mode=MultiSelect]) .ui5-table-row-root .ui5-table-multi-select-cell{cursor:pointer}:host ::slotted([ui5-table-cell]:not([popined])){padding:.25rem .5rem}:host(:not([mode=MultiSelect])) ::slotted([ui5-table-cell]:not([popined]):first-child){padding-inline-start:1rem}:host([mode=SingleSelect]) .ui5-table-row-root:hover:not(:active),:host([type=Active]) .ui5-table-row-root:hover{background-color:var(--sapList_Hover_Background)}:host([selected][type=Active]) .ui5-table-row-root:active,:host([type=Active]) .ui5-table-row-root:active{background-color:var(--sapList_Active_Background)}:host([type=Active]) .ui5-table-row-root:active ::slotted([ui5-table-cell]){color:var(--sapList_Active_TextColor)}:host([selected]) .ui5-table-row-root:not(:active){background-color:var(--sapList_SelectionBackgroundColor);border-bottom:1px solid var(--sapList_SelectionBorderColor)}:host([selected][mode=SingleSelect]) .ui5-table-row-root:hover:not(:active),:host([selected][type=Active]) .ui5-table-row-root:hover:not(:active){background-color:var(--sapList_Hover_SelectionBackground)}:host([navigated]) .ui5-table-row-root:focus .ui5-table-div-navigated{bottom:1px;inset-inline-end:2px;top:2px;width:.09375rem}:host([navigated]) .ui5-table-row-navigated{padding:0;position:relative;vertical-align:middle}:host([navigated]) .ui5-table-div-navigated{background-color:var(--sapList_SelectionBorderColor);inset:0;position:absolute;width:.1875rem}"
  };
  var _default = styleData;
  _exports.default = _default;
});