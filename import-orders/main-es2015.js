(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <app-orders></app-orders>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/import-orders-dialog/import-orders-dialog.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/import-orders-dialog/import-orders-dialog.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n  <span> Import Order </span>\n</mat-toolbar>\n\n<mat-horizontal-stepper [@.disabled]=\"true\" [linear]=\"true\">\n  <mat-step [completed]=\"order\">\n    <ng-template matStepLabel>Find Order</ng-template>\n    <div class=\"step-content\">\n      <app-orders-table\n        [displayedOrderColumns]=\"displayedOrderColumns\"\n        [orders]=\"store.externalOrders\"\n        (rowClick)=\"onOrderRowClick($event)\"\n      >\n      </app-orders-table>\n    </div>\n    <div class=\"button-bar\">\n      <button mat-raised-button (click)=\"onCancelClick()\">Cancel</button>\n    </div>\n  </mat-step>\n\n  <mat-step>\n    <ng-template matStepLabel>Prepare Products</ng-template>\n    <div class=\"step-content\">\n      <div *ngIf=\"order\" class=\"breadcrumb\">\n        <span class=\"link\" (click)=\"stepper.reset()\">My Orders</span> | Order\n        {{ order?.id }}\n      </div>\n      <app-order-items-table\n        *ngIf=\"order?.orderItems\"\n        [orderItems]=\"order.orderItems\"\n      ></app-order-items-table>\n    </div>\n    <div class=\"button-bar\">\n      <button mat-raised-button matStepperPrevious>Previous</button>\n      <button mat-raised-button matStepperNext>Next</button>\n      <button mat-raised-button (click)=\"onCancelClick()\">Cancel</button>\n    </div>\n  </mat-step>\n\n  <mat-step>\n    <ng-template matStepLabel>Confirm Order</ng-template>\n    <div class=\"step-content\">\n      <div\n        style=\"overflow-y: auto; max-height: 420px;\"\n        *ngIf=\"order?.orderItems\"\n      >\n        <div style=\"min-height: 150px;\">\n          <h3>Items</h3>\n          <div *ngFor=\"let item of order.orderItems\" style=\"padding: 5px;\">\n            <mat-checkbox\n              style=\"margin-right: 5px;\"\n              disabled\n              [checked]=\"item.selected\"\n            >\n            </mat-checkbox>\n            {{ item.sku }},\n            {{ item.name }}\n            <ng-container *ngIf=\"item.option\">\n              ,\n              <mat-icon>{{ item.option.icon }}</mat-icon>\n              {{ item.option.text }}\n            </ng-container>\n          </div>\n        </div>\n\n        <div class=\"two-column\">\n          <div>\n            <h3>Shipping</h3>\n            {{ order.address.street }}<br />\n            {{ order.address.city }}<br />\n            {{ order.address.zip }}<br />\n            {{ order.address.state }}<br />\n            {{ order.address.country }}<br />\n          </div>\n          <div>\n            <h3>Production Subtotal</h3>\n            ...\n          </div>\n        </div>\n        <!-- <pre>{{ order | json }}</pre> -->\n      </div>\n    </div>\n    <div class=\"button-bar\">\n      <button mat-raised-button matStepperPrevious>Previous</button>\n      <button mat-raised-button [mat-dialog-close]=\"order\">\n        Confirm and Ship\n      </button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-items-table/order-items-table.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-items-table/order-items-table.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <table class=\"w100\" mat-table [dataSource]=\"dataSource\" matSort>\n    <ng-container matColumnDef=\"amount\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        Amount\n      </th>\n      <td mat-cell *matCellDef=\"let item\">\n        {{ getOrderItemCellValue(item, \"amount\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n      <td mat-cell *matCellDef=\"let item\">\n        {{ getOrderItemCellValue(item, \"name\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"sku\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>SKU</th>\n      <td mat-cell *matCellDef=\"let item\">\n        {{ getOrderItemCellValue(item, \"sku\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"selected\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Selected</th>\n      <td mat-cell *matCellDef=\"let item\">\n        <mat-checkbox\n          (click)=\"$event.stopPropagation()\"\n          [checked]=\"item.selected\"\n          (change)=\"onCheckboxChange($event, item)\"\n        >\n        </mat-checkbox>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"option\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Product variant</th>\n      <td mat-cell *matCellDef=\"let item\">\n        <mat-form-field>\n          <mat-label>Variant</mat-label>\n          <mat-select [(value)]=\"item.option\">\n            <mat-select-trigger *ngIf=\"item.option\">\n              <mat-icon>{{ item.option.icon }}</mat-icon>\n              {{ item.option.text }}\n            </mat-select-trigger>\n            <mat-option\n              *ngFor=\"let option of item.availableOptions\"\n              [value]=\"option\"\n            >\n              <mat-icon>{{ option.icon }}</mat-icon>\n              {{ option.text }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedOrderColumns\"></tr>\n    <tr\n      mat-row\n      *matRowDef=\"let row; columns: displayedOrderColumns\"\n      (click)=\"onRowClick(row)\"\n      class=\"clickable\"\n    ></tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[4]\"></mat-paginator>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/orders-table/orders-table.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/orders-table/orders-table.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <mat-form-field class=\"w100\" appearance=\"outline\">\n    <mat-icon matPrefix>search</mat-icon>\n    <input\n      matInput\n      (keyup)=\"applyFilter($event.target.value)\"\n      placeholder=\"Filter\"\n    />\n  </mat-form-field>\n\n  <table class=\"w100\" mat-table [dataSource]=\"dataSource\" matSort>\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>#</th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"id\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"customer\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Customer</th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"customer\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"created\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Created</th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"created\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"revenue\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Revenue $</th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"revenue\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"cost\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Cost $</th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"cost\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"price\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Price $</th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"price\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"fulfillmentStage\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Fulfillment</th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"fulfillmentStage\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"amountOfProducts\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        Amount Of Products\n      </th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"amountOfProducts\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"orderVolume\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Order Volume</th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"orderVolume\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"SKU\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>SKU</th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"SKU\") }}\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedOrderColumns\"></tr>\n    <tr\n      mat-row\n      *matRowDef=\"let row; columns: displayedOrderColumns\"\n      (click)=\"onRowClick(row)\"\n      class=\"clickable\"\n    ></tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"pageSizeOptions\"></mat-paginator>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/orders/orders.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/orders/orders.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"toolbar mat-elevation-z8\">\n  <mat-toolbar>\n    <span> Orders </span>\n    <span class=\"spacer\"> </span>\n    <button mat-raised-button color=\"primary\" (click)=\"openImportDialog()\">\n      Import orders\n    </button>\n    <button mat-raised-button>NA1</button>\n    <button mat-raised-button>NA2</button>\n  </mat-toolbar>\n</div>\n\n<div class=\"mat-elevation-z8\" style=\"padding: 16px 16px 0;\">\n  <app-orders-table\n    [displayedOrderColumns]=\"displayedOrderColumns\"\n    [orders]=\"store.mainOrders\"\n    [pageSizeOptions]=\"[10, 30, 100]\"\n  ></app-orders-table>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
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

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  max-width: 900px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9DOlxcVXNlcnNcXGFzY3VraW5zXFxwcm9qZWN0c1xcaW1wb3J0LW9yZGVyc1xcc3JjL2FwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwiYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4iLCIuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */");

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'import-orders';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/orders/orders.component */ "./src/app/components/orders/orders.component.ts");
/* harmony import */ var _store_order_store_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./store/order-store.service */ "./src/app/store/order-store.service.ts");
/* harmony import */ var _components_import_orders_dialog_import_orders_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/import-orders-dialog/import-orders-dialog.component */ "./src/app/components/import-orders-dialog/import-orders-dialog.component.ts");
/* harmony import */ var _components_orders_table_orders_table_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/orders-table/orders-table.component */ "./src/app/components/orders-table/orders-table.component.ts");
/* harmony import */ var _components_order_items_table_order_items_table_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/order-items-table/order-items-table.component */ "./src/app/components/order-items-table/order-items-table.component.ts");






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_17__["OrdersComponent"],
            _components_import_orders_dialog_import_orders_dialog_component__WEBPACK_IMPORTED_MODULE_19__["ImportOrdersDialogComponent"],
            _components_orders_table_orders_table_component__WEBPACK_IMPORTED_MODULE_20__["OrdersTableComponent"],
            _components_order_items_table_order_items_table_component__WEBPACK_IMPORTED_MODULE_21__["OrderItemsTableComponent"]
        ],
        entryComponents: [
            _components_import_orders_dialog_import_orders_dialog_component__WEBPACK_IMPORTED_MODULE_19__["ImportOrdersDialogComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
        ],
        providers: [
            _store_order_store_service__WEBPACK_IMPORTED_MODULE_18__["OrderStoreService"],
            { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { hasBackdrop: true, maxWidth: 850, minWidth: '850px' } }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/import-orders-dialog/import-orders-dialog.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/import-orders-dialog/import-orders-dialog.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-stepper-horizontal {\n  margin-top: 20px;\n}\n.mat-stepper-horizontal .button-bar {\n  text-align: right;\n}\n.mat-stepper-horizontal .button-bar button {\n  margin-left: 16px;\n}\n.mat-stepper-horizontal .step-content {\n  padding-bottom: 16px;\n  min-height: 420px;\n}\n.breadcrumb {\n  padding-left: 24px;\n  font-weight: bold;\n}\n.two-column {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2ltcG9ydC1vcmRlcnMtZGlhbG9nL0M6XFxVc2Vyc1xcYXNjdWtpbnNcXHByb2plY3RzXFxpbXBvcnQtb3JkZXJzXFxzcmMvYXBwXFxjb21wb25lbnRzXFxpbXBvcnQtb3JkZXJzLWRpYWxvZ1xcaW1wb3J0LW9yZGVycy1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJhcHAvY29tcG9uZW50cy9pbXBvcnQtb3JkZXJzLWRpYWxvZy9pbXBvcnQtb3JkZXJzLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7QURDRTtFQUNFLGlCQUFBO0FDQ0o7QURBSTtFQUNFLGlCQUFBO0FDRU47QURFRTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7QUNBSjtBRElBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0RGO0FESUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNERiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9pbXBvcnQtb3JkZXJzLWRpYWxvZy9pbXBvcnQtb3JkZXJzLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAuYnV0dG9uLWJhciB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN0ZXAtY29udGVudCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJyZWFkY3J1bWIge1xyXG4gIHBhZGRpbmctbGVmdDogMjRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnR3by1jb2x1bW4ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG59XHJcbiIsIi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIC5idXR0b24tYmFyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCAuYnV0dG9uLWJhciBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIC5zdGVwLWNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgbWluLWhlaWdodDogNDIwcHg7XG59XG5cbi5icmVhZGNydW1iIHtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnR3by1jb2x1bW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/import-orders-dialog/import-orders-dialog.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/import-orders-dialog/import-orders-dialog.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ImportOrdersDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportOrdersDialogComponent", function() { return ImportOrdersDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_store_order_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/order-store.service */ "./src/app/store/order-store.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");





let ImportOrdersDialogComponent = class ImportOrdersDialogComponent {
    constructor(store, dialogRef, data) {
        this.store = store;
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedOrderColumns = ['id', 'customer', 'amountOfProducts', 'orderVolume', 'SKU'];
    }
    onOrderRowClick(order) {
        this.order = order;
        this.stepper.selected.completed = true;
        this.stepper.next();
    }
    onCancelClick() {
        this.dialogRef.close();
    }
};
ImportOrdersDialogComponent.ctorParameters = () => [
    { type: src_app_store_order_store_service__WEBPACK_IMPORTED_MODULE_2__["OrderStoreService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepper"], { static: true })
], ImportOrdersDialogComponent.prototype, "stepper", void 0);
ImportOrdersDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-import-orders-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./import-orders-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/import-orders-dialog/import-orders-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./import-orders-dialog.component.scss */ "./src/app/components/import-orders-dialog/import-orders-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], ImportOrdersDialogComponent);



/***/ }),

