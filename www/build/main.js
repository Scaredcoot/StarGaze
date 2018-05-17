webpackJsonp([11],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GardetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_forecast_forecast__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GardetPage = /** @class */ (function () {
    function GardetPage(navCtrl, navParams, forecastProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.forecastProvider = forecastProvider;
    }
    GardetPage.prototype.ionViewWillEnter = function () {
        this.location = { location: 'gardet' };
        this.forecastProvider.getForecast(this.location.location)
            .subscribe(function (forecast) {
            console.log(forecast);
            var obj = JSON.parse(forecast);
            console.log(obj);
        });
    };
    GardetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gardet',template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\pages\gardet\gardet.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n      \n\n      <ion-title>Places</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding class="places">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <div text-center>\n\n            <h1 strong> Gärdet tonight</h1>\n\n          </div>\n\n          <div class="status" text-center>\n\n            <h5 strong>Good </h5>\n\n            <p>\n\n                <ion-icon name="star"></ion-icon>\n\n                <ion-icon name="star"></ion-icon>\n\n                <ion-icon name="star"></ion-icon>\n\n                <ion-icon name="star-outline"></ion-icon>\n\n            </p>\n\n            \n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    \n\n        <ion-row class="weather-factors" text-center>\n\n          <ion-col col-4>\n\n            <ion-icon name="sunny"></ion-icon>\n\n           <!-- <p>Light</p> -->\n\n            <p>30%</p>  \n\n          </ion-col>\n\n\n\n          <ion-col class="thermo-col" col-4>\n\n            <ion-icon name="thermometer"></ion-icon>\n\n           <!-- <p>Temp</p> -->\n\n            <p>11&deg;</p>  \n\n          </ion-col>\n\n\n\n          <ion-col col-4>\n\n            <ion-icon name="cloud"></ion-icon>\n\n            <!-- <p>Cloudiness</p> -->\n\n            <p>3 km</p>  \n\n          </ion-col>\n\n        </ion-row>\n\n          \n\n    \n\n      <ion-row >\n\n        <ion-col class="forecast" >\n\n          <h6 strong> Forecast </h6>\n\n          <hr class="divider">\n\n          <ul>\n\n            <p class="alignright">Excellent</p>\n\n            <li>Tuesday</li>\n\n            <div style="clear: both;"></div>\n\n            <p class="alignright">Good</p>\n\n            <li>Wednesday</li>\n\n            <div style="clear: both;"></div>\n\n            <p class="alignright">Okey</p>\n\n            <li>Thursday</li>\n\n            <div style="clear: both;"></div>\n\n            <p class="alignright">Good</p>\n\n            <li>Friday</li>\n\n            <div style="clear: both;"></div>\n\n            <p class="alignright">Bad</p>\n\n            <li>Saturday</li>\n\n            <div style="clear: both;"></div>\n\n  \n\n          </ul>\n\n          \n\n          \n\n          \n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  \n\n  \n\n  \n\n  \n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\pages\gardet\gardet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_forecast_forecast__["a" /* ForecastProvider */]])
    ], GardetPage);
    return GardetPage;
}());

