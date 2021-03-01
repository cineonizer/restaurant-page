/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Modules/header.js":
/*!*******************************!*\
  !*** ./src/Modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHeader\": () => (/* binding */ renderHeader)\n/* harmony export */ });\nconst renderHeader = () => {\n    const header = document.createElement('div');\n    header.classList.add('header-container');\n\n    const headerName = document.createElement('div');\n    headerName.classList.add('header-name');\n    headerName.textContent = 'PORTRADA';\n    header.appendChild(headerName);\n\n    const headerNav = document.createElement('div');\n    headerNav.classList.add('header-nav');\n    header.appendChild(headerNav);\n\n    const homeBtn = document.createElement('div');\n    homeBtn.textContent = 'HOME';\n    headerNav.appendChild(homeBtn);\n\n    const menuBtn = document.createElement('div');\n    menuBtn.textContent = 'MENU';\n    headerNav.appendChild(menuBtn);\n\n    const reserveBtn = document.createElement('div');\n    reserveBtn.textContent = 'RESERVE';\n    headerNav.appendChild(reserveBtn);\n\n    return header;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/header.js?");

/***/ }),

/***/ "./src/Modules/home.js":
/*!*****************************!*\
  !*** ./src/Modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHome\": () => (/* binding */ renderHome)\n/* harmony export */ });\nconst renderHome = () => {\n    const home = document.createElement('div');\n    home.classList.add('home-container');\n\n    const homeImg = document.createElement('img');\n    homeImg.src = 'images/home.jpg';\n    homeImg.classList.add('home-image');\n    home.appendChild(homeImg);\n\n    const homeTxt = document.createElement('div');\n    homeTxt.classList.add('home-text');\n    homeTxt.innerText = 'Portrada restaurant is an intimate and personable ' +\n    'experience in our top-level townhouse, where skylights permeate and ' +\n    'fill up a close-knitted space with modern touches. \\n\\n Our menu is ' +\n    'available for breakfast and lunch. There are two sessions, at 9AM ' +\n    'and 12PM. Reservations are required.';\n    home.appendChild(homeTxt);\n\n    return home;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/home.js?");

/***/ }),

/***/ "./src/Modules/menu.js":
/*!*****************************!*\
  !*** ./src/Modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenu\": () => (/* binding */ renderMenu)\n/* harmony export */ });\nconst renderMenu = () => {\n    const menu = document.createElement('div');\n    menu.classList.add('menu-container');\n\n    const menuTxt = document.createElement('dl');\n    menuTxt.classList.add('menu-text');\n    menu.appendChild(menuTxt);\n\n    menuTxt.appendChild(document.createElement('p1')).textContent = 'breakfast';\n\n    createMenu(menuTxt, 'full english', 'bacon, pork sausage, egg, grilled portobello mushrooms, hash brown, tomato');\n    createMenu(menuTxt, 'eggs benedict', 'two poached eggs, toasted english muffin, ham & hollandaise');\n    createMenu(menuTxt, 'florentine', 'two poached eggs, toasted english muffin, spinach & hollandaise');\n    createMenu(menuTxt, 'smoked haddock benedict', 'two poached eggs, toasted english muffin, haddock & hollandaise');\n    createMenu(menuTxt, 'pan-fried chalkstream trout', 'celeriac dauphinoise, picked pear dressing');\n\n    menuTxt.appendChild(document.createElement('p1')).textContent = 'lunch';\n\n    createMenu(menuTxt, 'beef wellington', 'potato puree, glazed root vegetables, red wine demi-grace');\n    createMenu(menuTxt, 'jidori chicken scallopini', 'roasted pee wee potatoes, artichokes, lacinato kale, truffle chicken jus');\n    createMenu(menuTxt, 'crispy skin salmon', 'warm white beans, seabean salad, iberico chorizo, citrus beurre blanc');\n    createMenu(menuTxt, 'filet mignon', '8 ounces santa carota beef, roasted tomatoes on the vine, bearnaise sauce');\n    createMenu(menuTxt, 'prime dry aged new york strip', '12 ounces santa carota beef, glazed maitake mushrooms, shishito peppers');\n\n    return menu;\n}\n\nconst createMenu = (menuText, item, descr) => {\n    const dataTerm = document.createElement('dt');\n    dataTerm.textContent = item;\n    menuText.appendChild(dataTerm);\n\n    const dataDescr = document.createElement('dd');\n    dataDescr.textContent = descr;\n    menuText.appendChild(dataDescr);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/menu.js?");

/***/ }),

