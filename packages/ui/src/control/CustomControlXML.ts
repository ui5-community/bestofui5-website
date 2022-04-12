import Control from "sap/ui/core/Control";
import CustomControlXMLRenderer from "./CustomControlXMLRenderer";

/**
 * @namespace org.openui5.ui5community.control.CustomControlXML
 */

export default class CustomControlXML extends Control {
  // The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
  constructor(idOrSettings?: string | $CustomControlXMLSettings);
  constructor(id?: string, settings?: $CustomControlXMLSettings);
  constructor(id?: string, settings?: $CustomControlXMLSettings) {
    super(id, settings);
  }

  static readonly metadata = {
    properties: {
      properties: {

        /**
				 * Renderer
				 */
				renderer: {
					type: "org.openui5.ui5community.control.CustomControlXMLRenderer",
					defaultValue: CustomControlXMLRenderer
				},
        /**
         * Width
         */
        width: {
          type: "sap.ui.core.CSSSize",
          defaultValue: "100%",
        },

        /**
         * Height
         */
        height: {
          type: "sap.ui.core.CSSSize",
          defaultValue: "auto",
        },
      },
    },
  };

  init = function (): void {
    // load fragment controls
    this._aFragmentControls = this._loadFragmentControls();

    // connect models / enable data binding for fragment controls
    this._aFragmentControls.forEach(function (oFragmentControl) {
      this.addDependent(oFragmentControl);
    }, this);
  };

  _loadFragmentControls = function (): any[] {
    let vFragment = null;

    const sFragmentContent = this.getFragmentContent();
    if (sFragmentContent) {

        // load fragment content
        const oFragmentConfig = {
            sId: this.getId(),
            fragmentContent: sFragmentContent
        };
        vFragment = sap.ui.xmlfragment(oFragmentConfig, this);

    } else {

        // load fragment by name
        vFragment = sap.ui.xmlfragment(this.getId(), this.getFragmentName(), this);
    }

    // ensure array
    const aFragmentControls = Array.isArray(vFragment) ? vFragment : [vFragment];

    return aFragmentControls;
  };

  getFragmentName = function (): void {
			// default: fragment for control, e.g. some/namespace/MyControl.js -> some/namespace/MyControl.fragment.xml
			return this.getMetadata().getName();
  };
  getFragmentContent = function (): void {
			// default: undefined
			return;
  };
}
