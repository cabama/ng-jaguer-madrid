webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../Layouts/Noticias/noticias.module": [
		"../../../../../src/app/Layouts/Noticias/noticias.module.ts",
		"noticias.module"
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
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/Componentes/cardPartido.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cardPartidoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var cardPartidoComponent = (function () {
    function cardPartidoComponent() {
        // @Input() description: String;
        this.local = 'Jaguer Meister C.F.';
        this.stadium = 'Guapitous Stadium';
        this.visitor = 'Jubiletas Team S.A.';
        this.date = '21 Octubre 2017';
        this.time = '16:00';
    }
    cardPartidoComponent.prototype.ngOnInit = function () {
        this.local = this.pachanga.local;
        this.visitor = this.pachanga.visitor;
        this.stadium = this.pachanga.stadium;
        this.date = this.pachanga.date;
        this.time = this.pachanga.time;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])(), 
        __metadata('design:type', Object)
    ], cardPartidoComponent.prototype, "pachanga", void 0);
    cardPartidoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-card-partido',
            template: __webpack_require__("../../../../../src/app/Componentes/view/cardPartido/cardPartido.html"),
            styles: [__webpack_require__("../../../../../src/app/Componentes/view/cardPartido/cardPartido.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], cardPartidoComponent);
    return cardPartidoComponent;
}());
//# sourceMappingURL=/Users/cabama/JaguerWeb/frontend/src/cardPartido.component.js.map

/***/ }),

/***/ "../../../../../src/app/Componentes/view/cardPartido/cardPartido.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-noticia-container{\n    background-color: white;\n}\n\n.tittle {\n    background-color: #ba68c8;\n}\n\n.tittle a {\n    color:white;\n    font-size: 15px;\n    font-weight: 500;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    margin: 10px 0;\n}\n\n.description {\n    font-size: 16px;\n    font-weight: normal;\n}\n\n.team {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n\n.escudo {\n    height: 100px;\n    width: 100px;\n    display: block;\n}\n\np {\n    font-size: 15px;\n}\n\n.description.container p {\n    margin: 3px 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Componentes/view/cardPartido/cardPartido.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-noticia-container card\">\n\n  <div class=\"container tittle\">\n    <a href=\"\">{{date}}</a> \n  </div>\n\n\n  <div id=\"Partido\" class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"team\">\n          <img class=\"escudo\" src=\"/assets/logo.png\" alt=\"\">\n          <p>{{local}}</p>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div class=\"team\">\n          <img class=\"escudo\" src=\"/assets/logo.png\" alt=\"\">\n          <p>{{visitor}}</p>\n        </div>\n      </div>\n    </div>  \n  </div>\n\n  <div class=\"description container\">\n      <p>Estadio: {{stadium}}</p>\n      <p>Fecha: {{date}}</p>\n      <p>Hora: {{time}}</p>\n  </div>\n\n</div>        \n"

/***/ }),

/***/ "../../../../../src/app/Layouts/Calendario/calendario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarioComponent = (function () {
    function CalendarioComponent() {
        this.pachanga = {
            local: 'Jaguer Meister C.F.',
            visitor: 'Spider Cerdos S.A',
            stadium: 'Guapitous Stadium',
            date: '25 Diciembre FunFun',
            time: '19:40'
        };
    }
    CalendarioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-calendario',
            template: __webpack_require__("../../../../../src/app/Layouts/Calendario/view/calendario.html"),
            styles: [__webpack_require__("../../../../../src/app/Layouts/Calendario/view/calendario.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], CalendarioComponent);
    return CalendarioComponent;
}());
//# sourceMappingURL=/Users/cabama/JaguerWeb/frontend/src/calendario.component.js.map

/***/ }),