//# sourceMappingURL=gardet.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrimstaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_forecast_forecast__ = __webpack_require__(34);
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
    function GrimstaPage(navCtrl, navParams, forecastProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.forecastProvider = forecastProvider;
    }
    GrimstaPage.prototype.ionViewWillEnter = function () {
        this.location = { location: 'grimsta' };
        this.forecastProvider.getForecast(this.location.location)
            .subscribe(function (forecast) {
            console.log(forecast);
        });
    };
    GrimstaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-grimsta',template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\pages\grimsta\grimsta.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Places</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content scroll="true" padding class="places">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div text-center>\n            <h1 strong> Grimsta tonight</h1>\n          </div>\n          <div class="status" text-center>\n            <h5 strong>Good </h5>\n            <p>\n                <ion-icon name="star"></ion-icon>\n                <ion-icon name="star"></ion-icon>\n                <ion-icon name="star"></ion-icon>\n                <ion-icon name="star-outline"></ion-icon>\n            </p>\n            \n          </div>\n        </ion-col>\n      </ion-row>\n    \n        <ion-row class="weather-factors" text-center>\n          <ion-col col-4>\n            <ion-icon name="sunny"></ion-icon>\n           <!-- <p>Light</p> -->\n            <p>30%</p>  \n          </ion-col>\n\n          <ion-col class="thermo-col" col-4>\n            <ion-icon name="thermometer"></ion-icon>\n           <!-- <p>Temp</p> -->\n            <p>11&deg;</p>  \n          </ion-col>\n\n          <ion-col col-4>\n            <ion-icon name="cloud"></ion-icon>\n            <!-- <p>Cloudiness</p> -->\n            <p>3 km</p>  \n          </ion-col>\n        </ion-row>\n          \n    \n      <ion-row >\n        <ion-col class="forecast" >\n          <h6 strong> Forecast </h6>\n          <hr class="divider">\n          <ul>\n            <p class="alignright">Excellent</p>\n            <li>Tuesday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Good</p>\n            <li>Wednesday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Okey</p>\n            <li>Thursday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Good</p>\n            <li>Friday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Bad</p>\n            <li>Saturday</li>\n            <div style="clear: both;"></div>\n  \n          </ul>\n          \n          \n          \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  \n  \n  \n  </ion-content>\n'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\pages\grimsta\grimsta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_forecast_forecast__["a" /* ForecastProvider */]])
    ], GrimstaPage);
    return GrimstaPage;
}());

//# sourceMappingURL=grimsta.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JarvaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_forecast_forecast__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JarvaPage = /** @class */ (function () {
    function JarvaPage(navCtrl, navParams, forecastProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.forecastProvider = forecastProvider;
    }
    JarvaPage.prototype.ionViewWillEnter = function () {
        this.location = { location: 'jarvafaltet' };
        this.forecastProvider.getForecast(this.location.location)
            .subscribe(function (forecast) {
            console.log(forecast);
        });
    };
    JarvaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jarva',template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\pages\jarva\jarva.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Places</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content scroll="true" padding class="places">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div text-center>\n            <h1 strong> Järvafältet tonight</h1>\n          </div>\n          <div class="status" text-center>\n            <h5 strong>Good </h5>\n            <p>\n                <ion-icon name="star"></ion-icon>\n                <ion-icon name="star"></ion-icon>\n                <ion-icon name="star"></ion-icon>\n                <ion-icon name="star-outline"></ion-icon>\n            </p>\n            \n          </div>\n        </ion-col>\n      </ion-row>\n    \n        <ion-row class="weather-factors" text-center>\n          <ion-col col-4>\n            <ion-icon name="sunny"></ion-icon>\n           <!-- <p>Light</p> -->\n            <p>30%</p>  \n          </ion-col>\n\n          <ion-col class="thermo-col" col-4>\n            <ion-icon name="thermometer"></ion-icon>\n           <!-- <p>Temp</p> -->\n            <p>11&deg;</p>  \n          </ion-col>\n\n          <ion-col col-4>\n            <ion-icon name="cloud"></ion-icon>\n            <!-- <p>Cloudiness</p> -->\n            <p>3 km</p>  \n          </ion-col>\n        </ion-row>\n          \n    \n      <ion-row >\n        <ion-col class="forecast" >\n          <h6 strong> Forecast </h6>\n          <hr class="divider">\n          <ul>\n            <p class="alignright">Excellent</p>\n            <li>Tuesday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Good</p>\n            <li>Wednesday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Okey</p>\n            <li>Thursday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Good</p>\n            <li>Friday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Bad</p>\n            <li>Saturday</li>\n            <div style="clear: both;"></div>\n  \n          </ul>\n          \n          \n          \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  \n  \n  \n  </ion-content>\n'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\pages\jarva\jarva.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_forecast_forecast__["a" /* ForecastProvider */]])
    ], JarvaPage);
    return JarvaPage;
}());

