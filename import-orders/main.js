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
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n  <span> Import Order </span>\n</mat-toolbar>\n\n<mat-horizontal-stepper [@.disabled]=\"true\" [linear]=\"true\" *mobxAutorun>\n  <mat-step [completed]=\"store.selectedOrder\">\n    <ng-template matStepLabel>Find Order</ng-template>\n    <div class=\"step-content\">\n      <app-orders-table\n        [displayedOrderColumns]=\"displayedOrderColumns\"\n        [ordersType]=\"'Importable'\"\n        (rowClick)=\"onOrderRowClick($event)\"\n      >\n      </app-orders-table>\n    </div>\n    <div class=\"button-bar\">\n      <button mat-raised-button (click)=\"onCancelClick()\">Cancel</button>\n    </div>\n  </mat-step>\n\n  <mat-step>\n    <ng-template matStepLabel>Prepare Products</ng-template>\n    <div class=\"step-content\">\n      <div *ngIf=\"store.selectedOrder\" class=\"breadcrumb\">\n        <span class=\"link\" (click)=\"stepper.reset()\">My Orders</span> | Order\n        {{ store.selectedOrder?.id }}\n      </div>\n      <app-order-items-table\n        *ngIf=\"store.selectedOrder?.orderItems\"\n        [orderItems]=\"store.selectedOrder.orderItems\"\n      ></app-order-items-table>\n    </div>\n    <div class=\"button-bar\">\n      <button mat-raised-button matStepperPrevious>Previous</button>\n      <button mat-raised-button matStepperNext>Next</button>\n      <button mat-raised-button (click)=\"onCancelClick()\">Cancel</button>\n    </div>\n  </mat-step>\n\n  <mat-step>\n    <ng-template matStepLabel>Confirm Order</ng-template>\n    <div class=\"step-content\">\n      <app-order-details></app-order-details>\n    </div>\n    <div class=\"button-bar\">\n      <button mat-raised-button matStepperPrevious>Previous</button>\n      <button mat-raised-button [mat-dialog-close]=\"store.selectedOrder\">\n        Confirm and Ship\n      </button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <mat-form-field class=\"w100\" appearance=\"outline\">\n    <mat-icon matPrefix>search</mat-icon>\n    <input\n      matInput\n      (keyup)=\"applyFilter($event.target.value)\"\n      placeholder=\"Filter by Customer name, Id, Date, Fulfillment stage\"\n    />\n  </mat-form-field>\n\n  <div style=\"position: relative\">\n    <div\n      *ngIf=\"ordersFilter && !ordersLength\"\n      class=\"warning-over-table mat-elevation-z2\"\n    >\n      <h2>\n        No matching records found\n      </h2>\n    </div>\n  </div>\n\n  <table class=\"w100\" mat-table [dataSource]=\"dataSource\" matSort>\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>#</th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"id\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"customerName\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Customer</th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"customerName\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"created\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Created</th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"created\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"revenue\">\n      <th mat-header-cell *matHeaderCellDef>Revenue $</th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"revenue\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"cost\">\n      <th mat-header-cell *matHeaderCellDef>Cost $</th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"cost\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"price\">\n      <th mat-header-cell *matHeaderCellDef>Price $</th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"price\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"fulfillmentStage\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Fulfillment</th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"fulfillmentStage\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"amountOfProducts\">\n      <th mat-header-cell *matHeaderCellDef>\n        Amount Of Products\n      </th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"amountOfProducts\") }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"SKU\">\n      <th mat-header-cell *matHeaderCellDef>SKU</th>\n      <td mat-cell *matCellDef=\"let order\">\n        {{ getOrderCellValue(order, \"SKU\") }}\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedOrderColumns\"></tr>\n    <tr\n      mat-row\n      *matRowDef=\"let row; columns: displayedOrderColumns\"\n      (click)=\"onRowClick(row)\"\n      class=\"clickable\"\n    ></tr>\n  </table>\n\n  <mat-paginator\n    [length]=\"ordersLength\"\n    [pageSizeOptions]=\"pageSizeOptions\"\n  ></mat-paginator>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/orders/orders.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/orders/orders.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"toolbar mat-elevation-z8\">\n  <mat-toolbar>\n    <span> Orders </span>\n    <span class=\"spacer\"> </span>\n    <button mat-raised-button color=\"primary\" (click)=\"openImportDialog()\">\n      Import orders\n    </button>\n    <button mat-raised-button>NA1</button>\n    <button mat-raised-button>NA2</button>\n  </mat-toolbar>\n</div>\n\n<div class=\"mat-elevation-z8\" style=\"padding: 16px 16px 0;\">\n  <app-orders-table\n    [displayedOrderColumns]=\"displayedOrderColumns\"\n    [ordersType]=\"'Main'\"\n    [pageSizeOptions]=\"[10, 30, 100]\"\n    (rowClick)=\"onRowClick($event)\"\n  ></app-orders-table>\n</div>\n");

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
        this.subscription = this.spinner.isLoading.subscribe(function (busy) {
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
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
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
/* harmony import */ var _services_external_in_memory_web_api_http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/external/in-memory-web-api/http-client-in-memory-web-api.module */ "./src/app/services/external/in-memory-web-api/http-client-in-memory-web-api.module.ts");
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
                _services_external_in_memory_web_api_http_client_in_memory_web_api_module__WEBPACK_IMPORTED_MODULE_6__["HttpClientInMemoryWebApiModule"].forRoot(_services_in_memory_data_service__WEBPACK_IMPORTED_MODULE_28__["InMemoryDataService"], { dataEncapsulation: false, delay: 1500 })
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
/* harmony default export */ __webpack_exports__["default"] = (".mat-row:hover {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n\ntd,\nth {\n  padding: 0 10px !important;\n}\n\n.warning-over-table {\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  width: 520px;\n  text-align: center;\n  background: rgba(0, 0, 0, 0.2);\n  padding: 19px 0;\n  color: darkslategray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlcnMtdGFibGUvQzpcXFVzZXJzXFxhc2N1a2luc1xccHJvamVjdHNcXGltcG9ydC1vcmRlcnMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG9yZGVycy10YWJsZVxcb3JkZXJzLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL29yZGVycy10YWJsZS9vcmRlcnMtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtBQ0NGOztBREVBOztFQUVFLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXJzLXRhYmxlL29yZGVycy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtcm93OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG59XHJcblxyXG50ZCxcclxudGgge1xyXG4gIHBhZGRpbmc6IDAgMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2FybmluZy1vdmVyLXRhYmxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xyXG4gIHdpZHRoOiA1MjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHBhZGRpbmc6IDE5cHggMDtcclxuICBjb2xvcjogZGFya3NsYXRlZ3JheTtcclxufVxyXG4iLCIubWF0LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG5cbnRkLFxudGgge1xuICBwYWRkaW5nOiAwIDEwcHggIWltcG9ydGFudDtcbn1cblxuLndhcm5pbmctb3Zlci10YWJsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgd2lkdGg6IDUyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgcGFkZGluZzogMTlweCAwO1xuICBjb2xvcjogZGFya3NsYXRlZ3JheTtcbn0iXX0= */");

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_store_order_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/store/order-store.service */ "./src/app/store/order-store.service.ts");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");









