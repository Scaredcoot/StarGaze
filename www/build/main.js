webpackJsonp([9],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LogInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LogInPage = /** @class */ (function () {
    function LogInPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LogInPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LogInPage');
    };
    LogInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-log-in',template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\pages\log-in\log-in.html"*/'<!--\n\n  Generated template for the LogInPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title></ion-title>\n\n   \n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="log-in">\n\n    <img src="../../assets/imgs/image.png">\n\n<ion-grid>\n\n<ion-row>\n\n  <ion-col width-100>\n\n     <div class="logga" >\n\n      <button ion-button full round>Log in with Facebook</button>\n\n      <button ion-button full round color="danger">Log in with Google</button>\n\n    </div>\n\n    </ion-col>\n\n</ion-row>\n\n </ion-grid>  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\pages\log-in\log-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LogInPage);
    return LogInPage;
}());

//# sourceMappingURL=log-in.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\pages\menu\menu.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Menu</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding class="menu">\n\n    <img src="../../assets/imgs/image.png">\n\n   \n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n          <ion-col width-100>\n\n             <div class="menuButton" >\n\n               <ion-item class="ion-toggle">\n\n                 <ion-label>Push notifications </ion-label>\n\n                 <ion-toggle>disabled checked="false"</ion-toggle>\n\n               </ion-item>\n\n              <button ion-button full round color="textColor">Settings</button>\n\n              <button ion-button full round color="textColor">Facebook Event</button>\n\n              <button ion-button full round color="textColor">Help</button>\n\n              <button ion-button full round color="textColor">Log out</button>\n\n            </div>\n\n            </ion-col>\n\n          </ion-row>\n\n         </ion-grid>  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gardet_gardet__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nacka_nacka__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jarva_jarva__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grimsta_grimsta__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tyresta_tyresta__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TodayPage = /** @class */ (function () {
    function TodayPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TodayPage.prototype.GardetPlaces = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__gardet_gardet__["a" /* GardetPage */]);
    };
    TodayPage.prototype.JarvaPlaces = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__jarva_jarva__["a" /* JarvaPage */]);
    };
    TodayPage.prototype.NackaPlaces = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__nacka_nacka__["a" /* NackaPage */]);
    };
    TodayPage.prototype.TyrestaPlaces = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tyresta_tyresta__["a" /* TyrestaPage */]);
    };
    TodayPage.prototype.GrimstaPlaces = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__grimsta_grimsta__["a" /* GrimstaPage */]);
    };
    TodayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TodayPage');
    };
    TodayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-today',template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\pages\today\today.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Status for today</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class= "today">\n\n <ion-img width="40" height="40" src="../../assets/imgs/image2.png"></ion-img>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col width-50 offset-25>\n\n        <div text-center> <h1 strong> Stockholm today </h1> </div> \n\n        <div text-center> <h5 strong> Status: Good </h5> </div>\n\n        <ul>\n\n          <li>Light: 30 %</li> \n\n          <li>Temp: 11° </li>\n\n          <li>Visibility: 3 km</li>\n\n          <li></li>\n\n          <li></li><li></li>\n\n          <li></li><li></li>\n\n          <li></li>\n\n      </ul>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col width-50>\n\n        <h6 strong> Show forecast for... </h6> \n\n          <ul>\n\n            <li><a href="#" (click)="GardetPlaces()">Gärdet</a></li> \n\n            <li><a href="#" (click)="TyrestaPlaces()">Tyresta Naturpark</a></li>\n\n            <li><a href="#" (click)="NackaPlaces()">Nackareservatet</a></li>\n\n            <li><a href="#" (click)="GrimstaPlaces()">Grimsta</a></li>\n\n            <li><a href="#" (click)="JarvaPlaces()"> Järvafältet</a></li>\n\n          </ul>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\pages\today\today.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
    ], TodayPage);
    return TodayPage;
    var _a, _b;
}());

