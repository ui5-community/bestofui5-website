/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/changeHandler/CombineButtons","sap/m/changeHandler/SplitMenuButton","sap/ui/fl/changeHandler/BaseRename"],function(e,n,a){"use strict";return{hideControl:"default",unhideControl:"default",rename:a.createRenameChangeHandler({propertyName:"title",translationTextType:"XGRP"}),combineButtons:{changeHandler:e,layers:{CUSTOMER:false}},moveControls:"default",splitMenuButton:{changeHandler:n,layers:{CUSTOMER:false}}}},true);
//# sourceMappingURL=ObjectPageSubSection.flexibility.js.map