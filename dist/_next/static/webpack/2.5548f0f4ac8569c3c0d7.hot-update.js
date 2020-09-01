webpackHotUpdate_N_E(2,{

/***/ "./components/atoms/ca.tsx":
/*!*********************************!*\
  !*** ./components/atoms/ca.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _virtualeffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virtualeffect */ \"./components/atoms/virtualeffect.ts\");\n\n\nvar mainSketchFactory = function mainSketchFactory(height, width) {\n  var pImages;\n  var realities;\n  var cellSize = 4; // 18\n\n  var images = [\"assets/im4.jpg\", \"assets/im3.jpg\"];\n  return function (p) {\n    p.preload = function () {\n      pImages = images.map(function (imgSrc) {\n        return p.loadImage(imgSrc);\n      });\n    };\n\n    p.setup = function () {\n      p.createCanvas(width || 500, height || 500, WEBGL);\n      p.colorMode(p.RGB, 255);\n      p.noStroke();\n      realities = pImages.map(function (img, index) {\n        var automaton = new Automaton(cellSize, {\n          0: color(255, 0),\n          // 0 alpha\n          1: color(255, 255) // 255 alpha\n\n        } // { 6: index === 0 ? 0 : 1 },\n        // { 6: index === 0 ? 0 : 1 }\n        );\n        return new _virtualeffect__WEBPACK_IMPORTED_MODULE_0__[\"default\"](automaton, img, MULTIPLY);\n      });\n    };\n\n    p.draw = function () {\n      p.background(89, 123, 12);\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mainSketchFactory);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9jYS50c3g/MWNmMyJdLCJuYW1lcyI6WyJtYWluU2tldGNoRmFjdG9yeSIsImhlaWdodCIsIndpZHRoIiwicEltYWdlcyIsInJlYWxpdGllcyIsImNlbGxTaXplIiwiaW1hZ2VzIiwicCIsInByZWxvYWQiLCJtYXAiLCJpbWdTcmMiLCJsb2FkSW1hZ2UiLCJzZXR1cCIsImNyZWF0ZUNhbnZhcyIsIldFQkdMIiwiY29sb3JNb2RlIiwiUkdCIiwibm9TdHJva2UiLCJpbWciLCJpbmRleCIsImF1dG9tYXRvbiIsIkF1dG9tYXRvbiIsImNvbG9yIiwiVmlydHVhbEVmZmVjdCIsIk1VTFRJUExZIiwiZHJhdyIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLE1BQUQsRUFBa0JDLEtBQWxCLEVBQXFDO0FBQzNELE1BQUlDLE9BQUo7QUFDQSxNQUFJQyxTQUFKO0FBRUEsTUFBTUMsUUFBZ0IsR0FBRyxDQUF6QixDQUoyRCxDQUkvQjs7QUFDNUIsTUFBTUMsTUFBTSxHQUFHLENBQUMsZ0JBQUQsRUFBbUIsZ0JBQW5CLENBQWY7QUFFQSxTQUFPLFVBQUNDLENBQUQsRUFBaUI7QUFDcEJBLEtBQUMsQ0FBQ0MsT0FBRixHQUFZLFlBQU07QUFDZEwsYUFBTyxHQUFHRyxNQUFNLENBQUNHLEdBQVAsQ0FBVyxVQUFDQyxNQUFEO0FBQUEsZUFBc0JILENBQUMsQ0FBQ0ksU0FBRixDQUFZRCxNQUFaLENBQXRCO0FBQUEsT0FBWCxDQUFWO0FBQ0gsS0FGRDs7QUFJQUgsS0FBQyxDQUFDSyxLQUFGLEdBQVUsWUFBTTtBQUNaTCxPQUFDLENBQUNNLFlBQUYsQ0FBZVgsS0FBSyxJQUFJLEdBQXhCLEVBQTZCRCxNQUFNLElBQUksR0FBdkMsRUFBNENhLEtBQTVDO0FBQ0FQLE9BQUMsQ0FBQ1EsU0FBRixDQUFZUixDQUFDLENBQUNTLEdBQWQsRUFBbUIsR0FBbkI7QUFDQVQsT0FBQyxDQUFDVSxRQUFGO0FBRUFiLGVBQVMsR0FBR0QsT0FBTyxDQUFDTSxHQUFSLENBQVksVUFBQ1MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ3BDLFlBQU1DLFNBQVMsR0FBRyxJQUFJQyxTQUFKLENBQ2RoQixRQURjLEVBRWQ7QUFDSSxhQUFHaUIsS0FBSyxDQUFDLEdBQUQsRUFBTSxDQUFOLENBRFo7QUFDc0I7QUFDbEIsYUFBR0EsS0FBSyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBRlosQ0FFd0I7O0FBRnhCLFNBRmMsQ0FNZDtBQUNBO0FBUGMsU0FBbEI7QUFTQSxlQUFPLElBQUlDLHNEQUFKLENBQWtCSCxTQUFsQixFQUE2QkYsR0FBN0IsRUFBa0NNLFFBQWxDLENBQVA7QUFDSCxPQVhXLENBQVo7QUFZSCxLQWpCRDs7QUFtQkFqQixLQUFDLENBQUNrQixJQUFGLEdBQVMsWUFBTTtBQUNYbEIsT0FBQyxDQUFDbUIsVUFBRixDQUFhLEVBQWIsRUFBaUIsR0FBakIsRUFBc0IsRUFBdEI7QUFDSCxLQUZEO0FBR0gsR0EzQkQ7QUE0QkgsQ0FuQ0Q7O0FBcUNlMUIsZ0ZBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2F0b21zL2NhLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwNSBmcm9tIFwicDVcIjtcbmltcG9ydCBWaXJ0dWFsRWZmZWN0IGZyb20gXCIuL3ZpcnR1YWxlZmZlY3RcIjtcblxuY29uc3QgbWFpblNrZXRjaEZhY3RvcnkgPSAoaGVpZ2h0PzogbnVtYmVyLCB3aWR0aD86IG51bWJlcikgPT4ge1xuICAgIGxldCBwSW1hZ2VzOiBwNS5JbWFnZVtdO1xuICAgIGxldCByZWFsaXRpZXM6IFZpcnR1YWxFZmZlY3RbXTtcblxuICAgIGNvbnN0IGNlbGxTaXplOiBudW1iZXIgPSA0OyAvLyAxOFxuICAgIGNvbnN0IGltYWdlcyA9IFtcImFzc2V0cy9pbTQuanBnXCIsIFwiYXNzZXRzL2ltMy5qcGdcIl07XG5cbiAgICByZXR1cm4gKHA6IHA1KTogdm9pZCA9PiB7XG4gICAgICAgIHAucHJlbG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHBJbWFnZXMgPSBpbWFnZXMubWFwKChpbWdTcmMpOiBwNS5JbWFnZSA9PiBwLmxvYWRJbWFnZShpbWdTcmMpKTtcbiAgICAgICAgfTtcblxuICAgICAgICBwLnNldHVwID0gKCkgPT4ge1xuICAgICAgICAgICAgcC5jcmVhdGVDYW52YXMod2lkdGggfHwgNTAwLCBoZWlnaHQgfHwgNTAwLCBXRUJHTCk7XG4gICAgICAgICAgICBwLmNvbG9yTW9kZShwLlJHQiwgMjU1KTtcbiAgICAgICAgICAgIHAubm9TdHJva2UoKTtcblxuICAgICAgICAgICAgcmVhbGl0aWVzID0gcEltYWdlcy5tYXAoKGltZywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdXRvbWF0b24gPSBuZXcgQXV0b21hdG9uKFxuICAgICAgICAgICAgICAgICAgICBjZWxsU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgMDogY29sb3IoMjU1LCAwKSwgLy8gMCBhbHBoYVxuICAgICAgICAgICAgICAgICAgICAgICAgMTogY29sb3IoMjU1LCAyNTUpLCAvLyAyNTUgYWxwaGFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB7IDY6IGluZGV4ID09PSAwID8gMCA6IDEgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8geyA2OiBpbmRleCA9PT0gMCA/IDAgOiAxIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVmlydHVhbEVmZmVjdChhdXRvbWF0b24sIGltZywgTVVMVElQTFkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcC5kcmF3ID0gKCkgPT4ge1xuICAgICAgICAgICAgcC5iYWNrZ3JvdW5kKDg5LCAxMjMsIDEyKTtcbiAgICAgICAgfTtcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFpblNrZXRjaEZhY3Rvcnk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/atoms/ca.tsx\n");

/***/ }),

