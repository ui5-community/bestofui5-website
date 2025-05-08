"use strict";

sap.ui.define(["sap/m/library"], function (sap_m_library) {
  const DeviationIndicator = sap_m_library["DeviationIndicator"];
  var __exports = {
    /**
     * Rounds the currency value to 2 digits
     *
     * @public
     * @param {string} value value to be formatted
     * @returns {string} formatted currency value with 2 digits
     */
    formatValue(value) {
      if (!value) {
        return "";
      }
      try {
        return parseFloat(value).toFixed(2);
      } catch (error) {
        return value;
      }
    },
    formatRank(rank) {
      return +rank + 1;
    },
    formatIndicator(rank, pastRank) {
      if (rank < pastRank || isNaN(pastRank)) {
        return DeviationIndicator.Up;
      }
      if (rank > pastRank) {
        return DeviationIndicator.Down;
      }
      return DeviationIndicator.None;
    },
    formatPastRankTooltip(pastRank) {
      const resourceBundle = this.getView().getModel("i18n").getResourceBundle();
      if (isNaN(pastRank)) {
        return resourceBundle.getText("noPrevListing");
      }
      return resourceBundle.getText("prevListing", [+pastRank + 1]);
    },
    isPresent(value) {
      return !!value;
    },
    containsNpmPackages(allItem) {
      return allItem && allItem.some(function (item) {
        return item.type === "npm-package";
      });
    },
    formatHighlight(string, highlight) {
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
    containsDockerImages(allItem) {
      return allItem && allItem.some(function (item) {
        return item.type === "docker-image";
      });
    },
    containsPypiPackages(allItem) {
      return allItem && allItem.some(function (item) {
        return item.type === "pypi-package";
      });
    },
    containsCodeRepositories(allItem) {
      return allItem && allItem.some(function (item) {
        return item.type === "code-repository";
      });
    },
    formatUpdatedAtIcon(updatedAt) {
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
    formatUpdatedAtState(updatedAt) {
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
    formatTimelineIcon(type) {
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
    }
  };
  return __exports;
});
//# sourceMappingURL=formatter.js.map