(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_12__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var datatables_net_bs5_css_dataTables_bootstrap5_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! datatables.net-bs5/css/dataTables.bootstrap5.min.css */ "./node_modules/datatables.net-bs5/css/dataTables.bootstrap5.min.css");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var datatables_net_bs5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net-bs5 */ "./node_modules/datatables.net-bs5/js/dataTables.bootstrap5.js");
/* harmony import */ var datatables_net_bs5__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs5__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");



/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
// You can specify which plugins you need
 // On commente cette ligne si on veut la même affichage du template (vuexy)



__webpack_require__.g.$ = __webpack_require__.g.jQuery = $;
 // start the Stimulus application


$(document).ready(function () {
  $('.sortable').DataTable({
    paging: false,
    ordering: true,
    info: false,
    searching: false
  }); // dropdown bootstrap fix

  var dropdown = false;
  $(this).on('click', '[data-bs-toggle="dropdown"]', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var idDrop = $(this).attr('id');

    if (idDrop) {
      $(this).closest('.dropdown').find('[aria-labelledby="' + idDrop + '"]').first().toggleClass('show');
    } else {
      $(this).next('.dropdown-menu').first().toggleClass('show');
    }

    dropdown = true;
  }).on('click', 'body', function () {
    $('.dropdown-menu').each(function () {
      $(this).removeClass('show');
    });
  }); // popover bootstrap fix

  $('[data-bs-toggle="popover"]').each(function () {
    var popover = new bootstrap.Popover(this, {
      container: 'body',
      trigger: 'hover'
    });
  }); // tooltip bootstrap fix

  $('[data-toggle="tooltip"]').each(function () {
    $(this).tooltip();
  });
});

__webpack_require__(/*! ./js/speedLiveVideo */ "./assets/js/speedLiveVideo.js");

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/liveFunctions.js":
/*!************************************!*\
  !*** ./assets/js/liveFunctions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");

__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// fonction pour lancer une instance liveVideo et de retourner l'id de l'appel
exports.launchLiveVideo = function (container, id) {
  var $options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var randomString = id;
  var domain = "meet.jit.si";
  var options = {
    "roomName": randomString,
    "parentNode": container
  };

  var finalOption = _objectSpread(_objectSpread({}, options), $options);

  new JitsiMeetExternalAPI(domain, finalOption);
};

exports.generateCode = function () {
  return Array.apply(null, Array(30)).map(function () {
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return possible[Math.floor(Math.random() * possible.length)];
  }).join('');
};

exports.arretJitsi = function () {
  var iframe = $('#live_video').find('iframe');

  if (iframe.length > 0) {
    iframe.remove();
  }
};

/***/ }),

/***/ "./assets/js/speedLiveVideo.js":
/*!*************************************!*\
  !*** ./assets/js/speedLiveVideo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _liveFunctions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./liveFunctions */ "./assets/js/liveFunctions.js");
