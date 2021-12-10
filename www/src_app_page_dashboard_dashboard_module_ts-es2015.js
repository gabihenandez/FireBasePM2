"use strict";
(self["webpackChunkActC2"] = self["webpackChunkActC2"] || []).push([["src_app_page_dashboard_dashboard_module_ts"],{

/***/ 23635:
/*!************************************************************!*\
  !*** ./src/app/page/dashboard/dashboard-routing.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": function() { return /* binding */ DashboardPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 39423);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage,
        children: [
            {
                path: 'carousel',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_carousel_carousel_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../carousel/carousel.module */ 55258)).then(m => m.CarouselPageModule)
            },
            {
                path: 'products',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_products_products_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../products/products.module */ 17010)).then(m => m.ProductsPageModule)
            },
            {
                path: 'user-edit',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../user-edit/user-edit-routing.module */ 72331)).then(m => m.UserEditPageRoutingModule)
            },
            {
                path: 'notifications',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../notifications/notifications-routing.module */ 74007)).then(m => m.NotificationsPageRoutingModule)
            }
        ]
    },
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 73926:
/*!****************************************************!*\
  !*** ./src/app/page/dashboard/dashboard.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": function() { return /* binding */ DashboardPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 23635);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 39423);







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 39423:
/*!**************************************************!*\
  !*** ./src/app/page/dashboard/dashboard.page.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": function() { return /* binding */ DashboardPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_user_Documents_Programacion_moviles2_FinalC2_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dashboard.page.html */ 57209);
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss */ 29540);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let DashboardPage = class DashboardPage {
    constructor() { }
    ngOnInit() {
    }
};
DashboardPage.ctorParameters = () => [];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-dashboard',
        template: _C_Users_user_Documents_Programacion_moviles2_FinalC2_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardPage);



/***/ }),

/***/ 57209:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/page/dashboard/dashboard.page.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style=\"background-color: aliceblue;\">\n    <ion-tabs>\n      <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button tab=\"Carousel\" tab=\"carousel\">\n          <ion-icon name=\"images\"></ion-icon>\n          <ion-label>Carousel</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button tab=\"Products\" tab=\"products\">\n          <ion-icon name=\"pricetags\"></ion-icon>\n          <ion-label>Productos</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button tab=\"Edit User\" tab=\"user-edit\">\n          <ion-icon name=\"create\"></ion-icon>\n          <ion-label>Edicion de usuario</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button tab=\"Notifications\" tab=\"notifications\">\n          <ion-icon name=\"notifications\"></ion-icon>\n          <ion-label>Notifications</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs> \n</ion-content>\n\n");

/***/ }),

/***/ 29540:
/*!****************************************************!*\
  !*** ./src/app/page/dashboard/dashboard.page.scss ***!
  \****************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_page_dashboard_dashboard_module_ts-es2015.js.map