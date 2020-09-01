webpackHotUpdate_N_E("pages/index",{

/***/ "./components/molecules/modal.tsx":
/*!****************************************!*\
  !*** ./components/molecules/modal.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/bregy/Documents/la-ciudad-invisible/components/molecules/modal.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar LCIModal = function LCIModal() {\n  _s();\n\n  var _useDisclosure = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"useDisclosure\"])(),\n      isOpen = _useDisclosure.isOpen,\n      onOpen = _useDisclosure.onOpen,\n      onClose = _useDisclosure.onClose;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(onOpen, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Modal\"], {\n    isOpen: isOpen,\n    onClose: onClose,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalOverlay\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalContent\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalHeader\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 21\n    }\n  }, \"La Ciudad Invisible\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalCloseButton\"], {\n    color: \"orange.100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 21\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalBody\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 21\n    }\n  }, \"Lorem ipsum dolor sit amet consectetur adipisicing elit. A commodi illo laudantium optio explicabo minus ullam accusantium dolore eum enim dolor error tempora, laboriosam possimus eveniet repellat id repellendus vitae?\"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalFooter\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 21\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Progress\"], {\n    hasStripe: true,\n    isAnimated: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 25\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: onClose,\n    variantColor: \"orange\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 25\n    }\n  }, \"Ok\")))));\n};\n\n_s(LCIModal, \"KTm3/WwJ3BDYbl6P03vHJjy8KOk=\", false, function () {\n  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"useDisclosure\"]];\n});\n\n_c = LCIModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LCIModal);\n\nvar _c;\n\n$RefreshReg$(_c, \"LCIModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvbW9kYWwudHN4PzJhZmMiXSwibmFtZXMiOlsiTENJTW9kYWwiLCJ1c2VEaXNjbG9zdXJlIiwiaXNPcGVuIiwib25PcGVuIiwib25DbG9zZSIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFhQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsdUJBQ2lCQyxxRUFBYSxFQUQ5QjtBQUFBLE1BQ1hDLE1BRFcsa0JBQ1hBLE1BRFc7QUFBQSxNQUNIQyxNQURHLGtCQUNIQSxNQURHO0FBQUEsTUFDS0MsT0FETCxrQkFDS0EsT0FETDs7QUFHbkJDLHlEQUFTLENBQUNGLE1BQUQsRUFBUyxFQUFULENBQVQ7QUFFQSxTQUNJLG1FQUNJLE1BQUMscURBQUQ7QUFBTyxVQUFNLEVBQUVELE1BQWY7QUFBdUIsV0FBTyxFQUFFRSxPQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosRUFFSSxNQUFDLGdFQUFEO0FBQWtCLFNBQUssRUFBQyxZQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa09BSEosRUFRSSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJSSxNQUFDLHdEQUFEO0FBQVUsYUFBUyxNQUFuQjtBQUFvQixjQUFVLE1BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJLE1BQUMsc0RBQUQ7QUFBUSxXQUFPLEVBQUVBLE9BQWpCO0FBQTBCLGdCQUFZLEVBQUMsUUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUxKLENBUkosQ0FGSixDQURKLENBREo7QUF5QkgsQ0E5QkQ7O0dBQU1KLFE7VUFDa0NDLDZEOzs7S0FEbENELFE7QUFnQ1NBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tb2xlY3VsZXMvbW9kYWwudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgICBNb2RhbCxcbiAgICBNb2RhbE92ZXJsYXksXG4gICAgTW9kYWxDb250ZW50LFxuICAgIE1vZGFsSGVhZGVyLFxuICAgIE1vZGFsRm9vdGVyLFxuICAgIE1vZGFsQm9keSxcbiAgICBNb2RhbENsb3NlQnV0dG9uLFxuICAgIEJ1dHRvbixcbiAgICB1c2VEaXNjbG9zdXJlLFxuICAgIFByb2dyZXNzLFxufSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5cbmNvbnN0IExDSU1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKTtcblxuICAgIHVzZUVmZmVjdChvbk9wZW4sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICAgIDxNb2RhbE92ZXJsYXkgLz5cbiAgICAgICAgICAgICAgICA8TW9kYWxDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxIZWFkZXI+TGEgQ2l1ZGFkIEludmlzaWJsZTwvTW9kYWxIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbENsb3NlQnV0dG9uIGNvbG9yPVwib3JhbmdlLjEwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBIGNvbW1vZGkgaWxsbyBsYXVkYW50aXVtIG9wdGlvXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBsaWNhYm8gbWludXMgdWxsYW0gYWNjdXNhbnRpdW0gZG9sb3JlIGV1bSBlbmltIGRvbG9yIGVycm9yIHRlbXBvcmEsIGxhYm9yaW9zYW0gcG9zc2ltdXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pZXQgcmVwZWxsYXQgaWQgcmVwZWxsZW5kdXMgdml0YWU/XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPEJ1dHRvbiB2YXJpYW50Q29sb3I9XCJibHVlXCIgbXI9ezN9IG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlcnJhclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzIGhhc1N0cmlwZSBpc0FuaW1hdGVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9IHZhcmlhbnRDb2xvcj1cIm9yYW5nZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9rXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8L01vZGFsQ29udGVudD5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMQ0lNb2RhbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/molecules/modal.tsx\n");

/***/ })

})