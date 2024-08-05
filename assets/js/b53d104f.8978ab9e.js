"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3532],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return y}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},529:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={title:"Hash Types"},s="Understanding Hash Types",p={unversionedId:"concepts/hash-types",id:"concepts/hash-types",title:"Hash Types",description:"For the sake of user convenience and compatibility, we expect the delivery of hashes and similar data in the form of a prefixed string when using the node. The following is a list of string representations used.",source:"@site/source/docs/casper/concepts/hash-types.md",sourceDirName:"concepts",slug:"/concepts/hash-types",permalink:"/concepts/hash-types",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/concepts/hash-types.md",tags:[],version:"current",lastUpdatedAt:1722867856,formattedLastUpdatedAt:"Aug 5, 2024",frontMatter:{title:"Hash Types"},sidebar:"concepts",previous:{title:"Accounts and Keys",permalink:"/concepts/accounts-and-keys"},next:{title:"Deploy Lifecycle",permalink:"/deploy-and-deploy-lifecycle"}},c={},d=[{value:"Table of Associated Hash Types",id:"table-of-associated-hash-types",level:2},{value:"Hash and Key Explanations",id:"hash-and-key-explanations",level:2}],u={toc:d},m="wrapper";function y(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"understanding-hash-types"},"Understanding Hash Types"),(0,l.kt)("p",null,"For the sake of user convenience and compatibility, we expect the delivery of hashes and similar data in the form of a prefixed string when using the node. The following is a list of string representations used."),(0,l.kt)("h2",{id:"table-of-associated-hash-types"},"Table of Associated Hash Types"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PublicKey"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"018a88e3dd7409f195fd52db2d3cba5d72ca6709bf1d94121bf3748801b40f6f5c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AccountHash"),(0,l.kt)("td",{parentName:"tr",align:null},"account-hash-"),(0,l.kt)("td",{parentName:"tr",align:null},"account-hash-ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ContractHash"),(0,l.kt)("td",{parentName:"tr",align:null},"contract-"),(0,l.kt)("td",{parentName:"tr",align:null},"contract-0101010101010101010101010101010101010101010101010101010101010101")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ContractPackageHash"),(0,l.kt)("td",{parentName:"tr",align:null},"contract-package-"),(0,l.kt)("td",{parentName:"tr",align:null},"contract-package-0101010101010101010101010101010101010101010101010101010101010101")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Key::Account"),(0,l.kt)("td",{parentName:"tr",align:null},"account-hash-"),(0,l.kt)("td",{parentName:"tr",align:null},"account-hash-ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Key::Hash"),(0,l.kt)("td",{parentName:"tr",align:null},"hash-"),(0,l.kt)("td",{parentName:"tr",align:null},"hash-0101010101010101010101010101010101010101010101010101010101010101")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Key::URef"),(0,l.kt)("td",{parentName:"tr",align:null},"uref-"),(0,l.kt)("td",{parentName:"tr",align:null},"uref-0101010101010101010101010101010101010101010101010101010101010101-001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Key::Transfer"),(0,l.kt)("td",{parentName:"tr",align:null},"transfer-"),(0,l.kt)("td",{parentName:"tr",align:null},"transfer-0101010101010101010101010101010101010101010101010101010101010101")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Key::DeployInfo"),(0,l.kt)("td",{parentName:"tr",align:null},"deploy-"),(0,l.kt)("td",{parentName:"tr",align:null},"deploy-0101010101010101010101010101010101010101010101010101010101010101")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Key::EraInfo"),(0,l.kt)("td",{parentName:"tr",align:null},"era-"),(0,l.kt)("td",{parentName:"tr",align:null},"era-1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Key::Balance"),(0,l.kt)("td",{parentName:"tr",align:null},"balance-"),(0,l.kt)("td",{parentName:"tr",align:null},"balance-0101010101010101010101010101010101010101010101010101010101010101")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Key::Bid"),(0,l.kt)("td",{parentName:"tr",align:null},"bid-"),(0,l.kt)("td",{parentName:"tr",align:null},"bid-ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Key::Withdraw"),(0,l.kt)("td",{parentName:"tr",align:null},"withdraw-"),(0,l.kt)("td",{parentName:"tr",align:null},"withdraw-ef4687f74d465826239bab05c4e1bdd2223dd8c201b96f361f775125e624ef70")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Key::Dictionary"),(0,l.kt)("td",{parentName:"tr",align:null},"dictionary-"),(0,l.kt)("td",{parentName:"tr",align:null},"dictionary-0101010101010101010101010101010101010101010101010101010101010101")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Key::SystemContractRegistry"),(0,l.kt)("td",{parentName:"tr",align:null},"system-contract-registry-"),(0,l.kt)("td",{parentName:"tr",align:null},"system-contract-registry-00000000000000000000000000000000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Key::EraSummary"),(0,l.kt)("td",{parentName:"tr",align:null},"era-summary-"),(0,l.kt)("td",{parentName:"tr",align:null},"era-summary-00000000000000000000000000000000")))),(0,l.kt)("h2",{id:"hash-and-key-explanations"},"Hash and Key Explanations"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PublicKey")," is a 32 byte asymmetric public key, preceded by a one-byte prefix that tells whether the key is ",(0,l.kt)("inlineCode",{parentName:"p"},"ed25519")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"secp256k1"),". There is a third type of ",(0,l.kt)("inlineCode",{parentName:"p"},"PublicKey")," that refers to the system and it is a single ",(0,l.kt)("inlineCode",{parentName:"p"},"00"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"AccountHash")," is a 32 byte hash of the ",(0,l.kt)("inlineCode",{parentName:"p"},"PublicKey")," serving to identify user accounts."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ContractHash")," is the 32 byte hash of specific smart contract versions. You can use this to call specific contract versions."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ContractPackageHash")," is a 32 byte hash of the smart contract package. This hash directs you to the contract package. The function ",(0,l.kt)("inlineCode",{parentName:"p"},"call_versioned_contract")," uses ",(0,l.kt)("inlineCode",{parentName:"p"},"ContractPackageHash")," and allows you to call the latest version of the contract (by default). It also allows you to call any version stored previously to the package."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Key")," is a wrapper type that may contain one of several possible sets of data."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Key::Account")," contains an AccountHash."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Key::Hash")," contains a byte array with a length of 32, and as such can be used to pass any of the hashes. Please take note that the developer of the contract is responsible for implementation of any checks necessary on the receiving side."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Key::URef")," contains an URef suffixed by access rights."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Key::Transfer")," should contain the address hash for a transfer."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Key::DeployInfo")," retains the address hash of deploy information."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Key::EraInfo")," is the integer number of the associated era."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Key::Balance")," is the balance of a purse."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Key::Bid")," is used to keep track of bids for the auction contract. It is not generally used by users."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Key::Withdraw")," is used to keep track of withdraws for the auction contract. It is not generally used by users and exists in a historical context."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Key::Dictionary")," is the hash derived from a URef and a piece of arbitrary data and leads to a dictionary."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Key::SystemContractRegistry")," is a unique ",(0,l.kt)("inlineCode",{parentName:"li"},"Key")," under which a mapping of the names and ContractHashes for system contracts, including ",(0,l.kt)("inlineCode",{parentName:"li"},"Mint"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Auction"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"HandlePayment")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"StandardPayment"),", is stored."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Key::EraSummary")," is a ",(0,l.kt)("inlineCode",{parentName:"li"},"Key")," under which we store current era info.")))}y.isMDXComponent=!0}}]);