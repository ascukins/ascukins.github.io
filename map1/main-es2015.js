(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-nav [(choice)]=\"choice\">\n  <div id=\"maincontent\">\n    <mat-card>\n      <app-gmap *ngIf=\"choice === 0\"> </app-gmap>\n      <app-marker-list *ngIf=\"choice === 1\"> </app-marker-list>\n    </mat-card>\n  </div>\n</app-main-nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/gmap/gmap.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/gmap/gmap.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<agm-map\r\n  [latitude]=\"constantsService.defaultLatitude\"\r\n  [longitude]=\"constantsService.defaultLongitude\"\r\n  (mapClick)=\"onMapClick($event)\"\r\n>\r\n  <agm-marker\r\n    *ngFor=\"let marker of markers$ | async\"\r\n    [latitude]=\"marker.latitude\"\r\n    [longitude]=\"marker.longitude\"\r\n    [label]=\"marker.label\"\r\n  >\r\n  </agm-marker>\r\n</agm-map>\r\n<br />\r\n<button\r\n  mat-raised-button\r\n  color=\"primary\"\r\n  (click)=\"onMarkMyLocationClick($event)\"\r\n>\r\n  Mark My Location\r\n</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-nav/main-nav.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-nav/main-nav.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav\r\n    #drawer\r\n    class=\"sidenav\"\r\n    fixedInViewport=\"true\"\r\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n    [opened]=\"!(isHandset$ | async)\"\r\n  >\r\n    <mat-toolbar>Menu</mat-toolbar>\r\n    <mat-nav-list>\r\n      <a\r\n        *ngFor=\"let item of constantsService.mainMenuContents; index as i\"\r\n        (click)=\"onMenuClick(i)\"\r\n        mat-list-item\r\n        href=\"#\"\r\n        >{{ item.shortName }}</a\r\n      >\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"primary\">\r\n      <button\r\n        type=\"button\"\r\n        aria-label=\"Toggle sidenav\"\r\n        mat-icon-button\r\n        (click)=\"drawer.toggle()\"\r\n        *ngIf=\"isHandset$ | async\"\r\n      >\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n      <span>{{ constantsService.mainMenuContents[choice].longName }}</span>\r\n    </mat-toolbar>\r\n    <!-- Add Content Here -->\r\n    <ng-content></ng-content>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/marker-list/marker-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/marker-list/marker-list.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"markers$ | async as markers\">\r\n  <ng-container *ngIf=\"markers[0]\" class=\"button-container\">\r\n    <mat-selection-list\r\n      #list\r\n      (selectionChange)=\"onSelectionChange(list.selectedOptions.selected)\"\r\n    >\r\n      <mat-list-option *ngFor=\"let marker of markers; index as i\" [value]=\"i\">\r\n        <span matListAvatar>\r\n          <h3 matLine>{{ marker.label }}</h3>\r\n        </span>\r\n        <mat-icon matListIcon>place</mat-icon>\r\n        <p matLine></p>\r\n        <p matLine>Latitude: {{ marker.latitude }}</p>\r\n        <p matLine>Longitude: {{ marker.longitude }}</p>\r\n      </mat-list-option>\r\n    </mat-selection-list>\r\n    <br /><br />\r\n\r\n    <button\r\n      mat-raised-button\r\n      color=\"warn\"\r\n      (click)=\"onClearAllMarkersClick($event)\"\r\n      class=\"right-margin\"\r\n    >\r\n      Clear ALL Markers\r\n    </button>\r\n\r\n    <button\r\n      mat-raised-button\r\n      color=\"accent\"\r\n      (click)=\"onClearSelectedMarkersClick($event)\"\r\n      class=\"right-margin\"\r\n    >\r\n      Clear Selected Markers\r\n    </button>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"!markers[0]\">\r\n    Marker list is empty.\r\n    <br /><br />\r\n  </ng-container>\r\n\r\n  <!-- <button mat-raised-button color=\"primary\" (click)=\"onGetMarkersClick($event)\">    Get Markers  </button> -->\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions/marker.actions.ts":
/*!*******************************************!*\
  !*** ./src/app/actions/marker.actions.ts ***!
  \*******************************************/
/*! exports provided: addMarker, removeMarker, removeAllMarkers, getMarkers, dbGetMarkers, markersSaved */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMarker", function() { return addMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMarker", function() { return removeMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllMarkers", function() { return removeAllMarkers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkers", function() { return getMarkers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbGetMarkers", function() { return dbGetMarkers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markersSaved", function() { return markersSaved; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const addMarker = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[MARKER] Add', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const removeMarker = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[MARKER] Remove', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const removeAllMarkers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[MARKERS] Remove All');
const getMarkers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[MARKERS] Get from payload', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const dbGetMarkers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[MARKERS] Get from IndexedDB');
const markersSaved = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[MARKERS] Saved to IndexedDB');


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div#maincontent {\n  padding: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhc2N1a2luc1xccHJvamVjdHNcXGh6XFxnLW1hcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYjbWFpbmNvbnRlbnQge1xyXG5cdHBhZGRpbmc6IDFlbTtcclxufVxyXG4iLCJkaXYjbWFpbmNvbnRlbnQge1xuICBwYWRkaW5nOiAxZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_actions_marker_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/actions/marker.actions */ "./src/app/actions/marker.actions.ts");




let AppComponent = class AppComponent {
    constructor(store) {
        this.store = store;
        this.choice = 1;
    }
    ngOnInit() {
        this.store.dispatch(src_app_actions_marker_actions__WEBPACK_IMPORTED_MODULE_3__["dbGetMarkers"]());
    }
    ngOnDestroy() {
        // this.store.dispatch({ type: 'CANCEL_GET_USERS' });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main-nav/main-nav.component */ "./src/app/components/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _components_gmap_gmap_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/gmap/gmap.component */ "./src/app/components/gmap/gmap.component.ts");
/* harmony import */ var _services_gmap_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/gmap.service */ "./src/app/services/gmap.service.ts");
/* harmony import */ var _components_marker_list_marker_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/marker-list/marker-list.component */ "./src/app/components/marker-list/marker-list.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _reducers_marker_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reducers/marker.reducer */ "./src/app/reducers/marker.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _effects_marker_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./effects/marker.effects */ "./src/app/effects/marker.effects.ts");


















let AppModule = class AppModule {
    constructor() { }
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_4__["MainNavComponent"],
            _components_gmap_gmap_component__WEBPACK_IMPORTED_MODULE_9__["GmapComponent"],
            _components_marker_list_marker_list_component__WEBPACK_IMPORTED_MODULE_11__["MarkerListComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
                apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].mapApiKey,
            }),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production }),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StoreModule"].forRoot({
                markers: _reducers_marker_reducer__WEBPACK_IMPORTED_MODULE_15__["reducer"],
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["EffectsModule"].forRoot([_effects_marker_effects__WEBPACK_IMPORTED_MODULE_17__["MarkerEffects"]]),
        ],
        providers: [_services_gmap_service__WEBPACK_IMPORTED_MODULE_10__["GmapService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppModule);



/***/ }),

