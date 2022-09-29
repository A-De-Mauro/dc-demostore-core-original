"use strict";
exports.id = 22;
exports.ids = [22];
exports.modules = {

/***/ 7022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Il": () => (/* reexport */ ProductCard),
  "nn": () => (/* reexport */ ProductFacet_ProductFacet),
  "eQ": () => (/* reexport */ ProductGrid_ProductGrid)
});

// UNUSED EXPORTS: ProductCardSkeleton

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
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);
// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
;// CONCATENATED MODULE: ./components/product/ProductCard/ProductCard.tsx







const styles = (theme)=>({
        root: {
            display: "flex",
            flexDirection: "column",
            border: "1px solid white",
            "&:hover": {
                border: "1px solid black"
            }
        },
        imageContainer: {
            position: "relative",
            paddingTop: "150%"
        },
        image: {
            position: "absolute",
            top: 0,
            bottom: 0,
            // height: '100%',
            width: "100%"
        },
        details: {
            marginTop: 30,
            marginBottom: 30,
            padding: 5
        },
        name: {
        },
        overview: {
            marginTop: 20
        },
        price: {
        },
        salePrice: {
            color: "#f30000",
            textDecoration: "line-through"
        },
        button: {
            marginTop: 30
        }
    });
const ProductCardSkeleton = (props)=>{
    const { classes , className , data , ...other } = props;
    const { variants , name , slug , longDescription , id  } = data;
    const variant = variants[0];
    // Smart Imaging from Amplience
    /*
     In here we need to do the following
      - if the domain is i8.amplience.net for images[0].url and images[1].url then we need to change to cdn.media.amplience.net
      - We need to append transformations at the end of this for auto-formatting: 
    */ let firstImage = "";
    let secondImage = "";
    if (variant.images) {
        if (variant.images[0] && variant.images[0].url) {
            firstImage = variant.images[0].url.replace("i8.amplience.net", "cdn.media.amplience.net");
            if (firstImage.indexOf("cdn.media.amplience.net") > 0) {
                firstImage += "?fmt=auto&qlt=default&fmt.jpeg.qlt=75&fmt.webp.qlt=60&fmt.jp2.qlt=40&w=540&upscale=false";
            }
        }
        if (variant.images[1] && variant.images[1].url) {
            secondImage = variant.images[1].url.replace("i8.amplience.net", "cdn.media.amplience.net");
            if (secondImage.indexOf("cdn.media.amplience.net") > 0) {
                secondImage += "?fmt=auto&qlt=default&fmt.jpeg.qlt=75&fmt.webp.qlt=60&fmt.jp2.qlt=40&w=540&upscale=false";
            }
        }
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/product/${id}/${slug}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: external_clsx_default()(classes.root, className),
                ...other,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: classes.imageContainer,
                        children: [
                            firstImage && secondImage && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                loading: "lazy",
                                src: `${firstImage}`,
                                onMouseOver: (e)=>e.currentTarget.src = secondImage,
                                onMouseOut: (e)=>e.currentTarget.src = firstImage,
                                className: classes.image,
                                alt: firstImage
                            }),
                            firstImage && !secondImage && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                loading: "lazy",
                                src: `${firstImage}`,
                                className: classes.image,
                                alt: firstImage
                            }),
                            secondImage && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    display: "none"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    loading: "lazy",
                                    src: `${secondImage}`,
                                    alt: secondImage
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: classes.details,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                variant: "h4",
                                component: "h4",
                                className: classes.name,
                                children: name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                variant: "body2",
                                component: "div",
                                className: classes.overview,
                                children: longDescription
                            }),
                            (!variant.salePrice || variant.listPrice === variant.salePrice || external_lodash_default().isEmpty(variant.salePrice)) && variant.listPrice,
                            variant.salePrice && variant.listPrice !== variant.salePrice && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: classes.salePrice,
                                        children: variant.listPrice
                                    }),
                                    " ",
                                    variant.salePrice
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const ProductCard = ((0,styles_.withStyles)(styles)(ProductCardSkeleton));

