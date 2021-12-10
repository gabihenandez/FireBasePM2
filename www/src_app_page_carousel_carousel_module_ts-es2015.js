"use strict";
(self["webpackChunkActC2"] = self["webpackChunkActC2"] || []).push([["src_app_page_carousel_carousel_module_ts"],{

/***/ 60417:
/*!**********************************************************!*\
  !*** ./src/app/page/carousel/carousel-routing.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselPageRoutingModule": function() { return /* binding */ CarouselPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _carousel_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel.page */ 13647);




const routes = [
    {
        path: '',
        component: _carousel_page__WEBPACK_IMPORTED_MODULE_0__.CarouselPage
    }
];
let CarouselPageRoutingModule = class CarouselPageRoutingModule {
};
CarouselPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CarouselPageRoutingModule);



/***/ }),

/***/ 55258:
/*!**************************************************!*\
  !*** ./src/app/page/carousel/carousel.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselPageModule": function() { return /* binding */ CarouselPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _carousel_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel-routing.module */ 60417);
/* harmony import */ var _carousel_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.page */ 13647);







let CarouselPageModule = class CarouselPageModule {
};
CarouselPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _carousel_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarouselPageRoutingModule
        ],
        declarations: [_carousel_page__WEBPACK_IMPORTED_MODULE_1__.CarouselPage]
    })
], CarouselPageModule);



/***/ }),

/***/ 13647:
/*!************************************************!*\
  !*** ./src/app/page/carousel/carousel.page.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselPage": function() { return /* binding */ CarouselPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_user_Documents_Programacion_moviles2_FinalC2_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_carousel_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./carousel.page.html */ 66283);
/* harmony import */ var _carousel_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.page.scss */ 56571);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let CarouselPage = class CarouselPage {
    constructor() {
        this.slideOpts = {
            autoplay: true,
            loop: true,
            speed: 15,
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            on: {
                beforeInit: function () {
                    const swiper = this;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}cube`);
                    swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                    const overwriteParams = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: false,
                        virtualTranslate: true,
                    };
                    this.params = Object.assign(this.params, overwriteParams);
                    this.originalParams = Object.assign(this.originalParams, overwriteParams);
                },
                setTranslate: function () {
                    const swiper = this;
                    const { $el, $wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize, } = swiper;
                    const params = swiper.params.cubeEffect;
                    const isHorizontal = swiper.isHorizontal();
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    let wrapperRotate = 0;
                    let $cubeShadowEl;
                    if (params.shadow) {
                        if (isHorizontal) {
                            $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
                            if ($cubeShadowEl.length === 0) {
                                $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
                                $wrapperEl.append($cubeShadowEl);
                            }
                            $cubeShadowEl.css({ height: `${swiperWidth}px` });
                        }
                        else {
                            $cubeShadowEl = $el.find('.swiper-cube-shadow');
                            if ($cubeShadowEl.length === 0) {
                                $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
                                $el.append($cubeShadowEl);
                            }
                        }
                    }
                    for (let i = 0; i < slides.length; i += 1) {
                        const $slideEl = slides.eq(i);
                        let slideIndex = i;
                        if (isVirtual) {
                            slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
                        }
                        let slideAngle = slideIndex * 90;
                        let round = Math.floor(slideAngle / 360);
                        if (rtl) {
                            slideAngle = -slideAngle;
                            round = Math.floor(-slideAngle / 360);
                        }
                        const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                        let tx = 0;
                        let ty = 0;
                        let tz = 0;
                        if (slideIndex % 4 === 0) {
                            tx = -round * 4 * swiperSize;
                            tz = 0;
                        }
                        else if ((slideIndex - 1) % 4 === 0) {
                            tx = 0;
                            tz = -round * 4 * swiperSize;
                        }
                        else if ((slideIndex - 2) % 4 === 0) {
                            tx = swiperSize + (round * 4 * swiperSize);
                            tz = swiperSize;
                        }
                        else if ((slideIndex - 3) % 4 === 0) {
                            tx = -swiperSize;
                            tz = (3 * swiperSize) + (swiperSize * 4 * round);
                        }
                        if (rtl) {
                            tx = -tx;
                        }
                        if (!isHorizontal) {
                            ty = tx;
                            tx = 0;
                        }
                        const transform$$1 = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
                        if (progress <= 1 && progress > -1) {
                            wrapperRotate = (slideIndex * 90) + (progress * 90);
                            if (rtl)
                                wrapperRotate = (-slideIndex * 90) - (progress * 90);
                        }
                        $slideEl.transform(transform$$1);
                        if (params.slideShadows) {
                            // Set shadows
                            let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                            let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
                                $slideEl.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
                                $slideEl.append(shadowAfter);
                            }
                            if (shadowBefore.length)
                                shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length)
                                shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
                    }
                    $wrapperEl.css({
                        '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
                        '-moz-transform-origin': `50% 50% -${swiperSize / 2}px`,
                        '-ms-transform-origin': `50% 50% -${swiperSize / 2}px`,
                        'transform-origin': `50% 50% -${swiperSize / 2}px`,
                    });
                    if (params.shadow) {
                        if (isHorizontal) {
                            $cubeShadowEl.transform(`translate3d(0px, ${(swiperWidth / 2) + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
                        }
                        else {
                            const shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
                            const multiplier = 1.5 - ((Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
                                + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2));
                            const scale1 = params.shadowScale;
                            const scale2 = params.shadowScale / multiplier;
                            const offset$$1 = params.shadowOffset;
                            $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${(swiperHeight / 2) + offset$$1}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
                        }
                    }
                    const zFactor = (swiper.browser.isSafari || swiper.browser.isUiWebView) ? (-swiperSize / 2) : 0;
                    $wrapperEl
                        .transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
                },
                setTransition: function (duration) {
                    const swiper = this;
                    const { $el, slides } = swiper;
                    slides
                        .transition(duration)
                        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                        .transition(duration);
                    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                        $el.find('.swiper-cube-shadow').transition(duration);
                    }
                },
            }
        };
    }
    ngOnInit() {
    }
};
CarouselPage.ctorParameters = () => [];
CarouselPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-carousel',
        template: _C_Users_user_Documents_Programacion_moviles2_FinalC2_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_carousel_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_carousel_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CarouselPage);



