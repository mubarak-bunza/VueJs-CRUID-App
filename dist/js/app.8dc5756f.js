(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"026f":function(t,e){},"16ec":function(t,e,a){"use strict";var n=a("39f1"),r=a.n(n);r.a},"39f1":function(t,e,a){},"448f":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container "},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[n("img",{attrs:{src:a("cf05"),width:"30",height:"30",alt:"vue-js"}}),t._v(" My VueJs CRUID App ")])]),n("hr",{staticClass:"my-0"})])}];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}))},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container my-4 bg-color",attrs:{id:"app"}},[a("app-navbar"),a("app-content")],1)},o=[],i=a("d000"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid py-4"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8"},[n("div",{staticClass:"jumbotron"},[n("table",{staticClass:"table table-hover"},[n("caption",[t._v(t._s(t.candidates.length)+" Candidate Screened with total score of "+t._s(t.totalScore))]),t._m(0),n("tbody",t._l(t.candidates,(function(e,r){return n("tr",{key:r},[n("th",{attrs:{scope:"row"}},[t._v(t._s(r+1))]),n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.city))]),n("td",[t._v(t._s(e.role))]),n("td",[t._v(t._s(e.score))]),n("td",[n("button",{staticClass:"my-btn btn btn-danger mr-2",on:{click:function(e){return t.removeCandidate(r)}}},[n("img",{attrs:{src:a("af22"),alt:"trash-icon",width:"25",height:"25",title:"Remove"}})]),n("button",{staticClass:"my-btn btn btn-info",on:{click:function(a){return t.editCandidate(e)}}},[n("img",{attrs:{src:a("e51f"),alt:"pencil-icon",width:"25",height:"25",title:"Edit"}})])])])})),0)])])]),n("div",{staticClass:"col-md-4"},[n("form",[n("div",{staticClass:"form-row"},[n("div",{staticClass:"form-group col-md-12"},[n("label",{attrs:{for:"name"}},[t._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.candidateForm.name,expression:"candidateForm.name"}],staticClass:"form-control",attrs:{type:"text",id:"name",required:""},domProps:{value:t.candidateForm.name},on:{input:function(e){e.target.composing||t.$set(t.candidateForm,"name",e.target.value)}}})]),n("div",{staticClass:"form-group col-md-12"},[n("label",{attrs:{for:"city"}},[t._v("City")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.candidateForm.city,expression:"candidateForm.city"}],staticClass:"form-control",attrs:{type:"text",id:"city",required:""},domProps:{value:t.candidateForm.city},on:{input:function(e){e.target.composing||t.$set(t.candidateForm,"city",e.target.value)}}})])]),n("div",{staticClass:"form-row"},[n("div",{staticClass:"form-group col-md-6"},[n("label",{attrs:{for:"role"}},[t._v("Role")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.candidateForm.role,expression:"candidateForm.role"}],staticClass:"form-control",attrs:{type:"text",id:"role",required:""},domProps:{value:t.candidateForm.role},on:{input:function(e){e.target.composing||t.$set(t.candidateForm,"role",e.target.value)}}})]),n("div",{staticClass:"form-group col-md-6"},[n("label",{attrs:{for:"score"}},[t._v("Score")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.candidateForm.score,expression:"candidateForm.score"}],staticClass:"form-control",attrs:{type:"text",id:"score",required:""},domProps:{value:t.candidateForm.score},on:{input:function(e){e.target.composing||t.$set(t.candidateForm,"score",e.target.value)}}})])]),n("div",{staticClass:"form-group float-right"},[t.flag?n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.addCandidate()}}},[t._v("Submit")]):n("button",{staticClass:"btn btn-info",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.editCandidate(e)}}},[t._v("Update")]),n("button",{staticClass:"btn btn-danger ml-2",attrs:{type:"reset"}},[t._v("Reset")])])])])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("S/N")]),a("th",{attrs:{scope:"col"}},[t._v("Name")]),a("th",{attrs:{scope:"col"}},[t._v("City")]),a("th",{attrs:{scope:"col"}},[t._v("Role")]),a("th",{attrs:{scope:"col"}},[t._v("Score")]),a("th",{attrs:{scope:"col"}},[t._v("Action")])])])}],l=(a("a434"),a("b0c0"),a("3d20")),d=a.n(l),u={name:"contents",components:{},data:function(){return{candidates:[{name:"Mark Otto",city:"Lagos",role:"DevOps",score:40},{name:"Amanie Sandy",city:"Uyo",role:"PHP Devloper",score:45},{name:"Gift Jonah",city:"Itam",role:"JS Developer",score:40}],candidateForm:{name:null,city:null,role:null,score:null},flag:!0}},computed:{totalScore:function(){for(var t=0,e=0;e<this.candidates.length;e++)t+=parseInt(this.candidates[e].score);return t}},methods:{addCandidate:function(){if(null!=this.candidateForm.name&&null!=this.candidateForm.score)this.candidates.push(this.candidateForm),this.candidateForm={},d.a.fire("Success!","Candidate added successfully!","success");else{var t=d.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,onOpen:function(t){t.addEventListener("mouseenter",d.a.stopTimer),t.addEventListener("mouseleave",d.a.resumeTimer)}});t.fire({icon:"error",title:"Fields can not be empty!"})}},editCandidate:function(t){this.flag=!this.flag,this.candidateForm=t},updateCandidate:function(){},removeCandidate:function(t){var e=this;d.a.fire({title:"Are you sure?",text:"You want to remove this user!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, remove!"}).then((function(a){a.value&&(d.a.fire("Deleted!","Candidate has been deleted.","success"),e.candidates.splice(t,1))}))}}},f=u,m=(a("16ec"),a("2877")),p=Object(m["a"])(f,s,c,!1,null,"46e64f71",null),v=p.exports,b={name:"app",components:{"app-navbar":i["default"],"app-content":v}},h=b,g=(a("5c0b"),Object(m["a"])(h,r,o,!1,null,null,null)),y=g.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},"9c0c":function(t,e,a){},af22:function(t,e,a){t.exports=a.p+"img/trash.4a3cd9fb.svg"},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},d000:function(t,e,a){"use strict";var n=a("448f"),r=a("e03c"),o=a("2877"),i=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,"e52857b8",null);e["default"]=i.exports},e03c:function(t,e,a){"use strict";var n=a("026f"),r=a.n(n);e["default"]=r.a},e51f:function(t,e,a){t.exports=a.p+"img/pencil.aa5337db.svg"}});
//# sourceMappingURL=app.8dc5756f.js.map