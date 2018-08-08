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
var projectsArticles = projects.querySelectorAll('article');
var belt = document.querySelector('.belt');
var skillsBackground = document.querySelector('.skills');
var skills = document.querySelector('.skills .small-width');
var aboutme = document.querySelectorAll('.about-me article');
var aboutmeBackground = document.querySelector('.about-me');
var contact = document.querySelector('.contacts .small-width');
var contacts = document.querySelectorAll('.contacts a');
var contactsElements = document.querySelectorAll('.contacts-element');
var contactBackground = document.querySelector('.contacts');
var icon = document.querySelectorAll('.contacts i');
var canvas = document.querySelector('.projects-and-canvas');
(0, _rectangle2.default)();

var menu = document.querySelectorAll('ul>li');
menu[0].addEventListener('click', function () {
  if (screen.width >= 1024) {
    if (aboutme[0].classList.contains("hide-elem")) {
      for (var i = 0; i < aboutme.length; i++) {
        aboutme[i].classList.add("show-elem");
        aboutme[i].classList.remove("hide-elem");
      }
    }
    belt.classList.remove("belt-color1");
    belt.classList.add("belt-color2");
    skillsBackground.classList.add("blue-belt");
    skills.classList.add("show-elem");
    skills.classList.remove("hide-elem");
    projectsBackground.classList.add("hide-projects");
    projectsBackground.classList.remove("blue-belt");
    projects.classList.add("hide-elem");
    projects.classList.remove("show-elem");
    projects.classList.remove("bg-projects");
    canvas.classList.remove("projects-and-canvas");

    if (contacts[0].classList.contains('contact-move1')) {
      contacts[0].classList.remove('contact-move1');
      contacts[0].classList.add('contact-move1-remove');
    }
    if (contacts[1].classList.contains('contact-move2')) {
      contacts[1].classList.remove('contact-move2');
      contacts[1].classList.add('contact-move2-remove');
    }
    if (contacts[2].classList.contains('contact-move3')) {
      contacts[2].classList.remove('contact-move3');
      contacts[2].classList.add('contact-move3-remove');
    }
    if (contacts[3].classList.contains('contact-move4')) {
      contacts[3].classList.remove('contact-move4');
      contacts[3].classList.add('contact-move4-remove');
    }
  } else {
    skillsBackground.classList.add("blue-belt");
    skills.classList.add("show-elem");
    skills.classList.remove("hide-elem");
    var skillsBelt = document.createElement('div');
    skillsBelt.className = 'belt';
    skillsBelt.style.backgroundColor = 'white';
    skillsBackground.appendChild(skillsBelt);
    for (var _i = 1; _i < projectsArticles.length - 1; _i++) {
      projectsArticles[_i].style.width = '31%';
    }
    for (var _i2 = 0; _i2 < contactsElements.length; _i2++) {
      contactsElements[_i2].style.width = '40%';
      contacts[_i2].style.height = '60px';
      contacts[_i2].style.fontSize = '19px';
      if (_i2 > 1) {
        contactsElements[_i2].style.marginTop = '10px';
      }
    }
  }
});
menu[1].addEventListener('click', function () {
  if (screen.width >= 1024) {
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
    if (contacts[0].classList.contains('contact-move1')) {
      contacts[0].classList.remove('contact-move1');
      contacts[0].classList.add('contact-move1-remove');
    }
    if (contacts[1].classList.contains('contact-move2')) {
      contacts[1].classList.remove('contact-move2');
      contacts[1].classList.add('contact-move2-remove');
    }
    if (contacts[2].classList.contains('contact-move3')) {
      contacts[2].classList.remove('contact-move3');
      contacts[2].classList.add('contact-move3-remove');
    }
    if (contacts[3].classList.contains('contact-move4')) {
      contacts[3].classList.remove('contact-move4');
      contacts[3].classList.add('contact-move4-remove');
    }
    belt.classList.remove("belt-color1");
    belt.classList.add("belt-color2");
    canvas.classList.remove("projects-and-canvas");
  } else {
    skillsBackground.classList.remove("blue-belt");
    skills.classList.remove("show-elem");
    skills.classList.add("hide-elem");
    var _belt = skillsBackground.querySelector('.belt');
    skillsBackground.removeChild(_belt);
    console.log('pA', projectsArticles);
    for (var _i3 = 1; _i3 < projectsArticles.length - 1; _i3++) {
      projectsArticles[_i3].style.width = '60%';
    }
    for (var _i4 = 0; _i4 < contactsElements.length; _i4++) {
      contactsElements[_i4].style.width = '24%';
      contacts[_i4].style.cssText = '';
      if (_i4 > 1) {
        contactsElements[_i4].style.cssText = '';
      }
    }
  }
});
menu[2].addEventListener('click', function () {
  if (screen.width >= 1024) {

    canvas.classList.remove("projects-and-canvas");
    projects.classList.add("hide-elem");
    projects.classList.remove("show-elem");
    projects.classList.remove("bg-projects");
    belt.classList.remove("belt-color2");
    belt.classList.add("belt-color1");
    for (var i = 0; i < aboutme.length; i++) {
      aboutme[i].classList.remove("show-elem");
      aboutme[i].classList.add("hide-elem");
    }
    skills.classList.remove("show-elem");;
    skills.classList.remove("skills-background");
    skills.classList.add("hide-elem");
    contacts[0].classList.remove('contact-move1-remove');
    contacts[0].classList.add('contact-move1');
    contacts[1].classList.remove('contact-move2-remove');
    contacts[1].classList.add('contact-move2');
    contacts[2].classList.remove('contact-move3-remove');
    contacts[2].classList.add('contact-move3');
    contacts[3].classList.remove('contact-move4-remove');
    contacts[3].classList.add('contact-move4');
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

var width = void 0,
    height = void 0;

function createRectangle(time) {
  var timeEl = time;
  var rectangle = document.createElement('div');
  rectangle.className = 'rectangle';
  var widthElement = Math.round(Math.random() * 200 + 50);
  rectangle.style.width = widthElement + 'px';
  var heightElement = Math.round(Math.random() * 200 + 50);
  rectangle.style.height = heightElement + 'px';
  var topPosition = Math.round(Math.random() * (width - widthElement));
  rectangle.style.top = topPosition + 'px';
  var leftPosition = Math.round(Math.random() * (height - heightElement));
  rectangle.style.left = leftPosition + 'px';
  var x = Math.round(Math.random() * (width - widthElement) - widthElement);
  var y = Math.round(Math.random() * (height - heightElement) - heightElement);
  rectangle.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
  var rectangleDiv = document.querySelector('.rectangle-div');
  rectangleDiv.appendChild(rectangle);
  var actualPositionX = leftPosition + x * (timeEl / 50);
  var actualPositionY = topPosition + y * (timeEl / 50);
  setTimeout(function () {
    return animateRectangle(rectangle, widthElement, heightElement, actualPositionX, actualPositionY, timeEl);
  }, timeEl / 5);
}
function animateRectangle(rectangle, widthElement, heightElement, actualPositionX, actualPositionY, time) {
  var startPositionX = actualPositionX;
  var startPositionY = actualPositionY;
  var timeEl = time;
  var x = Math.round(Math.random() * (width - widthElement) - widthElement);
  var y = Math.round(Math.random() * (height - heightElement) - heightElement);
  rectangle.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
  rectangle.style.opacity = 1;
  var actualPosX = startPositionX + x * (timeEl / 50);
  var actualPosY = startPositionY + y * (timeEl / 50);
  setTimeout(function () {
    return animateRectangle(rectangle, x, y, actualPosX, actualPosY, timeEl);
  }, timeEl);
}
function init() {
  height = window.innerHeight;
  width = window.innerWidth;
  for (var i = 0; i < 200; i++) {
    var time = Math.round(Math.random() * 25000 + 25000);
    createRectangle(time);
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);