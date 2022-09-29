"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829,237];
exports.modules = {

/***/ 7921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ StoreCard_StoreCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "markdown-to-jsx"
var external_markdown_to_jsx_ = __webpack_require__(1904);
var external_markdown_to_jsx_default = /*#__PURE__*/__webpack_require__.n(external_markdown_to_jsx_);
// EXTERNAL MODULE: ./components/cms-modern/Image/index.ts + 1 modules
var Image = __webpack_require__(3867);
// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
;// CONCATENATED MODULE: ./components/cms-modern/Store/StoreCard/StoreCard.tsx








const styles = (theme)=>({
        root: {
            display: "flex",
            padding: "1rem"
        },
        details: {
            marginTop: 20,
            marginBottom: 60
        },
        name: {
            wordWrap: "break-word",
            whiteSpace: "normal",
            marginBottom: 10
        },
        button: {
            marginTop: 30
        }
    });
const options = {
    overrides: {
        p: {
            component: material_.Typography,
            props: {
                variant: "body1",
                style: {
                    lineHeight: "1.4em"
                }
            }
        }
    }
};
const StoreCard = (props)=>{
    const { classes , className , content , ...other } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 12,
        sm: 6,
        md: 4,
        lg: 3,
        className: external_clsx_default()(classes.root, className),
        ...other,
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Paper, {
            style: {
                backgroundColor: "#fcfcfc",
                width: "100%",
                padding: 15
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/" + content._meta.deliveryKey,
                passHref: true,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    className: classes.details,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            variant: "h3",
                            component: "h3",
                            className: classes.name,
                            children: content.locationName
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            component: "div",
                            variant: "body1",
                            style: {
                                height: 70
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_markdown_to_jsx_default()), {
                                options: options,
                                children: content.locationAddress
                            })
                        }),
                        content.image && /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                            image: content.image,
                            alt: content.locationName
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            container: true,
                            spacing: 1,
                            alignContent: "center",
                            alignItems: "center",
                            justifyContent: "center",
                            style: {
                                width: "100%"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                    color: "primary",
                                    variant: "contained",
                                    className: classes.button,
                                    children: "more info"
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const StoreCard_StoreCard = ((0,styles_.withStyles)(styles)(StoreCard));

;// CONCATENATED MODULE: ./components/cms-modern/Store/StoreCard/index.ts



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

/***/ 2077:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StoreMainPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_page_fetchStandardPageData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6885);
/* harmony import */ var _lib_page_errors_create404Error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7360);
/* harmony import */ var _lib_cms_fetchContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5723);
/* harmony import */ var _lib_cms_CmsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9725);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5179);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_cms_modern_Store_StoreCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7921);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_core__WEBPACK_IMPORTED_MODULE_5__]);
_components_core__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









async function getServerSideProps(context) {
    const cmsContext = await (0,_lib_cms_CmsContext__WEBPACK_IMPORTED_MODULE_3__/* .createCmsContext */ .dc)(context.req);
    const filterRequest = {
        filterBy: [
            {
                path: "/_meta/schema",
                value: "https://demostore.amplience.com/content/store"
            },
            {
                path: "/filterActive",
                value: true
            }
        ],
        sortBy: {
            key: "default",
            order: "asc"
        }
    };
    const data = await (0,_lib_page_fetchStandardPageData__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        content: {}
    }, context);
    const storesData = await (0,_lib_cms_fetchContent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)([
        filterRequest
    ], cmsContext);
    if (!storesData[0]) {
        return (0,_lib_page_errors_create404Error__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(storesData, context);
    }
    return {
        props: {
            ...data,
            storesData: storesData[0]
        }
    };
}
function StoreMainPage({ storesData , content  }) {
    const { 0: sortOrder , 1: setSortOrder  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("asc");
    const [parkingChecked, setParkingChecked] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);
    const [storesList, setStoresList] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(storesData);
    const handleChange = (event, value)=>{
        setSortOrder(event.target.value);
    };
    const handleParkingChange = (event)=>{
        setParkingChecked(event.target.checked);
    };
    const cmsContext = (0,_lib_cms_CmsContext__WEBPACK_IMPORTED_MODULE_3__/* .useCmsContext */ .Eb)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        let filterRequest = {
            filterBy: [
                {
                    path: "/_meta/schema",
                    value: "https://demostore.amplience.com/content/store"
                },
                {
                    path: "/filterActive",
                    value: true
                }
            ],
            sortBy: {
                key: "default",
                order: sortOrder
            }
        };
        if (parkingChecked) {
            filterRequest.filterBy.push({
                path: "/keyElements/parking",
                value: true
            });
        }
        (0,_lib_cms_fetchContent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)([
            filterRequest
        ], cmsContext).then((result)=>setStoresList(result[0]));
    }, [
        sortOrder,
        parkingChecked,
        cmsContext
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "af-main-content",
        style: {
            paddingBottom: 60
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                style: {
                    marginTop: 30,
                    marginBottom: 20
                },
                variant: "h2",
                component: "h2",
                children: "Our Stores"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Paper, {
                variant: "outlined",
                style: {
                    backgroundColor: "#efefef",
                    marginLeft: 10,
                    marginRight: 10,
                    marginBottom: 30
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.FormControl, {
                    variant: "standard",
                    style: {
                        width: "100%",
                        padding: 20
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {
                        container: true,
                        direction: "row",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        spacing: 0,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {
                                item: true,
                                xs: 12,
                                sm: 4,
                                md: 3,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        style: {
                                            paddingRight: 15
                                        },
                                        children: "Sort by:"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Select, {
                                        value: sortOrder,
                                        onChange: handleChange,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {
                                                value: "asc",
                                                children: "name ascending"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {
                                                value: "desc",
                                                children: "name descending"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {
                                item: true,
                                xs: 12,
                                sm: 4,
                                md: 3,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Checkbox, {
                                        color: "primary",
                                        checked: parkingChecked,
                                        onChange: handleParkingChange
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                                        variant: "body1",
                                        component: "span",
                                        children: "Parking space"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {
                container: true,
                style: {
                    display: "flex",
                    flexWrap: "wrap",
                    listStyle: "none",
                    margin: 0,
                    padding: 0
                },
                children: storesList.responses.map((store)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cms_modern_Store_StoreCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        content: store.content
                    }, store.content.locationName))
            })
        ]
    });
};
StoreMainPage.Layout = _components_core__WEBPACK_IMPORTED_MODULE_5__/* .Layout */ .Ar;

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
var __webpack_exports__ = __webpack_require__.X(0, [473,675,952,664,638,153,322,506,298], () => (__webpack_exec__(2077)));
module.exports = __webpack_exports__;

})();