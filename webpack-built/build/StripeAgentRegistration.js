(self["webpackChunk"] = self["webpackChunk"] || []).push([["StripeAgentRegistration"],{

/***/ "./assets/js/stripe/stripe-agent-registration.js":
/*!*******************************************************!*\
  !*** ./assets/js/stripe/stripe-agent-registration.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

$(function () {
  // Déclaration des variables/constantes
  var agent_accountStatus = $('input#agent_accountStatus').val();
  var sessionAgentId = $('input#sessionAgentId').val(); // Contenant l'id de l'agent (USER)

  var stripeToken = $('input#stripe_stripeToken').val();
  var clientSecret = $('input#stripe_clientSecret').val();
  var urlStripeCheckout = $('input#stripe_url_stripeCheckout').val();
  var urlSuccessTransaction = $('input#stripe_urlSuccessTransaction').val();
  var stripe_urlErrorTransaction = $('input#stripe_urlErrorTransaction').val();
  var stripe_defaultButton = $('input#stripe_defaultButton').val();
  var nameHolder = '';
  var emailHolder = '';
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
  var form = $('#single-payment-form');
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
        var data = {
          "paymentIntent": result.paymentIntent,
          "sessionAgentId": sessionAgentId,
          "agent_accountStatus": agent_accountStatus
        };
        $.ajax({
          type: "POST",
          url: urlStripeCheckout,
          data: data,
          success: function success(responseAjax) {
            if (responseAjax.stripe_checkout === 'successfully') {
              document.location.href = urlSuccessTransaction + '/?stripe_checkout=successfully';
            } else if (responseAjax.stripe_checkout === 'error' && responseAjax.cause === 'different_agentId') {
              document.location.href = stripe_urlErrorTransaction + '/?stripe_checkout=error_different_agent_id';
            }
          }
        });
      }
    });
  }); //Update Prenom et Email

  $('#inscription_agent_prenom').on('change', function () {
    nameHolder = $('#inscription_agent_prenom').val();
  });
  $('#inscription_agent_email').on('change', function () {
    emailHolder = $('#inscription_agent_email').val();
  });
});

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-464164"], () => (__webpack_exec__("./assets/js/stripe/stripe-agent-registration.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aXBlLWFnZW50LXJlZ2lzdHJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpIHtcclxuICAgIC8vIETDqWNsYXJhdGlvbiBkZXMgdmFyaWFibGVzL2NvbnN0YW50ZXNcclxuICAgIHZhciBhZ2VudF9hY2NvdW50U3RhdHVzID0gJCgnaW5wdXQjYWdlbnRfYWNjb3VudFN0YXR1cycpLnZhbCgpO1xyXG4gICAgdmFyIHNlc3Npb25BZ2VudElkID0gJCgnaW5wdXQjc2Vzc2lvbkFnZW50SWQnKS52YWwoKTsgLy8gQ29udGVuYW50IGwnaWQgZGUgbCdhZ2VudCAoVVNFUilcclxuICAgIHZhciBzdHJpcGVUb2tlbiA9ICQoJ2lucHV0I3N0cmlwZV9zdHJpcGVUb2tlbicpLnZhbCgpO1xyXG4gICAgdmFyIGNsaWVudFNlY3JldCA9ICQoJ2lucHV0I3N0cmlwZV9jbGllbnRTZWNyZXQnKS52YWwoKTtcclxuICAgIGNvbnN0IHVybFN0cmlwZUNoZWNrb3V0ID0gJCgnaW5wdXQjc3RyaXBlX3VybF9zdHJpcGVDaGVja291dCcpLnZhbCgpO1xyXG4gICAgY29uc3QgdXJsU3VjY2Vzc1RyYW5zYWN0aW9uID0gJCgnaW5wdXQjc3RyaXBlX3VybFN1Y2Nlc3NUcmFuc2FjdGlvbicpLnZhbCgpO1xyXG4gICAgY29uc3Qgc3RyaXBlX3VybEVycm9yVHJhbnNhY3Rpb24gPSAkKCdpbnB1dCNzdHJpcGVfdXJsRXJyb3JUcmFuc2FjdGlvbicpLnZhbCgpO1xyXG4gICAgY29uc3Qgc3RyaXBlX2RlZmF1bHRCdXR0b24gPSAkKCdpbnB1dCNzdHJpcGVfZGVmYXVsdEJ1dHRvbicpLnZhbCgpO1xyXG4gICAgXHJcblxyXG4gICAgdmFyIG5hbWVIb2xkZXIgPSAnJztcclxuICAgIHZhciBlbWFpbEhvbGRlciA9ICcnO1xyXG4gICAgXHJcbiAgICB2YXIgc3RyaXBlID0gU3RyaXBlKHN0cmlwZVRva2VuKTtcclxuICAgIHZhciBlbGVtZW50cyA9IHN0cmlwZS5lbGVtZW50cygpO1xyXG4gICAgdmFyIGRpc3BsYXlFcnJvciA9ICQoJyNjYXJkLWVycm9ycycpO1xyXG5cclxuICAgIHZhciBzdHlsZUN1c3RvbSA9e1xyXG4gICAgICAgIGJhc2U6IHtcclxuICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgICAgICAgICAgZm9udFdlaWdodDogJzUwMCcsXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8sIE9wZW4gU2FucywgU2Vnb2UgVUksIHNhbnMtc2VyaWYnLFxyXG4gICAgICAgICAgICBjb2xvcjogJyMyNTMyZCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGludmFsaWQ6IHtcclxuICAgICAgICAgICAgaWNvbkNvbG9yOiAnI0ZGQzdFRScsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI0ZGQzdFRScsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE1vbnRlciBub3RyZSBmb3JtIMOgIGwnb2JqZXQgU3RyaXBlIFxyXG4gICAgdmFyIGNhcmQgPSBlbGVtZW50cy5jcmVhdGUoJ2NhcmQnLCB7c3R5bGU6IHN0eWxlQ3VzdG9tfSk7XHJcblxyXG4gICAgY2FyZC5tb3VudChcIiNjYXJkLWVsZW1lbnRzXCIpO1xyXG5cclxuICAgIC8vIE1lc3NhZ2UgRXJyb3IgXHJcbiAgICBjYXJkLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQuZXJyb3IpIHtcclxuICAgICAgICAgICAgZGlzcGxheUVycm9yLmFkZENsYXNzKCdhbGVydCBhbGVydC1kYW5nZXInKTtcclxuICAgICAgICAgICAgZGlzcGxheUVycm9yLnRleHQoZXZlbnQuZXJyb3IubWVzc2FnZSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvci5yZW1vdmVDbGFzcygnYWxlcnQgYWxlcnQtZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvci50ZXh0KCcnKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgdmFyIGNhcmRCdXR0b24gPSAkKCcjY2FyZC1idXR0b24tc3VibWl0Jyk7XHJcbiAgICB2YXIgZm9ybSA9ICQoJyNzaW5nbGUtcGF5bWVudC1mb3JtJyk7XHJcbiAgICBmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjYXJkQnV0dG9uLmZpbmQoJ3NwYW4ubG9hZGVyLXN1Ym1pdCcpLmh0bWwoJzxkaXYgY2xhc3M9XCJzcGlubmVyLWJvcmRlciB0ZXh0LXdoaXRlXCIgcm9sZT1cInN0YXR1c1wiPjxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+TG9hZGluZy4uLjwvc3Bhbj48L2Rpdj4nKTtcclxuICAgICAgICBjYXJkQnV0dG9uLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG5cclxuICAgICAgICBzdHJpcGUuaGFuZGxlQ2FyZFBheW1lbnQoXHJcbiAgICAgICAgICAgIGNsaWVudFNlY3JldCxcclxuICAgICAgICAgICAgY2FyZCxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF5bWVudF9tZXRob2RfZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGJpbGxpbmdfZGV0YWlsczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lIDogbmFtZUhvbGRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWwgOiBlbWFpbEhvbGRlclxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlFcnJvci5hZGRDbGFzcygnYWxlcnQgYWxlcnQtZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5RXJyb3IudGV4dChyZXN1bHQuZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBjYXJkQnV0dG9uLmZpbmQoJ3NwYW4ubG9hZGVyLXN1Ym1pdCcpLmh0bWwoJycpXHJcbiAgICAgICAgICAgICAgICBjYXJkQnV0dG9uLmZpbmQoJ3NwYW4ubGFiZWwtYnV0dG9uJykuaHRtbChzdHJpcGVfZGVmYXVsdEJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICBjYXJkQnV0dG9uLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZigncGF5bWVudEludGVudCcgaW4gcmVzdWx0KXtcclxuICAgICAgICAgICAgICAgIGNhcmRCdXR0b24uYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBcInBheW1lbnRJbnRlbnRcIjogcmVzdWx0LnBheW1lbnRJbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzZXNzaW9uQWdlbnRJZFwiOiBzZXNzaW9uQWdlbnRJZCxcclxuICAgICAgICAgICAgICAgICAgICBcImFnZW50X2FjY291bnRTdGF0dXNcIjogYWdlbnRfYWNjb3VudFN0YXR1c1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsU3RyaXBlQ2hlY2tvdXQsIFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2VBamF4KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZUFqYXguc3RyaXBlX2NoZWNrb3V0ID09PSAnc3VjY2Vzc2Z1bGx5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IHVybFN1Y2Nlc3NUcmFuc2FjdGlvbisnLz9zdHJpcGVfY2hlY2tvdXQ9c3VjY2Vzc2Z1bGx5JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHJlc3BvbnNlQWpheC5zdHJpcGVfY2hlY2tvdXQgID09PSAnZXJyb3InICYmIHJlc3BvbnNlQWpheC5jYXVzZSA9PT0gJ2RpZmZlcmVudF9hZ2VudElkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IHN0cmlwZV91cmxFcnJvclRyYW5zYWN0aW9uKycvP3N0cmlwZV9jaGVja291dD1lcnJvcl9kaWZmZXJlbnRfYWdlbnRfaWQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pICBcclxuICAgIH0pIFxyXG5cclxuICAgIC8vVXBkYXRlIFByZW5vbSBldCBFbWFpbFxyXG4gICAgJCgnI2luc2NyaXB0aW9uX2FnZW50X3ByZW5vbScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIG5hbWVIb2xkZXIgPSAkKCcjaW5zY3JpcHRpb25fYWdlbnRfcHJlbm9tJykudmFsKCk7IFxyXG4gICAgfSlcclxuXHJcbiAgICAkKCcjaW5zY3JpcHRpb25fYWdlbnRfZW1haWwnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBlbWFpbEhvbGRlciA9ICQoJyNpbnNjcmlwdGlvbl9hZ2VudF9lbWFpbCcpLnZhbCgpOyBcclxuICAgIH0pXHJcblxyXG59KSIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmQ7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxudmFyIEZJTkQgPSAnZmluZCc7XG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xuXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYgKEZJTkQgaW4gW10pIEFycmF5KDEpW0ZJTkRdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB9LCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcyhGSU5EKTtcbiJdLCJuYW1lcyI6WyIkIiwiYWdlbnRfYWNjb3VudFN0YXR1cyIsInZhbCIsInNlc3Npb25BZ2VudElkIiwic3RyaXBlVG9rZW4iLCJjbGllbnRTZWNyZXQiLCJ1cmxTdHJpcGVDaGVja291dCIsInVybFN1Y2Nlc3NUcmFuc2FjdGlvbiIsInN0cmlwZV91cmxFcnJvclRyYW5zYWN0aW9uIiwic3RyaXBlX2RlZmF1bHRCdXR0b24iLCJuYW1lSG9sZGVyIiwiZW1haWxIb2xkZXIiLCJzdHJpcGUiLCJTdHJpcGUiLCJlbGVtZW50cyIsImRpc3BsYXlFcnJvciIsInN0eWxlQ3VzdG9tIiwiYmFzZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImZvbnRGYW1pbHkiLCJjb2xvciIsImludmFsaWQiLCJpY29uQ29sb3IiLCJjYXJkIiwiY3JlYXRlIiwic3R5bGUiLCJtb3VudCIsIm9uIiwiZXZlbnQiLCJlcnJvciIsImFkZENsYXNzIiwidGV4dCIsIm1lc3NhZ2UiLCJyZW1vdmVDbGFzcyIsImNhcmRCdXR0b24iLCJmb3JtIiwicHJldmVudERlZmF1bHQiLCJmaW5kIiwiaHRtbCIsImF0dHIiLCJoYW5kbGVDYXJkUGF5bWVudCIsInBheW1lbnRfbWV0aG9kX2RhdGEiLCJiaWxsaW5nX2RldGFpbHMiLCJuYW1lIiwiZW1haWwiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsInBheW1lbnRJbnRlbnQiLCJhamF4IiwidHlwZSIsInVybCIsInN1Y2Nlc3MiLCJyZXNwb25zZUFqYXgiLCJzdHJpcGVfY2hlY2tvdXQiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwiaHJlZiIsImNhdXNlIl0sInNvdXJjZVJvb3QiOiIifQ==