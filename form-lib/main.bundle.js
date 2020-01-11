webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-playground></app-playground>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_form_form_component__ = __webpack_require__("./src/app/components/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_section_section_component__ = __webpack_require__("./src/app/components/section/section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_input_text_input_text_component__ = __webpack_require__("./src/app/components/input-text/input-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_input_currency_input_currency_component__ = __webpack_require__("./src/app/components/input-currency/input-currency.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_playground_playground_component__ = __webpack_require__("./src/app/components/playground/playground.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_form_service__ = __webpack_require__("./src/app/services/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_form_form_component__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_section_section_component__["a" /* SectionComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_input_text_input_text_component__["a" /* InputTextComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_input_currency_input_currency_component__["a" /* InputCurrencyComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_playground_playground_component__["a" /* PlaygroundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_form_service__["a" /* FormService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/form/form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card border rounded\" style=\"width: 700px; margin: 0 auto;\">\n  <div class=\"row\" style=\"margin-top: 0.5em\">\n    <div class=\"col col-sm-2\" style=\"padding-left: 1.5em\">\n      <button type=\"button\" class=\"btn btn-outline-danger border-0\">\n        Cancel\n      </button>\n    </div>\n    <div class=\"col text-center\" style=\"padding: 0.3em\">\n      <h5 class=\"card-title\">{{ formWidget.name }}</h5>\n    </div>\n    <div class=\"col  col-sm-2 text-right\" style=\"padding-right: 1.5em\">\n      <button type=\"button\" class=\"btn btn-outline-success border-0\">\n        Save\n      </button>\n    </div>\n  </div>\n\n  <!-- actual form contents go here -->\n  <ng-container *ngFor=\"let section of formWidget.items\">\n    <ng-container *ngIf=\"section.type === 'section'\">\n      <app-section [formSection]=\"section\"></app-section>\n    </ng-container>\n  </ng-container>\n</div>\n\n<pre\n  >{{ formWidget | json }}\n</pre>\n"

/***/ }),

/***/ "./src/app/components/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormComponent = /** @class */ (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnChanges = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "formWidget", void 0);
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-form',
            template: __webpack_require__("./src/app/components/form/form.component.html"),
            styles: [__webpack_require__("./src/app/components/form/form.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/components/input-currency/input-currency.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/input-currency/input-currency.component.html":
/***/ (function(module, exports) {

module.exports = "  <label>{{formItem.label}}</label>\n\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n      <div class=\"input-group-text\">{{currencyCode}}</div>\n    </div>\n    <input type=\"number\" class=\"form-control\"\n      [placeholder]=\"formItem.label\"\n      [(ngModel)]=\"formItem.value\"\n      [step]=\"numberStep\"\n      (keyup)=\"roundValueToPrecision()\"\n      >\n  </div>\n  <!-- {{formItem | json}} -->\n\n"

/***/ }),

/***/ "./src/app/components/input-currency/input-currency.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputCurrencyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputCurrencyComponent = /** @class */ (function () {
    function InputCurrencyComponent() {
    }
    InputCurrencyComponent.prototype.roundValueToPrecision = function () {
        if (this.formItem.value) {
            this.formItem.value =
                Math.floor(this.formItem.value * Math.pow(10, this.formItem.precision))
                    / Math.pow(10, this.formItem.precision);
        }
    };
    InputCurrencyComponent.prototype.ngOnChanges = function () {
        if (!this.formItem.precision) {
            this.formItem.precision = 0;
        }
        this.numberStep = Math.pow(10, -this.formItem.precision);
        if (!this.formItem.symbol) {
            this.currencyCode = '';
        }
        else {
            if (this.formItem.symbol === 'EUR') {
                this.currencyCode = '€';
            }
            else if (this.formItem.symbol === 'USD') {
                this.currencyCode = '$';
            }
            else {
                this.currencyCode = this.formItem.symbol;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], InputCurrencyComponent.prototype, "formItem", void 0);
    InputCurrencyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-input-currency',
            template: __webpack_require__("./src/app/components/input-currency/input-currency.component.html"),
            styles: [__webpack_require__("./src/app/components/input-currency/input-currency.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], InputCurrencyComponent);
    return InputCurrencyComponent;
}());



/***/ }),

/***/ "./src/app/components/input-text/input-text.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/input-text/input-text.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"form-group\">\n  <label>{{formItem.label}}</label>\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"formItem.value\" [placeholder]=\"formItem.label\">\n</div>\n\n<!-- {{formItem | json}} -->\n"

/***/ }),

/***/ "./src/app/components/input-text/input-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputTextComponent = /** @class */ (function () {
    function InputTextComponent() {
    }
    InputTextComponent.prototype.ngOnChanges = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], InputTextComponent.prototype, "formItem", void 0);
    InputTextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-input-text',
            template: __webpack_require__("./src/app/components/input-text/input-text.component.html"),
            styles: [__webpack_require__("./src/app/components/input-text/input-text.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], InputTextComponent);
    return InputTextComponent;
}());



/***/ }),

