(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0668":function(t,e,a){},"713b":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{staticClass:"bg-grey-1",attrs:{view:"hHh lpR fFf"}},[a("q-header",{staticClass:"bg-white text-grey-8 q-py-xs",attrs:{elevated:"","height-hint":"58"}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu",icon:"menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),t.$q.screen.gt.xs?a("q-btn",{staticClass:"q-ml-xs",attrs:{flat:"","no-caps":"","no-wrap":""}},[a("q-icon",{attrs:{name:t.fabYoutube,color:"red",size:"28px"}}),a("q-toolbar-title",{staticClass:"text-weight-bold",attrs:{shrink:""}},[t._v("\n          YouTube\n        ")])],1):t._e(),a("q-space"),a("div",{staticClass:"YL__toolbar-input-container row no-wrap"},[a("q-input",{staticClass:"bg-white col",attrs:{dense:"",outlined:"",square:"",placeholder:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("q-btn",{staticClass:"YL__toolbar-input-btn",attrs:{color:"grey-3","text-color":"grey-8",icon:"search",unelevated:""}})],1),a("q-space"),a("div",{staticClass:"q-gutter-sm row items-center no-wrap"},[a("q-btn",{attrs:{round:"",flat:""}},[a("q-avatar",{attrs:{size:"26px"}},[a("img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})]),a("q-tooltip",[t._v("Account")])],1),t.$q.screen.gt.sm?a("q-btn",{attrs:{round:"",dense:"",flat:"",color:"grey-8",icon:"video_call"}},[a("q-tooltip",[t._v("登录")])],1):t._e(),t.$q.screen.gt.sm?a("q-btn",{attrs:{round:"",dense:"",flat:"",color:"grey-8",icon:"apps"}},[a("q-tooltip",[t._v("注册")])],1):t._e(),t.$q.screen.gt.sm?a("q-btn",{attrs:{round:"",dense:"",flat:"",color:"grey-8",icon:"message"}},[a("q-tooltip",[t._v("Messages")])],1):t._e(),a("q-btn",{attrs:{round:"",dense:"",flat:"",color:"grey-8",icon:"notifications"}},[a("q-badge",{attrs:{color:"red","text-color":"white",floating:""}},[t._v("\n            2\n          ")]),a("q-tooltip",[t._v("Notifications")])],1)],1)],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-2",width:240},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-scroll-area",{staticClass:"fit"},[a("q-list",{attrs:{padding:""}},[t._l(t.links1,(function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.text,attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"grey",name:e.icon}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(e.text))])],1)],1)})),a("q-separator",{staticClass:"q-my-md"}),t._l(t.links2,(function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.text,attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"grey",name:e.icon}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(e.text))])],1)],1)})),a("q-separator",{staticClass:"q-mt-md q-mb-xs"}),a("q-item-label",{staticClass:"text-weight-bold text-uppercase",attrs:{header:""}},[t._v("\n          More from Youtube\n        ")]),t._l(t.links3,(function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.text,attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"grey",name:e.icon}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(e.text))])],1)],1)})),a("q-separator",{staticClass:"q-my-md"}),t._l(t.links4,(function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.text,attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"grey",name:e.icon}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(e.text))])],1)],1)})),a("q-separator",{staticClass:"q-mt-md q-mb-lg"}),a("div",{staticClass:"q-px-md text-grey-9"},[a("div",{staticClass:"row items-center q-gutter-x-sm q-gutter-y-xs"},t._l(t.buttons1,(function(e){return a("a",{key:e.text,staticClass:"YL__drawer-footer-link",attrs:{href:"javascript:void(0)"}},[t._v("\n              "+t._s(e.text)+"\n            ")])})),0)]),a("div",{staticClass:"q-py-md q-px-md text-grey-9"},[a("div",{staticClass:"row items-center q-gutter-x-sm q-gutter-y-xs"},t._l(t.buttons2,(function(e){return a("a",{key:e.text,staticClass:"YL__drawer-footer-link",attrs:{href:"javascript:void(0)"}},[t._v("\n              "+t._s(e.text)+"\n            ")])})),0)])],2)],1)],1),a("q-page-container",[a("router-view")],1)],1)},s=[],i=a("d272"),n={name:"MyLayout",data:function(){return{leftDrawerOpen:!1,search:"",links1:[{icon:"home",text:"Home"},{icon:"whatshot",text:"Trending"},{icon:"subscriptions",text:"Subscriptions"}],links2:[{icon:"folder",text:"Library"},{icon:"restore",text:"History"},{icon:"watch_later",text:"Watch later"},{icon:"thumb_up_alt",text:"Liked videos"}],links3:[{icon:i["a"],text:"YouTube Premium"},{icon:"local_movies",text:"Movies & Shows"},{icon:"videogame_asset",text:"Gaming"},{icon:"live_tv",text:"Live"}],links4:[{icon:"settings",text:"Settings"},{icon:"flag",text:"Report history"},{icon:"help",text:"Help"},{icon:"feedback",text:"Send feedback"}],buttons1:[{text:"About"},{text:"Press"},{text:"Copyright"},{text:"Contact us"},{text:"Creators"},{text:"Advertise"},{text:"Developers"}],buttons2:[{text:"Terms"},{text:"Privacy"},{text:"Policy & Safety"},{text:"Test new features"}]}},created:function(){this.fabYoutube=i["a"]}},o=n,c=(a("83ec"),a("2877")),l=a("4d5a"),p=a("e359"),u=a("65c6"),m=a("9c40"),d=a("0016"),q=a("6ac5"),b=a("2c91"),v=a("27f9"),x=a("cb32"),f=a("05c0"),g=a("58a81"),_=a("9404"),w=a("4983"),y=a("1c1c"),h=a("66e5"),k=a("4074"),C=a("0170"),Q=a("eb85"),L=a("09e3"),S=a("714f"),T=a("eebe"),Y=a.n(T),D=Object(c["a"])(o,r,s,!1,null,null,null);e["default"]=D.exports;Y()(D,"components",{QLayout:l["a"],QHeader:p["a"],QToolbar:u["a"],QBtn:m["a"],QIcon:d["a"],QToolbarTitle:q["a"],QSpace:b["a"],QInput:v["a"],QAvatar:x["a"],QTooltip:f["a"],QBadge:g["a"],QDrawer:_["a"],QScrollArea:w["a"],QList:y["a"],QItem:h["a"],QItemSection:k["a"],QItemLabel:C["a"],QSeparator:Q["a"],QPageContainer:L["a"]}),Y()(D,"directives",{Ripple:S["a"]})},"83ec":function(t,e,a){"use strict";var r=a("0668"),s=a.n(r);s.a}}]);