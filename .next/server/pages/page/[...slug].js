"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155,237];
exports.modules = {

/***/ 7360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ create404Error)
/* harmony export */ });
function create404Error(pageData, context) {
    if (context && context.res) {
        context.res.statusCode = 404;
    }
    return {
        props: {
            ...pageData,
            statusCode: 404
        }
    };
};


/***/ }),

/***/ 5736:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LandingPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5179);
/* harmony import */ var _lib_page_fetchStandardPageData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6885);
/* harmony import */ var _lib_page_fetchPageData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8674);
/* harmony import */ var _components_cms_modern__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2297);
/* harmony import */ var _lib_page_errors_create404Error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7360);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5611);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_core__WEBPACK_IMPORTED_MODULE_1__, _components_cms_modern__WEBPACK_IMPORTED_MODULE_4__, nanoid__WEBPACK_IMPORTED_MODULE_6__]);
([_components_core__WEBPACK_IMPORTED_MODULE_1__, _components_cms_modern__WEBPACK_IMPORTED_MODULE_4__, nanoid__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








async function getServerSideProps(context) {
    const { slug  } = context.params || {};
    const deliveryKey = Array.isArray(slug) ? slug.join("/") : slug;
    const data = await (0,_lib_page_fetchStandardPageData__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        content: {
            page: {
                key: `page/${deliveryKey}`
            }
        }
    }, context);
    if (!data.page) {
        return (0,_lib_page_errors_create404Error__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(data, context);
    }
    const slots = await (0,_lib_page_fetchPageData__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
        content: {
            slots: (data.content.page?.slots || []).map(_lib_util__WEBPACK_IMPORTED_MODULE_5__/* .mapToID */ .fv)
        }
    }, context);
    return {
        props: {
            ...data,
            slots: slots?.content?.slots
        }
    };
}
function LandingPage({ content , slots  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "af-main-content",
        children: [
            slots.filter(_lib_util__WEBPACK_IMPORTED_MODULE_5__/* .notNull */ .Nf).map((slot)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cms_modern__WEBPACK_IMPORTED_MODULE_4__/* .ContentBlock */ .b0, {
                    content: slot,
                    type: "SLOT"
                }, (0,nanoid__WEBPACK_IMPORTED_MODULE_6__.nanoid)())),
            content?.page?.components?.filter(_lib_util__WEBPACK_IMPORTED_MODULE_5__/* .notNull */ .Nf).map((content)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cms_modern__WEBPACK_IMPORTED_MODULE_4__/* .ContentBlock */ .b0, {
                    content: content
                }, (0,nanoid__WEBPACK_IMPORTED_MODULE_6__.nanoid)()))
        ]
    });
};
LandingPage.Layout = _components_core__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .Ar;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3175:
/***/ ((module) => {

module.exports = require("@amplience/dc-demostore-integration");

/***/ }),

/***/ 8148:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ExpandMore");

/***/ }),

/***/ 9891:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Extension");

/***/ }),

/***/ 773:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Visibility");

/***/ }),

/***/ 7749:
/***/ ((module) => {

module.exports = require("@mui/icons-material/VisibilityOff");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 9409:
/***/ ((module) => {

module.exports = require("@mui/material/Accordion");

/***/ }),

/***/ 8279:
/***/ ((module) => {

module.exports = require("@mui/material/AccordionDetails");

/***/ }),

/***/ 4604:
/***/ ((module) => {

module.exports = require("@mui/material/AccordionSummary");

/***/ }),

/***/ 4960:
/***/ ((module) => {

module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ 9181:
/***/ ((module) => {

module.exports = require("@mui/material/Table");

/***/ }),

/***/ 8823:
/***/ ((module) => {

module.exports = require("@mui/material/TableBody");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/TableCell");

/***/ }),

/***/ 5953:
/***/ ((module) => {

module.exports = require("@mui/material/TableHead");

/***/ }),

/***/ 4848:
/***/ ((module) => {

module.exports = require("@mui/material/TableRow");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9868:
/***/ ((module) => {

module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 9484:
/***/ ((module) => {

module.exports = require("@mui/styles");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 640:
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ 1934:
/***/ ((module) => {

module.exports = require("currency-symbol-map");

/***/ }),

/***/ 2324:
/***/ ((module) => {

module.exports = require("dc-delivery-sdk-js");

/***/ }),

/***/ 2838:
/***/ ((module) => {

module.exports = require("dc-visualization-sdk");

/***/ }),

/***/ 7881:
/***/ ((module) => {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 1904:
/***/ ((module) => {

module.exports = require("markdown-to-jsx");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6135:
/***/ ((module) => {

module.exports = require("object-sizeof");

/***/ }),

/***/ 5001:
/***/ ((module) => {

module.exports = require("pure-react-carousel");

/***/ }),

/***/ 9819:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9012:
/***/ ((module) => {

module.exports = require("react-loading-skeleton");

/***/ }),

/***/ 661:
/***/ ((module) => {

module.exports = require("react-moment");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4269:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 5611:
/***/ ((module) => {

module.exports = import("nanoid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [473,675,952,664,638,153,322,506,298,18], () => (__webpack_exec__(5736)));
module.exports = __webpack_exports__;

})();