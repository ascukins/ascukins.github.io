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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loading-non-modal\" *ngIf=\"isBusy\">\n  <mat-spinner diameter=\"100\"></mat-spinner>\n</div>\n<div class=\"container\">\n  <app-orders></app-orders>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/import-orders-dialog/import-orders-dialog.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/import-orders-dialog/import-orders-dialog.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n  <span> Import Order </span>\n</mat-toolbar>\n\n<mat-horizontal-stepper [@.disabled]=\"true\" [linear]=\"true\" *mobxAutorun>\n  <mat-step [completed]=\"store.selectedOrder\">\n    <ng-template matStepLabel>Find Order</ng-template>\n    <div class=\"step-content\" *ngIf=\"store.importableOrders.length\">\n      <app-orders-table\n        [displayedOrderColumns]=\"displayedOrderColumns\"\n        [orders]=\"store.importableOrders\"\n        (rowClick)=\"onOrderRowClick($event)\"\n      >\n      </app-orders-table>\n    </div>\n    <div class=\"button-bar\">\n      <button mat-raised-button (click)=\"onCancelClick()\">Cancel</button>\n    </div>\n  </mat-step>\n\n  <mat-step>\n    <ng-template matStepLabel>Prepare Products</ng-template>\n    <div class=\"step-content\">\n      <div *ngIf=\"store.selectedOrder\" class=\"breadcrumb\">\n        <span class=\"link\" (click)=\"stepper.reset()\">My Orders</span> | Order\n        {{ store.selectedOrder?.id }}\n      </div>\n      <app-order-items-table\n        *ngIf=\"store.selectedOrder?.orderItems\"\n        [orderItems]=\"store.selectedOrder.orderItems\"\n      ></app-order-items-table>\n    </div>\n    <div class=\"button-bar\">\n      <button mat-raised-button matStepperPrevious>Previous</button>\n      <button mat-raised-button matStepperNext>Next</button>\n      <button mat-raised-button (click)=\"onCancelClick()\">Cancel</button>\n    </div>\n  </mat-step>\n\n  <mat-step>\n    <ng-template matStepLabel>Confirm Order</ng-template>\n    <div class=\"step-content\">\n      <app-order-details></app-order-details>\n    </div>\n    <div class=\"button-bar\">\n      <button mat-raised-button matStepperPrevious>Previous</button>\n      <button mat-raised-button [mat-dialog-close]=\"store.selectedOrder\">\n        Confirm and Ship\n      </button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-details-dialog/order-details-dialog.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-details-dialog/order-details-dialog.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n  <span> Order Details</span>\n</mat-toolbar>\n\n<div *mobxAutorun>\n  <div class=\"container\" (click)=\"onCancelClick()\">\n    <app-order-details></app-order-details>\n  </div>\n  <div class=\"button-bar\">\n    <button mat-raised-button (click)=\"onCancelClick()\">Cancel</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-details/order-details.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-details/order-details.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *mobxAutorun>\n  <div\n    style=\"overflow-y: auto; max-height: 420px;\"\n    *ngIf=\"store.selectedOrder?.orderItems\"\n  >\n    <div style=\"min-height: 150px;\">\n      <h3>Items</h3>\n      <div\n        *ngFor=\"let item of store.selectedOrder.orderItems\"\n        style=\"padding: 5px;\"\n      >\n        <mat-checkbox\n          style=\"margin-right: 5px;\"\n          disabled\n          [checked]=\"item.selected\"\n        >\n        </mat-checkbox>\n        {{ item.amount }} x {{ item.SKU }},\n        {{ item.name }}\n        <ng-container *ngFor=\"let option of item.options\">\n          ,\n          <mat-icon>{{ option.icon }}</mat-icon>\n          {{ option.text }}\n        </ng-container>\n      </div>\n    </div>\n\n    <div class=\"two-column\">\n      <div>\n        <h3>Shipping</h3>\n        {{ store.selectedOrder.customer.name }}<br />\n        {{ store.selectedOrder.customer.address.street }}<br />\n        {{ store.selectedOrder.customer.address.city }}<br />\n        {{ store.selectedOrder.customer.address.zip }}<br />\n        {{ store.selectedOrder.customer.address.state }}<br />\n        {{ store.selectedOrder.customer.address.country }}<br />\n      </div>\n      <div>\n        <div *ngIf=\"store.selectedOrderSelectedItems.length\">\n          <h3>Production Subtotal</h3>\n          <table>\n            <tr>\n              <th>SKU</th>\n              <th>Amount</th>\n              <th>Cost $</th>\n              <th>Price $</th>\n            </tr>\n            <ng-container *ngFor=\"let item of store.selectedOrderSelectedItems\">\n              <tr>\n                <td>{{ item.SKU }}</td>\n                <td>{{ item.amount }}</td>\n                <td>{{ item.cost / 100 }}</td>\n                <td>{{ item.price / 100 }}</td>\n              </tr>\n            </ng-container>\n          </table>\n\n          <p>Order cost $: {{ store.selectedOrderCost / 100 }}</p>\n          <p>Order price $: {{ store.selectedOrderPrice / 100 }}</p>\n        </div>\n      </div>\n    </div>\n    <!-- <pre>{{ order | json }}</pre> -->\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-items-table/order-items-table.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-items-table/order-items-table.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <table class=\"w100\" mat-table [dataSource]=\"dataSource\" matSort>\n    <ng-container matColumnDef=\"amount\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        Amount\n      </th>\n      <td mat-cell *matCellDef=\"let item\">\n        {{ getOrderItemCellValue(item, \"amount\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n      <td mat-cell *matCellDef=\"let item\">\n        {{ getOrderItemCellValue(item, \"name\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"SKU\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>SKU</th>\n      <td mat-cell *matCellDef=\"let item\">\n        {{ getOrderItemCellValue(item, \"SKU\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"selected\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Selected</th>\n      <td mat-cell *matCellDef=\"let item\">\n        <mat-checkbox\n          (click)=\"$event.stopPropagation()\"\n          [checked]=\"item.selected\"\n          (change)=\"onCheckboxChange($event, item)\"\n        >\n        </mat-checkbox>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"option\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Product variant</th>\n      <td mat-cell *matCellDef=\"let item\">\n        <mat-form-field class=\"product-variant-select\">\n          <mat-label>Variant</mat-label>\n          <mat-select [(value)]=\"item.options\" multiple>\n            <mat-select-trigger *ngIf=\"item.options?.length\">\n              <ng-container *ngFor=\"let option of item.options\">\n                <mat-icon>{{ option.icon }}</mat-icon>\n                {{ option.text }}\n              </ng-container>\n            </mat-select-trigger>\n            <mat-option\n              *ngFor=\"let option of item.availableOptions\"\n              [value]=\"option\"\n            >\n              <mat-icon>{{ option.icon }}</mat-icon>\n              {{ option.text }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedOrderColumns\"></tr>\n    <tr\n      mat-row\n      *matRowDef=\"let row; columns: displayedOrderColumns\"\n      (click)=\"onRowClick(row)\"\n      class=\"clickable\"\n    ></tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[4]\"></mat-paginator>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/orders-table/orders-table.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/orders-table/orders-table.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <mat-form-field class=\"w100\" appearance=\"outline\">\n    <mat-icon matPrefix>search</mat-icon>\n    <input\n      matInput\n      (keyup)=\"applyFilter($event.target.value)\"\n      placeholder=\"Filter by customer name and order id\"\n    />\n  </mat-form-field>\n\n  <table class=\"w100\" mat-table [dataSource]=\"dataSource\" matSort>\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>#</th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"id\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"customerName\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Customer</th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"customerName\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"created\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Created</th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"created\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"revenue\">\n      <th mat-header-cell *matHeaderCellDef>Revenue $</th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"revenue\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"cost\">\n      <th mat-header-cell *matHeaderCellDef>Cost $</th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"cost\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"price\">\n      <th mat-header-cell *matHeaderCellDef>Price $</th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"price\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"fulfillmentStage\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Fulfillment</th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"fulfillmentStage\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"amountOfProducts\">\n      <th mat-header-cell *matHeaderCellDef>\n        Amount Of Products\n      </th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"amountOfProducts\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"SKU\">\n      <th mat-header-cell *matHeaderCellDef>SKU</th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"SKU\") }}\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedOrderColumns\"></tr>\n    <tr\n      mat-row\n      *matRowDef=\"let row; columns: displayedOrderColumns\"\n      (click)=\"onRowClick(row)\"\n      class=\"clickable\"\n    ></tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"pageSizeOptions\"></mat-paginator>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/orders/orders.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/orders/orders.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"toolbar mat-elevation-z8\">\n  <mat-toolbar>\n    <span> Orders </span>\n    <span class=\"spacer\"> </span>\n    <button mat-raised-button color=\"primary\" (click)=\"openImportDialog()\">\n      Import orders\n    </button>\n    <button mat-raised-button>NA1</button>\n    <button mat-raised-button>NA2</button>\n  </mat-toolbar>\n</div>\n\n<div\n  class=\"mat-elevation-z8\"\n  style=\"padding: 16px 16px 0;\"\n  *ngIf=\"store.mainOrders.length\"\n>\n  <app-orders-table\n    [displayedOrderColumns]=\"displayedOrderColumns\"\n    [orders]=\"store.mainOrders\"\n    [pageSizeOptions]=\"[10, 30, 100]\"\n    (rowClick)=\"onRowClick($event)\"\n  ></app-orders-table>\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  max-width: 900px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhc2N1a2luc1xccHJvamVjdHNcXGltcG9ydC1vcmRlcnMvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4iLCIuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/spinner.service */ "./src/app/services/spinner.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(spinner) {
        this.spinner = spinner;
        this.isBusy = true;
        this.title = 'import-orders';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.isLoading.subscribe(function (busy) {
            if (busy === 0) {
                setTimeout(function () { return _this.isBusy = false; });
            }
            else if (busy === 1) {
                setTimeout(function () {
                    if (_this.spinner.isLoading.value > 0) {
                        _this.isBusy = true;
                    }
                    else {
                        _this.isBusy = false;
                    }
                }, 200);
            }
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-angular */ "./node_modules/mobx-angular/dist/mobx-angular.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/orders/orders.component */ "./src/app/components/orders/orders.component.ts");
/* harmony import */ var _store_order_store_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./store/order-store.service */ "./src/app/store/order-store.service.ts");
/* harmony import */ var _components_import_orders_dialog_import_orders_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/import-orders-dialog/import-orders-dialog.component */ "./src/app/components/import-orders-dialog/import-orders-dialog.component.ts");
/* harmony import */ var _components_orders_table_orders_table_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/orders-table/orders-table.component */ "./src/app/components/orders-table/orders-table.component.ts");
/* harmony import */ var _components_order_items_table_order_items_table_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/order-items-table/order-items-table.component */ "./src/app/components/order-items-table/order-items-table.component.ts");
/* harmony import */ var _components_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/order-details/order-details.component */ "./src/app/components/order-details/order-details.component.ts");
/* harmony import */ var _components_order_details_dialog_order_details_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/order-details-dialog/order-details-dialog.component */ "./src/app/components/order-details-dialog/order-details-dialog.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_in_memory_data_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/in-memory-data.service */ "./src/app/services/in-memory-data.service.ts");
/* harmony import */ var _services_spinner_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/spinner.service */ "./src/app/services/spinner.service.ts");
/* harmony import */ var _interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./interceptors/loader.interceptor */ "./src/app/interceptors/loader.interceptor.ts");
/* harmony import */ var _services_order_api_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/order-api.service */ "./src/app/services/order-api.service.ts");
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_orders_orders_component__WEBPACK_IMPORTED_MODULE_20__["OrdersComponent"],
                _components_import_orders_dialog_import_orders_dialog_component__WEBPACK_IMPORTED_MODULE_22__["ImportOrdersDialogComponent"],
                _components_orders_table_orders_table_component__WEBPACK_IMPORTED_MODULE_23__["OrdersTableComponent"],
                _components_order_items_table_order_items_table_component__WEBPACK_IMPORTED_MODULE_24__["OrderItemsTableComponent"],
                _components_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_25__["OrderDetailsComponent"],
                _components_order_details_dialog_order_details_dialog_component__WEBPACK_IMPORTED_MODULE_26__["OrderDetailsDialogComponent"]
            ],
            entryComponents: [
                _components_import_orders_dialog_import_orders_dialog_component__WEBPACK_IMPORTED_MODULE_22__["ImportOrdersDialogComponent"],
                _components_order_details_dialog_order_details_dialog_component__WEBPACK_IMPORTED_MODULE_26__["OrderDetailsDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                mobx_angular__WEBPACK_IMPORTED_MODULE_5__["MobxAngularModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__["HttpClientInMemoryWebApiModule"].forRoot(_services_in_memory_data_service__WEBPACK_IMPORTED_MODULE_28__["InMemoryDataService"], { dataEncapsulation: false, delay: 1500 })
            ],
            providers: [
                { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { hasBackdrop: true, maxWidth: '850px', minWidth: '850px' } },
                _services_spinner_service__WEBPACK_IMPORTED_MODULE_29__["SpinnerService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HTTP_INTERCEPTORS"], useClass: _interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_30__["LoaderInterceptor"], multi: true },
                _services_order_api_service__WEBPACK_IMPORTED_MODULE_31__["OrderApiService"],
                _store_order_store_service__WEBPACK_IMPORTED_MODULE_21__["OrderStoreService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/import-orders-dialog/import-orders-dialog.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/import-orders-dialog/import-orders-dialog.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-stepper-horizontal {\n  margin-top: 20px;\n}\n.mat-stepper-horizontal .button-bar {\n  text-align: right;\n}\n.mat-stepper-horizontal .button-bar button {\n  margin-left: 16px;\n}\n.mat-stepper-horizontal .step-content {\n  padding-bottom: 16px;\n  min-height: 420px;\n}\n.breadcrumb {\n  padding-left: 24px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbXBvcnQtb3JkZXJzLWRpYWxvZy9DOlxcVXNlcnNcXGFzY3VraW5zXFxwcm9qZWN0c1xcaW1wb3J0LW9yZGVycy9zcmNcXGFwcFxcY29tcG9uZW50c1xcaW1wb3J0LW9yZGVycy1kaWFsb2dcXGltcG9ydC1vcmRlcnMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ltcG9ydC1vcmRlcnMtZGlhbG9nL2ltcG9ydC1vcmRlcnMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjtBRENFO0VBQ0UsaUJBQUE7QUNDSjtBREFJO0VBQ0UsaUJBQUE7QUNFTjtBREVFO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtBQ0FKO0FESUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ltcG9ydC1vcmRlcnMtZGlhbG9nL2ltcG9ydC1vcmRlcnMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1zdGVwcGVyLWhvcml6b250YWwge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gIC5idXR0b24tYmFyIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3RlcC1jb250ZW50IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgbWluLWhlaWdodDogNDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnJlYWRjcnVtYiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiIsIi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIC5idXR0b24tYmFyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCAuYnV0dG9uLWJhciBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIC5zdGVwLWNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgbWluLWhlaWdodDogNDIwcHg7XG59XG5cbi5icmVhZGNydW1iIHtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_store_order_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/order-store.service */ "./src/app/store/order-store.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");





var ImportOrdersDialogComponent = /** @class */ (function () {
    function ImportOrdersDialogComponent(store, dialogRef) {
        this.store = store;
        this.dialogRef = dialogRef;
        this.displayedOrderColumns = ['id', 'customerName', 'amountOfProducts', 'price', 'SKU'];
    }
    ImportOrdersDialogComponent.prototype.onOrderRowClick = function (order) {
        this.store.setSelectedOrder(order);
        this.stepper.selected.completed = true;
        this.stepper.next();
    };
    ImportOrdersDialogComponent.prototype.onCancelClick = function () {
        this.dialogRef.close();
    };
    ImportOrdersDialogComponent.ctorParameters = function () { return [
        { type: src_app_store_order_store_service__WEBPACK_IMPORTED_MODULE_2__["OrderStoreService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepper"], { static: false })
    ], ImportOrdersDialogComponent.prototype, "stepper", void 0);
    ImportOrdersDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-import-orders-dialog',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./import-orders-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/import-orders-dialog/import-orders-dialog.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./import-orders-dialog.component.scss */ "./src/app/components/import-orders-dialog/import-orders-dialog.component.scss")).default]
        })
    ], ImportOrdersDialogComponent);
    return ImportOrdersDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/order-details-dialog/order-details-dialog.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/order-details-dialog/order-details-dialog.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding: 0 16px;\n}\n\n.button-bar {\n  text-align: right;\n  padding: 24px 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlci1kZXRhaWxzLWRpYWxvZy9DOlxcVXNlcnNcXGFzY3VraW5zXFxwcm9qZWN0c1xcaW1wb3J0LW9yZGVycy9zcmNcXGFwcFxcY29tcG9uZW50c1xcb3JkZXItZGV0YWlscy1kaWFsb2dcXG9yZGVyLWRldGFpbHMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL29yZGVyLWRldGFpbHMtZGlhbG9nL29yZGVyLWRldGFpbHMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vcmRlci1kZXRhaWxzLWRpYWxvZy9vcmRlci1kZXRhaWxzLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxufVxyXG5cclxuLmJ1dHRvbi1iYXIge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDI0cHggMTZweDtcclxufVxyXG4iLCIuY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuXG4uYnV0dG9uLWJhciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiAyNHB4IDE2cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/order-details-dialog/order-details-dialog.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/order-details-dialog/order-details-dialog.component.ts ***!
  \***********************************************************************************/
/*! exports provided: OrderDetailsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsDialogComponent", function() { return OrderDetailsDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var OrderDetailsDialogComponent = /** @class */ (function () {
    function OrderDetailsDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    OrderDetailsDialogComponent.prototype.onCancelClick = function () {
        this.dialogRef.close();
    };
    OrderDetailsDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
    ]; };
    OrderDetailsDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-details-dialog',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-details-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-details-dialog/order-details-dialog.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-details-dialog.component.scss */ "./src/app/components/order-details-dialog/order-details-dialog.component.scss")).default]
        })
    ], OrderDetailsDialogComponent);
    return OrderDetailsDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/order-details/order-details.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/order-details/order-details.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".two-column {\n  padding: 0 10px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n.two-column table {\n  width: 100%;\n  text-align: right;\n}\n.two-column table td,\n.two-column table th {\n  padding: 3px;\n}\n.two-column p {\n  font-weight: bold;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlci1kZXRhaWxzL0M6XFxVc2Vyc1xcYXNjdWtpbnNcXHByb2plY3RzXFxpbXBvcnQtb3JkZXJzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxvcmRlci1kZXRhaWxzXFxvcmRlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDQ0o7QURBSTs7RUFFRSxZQUFBO0FDRU47QURFRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR3by1jb2x1bW4ge1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuXHJcbiAgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHRkLFxyXG4gICAgdGgge1xyXG4gICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcbiIsIi50d28tY29sdW1uIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG59XG4udHdvLWNvbHVtbiB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi50d28tY29sdW1uIHRhYmxlIHRkLFxuLnR3by1jb2x1bW4gdGFibGUgdGgge1xuICBwYWRkaW5nOiAzcHg7XG59XG4udHdvLWNvbHVtbiBwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/order-details/order-details.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/order-details/order-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_store_order_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/order-store.service */ "./src/app/store/order-store.service.ts");



