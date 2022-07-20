/*!
 * OpenUI5
 * (c) Copyright 2009-2022 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/table/columnmenu/Entry"],function(t){"use strict";var e=t.extend("sap.m.table.columnmenu.QuickActionBase",{metadata:{abstract:true,library:"sap.m"}});e.prototype.getEffectiveQuickActions=function(){return[this]};e.prototype.setVisible=function(t){if(this.getVisible()==t){return this}this.setProperty("visible",t);this.getMenu()&&this.getMenu()._createQuickActionGrids();return this};return e});