"use strict";
exports.id = 18;
exports.ids = [18];
exports.modules = {

/***/ 18:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nf": () => (/* binding */ notNull),
/* harmony export */   "fv": () => (/* binding */ mapToID)
/* harmony export */ });
/* unused harmony exports useAsync, objectToSize */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// custom Hook for automatic abortion on unmount or dependency change
// You might add onFailure for promise errors as well.
const useAsync = (asyncFn, onSuccess)=>{
    useEffect(()=>{
        let isActive = true;
        asyncFn().then((data)=>{
            if (isActive) onSuccess(data);
            else {
                console.debug("aborted setState on unmounted component");
            }
        });
        return ()=>{
            isActive = false;
        };
    }, [
        asyncFn,
        onSuccess
    ]);
};
const notNull = (x)=>x != null;
const mapToID = (x)=>({
        id: x.id
    });
const sizeof = __webpack_require__(6135);
function objectToSize(obj) {
    const bytes = sizeof(obj);
    const sizes = [
        "Bytes",
        "KB",
        "MB",
        "GB",
        "TB"
    ];
    if (bytes === 0) return "n/a";
    const i = parseInt(`${Math.floor(Math.log(bytes) / Math.log(1024))}`, 10);
    if (i === 0) return `${bytes} ${sizes[i]}`;
    return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
}


/***/ })

};
;