/***/ "./src/app/components/order-items-table/order-items-table.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/order-items-table/order-items-table.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-row:hover {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL29yZGVyLWl0ZW1zLXRhYmxlL0M6XFxVc2Vyc1xcYXNjdWtpbnNcXHByb2plY3RzXFxpbXBvcnQtb3JkZXJzXFxzcmMvYXBwXFxjb21wb25lbnRzXFxvcmRlci1pdGVtcy10YWJsZVxcb3JkZXItaXRlbXMtdGFibGUuY29tcG9uZW50LnNjc3MiLCJhcHAvY29tcG9uZW50cy9vcmRlci1pdGVtcy10YWJsZS9vcmRlci1pdGVtcy10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFBO0FDQ0YiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvb3JkZXItaXRlbXMtdGFibGUvb3JkZXItaXRlbXMtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXJvdzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxufVxyXG4iLCIubWF0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/order-items-table/order-items-table.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/order-items-table/order-items-table.component.ts ***!
  \*****************************************************************************/
/*! exports provided: OrderItemsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItemsTableComponent", function() { return OrderItemsTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");





let OrderItemsTableComponent = class OrderItemsTableComponent {
    constructor() {
        this.displayedOrderColumns = ['name', 'option', 'sku', 'selected'];
        this.rowClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    getOrderItemCellValue(orderItem, cell) {
        switch (cell) {
            case 'selected':
                return orderItem[cell] ? 'selected' : 'not selected';
            case 'option':
                return orderItem[cell] ? orderItem[cell].text : 'not selected';
            default:
                return orderItem[cell];
        }
    }
    onCheckboxChange($event, orderItem) {
        orderItem.selected = $event.checked;
    }
    ngOnInit() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.orderItems);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    onRowClick(orderItem) {
        this.rowClick.emit(orderItem);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OrderItemsTableComponent.prototype, "orderItems", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], OrderItemsTableComponent.prototype, "rowClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], OrderItemsTableComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true })
], OrderItemsTableComponent.prototype, "paginator", void 0);
OrderItemsTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-items-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-items-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-items-table/order-items-table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-items-table.component.scss */ "./src/app/components/order-items-table/order-items-table.component.scss")).default]
    })
], OrderItemsTableComponent);



