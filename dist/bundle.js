/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/dropdownMenu.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/dropdownMenu.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dropdown-menu {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n  justify-items: stretch; }\n  .dropdown-menu a {\n    text-decoration: none;\n    color: inherit; }\n  .dropdown-menu .dropdown-container.open .dropdown-top {\n    background-color: gray;\n    color: var(--base-white); }\n  .dropdown-menu .dropdown-container .dropdown-top, .dropdown-menu .dropdown-container .dropdown li a {\n    display: block;\n    padding: 0.5em 1em;\n    cursor: pointer; }\n    .dropdown-menu .dropdown-container .dropdown-top:hover, .dropdown-menu .dropdown-container .dropdown li a:hover {\n      background-color: gray;\n      color: var(--base-white); }\n  .dropdown-menu .dropdown-container .dropdown-top {\n    border: 2px solid gray; }\n  .dropdown-menu .dropdown-container .dropdown {\n    position: relative;\n    z-index: 1; }\n    .dropdown-menu .dropdown-container .dropdown .dropdown-content {\n      overflow: hidden;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 0;\n      transition: height 500ms ease; }\n      .dropdown-menu .dropdown-container .dropdown .dropdown-content ul {\n        background-color: var(--base-white);\n        border: 2px solid gray;\n        border-top: none; }\n", "",{"version":3,"sources":["webpack://./src/dropdownMenu.scss"],"names":[],"mappings":"AAAA;EAEI,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB,EAAA;EAL1B;IAQQ,qBAAqB;IACrB,cAAc,EAAA;EATtB;IAegB,sBAAsB;IACtB,wBAAwB,EAAA;EAhBxC;IA4BY,cAAc;IACd,kBAAkB;IAClB,eAAe,EAAA;IA9B3B;MAiCgB,sBAAsB;MACtB,wBAAwB,EAAA;EAlCxC;IAuCY,sBAAsB,EAAA;EAvClC;IA2CY,kBAAkB;IAClB,UAAU,EAAA;IA5CtB;MA+CgB,gBAAgB;MAChB,kBAAkB;MAClB,MAAM;MACN,OAAO;MACP,WAAW;MAEX,SAAS;MACT,6BAA6B,EAAA;MAtD7C;QAyDoB,mCAAmC;QACnC,sBAAsB;QACtB,gBAAgB,EAAA","sourcesContent":[".dropdown-menu {\r\n    // Grid\r\n    display: grid;\r\n    grid-auto-flow: column;\r\n    grid-auto-columns: 1fr;\r\n    justify-items: stretch;\r\n\r\n    a {\r\n        text-decoration: none;\r\n        color: inherit;\r\n    }\r\n\r\n    .dropdown-container {\r\n        &.open {\r\n            .dropdown-top {\r\n                background-color: gray;\r\n                color: var(--base-white);\r\n            }\r\n\r\n            .dropdown {\r\n                ul {\r\n                    // transform: translateY(0);\r\n                    // transform: scaleY(1);\r\n                }\r\n            }\r\n        }\r\n\r\n        .dropdown-top, .dropdown li a {\r\n            display: block;\r\n            padding: 0.5em 1em;\r\n            cursor: pointer;\r\n    \r\n            &:hover {\r\n                background-color: gray;\r\n                color: var(--base-white);\r\n            }\r\n        }\r\n\r\n        .dropdown-top {\r\n            border: 2px solid gray;\r\n        }\r\n    \r\n        .dropdown {\r\n            position: relative;\r\n            z-index: 1;\r\n\r\n            .dropdown-content {\r\n                overflow: hidden;\r\n                position: absolute;\r\n                top: 0;\r\n                left: 0;\r\n                width: 100%;\r\n                // Transition\r\n                height: 0;\r\n                transition: height 500ms ease;\r\n\r\n                ul {\r\n                    background-color: var(--base-white);\r\n                    border: 2px solid gray;\r\n                    border-top: none;\r\n    \r\n                    li {\r\n                        a {\r\n                            \r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/imageSlider.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/imageSlider.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".img-slider {\n  user-select: none; }\n  .img-slider .img-slider-main {\n    position: relative;\n    width: 100%;\n    height: 30vh;\n    border: 2px solid var(--base-black); }\n    .img-slider .img-slider-main .img-slider-prev, .img-slider .img-slider-main .img-slider-next {\n      opacity: 0;\n      z-index: 1;\n      cursor: pointer;\n      background-color: gray;\n      color: var(--base-white);\n      font-size: 3rem;\n      position: absolute;\n      top: 0;\n      height: 100%;\n      width: 5rem;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      transition: opacity 300ms ease; }\n    .img-slider .img-slider-main .img-slider-prev:hover, .img-slider .img-slider-main .img-slider-next:hover {\n      opacity: 0.8; }\n    .img-slider .img-slider-main .img-slider-prev {\n      left: 0; }\n    .img-slider .img-slider-main .img-slider-next {\n      right: 0; }\n    .img-slider .img-slider-main .img-slider-content {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      overflow: hidden; }\n      .img-slider .img-slider-main .img-slider-content .img-slider-item {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        display: flex;\n        justify-content: center;\n        transform: translateX(100%);\n        animation-duration: 500ms;\n        animation-timing-function: ease;\n        animation-fill-mode: both; }\n        .img-slider .img-slider-main .img-slider-content .img-slider-item.selected-gallery-item {\n          transform: translateX(0%); }\n        .img-slider .img-slider-main .img-slider-content .img-slider-item img {\n          width: auto;\n          max-height: 100%; }\n  .img-slider .img-slider-footer .img-slider-counter {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center; }\n    .img-slider .img-slider-footer .img-slider-counter .gallery-counter-item {\n      content: \"\";\n      cursor: pointer;\n      width: 2rem;\n      height: 2rem;\n      margin: 1rem;\n      border-radius: 50%;\n      border: 0.1rem solid var(--base-black);\n      transition: border 500ms ease; }\n      .img-slider .img-slider-footer .img-slider-counter .gallery-counter-item.selected-gallery-counter-item {\n        border: 0.7rem solid var(--base-black); }\n\n@keyframes slide-right-from-out {\n  0% {\n    transform: translateX(-100%); }\n  100% {\n    transform: translateX(0%); } }\n\n@keyframes slide-left-from-out {\n  0% {\n    transform: translateX(100%); }\n  100% {\n    transform: translateX(0%); } }\n\n@keyframes slide-right-from-in {\n  0% {\n    transform: translateX(0%); }\n  100% {\n    transform: translateX(100%); } }\n\n@keyframes slide-left-from-in {\n  0% {\n    transform: translateX(0%); }\n  100% {\n    transform: translateX(-100%); } }\n", "",{"version":3,"sources":["webpack://./src/imageSlider.scss"],"names":[],"mappings":"AAAA;EACI,iBAAiB,EAAA;EADrB;IAIQ,kBAAkB;IAClB,WAAW;IACX,YAAY;IAEZ,mCAAmC,EAAA;IAR3C;MAWY,UAAU;MACV,UAAU;MACV,eAAe;MACf,sBAAsB;MACtB,wBAAwB;MACxB,eAAe;MAEf,kBAAkB;MAClB,MAAM;MACN,YAAY;MACZ,WAAW;MAEX,aAAa;MACb,uBAAuB;MACvB,mBAAmB;MAEnB,8BAA8B,EAAA;IA3B1C;MA+BY,YAAY,EAAA;IA/BxB;MAmCY,OAAO,EAAA;IAnCnB;MAuCY,QAAQ,EAAA;IAvCpB;MA2CY,kBAAkB;MAClB,WAAW;MACX,YAAY;MACZ,MAAM;MACN,OAAO;MACP,gBAAgB,EAAA;MAhD5B;QAmDgB,kBAAkB;QAClB,WAAW;QACX,YAAY;QACZ,MAAM;QACN,OAAO;QACP,aAAa;QACb,uBAAuB;QAEvB,2BAA2B;QAE3B,yBAAyB;QACzB,+BAA+B;QAC/B,yBAAyB,EAAA;QA/DzC;UAkEoB,yBAAyB,EAAA;QAlE7C;UAsEoB,WAAW;UACX,gBAAgB,EAAA;EAvEpC;IAgFY,aAAa;IACb,eAAe;IACf,uBAAuB,EAAA;IAlFnC;MAqFgB,WAAW;MACX,eAAe;MACf,WAAW;MACX,YAAY;MACZ,YAAY;MACZ,kBAAkB;MAClB,sCAAsC;MAEtC,6BAA6B,EAAA;MA7F7C;QAgGoB,sCAAqC,EAAA;;AASzD;EACI;IACI,4BAA4B,EAAA;EAEhC;IACI,yBAAyB,EAAA,EAAA;;AAIjC;EACI;IACI,2BAA2B,EAAA;EAE/B;IACI,yBAAyB,EAAA,EAAA;;AAIjC;EACI;IACI,yBAAyB,EAAA;EAE7B;IACI,2BAA2B,EAAA,EAAA;;AAInC;EACI;IACI,yBAAyB,EAAA;EAE7B;IACI,4BAA4B,EAAA,EAAA","sourcesContent":[".img-slider {\r\n    user-select: none;\r\n\r\n    .img-slider-main {\r\n        position: relative;\r\n        width: 100%;\r\n        height: 30vh;\r\n        // Border\r\n        border: 2px solid var(--base-black);\r\n\r\n        .img-slider-prev, .img-slider-next {\r\n            opacity: 0;\r\n            z-index: 1;\r\n            cursor: pointer;\r\n            background-color: gray;\r\n            color: var(--base-white);\r\n            font-size: 3rem;\r\n            // Position/Size\r\n            position: absolute;\r\n            top: 0;\r\n            height: 100%;\r\n            width: 5rem;\r\n            // Center children\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            // Transition\r\n            transition: opacity 300ms ease;\r\n        }\r\n\r\n        .img-slider-prev:hover, .img-slider-next:hover {\r\n            opacity: 0.8;\r\n        }\r\n\r\n        .img-slider-prev {\r\n            left: 0;\r\n        }\r\n\r\n        .img-slider-next {\r\n            right: 0;\r\n        }\r\n\r\n        .img-slider-content {\r\n            position: absolute;\r\n            width: 100%;\r\n            height: 100%;\r\n            top: 0;\r\n            left: 0;\r\n            overflow: hidden;\r\n\r\n            .img-slider-item {\r\n                position: absolute;\r\n                width: 100%;\r\n                height: 100%;\r\n                top: 0;\r\n                left: 0;\r\n                display: flex;\r\n                justify-content: center;\r\n                // Transition\r\n                transform: translateX(100%);\r\n                //transition: transform 500ms ease;\r\n                animation-duration: 500ms;\r\n                animation-timing-function: ease;\r\n                animation-fill-mode: both;\r\n\r\n                &.selected-gallery-item {\r\n                    transform: translateX(0%);\r\n                }\r\n        \r\n                img {\r\n                    width: auto;\r\n                    max-height: 100%;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .img-slider-footer {\r\n\r\n        .img-slider-counter {\r\n            display: flex;\r\n            flex-wrap: wrap;\r\n            justify-content: center;\r\n\r\n            .gallery-counter-item {\r\n                content: \"\";\r\n                cursor: pointer;\r\n                width: 2rem;\r\n                height: 2rem;\r\n                margin: 1rem;\r\n                border-radius: 50%;\r\n                border: 0.1rem solid var(--base-black);\r\n                // Transition\r\n                transition: border 500ms ease;\r\n\r\n                &.selected-gallery-counter-item {\r\n                    border: .7rem solid var(--base-black);\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n// Animations\r\n\r\n@keyframes slide-right-from-out {\r\n    0% {\r\n        transform: translateX(-100%);\r\n    }\r\n    100% {\r\n        transform: translateX(0%);\r\n    }\r\n}\r\n\r\n@keyframes slide-left-from-out {\r\n    0% {\r\n        transform: translateX(100%);\r\n    }\r\n    100% {\r\n        transform: translateX(0%);\r\n    }\r\n}\r\n\r\n@keyframes slide-right-from-in {\r\n    0% {\r\n        transform: translateX(0%);\r\n    }\r\n    100% {\r\n        transform: translateX(100%);\r\n    }\r\n}\r\n\r\n@keyframes slide-left-from-in {\r\n    0% {\r\n        transform: translateX(0%);\r\n    }\r\n    100% {\r\n        transform: translateX(-100%);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/meyerReset.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/meyerReset.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n", "",{"version":3,"sources":["webpack://./src/meyerReset.scss"],"names":[],"mappings":"AAAA;;;CAGC;AAED;;;;;;;;;;;;;EAaC,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB,EAAA;;AAEzB,gDAAA;AACA;;EAEC,cAAc,EAAA;;AAEf;EACC,cAAc,EAAA;;AAEf;EACC,gBAAgB,EAAA;;AAEjB;EACC,YAAY,EAAA;;AAEb;;EAEC,WAAW;EACX,aAAa,EAAA;;AAEd;EACC,yBAAyB;EACzB,iBAAiB,EAAA","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --base-white: hsl(0, 0%, 95%);\n  --base-black: hsl(0, 0%, 10%); }\n\nhtml {\n  font-size: 62.5%;\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  box-sizing: inherit; }\n\nbody {\n  font-size: 1.6rem;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  background-color: var(--base-white);\n  color: var(--base-black); }\n\n#content {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas: \"header header\"\r \"main main\"\r \"footer footer\"; }\n\nheader, #sidenav-content, main, footer {\n  padding: 1.2rem; }\n\nheader {\n  text-align: center;\n  grid-area: header;\n  display: grid;\n  place-items: center; }\n\n#sidenav {\n  grid-area: sidenav;\n  z-index: 1;\n  overflow-x: hidden;\n  position: absolute;\n  height: 100%;\n  width: 0;\n  top: 0;\n  left: 0;\n  transition: width 500ms ease; }\n  #sidenav a {\n    display: block; }\n\nmain {\n  grid-area: main; }\n\nfooter {\n  text-align: center;\n  grid-area: footer;\n  display: grid;\n  place-items: center; }\n\n/* Extra small devices (phones, 600px and down) */\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (min-width: 600px) {\n  #content {\n    grid-template-areas: \"header header\"\r \"sidenav main\"\r \"footer footer\"; }\n    #content #sidenav {\n      position: static;\n      width: auto;\n      border-right: 2px solid var(--base-black); } }\n\n/* Medium devices (landscape tablets, 768px and up) */\n/* Large devices (laptops/desktops, 992px and up) */\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAEA;EAEI,6BAAa;EACb,6BAAa,EAAA;;AAGjB;EACI,gBAAgB;EAChB,sBAAsB,EAAA;;AAG1B;EACI,mBAAmB,EAAA;;AAGvB;EACI,iBAAiB;EACjB,wIAAwI;EACxI,mCAAmC;EACnC,wBAAwB,EAAA;;AAG5B;EACI,iBAAiB;EAEjB,aAAa;EACb,+BAA+B;EAC/B,iCAAiC;EACjC,kEAGmB,EAAA;;AAGvB;EACI,eAAe,EAAA;;AAGnB;EACI,kBAAkB;EAElB,iBAAiB;EACjB,aAAa;EACb,mBAAmB,EAAA;;AAGvB;EAEI,kBAAkB;EAElB,UAAU;EACV,kBAAkB;EAElB,kBAAkB;EAClB,YAAY;EACZ,QAAQ;EACR,MAAM;EACN,OAAO;EAEP,4BAA4B,EAAA;EAbhC;IAgBQ,cAAc,EAAA;;AAQtB;EAEI,eAAe,EAAA;;AAGnB;EACI,kBAAkB;EAElB,iBAAiB;EACjB,aAAa;EACb,mBAAmB,EAAA;;AAIvB,iDAAA;AAGA,oEAAA;AACA;EACI;IACI,qEAGmB,EAAA;IAJvB;MAOQ,gBAAgB;MAChB,WAAW;MACX,yCAAyC,EAAA,EAC5C;;AAIT,qDAAA;AAGA,mDAAA;AAGA,oEAAA","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\r\n\r\n:root {\r\n    // Variables\r\n    --base-white: hsl(0, 0%, 95%);\r\n    --base-black: hsl(0, 0%, 10%);\r\n}\r\n\r\nhtml {\r\n    font-size: 62.5%; // 1rem = 10px\r\n    box-sizing: border-box;\r\n}\r\n\r\n*, *::before, *::after {\r\n    box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n    font-size: 1.6rem;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    background-color: var(--base-white);\r\n    color: var(--base-black);\r\n}\r\n\r\n#content {\r\n    min-height: 100vh;\r\n    // Grid\r\n    display: grid;\r\n    grid-template-columns: auto 1fr;\r\n    grid-template-rows: auto 1fr auto;\r\n    grid-template-areas: \r\n        \"header header\"\r\n        \"main main\"\r\n        \"footer footer\";\r\n}\r\n\r\nheader, #sidenav-content, main, footer {\r\n    padding: 1.2rem;\r\n}\r\n\r\nheader {\r\n    text-align: center;\r\n    // Grid\r\n    grid-area: header;\r\n    display: grid;\r\n    place-items: center;\r\n}\r\n\r\n#sidenav {\r\n    // Grid\r\n    grid-area: sidenav;\r\n\r\n    z-index: 1;\r\n    overflow-x: hidden;\r\n    // Position\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 0;\r\n    top: 0;\r\n    left: 0;\r\n    // Transition\r\n    transition: width 500ms ease;\r\n\r\n    a {\r\n        display: block;\r\n    }\r\n\r\n    #sidenav-content {\r\n        \r\n    }\r\n}\r\n\r\nmain {\r\n    // Grid\r\n    grid-area: main;\r\n}\r\n\r\nfooter {\r\n    text-align: center;\r\n    // Grid\r\n    grid-area: footer;\r\n    display: grid;\r\n    place-items: center;\r\n}\r\n\r\n\r\n/* Extra small devices (phones, 600px and down) */\r\n@media only screen and (max-width: 600px) {}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n@media only screen and (min-width: 600px) {\r\n    #content {\r\n        grid-template-areas: \r\n            \"header header\"\r\n            \"sidenav main\"\r\n            \"footer footer\";\r\n        \r\n        #sidenav {\r\n            position: static;\r\n            width: auto;\r\n            border-right: 2px solid var(--base-black);\r\n        }\r\n    }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n@media only screen and (min-width: 768px) {}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n@media only screen and (min-width: 992px) {}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n@media only screen and (min-width: 1200px) {}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/dropdownMenu.scss":
/*!*******************************!*\
  !*** ./src/dropdownMenu.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dropdownMenu_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./dropdownMenu.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/dropdownMenu.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dropdownMenu_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dropdownMenu_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dropdownMenu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dropdownMenu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/imageSlider.scss":
/*!******************************!*\
  !*** ./src/imageSlider.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_imageSlider_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./imageSlider.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/imageSlider.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_imageSlider_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_imageSlider_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_imageSlider_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_imageSlider_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/meyerReset.scss":
/*!*****************************!*\
  !*** ./src/meyerReset.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_meyerReset_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./meyerReset.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/meyerReset.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_meyerReset_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_meyerReset_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_meyerReset_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_meyerReset_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/baseComponent.js":
/*!******************************!*\
  !*** ./src/baseComponent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");


class BaseComponent {
    constructor(props) {
        this._element = null;
        this._props = props;
    }

    // Getters/Setters

    get element() {
        return this._element;
    }

    get props() {
        return this._props;
    }

    set props(newProps) {
        this._props = newProps;
        this.render();
    }

    // Methods

    emptyElement() {
        if (!this._element) return;

        while (this._element.firstChild) {
            this._element.removeChild(this._element.firstChild);
        }
    }

    initializeRender(baseElement = document.createElement('div')) {
        if (!this._element) {
            this._element = baseElement;
        } else {
            this.emptyElement();
        }
    }

    render() {
        this.initializeRender();

        this._element.appendChild(
            (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', {}, 'Base Component!')
        );

        return this._element;
    }
}


/***/ }),

