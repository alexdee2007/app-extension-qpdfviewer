(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"713b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"HHh LpR fFf"},on:{scroll:e.onScroll}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}},[a("q-icon",{attrs:{name:"menu"}})],1),e.$q.screen.width>500?a("q-toolbar-title",[e._v("\n        QPdfviewer "),a("span",{staticClass:"text-subtitle2"},[e._v("v"+e._s(e.version))])]):e._e(),a("q-space"),a("q-btn",{attrs:{flat:"",round:"",icon:e.$q.dark.isActive?"brightness_2":"brightness_5"},on:{click:function(t){return e.$q.dark.toggle()}}}),e.$q.screen.width>500?a("div",[e._v("Quasar v"+e._s(e.$q.version))]):e._e(),a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Table of Contents"},on:{click:function(t){e.rightDrawerOpen=!e.rightDrawerOpen}}},[a("q-icon",{attrs:{name:"menu"}})],1)],1)],1),a("q-drawer",{staticClass:"menu",attrs:{bordered:"","aria-label":"Menu"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{attrs:{header:""}},[e._v("Essential Links")]),a("q-separator")],1),a("essential-links"),a("q-separator")],1),a("q-drawer",{staticClass:"toc",attrs:{side:"right",bordered:"","aria-label":"Table of Contents"},model:{value:e.rightDrawerOpen,callback:function(t){e.rightDrawerOpen=t},expression:"rightDrawerOpen"}},[a("q-scroll-area",{staticClass:"fit"},[a("q-list",{attrs:{dense:""}},e._l(e.toc,(function(t){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,attrs:{clickable:"",dense:"",active:e.activeToc===t.id},on:{click:function(a){return e.scrollTo(t.id)}}},[t.level>1?a("q-item-section",{attrs:{side:""}},[e._v(" • ")]):e._e(),a("q-item-section",{class:"toc-item toc-level-"+t.level},[e._v(e._s(t.label))])],1)})),1)],1)],1),a("q-page-container",[a("router-view")],1)],1)},r=[],i=a("c8ef"),o=a.n(i),s=(a("fd85"),a("241c"),a("15db"),a("5a85"),a("534d"),a("94ea")),c=a("7c34"),l=c["a"].setScrollPosition,d=a("8c42").version,u={name:"MainLayout",components:{"essential-links":function(){return a.e(8).then(a.bind(null,"4bd0"))}},data:function(){return{version:d,leftDrawerOpen:this.$q.platform.is.desktop,rightDrawerOpen:this.$q.platform.is.desktop,activeToc:0}},mounted:function(){var e=this;if(""!==location.hash){var t=location.hash.substring(1,location.hash.length);setTimeout((function(){e.scrollTo(t)}),200)}},computed:o()({},Object(s["b"])({toc:"common/toc"})),methods:{scrollTo:function(e){var t=this;this.activeToc=e;var a=document.getElementById(e);a&&setTimeout((function(){t.scrollPage(a)}),200)},scrollPage:function(e){var t=e.offsetTop-50;l(window,t,500)},onScroll:function(e){var t=e.position;!0!==this.scrollingPage&&this.updateActiveToc(t)},updateActiveToc:function(e){var t,a=this.toc;for(var n in a){var r=a[n],i=document.getElementById(r.id);if(null!==i&&i.offsetTop>=e+100){void 0===t&&(t=r.id);break}}void 0!==t&&(this.activeToc=t)}}},f=u,p=a("a6c2"),v=a("f624"),b=a("8738"),h=a("66cf"),m=a("ef9c"),q=a("19dc"),w=a("309f"),g=a("dc01"),k=a("5cc9"),T=a("692f"),Q=a("dc7c"),_=a("3f5f"),O=a("b51c"),D=a("e0e9"),$=a("6c44"),C=a("ddc7"),S=a("a561"),y=a("63c1"),I=a.n(y),L=Object(p["a"])(f,n,r,!1,null,null,null);t["default"]=L.exports;I()(L,"components",{QLayout:v["a"],QHeader:b["a"],QToolbar:h["a"],QBtn:m["a"],QIcon:q["a"],QToolbarTitle:w["a"],QSpace:g["a"],QDrawer:k["a"],QList:T["a"],QItemLabel:Q["a"],QSeparator:_["a"],QScrollArea:O["a"],QItem:D["a"],QItemSection:$["a"],QPageContainer:C["a"]}),I()(L,"directives",{Ripple:S["a"]})}}]);