var OrdersTableComponent = /** @class */ (function () {
    function OrdersTableComponent(store) {
        this.store = store;
        this.pageSizeOptions = [5];
        this.rowClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ordersLength = 0;
        this.ordersFilter = '';
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.filtersUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    OrdersTableComponent.prototype.addPlus = function (n) {
        if (n > 0) {
            return '+' + String(n).padStart(3, '0');
        }
        else if (n < 0) {
            return '-' + String(-n).padStart(3, '0');
        }
        else {
            return '000';
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
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
    };
    OrdersTableComponent.prototype.ngOnChanges = function () {
    };
    OrdersTableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.subscription.add(this.sort.sortChange.subscribe(function () { return _this.paginator.firstPage(); }));
        this.subscription.add(this.filtersUpdate.subscribe(function () { return _this.paginator.firstPage(); }));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.sort.sortChange, this.paginator.page, this.filtersUpdate)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
            var sortString;
            if (_this.sort.active && _this.sort.direction) {
                sortString = (_this.sort.direction === 'desc' ? '-' : '') + _this.sort.active;
            }
            if (_this.ordersType === 'Main') {
                return _this.store.getMainOrders(_this.ordersFilter, sortString, _this.paginator.pageIndex * _this.paginator.pageSize, _this.paginator.pageSize);
            }
            else {
                return _this.store.getImportableOrders(_this.ordersFilter, sortString, _this.paginator.pageIndex * _this.paginator.pageSize, _this.paginator.pageSize);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) {
            _this.ordersLength = data.totalCount;
            return data.items;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
        })).subscribe(function (orders) {
            _this.dataSource.data = orders;
        });
    };
    OrdersTableComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    OrdersTableComponent.prototype.applyFilter = function (filterValue) {
        this.ordersFilter = filterValue.trim().toLowerCase();
        this.filtersUpdate.next();
    };
    OrdersTableComponent.prototype.onRowClick = function (order) {
        this.rowClick.emit(order);
    };
    OrdersTableComponent.ctorParameters = function () { return [
        { type: src_app_store_order_store_service__WEBPACK_IMPORTED_MODULE_7__["OrderStoreService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OrdersTableComponent.prototype, "displayedOrderColumns", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OrdersTableComponent.prototype, "ordersType", void 0);
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx__WEBPACK_IMPORTED_MODULE_8__["observable"]
    ], OrdersTableComponent.prototype, "ordersLength", void 0);
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
/* harmony default export */ __webpack_exports__["default"] = (".spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\nbutton {\n  margin-left: 16px;\n}\n\n.toolbar {\n  margin: 30px 0 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlcnMvQzpcXFVzZXJzXFxhc2N1a2luc1xccHJvamVjdHNcXGltcG9ydC1vcmRlcnMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG9yZGVyc1xcb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtVQUFBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbn1cclxuXHJcbi50b29sYmFyIHtcclxuICBtYXJnaW46IDMwcHggMCA0MHB4O1xyXG59XHJcbiIsIi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG5cbi50b29sYmFyIHtcbiAgbWFyZ2luOiAzMHB4IDAgNDBweDtcbn0iXX0= */");

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
/* harmony import */ var _orders_table_orders_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../orders-table/orders-table.component */ "./src/app/components/orders-table/orders-table.component.ts");







var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(dialog, store) {
        this.dialog = dialog;
        this.store = store;
        this.displayedOrderColumns = ['id', 'customerName', 'created', 'revenue', 'cost', 'price', 'fulfillmentStage'];
    }
    OrdersComponent.prototype.ngOnInit = function () { };
    OrdersComponent.prototype.openImportDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_import_orders_dialog_import_orders_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ImportOrdersDialogComponent"]);
        dialogRef.afterClosed().subscribe(function (order) {
            _this.store.setSelectedOrder(order);
            if (order) {
                _this.store.importSelectedOrder().subscribe(function () {
                    _this.store.setSelectedOrder(undefined);
                    _this.ordersTable.filtersUpdate.next(order);
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_orders_table_orders_table_component__WEBPACK_IMPORTED_MODULE_6__["OrdersTableComponent"], { static: true })
    ], OrdersComponent.prototype, "ordersTable", void 0);
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

/***/ "./src/app/services/external/in-memory-web-api/backend.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/services/external/in-memory-web-api/backend.service.ts ***!
  \************************************************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_status_codes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-status-codes */ "./src/app/services/external/in-memory-web-api/http-status-codes.ts");
/* harmony import */ var _delay_response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delay-response */ "./src/app/services/external/in-memory-web-api/delay-response.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interfaces */ "./src/app/services/external/in-memory-web-api/interfaces.ts");






/**
 * Base class for in-memory web api back-ends
 * Simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected `InMemoryDbService` service.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 */
var BackendService = /** @class */ (function () {
    function BackendService(inMemDbService, config) {
        if (config === void 0) { config = {}; }
        this.inMemDbService = inMemDbService;
        this.config = new _interfaces__WEBPACK_IMPORTED_MODULE_5__["InMemoryBackendConfig"]();
        this.requestInfoUtils = this.getRequestInfoUtils();
        var loc = this.getLocation('/');
        this.config.host = loc.host; // default to app web server host
        this.config.rootPath = loc.path; // default to path when app is served (e.g.'/')
        Object.assign(this.config, config);
    }
    Object.defineProperty(BackendService.prototype, "dbReady", {
        ////  protected /////
        get: function () {
            if (!this.dbReadySubject) {
                // first time the service is called.
                this.dbReadySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
                this.resetDb();
            }
            return this.dbReadySubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(function (r) { return r; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Process Request and return an Observable of Http Response object
     * in the manner of a RESTy web api.
     *
     * Expect URI pattern in the form :base/:collectionName/:id?
     * Examples:
     *   // for store with a 'customers' collection
     *   GET api/customers          // all customers
     *   GET api/customers/42       // the character with id=42
     *   GET api/customers?name=^j  // 'j' is a regex; returns customers whose name starts with 'j' or 'J'
     *   GET api/customers.json/42  // ignores the ".json"
     *
     * Also accepts direct commands to the service in which the last segment of the apiBase is the word "commands"
     * Examples:
     *     POST commands/resetDb,
     *     GET/POST commands/config - get or (re)set the config
     *
     *   HTTP overrides:
     *     If the injected inMemDbService defines an HTTP method (lowercase)
     *     The request is forwarded to that method as in
     *     `inMemDbService.get(requestInfo)`
     *     which must return either an Observable of the response type
     *     for this http library or null|undefined (which means "keep processing").
     */
    BackendService.prototype.handleRequest = function (req) {
        var _this = this;
        //  handle the request when there is an in-memory database
        return this.dbReady.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function () { return _this.handleRequest_(req); }));
    };
    BackendService.prototype.handleRequest_ = function (req) {
        var _this = this;
        var url = req.urlWithParams ? req.urlWithParams : req.url;
        // Try override parser
        // If no override parser or it returns nothing, use default parser
        var parser = this.bind('parseRequestUrl');
        var parsed = (parser && parser(url, this.requestInfoUtils)) ||
            this.parseRequestUrl(url);
        var collectionName = parsed.collectionName;
        var collection = this.db[collectionName];
        var reqInfo = {
            req: req,
            apiBase: parsed.apiBase,
            collection: collection,
            collectionName: collectionName,
            headers: this.createHeaders({ 'Content-Type': 'application/json' }),
            id: this.parseId(collection, collectionName, parsed.id),
            method: this.getRequestMethod(req),
            query: parsed.query,
            resourceUrl: parsed.resourceUrl,
            url: url,
            utils: this.requestInfoUtils
        };
        var resOptions;
        if (/commands\/?$/i.test(reqInfo.apiBase)) {
            return this.commands(reqInfo);
        }
        var methodInterceptor = this.bind(reqInfo.method);
        if (methodInterceptor) {
            // InMemoryDbService intercepts this HTTP method.
            // if interceptor produced a response, return it.
            // else InMemoryDbService chose not to intercept; continue processing.
            var interceptorResponse = methodInterceptor(reqInfo);
            if (interceptorResponse) {
                return interceptorResponse;
            }
            ;
        }
        if (this.db[collectionName]) {
            // request is for a known collection of the InMemoryDbService
            return this.createResponse$(function () { return _this.collectionHandler(reqInfo); });
        }
        if (this.config.passThruUnknownUrl) {
            // unknown collection; pass request thru to a "real" backend.
            return this.getPassThruBackend().handle(req);
        }
        // 404 - can't handle this request
        resOptions = this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].NOT_FOUND, "Collection '" + collectionName + "' not found");
        return this.createResponse$(function () { return resOptions; });
    };
    /**
     * Add configured delay to response observable unless delay === 0
     */
    BackendService.prototype.addDelay = function (response) {
        var d = this.config.delay;
        return d === 0 ? response : Object(_delay_response__WEBPACK_IMPORTED_MODULE_4__["delayResponse"])(response, d || 500);
    };
    /**
     * Apply query/search parameters as a filter over the collection
     * This impl only supports RegExp queries on string properties of the collection
     * ANDs the conditions together
     */
    BackendService.prototype.applyQuery = function (collection, query) {
        // extract filtering conditions - {propertyName, RegExps) - from query/search parameters
        var conditions = [];
        var caseSensitive = this.config.caseSensitiveSearch ? undefined : 'i';
        var resultCollection = [];
        var filter = '';
        var orderBy = '';
        var startAt = 0;
        var limit = 0;
        var totalCount;
        // TODO
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // !!! Would require refactoring before commiting this functionality to actual Angular repository.     !!!
        // !!! Implementation of totalCount breaks backward compatability                                      !!!
        // !!! The method is too long                                                                          !!!
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        query.forEach(function (value, name) {
            value.forEach(function (v) {
                switch (name) {
                    case '$q':
                        filter = decodeURI(v);
                        break;
                    case '$orderBy':
                        orderBy = decodeURI(v);
                        break;
                    case '$startAt':
                        startAt = Number(v);
                        break;
                    case '$limit':
                        limit = Number(v);
                        break;
                    default:
                        conditions.push({ name: name, rx: new RegExp(decodeURI(v), caseSensitive) });
                        break;
                }
            });
        });
        resultCollection = collection;
        var conditionsLen = conditions.length;
        if (conditionsLen) {
            // AND the RegExp conditions
            resultCollection = resultCollection.filter(function (row) {
                var ok = true;
                var i = conditionsLen;
                while (ok && i) {
                    i -= 1;
                    var cond = conditions[i];
                    ok = cond.rx.test(row[cond.name]);
                }
                return ok;
            });
        }
        if (filter) {
            resultCollection = resultCollection.filter(function (row) {
                for (var key in row) {
                    if (row.hasOwnProperty(key)) {
                        var cellType = typeof row[key];
                        if (cellType === 'number') {
                            if (filter === row[key].toString()) {
                                return true;
                            }
                        }
                        else if (cellType === 'string') {
                            if (row[key].toLowerCase().includes(filter)) {
                                return true;
                            }
                        }
                        else if (cellType === 'object') {
                            if (row[key] && row[key].toISOString) {
                                if (row[key].toISOString().includes(filter)) {
                                    return true;
                                }
                            }
                        }
                    }
                }
                return false;
            });
        }
        if (orderBy) {
            var direction_1;
            var key_1;
            if (orderBy.startsWith('-')) {
                direction_1 = -1;
                key_1 = orderBy.substring(1);
            }
            else {
                direction_1 = 1;
                key_1 = orderBy;
            }
            if (resultCollection.length) {
                var cellValue = resultCollection[0][key_1];
                var cellType = typeof cellValue;
                var compareFn = void 0;
                if (cellType === 'number') {
                    compareFn = function (a, b) { return (a[key_1] - b[key_1]) * direction_1; };
                }
                else if (cellType === 'string') {
                    compareFn = function (a, b) {
                        if (a[key_1] < b[key_1]) {
                            return direction_1 * -1;
                        }
                        else if (a[key_1] > b[key_1]) {
                            return direction_1 * 1;
                        }
                        else {
                            return 0;
                        }
                    };
                }
                else if (cellType === 'object' && cellValue.toISOString) {
                    compareFn = function (a, b) {
                        if (a[key_1].toISOString && b[key_1].toISOString) {
                            if (a[key_1].toISOString() < b[key_1].toISOString()) {
                                return direction_1 * -1;
                            }
                            else if (a[key_1].toISOString() > b[key_1].toISOString()) {
                                return direction_1 * 1;
                            }
                            else {
                                return 0;
                            }
                        }
                        else {
                            return 0;
                        }
                    };
                }
                else {
                    compareFn = undefined;
                }
                resultCollection = resultCollection.sort(compareFn);
            }
        }
        totalCount = resultCollection.length;
        if (limit) {
            resultCollection = resultCollection.slice(startAt, startAt + limit);
        }
        else {
            resultCollection = resultCollection.slice(startAt);
        }
        return {
            totalCount: totalCount,
            items: resultCollection
        };
    };
    /**
     * Get a method from the `InMemoryDbService` (if it exists), bound to that service
     */
    BackendService.prototype.bind = function (methodName) {
        var fn = this.inMemDbService[methodName];
        return fn ? fn.bind(this.inMemDbService) : undefined;
    };
    BackendService.prototype.bodify = function (data) {
        return this.config.dataEncapsulation ? { data: data } : data;
    };
    BackendService.prototype.clone = function (data) {
        return JSON.parse(JSON.stringify(data));
    };
    BackendService.prototype.collectionHandler = function (reqInfo) {
        // const req = reqInfo.req;
        var resOptions;
        switch (reqInfo.method) {
            case 'get':
                resOptions = this.get(reqInfo);
                break;
            case 'post':
                resOptions = this.post(reqInfo);
                break;
            case 'put':
                resOptions = this.put(reqInfo);
                break;
            case 'delete':
                resOptions = this.delete(reqInfo);
                break;
            default:
                resOptions = this.createErrorResponseOptions(reqInfo.url, _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].METHOD_NOT_ALLOWED, 'Method not allowed');
                break;
        }
        // If `inMemDbService.responseInterceptor` exists, let it morph the response options
        var interceptor = this.bind('responseInterceptor');
        return interceptor ? interceptor(resOptions, reqInfo) : resOptions;
    };
    /**
     * Commands reconfigure the in-memory web api service or extract information from it.
     * Commands ignore the latency delay and respond ASAP.
     *
     * When the last segment of the `apiBase` path is "commands",
     * the `collectionName` is the command.
     *
     * Example URLs:
     *   commands/resetdb (POST) // Reset the "database" to its original state
     *   commands/config (GET)   // Return this service's config object
     *   commands/config (POST)  // Update the config (e.g. the delay)
     *
     * Usage:
     *   http.post('commands/resetdb', undefined);
     *   http.get('commands/config');
     *   http.post('commands/config', '{"delay":1000}');
     */
    BackendService.prototype.commands = function (reqInfo) {
        var _this = this;
        var command = reqInfo.collectionName.toLowerCase();
        var method = reqInfo.method;
        var resOptions = {
            url: reqInfo.url
        };
        switch (command) {
            case 'resetdb':
                resOptions.status = _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].NO_CONTENT;
                return this.resetDb(reqInfo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function () { return _this.createResponse$(function () { return resOptions; }, false /* no latency delay */); }));
            case 'config':
                if (method === 'get') {
                    resOptions.status = _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].OK;
                    resOptions.body = this.clone(this.config);
                    // any other HTTP method is assumed to be a config update
                }
                else {
                    var body = this.getJsonBody(reqInfo.req);
                    Object.assign(this.config, body);
                    this.passThruBackend = undefined; // re-create when needed
                    resOptions.status = _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].NO_CONTENT;
                }
                break;
            default:
                resOptions = this.createErrorResponseOptions(reqInfo.url, _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].INTERNAL_SERVER_ERROR, "Unknown command \"" + command + "\"");
        }
        return this.createResponse$(function () { return resOptions; }, false /* no latency delay */);
    };
    BackendService.prototype.createErrorResponseOptions = function (url, status, message) {
        return {
            body: { error: "" + message },
            url: url,
            headers: this.createHeaders({ 'Content-Type': 'application/json' }),
            status: status
        };
    };
    /**
     * Create a cold response Observable from a factory for ResponseOptions
     * @param resOptionsFactory - creates ResponseOptions when observable is subscribed
     * @param withDelay - if true (default), add simulated latency delay from configuration
     */
    BackendService.prototype.createResponse$ = function (resOptionsFactory, withDelay) {
        if (withDelay === void 0) { withDelay = true; }
        var resOptions$ = this.createResponseOptions$(resOptionsFactory);
        var resp$ = this.createResponse$fromResponseOptions$(resOptions$);
        return withDelay ? this.addDelay(resp$) : resp$;
    };
    /**
     * Create a cold Observable of ResponseOptions.
     * @param resOptionsFactory - creates ResponseOptions when observable is subscribed
     */
    BackendService.prototype.createResponseOptions$ = function (resOptionsFactory) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (responseObserver) {
            var resOptions;
            try {
                resOptions = resOptionsFactory();
            }
            catch (error) {
                var err = error.message || error;
                resOptions = _this.createErrorResponseOptions('', _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].INTERNAL_SERVER_ERROR, "" + err);
            }
            var status = resOptions.status;
            try {
                resOptions.statusText = Object(_http_status_codes__WEBPACK_IMPORTED_MODULE_3__["getStatusText"])(status);
            }
            catch (e) { /* ignore failure */ }
            if (Object(_http_status_codes__WEBPACK_IMPORTED_MODULE_3__["isSuccess"])(status)) {
                responseObserver.next(resOptions);
                responseObserver.complete();
            }
            else {
                responseObserver.error(resOptions);
            }
            return function () { }; // unsubscribe function
        });
    };
    BackendService.prototype.delete = function (_a) {
        var collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, id = _a.id, url = _a.url;
        // tslint:disable-next-line:triple-equals
        if (id == undefined) {
            return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].NOT_FOUND, "Missing \"" + collectionName + "\" id");
        }
        var exists = this.removeById(collection, id);
        return {
            headers: headers,
            status: (exists || !this.config.delete404) ? _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].NO_CONTENT : _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].NOT_FOUND
        };
    };
    /**
     * Find first instance of item in collection by `item.id`
     * @param collection
     * @param id
     */
    BackendService.prototype.findById = function (collection, id) {
        return collection.find(function (item) { return item.id === id; });
    };
    /**
     * Generate the next available id for item in this collection
     * Use method from `inMemDbService` if it exists and returns a value,
     * else delegates to `genIdDefault`.
     * @param collection - collection of items with `id` key property
     */
    BackendService.prototype.genId = function (collection, collectionName) {
        var genId = this.bind('genId');
        if (genId) {
            var id = genId(collection, collectionName);
            // tslint:disable-next-line:triple-equals
            if (id != undefined) {
                return id;
            }
        }
        return this.genIdDefault(collection, collectionName);
    };
    /**
     * Default generator of the next available id for item in this collection
     * This default implementation works only for numeric ids.
     * @param collection - collection of items with `id` key property
     * @param collectionName - name of the collection
     */
    BackendService.prototype.genIdDefault = function (collection, collectionName) {
        if (!this.isCollectionIdNumeric(collection, collectionName)) {
            throw new Error("Collection '" + collectionName + "' id type is non-numeric or unknown. Can only generate numeric ids.");
        }
        var maxId = 0;
        collection.reduce(function (prev, item) {
            maxId = Math.max(maxId, typeof item.id === 'number' ? item.id : maxId);
        }, undefined);
        return maxId + 1;
    };
    BackendService.prototype.get = function (_a) {
        var collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, id = _a.id, query = _a.query, url = _a.url;
        var data = collection;
        // tslint:disable-next-line:triple-equals
        if (id != undefined && id !== '') {
            data = this.findById(collection, id);
        }
        else if (query) {
            data = this.applyQuery(collection, query);
        }
        if (!data) {
            return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].NOT_FOUND, "'" + collectionName + "' with id='" + id + "' not found");
        }
        return {
            body: this.bodify(this.clone(data)),
            headers: headers,
            status: _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].OK
        };
    };
    /**
     * Get location info from a url, even on server where `document` is not defined
     */
    BackendService.prototype.getLocation = function (url) {
        if (!url.startsWith('http')) {
            // get the document iff running in browser
            var doc = (typeof document === 'undefined') ? undefined : document;
            // add host info to url before parsing.  Use a fake host when not in browser.
            var base = doc ? doc.location.protocol + '//' + doc.location.host : 'http://fake';
            url = url.startsWith('/') ? base + url : base + '/' + url;
        }
        return Object(_interfaces__WEBPACK_IMPORTED_MODULE_5__["parseUri"])(url);
    };
    ;
    /**
     * get or create the function that passes unhandled requests
     * through to the "real" backend.
     */
    BackendService.prototype.getPassThruBackend = function () {
        return this.passThruBackend ?
            this.passThruBackend :
            this.passThruBackend = this.createPassThruBackend();
    };
    /**
     * Get utility methods from this service instance.
     * Useful within an HTTP method override
     */
    BackendService.prototype.getRequestInfoUtils = function () {
        var _this = this;
        return {
            createResponse$: this.createResponse$.bind(this),
            findById: this.findById.bind(this),
            isCollectionIdNumeric: this.isCollectionIdNumeric.bind(this),
            getConfig: function () { return _this.config; },
            getDb: function () { return _this.db; },
            getJsonBody: this.getJsonBody.bind(this),
            getLocation: this.getLocation.bind(this),
            getPassThruBackend: this.getPassThruBackend.bind(this),
            parseRequestUrl: this.parseRequestUrl.bind(this),
        };
    };
    BackendService.prototype.indexOf = function (collection, id) {
        return collection.findIndex(function (item) { return item.id === id; });
    };
    /** Parse the id as a number. Return original value if not a number. */
    BackendService.prototype.parseId = function (collection, collectionName, id) {
        if (!this.isCollectionIdNumeric(collection, collectionName)) {
            // Can't confirm that `id` is a numeric type; don't parse as a number
            // or else `'42'` -> `42` and _get by id_ fails.
            return id;
        }
        var idNum = parseFloat(id);
        return isNaN(idNum) ? id : idNum;
    };
    /**
     * return true if can determine that the collection's `item.id` is a number
     * This implementation can't tell if the collection is empty so it assumes NO
     * */
    BackendService.prototype.isCollectionIdNumeric = function (collection, collectionName) {
        // collectionName not used now but override might maintain collection type information
        // so that it could know the type of the `id` even when the collection is empty.
        return !!(collection && collection[0]) && typeof collection[0].id === 'number';
    };
    /**
     * Parses the request URL into a `ParsedRequestUrl` object.
     * Parsing depends upon certain values of `config`: `apiBase`, `host`, and `urlRoot`.
     *
     * Configuring the `apiBase` yields the most interesting changes to `parseRequestUrl` behavior:
     *   When apiBase=undefined and url='http://localhost/api/collection/42'
     *     {base: 'api/', collectionName: 'collection', id: '42', ...}
     *   When apiBase='some/api/root/' and url='http://localhost/some/api/root/collection'
     *     {base: 'some/api/root/', collectionName: 'collection', id: undefined, ...}
     *   When apiBase='/' and url='http://localhost/collection'
     *     {base: '/', collectionName: 'collection', id: undefined, ...}
     *
     * The actual api base segment values are ignored. Only the number of segments matters.
     * The following api base strings are considered identical: 'a/b' ~ 'some/api/' ~ `two/segments'
     *
     * To replace this default method, assign your alternative to your InMemDbService['parseRequestUrl']
     */
    BackendService.prototype.parseRequestUrl = function (url) {
        try {
            var loc = this.getLocation(url);
            var drop = this.config.rootPath.length;
            var urlRoot = '';
            if (loc.host !== this.config.host) {
                // url for a server on a different host!
                // assume it's collection is actually here too.
                drop = 1; // the leading slash
                urlRoot = loc.protocol + '//' + loc.host + '/';
            }
            var path = loc.path.substring(drop);
            var pathSegments = path.split('/');
            var segmentIx = 0;
            // apiBase: the front part of the path devoted to getting to the api route
            // Assumes first path segment if no config.apiBase
            // else ignores as many path segments as are in config.apiBase
            // Does NOT care what the api base chars actually are.
            var apiBase = void 0;
            // tslint:disable-next-line:triple-equals
            if (this.config.apiBase == undefined) {
                apiBase = pathSegments[segmentIx++];
            }
            else {
                apiBase = Object(_interfaces__WEBPACK_IMPORTED_MODULE_5__["removeTrailingSlash"])(this.config.apiBase.trim());
                if (apiBase) {
                    segmentIx = apiBase.split('/').length;
                }
                else {
                    segmentIx = 0; // no api base at all; unwise but allowed.
                }
            }
            apiBase += '/';
            var collectionName = pathSegments[segmentIx++];
            // ignore anything after a '.' (e.g.,the "json" in "customers.json")
            collectionName = collectionName && collectionName.split('.')[0];
            var id = pathSegments[segmentIx++];
            var query = this.createQueryMap(loc.query);
            var resourceUrl = urlRoot + apiBase + collectionName + '/';
            return { apiBase: apiBase, collectionName: collectionName, id: id, query: query, resourceUrl: resourceUrl };
        }
        catch (err) {
            var msg = "unable to parse url '" + url + "'; original error: " + err.message;
            throw new Error(msg);
        }
    };
    // Create entity
    // Can update an existing entity too if post409 is false.
    BackendService.prototype.post = function (_a) {
        var collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, id = _a.id, req = _a.req, resourceUrl = _a.resourceUrl, url = _a.url;
        var item = this.clone(this.getJsonBody(req));
        // tslint:disable-next-line:triple-equals
        if (item.id == undefined) {
            try {
                item.id = id || this.genId(collection, collectionName);
            }
            catch (err) {
                var emsg = err.message || '';
                if (/id type is non-numeric/.test(emsg)) {
                    return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].UNPROCESSABLE_ENTRY, emsg);
                }
                else {
                    console.error(err);
                    return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].INTERNAL_SERVER_ERROR, "Failed to generate new id for '" + collectionName + "'");
                }
            }
        }
        if (id && id !== item.id) {
            return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].BAD_REQUEST, "Request id does not match item.id");
        }
        else {
            id = item.id;
        }
        var existingIx = this.indexOf(collection, id);
        var body = this.bodify(item);
        if (existingIx === -1) {
            collection.push(item);
            headers.set('Location', resourceUrl + '/' + id);
            return { headers: headers, body: body, status: _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].CREATED };
        }
        else if (this.config.post409) {
            return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].CONFLICT, "'" + collectionName + "' item with id='" + id + " exists and may not be updated with POST; use PUT instead.");
        }
        else {
            collection[existingIx] = item;
            return this.config.post204 ?
                { headers: headers, status: _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].NO_CONTENT } : // successful; no content
                { headers: headers, body: body, status: _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].OK }; // successful; return entity
        }
    };
    // Update existing entity
    // Can create an entity too if put404 is false.
    BackendService.prototype.put = function (_a) {
        var collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, id = _a.id, req = _a.req, url = _a.url;
        var item = this.clone(this.getJsonBody(req));
        // tslint:disable-next-line:triple-equals
        if (item.id == undefined) {
            return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].NOT_FOUND, "Missing '" + collectionName + "' id");
        }
        if (id && id !== item.id) {
            return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].BAD_REQUEST, "Request for '" + collectionName + "' id does not match item.id");
        }
        else {
            id = item.id;
        }
        var existingIx = this.indexOf(collection, id);
        var body = this.bodify(item);
        if (existingIx > -1) {
            collection[existingIx] = item;
            return this.config.put204 ?
                { headers: headers, status: _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].NO_CONTENT } : // successful; no content
                { headers: headers, body: body, status: _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].OK }; // successful; return entity
        }
        else if (this.config.put404) {
            // item to update not found; use POST to create new item for this id.
            return this.createErrorResponseOptions(url, _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].NOT_FOUND, "'" + collectionName + "' item with id='" + id + " not found and may not be created with PUT; use POST instead.");
        }
        else {
            // create new item for id not found
            collection.push(item);
            return { headers: headers, body: body, status: _http_status_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS"].CREATED };
        }
    };
    BackendService.prototype.removeById = function (collection, id) {
        var ix = this.indexOf(collection, id);
        if (ix > -1) {
            collection.splice(ix, 1);
            return true;
        }
        return false;
    };
    /**
     * Tell your in-mem "database" to reset.
     * returns Observable of the database because resetting it could be async
     */
    BackendService.prototype.resetDb = function (reqInfo) {
        var _this = this;
        this.dbReadySubject.next(false);
        var db = this.inMemDbService.createDb(reqInfo);
        var db$ = db instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"] ? db :
            typeof db.then === 'function' ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(db) :
                Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(db);
        db$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (d) {
            _this.db = d;
            _this.dbReadySubject.next(true);
        });
        return this.dbReady;
    };
    return BackendService;
}());



