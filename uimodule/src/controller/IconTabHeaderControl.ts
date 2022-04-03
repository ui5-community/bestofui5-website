import Sorter from "sap/ui/model/Sorter";

export default class IconTabHeaderControl {
  public static onTabHeaderselect(event, that): void {
    const oTab = event.getSource();
    const oTabKey = oTab.getSelectedKey();
    let list = that.getView().byId("packagesView").byId("_IDGenList1");
    let binding = list.getBinding("items");

    switch (oTabKey) {
      case "hot":
        this.setViewToPackages(true, that);
        that.getRouter().getHashChanger().setHash("");
        let oSorterHot = new Sorter({
          path: "downloads",
          descending: true,
        });
        binding.sort(oSorterHot);
        break;
      case "recently":
        this.setViewToPackages(true, that);
        let oSorterRecent = new Sorter({
          path: "createdAt",
          descending: true,
        });
        binding.sort(oSorterRecent);
        break;
      case "all":
        this.setViewToPackages(true, that);
        let oSorterAll = new Sorter({
          path: "downloads",
          descending: true,
        });
        binding.sort(oSorterAll);
        break;
      case "tags":
        this.setViewToPackages(false, that);
        that.getRouter().getHashChanger().setHash("tags");
        break;
      default: {
        //statements;
        break;
      }
    }
  }

  private static setViewToPackages(setToPackageView, that): void {
    that.getOwnerComponent().getModel("settings").setProperty("/packagesVisible", setToPackageView);
    that.getOwnerComponent().getModel("settings").setProperty("/tagsVisible", !setToPackageView);
  }
}
