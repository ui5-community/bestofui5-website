import Control from "sap/ui/core/Control";
import RenderManager from "sap/ui/core/RenderManager";
import CustomControlXML from "./CustomControlXML";
import XMLComposite from "sap/ui/core/XMLComposite";

/**
 * @namespace org.openui5.bestofui5.control
 */

export default class PackageListItemContent extends XMLComposite {
	// The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
	constructor(idOrSettings?: string | $PackageListItemContentSettings);
	constructor(id?: string, settings?: $PackageListItemContentSettings);
	constructor(id?: string, settings?: $PackageListItemContentSettings) {
		super(id, settings);
	}

	static readonly metadata = {
		properties: {
			name: { type: "string" },
			description: { type: "string" },
			githublink: { type: "string" },
			vscodelink: { type: "string" },
			npmlink: { type: "string" },
			type: { type: "string" },
			tags: { type: "array" },
			stars: { type: "string" },
			forks: { type: "string" },
			downloads14: { type: "string" },
			downloads30: { type: "string" },
			downloads365: { type: "string" },
			vscodeInstalls: { type: "string" },
			downloadsMonthlyGrowth: { type: "string" },
			createdAt: { type: "Date" },
			updatedAt: { type: "Date" },
			addedToBoUI5: { type: "Date" },
		},
	};
}
