webpackHotUpdate_N_E(2,{

/***/ "./components/atoms/automaton.ts":
/*!***************************************!*\
  !*** ./components/atoms/automaton.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar Automaton = /*#__PURE__*/function () {\n  function Automaton(p, width, height) {\n    var _this = this;\n\n    var cellSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;\n    var colors = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {\n      0: 0,\n      1: 255\n    };\n    var diedRules = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};\n    var liveRules = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Automaton);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"_cellSize\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"_nextval\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"board\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"_colors\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"_width\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"_height\", void 0);\n\n    this._cellSize = cellSize;\n    this.board = Array();\n    this._nextval = {\n      0: _objectSpread({\n        0: 0,\n        1: 0,\n        2: 0,\n        3: 1,\n        4: 0,\n        5: 0,\n        6: 0,\n        7: 0,\n        8: 0\n      }, diedRules),\n      1: _objectSpread({\n        0: 0,\n        1: 0,\n        2: 1,\n        3: 1,\n        4: 0,\n        5: 0,\n        6: 0,\n        7: 0,\n        8: 0\n      }, liveRules)\n    };\n    this._width = width;\n    this._height = height;\n    this._colors = colors;\n\n    this._walk(function (i, j) {\n      if (_this.board[i] === undefined) {\n        _this.board[i] = Array();\n      }\n\n      _this.board[i][j] = p.random() > 0.7 ? 1 : 0;\n    });\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Automaton, [{\n    key: \"_walk\",\n    value: function _walk(fn) {\n      for (var _j = 0; _j < this._height / this._cellSize; _j++) {\n        for (var _i = 0; _i < this._width / this._cellSize; _i++) {\n          fn(_i, _j);\n        }\n      }\n    }\n  }, {\n    key: \"_nextState\",\n    value: function _nextState() {\n      var _this2 = this;\n\n      var next = Array();\n\n      this._walk(function (i, j) {\n        var population = 0;\n\n        for (var y = -1; y <= 1; y++) {\n          for (var x = -1; x <= 1; x++) {\n            if (x === 0 && y === 0) {\n              continue;\n            }\n\n            if (i + x < 0 || i + x >= _this2.board.length || j + y < 0 || j + y >= _this2.board[0].length) {\n              continue;\n            }\n\n            if (_this2.board[i + x][j + y]) {\n              population++;\n            }\n          }\n        }\n\n        if (next[i] === undefined) {\n          next[i] = Array();\n        }\n\n        next[i][j] = _this2._nextval[_this2.board[i][j]][population];\n      });\n\n      return next;\n    }\n  }, {\n    key: \"getImageState\",\n    value: function getImageState(p) {\n      var _this3 = this;\n\n      var img = p.createImage(this._width, this._height);\n      img.loadPixels();\n\n      this._walk(function (i, j) {\n        var c = _this3._colors[_this3.board[i][j]];\n\n        for (var x = 0; x < _this3._cellSize; x++) {\n          for (var y = 0; y < _this3._cellSize; y++) {\n            img.set(i * _this3._cellSize + x, j * _this3._cellSize + y, c);\n          }\n        }\n      });\n\n      img.updatePixels();\n      return img;\n    }\n  }, {\n    key: \"getBlendedState\",\n    value: function getBlendedState(p, sImage) {\n      var _this4 = this;\n\n      var img = p.createImage(p.width, p.height);\n      img.loadPixels();\n      sImage.loadPixels(); // let d = pixelDensity();\n      // let fullImage = 4 * (width * d) * (height * d);\n      // for (let i = 0; i < fullImage; i += 4) {\n      //     const w = int(i / width) % img.width;\n      //     const h = (i - w * width) % img.height;\n      //     const x = w;\n      //     const y = h;\n      //     const isAlive = this.board[x % this.board[0].length][y % this.board.length];\n      //     if (isAlive <= 0) {\n      //         continue;\n      //     }\n      //     img.pixels[i] = 255;\n      //     img.pixels[i + 1] = 120;\n      //     img.pixels[i + 2] = 14;\n      //     img.pixels[i + 3] = 255;\n      // }\n      // console.log(\"rendering\");\n\n      this._walk(function (i, j) {\n        var isAlive = _this4.board[i][j];\n\n        if (isAlive <= 0) {\n          return;\n        }\n\n        var scale = sImage.width / img.width; // img.copy(\n        //     sImage,\n        //     i * this._cellSize * scale,\n        //     j * this._cellSize * scale,\n        //     this._cellSize,\n        //     this._cellSize,\n        //     i * this._cellSize,\n        //     j * this._cellSize,\n        //     this._cellSize,\n        //     this._cellSize\n        // );\n        // const c = this._colors[this.board[i][j]];\n        // for (let x = 0; x < this._cellSize; x++) {\n        //     for (let y = 0; y < this._cellSize; y++) {\n        //         const x1 = i * this._cellSize + x;\n        //         const y1 = j * this._cellSize + y;\n        //         // const c = sImage.get(x1 * scale, y1 * scale);\n        //         img.set(x1, y1, 255);\n        //     }\n        // }\n        // for (let x = i * this._cellSize; x < (i + 1) * this._cellSize; x++) {\n        //     for (let y = j * this._cellSize; y < (j + 1) * this._cellSize; y++) {\n        //         const index = x * img.width + y;\n        //         // img.set(x, y, sImage.get(x, y));\n        //         img.pixels[index] = sImage.pixels[index];\n        //         img.pixels[index + 1] = sImage.pixels[index + 1];\n        //         img.pixels[index + 2] = sImage.pixels[index + 2];\n        //         img.pixels[index + 3] = sImage.pixels[index + 3];\n        //         // img.set(, , 255 * isAlive);\n        //     }\n        // }\n        // if (isAlive !== 0) {\n        //     img.copy(\n        //         sImage,\n        //         i * this._cellSize,\n        //         j * this._cellSize,\n        //         this._cellSize,\n        //         this._cellSize,\n        //         i * this._cellSize,\n        //         j * this._cellSize,\n        //         this._cellSize,\n        //         this._cellSize\n        //     );\n        // }\n      });\n\n      sImage.updatePixels();\n      img.updatePixels();\n      return img;\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(p) {\n      var _this5 = this;\n\n      this._walk(function (i, j) {\n        p.fill(_this5._colors[_this5.board[i][j]]);\n        p.rect(i * _this5._cellSize, j * _this5._cellSize, _this5._cellSize, _this5._cellSize);\n      });\n    }\n  }, {\n    key: \"updateState\",\n    value: function updateState() {\n      var nextState = this._nextState();\n\n      this.board = nextState;\n    }\n  }]);\n\n  return Automaton;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Automaton);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9hdXRvbWF0b24udHM/NzY4OCJdLCJuYW1lcyI6WyJBdXRvbWF0b24iLCJwIiwid2lkdGgiLCJoZWlnaHQiLCJjZWxsU2l6ZSIsImNvbG9ycyIsImRpZWRSdWxlcyIsImxpdmVSdWxlcyIsIl9jZWxsU2l6ZSIsImJvYXJkIiwiQXJyYXkiLCJfbmV4dHZhbCIsIl93aWR0aCIsIl9oZWlnaHQiLCJfY29sb3JzIiwiX3dhbGsiLCJpIiwiaiIsInVuZGVmaW5lZCIsInJhbmRvbSIsImZuIiwibmV4dCIsInBvcHVsYXRpb24iLCJ5IiwieCIsImxlbmd0aCIsImltZyIsImNyZWF0ZUltYWdlIiwibG9hZFBpeGVscyIsImMiLCJzZXQiLCJ1cGRhdGVQaXhlbHMiLCJzSW1hZ2UiLCJpc0FsaXZlIiwic2NhbGUiLCJmaWxsIiwicmVjdCIsIm5leHRTdGF0ZSIsIl9uZXh0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUVNQSxTO0FBU0YscUJBQ0lDLENBREosRUFFSUMsS0FGSixFQUdJQyxNQUhKLEVBUUU7QUFBQTs7QUFBQSxRQUpFQyxRQUlGLHVFQUpxQixFQUlyQjtBQUFBLFFBSEVDLE1BR0YsdUVBSDREO0FBQUUsU0FBRyxDQUFMO0FBQVEsU0FBRztBQUFYLEtBRzVEO0FBQUEsUUFGRUMsU0FFRix1RUFGeUMsRUFFekM7QUFBQSxRQURFQyxTQUNGLHVFQUR5QyxFQUN6Qzs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDRSxTQUFLQyxTQUFMLEdBQWlCSixRQUFqQjtBQUNBLFNBQUtLLEtBQUwsR0FBYUMsS0FBSyxFQUFsQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0I7QUFDWjtBQUNJLFdBQUcsQ0FEUDtBQUVJLFdBQUcsQ0FGUDtBQUdJLFdBQUcsQ0FIUDtBQUlJLFdBQUcsQ0FKUDtBQUtJLFdBQUcsQ0FMUDtBQU1JLFdBQUcsQ0FOUDtBQU9JLFdBQUcsQ0FQ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QWxCOztBQUNBLFdBQUs3QixLQUFMLEdBQWE0QixTQUFiO0FBQ0g7Ozs7OztBQUdVckMsd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2F0b21zL2F1dG9tYXRvbi50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwNSBmcm9tIFwicDVcIjtcblxuY2xhc3MgQXV0b21hdG9uIHtcbiAgICBwcml2YXRlIF9jZWxsU2l6ZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX25leHR2YWw6IHsgW2tleTogbnVtYmVyXTogeyBba2V5OiBudW1iZXJdOiBudW1iZXIgfSB9O1xuICAgIHByaXZhdGUgYm9hcmQ6IG51bWJlcltdW107XG4gICAgcHJpdmF0ZSBfY29sb3JzOiB7IFtrZXk6IG51bWJlcl06IG51bWJlciB8IG51bWJlcltdIHwgcDUuQ29sb3IgfTtcblxuICAgIHByaXZhdGUgX3dpZHRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcDogcDUsXG4gICAgICAgIHdpZHRoOiBudW1iZXIsXG4gICAgICAgIGhlaWdodDogbnVtYmVyLFxuICAgICAgICBjZWxsU2l6ZTogbnVtYmVyID0gMTAsXG4gICAgICAgIGNvbG9yczogeyBba2V5OiBudW1iZXJdOiBudW1iZXIgfCBudW1iZXJbXSB8IHA1LkNvbG9yIH0gPSB7IDA6IDAsIDE6IDI1NSB9LFxuICAgICAgICBkaWVkUnVsZXM6IHsgW2tleTogbnVtYmVyXTogbnVtYmVyIH0gPSB7fSxcbiAgICAgICAgbGl2ZVJ1bGVzOiB7IFtrZXk6IG51bWJlcl06IG51bWJlciB9ID0ge31cbiAgICApIHtcbiAgICAgICAgdGhpcy5fY2VsbFNpemUgPSBjZWxsU2l6ZTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IEFycmF5PG51bWJlcltdPigpO1xuICAgICAgICB0aGlzLl9uZXh0dmFsID0ge1xuICAgICAgICAgICAgMDoge1xuICAgICAgICAgICAgICAgIDA6IDAsXG4gICAgICAgICAgICAgICAgMTogMCxcbiAgICAgICAgICAgICAgICAyOiAwLFxuICAgICAgICAgICAgICAgIDM6IDEsXG4gICAgICAgICAgICAgICAgNDogMCxcbiAgICAgICAgICAgICAgICA1OiAwLFxuICAgICAgICAgICAgICAgIDY6IDAsXG4gICAgICAgICAgICAgICAgNzogMCxcbiAgICAgICAgICAgICAgICA4OiAwLFxuICAgICAgICAgICAgICAgIC4uLmRpZWRSdWxlcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAxOiB7XG4gICAgICAgICAgICAgICAgMDogMCxcbiAgICAgICAgICAgICAgICAxOiAwLFxuICAgICAgICAgICAgICAgIDI6IDEsXG4gICAgICAgICAgICAgICAgMzogMSxcbiAgICAgICAgICAgICAgICA0OiAwLFxuICAgICAgICAgICAgICAgIDU6IDAsXG4gICAgICAgICAgICAgICAgNjogMCxcbiAgICAgICAgICAgICAgICA3OiAwLFxuICAgICAgICAgICAgICAgIDg6IDAsXG4gICAgICAgICAgICAgICAgLi4ubGl2ZVJ1bGVzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5fY29sb3JzID0gY29sb3JzO1xuXG4gICAgICAgIHRoaXMuX3dhbGsoKGksIGopID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2ldID0gQXJyYXk8bnVtYmVyPigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ib2FyZFtpXVtqXSA9IHAucmFuZG9tKCkgPiAwLjcgPyAxIDogMDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfd2FsayhmbjogKGk6IG51bWJlciwgajogbnVtYmVyKSA9PiB2b2lkKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5faGVpZ2h0IC8gdGhpcy5fY2VsbFNpemU7IGorKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl93aWR0aCAvIHRoaXMuX2NlbGxTaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmbihpLCBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX25leHRTdGF0ZSgpOiBudW1iZXJbXVtdIHtcbiAgICAgICAgbGV0IG5leHQ6IG51bWJlcltdW10gPSBBcnJheTxudW1iZXJbXT4oKTtcbiAgICAgICAgdGhpcy5fd2FsaygoaSwgaikgPT4ge1xuICAgICAgICAgICAgbGV0IHBvcHVsYXRpb24gPSAwO1xuXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gLTE7IHkgPD0gMTsgeSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IC0xOyB4IDw9IDE7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoeCA9PT0gMCAmJiB5ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpICsgeCA8IDAgfHwgaSArIHggPj0gdGhpcy5ib2FyZC5sZW5ndGggfHwgaiArIHkgPCAwIHx8IGogKyB5ID49IHRoaXMuYm9hcmRbMF0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2kgKyB4XVtqICsgeV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVsYXRpb24rKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5leHRbaV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG5leHRbaV0gPSBBcnJheTxudW1iZXI+KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHRbaV1bal0gPSB0aGlzLl9uZXh0dmFsW3RoaXMuYm9hcmRbaV1bal1dW3BvcHVsYXRpb25dO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfVxuXG4gICAgZ2V0SW1hZ2VTdGF0ZShwOiBwNSk6IHA1LkltYWdlIHtcbiAgICAgICAgY29uc3QgaW1nID0gcC5jcmVhdGVJbWFnZSh0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KTtcbiAgICAgICAgaW1nLmxvYWRQaXhlbHMoKTtcbiAgICAgICAgdGhpcy5fd2FsaygoaSwgaikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYyA9IHRoaXMuX2NvbG9yc1t0aGlzLmJvYXJkW2ldW2pdXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLl9jZWxsU2l6ZTsgeCsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLl9jZWxsU2l6ZTsgeSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zZXQoaSAqIHRoaXMuX2NlbGxTaXplICsgeCwgaiAqIHRoaXMuX2NlbGxTaXplICsgeSwgYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaW1nLnVwZGF0ZVBpeGVscygpO1xuICAgICAgICByZXR1cm4gaW1nO1xuICAgIH1cblxuICAgIGdldEJsZW5kZWRTdGF0ZShwOiBwNSwgc0ltYWdlOiBwNS5JbWFnZSk6IHA1LkltYWdlIHtcbiAgICAgICAgY29uc3QgaW1nID0gcC5jcmVhdGVJbWFnZShwLndpZHRoLCBwLmhlaWdodCk7XG5cbiAgICAgICAgaW1nLmxvYWRQaXhlbHMoKTtcbiAgICAgICAgc0ltYWdlLmxvYWRQaXhlbHMoKTtcblxuICAgICAgICAvLyBsZXQgZCA9IHBpeGVsRGVuc2l0eSgpO1xuICAgICAgICAvLyBsZXQgZnVsbEltYWdlID0gNCAqICh3aWR0aCAqIGQpICogKGhlaWdodCAqIGQpO1xuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGZ1bGxJbWFnZTsgaSArPSA0KSB7XG4gICAgICAgIC8vICAgICBjb25zdCB3ID0gaW50KGkgLyB3aWR0aCkgJSBpbWcud2lkdGg7XG4gICAgICAgIC8vICAgICBjb25zdCBoID0gKGkgLSB3ICogd2lkdGgpICUgaW1nLmhlaWdodDtcblxuICAgICAgICAvLyAgICAgY29uc3QgeCA9IHc7XG4gICAgICAgIC8vICAgICBjb25zdCB5ID0gaDtcblxuICAgICAgICAvLyAgICAgY29uc3QgaXNBbGl2ZSA9IHRoaXMuYm9hcmRbeCAlIHRoaXMuYm9hcmRbMF0ubGVuZ3RoXVt5ICUgdGhpcy5ib2FyZC5sZW5ndGhdO1xuXG4gICAgICAgIC8vICAgICBpZiAoaXNBbGl2ZSA8PSAwKSB7XG4gICAgICAgIC8vICAgICAgICAgY29udGludWU7XG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgLy8gICAgIGltZy5waXhlbHNbaV0gPSAyNTU7XG4gICAgICAgIC8vICAgICBpbWcucGl4ZWxzW2kgKyAxXSA9IDEyMDtcbiAgICAgICAgLy8gICAgIGltZy5waXhlbHNbaSArIDJdID0gMTQ7XG4gICAgICAgIC8vICAgICBpbWcucGl4ZWxzW2kgKyAzXSA9IDI1NTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlbmRlcmluZ1wiKTtcbiAgICAgICAgdGhpcy5fd2FsaygoaSwgaikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNBbGl2ZSA9IHRoaXMuYm9hcmRbaV1bal07XG5cbiAgICAgICAgICAgIGlmIChpc0FsaXZlIDw9IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gc0ltYWdlLndpZHRoIC8gaW1nLndpZHRoO1xuICAgICAgICAgICAgLy8gaW1nLmNvcHkoXG4gICAgICAgICAgICAvLyAgICAgc0ltYWdlLFxuICAgICAgICAgICAgLy8gICAgIGkgKiB0aGlzLl9jZWxsU2l6ZSAqIHNjYWxlLFxuICAgICAgICAgICAgLy8gICAgIGogKiB0aGlzLl9jZWxsU2l6ZSAqIHNjYWxlLFxuICAgICAgICAgICAgLy8gICAgIHRoaXMuX2NlbGxTaXplLFxuICAgICAgICAgICAgLy8gICAgIHRoaXMuX2NlbGxTaXplLFxuICAgICAgICAgICAgLy8gICAgIGkgKiB0aGlzLl9jZWxsU2l6ZSxcbiAgICAgICAgICAgIC8vICAgICBqICogdGhpcy5fY2VsbFNpemUsXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5fY2VsbFNpemUsXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5fY2VsbFNpemVcbiAgICAgICAgICAgIC8vICk7XG5cbiAgICAgICAgICAgIC8vIGNvbnN0IGMgPSB0aGlzLl9jb2xvcnNbdGhpcy5ib2FyZFtpXVtqXV07XG4gICAgICAgICAgICAvLyBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuX2NlbGxTaXplOyB4KyspIHtcbiAgICAgICAgICAgIC8vICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuX2NlbGxTaXplOyB5KyspIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgeDEgPSBpICogdGhpcy5fY2VsbFNpemUgKyB4O1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCB5MSA9IGogKiB0aGlzLl9jZWxsU2l6ZSArIHk7XG5cbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gY29uc3QgYyA9IHNJbWFnZS5nZXQoeDEgKiBzY2FsZSwgeTEgKiBzY2FsZSk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGltZy5zZXQoeDEsIHkxLCAyNTUpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgLy8gZm9yIChsZXQgeCA9IGkgKiB0aGlzLl9jZWxsU2l6ZTsgeCA8IChpICsgMSkgKiB0aGlzLl9jZWxsU2l6ZTsgeCsrKSB7XG4gICAgICAgICAgICAvLyAgICAgZm9yIChsZXQgeSA9IGogKiB0aGlzLl9jZWxsU2l6ZTsgeSA8IChqICsgMSkgKiB0aGlzLl9jZWxsU2l6ZTsgeSsrKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IGluZGV4ID0geCAqIGltZy53aWR0aCArIHk7XG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIGltZy5zZXQoeCwgeSwgc0ltYWdlLmdldCh4LCB5KSk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGltZy5waXhlbHNbaW5kZXhdID0gc0ltYWdlLnBpeGVsc1tpbmRleF07XG4gICAgICAgICAgICAvLyAgICAgICAgIGltZy5waXhlbHNbaW5kZXggKyAxXSA9IHNJbWFnZS5waXhlbHNbaW5kZXggKyAxXTtcbiAgICAgICAgICAgIC8vICAgICAgICAgaW1nLnBpeGVsc1tpbmRleCArIDJdID0gc0ltYWdlLnBpeGVsc1tpbmRleCArIDJdO1xuICAgICAgICAgICAgLy8gICAgICAgICBpbWcucGl4ZWxzW2luZGV4ICsgM10gPSBzSW1hZ2UucGl4ZWxzW2luZGV4ICsgM107XG5cbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gaW1nLnNldCgsICwgMjU1ICogaXNBbGl2ZSk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gaWYgKGlzQWxpdmUgIT09IDApIHtcbiAgICAgICAgICAgIC8vICAgICBpbWcuY29weShcbiAgICAgICAgICAgIC8vICAgICAgICAgc0ltYWdlLFxuICAgICAgICAgICAgLy8gICAgICAgICBpICogdGhpcy5fY2VsbFNpemUsXG4gICAgICAgICAgICAvLyAgICAgICAgIGogKiB0aGlzLl9jZWxsU2l6ZSxcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5fY2VsbFNpemUsXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuX2NlbGxTaXplLFxuICAgICAgICAgICAgLy8gICAgICAgICBpICogdGhpcy5fY2VsbFNpemUsXG4gICAgICAgICAgICAvLyAgICAgICAgIGogKiB0aGlzLl9jZWxsU2l6ZSxcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5fY2VsbFNpemUsXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuX2NlbGxTaXplXG4gICAgICAgICAgICAvLyAgICAgKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHNJbWFnZS51cGRhdGVQaXhlbHMoKTtcbiAgICAgICAgaW1nLnVwZGF0ZVBpeGVscygpO1xuICAgICAgICByZXR1cm4gaW1nO1xuICAgIH1cblxuICAgIGRyYXcocDogcDUpIHtcbiAgICAgICAgdGhpcy5fd2FsaygoaSwgaikgPT4ge1xuICAgICAgICAgICAgcC5maWxsKHRoaXMuX2NvbG9yc1t0aGlzLmJvYXJkW2ldW2pdXSBhcyBwNS5Db2xvcik7XG4gICAgICAgICAgICBwLnJlY3QoaSAqIHRoaXMuX2NlbGxTaXplLCBqICogdGhpcy5fY2VsbFNpemUsIHRoaXMuX2NlbGxTaXplLCB0aGlzLl9jZWxsU2l6ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZVN0YXRlKCkge1xuICAgICAgICBjb25zdCBuZXh0U3RhdGUgPSB0aGlzLl9uZXh0U3RhdGUoKTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5leHRTdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dG9tYXRvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/atoms/automaton.ts\n");

/***/ }),