/***/ }),

/***/ 66283:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/page/carousel/carousel.page.html ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"light\">\n      <ion-title> CARRUSEL</ion-title>\n      <ion-buttons slot=\"primary\">\n        <ion-button icon-right routerLink=\"/home\" color=\"success\">  \n          <ion-icon name=\"exit-outline\" > </ion-icon>  </ion-button>\n      </ion-buttons>    \n  </ion-toolbar>  \n</ion-header>\n\n<ion-content style=\"text-align:center\">\n  <ion-card >\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" >\n      <ion-slide>\n        <img src=\"https://www.1zoom.me/big/73/61103-aleni.jpg\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"data:image/jpeg;base64,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\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"https://d2h1pu99sxkfvn.cloudfront.net/b0/4820796/309096905_JhoypkNFCj/P0.jpg\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"\thttps://pictures.depop.com/b0/11484125/443293159_yCTj7HU2Gf/P6.jpg\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"https://images.stockx.com/images/Air-Jordan-1-Retro-High-J-Balvin-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1608232129\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_srYmDKthgKuTF5MPjHaIAzNgNAjKuROwhg&usqp=CAU\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"https://www.perrospedia.com/wp-content/uploads/2014/06/image32.jpg\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"https://www.1zoom.me/big/73/61103-aleni.jpg\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeonYjjwP-6GKQPYvmlRbMonoy5JUQgUr9tlE46G4tb-3TItHWYymP9eoad4E2cV51b4k&usqp=CAU\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"https://misanimales.com/wp-content/uploads/2021/07/pekines-fondo-blanco.jpg\">\n      </ion-slide>\n    </ion-slides>\n  </ion-card>\n  <br>\n  <br>\n  <br>\n  <ion-button icon-right routerLink=\"/dashboard/products\" color=\"success\"> Lector QR\n    <ion-icon name=\"qr-code-outline\"> </ion-icon>  </ion-button>\n</ion-content>\n");

/***/ }),

/***/ 56571:
/*!**************************************************!*\
  !*** ./src/app/page/carousel/carousel.page.scss ***!
  \**************************************************/
/***/ (function(module) {

module.exports = "page-slider .swiper-pagination-bullet-activate {\n  background: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGlCQUFpQjtBQUF6QiIsImZpbGUiOiJjYXJvdXNlbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLXNsaWRlcntcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2YXRle1xuICAgICAgICBiYWNrZ3JvdW5kOndoaXRlIDtcbiAgICB9XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_page_carousel_carousel_module_ts-es2015.js.map