/***/ }),

/***/ "./src/app/services/external/in-memory-web-api/delay-response.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/external/in-memory-web-api/delay-response.ts ***!
  \***********************************************************************/
/*! exports provided: delayResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delayResponse", function() { return delayResponse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


// Replaces use of RxJS delay. See v0.5.4.
/** adds specified delay (in ms) to both next and error channels of the response observable */
function delayResponse(response$, delayMs) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
        var completePending = false;
        var nextPending = false;
        var subscription = response$.subscribe(function (value) {
            nextPending = true;
            setTimeout(function () {
                observer.next(value);
                if (completePending) {
                    observer.complete();
                }
            }, delayMs);
        }, function (error) { return setTimeout(function () { return observer.error(error); }, delayMs); }, function () {
            completePending = true;
            if (!nextPending) {
                observer.complete();
            }
        });
        return function () {
            return subscription.unsubscribe();
        };
    });
}


/***/ }),

/***/ "./src/app/services/external/in-memory-web-api/http-client-backend.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/services/external/in-memory-web-api/http-client-backend.service.ts ***!
  \************************************************************************************/
/*! exports provided: HttpClientBackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientBackendService", function() { return HttpClientBackendService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_status_codes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http-status-codes */ "./src/app/services/external/in-memory-web-api/http-status-codes.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interfaces */ "./src/app/services/external/in-memory-web-api/interfaces.ts");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./backend.service */ "./src/app/services/external/in-memory-web-api/backend.service.ts");







