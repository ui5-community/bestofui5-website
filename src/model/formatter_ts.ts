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

	getKeyValue(event: any): any {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		const key = this.getBinding("title").getContext().getPath().split("/")[4];
		return key;
	},
};
