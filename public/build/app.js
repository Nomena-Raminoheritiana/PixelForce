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
/* harmony import */ var event_source_polyfill__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! event-source-polyfill */ "./node_modules/event-source-polyfill/src/eventsource.js");
/* harmony import */ var event_source_polyfill__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(event_source_polyfill__WEBPACK_IMPORTED_MODULE_14__);
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
    var eventDetectionAppelSource = new event_source_polyfill__WEBPACK_IMPORTED_MODULE_14__.EventSourcePolyfill(urlDetectionAppel, {
      headers: {
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.c6_7faKRwz4VbZwLt7a1ivjCIi1U6jxNhQ3dPYYY7Ec'
      }
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
    var evenRefusSource = new event_source_polyfill__WEBPACK_IMPORTED_MODULE_14__.EventSourcePolyfill(urlRefus, {
      headers: {
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.c6_7faKRwz4VbZwLt7a1ivjCIi1U6jxNhQ3dPYYY7Ec'
      }
    });
    ;

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-464164","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_internals_dom-to-831329","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_web_d-930e15","vendors-node_modules_core-js_modules_es_promise_js","vendors-node_modules_regenerator-runtime_runtime_js","vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_find_js","vendors-node_modules_core-js_modules_web_url-search-params_js","vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_core-js_modules_es_array-690d99","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_internals_str-a006b6"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JxQixJQUFsQix1RUFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQ2JtQyxpREFBQSxDQUFVcUIsT0FBTyxDQUFDQyxRQUFSLENBQWlCLDJCQUFqQixFQUE4QztBQUFDcEIsNEJBQUFBLElBQUksRUFBRzFELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWUsSUFBUixDQUFhLFNBQWI7QUFBUiwyQkFBOUMsQ0FBVixDQURhOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUF2QjtBQUdIOztBQUVELGtCQUFHLENBQUNnRCxpQkFBSixFQUF1QjtBQUNuQi9ELGdCQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFzRCxNQUFSO0FBQ0g7O0FBVHdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTdDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUF0RCxFQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFVLEVBQVIsQ0FBVyxlQUFYLEVBQTJCLGdCQUEzQjtBQUFBLHdFQUE2QyxrQkFBZUMsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3pDcUQsY0FBQUEsV0FBVyxHQUFHLElBQWQ7O0FBRHlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTdDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUgsQ0E5TUEsQ0FBRDs7Ozs7Ozs7Ozs7O0FDSkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9saXZlRnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zcGVlZExpdmVWaWRlby5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG4vKlxyXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcclxuICpcclxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcclxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XHJcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXHJcbiAqXHJcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbi8vIFlvdSBjYW4gc3BlY2lmeSB3aGljaCBwbHVnaW5zIHlvdSBuZWVkXHJcblxyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJzsgLy8gT24gY29tbWVudGUgY2V0dGUgbGlnbmUgc2kgb24gdmV1dCBsYSBtw6ptZSBhZmZpY2hhZ2UgZHUgdGVtcGxhdGUgKHZ1ZXh5KVxyXG5pbXBvcnQgJ2RhdGF0YWJsZXMubmV0LWJzNS9jc3MvZGF0YVRhYmxlcy5ib290c3RyYXA1Lm1pbi5jc3MnXHJcbmltcG9ydCBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuZ2xvYmFsLiQgPSBnbG9iYWwualF1ZXJ5ID0gJDtcclxuaW1wb3J0ICdkYXRhdGFibGVzLm5ldC1iczUnO1xyXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLnNvcnRhYmxlJykuRGF0YVRhYmxlKHtcclxuICAgICAgICBwYWdpbmc6IGZhbHNlLFxyXG4gICAgICAgIG9yZGVyaW5nOiB0cnVlLFxyXG4gICAgICAgIGluZm86IGZhbHNlLFxyXG4gICAgICAgIHNlYXJjaGluZyA6IGZhbHNlXHJcbiAgICB9KTtcclxuICAgIC8vIGRyb3Bkb3duIGJvb3RzdHJhcCBmaXhcclxuICAgIGxldCBkcm9wZG93biA9IGZhbHNlO1xyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCAnW2RhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIl0nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgaWREcm9wID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgIGlmKGlkRHJvcCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5kcm9wZG93bicpLmZpbmQoJ1thcmlhLWxhYmVsbGVkYnk9XCInK2lkRHJvcCsnXCJdJykuZmlyc3QoKS50b2dnbGVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcykubmV4dCgnLmRyb3Bkb3duLW1lbnUnKS5maXJzdCgpLnRvZ2dsZUNsYXNzKCdzaG93JylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRyb3Bkb3duID0gdHJ1ZTtcclxuICAgIH0pLm9uKCdjbGljaycsICdib2R5JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLmRyb3Bkb3duLW1lbnUnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHBvcG92ZXIgYm9vdHN0cmFwIGZpeFxyXG4gICAgJCgnW2RhdGEtYnMtdG9nZ2xlPVwicG9wb3ZlclwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHBvcG92ZXIgPSBuZXcgYm9vdHN0cmFwLlBvcG92ZXIodGhpcywge1xyXG4gICAgICAgICAgICBjb250YWluZXI6ICdib2R5JyxcclxuICAgICAgICAgICAgdHJpZ2dlcjogJ2hvdmVyJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIHRvb2x0aXAgYm9vdHN0cmFwIGZpeFxyXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS50b29sdGlwKClcclxuICAgIH0pXHJcblxyXG5cclxufSk7XHJcblxyXG5yZXF1aXJlKCcuL2pzL3NwZWVkTGl2ZVZpZGVvJyk7XHJcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xyXG5cclxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcclxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxyXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxyXG4gICAgdHJ1ZSxcclxuICAgIC9cXC5banRdc3g/JC9cclxuKSk7XHJcblxyXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxyXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XHJcbiIsIi8vIGZvbmN0aW9uIHBvdXIgbGFuY2VyIHVuZSBpbnN0YW5jZSBsaXZlVmlkZW8gZXQgZGUgcmV0b3VybmVyIGwnaWQgZGUgbCdhcHBlbFxyXG5leHBvcnRzLmxhdW5jaExpdmVWaWRlbyA9IGZ1bmN0aW9uKGNvbnRhaW5lciwgaWQsICRvcHRpb25zID0ge30pXHJcbntcclxuICAgIGxldCByYW5kb21TdHJpbmcgPSBpZDtcclxuICAgIGxldCBkb21haW4gPSBcIm1lZXQuaml0LnNpXCI7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICBcInJvb21OYW1lXCI6IHJhbmRvbVN0cmluZyxcclxuICAgICAgICBcInBhcmVudE5vZGVcIjogY29udGFpbmVyXHJcbiAgICB9O1xyXG4gICAgbGV0IGZpbmFsT3B0aW9uID0ge1xyXG4gICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICAgICAgLi4uJG9wdGlvbnNcclxuICAgIH1cclxuICAgIG5ldyBKaXRzaU1lZXRFeHRlcm5hbEFQSShkb21haW4sIGZpbmFsT3B0aW9uKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydHMuZ2VuZXJhdGVDb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkoMzApKS5tYXAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IHBvc3NpYmxlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcclxuICAgICAgICByZXR1cm4gcG9zc2libGVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKV07XHJcbiAgICB9KS5qb2luKCcnKTtcclxufVxyXG5cclxuZXhwb3J0cy5hcnJldEppdHNpID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBsZXQgaWZyYW1lID0gJCgnI2xpdmVfdmlkZW8nKS5maW5kKCdpZnJhbWUnKVxyXG4gICAgaWYoaWZyYW1lLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBpZnJhbWUucmVtb3ZlKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gJ2Jvb3RzdHJhcCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7bGF1bmNoTGl2ZVZpZGVvLGFycmV0Sml0c2ksZ2VuZXJhdGVDb2RlfSBmcm9tICcuL2xpdmVGdW5jdGlvbnMnXHJcbmltcG9ydCB7IEV2ZW50U291cmNlUG9seWZpbGwgfSBmcm9tICdldmVudC1zb3VyY2UtcG9seWZpbGwnO1xyXG4kKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gY29kZSBkZSBsJ2FwcGVsIHZpZGVvXHJcbiAgICBsZXQgY29kZSA9IG51bGw7XHJcbiAgICBsZXQgbGl2ZV9lbl9jb3VycyA9IGZhbHNlO1xyXG4gICAgbGV0IHRva2VuX2FubnVsYXRpb25fcmVxdWV0ZSA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgIGxldCBtb2RhbEpvaW5DYWxsID0gJ251bGwnO1xyXG4gICAgbGV0IGhpZGVNb2RhbEpvaW5DYWxsID0gZmFsc2U7XHJcbiAgICBsZXQgcmVmdXNlckNhbGwgPSB0cnVlO1xyXG5cclxuICAgIC8vIGFwcGVsIHJhcGlkZSBkJ3VuIGFwcGVsIHZpZGVvXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsICcuc3BlZWQtbGl2ZVZpZGVvLWNhbGwnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgLy8gbCd1dGlsaXNhdGV1ciBhcHBlbMOpXHJcbiAgICAgICAgY29uc3QgdXNlckIgPSAkKHRoaXMpLmF0dHIoJ2lkLXJlY2VwdGV1cicpO1xyXG4gICAgICAgIC8vIGwndXRpbGlzYXRldXIgZGVtYW5kZXVyXHJcbiAgICAgICAgY29uc3QgdXNlckEgPSAkKHRoaXMpLmF0dHIoJ2lkLWVudm95ZXVyJyk7XHJcblxyXG4gICAgICAgIC8vIHN1cHByZXNzaW9uIGR1IGxpdmUgYW50w6lyaWV1clxyXG4gICAgICAgYXJyZXRKaXRzaSgpO1xyXG5cclxuICAgICAgICAvLyBvbiBjaGFyZ2UgbGUgbG9hZGluZ1xyXG4gICAgICAgICQoJy5jaGFyZ2VtZW50LWxpdmUnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcblxyXG4gICAgICAgIC8vIGFmZmljaGVyIGxlIG1vZGFsXHJcbiAgICAgICAgbGV0IG1vZGFsID0gbmV3IE1vZGFsKCQoJyNtb2RhbC1saXZlLVZpZGVvLVJhcGlkZScpWzBdLCB7IGtleWJvYXJkOiBmYWxzZSB9KTtcclxuICAgICAgICBtb2RhbC5zaG93KCk7XHJcblxyXG4gICAgICAgIC8vIGdlbmVyZXIgbGUgY29kZVxyXG4gICAgICAgIGNvZGUgPSBnZW5lcmF0ZUNvZGUoKTtcclxuXHJcbiAgICAgICAgLy8gYXBwZWwgZGUgbCdpbnRlcmxvY3V0ZXVyXHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgICAgIHBhcmFtcy5hcHBlbmQoJ3VzZXJBJywgdXNlckEpO1xyXG4gICAgICAgIHBhcmFtcy5hcHBlbmQoJ3VzZXJCJywgdXNlckIpO1xyXG4gICAgICAgIHBhcmFtcy5hcHBlbmQoJ2NvZGUnLCBjb2RlKTtcclxuICAgICAgICBwYXJhbXMuYXBwZW5kKCdzaWduYWwnLCB0b2tlbl9hbm51bGF0aW9uX3JlcXVldGUuc2lnbmFsKTtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy51c2VycycpLmZpbmQoJ1tuYW1lPVwidXNlcnNbXVwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICBwYXJhbXMuYXBwZW5kKCd1c2Vyc1tdJywgJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy51c2VycycpLmZpbmQoJ2lucHV0W3R5cGU9XCJoaWRkZW5cIl1bbmFtZT1cInVzZXJzW11cIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBwYXJhbXMuYXBwZW5kKCd1c2Vyc1tdJywgJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXhpb3MucG9zdChSb3V0aW5nLmdlbmVyYXRlKCdjb2FjaF96b29tX2xpdmVSYXBpZGUnKSwgcGFyYW1zKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBsaXZlX2VuX2NvdXJzID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gbGFuY8OpIGwnYXBwZWwgbG9jYWxcclxuICAgICAgICAgICAgbGF1bmNoTGl2ZVZpZGVvKCQoJyNsaXZlX3ZpZGVvJylbMF0sIGNvZGUse1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6JzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OicxMDAlJyxcclxuICAgICAgICAgICAgICAgIG9ubG9hZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb24gY2FjaGUgbGUgbG9hZGluZyBkw6hzIHF1ZSBsYSB2aWRlbyBlc3QgY2hhcmfDqVxyXG4gICAgICAgICAgICAgICAgICAgICQoJy5jaGFyZ2VtZW50LWxpdmUnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gc3RvcHBlciBsZSBsaXZlIGxvcnNxdWUgbCdvbiBmZXJtZSBsZSBtb2RhbFxyXG4gICAgJCh0aGlzKS5vbignaGlkZS5icy5tb2RhbCcsJyNtb2RhbC1saXZlLVZpZGVvLVJhcGlkZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhcnJldEppdHNpKCk7XHJcbiAgICAgICAgaWYobGl2ZV9lbl9jb3VycyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgLy8gb24gYW5udWxlIGxhIHJlcXVldGUgZGUgY3JlYXRpb24gZGUgbGl2ZVxyXG4gICAgICAgICAgICB0b2tlbl9hbm51bGF0aW9uX3JlcXVldGUuYWJvcnQoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF4aW9zLmdldChSb3V0aW5nLmdlbmVyYXRlKCdsaXZlX2Rlc3RydWN0Jywge1xyXG4gICAgICAgICAgICAgICAgJ2NvZGUnIDogIGNvZGVcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIGxpdmVfZW5fY291cnMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy5hbGVydC1hYnNvbHV0ZScpLmh0bWwoJycpXHJcblxyXG4gICAgfSlcclxuXHJcbiAgICAvLyByZWpvaW5kcmUgdW4gcmV1bmlvblxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCcuam9pbi1saXZlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsaXZlX2VuX2NvdXJzID0gdHJ1ZTtcclxuICAgICAgICBoaWRlTW9kYWxKb2luQ2FsbCA9IHRydWU7XHJcbiAgICAgICAgcmVmdXNlckNhbGwgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gb24gc3VwcHJpbWUgbGUgbW9kYWwgZCdhcHBlbFxyXG4gICAgICAgIGlmKHR5cGVvZiBtb2RhbEpvaW5DYWxsID09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIG1vZGFsSm9pbkNhbGwuaGlkZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHJlZHVpcmUgdG91dCBsZXMgYXV0cmVzIG1vZGFsc1xyXG4gICAgICAgICAgICBtb2RhbEpvaW5DYWxsID0gbmV3IE1vZGFsKCQoJyNNb2RhbEpvaW5DYWxsJylbMF0pO1xyXG4gICAgICAgICAgICBtb2RhbEpvaW5DYWxsLmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFmZmljaGVyIGxlIG1vZGFsIGRlIGxpdmUgdmlkZW9cclxuICAgICAgICBsZXQgbW9kYWwgPSBuZXcgTW9kYWwoJCgnI21vZGFsLWxpdmUtVmlkZW8tUmFwaWRlJylbMF0sIHsga2V5Ym9hcmQ6IGZhbHNlIH0pO1xyXG4gICAgICAgIG1vZGFsLnNob3coKTtcclxuXHJcbiAgICAgICAgLy8gbGFuY8OpIGwnYXBwZWwgbG9jYWxcclxuICAgICAgICBsYXVuY2hMaXZlVmlkZW8oJCgnI2xpdmVfdmlkZW8nKVswXSwgJCh0aGlzKS5hdHRyKCdpZC1saXZlJykse1xyXG4gICAgICAgICAgICB3aWR0aDonMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDonMTAwJScsXHJcbiAgICAgICAgICAgIG9ubG9hZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBvbiBjYWNoZSBsZSBsb2FkaW5nIGTDqHMgcXVlIGxhIHZpZGVvIGVzdCBjaGFyZ8OpXHJcbiAgICAgICAgICAgICAgICAkKCcuY2hhcmdlbWVudC1saXZlJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyByZWZ1c2VyIHVuIGNhbGxcclxuICAgICQodGhpcykub24oJ2NsaWNrJywgJy5yZW1vdmUtbGl2ZScsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYodHlwZW9mIG1vZGFsSm9pbkNhbGwgPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgbW9kYWxKb2luQ2FsbC5oaWRlKCk7XHJcbiAgICAgICAgICAgIGhpZGVNb2RhbEpvaW5DYWxsID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsJy5jYWxsLXJhcGVsJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5hbGVydCcpLnJlbW92ZSgpO1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoUm91dGluZy5nZW5lcmF0ZSgnY29hY2hfem9vbV9yYXBwZWxlckFnZW50Jywge2VuY29kZWRVc2VyOiQodGhpcykuYXR0cignZGF0YS11c2VyLWlkJyl9KSlcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGRldGVjdGVyIHMnaWwgeSBhIHVuIGFwcGVsIGVudHJhbnRcclxuICAgIGNvbnN0IGVsZW1lbnRVcmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpdmUtY2FsbC10b3BpY1wiKTtcclxuICAgIGlmKGVsZW1lbnRVcmwpIHtcclxuICAgICAgICBjb25zdCB1cmxEZXRlY3Rpb25BcHBlbCA9IEpTT04ucGFyc2UoZWxlbWVudFVybC50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgY29uc3QgZXZlbnREZXRlY3Rpb25BcHBlbFNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZVBvbHlmaWxsKHVybERldGVjdGlvbkFwcGVsLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgJ2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUp0WlhKamRYSmxJanA3SW5CMVlteHBjMmdpT2xzaUtpSmRmWDAuYzZfN2ZhS1J3ejRWYlp3THQ3YTFpdmpDSWkxVTZqeE5oUTNkUFlZWTdFYycsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBldmVudERldGVjdGlvbkFwcGVsU291cmNlLm9ubWVzc2FnZSA9IGFzeW5jIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIHB1aXMgb24gcsOpY3Vww6hyZSB0b3V0ZSBsZXMgYXBwZWxzIGVudHJhbnRzXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFJvdXRpbmcuZ2VuZXJhdGUoJ2FnZW50X3pvb21fcmVqb2luZHJlUmV1bmlvbicsIHtjb2RlOiBkYXRhLmNvZGV9KSlcclxuICAgICAgICAgICAgaWYodHlwZW9mIHJlc3BvbnNlLmRhdGEgIT0gJ29iamVjdCcgICYmIGxpdmVfZW5fY291cnMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhZmZpY2hlciBsZSBtb2RhbFxyXG4gICAgICAgICAgICAgICAgaWYoJCgnI01vZGFsSm9pbkNhbGwnKS5sZW5ndGg+MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNNb2RhbEpvaW5DYWxsJykucmVwbGFjZVdpdGgocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgbW9kYWxKb2luQ2FsbCAhPSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsSm9pbkNhbGwgPSBuZXcgTW9kYWwoJCgnI01vZGFsSm9pbkNhbGwnKVswXSwgeyBrZXlib2FyZDogZmFsc2V9KTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbEpvaW5DYWxsLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxKb2luQ2FsbC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxKb2luQ2FsbCA9IG5ldyBNb2RhbCgkKCcjTW9kYWxKb2luQ2FsbCcpWzBdLCB7IGtleWJvYXJkOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsSm9pbkNhbGwuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYodHlwZW9mIG1vZGFsSm9pbkNhbGwgPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIG1vZGFsSm9pbkNhbGwuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgbW9kYWxKb2luQ2FsbCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBkZXRlY3RlciB1biByZWZ1cyBkJ3VuIGxpdmVcclxuICAgIGNvbnN0IGVsZW1lbnRVcmxSZWZ1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGl2ZS1yZWZ1cy10b3BpY1wiKTtcclxuICAgIGlmKGVsZW1lbnRVcmxSZWZ1cykge1xyXG4gICAgICAgIGNvbnN0IHVybFJlZnVzID0gSlNPTi5wYXJzZShlbGVtZW50VXJsUmVmdXMudGV4dENvbnRlbnQpO1xyXG4gICAgICAgIGNvbnN0IGV2ZW5SZWZ1c1NvdXJjZSA9IG5ldyBFdmVudFNvdXJjZVBvbHlmaWxsKHVybFJlZnVzLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgJ2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUp0WlhKamRYSmxJanA3SW5CMVlteHBjMmdpT2xzaUtpSmRmWDAuYzZfN2ZhS1J3ejRWYlp3THQ3YTFpdmpDSWkxVTZqeE5oUTNkUFlZWTdFYycsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTs7XHJcbiAgICAgICAgZXZlblJlZnVzU291cmNlLm9ubWVzc2FnZSA9IGFzeW5jIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0UmVmdSA9ICQoJyNtb2RlbC1hbGVydCcpO1xyXG4gICAgICAgICAgICBjb25zdCBhbGVydFJlZnVDbG9uZSA9IGFsZXJ0UmVmdS5jbG9uZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9ICdkYXRhLScrZGF0YS51c2VyLmlkO1xyXG4gICAgICAgICAgICBhbGVydFJlZnVDbG9uZS5hdHRyKCdpZCcsaWQpO1xyXG4gICAgICAgICAgICBhbGVydFJlZnVDbG9uZS5yZW1vdmVDbGFzcygnZC1ub25lJykuYWRkQ2xhc3MoJyBtYi0xJyk7XHJcbiAgICAgICAgICAgIGFsZXJ0UmVmdUNsb25lLmZpbmQoJy5ub20tcGFydGljaXBhbnQnKS5odG1sKGRhdGEudXNlci5ub20rJyAnK2RhdGEudXNlci5wcmVub20pO1xyXG4gICAgICAgICAgICAkKCcjbW9kYWwtbGl2ZS1WaWRlby1SYXBpZGUnKS5maW5kKCcuYWxlcnQtYWJzb2x1dGUnKS5hcHBlbmQoYWxlcnRSZWZ1Q2xvbmUpO1xyXG4gICAgICAgICAgICAkKCdbaWQ9XCInK2lkKydcIl0nKS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICAgICAkKCdbaWQ9XCInK2lkKydcIl0nKS5maW5kKCcuY2FsbC1yYXBlbCcpLmF0dHIoJ2RhdGEtdXNlci1pZCcsIGRhdGEudXNlci5pZCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgJCh0aGlzKS5vbignaGlkZS5icy5tb2RhbCcsJyNNb2RhbEpvaW5DYWxsJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmKHJlZnVzZXJDYWxsKSB7XHJcbiAgICAgICAgICAgICQoJy5yZW1vdmUtbGl2ZScpLmVhY2goYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KFJvdXRpbmcuZ2VuZXJhdGUoJ2FnZW50X3pvb21fcmVmdXNlclJldW5pb24nLCB7Y29kZSA6ICQodGhpcykuYXR0cignaWQtbGl2ZScpfSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCFoaWRlTW9kYWxKb2luQ2FsbCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQodGhpcykub24oJ3Nob3cuYnMubW9kYWwnLCcjTW9kYWxKb2luQ2FsbCcsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICByZWZ1c2VyQ2FsbCA9IHRydWU7XHJcbiAgICB9KVxyXG5cclxufSk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwianF1ZXJ5IiwiZ2xvYmFsIiwiJCIsImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCJEYXRhVGFibGUiLCJwYWdpbmciLCJvcmRlcmluZyIsImluZm8iLCJzZWFyY2hpbmciLCJkcm9wZG93biIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaWREcm9wIiwiYXR0ciIsImNsb3Nlc3QiLCJmaW5kIiwiZmlyc3QiLCJ0b2dnbGVDbGFzcyIsIm5leHQiLCJlYWNoIiwicmVtb3ZlQ2xhc3MiLCJwb3BvdmVyIiwiYm9vdHN0cmFwIiwiUG9wb3ZlciIsImNvbnRhaW5lciIsInRyaWdnZXIiLCJ0b29sdGlwIiwicmVxdWlyZSIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJjb250ZXh0IiwiZXhwb3J0cyIsImxhdW5jaExpdmVWaWRlbyIsImlkIiwiJG9wdGlvbnMiLCJyYW5kb21TdHJpbmciLCJkb21haW4iLCJvcHRpb25zIiwiZmluYWxPcHRpb24iLCJKaXRzaU1lZXRFeHRlcm5hbEFQSSIsImdlbmVyYXRlQ29kZSIsIkFycmF5IiwiYXBwbHkiLCJtYXAiLCJwb3NzaWJsZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImpvaW4iLCJhcnJldEppdHNpIiwiaWZyYW1lIiwicmVtb3ZlIiwiTW9kYWwiLCJheGlvcyIsIkV2ZW50U291cmNlUG9seWZpbGwiLCJjb2RlIiwibGl2ZV9lbl9jb3VycyIsInRva2VuX2FubnVsYXRpb25fcmVxdWV0ZSIsIkFib3J0Q29udHJvbGxlciIsIm1vZGFsSm9pbkNhbGwiLCJoaWRlTW9kYWxKb2luQ2FsbCIsInJlZnVzZXJDYWxsIiwidXNlckIiLCJ1c2VyQSIsIm1vZGFsIiwia2V5Ym9hcmQiLCJzaG93IiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwic2lnbmFsIiwiY2hlY2tlZCIsInZhbCIsInBvc3QiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJ3aWR0aCIsImhlaWdodCIsIm9ubG9hZCIsImFkZENsYXNzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiYWJvcnQiLCJnZXQiLCJodG1sIiwiaGlkZSIsImVuY29kZWRVc2VyIiwiZWxlbWVudFVybCIsImdldEVsZW1lbnRCeUlkIiwidXJsRGV0ZWN0aW9uQXBwZWwiLCJKU09OIiwicGFyc2UiLCJldmVudERldGVjdGlvbkFwcGVsU291cmNlIiwiaGVhZGVycyIsIm9ubWVzc2FnZSIsImV2ZW50IiwiZGF0YSIsInJlcGxhY2VXaXRoIiwiZWxlbWVudFVybFJlZnVzIiwidXJsUmVmdXMiLCJldmVuUmVmdXNTb3VyY2UiLCJhbGVydFJlZnUiLCJhbGVydFJlZnVDbG9uZSIsImNsb25lIiwidXNlciIsIm5vbSIsInByZW5vbSJdLCJzb3VyY2VSb290IjoiIn0=