/***/ "./src/app/components/gmap/gmap.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/gmap/gmap.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nbWFwL0M6XFxVc2Vyc1xcYXNjdWtpbnNcXHByb2plY3RzXFxoelxcZy1tYXAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGdtYXBcXGdtYXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ21hcC9nbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nbWFwL2dtYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcbiIsImFnbS1tYXAge1xuICBoZWlnaHQ6IDQwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/gmap/gmap.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/gmap/gmap.component.ts ***!
  \***************************************************/
/*! exports provided: GmapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GmapComponent", function() { return GmapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/constants.service */ "./src/app/services/constants.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_actions_marker_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/actions/marker.actions */ "./src/app/actions/marker.actions.ts");





let GmapComponent = class GmapComponent {
    constructor(constantsService, store, state) {
        this.constantsService = constantsService;
        this.store = store;
        this.state = state;
        this.markers$ = this.store.select('markers');
        this.markersCache = [];
    }
    ngOnInit() { }
    onMapClick(event) {
        const marker = {
            latitude: event.coords.lat,
            longitude: event.coords.lng,
            label: (this.state.getValue().markers.length + 1).toString(),
        };
        this.store.dispatch(src_app_actions_marker_actions__WEBPACK_IMPORTED_MODULE_4__["addMarker"]({ marker }));
    }
    onMarkMyLocationClick(event) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const marker = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    label: 'Me',
                };
                this.store.dispatch(src_app_actions_marker_actions__WEBPACK_IMPORTED_MODULE_4__["addMarker"]({ marker }));
            });
        }
        else {
            alert('Geolocation is not supported by this browser.');
        }
    }
};
GmapComponent.ctorParameters = () => [
    { type: src_app_services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["State"] }
];
GmapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gmap',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gmap.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/gmap/gmap.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gmap.component.scss */ "./src/app/components/gmap/gmap.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_constants_service__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["State"]])
], GmapComponent);



