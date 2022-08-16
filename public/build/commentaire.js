"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["commentaire"],{

/***/ "./assets/js/commentaire.js":
/*!**********************************!*\
  !*** ./assets/js/commentaire.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bootstrap_js_src_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap/js/src/modal */ "./node_modules/bootstrap/js/src/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");









function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



$(document).ready(function () {
  // charger les commentaires de niveau 1
  chargerCommentaireN1(); // ajouter un commentaire

  $(this).on('click', '.add-comment', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var commentaire_value, parentId, params, response, container_sous_commentaire, chargement_commentaire;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              commentaire_value = $($(this).attr('data-selector')).val();
              parentId = $(this).attr('data-parent-id');
              params = new URLSearchParams();
              params.append('classWithNamespace', $(this).attr('data-owner-class'));
              params.append('ownerId', $(this).attr('data-owner-id'));
              params.append('textes', commentaire_value);
              params.append('parent_id', parentId);
              params.append('template', $(this).attr('data-template-instance'));
              _context.next = 11;
              return axios__WEBPACK_IMPORTED_MODULE_8___default().post(Routing.generate('commentaire_add'), params);

            case 11:
              response = _context.sent.data;

              if (parentId === undefined) {
                $('.load-comment').append(response.template);
              } else {
                container_sous_commentaire = $('#commentaire-' + parentId).find('.load-sous-commentaires').first();
                chargement_commentaire = container_sous_commentaire.find('>.chargement-commentaire');

                if (chargement_commentaire.length > 0) {
                  container_sous_commentaire.removeClass('d-none');
                  chargement_commentaire.remove();
                }

                container_sous_commentaire.append(response.template);
              }

              $($(this).attr('data-selector')).val('');

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }()); // modifier un commentaire

  var commentaire_modif_modal = new bootstrap_js_src_modal__WEBPACK_IMPORTED_MODULE_9__["default"]($('#modification-commentaire')[0]);
  $(this).on('click', '.update-commentaire', function (e) {
    e.preventDefault();
    var htmlSelector = $(this).attr('data-id-commentaire-html');
    var textes = $(htmlSelector).html();
    var commentaire_id = $(this).attr('data-id');
    $('#confirmer-maj').attr('data-commentaire-id', commentaire_id).attr('data-id-commentaire-html', htmlSelector);
    commentaire_modif_modal.show();
    $('#updated-commentaire-contents').html(textes);
  }); // confirmer le mise à jour

  $(this).on('click', '#confirmer-maj', /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
      var JqueryObjOldTextes, response, newTextes;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              JqueryObjOldTextes = $(this).attr('data-id-commentaire-html');
              _context2.next = 4;
              return edit($(this).attr('data-commentaire-id'), $('#updated-commentaire-contents').val());

            case 4:
              response = _context2.sent;
              newTextes = response.commentaire.textes;
              $(JqueryObjOldTextes).html(newTextes);
              commentaire_modif_modal.hide();

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }()); // supprimer commentaire

  var modalSuppression = new bootstrap_js_src_modal__WEBPACK_IMPORTED_MODULE_9__["default"]($('#suppression-commentaire')[0]);
  $(this).on('click', '.supprimer-commentaire', function (e) {
    e.preventDefault();
    var id_commentaire = $(this).attr('data-id');
    var token = $(this).attr('data-token');
    modalSuppression.show();
    var btn_confirmation = $('#confirmer-suppression');
    btn_confirmation.attr('data-id', id_commentaire);
    btn_confirmation.attr('data-token', token);
  }); // confirmer la suppression

  $(this).on('click', '#confirmer-suppression', /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
      var id_commentaire, token, response;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();
              id_commentaire = $(this).attr('data-id');
              token = $(this).attr('data-token');
              _context3.next = 5;
              return supprimerCommentaire(id_commentaire, token);

            case 5:
              response = _context3.sent;

              if (response.message === 'ok') {
                $('#commentaire-' + id_commentaire).remove();
                modalSuppression.hide();
              } else {
                window.alert('le commentaire n\'a pas pu être supprimer');
              }

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }()); // clique répondre pour afficher le textearea

  $(this).on('click', '.repondre-commentaire', function (e) {
    e.preventDefault();
    $(this).closest('.commentaire-instance').next('.commentaire-input').removeClass('d-none');
  }); // afficher les réponse

  $(this).on('click', '.afficher-commentaire', /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
      var response;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              $(this).closest('.displayResponse').find('>.load-sous-commentaires').removeClass('d-none');
              _context4.next = 4;
              return chargerSousCommentaire($(this).attr('data-parent-id'), $(this).attr('data-template'));

            case 4:
              response = _context4.sent;
              $(this).closest('.displayResponse').find('>.load-sous-commentaires').html(response.commentaires);
              $(this).find('>.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');
              $(this).find('>.libelle').attr('data-libelle-afficher', $(this).find('>.libelle').html());
              $(this).find('>.libelle').html('masquer les réponses');
              $(this).attr('data-cacher-commentaire', 'cacher');
              $(this).removeClass('afficher-commentaire');

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }()); // cacher les commentaires

  $(this).on('click', '[data-cacher-commentaire="cacher"]', function (e) {
    e.preventDefault();
    $(this).closest('.displayResponse').find('>.load-sous-commentaires').addClass('d-none');
    $(this).attr('data-afficher-commentaire', 'afficher').removeAttr('data-cacher-commentaire');
    $(this).find('>.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
    $(this).find('>.libelle').html($(this).find('>.libelle').attr('data-libelle-afficher'));
  }); // afficher les commentaires

  $(this).on('click', '[data-afficher-commentaire="afficher"]', function (e) {
    e.preventDefault();
    $(this).closest('.displayResponse').find('>.load-sous-commentaires').removeClass('d-none');
    $(this).attr('data-cacher-commentaire', 'cacher').removeAttr('data-afficher-commentaire');
    $(this).find('>.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');
    $(this).find('>.libelle').html('masquer les réponses');
  }); // annuler réponse

  $(this).on('click', '.annuler-reponse', function (e) {
    e.preventDefault();
    $(this).closest('.commentaire-input').addClass('d-none');
  });
});

