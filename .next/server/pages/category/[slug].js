"use strict";
(() => {
var exports = {};
exports.id = 24;
exports.ids = [24,237];
exports.modules = {

/***/ 9988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const CategoryStyles = (theme)=>({
        hero: {
            padding: "30px 0px"
        },
        breadcrumb: {
            marginTop: 20
        },
        topComponents: {
            marginBottom: 30
        },
        container: {
            display: "grid",
            gridColumnGap: 48,
            gridTemplateAreas: `"filter listingGrid"`,
            gridTemplateColumns: "1fr 3fr",
            [theme.breakpoints.down("md")]: {
                gridColumnGap: 0,
                gridTemplateColumns: "auto",
                gridTemplateAreas: `"listingGrid"`
            }
        },
        facets: {
            gridArea: "filter",
            [theme.breakpoints.down("md")]: {
                display: "none"
            }
        },
        results: {},
        header: {
            marginTop: 20,
            marginBottom: 40
        }
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryStyles);


/***/ }),

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

/***/ 9520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const searchFacets = [
    {
        type: "standard",
        field: "variants.attributes.color.label.en",
        title: "Color"
    },
    {
        type: "standard",
        field: "variants.attributes.designer.key",
        title: "Designer"
    },
    {
        type: "standard",
        field: "variants.attributes.size",
        title: "Size"
    },
    {
        type: "standard",
        field: "variants.attributes.style.key",
        title: "Style"
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchFacets);


/***/ }),

/***/ 3026:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5179);
/* harmony import */ var _lib_page_fetchStandardPageData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6885);
/* harmony import */ var _components_cms_modern__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8506);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7022);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_page_errors_create404Error__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7360);
/* harmony import */ var _components_core_Config_withConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9754);
/* harmony import */ var _lib_cms_CmsContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9725);
/* harmony import */ var _lib_page_fetchPageData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8674);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _pages_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2153);
/* harmony import */ var _lib_user_UserContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6149);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5611);
/* harmony import */ var _components_core_WithVisualization__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(335);
/* harmony import */ var _components_ui_category_styles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9988);
/* harmony import */ var _lib_util_default_search_facets__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9520);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(18);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_core__WEBPACK_IMPORTED_MODULE_1__, _components_cms_modern__WEBPACK_IMPORTED_MODULE_3__, _components_ui__WEBPACK_IMPORTED_MODULE_5__, nanoid__WEBPACK_IMPORTED_MODULE_15__]);
([_components_core__WEBPACK_IMPORTED_MODULE_1__, _components_cms_modern__WEBPACK_IMPORTED_MODULE_3__, _components_ui__WEBPACK_IMPORTED_MODULE_5__, nanoid__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















async function getServerSideProps(context) {
    let { slug  } = context.params || {};
    const { vse  } = context.query || {};
    const data = await (0,_lib_page_fetchStandardPageData__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        content: {
            page: {
                key: `category/${slug}`
            }
        }
    }, context);
    if (!data.page || !slug || slug === "favicon.ico") {
        return (0,_lib_page_errors_create404Error__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)(data, context);
    }
    slug = Array.isArray(slug) ? slug.join("/") : slug;
    const category = await _pages_api__WEBPACK_IMPORTED_MODULE_13__.commerceApi.getCategory({
        slug,
        ...await (0,_lib_cms_CmsContext__WEBPACK_IMPORTED_MODULE_9__/* .createCmsContext */ .dc)(context.req),
        ...await (0,_lib_user_UserContext__WEBPACK_IMPORTED_MODULE_14__/* .createUserContext */ .v8)(context)
    });
    const slots = await (0,_lib_page_fetchPageData__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)({
        content: {
            slots: (data.content.page?.slots || []).map(_lib_util__WEBPACK_IMPORTED_MODULE_18__/* .mapToID */ .fv)
        }
    }, context);
    return {
        props: {
            ...data,
            vse: vse || "",
            category: JSON.parse(JSON.stringify(category)),
            slots: slots.content.slots
        }
    };
}
function CategoryPage(props) {
    const { vse , classes , content , category , slots  } = props;
    const [config] = (0,_components_core_WithVisualization__WEBPACK_IMPORTED_MODULE_16__/* .useContent */ .r0)(content.configComponents, vse);
    let facets = config?.categoryPage?.facets ?? _lib_util_default_search_facets__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z;
    let components = props.content?.page?.components || [];
    let pageSlots = slots;
    let products = category.products;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_5__/* .PageContent */ .JH, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_5__/* .Breadcrumb */ .aG, {
                            className: classes.breadcrumb
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classes.header,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                variant: "h2",
                                children: category && category.name
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classes.topComponents,
                    children: [
                        lodash__WEBPACK_IMPORTED_MODULE_11___default().compact(components).map((content)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cms_modern__WEBPACK_IMPORTED_MODULE_3__/* .ContentBlock */ .b0, {
                                content: content
                            }, (0,nanoid__WEBPACK_IMPORTED_MODULE_15__.nanoid)())),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "af-main-content",
                            children: lodash__WEBPACK_IMPORTED_MODULE_11___default().compact(pageSlots).map((slot)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cms_modern__WEBPACK_IMPORTED_MODULE_3__/* .ContentBlock */ .b0, {
                                    content: slot,
                                    type: "SLOT"
                                }, (0,nanoid__WEBPACK_IMPORTED_MODULE_15__.nanoid)()))
                        })
                    ]
                }),
                !props.content?.page?.hideProductList && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classes.facets,
                            children: facets.map((facet)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_6__/* .ProductFacet */ .nn, {
                                    title: facet.title
                                }, (0,nanoid__WEBPACK_IMPORTED_MODULE_15__.nanoid)()))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classes.results,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_6__/* .ProductGrid */ .eQ, {
                                children: products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_6__/* .ProductCard */ .Il, {
                                        data: product
                                    }, (0,nanoid__WEBPACK_IMPORTED_MODULE_15__.nanoid)()))
                            })
                        })
                    ]
                })
            ]
        })
    });
}
const component = (0,_components_core_Config_withConfig__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)("categoryPage")((0,_mui_styles__WEBPACK_IMPORTED_MODULE_12__.withStyles)(_components_ui_category_styles__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(CategoryPage));
component.Layout = _components_core__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .Ar;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component);

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
var __webpack_exports__ = __webpack_require__.X(0, [473,675,952,664,638,153,322,506,298,18,22], () => (__webpack_exec__(3026)));
module.exports = __webpack_exports__;

})();