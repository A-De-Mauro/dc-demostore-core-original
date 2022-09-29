exports.id = 506;
exports.ids = [506];
exports.modules = {

/***/ 9622:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": "CmsContentItemFrame_menu__vaBKK",
	"icon": "CmsContentItemFrame_icon__VQNZU",
	"label": "CmsContentItemFrame_label__WqM1x",
	"actions": "CmsContentItemFrame_actions__1UtN7"
};


/***/ }),

/***/ 1892:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": "CmsEditionFrame_menu__ElMOp",
	"icon": "CmsEditionFrame_icon__d94T3",
	"label": "CmsEditionFrame_label__VPGwD",
	"actions": "CmsEditionFrame_actions__p9_mC"
};


/***/ }),

/***/ 6337:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": "CmsSlotFrame_menu___2N2r",
	"icon": "CmsSlotFrame_icon__j0WLa",
	"label": "CmsSlotFrame_label__NVG4r",
	"actions": "CmsSlotFrame_actions__JG9ZL"
};


/***/ }),

/***/ 3618:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "ComponentFrame_root__x2V0K",
	"content": "ComponentFrame_content__yMkpK",
	"overlay": "ComponentFrame_overlay__W_tZV",
	"menu": "ComponentFrame_menu__IK6ph"
};


/***/ }),

/***/ 9168:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Modal_root__4gN_y"
};


/***/ }),

/***/ 9662:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "PreviewToolbar_root__9RuGw",
	"info": "PreviewToolbar_info__hybz2",
	"controls": "PreviewToolbar_controls__B2TN5"
};


/***/ }),

/***/ 92:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8148);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Extension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9891);
/* harmony import */ var _mui_icons_material_Extension__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Extension__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(773);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9409);
/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4604);
/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8279);
/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_admin_AdminTheme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6255);
/* harmony import */ var _lib_config_AppContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1638);
/* harmony import */ var _panels_ComponentsPanel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7764);
/* harmony import */ var _panels_ContentPreviewPanel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5467);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_panels_ComponentsPanel__WEBPACK_IMPORTED_MODULE_13__]);
_panels_ComponentsPanel__WEBPACK_IMPORTED_MODULE_13__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















const styles = (theme)=>({
        root: {},
        logo: {
            display: "flex",
            padding: "10px 10px 4px 10px",
            justifyContent: "left"
        },
        icon: {
            marginRight: "0.4rem",
            width: 24,
            height: 24
        }
    });
const AdminPanel = (props)=>{
    const { classes , ...other } = props;
    const configArray = _lib_config_AppContext__WEBPACK_IMPORTED_MODULE_12__/* .configLocator.split */ .pT.split(":");
    const hubname = configArray[0];
    const env = configArray[1];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_AdminTheme__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classes.root,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: classes.logo,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: "/images/amplience.png",
                        width: 247,
                        height: 100,
                        alt: "amplience"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Divider, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classes.logo,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "hub"
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        children: hubname
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                marginLeft: "40px"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "env"
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        children: env
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Divider, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_7___default()), {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_8___default()), {
                            expandIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                            "aria-controls": "panel1a-content",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    className: classes.icon
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                    variant: "button",
                                    children: "Content Preview"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_9___default()), {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_panels_ContentPreviewPanel__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
                        })
                    ]
                }, "Content Preview"),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_7___default()), {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_8___default()), {
                            expandIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                            "aria-controls": "panel1a-content",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Extension__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    className: classes.icon
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                    variant: "button",
                                    children: "Components"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_9___default()), {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_panels_ComponentsPanel__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
                        })
                    ]
                }, "Components")
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_mui_styles__WEBPACK_IMPORTED_MODULE_10__.withStyles)(styles)(AdminPanel));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7764:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8506);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9181);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8823);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5953);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4848);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7749);
/* harmony import */ var _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(773);
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui__WEBPACK_IMPORTED_MODULE_2__]);
_components_ui__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const styles = (theme)=>({
        table: {
            width: "100%"
        }
    });
const VisibilityToggle = ({ selected , onClick  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.IconButton, {
        size: "small",
        color: selected ? "primary" : "default",
        onClick: onClick,
        children: [
            selected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_10___default()), {}),
            !selected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_9___default()), {})
        ]
    });
};
const ComponentsPanel = (props)=>{
    const { classes , ...other } = props;
    const { showContent , showSlots , showEditions , setShowContent , setShowSlots , setShowEditions  } = (0,_components_ui__WEBPACK_IMPORTED_MODULE_2__/* .useDebug */ .qi)();
    const toggleSlots = ()=>{
        setShowSlots(!showSlots);
    };
    const toggleContent = ()=>{
        setShowContent(!showContent);
    };
    const toggleEditions = ()=>{
        setShowEditions(!showEditions);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Table__WEBPACK_IMPORTED_MODULE_4___default()), {
            size: "small",
            className: classes.table,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_7___default()), {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_8___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6___default()), {
                                children: "Component"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6___default()), {
                                align: "right"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_5___default()), {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_8___default()), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    children: "All Content"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    align: "right",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VisibilityToggle, {
                                        selected: showContent,
                                        onClick: toggleContent
                                    })
                                })
                            ]
                        }, "content"),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_8___default()), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    children: "All Slots"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    align: "right",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VisibilityToggle, {
                                        selected: showSlots,
                                        onClick: toggleSlots
                                    })
                                })
                            ]
                        }, "slots"),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_8___default()), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    children: "All Editions"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    align: "right",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VisibilityToggle, {
                                        selected: showEditions,
                                        onClick: toggleEditions
                                    })
                                })
                            ]
                        }, "editions")
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_mui_styles__WEBPACK_IMPORTED_MODULE_3__.withStyles)(styles)(ComponentsPanel));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dc_delivery_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2324);
/* harmony import */ var dc_delivery_sdk_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dc_delivery_sdk_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_cms_CmsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9725);
/* harmony import */ var _lib_config_AppContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1638);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_7__);








const styles = (theme)=>({
        root: {
            width: "100%"
        },
        formControl: {
            marginBottom: 10
        },
        input: {},
        progress: {}
    });
const ContentPreviewPanel = (props)=>{
    const { classes , ...other } = props;
    const { cms  } = (0,_lib_config_AppContext__WEBPACK_IMPORTED_MODULE_6__/* .useAppContext */ .bp)();
    const { stagingApi: cmsContextStagingApi , timestamp  } = (0,_lib_cms_CmsContext__WEBPACK_IMPORTED_MODULE_5__/* .useCmsContext */ .Eb)() || {};
    const { reload , push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: mode , 1: setMode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{
        if (timestamp) {
            return "TIME";
        }
        if (cmsContextStagingApi) {
            return "STAGING";
        }
        return "PRODUCTION";
    });
    const { 0: date , 1: setDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{
        const dateObject = timestamp ? new Date(Number(timestamp)) : new Date();
        let value = dateObject.toISOString();
        value = value.slice(0, value.lastIndexOf("."));
        return value;
    });
    const { 0: applying , 1: setApplying  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleChangeMode = (e)=>{
        setMode(e.target.value);
    };
    const handleChangeDate = (e)=>{
        setDate(e.target.value);
    };
    const handleApply = async ()=>{
        setApplying(true);
        switch(mode){
            case "PRODUCTION":
                await fetch("/cms/preview/current");
                break;
            case "STAGING":
                await fetch(`/cms/preview/timestamp?vse=${cms.stagingApi}`);
                break;
            case "TIME":
                const factory = new dc_delivery_sdk_js__WEBPACK_IMPORTED_MODULE_4__.StagingEnvironmentFactory(cms.stagingApi);
                const timestamp = new Date(date).getTime();
                if (timestamp && cms.stagingApi) {
                    const stagingEnvironmentAtTimestamp = await factory.generateDomain({
                        timestamp: timestamp
                    });
                    await fetch(`/cms/preview/timestamp?vse=${stagingEnvironmentAtTimestamp}&timestamp=${timestamp}`);
                }
                break;
        }
        await push(window.location.href);
        setApplying(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classes.root,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                noValidate: true,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                        className: classes.formControl,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.InputLabel, {
                                children: "Mode"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Select, {
                                value: mode,
                                onChange: handleChangeMode,
                                className: classes.input,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                                        value: "PRODUCTION",
                                        children: "Production"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                                        value: "STAGING",
                                        children: "Staging"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                                        value: "TIME",
                                        children: "Time"
                                    })
                                ]
                            })
                        ]
                    }),
                    mode === "TIME" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                        className: classes.formControl,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                            id: "datetime-local",
                            label: "Start Time",
                            type: "datetime-local",
                            className: classes.input,
                            value: date,
                            onChange: handleChangeDate
                        })
                    }) : null,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            startIcon: applying && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CircularProgress, {
                                className: classes.progress,
                                size: "1em",
                                color: "primary"
                            }),
                            variant: "contained",
                            color: "primary",
                            onClick: handleApply,
                            disabled: applying,
                            children: "Preview"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_mui_styles__WEBPACK_IMPORTED_MODULE_7__.withStyles)(styles)(ContentPreviewPanel));


/***/ }),

/***/ 6255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ AdminTheme_WithAdminTheme)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./components/admin/AdminTheme/WithAdminTheme.tsx


function createAdminTheme() {
    return (0,material_.createTheme)({
        palette: {
            mode: "light"
        }
    });
}
const theme = createAdminTheme();
const WithAdminTheme = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.StyledEngineProvider, {
        injectFirst: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.ThemeProvider, {
            theme: theme,
            children: children
        })
    });
};
/* harmony default export */ const AdminTheme_WithAdminTheme = (WithAdminTheme);

;// CONCATENATED MODULE: ./components/admin/AdminTheme/index.ts



/***/ }),

/***/ 6140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ AdaptiveImageContext),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_getImageURL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6783);



const AdaptiveImageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const AdaptiveImage = (props)=>{
    const { image , transformations , children , imageRef , ...other } = props;
    if (!image) {
        return null;
    }
    const defaultImageUrl = (0,_utils_getImageURL__WEBPACK_IMPORTED_MODULE_2__/* .getImageURL */ .QW)(image, transformations);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AdaptiveImageContext.Provider, {
        value: {
            image,
            transformations
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("picture", {
            children: [
                children,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    alt: defaultImageUrl,
                    ref: imageRef,
                    src: defaultImageUrl,
                    ...other
                })
            ]
        })
    });
};
const AdaptiveImageRef = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AdaptiveImage, {
        ...props,
        imageRef: ref,
        children: props.children
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdaptiveImageRef);


/***/ }),

/***/ 3156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_getImageURL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6783);
/* harmony import */ var _AdaptiveImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6140);




const AdaptiveImageSource = (props)=>{
    const { transformations , ...other } = props;
    const { image , transformations: rootTransformations  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_AdaptiveImage__WEBPACK_IMPORTED_MODULE_3__/* .AdaptiveImageContext */ .T) || {};
    const { 0: imageUrl , 1: imageUrl2x  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const params = {
            ...rootTransformations,
            ...transformations
        };
        if (!image) {
            return [
                undefined,
                undefined
            ];
        } else {
            return [
                (0,_utils_getImageURL__WEBPACK_IMPORTED_MODULE_2__/* .getImageURL */ .QW)(image, params),
                (0,_utils_getImageURL__WEBPACK_IMPORTED_MODULE_2__/* .getImageURL */ .QW)(image, {
                    ...params,
                    width: params.width ? params.width * 2 : undefined,
                    height: params.height ? params.height * 2 : undefined
                })
            ];
        }
    }, [
        image,
        rootTransformations,
        transformations
    ]);
    return imageUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
        srcSet: `${imageUrl} 1x, ${imageUrl2x} 2x`,
        src: imageUrl,
        ...other
    }) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdaptiveImageSource);


/***/ }),

/***/ 9150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AdaptiveImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6140);
/* harmony import */ var _AdaptiveImageSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3156);
/* harmony import */ var _utils_getImageURL__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6783);





const DefaultAdaptiveImage = (props)=>{
    const { imageRef  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_AdaptiveImage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ref: imageRef,
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AdaptiveImageSource__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                media: "(min-width: 1280px)",
                type: "image/webp",
                transformations: {
                    format: _utils_getImageURL__WEBPACK_IMPORTED_MODULE_4__/* .ImageFormat.WEBP */ .D3.WEBP,
                    width: 1600,
                    aspectRatio: "2:1"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AdaptiveImageSource__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                media: "(min-width: 1280px)",
                transformations: {
                    width: 1600,
                    aspectRatio: "2:1"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AdaptiveImageSource__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                media: "(min-width: 1024px)",
                type: "image/webp",
                transformations: {
                    format: _utils_getImageURL__WEBPACK_IMPORTED_MODULE_4__/* .ImageFormat.WEBP */ .D3.WEBP,
                    width: 1280,
                    aspectRatio: "2:1"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AdaptiveImageSource__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                media: "(min-width: 1024px)",
                transformations: {
                    width: 1280,
                    aspectRatio: "2:1"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AdaptiveImageSource__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                media: "(min-width: 768px)",
                type: "image/webp",
                transformations: {
                    format: _utils_getImageURL__WEBPACK_IMPORTED_MODULE_4__/* .ImageFormat.WEBP */ .D3.WEBP,
                    width: 1024,
                    aspectRatio: "1.5:1"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AdaptiveImageSource__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                media: "(min-width: 768px)",
                transformations: {
                    width: 1024,
                    aspectRatio: "1.5:1"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AdaptiveImageSource__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                media: "(max-width: 768px)",
                type: "image/webp",
                transformations: {
                    format: _utils_getImageURL__WEBPACK_IMPORTED_MODULE_4__/* .ImageFormat.WEBP */ .D3.WEBP,
                    width: 768,
                    aspectRatio: "1:1"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AdaptiveImageSource__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                media: "(max-width: 768px)",
                transformations: {
                    width: 768,
                    aspectRatio: "1:1"
                }
            })
        ]
    });
};
const DefaultAdaptiveImageRef = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DefaultAdaptiveImage, {
        imageRef: ref,
        ...props
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultAdaptiveImageRef);


/***/ }),

/***/ 8450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W2": () => (/* reexport */ AdaptiveImageSource/* default */.Z),
  "io": () => (/* reexport */ AdaptiveImage_DefaultAdaptiveImageSkeleton),
  "ZP": () => (/* reexport */ AdaptiveImage/* default */.Z)
});

// UNUSED EXPORTS: DefaultAdaptiveImage

// EXTERNAL MODULE: ./components/cms-modern/AdaptiveImage/AdaptiveImage.tsx
var AdaptiveImage = __webpack_require__(6140);
// EXTERNAL MODULE: ./components/cms-modern/AdaptiveImage/AdaptiveImageSource.tsx
var AdaptiveImageSource = __webpack_require__(3156);
// EXTERNAL MODULE: ./components/cms-modern/AdaptiveImage/DefaultAdaptiveImage.tsx
var DefaultAdaptiveImage = __webpack_require__(9150);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-loading-skeleton"
var external_react_loading_skeleton_ = __webpack_require__(9012);
var external_react_loading_skeleton_default = /*#__PURE__*/__webpack_require__.n(external_react_loading_skeleton_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
;// CONCATENATED MODULE: ./components/cms-modern/AdaptiveImage/DefaultAdaptiveImageSkeleton.tsx





const styles = (theme)=>{
    return {
        root: {
            position: "relative",
            paddingBottom: "50%",
            ["@media (max-width: 768px)"]: {
                paddingBottom: "100%"
            },
            ["@media (min-width: 768px)"]: {
                paddingBottom: "66%"
            },
            ["@media (min-width: 1024px)"]: {
                paddingBottom: "50%"
            }
        }
    };
};
const DefaultAdaptiveImageSkeleton = (props)=>{
    const { classes , className , ...other } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_loading_skeleton_default()), {
        className: external_clsx_default()(classes.root, className),
        ...other
    });
};
/* harmony default export */ const AdaptiveImage_DefaultAdaptiveImageSkeleton = ((0,styles_.withStyles)(styles)(DefaultAdaptiveImageSkeleton));

;// CONCATENATED MODULE: ./components/cms-modern/AdaptiveImage/index.ts






/***/ }),

/***/ 6177:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _utils_getImageURL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6783);
/* harmony import */ var _AdaptiveImage_DefaultAdaptiveImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9150);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8506);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2297);
/* harmony import */ var _AdaptiveImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8450);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5611);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui__WEBPACK_IMPORTED_MODULE_5__, ___WEBPACK_IMPORTED_MODULE_6__, nanoid__WEBPACK_IMPORTED_MODULE_8__]);
([_components_ui__WEBPACK_IMPORTED_MODULE_5__, ___WEBPACK_IMPORTED_MODULE_6__, nanoid__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_9__.makeStyles)((theme)=>({
        root: {},
        image: {
            width: "100%"
        },
        imageleft: {
            width: "50%"
        },
        imageright: {
            width: "50%",
            marginLeft: "50%"
        },
        overlay: {
            [theme.breakpoints.down("md")]: {
                position: "unset !important",
                background: "red"
            }
        },
        infoPanel: {
            maxWidth: "100%"
        },
        header: {},
        subheader: {
            color: "inherit",
            fontFamily: "'Roboto', sans-serif",
            fontSize: "14px"
        },
        description: {
            fontWeight: 400,
            fontSize: "16px",
            color: "inherit",
            marginTop: 20,
            marginBottom: 20
        },
        cta: {
            marginTop: "15px !important",
            marginRight: "15px !important"
        }
    }));
const AdvancedBanner = ({ image , bgcol , textLines , ctas , overlaypanel , textPositioning ={
    textPositionHorizontal: "left",
    textPositionVertical: "middle"
} , disclaimer , ...other })=>{
    const classes = useStyles();
    const { 0: imageLoading , 1: setImageLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const handleImageLoaded = ()=>{
        setImageLoading(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (imageRef?.current?.complete && imageLoading) {
            setImageLoading(false);
        }
    }, [
        imageRef?.current?.complete,
        imageLoading
    ]);
    const { img  } = image || {};
    const transformations = {
        ...img?.image,
        upscale: false,
        strip: true,
        quality: 80,
        scaleMode: !image?.disablePoiAspectRatio ? _utils_getImageURL__WEBPACK_IMPORTED_MODULE_3__/* .ImageScaleMode.ASPECT_RATIO */ .hj.ASPECT_RATIO : undefined,
        scaleFit: !image?.disablePoiAspectRatio && img?.image?.poi && img?.image?.poi.x != -1 && img?.image?.poi.y != -1 ? _utils_getImageURL__WEBPACK_IMPORTED_MODULE_3__/* .ImageScaleFit.POINT_OF_INTEREST */ .Dz.POINT_OF_INTEREST : undefined
    };
    const isOverlayVisible = true; //bannerText?.header || bannerText?.subheader || bannerText?.description || ctaSettings?.buttonText;
    var edgePercHoriz = overlaypanel?.offsetH || "0";
    var edgePercVertical = overlaypanel?.offsetV || "0";
    var panelwidth = overlaypanel?.w ? overlaypanel?.w + "px" : null;
    var edgepadStyle = {
        right: "",
        left: "",
        top: "",
        bottom: "",
        width: panelwidth
    };
    if (textPositioning?.textPositionHorizontal === "right") {
        edgepadStyle.right = edgePercHoriz;
    }
    if (textPositioning?.textPositionHorizontal === "left") {
        edgepadStyle.left = edgePercHoriz;
    }
    if (textPositioning?.textPositionVertical === "top") {
        edgepadStyle.top = edgePercVertical;
    }
    if (textPositioning?.textPositionVertical === "bottom") {
        edgepadStyle.bottom = edgePercVertical;
    }
    var newCSS = edgepadStyle;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classes.root,
        ...other,
        style: {
            backgroundColor: bgcol ? bgcol : "white"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_5__/* .Overlay */ .aV, {
            variant: "responsive",
            floatingHorizontalAlignment: textPositioning?.textPositionHorizontal,
            floatingVerticalAlignment: textPositioning?.textPositionVertical,
            overlayStyle: newCSS,
            overlay: isOverlayVisible ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_5__/* .InfoPanel */ .VJ, {
                className: classes.infoPanel,
                variant: "absolute",
                opacity: overlaypanel?.opacity,
                col: overlaypanel?.col,
                borderStyle: overlaypanel?.borderStyle,
                children: [
                    textLines?.map((line)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            variant: line.variant,
                            align: line.align,
                            component: "h1",
                            className: classes.header,
                            style: {
                                color: line.col,
                                fontFamily: line.fontFamily,
                                whiteSpace: "pre-wrap"
                            },
                            children: line.text
                        }, (0,nanoid__WEBPACK_IMPORTED_MODULE_8__.nanoid)());
                    }),
                    ctas?.map((cta)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_6__/* .CallToAction */ .Jd, {
                            href: cta?.linkUrl,
                            className: classes.cta,
                            variant: cta?.variant,
                            children: cta?.buttonText
                        }, cta?.buttonText);
                    })
                ]
            }) : null,
            children: [
                imageLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AdaptiveImage__WEBPACK_IMPORTED_MODULE_7__/* .DefaultAdaptiveImageSkeleton */ .io, {}) : null,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        display: `${imageLoading ? "none" : "block"}`
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AdaptiveImage_DefaultAdaptiveImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        ref: imageRef,
                        onLoad: ()=>handleImageLoaded(),
                        image: img?.image.image,
                        transformations: transformations,
                        className: classes.image
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    variant: disclaimer?.variant,
                    align: disclaimer?.align,
                    component: "h1",
                    className: classes.header,
                    style: {
                        color: disclaimer?.col,
                        position: "absolute",
                        bottom: "5px",
                        width: "100%",
                        fontFamily: disclaimer?.fontFamily
                    },
                    children: disclaimer?.text
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvancedBanner);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 426:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _AdvancedBanner__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _AdvancedBanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6177);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AdvancedBanner__WEBPACK_IMPORTED_MODULE_0__]);
_AdvancedBanner__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2774:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ContentBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4652);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContentBlock__WEBPACK_IMPORTED_MODULE_2__]);
_ContentBlock__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const BannerSlot = ({ content  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContentBlock__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        content: content
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerSlot);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1660:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _BannerSlot__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _BannerSlot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2774);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BannerSlot__WEBPACK_IMPORTED_MODULE_0__]);
_BannerSlot__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9925:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_cms_modern__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2297);
/* harmony import */ var _core_WithCMSTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4525);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_cms_modern__WEBPACK_IMPORTED_MODULE_2__]);
_components_cms_modern__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_5__.makeStyles)((theme)=>({
        root: {},
        content: {
            maxWidth: 1050,
            margin: "auto"
        }
    }));
const Blog = ({ snippet , content , contentTypes =[] , theme  })=>{
    const classes = useStyles();
    const Blog = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
        className: classes.root,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cms_modern__WEBPACK_IMPORTED_MODULE_2__/* .ContentBlock */ .b0, {
                    content: snippet
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                className: classes.content,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cms_modern__WEBPACK_IMPORTED_MODULE_2__/* .ContentBlock */ .b0, {
                        content: content
                    }),
                    contentTypes.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cms_modern__WEBPACK_IMPORTED_MODULE_2__/* .ContentBlock */ .b0, {
                                content: item
                            })
                        }, index))
                ]
            })
        ]
    });
    const { themes  } = (0,_core_WithCMSTheme__WEBPACK_IMPORTED_MODULE_3__/* .useThemes */ .S)() || {};
    if (themes) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_core_WithCMSTheme__WEBPACK_IMPORTED_MODULE_3__/* .WithCMSTheme */ .$1, {
            themes: themes,
            themeOverride: theme,
            children: Blog
        });
    }
    return Blog;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8396:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _Blog__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Blog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9925);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Blog__WEBPACK_IMPORTED_MODULE_0__]);
_Blog__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2342:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1098);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_analytics__WEBPACK_IMPORTED_MODULE_3__]);
_lib_analytics__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Layout = ({ children , href , className , variant ="outlined" , ...other })=>{
    const { trackEvent  } = (0,_lib_analytics__WEBPACK_IMPORTED_MODULE_3__/* .useContentAnalytics */ .x)();
    const handleTrack = (e)=>{
        trackEvent({
            category: "Content",
            action: "ClickCta",
            label: href
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        onClick: handleTrack,
        href: href,
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(`af-call-to-action`, {
            ["af-call-to-action-dark"]: variant === "contained"
        }, className),
        ...other,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8866:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _CallToAction__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _CallToAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2342);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CallToAction__WEBPACK_IMPORTED_MODULE_0__]);
_CallToAction__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2374:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _components_cms_modern__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2297);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_cms_modern__WEBPACK_IMPORTED_MODULE_3__]);
_components_cms_modern__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Generated with util/create-component.js





const styles = (theme)=>({
        root: {},
        container: {
            border: "none"
        },
        content: {
            padding: 10
        },
        actions: {
            justifyContent: "center",
            paddingBottom: 20
        },
        links: {
            paddingLeft: 20,
            paddingRight: 20,
            color: "#fff",
            backgroundColor: "#000",
            borderRadius: 3,
            "&:hover": {
                backgroundColor: "#000"
            }
        },
        linkText: {
            color: "#fff"
        }
    });
const Card = ({ image , cardName , description , links , classes  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        item: true,
        xs: 12,
        sm: true,
        "data-testid": "Card",
        className: classes.root,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {
            className: classes.container,
            style: {
                boxShadow: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textAlign: "center"
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardContent, {
                    className: classes.content,
                    children: [
                        image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cms_modern__WEBPACK_IMPORTED_MODULE_3__/* .ContentBlock */ .b0, {
                            content: image
                        }),
                        cardName && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            variant: "h2",
                            component: "h2",
                            style: {
                                marginTop: 15,
                                marginBottom: 15
                            },
                            children: cardName
                        }),
                        description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            component: "p",
                            children: description
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardActions, {
                    className: classes.actions,
                    children: links && links.map((link, i)=>{
                        if (link.label) {
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                className: classes.links,
                                href: link.value,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                    variant: "h4",
                                    className: classes.linkText,
                                    children: link.label
                                })
                            }, i);
                        } else {
                            return null;
                        }
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_mui_styles__WEBPACK_IMPORTED_MODULE_4__.withStyles)(styles)(Card));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3869:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _Card__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2374);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Card__WEBPACK_IMPORTED_MODULE_0__]);
_Card__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3316:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3869);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Card__WEBPACK_IMPORTED_MODULE_4__]);
_Card__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Generated with util/create-component.js





const styles = (theme)=>({
        root: {
            marginTop: 30,
            marginBottom: 30
        }
    });
const CardList = ({ header , cards , classes  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        "data-testid": "CardList",
        className: classes.root,
        children: [
            header && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                variant: "h2",
                component: "h2",
                children: header
            }),
            cards && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                container: true,
                children: cards.map((card, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Card__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        ...card
                    }, Math.random().toString(36).substr(2, 9));
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_mui_styles__WEBPACK_IMPORTED_MODULE_3__.withStyles)(styles)(CardList));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5593:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _CardList__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _CardList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3316);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CardList__WEBPACK_IMPORTED_MODULE_0__]);
_CardList__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4012:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ useCmsContentItem),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CmsContentItemFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7316);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8506);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CmsContentItemFrame__WEBPACK_IMPORTED_MODULE_2__, _components_ui__WEBPACK_IMPORTED_MODULE_3__]);
([_CmsContentItemFrame__WEBPACK_IMPORTED_MODULE_2__, _components_ui__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const CmsContentItemContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function useCmsContentItem() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CmsContentItemContext);
}
const CmsContentItem = ({ content , children  })=>{
    const { showContent  } = (0,_components_ui__WEBPACK_IMPORTED_MODULE_3__/* .useDebug */ .qi)();
    if (!content || !content._meta || !content._meta.deliveryId) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CmsContentItemContext.Provider, {
        value: {
            id: content._meta.deliveryId,
            label: content._meta.deliveryKey || content._meta.name || content._meta.deliveryId,
            schema: content._meta.schema
        },
        children: !showContent ? children : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CmsContentItemFrame__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            children: children
        })
    }, content._meta.deliveryId);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CmsContentItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7316:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CmsContentItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4012);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8506);