/**
 * For Angular `HttpClient` simulate the behavior of a RESTy web api
 * backed by the simple in-memory data store provided by the injected `InMemoryDbService`.
 * Conforms mostly to behavior described here:
 * http://www.restapitutorial.com/lessons/httpmethods.html
 *
 * ### Usage
 *
 * Create an in-memory data store class that implements `InMemoryDbService`.
 * Call `config` static method with this service class and optional configuration object:
 * ```
 * // other imports
 * import { HttpClientModule } from '@angular/common/http';
 * import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
 *
 * import { InMemHeroService, inMemConfig } from '../api/in-memory-hero.service';
 * @NgModule({
 *  imports: [
 *    HttpModule,
 *    HttpClientInMemoryWebApiModule.forRoot(InMemHeroService, inMemConfig),
 *    ...
 *  ],
 *  ...
 * })
 * export class AppModule { ... }
 * ```
 */
var HttpClientBackendService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HttpClientBackendService, _super);
    function HttpClientBackendService(inMemDbService, config, xhrFactory) {
        var _this = _super.call(this, inMemDbService, config) || this;
        _this.xhrFactory = xhrFactory;
        return _this;
    }
    HttpClientBackendService.prototype.handle = function (req) {
        try {
            return this.handleRequest(req);
        }
        catch (error) {
            var err = error.message || error;
            var resOptions_1 = this.createErrorResponseOptions(req.url, _http_status_codes__WEBPACK_IMPORTED_MODULE_4__["STATUS"].INTERNAL_SERVER_ERROR, "" + err);
            return this.createResponse$(function () { return resOptions_1; });
        }
    };
    ////  protected overrides /////
    HttpClientBackendService.prototype.getJsonBody = function (req) {
        return req.body;
    };
    HttpClientBackendService.prototype.getRequestMethod = function (req) {
        return (req.method || 'get').toLowerCase();
    };
    HttpClientBackendService.prototype.createHeaders = function (headers) {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headers);
    };
    HttpClientBackendService.prototype.createQueryMap = function (search) {
        var map = new Map();
        if (search) {
            var params_1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromString: search });
            params_1.keys().forEach(function (p) { return map.set(p, params_1.getAll(p)); });
        }
        return map;
    };
    HttpClientBackendService.prototype.createResponse$fromResponseOptions$ = function (resOptions$) {
        return resOptions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (opts) { return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"](opts); }));
    };
    HttpClientBackendService.prototype.createPassThruBackend = function () {
        try {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpXhrBackend"](this.xhrFactory);
        }
        catch (ex) {
            ex.message = 'Cannot create passThru404 backend; ' + (ex.message || '');
            throw ex;
        }
    };
    HttpClientBackendService.ctorParameters = function () { return [
        { type: _interfaces__WEBPACK_IMPORTED_MODULE_5__["InMemoryDbService"] },
        { type: _interfaces__WEBPACK_IMPORTED_MODULE_5__["InMemoryBackendConfigArgs"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_interfaces__WEBPACK_IMPORTED_MODULE_5__["InMemoryBackendConfig"],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["XhrFactory"] }
    ]; };
    HttpClientBackendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_interfaces__WEBPACK_IMPORTED_MODULE_5__["InMemoryBackendConfig"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())
    ], HttpClientBackendService);
    return HttpClientBackendService;
}(_backend_service__WEBPACK_IMPORTED_MODULE_6__["BackendService"]));



