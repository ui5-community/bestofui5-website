/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["../_AnnotationHelperBasics","sap/base/Log","sap/ui/base/BindingParser","sap/ui/base/ManagedObject","sap/ui/base/SyncPromise","sap/ui/performance/Measurement"],function(e,t,n,r,a,i){"use strict";var s="sap.ui.model.odata.v4.AnnotationHelper",u=[s],o=s+"/getExpression",l=/^{@i18n>[^\\{}:]+}$/,c={And:"&&",Eq:"===",Ge:">=",Gt:">",Le:"<=",Lt:"<",Ne:"!==",Not:"!",Or:"||"},p=false,f={"Edm.Boolean":"boolean","Edm.Byte":"number","Edm.Date":"Date","Edm.DateTimeOffset":"DateTimeOffset","Edm.Decimal":"Decimal","Edm.Double":"number","Edm.Guid":"string","Edm.Int16":"number","Edm.Int32":"number","Edm.Int64":"Decimal","Edm.SByte":"number","Edm.Single":"number","Edm.String":"string","Edm.TimeOfDay":"TimeOfDay"},m={Bool:"Edm.Boolean",Float:"Edm.Double",Date:"Edm.Date",DateTimeOffset:"Edm.DateTimeOffset",Decimal:"Edm.Decimal",Guid:"Edm.Guid",Int:"Edm.Int64",Int32:"Edm.Int32",String:"Edm.String",TimeOfDay:"Edm.TimeOfDay"},d={boolean:false,Date:false,DateTimeOffset:true,Decimal:true,number:false,string:false,TimeOfDay:false},y;function g(e,t){return a.resolve().then(function(){h(e,t)})}function h(t,n){e.error(t,n,s)}y={adjustOperands:function(e,t){if(e.result!=="constant"&&e.category==="number"&&t.result==="constant"&&t.type==="Edm.Int64"){t.category="number"}if(e.result!=="constant"&&e.category==="Decimal"&&t.result==="constant"&&t.type==="Edm.Int32"){t.category="Decimal";t.type=e.type}},apply:function(t,n){var r=e.descend(t,"$Function","string");switch(r.value){case"odata.concat":return y.concat(n);case"odata.fillUriTemplate":return y.fillUriTemplate(n);case"odata.uriEncode":return y.uriEncode(n);default:return g(r,"unknown function: "+r.value)}},collection:function(t){var n;e.expectType(t,"array");n=t.value.map(function(n,r){return y.expression(e.descend(t,r,true),true)});return a.all(n).then(function(t){t=t.map(function(t){return e.resultToString(t,true,false,true)});return{result:"expression",value:"odata.collection(["+t.join(",")+"])"}})},concat:function(t){var n;e.expectType(t,"array");n=t.value.map(function(e,n){return y.parameter(t,n)});return a.all(n).then(function(n){var r,a,i;r=t.asExpression||n.some(function(e){return e.result==="expression"});a=n.filter(function(e){return e.type!=="edm:Null"}).map(function(n){if(r){y.wrapExpression(n)}return e.resultToString(n,r,t.complexBinding)});i=r?{result:"expression",value:a.join("+")}:{result:"composite",value:a.join("")};i.type="Edm.String";return i})},conditional:function(t,n){var r=t.complexBinding,i=r?Object.assign({},t,{complexBinding:false}):t;function s(t,n,r){return e.resultToString(y.wrapExpression(t),true,n,r)}return a.all([y.parameter(i,0,"Edm.Boolean"),y.parameter(t,1),n&&t.value.length===2?{result:"constant",type:"edm:Null",value:undefined}:y.parameter(t,2)]).then(function(e){var n=e[0],a=e[1],i=e[2],u=a.type;if(a.type==="edm:Null"){u=i.type}else if(i.type!=="edm:Null"&&a.type!==i.type){h(t,"Expected same type for second and third parameter, types are '"+a.type+"' and '"+i.type+"'")}return{result:"expression",type:u,value:s(n,false,true)+"?"+s(a,r)+":"+s(i,r)}})},constant:function(e,t){var n=e.value;if(t==="String"){if(l.test(n)){return{ignoreTypeInPath:true,result:"binding",type:"Edm.String",value:n.slice(1,-1)}}}return{result:"constant",type:m[t],value:n}},expression:function(t,n){var r=t.value,i=t,s;if(r===null){s="Null"}else if(typeof r==="boolean"){s="Bool"}else if(typeof r==="number"){s=isFinite(r)&&Math.floor(r)===r?"Int32":"Float"}else if(typeof r==="string"){s="String"}else if(Array.isArray(r)){return y.collection(t)}else{e.expectType(t,"object");if(r.$kind==="Property"){t.value=t.model.getObject(t.path+"@sapui.name");return y.path(t)}["$And","$Apply","$Date","$DateTimeOffset","$Decimal","$Float","$Eq","$Ge","$Gt","$Guid","$If","$Int","$Le","$Lt","$Name","$Ne","$Not","$Null","$Or","$Path","$PropertyPath","$TimeOfDay","$LabeledElement"].forEach(function(n){if(r.hasOwnProperty(n)){s=n.slice(1);i=e.descend(t,n)}})}switch(s){case"Apply":return y.apply(t,i);case"If":return y.conditional(i,n);case"Name":case"Path":case"PropertyPath":return y.path(i);case"Date":case"DateTimeOffset":case"Decimal":case"Guid":case"Int":case"String":case"TimeOfDay":e.expectType(i,"string");case"Bool":case"Float":case"Int32":return a.resolve(y.constant(i,s));case"And":case"Eq":case"Ge":case"Gt":case"Le":case"Lt":case"Ne":case"Or":return y.operator(i,s);case"Not":return y.not(i);case"Null":return a.resolve({result:"constant",type:"edm:Null",value:null});default:return g(t,"Unsupported OData expression")}},fetchCurrencyOrUnit:function(t,n,r,a){var i="sap.ui.model.odata.type.Unit",s="@@requestUnitsOfMeasure",u=t.model,o=t.path+"@Org.OData.Measures.V1.Unit/$Path",l=u.getObject(o);function c(n,r,a){return e.resultToString(y.pathResult(t,r,a,n),false,true)}if(!l){i="sap.ui.model.odata.type.Currency";s="@@requestCurrencyCodes";o=t.path+"@Org.OData.Measures.V1.ISOCurrency/$Path";l=u.getObject(o)}if(!l){return undefined}return u.fetchObject(o+"/$").then(function(e){var p=u.getObject(t.path+"@com.sap.vocabularies.UI.v1.DoNotCheckScaleOfMeasureQuantity")?",constraints:{'skipDecimalsValidation':true}":"";return{result:"composite",type:i,value:(f[r]==="number"?"{formatOptions:{parseAsString:false},":"{")+"mode:'TwoWay',parts:["+c(a,r,n)+","+c(u.getConstraints(e,o),e.$Type,l)+",{mode:'OneTime',path:'/##"+s+"',targetType:'any'}"+"],type:'"+i+"'"+p+"}"}})},fetchDateTimeWithTimezone:function(t,n,r){var a=t.model,i=t.path+"@com.sap.vocabularies.Common.v1.Timezone/$Path",s=a.getObject(i);function u(n,r,a){return e.resultToString(y.pathResult(t,r,a,n),false,true)}if(!s){return undefined}return a.fetchObject(i+"/$").then(function(e){return{result:"composite",type:"sap.ui.model.odata.type.DateTimeWithTimezone",value:"{mode:'TwoWay',parts:["+u(r,"Edm.DateTimeOffset",n)+","+u(a.getConstraints(e,i),e.$Type,s)+"],type:'sap.ui.model.odata.type.DateTimeWithTimezone'}"}})},fillUriTemplate:function(t){var n=[],r,i;t.complexBinding=false;r=[y.parameter(t,0,"Edm.String")];for(i=1;i<t.value.length;i+=1){n[i]=e.descend(t,i,"object");r.push(y.expression(e.descend(n[i],"$LabeledElement",true)))}return a.all(r).then(function(r){var a,s=[],u="";s.push("odata.fillUriTemplate(",e.resultToString(r[0],true,false,true),",{");for(i=1;i<t.value.length;i+=1){a=e.property(n[i],"$Name","string");s.push(u,e.toJSON(a),":",e.resultToString(r[i],true,false,true));u=","}s.push("})");return{result:"expression",type:"Edm.String",value:s.join("")}})},formatOperand:function(t,n){if(t.result==="constant"){switch(t.category){case"boolean":case"number":return String(t.value)}}if(n){y.wrapExpression(t)}return e.resultToString(t,true,false,true)},getExpression:function(a){if(a.value===undefined){return undefined}i.average(o,"",u);if(!p&&r.bindingParser===n.simpleParser){t.warning("Complex binding syntax not active",null,s);p=true}return y.expression(a).then(function(t){return e.resultToString(t,false,a.complexBinding)},function(t){if(t instanceof SyntaxError){return"Unsupported: "+n.complexParser.escape(e.toErrorString(a.value))}throw t}).finally(function(){i.end(o)}).unwrap()},not:function(t){t.asExpression=true;t.complexBinding=false;return y.expression(t).then(function(t){return{result:"expression",type:"Edm.Boolean",value:"!"+e.resultToString(y.wrapExpression(t),true,false,true)}})},operator:function(e,t){var n=t==="And"||t==="Or"?"Edm.Boolean":undefined;e.complexBinding=false;return a.all([y.parameter(e,0,n),y.parameter(e,1,n)]).then(function(n){var r,a=n[0],i=n[1],s="",u,o;if(a.type!=="edm:Null"&&i.type!=="edm:Null"){a.category=f[a.type];i.category=f[i.type];y.adjustOperands(a,i);y.adjustOperands(i,a);if(a.category!==i.category){h(e,"Expected two comparable parameters but instead saw "+a.type+" and "+i.type)}switch(a.category){case"Decimal":s=",'Decimal'";break;case"DateTimeOffset":s=",'DateTime'";break}r=d[a.category]}u=y.formatOperand(a,!r);o=y.formatOperand(i,!r);return{result:"expression",type:"Edm.Boolean",value:r?"odata.compare("+u+","+o+s+")"+c[t]+"0":u+c[t]+o}})},parameter:function(t,n,r){var a=e.descend(t,n,true);return y.expression(a).then(function(e){if(r&&r!==e.type){h(a,"Expected "+r+" but instead saw "+e.type)}return e})},path:function(t){var n=t.ignoreAsPrefix,r=t.model,i,s=t.value;if(n&&s.startsWith(n)){s=s.slice(n.length)}e.expectType(t,"string");i=r.fetchObject(t.path+"/$");if(i.isPending()&&!t.$$valueAsPromise){i.caught();i=a.resolve()}return i.then(function(e){var n,a,i=e&&e.$Type;if(e&&t.complexBinding){a=r.getConstraints(e,t.path);n=i==="Edm.DateTimeOffset"?y.fetchDateTimeWithTimezone(t,s,a):y.fetchCurrencyOrUnit(t,s,i,a)}return n||y.pathResult(t,i,s,a)})},pathResult:function(e,t,n,r){return{constraints:r,formatOptions:t==="Edm.String"?Object.assign({parseKeepsEmptyString:true},e.formatOptions):e.formatOptions,parameters:e.parameters,result:"binding",type:t,value:e.prefix+n}},uriEncode:function(t){return y.parameter(t,0).then(function(t){return{result:"expression",type:"Edm.String",value:t.type==="Edm.String"?"odata.uriEncode("+e.resultToString(t,true,false,true)+","+e.toJSON(t.type)+")":"String("+e.resultToString(t,true,false,true)+")"}})},wrapExpression:function(e){if(e.result==="expression"){e.value="("+e.value+")"}return e}};return y},false);
//# sourceMappingURL=_AnnotationHelperExpression.js.map