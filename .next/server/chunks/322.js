"use strict";
exports.id = 322;
exports.ids = [322];
exports.modules = {

/***/ 9725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Eb": () => (/* binding */ useCmsContext),
/* harmony export */   "bh": () => (/* binding */ WithCmsContext),
/* harmony export */   "dc": () => (/* binding */ createCmsContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4269);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);



const Cookies = __webpack_require__(640);
const Context = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(null);
function useCmsContext() {
    return react__WEBPACK_IMPORTED_MODULE_1___default().useContext(Context);
}
const WithCmsContext = ({ children , value  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Context.Provider, {
        value: value,
        children: children
    });
};
async function createCmsContext(req) {
    const { url =""  } = req || {};
    const { query  } = (0,url__WEBPACK_IMPORTED_MODULE_2__.parse)(url, true);
    const { vse: queryStringVse , locale: queryStringLocale  } = query || {};
    const cookies = new Cookies(req);
    const cookieVse = cookies.get("amplience-host");
    const cookieTimestamp = cookies.get("timestamp");
    const cookieLocale = cookies.get("locale");
    const cookieCurrency = cookies.get("currency");
    return {
        stagingApi: queryStringVse || cookieVse || null,
        locale: queryStringLocale || cookieLocale || "en-US",
        currency: cookieCurrency || "USD",
        timestamp: cookieTimestamp || null
    };
}


/***/ }),

/***/ 5723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7881);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_config_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1638);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9819);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_2__);



function isGetByIdRequest(request) {
    return request && request["id"] !== undefined;
}
function isGetByFilterRequest(request) {
    return request && request.filterBy && Array.isArray(request.filterBy);
}
const fetchContent = async (items, context, parameters = {
    "depth": "all",
    "format": "inlined"
})=>{
    const { cms  } = await (0,_lib_config_AppContext__WEBPACK_IMPORTED_MODULE_1__/* .createAppContext */ .Wv)();
    const host = context.stagingApi || `${cms.hub}.cdn.content.amplience.net`;
    return await Promise.all(items.map((request)=>{
        if (isGetByFilterRequest(request)) {
            let body = JSON.stringify({
                ...request,
                parameters
            });
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`https://${host}/content/filter`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body
            }).then((x)=>x.json());
        } else {
            let path = isGetByIdRequest(request) ? `id/${request.id}` : `key/${request.key}`;
            let params = {
                ...parameters,
                locale: context.locale
            };
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`https://${host}/content/${path}?${(0,querystring__WEBPACK_IMPORTED_MODULE_2__.stringify)(params)}`).then((x)=>x.json()).then((x)=>x.content || null);
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchContent);


/***/ }),

/***/ 2993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* binding */ enrichPageContent)
});

;// CONCATENATED MODULE: ./utils/JsonTree.ts
/**
 * @hidden
 */ /**
 * @hidden
 */ class JsonTree {
    static visit(data, visitor, depth = 0) {
        if (depth > 1000) {
            throw new Error("Tree depth exceeded maximum of 1000, verify the data is not self-referential");
        }
        if (data == null) {
            return;
        } else if (Array.isArray(data)) {
            for(let i = 0; i < data.length; i++){
                const item = data[i];
                JsonTree.visit(item, visitor, depth + 1);
                const newValue = visitor(item);
                if (newValue !== undefined) {
                    data[i] = newValue;
                }
            }
        } else if (typeof data === "object") {
            const keys = Object.keys(data);
            for (const key of keys){
                JsonTree.visit(data[key], visitor, depth + 1);
                const newValue1 = visitor(data[key]);
                if (newValue1 !== undefined) {
                    data[key] = newValue1;
                }
            }
        }
    }
    static async asyncVisit(data, visitor, depth = 0) {
        if (depth > 1000) {
            throw new Error("Tree depth exceeded maximum of 1000, verify the data is not self-referential");
        }
        if (data == null) {
            return;
        } else if (Array.isArray(data)) {
            for(let i = 0; i < data.length; i++){
                const item = data[i];
                await JsonTree.asyncVisit(item, visitor, depth + 1);
                await visitor(item);
            }
        } else if (typeof data === "object") {
            const keys = Object.keys(data);
            for (const key of keys){
                await JsonTree.asyncVisit(data[key], visitor, depth + 1);
                await visitor(data[key]);
            }
        }
    }
}

// EXTERNAL MODULE: ./utils/withRetry.ts
var withRetry = __webpack_require__(5019);
;// CONCATENATED MODULE: ./lib/page/pageContent/enrichPageContent.ts


function byContentType(schema) {
    return (data)=>{
        return data && data._meta && data._meta.schema && data._meta.schema === schema;
    };
}
const resolvers = [];
// dave: does this do anything? i can't find anywhere that uses ResolverSpec
/**
 * Middleware for injecting extra data into content such as product data
 */ async function enrichPageContent(content, cmsContext) {
    return await (0,withRetry/* withRetry */.J)(async ()=>{
        if (content) {
            const visitor = async (node)=>{
                for (let { filter , apply  } of resolvers){
                    if (filter(node)) {
                        await apply(node, cmsContext);
                    }
                }
            };
            await visitor(content);
            await JsonTree.asyncVisit(content, visitor);
        }
        return content;
    });
}


/***/ }),

/***/ 6149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SE": () => (/* binding */ useUserContext),
/* harmony export */   "tR": () => (/* binding */ WithUserContext),
/* harmony export */   "v8": () => (/* binding */ createUserContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Cookies = __webpack_require__(640);
const Context = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(null);
function useUserContext() {
    return react__WEBPACK_IMPORTED_MODULE_1___default().useContext(Context);
}
const WithUserContext = ({ children , value  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Context.Provider, {
        value: value,
        children: children
    });
};
function pathname(url) {
    if (!url) {
        return url;
    } else {
        return url.slice(0, url.indexOf("?"));
    }
}
async function createUserContext(context) {
    const cookies = new Cookies(context.req);
    const segment = cookies.get("segment");
    const locale = cookies.get("locale") || "en-US";
    const currency = cookies.get("currency") || "USD";
    let result = {
        segment: segment || null,
        engines: {},
        language: locale.split("-")[0],
        country: locale.split("-")[1],
        currency
    };
    return result;
}


/***/ }),

/***/ 5019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ withRetry)
/* harmony export */ });
async function withRetry(promiseFn, label = "", attempts = 3) {
    let lastError = null;
    for(let i = 0; i < attempts; i++){
        try {
            const result = await promiseFn();
            return result;
        } catch (err) {
            console.log(label, err);
            lastError = err;
        }
    }
    throw lastError;
}


/***/ })

};
;