/***/ }),

/***/ "./src/app/components/main-nav/main-nav.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/main-nav/main-nav.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.ts ***!
  \***********************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_gmap_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/gmap.service */ "./src/app/services/gmap.service.ts");
/* harmony import */ var src_app_services_constants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/constants.service */ "./src/app/services/constants.service.ts");






let MainNavComponent = class MainNavComponent {
    constructor(breakpointObserver, gmapService, constantsService) {
        this.breakpointObserver = breakpointObserver;
        this.gmapService = gmapService;
        this.constantsService = constantsService;
        this.choiceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => result.matches));
    }
    onMenuClick(i) {
        this.choice = i;
        this.choiceChange.emit(this.choice);
    }
};
MainNavComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] },
    { type: src_app_services_gmap_service__WEBPACK_IMPORTED_MODULE_4__["GmapService"] },
    { type: src_app_services_constants_service__WEBPACK_IMPORTED_MODULE_5__["ConstantsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], MainNavComponent.prototype, "choice", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MainNavComponent.prototype, "choiceChange", void 0);
MainNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-nav/main-nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-nav.component.css */ "./src/app/components/main-nav/main-nav.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"],
        src_app_services_gmap_service__WEBPACK_IMPORTED_MODULE_4__["GmapService"],
        src_app_services_constants_service__WEBPACK_IMPORTED_MODULE_5__["ConstantsService"]])
], MainNavComponent);



/***/ }),

/***/ "./src/app/components/marker-list/marker-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/marker-list/marker-list.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".right-margin {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXJrZXItbGlzdC9DOlxcVXNlcnNcXGFzY3VraW5zXFxwcm9qZWN0c1xcaHpcXGctbWFwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYXJrZXItbGlzdFxcbWFya2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFya2VyLWxpc3QvbWFya2VyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxpQkFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYXJrZXItbGlzdC9tYXJrZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5idXR0b24tY29udGFpbmVyIGJ1dHRvbixcclxuLy8gLmJ1dHRvbi1jb250YWluZXIgYSB7XHJcbi8vICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbi8vIH1cclxuXHJcbi5yaWdodC1tYXJnaW4ge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcbiIsIi5yaWdodC1tYXJnaW4ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/marker-list/marker-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/marker-list/marker-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: MarkerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerListComponent", function() { return MarkerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_gmap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/gmap.service */ "./src/app/services/gmap.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_actions_marker_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/actions/marker.actions */ "./src/app/actions/marker.actions.ts");





