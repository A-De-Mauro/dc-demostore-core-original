"use strict";
(() => {
var exports = {};
exports.id = 774;
exports.ids = [774,237];
exports.modules = {

/***/ 350:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_cms_modern__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2297);
/* harmony import */ var _components_product_AddToBasket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5078);
/* harmony import */ var _components_product_ProductAttribute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4419);
/* harmony import */ var _components_product_ProductColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6491);
/* harmony import */ var _components_product_ProductHero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1307);
/* harmony import */ var _components_product_ProductMediaViewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1701);
/* harmony import */ var _components_product_ProductRichText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2649);
/* harmony import */ var _components_product_ProductSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3693);
/* harmony import */ var _components_ui_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(983);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8506);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5611);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_cms_modern__WEBPACK_IMPORTED_MODULE_1__, _components_product_ProductColor__WEBPACK_IMPORTED_MODULE_4__, _components_product_ProductRichText__WEBPACK_IMPORTED_MODULE_7__, _components_product_ProductSize__WEBPACK_IMPORTED_MODULE_8__, _ui__WEBPACK_IMPORTED_MODULE_12__, nanoid__WEBPACK_IMPORTED_MODULE_13__]);
([_components_cms_modern__WEBPACK_IMPORTED_MODULE_1__, _components_product_ProductColor__WEBPACK_IMPORTED_MODULE_4__, _components_product_ProductRichText__WEBPACK_IMPORTED_MODULE_7__, _components_product_ProductSize__WEBPACK_IMPORTED_MODULE_8__, _ui__WEBPACK_IMPORTED_MODULE_12__, nanoid__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const mapping = {
    "text": (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: props.text
        }),
    "section": _ui__WEBPACK_IMPORTED_MODULE_12__/* .Section */ .$0,
    "typography": _mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography,
    "grid": (props)=>{
        const breakpoints = {
            xs: props?.breakpoints?.xs && props.type === "item" ? Number(props?.breakpoints?.xs) : undefined,
            sm: props?.breakpoints?.sm && props.type === "item" ? Number(props?.breakpoints?.sm) : undefined,
            md: props?.breakpoints?.md && props.type === "item" ? Number(props?.breakpoints?.md) : undefined,
            lg: props?.breakpoints?.lg && props.type === "item" ? Number(props?.breakpoints?.lg) : undefined,
            xl: props?.breakpoints?.xl && props.type === "item" ? Number(props?.breakpoints?.xl) : undefined
        };
        const remappedProps = {
            ...props,
            item: props.type === "item",
            container: props.type === "container",
            direction: props.type === "container" && props.direction || undefined,
            spacing: props.spacing ? Number(props.spacing) : undefined,
            ...breakpoints
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Grid, {
            ...remappedProps
        });
    },
    "product_image_viewer": _components_product_ProductMediaViewer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
    "product_attribute": _components_product_ProductAttribute__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
    "product_atb": _components_product_AddToBasket__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    "product_size": _components_product_ProductSize__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
    "product_color": _components_product_ProductColor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
    "product_hero": _components_product_ProductHero__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
    "product_rich_text": _components_product_ProductRichText__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
    "content_block": _components_cms_modern__WEBPACK_IMPORTED_MODULE_1__/* .ContentBlock */ .b0,
    "accordion": _components_ui_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z
};
const CmsComponent = ({ data  })=>{
    if (!data) {
        return null;
    }
    const { name , properties , slots  } = data;
    let Component = mapping[name];
    if (!Component) {
        return null;
    }
    const hydratedSlots = {};
    if (slots) {
        for (let slotName of Object.keys(slots)){
            hydratedSlots[slotName] = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: slots[slotName].map((child)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CmsComponent, {
                        data: child
                    }, `${slotName}-${(0,nanoid__WEBPACK_IMPORTED_MODULE_13__.nanoid)()}`))
            });
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...properties,
        ...hydratedSlots
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CmsComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8001:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _CmsComponent__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _CmsComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(350);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CmsComponent__WEBPACK_IMPORTED_MODULE_0__]);
_CmsComponent__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1700:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* reexport safe */ _CmsComponent__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _CmsComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8001);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CmsComponent__WEBPACK_IMPORTED_MODULE_0__]);
_CmsComponent__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ AddToBasket_AddToBasket)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/product/AddToBasket/AddToBasket.tsx