/* harmony import */ var _CmsContentItemFrame_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9622);
/* harmony import */ var _CmsContentItemFrame_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CmsContentItemFrame_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5513);
/* harmony import */ var _lib_config_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1638);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CmsContentItem__WEBPACK_IMPORTED_MODULE_1__, _components_ui__WEBPACK_IMPORTED_MODULE_2__]);
([_CmsContentItem__WEBPACK_IMPORTED_MODULE_1__, _components_ui__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const CmsSlotFrame = ({ children  })=>{
    const { id , label , schema  } = (0,_CmsContentItem__WEBPACK_IMPORTED_MODULE_1__/* .useCmsContentItem */ .A)() || {};
    const { cms  } = (0,_lib_config_AppContext__WEBPACK_IMPORTED_MODULE_4__/* .useAppContext */ .bp)();
    const handleEdit = ()=>{
        window.open(`https://content.amplience.net/#!/${cms.hub}/authoring/content-item/edit/${id}`);
    };
    const handleView = ()=>{
        const { protocol , host  } = window.location;
        window.open(`${protocol}//${host}/visualization?content=${id}`);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__/* .ComponentFrame */ .fR, {
        menu: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_3__/* .Puzzle */ .rr, {
                    title: schema,
                    className: (_CmsContentItemFrame_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                    className: (_CmsContentItemFrame_module_css__WEBPACK_IMPORTED_MODULE_5___default().label),
                    children: label
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_CmsContentItemFrame_module_css__WEBPACK_IMPORTED_MODULE_5___default().actions),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            className: "btn btn-sm",
                            onClick: handleEdit,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_3__/* .Pencil */ .z, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            className: "btn btn-sm",
                            onClick: handleView,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_3__/* .Eye */ .bA, {})
                        })
                    ]
                })
            ]
        }),
        MenuProps: {
            className: (_CmsContentItemFrame_module_css__WEBPACK_IMPORTED_MODULE_5___default().menu)
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CmsSlotFrame);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 115:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _CmsContentItem__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _CmsContentItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4012);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CmsContentItem__WEBPACK_IMPORTED_MODULE_0__]);
_CmsContentItem__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9318:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "r": () => (/* binding */ useCmsEdition)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8506);
/* harmony import */ var _CmsEditionFrame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5388);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui__WEBPACK_IMPORTED_MODULE_2__, _CmsEditionFrame__WEBPACK_IMPORTED_MODULE_3__]);
([_components_ui__WEBPACK_IMPORTED_MODULE_2__, _CmsEditionFrame__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const CmsEditionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function useCmsEdition() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CmsEditionContext);
}
const CmsEdition = ({ content , children  })=>{
    const { showEditions  } = (0,_components_ui__WEBPACK_IMPORTED_MODULE_2__/* .useDebug */ .qi)();
    if (!content || !content._meta || !content._meta.deliveryId || !content._meta.edition) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CmsEditionContext.Provider, {
        value: {
            id: content._meta.edition.id
        },
        children: !showEditions ? children : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CmsEditionFrame__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CmsEdition);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5388:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CmsEdition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9318);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8506);
/* harmony import */ var _CmsEditionFrame_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1892);
/* harmony import */ var _CmsEditionFrame_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CmsEditionFrame_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5513);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CmsEdition__WEBPACK_IMPORTED_MODULE_2__, _components_ui__WEBPACK_IMPORTED_MODULE_3__]);
([_CmsEdition__WEBPACK_IMPORTED_MODULE_2__, _components_ui__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const CmsEditionFrame = ({ children  })=>{
    const { id  } = (0,_CmsEdition__WEBPACK_IMPORTED_MODULE_2__/* .useCmsEdition */ .r)() || {};
    const handleEdit = ()=>{
    //TODO: Generate a URL back
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_3__/* .ComponentFrame */ .fR, {
        menu: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_4__/* .Calendar */ .f, {
                    className: (_CmsEditionFrame_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                    className: (_CmsEditionFrame_module_css__WEBPACK_IMPORTED_MODULE_5___default().label),
                    children: id
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_CmsEditionFrame_module_css__WEBPACK_IMPORTED_MODULE_5___default().actions),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        className: "btn btn-sm",
                        onClick: handleEdit,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_4__/* .Pencil */ .z, {})
                    })
                })
            ]
        }),
        MenuProps: {
            className: (_CmsEditionFrame_module_css__WEBPACK_IMPORTED_MODULE_5___default().menu)
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CmsEditionFrame);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3373:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _CmsEdition__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _CmsEdition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9318);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CmsEdition__WEBPACK_IMPORTED_MODULE_0__]);
_CmsEdition__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5271:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "c": () => (/* binding */ useCmsSlot)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CmsSlotFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2821);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8506);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CmsSlotFrame__WEBPACK_IMPORTED_MODULE_2__, _components_ui__WEBPACK_IMPORTED_MODULE_3__]);
([_CmsSlotFrame__WEBPACK_IMPORTED_MODULE_2__, _components_ui__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const CmsSlotContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function useCmsSlot() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CmsSlotContext);
}
function remapLabel(label) {
    if (label === "web/homepage/content-stack") {
        return "web/homepage/body";
    }
    return label;
}
const CmsSlot = ({ content , children  })=>{
    const { showSlots  } = (0,_components_ui__WEBPACK_IMPORTED_MODULE_3__/* .useDebug */ .qi)();
    if (!content || !content._meta || !content._meta.deliveryId) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CmsSlotContext.Provider, {
        value: {
            id: content._meta.deliveryId,
            label: remapLabel(content._meta.deliveryKey || content._meta.name || content._meta.deliveryId)
        },
        children: !showSlots ? children : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CmsSlotFrame__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CmsSlot);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2821:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CmsSlot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5271);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8506);
/* harmony import */ var _CmsSlotFrame_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6337);
/* harmony import */ var _CmsSlotFrame_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_CmsSlotFrame_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5513);
/* harmony import */ var _lib_config_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1638);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CmsSlot__WEBPACK_IMPORTED_MODULE_1__, _components_ui__WEBPACK_IMPORTED_MODULE_2__]);
([_CmsSlot__WEBPACK_IMPORTED_MODULE_1__, _components_ui__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const CmsSlotFrame = ({ children  })=>{
    const { id , label  } = (0,_CmsSlot__WEBPACK_IMPORTED_MODULE_1__/* .useCmsSlot */ .c)() || {};
    const { cms  } = (0,_lib_config_AppContext__WEBPACK_IMPORTED_MODULE_4__/* .useAppContext */ .bp)();
    const handleEdit = ()=>{
        window.open(`https://content.amplience.net/#!/${cms.hub}/authoring/content-item/edit/${id}`);
    };
    const handleView = ()=>{
        const { protocol , host  } = window.location;
        window.open(`${protocol}//${host}/visualization?content=${id}`);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__/* .ComponentFrame */ .fR, {
        menu: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_3__/* .PlusSquare */ .gI, {
                    className: (_CmsSlotFrame_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                    className: (_CmsSlotFrame_module_css__WEBPACK_IMPORTED_MODULE_5___default().label),
                    children: label
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_CmsSlotFrame_module_css__WEBPACK_IMPORTED_MODULE_5___default().actions),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            className: "btn btn-sm",
                            onClick: handleEdit,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_3__/* .Pencil */ .z, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            className: "btn btn-sm",
                            onClick: handleView,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_3__/* .Eye */ .bA, {})
                        })
                    ]
                })
            ]
        }),
        MenuProps: {
            className: (_CmsSlotFrame_module_css__WEBPACK_IMPORTED_MODULE_5___default().menu)
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CmsSlotFrame);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1996:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _CmsSlot__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _CmsSlot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5271);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CmsSlot__WEBPACK_IMPORTED_MODULE_0__]);
_CmsSlot__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1154:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ContentBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4652);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5611);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContentBlock__WEBPACK_IMPORTED_MODULE_2__, nanoid__WEBPACK_IMPORTED_MODULE_3__]);
([_ContentBlock__WEBPACK_IMPORTED_MODULE_2__, nanoid__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Container = ({ contentTypes =[]  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
        children: contentTypes.map((item)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContentBlock__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    content: item
                })
            }, (0,nanoid__WEBPACK_IMPORTED_MODULE_3__.nanoid)());
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6116:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _Container__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1154);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Container__WEBPACK_IMPORTED_MODULE_0__]);
_Container__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7301:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_core_WithVisualization_WithVisualization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8019);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5611);
/* harmony import */ var _components_cms_modern_AdvancedBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(426);
/* harmony import */ var _components_cms_modern_BannerSlot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1660);
/* harmony import */ var _components_cms_modern_Blog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8396);
/* harmony import */ var _components_cms_BlogList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3088);
/* harmony import */ var _components_cms_BlogSnippet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6570);
/* harmony import */ var _components_cms_modern_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3869);
/* harmony import */ var _components_cms_modern_CardList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5593);
/* harmony import */ var _components_cms_modern_CmsContentItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(115);
/* harmony import */ var _components_cms_modern_CmsEdition__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3373);
/* harmony import */ var _components_cms_modern_CmsSlot__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1996);
/* harmony import */ var _components_cms_modern_Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6116);
/* harmony import */ var _components_cms_CuratedProductGrid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4760);
/* harmony import */ var _components_cms_modern_CustomRichText__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2991);
/* harmony import */ var _components_cms_DynamicBlogList__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7840);
/* harmony import */ var _components_cms_modern_ExternalBlock__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7434);
/* harmony import */ var _components_cms_modern_FlexibleSlot__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5673);
/* harmony import */ var _components_cms_modern_Image__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3867);
/* harmony import */ var _components_cms_modern_LandingPage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7792);
/* harmony import */ var _components_cms_modern_LocalizedBannerSlot__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(1499);
/* harmony import */ var _components_cms_modern_PersonalizedBannerSlot__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2986);
/* harmony import */ var _components_cms_ProductGrid__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(7374);
/* harmony import */ var _components_cms_modern_ProductContent__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(6462);
/* harmony import */ var _components_cms_modern_ShoppableImage__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(8199);
/* harmony import */ var _components_cms_modern_SimpleBanner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(1485);
/* harmony import */ var _components_cms_modern_Slider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(533);
/* harmony import */ var _components_cms_modern_SplitBlock__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(8114);
/* harmony import */ var _components_cms_modern_Store__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(6469);
/* harmony import */ var _components_cms_modern_Text__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(5102);
/* harmony import */ var _components_cms_modern_ThemePaletteSpec__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(5456);
/* harmony import */ var _components_cms_modern_ThemeTypographySpec__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(6272);
/* harmony import */ var _components_cms_modern_ThemeWrapper__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(580);
/* harmony import */ var _components_cms_modern_Video__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(3345);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_36__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nanoid__WEBPACK_IMPORTED_MODULE_3__, _components_cms_modern_AdvancedBanner__WEBPACK_IMPORTED_MODULE_4__, _components_cms_modern_BannerSlot__WEBPACK_IMPORTED_MODULE_5__, _components_cms_modern_Blog__WEBPACK_IMPORTED_MODULE_6__, _components_cms_BlogList__WEBPACK_IMPORTED_MODULE_7__, _components_cms_BlogSnippet__WEBPACK_IMPORTED_MODULE_8__, _components_cms_modern_Card__WEBPACK_IMPORTED_MODULE_9__, _components_cms_modern_CardList__WEBPACK_IMPORTED_MODULE_10__, _components_cms_modern_CmsContentItem__WEBPACK_IMPORTED_MODULE_11__, _components_cms_modern_CmsEdition__WEBPACK_IMPORTED_MODULE_12__, _components_cms_modern_CmsSlot__WEBPACK_IMPORTED_MODULE_13__, _components_cms_modern_Container__WEBPACK_IMPORTED_MODULE_14__, _components_cms_CuratedProductGrid__WEBPACK_IMPORTED_MODULE_15__, _components_cms_modern_CustomRichText__WEBPACK_IMPORTED_MODULE_16__, _components_cms_DynamicBlogList__WEBPACK_IMPORTED_MODULE_17__, _components_cms_modern_FlexibleSlot__WEBPACK_IMPORTED_MODULE_19__, _components_cms_modern_LandingPage__WEBPACK_IMPORTED_MODULE_21__, _components_cms_modern_LocalizedBannerSlot__WEBPACK_IMPORTED_MODULE_22__, _components_cms_modern_PersonalizedBannerSlot__WEBPACK_IMPORTED_MODULE_23__, _components_cms_ProductGrid__WEBPACK_IMPORTED_MODULE_24__, _components_cms_modern_ProductContent__WEBPACK_IMPORTED_MODULE_25__, _components_cms_modern_SimpleBanner__WEBPACK_IMPORTED_MODULE_27__, _components_cms_modern_Slider__WEBPACK_IMPORTED_MODULE_28__, _components_cms_modern_SplitBlock__WEBPACK_IMPORTED_MODULE_29__, _components_cms_modern_ThemePaletteSpec__WEBPACK_IMPORTED_MODULE_32__, _components_cms_modern_ThemeWrapper__WEBPACK_IMPORTED_MODULE_34__]);
([nanoid__WEBPACK_IMPORTED_MODULE_3__, _components_cms_modern_AdvancedBanner__WEBPACK_IMPORTED_MODULE_4__, _components_cms_modern_BannerSlot__WEBPACK_IMPORTED_MODULE_5__, _components_cms_modern_Blog__WEBPACK_IMPORTED_MODULE_6__, _components_cms_BlogList__WEBPACK_IMPORTED_MODULE_7__, _components_cms_BlogSnippet__WEBPACK_IMPORTED_MODULE_8__, _components_cms_modern_Card__WEBPACK_IMPORTED_MODULE_9__, _components_cms_modern_CardList__WEBPACK_IMPORTED_MODULE_10__, _components_cms_modern_CmsContentItem__WEBPACK_IMPORTED_MODULE_11__, _components_cms_modern_CmsEdition__WEBPACK_IMPORTED_MODULE_12__, _components_cms_modern_CmsSlot__WEBPACK_IMPORTED_MODULE_13__, _components_cms_modern_Container__WEBPACK_IMPORTED_MODULE_14__, _components_cms_CuratedProductGrid__WEBPACK_IMPORTED_MODULE_15__, _components_cms_modern_CustomRichText__WEBPACK_IMPORTED_MODULE_16__, _components_cms_DynamicBlogList__WEBPACK_IMPORTED_MODULE_17__, _components_cms_modern_FlexibleSlot__WEBPACK_IMPORTED_MODULE_19__, _components_cms_modern_LandingPage__WEBPACK_IMPORTED_MODULE_21__, _components_cms_modern_LocalizedBannerSlot__WEBPACK_IMPORTED_MODULE_22__, _components_cms_modern_PersonalizedBannerSlot__WEBPACK_IMPORTED_MODULE_23__, _components_cms_ProductGrid__WEBPACK_IMPORTED_MODULE_24__, _components_cms_modern_ProductContent__WEBPACK_IMPORTED_MODULE_25__, _components_cms_modern_SimpleBanner__WEBPACK_IMPORTED_MODULE_27__, _components_cms_modern_Slider__WEBPACK_IMPORTED_MODULE_28__, _components_cms_modern_SplitBlock__WEBPACK_IMPORTED_MODULE_29__, _components_cms_modern_ThemePaletteSpec__WEBPACK_IMPORTED_MODULE_32__, _components_cms_modern_ThemeWrapper__WEBPACK_IMPORTED_MODULE_34__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





































const ComponentMapping = {
    "https://demostore.amplience.com/content/advanced-banner": _components_cms_modern_AdvancedBanner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
    "https://demostore.amplience.com/content/blog-list": _components_cms_BlogList__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
    "https://demostore.amplience.com/content/blog-snippet": _components_cms_BlogSnippet__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
    "https://demostore.amplience.com/content/blog": _components_cms_modern_Blog__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
    "https://demostore.amplience.com/content/card-list": _components_cms_modern_CardList__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
    "https://demostore.amplience.com/content/card": _components_cms_modern_Card__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
    "https://demostore.amplience.com/content/container": _components_cms_modern_Container__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
    "https://demostore.amplience.com/content/curated-product-grid": _components_cms_CuratedProductGrid__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
    "https://demostore.amplience.com/content/dynamic-blog-list": _components_cms_DynamicBlogList__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z,
    "https://demostore.amplience.com/content/html": _components_cms_modern_ExternalBlock__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z,
    "https://demostore.amplience.com/content/image": _components_cms_modern_Image__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z,
    "https://demostore.amplience.com/content/landing-page": _components_cms_modern_LandingPage__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z,
    "https://demostore.amplience.com/content/product-grid": _components_cms_ProductGrid__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z,
    "https://demostore.amplience.com/content/rich-text": _components_cms_modern_CustomRichText__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,
    "https://demostore.amplience.com/content/shoppable-image": _components_cms_modern_ShoppableImage__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z,
    "https://demostore.amplience.com/content/simple-banner": _components_cms_modern_SimpleBanner__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z,
    "https://demostore.amplience.com/content/simple-localized-banner": _components_cms_modern_SimpleBanner__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z,
    "https://demostore.amplience.com/content/slider": _components_cms_modern_Slider__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .ZP,
    "https://demostore.amplience.com/content/split-block": _components_cms_modern_SplitBlock__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z,
    "https://demostore.amplience.com/content/store": _components_cms_modern_Store__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z,
    "https://demostore.amplience.com/content/text": _components_cms_modern_Text__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z,
    "https://demostore.amplience.com/content/theme-wrapper": _components_cms_modern_ThemeWrapper__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .Z,
    "https://demostore.amplience.com/content/video": _components_cms_modern_Video__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Z,
    "https://demostore.amplience.com/content/product": _components_cms_modern_ProductContent__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z,
    "https://demostore.amplience.com/site/palette": _components_cms_modern_ThemePaletteSpec__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .Z,
    "https://demostore.amplience.com/site/typography": _components_cms_modern_ThemeTypographySpec__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .Z,
    "https://demostore.amplience.com/slots/banner": _components_cms_modern_BannerSlot__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
    "https://demostore.amplience.com/slots/container": _components_cms_modern_BannerSlot__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
    "https://demostore.amplience.com/slots/flexible": _components_cms_modern_FlexibleSlot__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z,
    "https://demostore.amplience.com/slots/landing-page": _components_cms_modern_BannerSlot__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
    "https://demostore.amplience.com/slots/localized-banner": _components_cms_modern_LocalizedBannerSlot__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z,
    "https://demostore.amplience.com/slots/personalized-banner": _components_cms_modern_PersonalizedBannerSlot__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z
};
const ContentBlock = ({ content: originalContent , type ="CONTENT" , components =ComponentMapping  })=>{
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_36__.useRouter)() || {};
    const vse = query?.vse || "";
    // Get real-time content from original content
    const [liveContent] = (0,_components_core_WithVisualization_WithVisualization__WEBPACK_IMPORTED_MODULE_2__/* .useContent */ .r0)(originalContent, vse);
    if (!liveContent) {
        return null;
    }
    const content = liveContent;
    const Component = components[content._meta.schema];
    const children = Component ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...content
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: JSON.stringify(content)
    });
    const wrappedChildren = type === "SLOT" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cms_modern_CmsSlot__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        content: content,
        children: children
    }, (0,nanoid__WEBPACK_IMPORTED_MODULE_3__.nanoid)()) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cms_modern_CmsContentItem__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        content: content,
        children: children
    }, (0,nanoid__WEBPACK_IMPORTED_MODULE_3__.nanoid)());
    if (content._meta && content._meta.edition) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cms_modern_CmsEdition__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            content: content,
            children: wrappedChildren
        });
    }
    return wrappedChildren;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentBlock);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5778:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AdaptiveImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8450);



const SkeletonMapping = {
    "https://demostore.amplience.com/content/simple-banner": _AdaptiveImage__WEBPACK_IMPORTED_MODULE_2__/* .DefaultAdaptiveImageSkeleton */ .io,
    "https://demostore.amplience.com/content/simple-localized-banner": _AdaptiveImage__WEBPACK_IMPORTED_MODULE_2__/* .DefaultAdaptiveImageSkeleton */ .io
};
const ContentBlockSkeleton = (props)=>{
    const { schema , ...other } = props;
    const Component = SkeletonMapping[schema];
    return Component ? /*#__PURE__*/ _jsx(Component, {
        ...other
    }) : null;
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ContentBlockSkeleton)));


/***/ }),

/***/ 4652:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _ContentBlock__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _ContentBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7301);
/* harmony import */ var _ContentBlockSkeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5778);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContentBlock__WEBPACK_IMPORTED_MODULE_0__]);
_ContentBlock__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3713:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1904);
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_cms_modern__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2297);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5611);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_cms_modern__WEBPACK_IMPORTED_MODULE_3__, nanoid__WEBPACK_IMPORTED_MODULE_5__]);
([_components_cms_modern__WEBPACK_IMPORTED_MODULE_3__, nanoid__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Text = ({ text =[] , align ="left"  })=>{
    const options = {
        overrides: {
            h1: {
                component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography,
                props: {
                    variant: "h1"
                }
            },
            h2: {
                component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography,
                props: {
                    variant: "h2"
                }
            },
            h3: {
                component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography,
                props: {
                    variant: "h3"
                }
            },
            h4: {
                component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography,
                props: {
                    variant: "h4"
                }
            },
            h5: {
                component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography,
                props: {
                    variant: "h5"
                }
            },
            h6: {
                component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography,
                props: {
                    variant: "h6"
                }
            },
            p: {
                component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography,
                props: {
                    variant: "body1",
                    gutterBottom: true
                }
            },
            a: {
                component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Link
            },
            li: {
                component: ({ ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                            variant: "body1",
                            component: "span",
                            ...props
                        })
                    })
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: text.map((item)=>{
            const { type , data  } = item;
            switch(type){
                case "markdown":
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                        className: "amp-dc-text",
                        style: {
                            textAlign: align
                        },
                        children: data && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((markdown_to_jsx__WEBPACK_IMPORTED_MODULE_2___default()), {
                            options: options,
                            children: data
                        })
                    }, (0,nanoid__WEBPACK_IMPORTED_MODULE_5__.nanoid)());
                case "dc-content-link":
                    return data && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cms_modern__WEBPACK_IMPORTED_MODULE_3__/* .ContentBlock */ .b0, {
                        content: data
                    }, (0,nanoid__WEBPACK_IMPORTED_MODULE_5__.nanoid)());
                case "dc-image-link":
                    return data && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("picture", {
                        className: "amp-dc-image",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: `https://${data.defaultHost}/i/${data.endpoint}/${encodeURIComponent(data.name)}?upscale=false&strip=true`,
                            className: "amp-dc-image-pic",
                            alt: data.name
                        })
                    }, data.name);
                default:
                    return null;
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2991:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _CustomRichText__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _CustomRichText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3713);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CustomRichText__WEBPACK_IMPORTED_MODULE_0__]);
_CustomRichText__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ ExternalBlock_ExternalBlock)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./components/cms-modern/ExternalBlock/ExternalBlock.tsx



const ExternalBlock = ({ external  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        dangerouslySetInnerHTML: {
            __html: external
        }
    });
};
/* harmony default export */ const ExternalBlock_ExternalBlock = (ExternalBlock);

;// CONCATENATED MODULE: ./components/cms-modern/ExternalBlock/index.ts



/***/ }),

/***/ 796:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ContentBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4652);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5611);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContentBlock__WEBPACK_IMPORTED_MODULE_2__, nanoid__WEBPACK_IMPORTED_MODULE_3__]);
([_ContentBlock__WEBPACK_IMPORTED_MODULE_2__, nanoid__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const FlexibleSlot = ({ contentTypes =[]  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: contentTypes.map((content)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContentBlock__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                content: content
            }, (0,nanoid__WEBPACK_IMPORTED_MODULE_3__.nanoid)());
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlexibleSlot);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5673:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _FlexibleSlot__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _FlexibleSlot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(796);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FlexibleSlot__WEBPACK_IMPORTED_MODULE_0__]);
_FlexibleSlot__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Image_Image)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./components/cms-modern/Image/Image.tsx



const Image = ({ display , image , imageAltText , seoText , query , roundel  })=>{
    if (!image) {
        return null;
    }
    const getRoundelConfig = (roundel)=>{
        if (roundel && roundel[0] && roundel[0].roundel && roundel[0].roundel.name) {
            const roundelParams = [];
            let imageRoundelIndex;
            for(let x = 0; x < roundel.length; x++){
                let roundelParam = "";
                switch(roundel[x].roundelPosition){
                    case "Bottom Right":
                        roundelParam = "p1_img=";
                        imageRoundelIndex = 1;
                        break;
                    case "Bottom Left":
                        roundelParam = "p2_img=";
                        imageRoundelIndex = 2;
                        break;
                    case "Top Left":
                        roundelParam = "p3_img=";
                        imageRoundelIndex = 3;
                        break;
                    case "Top Right":
                        roundelParam = "p4_img=";
                        imageRoundelIndex = 4;
                        break;
                }
                const roundelRatio = roundel[x].roundelRatio;
                roundelParam += roundel[x].roundel.name + (roundelRatio ? "&roundelRatio" + imageRoundelIndex + "=" + roundelRatio : "");
                roundelParams.push(roundelParam);
            }
            return roundelParams.join("&");
        } else {
            return "";
        }
    };
    const getImageHost = (host)=>{
        if (host === "i1.adis.ws") {
            return "cdn.media.amplience.net";
        }
        return host;
    };
    const buildSrcUrl = ({ width , poiAspect , format  })=>{
        let baseUrl = `https://${getImageHost(image.defaultHost)}/i/${image.endpoint}/${encodeURIComponent(image.name)}`;
        if (seoText) {
            baseUrl += `/${encodeURIComponent(seoText)}`;
        }
        if (format) {
            baseUrl += `.${format}`;
        }
        let queryString = `w=${width}&upscale=false&strip=true`;
        if (display == "Point of Interest" && poiAspect) {
            queryString += `&{($root.layer0.metadata.pointOfInterest.w==0)?0.5:$root.layer0.metadata.pointOfInterest.x},{($root.layer0.metadata.pointOfInterest.w==0)?0.5:$root.layer0.metadata.pointOfInterest.y},{$root.layer0.metadata.pointOfInterest.w},{$root.layer0.metadata.pointOfInterest.h}&scaleFit=poi&sm=aspect&aspect=1:1&aspect=${poiAspect}`;
        }
        if (query) {
            queryString += `&${query}`;
        }
        if (roundel && roundel[0] && roundel[0].roundel && roundel[0].roundelPosition && roundel[0].roundelRatio) {
            queryString += `&$roundel$&${getRoundelConfig(roundel)}`;
        }
        return `${baseUrl}?${queryString}`;
    };
    const source = ({ minWidth , maxWidth , width , highDensityWidth , format , poiAspect  })=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("source", {
            srcSet: `${buildSrcUrl({
                width,
                format,
                poiAspect
            })} 1x, ${buildSrcUrl({
                width: highDensityWidth,
                format,
                poiAspect
            })}`,
            media: minWidth ? `(min-width: ${minWidth}px)` : maxWidth ? `(max-width: ${maxWidth}px)` : undefined,
            type: format ? `image/${format}` : undefined
        });
    };
    const imageTag = display == "Static" ? /*#__PURE__*/ jsx_runtime_.jsx("picture", {
        className: "amp-dc-image",
        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            loading: "lazy",
            src: `//${image.endpoint}.a.bigcontent.io/v1/static/${image.name}`,
            className: "amp-dc-image-pic",
            alt: imageAltText
        })
    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("picture", {
        className: "amp-dc-image",
        children: [
            source({
                minWidth: "1280",
                width: "1600",
                highDensityWidth: "3200",
                format: "webp",
                poiAspect: "2:1"
            }),
            source({
                minWidth: "1280",
                width: "1600",
                highDensityWidth: "3200",
                poiAspect: "2:1"
            }),
            source({
                minWidth: "1024",
                width: "1280",
                highDensityWidth: "2560",
                format: "webp",
                poiAspect: "2:1"
            }),
            source({
                minWidth: "1024",
                width: "1280",
                highDensityWidth: "2560",
                poiAspect: "2:1"
            }),
            source({
                minWidth: "768",
                width: "1024",
                highDensityWidth: "2048",
                format: "webp",
                poiAspect: "1.5:1"
            }),
            source({
                minWidth: "768",
                width: "1024",
                highDensityWidth: "2048",
                poiAspect: "1.5:1"
            }),
            source({
                maxWidth: "768",
                width: "768",
                highDensityWidth: "1536",
                format: "webp",
                poiAspect: "1:1"
            }),
            source({
                maxWidth: "768",
                width: "768",
                highDensityWidth: "1536",
                poiAspect: "1:1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                loading: "lazy",
                src: buildSrcUrl({
                    width: "1600"
                }),
                className: "amp-dc-image-pic",
                alt: imageAltText
            })
        ]
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        style: {
            position: "relative",
            width: "auto"
        },
        children: imageTag
    });
};
/* harmony default export */ const Image_Image = (Image);

