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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_currency_exchange_currency_exchange_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/currency-exchange/currency-exchange.component */ "./src/app/components/currency-exchange/currency-exchange.component.ts");



class AppComponent {
    constructor() {
        this.title = 'currency-converter';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-currency-exchange");
    } }, directives: [_components_currency_exchange_currency_exchange_component__WEBPACK_IMPORTED_MODULE_1__["CurrencyExchangeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: initApp, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initApp", function() { return initApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_currency_amount_select_currency_amount_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/currency-amount-select/currency-amount-select.component */ "./src/app/components/currency-amount-select/currency-amount-select.component.ts");
/* harmony import */ var _components_currency_exchange_currency_exchange_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/currency-exchange/currency-exchange.component */ "./src/app/components/currency-exchange/currency-exchange.component.ts");
/* harmony import */ var _services_currency_rates_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/currency-rates.service */ "./src/app/services/currency-rates.service.ts");









function initApp(currencyRatesService) {
    return () => currencyRatesService.initializeRates();
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
            useFactory: initApp,
            multi: true,
            deps: [_services_currency_rates_service__WEBPACK_IMPORTED_MODULE_7__["CurrencyRatesService"]]
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_currency_amount_select_currency_amount_select_component__WEBPACK_IMPORTED_MODULE_5__["CurrencyAmountSelectComponent"],
        _components_currency_exchange_currency_exchange_component__WEBPACK_IMPORTED_MODULE_6__["CurrencyExchangeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_currency_amount_select_currency_amount_select_component__WEBPACK_IMPORTED_MODULE_5__["CurrencyAmountSelectComponent"],
                    _components_currency_exchange_currency_exchange_component__WEBPACK_IMPORTED_MODULE_6__["CurrencyExchangeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                ],
                providers: [
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                        useFactory: initApp,
                        multi: true,
                        deps: [_services_currency_rates_service__WEBPACK_IMPORTED_MODULE_7__["CurrencyRatesService"]]
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/currency-amount-select/currency-amount-select.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/currency-amount-select/currency-amount-select.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CurrencyAmountSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyAmountSelectComponent", function() { return CurrencyAmountSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function CurrencyAmountSelectComponent_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const curr_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", curr_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", curr_r1.key, " - ", curr_r1.value, "");
} }
class CurrencyAmountSelectComponent {
    constructor() {
        this.currencyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.amountChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onAmountChange(amount) {
        this.amountChange.emit(amount);
    }
    onCurrencyChange(currency) {
        this.currencyChange.emit(currency);
    }
}
CurrencyAmountSelectComponent.ɵfac = function CurrencyAmountSelectComponent_Factory(t) { return new (t || CurrencyAmountSelectComponent)(); };
CurrencyAmountSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrencyAmountSelectComponent, selectors: [["app-currency-amount-select"]], inputs: { currencies: "currencies", currency: "currency", amount: "amount" }, outputs: { currencyChange: "currencyChange", amountChange: "amountChange" }, decls: 5, vars: 5, consts: [["type", "number", "name", "amount", 3, "ngModel", "ngModelChange"], ["name", "currency", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function CurrencyAmountSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CurrencyAmountSelectComponent_Template_input_ngModelChange_1_listener($event) { return ctx.amount = $event; })("ngModelChange", function CurrencyAmountSelectComponent_Template_input_ngModelChange_1_listener($event) { return ctx.onAmountChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CurrencyAmountSelectComponent_Template_select_ngModelChange_2_listener($event) { return ctx.currency = $event; })("ngModelChange", function CurrencyAmountSelectComponent_Template_select_ngModelChange_2_listener($event) { return ctx.onCurrencyChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CurrencyAmountSelectComponent_option_3_Template, 2, 3, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currency);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx.currencies));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]], styles: ["div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], div[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\ndiv[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font: 400 16px Arial, Helvetica, sans-serif;\n  width: 130px;\n  padding: 2px;\n  border: 1px solid gray;\n  height: 25px;\n  margin-right: 10px;\n}\ndiv[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  font: 400 16px Arial, Helvetica, sans-serif;\n  padding: 2px;\n  border: 1px solid gray;\n  height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXJyZW5jeS1hbW91bnQtc2VsZWN0L0M6XFxVc2Vyc1xcYXNjdWtpbnNcXHByb2plY3RzXFxjdXJyZW5jeS1jb252ZXJ0ZXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGN1cnJlbmN5LWFtb3VudC1zZWxlY3RcXGN1cnJlbmN5LWFtb3VudC1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY3VycmVuY3ktYW1vdW50LXNlbGVjdC9jdXJyZW5jeS1hbW91bnQtc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFOztFQUVFLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQ0ZKO0FES0U7RUFDRSwyQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNISjtBRE1FO0VBQ0UsMkNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2N1cnJlbmN5LWFtb3VudC1zZWxlY3QvY3VycmVuY3ktYW1vdW50LXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMtdmFyaWFibGVzXCI7XHJcblxyXG5kaXYge1xyXG4gIGlucHV0LFxyXG4gIHNlbGVjdCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgZm9udDogNDAwICRmb250LXNpemUtc3RhbmRhcmQgJGZvbnQtZmFtaWx5LXN0YW5kYXJkO1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIHNlbGVjdCB7XHJcbiAgICBmb250OiA0MDAgJGZvbnQtc2l6ZS1zdGFuZGFyZCAkZm9udC1mYW1pbHktc3RhbmRhcmQ7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gIH1cclxufVxyXG4iLCJkaXYgaW5wdXQsXG5kaXYgc2VsZWN0IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5kaXYgaW5wdXQge1xuICBmb250OiA0MDAgMTZweCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogMTMwcHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5kaXYgc2VsZWN0IHtcbiAgZm9udDogNDAwIDE2cHggQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBoZWlnaHQ6IDI1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencyAmountSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-currency-amount-select',
                templateUrl: './currency-amount-select.component.html',
                styleUrls: ['./currency-amount-select.component.scss']
            }]
    }], function () { return []; }, { currencies: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currency: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], amount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currencyChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], amountChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/currency-exchange/currency-exchange.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/currency-exchange/currency-exchange.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CurrencyExchangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyExchangeComponent", function() { return CurrencyExchangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_currency_rates_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/currency-rates.service */ "./src/app/services/currency-rates.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _currency_amount_select_currency_amount_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../currency-amount-select/currency-amount-select.component */ "./src/app/components/currency-amount-select/currency-amount-select.component.ts");





function CurrencyExchangeComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-currency-amount-select", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("amountChange", function CurrencyExchangeComponent_ng_container_5_Template_app_currency_amount_select_amountChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.amount1 = $event; })("currencyChange", function CurrencyExchangeComponent_ng_container_5_Template_app_currency_amount_select_currencyChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.currency1 = $event; })("amountChange", function CurrencyExchangeComponent_ng_container_5_Template_app_currency_amount_select_amountChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onAmount1Changed(); })("currencyChange", function CurrencyExchangeComponent_ng_container_5_Template_app_currency_amount_select_currencyChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onCurrencyChanged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Approximately equals to: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-currency-amount-select", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("amountChange", function CurrencyExchangeComponent_ng_container_5_Template_app_currency_amount_select_amountChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.amount2 = $event; })("currencyChange", function CurrencyExchangeComponent_ng_container_5_Template_app_currency_amount_select_currencyChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.currency2 = $event; })("amountChange", function CurrencyExchangeComponent_ng_container_5_Template_app_currency_amount_select_amountChange_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onAmount2Changed(); })("currencyChange", function CurrencyExchangeComponent_ng_container_5_Template_app_currency_amount_select_currencyChange_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onCurrencyChanged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Rates dated: ", ctx_r0.currencyRatesService.rateDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currencies", ctx_r0.currencyRatesService.currencies)("amount", ctx_r0.amount1)("currency", ctx_r0.currency1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currencies", ctx_r0.currencyRatesService.currencies)("amount", ctx_r0.amount2)("currency", ctx_r0.currency2);
} }
class CurrencyExchangeComponent {
    constructor(currencyRatesService) {
        this.currencyRatesService = currencyRatesService;
        this.currency1 = 'USD';
        this.currency2 = 'EUR';
        this.amount1 = 1.00;
        this.amount2 = 1.00;
        this.mostRecentAmountChanged = 1;
        this.onAmount1Changed();
    }
    onAmount1Changed() {
        this.mostRecentAmountChanged = 1;
        this.amount2 = this.currencyRatesService.exchange(this.amount1, this.currency1, this.currency2);
    }
    onAmount2Changed() {
        this.mostRecentAmountChanged = 2;
        this.amount1 = this.currencyRatesService.exchange(this.amount2, this.currency2, this.currency1);
    }
    onCurrencyChanged() {
        if (this.mostRecentAmountChanged === 1) {
            this.amount2 = this.currencyRatesService.exchange(this.amount1, this.currency1, this.currency2);
        }
        else {
            this.amount1 = this.currencyRatesService.exchange(this.amount2, this.currency2, this.currency1);
        }
    }
}
CurrencyExchangeComponent.ɵfac = function CurrencyExchangeComponent_Factory(t) { return new (t || CurrencyExchangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_currency_rates_service__WEBPACK_IMPORTED_MODULE_1__["CurrencyRatesService"])); };
CurrencyExchangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrencyExchangeComponent, selectors: [["app-currency-exchange"]], decls: 6, vars: 2, consts: [[1, "container"], [4, "ngIf"], [3, "currencies", "amount", "currency", "amountChange", "currencyChange"]], template: function CurrencyExchangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Currency exchange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CurrencyExchangeComponent_ng_container_5_Template, 9, 7, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currencyRatesService.rateLoadStatusMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currencyRatesService.currenciesExist());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _currency_amount_select_currency_amount_select_component__WEBPACK_IMPORTED_MODULE_3__["CurrencyAmountSelectComponent"]], styles: ["div.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXJyZW5jeS1leGNoYW5nZS9DOlxcVXNlcnNcXGFzY3VraW5zXFxwcm9qZWN0c1xcY3VycmVuY3ktY29udmVydGVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjdXJyZW5jeS1leGNoYW5nZVxcY3VycmVuY3ktZXhjaGFuZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY3VycmVuY3ktZXhjaGFuZ2UvY3VycmVuY3ktZXhjaGFuZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxXQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2N1cnJlbmN5LWV4Y2hhbmdlL2N1cnJlbmN5LWV4Y2hhbmdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmNvbnRhaW5lciB7XHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICB9XHJcbn1cclxuIiwiZGl2LmNvbnRhaW5lciBwIHtcbiAgbWFyZ2luOiA4cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencyExchangeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-currency-exchange',
                templateUrl: './currency-exchange.component.html',
                styleUrls: ['./currency-exchange.component.scss']
            }]
    }], function () { return [{ type: src_app_services_currency_rates_service__WEBPACK_IMPORTED_MODULE_1__["CurrencyRatesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/currency-rates.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/currency-rates.service.ts ***!
  \****************************************************/
/*! exports provided: CurrencyRatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyRatesService", function() { return CurrencyRatesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class CurrencyRatesService {
    constructor(http) {
        this.http = http;
        this.rateLoadStatusMessage = '';
        this.rateDate = new Date();
    }
    isEmpty(obj) {
        if (!obj) {
            return true;
        }
        // tslint:disable-next-line:forin
        for (const x in obj) {
            return false;
        }
        return true;
    }
    currenciesExist() {
        return !this.isEmpty(this.currencies);
    }
    initializeRates() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])({
            currencies: this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].currencyListUrl),
            rateContainer: this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].currencyRatesContainerUrl),
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.rateLoadStatusMessage = 'Openexchangerates API fetch succeded.'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            this.rateLoadStatusMessage = 'Openexchangerates API fetch failed. Using local copy. ' +
                'Please check the settings in environment.ts';
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])({
                currencies: this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].currencyListBackupUrl),
                rateContainer: this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].currencyRatesContainerBackupUrl),
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            this.rateLoadStatusMessage = 'Could not fetch rates. ' +
                'Please check the settings in environment.ts';
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
                currencies: {},
                rateContainer: { rates: {} }
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(result => {
            this.currencies = result.currencies;
            this.rateContainer = result.rateContainer;
            this.rateContainer.rates[this.rateContainer.base] = 1;
            this.cleanUpCurrenciesWithoutRates();
            this.rateDate = new Date(this.rateContainer.timestamp * 1000);
        }))
            .toPromise();
    }
    cleanUpCurrenciesWithoutRates() {
        Object.getOwnPropertyNames(this.currencies).forEach(currencyCode => {
            if (!this.rateContainer.rates[currencyCode]) {
                delete this.currencies[currencyCode];
            }
        });
    }
    exchange(amount, currencyFrom, currencyTo) {
        amount = Number(amount);
        const rateFrom = this.rateContainer.rates[currencyFrom];
        const rateTo = this.rateContainer.rates[currencyTo];
        if (rateFrom && rateTo) {
            return amount * (rateTo / rateFrom);
        }
        else {
            return 0;
        }
    }
}
CurrencyRatesService.ɵfac = function CurrencyRatesService_Factory(t) { return new (t || CurrencyRatesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
CurrencyRatesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CurrencyRatesService, factory: CurrencyRatesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencyRatesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


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
// It is isecure and generally bad practice to keep API keys in git repo, so please populate your API key before run
const openexchangeratesApiKey = '0e99a90e26224cc285f0d8f8cc7cadf2';
const environment = {
    production: false,
    currencyListUrl: 'https://openexchangerates.org/api/currencies.json',
    currencyRatesContainerUrl: `https://openexchangerates.org/api/latest.json?app_id=${openexchangeratesApiKey}&base=USD`,
    currencyListBackupUrl: '/assets/currencies/currencies.json',
    currencyRatesContainerBackupUrl: '/assets/currencies/latest.json'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ascukins\projects\currency-converter\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map