//# sourceMappingURL=jarva.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NackaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_forecast_forecast__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NackaPage = /** @class */ (function () {
    function NackaPage(navCtrl, navParams, forecastProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.forecastProvider = forecastProvider;
    }
    NackaPage.prototype.ionViewWillEnter = function () {
        this.location = { location: 'nackareservatet' };
        this.forecastProvider.getForecast(this.location.location)
            .subscribe(function (forecast) {
            console.log(forecast);
        });
    };
    NackaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nacka',template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\pages\nacka\nacka.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Places</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content scroll="true" padding class="places">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div text-center>\n            <h1 strong> Nackareservatet tonight</h1>\n          </div>\n          <div class="status" text-center>\n            <h5 strong>Good </h5>\n            <p>\n                <ion-icon name="star"></ion-icon>\n                <ion-icon name="star"></ion-icon>\n                <ion-icon name="star"></ion-icon>\n                <ion-icon name="star-outline"></ion-icon>\n            </p>\n            \n          </div>\n        </ion-col>\n      </ion-row>\n    \n        <ion-row class="weather-factors" text-center>\n          <ion-col col-4>\n            <ion-icon name="sunny"></ion-icon>\n           <!-- <p>Light</p> -->\n            <p>30%</p>  \n          </ion-col>\n\n          <ion-col class="thermo-col" col-4>\n            <ion-icon name="thermometer"></ion-icon>\n           <!-- <p>Temp</p> -->\n            <p>11&deg;</p>  \n          </ion-col>\n\n          <ion-col col-4>\n            <ion-icon name="cloud"></ion-icon>\n            <!-- <p>Cloudiness</p> -->\n            <p>3 km</p>  \n          </ion-col>\n        </ion-row>\n          \n    \n      <ion-row >\n        <ion-col class="forecast" >\n          <h6 strong> Forecast </h6>\n          <hr class="divider">\n          <ul>\n            <p class="alignright">Excellent</p>\n            <li>Tuesday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Good</p>\n            <li>Wednesday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Okey</p>\n            <li>Thursday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Good</p>\n            <li>Friday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Bad</p>\n            <li>Saturday</li>\n            <div style="clear: both;"></div>\n  \n          </ul>\n          \n          \n          \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  \n  \n  \n  </ion-content>\n'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\pages\nacka\nacka.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_forecast_forecast__["a" /* ForecastProvider */]])
    ], NackaPage);
    return NackaPage;
}());

//# sourceMappingURL=nacka.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TyrestaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_forecast_forecast__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TyrestaPage = /** @class */ (function () {
    function TyrestaPage(navCtrl, navParams, forecastProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.forecastProvider = forecastProvider;
    }
    TyrestaPage.prototype.ionViewWillEnter = function () {
        this.location = { location: 'tyrestanationalpark' };
        this.forecastProvider.getForecast(this.location.location)
            .subscribe(function (forecast) {
            console.log(forecast);
        });
    };
    TyrestaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tyresta',template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\pages\tyresta\tyresta.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Places</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content scroll="true" padding class="places">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div text-center>\n            <h1 strong> Flatens naturreservat tonight</h1>\n          </div>\n          <div class="status" text-center>\n            <h5 strong>Good </h5>\n            <p>\n                <ion-icon name="star"></ion-icon>\n                <ion-icon name="star"></ion-icon>\n                <ion-icon name="star"></ion-icon>\n                <ion-icon name="star-outline"></ion-icon>\n            </p>\n            \n          </div>\n        </ion-col>\n      </ion-row>\n    \n        <ion-row class="weather-factors" text-center>\n          <ion-col col-4>\n            <ion-icon name="sunny"></ion-icon>\n           <!-- <p>Light</p> -->\n            <p>30%</p>  \n          </ion-col>\n\n          <ion-col class="thermo-col" col-4>\n            <ion-icon name="thermometer"></ion-icon>\n           <!-- <p>Temp</p> -->\n            <p>11&deg;</p>  \n          </ion-col>\n\n          <ion-col col-4>\n            <ion-icon name="cloud"></ion-icon>\n            <!-- <p>Cloudiness</p> -->\n            <p>3 km</p>  \n          </ion-col>\n        </ion-row>\n          \n    \n      <ion-row >\n        <ion-col class="forecast" >\n          <h6 strong> Forecast </h6>\n          <hr class="divider">\n          <ul>\n            <p class="alignright">Excellent</p>\n            <li>Tuesday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Good</p>\n            <li>Wednesday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Okey</p>\n            <li>Thursday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Good</p>\n            <li>Friday</li>\n            <div style="clear: both;"></div>\n            <p class="alignright">Bad</p>\n            <li>Saturday</li>\n            <div style="clear: both;"></div>\n  \n          </ul>\n          \n          \n          \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  \n  \n  \n  </ion-content>\n'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\pages\tyresta\tyresta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_forecast_forecast__["a" /* ForecastProvider */]])
    ], TyrestaPage);
    return TyrestaPage;
}());

