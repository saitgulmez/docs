"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4007],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=i(n),f=r,h=p["".concat(c,".").concat(f)]||p[f]||u[f]||s;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var i=2;i<s;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8161:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),o=["components"],l={},c="Verifying a Transfer",i={unversionedId:"developers/cli/transfers/verify-transfer",id:"developers/cli/transfers/verify-transfer",title:"Verifying a Transfer",description:"Prerequisites",source:"@site/source/docs/casper/developers/cli/transfers/verify-transfer.md",sourceDirName:"developers/cli/transfers",slug:"/developers/cli/transfers/verify-transfer",permalink:"/developers/cli/transfers/verify-transfer",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/developers/cli/transfers/verify-transfer.md",tags:[],version:"current",lastUpdatedAt:1707837031,formattedLastUpdatedAt:"Feb 13, 2024",frontMatter:{},sidebar:"developers",previous:{title:"Transferring Tokens using a Multi-Sig Deploy",permalink:"/developers/cli/transfers/multisig-deploy-transfer"},next:{title:"Delegating Tokens",permalink:"/developers/cli/delegate"}},d={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Query the State Root Hash",id:"query-the-state-root-hash",level:2},{value:"Query the Transfer Details",id:"query-transfer-details",level:2},{value:"Query the Account State",id:"query-account-state",level:2},{value:"Query the Purse Balance",id:"get-purse-balance",level:2}],u={toc:p},f="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)(f,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"verifying-a-transfer"},"Verifying a Transfer"),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"Before verifying a transfer, make sure you have:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Initiated a ",(0,s.kt)("a",{parentName:"li",href:"/developers/cli/transfers/direct-token-transfer"},"Direct Transfer")," or ",(0,s.kt)("a",{parentName:"li",href:"/developers/cli/transfers/multisig-deploy-transfer"},"Multi-sig Deploy Transfer")),(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("em",{parentName:"li"},"deploy_hash")," of the transfer you want to verify"),(0,s.kt)("li",{parentName:"ol"},"The ",(0,s.kt)("em",{parentName:"li"},"public key")," of the source and target accounts")),(0,s.kt)("h2",{id:"query-the-state-root-hash"},"Query the State Root Hash"),(0,s.kt)("p",null,"The state root hash is an identifier of the current network state. It gives a snapshot of the blockchain state at a moment in time. You can use the state root hash to query the network state after sending a deploy."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-state-root-hash --node-address [NODE_SERVER_ADDRESS]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example Query:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-state-root-hash --node-address https://rpc.testnet.casperlabs.io\n")),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Sample output of the get-state-root-hash command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "id": 6458079936180872466,\n    "result": {\n        "api_version": "1.5.3",\n        "state_root_hash": "fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1"\n    }\n}\n'))),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"After sending deploys to the network, you must get the new state root hash to see the changes reflected. Otherwise, you will be looking at events in the past.")),(0,s.kt)("h2",{id:"query-transfer-details"},"Query the Transfer Details"),(0,s.kt)("p",null,"A transfer is executed as part of a deploy. In a Casper network, deploys can contain multiple transfers. Execution of the deploy includes writing information about each individual transfer to global state. A unique hash known as the ",(0,s.kt)("inlineCode",{parentName:"p"},"transfer-address")," identifies each transfer. The ",(0,s.kt)("inlineCode",{parentName:"p"},"transfer-address")," consists of a formatted string with a ",(0,s.kt)("inlineCode",{parentName:"p"},"transfer-")," prefix."),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:"/image/transfers/transfer-hash-example.png",alt:"Image showing a transfer hash"})),(0,s.kt)("p",null,"First, use the ",(0,s.kt)("inlineCode",{parentName:"p"},"get-deploy")," command and the ",(0,s.kt)("em",{parentName:"p"},"deploy_hash")," to identify the corresponding transfer:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-deploy \\\n--node-address [NODE_SERVER_ADDRESS]  \\\n[DEPLOY_HASH]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Important response fields:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'"result"."execution_results"."result"."Success"."transfers"')," - List of transfers contained in a successful deploy")),(0,s.kt)("p",null,"After obtaining the transfer identifier, query the transfer details."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state \\\n--id [ID] \\\n--node-address [NODE_SERVER_ADDRESS]  \\\n--state-root-hash [STATE_ROOT_HASH] \\\n--key [TRANSFER_HASH]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Request fields:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"id")," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"state-root-hash")," - The hex-encoded hash of the state root"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"key")," - The base key for the query. This must be a properly formatted transfer address with a ",(0,s.kt)("inlineCode",{parentName:"li"},"transfer-")," prefix, i.e., ",(0,s.kt)("inlineCode",{parentName:"li"},"transfer-ab3e11fd612ccf9ddf5ddb3e5c0b3d3b5e5c0921fd1b45e8c657a63f01d6adcb"))),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"-v")," option generates verbose output, printing the RPC request and response generated. Let's explore an example below."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example Query:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state -v \\\n--id 3 \\\n--node-address https://rpc.testnet.casperlabs.io/  \\\n--state-root-hash fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1 \\\n--key transfer-ab3e11fd612ccf9ddf5ddb3e5c0b3d3b5e5c0921fd1b45e8c657a63f01d6adcb\n")),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Explore the JSON-RPC request and response generated."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "method": "query_global_state",\n    "params": {\n        "state_identifier": {\n            "StateRootHash": "fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1"\n        },\n        "key": "transfer-ab3e11fd612ccf9ddf5ddb3e5c0b3d3b5e5c0921fd1b45e8c657a63f01d6adcb",\n        "path": []\n    },\n    "id": 3\n}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.5.3",\n        "block_header": null,\n        "stored_value": {\n            "Transfer": {\n                "deploy_hash": "4eedbb5cf4a571748cf7ae9c2f17777364a01f80f79f3633a0cec32b7e8cf2e3",\n                "from": "account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655",\n                "to": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n                "source": "uref-11e6fc5354f61a004df98482376c45964b8b1557e8f2f13fb5f3adab5faa8be1-007",\n                "target": "uref-8294864177c2c1ec887a11dae095e487b5256ce6bd2a1f2740d0e4f28bd3251c-004",\n                "amount": "5000000000",\n                "gas": "0",\n                "id": 11102023\n            }\n        },\n        "merkle_proof": "[42526 hex chars]"\n    },\n    "id": 3\n}\n'))),(0,s.kt)("p",null,"The query responds with more information about the transfer: its deploy hash, the account which executed the transfer, the source and target purses, and the target account. You can verify that the transfer processed successfully using this additional information."),(0,s.kt)("h2",{id:"query-account-state"},"Query the Account State"),(0,s.kt)("p",null,"Next, query for information about the ",(0,s.kt)("em",{parentName:"p"},"Source")," account, using the ",(0,s.kt)("inlineCode",{parentName:"p"},"state-root-hash")," of the block containing the transfer:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state \\\n--id [ID] \\\n--node-address [NODE_SERVER_ADDRESS] \\\n--state-root-hash [STATE_ROOT_HASH] \\\n--key [SOURCE_PUBLIC_KEY]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Request fields:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"id")," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"state-root-hash")," - Hex-encoded hash of the network state"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"key")," - The base key for the query. This must be a properly formatted public key, account hash, contract address hash, URef, transfer hash, or deploy-info hash")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Important response fields:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},'"result"."stored_value"."Account"."main_purse"')," - the address of the main purse containing the sender's tokens. In this example, this purse is the source of the tokens transferred")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Source Account Query:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state -v \\\n--id 4 \\\n--node-address https://rpc.testnet.casperlabs.io/  \\\n--state-root-hash fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1 \\\n--key 0154d828baafa6858b92919c4d78f26747430dcbecb9aa03e8b44077dc6266cabf\n")),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Explore the JSON-RPC request and response generated."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "method": "query_global_state",\n    "params": {\n        "state_identifier": {\n            "StateRootHash": "fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1"\n        },\n        "key": "account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655",\n        "path": []\n    },\n    "id": 4\n}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.5.3",\n    "block_header": null,\n    "stored_value": {\n      "Account": {\n        "account_hash": "account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655",\n        "named_keys": [...],\n        "main_purse": "uref-11e6fc5354f61a004df98482376c45964b8b1557e8f2f13fb5f3adab5faa8be1-007",\n        "associated_keys": [\n          {\n            "account_hash": "account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655",\n            "weight": 1\n          }\n        ],\n        "action_thresholds": {\n          "deployment": 1,\n          "key_management": 1\n        }\n      }\n    },\n    "merkle_proof": "[31406 hex chars]"\n  },\n  "id": 4\n}\n'))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Target Account Query:")),(0,s.kt)("p",null,"Repeat the same step to query information about the ",(0,s.kt)("em",{parentName:"p"},"Target")," account:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state -v \\\n--id 5 \\\n--node-address https://rpc.testnet.casperlabs.io/  \\\n--state-root-hash fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1 \\\n--key 01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986\n")),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Explore the JSON-RPC request and response generated."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "method": "query_global_state",\n    "params": {\n        "state_identifier": {\n            "StateRootHash": "fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1"\n        },\n        "key": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n        "path": []\n    },\n    "id": 5\n}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.5.3",\n    "block_header": null,\n    "stored_value": {\n      "Account": {\n        "account_hash": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7",\n        "named_keys": [...],\n        "main_purse": "uref-8294864177c2c1ec887a11dae095e487b5256ce6bd2a1f2740d0e4f28bd3251c-007",\n        "associated_keys": [...],\n        "action_thresholds": {\n          "deployment": 2,\n          "key_management": 3\n        }\n      }\n    },\n    "merkle_proof": "[32060 hex chars]"\n  },\n  "id": 5\n}\n'))),(0,s.kt)("h2",{id:"get-purse-balance"},"Query the Purse Balance"),(0,s.kt)("p",null,"All accounts on a Casper network have a purse associated with the Casper system mint, which is the ",(0,s.kt)("em",{parentName:"p"},"main purse"),". The balance associated with a given purse is recorded in global state, and the value can be queried using the ",(0,s.kt)("inlineCode",{parentName:"p"},"query-balance")," command and the purse identifier, which can be a public key or account hash, implying the main purse of the given account should be used. Alternatively, the purse's URef can be used. For full details, run the following help command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-balance --help\n")),(0,s.kt)("p",null,"Verify the source purse balance using the ",(0,s.kt)("inlineCode",{parentName:"p"},"query-balance")," command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-balance \\\n--id 6 \\\n--node-address [NODE_SERVER_ADDRESS] \\\n--state-root-hash [STATE_ROOT_HAHS] \\\n--purse-identifier [SOURCE_PUBLIC_KEY_HEX]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Request fields:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"id")," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a node on the network"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"state-root-hash")," - Hex-encoded hash of the state root"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"purse-identifier")," - A public key or account hash, implying the main purse of the given account should be used. Alternatively, the purse's URef")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Query Source Account Example:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-balance -v --id 6 \\\n--node-address https://rpc.testnet.casperlabs.io/ \\\n--state-root-hash fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1 \\\n--purse-identifier account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655\n")),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Explore the sample JSON-RPC request and response generated."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "method": "query_balance",\n    "params": {\n        "state_identifier": {\n            "StateRootHash": "fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1"\n        },\n        "purse_identifier": {\n            "main_purse_under_account_hash": "account-hash-e70dbca48c2d31bc2d754e51860ceaa8a1a49dc627b20320b0ecee1b6d9ce655"\n        }\n    },\n    "id": 6\n}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.5.3",\n        "balance": "1109111876194"\n    },\n    "id": 6\n}\n'))),(0,s.kt)("p",null,"Similarly, query the balance of the target purse."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-balance \\\n--id 7 \\\n--node-address [NODE_SERVER_ADDRESS] \\\n--state-root-hash [STATE_ROOT_HAHS] \\\n--purse-identifier [TARGET_PUBLIC_KEY_HEX]\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Target Account Example:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-balance -v --id 7 \\\n--node-address https://rpc.testnet.casperlabs.io/ \\\n--state-root-hash fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1 \\\n--purse-identifier account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7\n")),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Explore the sample JSON-RPC request and response generated."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "method": "query_balance",\n    "params": {\n        "state_identifier": {\n            "StateRootHash": "fdb1474d441ec0fcbf2e088f1630dbf98d3bcf7f7a7fe298303797f35b8cb4e1"\n        },\n        "purse_identifier": {\n            "main_purse_under_account_hash": "account-hash-1ed5a1c39bea93c105f2d22c965a84b205b36734a377d05dbb103b6bfaa595a7"\n        }\n    },\n    "id": 7\n}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.5.3",\n        "balance": "46200000000"\n    },\n    "id": 7\n}\n'))))}h.isMDXComponent=!0}}]);