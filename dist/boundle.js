!function(e){var r={};function a(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,r,o){a.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,r){if(1&r&&(e=a(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)a.d(o,n,function(r){return e[r]}.bind(null,n));return o},a.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(r,"a",r),r},a.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},a.p="/dist",a(a.s=4)}([function(e,r,a){"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var a=function(e,r){var a=e[1]||"",o=e[3];if(!o)return a;if(r&&"function"==typeof btoa){var n=(t=o,i=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(d," */")),s=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[a].concat(s).concat([n]).join("\n")}var t,i,d;return[a].join("\n")}(r,e);return r[2]?"@media ".concat(r[2]," {").concat(a,"}"):a})).join("")},r.i=function(e,a,o){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(o)for(var s=0;s<this.length;s++){var t=this[s][0];null!=t&&(n[t]=!0)}for(var i=0;i<e.length;i++){var d=[].concat(e[i]);o&&n[d[0]]||(a&&(d[2]?d[2]="".concat(a," and ").concat(d[2]):d[2]=a),r.push(d))}},r}},function(e,r,a){var o=a(2),n=a(3);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var s={insert:"head",singleton:!1};o(n,s);e.exports=n.locals||{}},function(e,r,a){"use strict";var o,n=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},s=function(){var e={};return function(r){if(void 0===e[r]){var a=document.querySelector(r);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}e[r]=a}return e[r]}}(),t=[];function i(e){for(var r=-1,a=0;a<t.length;a++)if(t[a].identifier===e){r=a;break}return r}function d(e,r){for(var a={},o=[],n=0;n<e.length;n++){var s=e[n],d=r.base?s[0]+r.base:s[0],l=a[d]||0,c="".concat(d," ").concat(l);a[d]=l+1;var m=i(c),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==m?(t[m].references++,t[m].updater(u)):t.push({identifier:c,updater:B(u,r),references:1}),o.push(c)}return o}function l(e){var r=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var n=a.nc;n&&(o.nonce=n)}if(Object.keys(o).forEach((function(e){r.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(r);else{var t=s(e.insert||"head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}return r}var c,m=(c=[],function(e,r){return c[e]=r,c.filter(Boolean).join("\n")});function u(e,r,a,o){var n=a?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=m(r,n);else{var s=document.createTextNode(n),t=e.childNodes;t[r]&&e.removeChild(t[r]),t.length?e.insertBefore(s,t[r]):e.appendChild(s)}}function p(e,r,a){var o=a.css,n=a.media,s=a.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),s&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var M=null,T=0;function B(e,r){var a,o,n;if(r.singleton){var s=T++;a=M||(M=l(r)),o=u.bind(null,a,s,!1),n=u.bind(null,a,s,!0)}else a=l(r),o=p.bind(null,a,r),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)};return o(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;o(e=r)}else n()}}e.exports=function(e,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=n());var a=d(e=e||[],r);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<a.length;o++){var n=i(a[o]);t[n].references--}for(var s=d(e,r),l=0;l<a.length;l++){var c=i(a[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=s}}}},function(e,r,a){"use strict";a.r(r);var o=a(0),n=a.n(o)()(!1);n.push([e.i,"* {\r\n    background-color: #e3e2e2;\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\nbody {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.table {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.button {\r\n    width: 22px;\r\n    height: 23px;\r\n    font-size: 12px;\r\n    margin-left: 5px;\r\n}\r\n\r\n.buttonsDiv {\r\n    margin-top: 15px;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.deleteWindow {\r\n    position: absolute;\r\n    z-index: 10;\r\n    width: 250px;\r\n    height: 150px;\r\n    border: black 2px solid;\r\n    border-radius: 5px;\r\n    background-color: #f4f4f4;\r\n    text-align: center;\r\n}\r\n\r\n.deleteWindow p {\r\n    margin-top: 30px;\r\n}\r\n\r\n.deleteWindow div {\r\n    margin-top: 30px;\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.row {\r\n    border: #919090 1px solid;\r\n}\r\n\r\n.drag {\r\n    cursor: move;\r\n}\r\n\r\n.drag.over {\r\n    border: 3px dotted #666;\r\n}\r\n\r\n.dragging {\r\n    opacity: .5;\r\n}\r\n\r\n.addWindow {\r\n    z-index: 15;\r\n    width: 600px;\r\n    height: 400px;\r\n    border: 2px solid #6e6e6e;\r\n    position: absolute;\r\n}",""]),r.default=n},function(e,r,a){"use strict";a.r(r);a(1);var o=[{Model:"Supercharged 'Blower' Bentley Single-Seater",Brand:"Bentley",Date:"1929",Horsepower:"225",Transmission:"Automatic",Class:"Sedan"},{Model:"Alfa Romeo 6C 1750 Supercharged Gran Sport Spider",Brand:"Alfa Romeo",Date:"1931",Horsepower:"225",Transmission:"Automatic",Class:"Sedan"},{Model:"Alfa Romeo 6C 2500 Competizione",Brand:"Alfa Romeo",Date:"1948",Horsepower:"265",Transmission:"Automatic",Class:"SUV"},{Model:"Alfa Romeo 8C 2300 'Le Mans' Tourer",Brand:"Alfa Romeo",Date:"1934",Horsepower:"290",Transmission:"Automatic",Class:"Sports"},{Model:"Alfa Romeo 8C 2300 Castagna Drop Head Coupe",Brand:"Alfa Romeo",Date:"1933",Horsepower:"200",Transmission:"Automatic",Class:"Sedan"},{Model:"Alfa Romeo 8C 2300 Monza",Brand:"Alfa Romeo",Date:"1933",Horsepower:"270",Transmission:"Automatic",Class:"Sedan"},{Model:"Alfa Romeo 8C 2900B Pinin Farina Cabriolet",Brand:"Alfa Romeo",Date:"1937",Horsepower:"200",Transmission:"Automatic",Class:"Sedan"},{Model:"Alfa Romeo Tipo 256 Cabriolet Sportivo",Brand:"Alfa Romeo",Date:"1939",Horsepower:"170",Transmission:"Automatic",Class:"Sedan"},{Model:"Aston Martin DB3S",Brand:"Aston Martin",Date:"1955",Horsepower:"170",Transmission:"Automatic",Class:"Sedan"},{Model:"Aston Martin DB3S",Brand:"Aston Martin",Date:"1956",Horsepower:"220",Transmission:"Automatic",Class:"Sedan"},{Model:"Aston Martin DB5",Brand:"Aston Martin",Date:"1964",Horsepower:"220",Transmission:"Automatic",Class:"Sedan"},{Model:'Bentley 4 Litre "The Green Hornet"',Brand:"Bentley",Date:"1931",Horsepower:"220",Transmission:"Automatic",Class:"Sedan"},{Model:"Bentley 4Â½ Litre Le Mans Sports 'Bobtail'",Brand:"Bentley",Date:"1928",Horsepower:"220",Transmission:"Automatic",Class:"Sedan"},{Model:"Bentley 4Â½ Litre Supercharged Le Mans",Brand:"Bentley",Date:"1931",Horsepower:"220",Transmission:"Automatic",Class:"Sedan"},{Model:"Bentley 8 Litre Sports Coupe Cabriolet",Brand:"Bentley",Date:"1931",Horsepower:"250",Transmission:"Automatic",Class:"Sedan"},{Model:"Bentley Speed Six Tourer",Brand:"Bentley",Date:"1930",Horsepower:"220",Transmission:"Automatic",Class:"Sedan"},{Model:"Bugatti Royale Berline de Voyager",Brand:"Bugatti",Date:"1931",Horsepower:"220",Transmission:"Automatic",Class:"Wagon"},{Model:"Bugatti Royale Kellner Coupe",Brand:"Bugatti",Date:"1931",Horsepower:"220",Transmission:"Automatic",Class:"Sedan"},{Model:"Bugatti Type 18 5-litre Sports Two-seater",Brand:"Bugatti",Date:"1913",Horsepower:"300",Transmission:"Automatic",Class:"Sedan"},{Model:"Bugatti Type 57S Atalante",Brand:"Bugatti",Date:"1937",Horsepower:"330",Transmission:"Automatic",Class:"Sedan"},{Model:"Bugatti Type 57SC Atalante",Brand:"Bugatti",Date:"1937",Horsepower:"340",Transmission:"Automatic",Class:"Wagon"},{Model:"Bugatti Type 57SC Atalante Coupe",Brand:"Bugatti",Date:"1937",Horsepower:"340",Transmission:"Automatic",Class:"Sedan"},{Model:"Bugatti Veyron 16.4 Grand Sport",Brand:"Bugatti",Date:"2009",Horsepower:"450",Transmission:"Automatic",Class:"Sports"},{Model:"Chevrolet Corvette L88",Brand:"Chevrolet",Date:"1967",Horsepower:"180",Transmission:"Automatic",Class:"Sports"},{Model:"Chevrolet Corvette L88 Convertible",Brand:"Chevrolet",Date:"1967",Horsepower:"225",Transmission:"Automatic",Class:"Sports"},{Model:"De Dion, Bouton ",Brand:"De Dion, Bouton et t",Date:"1884",Horsepower:"250",Transmission:"Automatic",Class:"Sports"},{Model:"De Dion, Bouton et ",Brand:"De Dion, Bouton et ",Date:"1884",Horsepower:"184",Transmission:"Automatic",Class:"Sedan"},{Model:"Delahaye 135 ",Brand:"Delahaye",Date:"1939",Horsepower:"184",Transmission:"Automatic",Class:"Sedan"},{Model:"Delahaye Type 175S",Brand:"Delahaye",Date:"1949",Horsepower:"184",Transmission:"Automatic",Class:"Sedan"},{Model:"Duesenberg Model J ",Brand:"Duesenberg",Date:"1931",Horsepower:"184",Transmission:"Automatic",Class:"Sedan"},{Model:"Duesenberg Model",Brand:"Duesenberg",Date:"1935",Horsepower:"184",Transmission:"Automatic",Class:"Wagon"},{Model:"Duesenberg SJ Roadster",Brand:"Duesenberg",Date:"1935",Horsepower:"225",Transmission:"Automatic",Class:"Sedan"},{Model:"Duesenberg SJ ",Brand:"Duesenberg",Date:"1935",Horsepower:"225",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 166 MM",Brand:"Ferrari",Date:"1950",Horsepower:"225",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 212 Export ",Brand:"Ferrari",Date:"1951",Horsepower:"225",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 GT",Brand:"Ferrari",Date:"1957",Horsepower:"184",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 GT",Brand:"Ferrari",Date:"1955",Horsepower:"225",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 GT Cabriolet",Brand:"Ferrari",Date:"1959",Horsepower:"325",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 GT California",Brand:"Ferrari",Date:"1959",Horsepower:"325",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 GT",Brand:"Ferrari",Date:"1960",Horsepower:"325",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 GT ",Brand:"Ferrari",Date:"1957",Horsepower:"333",Transmission:"Automatic",Class:"Sports"},{Model:"Ferrari 250 GT ",Brand:"Ferrari",Date:"1958",Horsepower:"333",Transmission:"Automatic",Class:"Sports"},{Model:"Ferrari 250 GT ",Brand:"Ferrari",Date:"1956",Horsepower:"225",Transmission:"Automatic",Class:"SUV"},{Model:"Ferrari 250 GT",Brand:"Ferrari",Date:"1959",Horsepower:"325",Transmission:"Automatic",Class:"SUV"},{Model:"Ferrari 250 GT ",Brand:"Ferrari",Date:"1959",Horsepower:"184",Transmission:"Automatic",Class:"Sports"},{Model:"Ferrari 250 GT ",Brand:"Ferrari",Date:"1959",Horsepower:"225",Transmission:"Automatic",Class:"Sports"},{Model:"Ferrari 250 GT ",Brand:"Ferrari",Date:"1958",Horsepower:"175",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 GT ",Brand:"Ferrari",Date:"1958",Horsepower:"205",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 GT",Brand:"Ferrari",Date:"1958",Horsepower:"205",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 GT ",Brand:"Ferrari",Date:"1959",Horsepower:"205",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 GT ",Brand:"Ferrari",Date:"1959",Horsepower:"240",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 GT ",Brand:"Ferrari",Date:"1958",Horsepower:"275",Transmission:"Automatic",Class:"SUV"},{Model:"Ferrari 250 GT Series 1",Brand:"Ferrari",Date:"1958",Horsepower:"240",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 GT",Brand:"Ferrari",Date:"1958",Horsepower:"200",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 GT",Brand:"Ferrari",Date:"1959",Horsepower:"185",Transmission:"Automatic",Class:"SUV"},{Model:"Ferrari 250 GT",Brand:"Ferrari",Date:"1959",Horsepower:"255",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 GT",Brand:"Ferrari",Date:"1960",Horsepower:"275",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 GT",Brand:"Ferrari",Date:"1961",Horsepower:"300",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 GT",Brand:"Ferrari",Date:"1961",Horsepower:"295",Transmission:"Automatic",Class:"SUV"},{Model:"Ferrari 250 GT",Brand:"Ferrari",Date:"1962",Horsepower:"275",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 GT",Brand:"Ferrari",Date:"1962",Horsepower:"320",Transmission:"Automatic",Class:"SUV"},{Model:"Ferrari 250 GTO",Brand:"Ferrari",Date:"1962",Horsepower:"320",Transmission:"Automatic",Class:"Sports"},{Model:"Ferrari 250 LM",Brand:"Ferrari",Date:"1962",Horsepower:"103",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 LM",Brand:"Ferrari",Date:"1964",Horsepower:"190",Transmission:"Automatic",Class:"Minivan"},{Model:"Ferrari 250 LM",Brand:"Ferrari",Date:"1964",Horsepower:"103",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 LWB California Spider",Brand:"Ferrari",Date:"1959",Horsepower:"140",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 LWB ",Brand:"Ferrari",Date:"1959",Horsepower:"140",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 MM ",Brand:"Ferrari",Date:"1953",Horsepower:"140",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 SWB",Brand:"Ferrari",Date:"1961",Horsepower:"350",Transmission:"Automatic",Class:"Sports"},{Model:"Ferrari 250 SWB ",Brand:"Ferrari",Date:"1962",Horsepower:"350",Transmission:"Automatic",Class:"Sports"},{Model:"Ferrari 250 SWB ",Brand:"Ferrari",Date:"1960",Horsepower:"180",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 SWB ",Brand:"Ferrari",Date:"1960",Horsepower:"200",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 SWB",Brand:"Ferrari",Date:"1962",Horsepower:"240",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 SWB",Brand:"Ferrari",Date:"1961",Horsepower:"145",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 Testa Rossa",Brand:"Ferrari",Date:"1957",Horsepower:"200",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 250 Testa Rossa",Brand:"Ferrari",Date:"1957",Horsepower:"200",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 275 GTB",Brand:"Ferrari",Date:"1967",Horsepower:"200",Transmission:"Automatic",Class:"Wagon"},{Model:"Ferrari 275 GTB Alloy",Brand:"Ferrari",Date:"1967",Horsepower:"180",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 275 GTB Long",Brand:"Ferrari",Date:"1965",Horsepower:"200",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 275 GTB/4",Brand:"Ferrari",Date:"1967",Horsepower:"295",Transmission:"Automatic",Class:"SUV"},{Model:"Ferrari 275 GTB/4",Brand:"Ferrari",Date:"1967",Horsepower:"295",Transmission:"Automatic",Class:"SUV"},{Model:"Ferrari 275 GTB/4 ",Brand:"Ferrari",Date:"1967",Horsepower:"165",Transmission:"Automatic",Class:"SUV"},{Model:"Ferrari 275 GTB/4S",Brand:"Ferrari",Date:"1967",Horsepower:"275",Transmission:"Automatic",Class:"SUV"},{Model:"Ferrari 275 GTB/C",Brand:"Ferrari",Date:"1966",Horsepower:"185",Transmission:"Automatic",Class:"Minivan"},{Model:"Ferrari 275 GTB/C",Brand:"Ferrari",Date:"1964",Horsepower:"250",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 330 P3",Brand:"Ferrari",Date:"1966",Horsepower:"255",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 330 TRI",Brand:"Ferrari",Date:"1962",Horsepower:"200",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 330 TRI",Brand:"Ferrari",Date:"1962",Horsepower:"232",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 333 SP",Brand:"Ferrari",Date:"1998",Horsepower:"215",Transmission:"Automatic",Class:"Sports"},{Model:"Ferrari 340 Mexico",Brand:"Ferrari",Date:"1952",Horsepower:"250",Transmission:"Automatic",Class:"Wagon"},{Model:"Ferrari 340 Mexico",Brand:"Ferrari",Date:"1952",Horsepower:"150",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 340 MM",Brand:"Ferrari",Date:"1953",Horsepower:"220",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 340 MM Spider",Brand:"Ferrari",Date:"1953",Horsepower:"150",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 340/375",Brand:"Ferrari",Date:"1953",Horsepower:"150",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 340/375",Brand:"Ferrari",Date:"1953",Horsepower:"200",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 375 MM",Brand:"Ferrari",Date:"1955",Horsepower:"150",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 375 MM",Brand:"Ferrari",Date:"1962",Horsepower:"200",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 375 MM",Brand:"Ferrari",Date:"1953",Horsepower:"180",Transmission:"Automatic",Class:"Minivan"},{Model:"Ferrari 375-Plus",Brand:"Ferrari",Date:"1954",Horsepower:"215",Transmission:"Automatic",Class:"Minivan"},{Model:"Ferrari 400 ",Brand:"Ferrari",Date:"1962",Horsepower:"150",Transmission:"Automatic",Class:"Minivan"},{Model:"Ferrari 400 Super",Brand:"Ferrari",Date:"1962",Horsepower:"230",Transmission:"Automatic",Class:"SUV"},{Model:"Ferrari 410 Sport",Brand:"Ferrari",Date:"1956",Horsepower:"215",Transmission:"Automatic",Class:"Minivan"},{Model:"Ferrari 410S",Brand:"Ferrari",Date:"1955",Horsepower:"232",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 412S",Brand:"Ferrari",Date:"1958",Horsepower:"200",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 500 Mondial ",Brand:"Ferrari",Date:"1954",Horsepower:"132",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 500 TRC",Brand:"Ferrari",Date:"1957",Horsepower:"132",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 500 TRC",Brand:"Ferrari",Date:"1957",Horsepower:"150",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 512",Brand:"Ferrari",Date:"1971",Horsepower:"150",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 512S",Brand:"Ferrari",Date:"1970",Horsepower:"224",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 625 TRC ",Brand:"Ferrari",Date:"1957",Horsepower:"224",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 750 Monza ",Brand:"Ferrari",Date:"1955",Horsepower:"239",Transmission:"Automatic",Class:"Sedan"},{Model:"Ferrari 857 Sport",Brand:"Ferrari",Date:"1955",Horsepower:"201",Transmission:"Automatic",Class:"SUV"},{Model:"Ferrari Dino 206SP",Brand:"Ferrari",Date:"1966",Horsepower:"232",Transmission:"Automatic",Class:"SUV"},{Model:"Ferrari F2004",Brand:"Ferrari",Date:"2004",Horsepower:"210",Transmission:"Automatic",Class:"SUV"},{Model:"Ford GT40",Brand:"Ford",Date:"1967",Horsepower:"110",Transmission:"Automatic",Class:"Sedan"},{Model:"Ford GT40",Brand:"Ford",Date:"1968",Horsepower:"130",Transmission:"Automatic",Class:"Sedan"},{Model:"Ford GT40 Prototype",Brand:"Ford",Date:"1964",Horsepower:"170",Transmission:"Automatic",Class:"Sedan"},{Model:"Ford GT40 Roadster",Brand:"Ford",Date:"1965",Horsepower:"130",Transmission:"Automatic",Class:"Wagon"},{Model:"GM Futurliner",Brand:"General Motors",Date:"1950",Horsepower:"130",Transmission:"Automatic",Class:"Sedan"},{Model:"Gordini Type 24S",Brand:"Gordini",Date:"1953",Horsepower:"130",Transmission:"Automatic",Class:"Sedan"},{Model:"Gurney Eagle Mk1",Brand:"All American Racers",Date:"1966",Horsepower:"193",Transmission:"Automatic",Class:"Minivan"},{Model:"Horch 853A Special",Brand:"Horch",Date:"1939",Horsepower:"193",Transmission:"Automatic",Class:"Sports"},{Model:"Jaguar C-Type",Brand:"Jaguar",Date:"1952",Horsepower:"260",Transmission:"Automatic",Class:"Sports"},{Model:"Jaguar C-Type",Brand:"Jaguar",Date:"1953",Horsepower:"155",Transmission:"Automatic",Class:"Sedan"},{Model:"Jaguar D-Type",Brand:"Jaguar",Date:"1955",Horsepower:"155",Transmission:"Automatic",Class:"Wagon"},{Model:"Jaguar D-Type",Brand:"Jaguar",Date:"1955",Horsepower:"201",Transmission:"Automatic",Class:"Sedan"},{Model:"Jaguar D-Type",Brand:"Jaguar",Date:"1956",Horsepower:"280",Transmission:"Automatic",Class:"Sports"},{Model:"Jaguar D-Type",Brand:"Jaguar",Date:"1956",Horsepower:"275",Transmission:"Automatic",Class:"SUV"},{Model:"Jaguar E2A",Brand:"Jaguar",Date:"1960",Horsepower:"190",Transmission:"Automatic",Class:"Minivan"},{Model:"Maserati 450S ",Brand:"Maserati",Date:"1956",Horsepower:"285",Transmission:"Automatic",Class:"SUV"},{Model:"Maserati A6G/2000 ",Brand:"Maserati",Date:"1955",Horsepower:"325",Transmission:"Automatic",Class:"SUV"},{Model:"Maserati Tipo 61",Brand:"Maserati",Date:"1960",Horsepower:"160",Transmission:"Automatic",Class:"Sedan"},{Model:"McLaren F1",Brand:"McLaren",Date:"1995",Horsepower:"240",Transmission:"Automatic",Class:"Sedan"},{Model:"McLaren F1",Brand:"McLaren",Date:"1997",Horsepower:"160",Transmission:"Automatic",Class:"Sedan"},{Model:"McLaren F1",Brand:"McLaren",Date:"1997",Horsepower:"240",Transmission:"Automatic",Class:"Sedan"},{Model:"McLaren F1 GTR ",Brand:"McLaren",Date:"1997",Horsepower:"127",Transmission:"Automatic",Class:"Sedan"},{Model:"McLaren M16C",Brand:"McLaren",Date:"1974",Horsepower:"115",Transmission:"Automatic",Class:"Sedan"},{Model:"Mercedes-Benz 300SL",Brand:"Mercedes-Benz",Date:"1955",Horsepower:"117",Transmission:"Automatic",Class:"Sedan"},{Model:"Mercedes-Benz ",Brand:"Mercedes-Benz",Date:"1929",Horsepower:"115",Transmission:"Automatic",Class:"Sedan"},{Model:"Mercedes-Benz 500K ",Brand:"Mercedes-Benz",Date:"1935",Horsepower:"160",Transmission:"Automatic",Class:"Sedan"},{Model:"Mercedes-Benz 540K ",Brand:"Mercedes-Benz",Date:"1936",Horsepower:"93",Transmission:"Automatic",Class:"Sedan"},{Model:"Mercedes-Benz 540K ",Brand:"Mercedes-Benz",Date:"1937",Horsepower:"160",Transmission:"Automatic",Class:"SUV"},{Model:"Mercedes-Benz 540K",Brand:"Mercedes-Benz",Date:"1939",Horsepower:"160",Transmission:"Automatic",Class:"SUV"},{Model:"Mercedes-Benz 540K",Brand:"Mercedes-Benz",Date:"1936",Horsepower:"73",Transmission:"Automatic",Class:"Sedan"},{Model:"Mercedes-Benz 540K",Brand:"Mercedes-Benz",Date:"1937",Horsepower:"240",Transmission:"Automatic",Class:"Minivan"},{Model:"Mercedes-Benz 540K",Brand:"Mercedes-Benz",Date:"1939",Horsepower:"240",Transmission:"Automatic",Class:"Minivan"},{Model:"Mercedes-Benz 680S",Brand:"Mercedes-Benz",Date:"1928",Horsepower:"240",Transmission:"Automatic",Class:"SUV"},{Model:"Mercedes-Benz SSK",Brand:"Mercedes-Benz",Date:"1929",Horsepower:"240",Transmission:"Automatic",Class:"Sports"},{Model:"Mercedes-Benz W196",Brand:"Mercedes-Benz",Date:"1954",Horsepower:"316",Transmission:"Automatic",Class:"SUV"},{Model:"Oldsmobile F-88",Brand:"General Motors",Date:"1954",Horsepower:"103",Transmission:"Automatic",Class:"Sedan"},{Model:"Oldsmobile Limited ",Brand:"General Motors",Date:"1912",Horsepower:"103",Transmission:"Automatic",Class:"Sedan"},{Model:"Packard Twelve ",Brand:"Packard Motor",Date:"1934",Horsepower:"103",Transmission:"Automatic",Class:"Sedan"},{Model:"Pontiac Bonneville",Brand:"Packard Motor",Date:"1954",Horsepower:"138",Transmission:"Automatic",Class:"Sedan"},{Model:"Porsche 550/1500",Brand:"Porsche",Date:"1955",Horsepower:"138",Transmission:"Automatic",Class:"Sedan"},{Model:"Porsche 911 Carrera",Brand:"Porsche",Date:"1974",Horsepower:"138",Transmission:"Automatic",Class:"Sedan"},{Model:"Porsche 917 Interserie",Brand:"Porsche",Date:"1970",Horsepower:"173",Transmission:"Automatic",Class:"SUV"},{Model:"Porsche 917/10",Brand:"Porsche",Date:"1972",Horsepower:"170",Transmission:"Automatic",Class:"Sedan"},{Model:"Porsche 917/30",Brand:"Porsche",Date:"1973",Horsepower:"170",Transmission:"Automatic",Class:"Sedan"},{Model:"Porsche 956",Brand:"Porsche",Date:"1982",Horsepower:"172",Transmission:"Automatic",Class:"Sports"},{Model:"Porsche RS60",Brand:"Porsche",Date:"1960",Horsepower:"194",Transmission:"Automatic",Class:"Sedan"},{Model:"Rolls-Royce 10 hp",Brand:"Rolls-Royce",Date:"1904",Horsepower:"194",Transmission:"Automatic",Class:"Sedan"},{Model:"Shelby Cobra 427",Brand:"AC Cars",Date:"1966",Horsepower:"280",Transmission:"Automatic",Class:"Wagon"},{Model:"Shelby Daytona ",Brand:"AC Cars",Date:"1965",Horsepower:"315",Transmission:"Automatic",Class:"Wagon"},{Model:"Talbot-Lago Lago ",Brand:"Talbot-Lago",Date:"1938",Horsepower:"260",Transmission:"Automatic",Class:"Sedan"},{Model:"Talbot-Lago T150-C SS",Brand:"Talbot-Lago",Date:"1938",Horsepower:"280",Transmission:"Automatic",Class:"Sedan"},{Model:"Talbot-Lago T150C",Brand:"Talbot-Lago",Date:"1938",Horsepower:"260",Transmission:"Automatic",Class:"Sedan"},{Model:"Talbot-Lago T150C",Brand:"Talbot-Lago",Date:"1938",Horsepower:"255",Transmission:"Automatic",Class:"Sedan"},{Model:"Talbot-Lago T150C",Brand:"Talbot-Lago",Date:"1939",Horsepower:"340",Transmission:"Automatic",Class:"Sedan"}].map((function(e){return e.id=Math.floor(9999999*Math.random()),e})),n=JSON.stringify(o);localStorage.setItem("cars",n);var s,t=document.getElementById("addBrand"),i=document.getElementById("addDate"),d=document.getElementById("addTransmission"),l=document.getElementById("addModel"),c=document.getElementById("addClass"),m=document.getElementById("addHP"),u=document.getElementById("createNewCar"),p=document.getElementById("brand"),M=document.getElementById("model"),T=document.getElementById("date"),B=document.getElementById("class"),C=document.getElementById("transmission"),S=document.getElementById("hp"),A=document.getElementById("del"),D=document.getElementById("container"),w=JSON.parse(localStorage.getItem("cars")),H=0,F=Math.ceil(w.length/10);function f(){var e,r;H?(e=10*H,r=10*(H+1)):(e=0,r=10),s=w.slice(e,r),p.innerHTML="",M.innerHTML="",T.innerHTML="",B.innerHTML="",C.innerHTML="",S.innerHTML="",A.innerHTML="",s.forEach((function(e){return function(e){var r=document.createElement("div");r.innerHTML=e.Brand;var a=document.createElement("div");a.innerHTML=e.Model,a.classList.add("model");var o=document.createElement("div");o.innerHTML=e.Date;var n=document.createElement("div");n.innerHTML=e.Class;var s=document.createElement("div");s.innerHTML=e.Transmission;var t=document.createElement("div");t.innerHTML=e.Horsepower+"hp";var i=document.createElement("div");i.setAttribute("id",e.id),i.innerHTML='<i><img src="../svg/edit.svg" style="width: 12px" alt=""></i>',i.innerHTML='<i><img src="../svg/delete.svg" style="width: 12px" alt=""></i>',p.appendChild(r),M.appendChild(a),T.appendChild(o),B.appendChild(n),C.appendChild(s),S.appendChild(t),A.appendChild(i)}(e)})),v(),g()}function g(){var e=document.getElementById("buttonsDiv");e.innerHTML="";for(var r=function(r){var a=document.createElement("input");a.type="button",a.value="".concat(r+1),a.addEventListener("click",(function(){H=r,f()})),a.classList.add("button"),e.appendChild(a)},a=0;a<F;a++)r(a)}function v(){document.querySelectorAll("img").forEach((function(e){e.addEventListener("click",(function(){var r=document.createElement("div");r.classList.add("deleteWindow");var a=document.createElement("p");a.innerHTML="Are you sure you want to delete?";var o=document.createElement("div");o.classList.add("btnDiv");var n=document.createElement("input");n.type="button",n.value="Delete",n.addEventListener("click",(function(){var r=e.closest("div");w=w.filter((function(e){return e.id!==+r.id})),localStorage.setItem("cars",JSON.stringify(w)),F=Math.ceil(w.length/10),g(),f(),0===s.length?(H--,f()):f();for(var a=document.getElementsByClassName("deleteWindow");a.length>0;)a[0].remove()}));var t=document.createElement("input");t.type="button",t.value="Cancel",t.addEventListener("click",(function(){for(var e=document.getElementsByClassName("deleteWindow");e.length>0;)e[0].remove()})),r.appendChild(a),o.appendChild(n),o.appendChild(t),r.appendChild(o),D.appendChild(r)}))}))}f(),document.getElementById("back").addEventListener("click",(function(){H&&(H--,f())})),document.getElementById("next").addEventListener("click",(function(){H<F-1&&(H++,f())})),v();var y=document.querySelectorAll(".drag"),h=document.querySelector(".table");y.forEach((function(e){e.addEventListener("dragstart",(function(){e.classList.add("dragging")})),e.addEventListener("dragend",(function(){e.classList.remove("dragging")}))})),h.addEventListener("dragover",(function(){var e=document.querySelector(".drag");h.appendChild(e)}));var b=document.getElementById("addNewCar"),L=document.getElementById("addCarWidow");b.addEventListener("click",(function(){L.style.display="block"})),u.addEventListener("click",(function(){var e={};e.Brand=t.value,e.Date=i.value,e.Transmission=d.value,e.Model=l.value,e.CLASS=c.value,e.Horsepower=m.value,e.id=Math.floor(999999*Math.random()),w.unshift(e),localStorage.setItem("cars",JSON.stringify(w)),F=Math.ceil(w.length/10),f(),g(),L.style.display="none",t.value="",i.value="",d.value="",l.value="",c.value="",m.value=""}))}]);