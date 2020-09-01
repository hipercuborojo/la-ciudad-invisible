webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/p5/lib/p5.min.js":
false,

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var _components_molecules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/molecules/modal */ \"./components/molecules/modal.tsx\");\n/* harmony import */ var _components_atoms_ca__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/atoms/ca */ \"./components/atoms/ca.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/bregy/Documents/la-ciudad-invisible/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n// import p5 from \"p5\";\n\n\nvar Index = function Index() {\n  _s();\n\n  // const { colorMode, toggleColorMode } = useColorMode();\n  var artboardRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n\n  var frameTemplate = function frameTemplate(frameSize) {\n    var u = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"vw\";\n    return \"\".concat(frameSize, \"vw calc(100\").concat(u, \" - \").concat(2 * frameSize, \"vw) \").concat(frameSize, \"vw\");\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (window) {\n      var mainSketch = Object(_components_atoms_ca__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(100, 100);\n      console.log(mainSketch);\n      new p5(mainSketch, artboardRef.current);\n    }\n  }, [window]);\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ColorModeProvider\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"DarkMode\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CSSReset\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 21\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 21\n    }\n  }, __jsx(_components_molecules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 25\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    templateColumns: frameTemplate(1, \"vw\"),\n    templateRows: frameTemplate(1, \"vh\"),\n    bg: \"orange.100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 25\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    w: \"100%\",\n    h: \"100%\",\n    bg: \"gray.900\",\n    gridRow: \"2\",\n    gridColumn: \"2\",\n    ref: artboardRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 29\n    }\n  }))))));\n};\n\n_s(Index, \"8LS5/bU53hqfD89P095NoYEhfUE=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSW5kZXgiLCJhcnRib2FyZFJlZiIsInVzZVJlZiIsImZyYW1lVGVtcGxhdGUiLCJmcmFtZVNpemUiLCJ1IiwidXNlRWZmZWN0Iiwid2luZG93IiwibWFpblNrZXRjaCIsIm1haW5Ta2V0Y2hGYWN0b3J5IiwiY29uc29sZSIsImxvZyIsInA1IiwiY3VycmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDaEI7QUFDQSxNQUFNQyxXQUFXLEdBQUdDLG9EQUFNLEVBQTFCOztBQUVBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsU0FBRCxFQUFpRDtBQUFBLFFBQTdCQyxDQUE2Qix1RUFBakIsSUFBaUI7QUFDbkUscUJBQVVELFNBQVYsd0JBQWlDQyxDQUFqQyxnQkFBd0MsSUFBSUQsU0FBNUMsaUJBQTREQSxTQUE1RDtBQUNILEdBRkQ7O0FBSUFFLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlDLE1BQUosRUFBWTtBQUNSLFVBQU1DLFVBQVUsR0FBR0Msb0VBQWlCLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBcEM7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlILFVBQVo7QUFDQSxVQUFJSSxFQUFKLENBQU9KLFVBQVAsRUFBbUJQLFdBQVcsQ0FBQ1ksT0FBL0I7QUFDSDtBQUNKLEdBTlEsRUFNTixDQUFDTixNQUFELENBTk0sQ0FBVDtBQVFBLFNBQ0ksTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLG9EQUFEO0FBQ0ksbUJBQWUsRUFBRUosYUFBYSxDQUFDLENBQUQsRUFBSSxJQUFKLENBRGxDO0FBRUksZ0JBQVksRUFBRUEsYUFBYSxDQUFDLENBQUQsRUFBSSxJQUFKLENBRi9CO0FBR0ksTUFBRSxFQUFDLFlBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtJLE1BQUMsbURBQUQ7QUFBSyxLQUFDLEVBQUMsTUFBUDtBQUFjLEtBQUMsRUFBQyxNQUFoQjtBQUF1QixNQUFFLEVBQUMsVUFBMUI7QUFBcUMsV0FBTyxFQUFDLEdBQTdDO0FBQWlELGNBQVUsRUFBQyxHQUE1RDtBQUFnRSxPQUFHLEVBQUVGLFdBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixDQUZKLENBRkosQ0FESixDQURKLENBREo7QUFtQkgsQ0FuQ0Q7O0dBQU1ELEs7O0tBQUFBLEs7QUFxQ1NBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBDU1NSZXNldCwgdGhlbWUsIENvbG9yTW9kZVByb3ZpZGVyLCBHcmlkLCBCb3gsIHVzZUNvbG9yTW9kZSwgRGFya01vZGUgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgTENJTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9sZWN1bGVzL21vZGFsXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vY29tcG9uZW50cy9hdG9tcy9sb2dvXCI7XG4vLyBpbXBvcnQgcDUgZnJvbSBcInA1XCI7XG5pbXBvcnQgbWFpblNrZXRjaEZhY3RvcnkgZnJvbSBcIi4uL2NvbXBvbmVudHMvYXRvbXMvY2FcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gICAgLy8gY29uc3QgeyBjb2xvck1vZGUsIHRvZ2dsZUNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XG4gICAgY29uc3QgYXJ0Ym9hcmRSZWYgPSB1c2VSZWYoKTtcblxuICAgIGNvbnN0IGZyYW1lVGVtcGxhdGUgPSAoZnJhbWVTaXplOiBudW1iZXIsIHU6IHN0cmluZyA9IFwidndcIik6IHN0cmluZyA9PiB7XG4gICAgICAgIHJldHVybiBgJHtmcmFtZVNpemV9dncgY2FsYygxMDAke3V9IC0gJHsyICogZnJhbWVTaXplfXZ3KSAke2ZyYW1lU2l6ZX12d2A7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIGNvbnN0IG1haW5Ta2V0Y2ggPSBtYWluU2tldGNoRmFjdG9yeSgxMDAsIDEwMCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtYWluU2tldGNoKTtcbiAgICAgICAgICAgIG5ldyBwNShtYWluU2tldGNoLCBhcnRib2FyZFJlZi5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgIH0sIFt3aW5kb3ddKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyPlxuICAgICAgICAgICAgPENvbG9yTW9kZVByb3ZpZGVyPlxuICAgICAgICAgICAgICAgIDxEYXJrTW9kZT5cbiAgICAgICAgICAgICAgICAgICAgPENTU1Jlc2V0IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TENJTW9kYWwgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVDb2x1bW5zPXtmcmFtZVRlbXBsYXRlKDEsIFwidndcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVSb3dzPXtmcmFtZVRlbXBsYXRlKDEsIFwidmhcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmc9XCJvcmFuZ2UuMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHc9XCIxMDAlXCIgaD1cIjEwMCVcIiBiZz1cImdyYXkuOTAwXCIgZ3JpZFJvdz1cIjJcIiBncmlkQ29sdW1uPVwiMlwiIHJlZj17YXJ0Ym9hcmRSZWZ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvRGFya01vZGU+XG4gICAgICAgICAgICA8L0NvbG9yTW9kZVByb3ZpZGVyPlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})