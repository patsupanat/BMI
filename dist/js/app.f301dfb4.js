(function(e){function t(t){for(var r,a,u=t[0],s=t[1],p=t[2],c=0,v=[];c<u.length;c++)a=u[c],i[a]&&v.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(v.length)v.shift()();return o.push.apply(o,p||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("BMI")]),n("div",[e._v("\n    ส่วนสูง : "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.height,expression:"height"}],attrs:{type:"number",min:"0"},domProps:{value:e.height},on:{input:function(t){t.target.composing||(e.height=t.target.value)}}}),n("br"),e._v("\n    น้ำหนัก : "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.weight,expression:"weight"}],attrs:{type:"number"},domProps:{value:e.weight},on:{input:function(t){t.target.composing||(e.weight=t.target.value)}}}),n("br"),e._v("\n    เพศ : ชาย "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.sex,expression:"sex"}],attrs:{type:"radio",value:"ชาย"},domProps:{checked:e._q(e.sex,"ชาย")},on:{change:function(t){e.sex="ชาย"}}}),e._v(" หญิง "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.sex,expression:"sex"}],attrs:{type:"radio",value:"หญิง"},domProps:{checked:e._q(e.sex,"หญิง")},on:{change:function(t){e.sex="หญิง"}}}),n("br"),e._v("\n    อายุ : "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"age"}],attrs:{type:"number"},domProps:{value:e.age},on:{input:function(t){t.target.composing||(e.age=t.target.value)}}})]),n("hr"),n("div",[n("h1",[e._v("Result")]),n("b",[e._v("ส่วนสูง")]),e._v(": "+e._s(e.height)+" "),n("br"),n("b",[e._v("น้ำหนัก")]),e._v(" : "+e._s(e.weight)+" "),n("br"),n("b",[e._v("เพศ")]),e._v(" : "+e._s(e.sex)+" "),n("br"),n("b",[e._v("อายุ")]),e._v(" : "+e._s(e.age)+" "),n("br"),n("hr"),n("h1",[e._v("bmi")]),n("h2",[e._v(e._s(e.bmi)+" : "+e._s(e.result))])])])},o=[],a={name:"app",data:function(){return{height:0,weight:0,sex:"ชาย",age:0}},computed:{bmi:function(){var e=this.weight/(this.height/100*this.height/100);return this.height/100*this.height/100==0?0:e.toFixed(2)},result:function(){return this.bmi<18.5?"น้ำหนักน้อย":this.bmi<25?"น้ำหนักปกติ":this.bmi<30?"น้ำหนักเกิน":this.bmi<40?"โรคอ้วน":"เป็นโรคอ้วนรักษายาก"}}},u=a,s=(n("034f"),n("2877")),p=Object(s["a"])(u,i,o,!1,null,null,null),l=p.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(l)}}).$mount("#app")},"64a9":function(e,t,n){}});
//# sourceMappingURL=app.f301dfb4.js.map