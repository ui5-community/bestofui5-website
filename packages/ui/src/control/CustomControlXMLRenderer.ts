import Control from  "sap/ui/core/Control";
import RenderManager from "sap/ui/core/RenderManager";

/**
 * @namespace org.openui5.ui5community.control.CustomControlXMLRenderer
 */

export default class CustomControlXMLRenderer extends Control {

    // The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
	constructor(idOrSettings?: string | $CustomControlXMLRendererSettings);
	constructor(id?: string, settings?: $CustomControlXMLRendererSettings);
	constructor(id?: string, settings?: $CustomControlXMLRendererSettings) { super(id, settings); }


    static renderer = {
		apiVersion: 2,
		render: function (rm: RenderManager, control: CustomControlXMLRenderer): void {
			// return immediately if control is invisible, do not render any HTML
			if (!CustomControlXMLRenderer.getVisible()) {
				return;
			}

			// start opening tag
			RenderManager.write("<div");

			// write control data
			RenderManager.writeControlData(CustomControlXMLRenderer);

			// write classes
			RenderManager.writeClasses();

			// write styles
			RenderManager.addStyle("width", CustomControlXMLRenderer.getWidth());
			RenderManager.addStyle("height", CustomControlXMLRenderer.getHeight());
			RenderManager.writeStyles();

			// end opening tag
			RenderManager.write(">");

			// render fragment controls (@see sap.ui.fragment.FragmentControl.metadata.properties._aFragmentControls)
			if (Array.isArray(CustomControlXMLRenderer._aFragmentControls)) {
				CustomControlXMLRenderer._aFragmentControls.forEach(function(oFragmentControl) {
					RenderManager.renderControl(oFragmentControl);
				});
			}

			// write closing tag
			RenderManager.write("</div>");
		}
	};

}