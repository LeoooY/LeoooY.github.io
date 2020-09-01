(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{187:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return l}));var r=t(2),a=t(6),o=(t(0),t(228)),c={},i={unversionedId:"IDE/vscode/debug/index",id:"IDE/vscode/debug/index",isDocsHomePage:!1,title:"index",description:"Debug in vscode",source:"@site/docs/IDE/vscode/debug/index.md",slug:"/IDE/vscode/debug/index",permalink:"/docs/IDE/vscode/debug/index",version:"current"},u=[{value:"Debugger extensions",id:"debugger-extensions",children:[]},{value:"<code>debug</code>\u5feb\u6377\u952e",id:"debug\u5feb\u6377\u952e",children:[]},{value:"\u5e38\u7528\u8c03\u8bd5\u914d\u7f6e Launch configurations \uff08<code>Launch.json</code>\uff09",id:"\u5e38\u7528\u8c03\u8bd5\u914d\u7f6e-launch-configurations-\uff08launchjson\uff09",children:[]},{value:"Launch and Attach",id:"launch-and-attach",children:[]},{value:"Multi-target debugging",id:"multi-target-debugging",children:[]}],s={rightToc:u};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"debug-in-vscode"},Object(o.b)("a",Object(r.a)({parentName:"h1"},{href:"https://code.visualstudio.com/Docs/editor/debugging"}),"Debug in vscode")),Object(o.b)("h3",{id:"debugger-extensions"},"Debugger extensions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"python"),Object(o.b)("li",{parentName:"ul"},"C/C++"),Object(o.b)("li",{parentName:"ul"},"Js(NodeJs,Chrome)")),Object(o.b)("h3",{id:"debug\u5feb\u6377\u952e"},Object(o.b)("inlineCode",{parentName:"h3"},"debug"),"\u5feb\u6377\u952e"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"1 start debug:\n\n\u8fd0\u884c\u8c03\u8bd5                    F5\nCommand Palette            Ctrl+Shift+P\n\n\n2 debug action:\n\nContinue / Pause            F5\nStep Over                   F10\nStep Into                   F11\nStep Out                    Shift+F11\nRestart                     Ctrl+Shift+F5\nStop                        Shift+F5\n\n3 break points & log points & data inspection(variable & watch) & call stack:\n\n4 launch.json attributes:\n\n")),Object(o.b)("h3",{id:"\u5e38\u7528\u8c03\u8bd5\u914d\u7f6e-launch-configurations-\uff08launchjson\uff09"},"\u5e38\u7528\u8c03\u8bd5\u914d\u7f6e Launch configurations \uff08",Object(o.b)("inlineCode",{parentName:"h3"},"Launch.json"),"\uff09"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"setting.json \ntask.json\nlaunch.json\n\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://code.visualstudio.com/docs/editor/variables-reference"}),"Variables Reference- vscode\u4e2d\u5404\u79cd.json\u6587\u4ef6\u53ef\u7528\u7684\u53d8\u91cf"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"eg:\n${workspaceFolder}           //   /src\n${fileBasename}              //\u6587\u4ef6\u8def\u5f84\u5e26\u540e\u7f00, \u5982 index.c\n${fileBasenameNoExtension}   //\u6587\u4ef6\u8def\u5f84\u4e0d\u5e26\u540e\u7f00, \u5982 index\n${fileDirname}                // the current opened file's dirname /src/\n")),Object(o.b)("h3",{id:"launch-and-attach"},"Launch and Attach"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The best way to explain the difference between launch and attach is to think of a launch configuration as a recipe for how to start your app in debug mode before VS Code attaches to it, while an attach configuration is a recipe for how to connect VS Code's debugger to an app or process that's already running.")),Object(o.b)("p",null,"VS Code debuggers typically support launching a program in debug mode or attaching to an already running program in debug mode. Depending on the request (attach or launch), different attributes are required, and VS Code's launch.json validation and suggestions should help with that."),Object(o.b)("h3",{id:"multi-target-debugging"},"Multi-target debugging"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"For complex scenarios involving more than one process (for example, a client and a server), VS Code supports multi-target debugging.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Using multi-target debugging is simple: after you've started a first debug session, you can just launch another session. As soon as a second session is up and running, the VS Code UI switches to multi-target mode:")))}l.isMDXComponent=!0},228:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(t),p=r,g=d["".concat(c,".").concat(p)]||d[p]||b[p]||o;return t?a.a.createElement(g,i(i({ref:n},s),{},{components:t})):a.a.createElement(g,i({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);