(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{448:function(t,r,n){"use strict";n.d(r,"a",(function(){return o})),n.d(r,"b",(function(){return e}));var o={baseUrl:"https://restcountries.com/v3.1"};function e(t,r){return t.length>r?t.substr(0,r-1)+"...":t}},449:function(t,r,n){var o=n(22),e=n(31),c=n(81),l=n(208),d=n(14),f=o.RegExp,v=f.prototype;e&&d((function(){var t=!0;try{f(".","d")}catch(r){t=!1}var r={},n="",o=t?"dgimsy":"gimsy",e=function(t,o){Object.defineProperty(r,t,{get:function(){return n+=o,!0}})},c={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var l in t&&(c.hasIndices="d"),c)e(l,c[l]);return Object.getOwnPropertyDescriptor(v,"flags").get.call(r)!==o||n!==o}))&&c(v,"flags",{configurable:!0,get:l})},450:function(t,r,n){var content=n(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("8febfd64",content,!0,{sourceMap:!1})},454:function(t,r,n){"use strict";n(450)},455:function(t,r,n){var o=n(79)((function(i){return i[1]}));o.push([t.i,".card{background:var(--elements-primary);border-radius:.5em;box-shadow:0 2px 10px 0 rgba(0,0,0,.1);color:var(--text-primary);height:20rem;margin-bottom:2rem}.card .country-card{padding:0}.card .country-card .info{padding:1.5rem}.card .country-card img{aspect-ratio:5/3;border-radius:.5em .5em 0 0}.card .country-card .country-name{font-size:1.2rem;font-weight:800}.card .country-card .attr{display:flex}.card .country-card .attr .title,.card .country-card .attr .value{font-size:.85rem;margin-bottom:0}.card .country-card .attr .title{font-weight:600}.card .country-card .attr .value{margin-left:.25rem}@media(max-width:575px){.card{height:auto;margin:0 auto 2rem;max-width:80vw;min-height:20rem}}",""]),o.locals={},t.exports=o},463:function(t,r,n){"use strict";n.r(r);n(449),n(25);var o=n(448),e={props:{info:{type:Object,default:function(){}}},computed:{capital:function(){var t,r;return null!==(t=this.info)&&void 0!==t&&null!==(r=t.capital)&&void 0!==r&&r.length?this.info.capital[0]:"Unknown"},countryName:function(){var t,r;return Object(o.b)(null===(t=this.info)||void 0===t||null===(r=t.name)||void 0===r?void 0:r.common,20)}}},c=(n(454),n(70)),component=Object(c.a)(e,(function(){var t,r,n,o,e=this,c=e._self._c;return c("b-card",{attrs:{"body-class":"country-card"}},[c("b-card-img-lazy",{attrs:{src:e.info.flags.png,"img-alt":e.info.flag,"blank-color":"gray","blank-height":"150"}}),e._v(" "),c("b-card-body",{staticClass:"info"},[c("b-card-text",{staticClass:"country-name"},[c("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:null===(t=e.info)||void 0===t||null===(r=t.name)||void 0===r?void 0:r.common}},[e._v("\n        "+e._s(e.countryName)+"\n      ")])]),e._v(" "),c("b-card-group",{staticClass:"attr mt-2"},[c("b-card-text",{staticClass:"title"},[e._v("Population:")]),e._v(" "),c("b-card-text",{staticClass:"value"},[e._v(e._s(null===(n=e.info)||void 0===n?void 0:n.population.toLocaleString("en-US")))])],1),e._v(" "),c("b-card-group",{staticClass:"attr"},[c("b-card-text",{staticClass:"title"},[e._v("Region:")]),e._v(" "),c("b-card-text",{staticClass:"value"},[e._v(e._s(null===(o=e.info)||void 0===o?void 0:o.region))])],1),e._v(" "),c("b-card-group",{staticClass:"attr"},[c("b-card-text",{staticClass:"title"},[e._v("Capital:")]),e._v(" "),c("b-card-text",{staticClass:"value"},[e._v("\n        "+e._s(e.capital)+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);r.default=component.exports}}]);