//# sourceMappingURL=tyresta.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenuPage.prototype.openAboutPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */]);
    };
    MenuPage.prototype.openSettingPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */]);
    };
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\pages\menu\menu.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Menu</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding class="menu">\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n          <ion-col width-100>\n\n\n\n           <img src="../../assets/imgs/image.png" class= "loggis">\n\n            \n\n           <div class="menuButton" >\n\n             <button ion-button full round color="textColor"(click)="openSettingPage()">Settings</button>\n\n              <button ion-button full round color="textColor">Facebook Event</button>\n\n              <button ion-button full round color="textColor"(click)="openAboutPage()">About</button>\n\n              <button ion-button full round color="textColor">Log out</button>\n\n            </div>\n\n            </ion-col>\n\n          </ion-row>\n\n         </ion-grid>  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/gardet/gardet.module": [
		310,
		10
	],
	"../pages/grimsta/grimsta.module": [
		311,
		9
	],
	"../pages/jarva/jarva.module": [
		312,
		8
	],
	"../pages/log-in/log-in.module": [
		313,
		7
	],
	"../pages/menu/menu.module": [
		314,
		6
	],
	"../pages/nacka/nacka.module": [
		315,
		5
	],
	"../pages/places/places.module": [
		316,
		4
	],
	"../pages/settings/settings.module": [
		317,
		3
	],
	"../pages/today/today.module": [
		318,
		2
	],
	"../pages/toggle-menu/toggle-menu.module": [
		319,
		0
	],
	"../pages/tyresta/tyresta.module": [
		320,
		1
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
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PlacesPage);
    return PlacesPage;
}());

//# sourceMappingURL=places.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_log_in_log_in__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_today_today__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_menu_menu__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_gardet_gardet__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_jarva_jarva__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_nacka_nacka__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_grimsta_grimsta__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tyresta_tyresta__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_settings_settings__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_facebook__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_forecast_forecast__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { HttpClient } from '@angular/common/http';

















