/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log"],function(e){"use strict";function n(n,t){if(n!==undefined){const r=t.name?`'${t.name}' `:"";if(typeof n.then==="function"){n.catch(n=>{e.error(`The registered Event Listener ${r}of '${t.component}' failed.`,n)})}e.error(`[FUTURE FATAL] The registered Event Listener ${r}must not have a return value.`,t.component)}}return n});
//# sourceMappingURL=_enforceNoReturnValue.js.map