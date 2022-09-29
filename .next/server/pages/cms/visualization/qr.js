"use strict";
(() => {
var exports = {};
exports.id = 113;
exports.ids = [113,237];
exports.modules = {

/***/ 9762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QrCode),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_page_fetchStandardPageData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6885);
/* harmony import */ var _lib_config_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1638);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);




async function getServerSideProps(context) {
    const { content: contentId  } = context.query;
    const data = await (0,_lib_page_fetchStandardPageData__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        content: {}
    }, context);
    return {
        props: {
            ...data,
            contentId
        }
    };
}
function QrCode({ context , contentId  }) {
    const { url , cms  } = (0,_lib_config_AppContext__WEBPACK_IMPORTED_MODULE_2__/* .useAppContext */ .bp)();
    const { locale  } = context.cmsContext;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
        src: `https://qrickit.com/api/qr.php?d=${url}/visualization?vse=${cms.stagingApi}%26content=${contentId}%26locale=${locale}&addtext=SCAN%20TO%20VIEW%20ON%20MOBILE&txtcolor=e80d8c&fgdcolor=29333f&bgdcolor=FFFFFF&qrsize=1000&t=p&e=m`,
        width: "600px",
        height: "600px",
        alt: "QR code for mobile"
    });
};


/***/ }),

/***/ 3175:
/***/ ((module) => {

module.exports = require("@amplience/dc-demostore-integration");

/***/ }),

/***/ 640:
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ 7881:
/***/ ((module) => {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9819:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4269:
/***/ ((module) => {

module.exports = require("url");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [473,675,638,153,322,298], () => (__webpack_exec__(9762)));
module.exports = __webpack_exports__;

})();