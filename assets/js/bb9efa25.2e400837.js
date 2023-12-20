"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5611],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,k=d["".concat(s,".").concat(u)]||d[u]||g[u]||i;return r?a.createElement(k,l(l({ref:t},p),{},{components:r})):a.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2311:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return g}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),l=r(4996),o=["components"],s={title:"Set up Ledger",slug:"/workflow/ledger-setup/"},c="Ledger Setup with Casper",p={unversionedId:"users/ledger/ledger-setup",id:"users/ledger/ledger-setup",title:"Set up Ledger",description:"A Ledger device is a hardware wallet considered one of the most secure ways to store your digital assets. Ledger uses an offline, or cold storage, method of generating private keys, making it a preferred method for many crypto users. This guide will help you connect your Ledger device to a Casper account using the cspr.live block explorer to send and receive CSPR tokens.",source:"@site/source/docs/casper/users/ledger/ledger-setup.md",sourceDirName:"users/ledger",slug:"/workflow/ledger-setup/",permalink:"/workflow/ledger-setup/",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/users/ledger/ledger-setup.md",tags:[],version:"current",lastUpdatedAt:1703075153,formattedLastUpdatedAt:"Dec 20, 2023",frontMatter:{title:"Set up Ledger",slug:"/workflow/ledger-setup/"},sidebar:"users",previous:{title:"Casper on Ledger",permalink:"/users/ledger/"},next:{title:"Delegate with Ledger",permalink:"/users/staking-ledger"}},d={},g=[{value:"Before you begin",id:"before-you-begin",level:3},{value:"Installing the Casper app on the Ledger device",id:"install-the-casper-app-on-the-ledger-device",level:3},{value:"Using Ledger with a Block Explorer",id:"use-ledger-with-a-block-explorer",level:2},{value:"Sign in",id:"sign-in",level:3},{value:"Viewing account details",id:"view-account-details",level:3},{value:"Receiving tokens",id:"receive-tokens",level:3},{value:"Sending tokens",id:"send-tokens",level:3}],u={toc:g},k="wrapper";function h(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)(k,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ledger-setup-with-casper"},"Ledger Setup with Casper"),(0,i.kt)("p",null,"A Ledger device is a hardware wallet considered one of the most secure ways to store your digital assets. Ledger uses an offline, or cold storage, method of generating private keys, making it a preferred method for many crypto users. This guide will help you connect your Ledger device to a Casper account using the ",(0,i.kt)("a",{parentName:"p",href:"https://cspr.live/"},"cspr.live")," block explorer to send and receive CSPR tokens."),(0,i.kt)("h3",{id:"before-you-begin"},"Before you begin"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure your Ledger and the Ledger Live application as described in the ",(0,i.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/4404389503889?docs=true"},"Getting Started with Ledger Live")," article."),(0,i.kt)("li",{parentName:"ol"},"Install a Chromium-based browser, such as Chrome or Brave, for use with ",(0,i.kt)("a",{parentName:"li",href:"https://cspr.live/"},"cspr.live")," for the Casper Mainnet.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you need help, contact us on ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/Casper_Network"},"Twitter"),", ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/invite/Q38s3Vh"},"Discord"),", or ",(0,i.kt)("a",{parentName:"p",href:"https://t.me/casperblockchain"},"Telegram"),".")),(0,i.kt)("h3",{id:"install-the-casper-app-on-the-ledger-device"},"Installing the Casper app on the Ledger device"),(0,i.kt)("p",null,"Install the Casper app on the Ledger device by following the steps below. You can find similar instructions on the official ",(0,i.kt)("a",{parentName:"p",href:"https://support.ledger.com/hc/en-us/articles/4416379141009-Casper-CSPR-?docs=true"},"Ledger support site"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In Ledger Live, open My Ledger at the bottom of the left-hand menu.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/open-my-ledger.png"),alt:"Open My Ledger",width:"800"})),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"Casper accounts cannot be added to Ledger Live. Do ",(0,i.kt)("strong",{parentName:"p"},"not")," add a Casper account using Ledger Live.")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Connect the Ledger device to your computer and unlock it by entering your device PIN.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/casper-unlock.png"),alt:"Unlock your Ledger device",width:"350"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"If asked, allow Ledger manager on your device.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/allow-ledger.png"),alt:"Allow Ledger",width:"800"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Find ",(0,i.kt)("strong",{parentName:"li"},"Casper")," in the app catalog.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/find-casper.png"),alt:"Find the Casper app",width:"800"})),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},'Having trouble finding the Casper app? Please search "Casper," not "CSPR" when searching for the app in the "My Ledger" tab in Ledger Live.')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Install")," button of the app.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An installation window appears."),(0,i.kt)("li",{parentName:"ul"},"Your device will display ",(0,i.kt)("strong",{parentName:"li"},'"Processing..."')),(0,i.kt)("li",{parentName:"ul"},"The app installation is confirmed.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/casper-installed.png"),alt:"Casper installation confirmed",width:"800"})),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Open the Casper App on your Ledger device by clicking both buttons on the device, and keep it open while doing the next steps.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/select-casper.png"),alt:"Select Casper on Ledger",width:"350"})),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/ledger-live/casper-ready.png"),alt:"Casper app is ready",width:"350"})),(0,i.kt)("h2",{id:"use-ledger-with-a-block-explorer"},"Using Ledger with a Block Explorer"),(0,i.kt)("h3",{id:"sign-in"},"Sign in"),(0,i.kt)("p",null,"To use the Ledger device with the ",(0,i.kt)("a",{parentName:"p",href:"https://cspr.live/"},"cspr.live")," block explorer, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Connect the Ledger device to your computer and unlock it by entering your device PIN."),(0,i.kt)("li",{parentName:"ol"},"Open the Casper app on the Ledger device as shown above."),(0,i.kt)("li",{parentName:"ol"},"While keeping the Casper app open, navigate to ",(0,i.kt)("a",{parentName:"li",href:"https://cspr.live/sign-in"},"cspr.live/sign-in"),".")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/cspr-signin.png"),alt:"Sign into cspr.live",width:"800"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Connect")," button in the Ledger section.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/cspr-connect.png"),alt:"Choose to connect with Ledger",width:"800"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Connect to Ledger wallet")," button next.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/connect-ledger.png"),alt:"Connect to Ledger Wallet in CSPR Live",width:"800"})),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Select an account you want to use.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/connect-select-account.png"),alt:"Choose an account to connect",width:"800"})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Your Ledger device is now connected to the block explorer, displaying your account details.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/account-connected.png"),alt:"Account connected",width:"800"})),(0,i.kt)("h3",{id:"view-account-details"},"Viewing account details"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("a",{parentName:"li",href:"https://cspr.live"},"cspr.live"),"."),(0,i.kt)("li",{parentName:"ol"},"Click on the account in the upper-right corner of the page.")),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/view-account.png"),alt:"3-view-account",width:"800"}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"View Account")," button.")),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/view-account-button.png"),alt:"6-view-account-button",width:"800"}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"You are presented with a page displaying details about your account. Check your account's main purse balance in the ",(0,i.kt)("strong",{parentName:"li"},"Liquid")," row under ",(0,i.kt)("strong",{parentName:"li"},"Total Balance"),".")),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/account-details.png"),alt:"4-account-details",width:"800"}),(0,i.kt)("h3",{id:"receive-tokens"},"Receiving tokens"),(0,i.kt)("p",null,"To receive tokens, you need to provide the sender with your account's public key. To find it, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the account details page as described ",(0,i.kt)("a",{parentName:"li",href:"#view-account-details"},"here")," and copy the public key in the ",(0,i.kt)("strong",{parentName:"li"},"Public Key")," row."),(0,i.kt)("li",{parentName:"ol"},"Alternatively, click on the drop-down menu on your account address.")),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/view-account.png"),alt:"View account",width:"800"}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Copy Public Key")," button and share it with the sender.")),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/copy-public-key.png"),alt:"Copy public key",width:"800"}),(0,i.kt)("h3",{id:"send-tokens"},"Sending tokens"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("a",{parentName:"li",href:"https://cspr.live"},"cspr.live"),"."),(0,i.kt)("li",{parentName:"ol"},"Sign in with your Ledger device."),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("strong",{parentName:"li"},"Wallet")," and then ",(0,i.kt)("strong",{parentName:"li"},"Transfer CSPR"),".")),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/flow/transfer-wallet.png"),alt:"5-transfer-wallet",width:"800"}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Fill in the details for the transfer.")),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/cspr-live/1-transfer-details.png"),alt:"1-transfer-details",width:"500"}),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Next")," button."),(0,i.kt)("li",{parentName:"ol"},"On the next page, click ",(0,i.kt)("strong",{parentName:"li"},"Confirm and transfer"),".")),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/cspr-live/2-transfer-confirm.png"),alt:"2-transfer-confirm",width:"500"}),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Sign transaction")," page, click on the ",(0,i.kt)("strong",{parentName:"li"},"Sign with Ledger")," button.")),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/cspr-live/3-transfer-sign.png"),alt:"3-transfer-sign",width:"500"}),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"Your Ledger hardware wallet will present you with transfer details. Verify the transfer details (txn hash, chain ID, source ",(0,i.kt)("strong",{parentName:"li"},"account"),", fee, target, and amount). Meanwhile, the block explorer will show this message:")),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/cspr-live/3-transfer-submitted.png"),alt:"3-transfer-sign",width:"500"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Verify the transaction on your Ledger device")),(0,i.kt)("p",null,"Press the right button on your Ledger Device to review the transaction details (Amount and Address) until you see ",(0,i.kt)("strong",{parentName:"p"},'"Approve"'),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Verify the ",(0,i.kt)("strong",{parentName:"li"},"txn hash")," - ensure it matches the value displayed on ",(0,i.kt)("a",{parentName:"li",href:"https://cspr.live"},"cspr.live"),".")),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/3-txn-1.jpg"),alt:"3-txn-1",width:"600"}),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"txn hash")," value continues on a second screen."),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/4-txn-2.jpg"),alt:"4-txn-2",width:"600"}),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"The next page displays transaction ",(0,i.kt)("strong",{parentName:"li"},"type")," - for CSPR transfers, that will be ",(0,i.kt)("strong",{parentName:"li"},"Token transfer"),".")),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/5-type.jpg"),alt:"5-type",width:"600"}),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Verify the ",(0,i.kt)("strong",{parentName:"li"},"chain ID"),", which identifies the network to which you want to send the transaction.")),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/7-chain.jpg"),alt:"7-chain",width:"600"}),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Verify the ",(0,i.kt)("strong",{parentName:"li"},"account"),", which is the account's public key that initiated the transaction.")),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/8-account-1.jpg"),alt:"8-account-1",width:"600"}),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"account")," value continues on a second screen."),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/9-account-2.jpg"),alt:"9-account-2",width:"600"}),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Verify the ",(0,i.kt)("strong",{parentName:"li"},"fee"),". For CSPR token transfers, that value should be constant and equal to 10 000 motes = 0.00001 CSPR.")),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/10-fee.jpg"),alt:"10-fee",width:"600"}),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Verify the target, which is the ",(0,i.kt)("strong",{parentName:"li"},"hash")," of the recipient's public key. Compare this value with the one in the block explorer.")),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/11-target-1.jpg"),alt:"11-target-1",width:"600"}),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"target")," value continues on a second screen."),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/12-target-2.jpg"),alt:"12-target-2",width:"600"}),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Verify the ",(0,i.kt)("strong",{parentName:"li"},"amount")," you want to transfer.")),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/13-amount.jpg"),alt:"13-amount",width:"600"}),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"If you approve the transaction, click both buttons on the Ledger device.")),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/device/15-approve.jpg"),alt:"15-approve",width:"600"}),(0,i.kt)("p",null,"After approving the transaction with your Ledger hardware wallet, the ",(0,i.kt)("a",{parentName:"p",href:"https://cspr.live"},"cspr.live"),' block explorer will display a "Transfer completed" page.'),(0,i.kt)("img",{src:(0,l.Z)("/image/tutorials/ledger/cspr-live/4-transfer-completed.png"),alt:"4-transfer-completed",width:"500"}),(0,i.kt)("p",null,"You can now check your account to see a list of all the completed transfers."))}h.isMDXComponent=!0}}]);