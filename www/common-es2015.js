"use strict";
(self["webpackChunkActC2"] = self["webpackChunkActC2"] || []).push([["common"],{

/***/ 80631:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": function() { return /* binding */ createButtonActiveGesture; }
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 76842);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 99502);
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ 88910);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 65709:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ attachComponent; },
/* harmony export */   "d": function() { return /* binding */ detachComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Documents_Programacion_moviles2_FinalC2_master_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 80151);
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 40693);



const attachComponent = /*#__PURE__*/function () {
  var _ref = (0,C_Users_user_Documents_Programacion_moviles2_FinalC2_master_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (delegate, container, component, cssClasses, componentProps) {
    if (delegate) {
      return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }

    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
      throw new Error('framework delegate is missing');
    }

    const el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

    if (cssClasses) {
      cssClasses.forEach(c => el.classList.add(c));
    }

    if (componentProps) {
      Object.assign(el, componentProps);
    }

    container.appendChild(el);
    yield new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
    return el;
  });

  return function attachComponent(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }

    element.remove();
  }

  return Promise.resolve();
};



/***/ }),

/***/ 99502:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ hapticSelectionStart; },
/* harmony export */   "b": function() { return /* binding */ hapticSelectionChanged; },
/* harmony export */   "c": function() { return /* binding */ hapticSelection; },
/* harmony export */   "d": function() { return /* binding */ hapticImpact; },
/* harmony export */   "h": function() { return /* binding */ hapticSelectionEnd; }
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 15907:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": function() { return /* binding */ SPINNERS; }
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 43784:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": function() { return /* binding */ createColorClasses; },
/* harmony export */   "g": function() { return /* binding */ getClassMap; },
/* harmony export */   "h": function() { return /* binding */ hostContext; },
/* harmony export */   "o": function() { return /* binding */ openURL; }
/* harmony export */ });
/* harmony import */ var C_Users_user_Documents_Programacion_moviles2_FinalC2_master_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 80151);


const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */


const createColorClasses = (color, cssClassMap) => {
  return typeof color === 'string' && color.length > 0 ? Object.assign({
    'ion-color': true,
    [`ion-color-${color}`]: true
  }, cssClassMap) : cssClassMap;
};

const getClassList = classes => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array.filter(c => c != null).map(c => c.trim()).filter(c => c !== '');
  }

  return [];
};

const getClassMap = classes => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};

const SCHEME = /^[a-z][a-z0-9+\-.]*:/;

const openURL = /*#__PURE__*/function () {
  var _ref = (0,C_Users_user_Documents_Programacion_moviles2_FinalC2_master_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (url, ev, direction, animation) {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
      const router = document.querySelector('ion-router');

      if (router) {
        if (ev != null) {
          ev.preventDefault();
        }

        return router.push(url, direction, animation);
      }
    }

    return false;
  });

  return function openURL(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();



/***/ }),

/***/ 74007:
/*!********************************************************************!*\
  !*** ./src/app/page/notifications/notifications-routing.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageRoutingModule": function() { return /* binding */ NotificationsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.page */ 89418);




const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_0__.NotificationsPage
    },
];
let NotificationsPageRoutingModule = class NotificationsPageRoutingModule {
};
NotificationsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotificationsPageRoutingModule);



/***/ }),

/***/ 89418:
/*!**********************************************************!*\
  !*** ./src/app/page/notifications/notifications.page.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPage": function() { return /* binding */ NotificationsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_user_Documents_Programacion_moviles2_FinalC2_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_notifications_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./notifications.page.html */ 4494);
/* harmony import */ var _notifications_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page.scss */ 7807);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let NotificationsPage = class NotificationsPage {
    constructor() { }
    ngOnInit() {
    }
};
NotificationsPage.ctorParameters = () => [];
NotificationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-notifications',
        template: _C_Users_user_Documents_Programacion_moviles2_FinalC2_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_notifications_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_notifications_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotificationsPage);



/***/ }),

/***/ 72331:
/*!************************************************************!*\
  !*** ./src/app/page/user-edit/user-edit-routing.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEditPageRoutingModule": function() { return /* binding */ UserEditPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _user_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-edit.page */ 57380);




const routes = [
    {
        path: '',
        component: _user_edit_page__WEBPACK_IMPORTED_MODULE_0__.UserEditPage
    },
];
let UserEditPageRoutingModule = class UserEditPageRoutingModule {
};
UserEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserEditPageRoutingModule);



/***/ }),

/***/ 57380:
/*!**************************************************!*\
  !*** ./src/app/page/user-edit/user-edit.page.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEditPage": function() { return /* binding */ UserEditPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _C_Users_user_Documents_Programacion_moviles2_FinalC2_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-edit.page.html */ 85824);
