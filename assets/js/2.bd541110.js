(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{559:function(t,e,s){},635:function(t,e,s){t.exports=s.p+"assets/img/yesterday.8e49f298.svg"},636:function(t,e,s){t.exports=s.p+"assets/img/today.484a4d22.svg"},637:function(t,e,s){t.exports=s.p+"assets/img/tomorrow.81f0b143.svg"},638:function(t,e,s){"use strict";var r=s(559);s.n(r).a},675:function(t,e,s){"use strict";s.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{attrs:{target:"_black",href:"https://github.com/vuepress-reco/vuepress-theme-reco"}},[e("img",{attrs:{alt:"GitHub license",src:"https://img.shields.io/github/license/vuepress-reco/vuepress-theme-reco?&logo=github"}})]),this._v(" "),e("a",{attrs:{target:"_black",href:"https://github.com/vuepress-reco/vuepress-theme-reco"}},[e("img",{attrs:{alt:"GitHub stars",src:"https://img.shields.io/github/stars/vuepress-reco/vuepress-theme-reco?style=flat&logo=github"}})]),this._v(" "),e("a",{attrs:{target:"_black",href:"https://github.com/vuepress-reco/vuepress-theme-reco"}},[e("img",{attrs:{alt:"GitHub forks",src:"https://img.shields.io/github/forks/vuepress-reco/vuepress-theme-reco?style=flat&logo=github"}})]),this._v(" "),e("a",{attrs:{target:"_black",href:"https://www.npmjs.com/package/vuepress-theme-reco"}},[e("img",{attrs:{alt:"Npm downloads",src:"https://img.shields.io/npm/dt/vuepress-theme-reco?style=flat&logo=npm"}})]),this._v(" "),e("a",{attrs:{target:"_black",href:"https://www.npmjs.com/package/vuepress-theme-reco"}},[e("img",{attrs:{alt:"Npm version",src:"https://img.shields.io/npm/v/vuepress-theme-reco.svg?style=flat&logo=npm&label=version"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-wrapper"},[e("img",{attrs:{src:s(635),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-wrapper"},[e("img",{attrs:{src:s(636),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-wrapper"},[e("img",{attrs:{src:s(637),alt:""}})])}],a=(s(22),s(27),s(32),s(30),s(31),s(86),s(20),s(70),s(7),s(47),s(4),s(61),s(6),s(11),s(24),s(10),s(48),s(23),s(71),s(1)),n={data:function(){return{downloads:0}},computed:{features:function(){return this.$frontmatter.features},heroImageStyle:function(){return this.$frontmatter.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"}}},created:function(){},methods:{toThousandslsFilter:function(t){var e=String(t);if(""===e||null==e)return"";var s=/\./g.test(e)?e.slice(0,e.indexOf(".")):e,r=/\./g.test(e)?e.substring(e.indexOf(".")):"";return(+s||0).toString().replace(/^-?\d+/g,(function(t){return t.replace(/(?=(?!\b)(\d{3})+$)/g,",")}))+r},npmPackageDownloads:function(t,e){return t=this._handlePackages(t),e=this._handleDateRange(e),this._getDownloadsOfDateRange(t,e)},_getDownloadsOfDateRange:function(t,e){var s=this;return Object(a.a)(regeneratorRuntime.mark((function r(){var a,n,i,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=0,!Array.isArray(e)){r.next=9;break}return n=[],e.map((function(e){n.push(s._fetch(t,e))})),r.next=6,Promise.all(n);case 6:return i=r.sent,a=i.reduce((function(t,e){return t+e.downloads}),0),r.abrupt("return",a);case 9:return r.next=11,s._fetch(t,e);case 11:return o=r.sent,a=o.downloads,r.abrupt("return",a);case 14:case"end":return r.stop()}}),r)})))()},_fetch:function(t,e){var s=this;return new Promise((function(r,a){fetch("".concat("https://api.npmjs.org/downloads/point/").concat(e,"/").concat(t)).then(s._parseJSON).then((function(t){r(t)})).catch((function(t){a(t)}))}))},_parseJSON:function(t){return t.json()},_handleDateRange:function(t){if(t.indexOf(":")>-1){var e=t.split(":"),s=e,r=new Date(e[1]).getTime()-new Date(e[0]).getTime(),a=parseInt(r/31536e6);if(a>0){for(var n=0;n<a;n++){var i=this._getDate(s[n]);s.splice(n+1,0,i)}for(var o=0,c=s.length;o<c-1;o++)s[o]="".concat(s[o],":").concat(s[o+1]);return s.length=a+1,s}return t}return t},_getDate:function(t){var e=t.split("-");return e[0]=Number(e[0])+1,e.join("-")},_handlePackages:function(t){return Array.isArray(t)?"-,".concat(t.join(",")):t}}},i=(s(638),s(17)),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"home-page-one-wrapper"},[s("section",{staticClass:"main"},[s("div",[t.$frontmatter.heroImage?s("img",{style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e(),t._v(" "),s("p",{staticClass:"description"},[t._v(t._s(t.$description))]),t._v(" "),t._m(0),t._v(" "),s("router-link",{staticClass:"btn-about",attrs:{to:t.$frontmatter.actionLink}},[t._v(t._s(t.$frontmatter.actionText))])],1)]),t._v(" "),s("section",{staticClass:"wish yesterday"},[s("div",{staticClass:"wish-inner"},[t._m(1),t._v(" "),s("div",{staticClass:"text-wrapper"},[s("h1",[t._v(t._s(t.features[0].title))]),t._v(" "),s("p",{staticClass:"description"},[t._v(t._s(t.features[0].details))])])])]),t._v(" "),s("section",{staticClass:"wish today"},[s("div",{staticClass:"wish-inner"},[s("div",{staticClass:"text-wrapper"},[s("h1",[t._v(t._s(t.features[1].title))]),t._v(" "),s("p",{staticClass:"description"},[t._v(t._s(t.features[1].details))])]),t._v(" "),t._m(2)])]),t._v(" "),s("section",{staticClass:"wish tomorrow"},[s("div",{staticClass:"wish-inner"},[t._m(3),t._v(" "),s("div",{staticClass:"text-wrapper"},[s("h1",[t._v(t._s(t.features[2].title))]),t._v(" "),s("p",{staticClass:"description"},[t._v(t._s(t.features[2].details))])])])]),t._v(" "),s("section",{staticClass:"md-content-wrapper"},[s("Content")],1)])}),r,!1,null,"155989b8",null);e.default=o.exports}}]);