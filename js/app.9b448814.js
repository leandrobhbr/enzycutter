(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{0:function(e,n,t){e.exports=t("2f39")},"0047":function(e,n,t){},"2f39":function(e,n,t){"use strict";t.r(n);var a=t("a34a"),r=t.n(a),o=(t("a481"),t("96cf"),t("c973")),u=t.n(o),c=(t("5c7d"),t("7d6e"),t("e54f"),t("985d"),t("0047"),t("2b0e")),i=t("1f91"),s=t("42d2"),l=t("b05d"),p=t("4d5a"),b=t("e359"),f=t("9404"),d=t("09e3"),h=t("9989"),m=t("65c6"),w=t("6ac5"),Q=t("9c40"),v=t("0016"),x=t("1c1c"),k=t("66e5"),y=t("4074"),g=t("0170"),T=t("27f9"),O=t("e669"),P=t("eaac"),V=t("db86"),j=t("bd08"),I=t("2bb1"),B=t("9f0a"),L=t("adad"),S=t("823b"),A=t("ead5"),$=t("079e"),q=t("714f"),z=t("2a19");c["a"].use(l["a"],{config:{},lang:i["a"],iconSet:s["a"],components:{QLayout:p["a"],QHeader:b["a"],QDrawer:f["a"],QPageContainer:d["a"],QPage:h["a"],QToolbar:m["a"],QToolbarTitle:w["a"],QBtn:Q["a"],QIcon:v["a"],QList:x["a"],QItem:k["a"],QItemSection:y["a"],QItemLabel:g["a"],QInput:T["a"],QSpinnerFacebook:O["a"],QTable:P["a"],QTd:V["a"],QTr:j["a"],QMarkupTable:I["a"],QOptionGroup:B["a"],QTabPanels:L["a"],QTabPanel:S["a"],QBreadcrumbs:A["a"],QBreadcrumbsEl:$["a"]},directives:{Ripple:q["a"]},plugins:{Notify:z["a"]}});var C=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},E=[],J={name:"App"},_=J,D=t("2877"),F=Object(D["a"])(_,C,E,!1,null,null,null),G=F.exports,H=t("4bde"),M=t("2f62"),N=Object(H["store"])((function(e){var n=e.Vue;n.use(M["a"]);var t=new M["a"].Store({modules:{},strict:!1});return t})),R=t("8c4f"),K=[{path:"/",component:function(){return t.e(0).then(t.bind(null,"713b"))},children:[{path:"",component:function(){return Promise.all([t.e(1),t.e(2)]).then(t.bind(null,"8b24"))}}]},{path:"/home",component:function(){return t.e(0).then(t.bind(null,"713b"))},children:[{path:"",component:function(){return Promise.all([t.e(1),t.e(2)]).then(t.bind(null,"8b24"))},name:"home"}]},{path:"/about",component:function(){return t.e(0).then(t.bind(null,"713b"))},children:[{path:"",component:function(){return t.e(8).then(t.bind(null,"a1d1"))},name:"about"}]},{path:"/guide",component:function(){return t.e(0).then(t.bind(null,"713b"))},children:[{path:"",component:function(){return t.e(5).then(t.bind(null,"e2f1"))},name:"guide"}]},{path:"/enzymes",component:function(){return t.e(0).then(t.bind(null,"713b"))},children:[{path:"",component:function(){return t.e(6).then(t.bind(null,"e04d"))},name:"enzymes"}]}];K.push({path:"*",component:function(){return t.e(7).then(t.bind(null,"e51e"))}});var U=K,W=Object(H["route"])((function(e){var n=e.Vue;n.use(R["a"]);var t=new R["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:U,mode:"hash",base:""});return t})),X=function(){return Y.apply(this,arguments)};function Y(){return Y=u()(r.a.mark((function e(){var n,t,a;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof N){e.next=6;break}return e.next=3,N({Vue:c["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=N;case 7:if(n=e.t0,"function"!==typeof W){e.next=14;break}return e.next=11,W({Vue:c["a"],store:n});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=W;case 15:return t=e.t1,n.$router=t,a={router:t,store:n,render:function(e){return e(G)}},a.el="#q-app",e.abrupt("return",{app:a,store:n,router:t});case 20:case"end":return e.stop()}}),e)}))),Y.apply(this,arguments)}var Z=t("750b"),ee=Object(H["boot"])((function(e){var n=e.Vue;n.use(Z["a"])})),ne={failed:"Action failed",success:"Action was successful"},te={"en-us":ne},ae=t("a925");c["a"].use(ae["a"]);var re=new ae["a"]({locale:"en-us",fallbackLocale:"en-us",messages:te}),oe=Object(H["boot"])((function(e){var n=e.app;n.i18n=re})),ue=t("bc3a"),ce=t.n(ue),ie=Object(H["boot"])((function(e){var n=e.Vue;n.prototype.$axios=ce.a}));function se(){return le.apply(this,arguments)}function le(){return le=u()(r.a.mark((function e(){var n,t,a,o,u,i,s,l,p;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,X();case 2:n=e.sent,t=n.app,a=n.store,o=n.router,u=!0,i=function(e){u=!1,window.location.href=e},s=window.location.href.replace(window.location.origin,""),l=[ee,oe,ie],p=0;case 11:if(!(!0===u&&p<l.length)){e.next=29;break}if("function"===typeof l[p]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,l[p]({app:t,router:o,store:a,Vue:c["a"],ssrContext:null,redirect:i,urlPath:s});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:p++,e.next=11;break;case 29:if(!1!==u){e.next=31;break}return e.abrupt("return");case 31:new c["a"](t);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),le.apply(this,arguments)}se()}},[[0,4,1]]]);