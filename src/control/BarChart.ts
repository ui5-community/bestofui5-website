/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import Control from "sap/ui/core/Control";
// https://www.chartjs.org/docs/latest/getting-started/integration.html#bundlers-webpack-rollup-etc
import Chart from "chart.js/auto";
import RenderManager from "sap/ui/core/RenderManager";

/**
 * @name org.openui5.bestofui5.control.BarChart
 */
export default class BarChart extends Control {
	private _chart: Chart;
	// The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
	constructor(idOrSettings?: string | $BarChartSettings);
	constructor(id?: string, settings?: $BarChartSettings);
	constructor(id?: string, settings?: $BarChartSettings) {
		super(id, settings);
	}

	static readonly metadata = {
		properties: {
			title: "string",
			color: "sap.ui.core.CSSColor",
		},
		aggregations: {
			records: {
				type: "org.openui5.bestofui5.control.ChartRecord",
			},
		},
		defaultAggregation: "records",
	};

	static renderer = {
		apiVersion: 2,
		render: (rm: RenderManager, chart: BarChart) => {
			rm.openStart("div", chart);
			rm.style("color", chart.getColor());
			rm.class("chartPadding");
			rm.openEnd();

			rm.openStart("canvas", chart.getId() + "-canvas");
			rm.openEnd();
			rm.close("canvas");

			rm.close("div");
		},
	};

	_getChartData() {
		const aRecords = this.getRecords();
		return {
			labels: aRecords.map((record) => {
				return record.getLabel();
			}),
			datasets: [
				{
					label: this.getTitle(),
					backgroundColor: this.getColor(),
					borderColor: this.getColor(),
					data: aRecords.map((record) => {
						return record.getValue();
					}),
				},
			],
		};
	}

	onAfterRendering() {
		if (!this._chart) {
			this._chart = new Chart(this.getDomRef("canvas") as HTMLCanvasElement, {
				type: "bar",
				data: this._getChartData(),
				options: {
					responsive: true,
					animation: false,
					scales: {
						x: {
							display: false,
						},
					},
				},
			});
		} else {
			this._chart.data = this._getChartData();
			this._chart.update();
		}
	}
}
