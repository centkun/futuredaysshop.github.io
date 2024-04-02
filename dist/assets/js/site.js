/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/site.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/modules/_closest.js":
/*!****************************************!*\
  !*** ./src/assets/modules/_closest.js ***!
  \****************************************/
/*! exports provided: closest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
function closest(el, targetClass) {
  for (var item = el; item; item = item.parentElement) {
    if (item.classList.contains(targetClass)) {
      return item;
    }
  }
}

/***/ }),

/***/ "./src/assets/modules/hover.js":
/*!*************************************!*\
  !*** ./src/assets/modules/hover.js ***!
  \*************************************/
/*! exports provided: hover, hoverDynamic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hover", function() { return hover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoverDynamic", function() { return hoverDynamic; });
/* harmony import */ var _closest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_closest */ "./src/assets/modules/_closest.js");

function hover() {
  var hov = document.querySelectorAll('a, button, .hov');
  if (hasTouchScreen()) {
    hov.forEach(function (el, index) {
      el.addEventListener('touchstart', function (e) {
        this.classList.add('hover');
        var parent = Object(_closest__WEBPACK_IMPORTED_MODULE_0__["closest"])(el, 'js-hover-parent');
        if (parent) {
          parent.classList.add('hover-parent');
        }
      });
      el.addEventListener('touchend', function (e) {
        this.classList.remove('hover');
        var parent = Object(_closest__WEBPACK_IMPORTED_MODULE_0__["closest"])(el, 'js-hover-parent');
        if (parent) {
          parent.classList.remove('hover-parent');
        }
      });
    });
  } else {
    hov.forEach(function (el, index) {
      el.addEventListener('mouseenter', function (e) {
        this.classList.add('hover');
        var parent = Object(_closest__WEBPACK_IMPORTED_MODULE_0__["closest"])(el, 'js-hover-parent');
        if (parent) {
          parent.classList.add('hover-parent');
        }
      });
      el.addEventListener('mouseleave', function (e) {
        this.classList.remove('hover');
        var parent = Object(_closest__WEBPACK_IMPORTED_MODULE_0__["closest"])(el, 'js-hover-parent');
        if (parent) {
          parent.classList.remove('hover-parent');
        }
      });
    });
  }
}
function hoverDynamic(el) {
  if (el) {
    if (hasTouchScreen()) {
      el.addEventListener('touchstart', function (e) {
        this.classList.add('hover');
        var parent = Object(_closest__WEBPACK_IMPORTED_MODULE_0__["closest"])(el, 'js-hover-parent');
        if (parent) {
          parent.classList.add('hover-parent');
        }
      });
      el.addEventListener('touchend', function (e) {
        this.classList.remove('hover');
        var parent = Object(_closest__WEBPACK_IMPORTED_MODULE_0__["closest"])(el, 'js-hover-parent');
        if (parent) {
          parent.classList.remove('hover-parent');
        }
      });
    } else {
      el.addEventListener('mouseenter', function (e) {
        this.classList.add('hover');
        var parent = Object(_closest__WEBPACK_IMPORTED_MODULE_0__["closest"])(el, 'js-hover-parent');
        if (parent) {
          parent.classList.add('hover-parent');
        }
      });
      el.addEventListener('mouseleave', function (e) {
        this.classList.remove('hover');
        var parent = Object(_closest__WEBPACK_IMPORTED_MODULE_0__["closest"])(el, 'js-hover-parent');
        if (parent) {
          parent.classList.remove('hover-parent');
        }
      });
    }
  }
}

/***/ }),

/***/ "./src/assets/scss/site.scss":
/*!***********************************!*\
  !*** ./src/assets/scss/site.scss ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/site.js":
/*!*********************!*\
  !*** ./src/site.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_scss_site_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/scss/site.scss */ "./src/assets/scss/site.scss");
/* harmony import */ var _assets_modules_hover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/modules/hover */ "./src/assets/modules/hover.js");
// Stylesheets


var init = function init() {
  Object(_assets_modules_hover__WEBPACK_IMPORTED_MODULE_1__["hover"])();
};
init();

/***/ })

/******/ });
//# sourceMappingURL=site.js.map