let MarkerListComponent = class MarkerListComponent {
    constructor(store, gmapService) {
        this.store = store;
        this.gmapService = gmapService;
        this.markers$ = this.store.select('markers');
        this.selectedOptions = [];
    }
    ngOnInit() { }
    onGetMarkersClick() {
        this.store.dispatch(src_app_actions_marker_actions__WEBPACK_IMPORTED_MODULE_4__["dbGetMarkers"]());
    }
    onClearAllMarkersClick() {
        this.store.dispatch(src_app_actions_marker_actions__WEBPACK_IMPORTED_MODULE_4__["removeAllMarkers"]());
    }
    onClearSelectedMarkersClick() {
        const positions = this.selectedOptions.map(x => x.value);
        positions.sort((b, a) => a - b);
        positions.forEach((p) => this.store.dispatch(src_app_actions_marker_actions__WEBPACK_IMPORTED_MODULE_4__["removeMarker"]({ id: p })));
        this.selectedOptions = [];
    }
    onSelectionChange($event) {
        this.selectedOptions = $event;
    }
};
MarkerListComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: src_app_services_gmap_service__WEBPACK_IMPORTED_MODULE_2__["GmapService"] }
];
MarkerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-marker-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./marker-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/marker-list/marker-list.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./marker-list.component.scss */ "./src/app/components/marker-list/marker-list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], src_app_services_gmap_service__WEBPACK_IMPORTED_MODULE_2__["GmapService"]])
], MarkerListComponent);



/***/ }),

/***/ "./src/app/effects/marker.effects.ts":
/*!*******************************************!*\
  !*** ./src/app/effects/marker.effects.ts ***!
  \*******************************************/
/*! exports provided: MarkerEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerEffects", function() { return MarkerEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_gmap_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/gmap.service */ "./src/app/services/gmap.service.ts");
/* harmony import */ var src_app_actions_marker_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/actions/marker.actions */ "./src/app/actions/marker.actions.ts");







let MarkerEffects = class MarkerEffects {
    constructor(actions$, gmapService) {
        this.actions$ = actions$;
        this.gmapService = gmapService;
        this.loadMarkers$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(src_app_actions_marker_actions__WEBPACK_IMPORTED_MODULE_6__["dbGetMarkers"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(() => this.gmapService.iDBGetMarkers()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(markers => src_app_actions_marker_actions__WEBPACK_IMPORTED_MODULE_6__["getMarkers"]({ markers })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"])))));
        this.saveMarkers$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(src_app_actions_marker_actions__WEBPACK_IMPORTED_MODULE_6__["addMarker"].type, src_app_actions_marker_actions__WEBPACK_IMPORTED_MODULE_6__["removeMarker"].type, src_app_actions_marker_actions__WEBPACK_IMPORTED_MODULE_6__["removeAllMarkers"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(() => this.gmapService.iDBPutMarkers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => src_app_actions_marker_actions__WEBPACK_IMPORTED_MODULE_6__["markersSaved"]()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"])))));
    }
};
MarkerEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _services_gmap_service__WEBPACK_IMPORTED_MODULE_5__["GmapService"] }
];
MarkerEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
        _services_gmap_service__WEBPACK_IMPORTED_MODULE_5__["GmapService"]])
], MarkerEffects);



/***/ }),

/***/ "./src/app/reducers/marker.reducer.ts":
/*!********************************************!*\
  !*** ./src/app/reducers/marker.reducer.ts ***!
  \********************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_actions_marker_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/actions/marker.actions */ "./src/app/actions/marker.actions.ts");


