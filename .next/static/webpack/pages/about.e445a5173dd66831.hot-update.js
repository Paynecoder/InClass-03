"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_About_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/About.module.css */ \"./src/styles/About.module.css\");\n/* harmony import */ var _styles_About_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_About_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_employees_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/employees.json */ \"./data/employees.json\");\n/* harmony import */ var _components_Text_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Text/index */ \"./components/Text/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction About() {\n    _s();\n    const [information, setInformation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        ..._data_employees_json__WEBPACK_IMPORTED_MODULE_2__\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_About_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_About_module_css__WEBPACK_IMPORTED_MODULE_4___default().maintitle),\n                children: \"Employees\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\apple\\\\Desktop\\\\InClass-03\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_About_module_css__WEBPACK_IMPORTED_MODULE_4___default().employee),\n                children: information && information.map((info, index)=>{\n                    if (info.employer.toLowerCase() === \"google\") {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Text_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            employee: info.employee\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\apple\\\\Desktop\\\\InClass-03\\\\src\\\\pages\\\\about.js\",\n                            lineNumber: 15,\n                            columnNumber: 20\n                        }, this);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\apple\\\\Desktop\\\\InClass-03\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\apple\\\\Desktop\\\\InClass-03\\\\src\\\\pages\\\\about.js\",\n        lineNumber: 10,\n        columnNumber: 7\n    }, this);\n}\n_s(About, \"axublSqsaFVApoANZsutMY3Ki9o=\");\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWJvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWdEO0FBQ2Y7QUFDVztBQUNHO0FBRWhDLFNBQVNJLFFBQVE7O0lBQzlCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQztXQUFJQyxpREFBSUE7S0FBQztJQUV0RCxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBV1Isc0VBQVc7OzBCQUN6Qiw4REFBQ1U7Z0JBQUdGLFdBQVdSLDJFQUFnQjswQkFBRTs7Ozs7OzBCQUNqQyw4REFBQ087Z0JBQUlDLFdBQVdSLDBFQUFlOzBCQUM5QkssZUFBZUEsWUFBWVEsR0FBRyxDQUFDLENBQUNDLE1BQU1DLFFBQVU7b0JBQy9DLElBQUlELEtBQUtFLFFBQVEsQ0FBQ0MsV0FBVyxPQUFPLFVBQVU7d0JBQzVDLHFCQUFPLDhEQUFDZCw4REFBSUE7NEJBQWFTLFVBQVVFLEtBQUtGLFFBQVE7MkJBQTlCRzs7Ozs7b0JBRXBCLENBQUM7Z0JBQ0g7Ozs7Ozs7Ozs7OztBQU9SLENBQUM7R0FuQnVCWDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYWJvdXQuanM/ZmQ1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvQWJvdXQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vLi4vZGF0YS9lbXBsb3llZXMuanNvblwiXHJcbmltcG9ydCBUZXh0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RleHQvaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xyXG4gIGNvbnN0IFtpbmZvcm1hdGlvbiwgc2V0SW5mb3JtYXRpb25dID0gdXNlU3RhdGUoWy4uLmRhdGFdKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLm1haW50aXRsZX0+RW1wbG95ZWVzPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtcGxveWVlfT5cclxuICAgICAgICB7aW5mb3JtYXRpb24gJiYgaW5mb3JtYXRpb24ubWFwKChpbmZvLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGluZm8uZW1wbG95ZXIudG9Mb3dlckNhc2UoKSA9PT0gXCJnb29nbGVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gPFRleHQga2V5PXtpbmRleH0gZW1wbG95ZWU9e2luZm8uZW1wbG95ZWV9IC8+O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG4gICAgXHJcblxyXG59Il0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVN0YXRlIiwiZGF0YSIsIlRleHQiLCJBYm91dCIsImluZm9ybWF0aW9uIiwic2V0SW5mb3JtYXRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiaDEiLCJtYWludGl0bGUiLCJlbXBsb3llZSIsIm1hcCIsImluZm8iLCJpbmRleCIsImVtcGxveWVyIiwidG9Mb3dlckNhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/about.js\n"));

/***/ })

});