/***/ "./components/atoms/ca.tsx":
/*!*********************************!*\
  !*** ./components/atoms/ca.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _virtualeffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virtualeffect */ \"./components/atoms/virtualeffect.ts\");\n/* harmony import */ var _automaton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./automaton */ \"./components/atoms/automaton.ts\");\n\n\n\nvar mainSketchFactory = function mainSketchFactory(height, width) {\n  var pImages;\n  var realities;\n  var cellSize = 4; // 18\n\n  var images = [\"assets/im4.jpg\", \"assets/im3.jpg\"];\n  return function (p) {\n    p.preload = function () {\n      pImages = images.map(function (imgSrc) {\n        return p.loadImage(imgSrc);\n      });\n    };\n\n    p.setup = function () {\n      p.createCanvas(width || 500, height || 500, WEBGL);\n      p.colorMode(p.RGB, 255);\n      p.noStroke();\n      realities = pImages.map(function (img, index) {\n        var automaton = new _automaton__WEBPACK_IMPORTED_MODULE_1__[\"default\"](p, width, height, cellSize, {\n          0: p.color(255, 0),\n          // 0 alpha\n          1: p.color(255, 255) // 255 alpha\n\n        } // { 6: index === 0 ? 0 : 1 },\n        // { 6: index === 0 ? 0 : 1 }\n        );\n        return new _virtualeffect__WEBPACK_IMPORTED_MODULE_0__[\"default\"](p, automaton, img, p.MULTIPLY);\n      });\n    };\n\n    p.draw = function () {\n      p.background(89, 123, 12);\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mainSketchFactory);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9jYS50c3g/MWNmMyJdLCJuYW1lcyI6WyJtYWluU2tldGNoRmFjdG9yeSIsImhlaWdodCIsIndpZHRoIiwicEltYWdlcyIsInJlYWxpdGllcyIsImNlbGxTaXplIiwiaW1hZ2VzIiwicCIsInByZWxvYWQiLCJtYXAiLCJpbWdTcmMiLCJsb2FkSW1hZ2UiLCJzZXR1cCIsImNyZWF0ZUNhbnZhcyIsIldFQkdMIiwiY29sb3JNb2RlIiwiUkdCIiwibm9TdHJva2UiLCJpbWciLCJpbmRleCIsImF1dG9tYXRvbiIsIkF1dG9tYXRvbiIsImNvbG9yIiwiVmlydHVhbEVmZmVjdCIsIk1VTFRJUExZIiwiZHJhdyIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxNQUFELEVBQWtCQyxLQUFsQixFQUFxQztBQUMzRCxNQUFJQyxPQUFKO0FBQ0EsTUFBSUMsU0FBSjtBQUVBLE1BQU1DLFFBQWdCLEdBQUcsQ0FBekIsQ0FKMkQsQ0FJL0I7O0FBQzVCLE1BQU1DLE1BQU0sR0FBRyxDQUFDLGdCQUFELEVBQW1CLGdCQUFuQixDQUFmO0FBRUEsU0FBTyxVQUFDQyxDQUFELEVBQWlCO0FBQ3BCQSxLQUFDLENBQUNDLE9BQUYsR0FBWSxZQUFNO0FBQ2RMLGFBQU8sR0FBR0csTUFBTSxDQUFDRyxHQUFQLENBQVcsVUFBQ0MsTUFBRDtBQUFBLGVBQXNCSCxDQUFDLENBQUNJLFNBQUYsQ0FBWUQsTUFBWixDQUF0QjtBQUFBLE9BQVgsQ0FBVjtBQUNILEtBRkQ7O0FBSUFILEtBQUMsQ0FBQ0ssS0FBRixHQUFVLFlBQU07QUFDWkwsT0FBQyxDQUFDTSxZQUFGLENBQWVYLEtBQUssSUFBSSxHQUF4QixFQUE2QkQsTUFBTSxJQUFJLEdBQXZDLEVBQTRDYSxLQUE1QztBQUNBUCxPQUFDLENBQUNRLFNBQUYsQ0FBWVIsQ0FBQyxDQUFDUyxHQUFkLEVBQW1CLEdBQW5CO0FBQ0FULE9BQUMsQ0FBQ1UsUUFBRjtBQUVBYixlQUFTLEdBQUdELE9BQU8sQ0FBQ00sR0FBUixDQUFZLFVBQUNTLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUNwQyxZQUFNQyxTQUFTLEdBQUcsSUFBSUMsa0RBQUosQ0FDZGQsQ0FEYyxFQUVkTCxLQUZjLEVBR2RELE1BSGMsRUFJZEksUUFKYyxFQUtkO0FBQ0ksYUFBR0UsQ0FBQyxDQUFDZSxLQUFGLENBQVEsR0FBUixFQUFhLENBQWIsQ0FEUDtBQUN3QjtBQUNwQixhQUFHZixDQUFDLENBQUNlLEtBQUYsQ0FBUSxHQUFSLEVBQWEsR0FBYixDQUZQLENBRTBCOztBQUYxQixTQUxjLENBU2Q7QUFDQTtBQVZjLFNBQWxCO0FBWUEsZUFBTyxJQUFJQyxzREFBSixDQUFrQmhCLENBQWxCLEVBQXFCYSxTQUFyQixFQUFnQ0YsR0FBaEMsRUFBcUNYLENBQUMsQ0FBQ2lCLFFBQXZDLENBQVA7QUFDSCxPQWRXLENBQVo7QUFlSCxLQXBCRDs7QUFzQkFqQixLQUFDLENBQUNrQixJQUFGLEdBQVMsWUFBTTtBQUNYbEIsT0FBQyxDQUFDbUIsVUFBRixDQUFhLEVBQWIsRUFBaUIsR0FBakIsRUFBc0IsRUFBdEI7QUFDSCxLQUZEO0FBR0gsR0E5QkQ7QUErQkgsQ0F0Q0Q7O0FBd0NlMUIsZ0ZBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2F0b21zL2NhLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwNSBmcm9tIFwicDVcIjtcbmltcG9ydCBWaXJ0dWFsRWZmZWN0IGZyb20gXCIuL3ZpcnR1YWxlZmZlY3RcIjtcbmltcG9ydCBBdXRvbWF0b24gZnJvbSBcIi4vYXV0b21hdG9uXCI7XG5cbmNvbnN0IG1haW5Ta2V0Y2hGYWN0b3J5ID0gKGhlaWdodD86IG51bWJlciwgd2lkdGg/OiBudW1iZXIpID0+IHtcbiAgICBsZXQgcEltYWdlczogcDUuSW1hZ2VbXTtcbiAgICBsZXQgcmVhbGl0aWVzOiBWaXJ0dWFsRWZmZWN0W107XG5cbiAgICBjb25zdCBjZWxsU2l6ZTogbnVtYmVyID0gNDsgLy8gMThcbiAgICBjb25zdCBpbWFnZXMgPSBbXCJhc3NldHMvaW00LmpwZ1wiLCBcImFzc2V0cy9pbTMuanBnXCJdO1xuXG4gICAgcmV0dXJuIChwOiBwNSk6IHZvaWQgPT4ge1xuICAgICAgICBwLnByZWxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBwSW1hZ2VzID0gaW1hZ2VzLm1hcCgoaW1nU3JjKTogcDUuSW1hZ2UgPT4gcC5sb2FkSW1hZ2UoaW1nU3JjKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcC5zZXR1cCA9ICgpID0+IHtcbiAgICAgICAgICAgIHAuY3JlYXRlQ2FudmFzKHdpZHRoIHx8IDUwMCwgaGVpZ2h0IHx8IDUwMCwgV0VCR0wpO1xuICAgICAgICAgICAgcC5jb2xvck1vZGUocC5SR0IsIDI1NSk7XG4gICAgICAgICAgICBwLm5vU3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIHJlYWxpdGllcyA9IHBJbWFnZXMubWFwKChpbWcsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXV0b21hdG9uID0gbmV3IEF1dG9tYXRvbihcbiAgICAgICAgICAgICAgICAgICAgcCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgY2VsbFNpemUsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDA6IHAuY29sb3IoMjU1LCAwKSwgLy8gMCBhbHBoYVxuICAgICAgICAgICAgICAgICAgICAgICAgMTogcC5jb2xvcigyNTUsIDI1NSksIC8vIDI1NSBhbHBoYVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHsgNjogaW5kZXggPT09IDAgPyAwIDogMSB9LFxuICAgICAgICAgICAgICAgICAgICAvLyB7IDY6IGluZGV4ID09PSAwID8gMCA6IDEgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBWaXJ0dWFsRWZmZWN0KHAsIGF1dG9tYXRvbiwgaW1nLCBwLk1VTFRJUExZKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHAuZHJhdyA9ICgpID0+IHtcbiAgICAgICAgICAgIHAuYmFja2dyb3VuZCg4OSwgMTIzLCAxMik7XG4gICAgICAgIH07XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1haW5Ta2V0Y2hGYWN0b3J5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/atoms/ca.tsx\n");

/***/ })

})