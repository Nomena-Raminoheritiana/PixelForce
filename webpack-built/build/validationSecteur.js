"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["validationSecteur"],{

/***/ "./assets/js/validationSecteur.js":
/*!****************************************!*\
  !*** ./assets/js/validationSecteur.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");









$(function () {
  var urlPathName = window.location.pathname.split('/');
  var envSpace = urlPathName[1]; // Function : Invalider un secteur

  function invalidateSecteur(that) {
    var agentSecteurId = that.attr("data-agentSecteur-id");
    console.log(agentSecteurId);
    var urlValidateSecteur = "/".concat(envSpace, "/agent/secteur/").concat(agentSecteurId, "/invalidate"); // AdminAgentController or CoachAgentController

    that.attr('disabled', true);
    $.ajax({
      url: urlValidateSecteur,
      type: "POST",
      beforeSend: function beforeSend() {
        that.html('<div class="spinner-border text-secondary" role="status"><span class="visually-hidden">Loading...</span></div>');
      },
      success: function success(responseAjax) {
        if (responseAjax.invalidation === 'successfully') {
          that.html('OK');
          setTimeout(function () {
            that.html('Valider');
          }, 1000);
          var btn_secteur_status = that.parent().prev().children();
          btn_secteur_status.removeClass('btn-success');
          btn_secteur_status.addClass('btn-warning');
          btn_secteur_status.html('Bloqué');
        }
      },
      error: function error() {
        that.html('Erreur');
      }
    });
  } // Valider un secteur


  $('.js-validate-secteur-agent').on('click', function () {
    var that = $(this);
    var agentSecteurId = that.attr("data-agentSecteur-id");
    var urlValidateSecteur = "/".concat(envSpace, "/agent/secteur/").concat(agentSecteurId, "/validate"); // AdminAgentController or CoachAgentController

    that.attr('disabled', true);
    $.ajax({
      url: urlValidateSecteur,
      type: "POST",
      beforeSend: function beforeSend() {
        that.html('<div class="spinner-border text-secondary" role="status"><span class="visually-hidden">Loading...</span></div>');
      },
      success: function success(responseAjax) {
        if (responseAjax.validation === 'successfully') {
          window.location.reload();
        }
      },
      error: function error() {
        that.html('Erreur');
      }
    });
  }); // Event : Invalider un secteur 

  $('.js-invalidate-secteur-agent').on('click', function () {
    invalidateSecteur($(this));
  }); // Ajout un/multiple Secteurs

  $('#js-btn-add-multiple-secteur').on('click', function () {
    var userId = $('#agent-id').text(); // On récupère les id de tous les secteurs cochés					

    var selectedSecteurId = [];
    $.each($("#multiple_secteur_secteur input[type='checkbox']:checked"), function () {
      selectedSecteurId.push($(this).val());
    });
    var urlAddMultipletSecteur = "/".concat(envSpace, "/agent/secteur/multiple/add");
    var data = {
      'userId': userId,
      'selectedSecteurId': selectedSecteurId
    };
    $.ajax({
      url: urlAddMultipletSecteur,
      data: data,
      type: "POST",
      beforeSend: function beforeSend() {
        $('#js-btn-add-multiple-secteur').html('<div class="spinner-border text-light" role="status"><span class="visually-hidden">Loading...</span></div>');
      },
      success: function success(responseAjax) {
        $('#modal-add-agent-secteur .btn-close').click();
        $('#js-btn-add-multiple-secteur').html('<i class="fa-solid fa-floppy-disk"></i> Ajouter'); // On ajoute dans la liste les nouveaux secteurs ajoutés

        var secteurAdd = responseAjax.secteurAdded;
        var toArraySecteur = Object.values(secteurAdd);
        toArraySecteur.forEach(function (element) {
          $('.body-sector-list').append("\n                        <tr>\n                            <td></td>\n                            <td>".concat(element.nom, "</td>\n                            <td>").concat(element.dateValidation, "</td>\n                            <td><button class=\"btn  btn-success btn-sm\"> Valid\xE9</button></td>\n                            <td>\n                                <button class=\"btn btn-warning btn-sm\" data-bs-toggle=\"modal\" data-bs-target=\"#modal-edit-agent-secteur\"><i class=\"fa fa-edit\"></i></button>\n                                <button data-agentSecteur-id=\"").concat(element.agentSecteurId, "\" type=\"button\" class=\"btn btn-sm  btn-outline-primary js-invalidate-secteur-agent waves-effect\">Bloquer</button></td>\n                        </tr>"));
        });
        $('.js-invalidate-secteur-agent').on('click', function () {
          invalidateSecteur($(this));
        }); // Si la reponse renvoie une erreur(s) comme duplication du secteur

        var errorMessagesResponse = responseAjax.errorMessages;

        if (errorMessagesResponse.length > 0) {
          errorMessagesResponse.forEach(function (element) {
            $('.alert-errorMessages').removeClass('d-none');
            $('.alert-errorMessages').addClass('d-block');
            $('.alert-errorMessages').append(element);
          });
        }
      },
      error: function error() {
        $('#js-btn-add-multiple-secteur').html('Erreur !');
      }
    });
  });
  $(this).on('click', '.edit-secteur', function (e) {
    e.preventDefault();
    var secteurId = $(this).attr('data-secteur-id');
    var agentSecteurId = $(this).attr('data-agentSecteur-id');
    $('[name="secteur"]').val(secteurId);
    $('[name="agentSecteur"]').val(agentSecteurId);
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-7d93ee","vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_core-js_modules_es_array-690d99","vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-173bd9"], () => (__webpack_exec__("./assets/js/validationSecteur.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBMUIsQ0FBaUNELE9BQWpDO0FBQ0gsV0FKRDtBQUtIO0FBQ0osT0F4Q0U7QUF5Q0huQixNQUFBQSxLQUFLLEVBQUcsaUJBQVU7QUFDZDdCLFFBQUFBLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDa0IsSUFBbEMsQ0FBdUMsVUFBdkM7QUFDSDtBQTNDRSxLQUFQO0FBNkNILEdBOUREO0FBZ0VBbEIsRUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFROEIsRUFBUixDQUFXLE9BQVgsRUFBb0IsZUFBcEIsRUFBcUMsVUFBU3lCLENBQVQsRUFBWTtBQUM3Q0EsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsUUFBSUMsU0FBUyxHQUFHekQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVSxJQUFSLENBQWEsaUJBQWIsQ0FBaEI7QUFDQSxRQUFJRCxjQUFjLEdBQUdULENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVUsSUFBUixDQUFhLHNCQUFiLENBQXJCO0FBQ0FWLElBQUFBLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCc0MsR0FBdEIsQ0FBMEJtQixTQUExQjtBQUNBekQsSUFBQUEsQ0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJzQyxHQUEzQixDQUErQjdCLGNBQS9CO0FBQ0gsR0FORDtBQU9ILENBOUlBLENBQUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdmFsaWRhdGlvblNlY3RldXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdib290c3RyYXAnO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAgIHZhciB1cmxQYXRoTmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpO1xyXG4gICAgdmFyIGVudlNwYWNlID0gdXJsUGF0aE5hbWVbMV07XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gOiBJbnZhbGlkZXIgdW4gc2VjdGV1clxyXG4gICAgZnVuY3Rpb24gaW52YWxpZGF0ZVNlY3RldXIgKHRoYXQpe1xyXG4gICAgICAgIGxldCBhZ2VudFNlY3RldXJJZCA9IHRoYXQuYXR0cihcImRhdGEtYWdlbnRTZWN0ZXVyLWlkXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFnZW50U2VjdGV1cklkKVxyXG4gICAgICAgIGNvbnN0IHVybFZhbGlkYXRlU2VjdGV1ciA9IGAvJHtlbnZTcGFjZX0vYWdlbnQvc2VjdGV1ci8ke2FnZW50U2VjdGV1cklkfS9pbnZhbGlkYXRlYDsgLy8gQWRtaW5BZ2VudENvbnRyb2xsZXIgb3IgQ29hY2hBZ2VudENvbnRyb2xsZXJcclxuXHJcbiAgICAgICAgdGhhdC5hdHRyKCdkaXNhYmxlZCcsIHRydWUpXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiB1cmxWYWxpZGF0ZVNlY3RldXIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBiZWZvcmVTZW5kIDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHRoYXQuaHRtbCgnPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHRleHQtc2Vjb25kYXJ5XCIgcm9sZT1cInN0YXR1c1wiPjxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+TG9hZGluZy4uLjwvc3Bhbj48L2Rpdj4nKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZUFqYXgpe1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlQWpheC5pbnZhbGlkYXRpb24gPT09ICdzdWNjZXNzZnVsbHknICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuaHRtbCgnT0snKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5odG1sKCdWYWxpZGVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBidG5fc2VjdGV1cl9zdGF0dXMgPSB0aGF0LnBhcmVudCgpLnByZXYoKS5jaGlsZHJlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ0bl9zZWN0ZXVyX3N0YXR1cy5yZW1vdmVDbGFzcygnYnRuLXN1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICBidG5fc2VjdGV1cl9zdGF0dXMuYWRkQ2xhc3MoJ2J0bi13YXJuaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuX3NlY3RldXJfc3RhdHVzLmh0bWwoJ0Jsb3F1w6knKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdGhhdC5odG1sKCdFcnJldXInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBWYWxpZGVyIHVuIHNlY3RldXJcclxuICAgICQoJy5qcy12YWxpZGF0ZS1zZWN0ZXVyLWFnZW50Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcdFxyXG4gICAgICAgIGxldCB0aGF0ID0gICQodGhpcyk7IFxyXG4gICAgICAgIGxldCBhZ2VudFNlY3RldXJJZCA9IHRoYXQuYXR0cihcImRhdGEtYWdlbnRTZWN0ZXVyLWlkXCIpO1xyXG4gICAgICAgIGNvbnN0IHVybFZhbGlkYXRlU2VjdGV1ciA9IGAvJHtlbnZTcGFjZX0vYWdlbnQvc2VjdGV1ci8ke2FnZW50U2VjdGV1cklkfS92YWxpZGF0ZWA7IC8vIEFkbWluQWdlbnRDb250cm9sbGVyIG9yIENvYWNoQWdlbnRDb250cm9sbGVyXHJcblxyXG4gICAgICAgIHRoYXQuYXR0cignZGlzYWJsZWQnLCB0cnVlKVxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogdXJsVmFsaWRhdGVTZWN0ZXVyLFxyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgYmVmb3JlU2VuZCA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lmh0bWwoJzxkaXYgY2xhc3M9XCJzcGlubmVyLWJvcmRlciB0ZXh0LXNlY29uZGFyeVwiIHJvbGU9XCJzdGF0dXNcIj48c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPkxvYWRpbmcuLi48L3NwYW4+PC9kaXY+JylcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2VBamF4KXtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZUFqYXgudmFsaWRhdGlvbiA9PT0gJ3N1Y2Nlc3NmdWxseScgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lmh0bWwoJ0VycmV1cicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICAvLyBFdmVudCA6IEludmFsaWRlciB1biBzZWN0ZXVyIFxyXG4gICAgJCgnLmpzLWludmFsaWRhdGUtc2VjdGV1ci1hZ2VudCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaW52YWxpZGF0ZVNlY3RldXIoJCh0aGlzKSlcclxuICAgIH0pXHJcblxyXG4gICAgICAgIFxyXG4gICAgLy8gQWpvdXQgdW4vbXVsdGlwbGUgU2VjdGV1cnNcclxuICAgICQoJyNqcy1idG4tYWRkLW11bHRpcGxlLXNlY3RldXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGxldCB1c2VySWQgPSAkKCcjYWdlbnQtaWQnKS50ZXh0KCk7XHJcblxyXG4gICAgICAgIC8vIE9uIHLDqWN1cMOocmUgbGVzIGlkIGRlIHRvdXMgbGVzIHNlY3RldXJzIGNvY2jDqXNcdFx0XHRcdFx0XHJcbiAgICAgICAgdmFyIHNlbGVjdGVkU2VjdGV1cklkID0gW107XHJcbiAgICAgICAgJC5lYWNoKCQoXCIjbXVsdGlwbGVfc2VjdGV1cl9zZWN0ZXVyIGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZFwiKSwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc2VsZWN0ZWRTZWN0ZXVySWQucHVzaCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHVybEFkZE11bHRpcGxldFNlY3RldXIgPSBgLyR7ZW52U3BhY2V9L2FnZW50L3NlY3RldXIvbXVsdGlwbGUvYWRkYDtcclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICd1c2VySWQnIDogdXNlcklkLFxyXG4gICAgICAgICAgICAnc2VsZWN0ZWRTZWN0ZXVySWQnIDogc2VsZWN0ZWRTZWN0ZXVySWRcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkLmFqYXgoe1x0XHJcbiAgICAgICAgICAgIHVybDogdXJsQWRkTXVsdGlwbGV0U2VjdGV1cixcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGJlZm9yZVNlbmQgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgJCgnI2pzLWJ0bi1hZGQtbXVsdGlwbGUtc2VjdGV1cicpLmh0bWwoJzxkaXYgY2xhc3M9XCJzcGlubmVyLWJvcmRlciB0ZXh0LWxpZ2h0XCIgcm9sZT1cInN0YXR1c1wiPjxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+TG9hZGluZy4uLjwvc3Bhbj48L2Rpdj4nKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZUFqYXgpe1xyXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsLWFkZC1hZ2VudC1zZWN0ZXVyIC5idG4tY2xvc2UnKS5jbGljaygpICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJCgnI2pzLWJ0bi1hZGQtbXVsdGlwbGUtc2VjdGV1cicpLmh0bWwoJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtZmxvcHB5LWRpc2tcIj48L2k+IEFqb3V0ZXInKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIE9uIGFqb3V0ZSBkYW5zIGxhIGxpc3RlIGxlcyBub3V2ZWF1eCBzZWN0ZXVycyBham91dMOpc1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlY3RldXJBZGQgPSByZXNwb25zZUFqYXguc2VjdGV1ckFkZGVkO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvQXJyYXlTZWN0ZXVyID0gT2JqZWN0LnZhbHVlcyhzZWN0ZXVyQWRkKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b0FycmF5U2VjdGV1ci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmJvZHktc2VjdG9yLWxpc3QnKS5hcHBlbmQoYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2VsZW1lbnQubm9tfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtlbGVtZW50LmRhdGVWYWxpZGF0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzcz1cImJ0biAgYnRuLXN1Y2Nlc3MgYnRuLXNtXCI+IFZhbGlkw6k8L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdhcm5pbmcgYnRuLXNtXCIgZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiIGRhdGEtYnMtdGFyZ2V0PVwiI21vZGFsLWVkaXQtYWdlbnQtc2VjdGV1clwiPjxpIGNsYXNzPVwiZmEgZmEtZWRpdFwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtYWdlbnRTZWN0ZXVyLWlkPVwiJHsgZWxlbWVudC5hZ2VudFNlY3RldXJJZCB9XCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSAgYnRuLW91dGxpbmUtcHJpbWFyeSBqcy1pbnZhbGlkYXRlLXNlY3RldXItYWdlbnQgd2F2ZXMtZWZmZWN0XCI+QmxvcXVlcjwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+YCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcuanMtaW52YWxpZGF0ZS1zZWN0ZXVyLWFnZW50Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkYXRlU2VjdGV1cigkKHRoaXMpKVxyXG4gICAgICAgICAgICAgICAgfSlcdFx0XHRcclxuICAgICAgICAgICAgICAgIC8vIFNpIGxhIHJlcG9uc2UgcmVudm9pZSB1bmUgZXJyZXVyKHMpIGNvbW1lIGR1cGxpY2F0aW9uIGR1IHNlY3RldXJcclxuICAgICAgICAgICAgICAgIGxldCBlcnJvck1lc3NhZ2VzUmVzcG9uc2UgPSByZXNwb25zZUFqYXguZXJyb3JNZXNzYWdlczsgXHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlc1Jlc3BvbnNlLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlc1Jlc3BvbnNlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5hbGVydC1lcnJvck1lc3NhZ2VzJykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuYWxlcnQtZXJyb3JNZXNzYWdlcycpLmFkZENsYXNzKCdkLWJsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5hbGVydC1lcnJvck1lc3NhZ2VzJykuYXBwZW5kKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKCcjanMtYnRuLWFkZC1tdWx0aXBsZS1zZWN0ZXVyJykuaHRtbCgnRXJyZXVyICEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsICcuZWRpdC1zZWN0ZXVyJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgc2VjdGV1cklkID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNlY3RldXItaWQnKTtcclxuICAgICAgICBsZXQgYWdlbnRTZWN0ZXVySWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtYWdlbnRTZWN0ZXVyLWlkJyk7XHJcbiAgICAgICAgJCgnW25hbWU9XCJzZWN0ZXVyXCJdJykudmFsKHNlY3RldXJJZCk7XHJcbiAgICAgICAgJCgnW25hbWU9XCJhZ2VudFNlY3RldXJcIl0nKS52YWwoYWdlbnRTZWN0ZXVySWQpXHJcbiAgICB9KVxyXG59KVx0XHJcbiJdLCJuYW1lcyI6WyJNb2RhbCIsIiQiLCJ1cmxQYXRoTmFtZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzcGxpdCIsImVudlNwYWNlIiwiaW52YWxpZGF0ZVNlY3RldXIiLCJ0aGF0IiwiYWdlbnRTZWN0ZXVySWQiLCJhdHRyIiwiY29uc29sZSIsImxvZyIsInVybFZhbGlkYXRlU2VjdGV1ciIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiYmVmb3JlU2VuZCIsImh0bWwiLCJzdWNjZXNzIiwicmVzcG9uc2VBamF4IiwiaW52YWxpZGF0aW9uIiwic2V0VGltZW91dCIsImJ0bl9zZWN0ZXVyX3N0YXR1cyIsInBhcmVudCIsInByZXYiLCJjaGlsZHJlbiIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJlcnJvciIsIm9uIiwidmFsaWRhdGlvbiIsInJlbG9hZCIsInVzZXJJZCIsInRleHQiLCJzZWxlY3RlZFNlY3RldXJJZCIsImVhY2giLCJwdXNoIiwidmFsIiwidXJsQWRkTXVsdGlwbGV0U2VjdGV1ciIsImRhdGEiLCJjbGljayIsInNlY3RldXJBZGQiLCJzZWN0ZXVyQWRkZWQiLCJ0b0FycmF5U2VjdGV1ciIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJlbGVtZW50IiwiYXBwZW5kIiwibm9tIiwiZGF0ZVZhbGlkYXRpb24iLCJlcnJvck1lc3NhZ2VzUmVzcG9uc2UiLCJlcnJvck1lc3NhZ2VzIiwibGVuZ3RoIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VjdGV1cklkIl0sInNvdXJjZVJvb3QiOiIifQ==