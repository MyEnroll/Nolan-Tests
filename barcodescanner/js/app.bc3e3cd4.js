(function(e){function t(t){for(var n,i,c=t[0],l=t[1],u=t[2],d=0,s=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&s.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(t);while(s.length)s.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var l=r[c];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Prototypes/barcodereader/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:e.navDrawer,callback:function(t){e.navDrawer=t},expression:"navDrawer"}},[r("v-list",{attrs:{dense:""}},[r("v-list-item",{attrs:{link:""}},[r("v-list-item-action",[r("v-icon",[e._v("mdi-home")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v("Home")])],1)],1),r("v-list-item",{attrs:{link:""}},[r("v-list-item-action",[r("v-icon",[e._v("mdi-email")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v("Contact")])],1)],1)],1)],1),r("v-app-bar",{attrs:{app:"",color:"primary",dark:"","clipped-left":""}},[r("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.navDrawer=!e.navDrawer}}}),r("v-toolbar-title",[e._v("Undeliverable QELs")])],1),r("v-main",[r("barcodeEntry")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("dir",[r("div",[r("ImageBarcodeReader",{on:{decode:e.onDecode,error:e.onError}})],1),r("div",[r("v-quagga",{attrs:{onDetected:e.logIt,readerSize:e.readerSize,readerTypes:["ean_reader"]}})],1)])},c=[],l=r("8179"),u=r("f337");n["a"].use(l["a"]);var p={name:"barcodeEntry",data:function(){return{readerSize:{width:640,height:480},detecteds:[]}},components:{ImageBarcodeReader:u["a"]},methods:{logIt:function(e){alert("detected",e)},onDecode:function(e){alert(e)},onError:function(e){alert(e)}}},d=p,s=r("2877"),v=Object(s["a"])(d,i,c,!1,null,null,null),f=v.exports,m={name:"App",components:{barcodeEntry:f},data:function(){return{navDrawer:null}}},b=m,y=r("6544"),h=r.n(y),g=r("7496"),w=r("40dc"),_=r("5bc1"),O=r("132d"),V=r("8860"),j=r("da13"),D=r("1800"),I=r("5d23"),x=r("f6c4"),P=r("f774"),k=r("2a7f"),E=Object(s["a"])(b,a,o,!1,null,null,null),S=E.exports;h()(E,{VApp:g["a"],VAppBar:w["a"],VAppBarNavIcon:_["a"],VIcon:O["a"],VList:V["a"],VListItem:j["a"],VListItemAction:D["a"],VListItemContent:I["a"],VListItemTitle:I["b"],VMain:x["a"],VNavigationDrawer:P["a"],VToolbarTitle:k["a"]});var T=r("f309");n["a"].use(T["a"]);var L=new T["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:L,render:function(e){return e(S)}}).$mount("#app")}});
//# sourceMappingURL=app.bc3e3cd4.js.map