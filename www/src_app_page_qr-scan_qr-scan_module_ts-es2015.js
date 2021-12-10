"use strict";
(self["webpackChunkActC2"] = self["webpackChunkActC2"] || []).push([["src_app_page_qr-scan_qr-scan_module_ts"],{

/***/ 85546:
/*!********************************************************!*\
  !*** ./src/app/page/qr-scan/qr-scan-routing.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrScanPageRoutingModule": function() { return /* binding */ QrScanPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _qr_scan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-scan.page */ 47338);




const routes = [
    {
        path: '',
        component: _qr_scan_page__WEBPACK_IMPORTED_MODULE_0__.QrScanPage
    }
];
let QrScanPageRoutingModule = class QrScanPageRoutingModule {
};
QrScanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QrScanPageRoutingModule);



/***/ }),

/***/ 93332:
/*!************************************************!*\
  !*** ./src/app/page/qr-scan/qr-scan.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrScanPageModule": function() { return /* binding */ QrScanPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _qr_scan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-scan-routing.module */ 85546);
/* harmony import */ var _qr_scan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-scan.page */ 47338);







let QrScanPageModule = class QrScanPageModule {
};
QrScanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _qr_scan_routing_module__WEBPACK_IMPORTED_MODULE_0__.QrScanPageRoutingModule
        ],
        declarations: [_qr_scan_page__WEBPACK_IMPORTED_MODULE_1__.QrScanPage]
    })
], QrScanPageModule);



/***/ }),

/***/ 47338:
/*!**********************************************!*\
  !*** ./src/app/page/qr-scan/qr-scan.page.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrScanPage": function() { return /* binding */ QrScanPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_user_Documents_Programacion_moviles2_FinalC2_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_qr_scan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./qr-scan.page.html */ 3829);
/* harmony import */ var _qr_scan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-scan.page.scss */ 96650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let QrScanPage = class QrScanPage {
    constructor() { }
    ngOnInit() {
    }
};
QrScanPage.ctorParameters = () => [];
QrScanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-qr-scan',
        template: _C_Users_user_Documents_Programacion_moviles2_FinalC2_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_qr_scan_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_qr_scan_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], QrScanPage);



/***/ }),

/***/ 3829:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/page/qr-scan/qr-scan.page.html ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>QrScan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ 96650:
/*!************************************************!*\
  !*** ./src/app/page/qr-scan/qr-scan.page.scss ***!
  \************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxci1zY2FuLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_page_qr-scan_qr-scan_module_ts-es2015.js.map