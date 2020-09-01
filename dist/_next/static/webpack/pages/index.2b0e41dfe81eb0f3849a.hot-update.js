webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var _components_molecules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/molecules/modal */ \"./components/molecules/modal.tsx\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/bregy/Documents/la-ciudad-invisible/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n // import Logo from \"../components/atoms/logo\";\n\n\nvar Sketch = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/atoms/sketch */ \"./components/atoms/sketch.tsx\"));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../components/atoms/sketch */ \"./components/atoms/sketch.tsx\")];\n    },\n    modules: [\"../components/atoms/sketch\"]\n  }\n});\n_c2 = Sketch;\n\nvar Index = function Index() {\n  _s();\n\n  // const { colorMode, toggleColorMode } = useColorMode();\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var frameTemplate = function frameTemplate(frameSize) {\n    var u = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"vw\";\n    return \"\".concat(frameSize, \"vw calc(100\").concat(u, \" - \").concat(2 * frameSize, \"vw) \").concat(frameSize, \"vw\");\n  };\n\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ColorModeProvider\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"DarkMode\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CSSReset\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 21\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 21\n    }\n  }, __jsx(_components_molecules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    loading: loading,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 25\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    templateColumns: frameTemplate(1, \"vw\"),\n    templateRows: frameTemplate(1, \"vh\"),\n    bg: \"orange.100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 25\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    w: \"100%\",\n    h: \"100%\",\n    bg: \"gray.900\",\n    gridRow: \"2\",\n    gridColumn: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 29\n    }\n  }, __jsx(Sketch, {\n    onMounted: function onMounted() {\n      setLoading(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 33\n    }\n  })))))));\n};\n\n_s(Index, \"/Rjh5rPqCCqf0XYnTUk9ZNavw3Q=\");\n\n_c3 = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Sketch$dynamic\");\n$RefreshReg$(_c2, \"Sketch\");\n$RefreshReg$(_c3, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiU2tldGNoIiwiZHluYW1pYyIsInNzciIsIkluZGV4IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZyYW1lVGVtcGxhdGUiLCJmcmFtZVNpemUiLCJ1Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLG1EQUFPLE1BQTRCO0FBQUEsU0FBTSxnSkFBTjtBQUFBLENBQTVCLEVBQStFO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUF0QyxpRUFBc0M7QUFBQTtBQUFBLGNBQXRDLDRCQUFzQztBQUFBO0FBQUEsQ0FBL0UsQ0FBdEI7TUFBTUYsTTs7QUFFTixJQUFNRyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2hCO0FBRGdCLGtCQUVjQyxzREFBUSxDQUFVLEtBQVYsQ0FGdEI7QUFBQSxNQUVUQyxPQUZTO0FBQUEsTUFFQUMsVUFGQTs7QUFJaEIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxTQUFELEVBQWlEO0FBQUEsUUFBN0JDLENBQTZCLHVFQUFqQixJQUFpQjtBQUNuRSxxQkFBVUQsU0FBVix3QkFBaUNDLENBQWpDLGdCQUF3QyxJQUFJRCxTQUE1QyxpQkFBNERBLFNBQTVEO0FBQ0gsR0FGRDs7QUFJQSxTQUNJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbUVBQUQ7QUFBVSxXQUFPLEVBQUVILE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsb0RBQUQ7QUFDSSxtQkFBZSxFQUFFRSxhQUFhLENBQUMsQ0FBRCxFQUFJLElBQUosQ0FEbEM7QUFFSSxnQkFBWSxFQUFFQSxhQUFhLENBQUMsQ0FBRCxFQUFJLElBQUosQ0FGL0I7QUFHSSxNQUFFLEVBQUMsWUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0ksTUFBQyxtREFBRDtBQUFLLEtBQUMsRUFBQyxNQUFQO0FBQWMsS0FBQyxFQUFDLE1BQWhCO0FBQXVCLE1BQUUsRUFBQyxVQUExQjtBQUFxQyxXQUFPLEVBQUMsR0FBN0M7QUFBaUQsY0FBVSxFQUFDLEdBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLE1BQUQ7QUFDSSxhQUFTLEVBQUUscUJBQU07QUFDYkQsZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDSCxLQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUxKLENBRkosQ0FGSixDQURKLENBREosQ0FESjtBQXlCSCxDQWpDRDs7R0FBTUgsSzs7TUFBQUEsSztBQW1DU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBDU1NSZXNldCwgdGhlbWUsIENvbG9yTW9kZVByb3ZpZGVyLCBHcmlkLCBCb3gsIHVzZUNvbG9yTW9kZSwgRGFya01vZGUgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgTENJTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL21vZGFsXCI7XG4vLyBpbXBvcnQgTG9nbyBmcm9tIFwiLi4vY29tcG9uZW50cy9hdG9tcy9sb2dvXCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5cbmNvbnN0IFNrZXRjaCA9IGR5bmFtaWM8eyBvbk1vdW50ZWQ6ICgpID0+IHZvaWQgfT4oKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy9hdG9tcy9za2V0Y2hcIikgYXMgYW55LCB7IHNzcjogZmFsc2UgfSk7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICAgIC8vIGNvbnN0IHsgY29sb3JNb2RlLCB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICAgIGNvbnN0IGZyYW1lVGVtcGxhdGUgPSAoZnJhbWVTaXplOiBudW1iZXIsIHU6IHN0cmluZyA9IFwidndcIik6IHN0cmluZyA9PiB7XG4gICAgICAgIHJldHVybiBgJHtmcmFtZVNpemV9dncgY2FsYygxMDAke3V9IC0gJHsyICogZnJhbWVTaXplfXZ3KSAke2ZyYW1lU2l6ZX12d2A7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyPlxuICAgICAgICAgICAgPENvbG9yTW9kZVByb3ZpZGVyPlxuICAgICAgICAgICAgICAgIDxEYXJrTW9kZT5cbiAgICAgICAgICAgICAgICAgICAgPENTU1Jlc2V0IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TENJTW9kYWwgbG9hZGluZz17bG9hZGluZ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVDb2x1bW5zPXtmcmFtZVRlbXBsYXRlKDEsIFwidndcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVSb3dzPXtmcmFtZVRlbXBsYXRlKDEsIFwidmhcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmc9XCJvcmFuZ2UuMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHc9XCIxMDAlXCIgaD1cIjEwMCVcIiBiZz1cImdyYXkuOTAwXCIgZ3JpZFJvdz1cIjJcIiBncmlkQ29sdW1uPVwiMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2tldGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdW50ZWQ9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvRGFya01vZGU+XG4gICAgICAgICAgICA8L0NvbG9yTW9kZVByb3ZpZGVyPlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})