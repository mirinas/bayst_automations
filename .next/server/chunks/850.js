exports.id = 850;
exports.ids = [850];
exports.modules = {

/***/ 1247:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "About_main__ifczB",
	"title": "About_title__tx2bk",
	"info_card": "About_info_card__Tp_iZ",
	"card": "About_card__bjNtM",
	"grid": "About_grid__E6_jI"
};


/***/ }),

/***/ 7850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ InfoCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_About_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1247);
/* harmony import */ var _styles_About_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_About_module_css__WEBPACK_IMPORTED_MODULE_1__);


function InfoCard({ title , style , children  }) {
    const elementDrag = (down)=>{
        if (window.screen.width < 780) {
            return;
        }
        down.preventDefault();
        const main = document.querySelector(`.${(_styles_About_module_css__WEBPACK_IMPORTED_MODULE_1___default().main)}`);
        const dragLimit = parseFloat(window.getComputedStyle(main).getPropertyValue("padding-left"));
        const card = down.target.parentElement;
        let x0 = down.clientX;
        let y0 = down.clientY;
        // element drag
        document.onmousemove = (move)=>{
            move.preventDefault();
            if (card == null) return;
            let nextLeft = card.offsetLeft - (x0 - move.clientX);
            let nextTop = card.offsetTop - (y0 - move.clientY);
            if (nextLeft < dragLimit) {
                nextLeft = dragLimit;
            }
            if (nextTop < dragLimit) {
                nextTop = dragLimit;
            }
            if (move.clientX > dragLimit) {
                x0 = move.clientX;
            }
            if (move.clientY > dragLimit) {
                y0 = move.clientY;
            }
            card.style.left = `${nextLeft}px`;
            card.style.top = `${nextTop}px`;
        };
        // set up the end of dragging
        document.onmouseup = ()=>{
            document.onmouseup = null;
            document.onmousemove = null;
        };
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_About_module_css__WEBPACK_IMPORTED_MODULE_1___default().info_card),
        style: style,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                onMouseDown: elementDrag,
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: children
            })
        ]
    });
}


/***/ })

};
;