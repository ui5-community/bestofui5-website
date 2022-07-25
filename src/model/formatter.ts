import { DeviationIndicator } from "sap/m/library";

export default {
	/**
	 * Rounds the currency value to 2 digits
	 *
	 * @public
	 * @param {string} value value to be formatted
	 * @returns {string} formatted currency value with 2 digits
	 */
	formatValue(value: string): string {
		if (!value) {
			return "";
		}
		try {
			return parseFloat(value).toFixed(2);
		} catch (error) {
			return value;
		}
	},

	formatRank(rank: number): number {
		return +rank + 1;
	},

	formatIndicator(rank: number, pastRank: number): DeviationIndicator {
		if (rank < pastRank || isNaN(pastRank)) {
			return DeviationIndicator.Up;
		}
		if (rank > pastRank) {
			return DeviationIndicator.Down;
		}
		return DeviationIndicator.None;
	},

	formatPastRankTooltip(pastRank: number): string {
		const resourceBundle = this.getView().getModel("i18n").getResourceBundle();
		if (isNaN(pastRank)) {
			return resourceBundle.getText("noPrevListing");
		}
		return resourceBundle.getText("prevListing", [+pastRank + 1]);
	},

	isPresent(value: string): boolean {
		return !!value;
	},

	containsNpmPackages(allItem: Array<any>): boolean {
		return (
			allItem &&
			allItem.some(function (item) {
				return item.type === "npm-package";
			})
		);
	},

	formatHighlight(string: string, highlight: string): string {
		if (!string) {
			return "";
		}
		if (!highlight) {
			return string;
		}
		const start = string.toLowerCase().indexOf(highlight.toLowerCase());
		if (start >= 0) {
			const end = start + highlight.length;
			return `${string.slice(0, start)}<em>${string.slice(start, end)}</em>${string.slice(end)}`;
		}
		return string;
	},

	containsDockerImages(allItem: Array<any>): boolean {
		return (
			allItem &&
			allItem.some(function (item) {
				return item.type === "docker-image";
			})
		);
	},

	containsPypiPackages(allItem: Array<any>): boolean {
		return (
			allItem &&
			allItem.some(function (item) {
				return item.type === "pypi-package";
			})
		);
	},

	containsCodeRepositories(allItem: Array<any>): boolean {
		return (
			allItem &&
			allItem.some(function (item) {
				return item.type === "code-repository";
			})
		);
	},

	formatUpdatedAtIcon(updatedAt: string): string {
		// calculate the time difference in years between the current date and updatedAt
		const currentDate = new Date();
		const updatedAtDate = new Date(updatedAt);
		const timeDiff = Math.abs(currentDate.getTime() - updatedAtDate.getTime());
		const diffYears = timeDiff / (1000 * 3600 * 24 * 365);
		if (diffYears < 1) {
			return "";
		}
		if (diffYears >= 1 && diffYears < 2) {
			return "sap-icon://warning";
		}
		if (diffYears >= 2) {
			return "sap-icon://error";
		}
	},
	formatUpdatedAtState(updatedAt: string): string {
		// calculate the time difference in years between the current date and updatedAt
		const currentDate = new Date();
		const updatedAtDate = new Date(updatedAt);
		const timeDiff = Math.abs(currentDate.getTime() - updatedAtDate.getTime());
		const diffYears = timeDiff / (1000 * 3600 * 24 * 365);
		if (diffYears < 1) {
			return "None";
		}
		if (diffYears >= 1 && diffYears < 2) {
			return "Warning";
		}
		if (diffYears >= 2) {
			return "Error";
		}
	},

	formatTimelineIcon(type: string): string {
		switch (type) {
			case "module":
				return "sap-icon://font-awesome-icons/code";
			case "middleware":
				return "sap-icon://font-awesome-icons/server";
			case "task":
				return "sap-icon://font-awesome-icons/list-check";
			case "customControl":
				return "sap-icon://font-awesome-icons/gamepad";
			case "generator":
				return "sap-icon://font-awesome-icons/robot";
			case "tooling":
				return "sap-icon://font-awesome-icons/screwdriver";
			case "vscode":
				return "sap-icon://font-awesome-icons/microsoft";
			case "application":
				return "sap-icon://font-awesome-icons/window-maximize";
			case "library":
				return "sap-icon://font-awesome-icons/book";
			case "command":
				return "sap-icon://font-awesome-icons/terminal";
			default:
				return "";
		}
	},
};
