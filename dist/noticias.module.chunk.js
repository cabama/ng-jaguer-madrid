webpackJsonp(["noticias.module"],{

/***/ "../../../../../src/app/Componentes/cardNoticia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardNoticiaComponent; });
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

var CardNoticiaComponent = (function () {
    function CardNoticiaComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])(), 
        __metadata('design:type', String)
    ], CardNoticiaComponent.prototype, "tittle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Input */])(), 
        __metadata('design:type', Object)
    ], CardNoticiaComponent.prototype, "description", void 0);
    CardNoticiaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-card-noticia',
            template: __webpack_require__("../../../../../src/app/Componentes/view/cardNoticia.html"),
            styles: [__webpack_require__("../../../../../src/app/Componentes/view/cardNoticia.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], CardNoticiaComponent);
    return CardNoticiaComponent;
}());
//# sourceMappingURL=/Users/cabama/JaguerWeb/ng-jaguer-madrid/src/cardNoticia.component.js.map

/***/ }),

/***/ "../../../../../src/app/Componentes/view/cardNoticia.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-noticia-container{\n    background-color: white;\n}\n\n.tittle {\n    background-color: #ba68c8;\n}\n\n.tittle a {\n    color:white;\n    font-size: 20px;\n    font-weight: 500;\n}\n\n.description {\n    font-size: 16px;\n    font-weight: normal;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Componentes/view/cardNoticia.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-noticia-container card\">\n\n    <div class=\"tittle\">\n        <div class=\"container\">\n            <a [routerLink]=\"['/Plantilla']\">{{tittle}}</a>\n        </div>\n    </div>\n\n    <div class=\"container\">\n        <div class=\"description\">\n            <p>{{description}} [...]</p>\n        </div>\n    </div>\n\n</div>        \n"

/***/ }),

/***/ "../../../../../src/app/Layouts/Noticias/noticias-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__noticias_component__ = __webpack_require__("../../../../../src/app/Layouts/Noticias/noticias.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__noticiasDetalle_component__ = __webpack_require__("../../../../../src/app/Layouts/Noticias/noticiasDetalle.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__noticias_component__["a" /* NoticiasComponent */] },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_4__noticiasDetalle_component__["a" /* NoticiasDetalleComponent */] },
];
var NoticiasRoutingModule = (function () {
    function NoticiasRoutingModule() {
    }
    NoticiasRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
            declarations: []
        }), 
        __metadata('design:paramtypes', [])
    ], NoticiasRoutingModule);
    return NoticiasRoutingModule;
}());
//# sourceMappingURL=/Users/cabama/JaguerWeb/ng-jaguer-madrid/src/noticias-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/Layouts/Noticias/noticias.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasComponent; });
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

var NoticiasComponent = (function () {
    function NoticiasComponent() {
        this.nombre_component = 'Componente Noticias';
        this.noticias = [
            {
                id: '26717',
                tittle: 'Jaguers lost again.',
                description: 'Nadie se esperaba esta nueva derrota.'
            },
            {
                id: '267',
                tittle: 'Jaguers Pierden en su inicio de temporada.',
                description: 'Las cervezas del verano no sentaron bien al equipo.'
            }
        ];
    }
    NoticiasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-noticias',
            template: __webpack_require__("../../../../../src/app/Layouts/Noticias/view/noticias.html"),
            styles: [__webpack_require__("../../../../../src/app/Layouts/Noticias/view/noticias.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], NoticiasComponent);
    return NoticiasComponent;
}());
//# sourceMappingURL=/Users/cabama/JaguerWeb/ng-jaguer-madrid/src/noticias.component.js.map

/***/ }),

/***/ "../../../../../src/app/Layouts/Noticias/noticias.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasModule", function() { return NoticiasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noticias_routing_module__ = __webpack_require__("../../../../../src/app/Layouts/Noticias/noticias-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__noticias_component__ = __webpack_require__("../../../../../src/app/Layouts/Noticias/noticias.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__noticiasDetalle_component__ = __webpack_require__("../../../../../src/app/Layouts/Noticias/noticiasDetalle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Componentes_cardNoticia_component__ = __webpack_require__("../../../../../src/app/Componentes/cardNoticia.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NoticiasModule = (function () {
    function NoticiasModule() {
    }
    NoticiasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__noticias_routing_module__["a" /* NoticiasRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__noticias_component__["a" /* NoticiasComponent */], __WEBPACK_IMPORTED_MODULE_4__noticiasDetalle_component__["a" /* NoticiasDetalleComponent */], __WEBPACK_IMPORTED_MODULE_5__Componentes_cardNoticia_component__["a" /* CardNoticiaComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], NoticiasModule);
    return NoticiasModule;
}());
//# sourceMappingURL=/Users/cabama/JaguerWeb/ng-jaguer-madrid/src/noticias.module.js.map

/***/ }),

/***/ "../../../../../src/app/Layouts/Noticias/noticiasDetalle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasDetalleComponent; });
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

var NoticiasDetalleComponent = (function () {
    function NoticiasDetalleComponent() {
        this.nombre_component = 'Componente Noticias';
    }
    NoticiasDetalleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-noticias-detalle',
            template: __webpack_require__("../../../../../src/app/Layouts/Noticias/viewDetalle/noticias_detalle.html"),
            styles: [__webpack_require__("../../../../../src/app/Layouts/Noticias/viewDetalle/noticias_detalle.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], NoticiasDetalleComponent);
    return NoticiasDetalleComponent;
}());
//# sourceMappingURL=/Users/cabama/JaguerWeb/ng-jaguer-madrid/src/noticiasDetalle.component.js.map

/***/ }),

/***/ "../../../../../src/app/Layouts/Noticias/view/noticias.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#news-space > * {\n    margin-top: 20px;\n}\n\n.card-noticia-container{\n    background-color: white;\n}\n\n.tittle {\n    background-color: #ba68c8;\n}\n\n.tittle a {\n    color:white;\n    font-size: 20px;\n    font-weight: 500;\n}\n\n.description {\n    font-size: 16px;\n    font-weight: normal;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Layouts/Noticias/view/noticias.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row justify-content-center\">\n        <div id=\"news-space\" class=\"col-md-12\">\n            <div class=\"card-noticia-container card\" *ngFor=\"let noticia of noticias\">\n                <div class=\"tittle\">\n                    <div class=\"container\">\n                        <a [routerLink]=\"['/Noticias', noticia.id]\">{{noticia.tittle}}</a>\n                    </div>\n                </div>\n                <div class=\"container\">\n                    <div class=\"description\">\n                        <p>{{noticia.description}} [...]</p>\n                    </div>\n                </div>\n            </div>                            \n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/Layouts/Noticias/viewDetalle/noticias_detalle.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Layouts/Noticias/viewDetalle/noticias_detalle.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    Estoy en la vista detalle.\n    <div class=\"row justify-content-center\">\n        <div class=\"col-md-12\">                    \n            <app-card-noticia tittle=\"Ultimo partido\" description=\"Pues quedamos asi\"></app-card-noticia>\n        </div>\n    </div>\n</div>\n"

/***/ })

});
//# sourceMappingURL=noticias.module.chunk.js.map