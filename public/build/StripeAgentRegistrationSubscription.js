(self["webpackChunk"] = self["webpackChunk"] || []).push([["StripeAgentRegistrationSubscription"],{

/***/ "./assets/js/stripe/stripe-agent-registration-subscription.js":
/*!********************************************************************!*\
  !*** ./assets/js/stripe/stripe-agent-registration-subscription.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

$(function () {
  // Déclaration des variables/constantes
  var agent_accountStatus = $('input#agent_accountStatus').val();
  var stripePriceId = $('input#stripe_stripePriceId').val();
  var stripePriceName = $('input#stripe_stripePriceName').val();
  var planSubscriptionId = $('input#planSubscriptionId').val();
  var sessionAgentId = $('input#sessionAgentId').val(); // Contenant l'id de l'agent (USER)

  var nameHolder = $('input#stripe_nameHolder').val();
  var emailHolder = $('input#stripe_emailHolder').val();
  var postalCodeHolder = $('input#stripe_PostalCodeHolder').val();
  var stripeToken = $('input#stripe_stripeToken').val();
  var clientSecret = $('input#stripe_clientSecret').val();
  var urlStripeSubscription = $('input#stripe_url_stripeSubscription').val();
  var urlSuccessTransaction = $('input#stripe_urlSuccessTransaction').val();
  var stripe_urlErrorTransaction = $('input#stripe_urlErrorTransaction').val();
  var stripe_defaultButton = $('input#stripe_defaultButton').val();
  var clientSecret = $('input#stripe_clientSecret').val();
  var stripe = Stripe(stripeToken);
  var elements = stripe.elements();
  var displayError = $('#card-errors');
  var styleCustom = {
    base: {
      fontSize: '16px',
      fontWeight: '500',
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      color: '#2532d'
    },
    invalid: {
      iconColor: '#FFC7EE',
      color: '#FFC7EE'
    }
  }; // Monter notre form à l'objet Stripe 

  var card = elements.create('card', {
    style: styleCustom
  });
  card.update({
    value: {
      postalCode: postalCodeHolder
    }
  });
  card.mount("#card-elements"); // Message Error 

  card.on('change', function (event) {
    if (event.error) {
      displayError.addClass('alert alert-danger');
      displayError.text(event.error.message);
    } else {
      displayError.removeClass('alert alert-danger');
      displayError.text('');
    }
  });
  var cardButton = $('#card-button-submit');
  var form = $('#subscription-payment-form');
  form.on('submit', function (event) {
    event.preventDefault();
    cardButton.find('span.loader-submit').html('<div class="spinner-border text-white" role="status"><span class="visually-hidden">Loading...</span></div>');
    cardButton.attr('disabled', true);
    stripe.handleCardPayment(clientSecret, card, {
      payment_method_data: {
        billing_details: {
          name: nameHolder,
          email: emailHolder
        }
      }
    }).then(function (result) {
      if (result.error) {
        displayError.addClass('alert alert-danger');
        displayError.text(result.error.message);
        cardButton.find('span.loader-submit').html('');
        cardButton.find('span.label-button').html(stripe_defaultButton);
        cardButton.attr('disabled', false);
      } else if ('paymentIntent' in result) {
        cardButton.attr('disabled', true);
        createPaymentMethod(card);
      }
    });
  });

  function createPaymentMethod(cardElement) {
    return stripe.createPaymentMethod({
      type: 'card',
      card: cardElement
    }).then(function (result) {
      if (result.error) {
        displayError(error);
      } else {
        createSubscription({
          paymentMethodId: result.paymentMethod.id
        });
      }
    });
  }

  function createSubscription(_ref) {
    var paymentMethodId = _ref.paymentMethodId;
    var data = {
      "agent_accountStatus": agent_accountStatus,
      "sessionAgentId": sessionAgentId,
      "stripePriceId": stripePriceId,
      "paymentMethodId": paymentMethodId,
      "stripePriceName": stripePriceName,
      "planSubscriptionId": planSubscriptionId
    };
    return $.ajax({
      type: 'POST',
      async: false,
      url: urlStripeSubscription,
      data: JSON.stringify({
        data: data
      }),
      dataType: 'json',
      headers: {
        'Content-type': 'application/json'
      },
      success: function success(responseAjax) {
        if (responseAjax.stripe_subscription_plan === 'successfully') {
          document.location.href = urlSuccessTransaction + '/?stripe_subscription_plan=successfully';
        } else if (responseAjax.stripe_subscription_plan === 'error' && responseAjax.cause === 'different_agentId') {
          document.location.href = stripe_urlErrorTransaction + '/?stripe_subscription_plan=error_different_agent_id';
        }
      },
      error: function (_error) {
        function error(_x) {
          return _error.apply(this, arguments);
        }

        error.toString = function () {
          return _error.toString();
        };

        return error;
      }(function (error) {
        console.log('error', error);
        cardButton.find('span.loader-submit').html('');
        cardButton.find('span.label-button').html(stripe_defaultButton);
        cardButton.attr('disabled', false);
        displayError.addClass('alert alert-danger');
        displayError.text('Une erreur s\'est survenue, veuillez réessayer !');
      })
    });
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-string.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

var String = global.String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var un$DateToString = uncurryThis(DatePrototype[TO_STRING]);
var getTime = uncurryThis(DatePrototype.getTime);

// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (String(new Date(NaN)) != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime(this);
    // eslint-disable-next-line no-self-compare -- NaN check
    return value === value ? un$DateToString(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var PROPER_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").PROPER);
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var $toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var n$ToString = RegExpPrototype[TO_STRING];
var getFlags = uncurryThis(regExpFlags);

var NOT_GENERIC = fails(function () { return n$ToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && n$ToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = $toString(R.source);
    var rf = R.flags;
    var f = $toString(rf === undefined && isPrototypeOf(RegExpPrototype, R) && !('flags' in RegExpPrototype) ? getFlags(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-464164"], () => (__webpack_exec__("./assets/js/stripe/stripe-agent-registration-subscription.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUJBQU8sQ0FBQyxxRUFBb0I7QUFDeEMsa0JBQWtCLG1CQUFPLENBQUMsbUZBQTJCOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0MseUJBQXlCLHlCQUF5QixjQUFjO0FBQ3RHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxJQUFJLGNBQWM7QUFDckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3RyaXBlL3N0cmlwZS1hZ2VudC1yZWdpc3RyYXRpb24tc3Vic2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5kYXRlLnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC50by1zdHJpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpIHtcclxuICAgIC8vIETDqWNsYXJhdGlvbiBkZXMgdmFyaWFibGVzL2NvbnN0YW50ZXNcclxuICAgIHZhciBhZ2VudF9hY2NvdW50U3RhdHVzID0gJCgnaW5wdXQjYWdlbnRfYWNjb3VudFN0YXR1cycpLnZhbCgpO1xyXG4gICAgdmFyIHN0cmlwZVByaWNlSWQgPSAkKCdpbnB1dCNzdHJpcGVfc3RyaXBlUHJpY2VJZCcpLnZhbCgpO1xyXG4gICAgdmFyIHN0cmlwZVByaWNlTmFtZSA9ICQoJ2lucHV0I3N0cmlwZV9zdHJpcGVQcmljZU5hbWUnKS52YWwoKTtcclxuICAgIHZhciBwbGFuU3Vic2NyaXB0aW9uSWQgPSAkKCdpbnB1dCNwbGFuU3Vic2NyaXB0aW9uSWQnKS52YWwoKTtcclxuICAgIHZhciBzZXNzaW9uQWdlbnRJZCA9ICQoJ2lucHV0I3Nlc3Npb25BZ2VudElkJykudmFsKCk7IC8vIENvbnRlbmFudCBsJ2lkIGRlIGwnYWdlbnQgKFVTRVIpXHJcbiAgICB2YXIgbmFtZUhvbGRlciA9ICQoJ2lucHV0I3N0cmlwZV9uYW1lSG9sZGVyJykudmFsKCk7XHJcbiAgICB2YXIgZW1haWxIb2xkZXIgPSAkKCdpbnB1dCNzdHJpcGVfZW1haWxIb2xkZXInKS52YWwoKTtcclxuICAgIHZhciBwb3N0YWxDb2RlSG9sZGVyID0gJCgnaW5wdXQjc3RyaXBlX1Bvc3RhbENvZGVIb2xkZXInKS52YWwoKTtcclxuICAgIHZhciBzdHJpcGVUb2tlbiA9ICQoJ2lucHV0I3N0cmlwZV9zdHJpcGVUb2tlbicpLnZhbCgpO1xyXG4gICAgdmFyIGNsaWVudFNlY3JldCA9ICQoJ2lucHV0I3N0cmlwZV9jbGllbnRTZWNyZXQnKS52YWwoKTtcclxuICAgIGNvbnN0IHVybFN0cmlwZVN1YnNjcmlwdGlvbiA9ICQoJ2lucHV0I3N0cmlwZV91cmxfc3RyaXBlU3Vic2NyaXB0aW9uJykudmFsKCk7XHJcbiAgICBjb25zdCB1cmxTdWNjZXNzVHJhbnNhY3Rpb24gPSAkKCdpbnB1dCNzdHJpcGVfdXJsU3VjY2Vzc1RyYW5zYWN0aW9uJykudmFsKCk7XHJcbiAgICBjb25zdCBzdHJpcGVfdXJsRXJyb3JUcmFuc2FjdGlvbiA9ICQoJ2lucHV0I3N0cmlwZV91cmxFcnJvclRyYW5zYWN0aW9uJykudmFsKCk7XHJcbiAgICBjb25zdCBzdHJpcGVfZGVmYXVsdEJ1dHRvbiA9ICQoJ2lucHV0I3N0cmlwZV9kZWZhdWx0QnV0dG9uJykudmFsKCk7XHJcbiAgICBcclxuICAgIHZhciBjbGllbnRTZWNyZXQgPSAkKCdpbnB1dCNzdHJpcGVfY2xpZW50U2VjcmV0JykudmFsKCk7XHJcbiAgICBcclxuICAgIHZhciBzdHJpcGUgPSBTdHJpcGUoc3RyaXBlVG9rZW4pO1xyXG4gICAgdmFyIGVsZW1lbnRzID0gc3RyaXBlLmVsZW1lbnRzKCk7XHJcbiAgICB2YXIgZGlzcGxheUVycm9yID0gJCgnI2NhcmQtZXJyb3JzJyk7XHJcblxyXG4gICAgdmFyIHN0eWxlQ3VzdG9tID17XHJcbiAgICAgICAgYmFzZToge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiAnNTAwJyxcclxuICAgICAgICAgICAgZm9udEZhbWlseTogJ1JvYm90bywgT3BlbiBTYW5zLCBTZWdvZSBVSSwgc2Fucy1zZXJpZicsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzI1MzJkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW52YWxpZDoge1xyXG4gICAgICAgICAgICBpY29uQ29sb3I6ICcjRkZDN0VFJyxcclxuICAgICAgICAgICAgY29sb3I6ICcjRkZDN0VFJyxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTW9udGVyIG5vdHJlIGZvcm0gw6AgbCdvYmpldCBTdHJpcGUgXHJcbiAgICB2YXIgY2FyZCA9IGVsZW1lbnRzLmNyZWF0ZSgnY2FyZCcsIHtzdHlsZTogc3R5bGVDdXN0b219KTtcclxuICAgIGNhcmQudXBkYXRlKHt2YWx1ZToge3Bvc3RhbENvZGU6IHBvc3RhbENvZGVIb2xkZXJ9fSk7XHJcblxyXG4gICAgY2FyZC5tb3VudChcIiNjYXJkLWVsZW1lbnRzXCIpO1xyXG5cclxuICAgIC8vIE1lc3NhZ2UgRXJyb3IgXHJcbiAgICBjYXJkLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQuZXJyb3IpIHtcclxuICAgICAgICAgICAgZGlzcGxheUVycm9yLmFkZENsYXNzKCdhbGVydCBhbGVydC1kYW5nZXInKTtcclxuICAgICAgICAgICAgZGlzcGxheUVycm9yLnRleHQoZXZlbnQuZXJyb3IubWVzc2FnZSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvci5yZW1vdmVDbGFzcygnYWxlcnQgYWxlcnQtZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvci50ZXh0KCcnKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgdmFyIGNhcmRCdXR0b24gPSAkKCcjY2FyZC1idXR0b24tc3VibWl0Jyk7XHJcbiAgICB2YXIgZm9ybSA9ICQoJyNzdWJzY3JpcHRpb24tcGF5bWVudC1mb3JtJyk7XHJcbiAgICBmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjYXJkQnV0dG9uLmZpbmQoJ3NwYW4ubG9hZGVyLXN1Ym1pdCcpLmh0bWwoJzxkaXYgY2xhc3M9XCJzcGlubmVyLWJvcmRlciB0ZXh0LXdoaXRlXCIgcm9sZT1cInN0YXR1c1wiPjxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+TG9hZGluZy4uLjwvc3Bhbj48L2Rpdj4nKTtcclxuICAgICAgICBjYXJkQnV0dG9uLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG5cclxuICAgICAgICBzdHJpcGUuaGFuZGxlQ2FyZFBheW1lbnQoXHJcbiAgICAgICAgICAgIGNsaWVudFNlY3JldCxcclxuICAgICAgICAgICAgY2FyZCxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF5bWVudF9tZXRob2RfZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGJpbGxpbmdfZGV0YWlsczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lIDogbmFtZUhvbGRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWwgOiBlbWFpbEhvbGRlclxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlFcnJvci5hZGRDbGFzcygnYWxlcnQgYWxlcnQtZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5RXJyb3IudGV4dChyZXN1bHQuZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBjYXJkQnV0dG9uLmZpbmQoJ3NwYW4ubG9hZGVyLXN1Ym1pdCcpLmh0bWwoJycpXHJcbiAgICAgICAgICAgICAgICBjYXJkQnV0dG9uLmZpbmQoJ3NwYW4ubGFiZWwtYnV0dG9uJykuaHRtbChzdHJpcGVfZGVmYXVsdEJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICBjYXJkQnV0dG9uLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZigncGF5bWVudEludGVudCcgaW4gcmVzdWx0KXtcclxuICAgICAgICAgICAgICAgIGNhcmRCdXR0b24uYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVQYXltZW50TWV0aG9kKGNhcmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkgIFxyXG4gICAgfSkgXHJcblxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVQYXltZW50TWV0aG9kKGNhcmRFbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHN0cmlwZVxyXG4gICAgICAgICAgICAuY3JlYXRlUGF5bWVudE1ldGhvZCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2FyZCcsXHJcbiAgICAgICAgICAgICAgICBjYXJkOiBjYXJkRWxlbWVudCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVN1YnNjcmlwdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RJZDogcmVzdWx0LnBheW1lbnRNZXRob2QuaWRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVN1YnNjcmlwdGlvbih7cGF5bWVudE1ldGhvZElkfSkge1xyXG4gICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICBcImFnZW50X2FjY291bnRTdGF0dXNcIjogYWdlbnRfYWNjb3VudFN0YXR1cyxcclxuICAgICAgICAgICAgXCJzZXNzaW9uQWdlbnRJZFwiOiBzZXNzaW9uQWdlbnRJZCxcclxuICAgICAgICAgICAgXCJzdHJpcGVQcmljZUlkXCI6IHN0cmlwZVByaWNlSWQsXHJcbiAgICAgICAgICAgIFwicGF5bWVudE1ldGhvZElkXCI6IHBheW1lbnRNZXRob2RJZCxcclxuICAgICAgICAgICAgXCJzdHJpcGVQcmljZU5hbWVcIjogc3RyaXBlUHJpY2VOYW1lLFxyXG4gICAgICAgICAgICBcInBsYW5TdWJzY3JpcHRpb25JZFwiOiBwbGFuU3Vic2NyaXB0aW9uSWRcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgYXN5bmM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdXJsOiB1cmxTdHJpcGVTdWJzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7ZGF0YX0pLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGUgIDogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyBcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyA6ICBmdW5jdGlvbihyZXNwb25zZUFqYXgpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZUFqYXguc3RyaXBlX3N1YnNjcmlwdGlvbl9wbGFuID09PSAnc3VjY2Vzc2Z1bGx5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gdXJsU3VjY2Vzc1RyYW5zYWN0aW9uKycvP3N0cmlwZV9zdWJzY3JpcHRpb25fcGxhbj1zdWNjZXNzZnVsbHknO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihyZXNwb25zZUFqYXguc3RyaXBlX3N1YnNjcmlwdGlvbl9wbGFuICA9PT0gJ2Vycm9yJyAmJiByZXNwb25zZUFqYXguY2F1c2UgPT09ICdkaWZmZXJlbnRfYWdlbnRJZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IHN0cmlwZV91cmxFcnJvclRyYW5zYWN0aW9uKycvP3N0cmlwZV9zdWJzY3JpcHRpb25fcGxhbj1lcnJvcl9kaWZmZXJlbnRfYWdlbnRfaWQnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmRCdXR0b24uZmluZCgnc3Bhbi5sb2FkZXItc3VibWl0JykuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZEJ1dHRvbi5maW5kKCdzcGFuLmxhYmVsLWJ1dHRvbicpLmh0bWwoc3RyaXBlX2RlZmF1bHRCdXR0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmRCdXR0b24uYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVycm9yLmFkZENsYXNzKCdhbGVydCBhbGVydC1kYW5nZXInKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RXJyb3IudGV4dCgnVW5lIGVycmV1ciBzXFwnZXN0IHN1cnZlbnVlLCB2ZXVpbGxleiByw6llc3NheWVyICEnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KSIsIid1c2Ugc3RyaWN0JztcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxuLy8gYFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NgIGdldHRlciBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXQtcmVnZXhwLnByb3RvdHlwZS5mbGFnc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0aGF0ID0gYW5PYmplY3QodGhpcyk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICBpZiAodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gIGlmICh0aGF0LmRvdEFsbCkgcmVzdWx0ICs9ICdzJztcbiAgaWYgKHRoYXQudW5pY29kZSkgcmVzdWx0ICs9ICd1JztcbiAgaWYgKHRoYXQuc3RpY2t5KSByZXN1bHQgKz0gJ3knO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG5cbnZhciBTdHJpbmcgPSBnbG9iYWwuU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoY2xhc3NvZihhcmd1bWVudCkgPT09ICdTeW1ib2wnKSB0aHJvdyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGEgU3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nJyk7XG4gIHJldHVybiBTdHJpbmcoYXJndW1lbnQpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmQ7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxudmFyIEZJTkQgPSAnZmluZCc7XG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xuXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYgKEZJTkQgaW4gW10pIEFycmF5KDEpW0ZJTkRdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB9LCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcyhGSU5EKTtcbiIsInZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xuXG52YXIgRGF0ZVByb3RvdHlwZSA9IERhdGUucHJvdG90eXBlO1xudmFyIElOVkFMSURfREFURSA9ICdJbnZhbGlkIERhdGUnO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgdW4kRGF0ZVRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRGF0ZVByb3RvdHlwZVtUT19TVFJJTkddKTtcbnZhciBnZXRUaW1lID0gdW5jdXJyeVRoaXMoRGF0ZVByb3RvdHlwZS5nZXRUaW1lKTtcblxuLy8gYERhdGUucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZGF0ZS5wcm90b3R5cGUudG9zdHJpbmdcbmlmIChTdHJpbmcobmV3IERhdGUoTmFOKSkgIT0gSU5WQUxJRF9EQVRFKSB7XG4gIHJlZGVmaW5lKERhdGVQcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIHZhbHVlID0gZ2V0VGltZSh0aGlzKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyB1biREYXRlVG9TdHJpbmcodGhpcykgOiBJTlZBTElEX0RBVEU7XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIFBST1BFUl9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5QUk9QRVI7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciAkdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciByZWdFeHBGbGFncyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZmxhZ3MnKTtcblxudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgUmVnRXhwUHJvdG90eXBlID0gUmVnRXhwLnByb3RvdHlwZTtcbnZhciBuJFRvU3RyaW5nID0gUmVnRXhwUHJvdG90eXBlW1RPX1NUUklOR107XG52YXIgZ2V0RmxhZ3MgPSB1bmN1cnJ5VGhpcyhyZWdFeHBGbGFncyk7XG5cbnZhciBOT1RfR0VORVJJQyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG4kVG9TdHJpbmcuY2FsbCh7IHNvdXJjZTogJ2EnLCBmbGFnczogJ2InIH0pICE9ICcvYS9iJzsgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxudmFyIElOQ09SUkVDVF9OQU1FID0gUFJPUEVSX0ZVTkNUSU9OX05BTUUgJiYgbiRUb1N0cmluZy5uYW1lICE9IFRPX1NUUklORztcblxuLy8gYFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLnRvc3RyaW5nXG5pZiAoTk9UX0dFTkVSSUMgfHwgSU5DT1JSRUNUX05BTUUpIHtcbiAgcmVkZWZpbmUoUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICB2YXIgUiA9IGFuT2JqZWN0KHRoaXMpO1xuICAgIHZhciBwID0gJHRvU3RyaW5nKFIuc291cmNlKTtcbiAgICB2YXIgcmYgPSBSLmZsYWdzO1xuICAgIHZhciBmID0gJHRvU3RyaW5nKHJmID09PSB1bmRlZmluZWQgJiYgaXNQcm90b3R5cGVPZihSZWdFeHBQcm90b3R5cGUsIFIpICYmICEoJ2ZsYWdzJyBpbiBSZWdFeHBQcm90b3R5cGUpID8gZ2V0RmxhZ3MoUikgOiByZik7XG4gICAgcmV0dXJuICcvJyArIHAgKyAnLycgKyBmO1xuICB9LCB7IHVuc2FmZTogdHJ1ZSB9KTtcbn1cbiJdLCJuYW1lcyI6WyIkIiwiYWdlbnRfYWNjb3VudFN0YXR1cyIsInZhbCIsInN0cmlwZVByaWNlSWQiLCJzdHJpcGVQcmljZU5hbWUiLCJwbGFuU3Vic2NyaXB0aW9uSWQiLCJzZXNzaW9uQWdlbnRJZCIsIm5hbWVIb2xkZXIiLCJlbWFpbEhvbGRlciIsInBvc3RhbENvZGVIb2xkZXIiLCJzdHJpcGVUb2tlbiIsImNsaWVudFNlY3JldCIsInVybFN0cmlwZVN1YnNjcmlwdGlvbiIsInVybFN1Y2Nlc3NUcmFuc2FjdGlvbiIsInN0cmlwZV91cmxFcnJvclRyYW5zYWN0aW9uIiwic3RyaXBlX2RlZmF1bHRCdXR0b24iLCJzdHJpcGUiLCJTdHJpcGUiLCJlbGVtZW50cyIsImRpc3BsYXlFcnJvciIsInN0eWxlQ3VzdG9tIiwiYmFzZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImZvbnRGYW1pbHkiLCJjb2xvciIsImludmFsaWQiLCJpY29uQ29sb3IiLCJjYXJkIiwiY3JlYXRlIiwic3R5bGUiLCJ1cGRhdGUiLCJ2YWx1ZSIsInBvc3RhbENvZGUiLCJtb3VudCIsIm9uIiwiZXZlbnQiLCJlcnJvciIsImFkZENsYXNzIiwidGV4dCIsIm1lc3NhZ2UiLCJyZW1vdmVDbGFzcyIsImNhcmRCdXR0b24iLCJmb3JtIiwicHJldmVudERlZmF1bHQiLCJmaW5kIiwiaHRtbCIsImF0dHIiLCJoYW5kbGVDYXJkUGF5bWVudCIsInBheW1lbnRfbWV0aG9kX2RhdGEiLCJiaWxsaW5nX2RldGFpbHMiLCJuYW1lIiwiZW1haWwiLCJ0aGVuIiwicmVzdWx0IiwiY3JlYXRlUGF5bWVudE1ldGhvZCIsImNhcmRFbGVtZW50IiwidHlwZSIsImNyZWF0ZVN1YnNjcmlwdGlvbiIsInBheW1lbnRNZXRob2RJZCIsInBheW1lbnRNZXRob2QiLCJpZCIsImRhdGEiLCJhamF4IiwiYXN5bmMiLCJ1cmwiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YVR5cGUiLCJoZWFkZXJzIiwic3VjY2VzcyIsInJlc3BvbnNlQWpheCIsInN0cmlwZV9zdWJzY3JpcHRpb25fcGxhbiIsImRvY3VtZW50IiwibG9jYXRpb24iLCJocmVmIiwiY2F1c2UiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==