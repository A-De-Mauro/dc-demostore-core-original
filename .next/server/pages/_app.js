"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,237];
exports.modules = {

/***/ 7272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ cart_CartContext)
});

// UNUSED EXPORTS: useCart

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./utils/isServer.ts
function isServer() {
    return "undefined" === "undefined";
};

;// CONCATENATED MODULE: ./components/cart/CartContext.tsx



const { v4: uuidv4  } = __webpack_require__(5828);
const CartContext = /*#__PURE__*/ (0,external_react_.createContext)(null);
const LOCAL_STORAGE_KEY = "cartState";
const DEFAULT_STATE = {
    lineItems: []
};
const WithCart = ({ children  })=>{
    const loadState = ()=>{
        try {
            const stickyValue = window.localStorage.getItem(LOCAL_STORAGE_KEY);
            return stickyValue !== null ? JSON.parse(stickyValue) : DEFAULT_STATE;
        } catch (err) {}
    };
    const saveState = (state)=>{
        try {
            window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
        } catch (err) {
        // ignore
        }
    };
    const initialState = loadState();
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)((state, action)=>{
        switch(action.type){
            case "ADD_TO_CART":
                state.lineItems = [
                    ...state.lineItems,
                    {
                        id: uuidv4(),
                        quantity: 1,
                        ...action.data
                    }
                ];
                saveState(state);
                break;
        }
        return state;
    }, initialState || DEFAULT_STATE);
    const actions = {
        addToCart: (data)=>dispatch({
                type: "ADD_TO_CART",
                data
            })
    };
    if (isServer()) {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: children
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(CartContext.Provider, {
        value: {
            ...state,
            ...actions
        },
        children: children
    });
};
function useCart() {
    return useContext(CartContext);
}
/* harmony default export */ const cart_CartContext = (WithCart);


/***/ }),

/***/ 4449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E_": () => (/* reexport safe */ _ConfigContext__WEBPACK_IMPORTED_MODULE_1__.E)
/* harmony export */ });
/* harmony import */ var _withConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9754);
/* harmony import */ var _ConfigContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2375);




/***/ }),

/***/ 804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ configureAnalytics)
/* harmony export */ });
let enabled = false;
function configureAnalytics() {
    let global = window;
    if (global && enabled && !global.GA_INITIALIZED) {
        // TODO: Initialize React GA
        global.GA_INITIALIZED = true;
    }
}


/***/ }),

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7544);
/* harmony import */ var _components_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5179);
/* harmony import */ var _lib_user_UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6149);
/* harmony import */ var _lib_cms_CmsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9725);
/* harmony import */ var _lib_config_AppContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1638);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8506);
/* harmony import */ var _components_core_WithWindowContext_WindowContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9460);
/* harmony import */ var _lib_analytics_configureAnalytics__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(804);
/* harmony import */ var _components_cart_CartContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7272);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5566);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_core_Config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4449);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_core__WEBPACK_IMPORTED_MODULE_3__, _components_ui__WEBPACK_IMPORTED_MODULE_7__]);
([_components_core__WEBPACK_IMPORTED_MODULE_3__, _components_ui__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















next_router__WEBPACK_IMPORTED_MODULE_10___default().events.on("routeChangeStart", ()=>nprogress__WEBPACK_IMPORTED_MODULE_11___default().start());
next_router__WEBPACK_IMPORTED_MODULE_10___default().events.on("routeChangeComplete", ()=>nprogress__WEBPACK_IMPORTED_MODULE_11___default().done());
next_router__WEBPACK_IMPORTED_MODULE_10___default().events.on("routeChangeError", ()=>nprogress__WEBPACK_IMPORTED_MODULE_11___default().done());
const Noop = ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_2__["default"] {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles && jssStyles.parentElement) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
        (0,_lib_analytics_configureAnalytics__WEBPACK_IMPORTED_MODULE_14__/* .configureAnalytics */ .f)();
    }
    render() {
        const { Component , pageProps  } = this.props;
        const Layout = Component.Layout || Noop;
        if (pageProps.statusCode) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_error__WEBPACK_IMPORTED_MODULE_12___default()), {
                statusCode: pageProps.statusCode
            });
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_core__WEBPACK_IMPORTED_MODULE_3__/* .Head */ .Fb, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_config_AppContext__WEBPACK_IMPORTED_MODULE_6__/* .WithAppContext */ .a2, {
                    value: pageProps.context?.appContext,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_core__WEBPACK_IMPORTED_MODULE_3__/* .WithVisualization */ .mI, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_7__/* .WithUI */ .vr, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cart_CartContext__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_user_UserContext__WEBPACK_IMPORTED_MODULE_4__/* .WithUserContext */ .tR, {
                                    value: pageProps.context?.userContext,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_cms_CmsContext__WEBPACK_IMPORTED_MODULE_5__/* .WithCmsContext */ .bh, {
                                        value: pageProps.context?.cmsContext,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_core_Config__WEBPACK_IMPORTED_MODULE_13__/* .ConfigContext.Provider */ .E_.Provider, {
                                            value: {
                                                values: pageProps.content?.configComponents
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_7__/* .WithDebugState */ .sG, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_core_WithWindowContext_WindowContext__WEBPACK_IMPORTED_MODULE_8__/* .WithWindowContext */ .t, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Layout, {
                                                        pageProps: pageProps,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                                            ...pageProps
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            ]
        });
    }
};

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

/***/ 5566:
/***/ ((module) => {

module.exports = require("next/error");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 808:
/***/ ((module) => {

module.exports = require("nprogress");

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

/***/ 5828:
/***/ ((module) => {

module.exports = require("uuid");

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
var __webpack_exports__ = __webpack_require__.X(0, [473,675,952,664,544,638,153,322,506], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();