//# sourceMappingURL=today.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/gardet/gardet.module": [
		276,
		4
	],
	"../pages/grimsta/grimsta.module": [
		277,
		3
	],
	"../pages/jarva/jarva.module": [
		278,
		2
	],
	"../pages/log-in/log-in.module": [
		279,
		8
	],
	"../pages/menu/menu.module": [
		280,
		7
	],
	"../pages/nacka/nacka.module": [
		281,
		1
	],
	"../pages/places/places.module": [
		282,
		6
	],
	"../pages/today/today.module": [
		283,
		5
	],
	"../pages/tyresta/tyresta.module": [
		284,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_in_log_in__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__today_today__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__places_places__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__log_in_log_in__["a" /* LogInPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__today_today__["a" /* TodayPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__places_places__["a" /* PlacesPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Log in" tabIcon="ios-log-in"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Today" tabIcon="ios-cloud-circle-outline"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Places" tabIcon="star-outline"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Menu" tabIcon="menu"></ion-tab>\n\n  \n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_log_in_log_in__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_today_today__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_menu_menu__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_gardet_gardet__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_jarva_jarva__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_nacka_nacka__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_grimsta_grimsta__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tyresta_tyresta__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(196);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_log_in_log_in__["a" /* LogInPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_today_today__["a" /* TodayPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_gardet_gardet__["a" /* GardetPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_nacka_nacka__["a" /* NackaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_jarva_jarva__["a" /* JarvaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tyresta_tyresta__["a" /* TyrestaPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_grimsta_grimsta__["a" /* GrimstaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/gardet/gardet.module#GardetPageModule', name: 'GardetPage', segment: 'gardet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/grimsta/grimsta.module#GrimstaPageModule', name: 'GrimstaPage', segment: 'grimsta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jarva/jarva.module#JarvaPageModule', name: 'JarvaPage', segment: 'jarva', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/log-in/log-in.module#LogInPageModule', name: 'LogInPage', segment: 'log-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nacka/nacka.module#NackaPageModule', name: 'NackaPage', segment: 'nacka', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/places/places.module#PlacesPageModule', name: 'PlacesPage', segment: 'places', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/today/today.module#TodayPageModule', name: 'TodayPage', segment: 'today', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tyresta/tyresta.module#TyrestaPageModule', name: 'TyrestaPage', segment: 'tyresta', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_log_in_log_in__["a" /* LogInPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_today_today__["a" /* TodayPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_gardet_gardet__["a" /* GardetPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_nacka_nacka__["a" /* NackaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_jarva_jarva__["a" /* JarvaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tyresta_tyresta__["a" /* TyrestaPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_grimsta_grimsta__["a" /* GrimstaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h2>Welcome to Ionic!</h2>\n\n  <p>\n\n    This starter project comes with simple tabs-based layout for apps\n\n    that are going to primarily use a Tabbed UI.\n\n  </p>\n\n  <p>\n\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n\n    update any existing page or create new pages.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GardetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GardetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GardetPage = /** @class */ (function () {
    function GardetPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GardetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GardetPage');
    };
    GardetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gardet',template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\pages\gardet\gardet.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Places</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding class="places">\n      <ion-img width="40" height="40" src="../../assets/imgs/image2.png"></ion-img>\n    <ion-grid>\n      <ion-row>\n        <ion-col width-50 offset-25>\n          <div text-center>\n            <h1 strong> Gärdet tonight</h1>\n          </div>\n          <div text-center>\n            <h5 strong> Status: Good </h5>\n          </div>\n          \n    \n        <ion-scroll class="scroll" style="width:100%; height:160px">\n         <div class="cards">\n          <ion-card>\n            <ion-card-header>\n              Light\n            </ion-card-header>\n            <ion-card-content>\n              30%\n            </ion-card-content>\n          </ion-card>\n          <ion-card>\n              <ion-card-header>\n                Temp\n              </ion-card-header>\n              <ion-card-content>\n                11\n              </ion-card-content>\n            </ion-card>\n           <ion-card>\n               <ion-card-header>\n                Visibility\n              </ion-card-header>\n              <ion-card-content>\n                3 km\n              </ion-card-content>\n            </ion-card>\n          </div>\n         </ion-scroll>\n         \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col width-50>\n          <h6 strong> Forecast </h6>\n          <ul>\n            <p class="alignright">Good</p>\n            <li>Tuesday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Good</p>\n            <li>Wednesday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Bad</p>\n            <li>Thursday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Good</p>\n            <li>Friday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Bad</p>\n            <li>Saturday</li>\n            <div style="clear: both;"></div>\n  \n          </ul>\n          \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  \n  \n  \n  </ion-content>\n'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\pages\gardet\gardet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], GardetPage);
    return GardetPage;
}());