/* harmony import */ var event_source_polyfill_src_eventsource_min_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! event-source-polyfill/src/eventsource.min.js */ "./node_modules/event-source-polyfill/src/eventsource.min.js");
/* harmony import */ var event_source_polyfill_src_eventsource_min_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(event_source_polyfill_src_eventsource_min_js__WEBPACK_IMPORTED_MODULE_14__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















$(function () {
  // code de l'appel video
  var code = null;
  var live_en_cours = false;
  var token_annulation_requete = new AbortController();
  var modalJoinCall = 'null';
  var hideModalJoinCall = false;
  var refuserCall = true; // appel rapide d'un appel video

  $(this).on('click', '.speed-liveVideo-call', function (e) {
    e.preventDefault();
    e.stopPropagation(); // l'utilisateur appelé

    var userB = $(this).attr('id-recepteur'); // l'utilisateur demandeur

    var userA = $(this).attr('id-envoyeur'); // suppression du live antérieur

    (0,_liveFunctions__WEBPACK_IMPORTED_MODULE_13__.arretJitsi)(); // on charge le loading

    $('.chargement-live').removeClass('d-none'); // afficher le modal

    var modal = new bootstrap__WEBPACK_IMPORTED_MODULE_11__.Modal($('#modal-live-Video-Rapide')[0], {
      keyboard: false
    });
    modal.show(); // generer le code

    code = (0,_liveFunctions__WEBPACK_IMPORTED_MODULE_13__.generateCode)(); // appel de l'interlocuteur

    var params = new URLSearchParams();
    params.append('userA', userA);
    params.append('userB', userB);
    params.append('code', code);
    params.append('signal', token_annulation_requete.signal);
    $(this).closest('.users').find('[name="users[]"]').each(function () {
      if (this.checked) {
        params.append('users[]', $(this).val());
      }
    });
    $(this).closest('.users').find('input[type="hidden"][name="users[]"]').each(function () {
      params.append('users[]', $(this).val());
    });
    axios__WEBPACK_IMPORTED_MODULE_12___default().post(Routing.generate('coach_zoom_liveRapide'), params).then(function (response) {
      live_en_cours = true; // lancé l'appel local

      (0,_liveFunctions__WEBPACK_IMPORTED_MODULE_13__.launchLiveVideo)($('#live_video')[0], code, {
        width: '100%',
        height: '100%',
        onload: function onload() {
          // on cache le loading dès que la video est chargé
          $('.chargement-live').addClass('d-none');
        }
      });
    })["catch"](function (error) {
      console.log(error);
    });
  }); // stopper le live lorsque l'on ferme le modal

  $(this).on('hide.bs.modal', '#modal-live-Video-Rapide', function () {
    (0,_liveFunctions__WEBPACK_IMPORTED_MODULE_13__.arretJitsi)();

    if (live_en_cours === false) {
      // on annule la requete de creation de live
      token_annulation_requete.abort();
    } else {
      axios__WEBPACK_IMPORTED_MODULE_12___default().get(Routing.generate('live_destruct', {
        'code': code
      }));
      live_en_cours = false;
    }

    $('.alert-absolute').html('');
  }); // rejoindre un reunion

  $(this).on('click', '.join-live', function (e) {
    e.preventDefault();
    live_en_cours = true;
    hideModalJoinCall = true;
    refuserCall = false; // on supprime le modal d'appel

    if (_typeof(modalJoinCall) == 'object') {
      modalJoinCall.hide();
    } else {
      // reduire tout les autres modals
      modalJoinCall = new bootstrap__WEBPACK_IMPORTED_MODULE_11__.Modal($('#ModalJoinCall')[0]);
      modalJoinCall.hide();
    } // afficher le modal de live video


    var modal = new bootstrap__WEBPACK_IMPORTED_MODULE_11__.Modal($('#modal-live-Video-Rapide')[0], {
      keyboard: false
    });
    modal.show(); // lancé l'appel local

    (0,_liveFunctions__WEBPACK_IMPORTED_MODULE_13__.launchLiveVideo)($('#live_video')[0], $(this).attr('id-live'), {
      width: '100%',
      height: '100%',
      onload: function onload() {
        // on cache le loading dès que la video est chargé
        $('.chargement-live').addClass('d-none');
      }
    });
  }); // refuser un call

  $(this).on('click', '.remove-live', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();

              if (_typeof(modalJoinCall) == 'object') {
                modalJoinCall.hide();
                hideModalJoinCall = true;
              }

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  $(this).on('click', '.call-rapel', /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              $(this).closest('.alert').remove();
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_12___default().post(Routing.generate('coach_zoom_rappelerAgent', {
                encodedUser: $(this).attr('data-user-id')
              }));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }()); // detecter s'il y a un appel entrant

  var elementUrl = document.getElementById("live-call-topic");

  if (elementUrl) {
    var urlDetectionAppel = JSON.parse(elementUrl.textContent);
    var eventDetectionAppelSource = new event_source_polyfill_src_eventsource_min_js__WEBPACK_IMPORTED_MODULE_14__.EventSourcePolyfill(urlDetectionAppel, {
      header: {
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.c6_7faKRwz4VbZwLt7a1ivjCIi1U6jxNhQ3dPYYY7Ec'
      },
      withCredentials: true
    });

    eventDetectionAppelSource.onmessage = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(event) {
        var data, response;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                data = JSON.parse(event.data); // puis on récupère toute les appels entrants

                _context3.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_12___default().get(Routing.generate('agent_zoom_rejoindreReunion', {
                  code: data.code
                }));

              case 3:
                response = _context3.sent;

                if (_typeof(response.data) != 'object' && live_en_cours === false) {
                  // afficher le modal
                  if ($('#ModalJoinCall').length > 0) {
                    $('#ModalJoinCall').replaceWith(response.data);
                  } else {
                    $('body').append(response.data);
                  }

                  if (_typeof(modalJoinCall) != 'object') {
                    modalJoinCall = new bootstrap__WEBPACK_IMPORTED_MODULE_11__.Modal($('#ModalJoinCall')[0], {
                      keyboard: false
                    });
                    modalJoinCall.show();
                  } else {
                    modalJoinCall.hide();
                    modalJoinCall = new bootstrap__WEBPACK_IMPORTED_MODULE_11__.Modal($('#ModalJoinCall')[0], {
                      keyboard: false
                    });
                    modalJoinCall.show();
                  }
                } else if (_typeof(modalJoinCall) == 'object') {
                  modalJoinCall.hide();
                  modalJoinCall = '';
                }

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }();
  } // detecter un refus d'un live


  var elementUrlRefus = document.getElementById("live-refus-topic");

  if (elementUrlRefus) {
    var urlRefus = JSON.parse(elementUrlRefus.textContent);
    var evenRefusSource = new event_source_polyfill_src_eventsource_min_js__WEBPACK_IMPORTED_MODULE_14__.EventSourcePolyfill(urlRefus, {
      header: {
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.c6_7faKRwz4VbZwLt7a1ivjCIi1U6jxNhQ3dPYYY7Ec'
      },
      withCredentials: true
    });

    evenRefusSource.onmessage = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(event) {
        var data, alertRefu, alertRefuClone, id;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                data = JSON.parse(event.data);
                alertRefu = $('#model-alert');
                alertRefuClone = alertRefu.clone();
                id = 'data-' + data.user.id;
                alertRefuClone.attr('id', id);
                alertRefuClone.removeClass('d-none').addClass(' mb-1');
                alertRefuClone.find('.nom-participant').html(data.user.nom + ' ' + data.user.prenom);
                $('#modal-live-Video-Rapide').find('.alert-absolute').append(alertRefuClone);
                $('[id="' + id + '"]').addClass('show');
                $('[id="' + id + '"]').find('.call-rapel').attr('data-user-id', data.user.id);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }();
  }

  $(this).on('hide.bs.modal', '#ModalJoinCall', /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (refuserCall) {
                $('.remove-live').each( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return axios__WEBPACK_IMPORTED_MODULE_12___default().get(Routing.generate('agent_zoom_refuserReunion', {
                            code: $(this).attr('id-live')
                          }));

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5, this);
                })));
              }

              if (!hideModalJoinCall) {
                $(this).remove();
              }

            case 2:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }());
  $(this).on('show.bs.modal', '#ModalJoinCall', /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              refuserCall = true;

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function (_x6) {
      return _ref7.apply(this, arguments);
    };
  }());
});

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-464164","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_internals_dom-to-831329","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_web_d-930e15","vendors-node_modules_core-js_modules_es_promise_js","vendors-node_modules_regenerator-runtime_runtime_js","vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_find_js","vendors-node_modules_core-js_modules_web_url-search-params_js","vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_core-js_modules_es_array-690d99","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_objec-9f8e31","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_internals_fun-750b51"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7QUFBQTtBQUFBO0FBQUE7QUFDekMsa0JBQUdxRCxXQUFILEVBQWdCO0FBQ1poRSxnQkFBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQnFCLElBQWxCLHVFQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FDYm1DLGlEQUFBLENBQVVxQixPQUFPLENBQUNDLFFBQVIsQ0FBaUIsMkJBQWpCLEVBQThDO0FBQUNwQiw0QkFBQUEsSUFBSSxFQUFHMUQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZSxJQUFSLENBQWEsU0FBYjtBQUFSLDJCQUE5QyxDQUFWLENBRGE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXZCO0FBR0g7O0FBRUQsa0JBQUcsQ0FBQ2dELGlCQUFKLEVBQXVCO0FBQ25CL0QsZ0JBQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXNELE1BQVI7QUFDSDs7QUFUd0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBN0M7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQXRELEVBQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVUsRUFBUixDQUFXLGVBQVgsRUFBMkIsZ0JBQTNCO0FBQUEsd0VBQTZDLGtCQUFlQyxDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDekNxRCxjQUFBQSxXQUFXLEdBQUcsSUFBZDs7QUFEeUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBN0M7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJSCxDQWxOQSxDQUFEOzs7Ozs7Ozs7Ozs7QUNKQSIsInNvdXJjZXMiOlsid2VicGFjazovLy98L1xcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xpdmVGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NwZWVkTGl2ZVZpZGVvLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcclxuXHJcbi8qXHJcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxyXG4gKlxyXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxyXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcclxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcclxuICpcclxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgY29ubmVjdCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuLy8gWW91IGNhbiBzcGVjaWZ5IHdoaWNoIHBsdWdpbnMgeW91IG5lZWRcclxuXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnOyAvLyBPbiBjb21tZW50ZSBjZXR0ZSBsaWduZSBzaSBvbiB2ZXV0IGxhIG3Dqm1lIGFmZmljaGFnZSBkdSB0ZW1wbGF0ZSAodnVleHkpXHJcbmltcG9ydCAnZGF0YXRhYmxlcy5uZXQtYnM1L2Nzcy9kYXRhVGFibGVzLmJvb3RzdHJhcDUubWluLmNzcydcclxuaW1wb3J0IGpxdWVyeSBmcm9tICdqcXVlcnknO1xyXG5nbG9iYWwuJCA9IGdsb2JhbC5qUXVlcnkgPSAkO1xyXG5pbXBvcnQgJ2RhdGF0YWJsZXMubmV0LWJzNSc7XHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuc29ydGFibGUnKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIHBhZ2luZzogZmFsc2UsXHJcbiAgICAgICAgb3JkZXJpbmc6IHRydWUsXHJcbiAgICAgICAgaW5mbzogZmFsc2UsXHJcbiAgICAgICAgc2VhcmNoaW5nIDogZmFsc2VcclxuICAgIH0pO1xyXG4gICAgLy8gZHJvcGRvd24gYm9vdHN0cmFwIGZpeFxyXG4gICAgbGV0IGRyb3Bkb3duID0gZmFsc2U7XHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsICdbZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiXScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBjb25zdCBpZERyb3AgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgaWYoaWREcm9wKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLmRyb3Bkb3duJykuZmluZCgnW2FyaWEtbGFiZWxsZWRieT1cIicraWREcm9wKydcIl0nKS5maXJzdCgpLnRvZ2dsZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCcuZHJvcGRvd24tbWVudScpLmZpcnN0KCkudG9nZ2xlQ2xhc3MoJ3Nob3cnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZHJvcGRvd24gPSB0cnVlO1xyXG4gICAgfSkub24oJ2NsaWNrJywgJ2JvZHknLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuZHJvcGRvd24tbWVudScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcG9wb3ZlciBib290c3RyYXAgZml4XHJcbiAgICAkKCdbZGF0YS1icy10b2dnbGU9XCJwb3BvdmVyXCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgcG9wb3ZlciA9IG5ldyBib290c3RyYXAuUG9wb3Zlcih0aGlzLCB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxyXG4gICAgICAgICAgICB0cmlnZ2VyOiAnaG92ZXInXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgLy8gdG9vbHRpcCBib290c3RyYXAgZml4XHJcbiAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLnRvb2x0aXAoKVxyXG4gICAgfSlcclxuXHJcblxyXG59KTtcclxuXHJcbnJlcXVpcmUoJy4vanMvc3BlZWRMaXZlVmlkZW8nKTtcclxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLltqdF1zeD8kL1xyXG4pKTtcclxuXHJcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXHJcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcclxuIiwiLy8gZm9uY3Rpb24gcG91ciBsYW5jZXIgdW5lIGluc3RhbmNlIGxpdmVWaWRlbyBldCBkZSByZXRvdXJuZXIgbCdpZCBkZSBsJ2FwcGVsXHJcbmV4cG9ydHMubGF1bmNoTGl2ZVZpZGVvID0gZnVuY3Rpb24oY29udGFpbmVyLCBpZCwgJG9wdGlvbnMgPSB7fSlcclxue1xyXG4gICAgbGV0IHJhbmRvbVN0cmluZyA9IGlkO1xyXG4gICAgbGV0IGRvbWFpbiA9IFwibWVldC5qaXQuc2lcIjtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIFwicm9vbU5hbWVcIjogcmFuZG9tU3RyaW5nLFxyXG4gICAgICAgIFwicGFyZW50Tm9kZVwiOiBjb250YWluZXJcclxuICAgIH07XHJcbiAgICBsZXQgZmluYWxPcHRpb24gPSB7XHJcbiAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICAuLi4kb3B0aW9uc1xyXG4gICAgfVxyXG4gICAgbmV3IEppdHNpTWVldEV4dGVybmFsQVBJKGRvbWFpbiwgZmluYWxPcHRpb24pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0cy5nZW5lcmF0ZUNvZGUgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBBcnJheS5hcHBseShudWxsLCBBcnJheSgzMCkpLm1hcChmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgcG9zc2libGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODknO1xyXG4gICAgICAgIHJldHVybiBwb3NzaWJsZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZS5sZW5ndGgpXTtcclxuICAgIH0pLmpvaW4oJycpO1xyXG59XHJcblxyXG5leHBvcnRzLmFycmV0Sml0c2kgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGxldCBpZnJhbWUgPSAkKCcjbGl2ZV92aWRlbycpLmZpbmQoJ2lmcmFtZScpXHJcbiAgICBpZihpZnJhbWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGlmcmFtZS5yZW1vdmUoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IE1vZGFsIH0gZnJvbSAnYm9vdHN0cmFwJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtsYXVuY2hMaXZlVmlkZW8sYXJyZXRKaXRzaSxnZW5lcmF0ZUNvZGV9IGZyb20gJy4vbGl2ZUZ1bmN0aW9ucydcclxuaW1wb3J0IHsgRXZlbnRTb3VyY2VQb2x5ZmlsbCB9IGZyb20gJ2V2ZW50LXNvdXJjZS1wb2x5ZmlsbC9zcmMvZXZlbnRzb3VyY2UubWluLmpzJztcclxuJChmdW5jdGlvbigpIHtcclxuICAgIC8vIGNvZGUgZGUgbCdhcHBlbCB2aWRlb1xyXG4gICAgbGV0IGNvZGUgPSBudWxsO1xyXG4gICAgbGV0IGxpdmVfZW5fY291cnMgPSBmYWxzZTtcclxuICAgIGxldCB0b2tlbl9hbm51bGF0aW9uX3JlcXVldGUgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICBsZXQgbW9kYWxKb2luQ2FsbCA9ICdudWxsJztcclxuICAgIGxldCBoaWRlTW9kYWxKb2luQ2FsbCA9IGZhbHNlO1xyXG4gICAgbGV0IHJlZnVzZXJDYWxsID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBhcHBlbCByYXBpZGUgZCd1biBhcHBlbCB2aWRlb1xyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCAnLnNwZWVkLWxpdmVWaWRlby1jYWxsJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIC8vIGwndXRpbGlzYXRldXIgYXBwZWzDqVxyXG4gICAgICAgIGNvbnN0IHVzZXJCID0gJCh0aGlzKS5hdHRyKCdpZC1yZWNlcHRldXInKTtcclxuICAgICAgICAvLyBsJ3V0aWxpc2F0ZXVyIGRlbWFuZGV1clxyXG4gICAgICAgIGNvbnN0IHVzZXJBID0gJCh0aGlzKS5hdHRyKCdpZC1lbnZveWV1cicpO1xyXG5cclxuICAgICAgICAvLyBzdXBwcmVzc2lvbiBkdSBsaXZlIGFudMOpcmlldXJcclxuICAgICAgIGFycmV0Sml0c2koKTtcclxuXHJcbiAgICAgICAgLy8gb24gY2hhcmdlIGxlIGxvYWRpbmdcclxuICAgICAgICAkKCcuY2hhcmdlbWVudC1saXZlJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG5cclxuICAgICAgICAvLyBhZmZpY2hlciBsZSBtb2RhbFxyXG4gICAgICAgIGxldCBtb2RhbCA9IG5ldyBNb2RhbCgkKCcjbW9kYWwtbGl2ZS1WaWRlby1SYXBpZGUnKVswXSwgeyBrZXlib2FyZDogZmFsc2UgfSk7XHJcbiAgICAgICAgbW9kYWwuc2hvdygpO1xyXG5cclxuICAgICAgICAvLyBnZW5lcmVyIGxlIGNvZGVcclxuICAgICAgICBjb2RlID0gZ2VuZXJhdGVDb2RlKCk7XHJcblxyXG4gICAgICAgIC8vIGFwcGVsIGRlIGwnaW50ZXJsb2N1dGV1clxyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICAgICAgICBwYXJhbXMuYXBwZW5kKCd1c2VyQScsIHVzZXJBKTtcclxuICAgICAgICBwYXJhbXMuYXBwZW5kKCd1c2VyQicsIHVzZXJCKTtcclxuICAgICAgICBwYXJhbXMuYXBwZW5kKCdjb2RlJywgY29kZSk7XHJcbiAgICAgICAgcGFyYW1zLmFwcGVuZCgnc2lnbmFsJywgdG9rZW5fYW5udWxhdGlvbl9yZXF1ZXRlLnNpZ25hbCk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcudXNlcnMnKS5maW5kKCdbbmFtZT1cInVzZXJzW11cIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZih0aGlzLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgcGFyYW1zLmFwcGVuZCgndXNlcnNbXScsICQodGhpcykudmFsKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcudXNlcnMnKS5maW5kKCdpbnB1dFt0eXBlPVwiaGlkZGVuXCJdW25hbWU9XCJ1c2Vyc1tdXCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcGFyYW1zLmFwcGVuZCgndXNlcnNbXScsICQodGhpcykudmFsKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF4aW9zLnBvc3QoUm91dGluZy5nZW5lcmF0ZSgnY29hY2hfem9vbV9saXZlUmFwaWRlJyksIHBhcmFtcylcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgbGl2ZV9lbl9jb3VycyA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIGxhbmPDqSBsJ2FwcGVsIGxvY2FsXHJcbiAgICAgICAgICAgIGxhdW5jaExpdmVWaWRlbygkKCcjbGl2ZV92aWRlbycpWzBdLCBjb2RlLHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOicxMDAlJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDonMTAwJScsXHJcbiAgICAgICAgICAgICAgICBvbmxvYWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9uIGNhY2hlIGxlIGxvYWRpbmcgZMOocyBxdWUgbGEgdmlkZW8gZXN0IGNoYXJnw6lcclxuICAgICAgICAgICAgICAgICAgICAkKCcuY2hhcmdlbWVudC1saXZlJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHN0b3BwZXIgbGUgbGl2ZSBsb3JzcXVlIGwnb24gZmVybWUgbGUgbW9kYWxcclxuICAgICQodGhpcykub24oJ2hpZGUuYnMubW9kYWwnLCcjbW9kYWwtbGl2ZS1WaWRlby1SYXBpZGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYXJyZXRKaXRzaSgpO1xyXG4gICAgICAgIGlmKGxpdmVfZW5fY291cnMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIC8vIG9uIGFubnVsZSBsYSByZXF1ZXRlIGRlIGNyZWF0aW9uIGRlIGxpdmVcclxuICAgICAgICAgICAgdG9rZW5fYW5udWxhdGlvbl9yZXF1ZXRlLmFib3J0KClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoUm91dGluZy5nZW5lcmF0ZSgnbGl2ZV9kZXN0cnVjdCcsIHtcclxuICAgICAgICAgICAgICAgICdjb2RlJyA6ICBjb2RlXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICBsaXZlX2VuX2NvdXJzID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcuYWxlcnQtYWJzb2x1dGUnKS5odG1sKCcnKVxyXG5cclxuICAgIH0pXHJcblxyXG4gICAgLy8gcmVqb2luZHJlIHVuIHJldW5pb25cclxuICAgICQodGhpcykub24oJ2NsaWNrJywnLmpvaW4tbGl2ZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGl2ZV9lbl9jb3VycyA9IHRydWU7XHJcbiAgICAgICAgaGlkZU1vZGFsSm9pbkNhbGwgPSB0cnVlO1xyXG4gICAgICAgIHJlZnVzZXJDYWxsID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIG9uIHN1cHByaW1lIGxlIG1vZGFsIGQnYXBwZWxcclxuICAgICAgICBpZih0eXBlb2YgbW9kYWxKb2luQ2FsbCA9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBtb2RhbEpvaW5DYWxsLmhpZGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyByZWR1aXJlIHRvdXQgbGVzIGF1dHJlcyBtb2RhbHNcclxuICAgICAgICAgICAgbW9kYWxKb2luQ2FsbCA9IG5ldyBNb2RhbCgkKCcjTW9kYWxKb2luQ2FsbCcpWzBdKTtcclxuICAgICAgICAgICAgbW9kYWxKb2luQ2FsbC5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhZmZpY2hlciBsZSBtb2RhbCBkZSBsaXZlIHZpZGVvXHJcbiAgICAgICAgbGV0IG1vZGFsID0gbmV3IE1vZGFsKCQoJyNtb2RhbC1saXZlLVZpZGVvLVJhcGlkZScpWzBdLCB7IGtleWJvYXJkOiBmYWxzZSB9KTtcclxuICAgICAgICBtb2RhbC5zaG93KCk7XHJcblxyXG4gICAgICAgIC8vIGxhbmPDqSBsJ2FwcGVsIGxvY2FsXHJcbiAgICAgICAgbGF1bmNoTGl2ZVZpZGVvKCQoJyNsaXZlX3ZpZGVvJylbMF0sICQodGhpcykuYXR0cignaWQtbGl2ZScpLHtcclxuICAgICAgICAgICAgd2lkdGg6JzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6JzEwMCUnLFxyXG4gICAgICAgICAgICBvbmxvYWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gb24gY2FjaGUgbGUgbG9hZGluZyBkw6hzIHF1ZSBsYSB2aWRlbyBlc3QgY2hhcmfDqVxyXG4gICAgICAgICAgICAgICAgJCgnLmNoYXJnZW1lbnQtbGl2ZScpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcmVmdXNlciB1biBjYWxsXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsICcucmVtb3ZlLWxpdmUnLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKHR5cGVvZiBtb2RhbEpvaW5DYWxsID09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIG1vZGFsSm9pbkNhbGwuaGlkZSgpO1xyXG4gICAgICAgICAgICBoaWRlTW9kYWxKb2luQ2FsbCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCcuY2FsbC1yYXBlbCcsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuYWxlcnQnKS5yZW1vdmUoKTtcclxuICAgICAgICBhd2FpdCBheGlvcy5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ2NvYWNoX3pvb21fcmFwcGVsZXJBZ2VudCcsIHtlbmNvZGVkVXNlcjokKHRoaXMpLmF0dHIoJ2RhdGEtdXNlci1pZCcpfSkpXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBkZXRlY3RlciBzJ2lsIHkgYSB1biBhcHBlbCBlbnRyYW50XHJcbiAgICBjb25zdCBlbGVtZW50VXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXZlLWNhbGwtdG9waWNcIik7XHJcbiAgICBpZihlbGVtZW50VXJsKSB7XHJcbiAgICAgICAgY29uc3QgdXJsRGV0ZWN0aW9uQXBwZWwgPSBKU09OLnBhcnNlKGVsZW1lbnRVcmwudGV4dENvbnRlbnQpO1xyXG4gICAgICAgIGNvbnN0IGV2ZW50RGV0ZWN0aW9uQXBwZWxTb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2VQb2x5ZmlsbCh1cmxEZXRlY3Rpb25BcHBlbCwge1xyXG4gICAgICAgICAgICBoZWFkZXIgOiB7XHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArICdleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKdFpYSmpkWEpsSWpwN0luQjFZbXhwYzJnaU9sc2lLaUpkZlgwLmM2XzdmYUtSd3o0VmJad0x0N2ExaXZqQ0lpMVU2anhOaFEzZFBZWVk3RWMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGV2ZW50RGV0ZWN0aW9uQXBwZWxTb3VyY2Uub25tZXNzYWdlID0gYXN5bmMgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcclxuICAgICAgICAgICAgLy8gcHVpcyBvbiByw6ljdXDDqHJlIHRvdXRlIGxlcyBhcHBlbHMgZW50cmFudHNcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoUm91dGluZy5nZW5lcmF0ZSgnYWdlbnRfem9vbV9yZWpvaW5kcmVSZXVuaW9uJywge2NvZGU6IGRhdGEuY29kZX0pKVxyXG4gICAgICAgICAgICBpZih0eXBlb2YgcmVzcG9uc2UuZGF0YSAhPSAnb2JqZWN0JyAgJiYgbGl2ZV9lbl9jb3VycyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIGFmZmljaGVyIGxlIG1vZGFsXHJcbiAgICAgICAgICAgICAgICBpZigkKCcjTW9kYWxKb2luQ2FsbCcpLmxlbmd0aD4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI01vZGFsSm9pbkNhbGwnKS5yZXBsYWNlV2l0aChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLmFwcGVuZChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBtb2RhbEpvaW5DYWxsICE9ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxKb2luQ2FsbCA9IG5ldyBNb2RhbCgkKCcjTW9kYWxKb2luQ2FsbCcpWzBdLCB7IGtleWJvYXJkOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsSm9pbkNhbGwuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEpvaW5DYWxsLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEpvaW5DYWxsID0gbmV3IE1vZGFsKCQoJyNNb2RhbEpvaW5DYWxsJylbMF0sIHsga2V5Ym9hcmQ6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxKb2luQ2FsbC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZih0eXBlb2YgbW9kYWxKb2luQ2FsbCA9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgbW9kYWxKb2luQ2FsbC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBtb2RhbEpvaW5DYWxsID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGRldGVjdGVyIHVuIHJlZnVzIGQndW4gbGl2ZVxyXG4gICAgY29uc3QgZWxlbWVudFVybFJlZnVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXZlLXJlZnVzLXRvcGljXCIpO1xyXG4gICAgaWYoZWxlbWVudFVybFJlZnVzKSB7XHJcbiAgICAgICAgY29uc3QgdXJsUmVmdXMgPSBKU09OLnBhcnNlKGVsZW1lbnRVcmxSZWZ1cy50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgY29uc3QgZXZlblJlZnVzU291cmNlID0gbmV3IEV2ZW50U291cmNlUG9seWZpbGwodXJsUmVmdXMsIHtcclxuICAgICAgICAgICAgaGVhZGVyIDoge1xyXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyAnZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnRaWEpqZFhKbElqcDdJbkIxWW14cGMyZ2lPbHNpS2lKZGZYMC5jNl83ZmFLUnd6NFZiWndMdDdhMWl2akNJaTFVNmp4TmhRM2RQWVlZN0VjJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBldmVuUmVmdXNTb3VyY2Uub25tZXNzYWdlID0gYXN5bmMgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgYWxlcnRSZWZ1ID0gJCgnI21vZGVsLWFsZXJ0Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0UmVmdUNsb25lID0gYWxlcnRSZWZ1LmNsb25lKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gJ2RhdGEtJytkYXRhLnVzZXIuaWQ7XHJcbiAgICAgICAgICAgIGFsZXJ0UmVmdUNsb25lLmF0dHIoJ2lkJyxpZCk7XHJcbiAgICAgICAgICAgIGFsZXJ0UmVmdUNsb25lLnJlbW92ZUNsYXNzKCdkLW5vbmUnKS5hZGRDbGFzcygnIG1iLTEnKTtcclxuICAgICAgICAgICAgYWxlcnRSZWZ1Q2xvbmUuZmluZCgnLm5vbS1wYXJ0aWNpcGFudCcpLmh0bWwoZGF0YS51c2VyLm5vbSsnICcrZGF0YS51c2VyLnByZW5vbSk7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbC1saXZlLVZpZGVvLVJhcGlkZScpLmZpbmQoJy5hbGVydC1hYnNvbHV0ZScpLmFwcGVuZChhbGVydFJlZnVDbG9uZSk7XHJcbiAgICAgICAgICAgICQoJ1tpZD1cIicraWQrJ1wiXScpLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICQoJ1tpZD1cIicraWQrJ1wiXScpLmZpbmQoJy5jYWxsLXJhcGVsJykuYXR0cignZGF0YS11c2VyLWlkJywgZGF0YS51c2VyLmlkKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAkKHRoaXMpLm9uKCdoaWRlLmJzLm1vZGFsJywnI01vZGFsSm9pbkNhbGwnLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYocmVmdXNlckNhbGwpIHtcclxuICAgICAgICAgICAgJCgnLnJlbW92ZS1saXZlJykuZWFjaChhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBheGlvcy5nZXQoUm91dGluZy5nZW5lcmF0ZSgnYWdlbnRfem9vbV9yZWZ1c2VyUmV1bmlvbicsIHtjb2RlIDogJCh0aGlzKS5hdHRyKCdpZC1saXZlJyl9KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIWhpZGVNb2RhbEpvaW5DYWxsKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCh0aGlzKS5vbignc2hvdy5icy5tb2RhbCcsJyNNb2RhbEpvaW5DYWxsJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHJlZnVzZXJDYWxsID0gdHJ1ZTtcclxuICAgIH0pXHJcblxyXG59KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJqcXVlcnkiLCJnbG9iYWwiLCIkIiwialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIkRhdGFUYWJsZSIsInBhZ2luZyIsIm9yZGVyaW5nIiwiaW5mbyIsInNlYXJjaGluZyIsImRyb3Bkb3duIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJpZERyb3AiLCJhdHRyIiwiY2xvc2VzdCIsImZpbmQiLCJmaXJzdCIsInRvZ2dsZUNsYXNzIiwibmV4dCIsImVhY2giLCJyZW1vdmVDbGFzcyIsInBvcG92ZXIiLCJib290c3RyYXAiLCJQb3BvdmVyIiwiY29udGFpbmVyIiwidHJpZ2dlciIsInRvb2x0aXAiLCJyZXF1aXJlIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsImNvbnRleHQiLCJleHBvcnRzIiwibGF1bmNoTGl2ZVZpZGVvIiwiaWQiLCIkb3B0aW9ucyIsInJhbmRvbVN0cmluZyIsImRvbWFpbiIsIm9wdGlvbnMiLCJmaW5hbE9wdGlvbiIsIkppdHNpTWVldEV4dGVybmFsQVBJIiwiZ2VuZXJhdGVDb2RlIiwiQXJyYXkiLCJhcHBseSIsIm1hcCIsInBvc3NpYmxlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiam9pbiIsImFycmV0Sml0c2kiLCJpZnJhbWUiLCJyZW1vdmUiLCJNb2RhbCIsImF4aW9zIiwiRXZlbnRTb3VyY2VQb2x5ZmlsbCIsImNvZGUiLCJsaXZlX2VuX2NvdXJzIiwidG9rZW5fYW5udWxhdGlvbl9yZXF1ZXRlIiwiQWJvcnRDb250cm9sbGVyIiwibW9kYWxKb2luQ2FsbCIsImhpZGVNb2RhbEpvaW5DYWxsIiwicmVmdXNlckNhbGwiLCJ1c2VyQiIsInVzZXJBIiwibW9kYWwiLCJrZXlib2FyZCIsInNob3ciLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJzaWduYWwiLCJjaGVja2VkIiwidmFsIiwicG9zdCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInRoZW4iLCJyZXNwb25zZSIsIndpZHRoIiwiaGVpZ2h0Iiwib25sb2FkIiwiYWRkQ2xhc3MiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJhYm9ydCIsImdldCIsImh0bWwiLCJoaWRlIiwiZW5jb2RlZFVzZXIiLCJlbGVtZW50VXJsIiwiZ2V0RWxlbWVudEJ5SWQiLCJ1cmxEZXRlY3Rpb25BcHBlbCIsIkpTT04iLCJwYXJzZSIsImV2ZW50RGV0ZWN0aW9uQXBwZWxTb3VyY2UiLCJoZWFkZXIiLCJ3aXRoQ3JlZGVudGlhbHMiLCJvbm1lc3NhZ2UiLCJldmVudCIsImRhdGEiLCJyZXBsYWNlV2l0aCIsImVsZW1lbnRVcmxSZWZ1cyIsInVybFJlZnVzIiwiZXZlblJlZnVzU291cmNlIiwiYWxlcnRSZWZ1IiwiYWxlcnRSZWZ1Q2xvbmUiLCJjbG9uZSIsInVzZXIiLCJub20iLCJwcmVub20iXSwic291cmNlUm9vdCI6IiJ9