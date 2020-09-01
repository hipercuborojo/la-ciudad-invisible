webpackHotUpdate_N_E(2,{

/***/ "./components/atoms/ca.tsx":
/*!*********************************!*\
  !*** ./components/atoms/ca.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _virtualeffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virtualeffect */ \"./components/atoms/virtualeffect.ts\");\n/* harmony import */ var _automaton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./automaton */ \"./components/atoms/automaton.ts\");\n\n\n\nvar mainSketchFactory = function mainSketchFactory(width, height) {\n  var pImages;\n  var realities;\n  var cellSize = 4; // 18\n\n  var images = [\"/im4.jpg\", \"/im3.jpg\"];\n  return function (p) {\n    p.preload = function () {\n      pImages = images.map(function (imgSrc) {\n        return p.loadImage(imgSrc);\n      });\n    };\n\n    p.setup = function () {\n      console.log(width, height);\n      p.createCanvas(width || 500, height || 500);\n      p.colorMode(p.RGB, 255);\n      p.noStroke();\n      realities = pImages.map(function (img, index) {\n        var automaton = new _automaton__WEBPACK_IMPORTED_MODULE_1__[\"default\"](p, cellSize, {\n          0: p.color(255, 0),\n          // 0 alpha\n          1: p.color(255, 255) // 255 alpha\n\n        } // { 6: index === 0 ? 0 : 1 },\n        // { 6: index === 0 ? 0 : 1 }\n        );\n        return new _virtualeffect__WEBPACK_IMPORTED_MODULE_0__[\"default\"](p, automaton, img, p.MULTIPLY);\n      });\n    };\n\n    var showFps = function showFps() {\n      var fps = p.frameRate();\n      p.fill(255);\n      p.stroke(0);\n      p.text(\"FPS: \" + fps.toFixed(2), 10, height - 10);\n    };\n\n    p.draw = function () {\n      p.background(0);\n      realities.map(function (r) {\n        return r.draw(p);\n      });\n      realities.map(function (r) {\n        return r.update();\n      });\n      showFps();\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mainSketchFactory);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9jYS50c3g/MWNmMyJdLCJuYW1lcyI6WyJtYWluU2tldGNoRmFjdG9yeSIsIndpZHRoIiwiaGVpZ2h0IiwicEltYWdlcyIsInJlYWxpdGllcyIsImNlbGxTaXplIiwiaW1hZ2VzIiwicCIsInByZWxvYWQiLCJtYXAiLCJpbWdTcmMiLCJsb2FkSW1hZ2UiLCJzZXR1cCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVDYW52YXMiLCJjb2xvck1vZGUiLCJSR0IiLCJub1N0cm9rZSIsImltZyIsImluZGV4IiwiYXV0b21hdG9uIiwiQXV0b21hdG9uIiwiY29sb3IiLCJWaXJ0dWFsRWZmZWN0IiwiTVVMVElQTFkiLCJzaG93RnBzIiwiZnBzIiwiZnJhbWVSYXRlIiwiZmlsbCIsInN0cm9rZSIsInRleHQiLCJ0b0ZpeGVkIiwiZHJhdyIsImJhY2tncm91bmQiLCJyIiwidXBkYXRlIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRCxFQUFpQkMsTUFBakIsRUFBcUM7QUFDM0QsTUFBSUMsT0FBSjtBQUNBLE1BQUlDLFNBQUo7QUFFQSxNQUFNQyxRQUFnQixHQUFHLENBQXpCLENBSjJELENBSS9COztBQUM1QixNQUFNQyxNQUFNLEdBQUcsQ0FBQyxVQUFELEVBQWEsVUFBYixDQUFmO0FBRUEsU0FBTyxVQUFDQyxDQUFELEVBQWlCO0FBQ3BCQSxLQUFDLENBQUNDLE9BQUYsR0FBWSxZQUFNO0FBQ2RMLGFBQU8sR0FBR0csTUFBTSxDQUFDRyxHQUFQLENBQVcsVUFBQ0MsTUFBRDtBQUFBLGVBQXNCSCxDQUFDLENBQUNJLFNBQUYsQ0FBWUQsTUFBWixDQUF0QjtBQUFBLE9BQVgsQ0FBVjtBQUNILEtBRkQ7O0FBSUFILEtBQUMsQ0FBQ0ssS0FBRixHQUFVLFlBQU07QUFDWkMsYUFBTyxDQUFDQyxHQUFSLENBQVliLEtBQVosRUFBbUJDLE1BQW5CO0FBQ0FLLE9BQUMsQ0FBQ1EsWUFBRixDQUFlZCxLQUFLLElBQUksR0FBeEIsRUFBNkJDLE1BQU0sSUFBSSxHQUF2QztBQUNBSyxPQUFDLENBQUNTLFNBQUYsQ0FBWVQsQ0FBQyxDQUFDVSxHQUFkLEVBQW1CLEdBQW5CO0FBQ0FWLE9BQUMsQ0FBQ1csUUFBRjtBQUVBZCxlQUFTLEdBQUdELE9BQU8sQ0FBQ00sR0FBUixDQUFZLFVBQUNVLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUNwQyxZQUFNQyxTQUFTLEdBQUcsSUFBSUMsa0RBQUosQ0FDZGYsQ0FEYyxFQUVkRixRQUZjLEVBR2Q7QUFDSSxhQUFHRSxDQUFDLENBQUNnQixLQUFGLENBQVEsR0FBUixFQUFhLENBQWIsQ0FEUDtBQUN3QjtBQUNwQixhQUFHaEIsQ0FBQyxDQUFDZ0IsS0FBRixDQUFRLEdBQVIsRUFBYSxHQUFiLENBRlAsQ0FFMEI7O0FBRjFCLFNBSGMsQ0FPZDtBQUNBO0FBUmMsU0FBbEI7QUFVQSxlQUFPLElBQUlDLHNEQUFKLENBQWtCakIsQ0FBbEIsRUFBcUJjLFNBQXJCLEVBQWdDRixHQUFoQyxFQUFxQ1osQ0FBQyxDQUFDa0IsUUFBdkMsQ0FBUDtBQUNILE9BWlcsQ0FBWjtBQWFILEtBbkJEOztBQXFCQSxRQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ2xCLFVBQUlDLEdBQUcsR0FBR3BCLENBQUMsQ0FBQ3FCLFNBQUYsRUFBVjtBQUNBckIsT0FBQyxDQUFDc0IsSUFBRixDQUFPLEdBQVA7QUFDQXRCLE9BQUMsQ0FBQ3VCLE1BQUYsQ0FBUyxDQUFUO0FBQ0F2QixPQUFDLENBQUN3QixJQUFGLENBQU8sVUFBVUosR0FBRyxDQUFDSyxPQUFKLENBQVksQ0FBWixDQUFqQixFQUFpQyxFQUFqQyxFQUFxQzlCLE1BQU0sR0FBRyxFQUE5QztBQUNILEtBTEQ7O0FBT0FLLEtBQUMsQ0FBQzBCLElBQUYsR0FBUyxZQUFNO0FBQ1gxQixPQUFDLENBQUMyQixVQUFGLENBQWEsQ0FBYjtBQUNBOUIsZUFBUyxDQUFDSyxHQUFWLENBQWMsVUFBQzBCLENBQUQ7QUFBQSxlQUFPQSxDQUFDLENBQUNGLElBQUYsQ0FBTzFCLENBQVAsQ0FBUDtBQUFBLE9BQWQ7QUFDQUgsZUFBUyxDQUFDSyxHQUFWLENBQWMsVUFBQzBCLENBQUQ7QUFBQSxlQUFPQSxDQUFDLENBQUNDLE1BQUYsRUFBUDtBQUFBLE9BQWQ7QUFDQVYsYUFBTztBQUNWLEtBTEQ7QUFNSCxHQXZDRDtBQXdDSCxDQS9DRDs7QUFpRGUxQixnRkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYXRvbXMvY2EudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHA1IGZyb20gXCJwNVwiO1xuaW1wb3J0IFZpcnR1YWxFZmZlY3QgZnJvbSBcIi4vdmlydHVhbGVmZmVjdFwiO1xuaW1wb3J0IEF1dG9tYXRvbiBmcm9tIFwiLi9hdXRvbWF0b25cIjtcblxuY29uc3QgbWFpblNrZXRjaEZhY3RvcnkgPSAod2lkdGg/OiBudW1iZXIsIGhlaWdodD86IG51bWJlcikgPT4ge1xuICAgIGxldCBwSW1hZ2VzOiBwNS5JbWFnZVtdO1xuICAgIGxldCByZWFsaXRpZXM6IFZpcnR1YWxFZmZlY3RbXTtcblxuICAgIGNvbnN0IGNlbGxTaXplOiBudW1iZXIgPSA0OyAvLyAxOFxuICAgIGNvbnN0IGltYWdlcyA9IFtcIi9pbTQuanBnXCIsIFwiL2ltMy5qcGdcIl07XG5cbiAgICByZXR1cm4gKHA6IHA1KTogdm9pZCA9PiB7XG4gICAgICAgIHAucHJlbG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHBJbWFnZXMgPSBpbWFnZXMubWFwKChpbWdTcmMpOiBwNS5JbWFnZSA9PiBwLmxvYWRJbWFnZShpbWdTcmMpKTtcbiAgICAgICAgfTtcblxuICAgICAgICBwLnNldHVwID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cod2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgICBwLmNyZWF0ZUNhbnZhcyh3aWR0aCB8fCA1MDAsIGhlaWdodCB8fCA1MDApO1xuICAgICAgICAgICAgcC5jb2xvck1vZGUocC5SR0IsIDI1NSk7XG4gICAgICAgICAgICBwLm5vU3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIHJlYWxpdGllcyA9IHBJbWFnZXMubWFwKChpbWcsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXV0b21hdG9uID0gbmV3IEF1dG9tYXRvbihcbiAgICAgICAgICAgICAgICAgICAgcCxcbiAgICAgICAgICAgICAgICAgICAgY2VsbFNpemUsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDA6IHAuY29sb3IoMjU1LCAwKSwgLy8gMCBhbHBoYVxuICAgICAgICAgICAgICAgICAgICAgICAgMTogcC5jb2xvcigyNTUsIDI1NSksIC8vIDI1NSBhbHBoYVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHsgNjogaW5kZXggPT09IDAgPyAwIDogMSB9LFxuICAgICAgICAgICAgICAgICAgICAvLyB7IDY6IGluZGV4ID09PSAwID8gMCA6IDEgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBWaXJ0dWFsRWZmZWN0KHAsIGF1dG9tYXRvbiwgaW1nLCBwLk1VTFRJUExZKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHNob3dGcHMgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZnBzID0gcC5mcmFtZVJhdGUoKTtcbiAgICAgICAgICAgIHAuZmlsbCgyNTUpO1xuICAgICAgICAgICAgcC5zdHJva2UoMCk7XG4gICAgICAgICAgICBwLnRleHQoXCJGUFM6IFwiICsgZnBzLnRvRml4ZWQoMiksIDEwLCBoZWlnaHQgLSAxMCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcC5kcmF3ID0gKCkgPT4ge1xuICAgICAgICAgICAgcC5iYWNrZ3JvdW5kKDApO1xuICAgICAgICAgICAgcmVhbGl0aWVzLm1hcCgocikgPT4gci5kcmF3KHApKTtcbiAgICAgICAgICAgIHJlYWxpdGllcy5tYXAoKHIpID0+IHIudXBkYXRlKCkpO1xuICAgICAgICAgICAgc2hvd0ZwcygpO1xuICAgICAgICB9O1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWluU2tldGNoRmFjdG9yeTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/atoms/ca.tsx\n");

/***/ })

})