const AddToBasket = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            marginTop: 10,
            width: "100%"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
            style: {
                width: "100%"
            },
            type: "button",
            className: "af-button af-button-dark",
            children: "ADD TO MY BAG"
        })
    });
};
/* harmony default export */ const AddToBasket_AddToBasket = (AddToBasket);

;// CONCATENATED MODULE: ./components/product/AddToBasket/index.ts



/***/ }),

/***/ 4419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ ProductAttribute_ProductAttribute)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/product/WithProduct/WithProduct.tsx
var WithProduct = __webpack_require__(8484);
;// CONCATENATED MODULE: ./components/product/ProductAttribute/ProductAttribute.tsx



const ProductAttribute = (props)=>{
    const { variant ="name"  } = props;
    const { product , productVariant  } = (0,WithProduct/* useProduct */.i)() || {};
    if (!product) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: productVariant[variant] || product[variant]
    });
};
/* harmony default export */ const ProductAttribute_ProductAttribute = (ProductAttribute);

;// CONCATENATED MODULE: ./components/product/ProductAttribute/index.ts



/***/ }),

/***/ 3710:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _WithProduct_WithProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8484);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5611);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nanoid__WEBPACK_IMPORTED_MODULE_4__]);
nanoid__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const ProductColor = (props)=>{
    const {} = props;
    const { product , setAttribute , attributes , productVariant  } = (0,_WithProduct_WithProduct__WEBPACK_IMPORTED_MODULE_3__/* .useProduct */ .i)() || {};
    if (!product) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    }
    // make sure color is an attribute
    if (!productVariant.color) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    }
    const colors = product && product.variants ? [
        ...new Set(product.variants.map((x)=>x.color))
    ] : [];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            marginTop: 10
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
            variant: "standard",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.InputLabel, {
                    children: "Color"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Select, {
                    id: "product_color_select",
                    defaultValue: lodash__WEBPACK_IMPORTED_MODULE_5___default().first(colors),
                    value: attributes?.color,
                    onChange: (event)=>setAttribute && setAttribute("color", event.target.value),
                    children: colors.map((color)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                            value: color,
                            children: color
                        }, (0,nanoid__WEBPACK_IMPORTED_MODULE_4__.nanoid)()))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductColor);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6491:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _ProductColor__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _ProductColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3710);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ProductColor__WEBPACK_IMPORTED_MODULE_0__]);
_ProductColor__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ ProductHero_ProductHero)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./components/product/WithProduct/WithProduct.tsx
var WithProduct = __webpack_require__(8484);
;// CONCATENATED MODULE: ./components/product/ProductHero/ProductHero.tsx




const ProductHero = (props)=>{
    const {} = props;
    const { product , setAttribute , attributes , productVariant  } = (0,WithProduct/* useProduct */.i)() || {};
    if (!product) {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "af-pdp-details-summary",
        style: {
            marginBottom: 10
        },
        children: [
            productVariant && productVariant.listPrice === productVariant.salePrice && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "af-pdp-details-summary__price",
                children: productVariant.listPrice
            }),
            productVariant && productVariant.listPrice !== productVariant.salePrice && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "af-pdp-details-summary__list_price",
                        children: productVariant.listPrice
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "af-pdp-details-summary__sale_price",
                        children: productVariant.salePrice
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                component: "h3",
                className: "af-pdp-details-summary__name",
                children: product && product.name
            })
        ]
    });
};
/* harmony default export */ const ProductHero_ProductHero = (ProductHero);

;// CONCATENATED MODULE: ./components/product/ProductHero/index.ts



/***/ }),

/***/ 1701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ ProductMediaViewer_ProductMediaViewer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./lib/config/AppContext.tsx
var AppContext = __webpack_require__(1638);
// EXTERNAL MODULE: ./components/product/WithProduct/WithProduct.tsx
var WithProduct = __webpack_require__(8484);
;// CONCATENATED MODULE: external "react-image-gallery"
const external_react_image_gallery_namespaceObject = require("react-image-gallery");
var external_react_image_gallery_default = /*#__PURE__*/__webpack_require__.n(external_react_image_gallery_namespaceObject);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);
// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
;// CONCATENATED MODULE: ./components/product/ProductMediaViewer/ProductMediaViewer.tsx







