webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var _components_molecules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/molecules/modal */ \"./components/molecules/modal.tsx\");\n/* harmony import */ var _components_atoms_logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/atoms/logo */ \"./components/atoms/logo.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/bregy/Documents/la-ciudad-invisible/pages/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Index = function Index() {\n  // const { colorMode, toggleColorMode } = useColorMode();\n  var frameTemplate = function frameTemplate(frameSize) {\n    var u = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"vw\";\n    return \"\".concat(frameSize, \"vw calc(100\").concat(u, \" - \").concat(2 * frameSize, \"vw) \").concat(frameSize, \"vw\");\n  };\n\n  var scale = 4;\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ColorModeProvider\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"DarkMode\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CSSReset\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 21\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 21\n    }\n  }, __jsx(_components_molecules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 25\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    templateColumns: frameTemplate(1, \"vw\"),\n    templateRows: frameTemplate(1, \"vh\"),\n    bg: \"orange.100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 25\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    w: \"100%\",\n    h: \"100%\",\n    bg: \"gray.900\",\n    gridRow: \"2\",\n    gridColumn: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 29\n    }\n  }, __jsx(_components_atoms_logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    scale: 3.6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 33\n    }\n  })))))));\n};\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSW5kZXgiLCJmcmFtZVRlbXBsYXRlIiwiZnJhbWVTaXplIiwidSIsInNjYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNoQjtBQUVBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsU0FBRCxFQUFpRDtBQUFBLFFBQTdCQyxDQUE2Qix1RUFBakIsSUFBaUI7QUFDbkUscUJBQVVELFNBQVYsd0JBQWlDQyxDQUFqQyxnQkFBd0MsSUFBSUQsU0FBNUMsaUJBQTREQSxTQUE1RDtBQUNILEdBRkQ7O0FBSUEsTUFBTUUsS0FBSyxHQUFHLENBQWQ7QUFFQSxTQUNJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxvREFBRDtBQUNJLG1CQUFlLEVBQUVILGFBQWEsQ0FBQyxDQUFELEVBQUksSUFBSixDQURsQztBQUVJLGdCQUFZLEVBQUVBLGFBQWEsQ0FBQyxDQUFELEVBQUksSUFBSixDQUYvQjtBQUdJLE1BQUUsRUFBQyxZQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSSxNQUFDLG1EQUFEO0FBQUssS0FBQyxFQUFDLE1BQVA7QUFBYyxLQUFDLEVBQUMsTUFBaEI7QUFBdUIsTUFBRSxFQUFDLFVBQTFCO0FBQXFDLFdBQU8sRUFBQyxHQUE3QztBQUFpRCxjQUFVLEVBQUMsR0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQ7QUFBTSxTQUFLLEVBQUUsR0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FMSixDQUZKLENBRkosQ0FESixDQURKLENBREo7QUFxQkgsQ0E5QkQ7O0tBQU1ELEs7QUFnQ1NBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgQ1NTUmVzZXQsIHRoZW1lLCBDb2xvck1vZGVQcm92aWRlciwgR3JpZCwgQm94LCB1c2VDb2xvck1vZGUsIERhcmtNb2RlIH0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xuaW1wb3J0IExDSU1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL21vbGVjdWxlcy9tb2RhbFwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4uL2NvbXBvbmVudHMvYXRvbXMvbG9nb1wiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgICAvLyBjb25zdCB7IGNvbG9yTW9kZSwgdG9nZ2xlQ29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcblxuICAgIGNvbnN0IGZyYW1lVGVtcGxhdGUgPSAoZnJhbWVTaXplOiBudW1iZXIsIHU6IHN0cmluZyA9IFwidndcIik6IHN0cmluZyA9PiB7XG4gICAgICAgIHJldHVybiBgJHtmcmFtZVNpemV9dncgY2FsYygxMDAke3V9IC0gJHsyICogZnJhbWVTaXplfXZ3KSAke2ZyYW1lU2l6ZX12d2A7XG4gICAgfTtcblxuICAgIGNvbnN0IHNjYWxlID0gNDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyPlxuICAgICAgICAgICAgPENvbG9yTW9kZVByb3ZpZGVyPlxuICAgICAgICAgICAgICAgIDxEYXJrTW9kZT5cbiAgICAgICAgICAgICAgICAgICAgPENTU1Jlc2V0IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TENJTW9kYWwgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVDb2x1bW5zPXtmcmFtZVRlbXBsYXRlKDEsIFwidndcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVSb3dzPXtmcmFtZVRlbXBsYXRlKDEsIFwidmhcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmc9XCJvcmFuZ2UuMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHc9XCIxMDAlXCIgaD1cIjEwMCVcIiBiZz1cImdyYXkuOTAwXCIgZ3JpZFJvdz1cIjJcIiBncmlkQ29sdW1uPVwiMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9nbyBzY2FsZT17My42fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0RhcmtNb2RlPlxuICAgICAgICAgICAgPC9Db2xvck1vZGVQcm92aWRlcj5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})