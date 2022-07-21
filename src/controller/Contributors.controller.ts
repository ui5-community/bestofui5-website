import FlexBox from "sap/m/FlexBox";
import Event from "sap/ui/base/Event";
import JSONModel from "sap/ui/model/json/JSONModel";
import BaseController from "./BaseController";

/**
 * @namespace org.openui5.bestofui5.controller
 */
export default class Timeline extends BaseController {
	public onInit(): void {
		this.getRouter().getRoute("contributors").attachPatternMatched(this.onPatternMatched, this);
		const jsonModel = new JSONModel();
		jsonModel.setData({
			direction: "Row",
			wrap: "Wrap",
		});
		this.getView().setModel(jsonModel, "contributorsView");
	}

	public onPatternMatched(event: Event): void {
		(this.getView().getModel("settings") as JSONModel).setProperty("/headerKey", "contributors");
		this.getView().getParent().getParent().getParent().scrollTo(this.getView().getModel("scrollState").getProperty("/contributors"));
	}

	private onExpandDetails(event: Event): void {
		const viewModel = this.getView().getModel("contributorsView") as JSONModel;
		const flexBox = this.getView().byId("contributorsFlexBox") as FlexBox;
		const direction = flexBox.getDirection();
		if (direction === "Column") {
			viewModel.setProperty("/direction", "Row");
			viewModel.setProperty("/wrap", "Wrap");
		} else {
			viewModel.setProperty("/direction", "Column");
			viewModel.setProperty("/wrap", "NoWrap");
		}
	}
}
