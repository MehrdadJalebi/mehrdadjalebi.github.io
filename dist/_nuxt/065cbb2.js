(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,3,4,5],{448:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));var n={baseUrl:"https://restcountries.com/v3.1"};function o(t,e){return t.length>e?t.substr(0,e-1)+"...":t}},449:function(t,e,r){var n=r(22),o=r(31),c=r(81),l=r(208),d=r(14),f=n.RegExp,m=f.prototype;o&&d((function(){var t=!0;try{f(".","d")}catch(e){t=!1}var e={},r="",n=t?"dgimsy":"gimsy",o=function(t,n){Object.defineProperty(e,t,{get:function(){return r+=n,!0}})},c={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var l in t&&(c.hasIndices="d"),c)o(l,c[l]);return Object.getOwnPropertyDescriptor(m,"flags").get.call(e)!==n||r!==n}))&&c(m,"flags",{configurable:!0,get:l})},450:function(t,e,r){var content=r(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(80).default)("8febfd64",content,!0,{sourceMap:!1})},451:function(t,e,r){var content=r(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(80).default)("381e5da0",content,!0,{sourceMap:!1})},452:function(t,e,r){var content=r(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(80).default)("8607e38a",content,!0,{sourceMap:!1})},453:function(t,e,r){var content=r(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(80).default)("aad7b8ee",content,!0,{sourceMap:!1})},454:function(t,e,r){"use strict";r(450)},455:function(t,e,r){var n=r(79)((function(i){return i[1]}));n.push([t.i,".card{background:var(--elements-primary);border-radius:.5em;box-shadow:0 2px 10px 0 rgba(0,0,0,.1);color:var(--text-primary);height:20rem;margin-bottom:2rem}.card .country-card{padding:0}.card .country-card .info{padding:1.5rem}.card .country-card img{aspect-ratio:5/3;border-radius:.5em .5em 0 0}.card .country-card .country-name{font-size:1.2rem;font-weight:800}.card .country-card .attr{display:flex}.card .country-card .attr .title,.card .country-card .attr .value{font-size:.85rem;margin-bottom:0}.card .country-card .attr .title{font-weight:600}.card .country-card .attr .value{margin-left:.25rem}@media(max-width:575px){.card{height:auto;margin:0 auto 2rem;max-width:80vw;min-height:20rem}}",""]),n.locals={},t.exports=n},456:function(t,e,r){"use strict";r(451)},457:function(t,e,r){var n=r(79)((function(i){return i[1]}));n.push([t.i,".filter[data-v-2369e965]{position:relative}.filter .region-filter[data-v-2369e965]{background-color:var(--elements-primary);background-image:none;border:none;box-shadow:0 2px 10px 0 rgba(0,0,0,.1);color:var(--text-primary);font-size:.9rem;height:3.25rem;margin-left:5px;width:10rem}.filter .region-filter[data-v-2369e965]:focus{border:0}.filter .arrow[data-v-2369e965]{position:absolute;right:10px;top:20px}@media screen and (max-width:568px){.filter[data-v-2369e965]{margin-left:0;margin-right:5px}}@media(max-width:414px){.filter .region-filter[data-v-2369e965]{width:45vw}}",""]),n.locals={},t.exports=n},458:function(t,e,r){"use strict";r(452)},459:function(t,e,r){var n=r(79)((function(i){return i[1]}));n.push([t.i,".filter[data-v-18c8961f]{position:relative}.filter .sort-filter[data-v-18c8961f]{background-color:var(--elements-primary);background-image:none;border:none;box-shadow:0 2px 10px 0 rgba(0,0,0,.1);color:var(--text-primary);font-size:.9rem;height:3.25rem;margin-left:5px;width:10rem}.filter .sort-filter[data-v-18c8961f]:focus{border:0}.filter .arrow[data-v-18c8961f]{position:absolute;right:10px;top:20px}@media screen and (max-width:568px){.filter[data-v-18c8961f]{margin-left:0;margin-right:5px}}@media(max-width:414px){.filter .sort-filter[data-v-18c8961f]{width:45vw}}",""]),n.locals={},t.exports=n},460:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.stringSimilarity=void 0;e.stringSimilarity=function(t,e,r,n){if(void 0===r&&(r=2),void 0===n&&(n=!1),n||(t=t.toLowerCase(),e=e.toLowerCase()),t.length<r||e.length<r)return 0;for(var map=new Map,i=0;i<t.length-(r-1);i++){var o=t.substr(i,r);map.set(o,map.has(o)?map.get(o)+1:1)}for(var c=0,l=0;l<e.length-(r-1);l++){var d=e.substr(l,r),f=map.has(d)?map.get(d):0;f>0&&(map.set(d,f-1),c++)}return 2*c/(t.length+e.length-2*(r-1))},e.default=e.stringSimilarity},461:function(t,e,r){"use strict";r(453)},462:function(t,e,r){var n=r(79)((function(i){return i[1]}));n.push([t.i,".input-group[data-v-2a887c23]{box-shadow:0 2px 10px 0 rgba(0,0,0,.1)}.input-group button[data-v-2a887c23],.input-group input[data-v-2a887c23]{background-color:var(--elements-primary);border:0;color:var(--text-primary);height:3.25rem}.input-group input[data-v-2a887c23]{padding-left:10px}.input-group button[data-v-2a887c23]{padding-left:20px}.btn[data-v-2a887c23]:focus,.form-control[data-v-2a887c23]:focus{box-shadow:none}.btn[data-v-2a887c23]:active{background-color:var(--elements-primary);color:var(--text-primary)}@media screen and (max-width:568px){.input-group[data-v-2a887c23]{margin-bottom:10px}}",""]),n.locals={},t.exports=n},463:function(t,e,r){"use strict";r.r(e);r(449),r(25);var n=r(448),o={props:{info:{type:Object,default:function(){}}},computed:{capital:function(){var t,e;return null!==(t=this.info)&&void 0!==t&&null!==(e=t.capital)&&void 0!==e&&e.length?this.info.capital[0]:"Unknown"},countryName:function(){var t,e;return Object(n.b)(null===(t=this.info)||void 0===t||null===(e=t.name)||void 0===e?void 0:e.common,20)}}},c=(r(454),r(70)),component=Object(c.a)(o,(function(){var t,e,r,n,o=this,c=o._self._c;return c("b-card",{attrs:{"body-class":"country-card"}},[c("b-card-img-lazy",{attrs:{src:o.info.flags.png,"img-alt":o.info.flag,"blank-color":"gray","blank-height":"150"}}),o._v(" "),c("b-card-body",{staticClass:"info"},[c("b-card-text",{staticClass:"country-name"},[c("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:null===(t=o.info)||void 0===t||null===(e=t.name)||void 0===e?void 0:e.common}},[o._v("\n        "+o._s(o.countryName)+"\n      ")])]),o._v(" "),c("b-card-group",{staticClass:"attr mt-2"},[c("b-card-text",{staticClass:"title"},[o._v("Population:")]),o._v(" "),c("b-card-text",{staticClass:"value"},[o._v(o._s(null===(r=o.info)||void 0===r?void 0:r.population.toLocaleString("en-US")))])],1),o._v(" "),c("b-card-group",{staticClass:"attr"},[c("b-card-text",{staticClass:"title"},[o._v("Region:")]),o._v(" "),c("b-card-text",{staticClass:"value"},[o._v(o._s(null===(n=o.info)||void 0===n?void 0:n.region))])],1),o._v(" "),c("b-card-group",{staticClass:"attr"},[c("b-card-text",{staticClass:"title"},[o._v("Capital:")]),o._v(" "),c("b-card-text",{staticClass:"value"},[o._v("\n        "+o._s(o.capital)+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},464:function(t,e,r){"use strict";r.r(e);r(2),r(4),r(39);var n={props:{regions:{type:Array,default:function(){return[]}}},data:function(){return{options:[{value:"",text:"Filter by region",disabled:!0},{value:"All",text:"All"}],selectedRegion:""}},watch:{regions:{handler:function(t){var e=this;t&&t.forEach((function(t){e.options.push({value:t,text:t})}))},immediate:!0}},methods:{update:function(){var t=this;this.$emit("loading"),setTimeout((function(){t.$emit("update",t.selectedRegion)}),100)}}},o=(r(456),r(70)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"filter"},[e("b-form-select",{staticClass:"region-filter",attrs:{options:t.options},on:{change:function(e){return t.update()}},model:{value:t.selectedRegion,callback:function(e){t.selectedRegion=e},expression:"selectedRegion"}}),t._v(" "),e("font-awesome-icon",{staticClass:"arrow",attrs:{icon:"fa-angle-down"}})],1)}),[],!1,null,"2369e965",null);e.default=component.exports},465:function(t,e,r){"use strict";r.r(e);r(109),r(25),r(39);var n={props:{filteredCountries:{type:Array,default:function(){return[]}}},data:function(){return{options:[{value:"",text:"Sort by",disabled:!0},{value:"None",text:"None"},{value:"Country Name",text:"Country Name"},{value:"Population",text:"Population"}],selectedSortType:""}},methods:{update:function(){var t=this;this.$emit("loading");var e=this.filteredCountries;"Population"===this.selectedSortType?e.sort((function(a,b){return b.population-a.population})):"Country Name"===this.selectedSortType&&e.sort((function(a,b){return a.name.common.localeCompare(b.name.common)})),setTimeout((function(){t.$emit("update",e)}),100)}}},o=(r(458),r(70)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"filter"},[e("b-form-select",{staticClass:"sort-filter",attrs:{options:t.options},on:{change:function(e){return t.update()}},model:{value:t.selectedSortType,callback:function(e){t.selectedSortType=e},expression:"selectedSortType"}}),t._v(" "),e("font-awesome-icon",{staticClass:"arrow",attrs:{icon:"fa-angle-down"}})],1)}),[],!1,null,"18c8961f",null);e.default=component.exports},466:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"b",(function(){return f}));r(16);var n=r(129),o=r.n(n),c=r(448);function l(){return o.a.get("".concat(c.a.baseUrl,"/all")).then((function(t){return t.data}))}function d(code){return o.a.get("".concat(c.a.baseUrl,"/alpha/").concat(code)).then((function(t){return t.data[0]}))}function f(t){return o.a.get("".concat(c.a.baseUrl,"/alpha?codes=").concat(t)).then((function(t){return t.data}))}},467:function(t,e,r){var content=r(471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(80).default)("4d8b3056",content,!0,{sourceMap:!1})},469:function(t,e,r){"use strict";r.r(e);var n=r(29),o=(r(39),r(2),r(296),r(49),r(297),r(298),r(299),r(300),r(301),r(302),r(303),r(304),r(305),r(306),r(307),r(308),r(309),r(310),r(311),r(312),r(54),r(3),r(25),r(82),r(108),r(460)),c={props:{countries:{type:Array,required:!0}},data:function(){return{searchText:""}},methods:{checkIsEmpty:function(){var t=this;this.searchText.length||(this.$emit("loading"),setTimeout((function(){t.$emit("filter",t.countries)}),100))},searchByCountry:function(){this.$emit("loading");var t=this.searchText.toLowerCase(),e=Object(n.a)(new Set(t.split(""))),r=this.countries.filter((function(r){var n=r.name.common.toLowerCase(),c=n.includes(t),l=Object(o.stringSimilarity)(n,t)>=.4,d=t.length<=n.length,f=e.every((function(t){return n.includes(t)}));return d&&f&&(c||l)}));this.$emit("filter",r)}}},l=(r(461),r(70)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("b-input-group",[e("b-input-group-prepend",[e("b-button",{on:{click:function(e){return t.searchByCountry()}}},[e("font-awesome-icon",{attrs:{icon:"fa-search"}})],1)],1),t._v(" "),e("b-form-input",{attrs:{placeholder:"search for a country..."},on:{keyup:[function(e){return t.checkIsEmpty()},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchByCountry()}]},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1)],1)}),[],!1,null,"2a887c23",null);e.default=component.exports},470:function(t,e,r){"use strict";r(467)},471:function(t,e,r){var n=r(79)((function(i){return i[1]}));n.push([t.i,"a[data-v-1f40c4a2]:hover{-webkit-text-decoration:none;text-decoration:none}",""]),n.locals={},t.exports=n},474:function(t,e,r){"use strict";r.r(e);var n=r(30),o=(r(2),r(4),r(82),r(108),r(3),r(39),r(91),r(463)),c=r(464),l=r(465),d=r(466),f={components:{CountryCard:o.default,RegionsFilter:c.default,SortDropdown:l.default},asyncData:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.a)();case 2:return e=t.sent,r=e,t.abrupt("return",{countries:e,filteredCountries:r});case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{loading:!1,regions:[]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.countries.length){e.next=5;break}return e.next=3,Object(d.a)();case 3:t.countries=e.sent,t.filteredCountries=t.countries;case 5:t.setRegions();case 6:case"end":return e.stop()}}),e)})))()},methods:{setRegions:function(){var t=this;this.countries.forEach((function(e){t.regions.includes(e.region)||t.regions.push(e.region)}))},filterByRegion:function(t){this.filteredCountries="All"===t?this.countries:this.countries.filter((function(e){return e.region===t})),this.stopLoading()},update:function(t){this.filteredCountries=t,this.stopLoading()},stopLoading:function(){var t=this;setTimeout((function(){t.loading=!1}),100)}}},m=(r(470),r(70)),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("b-overlay",{attrs:{show:t.loading}},[e("b-container",[e("b-row",[e("b-col",{attrs:{xl:"5",lg:"5",md:"6",sm:"12",cols:"12"}},[e("search-filter",{attrs:{countries:t.countries},on:{filter:function(e){return t.update(e)},loading:function(e){t.loading=!0}}})],1),t._v(" "),e("b-col",{staticClass:"d-flex flex-row flex-md-row-reverse mt-3 mt-md-0 pl-2",attrs:{xl:"7",lg:"7",md:"6",sm:"12",cols:"12"}},[e("regions-filter",{attrs:{regions:t.regions},on:{update:function(e){return t.filterByRegion(e)},loading:function(e){t.loading=!0}}}),t._v(" "),e("sort-dropdown",{attrs:{"filtered-countries":t.filteredCountries},on:{update:function(e){return t.update(e)}}})],1)],1),t._v(" "),e("b-row",{staticClass:"mt-5"},t._l(t.filteredCountries,(function(t,r){return e("b-col",{key:r,attrs:{cols:"12",xl:"3",lg:"4",md:"4",sm:"6"}},[e("NuxtLink",{attrs:{to:"/".concat(t.cca2)}},[e("country-card",{attrs:{info:t}})],1)],1)})),1)],1)],1)}),[],!1,null,"1f40c4a2",null);e.default=component.exports;installComponents(component,{SearchFilter:r(469).default,RegionsFilter:r(464).default,SortDropdown:r(465).default,CountryCard:r(463).default})}}]);