var OrderDetailsComponent = /** @class */ (function () {
    function OrderDetailsComponent(store) {
        this.store = store;
    }
    OrderDetailsComponent.ctorParameters = function () { return [
        { type: src_app_store_order_store_service__WEBPACK_IMPORTED_MODULE_2__["OrderStoreService"] }
    ]; };
    OrderDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-details',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-details/order-details.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-details.component.scss */ "./src/app/components/order-details/order-details.component.scss")).default]
        })
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/order-items-table/order-items-table.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/order-items-table/order-items-table.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-row:hover {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlci1pdGVtcy10YWJsZS9DOlxcVXNlcnNcXGFzY3VraW5zXFxwcm9qZWN0c1xcaW1wb3J0LW9yZGVycy9zcmNcXGFwcFxcY29tcG9uZW50c1xcb3JkZXItaXRlbXMtdGFibGVcXG9yZGVyLWl0ZW1zLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL29yZGVyLWl0ZW1zLXRhYmxlL29yZGVyLWl0ZW1zLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXItaXRlbXMtdGFibGUvb3JkZXItaXRlbXMtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXJvdzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxufVxyXG4iLCIubWF0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");





var OrderItemsTableComponent = /** @class */ (function () {
    function OrderItemsTableComponent() {
        this.displayedOrderColumns = ['name', 'option', 'SKU', 'amount', 'selected'];
        this.rowClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    OrderItemsTableComponent.prototype.getOrderItemCellValue = function (orderItem, cell) {
        switch (cell) {
            case 'selected':
                return orderItem[cell] ? 'selected' : 'not selected';
            case 'option':
                return orderItem[cell] ? orderItem[cell].text : 'not selected';
            default:
                return orderItem[cell];
        }
    };
    OrderItemsTableComponent.prototype.ngOnChanges = function () {
        if (this.dataSource) {
            this.dataSource.data = this.orderItems;
        }
    };
    OrderItemsTableComponent.prototype.onCheckboxChange = function ($event, orderItem) {
        orderItem.selected = $event.checked;
    };
    OrderItemsTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.orderItems);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    OrderItemsTableComponent.prototype.onRowClick = function (orderItem) {
        this.rowClick.emit(orderItem);
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
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-items-table.component.scss */ "./src/app/components/order-items-table/order-items-table.component.scss")).default]
        })
    ], OrderItemsTableComponent);
    return OrderItemsTableComponent;
}());



