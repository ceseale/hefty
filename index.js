/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _linkedlist = __webpack_require__(1);

	var _linkedlist2 = _interopRequireDefault(_linkedlist);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var hefty = {
	  LinkedList: _linkedlist2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LinkedList = exports.LinkedList = (function () {
	  function LinkedList() {
	    _classCallCheck(this, LinkedList);

	    this.head = null;
	    this.tail = null;
	  }

	  _createClass(LinkedList, [{
	    key: "add",
	    value: function add() {}
	  }, {
	    key: "remove",
	    value: function remove() {}
	  }, {
	    key: "getHead",
	    value: function getHead() {}
	  }, {
	    key: "getTail",
	    value: function getTail() {}
	  }, {
	    key: "reverse",
	    value: function reverse() {}
	  }, {
	    key: "removeHead",
	    value: function removeHead() {}
	  }, {
	    key: "removeTail",
	    value: function removeTail() {}
	  }, {
	    key: "removeDuplicates",
	    value: function removeDuplicates() {}
	  }, {
	    key: "clear",
	    value: function clear() {}
	  }, {
	    key: "filter",
	    value: function filter() {}
	  }, {
	    key: "some",
	    value: function some() {}
	  }, {
	    key: "map",
	    value: function map() {}
	  }, {
	    key: "reduce",
	    value: function reduce() {}
	  }, {
	    key: "forEach",
	    value: function forEach() {}
	  }, {
	    key: "every",
	    value: function every() {}
	  }, {
	    key: "equals",
	    value: function equals() {}
	  }, {
	    key: "size",
	    value: function size() {}
	  }, {
	    key: "toArray",
	    value: function toArray() {}
	  }, {
	    key: "contains",
	    value: function contains() {}
	  }]);

	  return LinkedList;
	})();

	var Node = function Node(val) {
	  return { val: val, next: null };
	};

/***/ }
/******/ ]);