/***/ "./src/app/components/playground/playground.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/playground/playground.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center; color:darkcyan\">\n  Test data: https://ascukins.github.io/form-lib/assets/data.json\n</div>\n<div\n  class=\"card border rounded\"\n  style=\"width: 700px; margin: 0 auto; padding-top:1px\"\n>\n  <div class=\"row\">\n    <div class=\"col col-3\">\n      <button\n        style=\"margin-top: 1px; margin-left: 2px;\"\n        type=\"button\"\n        class=\"btn btn-outline-primary border-0\"\n        (click)=\"formService.resetJson()\"\n      >\n        Reset JSON\n      </button>\n    </div>\n\n    <div class=\"col\">\n      <div class=\"input-group\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"http://www.site.com/path/file.json\"\n          [(ngModel)]=\"formService.jsonPath\"\n        />\n        <button\n          style=\"margin-right: 1px;\"\n          type=\"button\"\n          class=\"btn  btn-outline-primary border-0\"\n          (click)=\"formService.loadJson()\"\n        >\n          Load JSON\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n<br />\n<app-form\n  [formWidget]=\"formService.widgets.widgets[0]\"\n  *ngIf=\"\n    formService.widgets &&\n    formService.widgets.widgets &&\n    formService.widgets.widgets.length\n  \"\n></app-form>\n\n<!-- <pre style=\"color:darkcyan\">JSON source: {{formService.widgets | json}}</pre> -->\n"

/***/ }),

/***/ "./src/app/components/playground/playground.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaygroundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_form_service__ = __webpack_require__("./src/app/services/form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlaygroundComponent = /** @class */ (function () {
    function PlaygroundComponent(formService) {
        this.formService = formService;
    }
    PlaygroundComponent.prototype.ngOnInit = function () {
        // we might want to add json loading here in real life
    };
    PlaygroundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-playground',
            template: __webpack_require__("./src/app/components/playground/playground.component.html"),
            styles: [__webpack_require__("./src/app/components/playground/playground.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_form_service__["a" /* FormService */]])
    ], PlaygroundComponent);
    return PlaygroundComponent;
}());



/***/ }),

/***/ "./src/app/components/section/section.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/section/section.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-header border\">\n    {{formSection.header}}\n</div>\n<div class=\"card-body\">\n    <div class=\"row\">\n      <div [class]=\"'col col-'+controlWidth\" *ngFor=\"let control of formSection.items\">\n          <ng-container [ngSwitch]=\"control.type\">\n            <app-input-text      *ngSwitchCase=\"'input'\"    [formItem]=\"control\"></app-input-text>\n            <app-input-currency  *ngSwitchCase=\"'currency'\" [formItem]=\"control\" ></app-input-currency>\n          </ng-container>\n      </div>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/section/section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectionComponent = /** @class */ (function () {
    function SectionComponent() {
    }
    SectionComponent.prototype.ngOnChanges = function () {
        if (this.formSection.columns) {
            switch (this.formSection.columns) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 6:
                case 12:
                    this.controlWidth = Math.round(12 / this.formSection.columns);
                    break;
                default: this.controlWidth = 12;
            }
        }
        else {
            this.controlWidth = 12;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], SectionComponent.prototype, "formSection", void 0);
    SectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-section',
            template: __webpack_require__("./src/app/components/section/section.component.html"),
            styles: [__webpack_require__("./src/app/components/section/section.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], SectionComponent);
    return SectionComponent;
}());



/***/ }),

/***/ "./src/app/services/form.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormService = /** @class */ (function () {
    function FormService(httpClient) {
        this.httpClient = httpClient;
        this.jsonPath = '';
        this.widgets = {
            'widgets': [
                {
                    'id': 1,
                    'name': 'Blobex Corporation',
                    'type': 'form',
                    'items': [
                        {
                            'type': 'section',
                            'header': 'Opportunity details',
                            'columns': 2,
                            'items': [
                                {
                                    'type': 'input',
                                    'label': 'Opportunity name',
                                    'value': 'Acme - 1200 Widgets (Sample)',
                                    'required': true
                                },
                                {
                                    'type': 'currency',
                                    'label': 'Amount + currency',
                                    'value': 146,
                                    'symbol': 'EUR'
                                },
                                {
                                    'type': 'currency',
                                    'label': 'Another input',
                                    'value': 140000.00,
                                    'symbol': 'EUR',
                                    'precision': 2
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    }
    FormService.prototype.loadJson = function () {
        var _this = this;
        if (this.jsonPath) {
            this.widgets = null;
            this.httpClient.get(this.jsonPath)
                .subscribe(function (data) {
                console.log(data);
                _this.widgets = data;
            });
        }
    };
    FormService.prototype.resetJson = function () {
        this.widgets = {
            'widgets': [
                {
                    'id': 1,
                    'name': 'Blobex Corporation',
                    'type': 'form',
                    'items': [
                        {
                            'type': 'section',
                            'header': 'Opportunity details',
                            'columns': 2,
                            'items': [
                                {
                                    'type': 'input',
                                    'label': 'Opportunity name',
                                    'value': 'Acme - 1200 Widgets (Sample)',
                                    'required': true
                                },
                                {
                                    'type': 'currency',
                                    'label': 'Amount + currency',
                                    'value': 146,
                                    'symbol': 'EUR'
                                },
                                {
                                    'type': 'currency',
                                    'label': 'Another input',
                                    'value': 140000.00,
                                    'symbol': 'EUR',
                                    'precision': 2
                                }
                            ]
                        },
                        {
                            'type': 'section',
                            'header': 'Second Section',
                            'columns': 3,
                            'items': [
                                {
                                    'type': 'input',
                                    'label': 'First text',
                                    'value': 'First value :)',
                                    'required': true
                                },
                                {
                                    'type': 'input',
                                    'label': 'Second text',
                                    'value': 'The currencyPipe does provide this possibility',
                                    'required': true
                                },
                                {
                                    'type': 'currency',
                                    'label': 'Zero precision',
                                    'value': 0,
                                    'symbol': 'EUR'
                                },
                                {
                                    'type': 'currency',
                                    'label': 'USD, precision 2',
                                    'value': 4500.00,
                                    'symbol': 'USD',
                                    'precision': 2
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    };
    FormService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FormService);
    return FormService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map