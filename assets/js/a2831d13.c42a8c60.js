"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5826],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4070:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={title:"Ownership Lookup",slug:"/resources/tokens/cep78/reverse-lookup"},l="Owner Reverse Lookup Functionality",c={unversionedId:"resources/tokens/cep78/reverse-lookup",id:"resources/tokens/cep78/reverse-lookup",title:"Ownership Lookup",description:"In version 1.0 of the CEP-78 Enhanced NFT Standard contract, tracking minted tokens consisted of a single, unbounded list that would grow in size with each additional token. As a result, gas costs would increase over time as the list must be overwritten with each new minting. The related tutorial can be found here.",source:"@site/source/docs/casper/resources/tokens/cep78/reverse-lookup.md",sourceDirName:"resources/tokens/cep78",slug:"/resources/tokens/cep78/reverse-lookup",permalink:"/resources/tokens/cep78/reverse-lookup",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/resources/tokens/cep78/reverse-lookup.md",tags:[],version:"current",lastUpdatedAt:1707837031,formattedLastUpdatedAt:"Feb 13, 2024",frontMatter:{title:"Ownership Lookup",slug:"/resources/tokens/cep78/reverse-lookup"},sidebar:"resources",previous:{title:"On-chain Installation",permalink:"/resources/tokens/using-casper-client"},next:{title:"CEP-78 JavaScript Client",permalink:"/resources/tokens/cep78/js-tutorial"}},p={},u=[{value:"The CEP-78 Page System",id:"the-cep-78-page-system",level:2},{value:"Updated Receipts",id:"updated-receipts",level:2}],d={toc:u},h="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)(h,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"owner-reverse-lookup-functionality"},"Owner Reverse Lookup Functionality"),(0,r.kt)("p",null,"In version 1.0 of the CEP-78 Enhanced NFT Standard contract, tracking minted tokens consisted of a single, unbounded list that would grow in size with each additional token. As a result, gas costs would increase over time as the list must be overwritten with each new minting. The related tutorial can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep-78-enhanced-nft/blob/dev/tutorials/token-ownership-tutorial.md"},"here"),"."),(0,r.kt)("p",null,"In an effort to stabilize the gas costs of larger NFT collections, version 1.1 of CEP-78 includes the use of a pre-allocated page system to track ownership of NFTs within the contract."),(0,r.kt)("p",null,"This system stabilizes the cost for interacting with the contract, but not the mint price itself. The size of metadata for a collection, and any differences in that metadata, will still result in some fluctuation in the price for the NFT itself. However, the cost of engaging the system itself will remain stable. Users can expect to pay a higher upfront price for page allocation, but will not need to pay this cost again for any NFTs minted within that given page."),(0,r.kt)("h2",{id:"the-cep-78-page-system"},"The CEP-78 Page System"),(0,r.kt)("p",null,"Ownership of NFTs within a CEP-78 contract is now tracked with a series of ",(0,r.kt)("inlineCode",{parentName:"p"},"pages"),", with each page tracking a range of 1,000 tokens each. When installing an instance of the CEP-78 contract, the user determines the total token supply. This, in turn, determines the maximum number of pages, i.e., for a 10,000 token collection, each account could have up to 10 pages numbering from 0-9 tracking ownership of NFTs."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"page_table")," tracks which pages within a range have been allocated and set for a certain user. The size of the page table directly correlates to the total token supply, i.e. for a CEP-78 instance tracking 10,000 tokens, the page table would be 10 bits wide. For a total of 20,000 it would be 20 bits wide. The cost of the initial page table allocation depends on the overall total size of a collection, with larger collections possessing correspondingly greater gas costs. To make initial minting costs more stable across contracts, the process of allocating a page table has been shifted to the ",(0,r.kt)("inlineCode",{parentName:"p"},"register_owner")," entrypoint."),(0,r.kt)("p",null,"After registering as an owner, the contract creates an entry within the ",(0,r.kt)("inlineCode",{parentName:"p"},"page_table")," dictionary for the minting account or contract. This dictionary entry consists of a series of ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," values amounting to the total number of pages in the collection. In our 10,000 token example, this would be 10 bits set to false."),(0,r.kt)("p",null,"Upon minting the token, the user will pay for a page allocation. This adds them to the ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," dictionary, in which each entry corresponds to a specific account or contract that owns tokens within that page. That account or contract's entry in the ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," dictionary will consist of 1,000 ",(0,r.kt)("inlineCode",{parentName:"p"},"page_address")," bits set to ",(0,r.kt)("inlineCode",{parentName:"p"},"False")," upon allocation, and the minting of any given token in that page will set the ",(0,r.kt)("inlineCode",{parentName:"p"},"page_address")," bit to ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),"."),(0,r.kt)("p",null,"In addition, that account or contract's ",(0,r.kt)("inlineCode",{parentName:"p"},"page_table")," will be updated by marking the corresponding page number's bit as ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),"."),(0,r.kt)("p",null,"As an example, consider a new user minting their first NFT with a given CEP-78 contract set to a maximum number of 10,000 tokens. They are minting the 2,350th token within that collection. The following sequence of events would occur:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The contract registers their account as an owner.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The contract creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"page_table")," dictionary for that account, with 10 boolean values. As the numbering system begins with ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", the third boolean value corresponding with page ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The account pays for allocation of page 2, creating an entry in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Page 2")," dictionary for that account. Within that entry, there are 1,000 boolean values set to false. Minting the 2,350th token in the collection sets the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"page_address")," boolean for 350 as ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Any further tokens minted by this account prior to the 3,000th token being minted will not have to pay for additional page allocations. If the account mints a token at or beyond 3,000, they must pay for the corresponding page allocation. For example, if they decided to mint the 5,125th token in the collection, they would need to pay for ",(0,r.kt)("inlineCode",{parentName:"p"},"page 5")," to be allocated to them. They would then be added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"page 5")," dictionary with the ",(0,r.kt)("inlineCode",{parentName:"p"},"page_address")," boolean for 125 set as ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),"."))),(0,r.kt)("p",null,"This system binds the data writing costs to a maximum size of any given page dictionary."),(0,r.kt)("h2",{id:"updated-receipts"},"Updated Receipts"),(0,r.kt)("p",null,"If the contract enables ",(0,r.kt)("inlineCode",{parentName:"p"},"OwnerReverseLookupMode"),", calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"updated_receipts")," entrypoint will return a list of receipt names alongside the dictionary for the relevant pages."),(0,r.kt)("p",null,"Updated receipts come in the format of ",(0,r.kt)("inlineCode",{parentName:"p"},'"{<collection name>}\\_m{modulo}\\_p{<page number>}"'),". Once again using the 2,350th token as an example, the receipt would read:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cep78_collection_m_350_p_2\n")),(0,r.kt)("p",null,"You can determine the token number by multiplying the ",(0,r.kt)("inlineCode",{parentName:"p"},"page_number")," by the ",(0,r.kt)("inlineCode",{parentName:"p"},"page_size"),"(1,000) and adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"modulo"),"."),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"NFTIdentifierMode")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"Ordinal"),", this number corresponds directly to the token ID."),(0,r.kt)("p",null,"If it is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"Hash"),", you will need to reference the ",(0,r.kt)("inlineCode",{parentName:"p"},"HASH_BY_INDEX")," dictionary to determine the mapping of token numbers to token hashes."))}m.isMDXComponent=!0}}]);