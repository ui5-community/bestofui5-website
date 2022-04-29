import array from "array";
import Date from "Date";
import { DeviationIndicator } from "sap/m/library";
import { ValueColor } from "sap/m/library";
import { $CustomControlXMLSettings } from "./CustomControlXML";

declare module "./PackageListItemContent" {
	/**
	 * Interface defining the settings object used in constructor calls
	 */
	interface $PackageListItemContentSettings extends $CustomControlXMLSettings {
		name?: string;
		description?: string;
		link?: string;
		type?: string;
		tags?: array;
		createdAt?: Date;
		updatedAt?: Date;
		rank?: number;
		rankTooltip?: string;
		rankIndicator?: DeviationIndicator;
		showRank?: boolean;
		rankColor?: ValueColor;
		typeImage?: string;
	}

	export default interface PackageListItemContent {
		// property: name
		getName(): string;
		setName(name: string): this;

		// property: description
		getDescription(): string;
		setDescription(description: string): this;

		// property: link
		getLink(): string;
		setLink(link: string): this;

		// property: type
		getType(): string;
		setType(type: string): this;

		// property: tags
		getTags(): array;
		setTags(tags: array): this;

		// property: createdAt
		getCreatedAt(): Date;
		setCreatedAt(createdAt: Date): this;

		// property: updatedAt
		getUpdatedAt(): Date;
		setUpdatedAt(updatedAt: Date): this;

		// property: rank
		getRank(): number;
		setRank(rank: number): this;

		// property: rankTooltip
		getRankTooltip(): string;
		setRankTooltip(rankTooltip: string): this;

		// property: rankIndicator
		getRankIndicator(): DeviationIndicator;
		setRankIndicator(rankIndicator: DeviationIndicator): this;

		// property: showRank
		getShowRank(): boolean;
		setShowRank(showRank: boolean): this;

		// property: rankColor
		getRankColor(): ValueColor;
		setRankColor(rankColor: ValueColor): this;

		// property: typeImage
		getTypeImage(): string;
		setTypeImage(typeImage: string): this;
	}
}