/***/ }),

/***/ "./src/app/components/orders-table/orders-table.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/orders-table/orders-table.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-row:hover {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n\ntd,\nth {\n  padding: 0 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlcnMtdGFibGUvQzpcXFVzZXJzXFxhc2N1a2luc1xccHJvamVjdHNcXGltcG9ydC1vcmRlcnMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG9yZGVycy10YWJsZVxcb3JkZXJzLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL29yZGVycy10YWJsZS9vcmRlcnMtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtBQ0NGOztBREVBOztFQUVFLDBCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL29yZGVycy10YWJsZS9vcmRlcnMtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXJvdzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxufVxyXG5cclxudGQsXHJcbnRoIHtcclxuICBwYWRkaW5nOiAwIDEwcHggIWltcG9ydGFudDtcclxufVxyXG4iLCIubWF0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG5cbnRkLFxudGgge1xuICBwYWRkaW5nOiAwIDEwcHggIWltcG9ydGFudDtcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");





var OrdersTableComponent = /** @class */ (function () {
    function OrdersTableComponent() {
        this.pageSizeOptions = [5];
        this.rowClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    OrdersTableComponent.prototype.addPlus = function (n) {
        if (n > 0) {
            return '+' + n;
        }
        else {
            return n;
        }
    };
    OrdersTableComponent.prototype.currencyToString = function (amount) {
        var s = String(amount);
        return s.substring(0, s.length - 2) + '.' + s.substring(s.length - 2);
    };
    OrdersTableComponent.prototype.getOrderCellValue = function (order, cell) {
        var sum;
        var SKUs;
        var dateOptions = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        switch (cell) {
            case 'created':
                return new Date(order[cell]).toLocaleDateString('en-US', dateOptions);
            case 'amountOfProducts':
                sum = 0;
                order.orderItems.forEach(function (i) { return sum += i.amount; });
                return sum;
            case 'revenue':
            case 'cost':
            case 'price':
                sum = 0;
                var items = order.orderItems.filter(function (i) { return i.selected; });
                items.forEach(function (i) { return sum += i[cell] * i.amount; });
                return this.currencyToString(this.addPlus(sum));
            case 'SKU':
                SKUs = [];
                order.orderItems.forEach(function (i) { return SKUs.push(i.SKU); });
                if (SKUs.length > 3) {
                    return SKUs.slice(0, 2).join(', ') + (", (+" + (SKUs.length - 2) + ")");
                }
                else {
                    return SKUs.join(', ');
                }
            default:
                return order[cell];
        }
    };
    OrdersTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.orders);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    OrdersTableComponent.prototype.ngOnChanges = function () {
        if (this.dataSource) {
            this.dataSource.data = this.orders;
        }
    };
    OrdersTableComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    OrdersTableComponent.prototype.onRowClick = function (order) {
        this.rowClick.emit(order);
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
    return OrdersTableComponent;
}());



/***/ }),