/***/ }),

/***/ "./src/app/components/orders-table/orders-table.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/orders-table/orders-table.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-row:hover {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n\ntd,\nth {\n  padding: 0 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL29yZGVycy10YWJsZS9DOlxcVXNlcnNcXGFzY3VraW5zXFxwcm9qZWN0c1xcaW1wb3J0LW9yZGVyc1xcc3JjL2FwcFxcY29tcG9uZW50c1xcb3JkZXJzLXRhYmxlXFxvcmRlcnMtdGFibGUuY29tcG9uZW50LnNjc3MiLCJhcHAvY29tcG9uZW50cy9vcmRlcnMtdGFibGUvb3JkZXJzLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7QUNDRjs7QURFQTs7RUFFRSwwQkFBQTtBQ0NGIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL29yZGVycy10YWJsZS9vcmRlcnMtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXJvdzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxufVxyXG5cclxudGQsXHJcbnRoIHtcclxuICBwYWRkaW5nOiAwIDEwcHggIWltcG9ydGFudDtcclxufVxyXG4iLCIubWF0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG5cbnRkLFxudGgge1xuICBwYWRkaW5nOiAwIDEwcHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/orders-table/orders-table.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/orders-table/orders-table.component.ts ***!
  \*******************************************************************/
/*! exports provided: OrdersTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersTableComponent", function() { return OrdersTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");





let OrdersTableComponent = class OrdersTableComponent {
    constructor() {
        this.pageSizeOptions = [5];
        this.rowClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    getOrderCellValue(order, cell) {
        const dateOptions = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        switch (cell) {
            case 'created':
                return order[cell].toLocaleDateString('en-US', dateOptions);
            case 'revenue':
            case 'cost':
            case 'price':
                if (order[cell] > 0) {
                    return '+' + order[cell];
                }
                else {
                    return order[cell];
                }
            case 'orderVolume':
                return order[cell] + ' $';
            default:
                return order[cell];
        }
    }
    ngOnInit() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.orders);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    onRowClick(order) {
        this.rowClick.emit(order);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OrdersTableComponent.prototype, "displayedOrderColumns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OrdersTableComponent.prototype, "orders", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OrdersTableComponent.prototype, "pageSizeOptions", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], OrdersTableComponent.prototype, "rowClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], OrdersTableComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true })
], OrdersTableComponent.prototype, "paginator", void 0);
OrdersTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./orders-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/orders-table/orders-table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./orders-table.component.scss */ "./src/app/components/orders-table/orders-table.component.scss")).default]
    })
], OrdersTableComponent);



