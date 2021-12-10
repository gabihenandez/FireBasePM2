"use strict";
(self["webpackChunkActC2"] = self["webpackChunkActC2"] || []).push([["src_app_page_recovery_recovery_module_ts"],{

/***/ 28509:
/*!**********************************************************!*\
  !*** ./src/app/page/recovery/recovery-routing.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoveryPageRoutingModule": function() { return /* binding */ RecoveryPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _recovery_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recovery.page */ 58210);




const routes = [
    {
        path: '',
        component: _recovery_page__WEBPACK_IMPORTED_MODULE_0__.RecoveryPage
    }
];
let RecoveryPageRoutingModule = class RecoveryPageRoutingModule {
};
RecoveryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecoveryPageRoutingModule);



/***/ }),

/***/ 55499:
/*!**************************************************!*\
  !*** ./src/app/page/recovery/recovery.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoveryPageModule": function() { return /* binding */ RecoveryPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _recovery_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recovery-routing.module */ 28509);
/* harmony import */ var _recovery_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recovery.page */ 58210);







let RecoveryPageModule = class RecoveryPageModule {
};
RecoveryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _recovery_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecoveryPageRoutingModule
        ],
        declarations: [_recovery_page__WEBPACK_IMPORTED_MODULE_1__.RecoveryPage]
    })
], RecoveryPageModule);



/***/ }),

/***/ 58210:
/*!************************************************!*\
  !*** ./src/app/page/recovery/recovery.page.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoveryPage": function() { return /* binding */ RecoveryPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_user_Documents_Programacion_moviles2_FinalC2_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_recovery_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./recovery.page.html */ 95091);
/* harmony import */ var _recovery_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recovery.page.scss */ 31276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);





let RecoveryPage = class RecoveryPage {
    constructor(router) {
        this.router = router;
        this.user = {
            email: '',
            flagEmail: false,
        };
    }
    ngOnInit() {
    }
    onKeyUpEmail(event) {
        let newValue = event.target.value;
        console.log(newValue);
        let regExp = new RegExp("^[A-Za-z0-9-@.#-$%&'*_]*$");
        if (!regExp.test(newValue)) {
            event.target.value = newValue.slice(0, -1);
        }
        let email = new RegExp("[a-zA-Z0-9.#$%&'*_-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
        if (!email.test(this.user.email)) {
            this.user.flagEmail = false;
        }
        else {
            this.user.flagEmail = true;
        }
    }
    onSubmit(_form) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(['/home']);
            alert("El correo de recuperacion fue enviado a: " + this.user.email);
        });
    }
};
RecoveryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
RecoveryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-recovery',
        template: _C_Users_user_Documents_Programacion_moviles2_FinalC2_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_recovery_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_recovery_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RecoveryPage);



/***/ }),

/***/ 95091:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/page/recovery/recovery.page.html ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        defaultHref=\"/\"\n        text= \"Regresar\"\n        color= \"primary\"\n        mode= \"ios\"\n        >\n      \n      </ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"text-align: center !important;\">\n    <form class=\"example-form\" #formUser=\"ngForm\" >\n      <br>\n      <ion-row>\n        <ion-col>\n          <mat-form-field class=\"example-full-width\" >\n            <mat-label style=\"color: white;\">Correo Electronico</mat-label>\n            <br>\n            <input type=\"email\" matInput name=\"email\"\n            placeholder=\"Correo\"\n            [(ngModel)]=\"user.email\" \n            (keyup)=\"onKeyUpEmail($event)\"\n            required>\n          </mat-form-field>\n          <br>\n          <br>\n          <ion-button  (click)=\"onSubmit(formUser) \"  color=\"success\" [disabled]=\"user.flagEmail==false\">Aceptar</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n</ion-content>");

/***/ }),

/***/ 31276:
/*!**************************************************!*\
  !*** ./src/app/page/recovery/recovery.page.scss ***!
  \**************************************************/
/***/ (function(module) {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #ffffff;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nmat-form-field, ion-label {\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY292ZXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUVsQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixRQUFRO0VBQ1IsMkJBQTJCO0FBQS9COztBQUdFO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUFyQjs7QUFHRTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFFakIsY0FBYztFQUVkLFNBQVM7QUFGYjs7QUFLRTtFQUNFLHFCQUFxQjtBQUZ6Qjs7QUFNRTtFQUNFLFlBQVk7QUFIaEIiLCJmaWxlIjoicmVjb3ZlcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgXG4gICNjb250YWluZXIgc3Ryb25nIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIH1cbiAgXG4gICNjb250YWluZXIgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgXG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAjY29udGFpbmVyIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG5cbiAgbWF0LWZvcm0tZmllbGQsaW9uLWxhYmVse1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_page_recovery_recovery_module_ts-es2015.js.map