/***/ "./src/app/components/orders/orders.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/orders/orders.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".spacer {\n  flex: 1 1 auto;\n}\n\nbutton {\n  margin-left: 16px;\n}\n\n.toolbar {\n  margin: 30px 0 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlcnMvQzpcXFVzZXJzXFxhc2N1a2luc1xccHJvamVjdHNcXGltcG9ydC1vcmRlcnMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG9yZGVyc1xcb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG59XHJcblxyXG4udG9vbGJhciB7XHJcbiAgbWFyZ2luOiAzMHB4IDAgNDBweDtcclxufVxyXG4iLCIuc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuXG4udG9vbGJhciB7XG4gIG1hcmdpbjogMzBweCAwIDQwcHg7XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_store_order_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/order-store.service */ "./src/app/store/order-store.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _import_orders_dialog_import_orders_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../import-orders-dialog/import-orders-dialog.component */ "./src/app/components/import-orders-dialog/import-orders-dialog.component.ts");
/* harmony import */ var _order_details_dialog_order_details_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order-details-dialog/order-details-dialog.component */ "./src/app/components/order-details-dialog/order-details-dialog.component.ts");






var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(dialog, store) {
        this.dialog = dialog;
        this.store = store;
        this.displayedOrderColumns = ['id', 'customerName', 'created', 'revenue', 'cost', 'price', 'fulfillmentStage'];
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.store.initMainOrders();
    };
    OrdersComponent.prototype.openImportDialog = function () {
        var _this = this;
        this.store.initImportableOrders();
        var dialogRef = this.dialog.open(_import_orders_dialog_import_orders_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ImportOrdersDialogComponent"]);
        dialogRef.afterClosed().subscribe(function (order) {
            _this.store.setSelectedOrder(order);
            if (order) {
                _this.store.importSelectedOrder().subscribe(function () {
                    _this.store.setSelectedOrder(undefined);
                });
            }
        });
    };
    OrdersComponent.prototype.onRowClick = function (order) {
        var _this = this;
        this.store.setSelectedOrder(order);
        var dialogRef = this.dialog.open(_order_details_dialog_order_details_dialog_component__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsDialogComponent"]);
        dialogRef.afterClosed().subscribe(function () {
            _this.store.setSelectedOrder(undefined);
        });
    };
    OrdersComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: src_app_store_order_store_service__WEBPACK_IMPORTED_MODULE_2__["OrderStoreService"] }
    ]; };
    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/orders/orders.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./orders.component.scss */ "./src/app/components/orders/orders.component.scss")).default]
        })
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/interceptors/loader.interceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/interceptors/loader.interceptor.ts ***!
  \****************************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/spinner.service */ "./src/app/services/spinner.service.ts");





