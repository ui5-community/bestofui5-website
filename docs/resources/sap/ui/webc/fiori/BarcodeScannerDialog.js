/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/BarcodeScannerDialog"],function(e,a){"use strict";var r=e.extend("sap.ui.webc.fiori.BarcodeScannerDialog",{metadata:{library:"sap.ui.webc.fiori",tag:"ui5-barcode-scanner-dialog-ui5",events:{scanError:{parameters:{message:{type:"string"}}},scanSuccess:{parameters:{text:{type:"string"},rawBytes:{type:"object"}}}},methods:["close","show"]}});return r});
//# sourceMappingURL=BarcodeScannerDialog.js.map