var firebaseConfig = {
    apiKey: "AIzaSyBtzmdRYHLeBrLt8MGdti9G0A1kXIV_xg4",
    authDomain: "stargaze-177ce.firebaseapp.com",
    databaseURL: "https://stargaze-177ce.firebaseio.com",
    projectId: "stargaze-177ce",
    storageBucket: "stargaze-177ce.appspot.com",
    messagingSenderId: "931550022499"
};
__WEBPACK_IMPORTED_MODULE_4_firebase___default.a.initializeApp(firebaseConfig);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_log_in_log_in__["a" /* LogInPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_today_today__["a" /* TodayPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_gardet_gardet__["a" /* GardetPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_nacka_nacka__["a" /* NackaPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_jarva_jarva__["a" /* JarvaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tyresta_tyresta__["a" /* TyrestaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_grimsta_grimsta__["a" /* GrimstaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_settings_settings__["a" /* SettingsPage */]
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
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/today/today.module#TodayPageModule', name: 'TodayPage', segment: 'today', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/toggle-menu/toggle-menu.module#ToggleMenuPageModule', name: 'ToggleMenuPage', segment: 'toggle-menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tyresta/tyresta.module#TyrestaPageModule', name: 'TyrestaPage', segment: 'tyresta', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_log_in_log_in__["a" /* LogInPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_today_today__["a" /* TodayPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_gardet_gardet__["a" /* GardetPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_nacka_nacka__["a" /* NackaPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_jarva_jarva__["a" /* JarvaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tyresta_tyresta__["a" /* TyrestaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_grimsta_grimsta__["a" /* GrimstaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_settings_settings__["a" /* SettingsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_22__providers_forecast_forecast__["a" /* ForecastProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_today_today__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_log_in_log_in__ = __webpack_require__(57);
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
    function MyApp(platform, statusBar, splashScreen, menuController) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menuController = menuController;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_today_today__["a" /* TodayPage */];
        this.initializeApp();
        this.pages = [
            { title: 'Forecast', component: __WEBPACK_IMPORTED_MODULE_4__pages_today_today__["a" /* TodayPage */] },
            { title: 'About the app', component: __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */] }
        ];
        this.activePage = this.pages[0];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
        this.activePage = page;
    };
    MyApp.prototype.checkActive = function (page) {
        return page == this.activePage;
    };
    MyApp.prototype.logOut = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_log_in_log_in__["a" /* LogInPage */]);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_log_in_log_in__["a" /* LogInPage */]);
        this.menuController.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\app\app.html"*/'<ion-menu [content]="content">\n\n    <ion-header>\n\n        <ion-toolbar>\n\n            <ion-title>Menu</ion-title>\n\n            \n\n        </ion-toolbar>\n\n    </ion-header>\n\n\n\n\n\n<ion-content padding class="toggle-menu">\n\n    \n\n    <ion-list padding class="lista" >\n\n        <button menuClose ion-item  *ngFor="let p of pages" [class.activeHighLight]="checkActive(p)" (click)="openPage(p)">\n\n            {{p.title}}\n\n        </button>\n\n        <div padding class="menuButton">\n\n         <button ion-button block outline color="textColor" icon-right onClick="window.open(\'https://www.facebook.com/groups/368396763650540/\', \'_system\', \'location=yes\');return false;">\n\n            Community\n\n            <ion-icon color="primary" name="logo-facebook">\n\n                \n\n            </ion-icon>\n\n        </button>\n\n        <button ion-button block outline color="textColor" icon-right (click)="logOut()">Log out</button>\n\n    </div>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n\n\n\n\n</ion-menu>\n\n\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_in_log_in__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__today_today__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__places_places__ = __webpack_require__(211);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Log in" tabIcon="ios-log-in"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Today" tabIcon="star-outline"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Menu" tabIcon="menu"></ion-tab>\n\n  \n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForecastProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';


@Injectable()
export class ForecastProvider {
url;

  constructor(public http: HttpClient) {
    console.log('Hello ForecastProvider Provider');
    this.url = 'https://pvt.dsv.su.se/Group04/place';
  }
  getForecast(location) {
    
    return this.http.get(this.url+'/'+location+'/today')
    
   
  }
}*/






var ForecastProvider = /** @class */ (function () {
    //private url: string = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json";
    function ForecastProvider(http) {
        this.http = http;
        this.url = "https://pvt.dsv.su.se/Group04/place";
        console.log('Hello MessageserviceProvider Provider');
    }
    ForecastProvider.prototype.getForecast = function (location) {
        return this.http.get(this.url + '/' + location + '/today')
            .do(this.logResponse)
            .map(this.extractData)
            .do(this.logResponse)
            .catch(this.catchError);
    };
    ForecastProvider.prototype.catchError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(error.json().error || "Server error.");
    };
    ForecastProvider.prototype.logResponse = function (res) {
        console.log(res);
    };
    ForecastProvider.prototype.extractData = function (res) {
        return res.json();
    };
    ForecastProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], ForecastProvider);
    return ForecastProvider;
}());

//# sourceMappingURL=forecast.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gardet_gardet__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nacka_nacka__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jarva_jarva__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grimsta_grimsta__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tyresta_tyresta__ = __webpack_require__(112);
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
            selector: 'page-today',template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\pages\today\today.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    \n\n    <button ion-button menuToggle color="textColor">\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-buttons end>\n\n    <button ion-button icon-only >\n\n        <ion-icon name="information-circle" ></ion-icon>\n\n    </button>\n\n  </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content scroll="true" padding class="places">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <div text-center>\n\n            <h1 strong> Stockholm tonight</h1>\n\n          </div>\n\n          <div class="status" text-center>\n\n            <h5 strong>Okey </h5>\n\n            <p>\n\n                <ion-icon name="star"></ion-icon>\n\n                <ion-icon name="star"></ion-icon>\n\n                <ion-icon name="star-outline"></ion-icon>\n\n                <ion-icon name="star-outline"></ion-icon>\n\n            </p>\n\n            \n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    \n\n        <ion-row class="weather-factors" text-center>\n\n          <ion-col col-4>\n\n            <ion-icon name="sunny"></ion-icon>\n\n           <!-- <p>Light</p> -->\n\n            <p>30%</p>  \n\n          </ion-col>\n\n\n\n          <ion-col class="thermo-col" col-4>\n\n            <ion-icon name="thermometer"></ion-icon>\n\n           <!-- <p>Temp</p> -->\n\n            <p>11&deg;</p>  \n\n          </ion-col>\n\n\n\n          <ion-col col-4>\n\n            <ion-icon name="cloud"></ion-icon>\n\n            <!-- <p>Cloudiness</p> -->\n\n            <p>3 km</p>  \n\n          </ion-col>\n\n        </ion-row>\n\n          \n\n    \n\n    <ion-row>\n\n      <ion-col>\n\n        <h6 strong> Show forecast for... </h6> \n\n          <ul>\n\n            <li><a href="#" (click)="GardetPlaces()">Gärdet</a></li> \n\n            <li><a href="#" (click)="TyrestaPlaces()">Flatens Naturreservat</a></li>\n\n            <li><a href="#" (click)="NackaPlaces()">Nackareservatet</a></li>\n\n            <li><a href="#" (click)="GrimstaPlaces()">Grimsta</a></li>\n\n            <li><a href="#" (click)="JarvaPlaces()"> Järvafältet</a></li>\n\n          </ul>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\pages\today\today.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TodayPage);
    return TodayPage;
}());