function chargerCommentaireN1() {
  $('.load-comment').each( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var params, response;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            params = new URLSearchParams();
            params.append('template', $(this).attr('data-template'));
            params.append('ownerId', $(this).attr('data-owner-id'));
            params.append('classWithNamespace', $(this).attr('data-owner-class'));
            _context5.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_8___default().post(Routing.generate('commentaire_charger'), params);

          case 6:
            response = _context5.sent.data;
            $(this).html(response.commentaires);

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
}

function chargerSousCommentaire(_x5, _x6) {
  return _chargerSousCommentaire.apply(this, arguments);
}

function _chargerSousCommentaire() {
  _chargerSousCommentaire = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(parentId, template) {
    var params;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            params = new URLSearchParams();
            params.append('template', template);
            _context6.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_8___default().post(Routing.generate('commentaire_chargerSousCommentaire', {
              encodedCommentaire: parentId
            }), params);

          case 4:
            return _context6.abrupt("return", _context6.sent.data);

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _chargerSousCommentaire.apply(this, arguments);
}

function supprimerCommentaire(_x7, _x8) {
  return _supprimerCommentaire.apply(this, arguments);
}

function _supprimerCommentaire() {
  _supprimerCommentaire = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(id, token) {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_8___default()["delete"](Routing.generate('commentaire_supprimer', {
              id: id,
              token: token
            }));

          case 2:
            return _context7.abrupt("return", _context7.sent.data);

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _supprimerCommentaire.apply(this, arguments);
}

function edit(_x9, _x10) {
  return _edit.apply(this, arguments);
}

function _edit() {
  _edit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(id, textes) {
    var params;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            params = new URLSearchParams();
            params.append('textes', textes);
            _context8.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_8___default().put(Routing.generate('commentaire_edit', {
              id: id
            }), params);

          case 4:
            return _context8.abrupt("return", _context8.sent.data);

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _edit.apply(this, arguments);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-464164","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_web_d-930e15","vendors-node_modules_core-js_modules_es_promise_js","vendors-node_modules_regenerator-runtime_runtime_js","vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_find_js","vendors-node_modules_core-js_modules_web_url-search-params_js","vendors-node_modules_bootstrap_js_src_modal_js-node_modules_core-js_internals_array-slice-sim-d434bf"], () => (__webpack_exec__("./assets/js/commentaire.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSw2REFFbUd2QixJQUZuRzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztTQUtlaUI7Ozs7O2tFQUFmLGtCQUFvQm9CLEVBQXBCLEVBQXdCekIsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVVuQixZQUFBQSxNQUZWLEdBRW1CLElBQUlDLGVBQUosRUFGbkI7QUFHSUQsWUFBQUEsTUFBTSxDQUFDRSxNQUFQLENBQWMsUUFBZCxFQUF3QmlCLE1BQXhCO0FBSEo7QUFBQSxtQkFJa0JoQyxnREFBQSxDQUFVaUIsT0FBTyxDQUFDQyxRQUFSLENBQWlCLGtCQUFqQixFQUFxQztBQUFDdUMsY0FBQUEsRUFBRSxFQUFFQTtBQUFMLGFBQXJDLENBQVYsRUFBMEQ1QyxNQUExRCxDQUpsQjs7QUFBQTtBQUFBLDZEQUlxRk8sSUFKckY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tbWVudGFpcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJib290c3RyYXAvanMvc3JjL21vZGFsXCI7XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gY2hhcmdlciBsZXMgY29tbWVudGFpcmVzIGRlIG5pdmVhdSAxXHJcbiAgICBjaGFyZ2VyQ29tbWVudGFpcmVOMSgpO1xyXG4gICAgLy8gYWpvdXRlciB1biBjb21tZW50YWlyZVxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCAnLmFkZC1jb21tZW50JywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBjb21tZW50YWlyZV92YWx1ZSA9ICQoJCh0aGlzKS5hdHRyKCdkYXRhLXNlbGVjdG9yJykpLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IHBhcmVudElkID0gJCh0aGlzKS5hdHRyKCdkYXRhLXBhcmVudC1pZCcpO1xyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICAgICAgICBwYXJhbXMuYXBwZW5kKCdjbGFzc1dpdGhOYW1lc3BhY2UnLCAkKHRoaXMpLmF0dHIoJ2RhdGEtb3duZXItY2xhc3MnKSk7XHJcbiAgICAgICAgcGFyYW1zLmFwcGVuZCgnb3duZXJJZCcsICQodGhpcykuYXR0cignZGF0YS1vd25lci1pZCcpKTtcclxuICAgICAgICBwYXJhbXMuYXBwZW5kKCd0ZXh0ZXMnLCBjb21tZW50YWlyZV92YWx1ZSk7XHJcbiAgICAgICAgcGFyYW1zLmFwcGVuZCgncGFyZW50X2lkJywgcGFyZW50SWQpO1xyXG4gICAgICAgIHBhcmFtcy5hcHBlbmQoJ3RlbXBsYXRlJywgJCh0aGlzKS5hdHRyKCdkYXRhLXRlbXBsYXRlLWluc3RhbmNlJykpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IGF4aW9zLnBvc3QoUm91dGluZy5nZW5lcmF0ZSgnY29tbWVudGFpcmVfYWRkJyksIHBhcmFtcykpLmRhdGE7XHJcbiAgICAgICAgaWYocGFyZW50SWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAkKCcubG9hZC1jb21tZW50JykuYXBwZW5kKHJlc3BvbnNlLnRlbXBsYXRlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJfc291c19jb21tZW50YWlyZSA9ICAkKCcjY29tbWVudGFpcmUtJytwYXJlbnRJZCkuZmluZCgnLmxvYWQtc291cy1jb21tZW50YWlyZXMnKS5maXJzdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBjaGFyZ2VtZW50X2NvbW1lbnRhaXJlID0gY29udGFpbmVyX3NvdXNfY29tbWVudGFpcmUuZmluZCgnPi5jaGFyZ2VtZW50LWNvbW1lbnRhaXJlJyk7XHJcbiAgICAgICAgICAgIGlmKGNoYXJnZW1lbnRfY29tbWVudGFpcmUubGVuZ3RoPjApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcl9zb3VzX2NvbW1lbnRhaXJlLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgICAgIGNoYXJnZW1lbnRfY29tbWVudGFpcmUucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29udGFpbmVyX3NvdXNfY29tbWVudGFpcmUuYXBwZW5kKHJlc3BvbnNlLnRlbXBsYXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJCh0aGlzKS5hdHRyKCdkYXRhLXNlbGVjdG9yJykpLnZhbCgnJyk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIG1vZGlmaWVyIHVuIGNvbW1lbnRhaXJlXHJcbiAgICBjb25zdCBjb21tZW50YWlyZV9tb2RpZl9tb2RhbCA9IG5ldyBNb2RhbCgkKCcjbW9kaWZpY2F0aW9uLWNvbW1lbnRhaXJlJylbMF0pO1xyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCcudXBkYXRlLWNvbW1lbnRhaXJlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBodG1sU2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQtY29tbWVudGFpcmUtaHRtbCcpO1xyXG4gICAgICAgIGNvbnN0IHRleHRlcyA9ICQoaHRtbFNlbGVjdG9yKS5odG1sKCk7XHJcbiAgICAgICAgY29uc3QgY29tbWVudGFpcmVfaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAgICAgICAkKCcjY29uZmlybWVyLW1haicpLmF0dHIoJ2RhdGEtY29tbWVudGFpcmUtaWQnLCBjb21tZW50YWlyZV9pZCkuYXR0cignZGF0YS1pZC1jb21tZW50YWlyZS1odG1sJywgaHRtbFNlbGVjdG9yKTtcclxuICAgICAgICBjb21tZW50YWlyZV9tb2RpZl9tb2RhbC5zaG93KCk7XHJcbiAgICAgICAgJCgnI3VwZGF0ZWQtY29tbWVudGFpcmUtY29udGVudHMnKS5odG1sKHRleHRlcyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjb25maXJtZXIgbGUgbWlzZSDDoCBqb3VyXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsJyNjb25maXJtZXItbWFqJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBKcXVlcnlPYmpPbGRUZXh0ZXMgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQtY29tbWVudGFpcmUtaHRtbCcpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZWRpdCgkKHRoaXMpLmF0dHIoJ2RhdGEtY29tbWVudGFpcmUtaWQnKSwkKCcjdXBkYXRlZC1jb21tZW50YWlyZS1jb250ZW50cycpLnZhbCgpKTtcclxuICAgICAgICBjb25zdCBuZXdUZXh0ZXMgPSByZXNwb25zZS5jb21tZW50YWlyZS50ZXh0ZXM7XHJcbiAgICAgICAgJChKcXVlcnlPYmpPbGRUZXh0ZXMpLmh0bWwobmV3VGV4dGVzKTtcclxuICAgICAgICBjb21tZW50YWlyZV9tb2RpZl9tb2RhbC5oaWRlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBzdXBwcmltZXIgY29tbWVudGFpcmVcclxuICAgIGNvbnN0IG1vZGFsU3VwcHJlc3Npb24gPSBuZXcgTW9kYWwoJCgnI3N1cHByZXNzaW9uLWNvbW1lbnRhaXJlJylbMF0pO1xyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCcuc3VwcHJpbWVyLWNvbW1lbnRhaXJlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBpZF9jb21tZW50YWlyZSA9ICQodGhpcykuYXR0cignZGF0YS1pZCcpO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRva2VuJyk7XHJcbiAgICAgICAgbW9kYWxTdXBwcmVzc2lvbi5zaG93KCk7XHJcbiAgICAgICAgY29uc3QgYnRuX2NvbmZpcm1hdGlvbiA9ICQoJyNjb25maXJtZXItc3VwcHJlc3Npb24nKTtcclxuICAgICAgICBidG5fY29uZmlybWF0aW9uLmF0dHIoJ2RhdGEtaWQnLCBpZF9jb21tZW50YWlyZSk7XHJcbiAgICAgICAgYnRuX2NvbmZpcm1hdGlvbi5hdHRyKCdkYXRhLXRva2VuJywgdG9rZW4pO1xyXG4gICAgfSk7XHJcbiAgICAvLyBjb25maXJtZXIgbGEgc3VwcHJlc3Npb25cclxuICAgICQodGhpcykub24oJ2NsaWNrJywgJyNjb25maXJtZXItc3VwcHJlc3Npb24nLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGlkX2NvbW1lbnRhaXJlID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdG9rZW4nKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHN1cHByaW1lckNvbW1lbnRhaXJlKGlkX2NvbW1lbnRhaXJlLCB0b2tlbik7XHJcbiAgICAgICAgaWYocmVzcG9uc2UubWVzc2FnZSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAkKCcjY29tbWVudGFpcmUtJytpZF9jb21tZW50YWlyZSkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIG1vZGFsU3VwcHJlc3Npb24uaGlkZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydCgnbGUgY29tbWVudGFpcmUgblxcJ2EgcGFzIHB1IMOqdHJlIHN1cHByaW1lcicpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY2xpcXVlIHLDqXBvbmRyZSBwb3VyIGFmZmljaGVyIGxlIHRleHRlYXJlYVxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCAnLnJlcG9uZHJlLWNvbW1lbnRhaXJlJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmNvbW1lbnRhaXJlLWluc3RhbmNlJykubmV4dCgnLmNvbW1lbnRhaXJlLWlucHV0JykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBhZmZpY2hlciBsZXMgcsOpcG9uc2VcclxuICAgICQodGhpcykub24oJ2NsaWNrJywnLmFmZmljaGVyLWNvbW1lbnRhaXJlJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5kaXNwbGF5UmVzcG9uc2UnKS5maW5kKCc+LmxvYWQtc291cy1jb21tZW50YWlyZXMnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjaGFyZ2VyU291c0NvbW1lbnRhaXJlKCQodGhpcykuYXR0cignZGF0YS1wYXJlbnQtaWQnKSwgJCh0aGlzKS5hdHRyKCdkYXRhLXRlbXBsYXRlJykpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmRpc3BsYXlSZXNwb25zZScpLmZpbmQoJz4ubG9hZC1zb3VzLWNvbW1lbnRhaXJlcycpLmh0bWwocmVzcG9uc2UuY29tbWVudGFpcmVzKTtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJz4uZmEtYW5nbGUtZG93bicpLnJlbW92ZUNsYXNzKCdmYS1hbmdsZS1kb3duJykuYWRkQ2xhc3MoJ2ZhLWFuZ2xlLXVwJyk7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCc+LmxpYmVsbGUnKS5hdHRyKCdkYXRhLWxpYmVsbGUtYWZmaWNoZXInLCQodGhpcykuZmluZCgnPi5saWJlbGxlJykuaHRtbCgpKTtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJz4ubGliZWxsZScpLmh0bWwoJ21hc3F1ZXIgbGVzIHLDqXBvbnNlcycpO1xyXG4gICAgICAgICQodGhpcykuYXR0cignZGF0YS1jYWNoZXItY29tbWVudGFpcmUnLCAnY2FjaGVyJyk7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWZmaWNoZXItY29tbWVudGFpcmUnKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjYWNoZXIgbGVzIGNvbW1lbnRhaXJlc1xyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCdbZGF0YS1jYWNoZXItY29tbWVudGFpcmU9XCJjYWNoZXJcIl0nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmRpc3BsYXlSZXNwb25zZScpLmZpbmQoJz4ubG9hZC1zb3VzLWNvbW1lbnRhaXJlcycpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAkKHRoaXMpLmF0dHIoJ2RhdGEtYWZmaWNoZXItY29tbWVudGFpcmUnLCdhZmZpY2hlcicpLnJlbW92ZUF0dHIoJ2RhdGEtY2FjaGVyLWNvbW1lbnRhaXJlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCc+LmZhLWFuZ2xlLXVwJykucmVtb3ZlQ2xhc3MoJ2ZhLWFuZ2xlLXVwJykuYWRkQ2xhc3MoJ2ZhLWFuZ2xlLWRvd24nKTtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJz4ubGliZWxsZScpLmh0bWwoJCh0aGlzKS5maW5kKCc+LmxpYmVsbGUnKS5hdHRyKCdkYXRhLWxpYmVsbGUtYWZmaWNoZXInKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBhZmZpY2hlciBsZXMgY29tbWVudGFpcmVzXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsJ1tkYXRhLWFmZmljaGVyLWNvbW1lbnRhaXJlPVwiYWZmaWNoZXJcIl0nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmRpc3BsYXlSZXNwb25zZScpLmZpbmQoJz4ubG9hZC1zb3VzLWNvbW1lbnRhaXJlcycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICAkKHRoaXMpLmF0dHIoJ2RhdGEtY2FjaGVyLWNvbW1lbnRhaXJlJywnY2FjaGVyJykucmVtb3ZlQXR0cignZGF0YS1hZmZpY2hlci1jb21tZW50YWlyZScpO1xyXG4gICAgICAgICQodGhpcykuZmluZCgnPi5mYS1hbmdsZS1kb3duJykucmVtb3ZlQ2xhc3MoJ2ZhLWFuZ2xlLWRvd24nKS5hZGRDbGFzcygnZmEtYW5nbGUtdXAnKTtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJz4ubGliZWxsZScpLmh0bWwoJ21hc3F1ZXIgbGVzIHLDqXBvbnNlcycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYW5udWxlciByw6lwb25zZVxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCAnLmFubnVsZXItcmVwb25zZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuY29tbWVudGFpcmUtaW5wdXQnKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcbiAgICB9KVxyXG5cclxufSk7XHJcblxyXG5mdW5jdGlvbiBjaGFyZ2VyQ29tbWVudGFpcmVOMSgpXHJcbntcclxuICAgICAgJCgnLmxvYWQtY29tbWVudCcpLmVhY2goYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICAgICAgICBwYXJhbXMuYXBwZW5kKCd0ZW1wbGF0ZScsICQodGhpcykuYXR0cignZGF0YS10ZW1wbGF0ZScpKTtcclxuICAgICAgICAgIHBhcmFtcy5hcHBlbmQoJ293bmVySWQnLCAkKHRoaXMpLmF0dHIoJ2RhdGEtb3duZXItaWQnKSk7XHJcbiAgICAgICAgICBwYXJhbXMuYXBwZW5kKCdjbGFzc1dpdGhOYW1lc3BhY2UnLCAkKHRoaXMpLmF0dHIoJ2RhdGEtb3duZXItY2xhc3MnKSk7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IChhd2FpdCBheGlvcy5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ2NvbW1lbnRhaXJlX2NoYXJnZXInKSwgcGFyYW1zKSkuZGF0YTtcclxuICAgICAgICAgICQodGhpcykuaHRtbChyZXNwb25zZS5jb21tZW50YWlyZXMpO1xyXG4gICAgICB9KVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjaGFyZ2VyU291c0NvbW1lbnRhaXJlKHBhcmVudElkLCB0ZW1wbGF0ZSlcclxue1xyXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgcGFyYW1zLmFwcGVuZCgndGVtcGxhdGUnLCB0ZW1wbGF0ZSk7XHJcbiAgICByZXR1cm4gKGF3YWl0IGF4aW9zLnBvc3QoUm91dGluZy5nZW5lcmF0ZSgnY29tbWVudGFpcmVfY2hhcmdlclNvdXNDb21tZW50YWlyZScsIHtlbmNvZGVkQ29tbWVudGFpcmU6IHBhcmVudElkfSksIHBhcmFtcykpLmRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHN1cHByaW1lckNvbW1lbnRhaXJlKGlkLCB0b2tlbilcclxue1xyXG4gICAgcmV0dXJuIChhd2FpdCBheGlvcy5kZWxldGUoUm91dGluZy5nZW5lcmF0ZSgnY29tbWVudGFpcmVfc3VwcHJpbWVyJywge2lkOiBpZCwgdG9rZW46IHRva2VufSkpKS5kYXRhO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBlZGl0KGlkLCB0ZXh0ZXMpXHJcbntcclxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICAgIHBhcmFtcy5hcHBlbmQoJ3RleHRlcycsIHRleHRlcyk7XHJcbiAgICByZXR1cm4gKGF3YWl0IGF4aW9zLnB1dChSb3V0aW5nLmdlbmVyYXRlKCdjb21tZW50YWlyZV9lZGl0Jywge2lkOiBpZH0pLCBwYXJhbXMpKS5kYXRhO1xyXG59Il0sIm5hbWVzIjpbImF4aW9zIiwiTW9kYWwiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNoYXJnZXJDb21tZW50YWlyZU4xIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJjb21tZW50YWlyZV92YWx1ZSIsImF0dHIiLCJ2YWwiLCJwYXJlbnRJZCIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInBvc3QiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJyZXNwb25zZSIsImRhdGEiLCJ1bmRlZmluZWQiLCJ0ZW1wbGF0ZSIsImNvbnRhaW5lcl9zb3VzX2NvbW1lbnRhaXJlIiwiZmluZCIsImZpcnN0IiwiY2hhcmdlbWVudF9jb21tZW50YWlyZSIsImxlbmd0aCIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwiY29tbWVudGFpcmVfbW9kaWZfbW9kYWwiLCJodG1sU2VsZWN0b3IiLCJ0ZXh0ZXMiLCJodG1sIiwiY29tbWVudGFpcmVfaWQiLCJzaG93IiwiSnF1ZXJ5T2JqT2xkVGV4dGVzIiwiZWRpdCIsIm5ld1RleHRlcyIsImNvbW1lbnRhaXJlIiwiaGlkZSIsIm1vZGFsU3VwcHJlc3Npb24iLCJpZF9jb21tZW50YWlyZSIsInRva2VuIiwiYnRuX2NvbmZpcm1hdGlvbiIsInN1cHByaW1lckNvbW1lbnRhaXJlIiwibWVzc2FnZSIsIndpbmRvdyIsImFsZXJ0IiwiY2xvc2VzdCIsIm5leHQiLCJjaGFyZ2VyU291c0NvbW1lbnRhaXJlIiwiY29tbWVudGFpcmVzIiwiYWRkQ2xhc3MiLCJyZW1vdmVBdHRyIiwiZWFjaCIsImVuY29kZWRDb21tZW50YWlyZSIsImlkIiwicHV0Il0sInNvdXJjZVJvb3QiOiIifQ==