/***/ "../../../../../src/app/Layouts/Calendario/view/calendario.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#news-space > * {\n    margin-top: 20px;\n}\n\n.card-noticia-container{\n    background-color: white;\n}\n\n.tittle {\n    background-color: #ba68c8;\n}\n\n.tittle a {\n    color:white;\n    font-size: 20px;\n    font-weight: 500;\n}\n\n.description {\n    font-size: 16px;\n    font-weight: normal;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Layouts/Calendario/view/calendario.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row justify-content-center\">\n        <div id=\"news-space\" class=\"col-md-12\">\n            <app-card-partido [pachanga]=\"pachanga\"></app-card-partido>                         \n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/Layouts/Plantilla/plantilla.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantillaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlantillaComponent = (function () {
    function PlantillaComponent() {
        this.nombre_component = 'Componente Noticias';
    }
    PlantillaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-plantilla',
            template: __webpack_require__("../../../../../src/app/Layouts/Plantilla/view/noticias.html"),
            styles: [__webpack_require__("../../../../../src/app/Layouts/Plantilla/view/noticias.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], PlantillaComponent);
    return PlantillaComponent;
}());
//# sourceMappingURL=/Users/cabama/JaguerWeb/frontend/src/plantilla.component.js.map

/***/ }),

/***/ "../../../../../src/app/Layouts/Plantilla/view/noticias.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Layouts/Plantilla/view/noticias.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"containerLoading\">\n        <img class=\"loading\" src=\"/assets/logo.png\" alt=\"\">          \n</div>"

/***/ }),

/***/ "../../../../../src/app/Routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layouts_Calendario_calendario_component__ = __webpack_require__("../../../../../src/app/Layouts/Calendario/calendario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Layouts_Plantilla_plantilla_component__ = __webpack_require__("../../../../../src/app/Layouts/Plantilla/plantilla.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var appRoutes = [
    { path: '', redirectTo: '/Noticias', pathMatch: 'full' },
    { path: 'Noticias', loadChildren: '../Layouts/Noticias/noticias.module#NoticiasModule' },
    { path: 'Calendario', component: __WEBPACK_IMPORTED_MODULE_2__Layouts_Calendario_calendario_component__["a" /* CalendarioComponent */] },
    { path: 'Plantilla', component: __WEBPACK_IMPORTED_MODULE_3__Layouts_Plantilla_plantilla_component__["a" /* PlantillaComponent */] }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: false })
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            declarations: []
        }), 
        __metadata('design:paramtypes', [])
    ], RoutingModule);
    return RoutingModule;
}());
//# sourceMappingURL=/Users/cabama/JaguerWeb/frontend/src/routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".router-selected{\n    color: #FF9800 !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"card-shadow\">\n    <div class=\"wrapper\">\n      <div class=\"trade\">\n        <img src=\"/assets/logo_blanco.png\" alt=\"\">\n        <p>JaguerMeister C.F.</p>\n      </div>\n      <nav>\n        <a [routerLink]=\"['Noticias']\" [routerLinkActive]=\"['router-selected']\">Noticias</a>\n        <a [routerLink]=\"['Calendario']\" [routerLinkActive]=\"['router-selected']\">Calendario</a>\n        <a [routerLink]=\"['Plantilla']\" [routerLinkActive]=\"['router-selected']\">Plantilla</a>\n        <a [routerLink]=\"['Login']\" [routerLinkActive]=\"['router-selected']\">Login</a>\n      </nav>\n    </div>\n  </header>\n\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Jaguer Package!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/cabama/JaguerWeb/frontend/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Routing_routing_module__ = __webpack_require__("../../../../../src/app/Routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Layouts_Calendario_calendario_component__ = __webpack_require__("../../../../../src/app/Layouts/Calendario/calendario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Layouts_Plantilla_plantilla_component__ = __webpack_require__("../../../../../src/app/Layouts/Plantilla/plantilla.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Componentes_cardPartido_component__ = __webpack_require__("../../../../../src/app/Componentes/cardPartido.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__Layouts_Calendario_calendario_component__["a" /* CalendarioComponent */],
                __WEBPACK_IMPORTED_MODULE_7__Layouts_Plantilla_plantilla_component__["a" /* PlantillaComponent */],
                __WEBPACK_IMPORTED_MODULE_8__Componentes_cardPartido_component__["a" /* cardPartidoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__Routing_routing_module__["a" /* RoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/cabama/JaguerWeb/frontend/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/cabama/JaguerWeb/frontend/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_28" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/cabama/JaguerWeb/frontend/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map