//# sourceMappingURL=gardet.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrimstaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GrimstaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GrimstaPage = /** @class */ (function () {
    function GrimstaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GrimstaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GrimstaPage');
    };
    GrimstaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-grimsta',template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\pages\grimsta\grimsta.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Places</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding class="places">\n      <ion-img width="40" height="40" src="../../assets/imgs/image2.png"></ion-img>\n    <ion-grid>\n      <ion-row>\n        <ion-col width-50 offset-25>\n          <div text-center>\n            <h1 strong> Grimsta tonight</h1>\n          </div>\n          <div text-center>\n            <h5 strong> Status: Good </h5>\n          </div>\n          \n    \n        <ion-scroll class="scroll" style="width:100%; height:160px">\n         <div class="cards">\n          <ion-card>\n            <ion-card-header>\n              Light\n            </ion-card-header>\n            <ion-card-content>\n              30%\n            </ion-card-content>\n          </ion-card>\n          <ion-card>\n              <ion-card-header>\n                Temp\n              </ion-card-header>\n              <ion-card-content>\n                11\n              </ion-card-content>\n            </ion-card>\n           <ion-card>\n               <ion-card-header>\n                Visibility\n              </ion-card-header>\n              <ion-card-content>\n                3 km\n              </ion-card-content>\n            </ion-card>\n          </div>\n         </ion-scroll>\n         \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col width-50>\n          <h6 strong> Forecast </h6>\n          <ul>\n            <p class="alignright">Good</p>\n            <li>Tuesday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Good</p>\n            <li>Wednesday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Bad</p>\n            <li>Thursday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Good</p>\n            <li>Friday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Bad</p>\n            <li>Saturday</li>\n            <div style="clear: both;"></div>\n  \n          </ul>\n          \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  \n  \n  \n  </ion-content>\n'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\pages\grimsta\grimsta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], GrimstaPage);
    return GrimstaPage;
}());

//# sourceMappingURL=grimsta.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JarvaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the JarvaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JarvaPage = /** @class */ (function () {
    function JarvaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    JarvaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JarvaPage');
    };
    JarvaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jarva',template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\pages\jarva\jarva.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Places</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding class="places">\n      <ion-img width="40" height="40" src="../../assets/imgs/image2.png"></ion-img>\n    <ion-grid>\n      <ion-row>\n        <ion-col width-50 offset-25>\n          <div text-center>\n            <h1 strong> Järvafältet today</h1>\n          </div>\n          <div text-center>\n            <h5 strong> Status: Good </h5>\n          </div>\n          \n    \n        <ion-scroll class="scroll" style="width:100%; height:160px">\n         <div class="cards">\n          <ion-card>\n            <ion-card-header>\n              Light\n            </ion-card-header>\n            <ion-card-content>\n              30%\n            </ion-card-content>\n          </ion-card>\n          <ion-card>\n              <ion-card-header>\n                Temp\n              </ion-card-header>\n              <ion-card-content>\n                11\n              </ion-card-content>\n            </ion-card>\n           <ion-card>\n               <ion-card-header>\n                Visibility\n              </ion-card-header>\n              <ion-card-content>\n                3 km\n              </ion-card-content>\n            </ion-card>\n          </div>\n         </ion-scroll>\n         \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col width-50>\n          <h6 strong> Forecast </h6>\n          <ul>\n            <p class="alignright">Good</p>\n            <li>Tuesday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Good</p>\n            <li>Wednesday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Bad</p>\n            <li>Thursday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Good</p>\n            <li>Friday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Bad</p>\n            <li>Saturday</li>\n            <div style="clear: both;"></div>\n  \n          </ul>\n          \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  \n  \n  \n  </ion-content>'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\pages\jarva\jarva.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], JarvaPage);
    return JarvaPage;
}());

//# sourceMappingURL=jarva.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NackaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NackaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NackaPage = /** @class */ (function () {
    function NackaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NackaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NackaPage');
    };
    NackaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nacka',template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\pages\nacka\nacka.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Places</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding class="places">\n      <ion-img width="40" height="40" src="../../assets/imgs/image2.png"></ion-img>\n    <ion-grid>\n      <ion-row>\n        <ion-col width-50 offset-25>\n          <div text-center>\n            <h1 strong> Nackareservatet tonight</h1>\n          </div>\n          <div text-center>\n            <h5 strong> Status: Good </h5>\n          </div>\n          \n    \n        <ion-scroll class="scroll" style="width:100%; height:160px">\n         <div class="cards">\n          <ion-card>\n            <ion-card-header>\n              Light\n            </ion-card-header>\n            <ion-card-content>\n              30%\n            </ion-card-content>\n          </ion-card>\n          <ion-card>\n              <ion-card-header>\n                Temp\n              </ion-card-header>\n              <ion-card-content>\n                11\n              </ion-card-content>\n            </ion-card>\n           <ion-card>\n               <ion-card-header>\n                Visibility\n              </ion-card-header>\n              <ion-card-content>\n                3 km\n              </ion-card-content>\n            </ion-card>\n          </div>\n         </ion-scroll>\n         \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col width-50>\n          <h6 strong> Forecast </h6>\n          <ul>\n            <p class="alignright">Good</p>\n            <li>Tuesday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Good</p>\n            <li>Wednesday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Bad</p>\n            <li>Thursday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Good</p>\n            <li>Friday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Bad</p>\n            <li>Saturday</li>\n            <div style="clear: both;"></div>\n  \n          </ul>\n          \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  \n  \n  \n  </ion-content>'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\pages\nacka\nacka.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], NackaPage);
    return NackaPage;
}());

