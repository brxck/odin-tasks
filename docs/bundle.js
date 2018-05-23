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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n_todo__WEBPACK_IMPORTED_MODULE_0__[\"lists\"].list0.createTask({\n  name: \"Create a task\",\n  description: \"\",\n  dueDate: \"5/5/2019\",\n  priority: 5\n})\n\nconsole.log(_todo__WEBPACK_IMPORTED_MODULE_0__[\"lists\"])\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/*! exports provided: createTaskList, lists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTaskList\", function() { return createTaskList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lists\", function() { return lists; });\nconst createTaskList = ({ name, description }) => {\n  let newList = {\n    id: \"list\" + nextListId,\n    name: name,\n    description: description,\n    tasks: {},\n    nextTaskId: 0,\n\n    createTask ({ name, description, dueDate, priority }) {\n      let newTask = {\n        id: \"task\" + this.nextTaskId,\n        name: name,\n        description: description,\n        dueDate: dueDate,\n        priority: priority,\n        done: false,\n\n        toggleDone () {\n          this.done = !this.done\n        }\n      }\n      this.tasks[newTask.id] = newTask\n      this.nextTaskId += 1\n    },\n\n    deleteTask (id) {\n      delete this.tasks[id]\n    }\n  }\n  lists[newList.id] = newList\n  nextListId += 1\n}\n\nconst lists = {}\nlet nextListId = 0\n\ncreateTaskList({ name: \"Get started\", description: \"Add some tasks here, or create a new list.\" })\n\n\n\n\n//# sourceURL=webpack:///./src/todo.js?");

/***/ })

/******/ });