/***/ "./src/dropdownMenu.js":
/*!*****************************!*\
  !*** ./src/dropdownMenu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DropdownMenu)
/* harmony export */ });
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseComponent */ "./src/baseComponent.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var _dropdownMenu_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdownMenu.scss */ "./src/dropdownMenu.scss");




class DropdownMenu extends _baseComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(props) {
        super(props);
        this._dropdownElements = [];
    }

    _closeAllDropdowns(...dropdownContentElementsToIgnore) {
        for (let i = 0; i < this._dropdownElements.length; i++) {
            const dropdownContentElement = this._dropdownElements[i];

            if (!dropdownContentElementsToIgnore.includes(dropdownContentElement)) {
                dropdownContentElement.style.height = 0;
            }
        }
    }

    _handleDropdownTopClick(e, dropdownContainer, dropdownContentElement, dropdownListElement) {
        e.preventDefault();

        this._closeAllDropdowns(dropdownContentElement);

        if (dropdownContentElement.offsetHeight > 0) {
            dropdownContentElement.style.height = 0;
        } else {
            dropdownContentElement.style.height = `${dropdownListElement.offsetHeight}px`;
        }
    }

    render() {
        this.initializeRender((0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createElement)('nav', { class: 'dropdown-menu' }));

        /*
        props = {
            content: [
                {
                    name: 'Nav 1',
                    href: null,
                    dropdownContent: [
                        {
                            name: 'Sub Nav 1-1',
                            href: ''
                        },
                        {
                            name: 'Sub Nav 1-2',
                            href: ''
                        },
                        {
                            name: 'Sub Nav 1-3',
                            href: ''
                        }
                    ]
                }
            ]
        };
        */

        if (Object.prototype.hasOwnProperty.call(this._props, 'content') && Array.isArray(this._props.content)) {
            for (let i = 0; i < this._props.content.length; i++) {
                const itemObj = this._props.content[i];

                if (!Object.prototype.hasOwnProperty.call(itemObj, 'name')) continue;

                const dropdownContainer = this._element.appendChild((0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', { class: 'dropdown-container' }));

                // Top Level
                const dropdownTopElement = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', { class: 'dropdown-top' }, itemObj.name);
                dropdownContainer.appendChild(dropdownTopElement);

                // Dropdown
                if (!Object.prototype.hasOwnProperty.call(itemObj, 'dropdownContent') || !Array.isArray(itemObj.dropdownContent)) {
                    continue;
                }

                const dropdownElement = dropdownContainer.appendChild((0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', { class: 'dropdown' }));
                const dropdownContentElement = dropdownElement.appendChild((0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', { class: 'dropdown-content' }));
                const dropdownListElement = dropdownContentElement.appendChild(document.createElement('ul'));

                dropdownContainer.addEventListener('click', (e) => {
                    this._handleDropdownTopClick(
                        e,
                        dropdownContainer,
                        dropdownContentElement,
                        dropdownListElement
                    );
                }, false);

                for (let j = 0; j < itemObj.dropdownContent.length; j++) {
                    const dropdownObj = itemObj.dropdownContent[j];

                    if (!Object.prototype.hasOwnProperty.call(dropdownObj, 'name')) continue;

                    dropdownListElement.appendChild(
                        (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createElement)(
                            'li',
                            {},
                            (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createElement)('a', { href: dropdownObj.href || '' }, dropdownObj.name)
                        )
                    );
                }

                this._dropdownElements.push(dropdownContentElement);
            }
        }

        return this._element;
    }
}


/***/ }),

/***/ "./src/footerComponent.js":
/*!********************************!*\
  !*** ./src/footerComponent.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseComponent */ "./src/baseComponent.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");



class FooterComponent extends _baseComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(copyrightYear) {
        super();
        this.copyrightYear = copyrightYear;
    }

    render() {
        this._element = document.createElement('footer');
        const currYear = new Date().getFullYear();

        if (!this.copyrightYear) {
            this.copyrightYear = currYear;
        }

        this._element.appendChild(
            (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createElement)(
                'p',
                {},
                (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createElement)(
                    'small',
                    {},
                    'Source Code © ',
                    (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createElement)('time', { id: 'copyright-year' }, currYear > this.copyrightYear ? `${this.copyrightYear}-${currYear}` : this.copyrightYear),
                    ' Todd Brentlinger, Santa Cruz, CA, USA. All Rights Reserved.'
                )
            )
        );

        return this._element;
    }
}


/***/ }),

