"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6717],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1575:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Archive and Restore a DB"},l="Archiving and Restoring a Database",p={unversionedId:"operators/maintenance/archiving-and-restoring",id:"operators/maintenance/archiving-and-restoring",title:"Archive and Restore a DB",description:"This documentation describes processes for the compression and decompression of a Casper node database and streaming from a backup location.",source:"@site/source/docs/casper/operators/maintenance/archiving-and-restoring.md",sourceDirName:"operators/maintenance",slug:"/operators/maintenance/archiving-and-restoring",permalink:"/operators/maintenance/archiving-and-restoring",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/operators/maintenance/archiving-and-restoring.md",tags:[],version:"current",lastUpdatedAt:1707837031,formattedLastUpdatedAt:"Feb 13, 2024",frontMatter:{title:"Archive and Restore a DB"},sidebar:"operators",previous:{title:"Node Maintenance",permalink:"/operators/maintenance/"},next:{title:"Move a Node",permalink:"/operators/maintenance/moving-node"}},d={},c=[{value:"Zstandard Limitations",id:"zstandard-limitations",level:2},{value:"Zstandard Installation",id:"zstandard-installation",level:2},{value:"Initial Warnings",id:"initial-warnings",level:2},{value:"Compression",id:"compression",level:2},{value:"Compression level",id:"compression-level",level:3},{value:"Thread count",id:"thread-count",level:3},{value:"Long-distance matching",id:"long-distance-matching",level:3},{value:"Summary of commands",id:"summary-of-commands",level:3},{value:"Decompression",id:"decompression",level:2},{value:"Streamed Decompression",id:"streamed-decompression",level:2},{value:"Starting a New Node with a Decompressed DB",id:"starting-a-new-node-with-a-decompressed-db",level:2}],u={toc:c},m="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"archiving-and-restoring-a-database"},"Archiving and Restoring a Database"),(0,o.kt)("p",null,"This documentation describes processes for the compression and decompression of a Casper node database and streaming from a backup location."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://facebook.github.io/zstd/"},"Zstandard")," is the best method for compression speed and space for the current LMDB-based database system that the ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-node")," uses."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The values presented in this document assume that the ",(0,o.kt)("inlineCode",{parentName:"p"},"trie-compact")," tool was run on a Mainnet database for compression. Contact the ",(0,o.kt)("a",{parentName:"p",href:"https://support.casperlabs.io/hc/en-gb"},"support team")," if you have questions.")),(0,o.kt)("h2",{id:"zstandard-limitations"},"Zstandard Limitations"),(0,o.kt)("p",null,"The current DB implementation uses sparse files, which can be partially empty, thus not being processed efficiently. You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"tar")," as a pre-filter for stripping sparse data, as shown ",(0,o.kt)("a",{parentName:"p",href:"#compression"},"here"),", thus eliminating the need to read the full DB size and improving processing."),(0,o.kt)("h2",{id:"zstandard-installation"},"Zstandard Installation"),(0,o.kt)("p",null,"To install Zstandard, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install zstd\n")),(0,o.kt)("p",null,"Note that Zstandard version 1.4.4 is distributed with Ubuntu 20.04, while version 1.3.3 is distributed with Ubuntu 18.04. Later versions have more documentation."),(0,o.kt)("h2",{id:"initial-warnings"},"Initial Warnings"),(0,o.kt)("p",null,"You need to stop the ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-node-launcher")," process of the node (and, therefore, the ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-node")," process using the DB) before any compression or decompression into a location. Otherwise, strange things can and will occur."),(0,o.kt)("h2",{id:"compression"},"Compression"),(0,o.kt)("p",null,"Run the following basic ",(0,o.kt)("inlineCode",{parentName:"p"},"tar")," command from the DB directory. For Mainnet, the directory would be ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/casper/casper-node/casper"),", and for Testnet it would be ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/casper/casper-node/casper-test"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tar -cv --sparse .\n")),(0,o.kt)("p",null,"On some systems, you may get better performance if you specify the block number as an argument:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tar -b 4096 -cv --sparse .\n")),(0,o.kt)("p",null,"You can then stream the result into ",(0,o.kt)("inlineCode",{parentName:"p"},"zstd"),". The sections below discuss the ",(0,o.kt)("a",{parentName:"p",href:"#compression-level"},"level"),", ",(0,o.kt)("a",{parentName:"p",href:"#thread-count"},"thread count"),", and ",(0,o.kt)("a",{parentName:"p",href:"#long-distance-matching"},"long")," arguments."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tar -b 4096 -cv --sparse . | zstd -[level] -cv -T[thread count] --long=31 > [path_to]/file.tar.zst\n")),(0,o.kt)("h3",{id:"compression-level"},"Compression level"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-[level]")," argument is the compression level from 1 to 19 (and 20-22 with expansion). In testing, we found 15 to be the sweet spot in compression time vs. size. We recommend lower compression if you plan to transfer the archive only once. If you are creating an archive to be downloaded by many, then the extra time for higher compression may be helpful."),(0,o.kt)("p",null,"Here are some examples of a Mainnet DB compression at block 741160:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Level"),(0,o.kt)("th",{parentName:"tr",align:null},"Time (min:sec)"),(0,o.kt)("th",{parentName:"tr",align:null},"Size"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"12"),(0,o.kt)("td",{parentName:"tr",align:null},"29:20"),(0,o.kt)("td",{parentName:"tr",align:null},"15.8 GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"15"),(0,o.kt)("td",{parentName:"tr",align:null},"46:15"),(0,o.kt)("td",{parentName:"tr",align:null},"13.0 GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"17"),(0,o.kt)("td",{parentName:"tr",align:null},"87:42"),(0,o.kt)("td",{parentName:"tr",align:null},"13.0 GB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"19"),(0,o.kt)("td",{parentName:"tr",align:null},"197:08"),(0,o.kt)("td",{parentName:"tr",align:null},"12.9 GB")))),(0,o.kt)("p",null,"For local backups, using 1-5 is a great compression speed-to-size trade-off."),(0,o.kt)("h3",{id:"thread-count"},"Thread count"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-T[thread count]")," is the number of threads that ",(0,o.kt)("inlineCode",{parentName:"p"},"zstd")," should use for compression. If running a script or command on varying machines, use ",(0,o.kt)("inlineCode",{parentName:"p"},"T0")," to allow ",(0,o.kt)("inlineCode",{parentName:"p"},"zstd")," to detect the number of cores and run with the same number of threads as the detected cores. A speed-up can be obtained for machines with multiple threads per core by configuring a thread count near the number of threads. It is advisable to stay within the number of CPU threads. The recommendations in this article will use ",(0,o.kt)("inlineCode",{parentName:"p"},"-T0"),"."),(0,o.kt)("h3",{id:"long-distance-matching"},"Long-distance matching"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--long=31")," argument is where we see the most space gained by the algorithm because it controls the size of the matching window in powers of 2 (2","*","*","31 is 2 GB). The downside is that it requires 2.0 GB memory during compression and decompression as it looks and rebuilds ahead. The default is 27 or 128 MB."),(0,o.kt)("p",null,"At compression 19, we see a 30 GB file using the default 128 MB look ahead, and a 13 GB file using 2 GB look ahead. Since all validators should have 16-32 GB of memory, we keep this at ",(0,o.kt)("inlineCode",{parentName:"p"},"--long=31"),"."),(0,o.kt)("p",null,"An important note is that decompression requires a compatible argument. Trying with a different long-distance matching value will result in an error. However, it will also return the necessary value to provide."),(0,o.kt)("h3",{id:"summary-of-commands"},"Summary of commands"),(0,o.kt)("p",null,"The general command for compression is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tar -b 4096 -cv --sparse . | zstd -15 -cv -T0 --long=31 > [path_to]/file.tar.zst\n")),(0,o.kt)("p",null,"For local backups, use a lower compression level:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tar -b 4096 -cv --sparse . | zstd -5 -cv -T0 --long=31 > [path_to]/file.tar.zst\n")),(0,o.kt)("h2",{id:"decompression"},"Decompression"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"zstd -d")," is the command for decompression; however, the same ",(0,o.kt)("inlineCode",{parentName:"p"},"--long")," value used for compression must be specified. For all ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-node")," DB-related decompression, you will likely use this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"zstd -cd --long=31 <.tar.zst file>\n")),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"--long=31")," is omitted, you might see an error such as this, which also gives you the solution:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./casper.tar.zst : Decoding error (36) : Frame requires too much memory for decoding\n./casper.tar.zst : Window size larger than maximum : 2147483648 > 134217728\n./casper.tar.zst : Use --long=31 or --memory=2048MB\n")),(0,o.kt)("p",null,"You can then use the ",(0,o.kt)("inlineCode",{parentName:"p"},"zstd")," result to populate a ",(0,o.kt)("inlineCode",{parentName:"p"},"tar -xv")," command. Also, create the decompressed files using ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo -u casper"),", because the files will be used by the ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-node"),". Run the following command inside an empty DB location:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"zstd -cd --long=31 <.tar.zst file> | sudo -u casper tar -xv\n")),(0,o.kt)("p",null,"To fix ownership, use this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo /etc/casper/node_util.py fix_permissions\n")),(0,o.kt)("h2",{id:"streamed-decompression"},"Streamed Decompression"),(0,o.kt)("p",null,"If a ",(0,o.kt)("inlineCode",{parentName:"p"},".tar.zst")," archive is hosted on a website and you will not need the file after decompressing, you can stream it into the process using ",(0,o.kt)("inlineCode",{parentName:"p"},"curl"),", which can output to stdout with ",(0,o.kt)("inlineCode",{parentName:"p"},"--output")," and stream binary to your terminal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s --output - <URL for tar.zstd file>\n")),(0,o.kt)("p",null,"If you use the output along with the previous process, you can decompress the files from ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," directly into a local directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s --output - <tar.zst URL> | zstd -d --long=31 | sudo -u casper tar -xv\n")),(0,o.kt)("h2",{id:"starting-a-new-node-with-a-decompressed-db"},"Starting a New Node with a Decompressed DB"),(0,o.kt)("p",null,"If you are starting a node with a decompressed DB, you must tell the node to run at the protocol version of the tip of your DB. You can do this most efficiently with the ",(0,o.kt)("inlineCode",{parentName:"p"},"node_util.py")," script included in the ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-node-launcher")," installation."),(0,o.kt)("p",null,"For example, if you are using a DB archive from node version 1.4.5, you would run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo /etc/casper/node_util.py force_run_version 1_4_5\n")))}h.isMDXComponent=!0}}]);