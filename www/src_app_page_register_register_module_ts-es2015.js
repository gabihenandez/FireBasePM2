"use strict";
(self["webpackChunkActC2"] = self["webpackChunkActC2"] || []).push([["src_app_page_register_register_module_ts"],{

/***/ 47740:
/*!**********************************************************!*\
  !*** ./src/app/page/register/register-routing.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": function() { return /* binding */ RegisterPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 39411);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 8952:
/*!**************************************************!*\
  !*** ./src/app/page/register/register.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": function() { return /* binding */ RegisterPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 47740);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 39411);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ 53616);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 64742);









let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__.MatSliderModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 39411:
/*!************************************************!*\
  !*** ./src/app/page/register/register.page.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": function() { return /* binding */ RegisterPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_user_Documents_Programacion_moviles2_FinalC2_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./register.page.html */ 39378);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 18392);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);





let RegisterPage = class RegisterPage {
    constructor(router) {
        this.router = router;
        this.user = {
            usuario: '',
            password: '',
            apellido: '',
            email: '',
            passwordConf: '',
            flagUsuario: false,
            flagPass: false,
            flagPassConf: false,
            flagEmail: false,
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
        let usuarios = new RegExp("^[A-Za-z0-9]*$");
        if (!usuarios.test(this.user.usuario)) {
            this.user.flagUsuario = false;
        }
        else {
            this.user.flagUsuario = true;
        }
    }
    // onKeyUpApellido(event: any){
    //   let newValue = event.target.value;
    //   console.log(newValue);
    //   let regExp = new RegExp('^[A-Za-z0-9? ]+$');
    //   if(!regExp.test(newValue)){
    //     event.target.value = newValue.slice(0, -1);
    //   }
    // }
    onKeyUpPass(event) {
        let newValue = event.target.value;
        let regExp = new RegExp('^[A-Za-z0-9*#&$%]*$');
        if (!regExp.test(newValue)) {
            event.target.value = newValue.slice(0, -1);
        }
        let password = new RegExp("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[*#&$%])");
        if (event.target.name == "password") {
            if (!password.test(this.user.password)) {
                this.user.flagPass = false;
            }
            else {
                this.user.flagPass = true;
            }
        }
        if (event.target.name == "passwordConf") {
            if (!password.test(this.user.passwordConf)) {
                this.user.flagPassConf = false;
            }
            else {
                this.user.flagPassConf = true;
            }
        }
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
            if (this.user.password == this.user.passwordConf) {
                if (this.user.password.length >= 8 && this.user.passwordConf.length >= 8 && this.user.usuario.length >= 8) {
                    alert("Registro exitoso");
                    this.router.navigate(['/home']);
                }
                else {
                    alert("El nombre de usuario no cumple con las condiciones");
                }
            }
            else {
                alert("Las contraseñas no son iguales");
            }
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-register',
        template: _C_Users_user_Documents_Programacion_moviles2_FinalC2_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 39378:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/page/register/register.page.html ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" text=\"Regresar\" color=\"primary\" mode=\"ios\">\n      </ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"text-align: center !important;\" >\n    <form class=\"example-form\" #formUser=\"ngForm\">\n      <br>\n      <ion-row>\n        <ion-col>\n          <mat-form-field class=\"example-full-width\" >\n            <mat-label style=\"color: white;\">Usuario</mat-label>\n            <input type=\"text\" #userCont matInput name=\"usuario\" [(ngModel)]=\"user.usuario\" \n            maxlength=\"30\"\n            minlength=\"8\"\n            placeholder=\"Usuario\" (keyup)=\"onKeyUp($event)\"\n            onkeypress=\"if(this.value.length==30) return false;\"\n            required>\n            <mat-hint aling=\"end\">{{userCont.value.length}} /30</mat-hint>\n          </mat-form-field>\n          <br>\n          <br>\n          <mat-form-field class=\"example-full-width\" >\n            <mat-label style=\"color: white;\">Correo Electronico</mat-label>\n            <input type=\"email\" matInput name=\"email\"\n            placeholder=\"Correo\"\n            [(ngModel)]=\"user.email\" \n            (keyup)=\"onKeyUpEmail($event)\"\n            required>\n          </mat-form-field>\n          <br>\n          <br>\n          <mat-form-field class=\"example-full-width\" >\n            <mat-label style=\"color: white;\">Contraseña</mat-label>\n            <input type=\"password\" #passCont matInput name=\"password\" [(ngModel)]=\"user.password\" \n            maxlength=\"20\"\n            minlength=\"8\"\n            placeholder=\"Contraseña\" (keyup)=\"onKeyUpPass($event)\"\n            onkeypress=\"if(this.value.length==20) return false;\"\n            required>\n            <mat-hint aling=\"end\">{{passCont.value.length}} /20</mat-hint>\n          </mat-form-field>\n          <br>\n          <br>\n          <mat-form-field class=\"example-full-width\" >\n            <mat-label style=\"color: white;\">Confirmar Contraseña</mat-label>\n            <input type=\"password\" #confPassCont matInput name=\"passwordConf\" [(ngModel)]=\"user.passwordConf\" \n            maxlength=\"20\"\n            minlength=\"8\"\n            placeholder=\"Confirmar contraseña\" (keyup)=\"onKeyUpPass($event)\"\n            onkeypress=\"if(this.value.length==20) return false;\"\n            required>\n            <mat-hint aling=\"end\">{{confPassCont.value.length}} /20</mat-hint>\n          </mat-form-field>\n          <br>\n          <br>\n          <ion-button  (click)=\"onSubmit(formUser) \"  color=\"success\" [disabled]=\" user.flagEmail==false ||\n          user.flagUsuario==false || user.flagPass == false || user.flagPassConf==false\">Aceptar</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n</ion-content>");

/***/ }),

/***/ 18392:
/*!**************************************************!*\
  !*** ./src/app/page/register/register.page.scss ***!
  \**************************************************/
/***/ (function(module) {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #ffffff;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nmat-form-field, ion-label {\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUVsQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixRQUFRO0VBQ1IsMkJBQTJCO0FBQS9COztBQUdFO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUFyQjs7QUFHRTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFFakIsY0FBYztFQUVkLFNBQVM7QUFGYjs7QUFLRTtFQUNFLHFCQUFxQjtBQUZ6Qjs7QUFNRTtFQUNFLFlBQVk7QUFIaEIiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgXG4gICNjb250YWluZXIgc3Ryb25nIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIH1cbiAgXG4gICNjb250YWluZXIgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgXG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAjY29udGFpbmVyIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG5cbiAgbWF0LWZvcm0tZmllbGQsaW9uLWxhYmVse1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_page_register_register_module_ts-es2015.js.map