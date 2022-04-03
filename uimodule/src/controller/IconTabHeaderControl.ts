import Sorter from "sap/ui/model/Sorter";

export default class IconTabHeaderControl {
  public static onTabHeaderselect(event, that): void {
    const oTab = event.getSource();
    const oTabKey = oTab.getSelectedKey();
    let list = that.getView().byId("packagesView").byId("_IDGenList1");
    let binding = list.getBinding("items");

    switch (oTabKey) {
      case "hot":
        that.getOwnerComponent().getModel("settings").setProperty("/packagesVisible", true);
        that.getOwnerComponent().getModel("settings").setProperty("/tagsVisible", false);
        that.getRouter().getHashChanger().setHash("");
        let oSorterHot = new Sorter({
          path: "downloads",
          descending: true,
        });
        binding.sort(oSorterHot);
        break;
      case "recently":
        let oSorterRecent = new Sorter({
          path: "createdAt",
          descending: true,
        });
        binding.sort(oSorterRecent);
        break;
      case "all":
        let oSorterAll = new Sorter({
          path: "downloads",
          descending: true,
        });
        binding.sort(oSorterAll);
        break;
      case "tags":
        that.getOwnerComponent().getModel("settings").setProperty("/packagesVisible", false);
        that.getOwnerComponent().getModel("settings").setProperty("/tagsVisible", true);
        that.getRouter().getHashChanger().setHash("tags");
        break;
      default: {
        //statements;
        break;
      }
    }
  }
}