var LoaderInterceptor = /** @class */ (function () {
    function LoaderInterceptor(loaderService) {
        this.loaderService = loaderService;
        this.requests = [];
    }
    LoaderInterceptor.prototype.removeRequest = function (req) {
        var i = this.requests.indexOf(req);
        if (i >= 0) {
            this.requests.splice(i, 1);
        }
        if (this.requests.length) {
            this.loaderService.isLoading.next(1);
        }
        else {
            this.loaderService.isLoading.next(0);
        }
    };
    LoaderInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        this.requests.push(req);
        this.loaderService.isLoading.next(1);
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var subscription = next.handle(req)
                .subscribe(function (event) {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                    _this.removeRequest(req);
                    observer.next(event);
                }
            }, function (err) {
                _this.removeRequest(req);
                observer.error(err);
            }, function () {
                _this.removeRequest(req);
                observer.complete();
            });
            // remove request from queue when cancelled
            return function () {
                _this.removeRequest(req);
                subscription.unsubscribe();
            };
        });
    };
    LoaderInterceptor.ctorParameters = function () { return [
        { type: _services_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"] }
    ]; };
    LoaderInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LoaderInterceptor);
    return LoaderInterceptor;
}());



/***/ }),

/***/ "./src/app/services/in-memory-data.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/in-memory-data.service.ts ***!
  \****************************************************/