//# sourceMappingURL=today.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\pages\settings\settings.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Settings</ion-title>\n\n    <button ion-button menuToggle color="textColor">\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n  <ion-content padding class="settings">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <div text-center class="toggle">\n\n            <h6>Enable push notifications to recieve information for when it\'s a perfect time for stargazing!</h6>\n\n          </div>\n\n          <div class="ion-toggle" >\n\n            <ion-item>\n\n              <ion-label full color="textColor">Push notifications</ion-label>\n\n              <ion-toggle color="textColor">disabled="true"</ion-toggle>\n\n             </ion-item>\n\n          </div>\n\n         \n\n        </ion-col>\n\n      </ion-row>\n\n      \n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__today_today__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LogInPage = /** @class */ (function () {
    function LogInPage(navCtrl, navParams, facebook) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.facebook = facebook;
        this.userData = null;
    }
    LogInPage.prototype.loginWithFacebook = function () {
        var _this = this;
        var provider = new __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth.FacebookAuthProvider();
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().signInWithPopup(provider).then(function () {
            __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().getRedirectResult().then(function (result) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__today_today__["a" /* TodayPage */]);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__today_today__["a" /* TodayPage */]);
            }).catch(function (error) {
                alert(JSON.stringify(error));
            });
        });
    };
    LogInPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LogInPage');
    };
    LogInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-log-in',template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\pages\log-in\log-in.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title></ion-title>\n\n   \n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="log-in">\n\n   \n\n<ion-grid>\n\n<ion-row>\n\n  <ion-col width-100>\n\n\n\n     <div class="logga" >\n\n      <img src="../../assets/imgs/image.png">\n\n      <button ion-button full round (click)="loginWithFacebook()">Log in with Facebook</button>\n\n      <button ion-button full round color="danger">Log in with Google</button>\n\n    </div>\n\n    <ion-card *ngIf="userData">\n\n        <ion-card-header>{{ userData.username }}</ion-card-header>\n\n       <img [src]="userData.picture">\n\n       <ion-card-content>\n\n         <p>First Name: {{ userData.first_name }}</p>\n\n       </ion-card-content>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n </ion-grid>  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\pages\log-in\log-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */]])
    ], LogInPage);
    return LogInPage;
}());

//# sourceMappingURL=log-in.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Choppah\PVT15\StarGaze\src\pages\about\about.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>About Us</ion-title>\n\n    <button ion-button menuToggle color="textColor">\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n \n\n </ion-header>\n\n \n\n \n\n <ion-content padding class="about">\n\n    <div text-center>\n\n        <h5 strong>\n\n            <p>\n\n                Hej! Vi är ett gäng studenter som har utvecklat denna fantastiska astronom app...\n\n              </p>\n\n        </h5>\n\n      </div>\n\n      <ion-icon padding class="help-icon" name="help-circle">\n\n      </ion-icon>\n\n \n\n \n\n \n\n </ion-content>'/*ion-inline-end:"C:\Users\Choppah\PVT15\StarGaze\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map