webpackHotUpdate_N_E(2,{

/***/ "./components/atoms/ca.tsx":
/*!*********************************!*\
  !*** ./components/atoms/ca.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _virtualeffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virtualeffect */ \"./components/atoms/virtualeffect.ts\");\n/* harmony import */ var _automaton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./automaton */ \"./components/atoms/automaton.ts\");\n\n\n\nvar mainSketchFactory = function mainSketchFactory(width, height) {\n  var pImages;\n  var realities;\n  var cellSize = 4; // 18\n\n  var images = [\"/im4.jpg\", \"/im3.jpg\"];\n  return function (p) {\n    p.preload = function () {\n      pImages = images.map(function (imgSrc) {\n        return p.loadImage(imgSrc);\n      });\n    };\n\n    p.setup = function () {\n      p.createCanvas(width || 500, height || 500, p.WEBGL);\n      p.colorMode(p.RGB, 255);\n      p.noStroke();\n      realities = pImages.map(function (img, index) {\n        var automaton = new _automaton__WEBPACK_IMPORTED_MODULE_1__[\"default\"](p, width, height, cellSize, {\n          0: p.color(255, 0),\n          // 0 alpha\n          1: p.color(255, 255) // 255 alpha\n\n        } // { 6: index === 0 ? 0 : 1 },\n        // { 6: index === 0 ? 0 : 1 }\n        );\n        return new _virtualeffect__WEBPACK_IMPORTED_MODULE_0__[\"default\"](p, automaton, img, p.MULTIPLY);\n      });\n    };\n\n    p.draw = function () {\n      p.background(0);\n      realities.map(function (r) {\n        return r.draw(p, width, height);\n      });\n      realities.map(function (r) {\n        return r.update();\n      });\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mainSketchFactory);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9jYS50c3g/MWNmMyJdLCJuYW1lcyI6WyJtYWluU2tldGNoRmFjdG9yeSIsIndpZHRoIiwiaGVpZ2h0IiwicEltYWdlcyIsInJlYWxpdGllcyIsImNlbGxTaXplIiwiaW1hZ2VzIiwicCIsInByZWxvYWQiLCJtYXAiLCJpbWdTcmMiLCJsb2FkSW1hZ2UiLCJzZXR1cCIsImNyZWF0ZUNhbnZhcyIsIldFQkdMIiwiY29sb3JNb2RlIiwiUkdCIiwibm9TdHJva2UiLCJpbWciLCJpbmRleCIsImF1dG9tYXRvbiIsIkF1dG9tYXRvbiIsImNvbG9yIiwiVmlydHVhbEVmZmVjdCIsIk1VTFRJUExZIiwiZHJhdyIsImJhY2tncm91bmQiLCJyIiwidXBkYXRlIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRCxFQUFpQkMsTUFBakIsRUFBcUM7QUFDM0QsTUFBSUMsT0FBSjtBQUNBLE1BQUlDLFNBQUo7QUFFQSxNQUFNQyxRQUFnQixHQUFHLENBQXpCLENBSjJELENBSS9COztBQUM1QixNQUFNQyxNQUFNLEdBQUcsQ0FBQyxVQUFELEVBQWEsVUFBYixDQUFmO0FBRUEsU0FBTyxVQUFDQyxDQUFELEVBQWlCO0FBQ3BCQSxLQUFDLENBQUNDLE9BQUYsR0FBWSxZQUFNO0FBQ2RMLGFBQU8sR0FBR0csTUFBTSxDQUFDRyxHQUFQLENBQVcsVUFBQ0MsTUFBRDtBQUFBLGVBQXNCSCxDQUFDLENBQUNJLFNBQUYsQ0FBWUQsTUFBWixDQUF0QjtBQUFBLE9BQVgsQ0FBVjtBQUNILEtBRkQ7O0FBSUFILEtBQUMsQ0FBQ0ssS0FBRixHQUFVLFlBQU07QUFDWkwsT0FBQyxDQUFDTSxZQUFGLENBQWVaLEtBQUssSUFBSSxHQUF4QixFQUE2QkMsTUFBTSxJQUFJLEdBQXZDLEVBQTRDSyxDQUFDLENBQUNPLEtBQTlDO0FBQ0FQLE9BQUMsQ0FBQ1EsU0FBRixDQUFZUixDQUFDLENBQUNTLEdBQWQsRUFBbUIsR0FBbkI7QUFDQVQsT0FBQyxDQUFDVSxRQUFGO0FBRUFiLGVBQVMsR0FBR0QsT0FBTyxDQUFDTSxHQUFSLENBQVksVUFBQ1MsR0FBRCxFQUFNQyxLQUFOLEVBQWdCO0FBQ3BDLFlBQU1DLFNBQVMsR0FBRyxJQUFJQyxrREFBSixDQUNkZCxDQURjLEVBRWROLEtBRmMsRUFHZEMsTUFIYyxFQUlkRyxRQUpjLEVBS2Q7QUFDSSxhQUFHRSxDQUFDLENBQUNlLEtBQUYsQ0FBUSxHQUFSLEVBQWEsQ0FBYixDQURQO0FBQ3dCO0FBQ3BCLGFBQUdmLENBQUMsQ0FBQ2UsS0FBRixDQUFRLEdBQVIsRUFBYSxHQUFiLENBRlAsQ0FFMEI7O0FBRjFCLFNBTGMsQ0FTZDtBQUNBO0FBVmMsU0FBbEI7QUFZQSxlQUFPLElBQUlDLHNEQUFKLENBQWtCaEIsQ0FBbEIsRUFBcUJhLFNBQXJCLEVBQWdDRixHQUFoQyxFQUFxQ1gsQ0FBQyxDQUFDaUIsUUFBdkMsQ0FBUDtBQUNILE9BZFcsQ0FBWjtBQWVILEtBcEJEOztBQXNCQWpCLEtBQUMsQ0FBQ2tCLElBQUYsR0FBUyxZQUFNO0FBQ1hsQixPQUFDLENBQUNtQixVQUFGLENBQWEsQ0FBYjtBQUNBdEIsZUFBUyxDQUFDSyxHQUFWLENBQWMsVUFBQ2tCLENBQUQ7QUFBQSxlQUFPQSxDQUFDLENBQUNGLElBQUYsQ0FBT2xCLENBQVAsRUFBVU4sS0FBVixFQUFpQkMsTUFBakIsQ0FBUDtBQUFBLE9BQWQ7QUFDQUUsZUFBUyxDQUFDSyxHQUFWLENBQWMsVUFBQ2tCLENBQUQ7QUFBQSxlQUFPQSxDQUFDLENBQUNDLE1BQUYsRUFBUDtBQUFBLE9BQWQ7QUFDSCxLQUpEO0FBS0gsR0FoQ0Q7QUFpQ0gsQ0F4Q0Q7O0FBMENlNUIsZ0ZBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2F0b21zL2NhLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwNSBmcm9tIFwicDVcIjtcbmltcG9ydCBWaXJ0dWFsRWZmZWN0IGZyb20gXCIuL3ZpcnR1YWxlZmZlY3RcIjtcbmltcG9ydCBBdXRvbWF0b24gZnJvbSBcIi4vYXV0b21hdG9uXCI7XG5cbmNvbnN0IG1haW5Ta2V0Y2hGYWN0b3J5ID0gKHdpZHRoPzogbnVtYmVyLCBoZWlnaHQ/OiBudW1iZXIpID0+IHtcbiAgICBsZXQgcEltYWdlczogcDUuSW1hZ2VbXTtcbiAgICBsZXQgcmVhbGl0aWVzOiBWaXJ0dWFsRWZmZWN0W107XG5cbiAgICBjb25zdCBjZWxsU2l6ZTogbnVtYmVyID0gNDsgLy8gMThcbiAgICBjb25zdCBpbWFnZXMgPSBbXCIvaW00LmpwZ1wiLCBcIi9pbTMuanBnXCJdO1xuXG4gICAgcmV0dXJuIChwOiBwNSk6IHZvaWQgPT4ge1xuICAgICAgICBwLnByZWxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBwSW1hZ2VzID0gaW1hZ2VzLm1hcCgoaW1nU3JjKTogcDUuSW1hZ2UgPT4gcC5sb2FkSW1hZ2UoaW1nU3JjKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcC5zZXR1cCA9ICgpID0+IHtcbiAgICAgICAgICAgIHAuY3JlYXRlQ2FudmFzKHdpZHRoIHx8IDUwMCwgaGVpZ2h0IHx8IDUwMCwgcC5XRUJHTCk7XG4gICAgICAgICAgICBwLmNvbG9yTW9kZShwLlJHQiwgMjU1KTtcbiAgICAgICAgICAgIHAubm9TdHJva2UoKTtcblxuICAgICAgICAgICAgcmVhbGl0aWVzID0gcEltYWdlcy5tYXAoKGltZywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdXRvbWF0b24gPSBuZXcgQXV0b21hdG9uKFxuICAgICAgICAgICAgICAgICAgICBwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBjZWxsU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgMDogcC5jb2xvcigyNTUsIDApLCAvLyAwIGFscGhhXG4gICAgICAgICAgICAgICAgICAgICAgICAxOiBwLmNvbG9yKDI1NSwgMjU1KSwgLy8gMjU1IGFscGhhXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8geyA2OiBpbmRleCA9PT0gMCA/IDAgOiAxIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vIHsgNjogaW5kZXggPT09IDAgPyAwIDogMSB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFZpcnR1YWxFZmZlY3QocCwgYXV0b21hdG9uLCBpbWcsIHAuTVVMVElQTFkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcC5kcmF3ID0gKCkgPT4ge1xuICAgICAgICAgICAgcC5iYWNrZ3JvdW5kKDApO1xuICAgICAgICAgICAgcmVhbGl0aWVzLm1hcCgocikgPT4gci5kcmF3KHAsIHdpZHRoLCBoZWlnaHQpKTtcbiAgICAgICAgICAgIHJlYWxpdGllcy5tYXAoKHIpID0+IHIudXBkYXRlKCkpO1xuICAgICAgICB9O1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWluU2tldGNoRmFjdG9yeTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/atoms/ca.tsx\n");

/***/ })

})