;// CONCATENATED MODULE: ./components/product/ProductCard/index.ts


;// CONCATENATED MODULE: ./components/product/ProductGrid/ProductGrid.tsx




const ProductGrid_styles = (theme)=>({
        root: {
            display: "grid",
            gridRowGap: 1,
            gridColumnGap: 1,
            gridTemplateColumns: "repeat(3,calc(33.3333% - 48.00016px))",
            marginBottom: 40,
            [theme.breakpoints.down("md")]: {
                gridTemplateColumns: "repeat(2,calc(50% - 1.00016px))"
            }
        }
    });
const ProductGrid = (props)=>{
    const { classes , className , children , ...other } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()(classes.root, className),
        ...other,
        children: children
    });
};
/* harmony default export */ const ProductGrid_ProductGrid = ((0,styles_.withStyles)(ProductGrid_styles)(ProductGrid));

;// CONCATENATED MODULE: ./components/product/ProductGrid/index.ts


// EXTERNAL MODULE: external "react-loading-skeleton"
var external_react_loading_skeleton_ = __webpack_require__(9012);
var external_react_loading_skeleton_default = /*#__PURE__*/__webpack_require__.n(external_react_loading_skeleton_);
;// CONCATENATED MODULE: ./components/product/ProductCardSkeleton/ProductCardSkeleton.tsx





const ProductCardSkeleton_styles = (theme)=>({
        root: {
            display: "flex",
            flexDirection: "column"
        },
        imageContainer: {
            position: "relative",
            paddingTop: "150%"
        },
        image: {
            position: "absolute",
            top: 0,
            bottom: 0,
            // height: '100%',
            width: "100%"
        },
        details: {
            marginTop: 30,
            marginBottom: 60
        }
    });
const ProductCardSkeleton_ProductCardSkeleton = (props)=>{
    const { classes , className , ...other } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_clsx_default()(classes.root, className),
        ...other,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.imageContainer,
                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_loading_skeleton_default()), {
                    className: classes.image
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.details,
                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_loading_skeleton_default()), {
                    count: 3
                })
            })
        ]
    });
};
/* harmony default export */ const product_ProductCardSkeleton_ProductCardSkeleton = ((0,styles_.withStyles)(ProductCardSkeleton_styles)(ProductCardSkeleton_ProductCardSkeleton));

;// CONCATENATED MODULE: ./components/product/ProductCardSkeleton/index.ts


// EXTERNAL MODULE: external "@mui/icons-material/ExpandMore"
var ExpandMore_ = __webpack_require__(8148);
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);
;// CONCATENATED MODULE: ./components/product/ProductFacet/ProductFacet.tsx






const ProductFacet_styles = (theme)=>({
        root: {
            "&:first-child": {
                borderTop: "1px solid #cbcbcb"
            }
        },
        accordion: {
            boxShadow: "unset",
            borderBottom: "1px solid #cbcbcb"
        },
        summary: {
            padding: 0
        },
        details: {
            padding: 0
        },
        title: {
            fontSize: 13,
            color: "#231f20",
            fontWeight: "bold",
            textTransform: "uppercase"
        },
        status: {
            marginTop: 10,
            fontSize: 12,
            color: "#666"
        }
    });
const ProductFacet = (props)=>{
    const { classes , className , title , children , ...other } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()(classes.root, className),
        ...other,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Accordion, {
            className: classes.accordion,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.AccordionSummary, {
                    expandIcon: /*#__PURE__*/ jsx_runtime_.jsx((ExpandMore_default()), {}),
                    className: classes.summary,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                className: classes.title,
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                className: classes.status,
                                children: "All"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.AccordionDetails, {
                    className: classes.details,
                    children: children
                })
            ]
        })
    });
};
/* harmony default export */ const ProductFacet_ProductFacet = ((0,styles_.withStyles)(ProductFacet_styles)(ProductFacet));

;// CONCATENATED MODULE: ./components/product/ProductFacet/index.tsx


;// CONCATENATED MODULE: ./components/product/index.ts






/***/ })

};
;