function reducer(state = [], action) {
    switch (action.type) {
        case src_app_actions_marker_actions__WEBPACK_IMPORTED_MODULE_1__["getMarkers"].type:
            return action.markers.slice();
        case src_app_actions_marker_actions__WEBPACK_IMPORTED_MODULE_1__["addMarker"].type:
            return [...state, action.marker];
        case src_app_actions_marker_actions__WEBPACK_IMPORTED_MODULE_1__["removeMarker"].type:
            const newState = state.slice();
            newState.splice(action.id, 1);
            return newState;
        case src_app_actions_marker_actions__WEBPACK_IMPORTED_MODULE_1__["removeAllMarkers"].type:
            return [];
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/services/constants.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/constants.service.ts ***!
  \***********************************************/
/*! exports provided: ConstantsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantsService", function() { return ConstantsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConstantsService = class ConstantsService {
    constructor() {
        this.defaultLatitude = 56.9547;
        this.defaultLongitude = 24.1144;
        this.mainMenuContents = [
            {
                shortName: 'Map',
                longName: 'Clickable Google Map'
            },
            {
                shortName: 'Marker List',
                longName: 'Map Marker Coordinate List'
            },
        ];
    }
};
ConstantsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ConstantsService);



/***/ }),

/***/ "./src/app/services/gmap.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/gmap.service.ts ***!
  \******************************************/
/*! exports provided: GmapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GmapService", function() { return GmapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _indexed_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indexed-db.service */ "./src/app/services/indexed-db.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");






let GmapService = class GmapService {
    constructor(indexedDbService, state) {
        this.indexedDbService = indexedDbService;
        this.state = state;
        this.dbName = 'mapApp';
        this.store = 'main';
        this.version = 1;
        this.mapMarkers = [];
    }
    iDBGetMarkers() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.initIDB().then(() => this.indexedDbService.readFromStore(this.db, this.store, 'markers'))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((obj) => obj.value));
    }
    iDBPutMarkers() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.initIDB().then(() => this.indexedDbService.writeToStore(this.db, this.store, { entity_id: 'markers', value: this.state.getValue().markers })));
    }
    initIDB() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.db) {
                this.db = yield this.indexedDbService.openIndexedDB(this.dbName, this.version, (oEvent) => {
                    const oObjectStore = oEvent.currentTarget.result.createObjectStore(this.store, {
                        keyPath: 'entity_id',
                    });
                    oObjectStore.createIndex('entity_id', 'entity_id', { unique: true });
                    oObjectStore.transaction.oncomplete = this.initIDB.bind(this);
                });
            }
        });
    }
};
GmapService.ctorParameters = () => [
    { type: _indexed_db_service__WEBPACK_IMPORTED_MODULE_2__["IndexedDbService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["State"] }
];
GmapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_indexed_db_service__WEBPACK_IMPORTED_MODULE_2__["IndexedDbService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["State"]])
], GmapService);



/***/ }),

/***/ "./src/app/services/indexed-db.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/indexed-db.service.ts ***!
  \************************************************/
/*! exports provided: IndexedDbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedDbService", function() { return IndexedDbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IndexedDbService = class IndexedDbService {
    readFromStore(db, store, key) {
        return new Promise((resolve) => {
            const request = db
                .transaction([store], 'readonly')
                .objectStore(store)
                .get(key);
            request.onerror = () => {
                console.log('IndexedDB access error: ' + request.error);
                resolve();
            };
            request.onsuccess = () => {
                resolve(request.result);
            };
        });
    }
    writeToStore(db, store, data) {
        return new Promise((resolve, reject) => {
            const request = db
                .transaction([store], 'readwrite')
                .objectStore(store)
                .put(data);
            request.onerror = () => {
                console.log('IndexedDB access error: ' + request.error);
                reject();
            };
            request.onsuccess = () => {
                resolve(request.result);
            };
        });
    }
    openIndexedDB(dbName, version, fnOnUpgradeNeeded) {
        const indexedDB = window.indexedDB;
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(dbName, version);
            request.onerror = () => {
                console.log('IndexedDB access error: ' + request.error);
                reject();
            };
            request.onsuccess = () => {
                resolve(request.result);
            };
            request.onupgradeneeded = fnOnUpgradeNeeded;
        });
    }
};
IndexedDbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IndexedDbService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    mapApiKey: 'AIzaSyBKw1fojLAVWm-RFHYynJWgEARkEhNZgGo',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ascukins\projects\hz\g-map\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map