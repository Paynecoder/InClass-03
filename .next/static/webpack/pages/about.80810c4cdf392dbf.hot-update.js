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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_About_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/About.module.css */ \"./src/styles/About.module.css\");\n/* harmony import */ var _styles_About_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_About_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_employees_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/employees.json */ \"./data/employees.json\");\n/* harmony import */ var _components_Text_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Text/index */ \"./components/Text/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction About() {\n    _s();\n    const [information, setInformation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        ..._data_employees_json__WEBPACK_IMPORTED_MODULE_2__\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_About_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_About_module_css__WEBPACK_IMPORTED_MODULE_4___default().employee)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\apple\\\\Desktop\\\\InClass-03\\\\src\\\\pages\\\\about.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this),\n            information && information.map((info, index)=>{\n                if (info.employer.toLowerCase() === \"google\") {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Text_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        employee: info.employee\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\apple\\\\Desktop\\\\InClass-03\\\\src\\\\pages\\\\about.js\",\n                        lineNumber: 14,\n                        columnNumber: 20\n                    }, this);\n                }\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\apple\\\\Desktop\\\\InClass-03\\\\src\\\\pages\\\\about.js\",\n        lineNumber: 10,\n        columnNumber: 7\n    }, this);\n}\n_s(About, \"axublSqsaFVApoANZsutMY3Ki9o=\");\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWJvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWdEO0FBQ2Y7QUFDVztBQUNHO0FBRWhDLFNBQVNJLFFBQVE7O0lBQzlCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQztXQUFJQyxpREFBSUE7S0FBQztJQUV0RCxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBV1Isc0VBQVc7OzBCQUN6Qiw4REFBQ087Z0JBQUlDLFdBQVdSLDBFQUFlOzs7Ozs7WUFDOUJLLGVBQWVBLFlBQVlNLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxRQUFVO2dCQUMvQyxJQUFJRCxLQUFLRSxRQUFRLENBQUNDLFdBQVcsT0FBTyxVQUFVO29CQUM1QyxxQkFBTyw4REFBQ1osOERBQUlBO3dCQUFhTyxVQUFVRSxLQUFLRixRQUFRO3VCQUE5Qkc7Ozs7O2dCQUVwQixDQUFDO1lBQ0g7Ozs7Ozs7QUFNUixDQUFDO0dBakJ1QlQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Fib3V0LmpzP2ZkNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0Fib3V0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGRhdGEgZnJvbSBcIi4uLy4uL2RhdGEvZW1wbG95ZWVzLmpzb25cIlxyXG5pbXBvcnQgVGV4dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UZXh0L2luZGV4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcclxuICBjb25zdCBbaW5mb3JtYXRpb24sIHNldEluZm9ybWF0aW9uXSA9IHVzZVN0YXRlKFsuLi5kYXRhXSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1wbG95ZWV9PjwvZGl2PlxyXG4gICAgICAgIHtpbmZvcm1hdGlvbiAmJiBpbmZvcm1hdGlvbi5tYXAoKGluZm8sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoaW5mby5lbXBsb3llci50b0xvd2VyQ2FzZSgpID09PSBcImdvb2dsZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8VGV4dCBrZXk9e2luZGV4fSBlbXBsb3llZT17aW5mby5lbXBsb3llZX0gLz47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbiAgICBcclxuXHJcbn0iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJkYXRhIiwiVGV4dCIsIkFib3V0IiwiaW5mb3JtYXRpb24iLCJzZXRJbmZvcm1hdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJlbXBsb3llZSIsIm1hcCIsImluZm8iLCJpbmRleCIsImVtcGxveWVyIiwidG9Mb3dlckNhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/about.js\n"));

/***/ })

});