const styles = (theme)=>({});
const ProductMediaViewer = (props)=>{
    const { classes , variant ="portrait" , numItems =2 , ...other } = props;
    const { product  } = (0,WithProduct/* useProduct */.i)() || {};
    let { cms  } = (0,AppContext/* useAppContext */.bp)();
    const container = /*#__PURE__*/ (0,external_react_.createRef)();
    (0,external_react_.useEffect)(()=>{
        if (!window || !container.current || !product) {
            return;
        }
        if (product.imageSetId) {
            const { amp  } = window;
            let target = container.current;
            const mediaSet = product.imageSetId.padStart(6, "0");
            if (cms.imageHub) {
                new amp.Viewer({
                    target,
                    client: cms.imageHub,
                    imageBasePath: `https://cdn.media.amplience.net/`,
                    set: mediaSet,
                    view: variant,
                    secure: true,
                    templates: {
                        thumb: "w=85&h=85&qlt=65&unsharp=0,1,1,7&fmt=auto&qlt=default&fmt.jpeg.qlt=75&fmt.webp.qlt=60&fmt.jp2.qlt=40",
                        desktop: {
                            main: "w=600&qlt=75&upscale=false&fmt=auto&qlt=default&fmt.jpeg.qlt=75&fmt.webp.qlt=60&fmt.jp2.qlt=40",
                            mainRetina: "w=1200&qlt=75&upscale=false&fmt=auto&qlt=default&fmt.jpeg.qlt=75&fmt.webp.qlt=60&fmt.jp2.qlt=40"
                        },
                        desktopFull: {
                            main: "w=1000&upscale=false&fmt=auto&qlt=default&fmt.jpeg.qlt=75&fmt.webp.qlt=60&fmt.jp2.qlt=40",
                            mainRetina: "w=2000&upscale=false&fmt=auto&qlt=default&fmt.jpeg.qlt=75&fmt.webp.qlt=60&fmt.jp2.qlt=40"
                        },
                        mobile: {
                            main: "w=500&h=500&upscale=false&fmt=auto&qlt=default&fmt.jpeg.qlt=75&fmt.webp.qlt=60&fmt.jp2.qlt=40",
                            mainRetina: "w=1000&h=1000&upscale=false&fmt=auto&qlt=default&fmt.jpeg.qlt=75&fmt.webp.qlt=60&fmt.jp2.qlt=40"
                        }
                    },
                    ampConfigs: {
                        mainContainerCarousel: {
                            listVisible: Number(numItems)
                        }
                    }
                });
            } else {
                console.error(`product image hub not found`);
            }
            return ()=>{
                if (target) {
                    target.innerHTML = "";
                }
            };
        }
    }, [
        container,
        numItems,
        variant,
        cms,
        product
    ]);
    if (product.imageSetId) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "af-pdp-viewer",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                ref: container,
                className: "af-pdp-viewer__target",
                id: "amp-container"
            })
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_image_gallery_default()), {
            items: external_lodash_default().uniqBy(external_lodash_default().map(external_lodash_default().flatten(external_lodash_default().map(product.variants, "images")), (image)=>({
                    original: image.url,
                    thumbnail: image.thumb || image.url
                })), "original")
        });
    }
};
/* harmony default export */ const ProductMediaViewer_ProductMediaViewer = ((0,styles_.withStyles)(styles)(ProductMediaViewer));

;// CONCATENATED MODULE: ./components/product/ProductMediaViewer/index.ts



/***/ }),

/***/ 5908:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WithProduct_WithProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8484);
/* harmony import */ var _components_cms_modern_CustomRichText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2991);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_cms_modern_CustomRichText__WEBPACK_IMPORTED_MODULE_3__]);
_components_cms_modern_CustomRichText__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ProductRichText = (props)=>{
    const { variant ="text"  } = props;
    const { product  } = (0,_WithProduct_WithProduct__WEBPACK_IMPORTED_MODULE_2__/* .useProduct */ .i)() || {};
    if (!product || !product[variant]) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cms_modern_CustomRichText__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        text: product[variant]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductRichText);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2649:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _ProductRichText__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _ProductRichText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5908);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ProductRichText__WEBPACK_IMPORTED_MODULE_0__]);
