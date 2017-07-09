var Flatdoc=function(n){function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var e={};return t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="/dist/",t(t.s=2)}([function(n,t){n.exports=lib},function(n,t,e){n.exports=e(0)(188)},function(n,t,e){"use strict";function o(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t.default=n,t}function i(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.run=void 0;var r=function(){function n(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}}(),a=e(1),d=function(n){return n&&n.__esModule?n:{default:n}}(a);e(3),e(4),e(8);var l=e(9),c=o(l),b=e(10),s=o(b),p=function(){function n(){i(this,n)}return r(n,[{key:"preRender",value:function(){(0,d.default)(".flatdoc").trigger("flatdoc:loading")}},{key:"postRender",value:function(){(0,d.default)(".flatdoc").trigger("flatdoc:ready")}},{key:"getFile",value:function(n,t){var e=n instanceof Array?n:[n];c.loadData(e,"",t)}},{key:"renderElements",value:function(n){var t=n.title,e=n.content,o=n.menu;(0,d.default)("title").html(t),(0,d.default)(".content").html(e.find(">*")),(0,d.default)(".menu").html(o)}},{key:"scrollToSection",value:function(){var n=location.hash.substr(1);if(n){var t=document.getElementById(n);t&&t.scrollIntoView(!0)}}},{key:"run",value:function(n){var t=this;this.preRender(),this.getFile(n,function(n,e){if(n)return void console.error("[Flatdoc] fetching Markdown data failed.",n);var o=s.parseMarkdown(e),i=o.title,r=o.content,a=o.menu;t.renderElements({title:i,content:r,menu:a}),t.scrollToSection(),t.postRender()})}}]),n}();t.run=function(n){return(new p).run(n)}},function(n,t,e){n.exports=e(0)(5)},function(n,t,e){var o=e(5);"string"==typeof o&&(o=[[n.i,o,""]]);var i={};i.transform=void 0;e(7)(o,i);o.locals&&(n.exports=o.locals)},function(n,t,e){t=n.exports=e(6)(void 0),t.push([n.i,"@import url(//fonts.googleapis.com/css?family=Montserrat:700|Open+Sans:300);",""]),t.push([n.i,"/*\n\nPlease don't edit this file directly.\nInstead, edit the stylus (.styl) files and compile it to CSS on your machine.\n\n*/\n/* ----------------------------------------------------------------------------\n * Fonts\n */\n/* ----------------------------------------------------------------------------\n * Base\n */\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-weight: inherit;\n  font-style: inherit;\n  font-family: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n}\nbody {\n  line-height: 1;\n  color: #000;\n  background: #fff;\n}\nol,\nul {\n  list-style: none;\n}\ntable {\n  border-collapse: separate;\n  border-spacing: 0;\n  vertical-align: middle;\n}\ncaption,\nth,\ntd {\n  text-align: left;\n  font-weight: normal;\n  vertical-align: middle;\n}\na img {\n  border: none;\n}\nhtml,\nbody {\n  height: 100%;\n}\nhtml {\n  overflow-x: hidden;\n}\nbody,\ntd,\ntextarea,\ninput {\n  font-family: Helvetica Neue, Open Sans, sans-serif;\n  line-height: 1.6;\n  font-size: 13px;\n  color: #505050;\n}\n@media (max-width: 480px) {\n  body,\n  td,\n  textarea,\n  input {\n    font-size: 12px;\n  }\n}\na {\n  color: #2badad;\n  text-decoration: none;\n}\na:hover {\n  color: #228a8a;\n}\n/* ----------------------------------------------------------------------------\n * Content styling\n */\n.content p,\n.content ul,\n.content ol,\n.content h1,\n.content h2,\n.content h3,\n.content h4,\n.content h5,\n.content h6,\n.content pre,\n.content blockquote {\n  padding: 10px 0;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.content h1,\n.content h2,\n.content h3,\n.content h4,\n.content h5,\n.content h6 {\n  font-weight: bold;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n}\n.content pre {\n  font-family: Menlo, monospace;\n}\n.content ul > li {\n  list-style-type: disc;\n}\n.content ol > li {\n  list-style-type: decimal;\n}\n.content ul,\n.content ol {\n  margin-left: 20px;\n}\n.content ul > li {\n  list-style-type: none;\n  position: relative;\n}\n.content ul > li:before {\n  content: '';\n  display: block;\n  position: absolute;\n  left: -17px;\n  top: 7px;\n  width: 5px;\n  height: 5px;\n  -webkit-border-radius: 4px;\n  border-radius: 4px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  background: #fff;\n  border: solid 1px #9090aa;\n}\n.content li > :first-child {\n  padding-top: 0;\n}\n.content strong,\n.content b {\n  font-weight: bold;\n}\n.content i,\n.content em {\n  font-style: italic;\n  color: #9090aa;\n}\n.content code {\n  font-family: Menlo, monospace;\n  background: #f3f6fb;\n  padding: 1px 3px;\n  font-size: 0.95em;\n}\n.content pre > code {\n  display: block;\n  background: transparent;\n  font-size: 0.85em;\n  letter-spacing: -1px;\n}\n.content blockquote :first-child {\n  padding-top: 0;\n}\n.content blockquote :last-child {\n  padding-bottom: 0;\n}\n.content table {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 0;\n  border-collapse: collapse;\n  clear: both;\n  float: left;\n}\n.content table tr {\n  border-top: 1px solid #ccc;\n  background-color: #fff;\n  margin: 0;\n  padding: 0;\n}\n.content table tr :nth-child(2n) {\n  background-color: #f8f8f8;\n}\n.content table tr th {\n  text-align: auto;\n  font-weight: bold;\n  border: 1px solid #ccc;\n  margin: 0;\n  padding: 6px 13px;\n}\n.content table tr td {\n  text-align: auto;\n  border: 1px solid #ccc;\n  margin: 0;\n  padding: 6px 13px;\n}\n.content table tr th :first-child,\n.content table tr td :first-child {\n  margin-top: 0;\n}\n.content table tr th :last-child,\n.content table tr td :last-child {\n  margin-bottom: 0;\n}\n/* ----------------------------------------------------------------------------\n * Content\n */\n.content-root {\n  min-height: 90%;\n  position: relative;\n}\n.content {\n  padding-top: 30px;\n  padding-bottom: 40px;\n  padding-left: 40px;\n  padding-right: 40px;\n  zoom: 1;\n  max-width: 700px;\n}\n.content:before,\n.content:after {\n  content: \"\";\n  display: table;\n}\n.content:after {\n  clear: both;\n}\n.content blockquote {\n  color: #9090aa;\n  text-shadow: 0 1px 0 rgba(255,255,255,0.5);\n}\n.content h1,\n.content h2,\n.content h3 {\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n  font-family: montserrat;\n  padding-bottom: 0;\n}\n.content h1 + p,\n.content h2 + p,\n.content h3 + p,\n.content h1 ul,\n.content h2 ul,\n.content h3 ul,\n.content h1 ol,\n.content h2 ol,\n.content h3 ol {\n  padding-top: 10px;\n}\n.content h1,\n.content h2 {\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-size: 1.5em;\n}\n.content h3 {\n  font-size: 1.2em;\n}\n.content h1,\n.content h2,\n.content .big-heading,\nbody.big-h3 .content h3 {\n  padding-top: 80px;\n}\n.content h1:before,\n.content h2:before,\n.content .big-heading:before,\nbody.big-h3 .content h3:before {\n  display: block;\n  content: '';\n  background: -webkit-linear-gradient(left, #dfe2e7 80%, rgba(223,226,231,0));\n  background: -moz-linear-gradient(left, #dfe2e7 80%, rgba(223,226,231,0));\n  background: -o-linear-gradient(left, #dfe2e7 80%, rgba(223,226,231,0));\n  background: -ms-linear-gradient(left, #dfe2e7 80%, rgba(223,226,231,0));\n  background: linear-gradient(to right, #dfe2e7 80%, rgba(223,226,231,0));\n  -webkit-box-shadow: 0 1px 0 rgba(255,255,255,0.4);\n  box-shadow: 0 1px 0 rgba(255,255,255,0.4);\n  height: 1px;\n  position: relative;\n  top: -40px;\n  left: -40px;\n  width: 100%;\n}\n@media (max-width: 768px) {\n  .content h1,\n  .content h2,\n  .content .big-heading,\nbody.big-h3 .content h3 {\n    padding-top: 40px;\n  }\n  .content h1:before,\n  .content h2:before,\n  .content .big-heading:before,\nbody.big-h3 .content h3:before {\n    background: #dfe2e7;\n    left: -40px;\n    top: -20px;\n    width: 120%;\n  }\n}\n.content h4,\n.content h5,\n.content .small-heading,\nbody:not(.big-h3) .content h3 {\n  border-bottom: solid 1px rgba(0,0,0,0.07);\n  color: #9090aa;\n  padding-top: 30px;\n  padding-bottom: 10px;\n}\nbody:not(.big-h3) .content h3 {\n  font-size: 0.9em;\n}\n.content h1:first-child {\n  padding-top: 0;\n}\n.content h1:first-child,\n.content h1:first-child a,\n.content h1:first-child a:visited {\n  color: #505050;\n}\n.content h1:first-child:before {\n  display: none;\n}\n@media (max-width: 768px) {\n  .content h4,\n  .content h5,\n  .content .small-heading,\n  body:not(.big-h3) .content h3 {\n    padding-top: 20px;\n  }\n}\n@media (max-width: 480px) {\n  .content {\n    padding: 20px;\n    padding-top: 40px;\n  }\n  .content h4,\n  .content h5,\n  .content .small-heading,\n  body:not(.big-h3) .content h3 {\n    padding-top: 10px;\n  }\n}\nbody.no-literate .content pre > code {\n  background: #f3f6fb;\n  border: solid 1px #e7eaee;\n  border-top: solid 1px #dbdde2;\n  border-left: solid 1px #e2e5e9;\n  display: block;\n  padding: 10px;\n  -webkit-border-radius: 2px;\n  border-radius: 2px;\n  overflow: auto;\n}\nbody.no-literate .content pre > code {\n  -webkit-overflow-scrolling: touch;\n}\nbody.no-literate .content pre > code::-webkit-scrollbar {\n  width: 15px;\n  height: 15px;\n}\nbody.no-literate .content pre > code::-webkit-scrollbar-thumb {\n  background: #ddd;\n  -webkit-border-radius: 8px;\n  border-radius: 8px;\n  border: solid 4px #f3f6fb;\n}\nbody.no-literate .content pre > code:hover::-webkit-scrollbar-thumb {\n  background: #999;\n  -webkit-box-shadow: inset 2px 2px 3px rgba(0,0,0,0.2);\n  box-shadow: inset 2px 2px 3px rgba(0,0,0,0.2);\n}\n@media (max-width: 1180px) {\n  .content pre > code {\n    background: #f3f6fb;\n    border: solid 1px #e7eaee;\n    border-top: solid 1px #dbdde2;\n    border-left: solid 1px #e2e5e9;\n    display: block;\n    padding: 10px;\n    -webkit-border-radius: 2px;\n    border-radius: 2px;\n    overflow: auto;\n  }\n  .content pre > code {\n    -webkit-overflow-scrolling: touch;\n  }\n  .content pre > code::-webkit-scrollbar {\n    width: 15px;\n    height: 15px;\n  }\n  .content pre > code::-webkit-scrollbar-thumb {\n    background: #ddd;\n    -webkit-border-radius: 8px;\n    border-radius: 8px;\n    border: solid 4px #f3f6fb;\n  }\n  .content pre > code:hover::-webkit-scrollbar-thumb {\n    background: #999;\n    -webkit-box-shadow: inset 2px 2px 3px rgba(0,0,0,0.2);\n    box-shadow: inset 2px 2px 3px rgba(0,0,0,0.2);\n  }\n}\n.button {\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n  font-family: montserrat, sans-serif;\n  letter-spacing: -1px;\n  font-weight: bold;\n  display: inline-block;\n  padding: 3px 25px;\n  border: solid 2px #2badad;\n  -webkit-border-radius: 20px;\n  border-radius: 20px;\n  margin-right: 15px;\n}\n.button,\n.button:visited {\n  background: #2badad;\n  color: #fff;\n  text-shadow: none;\n}\n.button:hover {\n  border-color: #111;\n  background: #111;\n  color: #fff;\n}\n.button.light,\n.button.light:visited {\n  background: transparent;\n  color: #9090aa;\n  border-color: #9090aa;\n  text-shadow: none;\n}\n.button.light:hover {\n  border-color: #9090aa;\n  background: #9090aa;\n  color: #fff;\n}\n.content .button + em {\n  color: #9090aa;\n}\n@media (min-width: 1180px) {\n  body:not(.no-literate) .content-root {\n    background-color: #f3f6fb;\n    -webkit-box-shadow: inset 780px 0 #fff, inset 781px 0 #dfe2e7, inset 790px 0 5px -10px rgba(0,0,0,0.1);\n    box-shadow: inset 780px 0 #fff, inset 781px 0 #dfe2e7, inset 790px 0 5px -10px rgba(0,0,0,0.1);\n  }\n}\n@media (min-width: 1180px) {\n  body:not(.no-literate) .content {\n    padding-left: 0;\n    padding-right: 0;\n    width: 930px;\n    max-width: none;\n  }\n  body:not(.no-literate) .content > p,\n  body:not(.no-literate) .content > ul,\n  body:not(.no-literate) .content > ol,\n  body:not(.no-literate) .content > h1,\n  body:not(.no-literate) .content > h2,\n  body:not(.no-literate) .content > h3,\n  body:not(.no-literate) .content > h4,\n  body:not(.no-literate) .content > h5,\n  body:not(.no-literate) .content > h6,\n  body:not(.no-literate) .content > pre,\n  body:not(.no-literate) .content > blockquote {\n    width: 550px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    padding-right: 40px;\n    padding-left: 40px;\n  }\n  body:not(.no-literate) .content > h1,\n  body:not(.no-literate) .content > h2,\n  body:not(.no-literate) .content > h3 {\n    clear: both;\n    width: 100%;\n  }\n  body:not(.no-literate) .content > pre,\n  body:not(.no-literate) .content > blockquote {\n    width: 380px;\n    padding-left: 20px;\n    padding-right: 20px;\n    float: right;\n    clear: right;\n  }\n  body:not(.no-literate) .content > pre + p,\n  body:not(.no-literate) .content > blockquote + p,\n  body:not(.no-literate) .content > pre + ul,\n  body:not(.no-literate) .content > blockquote + ul,\n  body:not(.no-literate) .content > pre + ol,\n  body:not(.no-literate) .content > blockquote + ol,\n  body:not(.no-literate) .content > pre + h4,\n  body:not(.no-literate) .content > blockquote + h4,\n  body:not(.no-literate) .content > pre + h5,\n  body:not(.no-literate) .content > blockquote + h5,\n  body:not(.no-literate) .content > pre + h6,\n  body:not(.no-literate) .content > blockquote + h6 {\n    clear: both;\n  }\n  body:not(.no-literate) .content > p,\n  body:not(.no-literate) .content > ul,\n  body:not(.no-literate) .content > ol,\n  body:not(.no-literate) .content > h4,\n  body:not(.no-literate) .content > h5,\n  body:not(.no-literate) .content > h6 {\n    float: left;\n    clear: left;\n  }\n  body:not(.no-literate) .content > h4,\n  body:not(.no-literate) .content > h5,\n  body:not(.no-literate) .content > .small-heading,\n  body:not(.big-h3) body:not(.no-literate) .content > h3 {\n    margin-left: 40px;\n    width: 470px;\n    margin-bottom: 3px;\n    padding-left: 0;\n    padding-right: 0;\n  }\n  body:not(.no-literate) .content > table {\n    margin-left: 40px;\n    margin-right: 40px;\n    max-width: 470px;\n  }\n  body:not(.no-literate):not(.big-h3) .content > h3 {\n    margin-left: 40px;\n    width: 470px;\n    margin-bottom: 3px;\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n.header {\n  background: #f3f6fb;\n  text-shadow: 0 1px 0 rgba(255,255,255,0.5);\n  border-bottom: solid 1px #dfe2e7;\n  padding: 15px 15px 15px 30px;\n  zoom: 1;\n  line-height: 20px;\n  position: relative;\n}\n.header:before,\n.header:after {\n  content: \"\";\n  display: table;\n}\n.header:after {\n  clear: both;\n}\n.header .left {\n  float: left;\n}\n.header .right {\n  text-align: right;\n  position: absolute;\n  right: 15px;\n  top: 15px;\n}\n.header .right iframe {\n  display: inline-block;\n  vertical-align: middle;\n}\n.header h1 {\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n  font-weight: bold;\n  font-family: montserrat, sans-serif;\n  font-size: 13px;\n}\n.header h1,\n.header h1 a,\n.header h1 a:visited {\n  color: #9090aa;\n}\n.header h1 a:hover {\n  color: #505050;\n}\n.header li a {\n  font-size: 0.88em;\n  color: #9090aa;\n  display: block;\n}\n.header li a:hover {\n  color: #3a3a44;\n}\n@media (min-width: 480px) {\n  .header h1 {\n    float: left;\n  }\n  .header ul,\n  .header li {\n    display: block;\n    float: left;\n  }\n  .header ul {\n    margin-left: -15px;\n  }\n  .header h1 + ul {\n    border-left: solid 1px #dfe2e7;\n    margin-left: 15px;\n  }\n  .header li {\n    border-left: solid 1px rgba(255,255,255,0.5);\n    border-right: solid 1px #dfe2e7;\n  }\n  .header li:last-child {\n    border-right: 0;\n  }\n  .header li a {\n    padding: 0 15px;\n  }\n}\n@media (max-width: 480px) {\n  .right {\n    display: none;\n  }\n}\n.menubar {\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n}\n.menubar .section {\n  padding: 30px 30px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.menubar .section + .section {\n  border-top: solid 1px #dfe2e7;\n}\n.menubar .section.no-line {\n  border-top: 0;\n  padding-top: 0;\n}\na.big.button {\n  display: block;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 10px 20px;\n  text-align: center;\n  font-weight: bold;\n  font-size: 1.1em;\n  background: transparent;\n  border: solid 3px #2badad;\n  -webkit-border-radius: 30px;\n  border-radius: 30px;\n  font-family: montserrat, sans-serif;\n}\na.big.button,\na.big.button:visited {\n  color: #2badad;\n  text-decoration: none;\n}\na.big.button:hover {\n  background: #2badad;\n}\na.big.button:hover,\na.big.button:hover:visited {\n  color: #fff;\n}\n@media (max-width: 480px) {\n  .menubar {\n    padding: 20px;\n    border-bottom: solid 1px #dfe2e7;\n  }\n}\n@media (max-width: 768px) {\n  .menubar {\n    display: none;\n  }\n}\n@media (min-width: 768px) {\n  .content-root {\n    padding-left: 230px;\n  }\n  .menubar {\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    width: 230px;\n    border-right: solid 1px #dfe2e7;\n  }\n  .menubar.fixed {\n    position: fixed;\n    overflow-y: auto;\n  }\n  .menubar.fixed {\n    -webkit-overflow-scrolling: touch;\n  }\n  .menubar.fixed::-webkit-scrollbar {\n    width: 15px;\n    height: 15px;\n  }\n  .menubar.fixed::-webkit-scrollbar-thumb {\n    background: #ddd;\n    -webkit-border-radius: 8px;\n    border-radius: 8px;\n    border: solid 4px #fff;\n  }\n  .menubar.fixed:hover::-webkit-scrollbar-thumb {\n    background: #999;\n    -webkit-box-shadow: inset 2px 2px 3px rgba(0,0,0,0.2);\n    box-shadow: inset 2px 2px 3px rgba(0,0,0,0.2);\n  }\n}\n.menubar {\n  font-size: 0.9em;\n}\n.menu ul.level-1 > li + li {\n  margin-top: 20px;\n}\n.menu a {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  position: relative;\n  display: block;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  margin-right: -30px;\n}\n.menu a,\n.menu a:visited {\n  color: #2badad;\n}\n.menu a:hover {\n  color: #228a8a;\n}\n.menu a.level-1 {\n  font-family: montserrat, sans-serif;\n  text-transform: uppercase;\n  font-size: 0.9em;\n  font-weight: bold;\n}\n.menu a.level-1,\n.menu a.level-1:visited {\n  color: #9090aa;\n}\n.menu a.level-1:hover {\n  color: #565666;\n}\n.menu a.level-2 {\n  font-weight: normal;\n}\n.menu a.level-3 {\n  font-weight: normal;\n  font-size: 0.9em;\n  padding-left: 10px;\n}\n.menu a.active {\n  font-weight: bold !important;\n}\n.menu a.active,\n.menu a.active:visited,\n.menu a.active:hover {\n  color: #505050 !important;\n}\n.menu a.active:after {\n  content: '';\n  display: block;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  position: absolute;\n  top: 10px;\n  right: 30px;\n  width: 9px;\n  height: 3px;\n  -webkit-border-radius: 2px;\n  border-radius: 2px;\n  background: #2badad;\n}\ncode .string,\ncode .number {\n  color: #3ac;\n}\ncode .init {\n  color: #383;\n}\ncode .keyword {\n  font-weight: bold;\n}\ncode .comment {\n  color: #adadcc;\n}\n.large-brief .content > h1:first-child + p,\n.content > p.brief {\n  font-size: 1.3em;\n  font-family: Open Sans, sans-serif;\n  font-weight: 300;\n}\n.title-area {\n  min-height: 100px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n  text-align: center;\n  border-bottom: solid 1px #dfe2e7;\n  overflow: hidden;\n}\n.title-area > img.bg {\n  z-index: 0;\n  position: absolute;\n  left: -9999px;\n}\n.title-area > div {\n  position: relative;\n  z-index: 1;\n}\n",""])},function(n,t,e){n.exports=e(0)(7)},function(n,t,e){n.exports=e(0)(8)},function(n,t,e){"use strict";var o=e(1),i=function(n){return n&&n.__esModule?n:{default:n}}(o);!function(n){var t=n(window),e=n(document);e.on("flatdoc:ready",function(){n("h2, h3").scrollagent(function(t,e,o,i){e&&n("[href='#"+e+"']").removeClass("active"),t&&n("[href='#"+t+"']").addClass("active")})}),e.on("flatdoc:ready",function(){n(".menu a").anchorjump()}),n(function(){var e=n(".title-card");if(e.length){var o=n(".header"),i=o.length?o.outerHeight():0;t.on("resize.title-card",function(){if(t.width()<480)e.css("height","");else{var n=t.height();e.css("height",n-i)}}).trigger("resize.title-card")}}),n(function(){var e,o=n(".menubar");t.on("resize.sidestick",function(){o.removeClass("fixed"),e=o.offset().top,t.trigger("scroll.sidestick")}).on("scroll.sidestick",function(){var n=t.scrollTop();o.toggleClass("fixed",n>=e)}).trigger("resize.sidestick")})}(i.default),/*! jQuery.scrollagent (c) 2012, Rico Sta. Cruz. MIT License.
 *  https://github.com/rstacruz/jquery-stuff/tree/master/scrollagent */
function(n){n.fn.scrollagent=function(t,e){void 0===e&&(e=t,t={});var o=n(this),i=t.parent||n(window),r=[];o.each(function(e){var o=n(this).attr("data-anchor-offset")?parseInt(n(this).attr("data-anchor-offset"),10):t.offset||0;r.push({id:n(this).attr("id"),index:e,el:this,offset:o})});var a=null,d=null,l=null;return n(window).on("resize",function(){d=i.height(),l=n(document).height()}),i.on("scroll",function(){var t=i.scrollTop();t+=d*(.3+.7*Math.pow(t/l,2));var c=null;for(var b in r)if(r.hasOwnProperty(b)){var s=r[b];n(s.el).offset().top+s.offset<t&&(c=s)}!c||a&&c.index===a.index||(e.call(o,c?c.id:null,a?a.id:null,c?c.el:null,a?a.el:null),a=c)}),n(window).trigger("resize"),i.trigger("scroll"),this}}(i.default),/*! Anchorjump (c) 2012, Rico Sta. Cruz. MIT License.
 *   http://github.com/rstacruz/jquery-stuff/tree/master/anchorjump */
function(n){var t={speed:500,offset:0,for:null,parent:null};n.fn.anchorjump=function(e){function o(t){var o=n(t.target).closest("a");if(!(t.ctrlKey||t.metaKey||t.altKey||o.attr("target"))){t.preventDefault();var i=o.attr("href");n.anchorjump(i,e)}}e=n.extend({},t,e),e.for?this.on("click",e.for,o):this.on("click",o)},n.anchorjump=function(e,o){o=n.extend({},t,o);var i=0;if("#"!=e){var r=n(e);if(o.parent){var a=r.closest(o.parent);a.length&&(r=a)}if(!r.length)return;var d=r.attr("data-anchor-offset")?parseInt(r.attr("data-anchor-offset"),10):o.offset;i=Math.max(0,r.offset().top+d)}n("html, body").animate({scrollTop:i},o.speed),n("body").trigger("anchor",e),window.history.pushState&&window.history.pushState({href:e},"",e)}}(i.default)},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadData=void 0;var o=e(1),i=function(n){return n&&n.__esModule?n:{default:n}}(o);t.loadData=function n(t,e,o){0===t.length?o(null,e):i.default.get(t.shift()).fail(function(n){o(n,null)}).done(function(i){e.length>0&&(e+="\n\n"),e+=i,n(t,e,o)})}},function(n,t,e){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function i(n){var t=["","",""];n.find("h1, h2, h3").each(function(n,e){var o=(0,h.default)(e),i=parseInt(e.nodeName[1]),r=g.slugify(o.text());i>1&&(r=t[i-2]+"_"+r),t.length=i-1,t=t.concat([r,r]),o.attr("id",r)})}function r(n){n.find("a").each(function(n,t){var e=(0,h.default)(t),o=x.test(e.text());o&&e.text(o[1]).addClass("button")})}function a(n){var t={items:[],id:"",level:0},e=[t];return n.find("h1, h2, h3").each(function(n,o){var i=(0,h.default)(o),r=parseInt(o.nodeName.substr(1)),a=g.mkdirP(t,e,r-1),d={section:i.text(),items:[],level:r,id:i.attr("id")};a.items.push(d),e[r]=d}),t}function d(n){function t(n,e){var o=n.id||"root",i=(0,h.default)("<li>").attr("id",o+"-item").addClass("level-"+n.level).appendTo(e);if(n.section){(0,h.default)("<a>").html(n.section).attr("id",o+"-link").attr("href","#"+n.id).addClass("level-"+n.level).appendTo(i)}if(n.items.length>0){var r=(0,h.default)("<ul>").addClass("level-"+(n.level+1)).attr("id",o+"-list").appendTo(i);n.items.forEach(function(n){t(n,r)})}}var e=(0,h.default)("<ul>");return t(n,e),e}function l(n){return n.find("h1").eq(0).text()}Object.defineProperty(t,"__esModule",{value:!0}),t.parseMarkdown=void 0;var c=e(11),b=o(c),s=e(12),p=o(s),f=e(1),h=o(f),u=e(13),g=function(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t.default=n,t}(u);b.default.setOptions({highlight:function(n,t){return t?p.default.highlight(t,n).value:n}});var x=/^(.*) >$/;t.parseMarkdown=function(n){var t=(0,h.default)("<div>"+(0,b.default)(n));return i(t),r(t),{title:l(t),content:t,menu:d(a(t))}}},function(n,t,e){n.exports=e(0)(209)},function(n,t,e){n.exports=e(0)(10)},function(n,t,e){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0}),t.mkdirP=t.slugify=void 0;var i=e(14),r=o(i),a=e(15),d=o(a);t.slugify=function(n){return(0,d.default)((0,r.default)(n))},t.mkdirP=function(n,t,e){function o(e){t.length=e+1;var i=t[e];if(!i){var r=e>1?o(e-1):n;i={items:[],level:e},t=t.concat([i,i]),r.items.push(i)}return i}return o(e)}},function(n,t,e){n.exports=e(0)(1)},function(n,t,e){n.exports=e(0)(202)}]);