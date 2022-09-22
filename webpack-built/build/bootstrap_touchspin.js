(self["webpackChunk"] = self["webpackChunk"] || []).push([["bootstrap_touchspin"],{

/***/ "./assets/js/vuexy/js/jquery.bootstrap-touchspin.js":
/*!**********************************************************!*\
  !*** ./assets/js/vuexy/js/jquery.bootstrap-touchspin.js ***!
  \**********************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function (factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  'use strict';

  var _currentSpinnerId = 0;

  $.fn.TouchSpin = function (options) {
    var defaults = {
      min: 0,
      // If null, there is no minimum enforced
      max: 100,
      // If null, there is no maximum enforced
      initval: '',
      replacementval: '',
      firstclickvalueifempty: null,
      step: 1,
      decimals: 0,
      stepinterval: 100,
      forcestepdivisibility: 'round',
      // none | floor | round | ceil
      stepintervaldelay: 500,
      verticalbuttons: false,
      verticalup: '+',
      verticaldown: '-',
      verticalupclass: '',
      verticaldownclass: '',
      prefix: '',
      postfix: '',
      prefix_extraclass: '',
      postfix_extraclass: '',
      booster: true,
      boostat: 10,
      maxboostedstep: false,
      mousewheel: true,
      buttondown_class: 'btn btn-primary',
      buttonup_class: 'btn btn-primary',
      buttondown_txt: '-',
      buttonup_txt: '+',
      callback_before_calculation: function callback_before_calculation(value) {
        return value;
      },
      callback_after_calculation: function callback_after_calculation(value) {
        return value;
      }
    };
    var attributeMap = {
      min: 'min',
      max: 'max',
      initval: 'init-val',
      replacementval: 'replacement-val',
      firstclickvalueifempty: 'first-click-value-if-empty',
      step: 'step',
      decimals: 'decimals',
      stepinterval: 'step-interval',
      verticalbuttons: 'vertical-buttons',
      verticalupclass: 'vertical-up-class',
      verticaldownclass: 'vertical-down-class',
      forcestepdivisibility: 'force-step-divisibility',
      stepintervaldelay: 'step-interval-delay',
      prefix: 'prefix',
      postfix: 'postfix',
      prefix_extraclass: 'prefix-extra-class',
      postfix_extraclass: 'postfix-extra-class',
      booster: 'booster',
      boostat: 'boostat',
      maxboostedstep: 'max-boosted-step',
      mousewheel: 'mouse-wheel',
      buttondown_class: 'button-down-class',
      buttonup_class: 'button-up-class',
      buttondown_txt: 'button-down-txt',
      buttonup_txt: 'button-up-txt'
    };
    return this.each(function () {
      var settings,
          originalinput = $(this),
          originalinput_data = originalinput.data(),
          _detached_prefix,
          _detached_postfix,
          container,
          elements,
          value,
          downSpinTimer,
          upSpinTimer,
          downDelayTimeout,
          upDelayTimeout,
          spincount = 0,
          spinning = false;

      init();

      function init() {
        if (originalinput.data('alreadyinitialized')) {
          return;
        }

        originalinput.data('alreadyinitialized', true);
        _currentSpinnerId += 1;
        originalinput.data('spinnerid', _currentSpinnerId);

        if (!originalinput.is('input')) {
          console.log('Must be an input.');
          return;
        }

        _initSettings();

        _setInitval();

        _checkValue();

        _buildHtml();

        _initElements();

        _hideEmptyPrefixPostfix();

        _bindEvents();

        _bindEventsInterface();
      }

      function _setInitval() {
        if (settings.initval !== '' && originalinput.val() === '') {
          originalinput.val(settings.initval);
        }
      }

      function changeSettings(newsettings) {
        _updateSettings(newsettings);

        _checkValue();

        var value = elements.input.val();

        if (value !== '') {
          value = Number(settings.callback_before_calculation(elements.input.val()));
          elements.input.val(settings.callback_after_calculation(Number(value).toFixed(settings.decimals)));
        }
      }

      function _initSettings() {
        settings = $.extend({}, defaults, originalinput_data, _parseAttributes(), options);
      }

      function _parseAttributes() {
        var data = {};
        $.each(attributeMap, function (key, value) {
          var attrName = 'bts-' + value + '';

          if (originalinput.is('[data-' + attrName + ']')) {
            data[key] = originalinput.data(attrName);
          }
        });
        return data;
      }

      function _destroy() {
        var $parent = originalinput.parent();
        stopSpin();
        originalinput.off('.touchspin');

        if ($parent.hasClass('bootstrap-touchspin-injected')) {
          originalinput.siblings().remove();
          originalinput.unwrap();
        } else {
          $('.bootstrap-touchspin-injected', $parent).remove();
          $parent.removeClass('bootstrap-touchspin');
        }

        originalinput.data('alreadyinitialized', false);
      }

      function _updateSettings(newsettings) {
        settings = $.extend({}, settings, newsettings); // Update postfix and prefix texts if those settings were changed.

        if (newsettings.postfix) {
          var $postfix = originalinput.parent().find('.bootstrap-touchspin-postfix');

          if ($postfix.length === 0) {
            _detached_postfix.insertAfter(originalinput);
          }

          originalinput.parent().find('.bootstrap-touchspin-postfix .input-group-text').text(newsettings.postfix);
        }

        if (newsettings.prefix) {
          var $prefix = originalinput.parent().find('.bootstrap-touchspin-prefix');

          if ($prefix.length === 0) {
            _detached_prefix.insertBefore(originalinput);
          }

          originalinput.parent().find('.bootstrap-touchspin-prefix .input-group-text').text(newsettings.prefix);
        }

        _hideEmptyPrefixPostfix();
      }

      function _buildHtml() {
        var initval = originalinput.val(),
            parentelement = originalinput.parent();

        if (initval !== '') {
          initval = settings.callback_after_calculation(Number(initval).toFixed(settings.decimals));
        }

        originalinput.data('initvalue', initval).val(initval);
        originalinput.addClass('form-control');

        if (parentelement.hasClass('input-group')) {
          _advanceInputGroup(parentelement);
        } else {
          _buildInputGroup();
        }
      }

      function _advanceInputGroup(parentelement) {
        parentelement.addClass('bootstrap-touchspin');
        var prev = originalinput.prev(),
            next = originalinput.next();
        var downhtml,
            uphtml,
            prefixhtml = '<span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix input-group-prepend bootstrap-touchspin-injected"><span class="input-group-text">' + settings.prefix + '</span></span>',
            postfixhtml = '<span class="input-group-addon input-group-append bootstrap-touchspin-postfix input-group-append bootstrap-touchspin-injected"><span class="input-group-text">' + settings.postfix + '</span></span>';

        if (prev.hasClass('input-group-btn') || prev.hasClass('input-group-prepend')) {
          downhtml = '<button class="' + settings.buttondown_class + ' bootstrap-touchspin-down bootstrap-touchspin-injected" type="button">' + settings.buttondown_txt + '</button>';
          prev.append(downhtml);
        } else {
          downhtml = '<span class="input-group-btn input-group-prepend bootstrap-touchspin-injected"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-down" type="button">' + settings.buttondown_txt + '</button></span>';
          $(downhtml).insertBefore(originalinput);
        }

        if (next.hasClass('input-group-btn') || next.hasClass('input-group-append')) {
          uphtml = '<button class="' + settings.buttonup_class + ' bootstrap-touchspin-up bootstrap-touchspin-injected" type="button">' + settings.buttonup_txt + '</button>';
          next.prepend(uphtml);
        } else {
          uphtml = '<span class="input-group-btn input-group-append bootstrap-touchspin-injected"><button class="' + settings.buttonup_class + ' bootstrap-touchspin-up" type="button">' + settings.buttonup_txt + '</button></span>';
          $(uphtml).insertAfter(originalinput);
        }

        $(prefixhtml).insertBefore(originalinput);
        $(postfixhtml).insertAfter(originalinput);
        container = parentelement;
      }

      function _buildInputGroup() {
        var html;
        var inputGroupSize = '';

        if (originalinput.hasClass('input-sm')) {
          inputGroupSize = 'input-group-sm';
        }

        if (originalinput.hasClass('input-lg')) {
          inputGroupSize = 'input-group-lg';
        }

        if (settings.verticalbuttons) {
          html = '<div class="input-group ' + inputGroupSize + ' bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-addon input-group-prepend bootstrap-touchspin-prefix"><span class="input-group-text">' + settings.prefix + '</span></span><span class="input-group-addon bootstrap-touchspin-postfix input-group-append"><span class="input-group-text">' + settings.postfix + '</span></span><span class="input-group-btn-vertical"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-up ' + settings.verticalupclass + '" type="button">' + settings.verticalup + '</button><button class="' + settings.buttonup_class + ' bootstrap-touchspin-down ' + settings.verticaldownclass + '" type="button">' + settings.verticaldown + '</button></span></div>';
        } else {
          html = '<div class="input-group bootstrap-touchspin bootstrap-touchspin-injected"><span class="input-group-btn input-group-prepend"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-down" type="button">' + settings.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix input-group-prepend"><span class="input-group-text">' + settings.prefix + '</span></span><span class="input-group-addon bootstrap-touchspin-postfix input-group-append"><span class="input-group-text">' + settings.postfix + '</span></span><span class="input-group-btn input-group-append"><button class="' + settings.buttonup_class + ' bootstrap-touchspin-up" type="button">' + settings.buttonup_txt + '</button></span></div>';
        }

        container = $(html).insertBefore(originalinput);
        $('.bootstrap-touchspin-prefix', container).after(originalinput);

        if (originalinput.hasClass('input-sm')) {
          container.addClass('input-group-sm');
        } else if (originalinput.hasClass('input-lg')) {
          container.addClass('input-group-lg');
        }
      }

      function _initElements() {
        elements = {
          down: $('.bootstrap-touchspin-down', container),
          up: $('.bootstrap-touchspin-up', container),
          input: $('input', container),
          prefix: $('.bootstrap-touchspin-prefix', container).addClass(settings.prefix_extraclass),
          postfix: $('.bootstrap-touchspin-postfix', container).addClass(settings.postfix_extraclass)
        };
      }

      function _hideEmptyPrefixPostfix() {
        if (settings.prefix === '') {
          _detached_prefix = elements.prefix.detach();
        }

        if (settings.postfix === '') {
          _detached_postfix = elements.postfix.detach();
        }
      }

      function _bindEvents() {
        originalinput.on('keydown.touchspin', function (ev) {
          var code = ev.keyCode || ev.which;

          if (code === 38) {
            if (spinning !== 'up') {
              upOnce();
              startUpSpin();
            }

            ev.preventDefault();
          } else if (code === 40) {
            if (spinning !== 'down') {
              downOnce();
              startDownSpin();
            }

            ev.preventDefault();
          }
        });
        originalinput.on('keyup.touchspin', function (ev) {
          var code = ev.keyCode || ev.which;

          if (code === 38) {
            stopSpin();
          } else if (code === 40) {
            stopSpin();
          }
        });
        originalinput.on('blur.touchspin', function () {
          _checkValue();

          originalinput.val(settings.callback_after_calculation(originalinput.val()));
        });
        elements.down.on('keydown', function (ev) {
          var code = ev.keyCode || ev.which;

          if (code === 32 || code === 13) {
            if (spinning !== 'down') {
              downOnce();
              startDownSpin();
            }

            ev.preventDefault();
          }
        });
        elements.down.on('keyup.touchspin', function (ev) {
          var code = ev.keyCode || ev.which;

          if (code === 32 || code === 13) {
            stopSpin();
          }
        });
        elements.up.on('keydown.touchspin', function (ev) {
          var code = ev.keyCode || ev.which;

          if (code === 32 || code === 13) {
            if (spinning !== 'up') {
              upOnce();
              startUpSpin();
            }

            ev.preventDefault();
          }
        });
        elements.up.on('keyup.touchspin', function (ev) {
          var code = ev.keyCode || ev.which;

          if (code === 32 || code === 13) {
            stopSpin();
          }
        });
        elements.down.on('mousedown.touchspin', function (ev) {
          elements.down.off('touchstart.touchspin'); // android 4 workaround

          if (originalinput.is(':disabled')) {
            return;
          }

          downOnce();
          startDownSpin();
          ev.preventDefault();
          ev.stopPropagation();
        });
        elements.down.on('touchstart.touchspin', function (ev) {
          elements.down.off('mousedown.touchspin'); // android 4 workaround

          if (originalinput.is(':disabled')) {
            return;
          }

          downOnce();
          startDownSpin();
          ev.preventDefault();
          ev.stopPropagation();
        });
        elements.up.on('mousedown.touchspin', function (ev) {
          elements.up.off('touchstart.touchspin'); // android 4 workaround

          if (originalinput.is(':disabled')) {
            return;
          }

          upOnce();
          startUpSpin();
          ev.preventDefault();
          ev.stopPropagation();
        });
        elements.up.on('touchstart.touchspin', function (ev) {
          elements.up.off('mousedown.touchspin'); // android 4 workaround

          if (originalinput.is(':disabled')) {
            return;
          }

          upOnce();
          startUpSpin();
          ev.preventDefault();
          ev.stopPropagation();
        });
        elements.up.on('mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin', function (ev) {
          if (!spinning) {
            return;
          }

          ev.stopPropagation();
          stopSpin();
        });
        elements.down.on('mouseup.touchspin mouseout.touchspin touchleave.touchspin touchend.touchspin touchcancel.touchspin', function (ev) {
          if (!spinning) {
            return;
          }

          ev.stopPropagation();
          stopSpin();
        });
        elements.down.on('mousemove.touchspin touchmove.touchspin', function (ev) {
          if (!spinning) {
            return;
          }

          ev.stopPropagation();
          ev.preventDefault();
        });
        elements.up.on('mousemove.touchspin touchmove.touchspin', function (ev) {
          if (!spinning) {
            return;
          }

          ev.stopPropagation();
          ev.preventDefault();
        });
        originalinput.on('mousewheel.touchspin DOMMouseScroll.touchspin', function (ev) {
          if (!settings.mousewheel || !originalinput.is(':focus')) {
            return;
          }

          var delta = ev.originalEvent.wheelDelta || -ev.originalEvent.deltaY || -ev.originalEvent.detail;
          ev.stopPropagation();
          ev.preventDefault();

          if (delta < 0) {
            downOnce();
          } else {
            upOnce();
          }
        });
      }

      function _bindEventsInterface() {
        originalinput.on('touchspin.destroy', function () {
          _destroy();
        });
        originalinput.on('touchspin.uponce', function () {
          stopSpin();
          upOnce();
        });
        originalinput.on('touchspin.downonce', function () {
          stopSpin();
          downOnce();
        });
        originalinput.on('touchspin.startupspin', function () {
          startUpSpin();
        });
        originalinput.on('touchspin.startdownspin', function () {
          startDownSpin();
        });
        originalinput.on('touchspin.stopspin', function () {
          stopSpin();
        });
        originalinput.on('touchspin.updatesettings', function (e, newsettings) {
          changeSettings(newsettings);
        });
      }

      function _forcestepdivisibility(value) {
        switch (settings.forcestepdivisibility) {
          case 'round':
            return (Math.round(value / settings.step) * settings.step).toFixed(settings.decimals);

          case 'floor':
            return (Math.floor(value / settings.step) * settings.step).toFixed(settings.decimals);

          case 'ceil':
            return (Math.ceil(value / settings.step) * settings.step).toFixed(settings.decimals);

          default:
            return value.toFixed(settings.decimals);
        }
      }

      function _checkValue() {
        var val, parsedval, returnval;
        val = settings.callback_before_calculation(originalinput.val());

        if (val === '') {
          if (settings.replacementval !== '') {
            originalinput.val(settings.replacementval);
            originalinput.trigger('change');
          }

          return;
        }

        if (settings.decimals > 0 && val === '.') {
          return;
        }

        parsedval = parseFloat(val);

        if (isNaN(parsedval)) {
          if (settings.replacementval !== '') {
            parsedval = settings.replacementval;
          } else {
            parsedval = 0;
          }
        }

        returnval = parsedval;

        if (parsedval.toString() !== val) {
          returnval = parsedval;
        }

        if (settings.min !== null && parsedval < settings.min) {
          returnval = settings.min;
        }

        if (settings.max !== null && parsedval > settings.max) {
          returnval = settings.max;
        }

        returnval = _forcestepdivisibility(returnval);

        if (Number(val).toString() !== returnval.toString()) {
          originalinput.val(returnval);
          originalinput.trigger('change');
        }
      }

      function _getBoostedStep() {
        if (!settings.booster) {
          return settings.step;
        } else {
          var boosted = Math.pow(2, Math.floor(spincount / settings.boostat)) * settings.step;

          if (settings.maxboostedstep) {
            if (boosted > settings.maxboostedstep) {
              boosted = settings.maxboostedstep;
              value = Math.round(value / boosted) * boosted;
            }
          }

          return Math.max(settings.step, boosted);
        }
      }

      function valueIfIsNaN() {
        if (typeof settings.firstclickvalueifempty === 'number') {
          return settings.firstclickvalueifempty;
        } else {
          return (settings.min + settings.max) / 2;
        }
      }

      function upOnce() {
        _checkValue();

        value = parseFloat(settings.callback_before_calculation(elements.input.val()));
        var initvalue = value;
        var boostedstep;

        if (isNaN(value)) {
          value = valueIfIsNaN();
        } else {
          boostedstep = _getBoostedStep();
          value = value + boostedstep;
        }

        if (settings.max !== null && value > settings.max) {
          value = settings.max;
          originalinput.trigger('touchspin.on.max');
          stopSpin();
        }

        elements.input.val(settings.callback_after_calculation(Number(value).toFixed(settings.decimals)));

        if (initvalue !== value) {
          originalinput.trigger('change');
        }
      }

      function downOnce() {
        _checkValue();

        value = parseFloat(settings.callback_before_calculation(elements.input.val()));
        var initvalue = value;
        var boostedstep;

        if (isNaN(value)) {
          value = valueIfIsNaN();
        } else {
          boostedstep = _getBoostedStep();
          value = value - boostedstep;
        }

        if (settings.min !== null && value < settings.min) {
          value = settings.min;
          originalinput.trigger('touchspin.on.min');
          stopSpin();
        }

        elements.input.val(settings.callback_after_calculation(Number(value).toFixed(settings.decimals)));

        if (initvalue !== value) {
          originalinput.trigger('change');
        }
      }

      function startDownSpin() {
        stopSpin();
        spincount = 0;
        spinning = 'down';
        originalinput.trigger('touchspin.on.startspin');
        originalinput.trigger('touchspin.on.startdownspin');
        downDelayTimeout = setTimeout(function () {
          downSpinTimer = setInterval(function () {
            spincount++;
            downOnce();
          }, settings.stepinterval);
        }, settings.stepintervaldelay);
      }

      function startUpSpin() {
        stopSpin();
        spincount = 0;
        spinning = 'up';
        originalinput.trigger('touchspin.on.startspin');
        originalinput.trigger('touchspin.on.startupspin');
        upDelayTimeout = setTimeout(function () {
          upSpinTimer = setInterval(function () {
            spincount++;
            upOnce();
          }, settings.stepinterval);
        }, settings.stepintervaldelay);
      }

      function stopSpin() {
        clearTimeout(downDelayTimeout);
        clearTimeout(upDelayTimeout);
        clearInterval(downSpinTimer);
        clearInterval(upSpinTimer);

        switch (spinning) {
          case 'up':
            originalinput.trigger('touchspin.on.stopupspin');
            originalinput.trigger('touchspin.on.stopspin');
            break;

          case 'down':
            originalinput.trigger('touchspin.on.stopdownspin');
            originalinput.trigger('touchspin.on.stopspin');
            break;
        }

        spincount = 0;
        spinning = false;
      }
    });
  };
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-464164","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_internals_dom-to-831329","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_web_d-930e15","vendors-node_modules_core-js_internals_string-multibyte_js-node_modules_core-js_modules_es_ar-9d9ec6"], () => (__webpack_exec__("./assets/js/vuexy/js/jquery.bootstrap-touchspin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxDQUFDK0YsT0FBZCxDQUFzQix3QkFBdEI7QUFDQS9GLFFBQUFBLGFBQWEsQ0FBQytGLE9BQWQsQ0FBc0IsMEJBQXRCO0FBRUFyRixRQUFBQSxjQUFjLEdBQUcrRixVQUFVLENBQUMsWUFBVztBQUNyQ2pHLFVBQUFBLFdBQVcsR0FBR2tHLFdBQVcsQ0FBQyxZQUFXO0FBQ25DL0YsWUFBQUEsU0FBUztBQUNUaUUsWUFBQUEsTUFBTTtBQUNQLFdBSHdCLEVBR3RCN0UsUUFBUSxDQUFDekIsWUFIYSxDQUF6QjtBQUlELFNBTDBCLEVBS3hCeUIsUUFBUSxDQUFDdkIsaUJBTGUsQ0FBM0I7QUFNRDs7QUFFRCxlQUFTK0QsUUFBVCxHQUFvQjtBQUNsQm9FLFFBQUFBLFlBQVksQ0FBQ2xHLGdCQUFELENBQVo7QUFDQWtHLFFBQUFBLFlBQVksQ0FBQ2pHLGNBQUQsQ0FBWjtBQUNBa0csUUFBQUEsYUFBYSxDQUFDckcsYUFBRCxDQUFiO0FBQ0FxRyxRQUFBQSxhQUFhLENBQUNwRyxXQUFELENBQWI7O0FBRUEsZ0JBQVFJLFFBQVI7QUFDRSxlQUFLLElBQUw7QUFDRVosWUFBQUEsYUFBYSxDQUFDK0YsT0FBZCxDQUFzQix5QkFBdEI7QUFDQS9GLFlBQUFBLGFBQWEsQ0FBQytGLE9BQWQsQ0FBc0IsdUJBQXRCO0FBQ0E7O0FBQ0YsZUFBSyxNQUFMO0FBQ0UvRixZQUFBQSxhQUFhLENBQUMrRixPQUFkLENBQXNCLDJCQUF0QjtBQUNBL0YsWUFBQUEsYUFBYSxDQUFDK0YsT0FBZCxDQUFzQix1QkFBdEI7QUFDQTtBQVJKOztBQVdBcEYsUUFBQUEsU0FBUyxHQUFHLENBQVo7QUFDQUMsUUFBQUEsUUFBUSxHQUFHLEtBQVg7QUFDRDtBQUVGLEtBdG9CTSxDQUFQO0FBd29CRCxHQTFzQkQ7QUE0c0JELENBcHVCQSxDQUFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Z1ZXh5L2pzL2pxdWVyeS5ib290c3RyYXAtdG91Y2hzcGluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihmYWN0b3J5KSB7XHJcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcclxuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocm9vdCwgalF1ZXJ5KSB7XHJcbiAgICAgIGlmIChqUXVlcnkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgalF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgalF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jykocm9vdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcclxuICAgICAgcmV0dXJuIGpRdWVyeTtcclxuICAgIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIGZhY3RvcnkoalF1ZXJ5KTtcclxuICB9XHJcbn0oZnVuY3Rpb24oJCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgdmFyIF9jdXJyZW50U3Bpbm5lcklkID0gMDtcclxuXHJcbiAgJC5mbi5Ub3VjaFNwaW4gPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcblxyXG4gICAgdmFyIGRlZmF1bHRzID0ge1xyXG4gICAgICBtaW46IDAsIC8vIElmIG51bGwsIHRoZXJlIGlzIG5vIG1pbmltdW0gZW5mb3JjZWRcclxuICAgICAgbWF4OiAxMDAsIC8vIElmIG51bGwsIHRoZXJlIGlzIG5vIG1heGltdW0gZW5mb3JjZWRcclxuICAgICAgaW5pdHZhbDogJycsXHJcbiAgICAgIHJlcGxhY2VtZW50dmFsOiAnJyxcclxuICAgICAgZmlyc3RjbGlja3ZhbHVlaWZlbXB0eTogbnVsbCxcclxuICAgICAgc3RlcDogMSxcclxuICAgICAgZGVjaW1hbHM6IDAsXHJcbiAgICAgIHN0ZXBpbnRlcnZhbDogMTAwLFxyXG4gICAgICBmb3JjZXN0ZXBkaXZpc2liaWxpdHk6ICdyb3VuZCcsIC8vIG5vbmUgfCBmbG9vciB8IHJvdW5kIHwgY2VpbFxyXG4gICAgICBzdGVwaW50ZXJ2YWxkZWxheTogNTAwLFxyXG4gICAgICB2ZXJ0aWNhbGJ1dHRvbnM6IGZhbHNlLFxyXG4gICAgICB2ZXJ0aWNhbHVwOiAnKycsXHJcbiAgICAgIHZlcnRpY2FsZG93bjogJy0nLFxyXG4gICAgICB2ZXJ0aWNhbHVwY2xhc3M6ICcnLFxyXG4gICAgICB2ZXJ0aWNhbGRvd25jbGFzczogJycsXHJcbiAgICAgIHByZWZpeDogJycsXHJcbiAgICAgIHBvc3RmaXg6ICcnLFxyXG4gICAgICBwcmVmaXhfZXh0cmFjbGFzczogJycsXHJcbiAgICAgIHBvc3RmaXhfZXh0cmFjbGFzczogJycsXHJcbiAgICAgIGJvb3N0ZXI6IHRydWUsXHJcbiAgICAgIGJvb3N0YXQ6IDEwLFxyXG4gICAgICBtYXhib29zdGVkc3RlcDogZmFsc2UsXHJcbiAgICAgIG1vdXNld2hlZWw6IHRydWUsXHJcbiAgICAgIGJ1dHRvbmRvd25fY2xhc3M6ICdidG4gYnRuLXByaW1hcnknLFxyXG4gICAgICBidXR0b251cF9jbGFzczogJ2J0biBidG4tcHJpbWFyeScsXHJcbiAgICAgIGJ1dHRvbmRvd25fdHh0OiAnLScsXHJcbiAgICAgIGJ1dHRvbnVwX3R4dDogJysnLFxyXG4gICAgICBjYWxsYmFja19iZWZvcmVfY2FsY3VsYXRpb246IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICB9LFxyXG4gICAgICBjYWxsYmFja19hZnRlcl9jYWxjdWxhdGlvbjogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIGF0dHJpYnV0ZU1hcCA9IHtcclxuICAgICAgbWluOiAnbWluJyxcclxuICAgICAgbWF4OiAnbWF4JyxcclxuICAgICAgaW5pdHZhbDogJ2luaXQtdmFsJyxcclxuICAgICAgcmVwbGFjZW1lbnR2YWw6ICdyZXBsYWNlbWVudC12YWwnLFxyXG4gICAgICBmaXJzdGNsaWNrdmFsdWVpZmVtcHR5OiAnZmlyc3QtY2xpY2stdmFsdWUtaWYtZW1wdHknLFxyXG4gICAgICBzdGVwOiAnc3RlcCcsXHJcbiAgICAgIGRlY2ltYWxzOiAnZGVjaW1hbHMnLFxyXG4gICAgICBzdGVwaW50ZXJ2YWw6ICdzdGVwLWludGVydmFsJyxcclxuICAgICAgdmVydGljYWxidXR0b25zOiAndmVydGljYWwtYnV0dG9ucycsXHJcbiAgICAgIHZlcnRpY2FsdXBjbGFzczogJ3ZlcnRpY2FsLXVwLWNsYXNzJyxcclxuICAgICAgdmVydGljYWxkb3duY2xhc3M6ICd2ZXJ0aWNhbC1kb3duLWNsYXNzJyxcclxuICAgICAgZm9yY2VzdGVwZGl2aXNpYmlsaXR5OiAnZm9yY2Utc3RlcC1kaXZpc2liaWxpdHknLFxyXG4gICAgICBzdGVwaW50ZXJ2YWxkZWxheTogJ3N0ZXAtaW50ZXJ2YWwtZGVsYXknLFxyXG4gICAgICBwcmVmaXg6ICdwcmVmaXgnLFxyXG4gICAgICBwb3N0Zml4OiAncG9zdGZpeCcsXHJcbiAgICAgIHByZWZpeF9leHRyYWNsYXNzOiAncHJlZml4LWV4dHJhLWNsYXNzJyxcclxuICAgICAgcG9zdGZpeF9leHRyYWNsYXNzOiAncG9zdGZpeC1leHRyYS1jbGFzcycsXHJcbiAgICAgIGJvb3N0ZXI6ICdib29zdGVyJyxcclxuICAgICAgYm9vc3RhdDogJ2Jvb3N0YXQnLFxyXG4gICAgICBtYXhib29zdGVkc3RlcDogJ21heC1ib29zdGVkLXN0ZXAnLFxyXG4gICAgICBtb3VzZXdoZWVsOiAnbW91c2Utd2hlZWwnLFxyXG4gICAgICBidXR0b25kb3duX2NsYXNzOiAnYnV0dG9uLWRvd24tY2xhc3MnLFxyXG4gICAgICBidXR0b251cF9jbGFzczogJ2J1dHRvbi11cC1jbGFzcycsXHJcbiAgICAgIGJ1dHRvbmRvd25fdHh0OiAnYnV0dG9uLWRvd24tdHh0JyxcclxuICAgICAgYnV0dG9udXBfdHh0OiAnYnV0dG9uLXVwLXR4dCdcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgIHZhciBzZXR0aW5ncyxcclxuICAgICAgICBvcmlnaW5hbGlucHV0ID0gJCh0aGlzKSxcclxuICAgICAgICBvcmlnaW5hbGlucHV0X2RhdGEgPSBvcmlnaW5hbGlucHV0LmRhdGEoKSxcclxuICAgICAgICBfZGV0YWNoZWRfcHJlZml4LFxyXG4gICAgICAgIF9kZXRhY2hlZF9wb3N0Zml4LFxyXG4gICAgICAgIGNvbnRhaW5lcixcclxuICAgICAgICBlbGVtZW50cyxcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBkb3duU3BpblRpbWVyLFxyXG4gICAgICAgIHVwU3BpblRpbWVyLFxyXG4gICAgICAgIGRvd25EZWxheVRpbWVvdXQsXHJcbiAgICAgICAgdXBEZWxheVRpbWVvdXQsXHJcbiAgICAgICAgc3BpbmNvdW50ID0gMCxcclxuICAgICAgICBzcGlubmluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgaW5pdCgpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICAgICBpZiAob3JpZ2luYWxpbnB1dC5kYXRhKCdhbHJlYWR5aW5pdGlhbGl6ZWQnKSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3JpZ2luYWxpbnB1dC5kYXRhKCdhbHJlYWR5aW5pdGlhbGl6ZWQnLCB0cnVlKTtcclxuICAgICAgICBfY3VycmVudFNwaW5uZXJJZCArPSAxO1xyXG4gICAgICAgIG9yaWdpbmFsaW5wdXQuZGF0YSgnc3Bpbm5lcmlkJywgX2N1cnJlbnRTcGlubmVySWQpO1xyXG5cclxuICAgICAgICBpZiAoIW9yaWdpbmFsaW5wdXQuaXMoJ2lucHV0JykpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdNdXN0IGJlIGFuIGlucHV0LicpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX2luaXRTZXR0aW5ncygpO1xyXG4gICAgICAgIF9zZXRJbml0dmFsKCk7XHJcbiAgICAgICAgX2NoZWNrVmFsdWUoKTtcclxuICAgICAgICBfYnVpbGRIdG1sKCk7XHJcbiAgICAgICAgX2luaXRFbGVtZW50cygpO1xyXG4gICAgICAgIF9oaWRlRW1wdHlQcmVmaXhQb3N0Zml4KCk7XHJcbiAgICAgICAgX2JpbmRFdmVudHMoKTtcclxuICAgICAgICBfYmluZEV2ZW50c0ludGVyZmFjZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBfc2V0SW5pdHZhbCgpIHtcclxuICAgICAgICBpZiAoc2V0dGluZ3MuaW5pdHZhbCAhPT0gJycgJiYgb3JpZ2luYWxpbnB1dC52YWwoKSA9PT0gJycpIHtcclxuICAgICAgICAgIG9yaWdpbmFsaW5wdXQudmFsKHNldHRpbmdzLmluaXR2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gY2hhbmdlU2V0dGluZ3MobmV3c2V0dGluZ3MpIHtcclxuICAgICAgICBfdXBkYXRlU2V0dGluZ3MobmV3c2V0dGluZ3MpO1xyXG4gICAgICAgIF9jaGVja1ZhbHVlKCk7XHJcblxyXG4gICAgICAgIHZhciB2YWx1ZSA9IGVsZW1lbnRzLmlucHV0LnZhbCgpO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgIT09ICcnKSB7XHJcbiAgICAgICAgICB2YWx1ZSA9IE51bWJlcihzZXR0aW5ncy5jYWxsYmFja19iZWZvcmVfY2FsY3VsYXRpb24oZWxlbWVudHMuaW5wdXQudmFsKCkpKTtcclxuICAgICAgICAgIGVsZW1lbnRzLmlucHV0LnZhbChzZXR0aW5ncy5jYWxsYmFja19hZnRlcl9jYWxjdWxhdGlvbihOdW1iZXIodmFsdWUpLnRvRml4ZWQoc2V0dGluZ3MuZGVjaW1hbHMpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBfaW5pdFNldHRpbmdzKCkge1xyXG4gICAgICAgIHNldHRpbmdzID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcmlnaW5hbGlucHV0X2RhdGEsIF9wYXJzZUF0dHJpYnV0ZXMoKSwgb3B0aW9ucyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIF9wYXJzZUF0dHJpYnV0ZXMoKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7fTtcclxuICAgICAgICAkLmVhY2goYXR0cmlidXRlTWFwLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICB2YXIgYXR0ck5hbWUgPSAnYnRzLScgKyB2YWx1ZSArICcnO1xyXG4gICAgICAgICAgaWYgKG9yaWdpbmFsaW5wdXQuaXMoJ1tkYXRhLScgKyBhdHRyTmFtZSArICddJykpIHtcclxuICAgICAgICAgICAgZGF0YVtrZXldID0gb3JpZ2luYWxpbnB1dC5kYXRhKGF0dHJOYW1lKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gX2Rlc3Ryb3koKSB7XHJcbiAgICAgICAgdmFyICRwYXJlbnQgPSBvcmlnaW5hbGlucHV0LnBhcmVudCgpO1xyXG5cclxuICAgICAgICBzdG9wU3BpbigpO1xyXG5cclxuICAgICAgICBvcmlnaW5hbGlucHV0Lm9mZignLnRvdWNoc3BpbicpO1xyXG5cclxuICAgICAgICBpZiAoJHBhcmVudC5oYXNDbGFzcygnYm9vdHN0cmFwLXRvdWNoc3Bpbi1pbmplY3RlZCcpKSB7XHJcbiAgICAgICAgICBvcmlnaW5hbGlucHV0LnNpYmxpbmdzKCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICBvcmlnaW5hbGlucHV0LnVud3JhcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICQoJy5ib290c3RyYXAtdG91Y2hzcGluLWluamVjdGVkJywgJHBhcmVudCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAkcGFyZW50LnJlbW92ZUNsYXNzKCdib290c3RyYXAtdG91Y2hzcGluJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcmlnaW5hbGlucHV0LmRhdGEoJ2FscmVhZHlpbml0aWFsaXplZCcsIGZhbHNlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gX3VwZGF0ZVNldHRpbmdzKG5ld3NldHRpbmdzKSB7XHJcbiAgICAgICAgc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgc2V0dGluZ3MsIG5ld3NldHRpbmdzKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHBvc3RmaXggYW5kIHByZWZpeCB0ZXh0cyBpZiB0aG9zZSBzZXR0aW5ncyB3ZXJlIGNoYW5nZWQuXHJcbiAgICAgICAgaWYgKG5ld3NldHRpbmdzLnBvc3RmaXgpIHtcclxuICAgICAgICAgIHZhciAkcG9zdGZpeCA9IG9yaWdpbmFsaW5wdXQucGFyZW50KCkuZmluZCgnLmJvb3RzdHJhcC10b3VjaHNwaW4tcG9zdGZpeCcpO1xyXG5cclxuICAgICAgICAgIGlmICgkcG9zdGZpeC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgX2RldGFjaGVkX3Bvc3RmaXguaW5zZXJ0QWZ0ZXIob3JpZ2luYWxpbnB1dCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgb3JpZ2luYWxpbnB1dC5wYXJlbnQoKS5maW5kKCcuYm9vdHN0cmFwLXRvdWNoc3Bpbi1wb3N0Zml4IC5pbnB1dC1ncm91cC10ZXh0JykudGV4dChuZXdzZXR0aW5ncy5wb3N0Zml4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuZXdzZXR0aW5ncy5wcmVmaXgpIHtcclxuICAgICAgICAgIHZhciAkcHJlZml4ID0gb3JpZ2luYWxpbnB1dC5wYXJlbnQoKS5maW5kKCcuYm9vdHN0cmFwLXRvdWNoc3Bpbi1wcmVmaXgnKTtcclxuXHJcbiAgICAgICAgICBpZiAoJHByZWZpeC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgX2RldGFjaGVkX3ByZWZpeC5pbnNlcnRCZWZvcmUob3JpZ2luYWxpbnB1dCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgb3JpZ2luYWxpbnB1dC5wYXJlbnQoKS5maW5kKCcuYm9vdHN0cmFwLXRvdWNoc3Bpbi1wcmVmaXggLmlucHV0LWdyb3VwLXRleHQnKS50ZXh0KG5ld3NldHRpbmdzLnByZWZpeCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfaGlkZUVtcHR5UHJlZml4UG9zdGZpeCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBfYnVpbGRIdG1sKCkge1xyXG4gICAgICAgIHZhciBpbml0dmFsID0gb3JpZ2luYWxpbnB1dC52YWwoKSxcclxuICAgICAgICAgIHBhcmVudGVsZW1lbnQgPSBvcmlnaW5hbGlucHV0LnBhcmVudCgpO1xyXG5cclxuICAgICAgICBpZiAoaW5pdHZhbCAhPT0gJycpIHtcclxuICAgICAgICAgIGluaXR2YWwgPSBzZXR0aW5ncy5jYWxsYmFja19hZnRlcl9jYWxjdWxhdGlvbihOdW1iZXIoaW5pdHZhbCkudG9GaXhlZChzZXR0aW5ncy5kZWNpbWFscykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3JpZ2luYWxpbnB1dC5kYXRhKCdpbml0dmFsdWUnLCBpbml0dmFsKS52YWwoaW5pdHZhbCk7XHJcbiAgICAgICAgb3JpZ2luYWxpbnB1dC5hZGRDbGFzcygnZm9ybS1jb250cm9sJyk7XHJcblxyXG4gICAgICAgIGlmIChwYXJlbnRlbGVtZW50Lmhhc0NsYXNzKCdpbnB1dC1ncm91cCcpKSB7XHJcbiAgICAgICAgICBfYWR2YW5jZUlucHV0R3JvdXAocGFyZW50ZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgX2J1aWxkSW5wdXRHcm91cCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gX2FkdmFuY2VJbnB1dEdyb3VwKHBhcmVudGVsZW1lbnQpIHtcclxuICAgICAgICBwYXJlbnRlbGVtZW50LmFkZENsYXNzKCdib290c3RyYXAtdG91Y2hzcGluJyk7XHJcblxyXG4gICAgICAgIHZhciBwcmV2ID0gb3JpZ2luYWxpbnB1dC5wcmV2KCksXHJcbiAgICAgICAgICBuZXh0ID0gb3JpZ2luYWxpbnB1dC5uZXh0KCk7XHJcblxyXG4gICAgICAgIHZhciBkb3duaHRtbCxcclxuICAgICAgICAgIHVwaHRtbCxcclxuICAgICAgICAgIHByZWZpeGh0bWwgPSAnPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvbiBpbnB1dC1ncm91cC1wcmVwZW5kIGJvb3RzdHJhcC10b3VjaHNwaW4tcHJlZml4IGlucHV0LWdyb3VwLXByZXBlbmQgYm9vdHN0cmFwLXRvdWNoc3Bpbi1pbmplY3RlZFwiPjxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPicgKyBzZXR0aW5ncy5wcmVmaXggKyAnPC9zcGFuPjwvc3Bhbj4nLFxyXG4gICAgICAgICAgcG9zdGZpeGh0bWwgPSAnPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvbiBpbnB1dC1ncm91cC1hcHBlbmQgYm9vdHN0cmFwLXRvdWNoc3Bpbi1wb3N0Zml4IGlucHV0LWdyb3VwLWFwcGVuZCBib290c3RyYXAtdG91Y2hzcGluLWluamVjdGVkXCI+PHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+JyArIHNldHRpbmdzLnBvc3RmaXggKyAnPC9zcGFuPjwvc3Bhbj4nO1xyXG5cclxuICAgICAgICBpZiAocHJldi5oYXNDbGFzcygnaW5wdXQtZ3JvdXAtYnRuJykgfHwgcHJldi5oYXNDbGFzcygnaW5wdXQtZ3JvdXAtcHJlcGVuZCcpKSB7XHJcbiAgICAgICAgICBkb3duaHRtbCA9ICc8YnV0dG9uIGNsYXNzPVwiJyArIHNldHRpbmdzLmJ1dHRvbmRvd25fY2xhc3MgKyAnIGJvb3RzdHJhcC10b3VjaHNwaW4tZG93biBib290c3RyYXAtdG91Y2hzcGluLWluamVjdGVkXCIgdHlwZT1cImJ1dHRvblwiPicgKyBzZXR0aW5ncy5idXR0b25kb3duX3R4dCArICc8L2J1dHRvbj4nO1xyXG4gICAgICAgICAgcHJldi5hcHBlbmQoZG93bmh0bWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGRvd25odG1sID0gJzxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYnRuIGlucHV0LWdyb3VwLXByZXBlbmQgYm9vdHN0cmFwLXRvdWNoc3Bpbi1pbmplY3RlZFwiPjxidXR0b24gY2xhc3M9XCInICsgc2V0dGluZ3MuYnV0dG9uZG93bl9jbGFzcyArICcgYm9vdHN0cmFwLXRvdWNoc3Bpbi1kb3duXCIgdHlwZT1cImJ1dHRvblwiPicgKyBzZXR0aW5ncy5idXR0b25kb3duX3R4dCArICc8L2J1dHRvbj48L3NwYW4+JztcclxuICAgICAgICAgICQoZG93bmh0bWwpLmluc2VydEJlZm9yZShvcmlnaW5hbGlucHV0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuZXh0Lmhhc0NsYXNzKCdpbnB1dC1ncm91cC1idG4nKSB8fCBuZXh0Lmhhc0NsYXNzKCdpbnB1dC1ncm91cC1hcHBlbmQnKSkge1xyXG4gICAgICAgICAgdXBodG1sID0gJzxidXR0b24gY2xhc3M9XCInICsgc2V0dGluZ3MuYnV0dG9udXBfY2xhc3MgKyAnIGJvb3RzdHJhcC10b3VjaHNwaW4tdXAgYm9vdHN0cmFwLXRvdWNoc3Bpbi1pbmplY3RlZFwiIHR5cGU9XCJidXR0b25cIj4nICsgc2V0dGluZ3MuYnV0dG9udXBfdHh0ICsgJzwvYnV0dG9uPic7XHJcbiAgICAgICAgICBuZXh0LnByZXBlbmQodXBodG1sKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB1cGh0bWwgPSAnPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1idG4gaW5wdXQtZ3JvdXAtYXBwZW5kIGJvb3RzdHJhcC10b3VjaHNwaW4taW5qZWN0ZWRcIj48YnV0dG9uIGNsYXNzPVwiJyArIHNldHRpbmdzLmJ1dHRvbnVwX2NsYXNzICsgJyBib290c3RyYXAtdG91Y2hzcGluLXVwXCIgdHlwZT1cImJ1dHRvblwiPicgKyBzZXR0aW5ncy5idXR0b251cF90eHQgKyAnPC9idXR0b24+PC9zcGFuPic7XHJcbiAgICAgICAgICAkKHVwaHRtbCkuaW5zZXJ0QWZ0ZXIob3JpZ2luYWxpbnB1dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKHByZWZpeGh0bWwpLmluc2VydEJlZm9yZShvcmlnaW5hbGlucHV0KTtcclxuICAgICAgICAkKHBvc3RmaXhodG1sKS5pbnNlcnRBZnRlcihvcmlnaW5hbGlucHV0KTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyID0gcGFyZW50ZWxlbWVudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gX2J1aWxkSW5wdXRHcm91cCgpIHtcclxuICAgICAgICB2YXIgaHRtbDtcclxuXHJcbiAgICAgICAgdmFyIGlucHV0R3JvdXBTaXplID0gJyc7XHJcbiAgICAgICAgaWYgKG9yaWdpbmFsaW5wdXQuaGFzQ2xhc3MoJ2lucHV0LXNtJykpIHtcclxuICAgICAgICAgIGlucHV0R3JvdXBTaXplID0gJ2lucHV0LWdyb3VwLXNtJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcmlnaW5hbGlucHV0Lmhhc0NsYXNzKCdpbnB1dC1sZycpKSB7XHJcbiAgICAgICAgICBpbnB1dEdyb3VwU2l6ZSA9ICdpbnB1dC1ncm91cC1sZyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2V0dGluZ3MudmVydGljYWxidXR0b25zKSB7XHJcbiAgICAgICAgICBodG1sID0gJzxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCAnICsgaW5wdXRHcm91cFNpemUgKyAnIGJvb3RzdHJhcC10b3VjaHNwaW4gYm9vdHN0cmFwLXRvdWNoc3Bpbi1pbmplY3RlZFwiPjxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb24gaW5wdXQtZ3JvdXAtcHJlcGVuZCBib290c3RyYXAtdG91Y2hzcGluLXByZWZpeFwiPjxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPicgKyBzZXR0aW5ncy5wcmVmaXggKyAnPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uIGJvb3RzdHJhcC10b3VjaHNwaW4tcG9zdGZpeCBpbnB1dC1ncm91cC1hcHBlbmRcIj48c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj4nICsgc2V0dGluZ3MucG9zdGZpeCArICc8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYnRuLXZlcnRpY2FsXCI+PGJ1dHRvbiBjbGFzcz1cIicgKyBzZXR0aW5ncy5idXR0b25kb3duX2NsYXNzICsgJyBib290c3RyYXAtdG91Y2hzcGluLXVwICcgKyBzZXR0aW5ncy52ZXJ0aWNhbHVwY2xhc3MgKyAnXCIgdHlwZT1cImJ1dHRvblwiPicgKyBzZXR0aW5ncy52ZXJ0aWNhbHVwICsgJzwvYnV0dG9uPjxidXR0b24gY2xhc3M9XCInICsgc2V0dGluZ3MuYnV0dG9udXBfY2xhc3MgKyAnIGJvb3RzdHJhcC10b3VjaHNwaW4tZG93biAnICsgc2V0dGluZ3MudmVydGljYWxkb3duY2xhc3MgKyAnXCIgdHlwZT1cImJ1dHRvblwiPicgKyBzZXR0aW5ncy52ZXJ0aWNhbGRvd24gKyAnPC9idXR0b24+PC9zcGFuPjwvZGl2Pic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgYm9vdHN0cmFwLXRvdWNoc3BpbiBib290c3RyYXAtdG91Y2hzcGluLWluamVjdGVkXCI+PHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1idG4gaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPjxidXR0b24gY2xhc3M9XCInICsgc2V0dGluZ3MuYnV0dG9uZG93bl9jbGFzcyArICcgYm9vdHN0cmFwLXRvdWNoc3Bpbi1kb3duXCIgdHlwZT1cImJ1dHRvblwiPicgKyBzZXR0aW5ncy5idXR0b25kb3duX3R4dCArICc8L2J1dHRvbj48L3NwYW4+PHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvbiBib290c3RyYXAtdG91Y2hzcGluLXByZWZpeCBpbnB1dC1ncm91cC1wcmVwZW5kXCI+PHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+JyArIHNldHRpbmdzLnByZWZpeCArICc8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb24gYm9vdHN0cmFwLXRvdWNoc3Bpbi1wb3N0Zml4IGlucHV0LWdyb3VwLWFwcGVuZFwiPjxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPicgKyBzZXR0aW5ncy5wb3N0Zml4ICsgJzwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1idG4gaW5wdXQtZ3JvdXAtYXBwZW5kXCI+PGJ1dHRvbiBjbGFzcz1cIicgKyBzZXR0aW5ncy5idXR0b251cF9jbGFzcyArICcgYm9vdHN0cmFwLXRvdWNoc3Bpbi11cFwiIHR5cGU9XCJidXR0b25cIj4nICsgc2V0dGluZ3MuYnV0dG9udXBfdHh0ICsgJzwvYnV0dG9uPjwvc3Bhbj48L2Rpdj4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGFpbmVyID0gJChodG1sKS5pbnNlcnRCZWZvcmUob3JpZ2luYWxpbnB1dCk7XHJcblxyXG4gICAgICAgICQoJy5ib290c3RyYXAtdG91Y2hzcGluLXByZWZpeCcsIGNvbnRhaW5lcikuYWZ0ZXIob3JpZ2luYWxpbnB1dCk7XHJcblxyXG4gICAgICAgIGlmIChvcmlnaW5hbGlucHV0Lmhhc0NsYXNzKCdpbnB1dC1zbScpKSB7XHJcbiAgICAgICAgICBjb250YWluZXIuYWRkQ2xhc3MoJ2lucHV0LWdyb3VwLXNtJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG9yaWdpbmFsaW5wdXQuaGFzQ2xhc3MoJ2lucHV0LWxnJykpIHtcclxuICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcygnaW5wdXQtZ3JvdXAtbGcnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIF9pbml0RWxlbWVudHMoKSB7XHJcbiAgICAgICAgZWxlbWVudHMgPSB7XHJcbiAgICAgICAgICBkb3duOiAkKCcuYm9vdHN0cmFwLXRvdWNoc3Bpbi1kb3duJywgY29udGFpbmVyKSxcclxuICAgICAgICAgIHVwOiAkKCcuYm9vdHN0cmFwLXRvdWNoc3Bpbi11cCcsIGNvbnRhaW5lciksXHJcbiAgICAgICAgICBpbnB1dDogJCgnaW5wdXQnLCBjb250YWluZXIpLFxyXG4gICAgICAgICAgcHJlZml4OiAkKCcuYm9vdHN0cmFwLXRvdWNoc3Bpbi1wcmVmaXgnLCBjb250YWluZXIpLmFkZENsYXNzKHNldHRpbmdzLnByZWZpeF9leHRyYWNsYXNzKSxcclxuICAgICAgICAgIHBvc3RmaXg6ICQoJy5ib290c3RyYXAtdG91Y2hzcGluLXBvc3RmaXgnLCBjb250YWluZXIpLmFkZENsYXNzKHNldHRpbmdzLnBvc3RmaXhfZXh0cmFjbGFzcylcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBfaGlkZUVtcHR5UHJlZml4UG9zdGZpeCgpIHtcclxuICAgICAgICBpZiAoc2V0dGluZ3MucHJlZml4ID09PSAnJykge1xyXG4gICAgICAgICAgX2RldGFjaGVkX3ByZWZpeCA9IGVsZW1lbnRzLnByZWZpeC5kZXRhY2goKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXR0aW5ncy5wb3N0Zml4ID09PSAnJykge1xyXG4gICAgICAgICAgX2RldGFjaGVkX3Bvc3RmaXggPSBlbGVtZW50cy5wb3N0Zml4LmRldGFjaCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gX2JpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgb3JpZ2luYWxpbnB1dC5vbigna2V5ZG93bi50b3VjaHNwaW4nLCBmdW5jdGlvbihldikge1xyXG4gICAgICAgICAgdmFyIGNvZGUgPSBldi5rZXlDb2RlIHx8IGV2LndoaWNoO1xyXG5cclxuICAgICAgICAgIGlmIChjb2RlID09PSAzOCkge1xyXG4gICAgICAgICAgICBpZiAoc3Bpbm5pbmcgIT09ICd1cCcpIHtcclxuICAgICAgICAgICAgICB1cE9uY2UoKTtcclxuICAgICAgICAgICAgICBzdGFydFVwU3BpbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmIChjb2RlID09PSA0MCkge1xyXG4gICAgICAgICAgICBpZiAoc3Bpbm5pbmcgIT09ICdkb3duJykge1xyXG4gICAgICAgICAgICAgIGRvd25PbmNlKCk7XHJcbiAgICAgICAgICAgICAgc3RhcnREb3duU3BpbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG9yaWdpbmFsaW5wdXQub24oJ2tleXVwLnRvdWNoc3BpbicsIGZ1bmN0aW9uKGV2KSB7XHJcbiAgICAgICAgICB2YXIgY29kZSA9IGV2LmtleUNvZGUgfHwgZXYud2hpY2g7XHJcblxyXG4gICAgICAgICAgaWYgKGNvZGUgPT09IDM4KSB7XHJcbiAgICAgICAgICAgIHN0b3BTcGluKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIGlmIChjb2RlID09PSA0MCkge1xyXG4gICAgICAgICAgICBzdG9wU3BpbigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBvcmlnaW5hbGlucHV0Lm9uKCdibHVyLnRvdWNoc3BpbicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgX2NoZWNrVmFsdWUoKTtcclxuICAgICAgICAgIG9yaWdpbmFsaW5wdXQudmFsKHNldHRpbmdzLmNhbGxiYWNrX2FmdGVyX2NhbGN1bGF0aW9uKG9yaWdpbmFsaW5wdXQudmFsKCkpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZWxlbWVudHMuZG93bi5vbigna2V5ZG93bicsIGZ1bmN0aW9uKGV2KSB7XHJcbiAgICAgICAgICB2YXIgY29kZSA9IGV2LmtleUNvZGUgfHwgZXYud2hpY2g7XHJcblxyXG4gICAgICAgICAgaWYgKGNvZGUgPT09IDMyIHx8IGNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIGlmIChzcGlubmluZyAhPT0gJ2Rvd24nKSB7XHJcbiAgICAgICAgICAgICAgZG93bk9uY2UoKTtcclxuICAgICAgICAgICAgICBzdGFydERvd25TcGluKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZWxlbWVudHMuZG93bi5vbigna2V5dXAudG91Y2hzcGluJywgZnVuY3Rpb24oZXYpIHtcclxuICAgICAgICAgIHZhciBjb2RlID0gZXYua2V5Q29kZSB8fCBldi53aGljaDtcclxuXHJcbiAgICAgICAgICBpZiAoY29kZSA9PT0gMzIgfHwgY29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgc3RvcFNwaW4oKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZWxlbWVudHMudXAub24oJ2tleWRvd24udG91Y2hzcGluJywgZnVuY3Rpb24oZXYpIHtcclxuICAgICAgICAgIHZhciBjb2RlID0gZXYua2V5Q29kZSB8fCBldi53aGljaDtcclxuXHJcbiAgICAgICAgICBpZiAoY29kZSA9PT0gMzIgfHwgY29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgaWYgKHNwaW5uaW5nICE9PSAndXAnKSB7XHJcbiAgICAgICAgICAgICAgdXBPbmNlKCk7XHJcbiAgICAgICAgICAgICAgc3RhcnRVcFNwaW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBlbGVtZW50cy51cC5vbigna2V5dXAudG91Y2hzcGluJywgZnVuY3Rpb24oZXYpIHtcclxuICAgICAgICAgIHZhciBjb2RlID0gZXYua2V5Q29kZSB8fCBldi53aGljaDtcclxuXHJcbiAgICAgICAgICBpZiAoY29kZSA9PT0gMzIgfHwgY29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgc3RvcFNwaW4oKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZWxlbWVudHMuZG93bi5vbignbW91c2Vkb3duLnRvdWNoc3BpbicsIGZ1bmN0aW9uKGV2KSB7XHJcbiAgICAgICAgICBlbGVtZW50cy5kb3duLm9mZigndG91Y2hzdGFydC50b3VjaHNwaW4nKTsgIC8vIGFuZHJvaWQgNCB3b3JrYXJvdW5kXHJcblxyXG4gICAgICAgICAgaWYgKG9yaWdpbmFsaW5wdXQuaXMoJzpkaXNhYmxlZCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBkb3duT25jZSgpO1xyXG4gICAgICAgICAgc3RhcnREb3duU3BpbigpO1xyXG5cclxuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZWxlbWVudHMuZG93bi5vbigndG91Y2hzdGFydC50b3VjaHNwaW4nLCBmdW5jdGlvbihldikge1xyXG4gICAgICAgICAgZWxlbWVudHMuZG93bi5vZmYoJ21vdXNlZG93bi50b3VjaHNwaW4nKTsgIC8vIGFuZHJvaWQgNCB3b3JrYXJvdW5kXHJcblxyXG4gICAgICAgICAgaWYgKG9yaWdpbmFsaW5wdXQuaXMoJzpkaXNhYmxlZCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBkb3duT25jZSgpO1xyXG4gICAgICAgICAgc3RhcnREb3duU3BpbigpO1xyXG5cclxuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZWxlbWVudHMudXAub24oJ21vdXNlZG93bi50b3VjaHNwaW4nLCBmdW5jdGlvbihldikge1xyXG4gICAgICAgICAgZWxlbWVudHMudXAub2ZmKCd0b3VjaHN0YXJ0LnRvdWNoc3BpbicpOyAgLy8gYW5kcm9pZCA0IHdvcmthcm91bmRcclxuXHJcbiAgICAgICAgICBpZiAob3JpZ2luYWxpbnB1dC5pcygnOmRpc2FibGVkJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHVwT25jZSgpO1xyXG4gICAgICAgICAgc3RhcnRVcFNwaW4oKTtcclxuXHJcbiAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGVsZW1lbnRzLnVwLm9uKCd0b3VjaHN0YXJ0LnRvdWNoc3BpbicsIGZ1bmN0aW9uKGV2KSB7XHJcbiAgICAgICAgICBlbGVtZW50cy51cC5vZmYoJ21vdXNlZG93bi50b3VjaHNwaW4nKTsgIC8vIGFuZHJvaWQgNCB3b3JrYXJvdW5kXHJcblxyXG4gICAgICAgICAgaWYgKG9yaWdpbmFsaW5wdXQuaXMoJzpkaXNhYmxlZCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB1cE9uY2UoKTtcclxuICAgICAgICAgIHN0YXJ0VXBTcGluKCk7XHJcblxyXG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBlbGVtZW50cy51cC5vbignbW91c2V1cC50b3VjaHNwaW4gbW91c2VvdXQudG91Y2hzcGluIHRvdWNobGVhdmUudG91Y2hzcGluIHRvdWNoZW5kLnRvdWNoc3BpbiB0b3VjaGNhbmNlbC50b3VjaHNwaW4nLCBmdW5jdGlvbihldikge1xyXG4gICAgICAgICAgaWYgKCFzcGlubmluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICBzdG9wU3BpbigpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBlbGVtZW50cy5kb3duLm9uKCdtb3VzZXVwLnRvdWNoc3BpbiBtb3VzZW91dC50b3VjaHNwaW4gdG91Y2hsZWF2ZS50b3VjaHNwaW4gdG91Y2hlbmQudG91Y2hzcGluIHRvdWNoY2FuY2VsLnRvdWNoc3BpbicsIGZ1bmN0aW9uKGV2KSB7XHJcbiAgICAgICAgICBpZiAoIXNwaW5uaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgIHN0b3BTcGluKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGVsZW1lbnRzLmRvd24ub24oJ21vdXNlbW92ZS50b3VjaHNwaW4gdG91Y2htb3ZlLnRvdWNoc3BpbicsIGZ1bmN0aW9uKGV2KSB7XHJcbiAgICAgICAgICBpZiAoIXNwaW5uaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGVsZW1lbnRzLnVwLm9uKCdtb3VzZW1vdmUudG91Y2hzcGluIHRvdWNobW92ZS50b3VjaHNwaW4nLCBmdW5jdGlvbihldikge1xyXG4gICAgICAgICAgaWYgKCFzcGlubmluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBvcmlnaW5hbGlucHV0Lm9uKCdtb3VzZXdoZWVsLnRvdWNoc3BpbiBET01Nb3VzZVNjcm9sbC50b3VjaHNwaW4nLCBmdW5jdGlvbihldikge1xyXG4gICAgICAgICAgaWYgKCFzZXR0aW5ncy5tb3VzZXdoZWVsIHx8ICFvcmlnaW5hbGlucHV0LmlzKCc6Zm9jdXMnKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdmFyIGRlbHRhID0gZXYub3JpZ2luYWxFdmVudC53aGVlbERlbHRhIHx8IC1ldi5vcmlnaW5hbEV2ZW50LmRlbHRhWSB8fCAtZXYub3JpZ2luYWxFdmVudC5kZXRhaWw7XHJcblxyXG4gICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgIGlmIChkZWx0YSA8IDApIHtcclxuICAgICAgICAgICAgZG93bk9uY2UoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB1cE9uY2UoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gX2JpbmRFdmVudHNJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgb3JpZ2luYWxpbnB1dC5vbigndG91Y2hzcGluLmRlc3Ryb3knLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIF9kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG9yaWdpbmFsaW5wdXQub24oJ3RvdWNoc3Bpbi51cG9uY2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHN0b3BTcGluKCk7XHJcbiAgICAgICAgICB1cE9uY2UoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgb3JpZ2luYWxpbnB1dC5vbigndG91Y2hzcGluLmRvd25vbmNlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBzdG9wU3BpbigpO1xyXG4gICAgICAgICAgZG93bk9uY2UoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgb3JpZ2luYWxpbnB1dC5vbigndG91Y2hzcGluLnN0YXJ0dXBzcGluJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBzdGFydFVwU3BpbigpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBvcmlnaW5hbGlucHV0Lm9uKCd0b3VjaHNwaW4uc3RhcnRkb3duc3BpbicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgc3RhcnREb3duU3BpbigpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBvcmlnaW5hbGlucHV0Lm9uKCd0b3VjaHNwaW4uc3RvcHNwaW4nLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHN0b3BTcGluKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG9yaWdpbmFsaW5wdXQub24oJ3RvdWNoc3Bpbi51cGRhdGVzZXR0aW5ncycsIGZ1bmN0aW9uKGUsIG5ld3NldHRpbmdzKSB7XHJcbiAgICAgICAgICBjaGFuZ2VTZXR0aW5ncyhuZXdzZXR0aW5ncyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIF9mb3JjZXN0ZXBkaXZpc2liaWxpdHkodmFsdWUpIHtcclxuICAgICAgICBzd2l0Y2ggKHNldHRpbmdzLmZvcmNlc3RlcGRpdmlzaWJpbGl0eSkge1xyXG4gICAgICAgICAgY2FzZSAncm91bmQnOlxyXG4gICAgICAgICAgICByZXR1cm4gKE1hdGgucm91bmQodmFsdWUgLyBzZXR0aW5ncy5zdGVwKSAqIHNldHRpbmdzLnN0ZXApLnRvRml4ZWQoc2V0dGluZ3MuZGVjaW1hbHMpO1xyXG4gICAgICAgICAgY2FzZSAnZmxvb3InOlxyXG4gICAgICAgICAgICByZXR1cm4gKE1hdGguZmxvb3IodmFsdWUgLyBzZXR0aW5ncy5zdGVwKSAqIHNldHRpbmdzLnN0ZXApLnRvRml4ZWQoc2V0dGluZ3MuZGVjaW1hbHMpO1xyXG4gICAgICAgICAgY2FzZSAnY2VpbCc6XHJcbiAgICAgICAgICAgIHJldHVybiAoTWF0aC5jZWlsKHZhbHVlIC8gc2V0dGluZ3Muc3RlcCkgKiBzZXR0aW5ncy5zdGVwKS50b0ZpeGVkKHNldHRpbmdzLmRlY2ltYWxzKTtcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b0ZpeGVkKHNldHRpbmdzLmRlY2ltYWxzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIF9jaGVja1ZhbHVlKCkge1xyXG4gICAgICAgIHZhciB2YWwsIHBhcnNlZHZhbCwgcmV0dXJudmFsO1xyXG5cclxuICAgICAgICB2YWwgPSBzZXR0aW5ncy5jYWxsYmFja19iZWZvcmVfY2FsY3VsYXRpb24ob3JpZ2luYWxpbnB1dC52YWwoKSk7XHJcblxyXG4gICAgICAgIGlmICh2YWwgPT09ICcnKSB7XHJcbiAgICAgICAgICBpZiAoc2V0dGluZ3MucmVwbGFjZW1lbnR2YWwgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIG9yaWdpbmFsaW5wdXQudmFsKHNldHRpbmdzLnJlcGxhY2VtZW50dmFsKTtcclxuICAgICAgICAgICAgb3JpZ2luYWxpbnB1dC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXR0aW5ncy5kZWNpbWFscyA+IDAgJiYgdmFsID09PSAnLicpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhcnNlZHZhbCA9IHBhcnNlRmxvYXQodmFsKTtcclxuXHJcbiAgICAgICAgaWYgKGlzTmFOKHBhcnNlZHZhbCkpIHtcclxuICAgICAgICAgIGlmIChzZXR0aW5ncy5yZXBsYWNlbWVudHZhbCAhPT0gJycpIHtcclxuICAgICAgICAgICAgcGFyc2VkdmFsID0gc2V0dGluZ3MucmVwbGFjZW1lbnR2YWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcGFyc2VkdmFsID0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybnZhbCA9IHBhcnNlZHZhbDtcclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZHZhbC50b1N0cmluZygpICE9PSB2YWwpIHtcclxuICAgICAgICAgIHJldHVybnZhbCA9IHBhcnNlZHZhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgoc2V0dGluZ3MubWluICE9PSBudWxsKSAmJiAocGFyc2VkdmFsIDwgc2V0dGluZ3MubWluKSkge1xyXG4gICAgICAgICAgcmV0dXJudmFsID0gc2V0dGluZ3MubWluO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKChzZXR0aW5ncy5tYXggIT09IG51bGwpICYmIChwYXJzZWR2YWwgPiBzZXR0aW5ncy5tYXgpKSB7XHJcbiAgICAgICAgICByZXR1cm52YWwgPSBzZXR0aW5ncy5tYXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm52YWwgPSBfZm9yY2VzdGVwZGl2aXNpYmlsaXR5KHJldHVybnZhbCk7XHJcblxyXG4gICAgICAgIGlmIChOdW1iZXIodmFsKS50b1N0cmluZygpICE9PSByZXR1cm52YWwudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgb3JpZ2luYWxpbnB1dC52YWwocmV0dXJudmFsKTtcclxuICAgICAgICAgIG9yaWdpbmFsaW5wdXQudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBfZ2V0Qm9vc3RlZFN0ZXAoKSB7XHJcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5ib29zdGVyKSB7XHJcbiAgICAgICAgICByZXR1cm4gc2V0dGluZ3Muc3RlcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB2YXIgYm9vc3RlZCA9IE1hdGgucG93KDIsIE1hdGguZmxvb3Ioc3BpbmNvdW50IC8gc2V0dGluZ3MuYm9vc3RhdCkpICogc2V0dGluZ3Muc3RlcDtcclxuXHJcbiAgICAgICAgICBpZiAoc2V0dGluZ3MubWF4Ym9vc3RlZHN0ZXApIHtcclxuICAgICAgICAgICAgaWYgKGJvb3N0ZWQgPiBzZXR0aW5ncy5tYXhib29zdGVkc3RlcCkge1xyXG4gICAgICAgICAgICAgIGJvb3N0ZWQgPSBzZXR0aW5ncy5tYXhib29zdGVkc3RlcDtcclxuICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgucm91bmQoKHZhbHVlIC8gYm9vc3RlZCkpICogYm9vc3RlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBNYXRoLm1heChzZXR0aW5ncy5zdGVwLCBib29zdGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIHZhbHVlSWZJc05hTigpIHtcclxuICAgICAgICBpZih0eXBlb2Yoc2V0dGluZ3MuZmlyc3RjbGlja3ZhbHVlaWZlbXB0eSkgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICByZXR1cm4gc2V0dGluZ3MuZmlyc3RjbGlja3ZhbHVlaWZlbXB0eTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIChzZXR0aW5ncy5taW4gKyBzZXR0aW5ncy5tYXgpIC8gMjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIHVwT25jZSgpIHtcclxuICAgICAgICBfY2hlY2tWYWx1ZSgpO1xyXG5cclxuICAgICAgICB2YWx1ZSA9IHBhcnNlRmxvYXQoc2V0dGluZ3MuY2FsbGJhY2tfYmVmb3JlX2NhbGN1bGF0aW9uKGVsZW1lbnRzLmlucHV0LnZhbCgpKSk7XHJcblxyXG4gICAgICAgIHZhciBpbml0dmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB2YXIgYm9vc3RlZHN0ZXA7XHJcblxyXG4gICAgICAgIGlmIChpc05hTih2YWx1ZSkpIHtcclxuICAgICAgICAgIHZhbHVlID0gdmFsdWVJZklzTmFOKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGJvb3N0ZWRzdGVwID0gX2dldEJvb3N0ZWRTdGVwKCk7XHJcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlICsgYm9vc3RlZHN0ZXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoKHNldHRpbmdzLm1heCAhPT0gbnVsbCkgJiYgKHZhbHVlID4gc2V0dGluZ3MubWF4KSkge1xyXG4gICAgICAgICAgdmFsdWUgPSBzZXR0aW5ncy5tYXg7XHJcbiAgICAgICAgICBvcmlnaW5hbGlucHV0LnRyaWdnZXIoJ3RvdWNoc3Bpbi5vbi5tYXgnKTtcclxuICAgICAgICAgIHN0b3BTcGluKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVtZW50cy5pbnB1dC52YWwoc2V0dGluZ3MuY2FsbGJhY2tfYWZ0ZXJfY2FsY3VsYXRpb24oTnVtYmVyKHZhbHVlKS50b0ZpeGVkKHNldHRpbmdzLmRlY2ltYWxzKSkpO1xyXG5cclxuICAgICAgICBpZiAoaW5pdHZhbHVlICE9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgb3JpZ2luYWxpbnB1dC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIGRvd25PbmNlKCkge1xyXG4gICAgICAgIF9jaGVja1ZhbHVlKCk7XHJcblxyXG4gICAgICAgIHZhbHVlID0gcGFyc2VGbG9hdChzZXR0aW5ncy5jYWxsYmFja19iZWZvcmVfY2FsY3VsYXRpb24oZWxlbWVudHMuaW5wdXQudmFsKCkpKTtcclxuXHJcbiAgICAgICAgdmFyIGluaXR2YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHZhciBib29zdGVkc3RlcDtcclxuXHJcbiAgICAgICAgaWYgKGlzTmFOKHZhbHVlKSkge1xyXG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZUlmSXNOYU4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYm9vc3RlZHN0ZXAgPSBfZ2V0Qm9vc3RlZFN0ZXAoKTtcclxuICAgICAgICAgIHZhbHVlID0gdmFsdWUgLSBib29zdGVkc3RlcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgoc2V0dGluZ3MubWluICE9PSBudWxsKSAmJiAodmFsdWUgPCBzZXR0aW5ncy5taW4pKSB7XHJcbiAgICAgICAgICB2YWx1ZSA9IHNldHRpbmdzLm1pbjtcclxuICAgICAgICAgIG9yaWdpbmFsaW5wdXQudHJpZ2dlcigndG91Y2hzcGluLm9uLm1pbicpO1xyXG4gICAgICAgICAgc3RvcFNwaW4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsZW1lbnRzLmlucHV0LnZhbChzZXR0aW5ncy5jYWxsYmFja19hZnRlcl9jYWxjdWxhdGlvbihOdW1iZXIodmFsdWUpLnRvRml4ZWQoc2V0dGluZ3MuZGVjaW1hbHMpKSk7XHJcblxyXG4gICAgICAgIGlmIChpbml0dmFsdWUgIT09IHZhbHVlKSB7XHJcbiAgICAgICAgICBvcmlnaW5hbGlucHV0LnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gc3RhcnREb3duU3BpbigpIHtcclxuICAgICAgICBzdG9wU3BpbigpO1xyXG5cclxuICAgICAgICBzcGluY291bnQgPSAwO1xyXG4gICAgICAgIHNwaW5uaW5nID0gJ2Rvd24nO1xyXG5cclxuICAgICAgICBvcmlnaW5hbGlucHV0LnRyaWdnZXIoJ3RvdWNoc3Bpbi5vbi5zdGFydHNwaW4nKTtcclxuICAgICAgICBvcmlnaW5hbGlucHV0LnRyaWdnZXIoJ3RvdWNoc3Bpbi5vbi5zdGFydGRvd25zcGluJyk7XHJcblxyXG4gICAgICAgIGRvd25EZWxheVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgZG93blNwaW5UaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzcGluY291bnQrKztcclxuICAgICAgICAgICAgZG93bk9uY2UoKTtcclxuICAgICAgICAgIH0sIHNldHRpbmdzLnN0ZXBpbnRlcnZhbCk7XHJcbiAgICAgICAgfSwgc2V0dGluZ3Muc3RlcGludGVydmFsZGVsYXkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBzdGFydFVwU3BpbigpIHtcclxuICAgICAgICBzdG9wU3BpbigpO1xyXG5cclxuICAgICAgICBzcGluY291bnQgPSAwO1xyXG4gICAgICAgIHNwaW5uaW5nID0gJ3VwJztcclxuXHJcbiAgICAgICAgb3JpZ2luYWxpbnB1dC50cmlnZ2VyKCd0b3VjaHNwaW4ub24uc3RhcnRzcGluJyk7XHJcbiAgICAgICAgb3JpZ2luYWxpbnB1dC50cmlnZ2VyKCd0b3VjaHNwaW4ub24uc3RhcnR1cHNwaW4nKTtcclxuXHJcbiAgICAgICAgdXBEZWxheVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdXBTcGluVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc3BpbmNvdW50Kys7XHJcbiAgICAgICAgICAgIHVwT25jZSgpO1xyXG4gICAgICAgICAgfSwgc2V0dGluZ3Muc3RlcGludGVydmFsKTtcclxuICAgICAgICB9LCBzZXR0aW5ncy5zdGVwaW50ZXJ2YWxkZWxheSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIHN0b3BTcGluKCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChkb3duRGVsYXlUaW1lb3V0KTtcclxuICAgICAgICBjbGVhclRpbWVvdXQodXBEZWxheVRpbWVvdXQpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZG93blNwaW5UaW1lcik7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh1cFNwaW5UaW1lcik7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoc3Bpbm5pbmcpIHtcclxuICAgICAgICAgIGNhc2UgJ3VwJzpcclxuICAgICAgICAgICAgb3JpZ2luYWxpbnB1dC50cmlnZ2VyKCd0b3VjaHNwaW4ub24uc3RvcHVwc3BpbicpO1xyXG4gICAgICAgICAgICBvcmlnaW5hbGlucHV0LnRyaWdnZXIoJ3RvdWNoc3Bpbi5vbi5zdG9wc3BpbicpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2Rvd24nOlxyXG4gICAgICAgICAgICBvcmlnaW5hbGlucHV0LnRyaWdnZXIoJ3RvdWNoc3Bpbi5vbi5zdG9wZG93bnNwaW4nKTtcclxuICAgICAgICAgICAgb3JpZ2luYWxpbnB1dC50cmlnZ2VyKCd0b3VjaHNwaW4ub24uc3RvcHNwaW4nKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGluY291bnQgPSAwO1xyXG4gICAgICAgIHNwaW5uaW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfTtcclxuXHJcbn0pKTtcclxuIl0sIm5hbWVzIjpbImZhY3RvcnkiLCJkZWZpbmUiLCJhbWQiLCJtb2R1bGUiLCJleHBvcnRzIiwicm9vdCIsImpRdWVyeSIsInVuZGVmaW5lZCIsIndpbmRvdyIsInJlcXVpcmUiLCIkIiwiX2N1cnJlbnRTcGlubmVySWQiLCJmbiIsIlRvdWNoU3BpbiIsIm9wdGlvbnMiLCJkZWZhdWx0cyIsIm1pbiIsIm1heCIsImluaXR2YWwiLCJyZXBsYWNlbWVudHZhbCIsImZpcnN0Y2xpY2t2YWx1ZWlmZW1wdHkiLCJzdGVwIiwiZGVjaW1hbHMiLCJzdGVwaW50ZXJ2YWwiLCJmb3JjZXN0ZXBkaXZpc2liaWxpdHkiLCJzdGVwaW50ZXJ2YWxkZWxheSIsInZlcnRpY2FsYnV0dG9ucyIsInZlcnRpY2FsdXAiLCJ2ZXJ0aWNhbGRvd24iLCJ2ZXJ0aWNhbHVwY2xhc3MiLCJ2ZXJ0aWNhbGRvd25jbGFzcyIsInByZWZpeCIsInBvc3RmaXgiLCJwcmVmaXhfZXh0cmFjbGFzcyIsInBvc3RmaXhfZXh0cmFjbGFzcyIsImJvb3N0ZXIiLCJib29zdGF0IiwibWF4Ym9vc3RlZHN0ZXAiLCJtb3VzZXdoZWVsIiwiYnV0dG9uZG93bl9jbGFzcyIsImJ1dHRvbnVwX2NsYXNzIiwiYnV0dG9uZG93bl90eHQiLCJidXR0b251cF90eHQiLCJjYWxsYmFja19iZWZvcmVfY2FsY3VsYXRpb24iLCJ2YWx1ZSIsImNhbGxiYWNrX2FmdGVyX2NhbGN1bGF0aW9uIiwiYXR0cmlidXRlTWFwIiwiZWFjaCIsInNldHRpbmdzIiwib3JpZ2luYWxpbnB1dCIsIm9yaWdpbmFsaW5wdXRfZGF0YSIsImRhdGEiLCJfZGV0YWNoZWRfcHJlZml4IiwiX2RldGFjaGVkX3Bvc3RmaXgiLCJjb250YWluZXIiLCJlbGVtZW50cyIsImRvd25TcGluVGltZXIiLCJ1cFNwaW5UaW1lciIsImRvd25EZWxheVRpbWVvdXQiLCJ1cERlbGF5VGltZW91dCIsInNwaW5jb3VudCIsInNwaW5uaW5nIiwiaW5pdCIsImlzIiwiY29uc29sZSIsImxvZyIsIl9pbml0U2V0dGluZ3MiLCJfc2V0SW5pdHZhbCIsIl9jaGVja1ZhbHVlIiwiX2J1aWxkSHRtbCIsIl9pbml0RWxlbWVudHMiLCJfaGlkZUVtcHR5UHJlZml4UG9zdGZpeCIsIl9iaW5kRXZlbnRzIiwiX2JpbmRFdmVudHNJbnRlcmZhY2UiLCJ2YWwiLCJjaGFuZ2VTZXR0aW5ncyIsIm5ld3NldHRpbmdzIiwiX3VwZGF0ZVNldHRpbmdzIiwiaW5wdXQiLCJOdW1iZXIiLCJ0b0ZpeGVkIiwiZXh0ZW5kIiwiX3BhcnNlQXR0cmlidXRlcyIsImtleSIsImF0dHJOYW1lIiwiX2Rlc3Ryb3kiLCIkcGFyZW50IiwicGFyZW50Iiwic3RvcFNwaW4iLCJvZmYiLCJoYXNDbGFzcyIsInNpYmxpbmdzIiwicmVtb3ZlIiwidW53cmFwIiwicmVtb3ZlQ2xhc3MiLCIkcG9zdGZpeCIsImZpbmQiLCJsZW5ndGgiLCJpbnNlcnRBZnRlciIsInRleHQiLCIkcHJlZml4IiwiaW5zZXJ0QmVmb3JlIiwicGFyZW50ZWxlbWVudCIsImFkZENsYXNzIiwiX2FkdmFuY2VJbnB1dEdyb3VwIiwiX2J1aWxkSW5wdXRHcm91cCIsInByZXYiLCJuZXh0IiwiZG93bmh0bWwiLCJ1cGh0bWwiLCJwcmVmaXhodG1sIiwicG9zdGZpeGh0bWwiLCJhcHBlbmQiLCJwcmVwZW5kIiwiaHRtbCIsImlucHV0R3JvdXBTaXplIiwiYWZ0ZXIiLCJkb3duIiwidXAiLCJkZXRhY2giLCJvbiIsImV2IiwiY29kZSIsImtleUNvZGUiLCJ3aGljaCIsInVwT25jZSIsInN0YXJ0VXBTcGluIiwicHJldmVudERlZmF1bHQiLCJkb3duT25jZSIsInN0YXJ0RG93blNwaW4iLCJzdG9wUHJvcGFnYXRpb24iLCJkZWx0YSIsIm9yaWdpbmFsRXZlbnQiLCJ3aGVlbERlbHRhIiwiZGVsdGFZIiwiZGV0YWlsIiwiZSIsIl9mb3JjZXN0ZXBkaXZpc2liaWxpdHkiLCJNYXRoIiwicm91bmQiLCJmbG9vciIsImNlaWwiLCJwYXJzZWR2YWwiLCJyZXR1cm52YWwiLCJ0cmlnZ2VyIiwicGFyc2VGbG9hdCIsImlzTmFOIiwidG9TdHJpbmciLCJfZ2V0Qm9vc3RlZFN0ZXAiLCJib29zdGVkIiwicG93IiwidmFsdWVJZklzTmFOIiwiaW5pdHZhbHVlIiwiYm9vc3RlZHN0ZXAiLCJzZXRUaW1lb3V0Iiwic2V0SW50ZXJ2YWwiLCJjbGVhclRpbWVvdXQiLCJjbGVhckludGVydmFsIl0sInNvdXJjZVJvb3QiOiIifQ==