/***/ "./src/headerComponent.js":
/*!********************************!*\
  !*** ./src/headerComponent.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseComponent */ "./src/baseComponent.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");



class HeaderComponent extends _baseComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    render() {
        if (!this._element) {
            this._element = document.createElement('header');
        }

        this._element.appendChild(
            (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createElement)('h1', {}, 'Dynamic User Interface Interactions')
        );

        return this._element;
    }
}


/***/ }),

/***/ "./src/image.js":
/*!**********************!*\
  !*** ./src/image.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseComponent */ "./src/baseComponent.js");


class Image extends _baseComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    render() {
        this.initializeRender(document.createElement('img'));

        Object.entries(this.props).forEach(([key, value]) => {
            this._element.setAttribute(key, value);
        });

        return this._element;
    }
}


/***/ }),

/***/ "./src/imageSlider.js":
/*!****************************!*\
  !*** ./src/imageSlider.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageSlider)
/* harmony export */ });
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseComponent */ "./src/baseComponent.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "./src/image.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var _imageSlider_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageSlider.scss */ "./src/imageSlider.scss");





class ImageSlider extends _baseComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(props) {
        super(props);
        this.images = this.props.images.map((imageProps) => new _image__WEBPACK_IMPORTED_MODULE_1__["default"](imageProps));
        this._selectedIndex = 0;
    }

    get selectedIndex() {
        return this._selectedIndex;
    }

    set selectedIndex(newIndex) {
        if (newIndex < 0) {
            this._selectedIndex = this.images.length - 1;
        } else if (newIndex >= this.images.length) {
            this._selectedIndex = 0;
        } else {
            this._selectedIndex = newIndex;
        }
    }

    handleGalleryItemSelect(newSelectedIndex) {
        if (newSelectedIndex === this.selectedIndex) return;

        // Get direction of slide
        const direction = (newSelectedIndex < this.selectedIndex) ? 'right' : 'left';

        // Alter current selected gallery item
        const currSelectedGalleryItem = this.element.querySelector(`.img-slider-item[data-index="${this.selectedIndex}"]`);
        currSelectedGalleryItem.style.animationName = `slide-${direction}-from-in`;
        currSelectedGalleryItem.classList.remove('selected-gallery-item');

        // Alter current selected gallery counter item
        const currSelectedGalleryCounterItem = this.element.querySelector(`.gallery-counter-item[data-index="${this.selectedIndex}"]`);
        currSelectedGalleryCounterItem.classList.remove('selected-gallery-counter-item');

        this.selectedIndex = newSelectedIndex;

        // Alter new selected gallery item
        const newSelectedGalleryItem = this.element.querySelector(`.img-slider-item[data-index="${this.selectedIndex}"]`);
        newSelectedGalleryItem.style.animationName = `slide-${direction}-from-out`;
        newSelectedGalleryItem.classList.add('selected-gallery-item');

        // Alter new selected gallery counter item
        const newSelectedGalleryCounterItem = this.element.querySelector(`.gallery-counter-item[data-index="${this.selectedIndex}"]`);
        newSelectedGalleryCounterItem.classList.add('selected-gallery-counter-item');
    }

    handlePrevClick() {
        this.handleGalleryItemSelect(this.selectedIndex - 1);
    }

    handleNextClick() {
        this.handleGalleryItemSelect(this.selectedIndex + 1);
    }

    render() {
        this.initializeRender((0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', { class: 'img-slider' }));

        // Slider Main
        const sliderMain = this._element.appendChild(
            (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', { class: 'img-slider-main' })
        );

        // Slider Main - Gallery Next/Prev Buttons
        if (this.images.length > 1) {
            const prevBtn = (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', { class: 'img-slider-prev' }, '\u003c');
            prevBtn.addEventListener('click', this.handlePrevClick.bind(this), false);

            const nextBtn = (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', { class: 'img-slider-next' }, '\u003e');
            nextBtn.addEventListener('click', this.handleNextClick.bind(this), false);

            sliderMain.append(prevBtn, nextBtn);
        }

        // Slider Main - Image Gallery Container
        const imgGalleryContainer = sliderMain.appendChild(
            (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', { class: 'img-slider-content' })
        );

        // Slider Footer
        const sliderFooter = this._element.appendChild(
            (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', { class: 'img-slider-footer' })
        );

        // Slider Footer - Gallery Counter
        const galleryCounter = sliderFooter.appendChild(
            (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', { class: 'img-slider-counter' })
        );

        // Gallery Items
        this.images.forEach((image, index) => {
            const imgSliderItem = (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', { class: 'img-slider-item', 'data-index': index }, image.render());
            const galleryCounterItem = (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', { class: 'gallery-counter-item', 'data-index': index });

            if (index === this.selectedIndex) {
                imgSliderItem.classList.add('selected-gallery-item');
                galleryCounterItem.classList.add('selected-gallery-counter-item');
            }

            // Add item to image gallery container
            imgGalleryContainer.appendChild(imgSliderItem);

            // Add item to gallery counter
            galleryCounterItem.addEventListener('click', () => {
                this.handleGalleryItemSelect(index);
            }, false);
            galleryCounter.appendChild(galleryCounterItem);
        });

        return this._element;
    }
}


/***/ }),

/***/ "./src/mobileMenu.js":
/*!***************************!*\
  !*** ./src/mobileMenu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileMenu)
/* harmony export */ });
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseComponent */ "./src/baseComponent.js");


class MobileMenu extends _baseComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    render() {
        if (!this._element) {
            this._element = document.createElement('div', { id: 'mobile-menu' });
        }

        this._element.textContent = 'Mobile Menu Component!';

        return this._element;
    }
}


/***/ }),

/***/ "./src/sideNavComponent.js":
/*!*********************************!*\
  !*** ./src/sideNavComponent.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SideNavComponent)
/* harmony export */ });
/* harmony import */ var _baseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseComponent */ "./src/baseComponent.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");