/***/ "./src/Modules/reserve.js":
/*!********************************!*\
  !*** ./src/Modules/reserve.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderReserve\": () => (/* binding */ renderReserve)\n/* harmony export */ });\nconst renderReserve = () => {\n    const reserve = document.createElement('div');\n    reserve.classList.add('reserve-container');\n\n    const information = document.createElement('div');\n    information.classList.add('information');\n    reserve.appendChild(information);\n\n    const map = document.createElement('iframe');\n    map.id = 'map';\n    map.setAttribute(\"src\", \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.8852690969175!2d-118.38764448467724!3d34.0211558268149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b98f6b241001%3A0xa30db044c014a22e!2s8660%20Hayden%20Pl%2C%20Culver%20City%2C%20CA%2090232!5e0!3m2!1sen!2sus!4v1614399168143!5m2!1sen!2sus\");\n    information.appendChild(map);\n\n    const div = document.createElement('div');\n\n    const span = document.createElement('span');\n    span.innerText = '8660 Hayden Pl \\n Culver City, CA 90232';\n    div.appendChild(span);\n\n    div.appendChild(document.createElement('hr'));\n\n    const phone = document.createElement('div');\n    phone.textContent = '(424) 555-0199'\n    div.appendChild(phone);\n\n    div.appendChild(document.createElement('hr'));\n\n    const select = document.createElement('select');\n    select.name = 'open-hours';\n    select.id = 'open-hours';\n\n    div.appendChild(select);\n\n    createOptions(select, 'sunday', 'Sunday: Closed');\n    createOptions(select, 'monday', 'Monday: Closed');\n    createOptions(select, 'tuesday', 'Tueday: 9:00 AM - 3:00 PM');\n    createOptions(select, 'wednesday', 'Wednesday: 9:00 AM - 3:00 PM');\n    createOptions(select, 'thursday', 'Thursday: 9:00 AM - 3:00 PM');\n    createOptions(select, 'friday', 'Friday: 9:00 AM -  3:00 PM');\n    createOptions(select, 'saturday', 'Saturday: 9:00 AM - 3:00 PM');\n\n    information.appendChild(div);\n\n    const form = document.createElement('div');\n    form.classList.add('form-container');\n\n    const titleContainer = document.createElement('div');\n    titleContainer.classList.add('title-container');\n\n    const title = document.createElement('div');\n    title.classList.add('title');\n    title.textContent = 'PORTRADA';\n    titleContainer.appendChild(title);\n\n    const price = document.createElement('div');\n    price.classList.add('price');\n    price.textContent = '$225 PER GUEST';\n    titleContainer.appendChild(price);\n\n    form.appendChild(titleContainer);\n\n    const guestContainer = document.createElement('div');\n    guestContainer.classList.add('guest-container');\n\n    const guest = document.createElement('div');\n    guest.classList.add('guest');\n    guest.textContent = '1 guest'\n\n    guestContainer.appendChild(guest);\n\n    form.appendChild(guestContainer);\n\n    const buttonContainer = document.createElement('div');\n    guestContainer.appendChild(buttonContainer);\n\n    const minusBtn = document.createElement('button');\n    minusBtn.textContent = '-';\n    buttonContainer.appendChild(minusBtn);\n\n    const plusBtn = document.createElement('button');\n    plusBtn.textContent = '+';\n    buttonContainer.appendChild(plusBtn);\n\n    clickButtons(minusBtn, plusBtn, guest);\n\n    reserve.appendChild(form);\n\n    const date = document.createElement('input');\n    date.type = 'date';\n    date.id = 'date';\n    form.appendChild(date);\n\n    const time = document.createElement('input');\n    time.id = 'date'\n    time.type = 'time';\n    time.min = '09:00';\n    time.max = '15:00';\n    form.appendChild(time);\n\n    const submit = document.createElement('input');\n    submit.id = 'submit';\n    submit.type = 'submit';\n    submit.value = 'Reserve';\n    form.appendChild(submit);\n    \n    return reserve;\n}\n\nconst createOptions = (select, val, txt) => {\n    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];\n    const curDay = new Date();\n\n    const option = document.createElement('option');\n    option.value = val;\n    option.textContent = txt;\n    if (days[curDay.getDay()] === val) option.selected = true;\n\n    select.appendChild(option);\n}\n\nconst clickButtons = (minusBtn, plusBtn, guest) => {\n    let numOfGuest = 1;\n\n    document.addEventListener('click', (e) => {\n        if (e.target === minusBtn || e.target === plusBtn) {\n            if (e.target === minusBtn) {\n                if (numOfGuest === 1) return;\n                numOfGuest--;\n            }\n            if (e.target === plusBtn) {\n                if (numOfGuest === 5) return;\n                numOfGuest++;\n            }\n            if (numOfGuest === 1) guest.textContent = numOfGuest + ' guest';\n            else guest.textContent = numOfGuest + ' guests';\n        };\n    });\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/Modules/reserve.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/home */ \"./src/Modules/home.js\");\n/* harmony import */ var _Modules_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/header */ \"./src/Modules/header.js\");\n/* harmony import */ var _Modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/menu */ \"./src/Modules/menu.js\");\n/* harmony import */ var _Modules_reserve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modules/reserve */ \"./src/Modules/reserve.js\");\n\n\n\n\n\nconst content = document.querySelector('#content');\n\ncontent.appendChild((0,_Modules_header__WEBPACK_IMPORTED_MODULE_1__.renderHeader)());\ncontent.appendChild((0,_Modules_home__WEBPACK_IMPORTED_MODULE_0__.renderHome)());\n\nconst tabs = document.querySelectorAll('div.header-nav > div');\ntabs.forEach(tab => tab.addEventListener('click', (e) => {\n    while (content.childNodes[1]) content.removeChild(content.childNodes[1]);\n    if (e.target.textContent === 'HOME') return content.appendChild((0,_Modules_home__WEBPACK_IMPORTED_MODULE_0__.renderHome)());\n    if (e.target.textContent === 'MENU') return content.appendChild((0,_Modules_menu__WEBPACK_IMPORTED_MODULE_2__.renderMenu)());\n    if (e.target.textContent === 'RESERVE') return content.appendChild((0,_Modules_reserve__WEBPACK_IMPORTED_MODULE_3__.renderReserve)());\n}));\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;