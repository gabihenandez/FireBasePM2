(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkActC2"] = self["webpackChunkActC2"] || []).push([["src_app_page_products_products_module_ts"], {
    /***/
    35869:
    /*!**********************************************************!*\
      !*** ./src/app/page/products/products-routing.module.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductsPageRoutingModule": function ProductsPageRoutingModule() {
          return (
            /* binding */
            _ProductsPageRoutingModule
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


      var _products_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./products.page */
      60017);

      var routes = [{
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_0__.ProductsPage
      }];

      var _ProductsPageRoutingModule = function ProductsPageRoutingModule() {
        _classCallCheck(this, ProductsPageRoutingModule);
      };

      _ProductsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ProductsPageRoutingModule);
      /***/
    },

    /***/
    17010:
    /*!**************************************************!*\
      !*** ./src/app/page/products/products.module.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductsPageModule": function ProductsPageModule() {
          return (
            /* binding */
            _ProductsPageModule
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _products_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./products-routing.module */
      35869);
      /* harmony import */


      var _products_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./products.page */
      60017);

      var _ProductsPageModule = function ProductsPageModule() {
        _classCallCheck(this, ProductsPageModule);
      };

      _ProductsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _products_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductsPageRoutingModule],
        declarations: [_products_page__WEBPACK_IMPORTED_MODULE_1__.ProductsPage]
      })], _ProductsPageModule);
      /***/
    },

    /***/
    60017:
    /*!************************************************!*\
      !*** ./src/app/page/products/products.page.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductsPage": function ProductsPage() {
          return (
            /* binding */
            _ProductsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _C_Users_user_Documents_Programacion_moviles2_FinalC2_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_products_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./products.page.html */
      55304);
      /* harmony import */


      var _products_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./products.page.scss */
      28943);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/barcode-scanner/ngx */
      10926);

      var _ProductsPage = /*#__PURE__*/function () {
        function ProductsPage(barcodeScanner) {
          _classCallCheck(this, ProductsPage);

          this.barcodeScanner = barcodeScanner;
        }

        _createClass(ProductsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "QRBoton",
          value: function QRBoton() {
            this.barcodeScanner.scan().then(function (barcodeData) {
              console.log('Barcode data', barcodeData);
            })["catch"](function (err) {
              console.log('Error', err);
            });
          }
        }]);

        return ProductsPage;
      }();

      _ProductsPage.ctorParameters = function () {
        return [{
          type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner
        }];
      };

      _ProductsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-products',
        template: _C_Users_user_Documents_Programacion_moviles2_FinalC2_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_products_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_products_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _ProductsPage);
      /***/
    },

    /***/
    55304:
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/page/products/products.page.html ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-title>Productos</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button icon-right routerLink=\"/home\" color=\"success\">  \n        <ion-icon name=\"exit-outline\" > </ion-icon>  </ion-button>\n    </ion-buttons>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"text-align:center\">\n  <ion-card>\n    <img src=\"https://ellafashion.com/images/content/digital-price-tag-on-garnment.jpg\">\n    <h1>Camisa Blanca </h1>\n    <h2>Cuello tipo b</h2>\n    <br>\n  </ion-card> \n  <br>\n  <ion-button (click)=\"QRBoton()\" color=\"success\"> Lector QR\n    <ion-icon name=\"qr-code-outline\"> </ion-icon>  </ion-button>\n</ion-content>\n\n";
      /***/
    },

    /***/
    28943:
    /*!**************************************************!*\
      !*** ./src/app/page/products/products.page.scss ***!
      \**************************************************/

    /***/
    function _(module) {
      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0cy5wYWdlLnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_page_products_products_module_ts-es5.js.map