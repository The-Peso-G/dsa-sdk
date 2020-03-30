/*!
 * 
 *   dsa-sdk v1.0.0
 *   https://github.com/instadapp/dsa-sdk
 * 
 *   Copyright (c) INSTADAPP LABS LLC 
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 * 
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.DSA=t():e.DSA=t()}(window,(function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){function a(e,t,n,a,r,i,s){try{var u=e[i](s),o=u.value}catch(e){return void n(e)}u.done?t(o):Promise.resolve(o).then(a,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){function s(e){a(o,r,i,s,u,"next",e)}function u(e){a(o,r,i,s,u,"throw",e)}var o=e.apply(t,n);s(void 0)}))}}function i(e,t){for(var n,a=0;a<t.length;a++)(n=t[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}var s=n(1),u=n(2),o=n(3),p=o.address,d=o.ABI;e.exports=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.address=p,this.ABI=d,this.helpers=new s,this.compound=new u}return function(e,t,n){t&&i(e.prototype,t),n&&i(e,n)}(e,[{key:"build",value:(t=r(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=web3.currentProvider.selectedAddress,t||(t={}),t.owner||(t.owner=n),t.version||(t.version=1),t.origin||(t.origin=p.genesis),a=new web3.eth.Contract(d.INDEX_CORE,p.core.index),e.abrupt("return",a.methods.build(t.owner,t.version,t.origin).send({from:n}).on("transactionHash",(function(e){return console.log("txHash: ".concat(e)),e})));case 7:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})},{key:"count",value:function(){var e=r(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new web3.eth.Contract(d.LIST_CORE,p.core.list),e.abrupt("return",t.methods.accounts().call().then((function(e){return e})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getAccounts",value:function(){var e=r(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new web3.eth.Contract(d.CORE_RESOLVER,p.resolver.core),e.abrupt("return",n.methods.getOwnerDetails(t).call({from:p.genesis}).then((function(e){numberOfAccounts=e.IDs.length,accounts=Array(numberOfAccounts);for(var t=0;t<numberOfAccounts;t++)accounts[t]=[];return e.IDs.forEach((function(e,t){accounts[t].id=e})),e.accounts.forEach((function(e,t){accounts[t].account_id=e})),e.versions.forEach((function(e,t){accounts[t].version=e})),accounts})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getAuthentications",value:function(){var e=r(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new web3.eth.Contract(d.CORE_RESOLVER,p.resolver.core),e.abrupt("return",n.methods.getIDOwners(t).call({from:p.genesis}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e;var t}()},function(e,t){function n(e,t){for(var n,a=0;a<t.length;a++)(n=t[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}e.exports=function(){var e=Math.pow;function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(e,t,a){t&&n(e.prototype,t),a&&n(e,a)}(t,[{key:"cleanAddress",value:function(e){return e.slice(0,4)+"..."+e.slice(-4)}},{key:"cleanTxn",value:function(e){return e.slice(0,6)+"..."+e.slice(-6)}},{key:"cleanDecimal",value:function(t,n){var a=Math.floor,r=100;return n&&(r=e(10,n)),a(+t*r)/r}},{key:"cleanNumber",value:function(e){if(1e6<e){var t=cleanDecimal(e/1e6);return"".concat(t.toLocaleString()," M")}if(1e4<e){t=cleanDecimal(e/1e3);return"".concat(t.toLocaleString()," K")}return e?cleanDecimal(e).toLocaleString():"0.00"}},{key:"bigNumInString",value:function(t){var n;1>(0,Math.abs)(t)?(n=parseInt(t.toString().split("e-")[1]))&&(t*=e(10,n-1),t="0."+Array(n).join("0")+t.toString().substring(2)):20<(n=parseInt(t.toString().split("+")[1]))&&(t/=e(10,n-=20),t+=Array(n+1).join("0"));return t}}]),t}()},function(e,t){function n(e,t){for(var n,a=0;a<t.length;a++)(n=t[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return t=e,(a=[{key:"name",value:function(){console.log("COMPOUND")}}])&&n(t.prototype,a),r&&n(t,r),e;var t,a,r}()},function(e,t,n){e.exports.address={genesis:"0x0000000000000000000000000000000000000000",core:{index:"0x2971AdFa57b20E5a416aE5a708A8655A9c74f723",list:"0x4c8a1BEb8a87765788946D6B19C6C6355194AbEb"},resolver:{core:"0xD6fB4fd8b595d0A1dE727C35fe6F1D4aE5B60F51"}},e.exports.ABI={INDEX_CORE:n(4),LIST_CORE:n(5),CORE_RESOLVER:n(6)}},function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"origin","type":"address"}],"name":"LogAccountCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_newAccount","type":"address"},{"indexed":true,"internalType":"address","name":"_connectors","type":"address"},{"indexed":true,"internalType":"address","name":"_check","type":"address"}],"name":"LogNewAccount","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"accountVersion","type":"uint256"},{"indexed":true,"internalType":"address","name":"check","type":"address"}],"name":"LogNewCheck","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"master","type":"address"}],"name":"LogNewMaster","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"master","type":"address"}],"name":"LogUpdateMaster","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"account","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newAccount","type":"address"},{"internalType":"address","name":"_connectors","type":"address"},{"internalType":"address","name":"_check","type":"address"}],"name":"addNewAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"accountVersion","type":"uint256"},{"internalType":"address","name":"_origin","type":"address"}],"name":"build","outputs":[{"internalType":"address","name":"_account","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"accountVersion","type":"uint256"},{"internalType":"address[]","name":"_targets","type":"address[]"},{"internalType":"bytes[]","name":"_datas","type":"bytes[]"},{"internalType":"address","name":"_origin","type":"address"}],"name":"buildWithCast","outputs":[{"internalType":"address","name":"_account","type":"address"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"accountVersion","type":"uint256"},{"internalType":"address","name":"_newCheck","type":"address"}],"name":"changeCheck","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newMaster","type":"address"}],"name":"changeMaster","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"check","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"connectors","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"version","type":"uint256"},{"internalType":"address","name":"query","type":"address"}],"name":"isClone","outputs":[{"internalType":"bool","name":"result","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"list","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"master","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_master","type":"address"},{"internalType":"address","name":"_list","type":"address"},{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_connectors","type":"address"}],"name":"setBasics","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updateMaster","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"versionCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')},function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"uint64","name":"","type":"uint64"}],"name":"accountAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"accountID","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"","type":"uint64"}],"name":"accountLink","outputs":[{"internalType":"address","name":"first","type":"address"},{"internalType":"address","name":"last","type":"address"},{"internalType":"uint64","name":"count","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"","type":"uint64"},{"internalType":"address","name":"","type":"address"}],"name":"accountList","outputs":[{"internalType":"address","name":"prev","type":"address"},{"internalType":"address","name":"next","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"accounts","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"addAuth","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"init","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"instaIndex","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"removeAuth","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userLink","outputs":[{"internalType":"uint64","name":"first","type":"uint64"},{"internalType":"uint64","name":"last","type":"uint64"},{"internalType":"uint64","name":"count","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint64","name":"","type":"uint64"}],"name":"userList","outputs":[{"internalType":"uint64","name":"prev","type":"uint64"},{"internalType":"uint64","name":"next","type":"uint64"}],"stateMutability":"view","type":"function"}]')},function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"connectors","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"id","type":"uint64"}],"name":"getAccount","outputs":[{"internalType":"address","name":"account","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountOwners","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"}],"name":"getAccountVersions","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEnabledConnectores","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getID","outputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getIDOwners","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"getOwnerAccounts","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"getOwnerDetails","outputs":[{"components":[{"internalType":"uint64[]","name":"IDs","type":"uint64[]"},{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"versions","type":"uint256[]"}],"name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"getOwnerIDs","outputs":[{"internalType":"uint64[]","name":"","type":"uint64[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStaticConnectores","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"index","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"list","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')}])}));