/*! exports provided: pickRandomly, randomArray, randomAddress, randomCustomer, randomProductOption, randomOrderItem, randomDate, randomOrder, InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickRandomly", function() { return pickRandomly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomArray", function() { return randomArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomAddress", function() { return randomAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomCustomer", function() { return randomCustomer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomProductOption", function() { return randomProductOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomOrderItem", function() { return randomOrderItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomDate", function() { return randomDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomOrder", function() { return randomOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


function pickRandomly(arr) {
    if (Array.isArray(arr) && arr.length) {
        var choice = Math.floor(Math.random() * arr.length - 0.0000001);
        return arr[choice];
    }
    else {
        return null;
    }
}
function randomArray(approxLength, getItem) {
    var length = Math.round(approxLength / 2 + Math.random() * approxLength);
    var array = [];
    var _loop_1 = function (i) {
        var item = getItem();
        if (item.id) {
            var foundIndex = array.findIndex(function (e) { return e.id === item.id; });
            if (foundIndex >= 0) {
                array[foundIndex] = item;
            }
            else {
                array.push(item);
            }
        }
        else {
            array.push(item);
        }
    };
    for (var i = 0; i < length; i++) {
        _loop_1(i);
    }
    return array;
}
function randomAddress() {
    var address = {
        street: pickRandomly(['Brivibas iela', 'Agatan', 'Beehive street', 'Mazkupenas iela', 'Calle Nevada']),
        city: pickRandomly(['Riga', 'New-York', 'Reno', 'Paris', 'Ventspils', 'Moscow']),
        zip: String(Math.floor(Math.random() * 1000000)),
        state: pickRandomly(['Grkalnas pagasts', 'LA', 'NY', 'CA', 'TX']),
        country: pickRandomly(['USA', 'France', 'Italy', 'Latvia'])
    };
    return address;
}
function randomCustomer() {
    var names = ['John', 'Doe', 'Patrick', 'Linda', 'Bill', 'Peter', 'Ivan', 'Jackson', 'Barbara', 'Ieva', 'Norton', 'Donald'];
    var customer = {
        name: pickRandomly(names) + ' ' + pickRandomly(names),
        address: randomAddress()
    };
    return customer;
}
function randomProductOption() {
    var productOption = {
        icon: pickRandomly(['pregnant_woman', 'sports_handball', 'android', 'build', 'eco', 'rowing', 'pets', 'wc', 'house', 'bathtub',
            'casino', 'spa', 'sports_golf']),
        text: pickRandomly(['Heavy Wool', 'Cotton', 'Cotton', 'Light', 'Bold', 'Wide', 'Narrow', 'Slim', 'Oversize', 'Small', 'Large',
            'Red', 'Green', 'Blue', 'Yellow', 'Violet', 'Black', 'White', 'Junior', 'Senior', 'Gift-boxed', 'Outlet'])
    };
    return productOption;
}
function randomOrderItem() {
    var cost = -Math.floor(Math.random() * 4000);
    var price = -Math.floor(cost - cost * 0.5 * Math.random());
    var orderItem = {
        productId: String(Math.floor(Math.random() * 1000000)),
        name: pickRandomly(['Christmas Dog Socks', 'Christmas Cat Socks', 'Hat', 'Shirt', 'T-shirt', 'Gloves', 'Jacket', 'Jeans']),
        SKU: pickRandomly(['SOCK_101_BIG_1', 'SPOON_123_BIG_1', 'ITEM_99_HZ_5',
            'OTHER_' + (Math.floor(Math.random() * 1000)), 'ITEM_' + (Math.floor(Math.random() * 1000)),
            'WEAR_' + (Math.floor(Math.random() * 1000))]),
        amount: Math.floor(1 + Math.random() * 12),
        revenue: -(price + cost),
        cost: cost,
        price: price,
        options: [],
        selected: true,
        availableOptions: randomArray(4, randomProductOption)
    };
    return orderItem;
}
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
function randomOrder() {
    var customer = randomCustomer();
    var order = {
        id: String(Math.floor(Math.random() * 999999)).padStart(6, '0'),
        created: randomDate(new Date('2019-01-01'), new Date('2020-01-01')),
        customer: customer,
        customerName: customer.name,
        fulfillmentStage: pickRandomly(['In production', 'Quality Control']),
        orderItems: randomArray(2, randomOrderItem)
    };
    return order;
}
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var mainOrders = randomArray(4, randomOrder);
        var importableOrders = randomArray(5000, randomOrder);
        importableOrders.forEach(function (o) { return o.fulfillmentStage = 'Incoming'; });
        return { mainOrders: mainOrders, importableOrders: importableOrders };
    };
    /**
     * Apply query/search parameters as a filter over the collection
     * This impl only supports RegExp queries on string properties of the collection
     * ANDs the conditions together
     */
    InMemoryDataService.prototype.applyQuery = function (collection, query) {
        // extract filtering conditions - {propertyName, RegExps) - from query/search parameters
        var conditions = [];
        var caseSensitive = 'i'; // this.config.caseSensitiveSearch ? undefined : 'i';
        query.forEach(function (value, name) {
            value.forEach(function (v) { return conditions.push({ name: name, rx: new RegExp(decodeURI(v), caseSensitive) }); });
        });
        var len = conditions.length;
        if (!len) {
            return collection;
        }
        // AND the RegExp conditions
        return collection.filter(function (row) {
            var ok = true;
            var i = len;
            while (ok && i) {
                i -= 1;
                var cond = conditions[i];
                ok = cond.rx.test(row[cond.name]);
            }
            return ok;
        });
    };
    InMemoryDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], InMemoryDataService);
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/services/order-api.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/order-api.service.ts ***!
  \***********************************************/
