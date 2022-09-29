"use strict";
exports.id = 153;
exports.ids = [153];
exports.modules = {

/***/ 2153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "commerceApi": () => (/* binding */ commerceApi),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "initCommerceAPI": () => (/* binding */ initCommerceAPI)
/* harmony export */ });
/* harmony import */ var _amplience_dc_demostore_integration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3175);
/* harmony import */ var _amplience_dc_demostore_integration__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_amplience_dc_demostore_integration__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_config_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1638);


// add the /api route
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_amplience_dc_demostore_integration__WEBPACK_IMPORTED_MODULE_0__.middleware);
let configuredApi;
const initCommerceAPI = async (config)=>{
    return configuredApi = configuredApi || await (0,_amplience_dc_demostore_integration__WEBPACK_IMPORTED_MODULE_0__.getCommerceAPI)(config);
};
let commerceApi = {
    getProduct: async function(args) {
        return await (await initCommerceAPI({
            config_locator: _lib_config_AppContext__WEBPACK_IMPORTED_MODULE_1__/* .configLocator */ .pT
        })).getProduct(args);
    },
    getProducts: async function(args) {
        return await (await initCommerceAPI({
            config_locator: _lib_config_AppContext__WEBPACK_IMPORTED_MODULE_1__/* .configLocator */ .pT
        })).getProducts(args);
    },
    getCategory: async function(args) {
        return await (await initCommerceAPI({
            config_locator: _lib_config_AppContext__WEBPACK_IMPORTED_MODULE_1__/* .configLocator */ .pT
        })).getCategory(args);
    },
    getMegaMenu: async function(args) {
        return await (await initCommerceAPI({
            config_locator: _lib_config_AppContext__WEBPACK_IMPORTED_MODULE_1__/* .configLocator */ .pT
        })).getMegaMenu(args);
    },
    getCustomerGroups: async function(args) {
        return await (await initCommerceAPI({
            config_locator: _lib_config_AppContext__WEBPACK_IMPORTED_MODULE_1__/* .configLocator */ .pT
        })).getCustomerGroups(args);
    }
};



/***/ })

};
;