_ProductRichText__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7911:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _WithProduct_WithProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8484);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5611);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nanoid__WEBPACK_IMPORTED_MODULE_4__]);
nanoid__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const ProductSize = (props)=>{
    const {} = props;
    const { product , setAttribute , attributes , productVariant  } = (0,_WithProduct_WithProduct__WEBPACK_IMPORTED_MODULE_3__/* .useProduct */ .i)() || {};
    if (!product) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    }
    // make sure size is an attribute
    if (!productVariant.size) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    }
    const sizes = product && product.variants ? [
        ...new Set(product.variants.map((x)=>x.size))
    ] : [];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            marginTop: 10
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
            variant: "standard",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.InputLabel, {
                    id: "demo-simple-select-outlined-label",
                    children: "Size"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Select, {
                    labelId: "product_size_select_label",
                    id: "product_size_select",
                    defaultValue: lodash__WEBPACK_IMPORTED_MODULE_5___default().first(sizes),
                    value: attributes?.size,
                    onChange: (event)=>setAttribute && setAttribute("size", event.target.value),
                    children: sizes.map((size)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                            value: size,
                            children: size
                        }, (0,nanoid__WEBPACK_IMPORTED_MODULE_4__.nanoid)()))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductSize);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3693:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _ProductSize__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _ProductSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7911);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ProductSize__WEBPACK_IMPORTED_MODULE_0__]);
_ProductSize__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "i": () => (/* binding */ useProduct)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ProductContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function useProduct() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ProductContext);
}
const WithProduct = (props)=>{
    const { 0: attributes , 1: setAttributes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const setAttribute = (attributeName, value)=>{
        setAttributes({
            ...attributes,
            [attributeName]: value
        });
    };
    const productVariant = props.product.variants.find((x)=>{
        for (let attributeName of Object.keys(attributes)){
            if (x[attributeName] != attributes[attributeName]) {
                return false;
            }
        }
        return true;
    }) || props.product.variants[0];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProductContext.Provider, {
        value: {
            ...props,
            productVariant,
            attributes,
            setAttribute
        },
        children: props.children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WithProduct);


/***/ }),

/***/ 2825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _WithProduct__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _WithProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8484);



/***/ }),

/***/ 983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_2__);



const styles = (theme)=>({
        root: {
            marginTop: 10
        },
        header: {
            borderTop: "1px solid #000",
            borderBottom: "1px solid #000",
            cursor: "pointer",
            padding: "10px 47.6px 10px 20px"
        },
        headerText: {
            "&::before": {
                content: '"+"',
                fontSize: 20,
                position: "absolute",
                display: "inline-block",
                right: 20,
                top: 15
            }
        },
        body: {
            padding: "15px 0px 0px 15px",
            display: "inline-block"
        }
    });
const Accordion = (props)=>{
    const { classes , title , children , ...other } = props;
    if (!react__WEBPACK_IMPORTED_MODULE_1___default().Children.count(children)) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classes.header,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: classes.headerText,
                    children: title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classes.body,
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__.withStyles)(styles)(Accordion));


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

