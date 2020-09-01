webpackHotUpdate_N_E("pages/index",{

/***/ "./components/molecules/modal.tsx":
/*!****************************************!*\
  !*** ./components/molecules/modal.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var _atoms_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/logo */ \"./components/atoms/logo.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/bregy/Documents/la-ciudad-invisible/components/molecules/modal.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar LCIModal = function LCIModal(_ref) {\n  _s();\n\n  var _ref$loading = _ref.loading,\n      loading = _ref$loading === void 0 ? false : _ref$loading;\n\n  var _useDisclosure = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"useDisclosure\"])(),\n      isOpen = _useDisclosure.isOpen,\n      onOpen = _useDisclosure.onOpen,\n      onClose = _useDisclosure.onClose;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      progress = _useState[0],\n      setProgress = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(onOpen, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (loading) {\n      setInterval(function () {\n        setProgress(function (prevProgress) {\n          return prevProgress + 1;\n        });\n        console.log(progress);\n      }, 1000);\n    }\n  }, [loading]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Modal\"], {\n    isOpen: isOpen,\n    onClose: onClose,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalOverlay\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 17\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalContent\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalHeader\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 21\n    }\n  }, __jsx(_atoms_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    scale: 3.2,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 25\n    }\n  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalCloseButton\"], {\n    color: \"orange.100\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 21\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalBody\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 21\n    }\n  }, \"Lorem ipsum dolor sit amet consectetur adipisicing elit. A commodi illo laudantium optio explicabo minus ullam accusantium dolore eum enim dolor error tempora, laboriosam possimus eveniet repellat id repellendus vitae?\", __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    mt: \"5\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 25\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Progress\"], {\n    hasStripe: true,\n    isAnimated: true,\n    color: \"orange\",\n    value: progress,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 29\n    }\n  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalFooter\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 21\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: onClose,\n    variantColor: \"orange\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 25\n    }\n  }, \"Ok\")))));\n};\n\n_s(LCIModal, \"kRNRiCe6wdLcOJwnLzm1wsT/MMg=\", false, function () {\n  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"useDisclosure\"]];\n});\n\n_c = LCIModal;\n\nvar useInterval = function useInterval(callback, delay) {\n  _s2();\n\n  var savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(); // Remember the latest callback.\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    savedCallback.current = callback;\n  }, [callback]); // Set up the interval.\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    function tick() {\n      savedCallback.current();\n    }\n\n    if (delay !== null) {\n      var id = setInterval(tick, delay);\n      return function () {\n        return clearInterval(id);\n      };\n    }\n  }, [delay]);\n};\n\n_s2(useInterval, \"dqNZMqbncP+HtqBlD20aSNv0Ugk=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LCIModal);\n\nvar _c;\n\n$RefreshReg$(_c, \"LCIModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvbW9kYWwudHN4PzJhZmMiXSwibmFtZXMiOlsiTENJTW9kYWwiLCJsb2FkaW5nIiwidXNlRGlzY2xvc3VyZSIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJ1c2VTdGF0ZSIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJ1c2VFZmZlY3QiLCJzZXRJbnRlcnZhbCIsInByZXZQcm9ncmVzcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VJbnRlcnZhbCIsImNhbGxiYWNrIiwiZGVsYXkiLCJzYXZlZENhbGxiYWNrIiwidXNlUmVmIiwiY3VycmVudCIsInRpY2siLCJpZCIsImNsZWFySW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWFBOztBQU1BLElBQU1BLFFBQWlDLEdBQUcsU0FBcENBLFFBQW9DLE9BQXlCO0FBQUE7O0FBQUEsMEJBQXRCQyxPQUFzQjtBQUFBLE1BQXRCQSxPQUFzQiw2QkFBWixLQUFZOztBQUFBLHVCQUMzQkMscUVBQWEsRUFEYztBQUFBLE1BQ3ZEQyxNQUR1RCxrQkFDdkRBLE1BRHVEO0FBQUEsTUFDL0NDLE1BRCtDLGtCQUMvQ0EsTUFEK0M7QUFBQSxNQUN2Q0MsT0FEdUMsa0JBQ3ZDQSxPQUR1Qzs7QUFBQSxrQkFFL0JDLHNEQUFRLENBQVMsQ0FBVCxDQUZ1QjtBQUFBLE1BRXhEQyxRQUZ3RDtBQUFBLE1BRTlDQyxXQUY4Qzs7QUFJL0RDLHlEQUFTLENBQUNMLE1BQUQsRUFBUyxFQUFULENBQVQ7QUFDQUsseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSVIsT0FBSixFQUFhO0FBQ1RTLGlCQUFXLENBQUMsWUFBTTtBQUNkRixtQkFBVyxDQUFDLFVBQUNHLFlBQUQ7QUFBQSxpQkFBa0JBLFlBQVksR0FBRyxDQUFqQztBQUFBLFNBQUQsQ0FBWDtBQUNBQyxlQUFPLENBQUNDLEdBQVIsQ0FBWU4sUUFBWjtBQUNILE9BSFUsRUFHUixJQUhRLENBQVg7QUFJSDtBQUNKLEdBUFEsRUFPTixDQUFDTixPQUFELENBUE0sQ0FBVDtBQVNBLFNBQ0ksbUVBQ0ksTUFBQyxxREFBRDtBQUFPLFVBQU0sRUFBRUUsTUFBZjtBQUF1QixXQUFPLEVBQUVFLE9BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFBTSxTQUFLLEVBQUUsR0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJLE1BQUMsZ0VBQUQ7QUFBa0IsU0FBSyxFQUFDLFlBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtT0FJSSxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0RBQUQ7QUFBVSxhQUFTLE1BQW5CO0FBQW9CLGNBQVUsTUFBOUI7QUFBK0IsU0FBSyxFQUFDLFFBQXJDO0FBQThDLFNBQUssRUFBRUUsUUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBSkosQ0FMSixFQWFJLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtJLE1BQUMsc0RBQUQ7QUFBUSxXQUFPLEVBQUVGLE9BQWpCO0FBQTBCLGdCQUFZLEVBQUMsUUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUxKLENBYkosQ0FGSixDQURKLENBREo7QUE4QkgsQ0E1Q0Q7O0dBQU1MLFE7VUFDa0NFLDZEOzs7S0FEbENGLFE7O0FBOENOLElBQU1jLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFFBQUQsRUFBdUJDLEtBQXZCLEVBQXlDO0FBQUE7O0FBQ3pELE1BQU1DLGFBQWEsR0FBR0Msb0RBQU0sRUFBNUIsQ0FEeUQsQ0FHekQ7O0FBQ0FULHlEQUFTLENBQUMsWUFBTTtBQUNaUSxpQkFBYSxDQUFDRSxPQUFkLEdBQXdCSixRQUF4QjtBQUNILEdBRlEsRUFFTixDQUFDQSxRQUFELENBRk0sQ0FBVCxDQUp5RCxDQVF6RDs7QUFDQU4seURBQVMsQ0FBQyxZQUFNO0FBQ1osYUFBU1csSUFBVCxHQUFnQjtBQUNaSCxtQkFBYSxDQUFDRSxPQUFkO0FBQ0g7O0FBQ0QsUUFBSUgsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDaEIsVUFBSUssRUFBRSxHQUFHWCxXQUFXLENBQUNVLElBQUQsRUFBT0osS0FBUCxDQUFwQjtBQUNBLGFBQU87QUFBQSxlQUFNTSxhQUFhLENBQUNELEVBQUQsQ0FBbkI7QUFBQSxPQUFQO0FBQ0g7QUFDSixHQVJRLEVBUU4sQ0FBQ0wsS0FBRCxDQVJNLENBQVQ7QUFTSCxDQWxCRDs7SUFBTUYsVzs7QUFvQlNkLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tb2xlY3VsZXMvbW9kYWwudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgICBNb2RhbCxcbiAgICBNb2RhbE92ZXJsYXksXG4gICAgTW9kYWxDb250ZW50LFxuICAgIE1vZGFsSGVhZGVyLFxuICAgIE1vZGFsRm9vdGVyLFxuICAgIE1vZGFsQm9keSxcbiAgICBNb2RhbENsb3NlQnV0dG9uLFxuICAgIEJ1dHRvbixcbiAgICB1c2VEaXNjbG9zdXJlLFxuICAgIFByb2dyZXNzLFxuICAgIEJveCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4uL2F0b21zL2xvZ29cIjtcblxuaW50ZXJmYWNlIExDSU1vZGFsUHJvcHMge1xuICAgIGxvYWRpbmc/OiBib29sZWFuO1xufVxuXG5jb25zdCBMQ0lNb2RhbDogUmVhY3QuRkM8TENJTW9kYWxQcm9wcz4gPSAoeyBsb2FkaW5nID0gZmFsc2UgfSkgPT4ge1xuICAgIGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKTtcbiAgICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgICB1c2VFZmZlY3Qob25PcGVuLCBbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRQcm9ncmVzcygocHJldlByb2dyZXNzKSA9PiBwcmV2UHJvZ3Jlc3MgKyAxKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9ncmVzcyk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfVxuICAgIH0sIFtsb2FkaW5nXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPE1vZGFsIGlzT3Blbj17aXNPcGVufSBvbkNsb3NlPXtvbkNsb3NlfT5cbiAgICAgICAgICAgICAgICA8TW9kYWxPdmVybGF5IC8+XG4gICAgICAgICAgICAgICAgPE1vZGFsQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ28gc2NhbGU9ezMuMn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbEhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsQ2xvc2VCdXR0b24gY29sb3I9XCJvcmFuZ2UuMTAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEEgY29tbW9kaSBpbGxvIGxhdWRhbnRpdW0gb3B0aW9cbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGxpY2FibyBtaW51cyB1bGxhbSBhY2N1c2FudGl1bSBkb2xvcmUgZXVtIGVuaW0gZG9sb3IgZXJyb3IgdGVtcG9yYSwgbGFib3Jpb3NhbSBwb3NzaW11c1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbmlldCByZXBlbGxhdCBpZCByZXBlbGxlbmR1cyB2aXRhZT9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggbXQ9XCI1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzIGhhc1N0cmlwZSBpc0FuaW1hdGVkIGNvbG9yPVwib3JhbmdlXCIgdmFsdWU9e3Byb2dyZXNzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPEJ1dHRvbiB2YXJpYW50Q29sb3I9XCJibHVlXCIgbXI9ezN9IG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlcnJhclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9IHZhcmlhbnRDb2xvcj1cIm9yYW5nZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9rXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8L01vZGFsQ29udGVudD5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5jb25zdCB1c2VJbnRlcnZhbCA9IChjYWxsYmFjazogKCkgPT4gdm9pZCwgZGVsYXk6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHNhdmVkQ2FsbGJhY2sgPSB1c2VSZWY8YW55PigpO1xuXG4gICAgLy8gUmVtZW1iZXIgdGhlIGxhdGVzdCBjYWxsYmFjay5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzYXZlZENhbGxiYWNrLmN1cnJlbnQgPSBjYWxsYmFjaztcbiAgICB9LCBbY2FsbGJhY2tdKTtcblxuICAgIC8vIFNldCB1cCB0aGUgaW50ZXJ2YWwuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gdGljaygpIHtcbiAgICAgICAgICAgIHNhdmVkQ2FsbGJhY2suY3VycmVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWxheSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IGlkID0gc2V0SW50ZXJ2YWwodGljaywgZGVsYXkpO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgICAgICB9XG4gICAgfSwgW2RlbGF5XSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMQ0lNb2RhbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/molecules/modal.tsx\n");

/***/ })

})