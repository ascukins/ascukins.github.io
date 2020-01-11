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

module.exports = "<app-main-form>\n  \n</app-main-form>"

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
        this.title = 'Tour settlements';
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_form_main_form_component__ = __webpack_require__("./src/app/main-form/main-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_tourist_service__ = __webpack_require__("./src/app/services/tourist.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__main_form_main_form_component__["a" /* MainFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_select_ng_select__["a" /* NgSelectModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_tourist_service__["a" /* TouristService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main-form/main-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-form/main-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n\n  <div class=\"card-header\">\n        Friendly settlements\n  </div>\n  <div class=\"card-body\">\n\n\n      <div class=\"card\">\n          <div class=\"card-header\">\n                Add Transaction\n          </div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n            <!-- <label>Transaction</label> -->\n            <div class=\"col-sm-4\">\n              <ng-select [items]=\"tourists\"\n                        bindLabel=\"name\"\n                        bindValue=\"name\"\n                        placeholder=\"Person\"\n                        [(ngModel)]=\"inputPerson\"\n                        [addTag]=\"addPerson\"\n                        [clearable]=\"true\"\n                        [markFirst]=\"false\"\n                        \n                        >\n              </ng-select>\n            </div>\n            <div class=\"col-sm-3\">                <input type=\"number\" class=\"form-control\" placeholder=\"Amount\" [(ngModel)]=\"inputAmount\">            </div>\n            <div class=\"col-sm-5\">                <input type=\"text\" class=\"form-control\" placeholder=\"Comment\" [(ngModel)]=\"inputComment\">            </div>\n\n          </div>  \n          <br>\n          <div class=\"row\">          \n            <div class=\"col-sm\">\n            <ng-select [items]=\"tourists\"\n                      bindLabel=\"name\"\n                      bindValue=\"name\"\n                      placeholder=\"Beneficiaries\"\n                      [(ngModel)]=\"inputBeneficiaries\"\n                      [addTag]=\"addPerson\"\n                      [clearable]=\"true\"\n                      [markFirst]=\"false\"\n                      multiple=\"true\"\n                      >\n            </ng-select>\n            </div>\n            <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!inputPerson || !inputAmount || !inputBeneficiaries || !inputBeneficiaries.length\" (click)=\"addSpending()\">\n                Add\n                <ng-container *ngIf=\"inputPerson\">\n                  for {{inputPerson}}\n                </ng-container>\n  \n              </button>\n            </div>\n\n\n          </div>\n        </div>\n\n\n      <!-- <p>\n          Selected person : {{selectedPerson|json}}\n      </p>\n\n\n\n      <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\" id=\"name-label\">Add tourist</span>\n          </div>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Name\" aria-label=\"Username\" aria-describedby=\"name-label\" (keyup.enter)=\"addTourist()\"  [(ngModel)]=\"touristInput\">\n        </div> -->\n        \n        <br>\n        <!-- <h6>Spendings</h6> -->\n                \n          <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\" *ngIf=\"tourists.length\">\n          <ng-container *ngFor=\"let t of tourists;let i=index\">\n\n              \n              <ngb-panel *ngIf=\"t.spendings.length\">\n                  <ng-template ngbPanelTitle>\n                      <span> <b>{{t.name}}</b> transactions</span>\n                      <!-- <span class=\"float-right\"><button type=\"button\" class=\"btn btn-danger\" (click)=\"removeTourist(i)\">Remove {{t.name}}</button></span> -->\n                  </ng-template>\n                \n                  <ng-template ngbPanelContent>\n                    <!-- <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeTourist(i)\">Remove {{t.name}}</button>\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"addTransactionForTourist(i)\">Add transaction for {{t.name}}</button>\n                    <hr> -->\n                    <table *ngIf=\"t.spendings.length\" class=\"table table-striped\">\n                      <tr>\n                        <th>Amount</th>\n                        <th>Beneficiaries</th>\n                        <th>Comment</th>\n                        <th> </th>\n                      </tr>\n                      <tr *ngFor=\"let sp of t.spendings; let i = index\">\n                        <td>{{sp.amount | currency: 'EUR'}}</td>\n                        <td>{{sp.beneficiaries}}</td>\n                        <td>{{sp.comment}}</td>\n                        <td style=\"width: 10px\"> <button type=\"button\" class=\"btn btn-danger\" (click)=\"t.spendings.splice(i,1); touristService.recalcSummaries();\">X</button> </td>\n                      </tr>\n                    </table>\n                  </ng-template>\n                </ngb-panel>\n                      \n          </ng-container>\n\n          <ngb-panel *ngIf=\"touristService.summaries.length\">\n              <ng-template ngbPanelTitle>\n                  <span> <b>Summary!</b></span>\n              </ng-template>\n            \n              <ng-template ngbPanelContent>\n\n                <table class=\"table table-striped\">\n                  <tr>\n                    <th>Name</th>\n                    <th>Spent</th>\n                    <th>Received</th>\n                    <th>Balance</th>\n                  </tr>\n                  <tr *ngFor=\"let sm of touristService.summaries\">\n                    <td>{{sm.name}}</td>\n                    <td>{{sm.spent | currency: 'EUR': symbol }}</td>\n                    <td>{{sm.received | currency: 'EUR': symbol}}</td>\n                    <td>{{ sm.received - sm.spent | currency: 'EUR': symbol}}</td>\n                  </tr>\n                </table>\n\n                <ng-container>\n                  <ul>\n                      <li  *ngFor=\"let a of touristService.actions\">{{a.nameFrom}} pays to {{a.nameTo}} amount of {{a.amount | currency: 'EUR'}}</li>\n                  </ul>\n                </ng-container>\n                    \n              </ng-template>\n            </ngb-panel>\n                  \n\n      \n          <!-- <ngb-panel title=\"Temp\">\n            <ng-template ngbPanelContent>\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n              aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n            </ng-template>\n        </ngb-panel> -->\n\n      </ngb-accordion>\n<!-- \n    <hr>\n    <pre>{{tourists | json}}</pre>\n    <pre>{{touristService.summaries | json}}</pre>\n    <pre>{{touristService.balances | json}}</pre>\n    <pre>{{touristService.actions | json}}</pre> -->\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/main-form/main-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tourist_service__ = __webpack_require__("./src/app/services/tourist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainFormComponent = /** @class */ (function () {
    function MainFormComponent(touristService) {
        var _this = this;
        this.touristService = touristService;
        this.inputBeneficiaries = [];
        this.tourists = [];
        this.addPerson = function (term) {
            _this.touristService.addPerson(term);
            _this.tourists = _this.touristService.persons.slice();
        };
    }
    MainFormComponent.prototype.addSpending = function () {
        this.touristService.addSpending(this.inputPerson, {
            amount: this.inputAmount,
            comment: this.inputComment,
            beneficiaries: this.inputBeneficiaries
        });
        this.inputAmount = undefined;
        this.inputComment = '';
        this.inputBeneficiaries = [];
        this.tourists = this.touristService.persons.slice();
    };
    MainFormComponent.prototype.ngOnInit = function () {
        this.tourists = this.touristService.persons.slice();
        this.touristService.recalcSummaries();
    };
    MainFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-main-form',
            template: __webpack_require__("./src/app/main-form/main-form.component.html"),
            styles: [__webpack_require__("./src/app/main-form/main-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tourist_service__["a" /* TouristService */]])
    ], MainFormComponent);
    return MainFormComponent;
}());



/***/ }),