;// CONCATENATED MODULE: ./components/cms-modern/Image/index.ts



/***/ }),

/***/ 6219:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ContentBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4652);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5611);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContentBlock__WEBPACK_IMPORTED_MODULE_2__, nanoid__WEBPACK_IMPORTED_MODULE_4__]);
([_ContentBlock__WEBPACK_IMPORTED_MODULE_2__, nanoid__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const LandingPage = ({ contentTypes =[] , seo ={}  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                variant: "h1",
                component: "h1",
                children: seo.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                variant: "body1",
                component: "p",
                children: seo.description
            }),
            contentTypes.map((item)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContentBlock__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        content: item
                    })
                }, (0,nanoid__WEBPACK_IMPORTED_MODULE_4__.nanoid)());
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7792:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _LandingPage__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _LandingPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6219);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LandingPage__WEBPACK_IMPORTED_MODULE_0__]);
_LandingPage__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4274:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ContentBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4652);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContentBlock__WEBPACK_IMPORTED_MODULE_2__]);
_ContentBlock__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const LocalizedBannerSlot = ({ content  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContentBlock__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        content: content
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocalizedBannerSlot);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1499:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _LocalizedBannerSlot__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _LocalizedBannerSlot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4274);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LocalizedBannerSlot__WEBPACK_IMPORTED_MODULE_0__]);
_LocalizedBannerSlot__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2666:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _components_cms_modern__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2297);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _WithLazyContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3221);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9012);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _MegaMenuSimpleBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5628);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_cms_modern__WEBPACK_IMPORTED_MODULE_3__, _MegaMenuSimpleBanner__WEBPACK_IMPORTED_MODULE_7__]);
([_components_cms_modern__WEBPACK_IMPORTED_MODULE_3__, _MegaMenuSimpleBanner__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const MegaMenu = ({ children =[] , content , handleRouteChange , closeMenu , title , href  })=>{
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)("(max-width:750px)");
    if (children.length === 0) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "megaMenu",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                href: "#",
                className: "megaMenu__back",
                onClick: closeMenu,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/images/ic-anyafinn-back.svg",
                        alt: "back"
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "Back"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                href: href || "#",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    onClick: handleRouteChange,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        className: "megaMenu__category",
                        children: [
                            " ",
                            title,
                            " "
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "megaMenu__container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "megaMenu__list__container",
                        children: children.map((child, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "megaMenu__list",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "megaMenu__subCategory",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: child.href,
                                            className: "megaMenu__list__item__link",
                                            onClick: handleRouteChange,
                                            children: child.title
                                        })
                                    }),
                                    child.children.map((child2, index2)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "megaMenu__list__item",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                href: child2.href,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "megaMenu__list__item__link",
                                                    onClick: handleRouteChange,
                                                    children: child2.title
                                                })
                                            })
                                        }, index2))
                                ]
                            }, index))
                    }),
                    !isMobile && content && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "megaMenu__content",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WithLazyContent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            request: {
                                id: content.id
                            },
                            children: ({ content: fullContent  })=>{
                                return fullContent?.image?.img?.image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cms_modern__WEBPACK_IMPORTED_MODULE_3__/* .ContentBlock */ .b0, {
                                    content: fullContent,
                                    components: {
                                        "https://demostore.amplience.com/content/simple-banner": _MegaMenuSimpleBanner__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
                                    }
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6___default()), {});
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                className: "megaMenu--divider"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MegaMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5628:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_getImageURL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6783);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8506);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2297);
/* harmony import */ var _AdaptiveImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8450);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui__WEBPACK_IMPORTED_MODULE_4__, ___WEBPACK_IMPORTED_MODULE_5__]);
([_components_ui__WEBPACK_IMPORTED_MODULE_4__, ___WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const styles = (theme)=>({
        root: {},
        image: {
            width: "100%"
        }
    });
const MegaMenuSimpleBanner = (props)=>{
    const { classes , className , image , ctaSettings , bannerText , textPositioning , ...other } = props;
    const { img  } = image || {};
    const transformations = {
        ...img.image,
        upscale: false,
        strip: true,
        quality: 80,
        scaleMode: _utils_getImageURL__WEBPACK_IMPORTED_MODULE_3__/* .ImageScaleMode.ASPECT_RATIO */ .hj.ASPECT_RATIO,
        scaleFit: img.image.poi && img.image.poi.x != -1 && img.image.poi.y != -1 ? _utils_getImageURL__WEBPACK_IMPORTED_MODULE_3__/* .ImageScaleFit.POINT_OF_INTEREST */ .Dz.POINT_OF_INTEREST : undefined
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.root, className),
        ...other,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_4__/* .Overlay */ .aV, {
            variant: "responsive",
            floatingHorizontalAlignment: "center",
            floatingVerticalAlignment: "middle",
            overlay: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_5__/* .CallToAction */ .Jd, {
                href: ctaSettings?.linkUrl,
                variant: "contained",
                children: ctaSettings?.buttonText
            }),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_AdaptiveImage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
                className: classes.image,
                image: img.image.image,
                transformations: transformations,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AdaptiveImage__WEBPACK_IMPORTED_MODULE_6__/* .AdaptiveImageSource */ .W2, {
                        type: "image/webp",
                        transformations: {
                            format: _utils_getImageURL__WEBPACK_IMPORTED_MODULE_3__/* .ImageFormat.WEBP */ .D3.WEBP,
                            width: 768,
                            aspectRatio: "1:1"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AdaptiveImage__WEBPACK_IMPORTED_MODULE_6__/* .AdaptiveImageSource */ .W2, {
                        transformations: {
                            width: 768,
                            aspectRatio: "1:1"
                        }
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_mui_styles__WEBPACK_IMPORTED_MODULE_7__.withStyles)(styles)(MegaMenuSimpleBanner));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7213:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Search_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1926);
/* harmony import */ var _MegaMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2666);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8506);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MegaMenu__WEBPACK_IMPORTED_MODULE_3__, _components_ui__WEBPACK_IMPORTED_MODULE_7__]);
([_MegaMenu__WEBPACK_IMPORTED_MODULE_3__, _components_ui__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Navigation = ({ pages , style  })=>{
    const { navigationToggle , toggleNavigation  } = (0,_components_ui__WEBPACK_IMPORTED_MODULE_7__/* .useUI */ .l8)();
    const { 0: selectedMenuKey , 1: setSelectedMenuKey  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const isRouteActive = (href)=>{
        // !!using the first word in the category slug as the current category
        // => full path should be present in slugs, and 1st level category slug shouldn't contain '-'
        // TODO: update logic or change new catalog slugs
        const [route] = router?.asPath?.match(/^(\/(category\/[^-]*)|(\/blog))/) || [
            router?.asPath
        ];
        if (href) {
            if (href.startsWith("http")) {
                const url = new URL(href);
                const path = url.href.replace(url.origin, "");
                return path === route;
            } else {
                return href === route;
            }
        }
        return false;
    };
    const handleRouteChange = ()=>{
        if (navigationToggle) {
            toggleNavigation(navigationToggle);
        }
    };
    const handleClick = (event, index)=>{
        if (navigationToggle) {
            event.preventDefault();
            setSelectedMenuKey(index);
        }
    };
    const isMenuOpen = (index)=>index === selectedMenuKey;
    const closeMenu = ()=>{
        setSelectedMenuKey(null);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: "navigation",
        style: style,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            className: "navigation__list",
            children: [
                pages.map(({ title , href , children =[] , content  }, index)=>{
                    // make sure these categories have children or they won't display properly
                    let categoriesWithChildren = children.filter((child)=>child.children.length > 0);
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        className: clsx__WEBPACK_IMPORTED_MODULE_6___default()("navigation__list__item", {
                            ["navigation__list__item--active"]: isRouteActive(href),
                            ["navigation__list__item--open"]: isMenuOpen(index)
                        }),
                        children: [
                            title && href && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                href: href,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    onClick: (event)=>children.length === 0 ? handleRouteChange() : handleClick(event, index),
                                    className: "navigation__list__item__link",
                                    children: title
                                })
                            }),
                            children.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MegaMenu__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                content: content?.menu?.content,
                                handleRouteChange: handleRouteChange,
                                closeMenu: closeMenu,
                                title: title,
                                href: href,
                                children: children
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                        ]
                    }, index);
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "navigation__list__item navigation__list__item--search",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Search_Search__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                }, pages.length)
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9999:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8506);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui__WEBPACK_IMPORTED_MODULE_1__]);
_components_ui__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const styles = (theme)=>({
        root: {
            display: "none",
            "@media (max-width: 750px)": {
                display: "flex"
            }
        },
        icons: {
            marginLeft: "-30px",
            height: "45px",
            width: "45px",
            justifyContent: "center",
            alignItems: "center"
        },
        iconImage: {
            height: "17px",
            width: "17px"
        }
    });
const NavigationToggle = ({ classes  })=>{
    const { navigationToggle , toggleNavigation  } = (0,_components_ui__WEBPACK_IMPORTED_MODULE_1__/* .useUI */ .l8)();
    const handleToggleNavigation = (event)=>{
        event.preventDefault();
        toggleNavigation(navigationToggle);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: "#",
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.root, classes.icons),
        onClick: handleToggleNavigation,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            className: classes.iconImage,
            src: "/images/ic-anyafinn-menu.svg",
            alt: "menu"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_mui_styles__WEBPACK_IMPORTED_MODULE_4__.withStyles)(styles)(NavigationToggle));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7269:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8506);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui__WEBPACK_IMPORTED_MODULE_1__]);
_components_ui__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const styles = (theme)=>({
        root: {},
        backdrop: {
            backgroundColor: "rgba(255,255,255, 0.8)",
            cursor: "pointer",
            zIndex: theme.zIndex.drawer - 1
        },
        icon: {
            display: "none",
            height: 45,
            width: 45,
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            left: "80%",
            zIndex: theme.zIndex.drawer
        },
        iconImage: {
            height: 17,
            width: 17
        },
        show: {
            display: "flex"
        }
    });
const NavigationToggleState = ({ classes , children  })=>{
    const { navigationToggle , toggleNavigation  } = (0,_components_ui__WEBPACK_IMPORTED_MODULE_1__/* .useUI */ .l8)();
    const handleToggleNavigation = ()=>{
        toggleNavigation(navigationToggle);
    };
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)("(max-width:750px)");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: navigationToggle ? "navigation--open" : "navigation--closed",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "#",
                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.icon, {
                    [classes.show]: isMobile && navigationToggle
                }),
                onClick: handleToggleNavigation,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: classes.iconImage,
                    src: "/images/ic-anyafinn-close.svg",
                    alt: "close"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Backdrop, {
                className: classes.backdrop,
                open: isMobile && navigationToggle,
                onClick: handleToggleNavigation
            }),
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_mui_styles__WEBPACK_IMPORTED_MODULE_5__.withStyles)(styles)(NavigationToggleState));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2545:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CT": () => (/* reexport safe */ _NavigationToggleState__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "Qk": () => (/* reexport safe */ _NavigationToggle__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "ZP": () => (/* reexport safe */ _Navigation__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7213);
/* harmony import */ var _NavigationToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9999);
/* harmony import */ var _NavigationToggleState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7269);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Navigation__WEBPACK_IMPORTED_MODULE_0__, _NavigationToggle__WEBPACK_IMPORTED_MODULE_1__, _NavigationToggleState__WEBPACK_IMPORTED_MODULE_2__]);
([_Navigation__WEBPACK_IMPORTED_MODULE_0__, _NavigationToggle__WEBPACK_IMPORTED_MODULE_1__, _NavigationToggleState__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9246:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_user_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6149);
/* harmony import */ var _ContentBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4652);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContentBlock__WEBPACK_IMPORTED_MODULE_3__]);
_ContentBlock__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const PersonalizedBannerSlot = ({ segments  })=>{
    const { segment: userSegment = ""  } = (0,_lib_user_UserContext__WEBPACK_IMPORTED_MODULE_2__/* .useUserContext */ .SE)() || {};
    const matchedSegment = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (!segments) return null;
        let result = segments[0];
        for (const segment of segments){
            if (segment.segment === userSegment) {
                result = segment;
            }
        }
        return result;
    }, [
        userSegment,
        segments
    ]);
    if (matchedSegment) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContentBlock__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            content: matchedSegment.content
        });
    } else {
        return null;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonalizedBannerSlot);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2986:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _PersonalizedBannerSlot__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _PersonalizedBannerSlot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9246);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PersonalizedBannerSlot__WEBPACK_IMPORTED_MODULE_0__]);
_PersonalizedBannerSlot__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6514:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1904);
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_cms_modern__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2297);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5611);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_cms_modern__WEBPACK_IMPORTED_MODULE_3__, nanoid__WEBPACK_IMPORTED_MODULE_5__]);
([_components_cms_modern__WEBPACK_IMPORTED_MODULE_3__, nanoid__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Text = ({ header , text =[] , align ="left"  })=>{
    const options = {
        overrides: {
            h1: {
                component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography,
                props: {
                    variant: "h1"
                }
            },
            h2: {
                component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography,
                props: {
                    variant: "h2"
                }
            },
            h3: {
                component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography,
                props: {
                    variant: "h3"
                }
            },
            h4: {
                component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography,
                props: {
                    variant: "h4"
                }
            },
            h5: {
                component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography,
                props: {
                    variant: "h5"
                }
            },
            h6: {
                component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography,
                props: {
                    variant: "h6"
                }
            },
            p: {
                component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography,
                props: {
                    variant: "body1",
                    gutterBottom: true
                }
            },
            a: {
                component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Link
            },
            li: {
                component: ({ ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                            variant: "body1",
                            component: "span",
                            ...props
                        })
                    })
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            header && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                variant: "h2",
                component: "h2",
                children: header
            }),
            ",",
            text.map((item)=>{
                const { type , data  } = item;
                switch(type){
                    case "markdown":
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                            className: "amp-dc-text",
                            style: {
                                textAlign: align
                            },
                            children: data && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((markdown_to_jsx__WEBPACK_IMPORTED_MODULE_2___default()), {
                                options: options,
                                children: data
                            })
                        }, (0,nanoid__WEBPACK_IMPORTED_MODULE_5__.nanoid)());
                    case "dc-content-link":
                        return data && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cms_modern__WEBPACK_IMPORTED_MODULE_3__/* .ContentBlock */ .b0, {
                            content: data
                        }, (0,nanoid__WEBPACK_IMPORTED_MODULE_5__.nanoid)());
                    case "dc-image-link":
                        return data && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("picture", {
                            className: "amp-dc-image",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `https://${data.defaultHost}/i/${data.endpoint}/${encodeURIComponent(data.name)}?upscale=false&strip=true`,
                                className: "amp-dc-image-pic",
                                alt: data.name
                            })
                        }, data.name);
                    default:
                        return null;
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6462:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _ProductContent__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _ProductContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6514);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ProductContent__WEBPACK_IMPORTED_MODULE_0__]);
_ProductContent__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Search_Search)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./lib/user/UserContext.tsx
var UserContext = __webpack_require__(6149);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/cms-modern/Search/SearchIcon.tsx


const SearchIcon = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        version: "1.1",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        x: "0px",
        y: "0px",
        viewBox: "0 0 26.6 26.6",
        style: {
            "enableBackground": "new 0 0 26.6 26.6"
        },
        xmlSpace: "preserve",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            className: "st0",
            d: "M16.4,2.8c-3.7-3.7-9.8-3.7-13.6,0c-3.7,3.7-3.7,9.8,0,13.6c3.5,3.5,9,3.7,12.8,0.7c0.3,0.8,0.7,1.6,0.7,1.6 l8,8l2.3-2.3l-8-8c0,0-0.9-0.5-1.6-0.8C20.1,11.8,19.9,6.3,16.4,2.8z M14.6,14.5c-2.7,2.7-7.2,2.7-9.9,0c-2.7-2.7-2.7-7.2,0-9.9 c2.7-2.7,7.2-2.7,9.9,0C17.3,7.4,17.3,11.8,14.6,14.5z"
        })
    });
};
/* harmony default export */ const Search_SearchIcon = (SearchIcon);

;// CONCATENATED MODULE: ./components/cms-modern/Search/SearchResultsListing.tsx



const SearchResultsListing = (props)=>{
    const { categories , designers , inspiration , searchTerm , searchResults =[]  } = props;
    if (!categories.length && !designers.length && !inspiration.length && !searchResults.length) {
        return /*#__PURE__*/ jsx_runtime_.jsx("h3", {
            className: "search__results__listing__heading",
            children: "No results found"
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "search__results__listing__list",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "search__results__listing",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            children: searchResults.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "search__results__listing__heading",
                                        children: "Products"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "search__results__section",
                                        children: searchResults.map(({ id , name , variants , href  }, index)=>{
                                            // Need to manipulate the image url for smart imaging and resize for performance
                                            let firstImage = "";
                                            if (variants[0].images) {
                                                if (variants[0].images[0] && variants[0].images[0].url) {
                                                    firstImage = variants[0].images[0].url.replace("i8.amplience.net", "cdn.media.amplience.net");
                                                    if (firstImage.indexOf("cdn.media.amplience.net") > 0) {
                                                        firstImage += "?fmt=auto&qlt=default&fmt.jpeg.qlt=75&fmt.webp.qlt=60&fmt.jp2.qlt=40&w=50&h=50&upscale=false&unsharp=0,1,1,7";
                                                    }
                                                }
                                            }
                                            let price = variants[0].prices.list;
                                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: href,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "search__results__listing__term",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                loading: "lazy",
                                                                alt: name,
                                                                src: firstImage,
                                                                width: "50",
                                                                height: "50"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "search__results__listing__term",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "search__results__listing__name",
                                                                    children: name
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "search__results__listing__price",
                                                                    children: price
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }, index);
                                        })
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "search__results__listing",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                categories.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "search__results__listing__heading",
                                            children: "Categories"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "search__results__section",
                                            children: categories.map(({ label , count , href  }, index)=>{
                                                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: href,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "search__results__listing__icon",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Search_SearchIcon, {})
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                className: "search__results__listing__term",
                                                                children: [
                                                                    searchTerm,
                                                                    " in"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "search__results__listing__result",
                                                                children: label
                                                            })
                                                        ]
                                                    })
                                                }, index);
                                            })
                                        })
                                    ]
                                }),
                                designers.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "search__results__listing__heading",
                                            children: "Designers"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "search__results__section",
                                            children: designers.map(({ label , count  }, index)=>{
                                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "search__results__listing__icon",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Search_SearchIcon, {})
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "search__results__listing__term",
                                                            children: [
                                                                searchTerm,
                                                                " in"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "search__results__listing__result",
                                                            children: label
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "search__results__listing__count",
                                                            children: [
                                                                "(",
                                                                count,
                                                                ")"
                                                            ]
                                                        })
                                                    ]
                                                }, index);
                                            })
                                        })
                                    ]
                                }),
                                inspiration.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "search__results__listing__heading",
                                            children: "Inspiration"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "search__results__section",
                                            children: inspiration.map(({ label , href , count  }, index)=>{
                                                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        href: href,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "search__results__listing__icon",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Search_SearchIcon, {})
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                className: "search__results__listing__term",
                                                                children: [
                                                                    searchTerm,
                                                                    " in"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "search__results__listing__result",
                                                                children: label
                                                            })
                                                        ]
                                                    })
                                                }, index);
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Search_SearchResultsListing = (SearchResultsListing);

// EXTERNAL MODULE: ./components/core/Masthead/NavigationContext.tsx
var NavigationContext = __webpack_require__(8468);
// EXTERNAL MODULE: ./lib/cms/CmsContext.tsx
var CmsContext = __webpack_require__(9725);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);
// EXTERNAL MODULE: ./pages/api/index.ts
var api = __webpack_require__(2153);
// EXTERNAL MODULE: ./lib/config/AppContext.tsx
var AppContext = __webpack_require__(1638);
;// CONCATENATED MODULE: ./components/cms-modern/Search/SearchResults.tsx







function generatePath(path, child) {
    if (child.title) {
        return `${path ? path + " > " : ""}${child.title}`;
    } else {
        return "";
    }
}
function find(needle, haystack) {
    return haystack && haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
}
function findNode(term, currentNode, path = "") {
    var i, currentChild, result;
    let results = [];
    if (find(term, currentNode.title)) {
        results.push({
            label: generatePath(path, currentNode),
            href: currentNode.href
        });
        return results;
    }
    for(i = 0; i < currentNode.children.length; i += 1){
        currentChild = currentNode.children[i];
        results = [
            ...findNode(term, currentChild, generatePath(path, currentNode)),
            ...results, 
        ];
    }
    return results;
}
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}


const SearchResults = (props)=>{
    const { rootItems  } = (0,NavigationContext/* useNavigation */.H)();
    const { searchTerm  } = props;
    const { 0: designers , 1: setDesigners  } = (0,external_react_.useState)([]);
    const { 0: searchResults , 1: setSearchResults  } = (0,external_react_.useState)([]);
    const { 0: categories , 1: setCategories  } = (0,external_react_.useState)([]);
    const { 0: inspiration , 1: setInspiration  } = (0,external_react_.useState)([]);
    const { stagingApi  } = (0,CmsContext/* useCmsContext */.Eb)() || {};
    const cmsContext = (0,CmsContext/* useCmsContext */.Eb)();
    const userContext = (0,UserContext/* useUserContext */.SE)();
    const { algolia , cms  } = (0,AppContext/* useAppContext */.bp)();
    const fetchResults = ()=>{
        const { algoliasearch  } = window;
        const searchClient = algoliasearch(algolia.appId, algolia.apiKey);
        const indexName = stagingApi ? `${cms.hub}.blog-staging` : `${cms.hub}.blog-production`;
        // this code searches in algolia for matching blog posts?
        searchClient.search([
            {
                indexName,
                query: searchTerm
            }, 
        ]).then((algoliaResponse)=>{
            const result = algoliaResponse.results[0].hits.map((hit)=>{
                return {
                    label: hit.snippet.title,
                    href: "/blog/" + hit._meta.deliveryId + "/" + hit._meta.name
                };
            });
            setInspiration(result.slice(0, 10));
        });
        // end algolia
        if (!external_lodash_default().isEmpty(searchTerm)) {
            api.commerceApi.getProducts({
                keyword: searchTerm,
                ...cmsContext,
                ...userContext
            }).then((products)=>{
                setSearchResults(products.map((prod)=>({
                        ...prod,
                        href: `/product/${prod.id}/${prod.slug}`
                    })));
            });
        }
        // ? category names?
        setCategories(findNode(searchTerm, {
            children: rootItems
        }).filter(onlyUnique).map(({ label , href  })=>({
                label,
                href
            })).slice(0, 10));
    };
    (0,external_react_.useEffect)(fetchResults, [
        cms.hub,
        searchTerm,
        algolia,
        cmsContext,
        rootItems,
        stagingApi,
        userContext
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `search__results ${searchTerm ? "search__results--active" : ""}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "search__results__container",
            children: /*#__PURE__*/ jsx_runtime_.jsx(Search_SearchResultsListing, {
                searchTerm: searchTerm,
                searchResults: searchResults,
                designers: designers,
                categories: categories,
                inspiration: inspiration
            })
        })
    });
};
/* harmony default export */ const Search_SearchResults = (SearchResults);

;// CONCATENATED MODULE: ./components/cms-modern/Search/Search.tsx






const Search = ()=>{
    const { 0: searchTerm , 1: setSearchTerm  } = (0,external_react_.useState)("");
    const handleClick = ()=>{
        setSearchTerm("");
    };
    (0,external_react_.useEffect)(function() {
        window.addEventListener("click", handleClick);
        return function cleanup() {
            window.removeEventListener("click", handleClick);
        };
    }, []);
    const { language  } = (0,UserContext/* useUserContext */.SE)();
    const debouncedResults = (0,external_react_.useMemo)(()=>{
        return external_lodash_default().debounce((x)=>setSearchTerm(x.target.value), 300);
    }, []);
    (0,external_react_.useEffect)(()=>{
        return ()=>{
            debouncedResults.cancel();
        };
    });
    let timeout = undefined;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "search",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "search__icon",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Search_SearchIcon, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: "search__input",
                type: "text",
                placeholder: language === "de" ? "SUCHE" : "SEARCH",
                onClick: (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                },
                onChange: debouncedResults
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Search_SearchResults, {
                searchTerm: searchTerm
            })
        ]
    });
};
/* harmony default export */ const Search_Search = (Search);


/***/ }),

/***/ 8199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ ShoppableImage_ShoppableImage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./components/cms-modern/ShoppableImage/polygon.tsx


const pointsToSVGPath = (points)=>{
    let path = "";
    const bounds = {
        x: Infinity,
        y: Infinity,
        w: -Infinity,
        h: -Infinity
    };
    for (let point of points){
        if (point.x < bounds.x) bounds.x = point.x;
        if (point.y < bounds.y) bounds.y = point.y;
        if (point.x > bounds.w) bounds.w = point.x;
        if (point.y > bounds.h) bounds.h = point.y;
    }
    bounds.w -= bounds.x;
    bounds.h -= bounds.y;
    for(let i = 0; i < points.length; i++){
        const point1 = points[i];
        const x = point1.x - bounds.x;
        const y = point1.y - bounds.y;
        if (i === 0) {
            path += `M ${x} ${y}`;
        } else {
            path += ` L ${x} ${y}`;
        }
    }
    path += " Z";
    return {
        bounds,
        path
    };
};
function Polygon({ polygon , className , size , polyRef , svgProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: `0 0 ${polygon.bounds.w} ${polygon.bounds.h}`,
        className: className,
        preserveAspectRatio: "none",
        style: {
            width: polygon.bounds.w * size.x,
            height: polygon.bounds.h * size.y,
            left: polygon.bounds.x * size.x,
            top: polygon.bounds.y * size.y,
            cursor: "pointer",
            strokeWidth: 1.5 / size.x + "px",
            strokeDasharray: 5 / size.x + "px"
        },
        ...svgProps,
        ref: polyRef,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: polygon.path
        })
    });
}
const PolygonForwardRef = /*#__PURE__*/ external_react_default().forwardRef((props, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Polygon, {
        ...props,
        svgProps: props,
        polyRef: ref
    });
});

// EXTERNAL MODULE: ./components/core/WithWindowContext/WindowContext.tsx
var WindowContext = __webpack_require__(9460);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/cms-modern/ShoppableImage/ShoppableImage.tsx







const ShoppableImage = ({ shoppableImage , //scaleToFit = false,
hotspotHide =false , polygonHide =false , focalPointHide =true  })=>{
    const windowSize = (0,WindowContext/* useWindowContext */.V)();
    const refContainer = (0,external_react_.useRef)(null);
    const { 0: loaded , 1: setLoaded  } = (0,external_react_.useState)(false);
    const { 0: imageSize , 1: setImageSize  } = (0,external_react_.useState)({
        w: -1,
        h: -1
    });
    const { 0: canvasSize , 1: setCanvasSize  } = (0,external_react_.useState)({
        w: -1,
        h: -1
    });
    const { 0: targetWidth , 1: setTargetWidth  } = (0,external_react_.useState)(canvasSize.w);
    const { 0: targetHeight , 1: setTargetHeight  } = (0,external_react_.useState)(800);
    const { 0: targetAspect , 1: setTargetAspect  } = (0,external_react_.useState)(targetWidth / targetHeight);
    const { 0: ratio , 1: setRatio  } = (0,external_react_.useState)({
        w: 1,
        h: 1
    });
    const gcd = (a, b)=>{
        return b == 0 ? a : gcd(b, a % b);
    };
    const { 0: imageRef , 1: setImageRef  } = (0,external_react_.useState)(/*#__PURE__*/ external_react_default().createRef());
    const canvasRef = /*#__PURE__*/ external_react_default().createRef();
    const resizeWindow = ()=>{
        if (refContainer.current) {
            setCanvasSize({
                w: refContainer.current.offsetWidth,
                h: refContainer.current.offsetHeight
            });
            setTargetWidth(refContainer.current.offsetWidth);
        }
        if (imageRef.current) {
            setTargetHeight(imageRef.current.height);
            setTargetWidth(imageRef.current.width);
            //console.log('ratio:', ratio)
            //console.log('imageSize:', imageSize) 
            console.log("targetHeight:", targetHeight);
        }
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("resize", resizeWindow);
        return ()=>window.removeEventListener("resize", resizeWindow);
    }, [
        loaded
    ]);
    (0,external_react_.useLayoutEffect)(()=>{
        if (refContainer.current) {
            setCanvasSize({
                w: refContainer.current.offsetWidth,
                h: refContainer.current.offsetHeight
            });
            setTargetWidth(refContainer.current.offsetWidth);
            console.log("tW", targetWidth);
        }
    }, [
        refContainer
    ]);
    const imageLoaded = ()=>{
        setLoaded(true);
        if (imageRef.current) {
            setImageSize({
                w: imageRef.current.width,
                h: imageRef.current.height
            });
            setTargetHeight(imageRef.current.height);
        }
    };
    const hotspotTitle = (hotspot)=>{
        return `Target: ${hotspot.target} | Selector: ${hotspot.selector}`;
    };
    const hotspotLink = (hotspot)=>{
        let url = "#";
        //console.log('hotspot: ', hotspot);
        switch(hotspot.selector){
            case ".page":
                url = `/${hotspot.target}`;
                break;
            case ".link":
                url = hotspot.target;
                break;
            case ".product":
                url = `/product/${hotspot.target}`;
                break;
            case ".category":
                url = `/category/${hotspot.target}`;
                break;
            default:
                break;
        }
        return url;
    };
    let polygons = [];
    if (shoppableImage && shoppableImage.polygons) {
        polygons = shoppableImage.polygons.map((polygon)=>pointsToSVGPath(polygon.points));
    }
    let imageStyle = {};
    let canvas;
    const hiddenHotspots = hotspotHide;
    const hiddenPolygons = polygonHide;
    const hiddenFocalPoint = focalPointHide;
    if (shoppableImage && loaded) {
        const widthBounded = imageSize.w / imageSize.h > targetAspect;
        let canvasHeight, canvasWidth;
        let offsetTransform = "";
        canvasHeight = widthBounded ? imageSize.h / imageSize.w * targetWidth : targetHeight;
        canvasWidth = widthBounded ? targetWidth : imageSize.w / imageSize.h * targetHeight;
        imageStyle = widthBounded ? {
            minWidth: "100%"
        } : {
            minHeight: "100%"
        };
        const size = {
            x: canvasWidth,
            y: canvasHeight
        };
        const scaleSize = (poi)=>{
            return {
                transform: `translate(${poi.x * canvasWidth}px, ${poi.y * canvasHeight}px)`,
                width: poi.w * canvasWidth + "px",
                height: poi.h * canvasHeight + "px"
            };
        };
        const scaleHotspot = (hotspot)=>{
            return {
                transform: `translate(${hotspot.points.x * canvasWidth}px, ${hotspot.points.y * canvasHeight}px)`,
                cursor: "pointer"
            };
        };
        canvas = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "amp-vis-page__interactive",
            style: {
                width: canvasWidth + "px",
                height: canvasHeight + "px",
                transform: offsetTransform
            },
            ref: canvasRef,
            children: [
                shoppableImage && shoppableImage.polygons && polygons.map((polygon, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: hotspotLink(shoppableImage.polygons[index]),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Tooltip, {
                            title: hotspotTitle(shoppableImage.polygons[index]),
                            followCursor: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(PolygonForwardRef, {
                                size: size,
                                className: external_clsx_default()("amp-vis-page__polygon", {
                                    "amp-vis-page__polygon--hidden": hiddenPolygons
                                }),
                                polygon: polygon
                            })
                        })
                    }, index)),
                shoppableImage && shoppableImage.hotspots && shoppableImage.hotspots.map((hotspot, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: hotspotLink(hotspot),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Tooltip, {
                            title: hotspotTitle(hotspot),
                            followCursor: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: external_clsx_default()("amp-vis-page__hotspot", {
                                    "amp-vis-page__hotspot--hidden": hiddenHotspots
                                }),
                                style: scaleHotspot(hotspot),
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    viewBox: "0 0 20 20",
                                    className: external_clsx_default()("amp-vis-page__hotspotplus"),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                            x: "9.15",
                                            y: "3.5",
                                            width: "1.7",
                                            height: "13"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                            y: "9.15",
                                            x: "3.5",
                                            width: "13",
                                            height: "1.7"
                                        })
                                    ]
                                })
                            })
                        })
                    }, index))
            ]
        });
    }
    let image;
    let src = "invalid";
    if (shoppableImage && shoppableImage.image.id) {
        const imageHost = shoppableImage.image.defaultHost;
        src = `https://${imageHost}/i/${shoppableImage.image.endpoint}/${encodeURIComponent(shoppableImage.image.name)}`;
        image = /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: src,
            ref: imageRef,
            alt: "",
            crossOrigin: "anonymous",
            className: external_clsx_default()("amp-vis-page__image", {
                "amp-vis-page__image--hide": !loaded
            }),
            style: {
                width: "100%",
                height: "auto"
            },
            onLoad: ()=>{
                imageLoaded();
            }
        });
    }
    (0,external_react_.useEffect)(()=>{
        setLoaded(false);
    }, [
        src
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: refContainer,
        className: "amp-vis-page",
        style: {
            height: targetHeight
        },
        children: [
            image || false,
            image && !loaded && /*#__PURE__*/ jsx_runtime_.jsx(material_.CircularProgress, {}),
            canvas || false
        ]
    });
};
/* harmony default export */ const ShoppableImage_ShoppableImage = (ShoppableImage);

