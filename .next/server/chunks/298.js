"use strict";
exports.id = 298;
exports.ids = [298];
exports.modules = {

/***/ 8674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ page_fetchPageData)
});

// EXTERNAL MODULE: ./lib/cms/fetchContent.ts
var fetchContent = __webpack_require__(5723);
;// CONCATENATED MODULE: ./utils/FetchMap.ts
/**
 * Utility for fetching references to data items in a Map and
 * returning the fetched values in the same structure as the Map
 * 
 * @param input 
 * @param fetchFn 
 */ async function fetchMap(input, fetchFn) {
    const keys = Object.keys(input);
    const items = [];
    // deconstruct the structure into a flat list
    for (let key of keys){
        if (Array.isArray(input[key])) {
            for (let item of input[key]){
                items.push(item);
            }
        } else {
            items.push(input[key]);
        }
    }
    // fetch items
    const fetchedItems = await fetchFn(items);
    // reconstruct into origional object shape
    let result = {};
    for (let key1 of keys){
        if (Array.isArray(input[key1])) {
            result[key1] = fetchedItems.splice(0, input[key1].length);
        } else {
            result[key1] = fetchedItems.shift();
        }
    }
    return result;
}

// EXTERNAL MODULE: ./utils/withRetry.ts
var withRetry = __webpack_require__(5019);
;// CONCATENATED MODULE: ./lib/cms/fetchContentMap.ts



async function fetchContentMap(map, context) {
    return await (0,withRetry/* withRetry */.J)(()=>{
        return fetchMap(map, (items)=>{
            return (0,fetchContent/* default */.Z)(items, context);
        });
    }, "fetchContentMap");
}
/* harmony default export */ const cms_fetchContentMap = (fetchContentMap);

// EXTERNAL MODULE: ./lib/cms/CmsContext.tsx
var CmsContext = __webpack_require__(9725);
// EXTERNAL MODULE: ./lib/user/UserContext.tsx
var UserContext = __webpack_require__(6149);
// EXTERNAL MODULE: ./lib/config/AppContext.tsx
var AppContext = __webpack_require__(1638);
// EXTERNAL MODULE: ./lib/page/pageContent/enrichPageContent.ts + 1 modules
var enrichPageContent = __webpack_require__(2993);
;// CONCATENATED MODULE: ./lib/cms/fetchHierarchy.ts

async function getChildren(nodeId, context) {
    const childrenRequest = {
        "filterBy": [
            {
                "path": "/_meta/hierarchy/parentId",
                "value": nodeId
            }
        ],
        "sortBy": {
            "key": "default",
            "order": "asc"
        }
    };
    const [children] = await (0,fetchContent/* default */.Z)([
        childrenRequest
    ], context, {
        depth: "root",
        format: "inlined"
    });
    const responses = children?.responses || [];
    const subChildren = await Promise.all(responses.map((child)=>{
        return getChildren(child.content._meta.deliveryId, context);
    }));
    responses.forEach((element, i)=>{
        responses[i].children = subChildren[i];
    });
    return responses;
}
async function fetchHierarchy(items, context) {
    return await Promise.all(items.map(async (item)=>{
        // Get Root node from key
        const [rootNode] = await (0,fetchContent/* default */.Z)([
            {
                key: item.tree.key
            }
        ], context, {
            depth: "root",
            format: "linked"
        });
        const children = await getChildren(rootNode._meta.deliveryId, context);
        // Return response
        const response = {
            content: rootNode,
            children: children
        };
        return response;
    }));
}
/* harmony default export */ const cms_fetchHierarchy = (fetchHierarchy);

;// CONCATENATED MODULE: ./lib/cms/fetchHierarchyMap.ts



async function fetchHierarchyMap(map, context) {
    return await (0,withRetry/* withRetry */.J)(()=>{
        return fetchMap(map, (items)=>{
            return cms_fetchHierarchy(items, context);
        });
    }, "fetchHierarchyMap");
}
/* harmony default export */ const cms_fetchHierarchyMap = (fetchHierarchyMap);