/***/ }),

/***/ "./src/app/services/external/in-memory-web-api/http-client-in-memory-web-api.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/services/external/in-memory-web-api/http-client-in-memory-web-api.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: httpClientInMemBackendServiceFactory, HttpClientInMemoryWebApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpClientInMemBackendServiceFactory", function() { return httpClientInMemBackendServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientInMemoryWebApiModule", function() { return HttpClientInMemoryWebApiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interfaces */ "./src/app/services/external/in-memory-web-api/interfaces.ts");
/* harmony import */ var _http_client_backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http-client-backend.service */ "./src/app/services/external/in-memory-web-api/http-client-backend.service.ts");
////// HttpClient-Only version ////





// Internal - Creates the in-mem backend for the HttpClient module
// AoT requires factory to be exported
function httpClientInMemBackendServiceFactory(dbService, options, xhrFactory) {
    var backend = new _http_client_backend_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientBackendService"](dbService, options, xhrFactory);
    return backend;
}
var HttpClientInMemoryWebApiModule = /** @class */ (function () {
    function HttpClientInMemoryWebApiModule() {
    }
    HttpClientInMemoryWebApiModule_1 = HttpClientInMemoryWebApiModule;
    /**
    *  Redirect the Angular `HttpClient` XHR calls
    *  to in-memory data store that implements `InMemoryDbService`.
    *  with class that implements InMemoryDbService and creates an in-memory database.
    *
    *  Usually imported in the root application module.
    *  Can import in a lazy feature module too, which will shadow modules loaded earlier
    *
    * @param {Type} dbCreator - Class that creates seed data for in-memory database. Must implement InMemoryDbService.
    * @param {InMemoryBackendConfigArgs} [options]
    *
    * @example
    * HttpInMemoryWebApiModule.forRoot(dbCreator);
    * HttpInMemoryWebApiModule.forRoot(dbCreator, {useValue: {delay:600}});
    */
    HttpClientInMemoryWebApiModule.forRoot = function (dbCreator, options) {
        return {
            ngModule: HttpClientInMemoryWebApiModule_1,
            providers: [
                { provide: _interfaces__WEBPACK_IMPORTED_MODULE_3__["InMemoryDbService"], useClass: dbCreator },
                { provide: _interfaces__WEBPACK_IMPORTED_MODULE_3__["InMemoryBackendConfig"], useValue: options },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpBackend"],
                    useFactory: httpClientInMemBackendServiceFactory,
                    deps: [_interfaces__WEBPACK_IMPORTED_MODULE_3__["InMemoryDbService"], _interfaces__WEBPACK_IMPORTED_MODULE_3__["InMemoryBackendConfig"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["XhrFactory"]] }
            ]
        };
    };
    /**
   *
   * Enable and configure the in-memory web api in a lazy-loaded feature module.
   * Same as `forRoot`.
   * This is a feel-good method so you can follow the Angular style guide for lazy-loaded modules.
   */
    HttpClientInMemoryWebApiModule.forFeature = function (dbCreator, options) {
        return HttpClientInMemoryWebApiModule_1.forRoot(dbCreator, options);
    };
    var HttpClientInMemoryWebApiModule_1;
    HttpClientInMemoryWebApiModule = HttpClientInMemoryWebApiModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({})
    ], HttpClientInMemoryWebApiModule);
    return HttpClientInMemoryWebApiModule;
}());