;// CONCATENATED MODULE: ./components/cms-modern/ShoppableImage/index.ts



/***/ }),

/***/ 8350:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _utils_getImageURL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6783);
/* harmony import */ var _AdaptiveImage_DefaultAdaptiveImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9150);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8506);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2297);
/* harmony import */ var _AdaptiveImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8450);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui__WEBPACK_IMPORTED_MODULE_5__, ___WEBPACK_IMPORTED_MODULE_6__]);
([_components_ui__WEBPACK_IMPORTED_MODULE_5__, ___WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_8__.makeStyles)((theme)=>({
        root: {},
        image: {
            width: "100%",
            minHeight: "50%"
        },
        overlay: {
            [theme.breakpoints.down("md")]: {
                position: "unset !important",
                background: "red"
            }
        },
        infoPanel: {},
        subheader: {
            color: "inherit",
            fontFamily: "'Roboto', sans-serif",
            fontSize: "14px"
        },
        description: {
            fontWeight: 400,
            fontSize: "16px",
            color: "inherit",
            marginTop: 20,
            marginBottom: 20
        },
        cta: {
            marginTop: 15
        }
    }));
const SimpleBanner = ({ image , bannerText , ctaSettings , opacity =0.9 , textPositioning ={
    textPositionHorizontal: "right",
    textPositionVertical: "middle"
} , ...other })=>{
    const classes = useStyles();
    const { 0: imageLoading , 1: setImageLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const handleImageLoaded = ()=>{
        setImageLoading(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (imageRef?.current?.complete && imageLoading) {
            setImageLoading(false);
        }
    }, [
        imageRef?.current?.complete,
        imageLoading
    ]);
    const { img  } = image || {};
    const transformations = {
        ...img?.image,
        upscale: false,
        strip: true,
        quality: 80,
        scaleMode: !image?.disablePoiAspectRatio ? _utils_getImageURL__WEBPACK_IMPORTED_MODULE_3__/* .ImageScaleMode.ASPECT_RATIO */ .hj.ASPECT_RATIO : undefined,
        scaleFit: !image?.disablePoiAspectRatio && img?.image?.poi && img?.image?.poi.x != -1 && img?.image?.poi.y != -1 ? _utils_getImageURL__WEBPACK_IMPORTED_MODULE_3__/* .ImageScaleFit.POINT_OF_INTEREST */ .Dz.POINT_OF_INTEREST : undefined
    };
    const isOverlayVisible = bannerText?.header || bannerText?.subheader || bannerText?.description || ctaSettings?.buttonText;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        className: classes.root,
        ...other,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_5__/* .Overlay */ .aV, {
            variant: "responsive",
            floatingHorizontalAlignment: textPositioning?.textPositionHorizontal,
            floatingVerticalAlignment: textPositioning?.textPositionVertical,
            overlay: isOverlayVisible ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_5__/* .InfoPanel */ .VJ, {
                className: classes.infoPanel,
                variant: "absolute",
                opacity: opacity,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        variant: "h1",
                        component: "h1",
                        children: bannerText?.header
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        variant: "h5",
                        component: "h5",
                        className: classes.subheader,
                        children: bannerText?.subheader
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        variant: "subtitle1",
                        component: "p",
                        className: classes.description,
                        children: bannerText?.description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_6__/* .CallToAction */ .Jd, {
                        href: ctaSettings?.linkUrl,
                        className: classes.cta,
                        variant: "contained",
                        children: ctaSettings?.buttonText
                    })
                ]
            }) : null,
            children: [
                imageLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AdaptiveImage__WEBPACK_IMPORTED_MODULE_7__/* .DefaultAdaptiveImageSkeleton */ .io, {}) : null,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    style: {
                        display: `${imageLoading ? "none" : "block"}`
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AdaptiveImage_DefaultAdaptiveImage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        ref: imageRef,
                        onLoad: ()=>handleImageLoaded(),
                        image: img?.image.image,
                        transformations: transformations,
                        className: classes.image
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleBanner);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1485:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _SimpleBanner__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _SimpleBanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8350);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SimpleBanner__WEBPACK_IMPORTED_MODULE_0__]);
_SimpleBanner__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2352:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5001);
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ContentBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4652);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SliderNextButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7765);
/* harmony import */ var _SliderBackButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5413);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContentBlock__WEBPACK_IMPORTED_MODULE_2__]);
_ContentBlock__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const styles = (theme)=>({
        root: {},
        dots: {
            backgroundColor: "#ccc",
            "&:disabled": {
                backgroundColor: "#999"
            },
            overflow: "hidden",
            border: 0,
            marginRight: 15,
            width: 12,
            height: 12,
            borderRadius: "50%"
        }
    });
const Slider = ({ classes , className , loop =false , navigationDots , slides =[]  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.root, className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.CarouselProvider, {
            naturalSlideWidth: 100,
            naturalSlideHeight: 50,
            visibleSlides: 1,
            totalSlides: slides.length,
            infinite: loop,
            isPlaying: loop,
            interval: 5000,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.Slider, {
                    children: slides.map((slide, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.Slide, {
                            index: index,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContentBlock__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                content: slide
                            })
                        }, index);
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SliderBackButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SliderNextButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    style: {
                        textAlign: "center",
                        paddingTop: 15,
                        paddingBottom: 30
                    },
                    children: navigationDots && slides.map((slide, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_1__.Dot, {
                            slide: index,
                            className: classes.dots
                        }, index);
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_mui_styles__WEBPACK_IMPORTED_MODULE_4__.withStyles)(styles)(Slider));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5001);
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5513);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);






const styles = (theme)=>({
        root: {
            display: "contents"
        },
        icon: {
            cursor: "pointer",
            width: 40,
            height: 40,
            fill: "#fff",
            background: "rgba(0, 0, 0, 0.5)",
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)"
        }
    });
const SliderBackButton = (props)=>{
    const { classes , className , ...other } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__.ButtonBack, {
        className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.root, className),
        ...other,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_4__/* .NavigatePrevious */ .rx, {
            className: classes.icon
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__.withStyles)(styles)(SliderBackButton));


/***/ }),

/***/ 7765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5001);
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5513);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);






const styles = (theme)=>({
        root: {
            display: "contents"
        },
        icon: {
            cursor: "pointer",
            width: 40,
            height: 40,
            fill: "#fff",
            background: "rgba(0, 0, 0, 0.5)",
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)"
        }
    });
const SliderNextButton = (props)=>{
    const { classes , className , ...other } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_3__.ButtonNext, {
        className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.root, className),
        ...other,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_4__/* .NavigateNext */ .Xi, {
            className: classes.icon
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__.withStyles)(styles)(SliderNextButton));


/***/ }),

/***/ 533:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* reexport safe */ _Slider__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2352);
/* harmony import */ var _SliderBackButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5413);
/* harmony import */ var _SliderNextButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7765);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Slider__WEBPACK_IMPORTED_MODULE_0__]);
_Slider__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4725:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_cms_modern__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2297);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_cms_modern__WEBPACK_IMPORTED_MODULE_2__]);
_components_cms_modern__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const styles = (theme)=>({
        root: {
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            flexBasis: 1,
            flex: 1,
            [theme.breakpoints.down("md")]: {
                flexDirection: "column",
                alignItems: "unset"
            }
        },
        column: {
            [theme.breakpoints.down("md")]: {
                maxWidth: "100% !important"
            },
            paddingTop: "20px"
        }
    });
const SplitBlock = (props)=>{
    const { classes , split ="50/50" , bgcol , content =[] , ...other } = props;
    const splits = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return split.split("/").map((x)=>Number(x) / 100);
    }, [
        split
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classes.root,
        style: {
            backgroundColor: bgcol
        },
        children: content.map((content, index)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classes.column,
                style: {
                    flex: splits[index],
                    maxWidth: `${splits[index] * 100}%`
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cms_modern__WEBPACK_IMPORTED_MODULE_2__/* .ContentBlock */ .b0, {
                    content: content
                })
            }, index);
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_mui_styles__WEBPACK_IMPORTED_MODULE_3__.withStyles)(styles)(SplitBlock));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8114:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _SplitBlock__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _SplitBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4725);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SplitBlock__WEBPACK_IMPORTED_MODULE_0__]);
_SplitBlock__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Store_Store)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "markdown-to-jsx"
var external_markdown_to_jsx_ = __webpack_require__(1904);
var external_markdown_to_jsx_default = /*#__PURE__*/__webpack_require__.n(external_markdown_to_jsx_);
// EXTERNAL MODULE: ./components/cms-modern/Image/index.ts + 1 modules
var Image = __webpack_require__(3867);
;// CONCATENATED MODULE: ./components/cms-modern/Store/Store.tsx





const Store = (props)=>{
    const { details , keyElements , image , locationName  } = props;
    const options = {
        overrides: {
            h1: {
                component: material_.Typography,
                props: {
                    variant: "h1"
                }
            },
            h2: {
                component: material_.Typography,
                props: {
                    variant: "h2"
                }
            },
            h3: {
                component: material_.Typography,
                props: {
                    variant: "h3"
                }
            },
            h4: {
                component: material_.Typography,
                props: {
                    variant: "h4",
                    style: {
                        marginTop: 20,
                        marginBottom: 10
                    }
                }
            },
            h5: {
                component: material_.Typography,
                props: {
                    variant: "h5"
                }
            },
            h6: {
                component: material_.Typography,
                props: {
                    variant: "h6"
                }
            },
            p: {
                component: material_.Typography,
                props: {
                    variant: "body1",
                    style: {
                        marginBottom: 10
                    }
                }
            },
            a: {
                component: material_.Link
            },
            li: {
                component: ({ ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            variant: "body1",
                            component: "span",
                            ...props
                        })
                    })
            }
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            style: {
                marginBottom: 30
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    container: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                            href: "/store",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                style: {
                                    marginTop: 20,
                                    marginBottom: 20
                                },
                                variant: "h2",
                                component: "h2",
                                children: "Our Stores"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                            style: {
                                marginTop: 20,
                                marginBottom: 20
                            },
                            variant: "h2",
                            component: "h2",
                            children: [
                                "\xa0> ",
                                locationName
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    container: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                            item: true,
                            xs: 12,
                            sm: 6,
                            style: {
                                paddingTop: 30
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                    query: {},
                                    image: image,
                                    alt: locationName
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                    container: true,
                                    style: {
                                        marginTop: 20
                                    },
                                    children: [
                                        keyElements.parking && /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                            item: true,
                                            xs: 4,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Paper, {
                                                style: {
                                                    backgroundColor: "#f6f6f6",
                                                    padding: 15,
                                                    paddingBottom: 30,
                                                    margin: 5
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                        variant: "body2",
                                                        children: "Parking space"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            style: {
                                                                width: "50%",
                                                                paddingTop: 20
                                                            },
                                                            src: "/images/parking.svg",
                                                            alt: "parking"
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        keyElements.lateOpening && /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                            item: true,
                                            xs: 4,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Paper, {
                                                style: {
                                                    backgroundColor: "#f6f6f6",
                                                    padding: 15,
                                                    paddingBottom: 30,
                                                    margin: 5
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                        variant: "body2",
                                                        children: "Late opening"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            style: {
                                                                margin: "auto",
                                                                width: "50%",
                                                                paddingTop: 20
                                                            },
                                                            src: "/images/late-opening.svg",
                                                            alt: "late opening"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            xs: 12,
                            sm: 6,
                            style: {
                                paddingTop: 10,
                                paddingLeft: 30
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_markdown_to_jsx_default()), {
                                style: {
                                    witdh: "70%"
                                },
                                options: options,
                                children: details
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Store_Store = (Store);

;// CONCATENATED MODULE: ./components/cms-modern/Store/index.ts



/***/ }),

/***/ 5102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Text_Text)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "markdown-to-jsx"
var external_markdown_to_jsx_ = __webpack_require__(1904);
var external_markdown_to_jsx_default = /*#__PURE__*/__webpack_require__.n(external_markdown_to_jsx_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./components/cms-modern/Text/Text.tsx




const Text = ({ text , align  })=>{
    const options = {
        overrides: {
            h1: {
                component: material_.Typography,
                props: {
                    variant: "h1"
                }
            },
            h2: {
                component: material_.Typography,
                props: {
                    variant: "h2"
                }
            },
            h3: {
                component: material_.Typography,
                props: {
                    variant: "h3"
                }
            },
            h4: {
                component: material_.Typography,
                props: {
                    variant: "h4"
                }
            },
            h5: {
                component: material_.Typography,
                props: {
                    variant: "h5"
                }
            },
            h6: {
                component: material_.Typography,
                props: {
                    variant: "h6"
                }
            },
            p: {
                component: material_.Typography,
                props: {
                    variant: "body1"
                }
            },
            a: {
                component: material_.Link
            },
            li: {
                component: ({ ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            variant: "body1",
                            component: "span",
                            ...props
                        })
                    })
            }
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        style: {
            textAlign: align
        },
        children: text && /*#__PURE__*/ jsx_runtime_.jsx((external_markdown_to_jsx_default()), {
            options: options,
            children: text
        })
    });
};
/* harmony default export */ const Text_Text = (Text);

;// CONCATENATED MODULE: ./components/cms-modern/Text/index.ts



/***/ }),

/***/ 441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5611);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nanoid__WEBPACK_IMPORTED_MODULE_4__]);
nanoid__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const styles = (theme)=>({
        root: {
            flexGrow: 1,
            paddingTop: 50,
            paddingBottom: 50
        },
        paper: {
            height: 120,
            width: "90%"
        }
    });
const ThemePaletteSpec = (props)=>{
    const { classes , ...other } = props;
    const paletteList = [
        {
            name: "primary",
            palette: props.primary
        },
        {
            name: "secondary",
            palette: props.secondary
        },
        {
            name: "error",
            palette: props.error
        },
        {
            name: "warning",
            palette: props.warning
        },
        {
            name: "success",
            palette: props.success
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        container: true,
        spacing: 3,
        className: classes.root,
        justifyContent: "center",
        children: paletteList.map((color)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                container: true,
                spacing: 3,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        xs: 4,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Paper, {
                                style: {
                                    backgroundColor: color.palette.light
                                },
                                className: classes.paper
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                variant: "body1",
                                component: "p",
                                children: [
                                    color.name,
                                    " light"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                variant: "caption",
                                component: "p",
                                children: color.palette.light
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        xs: 4,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Paper, {
                                style: {
                                    backgroundColor: color.palette.main
                                },
                                className: classes.paper
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                variant: "body1",
                                component: "p",
                                children: [
                                    color.name,
                                    " main"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                variant: "caption",
                                component: "p",
                                children: color.palette.main
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        xs: 4,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Paper, {
                                style: {
                                    backgroundColor: color.palette.dark
                                },
                                className: classes.paper
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                variant: "body1",
                                component: "p",
                                children: [
                                    color.name,
                                    " dark"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                variant: "caption",
                                component: "p",
                                children: color.palette.dark
                            })
                        ]
                    })
                ]
            }, (0,nanoid__WEBPACK_IMPORTED_MODULE_4__.nanoid)());
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_mui_styles__WEBPACK_IMPORTED_MODULE_3__.withStyles)(styles)(ThemePaletteSpec));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5456:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _ThemePaletteSpec__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _ThemePaletteSpec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(441);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ThemePaletteSpec__WEBPACK_IMPORTED_MODULE_0__]);
_ThemePaletteSpec__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ ThemeTypographySpec_ThemeTypographySpec)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
;// CONCATENATED MODULE: ./components/cms-modern/ThemeTypographySpec/ThemeTypographySpec.tsx




const styles = (theme)=>({
        root: {
            marginTop: 30,
            marginBottom: 30
        },
        typo: {
            marginTop: 10,
            marginBottom: 10
        }
    });
const ThemeTypographySpec = (props)=>{
    const { classes , ...other } = props;
    const theme = (0,material_.createTheme)({
        typography: {
            fontFamily: props.fontFamily,
            fontSize: props.fontSize,
            htmlFontSize: props.htmlFontSize,
            h1: {
                fontFamily: props.h1.fontFamily,
                fontWeight: props.h1.fontWeight,
                fontSize: props.h1.fontSize,
                color: props.h1.color,
                lineHeight: props.h1.lineHeight,
                letterSpacing: props.h1.letterSpacing,
                textTransform: props.h1.textTransform
            },
            h2: {
                fontFamily: props.h2.fontFamily,
                fontWeight: props.h2.fontWeight,
                fontSize: props.h2.fontSize,
                color: props.h2.color,
                lineHeight: props.h2.lineHeight,
                letterSpacing: props.h2.letterSpacing,
                textTransform: props.h2.textTransform
            },
            h3: {
                fontFamily: props.h3.fontFamily,
                fontWeight: props.h3.fontWeight,
                fontSize: props.h3.fontSize,
                color: props.h3.color,
                lineHeight: props.h3.lineHeight,
                letterSpacing: props.h3.letterSpacing,
                textTransform: props.h3.textTransform
            },
            h4: {
                fontFamily: props.h4.fontFamily,
                fontWeight: props.h4.fontWeight,
                fontSize: props.h4.fontSize,
                color: props.h4.color,
                lineHeight: props.h4.lineHeight,
                letterSpacing: props.h4.letterSpacing,
                textTransform: props.h4.textTransform
            },
            h5: {
                fontFamily: props.h5.fontFamily,
                fontWeight: props.h5.fontWeight,
                fontSize: props.h5.fontSize,
                color: props.h5.color,
                lineHeight: props.h5.lineHeight,
                letterSpacing: props.h5.letterSpacing,
                textTransform: props.h5.textTransform
            },
            h6: {
                fontFamily: props.h6.fontFamily,
                fontWeight: props.h6.fontWeight,
                fontSize: props.h6.fontSize,
                color: props.h6.color,
                lineHeight: props.h6.lineHeight,
                letterSpacing: props.h6.letterSpacing,
                textTransform: props.h6.textTransform
            },
            subtitle1: {
                fontFamily: props.subtitle1.fontFamily,
                fontWeight: props.subtitle1.fontWeight,
                fontSize: props.subtitle1.fontSize,
                color: props.subtitle1.color,
                lineHeight: props.subtitle1.lineHeight,
                letterSpacing: props.subtitle1.letterSpacing,
                textTransform: props.subtitle1.textTransform
            },
            subtitle2: {
                fontFamily: props.subtitle2.fontFamily,
                fontWeight: props.subtitle2.fontWeight,
                fontSize: props.subtitle2.fontSize,
                color: props.subtitle2.color,
                lineHeight: props.subtitle2.lineHeight,
                letterSpacing: props.subtitle2.letterSpacing,
                textTransform: props.subtitle2.textTransform
            },
            body1: {
                fontFamily: props.body1.fontFamily,
                fontWeight: props.body1.fontWeight,
                fontSize: props.body1.fontSize,
                color: props.body1.color,
                lineHeight: props.body1.lineHeight,
                letterSpacing: props.body1.letterSpacing,
                textTransform: props.body1.textTransform
            },
            body2: {
                fontFamily: props.body2.fontFamily,
                fontWeight: props.body2.fontWeight,
                fontSize: props.body2.fontSize,
                color: props.body2.color,
                lineHeight: props.body2.lineHeight,
                letterSpacing: props.body2.letterSpacing,
                textTransform: props.body2.textTransform
            },
            button: {
                fontFamily: props.button.fontFamily,
                fontWeight: props.button.fontWeight,
                fontSize: props.button.fontSize,
                color: props.button.color,
                lineHeight: props.button.lineHeight,
                letterSpacing: props.button.letterSpacing,
                textTransform: props.button.textTransform
            },
            caption: {
                fontFamily: props.caption.fontFamily,
                fontWeight: props.caption.fontWeight,
                fontSize: props.caption.fontSize,
                color: props.caption.color,
                lineHeight: props.caption.lineHeight,
                letterSpacing: props.caption.letterSpacing,
                textTransform: props.caption.textTransform
            },
            overline: {
                fontFamily: props.overline.fontFamily,
                fontWeight: props.overline.fontWeight,
                fontSize: props.overline.fontSize,
                color: props.caption.color,
                lineHeight: props.overline.lineHeight,
                letterSpacing: props.overline.letterSpacing,
                textTransform: props.overline.textTransform
            }
        }
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.StyledEngineProvider, {
        injectFirst: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.ThemeProvider, {
            theme: theme,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classes.root,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        className: classes.typo,
                        variant: "h1",
                        component: "h1",
                        children: `Heading 1 (H1) - ${props.h1.fontFamily}; font-size: ${props.h1.fontSize};`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        className: classes.typo,
                        variant: "h2",
                        component: "h2",
                        children: `Heading 2 (H2) - ${props.h2.fontFamily}; font-size: ${props.h2.fontSize};`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        className: classes.typo,
                        variant: "h3",
                        component: "h3",
                        children: `Heading 3 (H3) - ${props.h3.fontFamily}; font-size: ${props.h3.fontSize};`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        className: classes.typo,
                        variant: "h4",
                        component: "h4",
                        children: `Heading 4 (H4) - ${props.h4.fontFamily}; font-size: ${props.h4.fontSize};`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        className: classes.typo,
                        variant: "h5",
                        component: "h5",
                        children: `Heading 5 (H5) - ${props.h5.fontFamily}; font-size: ${props.h5.fontSize};`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        className: classes.typo,
                        variant: "h6",
                        component: "h6",
                        children: `Heading 6 (H6) - ${props.h6.fontFamily}; font-size: ${props.h6.fontSize};`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        className: classes.typo,
                        variant: "subtitle1",
                        component: "p",
                        children: `Subtitle 1 (S1) - ${props.subtitle1.fontFamily}; font-size: ${props.subtitle1.fontSize};`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        className: classes.typo,
                        variant: "subtitle2",
                        component: "p",
                        children: `Subtitle 2 (S2) - ${props.subtitle2.fontFamily}; font-size: ${props.subtitle2.fontSize};`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        className: classes.typo,
                        variant: "body1",
                        component: "p",
                        children: `Body 1 (B1) - ${props.body1.fontFamily}; font-size: ${props.body1.fontSize};`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        className: classes.typo,
                        variant: "body2",
                        component: "p",
                        children: `Body 2 (B2) - ${props.body2.fontFamily}; font-size: ${props.body2.fontSize};`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        className: classes.typo,
                        variant: "button",
                        component: "button",
                        children: `Button 2 (BU) - ${props.button.fontFamily}; font-size: ${props.button.fontSize};`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        className: classes.typo,
                        variant: "caption",
                        component: "p",
                        children: `Caption (CA) - ${props.caption.fontFamily}; font-size: ${props.caption.fontSize};`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        className: classes.typo,
                        variant: "overline",
                        component: "p",
                        children: `overline (O) - ${props.overline.fontFamily}; font-size: ${props.overline.fontSize};`
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const ThemeTypographySpec_ThemeTypographySpec = ((0,styles_.withStyles)(styles)(ThemeTypographySpec));

;// CONCATENATED MODULE: ./components/cms-modern/ThemeTypographySpec/index.ts



/***/ }),

/***/ 4628:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ContentBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4652);
/* harmony import */ var _components_core_WithCMSTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4525);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5611);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContentBlock__WEBPACK_IMPORTED_MODULE_2__, nanoid__WEBPACK_IMPORTED_MODULE_5__]);
([_ContentBlock__WEBPACK_IMPORTED_MODULE_2__, nanoid__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const ThemeWrapper = ({ theme , components =[]  })=>{
    const { themes  } = (0,_components_core_WithCMSTheme__WEBPACK_IMPORTED_MODULE_3__/* .useThemes */ .S)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_core_WithCMSTheme__WEBPACK_IMPORTED_MODULE_3__/* .WithCMSTheme */ .$1, {
        themes: themes,
        themeOverride: theme,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
            children: components.map((item)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContentBlock__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        content: item
                    })
                }, (0,nanoid__WEBPACK_IMPORTED_MODULE_5__.nanoid)());
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeWrapper);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 580:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _ThemeWrapper__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _ThemeWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4628);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ThemeWrapper__WEBPACK_IMPORTED_MODULE_0__]);
_ThemeWrapper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Video_Video)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./components/cms-modern/Video/Video.tsx



