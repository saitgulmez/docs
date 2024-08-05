"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2807],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(n),h=r,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||c;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<c;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},762:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return d}});var a=n(7462),r=n(3366),c=(n(7294),n(3905)),o=["components"],s={title:"CEP-18 Contract Details",slug:"/resources/tokens/cep18/query"},l="Exploring the CEP-18 Contracts",i={unversionedId:"resources/tokens/cep18/query",id:"resources/tokens/cep18/query",title:"CEP-18 Contract Details",description:"This document covers the necessary information that you will need to interact with your CEP-18 contract instance. Your setup should include the following two contracts:",source:"@site/source/docs/casper/resources/tokens/cep18/query.md",sourceDirName:"resources/tokens/cep18",slug:"/resources/tokens/cep18/query",permalink:"/resources/tokens/cep18/query",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/resources/tokens/cep18/query.md",tags:[],version:"current",lastUpdatedAt:1722867856,formattedLastUpdatedAt:"Aug 5, 2024",frontMatter:{title:"CEP-18 Contract Details",slug:"/resources/tokens/cep18/query"},sidebar:"resources",previous:{title:"On-chain Installation",permalink:"/resources/tokens/cep18/quickstart-guide"},next:{title:"CEP-18 Transfers",permalink:"/resources/tokens/cep18/transfer"}},u={},d=[{value:"Querying the Contract Package",id:"querying-the-contract-package",level:2},{value:"Querying the Utility Contract",id:"querying-the-utility-contract",level:2},{value:"Next Steps",id:"next-steps",level:2}],p={toc:d},h="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,c.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"exploring-the-cep-18-contracts"},"Exploring the CEP-18 Contracts"),(0,c.kt)("p",null,"This document covers the necessary information that you will need to interact with your CEP-18 contract instance. Your setup should include the following two contracts:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"The Casper fungible token contract")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"The CEP-18 utility contract, which should appear in the ",(0,c.kt)("inlineCode",{parentName:"p"},"NamedKeys")," of the account that sent the Deploy as ",(0,c.kt)("inlineCode",{parentName:"p"},"cep18_test_contract")))),(0,c.kt)("h2",{id:"querying-the-contract-package"},"Querying the Contract Package"),(0,c.kt)("p",null,"We will need the contract package's ",(0,c.kt)("inlineCode",{parentName:"p"},"contract_hash")," to interact with the recently installed instance of CEP-18. You can find the contract package hash within the installing account's ",(0,c.kt)("inlineCode",{parentName:"p"},"NamedKeys"),", under the name given during the installation process."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},"casper-client query-global-state -n http://<HOST IP>:<PORT> \\\n// This is the contract package hash, which can be found within the `NamedKeys` of the account that sent the installing deploy.\n--key hash-82bd86d2675b2dc44c19027fb7717a99db6fda5e0cad8d597f2495a9dbc9df7f \\\n// This is the most up to date state root hash, which can found by using the `get-state-root-hash` command in the Casper client.\n--state-root-hash f9f73c3a4da5893b67c4cac94a5695d76cfefff61b050c98a7b19e2b8efd3933\n")),(0,c.kt)("details",null,(0,c.kt)("summary",null,(0,c.kt)("b",null,"Casper client command without comments")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state -n http://<HOST IP>:<PORT> \\\n--key hash-82bd86d2675b2dc44c19027fb7717a99db6fda5e0cad8d597f2495a9dbc9df7f \\\n--state-root-hash f9f73c3a4da5893b67c4cac94a5695d76cfefff61b050c98a7b19e2b8efd3933\n"))),(0,c.kt)("p",null,"This will return the ",(0,c.kt)("inlineCode",{parentName:"p"},"Contract Package")," object:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "id": -1489823435760214673,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.0.0",\n    "block_header": null,\n    "merkle_proof": "[2048 hex chars]",\n    "stored_value": {\n      "ContractPackage": {\n        "access_key": "uref-8dac847ce0ae20f0156cf37dd233cc1d166fde8269fc9a393b0ea04174be1167-007",\n        "disabled_versions": [],\n        "groups": [],\n        "versions": [\n          {\n            "contract_hash": "contract-05d893e76c731729fc26339e5a970bd79fbf4a6adf743c8385431fb494bff45e",\n            "contract_version": 1,\n            "protocol_version_major": 1\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Note - In the ",(0,c.kt)("inlineCode",{parentName:"li"},"contract_hash")," field, the hash value represents the stored contract which we will invoke later.")),(0,c.kt)("h2",{id:"querying-the-utility-contract"},"Querying the Utility Contract"),(0,c.kt)("p",null,"In addition, there is a utility contract that invokes the various balance and allowance entry points of the main fungible token contract. Upon receiving the returned value, the utility contract will write the value to a URef called ",(0,c.kt)("inlineCode",{parentName:"p"},"result"),". You can find this URef in the ",(0,c.kt)("inlineCode",{parentName:"p"},"NamedKeys")," of the utility contract."),(0,c.kt)("p",null,"First, you will need to query the ",(0,c.kt)("inlineCode",{parentName:"p"},"cep18_test_contract")," hash found within the installing account's ",(0,c.kt)("inlineCode",{parentName:"p"},"NamedKeys"),":"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},"casper-client query-global-state -n http://<HOST IP>:<PORT> \\\n// This is the contract hash for the `cep18_test_contract` as found from the installing account's `NamedKeys`\n--key hash-015b99020edb40e7e1e2b31a8e104bc226242f960a2d10dc1d91ae3eb6fa41b6 \\\n--state-root-hash f9f73c3a4da5893b67c4cac94a5695d76cfefff61b050c98a7b19e2b8efd3933\n")),(0,c.kt)("details",null,(0,c.kt)("summary",null,(0,c.kt)("b",null,"Casper client command without comments")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},"casper-client query-global-state -n http://<HOST IP>:<PORT> \\\n--key hash-015b99020edb40e7e1e2b31a8e104bc226242f960a2d10dc1d91ae3eb6fa41b6 \\\n--state-root-hash f9f73c3a4da5893b67c4cac94a5695d76cfefff61b050c98a7b19e2b8efd3933\n"))),(0,c.kt)("p",null,"Which should return information similar to the following:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'\n{\n  "id": 5359405942597097786,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.0.0",\n    "block_header": null,\n    "merkle_proof": "[2048 hex chars]",\n    "stored_value": {\n      "ContractPackage": {\n        "access_key": "uref-1b867a3751f505762c69c8d92ba7462818cd0c2a705bb5d4270bce479410ee55-007",\n        "disabled_versions": [],\n        "groups": [],\n        "versions": [\n          {\n            "contract_hash": "contract-a8fe057675930f0951d45816c55615228ac8af2b7b231788278dffcf1dd8c0ca",\n            "contract_version": 1,\n            "protocol_version_major": 1\n          }\n        ]\n      }\n    }\n  }\n}\n\n')),(0,c.kt)("p",null,"You will need to take the ",(0,c.kt)("inlineCode",{parentName:"p"},"contract_hash")," value and replace ",(0,c.kt)("inlineCode",{parentName:"p"},"contract")," with ",(0,c.kt)("inlineCode",{parentName:"p"},"hash")," to run another `query-global-state:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state -n http://<HOST IP>:<PORT> \\\n--key hash-a8fe057675930f0951d45816c55615228ac8af2b7b231788278dffcf1dd8c0ca \\\n--state-root-hash f9f73c3a4da5893b67c4cac94a5695d76cfefff61b050c98a7b19e2b8efd3933\n")),(0,c.kt)("p",null,"Which will return the full ",(0,c.kt)("inlineCode",{parentName:"p"},"cep18_test_contract")," information. The following snippet is condensed to show only the ",(0,c.kt)("inlineCode",{parentName:"p"},"NamedKeys"),", but you should also see the ",(0,c.kt)("inlineCode",{parentName:"p"},"entry_points")," when you run the command. You should see the URef ",(0,c.kt)("inlineCode",{parentName:"p"},"result"),", which will be used to view the results of any checks run through the utility contract."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "id": -1426549275795832481,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.0.0",\n    "block_header": null,\n    "merkle_proof": "[3370 hex chars]",\n    "stored_value": {\n      "Contract": {\n        "contract_package_hash": "contract-package-015b99020edb40e7e1e2b31a8e104bc226242f960a2d10dc1d91ae3eb6fa41b6",\n        "contract_wasm_hash": "contract-wasm-7959083a4df983ddcd3a9ae46af092dbf126031181ab2619ddc64db09bde8c27",\n        "named_keys": [\n          {\n            "key": "uref-a46ad389b53715d9991a513c8ca48e1502facc4c563c0700a31e830c4cb8a7d4-007",\n            "name": "result"\n          }\n        ],\n        "protocol_version": "1.0.0"\n      }\n    }\n  }\n}\n\n')),(0,c.kt)("h2",{id:"next-steps"},"Next Steps"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/resources/tokens/cep18/transfer"},"CEP-18 Token Transfers and Allowances"))))}f.isMDXComponent=!0}}]);