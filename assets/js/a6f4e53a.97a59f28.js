"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9989],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=i,m=c["".concat(s,".").concat(u)]||c[u]||h[u]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6755:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={},s="Redelegating Tokens with the Casper Client",d={unversionedId:"developers/cli/redelegate",id:"developers/cli/redelegate",title:"Redelegating Tokens with the Casper Client",description:"This document details a workflow where tokens staked with a validator can be redelegated to another validator with a single call while the unbonding process runs in the background. Otherwise, delegators would have to complete two steps by sending an unbonding request first and then delegate the tokens to the new validator.",source:"@site/source/docs/casper/developers/cli/redelegate.md",sourceDirName:"developers/cli",slug:"/developers/cli/redelegate",permalink:"/developers/cli/redelegate",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/developers/cli/redelegate.md",tags:[],version:"current",lastUpdatedAt:1722867856,formattedLastUpdatedAt:"Aug 5, 2024",frontMatter:{},sidebar:"developers",previous:{title:"Delegating Tokens",permalink:"/developers/cli/delegate"},next:{title:"Undelegating Tokens",permalink:"/developers/cli/undelegate"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Method 1: Redelegating with the System Auction Contract",id:"redelegating-system-auction",level:2},{value:"Method 2: Redelegating with Compiled Wasm",id:"bonding-compiled-wasm",level:2},{value:"Sending the redelegation request",id:"sending-the-redelegation-deploy",level:3},{value:"Verifying the Redelegation",id:"verifying-the-redelegation",level:2}],h={toc:c},u="wrapper";function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)(u,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"redelegating-tokens-with-the-casper-client"},"Redelegating Tokens with the Casper Client"),(0,o.kt)("p",null,"This document details a workflow where tokens staked with a validator can be redelegated to another validator with a single call while the unbonding process runs in the background. Otherwise, delegators would have to complete two steps by sending an ",(0,o.kt)("a",{parentName:"p",href:"/developers/cli/undelegate"},"unbonding request")," first and then ",(0,o.kt)("a",{parentName:"p",href:"/developers/cli/delegate"},"delegate")," the tokens to the new validator."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You meet all ",(0,o.kt)("a",{parentName:"li",href:"/developers/prerequisites"},"prerequisites"),", including having a valid ",(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," and the Casper command-line client"),(0,o.kt)("li",{parentName:"ol"},"You have ",(0,o.kt)("a",{parentName:"li",href:"/developers/cli/delegate"},"delegated tokens")," to a validator on a Casper network, and you have the validator's public key"),(0,o.kt)("li",{parentName:"ol"},"You have the public key of the new validator to whom you wish to redelegate tokens. See ",(0,o.kt)("a",{parentName:"li",href:"/developers/cli/delegate#acquiring-a-validators-public-key"},"Acquiring a Validator's Public Key")," for more details")),(0,o.kt)("h2",{id:"redelegating-system-auction"},"Method 1: Redelegating with the System Auction Contract"),(0,o.kt)("p",null,"This method calls the existing ",(0,o.kt)("inlineCode",{parentName:"p"},"redelegate")," entry point from the system auction contract. Using this method, you do not need to build contracts, reducing cost and complexity."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n--node-address <HOST:PORT> \\\n--secret-key <PATH_TO_DELEGATOR_SECRET_KEY> \\\n--chain-name <CHAIN_NAME> \\\n--payment-amount 2500000000 \\\n--session-hash <SESSION_HASH> \\\n--session-entry-point redelegate \\\n--session-arg \"delegator:public_key='<DELEGATOR_PUBLIC_KEY_HEX>'\" \\\n--session-arg \"validator:public_key='<CURRENT_VALIDATOR_PUBLIC_KEY_HEX>'\" \\\n--session-arg \"amount:u512='<DELEGATION_AMOUNT>'\" \\\n--session-arg \"new_validator:public_key='<NEW_VALIDATOR_PUBLIC_KEY_HEX>'\"\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"secret-key")," - The file name containing the secret key of the account paying for the Deploy"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"chain-name")," - The chain-name to the network where you wish to send the Deploy. For Mainnet, use ",(0,o.kt)("em",{parentName:"li"},"casper"),". For Testnet, use ",(0,o.kt)("em",{parentName:"li"},"casper-test")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"payment-amount")," - The payment for the Deploy in motes. This entry point call needs 2.5 CSPR"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"session-hash")," - Hex-encoded hash of the stored auction contract, which depends on the network you are using. For Casper's Mainnet and Testnet, the hashes are as follows:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Testnet"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"hash-93d923e336b20a4c4ca14d592b60e5bd3fe330775618290104f9beb326db7ae2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Mainnet"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"hash-ccb576d6ce6dec84a551e48f0d0b7af89ddba44c7390b690036257a04a3ae9ea"))),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"session-entry-point")," - Name of the entrypoint that will be used when calling the contract")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"redelegate")," entry point expects four arguments:"),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"delegator:public_key"),": The hexadecimal public key of the account submitting the redelegate request. This key must match the secret key that signs the deploy"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"validator:public_key"),": The hexadecimal public key of the validator from whom the tokens will be undelegated"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"amount"),": The amount to be redelegated to the new validator"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"new_validator:public_key"),": The hexadecimal public key of the validator to whom the tokens will be delegated")),(0,o.kt)("p",null,"The command will return a deploy hash, which is needed to verify the deploy's processing results."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"redelegate")," entry point on the auction contract has a fixed cost of 2.5 CSPR and there is a minimum delegation amount of 500 CSPR that also applies to redelegations.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("p",null,"This example uses a private network running ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-node")," version 1.5. The payment amount specified is 2.5 CSPR. You must modify the payment and other values in the deploy based on the network's ",(0,o.kt)("a",{parentName:"p",href:"/concepts/glossary/C#chainspec"},"chainspec.toml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n--node-address http://3.143.158.19:7777  \\\n--chain-name integration-test \\\n--secret-key ~/KEYS/integration/Test_secret_key.pem \\\n--payment-amount 2500000000 \\\n--session-hash hash-e22d38bcf3454a93face78a353feaccbf1d637d1ef9ef2e061a655728ff59bbe \\\n--session-entry-point redelegate \\\n--session-arg \"validator:public_key='017fec504c642f2b321b8591f1c3008348c57a81acafceb5a392cf8416a5fb4a3c'\" \\\n--session-arg \"amount:u512='500000000000'\" \\\n--session-arg \"delegator:public_key='01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986'\" \\\n--session-arg \"new_validator:public_key='019e7b8bdec03ba83be4f5443d9f7f9111c77fec984ce9bb5bb7eb3da1e689c02d'\"\n")),(0,o.kt)("p",null,"Next, ",(0,o.kt)("a",{parentName:"p",href:"#verifying-the-redelegation"},"verify the redelegation"),"."),(0,o.kt)("h2",{id:"bonding-compiled-wasm"},"Method 2: Redelegating with Compiled Wasm"),(0,o.kt)("p",null,"Another way to send a redelegation is to compile the ",(0,o.kt)("inlineCode",{parentName:"p"},"redelegate.wasm")," and send it to the network via a deploy. To compile the Wasm yourself, ",(0,o.kt)("a",{parentName:"p",href:"/developers/cli/delegate#building-the-delegation-wasm"},"build the casper-node contracts")," that will include the redelegation Wasm."),(0,o.kt)("h3",{id:"sending-the-redelegation-deploy"},"Sending the redelegation request"),(0,o.kt)("p",null,"We recommend testing the following steps on the official Testnet before performing them in a live environment like the Casper Mainnet."),(0,o.kt)("p",null,"This example uses the Casper client to send a deploy containing the ",(0,o.kt)("inlineCode",{parentName:"p"},"redelegate.wasm")," to the network to initiate the redelegation process."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n--node-address <HOST:PORT> \\\n--secret-key <PATH_TO_DELEGATOR_SECRET_KEY> \\\n--chain-name <CHAIN_NAME> \\\n--payment-amount <PAYMENT_AMOUNT> \\\n--session-path <PATH_TO_WASM>/redelegate.wasm \\\n--session-arg \"delegator:public_key='<DELEGATOR_PUBLIC_KEY_HEX>'\" \\\n--session-arg \"validator:public_key='<CURRENT_VALIDATOR_PUBLIC_KEY_HEX>'\" \\\n--session-arg \"amount:u512='<DELEGATION_AMOUNT>'\" \\\n--session-arg \"new_validator:public_key='<NEW_VALIDATOR_PUBLIC_KEY_HEX>'\"\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"secret-key")," - The file name containing the secret key of the account paying for the Deploy"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"chain-name")," - The chain-name to the network where you wish to send the Deploy. For Mainnet, use ",(0,o.kt)("em",{parentName:"li"},"casper"),". For Testnet, use ",(0,o.kt)("em",{parentName:"li"},"casper-test")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"payment-amount")," - The payment for the Deploy in motes. This entry point call needs 2.5 CSPR"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"session-path")," - The path to the ",(0,o.kt)("inlineCode",{parentName:"li"},"redelegate.wasm")," on your computer")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"redelegate.wasm")," expects four arguments:"),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"delegator:public_key"),": The hexadecimal public key of the account submitting the redelegate request. This key must match the secret key that signs the deploy"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"validator:public_key"),": The hexadecimal public key of the validator from whom the tokens will be undelegated"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"amount"),": The amount to be redelegated to the new validator"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"new_validator:public_key"),": The hexadecimal public key of the validator to whom the tokens will be delegated")),(0,o.kt)("p",null,"Save the returned ",(0,o.kt)("em",{parentName:"p"},"deploy_hash")," from the output to ",(0,o.kt)("a",{parentName:"p",href:"/resources/tutorials/beginner/querying-network#querying-deploys"},"query information")," about the redelegation Deploy."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Running the ",(0,o.kt)("inlineCode",{parentName:"p"},"redelegate.wasm")," is a more expensive operation than calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"redelegate")," entrypoint from the system auction contract.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("p",null,"This example uses a private network running ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-node")," version 1.5. The payment amount specified is 8 CSPR. You must modify the payment and other values in the deploy based on the network's ",(0,o.kt)("a",{parentName:"p",href:"/concepts/glossary/C#chainspec"},"chainspec.toml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n--node-address http://3.143.158.19:7777  \\\n--chain-name integration-test \\\n--secret-key ~/KEYS/integration/Test_secret_key.pem \\\n--payment-amount 8000000000 \\\n--session-path ~/redelegate.wasm \\\n--session-arg \"validator:public_key='017fec504c642f2b321b8591f1c3008348c57a81acafceb5a392cf8416a5fb4a3c'\" \\\n--session-arg \"amount:u512='500000000000'\" \\\n--session-arg \"delegator:public_key='01360af61b50cdcb7b92cffe2c99315d413d34ef77fadee0c105cc4f1d4120f986'\" \\\n--session-arg \"new_validator:public_key='019e7b8bdec03ba83be4f5443d9f7f9111c77fec984ce9bb5bb7eb3da1e689c02d'\"\n")),(0,o.kt)("h2",{id:"verifying-the-redelegation"},"Verifying the Redelegation"),(0,o.kt)("p",null,"The redelegation process includes an unbonding delay before the tokens are redelegated to a new validator. In contrast, initial delegation occurs when a Casper network finalizes the associated Deploy."),(0,o.kt)("p",null,"Due to this delay, the new validator may become inactive before the redelegation completes. If this happens, the tokens will be returned to the delegator."),(0,o.kt)("p",null,"Once the redelegation Deploy has been processed, you can query the auction to confirm the redelegation. This process is the same as ",(0,o.kt)("a",{parentName:"p",href:"/developers/cli/delegate#confirming-the-delegation"},"verifying a delegation request")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-client get-auction-info")," command."))}m.isMDXComponent=!0}}]);