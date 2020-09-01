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
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var _components_molecules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/molecules/modal */ \"./components/molecules/modal.tsx\");\n/* harmony import */ var _components_atoms_ca__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/atoms/ca */ \"./components/atoms/ca.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/bregy/Documents/la-ciudad-invisible/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  // const { colorMode, toggleColorMode } = useColorMode();\n  var artboardRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n\n  var frameTemplate = function frameTemplate(frameSize) {\n    var u = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"vw\";\n    return \"\".concat(frameSize, \"vw calc(100\").concat(u, \" - \").concat(2 * frameSize, \"vw) \").concat(frameSize, \"vw\");\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var mainSketch = Object(_components_atoms_ca__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(100, 100);\n    console.log(mainSketch); // new p5(mainSketch, artboardRef.current);\n  }, []);\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ColorModeProvider\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"DarkMode\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CSSReset\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 21\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 21\n    }\n  }, __jsx(_components_molecules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 25\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    templateColumns: frameTemplate(1, \"vw\"),\n    templateRows: frameTemplate(1, \"vh\"),\n    bg: \"orange.100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 25\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    w: \"100%\",\n    h: \"100%\",\n    bg: \"gray.900\",\n    gridRow: \"2\",\n    gridColumn: \"2\",\n    ref: artboardRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 29\n    }\n  }))))));\n};\n\n_s(Index, \"8LS5/bU53hqfD89P095NoYEhfUE=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSW5kZXgiLCJhcnRib2FyZFJlZiIsInVzZVJlZiIsImZyYW1lVGVtcGxhdGUiLCJmcmFtZVNpemUiLCJ1IiwidXNlRWZmZWN0IiwibWFpblNrZXRjaCIsIm1haW5Ta2V0Y2hGYWN0b3J5IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2hCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHQyxvREFBTSxFQUExQjs7QUFFQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFNBQUQsRUFBaUQ7QUFBQSxRQUE3QkMsQ0FBNkIsdUVBQWpCLElBQWlCO0FBQ25FLHFCQUFVRCxTQUFWLHdCQUFpQ0MsQ0FBakMsZ0JBQXdDLElBQUlELFNBQTVDLGlCQUE0REEsU0FBNUQ7QUFDSCxHQUZEOztBQUlBRSx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxVQUFVLEdBQUdDLG9FQUFpQixDQUFDLEdBQUQsRUFBTSxHQUFOLENBQXBDO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxVQUFaLEVBRlksQ0FHWjtBQUNILEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQSxTQUNJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxvREFBRDtBQUNJLG1CQUFlLEVBQUVKLGFBQWEsQ0FBQyxDQUFELEVBQUksSUFBSixDQURsQztBQUVJLGdCQUFZLEVBQUVBLGFBQWEsQ0FBQyxDQUFELEVBQUksSUFBSixDQUYvQjtBQUdJLE1BQUUsRUFBQyxZQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSSxNQUFDLG1EQUFEO0FBQUssS0FBQyxFQUFDLE1BQVA7QUFBYyxLQUFDLEVBQUMsTUFBaEI7QUFBdUIsTUFBRSxFQUFDLFVBQTFCO0FBQXFDLFdBQU8sRUFBQyxHQUE3QztBQUFpRCxjQUFVLEVBQUMsR0FBNUQ7QUFBZ0UsT0FBRyxFQUFFRixXQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosQ0FGSixDQUZKLENBREosQ0FESixDQURKO0FBbUJILENBakNEOztHQUFNRCxLOztLQUFBQSxLO0FBbUNTQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgQ1NTUmVzZXQsIHRoZW1lLCBDb2xvck1vZGVQcm92aWRlciwgR3JpZCwgQm94LCB1c2VDb2xvck1vZGUsIERhcmtNb2RlIH0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xuaW1wb3J0IExDSU1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL21vbGVjdWxlcy9tb2RhbFwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4uL2NvbXBvbmVudHMvYXRvbXMvbG9nb1wiO1xuaW1wb3J0IHA1IGZyb20gXCJwNVwiO1xuaW1wb3J0IG1haW5Ta2V0Y2hGYWN0b3J5IGZyb20gXCIuLi9jb21wb25lbnRzL2F0b21zL2NhXCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICAgIC8vIGNvbnN0IHsgY29sb3JNb2RlLCB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuICAgIGNvbnN0IGFydGJvYXJkUmVmID0gdXNlUmVmKCk7XG5cbiAgICBjb25zdCBmcmFtZVRlbXBsYXRlID0gKGZyYW1lU2l6ZTogbnVtYmVyLCB1OiBzdHJpbmcgPSBcInZ3XCIpOiBzdHJpbmcgPT4ge1xuICAgICAgICByZXR1cm4gYCR7ZnJhbWVTaXplfXZ3IGNhbGMoMTAwJHt1fSAtICR7MiAqIGZyYW1lU2l6ZX12dykgJHtmcmFtZVNpemV9dndgO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBtYWluU2tldGNoID0gbWFpblNrZXRjaEZhY3RvcnkoMTAwLCAxMDApO1xuICAgICAgICBjb25zb2xlLmxvZyhtYWluU2tldGNoKTtcbiAgICAgICAgLy8gbmV3IHA1KG1haW5Ta2V0Y2gsIGFydGJvYXJkUmVmLmN1cnJlbnQpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyPlxuICAgICAgICAgICAgPENvbG9yTW9kZVByb3ZpZGVyPlxuICAgICAgICAgICAgICAgIDxEYXJrTW9kZT5cbiAgICAgICAgICAgICAgICAgICAgPENTU1Jlc2V0IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TENJTW9kYWwgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVDb2x1bW5zPXtmcmFtZVRlbXBsYXRlKDEsIFwidndcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVSb3dzPXtmcmFtZVRlbXBsYXRlKDEsIFwidmhcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmc9XCJvcmFuZ2UuMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHc9XCIxMDAlXCIgaD1cIjEwMCVcIiBiZz1cImdyYXkuOTAwXCIgZ3JpZFJvdz1cIjJcIiBncmlkQ29sdW1uPVwiMlwiIHJlZj17YXJ0Ym9hcmRSZWZ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvRGFya01vZGU+XG4gICAgICAgICAgICA8L0NvbG9yTW9kZVByb3ZpZGVyPlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})