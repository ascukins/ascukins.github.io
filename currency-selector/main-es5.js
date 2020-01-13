function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-currency-selector\n  class=\"center\"\n  [currenciesToSelect]=\"dataStoreService.availableCurrencies\"\n></app-currency-selector>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/currency/currency-checkbox/currency-checkbox.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/currency/currency-checkbox/currency-checkbox.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCurrencyCurrencyCheckboxCurrencyCheckboxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"checkbox-container\" [class.checked]=\"checked\">\n  <label class=\"checkbox pointer\">\n    <input\n      type=\"checkbox\"\n      class=\"pointer\"\n      [checked]=\"checked\"\n      (change)=\"onCheckboxChange($event)\"\n    />\n    <span>{{ text }}</span>\n  </label>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/currency/currency-selector/currency-selector.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/currency/currency-selector/currency-selector.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCurrencyCurrencySelectorCurrencySelectorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"tiles\">\n    <app-currency-tile\n      *ngFor=\"let currency of selectedCurrencies\"\n      [text]=\"currency\"\n      (currencyAction)=\"onCurrencyAction($event)\"\n    ></app-currency-tile>\n  </div>\n  <div class=\"checkboxes\">\n    <app-currency-checkbox\n      *ngFor=\"let currency of currenciesToSelect\"\n      [text]=\"currency\"\n      (currencyAction)=\"onCurrencyAction($event)\"\n      [checked]=\"selectedCurrencies.includes(currency)\"\n    ></app-currency-checkbox>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/currency/currency-tile/currency-tile.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/currency/currency-tile/currency-tile.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCurrencyCurrencyTileCurrencyTileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"tile-container\">\n  <div class=\"tile\">\n    {{ text }}\n  </div>\n  <div\n    class=\"close-icon\"\n    (click)=\"currencyAction.emit({ select: false, currency: this.text })\"\n  >\n    X\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".center {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhc2N1a2luc1xccHJvamVjdHNcXGN1cnJlbmN5LXNlbGVjdG9yL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsd0NBQUE7VUFBQSxnQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbiIsIi5jZW50ZXIge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_data_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/data-store.service */
    "./src/app/services/data-store.service.ts");

    var AppComponent = function AppComponent(dataStoreService) {
      _classCallCheck(this, AppComponent);

      this.dataStoreService = dataStoreService;
      this.title = 'currency-selector';
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_data_store_service__WEBPACK_IMPORTED_MODULE_2__["DataStoreService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_currency_currency_selector_currency_selector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/currency/currency-selector/currency-selector.component */
    "./src/app/components/currency/currency-selector/currency-selector.component.ts");
    /* harmony import */


    var _components_currency_currency_checkbox_currency_checkbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/currency/currency-checkbox/currency-checkbox.component */
    "./src/app/components/currency/currency-checkbox/currency-checkbox.component.ts");
    /* harmony import */


    var _components_currency_currency_tile_currency_tile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/currency/currency-tile/currency-tile.component */
    "./src/app/components/currency/currency-tile/currency-tile.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_currency_currency_selector_currency_selector_component__WEBPACK_IMPORTED_MODULE_4__["CurrencySelectorComponent"], _components_currency_currency_checkbox_currency_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["CurrencyCheckboxComponent"], _components_currency_currency_tile_currency_tile_component__WEBPACK_IMPORTED_MODULE_6__["CurrencyTileComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/currency/currency-checkbox/currency-checkbox.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/components/currency/currency-checkbox/currency-checkbox.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCurrencyCurrencyCheckboxCurrencyCheckboxComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".checkbox-container {\n  position: relative;\n  background-color: #ececec;\n  border: 1px solid #a3a3a3;\n  color: #1e436e;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.checkbox-container:hover {\n  background-color: #dcdcdc;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\nlabel.checkbox {\n  display: inline-block !important;\n  width: 100%;\n  padding: 2px 0 4px;\n}\n\nlabel.checkbox input {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -o-appearance: none;\n  appearance: none;\n  height: 16px;\n  width: 15px;\n  position: relative;\n  top: 3px;\n  border: 1px solid #a3a3a3;\n  border-radius: 3px;\n  outline: none;\n  margin-left: 4px;\n}\n\nlabel.checkbox input:checked + span::before {\n  content: \"X\";\n  display: block;\n  color: #eb3323;\n  position: absolute;\n  left: 7px;\n  top: 8px;\n  font-size: 13px;\n  font-weight: bold;\n}\n\nlabel.checkbox span {\n  padding-left: 2px;\n}\n\n.checked {\n  background-color: white;\n}\n\n.checked:hover {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXJyZW5jeS9jdXJyZW5jeS1jaGVja2JveC9DOlxcVXNlcnNcXGFzY3VraW5zXFxwcm9qZWN0c1xcY3VycmVuY3ktc2VsZWN0b3Ivc3JjXFxhcHBcXGNvbXBvbmVudHNcXGN1cnJlbmN5XFxjdXJyZW5jeS1jaGVja2JveFxcY3VycmVuY3ktY2hlY2tib3guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY3VycmVuY3kvY3VycmVuY3ktY2hlY2tib3gvY3VycmVuY3ktY2hlY2tib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENFO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURHRTtFQUNFLGlCQUFBO0FDREo7O0FES0E7RUFDRSx1QkFBQTtBQ0ZGOztBREtBO0VBQ0UsdUJBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VycmVuY3kvY3VycmVuY3ktY2hlY2tib3gvY3VycmVuY3ktY2hlY2tib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tib3gtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYTNhM2EzO1xyXG4gIGNvbG9yOiAjMWU0MzZlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jaGVja2JveC1jb250YWluZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2RjZGM7XHJcbn1cclxuXHJcbi5wb2ludGVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmxhYmVsLmNoZWNrYm94IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAycHggMCA0cHg7XHJcblxyXG4gIGlucHV0IHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1vLWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG5cclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTNhM2EzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgfVxyXG5cclxuICBpbnB1dDpjaGVja2VkICsgc3Bhbjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiWFwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogI2ViMzMyMztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDdweDtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIHNwYW4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2hlY2tlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jaGVja2VkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4iLCIuY2hlY2tib3gtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTNhM2EzO1xuICBjb2xvcjogIzFlNDM2ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaGVja2JveC1jb250YWluZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkY2RjO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubGFiZWwuY2hlY2tib3gge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDJweCAwIDRweDtcbn1cbmxhYmVsLmNoZWNrYm94IGlucHV0IHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1vLWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhM2EzYTM7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cbmxhYmVsLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgKyBzcGFuOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlhcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjZWIzMzIzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDdweDtcbiAgdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5sYWJlbC5jaGVja2JveCBzcGFuIHtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG59XG5cbi5jaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jaGVja2VkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/currency/currency-checkbox/currency-checkbox.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/components/currency/currency-checkbox/currency-checkbox.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: CurrencyCheckboxComponent */

  /***/
  function srcAppComponentsCurrencyCurrencyCheckboxCurrencyCheckboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrencyCheckboxComponent", function () {
      return CurrencyCheckboxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CurrencyCheckboxComponent =
    /*#__PURE__*/
    function () {
      function CurrencyCheckboxComponent() {
        _classCallCheck(this, CurrencyCheckboxComponent);

        this.text = '';
        this.checked = false;
        this.currencyAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(CurrencyCheckboxComponent, [{
        key: "onCheckboxChange",
        value: function onCheckboxChange(value) {
          this.checked = !this.checked;
          this.currencyAction.emit({
            select: this.checked,
            currency: this.text
          });
        }
      }]);

      return CurrencyCheckboxComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CurrencyCheckboxComponent.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CurrencyCheckboxComponent.prototype, "checked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CurrencyCheckboxComponent.prototype, "currencyAction", void 0);
    CurrencyCheckboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-currency-checkbox',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./currency-checkbox.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/currency/currency-checkbox/currency-checkbox.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./currency-checkbox.component.scss */
      "./src/app/components/currency/currency-checkbox/currency-checkbox.component.scss")).default]
    })], CurrencyCheckboxComponent);
    /***/
  },

  /***/
  "./src/app/components/currency/currency-selector/currency-selector.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/components/currency/currency-selector/currency-selector.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCurrencyCurrencySelectorCurrencySelectorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  width: 420px;\n  margin: auto;\n  border: 1px solid #a3a3a3;\n  border-radius: 4px;\n  padding: 16px;\n  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);\n}\n\n.tiles {\n  width: 100%;\n  padding-bottom: 32px;\n  padding-top: 8px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  -webkit-column-gap: 8px;\n     -moz-column-gap: 8px;\n          column-gap: 8px;\n  row-gap: 16px;\n}\n\n.checkboxes {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  -webkit-column-gap: 8px;\n     -moz-column-gap: 8px;\n          column-gap: 8px;\n  row-gap: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXJyZW5jeS9jdXJyZW5jeS1zZWxlY3Rvci9DOlxcVXNlcnNcXGFzY3VraW5zXFxwcm9qZWN0c1xcY3VycmVuY3ktc2VsZWN0b3Ivc3JjXFxhcHBcXGNvbXBvbmVudHNcXGN1cnJlbmN5XFxjdXJyZW5jeS1zZWxlY3RvclxcY3VycmVuY3ktc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY3VycmVuY3kvY3VycmVuY3ktc2VsZWN0b3IvY3VycmVuY3ktc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNENBQUE7QUNDRjs7QURJQTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsdUJBQUE7S0FBQSxvQkFBQTtVQUFBLGVBQUE7RUFDQSxhQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsdUJBQUE7S0FBQSxvQkFBQTtVQUFBLGVBQUE7RUFDQSxhQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2N1cnJlbmN5L2N1cnJlbmN5LXNlbGVjdG9yL2N1cnJlbmN5LXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDQyMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYTNhM2EzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4vLyBUT0RPOiBJZiBJbnRlcm5ldCBFeHBsb3JlciBuZWVkcyB0byBiZSBzdXBwb3J0ZWQsIENTUyBncmlkIG1pZ2h0IG5lZWQgcmVmYWN0b3JpbmdcclxuXHJcbi50aWxlcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgY29sdW1uLWdhcDogOHB4O1xyXG4gIHJvdy1nYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5jaGVja2JveGVzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgY29sdW1uLWdhcDogOHB4O1xyXG4gIHJvdy1nYXA6IDE2cHg7XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTNhM2EzO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4udGlsZXMge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIGNvbHVtbi1nYXA6IDhweDtcbiAgcm93LWdhcDogMTZweDtcbn1cblxuLmNoZWNrYm94ZXMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgY29sdW1uLWdhcDogOHB4O1xuICByb3ctZ2FwOiAxNnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/currency/currency-selector/currency-selector.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/components/currency/currency-selector/currency-selector.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: CurrencySelectorComponent */

  /***/
  function srcAppComponentsCurrencyCurrencySelectorCurrencySelectorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrencySelectorComponent", function () {
      return CurrencySelectorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CurrencySelectorComponent =
    /*#__PURE__*/
    function () {
      function CurrencySelectorComponent() {
        _classCallCheck(this, CurrencySelectorComponent);

        this.selectedCurrencies = [];
        this.currenciesToSelect = [];
      }

      _createClass(CurrencySelectorComponent, [{
        key: "selectCurrency",
        value: function selectCurrency(currency) {
          var cleanCurrencies = this.selectedCurrencies.filter(function (e) {
            return e !== currency;
          });
          cleanCurrencies.push(currency);
          this.selectedCurrencies = cleanCurrencies;
        }
      }, {
        key: "unselectCurrency",
        value: function unselectCurrency(currency) {
          this.selectedCurrencies = this.selectedCurrencies.filter(function (e) {
            return e !== currency;
          });
        }
      }, {
        key: "onCurrencyAction",
        value: function onCurrencyAction(action) {
          if (action.select) {
            this.selectCurrency(action.currency);
          } else {
            this.unselectCurrency(action.currency);
          }
        }
      }]);

      return CurrencySelectorComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CurrencySelectorComponent.prototype, "currenciesToSelect", void 0);
    CurrencySelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-currency-selector',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./currency-selector.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/currency/currency-selector/currency-selector.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./currency-selector.component.scss */
      "./src/app/components/currency/currency-selector/currency-selector.component.scss")).default]
    })], CurrencySelectorComponent);
    /***/
  },

  /***/
  "./src/app/components/currency/currency-tile/currency-tile.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/components/currency/currency-tile/currency-tile.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCurrencyCurrencyTileCurrencyTileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tile-container {\n  position: relative;\n}\n\n.tile {\n  background-color: #e5e5e5;\n  color: black;\n  font-size: 16px;\n  font-weight: bold;\n  width: 127px;\n  padding: 8px 0;\n  text-align: center;\n}\n\n.close-icon {\n  text-align: center;\n  color: white;\n  background-color: #333333;\n  position: absolute;\n  right: -1px;\n  top: -8px;\n  border: 2px solid white;\n  width: 16px;\n  border-radius: 10px;\n  font-size: 12px;\n  padding: 1px 0;\n  cursor: pointer;\n}\n\n.close-icon:hover {\n  background-color: white;\n  color: #333333;\n  border-color: #333333;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXJyZW5jeS9jdXJyZW5jeS10aWxlL0M6XFxVc2Vyc1xcYXNjdWtpbnNcXHByb2plY3RzXFxjdXJyZW5jeS1zZWxlY3Rvci9zcmNcXGFwcFxcY29tcG9uZW50c1xcY3VycmVuY3lcXGN1cnJlbmN5LXRpbGVcXGN1cnJlbmN5LXRpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY3VycmVuY3kvY3VycmVuY3ktdGlsZS9jdXJyZW5jeS10aWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7QUNERjs7QURJQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDREY7O0FESUE7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2N1cnJlbmN5L2N1cnJlbmN5LXRpbGUvY3VycmVuY3ktdGlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vVE9ETzogQ291bGQgYmUgaW1wcm92ZWQgYnkgZGVmaW5pbmcgdmFyaWFibGVzIGZvciBjb2xvcnNcclxuXHJcbi50aWxlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udGlsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHdpZHRoOiAxMjdweDtcclxuICBwYWRkaW5nOiA4cHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jbG9zZS1pY29uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtMXB4O1xyXG4gIHRvcDogLThweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICB3aWR0aDogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nOiAxcHggMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jbG9zZS1pY29uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogIzMzMzMzMztcclxuICBib3JkZXItY29sb3I6ICMzMzMzMzM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIiwiLnRpbGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGlsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDEyN3B4O1xuICBwYWRkaW5nOiA4cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2xvc2UtaWNvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMXB4O1xuICB0b3A6IC04cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICB3aWR0aDogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAxcHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2xvc2UtaWNvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzMzMzMzMztcbiAgYm9yZGVyLWNvbG9yOiAjMzMzMzMzO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/currency/currency-tile/currency-tile.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/currency/currency-tile/currency-tile.component.ts ***!
    \******************************************************************************/

  /*! exports provided: CurrencyTileComponent */

  /***/
  function srcAppComponentsCurrencyCurrencyTileCurrencyTileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrencyTileComponent", function () {
      return CurrencyTileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CurrencyTileComponent = function CurrencyTileComponent() {
      _classCallCheck(this, CurrencyTileComponent);

      this.text = '';
      this.currencyAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CurrencyTileComponent.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CurrencyTileComponent.prototype, "currencyAction", void 0);
    CurrencyTileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-currency-tile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./currency-tile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/currency/currency-tile/currency-tile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./currency-tile.component.scss */
      "./src/app/components/currency/currency-tile/currency-tile.component.scss")).default]
    })], CurrencyTileComponent);
    /***/
  },

  /***/
  "./src/app/services/data-store.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/data-store.service.ts ***!
    \************************************************/

  /*! exports provided: DataStoreService */

  /***/
  function srcAppServicesDataStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataStoreService", function () {
      return DataStoreService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DataStoreService = function DataStoreService() {
      _classCallCheck(this, DataStoreService);

      this.availableCurrencies = ['EUR', 'PLN', 'GEL', 'DKK', 'CZK', 'GBP', 'SEK', 'USD', 'RUB'];
      this.selectedCurrencies = [];
    };

    DataStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataStoreService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\ascukins\projects\currency-selector\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map