/***/ "./src/app/services/tourist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouristService; });
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

var TouristService = /** @class */ (function () {
    function TouristService() {
        // if (this.persons.length === 0) {
        //   this.persons = [
        //     {
        //       name: 'Alex',
        //       spendings: [
        //         {
        //           amount: 300,
        //           comment: 'For transport',
        //           beneficiaries: [
        //             'Alex', 'Nino', 'Rito'
        //           ]
        //         }
        //       ]
        this.persons = [];
        this.summaries = [];
        this.balances = [];
        this.actions = [];
        //     },
        //     {
        //       name: 'Nino',
        //       spendings: [
        //         {
        //             amount: 20,
        //             comment: 'Food',
        //             beneficiaries: [
        //               'Nino', 'Rito'
        //             ]
        //         },
        //         {
        //             amount: 30,
        //             comment: 'Museum',
        //             beneficiaries: [
        //               'Alex', 'Nino', 'Rito'
        //             ]
        //           }
        //         ]
        //     },
        //     {
        //       'name': 'Tinka',
        //       'spendings': [
        //         {
        //           'amount': 500,
        //           'comment': 'hyhh',
        //           'beneficiaries': [
        //             'Alex',
        //             'Nino'
        //           ]
        //         }
        //       ]
        //     }
        //   ];
        // }
    }
    TouristService.prototype.addPerson = function (name) {
        this.persons.push({
            name: name,
            spendings: []
        });
    };
    TouristService.prototype.addSpending = function (name, spending) {
        for (var _i = 0, _a = this.persons; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.name === name) {
                p.spendings.push(spending);
                break;
            }
        }
        this.recalcSummaries();
    };
    TouristService.prototype.addToPersonSummary = function (name, spent, received) {
        var nameFound = false;
        for (var _i = 0, _a = this.summaries; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.name === name) {
                nameFound = true;
                p.spent += spent;
                p.received += received;
                break;
            }
        }
        if (!nameFound) {
            this.summaries.push({
                name: name,
                spent: spent,
                received: received,
            });
        }
    };
    TouristService.prototype.recalcSummaries = function () {
        for (var _i = 0, _a = this.summaries; _i < _a.length; _i++) {
            var sm = _a[_i];
            sm.received = 0;
            sm.spent = 0;
        }
        for (var _b = 0, _c = this.persons; _b < _c.length; _b++) {
            var p = _c[_b];
            for (var _d = 0, _e = p.spendings; _d < _e.length; _d++) {
                var sp = _e[_d];
                this.addToPersonSummary(p.name, sp.amount, 0);
                var beneficiaryCount = sp.beneficiaries.length;
                for (var _f = 0, _g = sp.beneficiaries; _f < _g.length; _f++) {
                    var ben = _g[_f];
                    this.addToPersonSummary(ben, 0, sp.amount / beneficiaryCount);
                }
            }
        }
        this.summaries.sort(function (a, b) { return (a.received - a.spent) - (b.received - b.spent); });
        this.balances = [];
        for (var _h = 0, _j = this.summaries; _h < _j.length; _h++) {
            var sm = _j[_h];
            this.balances.push({
                name: sm.name,
                balance: (sm.received - sm.spent)
            });
        }
        this.actions = [];
        for (var positiveBal = 0; positiveBal < this.balances.length; positiveBal++) {
            //          if (this.balances[i].balance > 0) { // has free money
            for (var negativeBal = this.balances.length - 1; negativeBal >= 0 && this.balances[positiveBal].balance > 0; negativeBal--) {
                if (this.balances[negativeBal].balance < 0) {
                    var amnt = 0;
                    if (this.balances[positiveBal].balance > -this.balances[negativeBal].balance) {
                        amnt = -this.balances[negativeBal].balance;
                    }
                    else {
                        amnt = this.balances[positiveBal].balance;
                    }
                    this.actions.push({
                        nameFrom: this.balances[positiveBal].name,
                        nameTo: this.balances[negativeBal].name,
                        amount: amnt
                    });
                    this.balances[negativeBal].balance += amnt;
                    this.balances[positiveBal].balance -= amnt;
                }
            }
            //          }
        }
    };
    TouristService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TouristService);
    return TouristService;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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