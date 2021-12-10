(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkActC2"] = self["webpackChunkActC2"] || []).push([["src_app_home_home_module_ts"], {
    /***/
    52003:
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageRoutingModule": function HomePageRoutingModule() {
          return (
            /* binding */
            _HomePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.page */
      62267);

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
      }];

      var _HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      _HomePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _HomePageRoutingModule);
      /***/
    },

    /***/
    3467:
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageModule": function HomePageModule() {
          return (
            /* binding */
            _HomePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.page */
      62267);
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home-routing.module */
      52003);
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/slider */
      53616);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      64742);

      var _HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      _HomePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__.MatSliderModule],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
      })], _HomePageModule);
      /***/
    },

    /***/
    62267:
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePage": function HomePage() {
          return (
            /* binding */
            _HomePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Users_user_Documents_Programacion_moviles2_FinalC2_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */
      12056);
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.page.scss */
      18847);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _HomePage = /*#__PURE__*/function () {
        function HomePage(router) {
          _classCallCheck(this, HomePage);

          this.router = router;
          this.user = {
            usuario: '',
            password: '',
            flag: false
          };
        }

        _createClass(HomePage, [{
          key: "onKeyUp",
          value: function onKeyUp(event) {
            var newValue = event.target.value;
            console.log(newValue);
            var regExp = new RegExp('^[A-Za-z0-9? ]+$');

            if (!regExp.test(newValue)) {
              event.target.value = newValue.slice(0, -1);
            }
          }
        }, {
          key: "onKeyUpPass",
          value: function onKeyUpPass(event) {
            var newValue = event.target.value;
            console.log(newValue);
            var regExp = new RegExp('^[A-Za-z0-9*#&$%]*$');

            if (!regExp.test(newValue)) {
              event.target.value = newValue.slice(0, -1);
            }

            var password = new RegExp("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[*#&$%])");

            if (!password.test(this.user.password)) {
              this.user.flag = false;
            } else {
              this.user.flag = true;
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(_form) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log(this.user);

                      if (this.user.usuario.length < 8 || this.user.password.length < 8) {
                        alert("Requisitos no cumplidos");
                      } else {
                        alert(this.user.usuario + ' : ' + this.user.password);
                        this.router.navigate(['/dashboard/carousel']);
                      }

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return HomePage;
      }();

      _HomePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }];
      };

      _HomePage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _C_Users_user_Documents_Programacion_moviles2_FinalC2_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _HomePage);
      /***/
    },

    /***/
    12056:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/home.page.html ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content style=\"text-align:center !important;\">\n  <ion-card>\n    <ion-avatar >\n      <br>\n      <img src=\"https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg\">\n    </ion-avatar>\n    <form class=\"example-form\" #formUser=\"ngForm\" color = \"primary\">\n      \n      <ion-row>\n        <ion-col>\n           <mat-form-field class=\"example-full-width\" >\n            <mat-label>Usuario</mat-label>\n            <input type=\"text\" #userCount  matInput name=\"usuario\" [(ngModel)]=\"user.usuario\" placeholder=\"User\" (keyup)=\"onKeyUp($event)\"\n            onkeypress=\"if(this.value.length == 30 ) return false;\"\n            required>\n            <mat-hint> {{userCount.value.length}}  /30 </mat-hint>\n          </mat-form-field>\n          <br>\n          <br>\n          <mat-form-field class=\"example-full-width\">\n            <mat-label>Contraseña</mat-label>\n            <input type=\"password\" #passCount matInput placeholder=\"Password\" matInput name=\"password\" [(ngModel)]=\"user.password\" maxlength=\"30\" (keyup)=\"onKeyUpPass($event)\" \n            onkeypress=\"if(this.value.length==20) return false;\" required>\n            <mat-hint> {{passCount.value.length}} /20 </mat-hint>\n          </mat-form-field>\n          <br>\n          <br>\n          \n          <br>\n          <ion-button (click)=\"onSubmit(formUser)\" [disabled]= \"user.flag==false\" color=\"success\">\n            Iniciar\n          </ion-button>\n          <br>\n          <ion-text>\n            <ion-label>\n              <br>\n              <a href=\"/recovery\">¿Olvidaste tu contraseña? </a><br>\n              <br>\n              <a href=\"/register\">Haz click aqui para registrarte </a><br>\n              <br>\n            </ion-label>\n          </ion-text> \n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-card> \n</ion-content>\n";
      /***/
    },

    /***/
    18847:
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /***/
    function _(module) {
      module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #ffffff;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-avatar {\n  width: 165px;\n  height: 160px;\n  margin: auto;\n}\n\n/*ion-content{\n  --ion-background-color: #3480eb;\n}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBRWxCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFFBQVE7RUFDUiwyQkFBMkI7QUFBN0I7O0FBSUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBRG5COztBQUlBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUVqQixjQUFjO0VBRWQsU0FBUztBQUhYOztBQU1BO0VBQ0UscUJBQXFCO0FBSHZCOztBQU1BO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBSGQ7O0FBVUE7O0VBTkUiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjZmZmZmZmO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tYXZhdGFye1xuICB3aWR0aDogMTY1cHg7XG4gIGhlaWdodDogMTYwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuXG5cblxuXG4vKmlvbi1jb250ZW50e1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMzQ4MGViO1xufSovIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_home_home_module_ts-es5.js.map