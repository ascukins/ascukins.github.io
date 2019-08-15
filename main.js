(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- {{ticks | json}}\nghjkghjk -->\n<!-- <ng-container *ngIf=\"ticks\"> -->\n\n\n<ng-container *ngIf=\"tickerStoreService.ticker$ | async as ticks\">\n\n  RNG: {{tickerStoreService.rngChoice}}, Speed: {{tickerStoreService.timeInterval.toPrecision(2)}}, Open PnL: {{openPL.toPrecision(2)}}\n  <br>\n  <br>\n  <div class=\"zzz\">\n    <div class=\"zzz2\">\n\n      <div id=\"btn-bar\">\n        <button id=\"pause-btn\" (click)=\"onTogglePause()\"> {{tickerStoreService.paused ? 'Resume' : 'Pause'}} </button>\n        <button id=\"restart-btn\" (click)=\"onRestart()\"> Restart </button>\n        <button id=\"buy-btn\" (click)=\"onBuyClick()\"> {{openTrade ? 'Close' : 'Buy'}} </button>\n        <button id=\"sell-btn\" (click)=\"onSellClick()\"> {{openTrade ? 'Close' : 'Sell'}} </button>\n      </div>\n\n      <svg [attr.width]=\"svgWidth\" [attr.height]=\"svgHeight\" (mousemove)=\"onMouseMove($event)\"\n        (mousedown)=\"onMouseDown($event)\" (mouseup)=\"onMouseUp($event)\">\n\n        <line *ngFor=\"let x of verticalLines\"\n          [attr.x1]=\"x\" [attr.y1]=\"0\" [attr.x2]=\"x\" [attr.y2]=\"svgHeight\" stroke=\"GAINSBORO\"\n          stroke-width=\"1\" stroke-dasharray=\"4\"/>\n\n        <ng-container *ngFor=\"let tick of ticks; index as i\">\n        <line *ngIf=\"i>0 && i<svgWidth\"\n          [attr.x1]=\"i\"\n          [attr.y1]=\"(ticks[i-1] - tickerStoreService.minTick)/(tickerStoreService.maxTick-tickerStoreService.minTick)*svgHeight\"\n          [attr.x2]=\"i\"\n          [attr.y2]=\"(tick - tickerStoreService.minTick)/(tickerStoreService.maxTick-tickerStoreService.minTick)*svgHeight\"\n          stroke=\"blue\" stroke-width=\"1\" />\n        </ng-container>\n\n        <line [attr.x1]=\"svgMouseX\" [attr.y1]=\"0\" [attr.x2]=\"svgMouseX\" [attr.y2]=\"svgHeight\" stroke=\"RED\"\n          stroke-width=\"1\" stroke-dasharray=\"1 4\"/>\n        <line [attr.x1]=\"0\" [attr.y1]=\"svgMouseY\" [attr.x2]=\"svgWidth\" [attr.y2]=\"svgMouseY\" stroke=\"RED\"\n          stroke-width=\"1\" stroke-dasharray=\"1 4\"/>\n\n        <line *ngIf=\"openTrade===-1\"\n          [attr.x1]=\"0\"\n          [attr.y1]=\"(openPrice - tickerStoreService.minTick)/(tickerStoreService.maxTick-tickerStoreService.minTick)*svgHeight\"\n          [attr.x2]=\"svgWidth\"\n          [attr.y2]=\"(openPrice - tickerStoreService.minTick)/(tickerStoreService.maxTick-tickerStoreService.minTick)*svgHeight\"\n          stroke=\"ORANGERED\"\n          stroke-width=\"1\"\n          stroke-dasharray=\"6 3 2 3\"/>\n\n        <line *ngIf=\"openTrade===1\"\n          [attr.x1]=\"0\"\n          [attr.y1]=\"(openPrice - tickerStoreService.minTick)/(tickerStoreService.maxTick-tickerStoreService.minTick)*svgHeight\"\n          [attr.x2]=\"svgWidth\"\n          [attr.y2]=\"(openPrice - tickerStoreService.minTick)/(tickerStoreService.maxTick-tickerStoreService.minTick)*svgHeight\"\n          stroke=\"GREEN\"\n          stroke-width=\"1\"\n          stroke-dasharray=\"6 3 2 3\"/>\n\n\n      </svg>\n    </div>\n  </div>\n  <div id=\"tradeTable\">\n    <div *ngFor=\"let trade of trades\">\n      <span> {{trade.direction}} </span>\n      <span> {{trade.profit}} </span>\n    </div>\n  </div>\n  <div *ngIf=\"profitTotal\">\n    Total profit {{profitTotal}}\n  </div>\n\n</ng-container>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  padding: 20px 5px 20px 5px;\n  width: 70px;\n  margin: 10px; }\n\n#buy-btn {\n  color: blue; }\n\n#sell-btn {\n  color: red; }\n\nsvg {\n  border: 1px solid black;\n  margin: 1px; }\n\n.zzz {\n  border: 0px solid red; }\n\n.zzz2 {\n  border: 0px solid blue; }\n\n#btn-bar {\n  position: absolute;\n  opacity: 0.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhc2N1a2luc1xccHJvamVjdHNcXHRpY2tlcjEvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsVUFBVSxFQUFBOztBQUtaO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLHFCQUFxQixFQUFBOztBQUl2QjtFQUNFLHNCQUFzQixFQUFBOztBQUl4QjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gIHBhZGRpbmc6IDIwcHggNXB4IDIwcHggNXB4O1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuI2J1eS1idG4ge1xyXG4gIGNvbG9yOiBibHVlO1xyXG59XHJcbiNzZWxsLWJ0biB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuXHJcblxyXG5zdmcge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIG1hcmdpbjogMXB4O1xyXG59XHJcblxyXG4uenp6IHtcclxuICBib3JkZXI6IDBweCBzb2xpZCByZWQ7XHJcblxyXG59XHJcblxyXG4uenp6MiB7XHJcbiAgYm9yZGVyOiAwcHggc29saWQgYmx1ZTtcclxuXHJcbn1cclxuXHJcbiNidG4tYmFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _services_ticker_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/ticker-store.service */ "./src/app/services/ticker-store.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(tickerStoreService) {
        this.tickerStoreService = tickerStoreService;
        this.title = 'ticker1';
        this.svgMouseX = 0;
        this.svgMouseY = 0;
        this.svgWidth = 1300;
        this.svgHeight = 600;
        this.draggingSvg = false;
        this.offsetX = 0;
        this.draggingSvgHappened = false;
        this.verticalLines = Array(this.svgWidth / 100).fill(0).map(function (x, i) { return i * 100; });
        this.openTrade = 0;
        this.openPrice = 0;
        this.lastTick = 0;
        this.openPL = 0;
        this.trades = [];
        this.profitTotal = 0;
    }
    AppComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.key === ' ') {
            this.onTogglePause();
        }
        else if (event.key === '+') {
            this.tickerStoreService.speedUp();
        }
        else if (event.key === '-') {
            this.tickerStoreService.slowDown();
        }
        else if (event.key === 'ArrowLeft') {
            this.tickerStoreService.shiftVisibleWindow(200);
        }
        else if (event.key === 'ArrowRight') {
            this.tickerStoreService.shiftVisibleWindow(-200);
        }
        else if (event.key === 'B' || event.key === 'b') {
            this.onBuyClick();
        }
        else if (event.key === 'S' || event.key === 's') {
            this.onSellClick();
        }
        else {
            // console.log(event.key);
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tickerStoreService.ticker$.subscribe(function () {
            _this.lastTick = _this.tickerStoreService.ticks[_this.tickerStoreService.ticks.length - 1];
            if (_this.openTrade === -1) {
                _this.openPL = _this.lastTick - _this.openPrice;
            }
            else if (_this.openTrade === 1) {
                _this.openPL = -_this.lastTick + _this.openPrice;
            }
            else {
                _this.openPL = 0;
            }
        });
    };
    AppComponent.prototype.onTogglePause = function () {
        this.tickerStoreService.togglePause();
    };
    AppComponent.prototype.onRestart = function () {
        this.tickerStoreService.restart();
    };
    AppComponent.prototype.onMouseMove = function (event) {
        // console.log(event.offsetX, event.offsetY);
        this.svgMouseX = event.offsetX;
        this.svgMouseY = event.offsetY;
        if (this.draggingSvg) {
            this.tickerStoreService.shiftVisibleWindow(event.offsetX - this.offsetX);
            if (this.offsetX !== event.offsetX) {
                this.draggingSvgHappened = true;
            }
            this.offsetX = event.offsetX;
        }
    };
    AppComponent.prototype.onMouseDown = function (event) {
        // console.log(event);
        this.draggingSvg = true;
        this.offsetX = event.offsetX;
        this.draggingSvgHappened = false;
    };
    AppComponent.prototype.onMouseUp = function (event) {
        // console.log(event);
        this.draggingSvg = false;
        if (!this.draggingSvgHappened) {
            this.onTogglePause();
        }
        this.draggingSvgHappened = false;
    };
    AppComponent.prototype.buy = function () {
        this.openTrade = 1;
        this.openPrice = this.lastTick;
    };
    AppComponent.prototype.sell = function () {
        this.openTrade = -1;
        this.openPrice = this.lastTick;
    };
    AppComponent.prototype.close = function () {
        this.trades.push({
            direction: this.openTrade === 1 ? 'Buy' : 'Sell',
            profit: Math.round((this.openPrice - this.lastTick) * this.openTrade)
        });
        this.profitTotal = this.trades.map(function (trade) { return trade.profit; }).reduce(function (sum, i) { return sum + i; });
        this.openTrade = 0;
        this.openPrice = 0;
    };
    AppComponent.prototype.onBuyClick = function () {
        if (this.openTrade === 0) {
            this.buy();
        }
        else {
            this.close();
        }
    };
    AppComponent.prototype.onSellClick = function () {
        if (this.openTrade === 0) {
            this.sell();
        }
        else {
            this.close();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "handleKeyboardEvent", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ticker_store_service__WEBPACK_IMPORTED_MODULE_2__["TickerStoreService"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/ticker-store.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/ticker-store.service.ts ***!
  \**************************************************/
/*! exports provided: TickerStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TickerStoreService", function() { return TickerStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! seedrandom */ "./node_modules/seedrandom/index.js");
/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(seedrandom__WEBPACK_IMPORTED_MODULE_4__);






var TickerStoreService = /** @class */ (function () {
    function TickerStoreService() {
        var _this = this;
        this.ticks = [0];
        this.visibleTicks = [0];
        this.paused = false;
        this.maxTick = 10;
        this.minTick = -10;
        this.timeInterval = 8.4;
        this.counter = 0;
        this.visibleShift = 0;
        this.visibleLength = 1200;
        this.rngChoice = 0;
        this.ticker$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([0]);
        this.timeTicker$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () { return !_this.paused; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () { return (++_this.counter % Math.round(_this.timeInterval) === 0); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return _this.generateRandomValue(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (n) {
            _this.ticks[_this.ticks.length] = _this.ticks[_this.ticks.length - 1] + n;
            if (_this.visibleShift > 0) {
                _this.visibleShift++;
            }
            return _this.recalculateVisibleTicks();
        }));
        this.initRNG();
        this.initTicksArray();
        this.subscription = this.timeTicker$.subscribe(function (a) { return _this.ticker$.next(a); });
    }
    TickerStoreService.prototype.initTicksArray = function () {
        this.ticks = [0];
        for (var i = 1; i < this.visibleLength * 2; i++) {
            this.ticks[i] = this.ticks[i - 1] + this.generateRandomValue();
        }
    };
    TickerStoreService.prototype.generateRandomValue = function () {
        var sum = 0;
        for (var i = 0; i < 100; i++) {
            sum += (this.customRNG() - 0.5);
        }
        return sum;
    };
    TickerStoreService.prototype.recalculateVisibleTicks = function () {
        this.visibleTicks = this.ticks.slice(Math.max(0, this.ticks.length - this.visibleShift - this.visibleLength));
        this.maxTick = Math.max.apply(Math, this.visibleTicks);
        this.minTick = Math.min.apply(Math, this.visibleTicks);
        return this.visibleTicks;
    };
    TickerStoreService.prototype.speedUp = function () {
        if (this.timeInterval > 1.5) {
            this.timeInterval /= 1.5;
        }
    };
    TickerStoreService.prototype.slowDown = function () {
        this.timeInterval *= 1.5;
    };
    TickerStoreService.prototype.togglePause = function () {
        this.paused = !this.paused;
    };
    TickerStoreService.prototype.restart = function () {
        this.initTicksArray();
        this.paused = false;
        this.shiftVisibleWindow(-this.ticks.length);
    };
    TickerStoreService.prototype.shiftVisibleWindow = function (n) {
        this.visibleShift += n;
        if (n > 0) {
            this.visibleShift = Math.min(this.visibleShift, this.ticks.length - this.visibleLength);
        }
        else {
            this.visibleShift = Math.max(this.visibleShift, 0);
        }
        this.paused = !!this.visibleShift;
        this.ticker$.next(this.recalculateVisibleTicks());
    };
    TickerStoreService.prototype.initRNG = function () {
        this.rngChoice = Math.floor(Math.random() * 7);
        var seed = Math.random().toString();
        console.log('RNG type: ' + this.rngChoice);
        switch (this.rngChoice) {
            case 0:
                this.customRNG = seedrandom__WEBPACK_IMPORTED_MODULE_4__["alea"](seed);
                break;
            case 1:
                this.customRNG = seedrandom__WEBPACK_IMPORTED_MODULE_4__["xor128"](seed);
                break;
            case 2:
                this.customRNG = seedrandom__WEBPACK_IMPORTED_MODULE_4__["tychei"](seed);
                break;
            case 3:
                this.customRNG = seedrandom__WEBPACK_IMPORTED_MODULE_4__["xorwow"](seed);
                break;
            case 4:
                this.customRNG = seedrandom__WEBPACK_IMPORTED_MODULE_4__["xor4096"](seed);
                break;
            case 5:
                this.customRNG = seedrandom__WEBPACK_IMPORTED_MODULE_4__["xorshift7"](seed);
                break;
            default:
                this.customRNG = Math.random;
                break;
        }
    };
    TickerStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TickerStoreService);
    return TickerStoreService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ascukins\projects\ticker1\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map