/***/ "./components/atoms/virtualeffect.ts":
/*!*******************************************!*\
  !*** ./components/atoms/virtualeffect.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\n\nvar VirtualEffect = /*#__PURE__*/function () {\n  function VirtualEffect(p, automaton, image, blendMode) {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, VirtualEffect);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"automaton\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"image\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"blendMode\", void 0);\n\n    this.automaton = automaton;\n    this.image = image;\n    this.blendMode = blendMode || p.DARKEST;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(VirtualEffect, [{\n    key: \"draw\",\n    value: function draw(p, width, height) {\n      var board = p.createImage(width, height); //.getBlendedState(this.image);\n\n      board.copy(this.image, 0, 0, this.image.width, this.image.height, 0, 0, board.width, board.height);\n      board.mask(this.automaton.getImageState(p));\n      p.image(board, 0, 0);\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.automaton.updateState();\n    }\n  }]);\n\n  return VirtualEffect;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VirtualEffect);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy92aXJ0dWFsZWZmZWN0LnRzPzEzZjkiXSwibmFtZXMiOlsiVmlydHVhbEVmZmVjdCIsInAiLCJhdXRvbWF0b24iLCJpbWFnZSIsImJsZW5kTW9kZSIsIkRBUktFU1QiLCJ3aWR0aCIsImhlaWdodCIsImJvYXJkIiwiY3JlYXRlSW1hZ2UiLCJjb3B5IiwibWFzayIsImdldEltYWdlU3RhdGUiLCJ1cGRhdGVTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFHTUEsYTtBQUtGLHlCQUFZQyxDQUFaLEVBQW1CQyxTQUFuQixFQUF5Q0MsS0FBekMsRUFBMERDLFNBQTFELEVBQXFGO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2pGLFNBQUtGLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkEsU0FBUyxJQUFJSCxDQUFDLENBQUNJLE9BQWhDO0FBQ0g7Ozs7eUJBRUlKLEMsRUFBT0ssSyxFQUFlQyxNLEVBQWdCO0FBQ3ZDLFVBQU1DLEtBQUssR0FBR1AsQ0FBQyxDQUFDUSxXQUFGLENBQWNILEtBQWQsRUFBcUJDLE1BQXJCLENBQWQsQ0FEdUMsQ0FDSzs7QUFDNUNDLFdBQUssQ0FBQ0UsSUFBTixDQUFXLEtBQUtQLEtBQWhCLEVBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCLEtBQUtBLEtBQUwsQ0FBV0csS0FBeEMsRUFBK0MsS0FBS0gsS0FBTCxDQUFXSSxNQUExRCxFQUFrRSxDQUFsRSxFQUFxRSxDQUFyRSxFQUF3RUMsS0FBSyxDQUFDRixLQUE5RSxFQUFxRkUsS0FBSyxDQUFDRCxNQUEzRjtBQUNBQyxXQUFLLENBQUNHLElBQU4sQ0FBVyxLQUFLVCxTQUFMLENBQWVVLGFBQWYsQ0FBNkJYLENBQTdCLENBQVg7QUFDQUEsT0FBQyxDQUFDRSxLQUFGLENBQVFLLEtBQVIsRUFBZSxDQUFmLEVBQWtCLENBQWxCO0FBQ0g7Ozs2QkFFUTtBQUNMLFdBQUtOLFNBQUwsQ0FBZVcsV0FBZjtBQUNIOzs7Ozs7QUFHVWIsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2F0b21zL3ZpcnR1YWxlZmZlY3QudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcDUgZnJvbSBcInA1XCI7XG5pbXBvcnQgQXV0b21hdG9uIGZyb20gXCIuL2F1dG9tYXRvblwiO1xuXG5jbGFzcyBWaXJ0dWFsRWZmZWN0IHtcbiAgICBhdXRvbWF0b246IEF1dG9tYXRvbjtcbiAgICBpbWFnZTogcDUuSW1hZ2U7XG4gICAgYmxlbmRNb2RlOiBwNS5CTEVORF9NT0RFO1xuXG4gICAgY29uc3RydWN0b3IocDogcDUsIGF1dG9tYXRvbjogQXV0b21hdG9uLCBpbWFnZTogcDUuSW1hZ2UsIGJsZW5kTW9kZT86IHA1LkJMRU5EX01PREUpIHtcbiAgICAgICAgdGhpcy5hdXRvbWF0b24gPSBhdXRvbWF0b247XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgdGhpcy5ibGVuZE1vZGUgPSBibGVuZE1vZGUgfHwgcC5EQVJLRVNUO1xuICAgIH1cblxuICAgIGRyYXcocDogcDUsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gcC5jcmVhdGVJbWFnZSh3aWR0aCwgaGVpZ2h0KTsgLy8uZ2V0QmxlbmRlZFN0YXRlKHRoaXMuaW1hZ2UpO1xuICAgICAgICBib2FyZC5jb3B5KHRoaXMuaW1hZ2UsIDAsIDAsIHRoaXMuaW1hZ2Uud2lkdGgsIHRoaXMuaW1hZ2UuaGVpZ2h0LCAwLCAwLCBib2FyZC53aWR0aCwgYm9hcmQuaGVpZ2h0KTtcbiAgICAgICAgYm9hcmQubWFzayh0aGlzLmF1dG9tYXRvbi5nZXRJbWFnZVN0YXRlKHApKTtcbiAgICAgICAgcC5pbWFnZShib2FyZCwgMCwgMCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmF1dG9tYXRvbi51cGRhdGVTdGF0ZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlydHVhbEVmZmVjdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/atoms/virtualeffect.ts\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _classCallCheck; });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzP2Q0ZWMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _createClass; });\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzP2JlZTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/createClass.js\n");

/***/ })

})