/* harmony import */ var _user_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-edit.page.scss */ 56010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let UserEditPage = class UserEditPage {
    constructor() {
        this.user = {
            usuario: '',
            email: '',
            paterno: '',
            materno: '',
            phone: '',
            flagEmail: false,
            flagUsuario: false,
            flagPaterno: false,
            flagMaterno: false,
            flagPhone: false,
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
    onKeyUp(event) {
        let newValue = event.target.value;
        console.log(newValue);
        let regExp = new RegExp("^[A-Za-z? ]+$");
        if (!regExp.test(newValue)) {
            event.target.value = newValue.slice(0, -1);
            this.user.flagUsuario = true;
        }
        let usuarios = new RegExp("^[A-Za-z? ]+$");
        if (event.target.name == "usuario") {
            if (!usuarios.test(this.user.usuario)) {
                this.user.flagUsuario = false;
            }
            else {
                this.user.flagUsuario = true;
            }
        }
        if (event.target.name == "paterno") {
            if (!usuarios.test(this.user.paterno)) {
                this.user.flagPaterno = false;
            }
            else {
                this.user.flagPaterno = true;
            }
        }
        if (event.target.name == "materno") {
            if (!usuarios.test(this.user.materno)) {
                this.user.flagMaterno = false;
            }
            else {
                this.user.flagMaterno = true;
            }
        }
    }
    onKeyPhone(event) {
        let newValue = event.target.value;
        console.log(newValue);
        let regExp = new RegExp("[0-9]");
        if (!regExp.test(newValue)) {
            event.target.value = newValue.slice(0, -1);
        }
        let telefono = new RegExp("^[0-9]*$");
        if (!telefono.test(this.user.phone)) {
            event.target.value = newValue.slice(0, -1);
            this.user.flagPhone = false;
        }
        else {
            this.user.flagPhone = true;
        }
    }
    onSubmit(_form) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            alert("Usuario Editado");
            console.log(this.user);
        });
    }
};
UserEditPage.ctorParameters = () => [];
UserEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-user-edit',
        template: _C_Users_user_Documents_Programacion_moviles2_FinalC2_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_user_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserEditPage);



/***/ }),

/***/ 4494:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/page/notifications/notifications.page.html ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-title>Notificaciones</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button icon-right routerLink=\"/home\" color=\"success\">  \n        <ion-icon name=\"exit-outline\" > </ion-icon>  </ion-button>\n    </ion-buttons>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card> \n    <ion-searchbar></ion-searchbar>\n    <ion-list>\n  <ion-item>\n    <ion-label>Tu pedido va en camino</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Tienes un cupón de 50%</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Articulos en oferta</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Compra cancelada con exito</ion-label>\n  </ion-item>\n</ion-list>\n  </ion-card>\n  \n</ion-content>\n");

/***/ }),

/***/ 85824:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/page/user-edit/user-edit.page.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-title>Datos Usuarios</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button icon-right routerLink=\"/home\" color=\"success\">\n        <ion-icon name=\"exit-outline\"> </ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content style=\"text-align: center !important; color: ios body;\">\n  <form action=\"\" #formUser=\"ngForm\">\n    <ion-row>\n      <ion-col>\n        <mat-form-field class=\"example-full-width\">\n          <mat-label style=\"color:white;\">Nombre</mat-label>\n          <input matInput #userCont placeholder=\"Nombre\" type=\"text\" [(ngModel)]=\"user.usuario\"\n            (keyup)=\"onKeyUp($event)\" name=\"usuario\" required>\n          <mat-hint aling=\"end\">{{userCont.value.length}}</mat-hint>\n        </mat-form-field>\n        <br>\n        <br>\n        <mat-form-field class=\"example-full-width\">\n          <mat-label style=\"color: white;\">Apellido Paterno</mat-label>\n          <input matInput #paternoCont placeholder=\"Apellido Paterno\" type=\"text\" [(ngModel)]=\"user.paterno\"\n            (keyup)=\"onKeyUp($event)\" name=\"paterno\" required>\n          <mat-hint aling=\"end\">{{paternoCont.value.length}}</mat-hint>\n        </mat-form-field>\n        <br>\n        <br>\n        <mat-form-field class=\"example-full-width\">\n          <mat-label style=\"color: white;\">Apellido Materno</mat-label>\n          <input matInput #maternoCont placeholder=\"Apellido Materno\" type=\"text\" [(ngModel)]=\"user.materno\"\n            (keyup)=\"onKeyUp($event)\" name=\"materno\" required>\n          <mat-hint aling=\"end\">{{maternoCont.value.length}}</mat-hint>\n        </mat-form-field>\n        <br>\n        <br>\n        <mat-form-field class=\"example-full-width\">\n          <mat-label style=\"color: white;\">Correo Electronico</mat-label>\n          <input matInput placeholder=\"Correo Electronico\" type=\"email\" [(ngModel)]=\"user.email\"\n            (keyup)=\"onKeyUpEmail($event)\" name=\"email\" required>\n        </mat-form-field>\n        <br>\n        <br>\n        <mat-form-field class=\"example-full-width\">\n          <mat-label style=\"color: white;\">Telefono</mat-label>\n          <input matInput #phoneCont placeholder=\"Telefono\" type=\"text\" [(ngModel)]=\"user.phone\"\n            (keyup)=\"onKeyPhone($event)\" name=\"Telefono\" onkeypress=\"if(this.value.length == 10 ) return false;\"\n            required>\n          <mat-hint aling=\"end\">{{phoneCont.value.length}}</mat-hint>\n        </mat-form-field>\n        <br>\n        <br>\n        <ion-button (click)=\"onSubmit(formUser)\" color=\"success\"  [disabled]=\"user.phone.length !=10|| user.flagEmail==false ||user.flagUser==false || user.flagPaterno == false \n            || user.flagMaterno==false  || user.flagPhone==false\">Aceptar</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>");

/***/ }),

/***/ 7807:
/*!************************************************************!*\
  !*** ./src/app/page/notifications/notifications.page.scss ***!
  \************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 56010:
/*!****************************************************!*\
  !*** ./src/app/page/user-edit/user-edit.page.scss ***!
  \****************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWVkaXQucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map