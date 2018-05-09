webpackJsonp([0],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleMenuPageModule", function() { return ToggleMenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toggle_menu__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ToggleMenuPageModule = /** @class */ (function () {
    function ToggleMenuPageModule() {
    }
    ToggleMenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__toggle_menu__["a" /* ToggleMenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__toggle_menu__["a" /* ToggleMenuPage */]),
            ],
        })
    ], ToggleMenuPageModule);
    return ToggleMenuPageModule;
}());

//# sourceMappingURL=toggle-menu.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ToggleMenuPage = /** @class */ (function () {
    function ToggleMenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ToggleMenuPage.prototype.openAboutPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */]);
    };
    ToggleMenuPage.prototype.openSettingPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */]);
    };
    ToggleMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ToggleMenuPage');
    };
    ToggleMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-toggle-menu',template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\pages\toggle-menu\toggle-menu.html"*/'<ion-header>\n\n  <ion-navbar>\n    \n    <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n  <ion-title>Toggle Menu</ion-title>\n  <button ion-button (click)="doClick()">\n      <ion-icon name="more"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="toggle-menu">\n\n    <ion-grid>\n        <ion-row>\n          <ion-col width-100>\n\n           <img src="../../assets/imgs/image.png" class= "loggis">\n            \n           <div class="menuButton" >\n             <button ion-button full round color="textColor"(click)="openSettingPage()">Settings</button>\n              <button ion-button full round color="textColor">Facebook Event</button>\n              <button ion-button full round color="textColor"(click)="openAboutPage()">About</button>\n              <button ion-button full round color="textColor">Log out</button>\n            </div>\n            </ion-col>\n          </ion-row>\n         </ion-grid>  \n</ion-content>\n\n<ion-header>\n\n  <ion-navbar>\n    \n     \n  \n     \n'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\pages\toggle-menu\toggle-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ToggleMenuPage);
    return ToggleMenuPage;
}());

//# sourceMappingURL=toggle-menu.js.map

/***/ })

});
//# sourceMappingURL=0.js.map