const Video = ({ video  })=>{
    if (!video) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("video", {
                className: "amp-dc-video",
                style: {
                    width: "100%"
                },
                poster: `https://${video.defaultHost}/v/${video.endpoint}/${video.name}?protocol=https`,
                controls: true,
                src: `https://${video.defaultHost}/v/${video.endpoint}/${video.name}/mp4_720p?protocol=https`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("source", {
                        src: `https://${video.defaultHost}/v/${video.endpoint}/${video.name}/mp4_720p?protocol=https`,
                        "data-res": "High",
                        "data-bitrate": "2119",
                        "data-label": "High",
                        type: "video/mpeg4"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("source", {
                        src: `https://${video.defaultHost}/v/${video.endpoint}/${video.name}/mp4_480p?protocol=https`,
                        "data-res": "Medium",
                        "data-bitrate": "689",
                        "data-label": "Medium",
                        type: "video/mpeg4"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("source", {
                        src: `https://${video.defaultHost}/v/${video.endpoint}/${video.name}/webm_480p?protocol=https`,
                        "data-res": "Medium",
                        "data-bitrate": "624",
                        "data-label": "Medium",
                        type: "video/webm"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                className: "pause-button inactive"
            })
        ]
    });
};
/* harmony default export */ const Video_Video = (Video);

;// CONCATENATED MODULE: ./components/cms-modern/Video/index.ts



/***/ }),

/***/ 3221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ WithLazyContent_WithLazyContent)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./lib/cms/fetchContent.ts
var fetchContent = __webpack_require__(5723);
// EXTERNAL MODULE: ./lib/page/pageContent/enrichPageContent.ts + 1 modules
var enrichPageContent = __webpack_require__(2993);
// EXTERNAL MODULE: ./lib/cms/CmsContext.tsx
var CmsContext = __webpack_require__(9725);
;// CONCATENATED MODULE: ./components/cms-modern/WithLazyContent/WithLazyContent.tsx




const WithLazyContent = (props)=>{
    const { request , children , cmsContextOverrides , enrichContent  } = props;
    const { 0: content , 1: setContent  } = (0,external_react_.useState)(null);
    const cmsContext = (0,CmsContext/* useCmsContext */.Eb)();
    (0,external_react_.useEffect)(()=>{
        let isMounted = true;
        const fetcher = async (input)=>{
            let fetchedContent = await (0,fetchContent/* default */.Z)([
                input
            ], {
                ...cmsContext,
                ...cmsContextOverrides
            }).then((x)=>x[0]);
            if (!fetchContent/* default */.Z) {
                return null;
            }
            if (enrichContent) {
                fetchedContent = await (0,enrichPageContent/* enrichPageContent */.j)(fetchedContent, cmsContext);
            }
            return fetchedContent;
        };
        fetcher(request).then((content)=>{
            if (isMounted) {
                setContent(content);
            }
        });
        return ()=>{
            isMounted = false;
        };
    }, [
        request,
        cmsContext,
        cmsContextOverrides,
        enrichContent
    ]);
    return children({
        content
    });
};
/* harmony default export */ const WithLazyContent_WithLazyContent = (WithLazyContent);

;// CONCATENATED MODULE: ./components/cms-modern/WithLazyContent/index.ts



/***/ }),

/***/ 2297:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jd": () => (/* reexport safe */ _CallToAction__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "b0": () => (/* reexport safe */ _ContentBlock__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _ContentBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4652);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6116);
/* harmony import */ var _CallToAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8866);
/* harmony import */ var _WithLazyContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3221);
/* harmony import */ var _AdvancedBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(426);
/* harmony import */ var _BannerSlot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1660);
/* harmony import */ var _ExternalBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7434);
/* harmony import */ var _FlexibleSlot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5673);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3867);
/* harmony import */ var _LandingPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7792);
/* harmony import */ var _LocalizedBannerSlot__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1499);
/* harmony import */ var _PersonalizedBannerSlot__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2986);
/* harmony import */ var _SimpleBanner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1485);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(533);
/* harmony import */ var _SplitBlock__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8114);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6469);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5102);
/* harmony import */ var _ThemePaletteSpec__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5456);
/* harmony import */ var _ThemeTypographySpec__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6272);
/* harmony import */ var _ThemeWrapper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(580);
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3345);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContentBlock__WEBPACK_IMPORTED_MODULE_0__, _Container__WEBPACK_IMPORTED_MODULE_1__, _CallToAction__WEBPACK_IMPORTED_MODULE_2__, _AdvancedBanner__WEBPACK_IMPORTED_MODULE_4__, _BannerSlot__WEBPACK_IMPORTED_MODULE_5__, _FlexibleSlot__WEBPACK_IMPORTED_MODULE_7__, _LandingPage__WEBPACK_IMPORTED_MODULE_9__, _LocalizedBannerSlot__WEBPACK_IMPORTED_MODULE_10__, _PersonalizedBannerSlot__WEBPACK_IMPORTED_MODULE_11__, _SimpleBanner__WEBPACK_IMPORTED_MODULE_12__, _Slider__WEBPACK_IMPORTED_MODULE_13__, _SplitBlock__WEBPACK_IMPORTED_MODULE_14__, _ThemePaletteSpec__WEBPACK_IMPORTED_MODULE_17__, _ThemeWrapper__WEBPACK_IMPORTED_MODULE_19__]);
([_ContentBlock__WEBPACK_IMPORTED_MODULE_0__, _Container__WEBPACK_IMPORTED_MODULE_1__, _CallToAction__WEBPACK_IMPORTED_MODULE_2__, _AdvancedBanner__WEBPACK_IMPORTED_MODULE_4__, _BannerSlot__WEBPACK_IMPORTED_MODULE_5__, _FlexibleSlot__WEBPACK_IMPORTED_MODULE_7__, _LandingPage__WEBPACK_IMPORTED_MODULE_9__, _LocalizedBannerSlot__WEBPACK_IMPORTED_MODULE_10__, _PersonalizedBannerSlot__WEBPACK_IMPORTED_MODULE_11__, _SimpleBanner__WEBPACK_IMPORTED_MODULE_12__, _Slider__WEBPACK_IMPORTED_MODULE_13__, _SplitBlock__WEBPACK_IMPORTED_MODULE_14__, _ThemePaletteSpec__WEBPACK_IMPORTED_MODULE_17__, _ThemeWrapper__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);























__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6380:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cms_modern_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3867);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5611);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nanoid__WEBPACK_IMPORTED_MODULE_5__]);
nanoid__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const BlogCard = ({ snippet , id , viewType , title , blogdate , description , author , image , category =[] , keywords =[] , _meta  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("amp-dc-blog-card", "amp-dc-snippet", "js_dc_snippet"),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            href: `/blog/post/${_meta?.deliveryKey}/${lodash__WEBPACK_IMPORTED_MODULE_4___default().camelCase(title)}`,
            children: [
                image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "amp-dc-image",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_cms_modern_Image__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        alt: title,
                        ...image
                    })
                }) : null,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "amp-dc-category-container",
                    children: category.map((item)=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "amp-dc-category",
                                    children: item
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "line"
                                })
                            ]
                        }, (0,nanoid__WEBPACK_IMPORTED_MODULE_5__.nanoid)());
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "amp-dc-blog-card-text-wrap",
                    children: [
                        title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "amp-dc-title",
                            children: title
                        }),
                        blogdate && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "amp-dc-blogdate",
                            children: blogdate
                        }),
                        description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "amp-dc-description",
                            children: description
                        }),
                        viewType !== "list" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                author && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "amp-dc-author",
                                    children: [
                                        "@",
                                        author
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "amp-dc-keywords-container",
                                    children: keywords.map((keyword)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "amp-dc-keyword",
                                            children: keyword
                                        }, keyword))
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "amp-dc-card-link",
                                children: "Read More"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9259:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _BlogCard__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _BlogCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6380);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BlogCard__WEBPACK_IMPORTED_MODULE_0__]);
_BlogCard__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 378:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BlogCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9259);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BlogCard__WEBPACK_IMPORTED_MODULE_3__]);
_BlogCard__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const BlogList = ({ blogs =[]  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "amp-dc-blog-list",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "amp-dc-blog-list-wrap",
            children: blogs.map((blog, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("amp-dc-bloglist-item-container", {
                        ["blog-clear"]: index === 2
                    }),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BlogCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        ...blog.snippet,
                        viewType: "list"
                    })
                }, `blog-${index}`))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3088:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _BlogList__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _BlogList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(378);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BlogList__WEBPACK_IMPORTED_MODULE_0__]);
_BlogList__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3397:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_cms_modern__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2297);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_cms_modern__WEBPACK_IMPORTED_MODULE_2__]);
_components_cms_modern__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const BlogSnippet = ({ image , title , blogdate , author , category , description , tags , cta , keywords  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "amp-dc-banner js_dc_banner",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "amp-dc-banner-wrapper",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "amp-dc-banner-pic-wrap",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cms_modern__WEBPACK_IMPORTED_MODULE_2__/* .ContentBlock */ .b0, {
                            content: image
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "amp-dc-snippet-info-wrap",
                children: [
                    category?.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                        variant: "body2",
                        component: "div",
                        className: "amp-dc-snippet-info-wrap__categories",
                        children: category.join(", ")
                    }) : null,
                    title ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                        variant: "h1",
                        component: "div",
                        children: title
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "amp-dc-snippet-info-wrap__description",
                        children: [
                            author ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                variant: "h4",
                                component: "div",
                                className: "amp-dc-author",
                                children: author
                            }) : null,
                            blogdate ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                variant: "h4",
                                component: "div",
                                className: "amp-dc-blogdate",
                                children: blogdate
                            }) : null
                        ]
                    }),
                    description ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                        variant: "h2",
                        component: "p",
                        children: description
                    }) : null
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogSnippet);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6570:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _BlogSnippet__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _BlogSnippet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3397);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_BlogSnippet__WEBPACK_IMPORTED_MODULE_0__]);
_BlogSnippet__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9247:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1098);
/* harmony import */ var _lib_cms_CmsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9725);
/* harmony import */ var _pages_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2153);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8506);
/* harmony import */ var _CuratedProductGridCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4653);
/* harmony import */ var _lib_user_UserContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6149);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_analytics__WEBPACK_IMPORTED_MODULE_3__, _components_ui__WEBPACK_IMPORTED_MODULE_6__, _CuratedProductGridCard__WEBPACK_IMPORTED_MODULE_7__]);
([_lib_analytics__WEBPACK_IMPORTED_MODULE_3__, _components_ui__WEBPACK_IMPORTED_MODULE_6__, _CuratedProductGridCard__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const styles = (theme)=>({
        root: {},
        list: {
            listStyle: "none",
            margin: 0,
            padding: 0
        },
        item: {
            margin: theme.spacing()
        }
    });
const CuratedProductGrid = ({ classes , className , header , products =[] , navigationDots , ...other })=>{
    // Retrieve locale/country code from context - TODO: get language from user context
    const { locale: cmsLocale  } = (0,_lib_cms_CmsContext__WEBPACK_IMPORTED_MODULE_4__/* .useCmsContext */ .Eb)() || {};
    let locale = cmsLocale || "en";
    if (locale.indexOf("-") > 0) {
        locale = locale.split("-")[0];
    }
    const { trackEvent  } = (0,_lib_analytics__WEBPACK_IMPORTED_MODULE_3__/* .useContentAnalytics */ .x)();
    const { 0: productList , 1: setProductList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const cmsContext = (0,_lib_cms_CmsContext__WEBPACK_IMPORTED_MODULE_4__/* .useCmsContext */ .Eb)();
    const userContext = (0,_lib_user_UserContext__WEBPACK_IMPORTED_MODULE_8__/* .useUserContext */ .SE)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let isMounted = true;
        _pages_api__WEBPACK_IMPORTED_MODULE_5__.commerceApi.getProducts({
            productIds: products.join(","),
            ...cmsContext,
            ...userContext
        }).then((prods)=>{
            if (isMounted) {
                // reorder based on the original ordering because these are not ordered
                let orderedProducts = [];
                lodash__WEBPACK_IMPORTED_MODULE_9___default().each(products, (product)=>{
                    let ordered = lodash__WEBPACK_IMPORTED_MODULE_9___default().find(prods, (prod)=>prod.id === product);
                    if (ordered) {
                        orderedProducts.push(ordered);
                    }
                });
                setProductList(orderedProducts);
            }
        });
        return ()=>{
            isMounted = false;
        };
    }, [
        products,
        cmsContext,
        userContext
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.root, className),
        ...other,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_6__/* .Section */ .$0, {
            title: header,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_6__/* .LegacySlider */ .IJ, {
                children: productList.map((result, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_6__/* .LegacySliderSlide */ .Ms, {
                        index: index,
                        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()({
                            ["amp-length-2"]: productList.length < 3,
                            ["amp-length-3"]: productList.length >= 3
                        }),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CuratedProductGridCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            data: result,
                            className: classes.item
                        })
                    }, index);
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_mui_styles__WEBPACK_IMPORTED_MODULE_10__.withStyles)(styles)(CuratedProductGrid));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4864:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_cms_CmsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9725);
/* harmony import */ var _lib_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1098);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_analytics__WEBPACK_IMPORTED_MODULE_6__]);
_lib_analytics__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const styles = (theme)=>({
        root: {},
        imageContainer: {
            position: "relative"
        },
        image: {
            top: 0,
            bottom: 0,
            width: "100%"
        },
        details: {
            marginTop: 30,
            marginBottom: 60
        },
        name: {
            wordWrap: "break-word",
            whiteSpace: "normal"
        },
        overview: {
            marginTop: 20
        },
        price: {},
        button: {
            marginTop: 30
        }
    });
const CuratedProductGridCard = (props)=>{
    const { classes , className , data: result , ...other } = props;
    const { trackEvent  } = (0,_lib_analytics__WEBPACK_IMPORTED_MODULE_6__/* .useContentAnalytics */ .x)();
    const { variants , name , slug , id  } = result;
    const { prices , listPrice , images  } = variants[0];
    const handleClickProduct = (event)=>{
        trackEvent({
            category: "Product",
            action: "Click",
            label: slug,
            value: prices.list
        });
    };
    // Retrieve locale/country code from context
    const { locale: cmsLocale  } = (0,_lib_cms_CmsContext__WEBPACK_IMPORTED_MODULE_5__/* .useCmsContext */ .Eb)() || {};
    let locale = cmsLocale || "en";
    if (locale.indexOf("-") > 0) {
        locale = locale.split("-")[0];
    }
    const imageUrl = result.overrides?.image ? `https://${result.overrides.image?.defaultHost}/i/${result.overrides.image?.endpoint}/${result.overrides.image?.name}` : `${result.variants[0].images[0].url}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: `/product/${result.id}/${result.slug}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            onClick: handleClickProduct,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.root, className),
                ...other,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classes.imageContainer,
                        children: result.variants[0] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: imageUrl,
                            className: classes.image,
                            alt: result.slug
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classes.details,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                variant: "h4",
                                component: "h4",
                                className: classes.name,
                                children: result.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                variant: "body1",
                                component: "div",
                                className: classes.overview,
                                children: result.description
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                variant: "body2",
                                component: "div",
                                className: classes.price,
                                children: listPrice
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_mui_styles__WEBPACK_IMPORTED_MODULE_7__.withStyles)(styles)(CuratedProductGridCard));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4653:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _CuratedProductGridCard__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _CuratedProductGridCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4864);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CuratedProductGridCard__WEBPACK_IMPORTED_MODULE_0__]);
_CuratedProductGridCard__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4760:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _CuratedProductGrid__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _CuratedProductGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9247);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CuratedProductGrid__WEBPACK_IMPORTED_MODULE_0__]);
_CuratedProductGrid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1338:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_config_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1638);
/* harmony import */ var _lib_cms_CmsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9725);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8506);
/* harmony import */ var _DynamicBlogListCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3141);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui__WEBPACK_IMPORTED_MODULE_6__, _DynamicBlogListCard__WEBPACK_IMPORTED_MODULE_7__]);
([_components_ui__WEBPACK_IMPORTED_MODULE_6__, _DynamicBlogListCard__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const styles = (theme)=>({
        root: {},
        list: {
            listStyle: "none",
            margin: 0,
            padding: 0
        },
        item: {
            margin: theme.spacing()
        }
    });
const DynamicBlogList = (props)=>{
    const { classes , className , header , tags , numItems =3 , query , ...other } = props;
    const { 0: results , 1: setResults  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { algolia , cms  } = (0,_lib_config_AppContext__WEBPACK_IMPORTED_MODULE_4__/* .useAppContext */ .bp)();
    const { stagingApi , locale  } = (0,_lib_cms_CmsContext__WEBPACK_IMPORTED_MODULE_5__/* .useCmsContext */ .Eb)() || {};
    const indexName = stagingApi ? `${cms.hub}.blog-staging` : `${cms.hub}.blog-production`;
    let searchClient;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (false) {}
    }, [
        searchClient,
        tags,
        numItems,
        locale,
        indexName
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.root, className),
        ...other,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_6__/* .Section */ .$0, {
            title: header,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_6__/* .LegacySlider */ .IJ, {
                children: results.map((result, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_6__/* .LegacySliderSlide */ .Ms, {
                        index: index,
                        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()({
                            ["amp-length-2"]: results.length < 3,
                            ["amp-length-3"]: results.length >= 3
                        }),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DynamicBlogListCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            data: result,
                            className: classes.item
                        })
                    }, index);
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_mui_styles__WEBPACK_IMPORTED_MODULE_3__.withStyles)(styles)(DynamicBlogList));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3141:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_cms_modern_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3867);
/* harmony import */ var _lib_user_UserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6149);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5611);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nanoid__WEBPACK_IMPORTED_MODULE_6__]);
nanoid__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const styles = (theme)=>({
        button: {
            fontFamily: '"Roboto Condensed",sans-serif !important',
            border: "0 !important",
            fontWeight: "400 !important",
            borderRadius: "3px !important",
            padding: "5px 30px !important",
            marginTop: 30
        }
    });
const DynamicBlogListCard = (props)=>{
    const { language  } = (0,_lib_user_UserContext__WEBPACK_IMPORTED_MODULE_5__/* .useUserContext */ .SE)();
    const { classes , data , className , ...other } = props;
    const { _meta , snippet ,  } = data;
    const { title , blogdate , description , image , category =[]  } = snippet;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("amp-dc-blog-card", "amp-dc-snippet", "js_dc_snippet", className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            href: `/blog/${_meta?.deliveryKey}`,
            children: [
                image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "amp-dc-image",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cms_modern_Image__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        alt: description,
                        ...image,
                        query: "w=500"
                    })
                }) : null,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "amp-dc-category-container",
                    children: category.map((item)=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "amp-dc-category",
                                    children: item
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "line"
                                })
                            ]
                        }, (0,nanoid__WEBPACK_IMPORTED_MODULE_6__.nanoid)());
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "amp-dc-blog-card-text-wrap",
                    children: [
                        title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            component: "div",
                            whiteSpace: "normal",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                variant: "h2",
                                component: "h2",
                                children: title
                            })
                        }),
                        blogdate && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            variant: "body2",
                            component: "p",
                            style: {
                                paddingTop: 15
                            },
                            children: blogdate
                        }),
                        description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            component: "div",
                            whiteSpace: "normal",
                            style: {
                                paddingTop: 15
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                variant: "body1",
                                component: "p",
                                children: description
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            color: "primary",
                            variant: "contained",
                            className: classes.button,
                            style: {
                                textAlign: "center",
                                textTransform: "uppercase"
                            },
                            children: language === "de" ? "WEITERLESEN" : "READ MORE"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_mui_styles__WEBPACK_IMPORTED_MODULE_7__.withStyles)(styles)(DynamicBlogListCard));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7840:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _DynamicBlogList__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _DynamicBlogList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1338);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DynamicBlogList__WEBPACK_IMPORTED_MODULE_0__]);
_DynamicBlogList__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 689:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1098);
/* harmony import */ var _lib_cms_CmsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9725);
/* harmony import */ var _lib_user_UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6149);
/* harmony import */ var _pages_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2153);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_analytics__WEBPACK_IMPORTED_MODULE_2__]);
_lib_analytics__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const ProductGrid = ({ category , query  })=>{
    const { trackEvent  } = (0,_lib_analytics__WEBPACK_IMPORTED_MODULE_2__/* .useContentAnalytics */ .x)();
    const { 0: products , 1: setProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const cmsContext = (0,_lib_cms_CmsContext__WEBPACK_IMPORTED_MODULE_3__/* .useCmsContext */ .Eb)();
    const userContext = (0,_lib_user_UserContext__WEBPACK_IMPORTED_MODULE_4__/* .useUserContext */ .SE)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let isMounted = true;
        _pages_api__WEBPACK_IMPORTED_MODULE_5__.commerceApi.getCategory({
            slug: category,
            ...cmsContext,
            ...userContext
        }).then((c)=>{
            if (isMounted && c?.products) {
                setProducts(c.products.filter((product)=>!query || product.name.toLowerCase().indexOf(query.toLowerCase()) > -1));
            }
        });
        return ()=>{
            isMounted = false;
        };
    }, [
        category,
        cmsContext,
        userContext,
        query
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "amp-dc-card-list product-grid-container",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "amp-dc-card-list-wrap product-grid",
            children: products.map((product)=>{
                const { variants =[] , name , slug , id  } = product;
                const { listPrice , salePrice , images  } = variants[0] || {};
                const handleClickProduct = (event)=>{
                    trackEvent({
                        category: "Product",
                        action: "Click",
                        label: id,
                        value: 1
                    });
                };
                let firstImage = "";
                if (images) {
                    if (images[0] && images[0].url) {
                        firstImage = images[0].url.replace("i8.amplience.net", "cdn.media.amplience.net");
                        if (firstImage.indexOf("cdn.media.amplience.net") > 0) {
                            firstImage += "?fmt=auto&qlt=default&fmt.jpeg.qlt=75&fmt.webp.qlt=60&fmt.jp2.qlt=40&w=540&upscale=false";
                        }
                    }
                }
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "amp-dc-card product-grid-item",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: `/product/${id}/${slug}`,
                        onClick: handleClickProduct,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "amp-dc-card-wrap",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "amp-dc-card-img-wrap",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("picture", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            loading: "lazy",
                                            style: {
                                                height: "100%",
                                                width: "100%",
                                                objectFit: "cover"
                                            },
                                            src: firstImage,
                                            alt: firstImage
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "amp-dc-card-text-wrap",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "amp-dc-card-name",
                                            children: name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "amp-dc-card-description",
                                            children: listPrice
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }, slug);
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductGrid);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7374:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _ProductGrid__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _ProductGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ProductGrid__WEBPACK_IMPORTED_MODULE_0__]);
_ProductGrid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ ConfigContext),
/* harmony export */   "Z": () => (/* binding */ useConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ConfigContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
function useConfig() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ConfigContext);
}


/***/ }),

/***/ 9754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ConfigContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2375);


const withConfig = (key)=>{
    return function(Component) {
        return (props)=>{
            const config = (0,_ConfigContext__WEBPACK_IMPORTED_MODULE_1__/* .useConfig */ .Z)();
            if (config && config.values && config.values[key]) {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...config.values[key],
                    ...props
                });
            }
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...props
            });
        };
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withConfig);


/***/ }),

/***/ 2907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Footer_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./components/core/Config/withConfig.tsx
var withConfig = __webpack_require__(9754);
// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
;// CONCATENATED MODULE: ./components/core/Footer/Footer.tsx