/*! exports provided: OrderApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderApiService", function() { return OrderApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var cudOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
var OrderApiService = /** @class */ (function () {
    function OrderApiService(http) {
        this.http = http;
        this.apiUrlMainOrders = 'api/mainOrders';
        this.apiUrlImportableOrders = 'api/importableOrders';
    }
    OrderApiService.prototype.getMainOrders = function () {
        return this.http.get(this.apiUrlMainOrders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    OrderApiService.prototype.getImportableOrders = function () {
        return this.http.get(this.apiUrlImportableOrders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    OrderApiService.prototype.deleteImportableOrder = function (order) {
        var url = this.apiUrlImportableOrders + "/" + order.id;
        return this.http.delete(url, cudOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    OrderApiService.prototype.postToMainOrders = function (order) {
        return this.http.post(this.apiUrlMainOrders, order, cudOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    // In a real world app, we might send the error to remote logging infrastructure
    OrderApiService.prototype.handleError = function (error) {
        console.error(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    OrderApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    OrderApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], OrderApiService);
    return OrderApiService;
}());



/***/ }),

/***/ "./src/app/services/spinner.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/spinner.service.ts ***!
  \*********************************************/
/*! exports provided: SpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerService", function() { return SpinnerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SpinnerService = /** @class */ (function () {
    function SpinnerService() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
    }
    SpinnerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SpinnerService);
    return SpinnerService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-angular */ "./node_modules/mobx-angular/dist/mobx-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_order_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/order-api.service */ "./src/app/services/order-api.service.ts");





var OrderStoreService = /** @class */ (function () {
    function OrderStoreService(orderApi) {
        this.orderApi = orderApi;
        this.mainOrders = [];
        this.importableOrders = [];
    }
    Object.defineProperty(OrderStoreService.prototype, "selectedOrderSelectedItems", {
        // Computed
        get: function () {
            if (this.selectedOrder) {
                return this.selectedOrder.orderItems.filter(function (i) { return i.selected; });
            }
            else {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderStoreService.prototype, "selectedOrderCost", {
        get: function () {
            var sum = 0;
            this.selectedOrderSelectedItems.forEach(function (i) { return sum += i.cost * i.amount; });
            return sum;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderStoreService.prototype, "selectedOrderPrice", {
        get: function () {
            var sum = 0;
            this.selectedOrderSelectedItems.forEach(function (i) { return sum += i.price * i.amount; });
            return sum;
        },
        enumerable: true,
        configurable: true
    });
    // Actions
    OrderStoreService.prototype.setSelectedOrder = function (order) {
        this.selectedOrder = order;
    };
    // The app might benefit from unidirectional data flow from API to store in case if data amount is not too large
    OrderStoreService.prototype.initMainOrders = function () {
        var _this = this;
        this.orderApi.getMainOrders().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (orders) { return _this.mainOrders = orders; })).subscribe();
    };
    OrderStoreService.prototype.initImportableOrders = function () {
        var _this = this;
        this.orderApi.getImportableOrders().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (orders) { return _this.importableOrders = orders; })).subscribe();
    };
    OrderStoreService.prototype.deleteFromImportableOrders = function (order) {
        var _this = this;
        return this.orderApi.deleteImportableOrder(order).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.importableOrders = _this.importableOrders.filter(function (o) { return o.id !== order.id; }); }));
    };
    OrderStoreService.prototype.addToMainOrders = function (order) {
        var _this = this;
        return this.orderApi.postToMainOrders(order)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.mainOrders = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.mainOrders, [order]); }));
    };
    OrderStoreService.prototype.importSelectedOrder = function () {
        var _this = this;
        if (this.selectedOrderSelectedItems.length) {
            this.selectedOrder.fulfillmentStage = 'Imported';
        }
        else {
            this.selectedOrder.fulfillmentStage = 'Cancelled';
        }
        return this.addToMainOrders(this.selectedOrder).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function () { return _this.deleteFromImportableOrders(_this.selectedOrder); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.initMainOrders(); }));
    };
    OrderStoreService.ctorParameters = function () { return [
        { type: _services_order_api_service__WEBPACK_IMPORTED_MODULE_4__["OrderApiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], OrderStoreService.prototype, "mainOrders", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], OrderStoreService.prototype, "importableOrders", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], OrderStoreService.prototype, "selectedOrder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["computed"]
    ], OrderStoreService.prototype, "selectedOrderSelectedItems", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["computed"]
    ], OrderStoreService.prototype, "selectedOrderCost", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["computed"]
    ], OrderStoreService.prototype, "selectedOrderPrice", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
    ], OrderStoreService.prototype, "setSelectedOrder", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
    ], OrderStoreService.prototype, "initMainOrders", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
    ], OrderStoreService.prototype, "initImportableOrders", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
    ], OrderStoreService.prototype, "deleteFromImportableOrders", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
    ], OrderStoreService.prototype, "addToMainOrders", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
    ], OrderStoreService.prototype, "importSelectedOrder", null);
    OrderStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], OrderStoreService);
    return OrderStoreService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.error(err); });


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
//# sourceMappingURL=main.js.map