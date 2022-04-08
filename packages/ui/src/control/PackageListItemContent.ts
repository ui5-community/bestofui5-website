import Control from  "sap/ui/core/Control";
import RenderManager from "sap/ui/core/RenderManager";
import CustomControlXML from "./CustomControlXML";
import XMLComposite from "sap/ui/core/XMLComposite";

/**
 * @namespace org.openui5.ui5community.control
 */

export default class PackageListItemContent extends XMLComposite {

    // The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
	constructor(idOrSettings?: string | $PackageListItemContentSettings);
	constructor(id?: string, settings?: $PackageListItemContentSettings);
	constructor(id?: string, settings?: $PackageListItemContentSettings) { super(id, settings); }

    static readonly metadata = {
		properties: {
            name: { type: "string" },
            description: { type: "string" },
            githublink: { type: "string" },
            npmlink: { type: "string" },
            type: { type: "string" },
            tags: { type: "array" },
            stars: { type: "string" },
            forks: { type: "string" },
            downloads: { type: "string" },
            createdAt: { type: "Date" },
            updatedAt: { type: "Date" },
            rank: { type: "int" },
            rankTooltip: { type: "string" },
            rankIndicator: { type: "sap.m.DeviationIndicator" },
            showRank : {type : "boolean", defaultValue : true},
            rankColor: { type: "sap.m.ValueColor" }, // this is a computed property
            typeImage: { type: "string" }, // this is a computed property
        },
	}

    // static renderer = {
	// 	apiVersion: 2,
	// 	render: function (rm: RenderManager, control: PackageListItemContent): void {
	// 		rm.openStart("div", control);
	// 		rm.openEnd();
	// 		rm.text("test");
	// 		rm.close("div");
	// 	}
	// };

}

PackageListItemContent.prototype.getFragmentName = function (type) {
    return "org.openui5.ui5community.control.PackageListItemContent";
};

PackageListItemContent.prototype.setType = function (type) {
    this.setProperty("type", type, true);
    const image =
        type === "code-repository"
            ? "resources/img/github.png"
            : type === "docker-image"
            ? "resources/img/docker.png"
            : type === "npm-package"
            ? "resources/img/npm.png"
            : type === "pypi-package"
            ? "resources/img/pypi.png"
            : "";
    this.setProperty("typeImage", image);
};

PackageListItemContent.prototype.setRankIndicator = function (
    indicator
) {
    this.setProperty("rankIndicator", indicator, true);
    if (indicator === sap.m.DeviationIndicator.Up) {
        this.setProperty("rankColor", sap.m.ValueColor.Good);
        return;
    }
    if (indicator === sap.m.DeviationIndicator.Down) {
        this.setProperty("rankColor", sap.m.ValueColor.Error);
        return;
    }
    this.setProperty("rankColor", sap.m.ValueColor.Neutral);
};