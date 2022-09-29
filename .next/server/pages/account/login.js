"use strict";
(() => {
var exports = {};
exports.id = 821;
exports.ids = [821];
exports.modules = {

/***/ 4029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Cookies = __webpack_require__(640);
async function getServerSideProps(context) {
    const { res , req , query  } = context;
    const { username , redirect ="/"  } = query || {};
    if (res) {
        const cookies = new Cookies(req, res);
        cookies.set("segment", username);
        res.setHeader("Cache-Control", "no-cache ");
        res.writeHead(301, {
            Location: redirect
        });
        res.end();
    }
    return {
        props: {}
    };
}
function Login({}) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {});
};


/***/ }),

/***/ 640:
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4029));
module.exports = __webpack_exports__;

})();