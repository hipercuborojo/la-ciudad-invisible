webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/p5/lib/p5.min.js":
/*!***************************************!*\
  !*** ./node_modules/p5/lib/p5.min.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var _components_molecules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/molecules/modal */ \"./components/molecules/modal.tsx\");\n/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! p5 */ \"./node_modules/p5/lib/p5.min.js\");\n/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_atoms_ca__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/atoms/ca */ \"./components/atoms/ca.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/bregy/Documents/la-ciudad-invisible/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  // const { colorMode, toggleColorMode } = useColorMode();\n  var artboardRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n\n  var frameTemplate = function frameTemplate(frameSize) {\n    var u = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"vw\";\n    return \"\".concat(frameSize, \"vw calc(100\").concat(u, \" - \").concat(2 * frameSize, \"vw) \").concat(frameSize, \"vw\");\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var mainSketch = Object(_components_atoms_ca__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(100, 100);\n    console.log(mainSketch);\n    new p5__WEBPACK_IMPORTED_MODULE_3___default.a(mainSketch, artboardRef.current);\n  }, []);\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ColorModeProvider\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"DarkMode\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CSSReset\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 21\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 21\n    }\n  }, __jsx(_components_molecules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 25\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    templateColumns: frameTemplate(1, \"vw\"),\n    templateRows: frameTemplate(1, \"vh\"),\n    bg: \"orange.100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 25\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    w: \"100%\",\n    h: \"100%\",\n    bg: \"gray.900\",\n    gridRow: \"2\",\n    gridColumn: \"2\",\n    ref: artboardRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 29\n    }\n  }))))));\n};\n\n_s(Index, \"8LS5/bU53hqfD89P095NoYEhfUE=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSW5kZXgiLCJhcnRib2FyZFJlZiIsInVzZVJlZiIsImZyYW1lVGVtcGxhdGUiLCJmcmFtZVNpemUiLCJ1IiwidXNlRWZmZWN0IiwibWFpblNrZXRjaCIsIm1haW5Ta2V0Y2hGYWN0b3J5IiwiY29uc29sZSIsImxvZyIsInA1IiwiY3VycmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNoQjtBQUNBLE1BQU1DLFdBQVcsR0FBR0Msb0RBQU0sRUFBMUI7O0FBRUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxTQUFELEVBQWlEO0FBQUEsUUFBN0JDLENBQTZCLHVFQUFqQixJQUFpQjtBQUNuRSxxQkFBVUQsU0FBVix3QkFBaUNDLENBQWpDLGdCQUF3QyxJQUFJRCxTQUE1QyxpQkFBNERBLFNBQTVEO0FBQ0gsR0FGRDs7QUFJQUUseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsVUFBVSxHQUFHQyxvRUFBaUIsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFwQztBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsVUFBWjtBQUNBLFFBQUlJLHlDQUFKLENBQU9KLFVBQVAsRUFBbUJOLFdBQVcsQ0FBQ1csT0FBL0I7QUFDSCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsU0FDSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsb0RBQUQ7QUFDSSxtQkFBZSxFQUFFVCxhQUFhLENBQUMsQ0FBRCxFQUFJLElBQUosQ0FEbEM7QUFFSSxnQkFBWSxFQUFFQSxhQUFhLENBQUMsQ0FBRCxFQUFJLElBQUosQ0FGL0I7QUFHSSxNQUFFLEVBQUMsWUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0ksTUFBQyxtREFBRDtBQUFLLEtBQUMsRUFBQyxNQUFQO0FBQWMsS0FBQyxFQUFDLE1BQWhCO0FBQXVCLE1BQUUsRUFBQyxVQUExQjtBQUFxQyxXQUFPLEVBQUMsR0FBN0M7QUFBaUQsY0FBVSxFQUFDLEdBQTVEO0FBQWdFLE9BQUcsRUFBRUYsV0FBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLENBRkosQ0FGSixDQURKLENBREosQ0FESjtBQW1CSCxDQWpDRDs7R0FBTUQsSzs7S0FBQUEsSztBQW1DU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIENTU1Jlc2V0LCB0aGVtZSwgQ29sb3JNb2RlUHJvdmlkZXIsIEdyaWQsIEJveCwgdXNlQ29sb3JNb2RlLCBEYXJrTW9kZSB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcbmltcG9ydCBMQ0lNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2xlY3VsZXMvbW9kYWxcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9jb21wb25lbnRzL2F0b21zL2xvZ29cIjtcbmltcG9ydCBwNSBmcm9tIFwicDVcIjtcbmltcG9ydCAqIGFzIHA1R2xvYmFsIGZyb20gXCJwNS9nbG9iYWxcIjtcbmltcG9ydCBtYWluU2tldGNoRmFjdG9yeSBmcm9tIFwiLi4vY29tcG9uZW50cy9hdG9tcy9jYVwiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgICAvLyBjb25zdCB7IGNvbG9yTW9kZSwgdG9nZ2xlQ29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcbiAgICBjb25zdCBhcnRib2FyZFJlZiA9IHVzZVJlZigpO1xuXG4gICAgY29uc3QgZnJhbWVUZW1wbGF0ZSA9IChmcmFtZVNpemU6IG51bWJlciwgdTogc3RyaW5nID0gXCJ2d1wiKTogc3RyaW5nID0+IHtcbiAgICAgICAgcmV0dXJuIGAke2ZyYW1lU2l6ZX12dyBjYWxjKDEwMCR7dX0gLSAkezIgKiBmcmFtZVNpemV9dncpICR7ZnJhbWVTaXplfXZ3YDtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbWFpblNrZXRjaCA9IG1haW5Ta2V0Y2hGYWN0b3J5KDEwMCwgMTAwKTtcbiAgICAgICAgY29uc29sZS5sb2cobWFpblNrZXRjaCk7XG4gICAgICAgIG5ldyBwNShtYWluU2tldGNoLCBhcnRib2FyZFJlZi5jdXJyZW50KTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VGhlbWVQcm92aWRlcj5cbiAgICAgICAgICAgIDxDb2xvck1vZGVQcm92aWRlcj5cbiAgICAgICAgICAgICAgICA8RGFya01vZGU+XG4gICAgICAgICAgICAgICAgICAgIDxDU1NSZXNldCAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExDSU1vZGFsIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlQ29sdW1ucz17ZnJhbWVUZW1wbGF0ZSgxLCBcInZ3XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlUm93cz17ZnJhbWVUZW1wbGF0ZSgxLCBcInZoXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnPVwib3JhbmdlLjEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB3PVwiMTAwJVwiIGg9XCIxMDAlXCIgYmc9XCJncmF5LjkwMFwiIGdyaWRSb3c9XCIyXCIgZ3JpZENvbHVtbj1cIjJcIiByZWY9e2FydGJvYXJkUmVmfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0RhcmtNb2RlPlxuICAgICAgICAgICAgPC9Db2xvck1vZGVQcm92aWRlcj5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})