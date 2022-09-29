"use strict";
exports.id = 638;
exports.ids = [638];
exports.modules = {

/***/ 1638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wv": () => (/* binding */ createAppContext),
/* harmony export */   "a2": () => (/* binding */ WithAppContext),
/* harmony export */   "bp": () => (/* binding */ useAppContext),
/* harmony export */   "pT": () => (/* binding */ configLocator)
/* harmony export */ });
/* unused harmony export WithLazyAppContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _amplience_dc_demostore_integration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3175);
/* harmony import */ var _amplience_dc_demostore_integration__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_amplience_dc_demostore_integration__WEBPACK_IMPORTED_MODULE_2__);



const Context = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(null);
function useAppContext() {
    return react__WEBPACK_IMPORTED_MODULE_1___default().useContext(Context);
}
const WithLazyAppContext = (props)=>{
    const { children ,  } = props;
    const { 0: context , 1: setContext  } = useState(null);
    useEffect(()=>{
        createAppContext().then(setContext);
    }, []);
    return context ? /*#__PURE__*/ _jsx(Context.Provider, {
        value: context,
        children: children
    }) : /*#__PURE__*/ _jsx("div", {
        children: "loading..."
    });
};
const WithAppContext = ({ children , value  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Context.Provider, {
        value: value,
        children: children
    });
};
const configLocator = process.env.NEXT_PUBLIC_DEMOSTORE_CONFIG_LOCATOR || process.env.STORYBOOK_DEMOSTORE_CONFIG_LOCATOR || `amprsaprod:default`;
async function createAppContext() {
    let context = await (0,_amplience_dc_demostore_integration__WEBPACK_IMPORTED_MODULE_2__.getConfig)(configLocator);
    // support older style config objects
    if (typeof context.cms.hub === "object") {
        context.cms = {
            hub: context.cms.hub.name,
            stagingApi: context.cms.hub.stagingApi,
            imageHub: context.cms.hubs.find((hub)=>hub.key === "productImages")?.name
        };
    }
    return context;
}


/***/ })

};
;