// EXTERNAL MODULE: ./pages/api/index.ts
var api = __webpack_require__(2153);
;// CONCATENATED MODULE: ./lib/page/fetchPageData.ts







/**
 * Fetches the core set of data required to render a page in parallel 
 */ async function fetchPageData(input, context) {
    const cmsContext = await (0,CmsContext/* createCmsContext */.dc)(context.req);
    const userContext = await (0,UserContext/* createUserContext */.v8)(context);
    const content = await cms_fetchContentMap(input.content, cmsContext);
    const hierarchies = await cms_fetchHierarchyMap(input.hierarchies || {}, cmsContext);
    return {
        context: {
            cmsContext,
            userContext,
            appContext: await (0,AppContext/* createAppContext */.Wv)()
        },
        content: await (0,enrichPageContent/* enrichPageContent */.j)(content, cmsContext),
        hierarchies: await (0,enrichPageContent/* enrichPageContent */.j)(hierarchies, cmsContext),
        ecommerce: {
            categories: await api.commerceApi.getMegaMenu({
                ...cmsContext,
                ...userContext
            })
        }
    };
}
/* harmony default export */ const page_fetchPageData = (fetchPageData);


/***/ }),

/***/ 6885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ page_fetchStandardPageData)
});

// EXTERNAL MODULE: ./lib/page/fetchPageData.ts + 4 modules
var fetchPageData = __webpack_require__(8674);
// EXTERNAL MODULE: ./lib/cms/fetchContent.ts
var fetchContent = __webpack_require__(5723);
;// CONCATENATED MODULE: ./utils/findInHierarchy.ts
function findInHierarchy(root, findFn) {
    const visit = (node, stack)=>{
        if (!node) {
            return null;
        }
        if (findFn(node)) {
            return {
                ...node,
                breadcrumb: stack
            };
        } else {
            for (let child of node.children || []){
                const value = visit(child, stack.concat(node));
                if (value) {
                    return {
                        ...value,
                        breadcrumb: stack
                    };
                }
            }
        }
        return null;
    };
    return visit(root, []);
}

;// CONCATENATED MODULE: ./utils/findInContentMap.ts
function findInContentMap(map, findFn) {
    const keys = Object.keys(map);
    for (let key of keys){
        const entry = map[key];
        if (Array.isArray(entry)) {
            for (let subEntry of entry){
                if (!subEntry) {
                    continue;
                }
                if (findFn(subEntry)) {
                    return subEntry;
                }
            }
        } else {
            if (!entry) {
                continue;
            }
            if (findFn(entry)) {
                return entry;
            }
        }
    }
    return null;
}

;// CONCATENATED MODULE: ./lib/page/fetchStandardPageData.ts




async function fetchStandardPageData(input, context) {
    const data = await (0,fetchPageData/* default */.Z)({
        ...input,
        content: {
            ...input.content,
            configComponents: {
                key: "config/components"
            }
        },
        hierarchies: {
            ...input.hierarchies,
            pages: {
                tree: {
                    key: "homepage"
                }
            },
            themes: {
                tree: {
                    key: "configuration/themes"
                }
            }
        }
    }, context);
    const pageNode = findInHierarchy(data.hierarchies.pages, (node)=>{
        const dk = context.req.url === "/" ? "homepage" : context.req.url?.slice(1);
        return node.content?._meta?.deliveryKey === dk;
    });
    let page = {};
    // Make Generic
    if (pageNode && pageNode.content._meta?.schema?.indexOf("https://demostore.amplience.com/site/pages/") === 0) {
        // check to see if we have already loaded the page object
        const pageId = pageNode.content._meta.deliveryId;
        let fullPageContent = findInContentMap(data.content, (content)=>content._meta.deliveryId === pageId);
        if (!fullPageContent) {
            [fullPageContent] = await (0,fetchContent/* default */.Z)([
                {
                    id: pageNode.content._meta.deliveryId
                }
            ], data.context.cmsContext);
        }
        page = {
            page: fullPageContent,
            children: pageNode.children
        };
    }
    return {
        ...data,
        page
    };
}
/* harmony default export */ const page_fetchStandardPageData = (fetchStandardPageData);


/***/ })

};
;