//# sourceMappingURL=nacka.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TyrestaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TyrestaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TyrestaPage = /** @class */ (function () {
    function TyrestaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TyrestaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TyrestaPage');
    };
    TyrestaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tyresta',template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\pages\tyresta\tyresta.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Places</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding class="places">\n      <ion-img width="40" height="40" src="../../assets/imgs/image2.png"></ion-img>\n    <ion-grid>\n      <ion-row>\n        <ion-col width-50 offset-25>\n          <div text-center>\n            <h1 strong> Tyresta Naturpark tonight</h1>\n          </div>\n          <div text-center>\n            <h5 strong> Status: Good </h5>\n          </div>\n          \n    \n        <ion-scroll class="scroll" style="width:100%; height:160px">\n         <div class="cards">\n          <ion-card>\n            <ion-card-header>\n              Light\n            </ion-card-header>\n            <ion-card-content>\n              30%\n            </ion-card-content>\n          </ion-card>\n          <ion-card>\n              <ion-card-header>\n                Temp\n              </ion-card-header>\n              <ion-card-content>\n                11\n              </ion-card-content>\n            </ion-card>\n           <ion-card>\n               <ion-card-header>\n                Visibility\n              </ion-card-header>\n              <ion-card-content>\n                3 km\n              </ion-card-content>\n            </ion-card>\n          </div>\n         </ion-scroll>\n         \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col width-50>\n          <h6 strong> Forecast </h6>\n          <ul>\n            <p class="alignright">Good</p>\n            <li>Tuesday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Good</p>\n            <li>Wednesday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Bad</p>\n            <li>Thursday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Good</p>\n            <li>Friday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Bad</p>\n            <li>Saturday</li>\n            <div style="clear: both;"></div>\n  \n          </ul>\n          \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  \n  \n  \n  </ion-content>'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\pages\tyresta\tyresta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TyrestaPage);
    return TyrestaPage;
}());

//# sourceMappingURL=tyresta.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PlacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlacesPage = /** @class */ (function () {
    function PlacesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PlacesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlacesPage');
    };
    PlacesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-places',template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\pages\places\places.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Places</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="places">\n\n    <ion-img width="40" height="40" src="../../assets/imgs/image2.png"></ion-img>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col width-50 offset-25>\n\n        <div text-center>\n\n          <h1 strong> Gärdet today</h1>\n\n        </div>\n\n        <div text-center>\n\n          <h5 strong> Status: Good </h5>\n\n        </div>\n\n        \n\n  \n\n      <ion-scroll class="scroll" style="width:100%; height:160px">\n\n       <div class="cards">\n\n        <ion-card>\n\n          <ion-card-header>\n\n            Light\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            30%\n\n          </ion-card-content>\n\n        </ion-card>\n\n        <ion-card>\n\n            <ion-card-header>\n\n              Temp\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n              11\n\n            </ion-card-content>\n\n          </ion-card>\n\n         <ion-card>\n\n             <ion-card-header>\n\n              Visibility\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n              3 km\n\n            </ion-card-content>\n\n          </ion-card>\n\n        </div>\n\n       </ion-scroll>\n\n       \n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col width-50>\n\n        <h6 strong> Forecast </h6>\n\n        <ul>\n\n          <p class="alignright">Good</p>\n\n          <li>Tuesday</li>\n\n          <div style="clear: both;"></div>\n\n          <p class="alignright">Good</p>\n\n          <li>Wednesday</li>\n\n          <div style="clear: both;"></div>\n\n          <p class="alignright">Bad</p>\n\n          <li>Thursday</li>\n\n          <div style="clear: both;"></div>\n\n          <p class="alignright">Good</p>\n\n          <li>Friday</li>\n\n          <div style="clear: both;"></div>\n\n          <p class="alignright">Bad</p>\n\n          <li>Saturday</li>\n\n          <div style="clear: both;"></div>\n\n\n\n        </ul>\n\n        \n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\pages\places\places.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PlacesPage);
    return PlacesPage;
}());

//# sourceMappingURL=places.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map