/***/ 3796:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5179);
/* harmony import */ var _lib_page_fetchStandardPageData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6885);
/* harmony import */ var _lib_page_errors_create404Error__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7360);
/* harmony import */ var _lib_cms_CmsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9725);
/* harmony import */ var _components_core_WithVisualization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(335);
/* harmony import */ var _pages_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2153);
/* harmony import */ var _lib_cms_fetchContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5723);
/* harmony import */ var _components_cms_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1700);
/* harmony import */ var _components_product_WithProduct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2825);
/* harmony import */ var _lib_user_UserContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6149);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5611);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_core__WEBPACK_IMPORTED_MODULE_1__, _components_cms_layout__WEBPACK_IMPORTED_MODULE_7__, nanoid__WEBPACK_IMPORTED_MODULE_11__]);
([_components_core__WEBPACK_IMPORTED_MODULE_1__, _components_cms_layout__WEBPACK_IMPORTED_MODULE_7__, nanoid__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function chooseExperienceConfig(filterResults) {
    const configs = [];
    for (let filterResult of filterResults){
        if (filterResult.responses && filterResult.responses.length > 0 && filterResult.responses[0].content) {
            configs.push(filterResult.responses[0].content);
        }
    }
    // TODO: remove any config that sits under a category that does not apply to this product
    configs.sort((a, b)=>(b.priority || 999) - (a.priority || 999));
    return configs.pop();
}
async function getServerSideProps(context) {
    const { keys  } = context.params || {};
    const { vse  } = context.query || {};
    let key = lodash__WEBPACK_IMPORTED_MODULE_10___default().first(keys);
    const { pdpLayout  } = context.query;
    const cmsContext = await (0,_lib_cms_CmsContext__WEBPACK_IMPORTED_MODULE_3__/* .createCmsContext */ .dc)(context.req);
    const userContext = await (0,_lib_user_UserContext__WEBPACK_IMPORTED_MODULE_9__/* .createUserContext */ .v8)(context);
    const data = await (0,_lib_page_fetchStandardPageData__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
        content: {
            defaultPDPLayout: pdpLayout ? {
                id: pdpLayout
            } : {
                key: "layout/default-pdp"
            },
            productContent: {
                key: "product/" + key
            }
        }
    }, context);
    const product = await _pages_api__WEBPACK_IMPORTED_MODULE_5__.commerceApi.getProduct({
        id: key,
        ...cmsContext,
        ...userContext
    });
    if (!product) {
        return (0,_lib_page_errors_create404Error__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(data, context);
    }
    const experienceConfigRequests = [];
    // config based on category
    product.categories.forEach((category)=>{
        experienceConfigRequests.push({
            filterBy: [
                {
                    path: "/_meta/schema",
                    value: "https://demostore.amplience.com/site/experiences/category"
                },
                {
                    path: "/id",
                    value: category.id
                }
            ],
            sortBy: {
                key: "default",
                order: "desc"
            },
            page: {
                size: 1
            }
        });
    });
    let designer = product?.variants?.[0]?.attributes["designer"];
    // config based on designer
    if (designer) {
        experienceConfigRequests.push({
            filterBy: [
                {
                    path: "/_meta/schema",
                    value: "https://demostore.amplience.com/site/experiences/designer"
                },
                {
                    path: "/designer",
                    value: designer
                }
            ],
            sortBy: {
                key: "default",
                order: "desc"
            },
            page: {
                size: 1
            }
        });
    }
    // config based on SKU
    experienceConfigRequests.push({
        filterBy: [
            {
                path: "/_meta/schema",
                value: "https://demostore.amplience.com/site/experiences/product"
            },
            {
                path: "/id",
                value: product.id
            }
        ],
        sortBy: {
            key: "default",
            order: "desc"
        },
        page: {
            size: 1
        }
    });
    const experienceConfigs = await (0,_lib_cms_fetchContent__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(experienceConfigRequests, cmsContext);
    // take the most specific config
    const experienceConfig = chooseExperienceConfig(experienceConfigs) || {};
    return {
        props: {
            ...data,
            vse: vse || "",
            key,
            product,
            experienceConfig,
            forceDefaultLayout: pdpLayout != null
        }
    };
}
function ProductPage({ vse , product , content , experienceConfig , forceDefaultLayout  }) {
    const [layout] = (0,_components_core_WithVisualization__WEBPACK_IMPORTED_MODULE_4__/* .useContent */ .r0)(experienceConfig?.experience?.pdpLayout && !forceDefaultLayout ? experienceConfig?.experience?.pdpLayout : content.defaultPDPLayout, vse);
    const [productContent] = (0,_components_core_WithVisualization__WEBPACK_IMPORTED_MODULE_4__/* .useContent */ .r0)(content.productContent, vse);
    const compositeProduct = {
        ...product,
        ...productContent
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product_WithProduct__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        product: compositeProduct,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                flexGrow: 1
            },
            children: layout && ((layout.slots || {}).main || []).map((component)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cms_layout__WEBPACK_IMPORTED_MODULE_7__/* .CmsComponent */ .D, {
                    data: component
                }, (0,nanoid__WEBPACK_IMPORTED_MODULE_11__.nanoid)()))
        })
    });
};
ProductPage.Layout = _components_core__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .Ar;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [473,675,952,664,638,153,322,506,298], () => (__webpack_exec__(3796)));
module.exports = __webpack_exports__;

})();