const styles = (theme)=>({});
const Footer = (props)=>{
    const isMobile = useMediaQuery_default()("(max-width:750px)");
    const { 0: linkCategories , 1: setLinkCategories  } = (0,external_react_.useState)([
        {
            visible: false,
            title: "Delivery",
            links: [
                "Track your order",
                "Delivery & collection",
                "Returns & refunds",
                "International orders"
            ]
        },
        {
            visible: false,
            title: "Help",
            links: [
                "Customer services",
                "Contact us",
                "Our stores",
                "Our services"
            ]
        },
        {
            visible: false,
            title: "Shopping",
            links: [
                "Gift Cards and vouchers",
                "Shop by brand",
                "Terms & conditions",
                "Secure shopping",
                "Our privacy notice",
                "Cookies",
                "Our apps",
                "Black Friday"
            ]
        },
        {
            visible: false,
            title: "Company",
            links: [
                "The ANYA FINN story",
                "Careers",
                "Sustainability policy",
                "Modern slavery",
                "FAQs", 
            ]
        }
    ]);
    (0,external_react_.useEffect)(()=>{
        if (isMobile) {
            const newLinkState = [
                ...linkCategories
            ];
            newLinkState.forEach((link)=>{
                link.visible = false;
            });
            setLinkCategories(newLinkState);
        }
    }, [
        isMobile,
        linkCategories
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "footer",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "footer__column-break",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "footer__sitemap",
                        children: linkCategories.map((i, idx)=>{
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: `footer__sitemap-column ${isMobile && !i.visible ? "footer__sitemap-column--collapsed" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                        variant: "subtitle1",
                                        component: "h4",
                                        className: isMobile ? "footer__sitemap-column-title--mobile" : "",
                                        onClick: ()=>{
                                            if (!isMobile) {
                                                return;
                                            }
                                            const newLinkState = [
                                                ...linkCategories
                                            ];
                                            newLinkState[idx].visible = !newLinkState[idx].visible;
                                            setLinkCategories(newLinkState);
                                        },
                                        children: [
                                            isMobile && i.visible ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/images/ic-anyafinn-minus.svg",
                                                alt: "minus"
                                            }) : isMobile && !i.visible ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/images/ic-anyafinn-plus.svg",
                                                alt: "plus"
                                            }) : null,
                                            i.title
                                        ]
                                    }),
                                    i.visible || !isMobile ? /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: i.links.map((j, idx2)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                    variant: "body2",
                                                    component: "a",
                                                    href: "#",
                                                    children: j
                                                })
                                            }, idx2);
                                        })
                                    }) : null
                                ]
                            }, idx);
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: "footer__signup",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                variant: "subtitle1",
                                component: "h4",
                                children: "Stay in touch"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer__signup-input-wrap",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "text",
                                        placeholder: props.newsletterPlaceholderText || "Sign up for ANYA FINN news..."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/images/ic-email.svg",
                                        alt: "email"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "footer__social-links",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer__social-link-wrapper",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/images/AnyaFinn_social.png",
                        width: "50%",
                        alt: "social"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "footer__watermark",
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                    variant: "h6",
                    component: "h6",
                    children: props.copyrightNoticeText || "Copyright 2020 ANYA FINN"
                })
            })
        ]
    });
};
/* harmony default export */ const Footer_Footer = ((0,withConfig/* default */.Z)("footer")((0,styles_.withStyles)(styles)(Footer)));

;// CONCATENATED MODULE: ./components/core/Footer/index.ts



/***/ }),

/***/ 5311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Head_Head)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
// EXTERNAL MODULE: ./lib/config/AppContext.tsx
var AppContext = __webpack_require__(1638);
;// CONCATENATED MODULE: ./components/core/Head/Head.tsx





const Head = ()=>{
    const configArray = AppContext/* configLocator.split */.pT.split(":");
    const hubname = configArray[0];
    const env = configArray[1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.DefaultSeo, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "IE=edge"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "aria_config_locator_hub",
                        content: hubname
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "aria_config_locator_env",
                        content: env
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico",
                        type: "image/x-icon"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Amplience Retail Storefront Website"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Head_Head = (Head);

;// CONCATENATED MODULE: ./components/core/Head/index.ts



/***/ }),

/***/ 7340:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5179);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8506);
/* harmony import */ var _components_ui_UIContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7423);
/* harmony import */ var _components_ui_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9078);
/* harmony import */ var _lib_analytics_trackPageView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4314);
/* harmony import */ var _components_ui_Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2965);
/* harmony import */ var _components_admin_AdminPanel_AdminPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92);
/* harmony import */ var _Masthead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2792);
/* harmony import */ var _WithCMSTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4525);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_core__WEBPACK_IMPORTED_MODULE_2__, _components_ui__WEBPACK_IMPORTED_MODULE_3__, _components_admin_AdminPanel_AdminPanel__WEBPACK_IMPORTED_MODULE_7__, _Masthead__WEBPACK_IMPORTED_MODULE_8__]);
([_components_core__WEBPACK_IMPORTED_MODULE_2__, _components_ui__WEBPACK_IMPORTED_MODULE_3__, _components_admin_AdminPanel_AdminPanel__WEBPACK_IMPORTED_MODULE_7__, _Masthead__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Layout = ({ children , pageProps  })=>{
    const { currentModal , closeModal  } = (0,_components_ui_UIContext__WEBPACK_IMPORTED_MODULE_4__/* .useUI */ .j)();
    const { debugging , setDebugging  } = (0,_components_ui__WEBPACK_IMPORTED_MODULE_3__/* .useDebug */ .qi)();
    const handleCloseDebug = ()=>{
        setDebugging(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_lib_analytics_trackPageView__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)();
        if (!window) {
            return;
        }
        const { amp , loryHelpers , shoppableVideo  } = window || {};
        if (!amp || !loryHelpers) {
            return;
        }
        try {
            loryHelpers.initSliders(document.querySelectorAll(".js_slider"));
            shoppableVideo.init(document.querySelectorAll(".af-shoppable-video"));
        } catch (err) {
            console.log(err);
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WithCMSTheme__WEBPACK_IMPORTED_MODULE_9__/* .WithThemesContext */ .dW, {
        themes: pageProps.hierarchies.themes,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WithCMSTheme__WEBPACK_IMPORTED_MODULE_9__/* .WithCMSTheme */ .$1, {
            themes: pageProps.hierarchies.themes,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Masthead__WEBPACK_IMPORTED_MODULE_8__/* .WithNavigationContext */ .sJ, {
                pages: pageProps.hierarchies.pages,
                categories: pageProps.ecommerce.categories,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_3__/* .PreviewToolbar */ .OD, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_core__WEBPACK_IMPORTED_MODULE_2__/* .Masthead */ .HO, {}),
                        children,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_core__WEBPACK_IMPORTED_MODULE_2__/* .Footer */ .$_, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_Modal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            open: currentModal !== "NONE",
                            onClose: closeModal,
                            children: [
                                currentModal === "ACCOUNT" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_3__/* .AccountModal */ .Zc, {}),
                                currentModal === "LOCALE" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_3__/* .LocaleModal */ .Q_, {})
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Sidebar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            variant: "left",
                            open: debugging,
                            onClose: handleCloseDebug,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_admin_AdminPanel_AdminPanel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 927:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _Layout__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7340);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Layout__WEBPACK_IMPORTED_MODULE_0__]);
_Layout__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6518:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
;// CONCATENATED MODULE: ./components/core/Logo/Logo.tsx




const styles = (theme)=>({});
const Logo = (props)=>{
    const { classes , ...other } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: "/",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                ...other,
                alt: "",
                src: "https://cdn.media.amplience.net/i/dcdemo/anyafinn-logo"
            })
        })
    });
};
/* harmony default export */ const Logo_Logo = ((0,styles_.withStyles)(styles)(Logo));

;// CONCATENATED MODULE: ./components/core/Logo/index.ts



/***/ }),

/***/ 7790:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8506);
/* harmony import */ var _NavigationContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8468);
/* harmony import */ var _components_cms_modern_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2545);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_core_Config_withConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9754);
/* harmony import */ var _utils_getImageURL__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6783);
/* harmony import */ var _lib_cms_CmsContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9725);
/* harmony import */ var currency_symbol_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1934);
/* harmony import */ var currency_symbol_map__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(currency_symbol_map__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_icons_Flags_AE__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5371);
/* harmony import */ var _components_icons_Flags_CN__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9543);
/* harmony import */ var _components_icons_Flags_DE__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9623);
/* harmony import */ var _components_icons_Flags_FR__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8644);
/* harmony import */ var _components_icons_Flags_US__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5186);
/* harmony import */ var _components_icons_Flags_UK__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2499);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui__WEBPACK_IMPORTED_MODULE_2__, _components_cms_modern_Navigation__WEBPACK_IMPORTED_MODULE_4__]);
([_components_ui__WEBPACK_IMPORTED_MODULE_2__, _components_cms_modern_Navigation__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const Masthead = ({ children , variant ="default" , logo , navigationBackgroundColor  })=>{
    const { openModal  } = (0,_components_ui__WEBPACK_IMPORTED_MODULE_2__/* .useUI */ .l8)();
    const { locale ="en-US" , currency ="USD"  } = (0,_lib_cms_CmsContext__WEBPACK_IMPORTED_MODULE_8__/* .useCmsContext */ .Eb)();
    const { rootItems  } = (0,_NavigationContext__WEBPACK_IMPORTED_MODULE_3__/* .useNavigation */ .H)();
    const { debugging , setDebugging  } = (0,_components_ui__WEBPACK_IMPORTED_MODULE_2__/* .useDebug */ .qi)();
    const handleShowLocaleModal = ()=>{
        openModal("LOCALE");
    };
    const handleShowAccountModal = ()=>{
        openModal("ACCOUNT");
    };
    const handleToggleDebug = ()=>{
        setDebugging(!debugging);
    };
    const localeSettings = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        switch(locale){
            case "en-GB":
                return {
                    Flag: _components_icons_Flags_UK__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
                    currency: "\xa3GBP",
                    label: "United Kingdom"
                };
            case "fr-FR":
                return {
                    Flag: _components_icons_Flags_FR__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
                    currency: "€EUR",
                    label: "Fran\xe7ais"
                };
            case "de-DE":
                return {
                    Flag: _components_icons_Flags_DE__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
                    currency: "€EUR",
                    label: "Deutschland"
                };
            case "zh-CN":
                return {
                    Flag: _components_icons_Flags_CN__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                    currency: "\xa5CNY",
                    label: "中国"
                };
            case "ar-AE":
                return {
                    Flag: _components_icons_Flags_AE__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                    currency: "AED",
                    label: "الإمارات العربية المتحدة"
                };
        }
        return {
            Flag: _components_icons_Flags_US__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
            currency: "$USD",
            label: "United States"
        };
    }, [
        locale
    ]);
    const { Flag , currency: localeCurrency , label: localeLabel  } = localeSettings;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_cms_modern_Navigation__WEBPACK_IMPORTED_MODULE_4__/* .NavigationToggleState */ .CT, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                id: "top"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "af-banner-top",
                children: locale === "de-DE" ? "Profitieren Sie von 10% Rabatt auf Ihren ersten Einkauf mit dem Code FIRST10 an der Kasse - es gelten die AGB" : "Enjoy 10% off your first purchase using code FIRST10 at checkout - T&Cs apply"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "af-banner",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "af-banner__currency-selector",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            onClick: handleShowLocaleModal,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Flag, {
                                    className: "af-banner__country-flag"
                                }),
                                " ",
                                localeLabel,
                                " - ",
                                currency_symbol_map__WEBPACK_IMPORTED_MODULE_9___default()(currency),
                                currency
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cms_modern_Navigation__WEBPACK_IMPORTED_MODULE_4__/* .NavigationToggle */ .Qk, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: logo ? "af-banner__customLogo" : "af-banner__logo",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: logo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    alt: "",
                                    src: (0,_utils_getImageURL__WEBPACK_IMPORTED_MODULE_7__/* .getImageURL */ .QW)(logo, {
                                        format: _utils_getImageURL__WEBPACK_IMPORTED_MODULE_7__/* .ImageFormat.PNG */ .D3.PNG
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    alt: "",
                                    src: "/images/AnyaFinn-Logo.svg"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "af-banner__account-options",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#",
                                    className: "af-banner__account-option-icon af-banner__account-option-icon--locator",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: "/store",
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/images/store.svg",
                                            alt: "store"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                className: "af-banner__account-option-icon af-banner__account-option-icon--locator",
                                onClick: handleShowLocaleModal,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "https://dcdemo.a.bigcontent.io/v1/static/af-locator",
                                    alt: "locale"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                className: "af-banner__account-option-icon af-banner__account-option-icon--account",
                                onClick: handleShowAccountModal,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "https://dcdemo.a.bigcontent.io/v1/static/af-account",
                                    alt: "account"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                className: "af-banner__account-option-icon af-banner__account-option-icon--cart",
                                onClick: handleToggleDebug,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "https://dcdemo.a.bigcontent.io/v1/static/af-cart",
                                    alt: "cart"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cms_modern_Navigation__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
                style: {
                    backgroundColor: navigationBackgroundColor
                },
                pages: rootItems
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_core_Config_withConfig__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)("masthead")(Masthead));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ useNavigation),
/* harmony export */   "s": () => (/* binding */ WithNavigationContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _walkNavigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4866);
/* harmony import */ var _lib_cms_CmsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9725);
/* harmony import */ var _lib_user_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6149);





const NavigationContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const getTypeFromSchema = (schema)=>{
    switch(schema){
        case "https://demostore.amplience.com/site/pages/landing":
            return "page";
        case "https://demostore.amplience.com/site/pages/external":
            return "external-page";
        case "https://demostore.amplience.com/site/page-group":
            return "group";
        case "https://demostore.amplience.com/site/pages/category":
            return "category";
    }
    return null;
};
const WithNavigationContext = ({ pages , categories , children  })=>{
    // Retrieve locale/country code from context
    const { locale  } = (0,_lib_cms_CmsContext__WEBPACK_IMPORTED_MODULE_2__/* .useCmsContext */ .Eb)() || {};
    const { language  } = (0,_lib_user_UserContext__WEBPACK_IMPORTED_MODULE_3__/* .useUserContext */ .SE)();
    // Merge together CMS + commerce categories into a single navigation structure
    const categoriesBySlug = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const result = {};
        for (let item of categories){
            const { en  } = item.slug || {};
            result[item.slug] = item;
        }
        return result;
    }, [
        categories
    ]);
    const rootItems = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const buildCategoryItem = (cmsCategory, ecommerceCategory)=>{
            if (!cmsCategory && !ecommerceCategory) {
                return null;
            }
            const children = [];
            const result = {
                type: "category",
                title: ecommerceCategory?.name,
                // href: cmsCategory?.content?._meta?.deliveryKey || ecommerceCategory?.slug?.en ? `/category/${ecommerceCategory?.slug?.en}` : null,
                href: `/category/${ecommerceCategory?.slug}`,
                content: cmsCategory?.content,
                category: ecommerceCategory,
                children,
                nodeContentItem: cmsCategory?.content
            };
            // Add any content groups first
            const contentChildren = cmsCategory ? buildCmsEntries(cmsCategory.children) : [];
            let categoryChildren = [];
            // Then add sub-categories (don't add sub-categories already managed by the cms)
            if (ecommerceCategory) {
                let subCategories = (ecommerceCategory.children || [])// originally 'categories'
                // .filter((category: any) => {
                //     return category && category.parent && category.parent.id === ecommerceCategory.id;
                // })
                .filter((category)=>{
                    // filter out categories already managed by the cms
                    return !contentChildren?.find((x)=>x.category === category);
                });
                // sort by user defined order
                subCategories.sort((a, b)=>{
                    return Number(b.orderHint) - Number(a.orderHint);
                });
                categoryChildren = subCategories.map((category)=>{
                    return buildCategoryItem(undefined, category);
                }).filter((x)=>x != null);
            }
            result.children = [
                ...contentChildren,
                ...categoryChildren
            ];
            return result;
        };
        const buildGroupItem = (node)=>{
            if (!node) {
                return null;
            }
            let title = node?.content?.title?.values?.find((item)=>{
                return item.locale.startsWith(language);
            });
            if (!title) {
                title = node?.content?.title?.values?.find((item)=>{
                    return item.locale.startsWith("en");
                });
            }
            return {
                type: "group",
                title: title?.value,
                children: buildCmsEntries(node.children),
                parents: []
            };
        };
        const buildPageItem = (node)=>{
            if (!node) {
                return null;
            }
            let title = node?.content?.title?.values?.find((item)=>{
                return item.locale.startsWith(language);
            });
            if (!title) {
                title = node?.content?.title?.values?.find((item)=>{
                    return item.locale.startsWith("en");
                });
            }
            return {
                type: "page",
                title: title?.value,
                href: node.content._meta?.deliveryKey ? `/${node.content._meta?.deliveryKey}` : undefined,
                children: buildCmsEntries(node.children),
                parents: [],
                nodeContentItem: node.content
            };
        };
        const buildExternalPageItem = (node)=>{
            if (!node) {
                return null;
            }
            let title = node?.content?.title?.values?.find((item)=>{
                return item.locale.startsWith(language);
            });
            if (!title) {
                title = node?.content?.title?.values?.find((item)=>{
                    return item.locale.startsWith("en");
                });
            }
            return {
                type: "external-page",
                title: title?.value,
                href: node.content.href,
                children: buildCmsEntries(node.children),
                parents: [],
                nodeContentItem: node?.content
            };
        };
        const buildCmsItem = (node)=>{
            const type = getTypeFromSchema(node.content?._meta?.schema);
            if (!type) {
                return null;
            }
            if (node.content?.menu?.hidden) {
                return null;
            }
            switch(type){
                case "category":
                    let category = categoriesBySlug[node.content._meta.deliveryKey.replace(`category/`, "")] || categoriesBySlug[node.content.name];
                    return buildCategoryItem(node, category);
                case "group":
                    return buildGroupItem(node);
                case "page":
                    return buildPageItem(node);
                case "external-page":
                    return buildExternalPageItem(node);
            }
            return null;
        };
        const buildCmsEntries = (children = [])=>{
            // sort by priority
            children.sort(function(a, b) {
                const priorityA = a.menu?.priority || a.priority || a.title;
                const priorityB = b.menu?.priority || b.priority || b.title;
                if (priorityA < priorityB) {
                    return 1;
                } else if (priorityA > priorityB) {
                    return -1;
                }
                return 0;
            });
            return children.map(buildCmsItem).filter((x)=>x != null);
        };
        const rootEntries = buildCmsEntries(pages.children);
        rootEntries.forEach((rootEntry)=>{
            (0,_walkNavigation__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(rootEntry, (node, parents)=>{
                node.parents = parents;
            });
        });
        return rootEntries;
    }, [
        pages,
        categoriesBySlug,
        language
    ]);
    const findByHref = (href)=>{
        let result;
        for (let rootItem of rootItems){
            (0,_walkNavigation__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(rootItem, (node, parents)=>{
                if (node.href === href) {
                    result = node;
                }
            });
            if (result) {
                break;
            }
        }
        return result;
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavigationContext.Provider, {
        value: {
            rootItems,
            findByHref
        },
        children: children
    });
};
function useNavigation() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NavigationContext);
}


/***/ }),

/***/ 2792:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HJ": () => (/* reexport safe */ _NavigationContext__WEBPACK_IMPORTED_MODULE_1__.H),
/* harmony export */   "ZP": () => (/* reexport safe */ _Masthead__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "sJ": () => (/* reexport safe */ _NavigationContext__WEBPACK_IMPORTED_MODULE_1__.s)
/* harmony export */ });
/* harmony import */ var _Masthead__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7790);
/* harmony import */ var _NavigationContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8468);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Masthead__WEBPACK_IMPORTED_MODULE_0__]);
_Masthead__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ walkNavigationItems),
/* harmony export */   "Z": () => (/* binding */ walkNavigation)
/* harmony export */ });
function walkNavigation(current, visitor, parents = []) {
    visitor(current, parents);
    for (let child of current.children){
        walkNavigation(child, visitor, [
            ...parents,
            current
        ]);
    }
};
function walkNavigationItems(items, visitor) {
    for (let item of items){
        walkNavigation(item, visitor);
    }
}


/***/ }),

/***/ 1077:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Masthead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2792);
/* harmony import */ var _WithCMSTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4525);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Masthead__WEBPACK_IMPORTED_MODULE_2__]);
_Masthead__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const StandaloneLayout = ({ children , pageProps  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WithCMSTheme__WEBPACK_IMPORTED_MODULE_3__/* .WithThemesContext */ .dW, {
        themes: pageProps.hierarchies.themes,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WithCMSTheme__WEBPACK_IMPORTED_MODULE_3__/* .WithCMSTheme */ .$1, {
            themes: pageProps.hierarchies.themes,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Masthead__WEBPACK_IMPORTED_MODULE_2__/* .WithNavigationContext */ .sJ, {
                pages: pageProps.hierarchies.pages,
                categories: pageProps.ecommerce.categories,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: children
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StandaloneLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5422:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _StandaloneLayout__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _StandaloneLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1077);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StandaloneLayout__WEBPACK_IMPORTED_MODULE_0__]);
_StandaloneLayout__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$1": () => (/* reexport */ WithCMSTheme_WithCMSTheme),
  "dW": () => (/* reexport */ WithThemesContext),
  "S": () => (/* reexport */ useThemes)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/core/WithCMSTheme/ThemesContext.tsx


const ThemesContext = /*#__PURE__*/ (0,external_react_.createContext)(null);
const WithThemesContext = ({ themes , children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(ThemesContext.Provider, {
        value: {
            themes
        },
        children: children
    });
};
function useThemes() {
    return (0,external_react_.useContext)(ThemesContext);
}

// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
;// CONCATENATED MODULE: ./components/core/WithCMSTheme/WithCMSTheme.tsx





const WithCMSTheme = ({ themeOverride , children  })=>{
    const { themes  } = useThemes();
    let CMSTheme = undefined;
    let typography = undefined;
    let palette = undefined;
    if (themes) {
        const defaultTheme = themes?.content?.defaultTheme;
        if (defaultTheme) {
            const allThemes = themes?.children;
            CMSTheme = allThemes?.find((theme)=>{
                return theme.content._meta.deliveryId === defaultTheme.values[0].id;
            });
        }
    }
    if (themeOverride) {
        const allThemes1 = themes?.children;
        CMSTheme = allThemes1?.find((theme)=>{
            return theme.content._meta.deliveryId === themeOverride.values[0].id;
        });
    }
    if (CMSTheme) {
        palette = CMSTheme?.children?.find((node)=>node.content.type === "Palette");
        typography = CMSTheme?.children?.find((node)=>node.content.type === "Typography");
    }
    const theme = (0,material_.createTheme)({
        palette: {
            primary: {
                light: palette ? palette.content.primary.light : "#000",
                main: palette ? palette.content.primary.main : "#000",
                dark: palette ? palette.content.primary.dark : "#000"
            },
            secondary: {
                light: palette ? palette.content.secondary.light : "#d54d4d",
                main: palette ? palette.content.secondary.main : "#d54d4d",
                dark: palette ? palette.content.secondary.dark : "#d54d4d"
            },
            error: {
                light: palette ? palette.content.secondary.light : "#d54d4d",
                main: palette ? palette.content.secondary.main : "#d54d4d",
                dark: palette ? palette.content.secondary.dark : "#d54d4d"
            },
            background: {
                default: "#fff"
            },
            grey: {
                A100: "#333333"
            },
            text: {
                primary: "#333333"
            },
            divider: "#d5d5d5"
        },
        shape: {
            borderRadius: 0
        },
        typography: {
            htmlFontSize: typography ? typography.content.htmlFontSize : 16,
            fontSize: typography ? typography.content.fontSize : 14,
            fontFamily: typography ? typography.content.fontFamily : "'Roboto Condensed', sans-serif",
            fontWeightLight: typography ? typography.content.fontWeightLight : 300,
            fontWeightRegular: typography ? typography.content.fontWeightRegular : 400,
            fontWeightMedium: typography ? typography.content.fontWeightMedium : 500,
            fontWeightBold: typography ? typography.content.fontWeightBold : 700,
            h1: {
                fontSize: typography ? typography.content.h1.fontSize : "40px",
                color: typography ? typography.content.h1.color : "#666",
                lineHeight: typography ? typography.content.h1.lineHeight : "44px",
                fontFamily: typography ? typography.content.h1.fontFamily : "'Montserrat', sans-serif",
                fontWeight: typography ? typography.content.h1.fontWeight : 400,
                textTransform: typography ? typography.content.h1.textTransform : "uppercase"
            },
            h2: {
                fontSize: typography ? typography.content.h2.fontSize : "24px",
                color: typography ? typography.content.h2.color : "#666",
                fontFamily: typography ? typography.content.h2.fontFamily : "'Montserrat', sans-serif",
                fontWeight: typography ? typography.content.h2.fontWeight : 400,
                textTransform: typography ? typography.content.h2.textTransform : "uppercase"
            },
            h3: {
                fontSize: typography ? typography.content.h3.fontSize : "18px",
                color: typography ? typography.content.h3.color : "#231f20",
                fontFamily: typography ? typography.content.h3.fontFamily : "'Roboto Condensed', sans-serif",
                fontWeight: typography ? typography.content.h3.fontWeight : 700,
                textTransform: typography ? typography.content.h3.textTransform : "uppercase"
            },
            h4: {
                fontSize: typography ? typography.content.h4.fontSize : "18px",
                color: typography ? typography.content.h4.color : "#231f20",
                fontFamily: typography ? typography.content.h4.fontFamily : "'Roboto Condensed', sans-serif",
                fontWeight: typography ? typography.content.h4.fontWeight : 400,
                textTransform: typography ? typography.content.h4.textTransform : "none"
            },
            h5: {
                fontSize: typography ? typography.content.h5.fontSize : "12px",
                color: typography ? typography.content.h5.color : "#999",
                fontFamily: typography ? typography.content.h5.fontFamily : "'Roboto Condensed', sans-serif",
                fontWeight: typography ? typography.content.h5.fontWeight : 400,
                textTransform: typography ? typography.content.h5.textTransform : "none"
            },
            h6: {
                fontSize: typography ? typography.content.h6.fontSize : "11px",
                color: typography ? typography.content.h6.color : "#231f20",
                fontFamily: typography ? typography.content.h6.fontFamily : "'Roboto Condensed', sans-serif",
                fontWeight: typography ? typography.content.h6.fontWeight : 400,
                textTransform: typography ? typography.content.h6.textTransform : "none"
            },
            subtitle1: {
                fontSize: typography ? typography.content.subtitle1.fontSize : "14px",
                color: typography ? typography.content.subtitle1.color : "#231f20",
                fontFamily: typography ? typography.content.subtitle1.fontFamily : "'Roboto Condensed', sans-serif",
                fontWeight: typography ? typography.content.subtitle1.fontWeight : 700,
                textTransform: typography ? typography.content.subtitle1.textTransform : "none"
            },
            subtitle2: {
                fontSize: typography ? typography.content.subtitle2.fontSize : "16px",
                color: typography ? typography.content.subtitle2.color : "#231f20",
                fontFamily: typography ? typography.content.subtitle2.fontFamily : "'Roboto Condensed', sans-serif",
                fontWeight: typography ? typography.content.subtitle2.fontWeight : 400,
                textTransform: typography ? typography.content.subtitle2.textTransform : "none"
            },
            body1: {
                fontSize: typography ? typography.content.body1.fontSize : "16px",
                color: typography ? typography.content.body1.color : "#231f20",
                fontFamily: typography ? typography.content.body1.fontFamily : "'Roboto Condensed', sans-serif",
                fontWeight: typography ? typography.content.body1.fontWeight : 400,
                textTransform: typography ? typography.content.body1.textTransform : "none"
            },
            body2: {
                fontSize: typography ? typography.content.body2.fontSize : "13px",
                color: typography ? typography.content.body2.color : "#666",
                fontFamily: typography ? typography.content.body2.fontFamily : "'Roboto Condensed', sans-serif",
                fontWeight: typography ? typography.content.body2.fontWeight : 400,
                textTransform: typography ? typography.content.body2.textTransform : "none"
            },
            button: {
                fontSize: typography ? typography.content.button.fontSize : "13px",
                color: typography ? typography.content.button.color : "#fff",
                backgroundColor: "#999",
                fontFamily: typography ? typography.content.button.fontFamily : "'Roboto Condensed', sans-serif",
                fontWeight: typography ? typography.content.button.fontWeight : 400,
                textTransform: typography ? typography.content.button.textTransform : "none"
            },
            caption: {
                fontSize: typography ? typography.content.caption.fontSize : "13px",
                color: typography ? typography.content.caption.color : "#666",
                fontFamily: typography ? typography.content.caption.fontFamily : "'Roboto Condensed', sans-serif",
                fontWeight: typography ? typography.content.caption.fontWeight : 400,
                textTransform: typography ? typography.content.caption.textTransform : "none",
                fontStyle: "italic"
            },
            overline: {
                fontSize: typography ? typography.content.overline.fontSize : "11px",
                color: typography ? typography.content.overline.color : "#666",
                fontFamily: typography ? typography.content.overline.fontFamily : "'Roboto Condensed', sans-serif",
                fontWeight: typography ? typography.content.overline.fontWeight : 400,
                textTransform: typography ? typography.content.overline.textTransform : "none"
            }
        }
    });
    // Add global style for the general default theme
    if (!themeOverride) {
        const useStyles = (0,styles_.makeStyles)({
            "@global": {
                fontSize: theme.typography.fontSize,
                fontFamily: theme.typography.fontFamily,
                h1: {
                    fontSize: theme.typography.h1.fontSize,
                    color: theme.typography.h1.color,
                    lineHeight: theme.typography.h1.lineHeight,
                    fontFamily: theme.typography.h1.fontFamily,
                    fontWeight: theme.typography.h1.fontWeight,
                    textTransform: theme.typography.h1.textTransform
                },
                h2: {
                    fontSize: theme.typography.h2.fontSize,
                    color: theme.typography.h2.color,
                    lineHeight: theme.typography.h2.lineHeight,
                    fontFamily: theme.typography.h2.fontFamily,
                    fontWeight: theme.typography.h2.fontWeight,
                    textTransform: theme.typography.h2.textTransform
                },
                h3: {
                    fontSize: theme.typography.h3.fontSize,
                    color: theme.typography.h3.color,
                    lineHeight: theme.typography.h3.lineHeight,
                    fontFamily: theme.typography.h3.fontFamily,
                    fontWeight: theme.typography.h3.fontWeight,
                    textTransform: theme.typography.h3.textTransform
                },
                h4: {
                    fontSize: theme.typography.h4.fontSize,
                    color: theme.typography.h4.color,
                    lineHeight: theme.typography.h4.lineHeight,
                    fontFamily: theme.typography.h4.fontFamily,
                    fontWeight: theme.typography.h4.fontWeight,
                    textTransform: theme.typography.h4.textTransform
                },
                h5: {
                    fontSize: theme.typography.h5.fontSize,
                    color: theme.typography.h5.color,
                    lineHeight: theme.typography.h5.lineHeight,
                    fontFamily: theme.typography.h5.fontFamily,
                    fontWeight: theme.typography.h5.fontWeight,
                    textTransform: theme.typography.h5.textTransform
                },
                h6: {
                    fontSize: theme.typography.h6.fontSize,
                    color: theme.typography.h6.color,
                    lineHeight: theme.typography.h6.lineHeight,
                    fontFamily: theme.typography.h6.fontFamily,
                    fontWeight: theme.typography.h6.fontWeight,
                    textTransform: theme.typography.h6.textTransform
                },
                subtitle1: {
                    fontSize: theme.typography.subtitle1.fontSize,
                    color: theme.typography.subtitle1.color,
                    lineHeight: theme.typography.subtitle1.lineHeight,
                    fontFamily: theme.typography.subtitle1.fontFamily,
                    fontWeight: theme.typography.subtitle1.fontWeight,
                    textTransform: theme.typography.subtitle1.textTransform
                },
                subtitle2: {
                    fontSize: theme.typography.subtitle2.fontSize,
                    color: theme.typography.subtitle2.color,
                    lineHeight: theme.typography.subtitle2.lineHeight,
                    fontFamily: theme.typography.subtitle2.fontFamily,
                    fontWeight: theme.typography.subtitle2.fontWeight,
                    textTransform: theme.typography.subtitle2.textTransform
                },
                body1: {
                    fontSize: theme.typography.body1.fontSize,
                    color: theme.typography.body1.color,
                    lineHeight: theme.typography.body1.lineHeight,
                    fontFamily: theme.typography.body1.fontFamily,
                    fontWeight: theme.typography.body1.fontWeight,
                    textTransform: theme.typography.body1.textTransform
                },
                body2: {
                    fontSize: theme.typography.body2.fontSize,
                    color: theme.typography.body2.color,
                    lineHeight: theme.typography.body2.lineHeight,
                    fontFamily: theme.typography.body2.fontFamily,
                    fontWeight: theme.typography.body2.fontWeight,
                    textTransform: theme.typography.body2.textTransform
                },
                button: {
                    fontSize: theme.typography.button.fontSize,
                    color: theme.typography.button.color,
                    lineHeight: theme.typography.button.lineHeight,
                    fontFamily: theme.typography.button.fontFamily,
                    fontWeight: theme.typography.button.fontWeight,
                    textTransform: theme.typography.button.textTransform
                },
                caption: {
                    fontSize: theme.typography.caption.fontSize,
                    color: theme.typography.caption.color,
                    lineHeight: theme.typography.caption.lineHeight,
                    fontFamily: theme.typography.caption.fontFamily,
                    fontWeight: theme.typography.caption.fontWeight,
                    textTransform: theme.typography.caption.textTransform
                },
                overline: {
                    fontSize: theme.typography.overline.fontSize,
                    color: theme.typography.overline.color,
                    lineHeight: theme.typography.overline.lineHeight,
                    fontFamily: theme.typography.overline.fontFamily,
                    fontWeight: theme.typography.overline.fontWeight,
                    textTransform: theme.typography.overline.textTransform
                },
                p: {
                    fontSize: theme.typography.body1.fontSize,
                    color: theme.typography.body1.color,
                    lineHeight: theme.typography.body1.lineHeight,
                    fontFamily: theme.typography.body1.fontFamily,
                    fontWeight: theme.typography.body1.fontWeight,
                    textTransform: theme.typography.body1.textTransform
                }
            }
        });
    //useStyles();
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.StyledEngineProvider, {
        injectFirst: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.ThemeProvider, {
            theme: theme,
            children: children
        })
    });
};
/* harmony default export */ const WithCMSTheme_WithCMSTheme = (WithCMSTheme);

;// CONCATENATED MODULE: ./components/core/WithCMSTheme/index.ts




/***/ }),

/***/ 1850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ WithTheme_WithTheme)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/core/WithTheme/WithTheme.tsx



const theme = (0,material_.createTheme)({
    palette: {
        primary: {
            main: "#000"
        },
        secondary: {
            main: "#d54d4d"
        },
        background: {
            default: "#fff"
        },
        grey: {
            A100: "#333333"
        },
        text: {
            primary: "#333333"
        },
        divider: "#d5d5d5"
    },
    shape: {
        borderRadius: 0
    },
    typography: {
        fontFamily: "'Roboto Condensed', sans-serif",
        h1: {
            fontSize: "40px",
            color: "#666",
            lineHeight: "44px",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            textTransform: "uppercase"
        },
        h2: {
            fontSize: "24px",
            color: "#666",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            textTransform: "uppercase"
        },
        h3: {
            fontSize: "18px",
            color: "#231f20",
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight: 700
        },
        h4: {
            fontSize: "18px",
            color: "#231f20",
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight: 400
        },
        h5: {
            fontSize: "12px",
            color: "#999",
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight: 400
        },
        h6: {
            fontSize: "11px",
            color: "#231f20",
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight: 400
        },
        subtitle1: {
            fontSize: "14px",
            color: "#231f20",
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight: 700
        },
        subtitle2: {
            fontSize: "16px",
            color: "#231f20",
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight: 400
        },
        body1: {},
        body2: {
            fontSize: "13px",
            color: "#666",
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight: 400
        },
        button: {
            fontSize: "13px",
            color: "#fff",
            backgroundColor: "#999",
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight: 400
        },
        caption: {
            fontSize: "13px",
            color: "#666",
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight: 400,
            fontStyle: "italic"
        }
    }
});
const WithTheme = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.StyledEngineProvider, {
        injectFirst: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.ThemeProvider, {
            theme: theme,
            children: children
        })
    });
};
/* harmony default export */ const WithTheme_WithTheme = (WithTheme);

;// CONCATENATED MODULE: ./components/core/WithTheme/index.ts



/***/ }),

/***/ 8019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "r0": () => (/* binding */ useContent)
/* harmony export */ });
/* unused harmony export useVisualization */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dc_visualization_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2838);
/* harmony import */ var dc_visualization_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dc_visualization_sdk__WEBPACK_IMPORTED_MODULE_2__);



const VisualizationContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const useVisualization = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(VisualizationContext);
};
const WithVisualization = (props)=>{
    const { 0: status , 1: setStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("failed");
    const { 0: sdk , 1: setSDK  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: formModel , 1: setFormModel  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setStatus("connecting");
        let removeChangedSubscription = undefined;
        (0,dc_visualization_sdk__WEBPACK_IMPORTED_MODULE_2__.init)({
            connectionTimeout: 30000,
            debug: true
        }).then(async (sdk)=>{
            const value = await sdk.form.get();
            removeChangedSubscription = sdk.form.changed((value)=>{
                console.log("changed");
                try {
                    setFormModel(value.content);
                } catch (error) {}
            });
            sdk.form.saved((value)=>{
                window.location.reload();
            });
            sdk.locale.changed((value)=>{
                window.location.reload();
            });
            setSDK(sdk);
            setFormModel(value.content);
            setStatus("connected");
        }).catch(()=>{
            setStatus("failed");
        });
        return ()=>{
            if (removeChangedSubscription) {
                removeChangedSubscription();
            }
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VisualizationContext.Provider, {
        value: {
            sdk,
            formModel,
            status
        },
        children: props.children
    });
};
function useContent(content, vse) {
    const { formModel  } = useVisualization() || {};
    if (vse === "") {
        return [
            content,
            undefined
        ];
    }
    if (formModel && formModel._meta?.deliveryId === content?._meta?.deliveryId) {
        return [
            formModel,
            content
        ];
    }
    return [
        content,
        undefined
    ];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WithVisualization);


/***/ }),

/***/ 335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* reexport safe */ _WithVisualization__WEBPACK_IMPORTED_MODULE_0__.ZP),
/* harmony export */   "r0": () => (/* reexport safe */ _WithVisualization__WEBPACK_IMPORTED_MODULE_0__.r0)
/* harmony export */ });
/* harmony import */ var _WithVisualization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8019);




/***/ }),

/***/ 9460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useWindowContext),
/* harmony export */   "t": () => (/* binding */ WithWindowContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const WindowContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({
    w: 0,
    h: 0
});
function WithWindowContext({ children  }) {
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        w: 0,
        h: 0
    });
    const resizeWindow = ()=>{
        setState({
            w: window.innerWidth,
            h: window.innerHeight
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const { innerWidth , innerHeight  } = window || {};
        setState({
            w: innerWidth,
            h: innerHeight
        });
        window.addEventListener("resize", resizeWindow);
        return ()=>window.removeEventListener("resize", resizeWindow);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WindowContext.Provider, {
        value: state,
        children: children
    });
}
function useWindowContext() {
    return react__WEBPACK_IMPORTED_MODULE_1___default().useContext(WindowContext);
}


/***/ }),

/***/ 5179:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "Ar": () => (/* reexport safe */ _Layout__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "Fb": () => (/* reexport safe */ _Head__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "HO": () => (/* reexport safe */ _Masthead__WEBPACK_IMPORTED_MODULE_2__.ZP),
/* harmony export */   "Yi": () => (/* reexport safe */ _WithTheme__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "mI": () => (/* reexport safe */ _WithVisualization__WEBPACK_IMPORTED_MODULE_5__.ZP),
/* harmony export */   "y2": () => (/* reexport safe */ _StandaloneLayout__WEBPACK_IMPORTED_MODULE_7__.Z)
/* harmony export */ });
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5311);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(927);
/* harmony import */ var _Masthead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2792);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2907);
/* harmony import */ var _WithTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1850);
/* harmony import */ var _WithVisualization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(335);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6518);
/* harmony import */ var _StandaloneLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5422);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Layout__WEBPACK_IMPORTED_MODULE_1__, _Masthead__WEBPACK_IMPORTED_MODULE_2__, _StandaloneLayout__WEBPACK_IMPORTED_MODULE_7__]);
([_Layout__WEBPACK_IMPORTED_MODULE_1__, _Masthead__WEBPACK_IMPORTED_MODULE_2__, _StandaloneLayout__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AE)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function AE(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        id: "flag-icon-css-ae",
        viewBox: "0 0 640 480",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "#00732f",
                d: "M0 0h640v160H0z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "#fff",
                d: "M0 160h640v160H0z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M0 320h640v160H0z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "red",
                d: "M0 0h220v480H0z"
            })
        ]
    });
};


/***/ }),

/***/ 9543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CN)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function CN(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        id: "flag-icon-css-cn",
        viewBox: "0 0 640 480",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    id: "a",
                    fill: "#ffde00",
                    d: "M-.6.8L0-1 .6.8-1-.3h2z"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "#de2910",
                d: "M0 0h640v480H0z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("use", {
                width: 30,
                height: 20,
                transform: "matrix(71.9991 0 0 72 120 120)",
                xlinkHref: "#a"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("use", {
                width: 30,
                height: 20,
                transform: "matrix(-12.33562 -20.5871 20.58684 -12.33577 240.3 48)",
                xlinkHref: "#a"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("use", {
                width: 30,
                height: 20,
                transform: "matrix(-3.38573 -23.75998 23.75968 -3.38578 288 95.8)",
                xlinkHref: "#a"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("use", {
                width: 30,
                height: 20,
                transform: "matrix(6.5991 -23.0749 23.0746 6.59919 288 168)",
                xlinkHref: "#a"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("use", {
                width: 30,
                height: 20,
                transform: "matrix(14.9991 -18.73557 18.73533 14.99929 240 216)",
                xlinkHref: "#a"
            })
        ]
    });
};


/***/ }),

/***/ 9623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DE)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function DE(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        id: "flag-icon-css-de",
        viewBox: "0 0 640 480",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "#ffce00",
                d: "M0 320h640v160H0z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M0 0h640v160H0z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "#d00",
                d: "M0 160h640v160H0z"
            })
        ]
    });
};


/***/ }),

/***/ 8644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FR)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function FR(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        id: "flag-icon-css-fr",
        viewBox: "0 0 640 480",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            fillRule: "evenodd",
            strokeWidth: "1pt",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: "#fff",
                    d: "M0 0h640v480H0z"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: "#00267f",
                    d: "M0 0h213.3v480H0z"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: "#f31830",
                    d: "M426.7 0H640v480H426.7z"
                })
            ]
        })
    });
};


/***/ }),

/***/ 2499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AE)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function AE(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        id: "flag-icon-css-gb",
        viewBox: "0 0 640 480",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "#012169",
                d: "M0 0h640v480H0z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "#FFF",
                d: "M75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "#C8102E",
                d: "M424 281l216 159v40L369 281h55zm-184 20l6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "#FFF",
                d: "M241 0v480h160V0H241zM0 160v160h640V160H0z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "#C8102E",
                d: "M0 193v96h640v-96H0zM273 0v480h96V0h-96z"
            })
        ]
    });
};


/***/ }),

/***/ 5186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ US)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function US(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        id: "flag-icon-css-us",
        viewBox: "0 0 640 480",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            fillRule: "evenodd",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    strokeWidth: "1pt",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            fill: "#bd3d44",
                            d: "M0 0h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8V197H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8V512H0z",
                            transform: "scale(.9375)"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            fill: "#fff",
                            d: "M0 39.4h972.8v39.4H0zm0 78.8h972.8v39.3H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0z",
                            transform: "scale(.9375)"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: "#192f5d",
                    d: "M0 0h389.1v275.7H0z",
                    transform: "scale(.9375)"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: "#fff",
                    d: "M32.4 11.8L36 22.7h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 39.4l3.5 10.9h11.5L70.6 57 74 67.9l-9-6.7-9.3 6.7L59 57l-9-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7L124 57l-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5L330 57l3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 66.9L36 78h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zM64.9 94.5l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 122.1L36 133h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 149.7l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zM32.4 177.2l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 204.8l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 232.4l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7H29zm64.9 0l3.5 10.9h11.5L103 250l3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9H177l-9 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.5z",
                    transform: "scale(.9375)"
                })
            ]
        })
    });
};


/***/ }),

/***/ 5513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* reexport */ Calendar),
  "bA": () => (/* reexport */ Eye),
  "Xi": () => (/* reexport */ NavigateNext),
  "rx": () => (/* reexport */ NavigatePrevious),
  "z": () => (/* reexport */ Pencil),
  "gI": () => (/* reexport */ PlusSquare),
  "rr": () => (/* reexport */ Puzzle)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./components/icons/Calendar/Calendar.tsx


function Calendar({ className  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 16 16",
        className: external_clsx_default()("bi bi-calendar3", className),
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                d: "M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                d: "M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/icons/Calendar/index.ts


;// CONCATENATED MODULE: ./components/icons/Pencil/Pencil.tsx

function Pencil() {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 16 16",
        className: "bi bi-pencil",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            d: "M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
        })
    });
};

;// CONCATENATED MODULE: ./components/icons/Pencil/index.ts


;// CONCATENATED MODULE: ./components/icons/PlusSquare/PlusSquare.tsx


function PlusSquare({ className  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 16 16",
        className: external_clsx_default()("bi bi-plus-square", className),
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                d: "M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/icons/PlusSquare/index.ts


;// CONCATENATED MODULE: ./components/icons/Puzzle/Puzzle.tsx


function Puzzle({ className , ...other }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        ...other,
        width: "1em",
        height: "1em",
        viewBox: "0 0 16 16",
        className: external_clsx_default()("bi bi-puzzle", className),
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M4.605 2.5V2v.5zM3.61 3.6l.498-.043V3.55l-.498.05zM7 2.5h.5A.5.5 0 0 0 7 2v.5zm-.676 1.454l.304.397-.304-.397zm3.352 0l-.304.397.304-.397zM9 2.5V2a.5.5 0 0 0-.5.5H9zm3.39 1.1l-.498-.05v.007l.498.043zM12.1 7l-.498-.043a.5.5 0 0 0 .498.543V7zm1.854-.676l.397.304-.397-.304zm0 3.352l.397-.304-.397.304zM12.1 9v-.5a.5.5 0 0 0-.498.542L12.1 9zm.29 3.4l-.498.043v.007l.498-.05zM9 13.5h-.5a.5.5 0 0 0 .5.5v-.5zm.676-1.454l-.304-.397.304.397zm-3.352 0l.304-.397-.304.397zM7 13.5v.5a.5.5 0 0 0 .5-.5H7zm-2.395 0V13v.5zm-.995-1.1l.498.05v-.007L3.61 12.4zM3.9 9l.498.042A.5.5 0 0 0 3.9 8.5V9zm-1.854.676l-.397-.304.397.304zm0-3.352l-.397.304.397-.304zM3.9 7v.5a.5.5 0 0 0 .498-.543L3.9 7zm.705-5a1.5 1.5 0 0 0-1.493 1.65l.995-.1A.5.5 0 0 1 4.605 3V2zM7 2H4.605v1H7V2zm.5.882V2.5h-1v.382h1zm-.872 1.469c.375-.287.872-.773.872-1.469h-1c0 .195-.147.42-.48.675l.608.794zM6.5 4.5l.001-.006a.113.113 0 0 1 .012-.025.459.459 0 0 1 .115-.118l-.608-.794c-.274.21-.52.528-.52.943h1zM8 5c-.491 0-.912-.1-1.19-.24a.86.86 0 0 1-.271-.194.213.213 0 0 1-.039-.063V4.5h-1c0 .568.447.947.862 1.154C6.807 5.877 7.387 6 8 6V5zm1.5-.5v.003a.213.213 0 0 1-.039.064.86.86 0 0 1-.27.193C8.91 4.9 8.49 5 8 5v1c.613 0 1.193-.123 1.638-.346.415-.207.862-.586.862-1.154h-1zm-.128-.15c.065.05.099.092.115.119.008.013.01.021.012.025L9.5 4.5h1c0-.415-.246-.733-.52-.943l-.608.794zM8.5 2.883c0 .696.497 1.182.872 1.469l.608-.794c-.333-.255-.48-.48-.48-.675h-1zm0-.382v.382h1V2.5h-1zm2.895-.5H9v1h2.395V2zm1.493 1.65A1.5 1.5 0 0 0 11.395 2v1a.5.5 0 0 1 .498.55l.995.1zm-.29 3.392l.29-3.4-.996-.085-.29 3.4.996.085zm.284-.542H12.1v1h.782v-1zm.675-.48c-.255.333-.48.48-.675.48v1c.696 0 1.182-.497 1.469-.872l-.794-.608zm.943-.52c-.415 0-.733.246-.943.52l.794.608a.459.459 0 0 1 .118-.115.113.113 0 0 1 .025-.012L14.5 6.5v-1zM16 8c0-.613-.123-1.193-.346-1.638-.207-.415-.586-.862-1.154-.862v1h.003l.01.003a.237.237 0 0 1 .053.036.86.86 0 0 1 .194.27c.14.28.24.7.24 1.191h1zm-1.5 2.5c.568 0 .947-.447 1.154-.862C15.877 9.193 16 8.613 16 8h-1c0 .491-.1.912-.24 1.19a.86.86 0 0 1-.194.271.214.214 0 0 1-.063.039H14.5v1zm-.943-.52c.21.274.528.52.943.52v-1l-.006-.001a.113.113 0 0 1-.025-.012.458.458 0 0 1-.118-.115l-.794.608zm-.675-.48c.195 0 .42.147.675.48l.794-.608c-.287-.375-.773-.872-1.469-.872v1zm-.782 0h.782v-1H12.1v1zm.788 2.858l-.29-3.4-.996.084.29 3.401.996-.085zM11.395 14a1.5 1.5 0 0 0 1.493-1.65l-.995.1a.5.5 0 0 1-.498.55v1zM9 14h2.395v-1H9v1zm.5-.5v-.382h-1v.382h1zm0-.382c0-.195.147-.42.48-.675l-.608-.794c-.375.287-.872.773-.872 1.469h1zm.48-.675c.274-.21.52-.528.52-.943h-1l-.001.006a.113.113 0 0 1-.012.025.459.459 0 0 1-.115.118l.608.794zm.52-.943c0-.568-.447-.947-.862-1.154C9.193 10.123 8.613 10 8 10v1c.492 0 .912.1 1.19.24.14.07.226.14.271.194a.214.214 0 0 1 .039.063v.003h1zM8 10c-.613 0-1.193.123-1.638.346-.415.207-.862.586-.862 1.154h1v-.003l.003-.01a.214.214 0 0 1 .036-.053.859.859 0 0 1 .27-.194C7.09 11.1 7.51 11 8 11v-1zm-2.5 1.5c0 .415.246.733.52.943l.608-.794a.459.459 0 0 1-.115-.118.113.113 0 0 1-.012-.025L6.5 11.5h-1zm.52.943c.333.255.48.48.48.675h1c0-.696-.497-1.182-.872-1.469l-.608.794zm.48.675v.382h1v-.382h-1zM4.605 14H7v-1H4.605v1zm-1.493-1.65A1.5 1.5 0 0 0 4.605 14v-1a.5.5 0 0 1-.498-.55l-.995-.1zm.29-3.393l-.29 3.401.996.085.29-3.4-.996-.086zm-.284.543H3.9v-1h-.782v1zm-.675.48c.255-.333.48-.48.675-.48v-1c-.696 0-1.182.497-1.469.872l.794.608zm-.943.52c.415 0 .733-.246.943-.52l-.794-.608a.459.459 0 0 1-.118.115.112.112 0 0 1-.025.012L1.5 9.5v1zM0 8c0 .613.123 1.193.346 1.638.207.415.586.862 1.154.862v-1h-.003a.213.213 0 0 1-.064-.039.86.86 0 0 1-.193-.27C1.1 8.91 1 8.49 1 8H0zm1.5-2.5c-.568 0-.947.447-1.154.862C.123 6.807 0 7.387 0 8h1c0-.492.1-.912.24-1.19a.86.86 0 0 1 .194-.271.213.213 0 0 1 .063-.039H1.5v-1zm.943.52c-.21-.274-.528-.52-.943-.52v1l.006.001a.112.112 0 0 1 .025.012c.027.016.068.05.118.115l.794-.608zm.675.48c-.195 0-.42-.147-.675-.48l-.794.608c.287.375.773.872 1.469.872v-1zm.782 0h-.782v1H3.9v-1zm-.788-2.858l.29 3.4.996-.085-.29-3.4-.996.085z"
        })
    });
};

;// CONCATENATED MODULE: ./components/icons/Puzzle/index.ts


;// CONCATENATED MODULE: ./components/icons/Eye/Eye.tsx

function Eye() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 16 16",
        className: "bi bi-eye",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                d: "M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                d: "M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/icons/Eye/index.ts


// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/icons/NavigateNext/NavigateNext.tsx


function NavigateNext(args) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "50",
        height: "50",
        viewBox: "0 0 501.5 501.5",
        ...args,
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/icons/NavigateNext/index.ts


;// CONCATENATED MODULE: ./components/icons/NavigatePrevious/NavigatePrevious.tsx


function NavigatePrevious(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "50",
        height: "50",
        viewBox: "0 0 501.5 501.5",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/icons/NavigatePrevious/index.ts


;// CONCATENATED MODULE: ./components/icons/index.ts









/***/ }),

/***/ 5264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ AccountModal_AccountModal)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/ui/UIContext.tsx
var UIContext = __webpack_require__(7423);
// EXTERNAL MODULE: ./lib/user/UserContext.tsx
var UserContext = __webpack_require__(6149);
;// CONCATENATED MODULE: ./components/ui/AccountModal/AccountModal.tsx




const AccountModal = ({})=>{
    const { closeModal  } = (0,UIContext/* useUI */.j)();
    const { segment: initialSegment  } = (0,UserContext/* useUserContext */.SE)();
    const { 0: segment , 1: setSegment  } = (0,external_react_.useState)(initialSegment);
    const handleLogin = ()=>{
        if (segment == "guest") {
            window.location.href = "/account/logout?redirect=" + encodeURIComponent(window.location.href);
        } else {
            window.location.href = "/account/login?username=" + encodeURIComponent(segment) + "&redirect=" + encodeURIComponent(window.location.href);
        }
    };
    const handleHide = ()=>{
        closeModal();
    };
    const handleChangeSegment = (e)=>{
        setSegment(e.target.value);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Sign In"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "af-form-field",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        role: "text",
                        children: "Username"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                        className: "af-select",
                        id: "username",
                        value: segment || undefined,
                        onChange: handleChangeSegment,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "",
                                placeholder: "select..."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "vip",
                                children: "VIP"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "bargain-hunter",
                                children: "Bargain Hunter"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "fashionista",
                                children: "Fashionista"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "home-trendsetter",
                                children: "Home Trendsetter"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "globe-trotter",
                                children: "Globe Trotter"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "guest",
                                children: "Guest"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "af-form-field",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        role: "text",
                        children: "Password"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        id: "password",
                        type: "password",
                        className: "af-input",
                        value: "password",
                        readOnly: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "af-form-field",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "af-button af-button-dark",
                        onClick: handleLogin,
                        children: "Sign In"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "af-button af-button-light",
                        onClick: handleHide,
                        children: "Cancel"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                role: "text",
                children: "Don’t have an account?"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "af-form-field",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "af-button af-button-light",
                    onClick: handleHide,
                    children: "Create an account"
                })
            })
        ]
    });
};
/* harmony default export */ const AccountModal_AccountModal = (AccountModal);

;// CONCATENATED MODULE: ./components/ui/AccountModal/index.ts



/***/ }),

/***/ 6562:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_core_Masthead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2792);
/* harmony import */ var _lib_user_UserContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6149);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5611);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_core_Masthead__WEBPACK_IMPORTED_MODULE_5__, nanoid__WEBPACK_IMPORTED_MODULE_7__]);
([_components_core_Masthead__WEBPACK_IMPORTED_MODULE_5__, nanoid__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const styles = (theme)=>({
        root: {},
        link: {
            textTransform: "uppercase"
        }
    });
const Breadcrumb = (props)=>{
    const { className , classes , navigationItem , loading =false , ...other } = props;
    const { findByHref  } = (0,_components_core_Masthead__WEBPACK_IMPORTED_MODULE_5__/* .useNavigation */ .HJ)();
    const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const nodes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (navigationItem) {
            return [
                ...navigationItem.parents,
                navigationItem
            ];
        }
        let url = asPath;
        if (url.indexOf("?") !== -1) {
            url = url.slice(0, url.indexOf("?"));
        }
        if (url.indexOf("#") !== -1) {
            url = url.slice(0, url.indexOf("#"));
        }
        const current = findByHref(url);
        if (current) {
            return [
                ...current.parents,
                current
            ];
        }
        return [];
    }, [
        navigationItem,
        asPath,
        findByHref
    ]);
    const { language  } = (0,_lib_user_UserContext__WEBPACK_IMPORTED_MODULE_6__/* .useUserContext */ .SE)();
    // NOVADEV-18: Add 'loading' skeleton for breadcrumb and category name on PLP
    return loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Breadcrumbs, {
        "aria-label": "breadcrumb",
        className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className),
        ...other,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Link, {
            variant: "h4",
            color: "inherit",
            href: "/",
            className: classes.link,
            children: "\xa0"
        })
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Breadcrumbs, {
        "aria-label": "breadcrumb",
        className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className),
        ...other,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Link, {
                variant: "h4",
                color: "inherit",
                href: "/",
                className: classes.link,
                children: language === "de" ? "Haupt" : "Home"
            }),
            nodes.map((node)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Link, {
                    variant: "h4",
                    color: "inherit",
                    href: node.href,
                    className: classes.link,
                    children: node.title
                }, (0,nanoid__WEBPACK_IMPORTED_MODULE_7__.nanoid)());
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_mui_styles__WEBPACK_IMPORTED_MODULE_8__.withStyles)(styles)(Breadcrumb));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8831:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _Breadcrumb__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6562);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__]);
_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ ComponentFrame_ComponentFrame)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/ui/ComponentFrame/ComponentFrame.module.css
var ComponentFrame_module = __webpack_require__(3618);
var ComponentFrame_module_default = /*#__PURE__*/__webpack_require__.n(ComponentFrame_module);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./components/ui/ComponentFrame/ComponentFrame.tsx




const ComponentFrame = ({ children , menu , className , MenuProps , OverlayProps  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_clsx_default()((ComponentFrame_module_default()).root, className),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ComponentFrame_module_default()).content,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_clsx_default()((ComponentFrame_module_default()).overlay, OverlayProps?.className),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: external_clsx_default()((ComponentFrame_module_default()).menu, MenuProps?.className),
                    children: menu
                })
            })
        ]
    });
};
/* harmony default export */ const ComponentFrame_ComponentFrame = (ComponentFrame);

;// CONCATENATED MODULE: ./components/ui/ComponentFrame/index.ts



/***/ }),

/***/ 7298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "sG": () => (/* reexport */ WithDebugState),
  "qi": () => (/* reexport */ DebugContext_useDebug)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
;// CONCATENATED MODULE: ./components/ui/DebugToolbar/DebugContext.tsx


const Context = /*#__PURE__*/ (0,external_react_.createContext)(null);
function DebugContext_useDebug() {
    return (0,external_react_.useContext)(Context);
}
const WithDebugState = ({ children  })=>{
    const { 0: debugging , 1: setDebugging  } = (0,external_react_.useState)(false);
    const { 0: showSlots , 1: setShowSlots  } = (0,external_react_.useState)(false);
    const { 0: showContent , 1: setShowContent  } = (0,external_react_.useState)(false);
    const { 0: showEditions , 1: setShowEditions  } = (0,external_react_.useState)(false);
    const { 0: personalizationTags , 1: setPersonalizationTags  } = (0,external_react_.useState)([]);
    const { 0: personalizationBehaviors , 1: setPersonalizationBehaviors  } = (0,external_react_.useState)([]);
    return /*#__PURE__*/ jsx_runtime_.jsx(Context.Provider, {
        value: {
            debugging,
            setDebugging,
            showSlots,
            setShowSlots,
            showContent,
            setShowContent,
            showEditions,
            setShowEditions,
            personalizationTags,
            setPersonalizationTags,
            personalizationBehaviors,
            setPersonalizationBehaviors
        },
        children: children
    });
};

;// CONCATENATED MODULE: ./components/ui/DebugToolbar/DebugToolbar.tsx





const DebugToolbar = ({ children  })=>{
    const { debugging , showSlots , setShowSlots , showContent , setShowContent , showEditions , setShowEditions  } = useDebug();
    if (!debugging) {
        return null;
    }
    const toggleShowSlots = ()=>{
        setShowSlots(!showSlots);
    };
    const toggleShowContent = ()=>{
        setShowContent(!showContent);
    };
    const toggleShowEditions = ()=>{
        setShowEditions(!showEditions);
    };
    return /*#__PURE__*/ _jsx("div", {
        className: clsx(s.root, "alert alert-secondary"),
        children: /*#__PURE__*/ _jsxs("div", {
            className: s.controls,
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "custom-control custom-switch",
                    children: [
                        /*#__PURE__*/ _jsx("input", {
                            type: "checkbox",
                            className: "custom-control-input",
                            id: "showSlots",
                            checked: showSlots,
                            onChange: toggleShowSlots
                        }),
                        /*#__PURE__*/ _jsx("label", {
                            className: "custom-control-label",
                            htmlFor: "showSlots",
                            children: "Show Slots"
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "custom-control custom-switch",
                    children: [
                        /*#__PURE__*/ _jsx("input", {
                            type: "checkbox",
                            className: "custom-control-input",
                            id: "showContent",
                            checked: showContent,
                            onChange: toggleShowContent
                        }),
                        /*#__PURE__*/ _jsx("label", {
                            className: "custom-control-label",
                            htmlFor: "showContent",
                            children: "Show Content"
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "custom-control custom-switch",
                    children: [
                        /*#__PURE__*/ _jsx("input", {
                            type: "checkbox",
                            className: "custom-control-input",
                            id: "showEditions",
                            checked: showEditions,
                            onChange: toggleShowEditions
                        }),
                        /*#__PURE__*/ _jsx("label", {
                            className: "custom-control-label",
                            htmlFor: "showEditions",
                            children: "Show Editions"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const DebugToolbar_DebugToolbar = ((/* unused pure expression or super */ null && (DebugToolbar)));

;// CONCATENATED MODULE: ./components/ui/DebugToolbar/index.ts




/***/ }),

/***/ 590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ InfoPanel_InfoPanel)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
;// CONCATENATED MODULE: ./components/ui/InfoPanel/InfoPanel.tsx




const styles = (theme)=>({
        root: {
            padding: "40px 60px 40px 60px",
            background: "rgba(255, 255, 255, 0.9)",
            display: "inline-block"
        }
    });
const InfoPanel = (props)=>{
    const { classes , className , children , variant , opacity =0.9 , col ="rgb(255, 255, 255)" , borderStyle , ...other } = props;
    function hexToRgb(hex) {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
            return r + r + g + g + b + b;
        });
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    function getRGB(str) {
        var match = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
        return match ? {
            r: match[1],
            g: match[2],
            b: match[3]
        } : {};
    }
    var colobj;
    // Logic for colour parsing - needs to deal with hex and RGB
    if (col.indexOf("#") == 0) {
        colobj = hexToRgb(col);
    }
    if (col.indexOf("rgb") == 0) {
        // need to get the rgb.
        colobj = getRGB(col);
    }
    // border style
    var borderstr;
    switch(borderStyle){
        case "none":
            borderstr = "none";
            break;
        case "white":
            borderstr = "5px solid white";
            break;
        case "black":
            borderstr = "5px solid black";
            break;
        default:
            borderstr = "none";
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()(classes.root, className),
        ...other,
        style: {
            backgroundColor: `rgba(${colobj?.r},${colobj?.g},${colobj?.b},${opacity})`,
            border: borderstr
        },
        children: children
    });
};
/* harmony default export */ const InfoPanel_InfoPanel = ((0,styles_.withStyles)(styles)(InfoPanel));

;// CONCATENATED MODULE: ./components/ui/InfoPanel/index.ts



/***/ }),

/***/ 1891:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5611);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nanoid__WEBPACK_IMPORTED_MODULE_3__]);
nanoid__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const styles = (theme)=>({});
const LegacySliderSlide = (props)=>{
    const { classes , className , children , index , ...other } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("amp-dc-slider-slide", "amp-dc-slider-slide-card", "js_ca_slide", className),
        ...other,
        children: children
    }, (0,nanoid__WEBPACK_IMPORTED_MODULE_3__.nanoid)());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_mui_styles__WEBPACK_IMPORTED_MODULE_4__.withStyles)(styles)(LegacySliderSlide));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ LegacySlider_LegacySlider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./components/icons/index.ts + 14 modules
var icons = __webpack_require__(5513);
// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
;// CONCATENATED MODULE: ./components/ui/LegacySlider/LegacySlider.tsx





const styles = (theme)=>({});
const LegacySlider = (props)=>{
    const { classes , children , className , navigationDots =false , infinite =0 , autoplay =false , ...other } = props;
    let numChildren = external_react_default().Children.count(children);
    const component = /*#__PURE__*/ (0,external_react_.createRef)();
    (0,external_react_.useEffect)(()=>{
        const { loryHelpers  } = window || {};
        const element = component.current;
        try {
            if (element && loryHelpers && numChildren > 0) {
                loryHelpers.initSliders([
                    element
                ]);
            }
        } catch (err) {}
        return ()=>{
            if (element && element.__sliderInstance) {
                try {
                    element.__sliderInstance.destroy();
                } catch (err) {}
            }
        };
    }, [
        component,
        numChildren
    ]);
    if (numChildren === 0) {
        // This component is unstable with no slides
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: component,
        className: external_clsx_default()("amp-dc-slider", "amp-dc-card-list-slider", className),
        "data-infinite": "true",
        "data-autoplay": "true",
        "data-navigation": "false",
        "data-sliderlength": "3",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: external_clsx_default()("amp-dc-slider-frame", "js_frame", {
                ["dots"]: navigationDots
            }),
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "amp-dc-slider-slides js_slides",
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "amp-dc-slider-prev js_prev",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* NavigatePrevious */.rx, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "amp-dc-slider-next js_next",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* NavigateNext */.Xi, {})
                })
            ]
        })
    });
};
/* harmony default export */ const LegacySlider_LegacySlider = ((0,styles_.withStyles)(styles)(LegacySlider));

;// CONCATENATED MODULE: ./components/ui/LegacySlider/index.ts



/***/ }),

/***/ 5474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ LocaleModal_LocaleModal)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/ui/UIContext.tsx
var UIContext = __webpack_require__(7423);
// EXTERNAL MODULE: ./lib/cms/CmsContext.tsx
var CmsContext = __webpack_require__(9725);
;// CONCATENATED MODULE: ./components/ui/LocaleModal/LocaleModal.tsx




const LocaleModal = ({})=>{
    const { closeModal  } = (0,UIContext/* useUI */.j)();
    const { locale: initialLocale , currency: initialCurrency  } = (0,CmsContext/* useCmsContext */.Eb)();
    const { 0: locale , 1: setLocale  } = (0,external_react_.useState)(initialLocale);
    const { 0: currency , 1: setCurrency  } = (0,external_react_.useState)(initialCurrency);
    const handleConfirm = ()=>{
        window.location.href = "/locale/" + locale + "/currency/" + currency + "?redirect=" + encodeURIComponent(window.location.href);
    };
    const handleHide = ()=>{
        closeModal();
    };
    const handleChange = (e)=>{
        setLocale(e.target.value);
    };
    const handleChangeCurrency = (e)=>{
        setCurrency(e.target.value);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Amplience Retail Storefront"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "af-form",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "af-form-field",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            role: "text",
                            children: "Language"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                            className: "af-select",
                            id: "language",
                            value: locale,
                            onChange: handleChange,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "en-US",
                                    children: "Select preferred language"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "en-US",
                                    children: "English (US)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "en-GB",
                                    children: "English (UK)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "de-DE",
                                    children: "Deutsch"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "fr-FR",
                                    children: "Fran\xe7ais"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "zh-CN",
                                    children: "简体中文"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "ar-AE",
                                    children: "العربية"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "af-form",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "af-form-field",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            role: "text",
                            children: "Currency"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                            className: "af-select",
                            id: "currency",
                            value: currency,
                            onChange: handleChangeCurrency,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "USD",
                                    children: "Select preferred currency"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "USD",
                                    children: "$ - USD"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "GBP",
                                    children: "\xa3 - GBP"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "EUR",
                                    children: "€ - EUR"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "CNY",
                                    children: "Dhs - AED"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "af-form",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "af-form-field",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "af-button af-button-dark",
                            onClick: handleConfirm,
                            children: "Confirm"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "af-button af-button-light",
                            onClick: handleHide,
                            children: "Cancel"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const LocaleModal_LocaleModal = (LocaleModal);

;// CONCATENATED MODULE: ./components/ui/LocaleModal/index.ts



/***/ }),

/***/ 9078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Modal_Modal)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/ui/Modal/Modal.module.css
var Modal_module = __webpack_require__(9168);
var Modal_module_default = /*#__PURE__*/__webpack_require__.n(Modal_module);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./components/ui/Modal/Modal.tsx




const Modal = ({ open =false , onClose , children , ...other })=>{
    let ref = (0,external_react_.useRef)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("af-modal-content", {
            ["af-modal-content-active"]: open
        }),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Modal_module_default()).modal,
            ref: ref,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "af-modal",
                children: children
            })
        })
    });
};
/* harmony default export */ const Modal_Modal = (Modal);

;// CONCATENATED MODULE: ./components/ui/Modal/index.ts



/***/ }),

/***/ 448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Overlay_Overlay)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
;// CONCATENATED MODULE: ./components/ui/Overlay/Overlay.tsx




const styles = (theme)=>({
        root: {
            position: "relative"
        },
        content: {},
        container: {
            "&$floating, &$responsive": {
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            "&$responsive": {
                [theme.breakpoints.down("md")]: {
                    "position": "unset",
                    "width": "100%",
                    "border": "none !important"
                }
            }
        },
        overlay: {
            "&$floating, &$responsive": {
                "position": "absolute",
                "display": "inline-block"
            },
            "&$responsive": {
                [theme.breakpoints.down("md")]: {
                    "position": "unset",
                    "transform": "unset !important",
                    "width": "100% !important",
                    "border": "none !important"
                }
            },
            "&$floatingRight": {
                right: 0
            },
            "&$floatingLeft": {
                left: 0
            },
            "&$floatingCenter": {
                left: "50%",
                transform: "translateX(-50%)",
                "&$floatingMiddle": {
                    transform: "translateX(-50%) translateY(-50%)"
                },
                "&$stacked": {
                    "transform": "unset !important"
                }
            },
            "&$floatingTop": {
                top: 0
            },
            "&$floatingMiddle": {
                top: "50%",
                transform: "translateY(-50%)",
                "&$floatingCenter": {
                    transform: "translateX(-50%) translateY(-50%)"
                },
                "&$stacked": {
                    "transform": "unset !important"
                }
            },
            "&$floatingBottom": {
                bottom: 0
            }
        },
        responsive: {},
        floating: {},
        stacked: {},
        floatingLeft: {},
        floatingCenter: {},
        floatingRight: {},
        floatingTop: {},
        floatingMiddle: {},
        floatingBottom: {}
    });
const Overlay = (props)=>{
    const { classes , className , children , overlay , overlayStyle , variant , floatingHorizontalAlignment , floatingVerticalAlignment , ...other } = props;
    const variantMixin = {
        [classes.responsive]: variant === "responsive",
        [classes.floating]: variant === "floating",
        [classes.stacked]: variant === "stacked"
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_clsx_default()(classes.root, className, variantMixin),
        ...other,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.content,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_clsx_default()(classes.container, variantMixin),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: external_clsx_default()(classes.overlay, {
                        ...variantMixin,
                        [classes.floatingLeft]: floatingHorizontalAlignment === "left",
                        [classes.floatingCenter]: floatingHorizontalAlignment === "center",
                        [classes.floatingRight]: floatingHorizontalAlignment === "right",
                        [classes.floatingTop]: floatingVerticalAlignment === "top",
                        [classes.floatingMiddle]: floatingVerticalAlignment === "middle",
                        [classes.floatingBottom]: floatingVerticalAlignment === "bottom"
                    }),
                    style: overlayStyle,
                    children: overlay
                })
            })
        ]
    });
};
/* harmony default export */ const Overlay_Overlay = ((0,styles_.withStyles)(styles)(Overlay));

;// CONCATENATED MODULE: ./components/ui/Overlay/index.ts



/***/ }),

/***/ 9153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ PageContent_PageContent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
;// CONCATENATED MODULE: ./components/ui/PageContent/PageContent.tsx




const styles = (theme)=>({
        root: {
            padding: "0 32px",
            margin: "0 auto",
            maxWidth: 1400
        }
    });
const PageContent = (props)=>{
    const { classes , className , children , ...other } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()(classes.root, className),
        ...other,
        children: children
    });
};
/* harmony default export */ const PageContent_PageContent = ((0,styles_.withStyles)(styles)(PageContent));

;// CONCATENATED MODULE: ./components/ui/PageContent/index.ts



/***/ }),

/***/ 9841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ PreviewToolbar_PreviewToolbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/ui/PreviewToolbar/PreviewToolbar.module.css
var PreviewToolbar_module = __webpack_require__(9662);
var PreviewToolbar_module_default = /*#__PURE__*/__webpack_require__.n(PreviewToolbar_module);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "react-moment"
var external_react_moment_ = __webpack_require__(661);
var external_react_moment_default = /*#__PURE__*/__webpack_require__.n(external_react_moment_);
// EXTERNAL MODULE: ./lib/cms/CmsContext.tsx
var CmsContext = __webpack_require__(9725);
// EXTERNAL MODULE: ./components/icons/index.ts + 14 modules
var icons = __webpack_require__(5513);
;// CONCATENATED MODULE: ./components/ui/PreviewToolbar/PreviewToolbar.tsx







const PreviewToolbar = ({ children  })=>{
    const { timestamp , stagingApi  } = (0,CmsContext/* useCmsContext */.Eb)() || {};
    if (!timestamp || !stagingApi) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_clsx_default()((PreviewToolbar_module_default()).root, "alert alert-danger"),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (PreviewToolbar_module_default()).info,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(icons/* Calendar */.f, {}),
                    " Currently previewing: ",
                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_moment_default()), {
                        format: "YYYY/MM/DD, h:mm:ss a",
                        children: Number(timestamp)
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (PreviewToolbar_module_default()).controls,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "/current",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: "btn btn-outline-danger btn-sm",
                        children: "View Current"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const PreviewToolbar_PreviewToolbar = (PreviewToolbar);

;// CONCATENATED MODULE: ./components/ui/PreviewToolbar/index.ts



/***/ }),

/***/ 6172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Section_Section)
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
// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
;// CONCATENATED MODULE: ./components/ui/Section/Section.tsx





const styles = (theme)=>({
        root: {
            padding: "40px 50px"
        },
        title: {
        },
        content: {
            padding: "40px 0px 40px 0px",
            borderTop: "1px solid #bebebe",
            borderBottom: "1px solid #bebebe",
            "&:empty": {
                display: "none"
            }
        }
    });
const Section = (props)=>{
    const { classes , className , title , children , ...other } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_clsx_default()(classes.root, className),
        children: [
            title && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                    className: classes.title,
                    component: "div",
                    variant: "h2",
                    children: title
                })
            }),
            children && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: classes.content,
                children: children
            })
        ]
    });
};
/* harmony default export */ const Section_Section = ((0,styles_.withStyles)(styles)(Section));

;// CONCATENATED MODULE: ./components/ui/Section/index.ts



/***/ }),

/***/ 2965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Sidebar_Sidebar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(9484);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "@mui/material/styles"
var material_styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./components/ui/Sidebar/Sidebar.tsx






const styles = (theme)=>({
        root: {},
        background: {
            position: "fixed",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 1100,
            transition: "all 200ms ease-out",
            display: "none",
            "&$open": {
                background: (0,material_styles_.alpha)(theme.palette.common.black, 0.3),
                display: "unset"
            }
        },
        panel: {
            position: "fixed",
            width: 300,
            bottom: 0,
            top: 0,
            zIndex: 1100,
            transition: "all 200ms ease-out"
        },
        left: {
            left: -300,
            "&$open": {
                left: 0
            }
        },
        right: {
            right: -300,
            "&$open": {
                right: 0
            }
        },
        paper: {
            width: "100%",
            height: "100%",
            overflowY: "auto"
        },
        open: {}
    });
const Sidebar = (props)=>{
    const { classes , variant ="left" , open , children , onClose , ...other } = props;
    const handleClose = ()=>{
        if (onClose) {
            onClose();
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classes.root,
        ...other,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: handleClose,
                className: external_clsx_default()(classes.background, {
                    [classes.open]: open
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("aside", {
                className: external_clsx_default()(classes.panel, {
                    [classes.open]: open,
                    [classes.right]: variant === "right",
                    [classes.left]: variant === "left"
                }),
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Paper, {
                    className: classes.paper,
                    style: {
                        width: "100%",
                        height: "100%"
                    },
                    elevation: 3,
                    children: children
                })
            })
        ]
    });
};
/* harmony default export */ const Sidebar_Sidebar = ((0,styles_.withStyles)(styles)(Sidebar));

;// CONCATENATED MODULE: ./components/ui/Sidebar/index.ts



/***/ }),

/***/ 7423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ useUI),
/* harmony export */   "l": () => (/* binding */ WithUIContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const Provider = (props)=>{
    const reducer = (state, action)=>{
        switch(action.type){
            case "OPEN_MODAL":
                return {
                    ...state,
                    currentModal: action.modal
                };
            case "CLOSE_MODAL":
                return {
                    ...state,
                    currentModal: "NONE"
                };
            case "TOGGLE_NAVIGATION":
                return {
                    ...state,
                    navigationToggle: action.value
                };
        }
    };
    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, {
        currentModal: "NONE",
        navigationToggle: false
    });
    const value = {
        ...state,
        toggleNavigation: (toggle)=>dispatch({
                type: "TOGGLE_NAVIGATION",
                value: !toggle
            }),
        openModal: (modal)=>dispatch({
                type: "OPEN_MODAL",
                modal
            }),
        closeModal: ()=>dispatch({
                type: "CLOSE_MODAL"
            })
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Context.Provider, {
        value: value,
        children: props.children
    });
};
const useUI = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context);
};
const WithUIContext = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Provider, {
        children: children
    });
};


/***/ }),

/***/ 8448:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export WithUI */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5179);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8506);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_core__WEBPACK_IMPORTED_MODULE_3__, _components_ui__WEBPACK_IMPORTED_MODULE_4__]);
([_components_core__WEBPACK_IMPORTED_MODULE_3__, _components_ui__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const WithUI = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_core__WEBPACK_IMPORTED_MODULE_3__/* .WithTheme */ .Yi, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default()), {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_4__/* .WithUIContext */ .lN, {
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WithUI);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8506:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$0": () => (/* reexport safe */ _Section__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "IJ": () => (/* reexport safe */ _LegacySlider__WEBPACK_IMPORTED_MODULE_12__.Z),
/* harmony export */   "JH": () => (/* reexport safe */ _PageContent__WEBPACK_IMPORTED_MODULE_10__.Z),
/* harmony export */   "Ms": () => (/* reexport safe */ _LegacySlider_LegacySliderSlide__WEBPACK_IMPORTED_MODULE_13__.Z),
/* harmony export */   "OD": () => (/* reexport safe */ _PreviewToolbar__WEBPACK_IMPORTED_MODULE_8__.Z),
/* harmony export */   "Q_": () => (/* reexport safe */ _LocaleModal__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "VJ": () => (/* reexport safe */ _InfoPanel__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "Zc": () => (/* reexport safe */ _AccountModal__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "aG": () => (/* reexport safe */ _Breadcrumb__WEBPACK_IMPORTED_MODULE_11__.Z),
/* harmony export */   "aV": () => (/* reexport safe */ _Overlay__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "fR": () => (/* reexport safe */ _ComponentFrame__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "l8": () => (/* reexport safe */ _UIContext__WEBPACK_IMPORTED_MODULE_7__.j),
/* harmony export */   "lN": () => (/* reexport safe */ _UIContext__WEBPACK_IMPORTED_MODULE_7__.l),
/* harmony export */   "qi": () => (/* reexport safe */ _DebugToolbar__WEBPACK_IMPORTED_MODULE_9__.qi),
/* harmony export */   "sG": () => (/* reexport safe */ _DebugToolbar__WEBPACK_IMPORTED_MODULE_9__.sG),
/* harmony export */   "vr": () => (/* reexport safe */ _WithUI__WEBPACK_IMPORTED_MODULE_6__.Z)
/* harmony export */ });
/* harmony import */ var _AccountModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5264);
/* harmony import */ var _LocaleModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5474);
/* harmony import */ var _ComponentFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9602);
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(448);
/* harmony import */ var _InfoPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(590);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6172);
/* harmony import */ var _WithUI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8448);
/* harmony import */ var _UIContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7423);
/* harmony import */ var _PreviewToolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9841);
/* harmony import */ var _DebugToolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7298);
/* harmony import */ var _PageContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9153);
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8831);
/* harmony import */ var _LegacySlider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8017);
/* harmony import */ var _LegacySlider_LegacySliderSlide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1891);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_WithUI__WEBPACK_IMPORTED_MODULE_6__, _Breadcrumb__WEBPACK_IMPORTED_MODULE_11__, _LegacySlider_LegacySliderSlide__WEBPACK_IMPORTED_MODULE_13__]);
([_WithUI__WEBPACK_IMPORTED_MODULE_6__, _Breadcrumb__WEBPACK_IMPORTED_MODULE_11__, _LegacySlider_LegacySliderSlide__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1098:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* reexport safe */ _useContentAnalytics__WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _useContentAnalytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5105);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useContentAnalytics__WEBPACK_IMPORTED_MODULE_0__]);
_useContentAnalytics__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ trackEvent)
/* harmony export */ });
function trackEvent(event) {
// Build arguments and track events
};


/***/ }),

/***/ 4314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ trackPageView)
/* harmony export */ });
let enabled = false;
function trackPageView() {
    if (enabled) {
    // TODO: Track page view
    }
};


/***/ }),

/***/ 5105:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ useContentAnalytics)
/* harmony export */ });
/* harmony import */ var _trackEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3563);
/* harmony import */ var _components_cms_modern_CmsContentItem_CmsContentItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4012);
/* harmony import */ var _components_cms_modern_CmsEdition_CmsEdition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9318);
/* harmony import */ var _components_cms_modern_CmsSlot_CmsSlot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5271);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_cms_modern_CmsContentItem_CmsContentItem__WEBPACK_IMPORTED_MODULE_0__, _components_cms_modern_CmsEdition_CmsEdition__WEBPACK_IMPORTED_MODULE_1__, _components_cms_modern_CmsSlot_CmsSlot__WEBPACK_IMPORTED_MODULE_2__]);
([_components_cms_modern_CmsContentItem_CmsContentItem__WEBPACK_IMPORTED_MODULE_0__, _components_cms_modern_CmsEdition_CmsEdition__WEBPACK_IMPORTED_MODULE_1__, _components_cms_modern_CmsSlot_CmsSlot__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




let enabled = false;
function useContentAnalytics() {
    const { id: cmsContentId  } = (0,_components_cms_modern_CmsContentItem_CmsContentItem__WEBPACK_IMPORTED_MODULE_0__/* .useCmsContentItem */ .A)() || {};
    const { id: cmsEditionId  } = (0,_components_cms_modern_CmsEdition_CmsEdition__WEBPACK_IMPORTED_MODULE_1__/* .useCmsEdition */ .r)() || {};
    const { id: cmsSlotId  } = (0,_components_cms_modern_CmsSlot_CmsSlot__WEBPACK_IMPORTED_MODULE_2__/* .useCmsSlot */ .c)() || {};
    return {
        trackEvent: (event)=>{
            enabled && (0,_trackEvent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
                ...event,
                context: {
                    cmsContentId,
                    cmsEditionId,
                    cmsSlotId
                }
            });
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D3": () => (/* binding */ ImageFormat),
/* harmony export */   "Dz": () => (/* binding */ ImageScaleFit),
/* harmony export */   "QW": () => (/* binding */ getImageURL),
/* harmony export */   "hj": () => (/* binding */ ImageScaleMode)
/* harmony export */ });
var ImageFormat;
(function(ImageFormat) {
    ImageFormat["WEBP"] = "webp";
    ImageFormat["JPEG"] = "jpeg";
    ImageFormat["PNG"] = "png";
    ImageFormat["GIF"] = "gif";
    ImageFormat["DEFAULT"] = "default";
})(ImageFormat || (ImageFormat = {}));
var ImageScaleMode;
(function(ImageScaleMode) {
    ImageScaleMode["ASPECT_RATIO"] = "aspect";
    ImageScaleMode["CROP"] = "c";
    ImageScaleMode["STRETCH"] = "s";
    ImageScaleMode["TOP_LEFT"] = "tl";
    ImageScaleMode["TOP_CENTER"] = "tc";
    ImageScaleMode["TOP_RIGHT"] = "tr";
    ImageScaleMode["MIDDLE_LEFT"] = "ml";
    ImageScaleMode["MIDDLE_CENTER"] = "mc";
    ImageScaleMode["MIDDLE_RIGHT"] = "mr";
    ImageScaleMode["BOTTOM_LEFT"] = "bl";
    ImageScaleMode["BOTTOM_CENTER"] = "bc";
    ImageScaleMode["BOTTOM_RIGHT"] = "br";
})(ImageScaleMode || (ImageScaleMode = {}));
var ImageScaleFit;
(function(ImageScaleFit) {
    ImageScaleFit["CENTER"] = "center";
    ImageScaleFit["POINT_OF_INTEREST"] = "poi";
})(ImageScaleFit || (ImageScaleFit = {}));
function getImageURL(image, transformations = {}) {
    const { seoFileName , format , width , height , poi , scaleMode , scaleFit , aspectRatio , upscale , fliph , flipv , rot , hue , sat , bri , crop , templates , strip , quality  } = transformations;
    const getImageHost = (host)=>{
        if (host === "i1.adis.ws") {
            return "cdn.media.amplience.net";
        }
        return host;
    };
    let url = typeof image === "string" ? image : `https://${getImageHost(image.defaultHost)}/i/${encodeURIComponent(image.endpoint)}/${encodeURIComponent(image.name)}`;
    if (seoFileName) {
        url += `/${encodeURIComponent(seoFileName)}`;
    }
    if (format && format !== ImageFormat.DEFAULT) {
        url += `.${format}`;
    }
    const query = [];
    const params = {
        "w": width,
        "h": height,
        "sm": scaleMode,
        "scaleFit": scaleFit,
        "aspect": aspectRatio,
        "upscale": upscale,
        "fliph": fliph,
        "flipv": flipv,
        "rotate": rot,
        "hue": hue,
        "sat": sat,
        "bri": bri,
        "strip": strip,
        "qlt": quality
    };
    for (let param of Object.keys(params)){
        const value = params[param];
        if (value !== undefined && value !== null && value != 0) {
            query.push(`${param}=${value}`);
        }
    }
    if (poi && poi.x !== -1 && poi.y !== -1) {
        query.push(`poi=${poi.x},${poi.y},0.01,0.01`);
    }
    if (crop && crop.length === 4 && crop.filter((x)=>x !== 0).length > 0) {
        query.push(`crop=${crop[0]},${crop[1]},${crop[2]},${crop[3]}`);
    }
    if (templates) {
        for (let template of templates){
            query.push(`$${template}$`);
        }
    }
    if (query.length > 0) {
        url += `?${query.join("&")}`;
    }
    return url;
}


/***/ })

};
;