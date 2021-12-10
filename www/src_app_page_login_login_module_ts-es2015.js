"use strict";
(self["webpackChunkActC2"] = self["webpackChunkActC2"] || []).push([["src_app_page_login_login_module_ts"],{

/***/ 60482:
/*!****************************************************!*\
  !*** ./src/app/page/login/login-routing.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": function() { return /* binding */ LoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 97569);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 87760:
/*!********************************************!*\
  !*** ./src/app/page/login/login.module.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 60482);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 97569);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 97569:
/*!******************************************!*\
  !*** ./src/app/page/login/login.page.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_user_Documents_Programacion_moviles2_FinalC2_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 58792);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 66375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let LoginPage = class LoginPage {
    constructor() {
        this.user = {
            usuario: '',
            password: '',
        };
    }
    ngOnInit() {
    }
    onKeyUp(event) {
        let newValue = event.target.value;
        console.log(newValue);
        let regExp = new RegExp('^[A-Za-z0-9? ]+$');
        if (!regExp.test(newValue)) {
            event.target.value = newValue.slice(0, -1);
        }
    }
    onSubmit(_form) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.user);
            alert(this.user.usuario + '_' + this.user.password);
        });
    }
};
LoginPage.ctorParameters = () => [];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-login',
        template: _C_Users_user_Documents_Programacion_moviles2_FinalC2_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 58792:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/page/login/login.page.html ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style=\"text-align:center !important;\">\n  \n  <form class=\"example-form\" #formUser=\"ngForm\" color = \"primary\">\n    <ion-row>\n      <ion-col>\n         <mat-form-field class=\"example-full-width\" >\n          <mat-label>Usuario</mat-label>\n          <input type=\"text\" #usuarioCount matInput name=\"usuario\" [(ngModel)]=\"user.usuario\" placeholder=\"User\" (keyup)=\"onKeyUp($event)\"\n          onkeypress=\"if(this.value.length==10) return false;\"\n          required>\n          <mat-hint aling=\"end\"> {{usuarioCount.value.lenght}} / 10 </mat-hint> \n        </mat-form-field>\n        <br>\n        <br>\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Password</mat-label>\n          <input matInput placeholder=\"Password\" matInput name=\"password\" [(ngModel)]=\"user.password\" required minlength=\"8\" maxlength=\"20\">\n        </mat-form-field>\n        <br>\n        <br>\n        <mat-label>\n          <a href=\"/recovery\">Olvidé mi contraseña</a>\n        </mat-label>\n        <br>\n        <br>\n        <ion-button (click)=\"onSubmit(formUser)\" color=\"success\">\n          Submit\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ 66375:
/*!********************************************!*\
  !*** ./src/app/page/login/login.page.scss ***!
  \********************************************/
/***/ (function(module) {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #ffffff;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n  color: #fc0349;\n}\n\nion-content {\n  --ion-background-color: #3480eb;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixRQUFRO0VBQ1IsMkJBQTJCO0FBQy9COztBQUVFO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNyQjs7QUFFRTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFFakIsY0FBYztFQUVkLFNBQVM7QUFEYjs7QUFJRTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBRGxCOztBQUlFO0VBQ0UsK0JBQXVCO0FBRDNCIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgXG4gICNjb250YWluZXIgc3Ryb25nIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIH1cbiAgXG4gICNjb250YWluZXIgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgXG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAjY29udGFpbmVyIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2ZjMDM0OTtcbiAgfVxuICBcbiAgaW9uLWNvbnRlbnR7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzM0ODBlYjtcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_page_login_login_module_ts-es2015.js.map