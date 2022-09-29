"use strict";
(() => {
var exports = {};
exports.id = 183;
exports.ids = [183,237];
exports.modules = {

/***/ 111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Timestamp),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dc_delivery_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2324);
/* harmony import */ var dc_delivery_sdk_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dc_delivery_sdk_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_config_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1638);

const Cookies = __webpack_require__(640);


async function getServerSideProps(context) {
    const { res , req , query  } = context;
    let { vse , hub , timestamp , isoTimestamp , redirect ="/"  } = query || {};
    if (isoTimestamp) {
        timestamp = `${new Date(isoTimestamp).getTime()}`;
    }
    let { cms  } = await (0,_lib_config_AppContext__WEBPACK_IMPORTED_MODULE_2__/* .createAppContext */ .Wv)();
    if (timestamp && !vse && !isNaN(Number(timestamp))) {
        // generate vse
        const factory = new dc_delivery_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StagingEnvironmentFactory(cms.stagingApi);
        if (timestamp && cms.stagingApi) {
            const stagingEnvironmentAtTimestamp = await factory.generateDomain({
                timestamp: Number(timestamp)
            });
            vse = stagingEnvironmentAtTimestamp;
        }
    }
    if (res) {
        const cookies = new Cookies(req, res);
        cookies.set("amplience-host", vse);
        if (hub) {
            cookies.set("hub", hub);
        } else {
            cookies.set("hub");
        }
        if (timestamp) {
            cookies.set("timestamp", timestamp);
        } else {
            cookies.set("timestamp");
        }
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
function Timestamp({}) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {});
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

/***/ 2324:
/***/ ((module) => {

module.exports = require("dc-delivery-sdk-js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [638], () => (__webpack_exec__(111)));
module.exports = __webpack_exports__;

})();