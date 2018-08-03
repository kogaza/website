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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _rectangle = __webpack_require__(2);

var _rectangle2 = _interopRequireDefault(_rectangle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var projectsBackground = document.querySelector('.projects');
var projects = document.querySelector('.projects .small-width');
var belt = document.querySelector('.belt');
var skillsBackground = document.querySelector('.skills');
var skills = document.querySelector('.skills .small-width');
var aboutme = document.querySelectorAll('.about-me article');
var aboutmeBackground = document.querySelector('.about-me');
var contact = document.querySelectorAll('.contacts a');
var contactBackground = document.querySelector('.contacts');
var icon = document.querySelectorAll('.contacts i');
var canvas = document.querySelector('.projects-and-canvas');
(0, _rectangle2.default)();

var menu = document.querySelectorAll('ul>li');
menu[0].addEventListener('click', function () {
  if (aboutme[0].classList.contains("hide-elem")) {
    for (var i = 0; i < aboutme.length; i++) {
      aboutme[i].classList.add("show-elem");
      aboutme[i].classList.remove("hide-elem");
    }
  }
  belt.classList.add("belt");
  belt.classList.remove("hidden-belt");
  skillsBackground.classList.add("blue-belt");
  skills.classList.add("show-elem");
  skills.classList.remove("hide-elem");
  projectsBackground.classList.add("hide-projects");
  projectsBackground.classList.remove("blue-belt");
  projects.classList.add("hide-elem");
  projects.classList.remove("show-elem");
  projects.classList.remove("bg-projects");
  canvas.classList.remove("projects-and-canvas");

  if (contact[0].classList.contains('contact-move1')) {
    contact[0].classList.remove('contact-move1');
    contact[0].classList.add('contact-move1-remove');
  }
  if (contact[1].classList.contains('contact-move2')) {
    contact[1].classList.remove('contact-move2');
    contact[1].classList.add('contact-move2-remove');
  }
  if (contact[2].classList.contains('contact-move3')) {
    contact[2].classList.remove('contact-move3');
    contact[2].classList.add('contact-move3-remove');
  }
  if (contact[3].classList.contains('contact-move4')) {
    contact[3].classList.remove('contact-move4');
    contact[3].classList.add('contact-move4-remove');
  }
  if (screen.width < 1025) {
    aboutmeBackground.style.cssText = "";
    contactBackground.style.cssText = "";
    canvas.style.cssText = "";
    projectsBackground.classList.remove('blue-projects');
  }
});
menu[1].addEventListener('click', function () {
  skillsBackground.classList.remove("blue-belt");
  skills.classList.remove("show-elem");
  skills.classList.add("hide-elem");
  projectsBackground.classList.add("blue-belt");
  projectsBackground.classList.remove("hide-projects");
  if (projects.classList.contains("hide-elem")) {
    projects.classList.add("show-elem");
    projects.classList.remove("hide-elem");
    projects.classList.add("bg-projects");
  }
  if (skills.classList.contains("show-elem")) {
    skills.classList.add("hide-elem");
    skills.classList.remove("show-elem");
    skills.classList.remove("skills-background");
  }
  if (aboutme[0].classList.contains("hide-elem")) {
    for (var i = 0; i < aboutme.length; i++) {
      aboutme[i].classList.add("show-elem");
      aboutme[i].classList.remove("hide-elem");
    }
  };
  if (contact[0].classList.contains('contact-move1')) {
    contact[0].classList.remove('contact-move1');
    contact[0].classList.add('contact-move1-remove');
  }
  if (contact[1].classList.contains('contact-move2')) {
    contact[1].classList.remove('contact-move2');
    contact[1].classList.add('contact-move2-remove');
  }
  if (contact[2].classList.contains('contact-move3')) {
    contact[2].classList.remove('contact-move3');
    contact[2].classList.add('contact-move3-remove');
  }
  if (contact[3].classList.contains('contact-move4')) {
    contact[3].classList.remove('contact-move4');
    contact[3].classList.add('contact-move4-remove');
  }
  belt.classList.add("belt");
  belt.classList.remove("hidden-belt");
  canvas.classList.remove("projects-and-canvas");
  if (screen.width < 1025) {
    aboutmeBackground.style.cssText = "";
    contactBackground.style.cssText = "";
    canvas.style.cssText = "";
    projectsBackground.classList.remove('blue-projects');
  }
});
menu[2].addEventListener('click', function () {
  canvas.classList.remove("projects-and-canvas");
  projects.classList.add("hide-elem");
  projects.classList.remove("show-elem");
  projects.classList.remove("bg-projects");
  belt.classList.remove("belt");
  belt.classList.add("hidden-belt");
  for (var i = 0; i < aboutme.length; i++) {
    aboutme[i].classList.remove("show-elem");
    aboutme[i].classList.add("hide-elem");
  }
  skills.classList.remove("show-elem");;
  skills.classList.remove("skills-background");
  skills.classList.add("hide-elem");
  contact[0].classList.remove('contact-move1-remove');
  contact[0].classList.add('contact-move1');
  contact[1].classList.remove('contact-move2-remove');
  contact[1].classList.add('contact-move2');
  contact[2].classList.remove('contact-move3-remove');
  contact[2].classList.add('contact-move3');
  contact[3].classList.remove('contact-move4-remove');
  contact[3].classList.add('contact-move4');
  if (screen.width < 1025) {
    aboutmeBackground.style.cssText = "height: 0";
    contactBackground.style.cssText = "height: 50px";
    canvas.style.cssText = "height: 0";
    projectsBackground.classList.add('blue-projects');
    skillsBackground.classList.remove("blue-belt");
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = init;
function createRectangle() {
  var rectangle = document.createElement('div');
  rectangle.className = 'rectangle';
  var widthElement = Math.round(Math.random() * 400);
  rectangle.style.width = widthElement + 'px';
  var heightElement = Math.round(Math.random() * 400);
  rectangle.style.height = heightElement + 'px';
  var width = window.innerWidth;
  var footer = document.querySelector('footer');
  var height = footer.getBoundingClientRect();
  var x = Math.round(Math.random() * width) - widthElement;
  var y = Math.round(Math.random() * height.top - heightElement);
  rectangle.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
  document.body.appendChild(rectangle);
  setTimeout(function () {
    return animateRectangle(rectangle);
  }, 1000);
}
function animateRectangle(rectangle) {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var x = Math.round(Math.random() * width) - 250;
  var y = Math.round(Math.random() * height) - 150;
  rectangle.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
  rectangle.style.opacity = 1;
  setTimeout(function () {
    return animateRectangle(rectangle, x, y);
  }, 100000);
}
function init() {
  for (var i = 0; i < 50; i++) {
    createRectangle();
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);