webpackHotUpdate_N_E("pages/index",{

/***/ "./components/molecules/modal.tsx":
/*!****************************************!*\
  !*** ./components/molecules/modal.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var _atoms_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/logo */ \"./components/atoms/logo.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/bregy/Documents/la-ciudad-invisible/components/molecules/modal.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar LCIModal = function LCIModal(_ref) {\n  _s();\n\n  var _ref$loading = _ref.loading,\n      loading = _ref$loading === void 0 ? false : _ref$loading;\n\n  var _useDisclosure = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"useDisclosure\"])(),\n      isOpen = _useDisclosure.isOpen,\n      onOpen = _useDisclosure.onOpen,\n      onClose = _useDisclosure.onClose;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      progress = _useState[0],\n      setProgress = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(onOpen, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (loading) {\n      setInterval(function () {\n        setProgress(function (p) {\n          return p + 1;\n        });\n        console.log(progress);\n      }, 1000);\n    }\n  }, [loading]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Modal\"], {\n    isOpen: isOpen,\n    onClose: onClose,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalOverlay\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 17\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalContent\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalHeader\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 21\n    }\n  }, __jsx(_atoms_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    scale: 3.2,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 25\n    }\n  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalCloseButton\"], {\n    color: \"orange.100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 21\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalBody\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 21\n    }\n  }, \"Lorem ipsum dolor sit amet consectetur adipisicing elit. A commodi illo laudantium optio explicabo minus ullam accusantium dolore eum enim dolor error tempora, laboriosam possimus eveniet repellat id repellendus vitae?\", __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    mt: \"5\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 25\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Progress\"], {\n    hasStripe: true,\n    isAnimated: true,\n    color: \"orange\",\n    value: progress,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 29\n    }\n  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalFooter\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 21\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: onClose,\n    variantColor: \"orange\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 25\n    }\n  }, \"Ok\")))));\n};\n\n_s(LCIModal, \"kRNRiCe6wdLcOJwnLzm1wsT/MMg=\", false, function () {\n  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"useDisclosure\"]];\n});\n\n_c = LCIModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LCIModal);\n\nvar _c;\n\n$RefreshReg$(_c, \"LCIModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvbW9kYWwudHN4PzJhZmMiXSwibmFtZXMiOlsiTENJTW9kYWwiLCJsb2FkaW5nIiwidXNlRGlzY2xvc3VyZSIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJ1c2VTdGF0ZSIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJ1c2VFZmZlY3QiLCJzZXRJbnRlcnZhbCIsInAiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWFBOztBQU1BLElBQU1BLFFBQWlDLEdBQUcsU0FBcENBLFFBQW9DLE9BQXlCO0FBQUE7O0FBQUEsMEJBQXRCQyxPQUFzQjtBQUFBLE1BQXRCQSxPQUFzQiw2QkFBWixLQUFZOztBQUFBLHVCQUMzQkMscUVBQWEsRUFEYztBQUFBLE1BQ3ZEQyxNQUR1RCxrQkFDdkRBLE1BRHVEO0FBQUEsTUFDL0NDLE1BRCtDLGtCQUMvQ0EsTUFEK0M7QUFBQSxNQUN2Q0MsT0FEdUMsa0JBQ3ZDQSxPQUR1Qzs7QUFBQSxrQkFFL0JDLHNEQUFRLENBQVMsQ0FBVCxDQUZ1QjtBQUFBLE1BRXhEQyxRQUZ3RDtBQUFBLE1BRTlDQyxXQUY4Qzs7QUFJL0RDLHlEQUFTLENBQUNMLE1BQUQsRUFBUyxFQUFULENBQVQ7QUFDQUsseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSVIsT0FBSixFQUFhO0FBQ1RTLGlCQUFXLENBQUMsWUFBTTtBQUNkRixtQkFBVyxDQUFDLFVBQUNHLENBQUQ7QUFBQSxpQkFBT0EsQ0FBQyxHQUFHLENBQVg7QUFBQSxTQUFELENBQVg7QUFDQUMsZUFBTyxDQUFDQyxHQUFSLENBQVlOLFFBQVo7QUFDSCxPQUhVLEVBR1IsSUFIUSxDQUFYO0FBSUg7QUFDSixHQVBRLEVBT04sQ0FBQ04sT0FBRCxDQVBNLENBQVQ7QUFTQSxTQUNJLG1FQUNJLE1BQUMscURBQUQ7QUFBTyxVQUFNLEVBQUVFLE1BQWY7QUFBdUIsV0FBTyxFQUFFRSxPQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1EQUFEO0FBQU0sU0FBSyxFQUFFLEdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSSxNQUFDLGdFQUFEO0FBQWtCLFNBQUssRUFBQyxZQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFLSSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbU9BSUksTUFBQyxtREFBRDtBQUFLLE1BQUUsRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQVUsYUFBUyxNQUFuQjtBQUFvQixjQUFVLE1BQTlCO0FBQStCLFNBQUssRUFBQyxRQUFyQztBQUE4QyxTQUFLLEVBQUVFLFFBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUpKLENBTEosRUFhSSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSSxNQUFDLHNEQUFEO0FBQVEsV0FBTyxFQUFFRixPQUFqQjtBQUEwQixnQkFBWSxFQUFDLFFBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFMSixDQWJKLENBRkosQ0FESixDQURKO0FBOEJILENBNUNEOztHQUFNTCxRO1VBQ2tDRSw2RDs7O0tBRGxDRixRO0FBOENTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbW9sZWN1bGVzL21vZGFsLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICAgIE1vZGFsLFxuICAgIE1vZGFsT3ZlcmxheSxcbiAgICBNb2RhbENvbnRlbnQsXG4gICAgTW9kYWxIZWFkZXIsXG4gICAgTW9kYWxGb290ZXIsXG4gICAgTW9kYWxCb2R5LFxuICAgIE1vZGFsQ2xvc2VCdXR0b24sXG4gICAgQnV0dG9uLFxuICAgIHVzZURpc2Nsb3N1cmUsXG4gICAgUHJvZ3Jlc3MsXG4gICAgQm94LFxufSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vYXRvbXMvbG9nb1wiO1xuXG5pbnRlcmZhY2UgTENJTW9kYWxQcm9wcyB7XG4gICAgbG9hZGluZz86IGJvb2xlYW47XG59XG5cbmNvbnN0IExDSU1vZGFsOiBSZWFjdC5GQzxMQ0lNb2RhbFByb3BzPiA9ICh7IGxvYWRpbmcgPSBmYWxzZSB9KSA9PiB7XG4gICAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICAgIHVzZUVmZmVjdChvbk9wZW4sIFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAobG9hZGluZykge1xuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFByb2dyZXNzKChwKSA9PiBwICsgMSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9LCBbbG9hZGluZ10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxNb2RhbCBpc09wZW49e2lzT3Blbn0gb25DbG9zZT17b25DbG9zZX0+XG4gICAgICAgICAgICAgICAgPE1vZGFsT3ZlcmxheSAvPlxuICAgICAgICAgICAgICAgIDxNb2RhbENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbEhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvIHNjYWxlPXszLjJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWxIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbENsb3NlQnV0dG9uIGNvbG9yPVwib3JhbmdlLjEwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBIGNvbW1vZGkgaWxsbyBsYXVkYW50aXVtIG9wdGlvXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBsaWNhYm8gbWludXMgdWxsYW0gYWNjdXNhbnRpdW0gZG9sb3JlIGV1bSBlbmltIGRvbG9yIGVycm9yIHRlbXBvcmEsIGxhYm9yaW9zYW0gcG9zc2ltdXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pZXQgcmVwZWxsYXQgaWQgcmVwZWxsZW5kdXMgdml0YWU/XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IG10PVwiNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzcyBoYXNTdHJpcGUgaXNBbmltYXRlZCBjb2xvcj1cIm9yYW5nZVwiIHZhbHVlPXtwcm9ncmVzc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxCdXR0b24gdmFyaWFudENvbG9yPVwiYmx1ZVwiIG1yPXszfSBvbkNsaWNrPXtvbkNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDZXJyYXJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPiAqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfSB2YXJpYW50Q29sb3I9XCJvcmFuZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPa1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbENvbnRlbnQ+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTENJTW9kYWw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/molecules/modal.tsx\n");

/***/ })

})