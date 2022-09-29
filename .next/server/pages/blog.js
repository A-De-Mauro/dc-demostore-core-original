"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195,237];
exports.modules = {

/***/ 8010:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Womens),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5179);
/* harmony import */ var _lib_cms_CmsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9725);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_page_fetchStandardPageData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6885);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8506);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7022);
/* harmony import */ var _lib_config_AppContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1638);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_core__WEBPACK_IMPORTED_MODULE_1__, _components_ui__WEBPACK_IMPORTED_MODULE_5__]);
([_components_core__WEBPACK_IMPORTED_MODULE_1__, _components_ui__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









async function getServerSideProps(context) {
    const data = await (0,_lib_page_fetchStandardPageData__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        content: {}
    }, context);
    return {
        props: {
            ...data
        }
    };
}
function Womens({ content  }) {
    const { stagingApi , locale  } = (0,_lib_cms_CmsContext__WEBPACK_IMPORTED_MODULE_2__/* .useCmsContext */ .Eb)() || {};
    const navigationItem = {
        type: "page",
        href: "/blog",
        title: "Blog",
        children: [],
        parents: []
    };
    let { algolia , cms  } = (0,_lib_config_AppContext__WEBPACK_IMPORTED_MODULE_8__/* .useAppContext */ .bp)();
    let { instantsearch , algoliasearch  } = window;
    let hub = cms.hub;
    let indexName = stagingApi ? `${hub}.blog-staging` : `${hub}.blog-production`;
    let search = instantsearch({
        indexName,
        searchClient: algoliasearch(algolia.appId, algolia.apiKey),
        hitsPerPage: 5
    });
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        search.addWidget(instantsearch.widgets.configure({
            filters: (locale || "en-US").indexOf("en-") === 0 ? `locale:en-US` : `locale:${locale}`
        }));
        search.addWidget(instantsearch.widgets.searchBox({
            container: "#searchbox",
            placeholder: "Search"
        }));
        search.addWidget(instantsearch.widgets.refinementList({
            container: "#category-list",
            attribute: "snippet.category"
        }));
        search.addWidget(instantsearch.widgets.refinementList({
            container: "#author-list",
            attribute: "snippet.author"
        }));
        search.addWidget(instantsearch.widgets.hits({
            hitsPerPage: 5,
            container: "#hits",
            cssClasses: {
                list: "amp-dc-card-list-wrap",
                item: "amp-dc-card"
            },
            templates: {
                item: ({ snippet , _meta  })=>{
                    return `
                            <a class="amp-dc-card-wrap" href="/blog/${_meta.deliveryKey}">
                                <div class="amp-dc-card-img-wrap">
                                    <picture class="amp-dc-image">
                                        <source type="image/webp" srcset="https://${snippet.image.image.defaultHost}/i/${snippet.image.image.endpoint}/${snippet.image.image.name}.webp?w=1000&upscale=false&aspect=1:2&sm=aspect&poi={($root.layer0.metadata.pointOfInterest.w==0)?0.5:$root.layer0.metadata.pointOfInterest.x},{($root.layer0.metadata.pointOfInterest.w==0)?0.5:$root.layer0.metadata.pointOfInterest.y},{$root.layer0.metadata.pointOfInterest.w},{$root.layer0.metadata.pointOfInterest.h}&scaleFit=poi&sm=aspect&aspect=1:1&qlt=85">
                                        <source type="image/jp2" srcset="https://${snippet.image.image.defaultHost}/i/${snippet.image.image.endpoint}/${snippet.image.image.name}.jp2?w=1000&upscale=false&aspect=1:2&sm=aspect&poi={($root.layer0.metadata.pointOfInterest.w==0)?0.5:$root.layer0.metadata.pointOfInterest.x},{($root.layer0.metadata.pointOfInterest.w==0)?0.5:$root.layer0.metadata.pointOfInterest.y},{$root.layer0.metadata.pointOfInterest.w},{$root.layer0.metadata.pointOfInterest.h}&scaleFit=poi&sm=aspect&aspect=1:1&qlt=75">
                                        <source type="image/jpeg" srcset="https://${snippet.image.image.defaultHost}/i/${snippet.image.image.endpoint}/${snippet.image.image.name}.jpg?w=1000&upscale=false&aspect=1:2&sm=aspect&poi={($root.layer0.metadata.pointOfInterest.w==0)?0.5:$root.layer0.metadata.pointOfInterest.x},{($root.layer0.metadata.pointOfInterest.w==0)?0.5:$root.layer0.metadata.pointOfInterest.y},{$root.layer0.metadata.pointOfInterest.w},{$root.layer0.metadata.pointOfInterest.h}&scaleFit=poi&sm=aspect&aspect=1:1&qlt=85">
                                        <img loading="lazy" src="https://${snippet.image.image.defaultHost}/i/${snippet.image.image.endpoint}/${snippet.image.image.name}?w=1000&upscale=false&aspect=1:2&sm=aspect&poi={($root.layer0.metadata.pointOfInterest.w==0)?0.5:$root.layer0.metadata.pointOfInterest.x},{($root.layer0.metadata.pointOfInterest.w==0)?0.5:$root.layer0.metadata.pointOfInterest.y},{$root.layer0.metadata.pointOfInterest.w},{$root.layer0.metadata.pointOfInterest.h}&scaleFit=poi&sm=aspect&aspect=1:1&qlt=85" class="amp-dc-image-pic" alt="${snippet.title}">
                                    </picture>
                                </div>
                                <div class="amp-dc-card-text-wrap">
                                    <p class="amp-dc-card-category">${snippet?.category?.join(", ") || ""}</p>
                                    <div class="amp-dc-card-name">${snippet.title}</div>
                                    <div class="amp-dc-card-description"><span>${snippet.author}</span><span>${snippet.blogdate}</span></div>
                                </div>
                            </a>
                    `;
                }
            }
        }));
        search.addWidget(instantsearch.widgets.pagination({
            container: "#pagination"
        }));
        search.addWidget(instantsearch.widgets.hitsPerPage({
            container: "#hits-per-page",
            items: [
                {
                    label: "5 hits per page",
                    value: 5,
                    default: true
                },
                {
                    label: "10 hits per page",
                    value: 10
                }, 
            ]
        }));
        search.start();
    }, [
        search,
        locale,
        instantsearch
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_5__/* .PageContent */ .JH, {
            className: "blog-list__container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "blog-list",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "blog-list-facets",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                variant: "h6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_5__/* .Breadcrumb */ .aG, {
                                    navigationItem: navigationItem
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                variant: "h2",
                                component: "h2",
                                children: "Blog"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                id: "searchbox",
                                className: "ais-SearchBox"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_7__/* .ProductFacet */ .nn, {
                                title: "Categories",
                                className: "blog-list-facet blog-list-facet--categories",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    id: "category-list"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_7__/* .ProductFacet */ .nn, {
                                title: "Author",
                                className: "blog-list-facet",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    id: "author-list"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                id: "hits-per-page",
                                style: {
                                    display: "none"
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "blog-list-results",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "amp-dc-card-list amp-dc-prod-5-rows amp-dc-cards-hero amp-dc-cards-blog",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    id: "hits"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                id: "pagination"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
Womens.Layout = _components_core__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .Ar;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [473,675,952,664,638,153,322,506,298,22], () => (__webpack_exec__(8010)));
module.exports = __webpack_exports__;

})();