/***/ }),

/***/ "./src/app/components/orders/orders.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/orders/orders.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".spacer {\n  flex: 1 1 auto;\n}\n\nbutton {\n  margin-left: 16px;\n}\n\n.toolbar {\n  margin: 30px 0 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL29yZGVycy9DOlxcVXNlcnNcXGFzY3VraW5zXFxwcm9qZWN0c1xcaW1wb3J0LW9yZGVyc1xcc3JjL2FwcFxcY29tcG9uZW50c1xcb3JkZXJzXFxvcmRlcnMuY29tcG9uZW50LnNjc3MiLCJhcHAvY29tcG9uZW50cy9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0YiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG59XHJcblxyXG4udG9vbGJhciB7XHJcbiAgbWFyZ2luOiAzMHB4IDAgNDBweDtcclxufVxyXG4iLCIuc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuXG4udG9vbGJhciB7XG4gIG1hcmdpbjogMzBweCAwIDQwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/orders/orders.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/orders/orders.component.ts ***!
  \*******************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_store_order_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/order-store.service */ "./src/app/store/order-store.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _import_orders_dialog_import_orders_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../import-orders-dialog/import-orders-dialog.component */ "./src/app/components/import-orders-dialog/import-orders-dialog.component.ts");





let OrdersComponent = class OrdersComponent {
    constructor(dialog, store) {
        this.dialog = dialog;
        this.store = store;
        this.displayedOrderColumns = ['id', 'customer', 'created', 'revenue', 'cost', 'price', 'fulfillmentStage'];
    }
    openImportDialog() {
        const dialogRef = this.dialog.open(_import_orders_dialog_import_orders_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ImportOrdersDialogComponent"], {
            width: '250px',
            data: { importedOrder: this.importedOrder }
        });
        dialogRef.afterClosed().subscribe((order) => {
            this.importedOrder = order;
            if (order) {
                this.store.addImportedToMainOrders(order);
                this.store.deleteFromExternalOrders(order);
            }
        });
    }
};
OrdersComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_store_order_store_service__WEBPACK_IMPORTED_MODULE_2__["OrderStoreService"] }
];
OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/orders/orders.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./orders.component.scss */ "./src/app/components/orders/orders.component.scss")).default]
    })
], OrdersComponent);