class SideNavComponent extends _baseComponent__WEBPACK_IMPORTED_MODULE_0__["default"] {
    render() {
        if (!this._element) {
            this._element = (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createElement)('nav', { id: 'sidenav' });
        }

        const sidenavContent = this._element.appendChild(
            (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', { id: 'sidenav-content' })
        );

        // Dropdown Menu
        sidenavContent.appendChild(
            (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createElement)('a', { href: '' }, 'Dropdown Menu')
        );

        // Mobile Menu
        sidenavContent.appendChild(
            (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createElement)('a', { href: '' }, 'Mobile Menu')
        );

        // Image Slider
        sidenavContent.appendChild(
            (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.createElement)('a', { href: '' }, 'Image Slider')
        );

        return this._element;
    }
}


/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
/**
 * @param {String} type - Element type
 * @param {Object} props - Element attribute names and their corresponding value
 * @param  {...Node} children - Variable number of child nodes
 */
 function createElement(type, props = {}, ...children) {
    const element = document.createElement(type);

    // Props
    for (const [key, value] of Object.entries(props)) {
        element.setAttribute(key, value);
    }

    // Children Nodes
    children.forEach((child) => element.append(child));

    return element;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdownMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdownMenu */ "./src/dropdownMenu.js");
/* harmony import */ var _mobileMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobileMenu */ "./src/mobileMenu.js");
/* harmony import */ var _imageSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageSlider */ "./src/imageSlider.js");
/* harmony import */ var _headerComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./headerComponent */ "./src/headerComponent.js");
/* harmony import */ var _sideNavComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sideNavComponent */ "./src/sideNavComponent.js");
/* harmony import */ var _footerComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footerComponent */ "./src/footerComponent.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var _meyerReset_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meyerReset.scss */ "./src/meyerReset.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");












function component() {
    const element = (0,_utilities__WEBPACK_IMPORTED_MODULE_6__.createElement)('div', { id: 'content' });

    element.appendChild(
        (new _headerComponent__WEBPACK_IMPORTED_MODULE_3__["default"]()).render()
    );

    element.appendChild(
        (new _sideNavComponent__WEBPACK_IMPORTED_MODULE_4__["default"]()).render()
    );

    const mainElement = element.appendChild(
        document.createElement('main')
    );

    // Dropdown Menu
    let props = { content: [] };
    for (let i = 0; i < 3; i++) {
        const numDropdownItems = 1 + (Math.random() * 4);
        const dropdownContent = [];
        for (let j = 0; j < numDropdownItems; j++) {
            dropdownContent.push({
                name: `Sub Nav ${i + 1}-${j + 1}`,
                href: '',
            });
        }

        props.content.push({
            dropdownContent,
            name: `Nav ${i + 1}`,
            href: null,
        });
    }
    /*
    props = {
        content: [
            {
                name: 'Nav 1',
                href: null,
                dropdownContent: [
                    {
                        name: 'Sub Nav 1-1',
                        href: ''
                    },
                    {
                        name: 'Sub Nav 1-2',
                        href: ''
                    },
                    {
                        name: 'Sub Nav 1-3',
                        href: ''
                    }
                ]
            }
        ]
    };
    */
    mainElement.append(
        (0,_utilities__WEBPACK_IMPORTED_MODULE_6__.createElement)('h2', {}, 'Dropdown Menu:'),
        (new _dropdownMenu__WEBPACK_IMPORTED_MODULE_0__["default"](props)).render()
    );

    // Mobile Menu
    mainElement.append(
        (0,_utilities__WEBPACK_IMPORTED_MODULE_6__.createElement)('h2', {}, 'Mobile Menu:'),
        (new _mobileMenu__WEBPACK_IMPORTED_MODULE_1__["default"]()).render()
    );

    const images = [
        ['GoldenEye 007', 'co25w8'],
        ['Splinter Cell: Chaos Theory', 'co2ysx'],
        ['Jak and Daxter: The Precursor Legacy', 'co1w7q'],
        ['The Last of Us', 'co1r7f'],
        ['Uncharted 2: Among Thieves', 'co1tnb'],
        ['Metal Gear Solid 2: Sons of Liberty', 'co29pl'],
        ['Red Dead Redemption 2', 'co1q1f'],
    ].map((imageSource) => ({
        src: `https://images.igdb.com/igdb/image/upload/t_cover_big/${imageSource[1]}.png`,
        width: 264,
        height: 352,
        alt: `${imageSource[0]} video game cover`,
    }));

    props = { images };

    // Image Slider
    mainElement.append(
        (0,_utilities__WEBPACK_IMPORTED_MODULE_6__.createElement)('h2', {}, 'Image Slider:'),
        (new _imageSlider__WEBPACK_IMPORTED_MODULE_2__["default"](props)).render()
    );

    // Footer
    element.appendChild(
        (new _footerComponent__WEBPACK_IMPORTED_MODULE_5__["default"](2022)).render()
    );

    return element;
}

