webpackHotUpdate_N_E(2,{

/***/ "./components/atoms/automaton.ts":
/*!***************************************!*\
  !*** ./components/atoms/automaton.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar Automaton = /*#__PURE__*/function () {\n  function Automaton(p) {\n    var _this = this;\n\n    var cellSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;\n    var colors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {\n      0: 0,\n      1: 255\n    };\n    var diedRules = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n    var liveRules = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Automaton);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"_cellSize\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"_nextval\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"board\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"_colors\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"_width\", void 0);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"_height\", void 0);\n\n    this._cellSize = cellSize;\n    this.board = Array();\n    this._nextval = {\n      0: _objectSpread({\n        0: 0,\n        1: 0,\n        2: 0,\n        3: 1,\n        4: 0,\n        5: 0,\n        6: 0,\n        7: 0,\n        8: 0\n      }, diedRules),\n      1: _objectSpread({\n        0: 0,\n        1: 0,\n        2: 1,\n        3: 1,\n        4: 0,\n        5: 0,\n        6: 0,\n        7: 0,\n        8: 0\n      }, liveRules)\n    };\n    this._width = p.width;\n    this._height = p.height;\n    this._colors = colors;\n\n    this._walk(function (i, j) {\n      if (_this.board[i] === undefined) {\n        _this.board[i] = Array();\n      }\n\n      _this.board[i][j] = p.random() > 0.7 ? 1 : 0;\n    });\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Automaton, [{\n    key: \"_walk\",\n    value: function _walk(fn) {\n      for (var _j = 0; _j < this._height / this._cellSize; _j++) {\n        for (var _i = 0; _i < this._width / this._cellSize; _i++) {\n          fn(_i, _j);\n        }\n      }\n    }\n  }, {\n    key: \"_nextState\",\n    value: function _nextState() {\n      var _this2 = this;\n\n      var next = Array();\n\n      this._walk(function (i, j) {\n        var population = 0;\n\n        for (var y = -1; y <= 1; y++) {\n          for (var x = -1; x <= 1; x++) {\n            if (x === 0 && y === 0) {\n              continue;\n            }\n\n            if (i + x < 0 || i + x >= _this2.board.length || j + y < 0 || j + y >= _this2.board[0].length) {\n              continue;\n            }\n\n            if (_this2.board[i + x][j + y]) {\n              population++;\n            }\n          }\n        }\n\n        if (next[i] === undefined) {\n          next[i] = Array();\n        }\n\n        next[i][j] = _this2._nextval[_this2.board[i][j]][population];\n      });\n\n      return next;\n    }\n  }, {\n    key: \"getImageState\",\n    value: function getImageState(p) {\n      var _this3 = this;\n\n      var img = p.createImage(this._width, this._height);\n      img.loadPixels();\n\n      this._walk(function (i, j) {\n        var c = _this3._colors[_this3.board[i][j]];\n\n        for (var x = 0; x < _this3._cellSize; x++) {\n          for (var y = 0; y < _this3._cellSize; y++) {\n            img.set(i * _this3._cellSize + x, j * _this3._cellSize + y, c);\n          }\n        }\n      });\n\n      img.updatePixels();\n      return img;\n    }\n  }, {\n    key: \"getBlendedState\",\n    value: function getBlendedState(p, sImage) {\n      var _this4 = this;\n\n      var img = p.createImage(p.width, p.height);\n      img.loadPixels();\n      sImage.loadPixels(); // let d = pixelDensity();\n      // let fullImage = 4 * (width * d) * (height * d);\n      // for (let i = 0; i < fullImage; i += 4) {\n      //     const w = int(i / width) % img.width;\n      //     const h = (i - w * width) % img.height;\n      //     const x = w;\n      //     const y = h;\n      //     const isAlive = this.board[x % this.board[0].length][y % this.board.length];\n      //     if (isAlive <= 0) {\n      //         continue;\n      //     }\n      //     img.pixels[i] = 255;\n      //     img.pixels[i + 1] = 120;\n      //     img.pixels[i + 2] = 14;\n      //     img.pixels[i + 3] = 255;\n      // }\n      // console.log(\"rendering\");\n\n      this._walk(function (i, j) {\n        var isAlive = _this4.board[i][j];\n\n        if (isAlive <= 0) {\n          return;\n        }\n\n        var scale = sImage.width / img.width; // img.copy(\n        //     sImage,\n        //     i * this._cellSize * scale,\n        //     j * this._cellSize * scale,\n        //     this._cellSize,\n        //     this._cellSize,\n        //     i * this._cellSize,\n        //     j * this._cellSize,\n        //     this._cellSize,\n        //     this._cellSize\n        // );\n        // const c = this._colors[this.board[i][j]];\n        // for (let x = 0; x < this._cellSize; x++) {\n        //     for (let y = 0; y < this._cellSize; y++) {\n        //         const x1 = i * this._cellSize + x;\n        //         const y1 = j * this._cellSize + y;\n        //         // const c = sImage.get(x1 * scale, y1 * scale);\n        //         img.set(x1, y1, 255);\n        //     }\n        // }\n        // for (let x = i * this._cellSize; x < (i + 1) * this._cellSize; x++) {\n        //     for (let y = j * this._cellSize; y < (j + 1) * this._cellSize; y++) {\n        //         const index = x * img.width + y;\n        //         // img.set(x, y, sImage.get(x, y));\n        //         img.pixels[index] = sImage.pixels[index];\n        //         img.pixels[index + 1] = sImage.pixels[index + 1];\n        //         img.pixels[index + 2] = sImage.pixels[index + 2];\n        //         img.pixels[index + 3] = sImage.pixels[index + 3];\n        //         // img.set(, , 255 * isAlive);\n        //     }\n        // }\n        // if (isAlive !== 0) {\n        //     img.copy(\n        //         sImage,\n        //         i * this._cellSize,\n        //         j * this._cellSize,\n        //         this._cellSize,\n        //         this._cellSize,\n        //         i * this._cellSize,\n        //         j * this._cellSize,\n        //         this._cellSize,\n        //         this._cellSize\n        //     );\n        // }\n      });\n\n      sImage.updatePixels();\n      img.updatePixels();\n      return img;\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(p) {\n      var _this5 = this;\n\n      this._walk(function (i, j) {\n        p.fill(_this5._colors[_this5.board[i][j]]);\n        p.rect(i * _this5._cellSize, j * _this5._cellSize, _this5._cellSize, _this5._cellSize);\n      });\n    }\n  }, {\n    key: \"updateState\",\n    value: function updateState() {\n      var nextState = this._nextState();\n\n      this.board = nextState;\n    }\n  }]);\n\n  return Automaton;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Automaton);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9hdXRvbWF0b24udHM/NzY4OCJdLCJuYW1lcyI6WyJBdXRvbWF0b24iLCJwIiwiY2VsbFNpemUiLCJjb2xvcnMiLCJkaWVkUnVsZXMiLCJsaXZlUnVsZXMiLCJfY2VsbFNpemUiLCJib2FyZCIsIkFycmF5IiwiX25leHR2YWwiLCJfd2lkdGgiLCJ3aWR0aCIsIl9oZWlnaHQiLCJoZWlnaHQiLCJfY29sb3JzIiwiX3dhbGsiLCJpIiwiaiIsInVuZGVmaW5lZCIsInJhbmRvbSIsImZuIiwibmV4dCIsInBvcHVsYXRpb24iLCJ5IiwieCIsImxlbmd0aCIsImltZyIsImNyZWF0ZUltYWdlIiwibG9hZFBpeGVscyIsImMiLCJzZXQiLCJ1cGRhdGVQaXhlbHMiLCJzSW1hZ2UiLCJpc0FsaXZlIiwic2NhbGUiLCJmaWxsIiwicmVjdCIsIm5leHRTdGF0ZSIsIl9uZXh0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUVNQSxTO0FBU0YscUJBQ0lDLENBREosRUFNRTtBQUFBOztBQUFBLFFBSkVDLFFBSUYsdUVBSnFCLEVBSXJCO0FBQUEsUUFIRUMsTUFHRix1RUFINEQ7QUFBRSxTQUFHLENBQUw7QUFBUSxTQUFHO0FBQVgsS0FHNUQ7QUFBQSxRQUZFQyxTQUVGLHVFQUZ5QyxFQUV6QztBQUFBLFFBREVDLFNBQ0YsdUVBRHlDLEVBQ3pDOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUNFLFNBQUtDLFNBQUwsR0FBaUJKLFFBQWpCO0FBQ0EsU0FBS0ssS0FBTCxHQUFhQyxLQUFLLEVBQWxCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQjtBQUNaO0FBQ0ksV0FBRyxDQURQO0FBRUksV0FBRyxDQUZQO0FBR0ksV0FBRyxDQUhQO0FBSUksV0FBRyxDQUpQO0FBS0ksV0FBRyxDQUxQO0FBTUksV0FBRyxDQU5QO0FBT0ksV0FBRyxDQVBQO0FBUUksV0FBRyxDQVJQO0FBU0ks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QUwsRUFBbEI7O0FBQ0EsV0FBSy9CLEtBQUwsR0FBYThCLFNBQWI7QUFDSDs7Ozs7O0FBR1VyQyx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYXRvbXMvYXV0b21hdG9uLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHA1IGZyb20gXCJwNVwiO1xuXG5jbGFzcyBBdXRvbWF0b24ge1xuICAgIHByaXZhdGUgX2NlbGxTaXplOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfbmV4dHZhbDogeyBba2V5OiBudW1iZXJdOiB7IFtrZXk6IG51bWJlcl06IG51bWJlciB9IH07XG4gICAgcHJpdmF0ZSBib2FyZDogbnVtYmVyW11bXTtcbiAgICBwcml2YXRlIF9jb2xvcnM6IHsgW2tleTogbnVtYmVyXTogbnVtYmVyIHwgbnVtYmVyW10gfCBwNS5Db2xvciB9O1xuXG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwOiBwNSxcbiAgICAgICAgY2VsbFNpemU6IG51bWJlciA9IDEwLFxuICAgICAgICBjb2xvcnM6IHsgW2tleTogbnVtYmVyXTogbnVtYmVyIHwgbnVtYmVyW10gfCBwNS5Db2xvciB9ID0geyAwOiAwLCAxOiAyNTUgfSxcbiAgICAgICAgZGllZFJ1bGVzOiB7IFtrZXk6IG51bWJlcl06IG51bWJlciB9ID0ge30sXG4gICAgICAgIGxpdmVSdWxlczogeyBba2V5OiBudW1iZXJdOiBudW1iZXIgfSA9IHt9XG4gICAgKSB7XG4gICAgICAgIHRoaXMuX2NlbGxTaXplID0gY2VsbFNpemU7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBBcnJheTxudW1iZXJbXT4oKTtcbiAgICAgICAgdGhpcy5fbmV4dHZhbCA9IHtcbiAgICAgICAgICAgIDA6IHtcbiAgICAgICAgICAgICAgICAwOiAwLFxuICAgICAgICAgICAgICAgIDE6IDAsXG4gICAgICAgICAgICAgICAgMjogMCxcbiAgICAgICAgICAgICAgICAzOiAxLFxuICAgICAgICAgICAgICAgIDQ6IDAsXG4gICAgICAgICAgICAgICAgNTogMCxcbiAgICAgICAgICAgICAgICA2OiAwLFxuICAgICAgICAgICAgICAgIDc6IDAsXG4gICAgICAgICAgICAgICAgODogMCxcbiAgICAgICAgICAgICAgICAuLi5kaWVkUnVsZXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMToge1xuICAgICAgICAgICAgICAgIDA6IDAsXG4gICAgICAgICAgICAgICAgMTogMCxcbiAgICAgICAgICAgICAgICAyOiAxLFxuICAgICAgICAgICAgICAgIDM6IDEsXG4gICAgICAgICAgICAgICAgNDogMCxcbiAgICAgICAgICAgICAgICA1OiAwLFxuICAgICAgICAgICAgICAgIDY6IDAsXG4gICAgICAgICAgICAgICAgNzogMCxcbiAgICAgICAgICAgICAgICA4OiAwLFxuICAgICAgICAgICAgICAgIC4uLmxpdmVSdWxlcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fd2lkdGggPSBwLndpZHRoO1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSBwLmhlaWdodDtcblxuICAgICAgICB0aGlzLl9jb2xvcnMgPSBjb2xvcnM7XG5cbiAgICAgICAgdGhpcy5fd2FsaygoaSwgaikgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV0gPSBBcnJheTxudW1iZXI+KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdID0gcC5yYW5kb20oKSA+IDAuNyA/IDEgOiAwO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF93YWxrKGZuOiAoaTogbnVtYmVyLCBqOiBudW1iZXIpID0+IHZvaWQpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9oZWlnaHQgLyB0aGlzLl9jZWxsU2l6ZTsgaisrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3dpZHRoIC8gdGhpcy5fY2VsbFNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgIGZuKGksIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbmV4dFN0YXRlKCk6IG51bWJlcltdW10ge1xuICAgICAgICBsZXQgbmV4dDogbnVtYmVyW11bXSA9IEFycmF5PG51bWJlcltdPigpO1xuICAgICAgICB0aGlzLl93YWxrKChpLCBqKSA9PiB7XG4gICAgICAgICAgICBsZXQgcG9wdWxhdGlvbiA9IDA7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAtMTsgeSA8PSAxOyB5KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gLTE7IHggPD0gMTsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4ID09PSAwICYmIHkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgKyB4IDwgMCB8fCBpICsgeCA+PSB0aGlzLmJvYXJkLmxlbmd0aCB8fCBqICsgeSA8IDAgfHwgaiArIHkgPj0gdGhpcy5ib2FyZFswXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbaSArIHhdW2ogKyB5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGlvbisrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV4dFtpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbmV4dFtpXSA9IEFycmF5PG51bWJlcj4oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dFtpXVtqXSA9IHRoaXMuX25leHR2YWxbdGhpcy5ib2FyZFtpXVtqXV1bcG9wdWxhdGlvbl07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV4dDtcbiAgICB9XG5cbiAgICBnZXRJbWFnZVN0YXRlKHA6IHA1KTogcDUuSW1hZ2Uge1xuICAgICAgICBjb25zdCBpbWcgPSBwLmNyZWF0ZUltYWdlKHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpO1xuICAgICAgICBpbWcubG9hZFBpeGVscygpO1xuICAgICAgICB0aGlzLl93YWxrKChpLCBqKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjID0gdGhpcy5fY29sb3JzW3RoaXMuYm9hcmRbaV1bal1dO1xuXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuX2NlbGxTaXplOyB4KyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuX2NlbGxTaXplOyB5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNldChpICogdGhpcy5fY2VsbFNpemUgKyB4LCBqICogdGhpcy5fY2VsbFNpemUgKyB5LCBjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpbWcudXBkYXRlUGl4ZWxzKCk7XG4gICAgICAgIHJldHVybiBpbWc7XG4gICAgfVxuXG4gICAgZ2V0QmxlbmRlZFN0YXRlKHA6IHA1LCBzSW1hZ2U6IHA1LkltYWdlKTogcDUuSW1hZ2Uge1xuICAgICAgICBjb25zdCBpbWcgPSBwLmNyZWF0ZUltYWdlKHAud2lkdGgsIHAuaGVpZ2h0KTtcblxuICAgICAgICBpbWcubG9hZFBpeGVscygpO1xuICAgICAgICBzSW1hZ2UubG9hZFBpeGVscygpO1xuXG4gICAgICAgIC8vIGxldCBkID0gcGl4ZWxEZW5zaXR5KCk7XG4gICAgICAgIC8vIGxldCBmdWxsSW1hZ2UgPSA0ICogKHdpZHRoICogZCkgKiAoaGVpZ2h0ICogZCk7XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgZnVsbEltYWdlOyBpICs9IDQpIHtcbiAgICAgICAgLy8gICAgIGNvbnN0IHcgPSBpbnQoaSAvIHdpZHRoKSAlIGltZy53aWR0aDtcbiAgICAgICAgLy8gICAgIGNvbnN0IGggPSAoaSAtIHcgKiB3aWR0aCkgJSBpbWcuaGVpZ2h0O1xuXG4gICAgICAgIC8vICAgICBjb25zdCB4ID0gdztcbiAgICAgICAgLy8gICAgIGNvbnN0IHkgPSBoO1xuXG4gICAgICAgIC8vICAgICBjb25zdCBpc0FsaXZlID0gdGhpcy5ib2FyZFt4ICUgdGhpcy5ib2FyZFswXS5sZW5ndGhdW3kgJSB0aGlzLmJvYXJkLmxlbmd0aF07XG5cbiAgICAgICAgLy8gICAgIGlmIChpc0FsaXZlIDw9IDApIHtcbiAgICAgICAgLy8gICAgICAgICBjb250aW51ZTtcbiAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAvLyAgICAgaW1nLnBpeGVsc1tpXSA9IDI1NTtcbiAgICAgICAgLy8gICAgIGltZy5waXhlbHNbaSArIDFdID0gMTIwO1xuICAgICAgICAvLyAgICAgaW1nLnBpeGVsc1tpICsgMl0gPSAxNDtcbiAgICAgICAgLy8gICAgIGltZy5waXhlbHNbaSArIDNdID0gMjU1O1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVuZGVyaW5nXCIpO1xuICAgICAgICB0aGlzLl93YWxrKChpLCBqKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0FsaXZlID0gdGhpcy5ib2FyZFtpXVtqXTtcblxuICAgICAgICAgICAgaWYgKGlzQWxpdmUgPD0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBzSW1hZ2Uud2lkdGggLyBpbWcud2lkdGg7XG4gICAgICAgICAgICAvLyBpbWcuY29weShcbiAgICAgICAgICAgIC8vICAgICBzSW1hZ2UsXG4gICAgICAgICAgICAvLyAgICAgaSAqIHRoaXMuX2NlbGxTaXplICogc2NhbGUsXG4gICAgICAgICAgICAvLyAgICAgaiAqIHRoaXMuX2NlbGxTaXplICogc2NhbGUsXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5fY2VsbFNpemUsXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5fY2VsbFNpemUsXG4gICAgICAgICAgICAvLyAgICAgaSAqIHRoaXMuX2NlbGxTaXplLFxuICAgICAgICAgICAgLy8gICAgIGogKiB0aGlzLl9jZWxsU2l6ZSxcbiAgICAgICAgICAgIC8vICAgICB0aGlzLl9jZWxsU2l6ZSxcbiAgICAgICAgICAgIC8vICAgICB0aGlzLl9jZWxsU2l6ZVxuICAgICAgICAgICAgLy8gKTtcblxuICAgICAgICAgICAgLy8gY29uc3QgYyA9IHRoaXMuX2NvbG9yc1t0aGlzLmJvYXJkW2ldW2pdXTtcbiAgICAgICAgICAgIC8vIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5fY2VsbFNpemU7IHgrKykge1xuICAgICAgICAgICAgLy8gICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5fY2VsbFNpemU7IHkrKykge1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCB4MSA9IGkgKiB0aGlzLl9jZWxsU2l6ZSArIHg7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHkxID0gaiAqIHRoaXMuX2NlbGxTaXplICsgeTtcblxuICAgICAgICAgICAgLy8gICAgICAgICAvLyBjb25zdCBjID0gc0ltYWdlLmdldCh4MSAqIHNjYWxlLCB5MSAqIHNjYWxlKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgaW1nLnNldCh4MSwgeTEsIDI1NSk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAvLyBmb3IgKGxldCB4ID0gaSAqIHRoaXMuX2NlbGxTaXplOyB4IDwgKGkgKyAxKSAqIHRoaXMuX2NlbGxTaXplOyB4KyspIHtcbiAgICAgICAgICAgIC8vICAgICBmb3IgKGxldCB5ID0gaiAqIHRoaXMuX2NlbGxTaXplOyB5IDwgKGogKyAxKSAqIHRoaXMuX2NlbGxTaXplOyB5KyspIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgaW5kZXggPSB4ICogaW1nLndpZHRoICsgeTtcbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gaW1nLnNldCh4LCB5LCBzSW1hZ2UuZ2V0KHgsIHkpKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgaW1nLnBpeGVsc1tpbmRleF0gPSBzSW1hZ2UucGl4ZWxzW2luZGV4XTtcbiAgICAgICAgICAgIC8vICAgICAgICAgaW1nLnBpeGVsc1tpbmRleCArIDFdID0gc0ltYWdlLnBpeGVsc1tpbmRleCArIDFdO1xuICAgICAgICAgICAgLy8gICAgICAgICBpbWcucGl4ZWxzW2luZGV4ICsgMl0gPSBzSW1hZ2UucGl4ZWxzW2luZGV4ICsgMl07XG4gICAgICAgICAgICAvLyAgICAgICAgIGltZy5waXhlbHNbaW5kZXggKyAzXSA9IHNJbWFnZS5waXhlbHNbaW5kZXggKyAzXTtcblxuICAgICAgICAgICAgLy8gICAgICAgICAvLyBpbWcuc2V0KCwgLCAyNTUgKiBpc0FsaXZlKTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBpZiAoaXNBbGl2ZSAhPT0gMCkge1xuICAgICAgICAgICAgLy8gICAgIGltZy5jb3B5KFxuICAgICAgICAgICAgLy8gICAgICAgICBzSW1hZ2UsXG4gICAgICAgICAgICAvLyAgICAgICAgIGkgKiB0aGlzLl9jZWxsU2l6ZSxcbiAgICAgICAgICAgIC8vICAgICAgICAgaiAqIHRoaXMuX2NlbGxTaXplLFxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLl9jZWxsU2l6ZSxcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5fY2VsbFNpemUsXG4gICAgICAgICAgICAvLyAgICAgICAgIGkgKiB0aGlzLl9jZWxsU2l6ZSxcbiAgICAgICAgICAgIC8vICAgICAgICAgaiAqIHRoaXMuX2NlbGxTaXplLFxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLl9jZWxsU2l6ZSxcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5fY2VsbFNpemVcbiAgICAgICAgICAgIC8vICAgICApO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9KTtcbiAgICAgICAgc0ltYWdlLnVwZGF0ZVBpeGVscygpO1xuICAgICAgICBpbWcudXBkYXRlUGl4ZWxzKCk7XG4gICAgICAgIHJldHVybiBpbWc7XG4gICAgfVxuXG4gICAgZHJhdyhwOiBwNSkge1xuICAgICAgICB0aGlzLl93YWxrKChpLCBqKSA9PiB7XG4gICAgICAgICAgICBwLmZpbGwodGhpcy5fY29sb3JzW3RoaXMuYm9hcmRbaV1bal1dIGFzIHA1LkNvbG9yKTtcbiAgICAgICAgICAgIHAucmVjdChpICogdGhpcy5fY2VsbFNpemUsIGogKiB0aGlzLl9jZWxsU2l6ZSwgdGhpcy5fY2VsbFNpemUsIHRoaXMuX2NlbGxTaXplKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IHRoaXMuX25leHRTdGF0ZSgpO1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV4dFN0YXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0b21hdG9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/atoms/automaton.ts\n");

/***/ })

})