/***/ }),

/***/ "./src/app/store/order-store.service.ts":
/*!**********************************************!*\
  !*** ./src/app/store/order-store.service.ts ***!
  \**********************************************/
/*! exports provided: OrderStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStoreService", function() { return OrderStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OrderStoreService = class OrderStoreService {
    constructor() {
        // TODO remove
        // console.log('store init');
        const items = [
            {
                productId: '1',
                name: 'Christmas Dog Socks',
                sku: 'SOCK_101_BIG_1',
                amount: 4,
                price: 8.99,
                options: [],
                availableOptions: [
                    {
                        text: 'Heavy Wool Socks',
                        icon: 'pregnant_woman'
                    },
                    {
                        text: 'Crew Socks',
                        icon: 'sports_handball'
                    },
                    {
                        text: 'Light Socks',
                        icon: 'android'
                    }
                ]
            },
            {
                productId: '2',
                name: 'Christmas Cat Socks',
                sku: 'SOCK_201_BIG_1',
                amount: 3,
                price: 9.15,
                options: [],
                availableOptions: [
                    {
                        text: 'Heavy Wool Socks',
                        icon: 'pregnant_woman'
                    },
                    {
                        text: 'Crew Socks',
                        icon: 'sports_handball'
                    },
                    {
                        text: 'Light Socks',
                        icon: 'android'
                    }
                ],
                selected: true
            },
        ];
        const address = {
            street: 'lorem ipsum street address',
            city: 'Riga',
            zip: 'LV-1017',
            state: 'CA',
            country: 'USA'
        };
        this.mainOrders = [
            {
                id: '#1234',
                customer: 'John Doe',
                created: new Date('03-15 14:14'),
                revenue: 5.15,
                cost: -15.15,
                price: 10,
                fulfillmentStage: 'In production'
            },
            {
                id: '#1235',
                customer: 'John Doe',
                created: new Date('03-16 15:14'),
                revenue: 5.15,
                cost: -15.15,
                price: 10,
                fulfillmentStage: 'Quality Control'
            },
        ];
        this.externalOrders = [
            {
                id: '#1234',
                customer: 'John Doe',
                created: new Date('04-15 14:14'),
                revenue: 5.15,
                cost: -15.15,
                price: 10,
                fulfillmentStage: 'Incoming',
                amountOfProducts: 2,
                orderVolume: 54.43,
                SKU: 'SOCK_101_BIG_1',
                orderItems: items,
                address
            },
            {
                id: '#1235',
                customer: 'John Doe',
                created: new Date('05-17 14:14'),
                revenue: 5.15,
                cost: -15.15,
                price: 10,
                fulfillmentStage: 'Incoming',
                amountOfProducts: 3,
                orderVolume: 64.43,
                SKU: 'SOCK_101_BIG_2',
                orderItems: items,
                address
            },
            {
                id: '#1135',
                customer: 'Donald Trump',
                created: new Date('06-22 11:00'),
                revenue: 5.15,
                cost: -15.15,
                price: 10,
                fulfillmentStage: 'Incoming',
                amountOfProducts: 40,
                orderVolume: 19.99,
                SKU: 'SPOON_123_BIG_1',
                orderItems: items,
                address
            },
            {
                id: '#1136',
                customer: 'Hillary Clinton',
                created: new Date('06-23 18:40'),
                revenue: 5.15,
                cost: -15.15,
                price: 10,
                fulfillmentStage: 'Incoming',
                amountOfProducts: 8,
                orderVolume: 1504.11,
                SKU: 'ITEM_99_HZ_5',
                orderItems: items,
                address
            },
            {
                id: '#1352',
                customer: 'Peter Norton',
                created: new Date('05-17 14:14'),
                revenue: 5.15,
                cost: -15.15,
                price: 10,
                fulfillmentStage: 'Incoming',
                amountOfProducts: 23,
                orderVolume: 614.43,
                SKU: 'SOCK_101_BIG_2',
                orderItems: items,
                address
            },
            {
                id: '#135',
                customer: 'Bill Gates',
                created: new Date('06-22 11:00'),
                revenue: 5.15,
                cost: -15.15,
                price: 10,
                fulfillmentStage: 'Incoming',
                amountOfProducts: 4,
                orderVolume: 196.99,
                SKU: 'SPOON_123_BIG_1',
                orderItems: items,
                address
            },
        ];
    }
    deleteFromExternalOrders(order) {
        this.externalOrders = this.externalOrders.filter(o => o.id !== order.id);
    }
    addToMainOrders(order) {
        this.mainOrders = [...this.mainOrders, order];
    }
    addImportedToMainOrders(order) {
        order.fulfillmentStage = 'Imported';
        this.addToMainOrders(order);
    }
};
OrderStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrderStoreService);



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

module.exports = __webpack_require__(/*! C:\Users\ascukins\projects\import-orders\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);