(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{199:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),c=(r(0),r(228)),o={},i={unversionedId:"FE/React/React\u8bfb\u6e90\u7801/\u5f00\u59cb:reactDOM/reconciler\u90e8\u5206",id:"FE/React/React\u8bfb\u6e90\u7801/\u5f00\u59cb:reactDOM/reconciler\u90e8\u5206",isDocsHomePage:!1,title:"reconciler\u90e8\u5206",description:"\u76ee\u524dReactFiberReconciler\u5b58\u5728\u65b0\u65e7\u4e24\u4e2a\u7248\u672c\uff0c\u65b0\u7248\u672c\u8fd8\u5904\u4e8e\u6d4b\u8bd5\u9636\u6bb5\uff0c\u9ed8\u8ba4\u4f7f\u7528\u7684\u662f\u65e7\u7248\u672cReactFiberReconciler\u3002",source:"@site/docs/FE/React/React\u8bfb\u6e90\u7801/\u5f00\u59cb:reactDOM/reconciler\u90e8\u5206.md",slug:"/FE/React/React\u8bfb\u6e90\u7801/\u5f00\u59cb:reactDOM/reconciler\u90e8\u5206",permalink:"/docs/FE/React/React\u8bfb\u6e90\u7801/\u5f00\u59cb:reactDOM/reconciler\u90e8\u5206",version:"current"},l=[],p={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u76ee\u524d",Object(c.b)("inlineCode",{parentName:"p"},"ReactFiberReconciler"),"\u5b58\u5728\u65b0\u65e7\u4e24\u4e2a\u7248\u672c\uff0c\u65b0\u7248\u672c\u8fd8\u5904\u4e8e\u6d4b\u8bd5\u9636\u6bb5\uff0c\u9ed8\u8ba4\u4f7f\u7528\u7684\u662f\u65e7\u7248\u672c",Object(c.b)("inlineCode",{parentName:"p"},"ReactFiberReconciler"),"\u3002"),Object(c.b)("p",null,"\u901a\u8fc7",Object(c.b)("inlineCode",{parentName:"p"},"shared/ReactFeatureFlags"),"\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"enableNewReconciler"),"\u53d8\u91cf\u6765\u63a7\u5236"),Object(c.b)("p",null,"\u5148\u5927\u6982\u770b\u770b",Object(c.b)("inlineCode",{parentName:"p"},"ReactFiberReconciler"),"\u6709\u4e9b\u5565\u5185\u5bb9\uff1f\n\u57fa\u672c\u90fd\u548c\u6e32\u67d3\u76f8\u5173"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"createContainer"),Object(c.b)("li",{parentName:"ul"},"updateContainer"),Object(c.b)("li",{parentName:"ul"},"batchedEventUpdates"),Object(c.b)("li",{parentName:"ul"},"batchedUpdates"),Object(c.b)("li",{parentName:"ul"},"unbatchedUpdates"),Object(c.b)("li",{parentName:"ul"},"deferredUpdates"),Object(c.b)("li",{parentName:"ul"},"syncUpdates"),Object(c.b)("li",{parentName:"ul"},"discreteUpdates"),Object(c.b)("li",{parentName:"ul"},"flushDiscreteUpdates"),Object(c.b)("li",{parentName:"ul"},"flushControlled"),Object(c.b)("li",{parentName:"ul"},"flushSync"),Object(c.b)("li",{parentName:"ul"},"flushPassiveEffects"),Object(c.b)("li",{parentName:"ul"},"IsThisRendererActing"),Object(c.b)("li",{parentName:"ul"},"getPublicRootInstance"),Object(c.b)("li",{parentName:"ul"},"attemptSynchronousHydration"),Object(c.b)("li",{parentName:"ul"},"attemptUserBlockingHydration"),Object(c.b)("li",{parentName:"ul"},"attemptContinuousHydration\n......")))}u.isMDXComponent=!0},228:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(r),O=n,m=b["".concat(o,".").concat(O)]||b[O]||s[O]||c;return r?a.a.createElement(m,i(i({ref:t},p),{},{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=O;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);