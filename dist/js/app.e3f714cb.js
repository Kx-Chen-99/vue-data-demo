(function(e){function t(t){for(var a,o,l=t[0],u=t[1],b=t[2],s=0,d=[];s<l.length;s++)o=l[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);i&&i(t);while(d.length)d.shift()();return c.push.apply(c,b||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,l=1;l<n.length;l++){var u=n[l];0!==r[u]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},c=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var b=0;b<l.length;b++)t(l[b]);var i=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function r(e,t,n,r,c,o){var l=Object(a["C"])("router-view");return Object(a["y"])(),Object(a["h"])("div",null,[Object(a["k"])(l)])}var c={name:"App"},o=n("6b0d"),l=n.n(o);const u=l()(c,[["render",r]]);var b=u,i=n("6c02"),s={class:"home"};function d(e,t,n,r,c,o){var l=Object(a["C"])("login");return Object(a["y"])(),Object(a["h"])("div",s,[Object(a["k"])(l)])}var f={class:"container fixed-center",style:{width:"40%"}},O=Object(a["i"])("div",{class:"text-h4 text-center q-pa-md"},"登  录",-1),j={class:"q-px-lg q-pb-lg q-gutter-y-lg"};function p(e,t,n,r,c,o){var l=Object(a["C"])("q-input"),u=Object(a["C"])("q-btn"),b=Object(a["C"])("q-card");return Object(a["y"])(),Object(a["h"])("div",f,[Object(a["k"])(b,null,{default:Object(a["H"])((function(){return[O,Object(a["i"])("div",j,[Object(a["k"])(l,{filled:"",modelValue:c.username,"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.username=e}),type:"text",label:"账号："},null,8,["modelValue"]),Object(a["k"])(l,{filled:"",modelValue:c.password,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.password=e}),type:"password",label:"密码："},null,8,["modelValue"]),Object(a["k"])(u,{class:"full-width",label:"登录",color:"positive",onClick:o.getLogin},null,8,["onClick"])])]})),_:1})])}var m={name:"login",data:function(){return{username:"",password:""}},methods:{getLogin:function(){this.$router.push("hello")}}},h=n("f09f"),g=n("27f9"),v=n("9c40"),k=n("93dc"),w=n.n(k);const y=l()(m,[["render",p]]);var C=y;w()(m,"components",{QCard:h["a"],QInput:g["a"],QBtn:v["a"]});var q={name:"Home",components:{login:C}};const x=l()(q,[["render",d]]);var _=x,H=n("84d7"),Q=n.n(H),V=Object(a["j"])("SPEC数据中台"),P={class:"q-gutter-sm row items-center no-wrap"},T=Object(a["j"])("欢迎，XXX！"),D=Object(a["i"])("img",{src:"https://cdn.quasar.dev/img/boy-avatar.png"},null,-1),S=Object(a["j"])("Account"),U=Object(a["i"])("div",null,"首页概览",-1),I=Object(a["i"])("div",null,"数据报表",-1);function L(e,t,n,r,c,o){var l=Object(a["C"])("q-btn"),u=Object(a["C"])("q-img"),b=Object(a["C"])("q-toolbar-title"),i=Object(a["C"])("q-space"),s=Object(a["C"])("q-avatar"),d=Object(a["C"])("q-tooltip"),f=Object(a["C"])("q-toolbar"),O=Object(a["C"])("q-header"),j=Object(a["C"])("q-tab"),p=Object(a["C"])("q-tabs"),m=Object(a["C"])("q-drawer"),h=Object(a["C"])("q-tab-panel"),g=Object(a["C"])("kanban"),v=Object(a["C"])("q-tab-panels"),k=Object(a["C"])("q-page-container"),w=Object(a["C"])("q-layout");return Object(a["y"])(),Object(a["g"])(w,{view:"hHh lpR fFf",class:"bg-grey-1"},{default:Object(a["H"])((function(){return[Object(a["k"])(O,{elevated:"",class:"bg-white text-grey-8 q-py-xs","height-hint":"58"},{default:Object(a["H"])((function(){return[Object(a["k"])(f,null,{default:Object(a["H"])((function(){return[Object(a["k"])(l,{flat:"",dense:"",round:"",onClick:o.toggleLeftDrawer,icon:"menu"},null,8,["onClick"]),Object(a["k"])(l,{flat:"","no-caps":"","no-wrap":"",class:"q-ml-xs"},{default:Object(a["H"])((function(){return[Object(a["k"])(u,{src:Q.a,style:{height:"28px","max-width":"28px"}}),Object(a["k"])(b,{shrink:"",class:"text-weight-bold",style:{width:"200px"}},{default:Object(a["H"])((function(){return[V]})),_:1})]})),_:1}),Object(a["k"])(i),Object(a["i"])("div",P,[Object(a["k"])(b,{class:"text-weight-bold"},{default:Object(a["H"])((function(){return[T]})),_:1}),Object(a["k"])(l,{round:"",flat:""},{default:Object(a["H"])((function(){return[Object(a["k"])(s,{size:"26px"},{default:Object(a["H"])((function(){return[D]})),_:1}),Object(a["k"])(d,null,{default:Object(a["H"])((function(){return[S]})),_:1})]})),_:1})])]})),_:1})]})),_:1}),Object(a["k"])(m,{modelValue:c.leftDrawerOpen,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.leftDrawerOpen=e}),"show-if-above":"",bordered:"",class:"bg-grey-2",width:200},{default:Object(a["H"])((function(){return[Object(a["k"])(p,{modelValue:c.tab,"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.tab=e}),vertical:"",class:"text-black","active-bg-color":"grey-4"},{default:Object(a["H"])((function(){return[Object(a["k"])(j,{name:"home",label:"首页概览"}),Object(a["k"])(j,{name:"list",label:"数据报表"}),Object(a["k"])(j,{name:"kanban",label:"数据看板"}),Object(a["k"])(j,{name:"project",label:"项目管理"}),Object(a["k"])(j,{name:"asset",label:"数据资产"}),Object(a["k"])(j,{name:"gather",label:"数据集成"}),Object(a["k"])(j,{name:"develop",label:"数据开发"}),Object(a["k"])(j,{name:"monitor",label:"监控警告"}),Object(a["k"])(j,{name:"server",label:"数据服务"})]})),_:1},8,["modelValue"])]})),_:1},8,["modelValue"]),Object(a["k"])(k,null,{default:Object(a["H"])((function(){return[Object(a["k"])(v,{modelValue:c.tab,"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.tab=e}),animated:"",swipeable:"",vertical:""},{default:Object(a["H"])((function(){return[Object(a["k"])(h,{name:"home"},{default:Object(a["H"])((function(){return[U]})),_:1}),Object(a["k"])(h,{name:"list"},{default:Object(a["H"])((function(){return[I]})),_:1}),Object(a["k"])(h,{name:"kanban"},{default:Object(a["H"])((function(){return[Object(a["k"])(g)]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})}var M=Object(a["i"])("div",null,"数据看板",-1);function R(e,t,n,r,c,o){return Object(a["y"])(),Object(a["h"])(a["a"],null,[M,Object(a["i"])("div",null,Object(a["E"])(this.msg),1)],64)}var A={name:"kanban",data:function(){return{msg:""}},mounted:function(){this.getData()},methods:{getData:function(){var e=this;this.axios.get("/data").then((function(t){e.msg=t.data,console.log(t)})).catch((function(e){console.log(e)}))}}};const X=l()(A,[["render",R]]);var B=X,E={name:"hello",components:{kanban:B},data:function(){return{leftDrawerOpen:!0,tab:"home"}},methods:{toggleLeftDrawer:function(){this.leftDrawerOpen=!this.leftDrawerOpen}}},J=n("4d5a"),z=n("e359"),F=n("65c6"),$=n("068f"),G=n("6ac5"),K=n("2c91"),N=n("cb32"),W=n("05c0"),Y=n("9404"),Z=n("429b"),ee=n("7460"),te=n("09e3"),ne=n("adad"),ae=n("823b");const re=l()(E,[["render",L]]);var ce=re;w()(E,"components",{QLayout:J["a"],QHeader:z["a"],QToolbar:F["a"],QBtn:v["a"],QImg:$["a"],QToolbarTitle:G["a"],QSpace:K["a"],QAvatar:N["a"],QTooltip:W["a"],QDrawer:Y["a"],QTabs:Z["a"],QTab:ee["a"],QPageContainer:te["a"],QTabPanels:ne["a"],QTabPanel:ae["a"]});var oe=[{path:"/",name:"Home",component:_},{path:"/hello",name:"hello",component:ce,meta:{title:"helloworld"}}],le=Object(i["a"])({history:Object(i["b"])(""),routes:oe}),ue=le,be=n("5502"),ie=Object(be["a"])({state:{},mutations:{},actions:{},modules:{}}),se=n("b05d"),de=(n("0ca9"),n("7d6e"),n("e54f"),n("a4b7"),n("05bc"),n("0d0e"),n("573e"),n("35fc"),n("1194"),n("43b9"),{config:{},plugins:{}}),fe=n("bc3a"),Oe=n.n(fe),je=n("130e");Object(a["f"])(b).use(se["a"],de).use(je["a"],Oe.a).use(ie).use(ue).mount("#app"),Oe.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",Oe.a.defaults.transformRequest=[function(e){var t="";for(var n in e)t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n])+"&";return t=t.substring(0,t.lastIndexOf("&")),t}]},"84d7":function(e,t,n){e.exports=n.p+"img/spec.b2456ab0.png"}});
//# sourceMappingURL=app.e3f714cb.js.map