document.body.appendChild(component());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLGFBQWEseURBQWdCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0EsaUNBQWlDLE1BQU0sR0FBRyxNQUFNO0FBQ2hEO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLE1BQU07QUFDL0I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFhLFNBQVM7QUFDOUIsYUFBYSxxREFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQWEsU0FBUztBQUM5QixhQUFhLG1EQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsZUFBZTtBQUNyRjtBQUNBO0FBQ0EsZ0JBQWdCLGdCQUFnQjtBQUNoQyxLQUFLO0FBQ0w7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBYSxTQUFTO0FBQzlCLGFBQWEsb0RBQVc7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHdEQUFlO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcHJvamVjdC1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9kcm9wZG93bk1lbnUuc2NzcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvaW1hZ2VTbGlkZXIuc2NzcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvbWV5ZXJSZXNldC5zY3NzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9kcm9wZG93bk1lbnUuc2Nzcz83ZGFhIiwid2VicGFjazovL29kaW4tcHJvamVjdC1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9pbWFnZVNsaWRlci5zY3NzPzU0MmUiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LWR5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL21leWVyUmVzZXQuc2Nzcz82NGQwIiwid2VicGFjazovL29kaW4tcHJvamVjdC1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL29kaW4tcHJvamVjdC1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LWR5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LWR5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LWR5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL2Jhc2VDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LWR5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL2Ryb3Bkb3duTWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvZm9vdGVyQ29tcG9uZW50LmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9oZWFkZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LWR5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL2ltYWdlLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9pbWFnZVNsaWRlci5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvbW9iaWxlTWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvc2lkZU5hdkNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LWR5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tcHJvamVjdC1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5kcm9wZG93bi1tZW51IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7IH1cXG4gIC5kcm9wZG93bi1tZW51IGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0OyB9XFxuICAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24tY29udGFpbmVyLm9wZW4gLmRyb3Bkb3duLXRvcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGNvbG9yOiB2YXIoLS1iYXNlLXdoaXRlKTsgfVxcbiAgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWNvbnRhaW5lciAuZHJvcGRvd24tdG9wLCAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24tY29udGFpbmVyIC5kcm9wZG93biBsaSBhIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1jb250YWluZXIgLmRyb3Bkb3duLXRvcDpob3ZlciwgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWNvbnRhaW5lciAuZHJvcGRvd24gbGkgYTpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgICBjb2xvcjogdmFyKC0tYmFzZS13aGl0ZSk7IH1cXG4gIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1jb250YWluZXIgLmRyb3Bkb3duLXRvcCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7IH1cXG4gIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1jb250YWluZXIgLmRyb3Bkb3duIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxOyB9XFxuICAgIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1jb250YWluZXIgLmRyb3Bkb3duIC5kcm9wZG93bi1jb250ZW50IHtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDUwMG1zIGVhc2U7IH1cXG4gICAgICAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24tY29udGFpbmVyIC5kcm9wZG93biAuZHJvcGRvd24tY29udGVudCB1bCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLXdoaXRlKTtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxuICAgICAgICBib3JkZXItdG9wOiBub25lOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Ryb3Bkb3duTWVudS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBRUksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsc0JBQXNCLEVBQUE7RUFMMUI7SUFRUSxxQkFBcUI7SUFDckIsY0FBYyxFQUFBO0VBVHRCO0lBZWdCLHNCQUFzQjtJQUN0Qix3QkFBd0IsRUFBQTtFQWhCeEM7SUE0QlksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7SUE5QjNCO01BaUNnQixzQkFBc0I7TUFDdEIsd0JBQXdCLEVBQUE7RUFsQ3hDO0lBdUNZLHNCQUFzQixFQUFBO0VBdkNsQztJQTJDWSxrQkFBa0I7SUFDbEIsVUFBVSxFQUFBO0lBNUN0QjtNQStDZ0IsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixNQUFNO01BQ04sT0FBTztNQUNQLFdBQVc7TUFFWCxTQUFTO01BQ1QsNkJBQTZCLEVBQUE7TUF0RDdDO1FBeURvQixtQ0FBbUM7UUFDbkMsc0JBQXNCO1FBQ3RCLGdCQUFnQixFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5kcm9wZG93bi1tZW51IHtcXHJcXG4gICAgLy8gR3JpZFxcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcclxcbiAgICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xcclxcblxcclxcbiAgICBhIHtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kcm9wZG93bi1jb250YWluZXIge1xcclxcbiAgICAgICAgJi5vcGVuIHtcXHJcXG4gICAgICAgICAgICAuZHJvcGRvd24tdG9wIHtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJhc2Utd2hpdGUpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAuZHJvcGRvd24ge1xcclxcbiAgICAgICAgICAgICAgICB1bCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5kcm9wZG93bi10b3AsIC5kcm9wZG93biBsaSBhIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJhc2Utd2hpdGUpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5kcm9wZG93bi10b3Age1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgLmRyb3Bkb3duIHtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAuZHJvcGRvd24tY29udGVudCB7XFxyXFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgLy8gVHJhbnNpdGlvblxcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCA1MDBtcyBlYXNlO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICB1bCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLXdoaXRlKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxpIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pbWctc2xpZGVyIHtcXG4gIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAuaW1nLXNsaWRlciAuaW1nLXNsaWRlci1tYWluIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMHZoO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1iYXNlLWJsYWNrKTsgfVxcbiAgICAuaW1nLXNsaWRlciAuaW1nLXNsaWRlci1tYWluIC5pbWctc2xpZGVyLXByZXYsIC5pbWctc2xpZGVyIC5pbWctc2xpZGVyLW1haW4gLmltZy1zbGlkZXItbmV4dCB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB6LWluZGV4OiAxO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICAgIGNvbG9yOiB2YXIoLS1iYXNlLXdoaXRlKTtcXG4gICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgd2lkdGg6IDVyZW07XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZTsgfVxcbiAgICAuaW1nLXNsaWRlciAuaW1nLXNsaWRlci1tYWluIC5pbWctc2xpZGVyLXByZXY6aG92ZXIsIC5pbWctc2xpZGVyIC5pbWctc2xpZGVyLW1haW4gLmltZy1zbGlkZXItbmV4dDpob3ZlciB7XFxuICAgICAgb3BhY2l0eTogMC44OyB9XFxuICAgIC5pbWctc2xpZGVyIC5pbWctc2xpZGVyLW1haW4gLmltZy1zbGlkZXItcHJldiB7XFxuICAgICAgbGVmdDogMDsgfVxcbiAgICAuaW1nLXNsaWRlciAuaW1nLXNsaWRlci1tYWluIC5pbWctc2xpZGVyLW5leHQge1xcbiAgICAgIHJpZ2h0OiAwOyB9XFxuICAgIC5pbWctc2xpZGVyIC5pbWctc2xpZGVyLW1haW4gLmltZy1zbGlkZXItY29udGVudCB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAgICAgLmltZy1zbGlkZXIgLmltZy1zbGlkZXItbWFpbiAuaW1nLXNsaWRlci1jb250ZW50IC5pbWctc2xpZGVyLWl0ZW0ge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoOyB9XFxuICAgICAgICAuaW1nLXNsaWRlciAuaW1nLXNsaWRlci1tYWluIC5pbWctc2xpZGVyLWNvbnRlbnQgLmltZy1zbGlkZXItaXRlbS5zZWxlY3RlZC1nYWxsZXJ5LWl0ZW0ge1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpOyB9XFxuICAgICAgICAuaW1nLXNsaWRlciAuaW1nLXNsaWRlci1tYWluIC5pbWctc2xpZGVyLWNvbnRlbnQgLmltZy1zbGlkZXItaXRlbSBpbWcge1xcbiAgICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgICAgbWF4LWhlaWdodDogMTAwJTsgfVxcbiAgLmltZy1zbGlkZXIgLmltZy1zbGlkZXItZm9vdGVyIC5pbWctc2xpZGVyLWNvdW50ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAgIC5pbWctc2xpZGVyIC5pbWctc2xpZGVyLWZvb3RlciAuaW1nLXNsaWRlci1jb3VudGVyIC5nYWxsZXJ5LWNvdW50ZXItaXRlbSB7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHdpZHRoOiAycmVtO1xcbiAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICBtYXJnaW46IDFyZW07XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHZhcigtLWJhc2UtYmxhY2spO1xcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlciA1MDBtcyBlYXNlOyB9XFxuICAgICAgLmltZy1zbGlkZXIgLmltZy1zbGlkZXItZm9vdGVyIC5pbWctc2xpZGVyLWNvdW50ZXIgLmdhbGxlcnktY291bnRlci1pdGVtLnNlbGVjdGVkLWdhbGxlcnktY291bnRlci1pdGVtIHtcXG4gICAgICAgIGJvcmRlcjogMC43cmVtIHNvbGlkIHZhcigtLWJhc2UtYmxhY2spOyB9XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1yaWdodC1mcm9tLW91dCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWxlZnQtZnJvbS1vdXQge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLXJpZ2h0LWZyb20taW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWxlZnQtZnJvbS1pbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW1hZ2VTbGlkZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGlCQUFpQixFQUFBO0VBRHJCO0lBSVEsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBRVosbUNBQW1DLEVBQUE7SUFSM0M7TUFXWSxVQUFVO01BQ1YsVUFBVTtNQUNWLGVBQWU7TUFDZixzQkFBc0I7TUFDdEIsd0JBQXdCO01BQ3hCLGVBQWU7TUFFZixrQkFBa0I7TUFDbEIsTUFBTTtNQUNOLFlBQVk7TUFDWixXQUFXO01BRVgsYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFFbkIsOEJBQThCLEVBQUE7SUEzQjFDO01BK0JZLFlBQVksRUFBQTtJQS9CeEI7TUFtQ1ksT0FBTyxFQUFBO0lBbkNuQjtNQXVDWSxRQUFRLEVBQUE7SUF2Q3BCO01BMkNZLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsWUFBWTtNQUNaLE1BQU07TUFDTixPQUFPO01BQ1AsZ0JBQWdCLEVBQUE7TUFoRDVCO1FBbURnQixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFlBQVk7UUFDWixNQUFNO1FBQ04sT0FBTztRQUNQLGFBQWE7UUFDYix1QkFBdUI7UUFFdkIsMkJBQTJCO1FBRTNCLHlCQUF5QjtRQUN6QiwrQkFBK0I7UUFDL0IseUJBQXlCLEVBQUE7UUEvRHpDO1VBa0VvQix5QkFBeUIsRUFBQTtRQWxFN0M7VUFzRW9CLFdBQVc7VUFDWCxnQkFBZ0IsRUFBQTtFQXZFcEM7SUFnRlksYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUIsRUFBQTtJQWxGbkM7TUFxRmdCLFdBQVc7TUFDWCxlQUFlO01BQ2YsV0FBVztNQUNYLFlBQVk7TUFDWixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLHNDQUFzQztNQUV0Qyw2QkFBNkIsRUFBQTtNQTdGN0M7UUFnR29CLHNDQUFxQyxFQUFBOztBQVN6RDtFQUNJO0lBQ0ksNEJBQTRCLEVBQUE7RUFFaEM7SUFDSSx5QkFBeUIsRUFBQSxFQUFBOztBQUlqQztFQUNJO0lBQ0ksMkJBQTJCLEVBQUE7RUFFL0I7SUFDSSx5QkFBeUIsRUFBQSxFQUFBOztBQUlqQztFQUNJO0lBQ0kseUJBQXlCLEVBQUE7RUFFN0I7SUFDSSwyQkFBMkIsRUFBQSxFQUFBOztBQUluQztFQUNJO0lBQ0kseUJBQXlCLEVBQUE7RUFFN0I7SUFDSSw0QkFBNEIsRUFBQSxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5pbWctc2xpZGVyIHtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFxyXFxuICAgIC5pbWctc2xpZGVyLW1haW4ge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwdmg7XFxyXFxuICAgICAgICAvLyBCb3JkZXJcXHJcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJhc2UtYmxhY2spO1xcclxcblxcclxcbiAgICAgICAgLmltZy1zbGlkZXItcHJldiwgLmltZy1zbGlkZXItbmV4dCB7XFxyXFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1iYXNlLXdoaXRlKTtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgICAgICAgICAgLy8gUG9zaXRpb24vU2l6ZVxcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA1cmVtO1xcclxcbiAgICAgICAgICAgIC8vIENlbnRlciBjaGlsZHJlblxcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAvLyBUcmFuc2l0aW9uXFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmltZy1zbGlkZXItcHJldjpob3ZlciwgLmltZy1zbGlkZXItbmV4dDpob3ZlciB7XFxyXFxuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmltZy1zbGlkZXItcHJldiB7XFxyXFxuICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5pbWctc2xpZGVyLW5leHQge1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmltZy1zbGlkZXItY29udGVudCB7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgICAgICAgICAgIC5pbWctc2xpZGVyLWl0ZW0ge1xcclxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIC8vIFRyYW5zaXRpb25cXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcclxcbiAgICAgICAgICAgICAgICAvL3RyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlO1xcclxcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xcclxcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcclxcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAmLnNlbGVjdGVkLWdhbGxlcnktaXRlbSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW1nLXNsaWRlci1mb290ZXIge1xcclxcblxcclxcbiAgICAgICAgLmltZy1zbGlkZXItY291bnRlciB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmdhbGxlcnktY291bnRlci1pdGVtIHtcXHJcXG4gICAgICAgICAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDJyZW07XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHZhcigtLWJhc2UtYmxhY2spO1xcclxcbiAgICAgICAgICAgICAgICAvLyBUcmFuc2l0aW9uXFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlciA1MDBtcyBlYXNlO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAmLnNlbGVjdGVkLWdhbGxlcnktY291bnRlci1pdGVtIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogLjdyZW0gc29saWQgdmFyKC0tYmFzZS1ibGFjayk7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gQW5pbWF0aW9uc1xcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGUtcmlnaHQtZnJvbS1vdXQge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlLWxlZnQtZnJvbS1vdXQge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGUtcmlnaHQtZnJvbS1pbiB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZS1sZWZ0LWZyb20taW4ge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7IH1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBjb250ZW50OiBub25lOyB9XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21leWVyUmVzZXQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7QUFFRDs7Ozs7Ozs7Ozs7OztFQWFDLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2Isd0JBQXdCLEVBQUE7O0FBRXpCLGdEQUFBO0FBQ0E7O0VBRUMsY0FBYyxFQUFBOztBQUVmO0VBQ0MsY0FBYyxFQUFBOztBQUVmO0VBQ0MsZ0JBQWdCLEVBQUE7O0FBRWpCO0VBQ0MsWUFBWSxFQUFBOztBQUViOztFQUVDLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBRWQ7RUFDQyx5QkFBeUI7RUFDekIsaUJBQWlCLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxyXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxyXFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXHJcXG4qL1xcclxcblxcclxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1iYXNlLXdoaXRlOiBoc2woMCwgMCUsIDk1JSk7XFxuICAtLWJhc2UtYmxhY2s6IGhzbCgwLCAwJSwgMTAlKTsgfVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2Utd2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLWJhc2UtYmxhY2spOyB9XFxuXFxuI2NvbnRlbnQge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcciBcXFwibWFpbiBtYWluXFxcIlxcciBcXFwiZm9vdGVyIGZvb3RlclxcXCI7IH1cXG5cXG5oZWFkZXIsICNzaWRlbmF2LWNvbnRlbnQsIG1haW4sIGZvb3RlciB7XFxuICBwYWRkaW5nOiAxLjJyZW07IH1cXG5cXG5oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjsgfVxcblxcbiNzaWRlbmF2IHtcXG4gIGdyaWQtYXJlYTogc2lkZW5hdjtcXG4gIHotaW5kZXg6IDE7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB0cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlOyB9XFxuICAjc2lkZW5hdiBhIHtcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjsgfVxcblxcbmZvb3RlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyOyB9XFxuXFxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCA2MDBweCBhbmQgZG93bikgKi9cXG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XFxuICAjY29udGVudCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcciBcXFwic2lkZW5hdiBtYWluXFxcIlxcciBcXFwiZm9vdGVyIGZvb3RlclxcXCI7IH1cXG4gICAgI2NvbnRlbnQgI3NpZGVuYXYge1xcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tYmFzZS1ibGFjayk7IH0gfVxcblxcbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xcbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cXG4vKiBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBsYXB0b3BzIGFuZCBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFFSSw2QkFBYTtFQUNiLDZCQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZ0JBQWdCO0VBQ2hCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGlCQUFpQjtFQUNqQix3SUFBd0k7RUFDeEksbUNBQW1DO0VBQ25DLHdCQUF3QixFQUFBOztBQUc1QjtFQUNJLGlCQUFpQjtFQUVqQixhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLGlDQUFpQztFQUNqQyxrRUFHbUIsRUFBQTs7QUFHdkI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0JBQWtCO0VBRWxCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBRUksa0JBQWtCO0VBRWxCLFVBQVU7RUFDVixrQkFBa0I7RUFFbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixRQUFRO0VBQ1IsTUFBTTtFQUNOLE9BQU87RUFFUCw0QkFBNEIsRUFBQTtFQWJoQztJQWdCUSxjQUFjLEVBQUE7O0FBUXRCO0VBRUksZUFBZSxFQUFBOztBQUduQjtFQUNJLGtCQUFrQjtFQUVsQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUl2QixpREFBQTtBQUdBLG9FQUFBO0FBQ0E7RUFDSTtJQUNJLHFFQUdtQixFQUFBO0lBSnZCO01BT1EsZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCx5Q0FBeUMsRUFBQSxFQUM1Qzs7QUFJVCxxREFBQTtBQUdBLG1EQUFBO0FBR0Esb0VBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLy8gVmFyaWFibGVzXFxyXFxuICAgIC0tYmFzZS13aGl0ZTogaHNsKDAsIDAlLCA5NSUpO1xcclxcbiAgICAtLWJhc2UtYmxhY2s6IGhzbCgwLCAwJSwgMTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjIuNSU7IC8vIDFyZW0gPSAxMHB4XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcclxcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2Utd2hpdGUpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYmFzZS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIC8vIEdyaWRcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcclxcbiAgICAgICAgXFxcIm1haW4gbWFpblxcXCJcXHJcXG4gICAgICAgIFxcXCJmb290ZXIgZm9vdGVyXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyLCAjc2lkZW5hdi1jb250ZW50LCBtYWluLCBmb290ZXIge1xcclxcbiAgICBwYWRkaW5nOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgLy8gR3JpZFxcclxcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGVuYXYge1xcclxcbiAgICAvLyBHcmlkXFxyXFxuICAgIGdyaWQtYXJlYTogc2lkZW5hdjtcXHJcXG5cXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICAvLyBQb3NpdGlvblxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgLy8gVHJhbnNpdGlvblxcclxcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlO1xcclxcblxcclxcbiAgICBhIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNzaWRlbmF2LWNvbnRlbnQge1xcclxcbiAgICAgICAgXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIC8vIEdyaWRcXHJcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIC8vIEdyaWRcXHJcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIEV4dHJhIHNtYWxsIGRldmljZXMgKHBob25lcywgNjAwcHggYW5kIGRvd24pICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge31cXHJcXG5cXHJcXG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgICNjb250ZW50IHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICAgICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcclxcbiAgICAgICAgICAgIFxcXCJzaWRlbmF2IG1haW5cXFwiXFxyXFxuICAgICAgICAgICAgXFxcImZvb3RlciBmb290ZXJcXFwiO1xcclxcbiAgICAgICAgXFxyXFxuICAgICAgICAjc2lkZW5hdiB7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcXHJcXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1iYXNlLWJsYWNrKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7fVxcclxcblxcclxcbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7fVxcclxcblxcclxcbi8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGxhcHRvcHMgYW5kIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7fVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Ryb3Bkb3duTWVudS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZHJvcGRvd25NZW51LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ltYWdlU2xpZGVyLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbWFnZVNsaWRlci5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZXllclJlc2V0LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZXllclJlc2V0LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vdXRpbGl0aWVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9wcm9wcyA9IHByb3BzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldHRlcnMvU2V0dGVyc1xyXG5cclxuICAgIGdldCBlbGVtZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9wcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvcHM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHByb3BzKG5ld1Byb3BzKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvcHMgPSBuZXdQcm9wcztcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuXHJcbiAgICBlbXB0eUVsZW1lbnQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLl9lbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLl9lbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplUmVuZGVyKGJhc2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudCA9IGJhc2VFbGVtZW50O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1wdHlFbGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVSZW5kZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnaDEnLCB7fSwgJ0Jhc2UgQ29tcG9uZW50IScpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vdXRpbGl0aWVzJztcclxuaW1wb3J0ICcuL2Ryb3Bkb3duTWVudS5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duTWVudSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5fZHJvcGRvd25FbGVtZW50cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIF9jbG9zZUFsbERyb3Bkb3ducyguLi5kcm9wZG93bkNvbnRlbnRFbGVtZW50c1RvSWdub3JlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9kcm9wZG93bkVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duQ29udGVudEVsZW1lbnQgPSB0aGlzLl9kcm9wZG93bkVsZW1lbnRzW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFkcm9wZG93bkNvbnRlbnRFbGVtZW50c1RvSWdub3JlLmluY2x1ZGVzKGRyb3Bkb3duQ29udGVudEVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2hhbmRsZURyb3Bkb3duVG9wQ2xpY2soZSwgZHJvcGRvd25Db250YWluZXIsIGRyb3Bkb3duQ29udGVudEVsZW1lbnQsIGRyb3Bkb3duTGlzdEVsZW1lbnQpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2Nsb3NlQWxsRHJvcGRvd25zKGRyb3Bkb3duQ29udGVudEVsZW1lbnQpO1xyXG5cclxuICAgICAgICBpZiAoZHJvcGRvd25Db250ZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgPiAwKSB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2Ryb3Bkb3duTGlzdEVsZW1lbnQub2Zmc2V0SGVpZ2h0fXB4YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVJlbmRlcihjcmVhdGVFbGVtZW50KCduYXYnLCB7IGNsYXNzOiAnZHJvcGRvd24tbWVudScgfSkpO1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgIHByb3BzID0ge1xyXG4gICAgICAgICAgICBjb250ZW50OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ05hdiAxJyxcclxuICAgICAgICAgICAgICAgICAgICBocmVmOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudDogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnU3ViIE5hdiAxLTEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1N1YiBOYXYgMS0yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdTdWIgTmF2IDEtMycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgICAgICAqL1xyXG5cclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuX3Byb3BzLCAnY29udGVudCcpICYmIEFycmF5LmlzQXJyYXkodGhpcy5fcHJvcHMuY29udGVudCkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wcm9wcy5jb250ZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtT2JqID0gdGhpcy5fcHJvcHMuY29udGVudFtpXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpdGVtT2JqLCAnbmFtZScpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkcm9wZG93bkNvbnRhaW5lciA9IHRoaXMuX2VsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3M6ICdkcm9wZG93bi1jb250YWluZXInIH0pKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUb3AgTGV2ZWxcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duVG9wRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzOiAnZHJvcGRvd24tdG9wJyB9LCBpdGVtT2JqLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250YWluZXIuYXBwZW5kQ2hpbGQoZHJvcGRvd25Ub3BFbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaXRlbU9iaiwgJ2Ryb3Bkb3duQ29udGVudCcpIHx8ICFBcnJheS5pc0FycmF5KGl0ZW1PYmouZHJvcGRvd25Db250ZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duRWxlbWVudCA9IGRyb3Bkb3duQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdkcm9wZG93bicgfSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25Db250ZW50RWxlbWVudCA9IGRyb3Bkb3duRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnZHJvcGRvd24tY29udGVudCcgfSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25MaXN0RWxlbWVudCA9IGRyb3Bkb3duQ29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZURyb3Bkb3duVG9wQ2xpY2soXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnRFbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkxpc3RFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGl0ZW1PYmouZHJvcGRvd25Db250ZW50Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25PYmogPSBpdGVtT2JqLmRyb3Bkb3duQ29udGVudFtqXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZHJvcGRvd25PYmosICduYW1lJykpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkxpc3RFbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnYScsIHsgaHJlZjogZHJvcGRvd25PYmouaHJlZiB8fCAnJyB9LCBkcm9wZG93bk9iai5uYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kcm9wZG93bkVsZW1lbnRzLnB1c2goZHJvcGRvd25Db250ZW50RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL3V0aWxpdGllcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvcHlyaWdodFllYXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY29weXJpZ2h0WWVhciA9IGNvcHlyaWdodFllYXI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAgICAgICBjb25zdCBjdXJyWWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvcHlyaWdodFllYXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jb3B5cmlnaHRZZWFyID0gY3VyclllYXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9lbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgJ3AnLFxyXG4gICAgICAgICAgICAgICAge30sXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICdzbWFsbCcsXHJcbiAgICAgICAgICAgICAgICAgICAge30sXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NvdXJjZSBDb2RlIMKpICcsXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgndGltZScsIHsgaWQ6ICdjb3B5cmlnaHQteWVhcicgfSwgY3VyclllYXIgPiB0aGlzLmNvcHlyaWdodFllYXIgPyBgJHt0aGlzLmNvcHlyaWdodFllYXJ9LSR7Y3VyclllYXJ9YCA6IHRoaXMuY29weXJpZ2h0WWVhciksXHJcbiAgICAgICAgICAgICAgICAgICAgJyBUb2RkIEJyZW50bGluZ2VyLCBTYW50YSBDcnV6LCBDQSwgVVNBLiBBbGwgUmlnaHRzIFJlc2VydmVkLidcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL3V0aWxpdGllcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnaDEnLCB7fSwgJ0R5bmFtaWMgVXNlciBJbnRlcmZhY2UgSW50ZXJhY3Rpb25zJylcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2VDb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2UgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVSZW5kZXIoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJykpO1xyXG5cclxuICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnByb3BzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZUNvbXBvbmVudCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuL2ltYWdlJztcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vdXRpbGl0aWVzJztcclxuaW1wb3J0ICcuL2ltYWdlU2xpZGVyLnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VTbGlkZXIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzID0gdGhpcy5wcm9wcy5pbWFnZXMubWFwKChpbWFnZVByb3BzKSA9PiBuZXcgSW1hZ2UoaW1hZ2VQcm9wcykpO1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZWxlY3RlZEluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzZWxlY3RlZEluZGV4KG5ld0luZGV4KSB7XHJcbiAgICAgICAgaWYgKG5ld0luZGV4IDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gdGhpcy5pbWFnZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKG5ld0luZGV4ID49IHRoaXMuaW1hZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gbmV3SW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUdhbGxlcnlJdGVtU2VsZWN0KG5ld1NlbGVjdGVkSW5kZXgpIHtcclxuICAgICAgICBpZiAobmV3U2VsZWN0ZWRJbmRleCA9PT0gdGhpcy5zZWxlY3RlZEluZGV4KSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIEdldCBkaXJlY3Rpb24gb2Ygc2xpZGVcclxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSAobmV3U2VsZWN0ZWRJbmRleCA8IHRoaXMuc2VsZWN0ZWRJbmRleCkgPyAncmlnaHQnIDogJ2xlZnQnO1xyXG5cclxuICAgICAgICAvLyBBbHRlciBjdXJyZW50IHNlbGVjdGVkIGdhbGxlcnkgaXRlbVxyXG4gICAgICAgIGNvbnN0IGN1cnJTZWxlY3RlZEdhbGxlcnlJdGVtID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5pbWctc2xpZGVyLWl0ZW1bZGF0YS1pbmRleD1cIiR7dGhpcy5zZWxlY3RlZEluZGV4fVwiXWApO1xyXG4gICAgICAgIGN1cnJTZWxlY3RlZEdhbGxlcnlJdGVtLnN0eWxlLmFuaW1hdGlvbk5hbWUgPSBgc2xpZGUtJHtkaXJlY3Rpb259LWZyb20taW5gO1xyXG4gICAgICAgIGN1cnJTZWxlY3RlZEdhbGxlcnlJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLWdhbGxlcnktaXRlbScpO1xyXG5cclxuICAgICAgICAvLyBBbHRlciBjdXJyZW50IHNlbGVjdGVkIGdhbGxlcnkgY291bnRlciBpdGVtXHJcbiAgICAgICAgY29uc3QgY3VyclNlbGVjdGVkR2FsbGVyeUNvdW50ZXJJdGVtID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5nYWxsZXJ5LWNvdW50ZXItaXRlbVtkYXRhLWluZGV4PVwiJHt0aGlzLnNlbGVjdGVkSW5kZXh9XCJdYCk7XHJcbiAgICAgICAgY3VyclNlbGVjdGVkR2FsbGVyeUNvdW50ZXJJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLWdhbGxlcnktY291bnRlci1pdGVtJyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IG5ld1NlbGVjdGVkSW5kZXg7XHJcblxyXG4gICAgICAgIC8vIEFsdGVyIG5ldyBzZWxlY3RlZCBnYWxsZXJ5IGl0ZW1cclxuICAgICAgICBjb25zdCBuZXdTZWxlY3RlZEdhbGxlcnlJdGVtID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5pbWctc2xpZGVyLWl0ZW1bZGF0YS1pbmRleD1cIiR7dGhpcy5zZWxlY3RlZEluZGV4fVwiXWApO1xyXG4gICAgICAgIG5ld1NlbGVjdGVkR2FsbGVyeUl0ZW0uc3R5bGUuYW5pbWF0aW9uTmFtZSA9IGBzbGlkZS0ke2RpcmVjdGlvbn0tZnJvbS1vdXRgO1xyXG4gICAgICAgIG5ld1NlbGVjdGVkR2FsbGVyeUl0ZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtZ2FsbGVyeS1pdGVtJyk7XHJcblxyXG4gICAgICAgIC8vIEFsdGVyIG5ldyBzZWxlY3RlZCBnYWxsZXJ5IGNvdW50ZXIgaXRlbVxyXG4gICAgICAgIGNvbnN0IG5ld1NlbGVjdGVkR2FsbGVyeUNvdW50ZXJJdGVtID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5nYWxsZXJ5LWNvdW50ZXItaXRlbVtkYXRhLWluZGV4PVwiJHt0aGlzLnNlbGVjdGVkSW5kZXh9XCJdYCk7XHJcbiAgICAgICAgbmV3U2VsZWN0ZWRHYWxsZXJ5Q291bnRlckl0ZW0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtZ2FsbGVyeS1jb3VudGVyLWl0ZW0nKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQcmV2Q2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVHYWxsZXJ5SXRlbVNlbGVjdCh0aGlzLnNlbGVjdGVkSW5kZXggLSAxKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVOZXh0Q2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVHYWxsZXJ5SXRlbVNlbGVjdCh0aGlzLnNlbGVjdGVkSW5kZXggKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplUmVuZGVyKGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdpbWctc2xpZGVyJyB9KSk7XHJcblxyXG4gICAgICAgIC8vIFNsaWRlciBNYWluXHJcbiAgICAgICAgY29uc3Qgc2xpZGVyTWFpbiA9IHRoaXMuX2VsZW1lbnQuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdpbWctc2xpZGVyLW1haW4nIH0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gU2xpZGVyIE1haW4gLSBHYWxsZXJ5IE5leHQvUHJldiBCdXR0b25zXHJcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJldkJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdpbWctc2xpZGVyLXByZXYnIH0sICdcXHUwMDNjJyk7XHJcbiAgICAgICAgICAgIHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZVByZXZDbGljay5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXh0QnRuID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2ltZy1zbGlkZXItbmV4dCcgfSwgJ1xcdTAwM2UnKTtcclxuICAgICAgICAgICAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlTmV4dENsaWNrLmJpbmQodGhpcyksIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIHNsaWRlck1haW4uYXBwZW5kKHByZXZCdG4sIG5leHRCdG4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2xpZGVyIE1haW4gLSBJbWFnZSBHYWxsZXJ5IENvbnRhaW5lclxyXG4gICAgICAgIGNvbnN0IGltZ0dhbGxlcnlDb250YWluZXIgPSBzbGlkZXJNYWluLmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnaW1nLXNsaWRlci1jb250ZW50JyB9KVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIFNsaWRlciBGb290ZXJcclxuICAgICAgICBjb25zdCBzbGlkZXJGb290ZXIgPSB0aGlzLl9lbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnaW1nLXNsaWRlci1mb290ZXInIH0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gU2xpZGVyIEZvb3RlciAtIEdhbGxlcnkgQ291bnRlclxyXG4gICAgICAgIGNvbnN0IGdhbGxlcnlDb3VudGVyID0gc2xpZGVyRm9vdGVyLmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnaW1nLXNsaWRlci1jb3VudGVyJyB9KVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIEdhbGxlcnkgSXRlbXNcclxuICAgICAgICB0aGlzLmltYWdlcy5mb3JFYWNoKChpbWFnZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW1nU2xpZGVySXRlbSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdpbWctc2xpZGVyLWl0ZW0nLCAnZGF0YS1pbmRleCc6IGluZGV4IH0sIGltYWdlLnJlbmRlcigpKTtcclxuICAgICAgICAgICAgY29uc3QgZ2FsbGVyeUNvdW50ZXJJdGVtID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2dhbGxlcnktY291bnRlci1pdGVtJywgJ2RhdGEtaW5kZXgnOiBpbmRleCB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gdGhpcy5zZWxlY3RlZEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBpbWdTbGlkZXJJdGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLWdhbGxlcnktaXRlbScpO1xyXG4gICAgICAgICAgICAgICAgZ2FsbGVyeUNvdW50ZXJJdGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLWdhbGxlcnktY291bnRlci1pdGVtJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBpdGVtIHRvIGltYWdlIGdhbGxlcnkgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGltZ0dhbGxlcnlDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nU2xpZGVySXRlbSk7XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgaXRlbSB0byBnYWxsZXJ5IGNvdW50ZXJcclxuICAgICAgICAgICAgZ2FsbGVyeUNvdW50ZXJJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVHYWxsZXJ5SXRlbVNlbGVjdChpbmRleCk7XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgZ2FsbGVyeUNvdW50ZXIuYXBwZW5kQ2hpbGQoZ2FsbGVyeUNvdW50ZXJJdGVtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlQ29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vYmlsZU1lbnUgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICdtb2JpbGUtbWVudScgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9lbGVtZW50LnRleHRDb250ZW50ID0gJ01vYmlsZSBNZW51IENvbXBvbmVudCEnO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2VDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi91dGlsaXRpZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZU5hdkNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnbmF2JywgeyBpZDogJ3NpZGVuYXYnIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2lkZW5hdkNvbnRlbnQgPSB0aGlzLl9lbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGlkOiAnc2lkZW5hdi1jb250ZW50JyB9KVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIERyb3Bkb3duIE1lbnVcclxuICAgICAgICBzaWRlbmF2Q29udGVudC5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnYScsIHsgaHJlZjogJycgfSwgJ0Ryb3Bkb3duIE1lbnUnKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIE1vYmlsZSBNZW51XHJcbiAgICAgICAgc2lkZW5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2EnLCB7IGhyZWY6ICcnIH0sICdNb2JpbGUgTWVudScpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gSW1hZ2UgU2xpZGVyXHJcbiAgICAgICAgc2lkZW5hdkNvbnRlbnQuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2EnLCB7IGhyZWY6ICcnIH0sICdJbWFnZSBTbGlkZXInKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAtIEVsZW1lbnQgdHlwZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBFbGVtZW50IGF0dHJpYnV0ZSBuYW1lcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyB2YWx1ZVxyXG4gKiBAcGFyYW0gIHsuLi5Ob2RlfSBjaGlsZHJlbiAtIFZhcmlhYmxlIG51bWJlciBvZiBjaGlsZCBub2Rlc1xyXG4gKi9cclxuIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIHByb3BzID0ge30sIC4uLmNoaWxkcmVuKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuXHJcbiAgICAvLyBQcm9wc1xyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKSB7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hpbGRyZW4gTm9kZXNcclxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBlbGVtZW50LmFwcGVuZChjaGlsZCkpO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IERyb3Bkb3duTWVudSBmcm9tICcuL2Ryb3Bkb3duTWVudSc7XHJcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gJy4vbW9iaWxlTWVudSc7XHJcbmltcG9ydCBJbWFnZVNsaWRlciBmcm9tICcuL2ltYWdlU2xpZGVyJztcclxuaW1wb3J0IEhlYWRlckNvbXBvbmVudCBmcm9tICcuL2hlYWRlckNvbXBvbmVudCc7XHJcbmltcG9ydCBTaWRlTmF2Q29tcG9uZW50IGZyb20gJy4vc2lkZU5hdkNvbXBvbmVudCc7XHJcbmltcG9ydCBGb290ZXJDb21wb25lbnQgZnJvbSAnLi9mb290ZXJDb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vdXRpbGl0aWVzJztcclxuXHJcbmltcG9ydCAnLi9tZXllclJlc2V0LnNjc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgaWQ6ICdjb250ZW50JyB9KTtcclxuXHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICAgIChuZXcgSGVhZGVyQ29tcG9uZW50KCkpLnJlbmRlcigpXHJcbiAgICApO1xyXG5cclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgKG5ldyBTaWRlTmF2Q29tcG9uZW50KCkpLnJlbmRlcigpXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IG1haW5FbGVtZW50ID0gZWxlbWVudC5hcHBlbmRDaGlsZChcclxuICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcclxuICAgICk7XHJcblxyXG4gICAgLy8gRHJvcGRvd24gTWVudVxyXG4gICAgbGV0IHByb3BzID0geyBjb250ZW50OiBbXSB9O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICBjb25zdCBudW1Ecm9wZG93bkl0ZW1zID0gMSArIChNYXRoLnJhbmRvbSgpICogNCk7XHJcbiAgICAgICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1Ecm9wZG93bkl0ZW1zOyBqKyspIHtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogYFN1YiBOYXYgJHtpICsgMX0tJHtqICsgMX1gLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJycsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvcHMuY29udGVudC5wdXNoKHtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LFxyXG4gICAgICAgICAgICBuYW1lOiBgTmF2ICR7aSArIDF9YCxcclxuICAgICAgICAgICAgaHJlZjogbnVsbCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qXHJcbiAgICBwcm9wcyA9IHtcclxuICAgICAgICBjb250ZW50OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdOYXYgMScsXHJcbiAgICAgICAgICAgICAgICBocmVmOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50OiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnU3ViIE5hdiAxLTEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnU3ViIE5hdiAxLTInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnU3ViIE5hdiAxLTMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH07XHJcbiAgICAqL1xyXG4gICAgbWFpbkVsZW1lbnQuYXBwZW5kKFxyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2gyJywge30sICdEcm9wZG93biBNZW51OicpLFxyXG4gICAgICAgIChuZXcgRHJvcGRvd25NZW51KHByb3BzKSkucmVuZGVyKClcclxuICAgICk7XHJcblxyXG4gICAgLy8gTW9iaWxlIE1lbnVcclxuICAgIG1haW5FbGVtZW50LmFwcGVuZChcclxuICAgICAgICBjcmVhdGVFbGVtZW50KCdoMicsIHt9LCAnTW9iaWxlIE1lbnU6JyksXHJcbiAgICAgICAgKG5ldyBNb2JpbGVNZW51KCkpLnJlbmRlcigpXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGltYWdlcyA9IFtcclxuICAgICAgICBbJ0dvbGRlbkV5ZSAwMDcnLCAnY28yNXc4J10sXHJcbiAgICAgICAgWydTcGxpbnRlciBDZWxsOiBDaGFvcyBUaGVvcnknLCAnY28yeXN4J10sXHJcbiAgICAgICAgWydKYWsgYW5kIERheHRlcjogVGhlIFByZWN1cnNvciBMZWdhY3knLCAnY28xdzdxJ10sXHJcbiAgICAgICAgWydUaGUgTGFzdCBvZiBVcycsICdjbzFyN2YnXSxcclxuICAgICAgICBbJ1VuY2hhcnRlZCAyOiBBbW9uZyBUaGlldmVzJywgJ2NvMXRuYiddLFxyXG4gICAgICAgIFsnTWV0YWwgR2VhciBTb2xpZCAyOiBTb25zIG9mIExpYmVydHknLCAnY28yOXBsJ10sXHJcbiAgICAgICAgWydSZWQgRGVhZCBSZWRlbXB0aW9uIDInLCAnY28xcTFmJ10sXHJcbiAgICBdLm1hcCgoaW1hZ2VTb3VyY2UpID0+ICh7XHJcbiAgICAgICAgc3JjOiBgaHR0cHM6Ly9pbWFnZXMuaWdkYi5jb20vaWdkYi9pbWFnZS91cGxvYWQvdF9jb3Zlcl9iaWcvJHtpbWFnZVNvdXJjZVsxXX0ucG5nYCxcclxuICAgICAgICB3aWR0aDogMjY0LFxyXG4gICAgICAgIGhlaWdodDogMzUyLFxyXG4gICAgICAgIGFsdDogYCR7aW1hZ2VTb3VyY2VbMF19IHZpZGVvIGdhbWUgY292ZXJgLFxyXG4gICAgfSkpO1xyXG5cclxuICAgIHByb3BzID0geyBpbWFnZXMgfTtcclxuXHJcbiAgICAvLyBJbWFnZSBTbGlkZXJcclxuICAgIG1haW5FbGVtZW50LmFwcGVuZChcclxuICAgICAgICBjcmVhdGVFbGVtZW50KCdoMicsIHt9LCAnSW1hZ2UgU2xpZGVyOicpLFxyXG4gICAgICAgIChuZXcgSW1hZ2VTbGlkZXIocHJvcHMpKS5yZW5kZXIoKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBGb290ZXJcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgKG5ldyBGb290ZXJDb21wb25lbnQoMjAyMikpLnJlbmRlcigpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9