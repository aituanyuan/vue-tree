!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("VTree",[],t):"object"==typeof exports?exports.VTree=t():e.VTree=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t){e.exports=function(e,t,n,r,a,o){var i,d=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,d=e.default);var c="function"==typeof d?d.options:d;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),a&&(c._scopeId=a);var l;if(o?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=r),l){var f=c.functional,u=f?c.render:c.beforeCreate;f?(c._injectStyles=l,c.render=function(e,t){return l.call(t),u(e,t)}):c.beforeCreate=u?[].concat(u,l):[l]}return{esModule:i,exports:d,options:c}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);r.a.install=function(e){e.component("VTree",r.a)},t.default=r.a},function(e,t,n){"use strict";function r(e){n(3)}var a=n(4),o=n(13),i=n(0),d=r,s=i(a.a,o.a,!1,d,"data-v-faffb8f0",null);t.a=s.exports},function(e,t){},function(e,t,n){"use strict";var r=n(5),a=n(6),o=n(7),i=n(11),d=n.n(i),s=function(){function e(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,d=e[Symbol.iterator]();!(r=(i=d.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&d.return&&d.return()}finally{if(a)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.a={name:"Tree",mixins:[r.a],props:{data:{type:Array,default:function(){return[]}},parent:{type:Object,default:function(){return null}},multiple:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},dragAfterExpanded:{type:Boolean,default:!0},halfcheck:{type:Boolean,default:!1},scoped:{type:Boolean,default:!1},tpl:Function},components:{Render:a.a,Loading:o.a,CollapseTransition:d.a},watch:{data:function(){this.initHandle()}},mounted:function(){var e=this;this.$on("childChecked",function(t,n){if(t.children&&t.children.length){var r=!0,a=!1,o=void 0;try{for(var i,d=t.children[Symbol.iterator]();!(r=(i=d.next()).done);r=!0){var s=i.value;e.$set(s,"checked",n),e.$emit("nodeChecked",s,n)}}catch(e){a=!0,o=e}finally{try{!r&&d.return&&d.return()}finally{if(a)throw o}}}}),this.$on("parentChecked",function(t,n){if(e.$set(t,"checked",n),!t.parent)return!1;var r=t.parent.children.some(function(e){return e.checked}),a=t.parent.children.every(function(e){return e.checked});if(e.halfcheck){if(a?e.$set(t.parent,"halfcheck",!1):r?e.$set(t.parent,"halfcheck",!0):e.$set(t.parent,"halfcheck",!1),!n&&r)return e.$set(t.parent,"halfcheck",!0),!1;e.$emit("parentChecked",t.parent,n)}else n&&a&&e.$emit("parentChecked",t.parent,n),n||e.$emit("parentChecked",t.parent,n)}),this.$on("nodeChecked",function(t,n){e.scoped?e.$set(t,"checked",n):(e.$emit("parentChecked",t,n),e.$emit("childChecked",t,n))}),this.$on("toggleshow",function(t,n){e.$set(t,"visible",n),n&&t.parent&&e.$emit("toggleshow",t.parent,n)}),this.$on("cancelSelected",function(e){var t=!0,n=!1,r=void 0;try{for(var a,o=e.$children[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var i=a.value,d=!0,s=!1,c=void 0;try{for(var l,f=i.data[Symbol.iterator]();!(d=(l=f.next()).done);d=!0){var u=l.value;i.$set(u,"selected",!1)}}catch(e){s=!0,c=e}finally{try{!d&&f.return&&f.return()}finally{if(s)throw c}}i.$children&&i.$emit("cancelSelected",i)}}catch(e){n=!0,r=e}finally{try{!t&&o.return&&o.return()}finally{if(n)throw r}}}),this.initHandle()},methods:{drop:function(e,t){t.preventDefault(),t.stopPropagation();var n=t.dataTransfer.getData("guid"),r=this.getDragNode(n);if(r.parent===e||null===r.parent)return!1;if(this.hasInGenerations(r,e))return!1;var a=r.parent.children;e.children&&-1===e.children.indexOf(r)?(e.children.push(r),a.splice(a.indexOf(r),1)):(this.$set(e,"children",[r]),a.splice(a.indexOf(r),1)),this.$set(e,"expanded",this.dragAfterExpanded),this.$emit("drag-node-end",{dragNode:r,targetNode:e})},drag:function(e,t){var n=this.guid();this.setDragNode(n,e),t.dataTransfer.setData("guid",n)},dragover:function(e){e.preventDefault(),e.stopPropagation()},initHandle:function(){var e=!0,t=!1,n=void 0;try{for(var r,a=this.data[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){var o=r.value;this.$set(o,"parent",this.parent)}}catch(e){t=!0,n=e}finally{try{!e&&a.return&&a.return()}finally{if(t)throw n}}},expandNode:function(e){this.$set(e,"expanded",!e.expanded),this.$emit("node-expanded",e)},nodeExpanded:function(e){this.$emit("node-expanded",e)},isLeaf:function(e){return!(e.children&&e.children.length)&&e.parent},addNode:function(e,t){var n=null;if(this.$set(e,"expanded",!0),void 0===t)throw new ReferenceError("newNode is required but undefined");if("string"==typeof t&&(n={title:t}),"object"===(void 0===t?"undefined":c(t))&&!t.hasOwnProperty("title"))throw new ReferenceError("the title property is missed");"object"===(void 0===t?"undefined":c(t))&&t.hasOwnProperty("title")&&(n=t),this.isLeaf(e)?(this.$set(e,"children",[]),e.children.push(n)):e.children.push(n),this.$emit("addNode",{parentNode:e,newNode:t})},addNodes:function(e,t){var n=!0,r=!1,a=void 0;try{for(var o,i=t[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var d=o.value;this.addNode(e,d)}}catch(e){r=!0,a=e}finally{try{!n&&i.return&&i.return()}finally{if(r)throw a}}},nodeClick:function(e){this.$emit("node-click",e)},nodeMouseOver:function(e){this.$emit("node-mouse-over",e)},dragNodeEnd:function(e){this.$emit("drag-node-end",e)},delNode:function(e,t){if(null===e||void 0===e)throw new ReferenceError("the root element can't deleted!");e.children.splice(e.children.indexOf(t),1),this.$emit("delNode",{parentNode:e,delNode:t})},changeNodeCheckStatus:function(e,t){this.$emit("nodeChecked",e,t.target.checked)},nodeSelected:function(e){var t=function e(t){return"UL"===t.$parent.$el.nodeName?(t=t.$parent,e(t)):t}(this);if(!this.multiple){var n=!0,r=!1,a=void 0;try{for(var o,i=(t.data||[])[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var d=o.value;this.$set(d,"selected",!1)}}catch(e){r=!0,a=e}finally{try{!n&&i.return&&i.return()}finally{if(r)throw a}}this.$emit("cancelSelected",t)}this.multiple&&this.$set(e,"checked",!e.selected),this.$set(e,"selected",!e.selected),this.$emit("node-click",e)},getNodes:function(e,t){t=t||this.data;var n=[],r=!0,a=!1,o=void 0;try{for(var i,d=t[Symbol.iterator]();!(r=(i=d.next()).done);r=!0){var c=i.value,l=!0,f=!0,u=!1,h=void 0;try{for(var p,v=Object.entries(e)[Symbol.iterator]();!(f=(p=v.next()).done);f=!0){var y=p.value,g=s(y,2),m=g[0],x=g[1];if(c[m]!==x){l=!1;break}}}catch(e){u=!0,h=e}finally{try{!f&&v.return&&v.return()}finally{if(u)throw h}}l&&n.push(c),c.children&&c.children.length&&(n=n.concat(this.getNodes(e,c.children)))}}catch(e){a=!0,o=e}finally{try{!r&&d.return&&d.return()}finally{if(a)throw o}}return n},getSelectedNodes:function(){return this.getNodes({selected:!0},this.data)},getCheckedNodes:function(){return this.getNodes({checked:!0},this.data)},searchNodes:function(e,t){t=t||this.data;var n=!0,r=!1,a=void 0;try{for(var o,i=t[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var d=o.value,s=!!e&&("function"==typeof e?e(d):d.title.indexOf(e)>-1);this.$set(d,"searched",s),this.$set(d,"visible",!1),this.$emit("toggleshow",d,!e||s),d.children&&d.children.length&&(s&&this.$set(d,"expanded",!0),this.searchNodes(e,d.children))}}catch(e){r=!0,a=e}finally{try{!n&&i.return&&i.return()}finally{if(r)throw a}}}}}},function(e,t,n){"use strict";function r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}function a(e,t){window.treeDrag={},window.treeDrag[e]=t}function o(e){return window.treeDrag[e]}function i(e,t){if(e.hasOwnProperty("children")&&e.children){var n=!0,r=!1,a=void 0;try{for(var o,d=e.children[Symbol.iterator]();!(n=(o=d.next()).done);n=!0){var s=o.value;if(s===t)return!0;if(s.children)return i(s,t)}}catch(e){r=!0,a=e}finally{try{!n&&d.return&&d.return()}finally{if(r)throw a}}return!1}}t.a={methods:{guid:r,setDragNode:a,getDragNode:o,hasInGenerations:i}}},function(e,t,n){"use strict";t.a={name:"inlineMenu",functional:!0,props:{node:Object,tpl:Function},render:function(e,t){var n=t.props.node.selected?"node-title node-selected":"node-title";return t.props.node.searched&&(n+=" node-searched"),t.props.tpl?t.props.tpl(t.props.node,t):e("span",{domProps:{innerHTML:t.props.node.title},class:n,on:{mouseover:function(){return t.parent.nodeMouseOver(t.props.node)},click:function(){return t.parent.nodeSelected(t.props.node)}}},[])}}},function(e,t,n){"use strict";function r(e){n(8)}var a=n(9),o=n(10),i=n(0),d=r,s=i(a.a,o.a,!1,d,"data-v-3f867612",null);t.a=s.exports},function(e,t){},function(e,t,n){"use strict";t.a={name:"tree-load-svg"}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{viewBox:"0 0 120 120",version:"1.1"}},[n("g",{staticClass:"g-circles g-circles--v3",attrs:{id:"circle"}},[n("circle",{attrs:{id:"12",transform:"translate(35, 16.698730) rotate(-30) translate(-35, -16.698730) ",cx:"35",cy:"16.6987298",r:"10"}}),e._v(" "),n("circle",{attrs:{id:"11",transform:"translate(16.698730, 35) rotate(-60) translate(-16.698730, -35) ",cx:"16.6987298",cy:"35",r:"10"}}),e._v(" "),n("circle",{attrs:{id:"10",transform:"translate(10, 60) rotate(-90) translate(-10, -60) ",cx:"10",cy:"60",r:"10"}}),e._v(" "),n("circle",{attrs:{id:"9",transform:"translate(16.698730, 85) rotate(-120) translate(-16.698730, -85) ",cx:"16.6987298",cy:"85",r:"10"}}),e._v(" "),n("circle",{attrs:{id:"8",transform:"translate(35, 103.301270) rotate(-150) translate(-35, -103.301270) ",cx:"35",cy:"103.30127",r:"10"}}),e._v(" "),n("circle",{attrs:{id:"7",cx:"60",cy:"110",r:"10"}}),e._v(" "),n("circle",{attrs:{id:"6",transform:"translate(85, 103.301270) rotate(-30) translate(-85, -103.301270) ",cx:"85",cy:"103.30127",r:"10"}}),e._v(" "),n("circle",{attrs:{id:"5",transform:"translate(103.301270, 85) rotate(-60) translate(-103.301270, -85) ",cx:"103.30127",cy:"85",r:"10"}}),e._v(" "),n("circle",{attrs:{id:"4",transform:"translate(110, 60) rotate(-90) translate(-110, -60) ",cx:"110",cy:"60",r:"10"}}),e._v(" "),n("circle",{attrs:{id:"3",transform:"translate(103.301270, 35) rotate(-120) translate(-103.301270, -35) ",cx:"103.30127",cy:"35",r:"10"}}),e._v(" "),n("circle",{attrs:{id:"2",transform:"translate(85, 16.698730) rotate(-150) translate(-85, -16.698730) ",cx:"85",cy:"16.6987298",r:"10"}}),e._v(" "),n("circle",{attrs:{id:"1",cx:"60",cy:"10",r:"10"}})])])},a=[],o={render:r,staticRenderFns:a};t.a=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var a=n(12),o=function(){function e(){r(this,e)}return e.prototype.beforeEnter=function(e){(0,a.addClass)(e,"collapse-transition"),e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.height="0",e.style.paddingTop=0,e.style.paddingBottom=0},e.prototype.enter=function(e){e.dataset.oldOverflow=e.style.overflow,0!==e.scrollHeight?(e.style.height=e.scrollHeight+"px",e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom):(e.style.height="",e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom),e.style.overflow="hidden"},e.prototype.afterEnter=function(e){(0,a.removeClass)(e,"collapse-transition"),e.style.height="",e.style.overflow=e.dataset.oldOverflow},e.prototype.beforeLeave=function(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.height=e.scrollHeight+"px",e.style.overflow="hidden"},e.prototype.leave=function(e){0!==e.scrollHeight&&((0,a.addClass)(e,"collapse-transition"),e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0)},e.prototype.afterLeave=function(e){(0,a.removeClass)(e,"collapse-transition"),e.style.height="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom},e}();t.default={name:"ElCollapseTransition",functional:!0,render:function(e,t){var n=t.children;return e("transition",{on:new o},n)}}},function(e,t,n){"use strict";function r(e,t){if(!e||!t)return!1;if(-1!==t.indexOf(" "))throw new Error("className should not contain space.");return e.classList?e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1}function a(e,t){if(e){for(var n=e.className,a=(t||"").split(" "),o=0,i=a.length;o<i;o++){var d=a[o];d&&(e.classList?e.classList.add(d):r(e,d)||(n+=" "+d))}e.classList||(e.className=n)}}function o(e,t){if(e&&t){for(var n=t.split(" "),a=" "+e.className+" ",o=0,d=n.length;o<d;o++){var s=n[o];s&&(e.classList?e.classList.remove(s):r(e,s)&&(a=a.replace(" "+s+" "," ")))}e.classList||(e.className=i(a))}}Object.defineProperty(t,"__esModule",{value:!0}),t.hasClass=r,t.addClass=a,t.removeClass=o;var i=function(e){return(e||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"halo-tree"},e._l(e.data,function(t,r){return n("li",{directives:[{name:"show",rawName:"v-show",value:!t.hasOwnProperty("visible")||t.visible,expression:"item.hasOwnProperty('visible') ? item.visible : true"}],key:t.id?t.id:t.title,class:{leaf:e.isLeaf(t),"first-node":!e.parent&&0===r,"only-node":!e.parent&&1===e.data.length},on:{drop:function(n){e.drop(t,n)},dragover:function(t){e.dragover(t)}}},[n("div",{staticClass:"tree-node-el",attrs:{draggable:e.draggable},on:{dragstart:function(n){e.drag(t,n)}}},[!t.parent||t.children&&t.children.length>0?n("span",{class:t.expanded?"tree-open":"tree-close",on:{click:function(n){e.expandNode(t)}}}):e._e(),e._v(" "),e.multiple&&!t.nocheck?n("span",{class:[t.checked?t.halfcheck?"box-halfchecked":"box-checked":"box-unchecked","inputCheck"]},[e.multiple?n("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"item.checked"}],class:["check",t.chkDisabled?"chkDisabled":""],attrs:{disabled:t.chkDisabled,type:"checkbox"},domProps:{checked:Array.isArray(t.checked)?e._i(t.checked,null)>-1:t.checked},on:{change:[function(n){var r=t.checked,a=n.target,o=!!a.checked;if(Array.isArray(r)){var i=e._i(r,null);a.checked?i<0&&(t.checked=r.concat([null])):i>-1&&(t.checked=r.slice(0,i).concat(r.slice(i+1)))}else e.$set(t,"checked",o)},function(n){e.changeNodeCheckStatus(t,n)}]}}):e._e()]):e._e(),e._v(" "),t.loading&&t.expanded?n("loading"):e._e(),e._v(" "),n("Render",{attrs:{node:t,tpl:e.tpl}}),e._v("\n            "+e._s(t.level)+"\n        ")],1),e._v(" "),n("collapse-transition",[e.isLeaf(t)?e._e():n("tree",{directives:[{name:"show",rawName:"v-show",value:t.expanded,expression:"item.expanded"}],attrs:{dragAfterExpanded:e.dragAfterExpanded,draggable:e.draggable,tpl:e.tpl,data:t.children,halfcheck:e.halfcheck,scoped:e.scoped,parent:t,multiple:e.multiple},on:{"~node-expanded":function(t){e.nodeExpanded(t)},"node-click":e.nodeClick,"drag-node-end":e.dragNodeEnd}})],1)],1)}))},a=[],o={render:r,staticRenderFns:a};t.a=o}])});
//# sourceMappingURL=v2-tree.js.map