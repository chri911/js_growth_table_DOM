parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".append-row"),d=document.querySelector(".remove-row"),r=document.querySelector(".append-column"),n=document.querySelector(".remove-column");function c(){var r=document.querySelector(".field tbody");d.disabled=!1,r.append(r.children[0].cloneNode(!0)),r.children.length>=10&&(e.disabled=!0)}function l(){var r=document.querySelector(".field tbody"),n=document.querySelector(".field tbody tr");e.disabled=!1,n.remove(),r.children.length<3&&(d.disabled=!0)}function t(){var e=document.querySelectorAll("tr");n.disabled=!1,e.forEach(function(e){return e.children[0].before(e.children[0].cloneNode(!0))}),e[0].cells.length>9&&(r.disabled=!0)}function o(){var e=document.querySelectorAll("tr");e.forEach(function(e){return e.children[0].remove()}),r.disabled=!1,e[0].cells.length<3&&(n.disabled=!0)}e.addEventListener("click",c),d.addEventListener("click",l),r.addEventListener("click",t),n.addEventListener("click",o);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.35d182f3.js.map