/***/ }),

/***/ "./src/app/services/external/in-memory-web-api/http-status-codes.ts":
/*!**************************************************************************!*\
  !*** ./src/app/services/external/in-memory-web-api/http-status-codes.ts ***!
  \**************************************************************************/
/*! exports provided: STATUS, STATUS_CODE_INFO, getStatusText, isSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS", function() { return STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_CODE_INFO", function() { return STATUS_CODE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatusText", function() { return getStatusText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSuccess", function() { return isSuccess; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var STATUS = {
    CONTINUE: 100,
    SWITCHING_PROTOCOLS: 101,
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,
    MULTIPLE_CHOICES: 300,
    MOVED_PERMANTENTLY: 301,
    FOUND: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    USE_PROXY: 305,
    TEMPORARY_REDIRECT: 307,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TO_LARGE: 413,
    URI_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    RANGE_NOT_SATISFIABLE: 416,
    EXPECTATION_FAILED: 417,
    IM_A_TEAPOT: 418,
    UPGRADE_REQUIRED: 426,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    PROCESSING: 102,
    MULTI_STATUS: 207,
    IM_USED: 226,
    PERMANENT_REDIRECT: 308,
    UNPROCESSABLE_ENTRY: 422,
    LOCKED: 423,
    FAILED_DEPENDENCY: 424,
    PRECONDITION_REQUIRED: 428,
    TOO_MANY_REQUESTS: 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,
    VARIANT_ALSO_NEGOTIATES: 506,
    INSUFFICIENT_STORAGE: 507,
    NETWORK_AUTHENTICATION_REQUIRED: 511
};
/*tslint:disable:quotemark max-line-length one-line */
var STATUS_CODE_INFO = {
    '100': {
        'code': 100,
        'text': 'Continue',
        'description': '\"The initial part of a request has been received and has not yet been rejected by the server.\"',
        'spec_title': 'RFC7231#6.2.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.2.1'
    },
    '101': {
        'code': 101,
        'text': 'Switching Protocols',
        'description': '\"The server understands and is willing to comply with the client\'s request, via the Upgrade header field, for a change in the application protocol being used on this connection.\"',
        'spec_title': 'RFC7231#6.2.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.2.2'
    },
    '200': {
        'code': 200,
        'text': 'OK',
        'description': '\"The request has succeeded.\"',
        'spec_title': 'RFC7231#6.3.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.1'
    },
    '201': {
        'code': 201,
        'text': 'Created',
        'description': '\"The request has been fulfilled and has resulted in one or more new resources being created.\"',
        'spec_title': 'RFC7231#6.3.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.2'
    },
    '202': {
        'code': 202,
        'text': 'Accepted',
        'description': '\"The request has been accepted for processing, but the processing has not been completed.\"',
        'spec_title': 'RFC7231#6.3.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.3'
    },
    '203': {
        'code': 203,
        'text': 'Non-Authoritative Information',
        'description': '\"The request was successful but the enclosed payload has been modified from that of the origin server\'s 200 (OK) response by a transforming proxy.\"',
        'spec_title': 'RFC7231#6.3.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.4'
    },
    '204': {
        'code': 204,
        'text': 'No Content',
        'description': '\"The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.\"',
        'spec_title': 'RFC7231#6.3.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.5'
    },
    '205': {
        'code': 205,
        'text': 'Reset Content',
        'description': '\"The server has fulfilled the request and desires that the user agent reset the \"document view\", which caused the request to be sent, to its original state as received from the origin server.\"',
        'spec_title': 'RFC7231#6.3.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.6'
    },
    '206': {
        'code': 206,
        'text': 'Partial Content',
        'description': '\"The server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests\'s Range header field.\"',
        'spec_title': 'RFC7233#4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7233#section-4.1'
    },
    '300': {
        'code': 300,
        'text': 'Multiple Choices',
        'description': '\"The target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers.\"',
        'spec_title': 'RFC7231#6.4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.1'
    },
    '301': {
        'code': 301,
        'text': 'Moved Permanently',
        'description': '\"The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.\"',
        'spec_title': 'RFC7231#6.4.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.2'
    },
    '302': {
        'code': 302,
        'text': 'Found',
        'description': '\"The target resource resides temporarily under a different URI.\"',
        'spec_title': 'RFC7231#6.4.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.3'
    },
    '303': {
        'code': 303,
        'text': 'See Other',
        'description': '\"The server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, that is intended to provide an indirect response to the original request.\"',
        'spec_title': 'RFC7231#6.4.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.4'
    },
    '304': {
        'code': 304,
        'text': 'Not Modified',
        'description': '\"A conditional GET request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition has evaluated to false.\"',
        'spec_title': 'RFC7232#4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7232#section-4.1'
    },
    '305': {
        'code': 305,
        'text': 'Use Proxy',
        'description': '*deprecated*',
        'spec_title': 'RFC7231#6.4.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.5'
    },
    '307': {
        'code': 307,
        'text': 'Temporary Redirect',
        'description': '\"The target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.\"',
        'spec_title': 'RFC7231#6.4.7',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.7'
    },
    '400': {
        'code': 400,
        'text': 'Bad Request',
        'description': '\"The server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process.\"',
        'spec_title': 'RFC7231#6.5.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.1'
    },
    '401': {
        'code': 401,
        'text': 'Unauthorized',
        'description': '\"The request has not been applied because it lacks valid authentication credentials for the target resource.\"',
        'spec_title': 'RFC7235#6.3.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7235#section-3.1'
    },
    '402': {
        'code': 402,
        'text': 'Payment Required',
        'description': '*reserved*',
        'spec_title': 'RFC7231#6.5.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.2'
    },
    '403': {
        'code': 403,
        'text': 'Forbidden',
        'description': '\"The server understood the request but refuses to authorize it.\"',
        'spec_title': 'RFC7231#6.5.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.3'
    },
    '404': {
        'code': 404,
        'text': 'Not Found',
        'description': '\"The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.\"',
        'spec_title': 'RFC7231#6.5.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.4'
    },
    '405': {
        'code': 405,
        'text': 'Method Not Allowed',
        'description': '\"The method specified in the request-line is known by the origin server but not supported by the target resource.\"',
        'spec_title': 'RFC7231#6.5.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.5'
    },
    '406': {
        'code': 406,
        'text': 'Not Acceptable',
        'description': '\"The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.\"',
        'spec_title': 'RFC7231#6.5.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.6'
    },
    '407': {
        'code': 407,
        'text': 'Proxy Authentication Required',
        'description': '\"The client needs to authenticate itself in order to use a proxy.\"',
        'spec_title': 'RFC7231#6.3.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.2'
    },
    '408': {
        'code': 408,
        'text': 'Request Timeout',
        'description': '\"The server did not receive a complete request message within the time that it was prepared to wait.\"',
        'spec_title': 'RFC7231#6.5.7',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.7'
    },
    '409': {
        'code': 409,
        'text': 'Conflict',
        'description': '\"The request could not be completed due to a conflict with the current state of the resource.\"',
        'spec_title': 'RFC7231#6.5.8',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.8'
    },
    '410': {
        'code': 410,
        'text': 'Gone',
        'description': '\"Access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.\"',
        'spec_title': 'RFC7231#6.5.9',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.9'
    },
    '411': {
        'code': 411,
        'text': 'Length Required',
        'description': '\"The server refuses to accept the request without a defined Content-Length.\"',
        'spec_title': 'RFC7231#6.5.10',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.10'
    },
    '412': {
        'code': 412,
        'text': 'Precondition Failed',
        'description': '\"One or more preconditions given in the request header fields evaluated to false when tested on the server.\"',
        'spec_title': 'RFC7232#4.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7232#section-4.2'
    },
    '413': {
        'code': 413,
        'text': 'Payload Too Large',
        'description': '\"The server is refusing to process a request because the request payload is larger than the server is willing or able to process.\"',
        'spec_title': 'RFC7231#6.5.11',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.11'
    },
    '414': {
        'code': 414,
        'text': 'URI Too Long',
        'description': '\"The server is refusing to service the request because the request-target is longer than the server is willing to interpret.\"',
        'spec_title': 'RFC7231#6.5.12',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.12'
    },
    '415': {
        'code': 415,
        'text': 'Unsupported Media Type',
        'description': '\"The origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method.\"',
        'spec_title': 'RFC7231#6.5.13',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.13'
    },
    '416': {
        'code': 416,
        'text': 'Range Not Satisfiable',
        'description': '\"None of the ranges in the request\'s Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.\"',
        'spec_title': 'RFC7233#4.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7233#section-4.4'
    },
    '417': {
        'code': 417,
        'text': 'Expectation Failed',
        'description': '\"The expectation given in the request\'s Expect header field could not be met by at least one of the inbound servers.\"',
        'spec_title': 'RFC7231#6.5.14',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.14'
    },
    '418': {
        'code': 418,
        'text': 'I\'m a teapot',
        'description': '\"1988 April Fools Joke. Returned by tea pots requested to brew coffee.\"',
        'spec_title': 'RFC 2324',
        'spec_href': 'https://tools.ietf.org/html/rfc2324'
    },
    '426': {
        'code': 426,
        'text': 'Upgrade Required',
        'description': '\"The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.\"',
        'spec_title': 'RFC7231#6.5.15',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.15'
    },
    '500': {
        'code': 500,
        'text': 'Internal Server Error',
        'description': '\"The server encountered an unexpected condition that prevented it from fulfilling the request.\"',
        'spec_title': 'RFC7231#6.6.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.1'
    },
    '501': {
        'code': 501,
        'text': 'Not Implemented',
        'description': '\"The server does not support the functionality required to fulfill the request.\"',
        'spec_title': 'RFC7231#6.6.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.2'
    },
    '502': {
        'code': 502,
        'text': 'Bad Gateway',
        'description': '\"The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.\"',
        'spec_title': 'RFC7231#6.6.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.3'
    },
    '503': {
        'code': 503,
        'text': 'Service Unavailable',
        'description': '\"The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.\"',
        'spec_title': 'RFC7231#6.6.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.4'
    },
    '504': {
        'code': 504,
        'text': 'Gateway Time-out',
        'description': '\"The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.\"',
        'spec_title': 'RFC7231#6.6.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.5'
    },
    '505': {
        'code': 505,
        'text': 'HTTP Version Not Supported',
        'description': '\"The server does not support, or refuses to support, the protocol version that was used in the request message.\"',
        'spec_title': 'RFC7231#6.6.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.6'
    },
    '102': {
        'code': 102,
        'text': 'Processing',
        'description': '\"An interim response to inform the client that the server has accepted the complete request, but has not yet completed it.\"',
        'spec_title': 'RFC5218#10.1',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.1'
    },
    '207': {
        'code': 207,
        'text': 'Multi-Status',
        'description': '\"Status for multiple independent operations.\"',
        'spec_title': 'RFC5218#10.2',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.2'
    },
    '226': {
        'code': 226,
        'text': 'IM Used',
        'description': '\"The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.\"',
        'spec_title': 'RFC3229#10.4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc3229#section-10.4.1'
    },
    '308': {
        'code': 308,
        'text': 'Permanent Redirect',
        'description': '\"The target resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs. [...] This status code is similar to 301 Moved Permanently (Section 7.3.2 of rfc7231), except that it does not allow rewriting the request method from POST to GET.\"',
        'spec_title': 'RFC7238',
        'spec_href': 'http://tools.ietf.org/html/rfc7238'
    },
    '422': {
        'code': 422,
        'text': 'Unprocessable Entity',
        'description': '\"The server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions.\"',
        'spec_title': 'RFC5218#10.3',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.3'
    },
    '423': {
        'code': 423,
        'text': 'Locked',
        'description': '\"The source or destination resource of a method is locked.\"',
        'spec_title': 'RFC5218#10.4',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.4'
    },
    '424': {
        'code': 424,
        'text': 'Failed Dependency',
        'description': '\"The method could not be performed on the resource because the requested action depended on another action and that action failed.\"',
        'spec_title': 'RFC5218#10.5',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.5'
    },
    '428': {
        'code': 428,
        'text': 'Precondition Required',
        'description': '\"The origin server requires the request to be conditional.\"',
        'spec_title': 'RFC6585#3',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-3'
    },
    '429': {
        'code': 429,
        'text': 'Too Many Requests',
        'description': '\"The user has sent too many requests in a given amount of time (\"rate limiting\").\"',
        'spec_title': 'RFC6585#4',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-4'
    },
    '431': {
        'code': 431,
        'text': 'Request Header Fields Too Large',
        'description': '\"The server is unwilling to process the request because its header fields are too large.\"',
        'spec_title': 'RFC6585#5',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-5'
    },
    '451': {
        'code': 451,
        'text': 'Unavailable For Legal Reasons',
        'description': '\"The server is denying access to the resource in response to a legal demand.\"',
        'spec_title': 'draft-ietf-httpbis-legally-restricted-status',
        'spec_href': 'http://tools.ietf.org/html/draft-ietf-httpbis-legally-restricted-status'
    },
    '506': {
        'code': 506,
        'text': 'Variant Also Negotiates',
        'description': '\"The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.\"',
        'spec_title': 'RFC2295#8.1',
        'spec_href': 'http://tools.ietf.org/html/rfc2295#section-8.1'
    },
    '507': {
        'code': 507,
        'text': 'Insufficient Storage',
        'description': '\The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.\"',
        'spec_title': 'RFC5218#10.6',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.6'
    },
    '511': {
        'code': 511,
        'text': 'Network Authentication Required',
        'description': '\"The client needs to authenticate to gain network access.\"',
        'spec_title': 'RFC6585#6',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-6'
    }
};
/**
 * get the status text from StatusCode
 */
