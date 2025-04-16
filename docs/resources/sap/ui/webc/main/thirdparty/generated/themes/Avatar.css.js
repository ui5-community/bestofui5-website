sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/asset-registries/Themes","sap/ui/webc/common/thirdparty/theming/generated/themes/sap_fiori_3/parameters-bundle.css","./sap_fiori_3/parameters-bundle.css"],function(a,o,r,e){"use strict";Object.defineProperty(a,"__esModule",{value:true});a.default=void 0;r=t(r);e=t(e);function t(a){return a&&a.__esModule?a:{default:a}}(0,o.registerThemePropertiesLoader)("@ui5/webcomponents-theming","sap_fiori_3",async()=>r.default);(0,o.registerThemePropertiesLoader)("@ui5/webcomponents","sap_fiori_3",async()=>e.default);const i={packageName:"@ui5/webcomponents",fileName:"themes/Avatar.css",content:':host(:not([hidden])){box-sizing:border-box;display:inline-block;position:relative}:host(:not([hidden]).ui5_hovered){opacity:.7}:host(:not([hidden]):not([pressed]):hover){box-shadow:var(--ui5-v1-18-0-avatar-hover-box-shadow-offset)}:host(:not([hidden])[focused]:not([pressed])){outline:var(--_ui5-v1-18-0_avatar_outline);outline-offset:var(--_ui5-v1-18-0_avatar_focus_offset)}:host(:not([disabled])[interactive]){cursor:pointer}:host([disabled]){opacity:var(--sapContent_DisabledOpacity)}:host(:not([hidden])[pressed]){background:var(--sapButton_Active_Background);border-color:var(--sapButton_Active_BorderColor);color:var(--sapButton_Active_TextColor)}:host(:not([hidden])[pressed]:hover){background:var(--sapButton_Selected_Hover_Background);border-color:var(--sapButton_Selected_Hover_BorderColor);color:var(--sapButton_Selected_TextColor)}:host{border:var(--ui5-v1-18-0-avatar-initials-border);border-radius:50%;color:var(--ui5-v1-18-0-avatar-initials-color);height:3rem;outline:none;width:3rem}.ui5-avatar-root{align-items:center;display:flex;height:100%;justify-content:center;outline:none;width:100%}:host([_size=XS]),:host([size=XS]){font-size:var(--_ui5-v1-18-0_avatar_fontsize_XS);height:2rem;min-height:2rem;min-width:2rem;width:2rem}:host([_size=S]),:host([size=S]){font-size:var(--_ui5-v1-18-0_avatar_fontsize_S);min-height:3rem;min-width:3rem}:host([_size=M]),:host([size=M]){font-size:var(--_ui5-v1-18-0_avatar_fontsize_M);min-height:4rem;min-width:4rem}:host([_size=L]),:host([size=L]){font-size:var(--_ui5-v1-18-0_avatar_fontsize_L);min-height:5rem;min-width:5rem}:host([_size=XL]),:host([size=XL]){font-size:var(--_ui5-v1-18-0_avatar_fontsize_XL);min-height:7rem;min-width:7rem}:host .ui5-avatar-icon{color:inherit;height:var(--_ui5-v1-18-0_avatar_fontsize_S);width:var(--_ui5-v1-18-0_avatar_fontsize_S)}:host([_size=XS]) .ui5-avatar-icon,:host([size=XS]) .ui5-avatar-icon{height:var(--_ui5-v1-18-0_avatar_icon_XS);width:var(--_ui5-v1-18-0_avatar_icon_XS)}:host([_size=S]) .ui5-avatar-icon,:host([size=S]) .ui5-avatar-icon{height:var(--_ui5-v1-18-0_avatar_icon_S);width:var(--_ui5-v1-18-0_avatar_icon_S)}:host([_size=M]) .ui5-avatar-icon,:host([size=M]) .ui5-avatar-icon{height:var(--_ui5-v1-18-0_avatar_icon_M);width:var(--_ui5-v1-18-0_avatar_icon_M)}:host([_size=L]) .ui5-avatar-icon,:host([size=L]) .ui5-avatar-icon{height:var(--_ui5-v1-18-0_avatar_icon_L);width:var(--_ui5-v1-18-0_avatar_icon_L)}:host([_size=XL]) .ui5-avatar-icon,:host([size=XL]) .ui5-avatar-icon{height:var(--_ui5-v1-18-0_avatar_icon_XL);width:var(--_ui5-v1-18-0_avatar_icon_XL)}::slotted(*){border-radius:50%;height:100%;pointer-events:none;width:100%}:host([shape=Square]){border-radius:var(--ui5-v1-18-0-avatar-border-radius)}:host([shape=Square]) ::slotted(*){border-radius:calc(var(--ui5-v1-18-0-avatar-border-radius) - var(--ui5-v1-18-0-avatar-border-radius-img-deduction))}:host(:not([_has-image])),:host(:not([color-scheme])),:host([_color-scheme=Accent6]),:host([ui5-avatar][color-scheme=Accent6]){background-color:var(--ui5-v1-18-0-avatar-accent6);border-color:var(--ui5-v1-18-0-avatar-accent6-border-color);color:var(--ui5-v1-18-0-avatar-accent6-color)}:host([_color-scheme=Accent1]),:host([ui5-avatar][color-scheme=Accent1]){background-color:var(--ui5-v1-18-0-avatar-accent1);border-color:var(--ui5-v1-18-0-avatar-accent1-border-color);color:var(--ui5-v1-18-0-avatar-accent1-color)}:host([_color-scheme=Accent2]),:host([ui5-avatar][color-scheme=Accent2]){background-color:var(--ui5-v1-18-0-avatar-accent2);border-color:var(--ui5-v1-18-0-avatar-accent2-border-color);color:var(--ui5-v1-18-0-avatar-accent2-color)}:host([_color-scheme=Accent3]),:host([ui5-avatar][color-scheme=Accent3]){background-color:var(--ui5-v1-18-0-avatar-accent3);border-color:var(--ui5-v1-18-0-avatar-accent3-border-color);color:var(--ui5-v1-18-0-avatar-accent3-color)}:host([_color-scheme=Accent4]),:host([ui5-avatar][color-scheme=Accent4]){background-color:var(--ui5-v1-18-0-avatar-accent4);border-color:var(--ui5-v1-18-0-avatar-accent4-border-color);color:var(--ui5-v1-18-0-avatar-accent4-color)}:host([_color-scheme=Accent5]),:host([ui5-avatar][color-scheme=Accent5]){background-color:var(--ui5-v1-18-0-avatar-accent5);border-color:var(--ui5-v1-18-0-avatar-accent5-border-color);color:var(--ui5-v1-18-0-avatar-accent5-color)}:host([_color-scheme=Accent7]),:host([ui5-avatar][color-scheme=Accent7]){background-color:var(--ui5-v1-18-0-avatar-accent7);border-color:var(--ui5-v1-18-0-avatar-accent7-border-color);color:var(--ui5-v1-18-0-avatar-accent7-color)}:host([_color-scheme=Accent8]),:host([ui5-avatar][color-scheme=Accent8]){background-color:var(--ui5-v1-18-0-avatar-accent8);border-color:var(--ui5-v1-18-0-avatar-accent8-border-color);color:var(--ui5-v1-18-0-avatar-accent8-color)}:host([_color-scheme=Accent9]),:host([ui5-avatar][color-scheme=Accent9]){background-color:var(--ui5-v1-18-0-avatar-accent9);border-color:var(--ui5-v1-18-0-avatar-accent9-border-color);color:var(--ui5-v1-18-0-avatar-accent9-color)}:host([_color-scheme=Accent10]),:host([ui5-avatar][color-scheme=Accent10]){background-color:var(--ui5-v1-18-0-avatar-accent10);border-color:var(--ui5-v1-18-0-avatar-accent10-border-color);color:var(--ui5-v1-18-0-avatar-accent10-color)}:host([_color-scheme=Placeholder]),:host([ui5-avatar][color-scheme=Placeholder]){background-color:var(--ui5-v1-18-0-avatar-placeholder);border-color:var(--ui5-v1-18-0-avatar-placeholder-border-color);color:var(--ui5-v1-18-0-avatar-placeholder-color)}:host([_has-image]){background-color:transparent;color:var(--ui5-v1-18-0-avatar-accent10-color);vertical-align:middle}.ui5-avatar-initials{color:inherit}.ui5-avatar-icon~.ui5-avatar-icon-fallback,.ui5-avatar-icon~.ui5-avatar-initials{display:none}.ui5-avatar-initials:not(.ui5-avatar-initials-hidden)+.ui5-avatar-icon-fallback{display:none}.ui5-avatar-initials-hidden{pointer-events:none;position:absolute;visibility:hidden;z-index:0}::slotted([slot=badge]){background:var(--sapButton_Emphasized_Background);border:var(--sapButton_Emphasized_Background);border-radius:1rem;bottom:0;color:var(--sapContent_BadgeTextColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSmallSize);height:1.125rem;justify-content:center;position:absolute;right:0;width:1.125rem}::slotted([ui5-badge][slot=badge]){padding:.1875rem}:host([_size=L]) ::slotted([slot=badge]),:host([size=L]) ::slotted([slot=badge]){height:1.25rem;width:1.25rem}:host([_size=XL]) ::slotted([slot=badge]),:host([size=XL]) ::slotted([slot=badge]){height:1.75rem;padding:.375rem;width:1.75rem}:host([shape=Square]) ::slotted([slot=badge]){bottom:-.125rem;right:-.125rem}:host([_size=L][shape=Square]) ::slotted([slot=badge]),:host([size=L][shape=Square]) ::slotted([slot=badge]){bottom:-.1875rem;right:-.1875rem}:host([_size=XL][shape=Square]) ::slotted([slot=badge]),:host([size=XL][shape=Square]) ::slotted([slot=badge]){bottom:-.25rem;right:-.25rem}'};var c=i;a.default=c});
//# sourceMappingURL=Avatar.css.js.map