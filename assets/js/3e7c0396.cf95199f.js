"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1714],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9305:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),c=["components"],s={},i="Smart Contracts",l={unversionedId:"concepts/smart-contracts",id:"concepts/smart-contracts",title:"Smart Contracts",description:"Smart Contracts in General",source:"@site/source/docs/casper/concepts/smart-contracts.md",sourceDirName:"concepts",slug:"/concepts/smart-contracts",permalink:"/concepts/smart-contracts",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/concepts/smart-contracts.md",tags:[],version:"current",lastUpdatedAt:1722867856,formattedLastUpdatedAt:"Aug 5, 2024",frontMatter:{},sidebar:"concepts",previous:{title:"Global State",permalink:"/concepts/global-state"},next:{title:"Authorization Keys",permalink:"/concepts/list-auth-keys"}},p={},u=[{value:"Smart Contracts in General",id:"smart-contracts-in-general",level:2},{value:"Casper Smart Contracts",id:"casper-smart-contracts",level:2},{value:"Session Code",id:"session-code",level:2},{value:"Further Reading",id:"further-reading",level:3}],m={toc:u},d="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"smart-contracts"},"Smart Contracts"),(0,o.kt)("h2",{id:"smart-contracts-in-general"},"Smart Contracts in General"),(0,o.kt)("p",null,"A smart contract is a self-executing program that automates the actions required in a digital agreement. Once completed, the transactions are trackable and irreversible. Smart contracts permit trusted transactions and agreements among disparate, anonymous parties without the need for a central authority, legal system, or external enforcement mechanism."),(0,o.kt)("h2",{id:"casper-smart-contracts"},"Casper Smart Contracts"),(0,o.kt)("p",null,"Casper smart contracts can be implemented in any programming language that compiles to ",(0,o.kt)("a",{parentName:"p",href:"/concepts/glossary/W#webassembly"},"Wasm"),", which can be installed and executed on-chain using ",(0,o.kt)("a",{parentName:"p",href:"/concepts/glossary/D#deploy"},"Deploys"),". Most documentation examples and the Casper system contracts are written in Rust. You can find a guide to writing a simple, smart contract in Rust ",(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/simple-contract"},"here"),"."),(0,o.kt)("h2",{id:"session-code"},"Session Code"),(0,o.kt)("p",null,"Session code is the simplest logic one can execute on a Casper network. It is essential because it is often used to trigger contract logic stored on-chain. Entry points in a contract provide access to the contract code installed in global state. Either ",(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/contract-vs-session#what-is-session-code"},"session code")," or another smart contract may call these entry points. Understand when you would use session code over contract code ",(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/contract-vs-session"},"here"),"."),(0,o.kt)("h3",{id:"further-reading"},"Further Reading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/writing-onchain-code/simple-contract"},"Writing Contracts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/cli/sending-deploys"},"Sending a Deploy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/cli/installing-contracts"},"Installing Smart Contracts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/writing-onchain-code/calling-contracts"},"Calling Smart Contracts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/cli/calling-contracts"},"Calling Smart Contracts using the Casper Client")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/developers/writing-onchain-code/contract-vs-session"},"Smart Contracts and Session Code"))))}f.isMDXComponent=!0}}]);