function getStatusText(status) {
    return STATUS_CODE_INFO[status].text || 'Unknown Status';
}
/**
 * Returns true if the the Http Status Code is 200-299 (success)
 */
function isSuccess(status) { return status >= 200 && status < 300; }
;


/***/ }),

/***/ "./src/app/services/external/in-memory-web-api/interfaces.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/external/in-memory-web-api/interfaces.ts ***!
  \*******************************************************************/
/*! exports provided: InMemoryDbService, InMemoryBackendConfigArgs, InMemoryBackendConfig, parseUri, removeTrailingSlash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDbService", function() { return InMemoryDbService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryBackendConfigArgs", function() { return InMemoryBackendConfigArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryBackendConfig", function() { return InMemoryBackendConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseUri", function() { return parseUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTrailingSlash", function() { return removeTrailingSlash; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
* Interface for a class that creates an in-memory database
*
* Its `createDb` method creates a hash of named collections that represents the database
*
* For maximum flexibility, the service may define HTTP method overrides.
* Such methods must match the spelling of an HTTP method in lower case (e.g, "get").
* If a request has a matching method, it will be called as in
* `get(info: requestInfo, db: {})` where `db` is the database object described above.
*/
var InMemoryDbService = /** @class */ (function () {
    function InMemoryDbService() {
    }
    return InMemoryDbService;
}());

/**
* Interface for InMemoryBackend configuration options
*/
var InMemoryBackendConfigArgs = /** @class */ (function () {
    function InMemoryBackendConfigArgs() {
    }
    return InMemoryBackendConfigArgs;
}());

/////////////////////////////////
/**
*  InMemoryBackendService configuration options
*  Usage:
*    InMemoryWebApiModule.forRoot(InMemHeroService, {delay: 600})
*
*  or if providing separately:
*    provide(InMemoryBackendConfig, {useValue: {delay: 600}}),
*/
var InMemoryBackendConfig = /** @class */ (function () {
    function InMemoryBackendConfig(config) {
        if (config === void 0) { config = {}; }
        Object.assign(this, {
            // default config:
            caseSensitiveSearch: false,
            dataEncapsulation: false,
            delay: 500,
            delete404: false,
            passThruUnknownUrl: false,
            post204: true,
            post409: false,
            put204: true,
            put404: false,
            apiBase: undefined,
            host: undefined,
            rootPath: undefined // default value is actually set in InMemoryBackendService ctor
        }, config);
    }
    InMemoryBackendConfig.ctorParameters = function () { return [
        { type: InMemoryBackendConfigArgs }
    ]; };
    InMemoryBackendConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], InMemoryBackendConfig);
    return InMemoryBackendConfig;
}());

/** Return information (UriInfo) about a URI  */
function parseUri(str) {
    // Adapted from parseuri package - http://blog.stevenlevithan.com/archives/parseuri
    // tslint:disable-next-line:max-line-length
    var URL_REGEX = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
    var m = URL_REGEX.exec(str);
    var uri = {
        source: '',
        protocol: '',
        authority: '',
        userInfo: '',
        user: '',
        password: '',
        host: '',
        port: '',
        relative: '',
        path: '',
        directory: '',
        file: '',
        query: '',
        anchor: ''
    };
    var keys = Object.keys(uri);
    var i = keys.length;
    while (i--) {
        uri[keys[i]] = m[i] || '';
    }
    return uri;
}
function removeTrailingSlash(path) {
    return path.replace(/\/$/, '');
}


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
    var cost = -Math.floor(Math.random() * 2000) - 1;
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
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())); // TODO .toISOString();
}
function randomOrder() {
    var customer = randomCustomer();
    var order = {
        id: String(Math.floor(Math.random() * 999999)).padStart(6, '0'),
        created: randomDate(new Date('2019-01-01'), new Date('2019-12-31')),
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
    OrderApiService.prototype.buildQueryParameterString = function (filter, orderBy, startAt, limit) {
        var parameters = [];
        if (filter) {
            parameters.push('$q=' + filter);
        }
        if (orderBy) {
            parameters.push('$orderBy=' + orderBy);
        }
        if (startAt) {
            parameters.push('$startAt=' + startAt);
        }
        if (limit) {
            parameters.push('$limit=' + limit);
        }
        if (parameters.length) {
            return '?' + parameters.join('&');
        }
        else {
            return '';
        }
    };
    OrderApiService.prototype.getMainOrders = function (filter, orderBy, startAt, limit) {
        var url = this.apiUrlMainOrders + this.buildQueryParameterString(filter, orderBy, startAt, limit);
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    OrderApiService.prototype.getImportableOrders = function (filter, orderBy, startAt, limit) {
        var url = this.apiUrlImportableOrders + this.buildQueryParameterString(filter, orderBy, startAt, limit);
        return this.http.get(url)
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
    OrderStoreService.prototype.getMainOrders = function (filter, orderBy, startAt, limit) {
        var _this = this;
        return this.orderApi.getMainOrders(filter, orderBy, startAt, limit).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (orders) {
            _this.mainOrders = orders.items;
            _this.mainOrdersTotalCount = orders.totalCount;
        }));
    };
    OrderStoreService.prototype.getImportableOrders = function (filter, orderBy, startAt, limit) {
        var _this = this;
        return this.orderApi.getImportableOrders(filter, orderBy, startAt, limit).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (orders) {
            _this.importableOrders = orders.items;
            _this.importableOrdersTotalCount = orders.totalCount;
        }));
    };
    OrderStoreService.prototype.deleteFromImportableOrders = function (order) {
        var _this = this;
        return this.orderApi.deleteImportableOrder(order).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this.importableOrders = _this.importableOrders.filter(function (o) { return o.id !== order.id; });
            _this.importableOrdersTotalCount--;
        }));
    };
    OrderStoreService.prototype.addToMainOrders = function (order) {
        var _this = this;
        return this.orderApi.postToMainOrders(order)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this.mainOrders = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([order], _this.mainOrders);
            _this.mainOrdersTotalCount++;
        }));
    };
    OrderStoreService.prototype.importSelectedOrder = function () {
        var _this = this;
        if (this.selectedOrderSelectedItems.length) {
            this.selectedOrder.fulfillmentStage = 'Imported';
        }
        else {
            this.selectedOrder.fulfillmentStage = 'Cancelled';
        }
        return this.addToMainOrders(this.selectedOrder).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function () { return _this.deleteFromImportableOrders(_this.selectedOrder); }));
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
    ], OrderStoreService.prototype, "mainOrdersTotalCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], OrderStoreService.prototype, "importableOrdersTotalCount", void 0);
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
    ], OrderStoreService.prototype, "getMainOrders", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["action"]
    ], OrderStoreService.prototype, "getImportableOrders", null);
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