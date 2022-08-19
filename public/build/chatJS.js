(self["webpackChunk"] = self["webpackChunk"] || []).push([["chatJS"],{

/***/ "./assets/js/chat/chat.js":
/*!********************************!*\
  !*** ./assets/js/chat/chat.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/Loader */ "./assets/js/helpers/Loader.js");
/* harmony import */ var _chatSenderRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chatSenderRequest */ "./assets/js/chat/chatSenderRequest.js");
/* harmony import */ var _components_ConversationBaseComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ConversationBaseComponent */ "./assets/js/chat/components/ConversationBaseComponent.js");
/* harmony import */ var _helpers_chat_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/chat_helpers */ "./assets/js/chat/helpers/chat_helpers.js");
/* harmony import */ var _helpers_inputFilePreview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/inputFilePreview */ "./assets/js/helpers/inputFilePreview.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







__webpack_require__(/*! ./chat_new_one */ "./assets/js/chat/chat_new_one.js");

__webpack_require__(/*! ./chat_menu */ "./assets/js/chat/chat_menu.js");

__webpack_require__(/*! ./chatMercureTraitement */ "./assets/js/chat/chatMercureTraitement.js");

__webpack_require__(/*! ./chat_canal_instance */ "./assets/js/chat/chat_canal_instance.js");

__webpack_require__(/*! ./chatGroupCanal */ "./assets/js/chat/chatGroupCanal.js");

$(function () {
  // envoyer un message
  $(this).on('click', '.chat-btn-send', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var chatContainer, bodyMessage, inputText, emptyMessage, conversationBaseComponent, code, files, messageValue, message;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              chatContainer = $(this).closest('.chat-box-container');
              bodyMessage = chatContainer.find('.card-body');
              inputText = chatContainer.find('.chat-input-textes');
              emptyMessage = chatContainer.find('.chat-empty-message');
              conversationBaseComponent = new _components_ConversationBaseComponent__WEBPACK_IMPORTED_MODULE_6__.ConversationBaseComponent(); // soit on a le canal, soit on a le code

              code = $(this).attr('data-code');
              files = [];
              chatContainer.find('input[name="files[]"]').each(function () {
                files.push($(this).val());
                $(this).remove();
              });
              messageValue = inputText.val();

              if (!(messageValue.length > 0 || files.length > 0)) {
                _context.next = 24;
                break;
              }

              (0,_helpers_Loader__WEBPACK_IMPORTED_MODULE_4__.loaderOn)(bodyMessage[0]);
              _context.next = 14;
              return (0,_chatSenderRequest__WEBPACK_IMPORTED_MODULE_5__.sendMessage)(messageValue, code, files);

            case 14:
              message = _context.sent;
              conversationBaseComponent.clearVu(bodyMessage);
              conversationBaseComponent.clearFile(chatContainer);
              chatContainer.find('.chat-list-group-messages').append(conversationBaseComponent.getMessage(message));
              inputText.val('');
              bodyMessage[0].scrollTop = bodyMessage[0].scrollHeight;
              (0,_helpers_Loader__WEBPACK_IMPORTED_MODULE_4__.loaderOff)(bodyMessage[0]);

              if (emptyMessage.length > 0) {
                emptyMessage.remove();
              }

              _context.next = 24;
              return (0,_helpers_chat_helpers__WEBPACK_IMPORTED_MODULE_7__.updateMenu)(message.canal);

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }()); // activer le comportement par défault de l'inputFile
  // comportement par défaut arréter et qui est causé par l'évènement click du parent

  $(this).on('click', 'input[type="file"]', function (e) {
    e.stopPropagation();
  }); // upload file

  $(this).on('click', '.chat-uploadImage', function (e) {
    e.preventDefault();
    var inputFile = $('<input />', {
      type: 'file',
      "class": 'd-none'
    });
    $(this).closest('.chat-box-container').find('.chat-files-preview').append(inputFile);
    inputFile.trigger('click');
  });
  $(this).on('change', '.chat-box-container input[type="file"]', /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
      var containerImg, img, fileName, container, fileNameInput;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              containerImg = $('<div />');
              img = $('<img />', {
                "class": 'chat-file-item'
              });
              containerImg.html(img);
              $(this).closest('.chat-box-container').find('.chat-files-preview').append(containerImg);
              (0,_helpers_inputFilePreview__WEBPACK_IMPORTED_MODULE_8__.readURL)($(this)[0], img[0]);
              (0,_helpers_Loader__WEBPACK_IMPORTED_MODULE_4__.loaderOn)(containerImg[0], false, {
                'loaderWidth': '40px',
                'loaderHeight': '40px',
                'backdrop-color': 'rgba(255,255,255,0.5) !important'
              });
              _context2.next = 9;
              return (0,_chatSenderRequest__WEBPACK_IMPORTED_MODULE_5__.uploadFile)($(this)[0]);

            case 9:
              fileName = _context2.sent;
              (0,_helpers_Loader__WEBPACK_IMPORTED_MODULE_4__.loaderOff)(containerImg[0]);
              container = $(this).closest('.chat-box-container');
              fileNameInput = $('<input />', {
                type: 'hidden',
                name: 'files[]'
              });
              fileNameInput.val(fileName);
              container.append(fileNameInput);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }()); // supprimer le conteneur du message

  $(this).on('click', '.chat-btn-close', function (e) {
    e.preventDefault();
    $(this).closest('.chat-box-container').remove();
  });
  $(this).on('click', '.chat-btn-minimise', function (e) {
    e.preventDefault();
    $(this).closest('.chat-box-container,.chat-float-menu').addClass('chat-minimised');
    $(this).find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
    $(this).addClass('chat-btn-maximise').removeClass('chat-btn-minimise');
  });
  $(this).on('click', '.chat-btn-maximise', function (e) {
    e.preventDefault();
    $(this).closest('.chat-box-container,.chat-float-menu').removeClass('chat-minimised');
    $(this).find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
    $(this).addClass('chat-btn-minimise').removeClass('chat-btn-maximise');
  });
  $(this).on('focus', '.chat-input-textes', /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
      var canal_id;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();
              canal_id = $(this).closest('.chat-box-container').attr('data-id');
              _context3.next = 4;
              return (0,_chatSenderRequest__WEBPACK_IMPORTED_MODULE_5__.notifyUserTyping)(canal_id);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }());
  $(this).on('focusout', '.chat-input-textes', /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
      var canal_id;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              canal_id = $(this).closest('.chat-box-container').attr('data-id');
              _context4.next = 4;
              return (0,_chatSenderRequest__WEBPACK_IMPORTED_MODULE_5__.notifyUserStopTyping)(canal_id);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }());
});

/***/ }),

/***/ "./assets/js/chat/chatGroupCanal.js":
/*!******************************************!*\
  !*** ./assets/js/chat/chatGroupCanal.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _chatSenderRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chatSenderRequest */ "./assets/js/chat/chatSenderRequest.js");
/* harmony import */ var _helpers_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/Loader */ "./assets/js/helpers/Loader.js");
/* harmony import */ var _components_CanalGroupsComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/CanalGroupsComponent */ "./assets/js/chat/components/CanalGroupsComponent.js");
/* harmony import */ var _components_MenuComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/MenuComponent */ "./assets/js/chat/components/MenuComponent.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");






function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






$(function () {
  var canalsComponent = new _components_CanalGroupsComponent__WEBPACK_IMPORTED_MODULE_7__.CanalGroupsComponent();
  $(this).on('input', '.chatSearchUser', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var boxCreationContainer, searchValue, divChat_usersList, users;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              boxCreationContainer = $(this).closest('.chat-modal-container');
              searchValue = $(this).val();
              divChat_usersList = boxCreationContainer.find('.chat_usersList');

              if (!(searchValue.length > 0)) {
                _context.next = 14;
                break;
              }

              divChat_usersList.html('');
              (0,_helpers_Loader__WEBPACK_IMPORTED_MODULE_6__.loaderOn)(divChat_usersList[0], 'ON');
              _context.next = 9;
              return (0,_chatSenderRequest__WEBPACK_IMPORTED_MODULE_5__.findDestinataire)(searchValue);

            case 9:
              users = _context.sent;
              divChat_usersList.html(canalsComponent.getListUser(users));
              (0,_helpers_Loader__WEBPACK_IMPORTED_MODULE_6__.loaderOff)(divChat_usersList[0]);
              _context.next = 15;
              break;

            case 14:
              divChat_usersList.html('');

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  $(this).on('click', '.chat-select-user', function (e) {
    e.preventDefault();
    var user = JSON.parse(decodeURIComponent($(this).attr('data-user')));
    var chat_userBadgeList = $('.chat_userBadgeList');

    if ($('#chat-badgeUser-' + user.id).length === 0) {
      chat_userBadgeList.append(canalsComponent.userBadge(user));
    }
  });
  $(this).on('click', '#chat-btn-createCanal', /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
      var inputNom, nom, alertError, users_id, canalMessage, menuComponent, groupInstance;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              inputNom = $('#chat_inputCanalName');
              nom = inputNom.val();
              alertError = $('.alert-empty-name');
              users_id = getUserIdsByBadge($(this).closest('.chat-modal-container'));

              if (nom.length === 0) {
                alertError.removeClass('d-none');
              }

              _context2.next = 8;
              return (0,_chatSenderRequest__WEBPACK_IMPORTED_MODULE_5__.createGroupCanal)(nom, users_id);

            case 8:
              canalMessage = _context2.sent;

              if (canalMessage.error) {
                alertError.removeClass('d-none');
              } else {
                menuComponent = new _components_MenuComponent__WEBPACK_IMPORTED_MODULE_8__.MenuComponent();
                groupInstance = menuComponent.getGroupsCanalItem(canalMessage);
                $('.chat-list-groupCanal').append(groupInstance);
                $('[data-bs-dismiss="modal"]').trigger('click');
              }

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  $(this).on('hidden.bs.modal', '#chatModalCreateGroups', function (e) {
    $('#chat_inputCanalName').val('');
    $('.chat-badgeUser').each(function () {
      $(this).remove();
    });
    $('.chat_usersList').html('');
    $('#chatSearchUser').val('');
  });
  $(this).on('hidden.bs.modal', '.chat-modal-addUsers', function (e) {
    $(this).remove();
  });
  $(this).on('click', '#chat-btn-addUsers', /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
      var modal_container, users_id;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();
              modal_container = $(this).closest('.chat-modal-container');
              users_id = getUserIdsByBadge(modal_container);
              _context3.next = 5;
              return (0,_chatSenderRequest__WEBPACK_IMPORTED_MODULE_5__.chat_groupCanal_addUser)(modal_container.attr('data-canal-id'), users_id);

            case 5:
              modal_container.find('.alert-success').removeClass('d-none');
              setTimeout(function () {
                $(modal_container).find('[data-bs-dismiss="modal"]').trigger('click');
              }, 500);

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
  }());
  $(this).on('click', '.chat-remove-user', /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              e.stopPropagation();
              _context4.next = 4;
              return (0,_chatSenderRequest__WEBPACK_IMPORTED_MODULE_5__.chat_groupCanal_removeUser)($(this).attr('data-canal-id'));

            case 4:
              $(this).closest('.chat-choose-canal').remove();

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }());
});

function getUserIdsByBadge(container) {
  var users_id = [];
  $(container).find('.chat-badgeUser').each(function () {
    users_id.push($(this).attr('data-user-id'));
  });
  return users_id;
}

/***/ }),

/***/ "./assets/js/chat/chatMercureTraitement.js":
/*!*************************************************!*\
  !*** ./assets/js/chat/chatMercureTraitement.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var event_source_polyfill_src_eventsource_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! event-source-polyfill/src/eventsource.min.js */ "./node_modules/event-source-polyfill/src/eventsource.min.js");
/* harmony import */ var event_source_polyfill_src_eventsource_min_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(event_source_polyfill_src_eventsource_min_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ConversationComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ConversationComponent */ "./assets/js/chat/components/ConversationComponent.js");
/* harmony import */ var _helpers_chat_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/chat_helpers */ "./assets/js/chat/helpers/chat_helpers.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");






function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




$(function () {
  // detecter s'il y a un message
  var chat_newMessage_topic = JSON.parse(document.getElementById("chat-newMessage-topic").textContent);
  var chat_vu_topic = JSON.parse(document.getElementById("chat-vu-topic").textContent);
  var chat_userTyping_topic = JSON.parse(document.getElementById("chat-userTyping-topic").textContent);
  var chat_userStopTyping_topic = JSON.parse(document.getElementById("chat-userStopTyping-topic").textContent);
  var eventNewMessage = new EventSource(chat_newMessage_topic);
  var eventVu = new EventSource(chat_vu_topic);
  var eventUserTyping = new EventSource(chat_userTyping_topic);
  var eventUserStopTyping = new EventSource(chat_userStopTyping_topic);
  var conversationComponent = new _components_ConversationComponent__WEBPACK_IMPORTED_MODULE_6__.ConversationComponent(); // présence d'un nouveau message

  eventNewMessage.onmessage = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
      var message, canal, user, jCanal;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              message = JSON.parse(event.data);
              canal = message.canal;
              user = message.user; // si une instance est ouverte

              jCanal = $('#canal-' + canal.id);
              jCanal.find('.chat-list-group-messages').append(conversationComponent.getMessage(message)); // si l'instance n'est pas ouverte

              if (!(jCanal.length === 0)) {
                _context.next = 9;
                break;
              }

              _context.next = 8;
              return (0,_helpers_chat_helpers__WEBPACK_IMPORTED_MODULE_7__.showMessageInstance)(canal);

            case 8:
              jCanal = _context.sent;

            case 9:
              // mettre en évidence le canal
              conversationComponent.addHighligh(jCanal); // mettre à jour le menu

              _context.next = 12;
              return (0,_helpers_chat_helpers__WEBPACK_IMPORTED_MODULE_7__.updateMenu)(canal);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(); // quand quelqu'un voit le message


  eventVu.onmessage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
      var canal, dernierMessageItem, idUserEnvoyeur, jCanal;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              canal = JSON.parse(event.data);
              dernierMessageItem = $('.chat-list-group-messages>.list-group-item').last();
              idUserEnvoyeur = parseInt(dernierMessageItem.attr('data-id-user')); // si une instance est ouverte et que la personne qui a vu le message n'est pas l'envoyeur

              jCanal = $('#canal-' + canal.id);
              conversationComponent.clearVu(jCanal);

              if (jCanal.length > 0 && idUserEnvoyeur !== canal.vuPar.user.id) {
                // todo: mettre un vu
                conversationComponent.addVu(jCanal, canal);
              }

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }(); // quand quelqu'un est en train d'écrire


  eventUserTyping.onmessage = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(event) {
      var canal;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              canal = JSON.parse(event.data);
              conversationComponent.addUserTyping($('.chat-box-container[id="canal-' + canal.id + '"]'), canal.userTyping);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }(); // quand quelqu'un arrete d'écrire


  eventUserStopTyping.onmessage = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(event) {
      var canal;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              canal = JSON.parse(event.data);
              conversationComponent.removeUserTyping($('.chat-box-container[id="canal-' + canal.id + '"]'), canal.userTyping);

            case 2:
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
});

/***/ }),

/***/ "./assets/js/chat/chatSenderRequest.js":
/*!*********************************************!*\
  !*** ./assets/js/chat/chatSenderRequest.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chat_groupCanal_addUser": () => (/* binding */ chat_groupCanal_addUser),
/* harmony export */   "chat_groupCanal_removeUser": () => (/* binding */ chat_groupCanal_removeUser),
/* harmony export */   "createGroupCanal": () => (/* binding */ createGroupCanal),
/* harmony export */   "findDestinataire": () => (/* binding */ findDestinataire),
/* harmony export */   "getGroupeCanal": () => (/* binding */ getGroupeCanal),
/* harmony export */   "getMessageByCode": () => (/* binding */ getMessageByCode),
/* harmony export */   "getSingleCanal": () => (/* binding */ getSingleCanal),
/* harmony export */   "notifyUserStopTyping": () => (/* binding */ notifyUserStopTyping),
/* harmony export */   "notifyUserTyping": () => (/* binding */ notifyUserTyping),
/* harmony export */   "seeCanal": () => (/* binding */ seeCanal),
/* harmony export */   "sendMessage": () => (/* binding */ sendMessage),
/* harmony export */   "uploadFile": () => (/* binding */ uploadFile)
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);










function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function findDestinataire(_x) {
  return _findDestinataire.apply(this, arguments);
}

function _findDestinataire() {
  _findDestinataire = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(finder) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(finder.length > 1)) {
              _context.next = 4;
              break;
            }

            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_9___default().get(Routing.generate('user_findDest', {
              finder: finder
            }));

          case 3:
            return _context.abrupt("return", _context.sent.data);

          case 4:
            return _context.abrupt("return", []);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _findDestinataire.apply(this, arguments);
}

function getMessageByCode() {
  return _getMessageByCode.apply(this, arguments);
}

function _getMessageByCode() {
  _getMessageByCode = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var code,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            code = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : null;

            if (!(code !== null)) {
              _context2.next = 5;
              break;
            }

            _context2.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_9___default().get(Routing.generate('chat_getMessage_byCode', {
              code: code
            }));

          case 4:
            return _context2.abrupt("return", _context2.sent.data);

          case 5:
            return _context2.abrupt("return", []);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getMessageByCode.apply(this, arguments);
}

function sendMessage(_x2, _x3) {
  return _sendMessage.apply(this, arguments);
}

function _sendMessage() {
  _sendMessage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(message, code) {
    var files,
        bodyRequest,
        _args3 = arguments;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            files = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : [];
            // envoyer un message
            bodyRequest = new URLSearchParams();
            bodyRequest.append('textes', message);
            files.forEach(function (fileName) {
              bodyRequest.append('files[]', fileName);
            });
            _context3.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_9___default().post(Routing.generate('chat_addMessage', {
              code: code
            }), bodyRequest);

          case 6:
            return _context3.abrupt("return", _context3.sent.data);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _sendMessage.apply(this, arguments);
}

function getSingleCanal() {
  return _getSingleCanal.apply(this, arguments);
}

function _getSingleCanal() {
  _getSingleCanal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_9___default().get(Routing.generate('chat_getCanalSingleMessage'));

          case 2:
            return _context4.abrupt("return", _context4.sent.data);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getSingleCanal.apply(this, arguments);
}

function getGroupeCanal() {
  return _getGroupeCanal.apply(this, arguments);
}

function _getGroupeCanal() {
  _getGroupeCanal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_9___default().get(Routing.generate('chat_getCanalMessage'));

          case 2:
            return _context5.abrupt("return", _context5.sent.data);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getGroupeCanal.apply(this, arguments);
}

function createGroupCanal(_x4, _x5) {
  return _createGroupCanal.apply(this, arguments);
}

function _createGroupCanal() {
  _createGroupCanal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(nom, users_id) {
    var bodyRequest;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            bodyRequest = new URLSearchParams();
            bodyRequest.append('nom', nom);
            users_id.forEach(function (id) {
              bodyRequest.append('users[]', id);
            });
            _context6.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_9___default().post(Routing.generate('chat_createGroupCanal'), bodyRequest);

          case 5:
            return _context6.abrupt("return", _context6.sent.data);

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _createGroupCanal.apply(this, arguments);
}

function seeCanal(_x6) {
  return _seeCanal.apply(this, arguments);
}

function _seeCanal() {
  _seeCanal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(canal_id) {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_9___default().get(Routing.generate('chat_vuMessage', {
              id: canal_id
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
  return _seeCanal.apply(this, arguments);
}

function notifyUserTyping(_x7) {
  return _notifyUserTyping.apply(this, arguments);
}

function _notifyUserTyping() {
  _notifyUserTyping = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(canal_id) {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_9___default().get(Routing.generate('chat_notifyUserTyping', {
              id: canal_id
            }));

          case 2:
            return _context8.abrupt("return", _context8.sent.data);

          case 3:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _notifyUserTyping.apply(this, arguments);
}

function notifyUserStopTyping(_x8) {
  return _notifyUserStopTyping.apply(this, arguments);
}

function _notifyUserStopTyping() {
  _notifyUserStopTyping = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(canal_id) {
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_9___default().get(Routing.generate('chat_notifyUserStopTyping', {
              id: canal_id
            }));

          case 2:
            return _context9.abrupt("return", _context9.sent.data);

          case 3:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _notifyUserStopTyping.apply(this, arguments);
}

function chat_groupCanal_removeUser(_x9) {
  return _chat_groupCanal_removeUser.apply(this, arguments);
}

function _chat_groupCanal_removeUser() {
  _chat_groupCanal_removeUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(canal_id) {
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_9___default()["delete"](Routing.generate('chat_groupCanal_removeUser', {
              id: canal_id,
              includeMe: true
            }));

          case 2:
            return _context10.abrupt("return", _context10.sent.data);

          case 3:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _chat_groupCanal_removeUser.apply(this, arguments);
}

function chat_groupCanal_addUser(_x10, _x11) {
  return _chat_groupCanal_addUser.apply(this, arguments);
}

function _chat_groupCanal_addUser() {
  _chat_groupCanal_addUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(canal_id, users_id) {
    var bodyRequest;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            bodyRequest = new URLSearchParams();
            users_id.forEach(function (id) {
              bodyRequest.append('users[]', id);
            });
            _context11.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_9___default().post(Routing.generate('chat_groupCanal_addUser', {
              id: canal_id
            }), bodyRequest);

          case 4:
            return _context11.abrupt("return", _context11.sent.data);

          case 5:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _chat_groupCanal_addUser.apply(this, arguments);
}

function uploadFile(_x12) {
  return _uploadFile.apply(this, arguments);
}

function _uploadFile() {
  _uploadFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(fileUpload) {
    var formData, response;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            formData = new FormData();
            formData.append("file", fileUpload.files[0]);
            _context12.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_9___default().post(Routing.generate('chat_importFile'), formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });

          case 4:
            response = _context12.sent.data;

            if (response.error) {
              _context12.next = 7;
              break;
            }

            return _context12.abrupt("return", response.fileUrl);

          case 7:
            return _context12.abrupt("return", false);

          case 8:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _uploadFile.apply(this, arguments);
}

/***/ }),

/***/ "./assets/js/chat/chat_canal_instance.js":
/*!***********************************************!*\
  !*** ./assets/js/chat/chat_canal_instance.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ConversationComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ConversationComponent */ "./assets/js/chat/components/ConversationComponent.js");
/* harmony import */ var _helpers_chat_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/chat_helpers */ "./assets/js/chat/helpers/chat_helpers.js");
/* harmony import */ var _chatSenderRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chatSenderRequest */ "./assets/js/chat/chatSenderRequest.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




$(function () {
  var conversationComponent = new _components_ConversationComponent__WEBPACK_IMPORTED_MODULE_4__.ConversationComponent(); // lorsqu'on choisi un canal

  $(this).on('click', '.chat-choose-canal', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var canal;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              e.stopPropagation();
              canal = JSON.parse(decodeURIComponent($(this).attr('data-canal')));

              if (!($('.chat-canal-instance[data-id="' + canal.id + '"]').length === 0)) {
                _context.next = 10;
                break;
              }

              (0,_helpers_chat_helpers__WEBPACK_IMPORTED_MODULE_5__.showMessageInstance)(canal).then(function () {}); // on envoie un vu seulement si le canal en questin n'est pas encore vu

              if (!($('[data-canal-menu-id="' + canal.id + '"]').find('.chat-not-seen').length > 0)) {
                _context.next = 8;
                break;
              }

              _context.next = 8;
              return (0,_chatSenderRequest__WEBPACK_IMPORTED_MODULE_6__.seeCanal)(canal.id);

            case 8:
              _context.next = 10;
              return (0,_helpers_chat_helpers__WEBPACK_IMPORTED_MODULE_5__.updateMenu)(canal);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  $(this).on('click', '.chat-canal-instance', /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
      var menuItem;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();

              if (!($(this).find('.highlight-canal').length > 0)) {
                _context2.next = 8;
                break;
              }

              conversationComponent.removeHighlight(this);
              _context2.next = 5;
              return (0,_chatSenderRequest__WEBPACK_IMPORTED_MODULE_6__.seeCanal)($(this).attr('data-id'));

            case 5:
              menuItem = $('.list-group-item');
              menuItem.removeClass('bg-grey-1');
              menuItem.find('.chat-not-seen').remove();

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
  }());
});

/***/ }),

/***/ "./assets/js/chat/chat_menu.js":
/*!*************************************!*\
  !*** ./assets/js/chat/chat_menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _chatSenderRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chatSenderRequest */ "./assets/js/chat/chatSenderRequest.js");
/* harmony import */ var _helpers_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/Loader */ "./assets/js/helpers/Loader.js");
/* harmony import */ var _components_MenuComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/MenuComponent */ "./assets/js/chat/components/MenuComponent.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _components_CanalGroupsComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/CanalGroupsComponent */ "./assets/js/chat/components/CanalGroupsComponent.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");







function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






$( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var chatSingleCanal, chatGroupCanal, menuComponent;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          chatSingleCanal = $('.chat-single-canal');
          chatGroupCanal = $('.chat-groupe-canal');
          menuComponent = new _components_MenuComponent__WEBPACK_IMPORTED_MODULE_8__.MenuComponent(); // charger les canals

          (0,_helpers_Loader__WEBPACK_IMPORTED_MODULE_7__.loaderOn)(chatSingleCanal[0], true);
          (0,_chatSenderRequest__WEBPACK_IMPORTED_MODULE_6__.getSingleCanal)().then(function (singleCanals) {
            chatSingleCanal.html(menuComponent.getSingleCanal(singleCanals));
            (0,_helpers_Loader__WEBPACK_IMPORTED_MODULE_7__.loaderOff)(chatSingleCanal[0]);
          }); // charger les groupes canals

          (0,_helpers_Loader__WEBPACK_IMPORTED_MODULE_7__.loaderOn)(chatGroupCanal[0], true);
          (0,_chatSenderRequest__WEBPACK_IMPORTED_MODULE_6__.getGroupeCanal)().then(function (groupeCanals) {
            chatGroupCanal.html(menuComponent.getGroupsCanal(groupeCanals));
            (0,_helpers_Loader__WEBPACK_IMPORTED_MODULE_7__.loaderOff)(chatGroupCanal[0]);
          });
          $(this).on('input', '.chat-menu-search', function (e) {
            e.preventDefault();
            var search_value = $(this).val();
            var listCanal = $('.chat-choose-canal');

            if (search_value.length > 0) {
              listCanal.each(function () {
                $(this).addClass('d-none');
              });
              listCanal.filter(function (e) {
                var data_search = $(this).attr('data-search');
                var match = data_search.toLowerCase().match(search_value.toLowerCase());

                if (match === null) {
                  return false;
                }

                return match.length > 0;
              }).removeClass('d-none');
            } else {
              listCanal.each(function () {
                $(this).removeClass('d-none');
              });
            }
          });
          $(this).on('click', '.chat-add-users', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var canalGroupComponent = new _components_CanalGroupsComponent__WEBPACK_IMPORTED_MODULE_10__.CanalGroupsComponent();
            $('body').append(canalGroupComponent.getModalAddUser($(this).attr('data-canal-id')));
            var modalAddUser = new bootstrap__WEBPACK_IMPORTED_MODULE_9__.Modal($('#chatModalAddUsers'));
            modalAddUser.show();
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
})));

/***/ }),

/***/ "./assets/js/chat/chat_new_one.js":
/*!****************************************!*\
  !*** ./assets/js/chat/chat_new_one.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/Loader */ "./assets/js/helpers/Loader.js");
/* harmony import */ var _chatSenderRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chatSenderRequest */ "./assets/js/chat/chatSenderRequest.js");
/* harmony import */ var _components_NewConversationComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/NewConversationComponent */ "./assets/js/chat/components/NewConversationComponent.js");
/* harmony import */ var _helpers_chat_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/chat_helpers */ "./assets/js/chat/helpers/chat_helpers.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





$(function () {
  var newConversationComponent = new _components_NewConversationComponent__WEBPACK_IMPORTED_MODULE_5__.NewConversationComponent(); // nouveau message

  $(this).on('click', '.chat-btn-newOne', function (e) {
    e.preventDefault();
    (0,_helpers_chat_helpers__WEBPACK_IMPORTED_MODULE_6__.showMessageInstance)().then(function (r) {});
  }); // recherche d'un utilisateur sur la section nouveau message

  $(this).on('input', '#search-user', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var bodyMessage, users, template;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              bodyMessage = $('.chat-float-newOne>.card-body');
              (0,_helpers_Loader__WEBPACK_IMPORTED_MODULE_3__.loaderOn)(bodyMessage[0]);
              _context.next = 5;
              return (0,_chatSenderRequest__WEBPACK_IMPORTED_MODULE_4__.findDestinataire)($(this).val());

            case 5:
              users = _context.sent;
              template = newConversationComponent.getListUser(users);
              bodyMessage.html(template);
              (0,_helpers_Loader__WEBPACK_IMPORTED_MODULE_3__.loaderOff)(bodyMessage[0]);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }()); // choix d'un utilisateur pour ouvrir une connexion

  $(this).on('click', '.chat-choose-user', /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
      var bodyMessage, subHeader, user, messages;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              bodyMessage = $('.chat-float-newOne>.card-body');
              subHeader = $('.chat-float-newOne>.card-sub-header');
              user = JSON.parse(decodeURIComponent($(this).attr('data-user')));
              bodyMessage.html('');
              subHeader.html(newConversationComponent.getHeader(user));
              (0,_helpers_Loader__WEBPACK_IMPORTED_MODULE_3__.loaderOn)(bodyMessage[0]);
              _context2.next = 9;
              return (0,_chatSenderRequest__WEBPACK_IMPORTED_MODULE_4__.getMessageByCode)(user.chatCode);

            case 9:
              messages = _context2.sent;
              // charger les messages
              bodyMessage.html(newConversationComponent.getMessages(messages));
              $('.chat-btn-send').attr('data-code', user.chatCode);
              (0,_helpers_Loader__WEBPACK_IMPORTED_MODULE_3__.loaderOff)(bodyMessage[0]);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
});

/***/ }),

/***/ "./assets/js/chat/components/CanalGroupsComponent.js":
/*!***********************************************************!*\
  !*** ./assets/js/chat/components/CanalGroupsComponent.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanalGroupsComponent": () => (/* binding */ CanalGroupsComponent)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_3__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CanalGroupsComponent = /*#__PURE__*/function () {
  function CanalGroupsComponent() {
    _classCallCheck(this, CanalGroupsComponent);

    _defineProperty(this, "users", []);
  }

  _createClass(CanalGroupsComponent, [{
    key: "getModalAddUser",
    value: function getModalAddUser(canal_id) {
      return '<!-- Modal -->\n' + '<div class="modal fade text-start chat-modal-addUsers chat-modal-container" id="chatModalAddUsers" data-canal-id="' + canal_id + '" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">\n' + '    <div class="modal-dialog">\n' + '        <div class="modal-content">\n' + '            <div class="modal-header">\n' + '                <h5 class="modal-title" id="exampleModalLabel">Ajouter des membres dans le groupe</h5>\n' + '                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n' + '            </div>\n' + '            <div class="modal-body">\n' + '               <div class="alert alert-success alert-empty-name d-none" role="alert">\n' + '                    Enregistrement effectué\n' + '                </div>' + '                <div class="chat_userBadgeList mb-2">\n' + '\n' + '                </div>\n' + '                <div>\n' + '                    <label for="exampleFormControlInput1" class="form-label">Ajouter des membres</label>\n' + '                    <input type="text" class="form-control chatSearchUser" id="chatSearchUser" placeholder="Rechercher un utilisateur">\n' + '                </div>\n' + '                <div class="chat_usersList mt-2">\n' + '\n' + '                </div>\n' + '            </div>\n' + '\n' + '            <div class="modal-footer">\n' + '                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>\n' + '                <button type="button" class="btn btn-primary" id="chat-btn-addUsers">Enregistrer</button>\n' + '            </div>\n' + '        </div>\n' + '    </div>\n' + '</div>';
    }
  }, {
    key: "getListUser",
    value: function getListUser() {
      var users = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var template = '';

      if (users.length > 0) {
        var that = this;
        users.forEach(function (user) {
          template += that.getListUserItem(user);
        });
      } else {
        return this.getEmptyListUserMessage();
      }

      return '<ul class="list-group list-group-flush ">\n' + template + '</ul>';
    }
  }, {
    key: "getListUserItem",
    value: function getListUserItem(user) {
      var userStringified = encodeURIComponent(JSON.stringify(user));
      var component = '<li class="list-group-item chat-select-user  pb-0 ps-3" id="chat-user-' + user.id + '" data-user="' + userStringified + '">\n' + '     <div class="row">\n' + '         <div class="col-2">\n' + '             <img src="https://github.com/mdo.png" alt="hugenerd" width="50" height="50" class="rounded-circle">\n' + '          </div>\n' + '          <div class="col-10 ps-2">\n' + '              <span>' + user.nom + ' ' + user.prenom + '</span><br>\n' + '              <p class="text-muted fs-12 line-height-13 pb-3 mb-0 border-bottom">\n' + '              ' + user.email + '              </p>\n' + '          </div>\n' + '     </div>\n';
      '</li>';
      return component;
    }
  }, {
    key: "getEmptyListUserMessage",
    value: function getEmptyListUserMessage() {
      return '<div class="text-center">\n' + '   <i class="fa-solid fa-eye-dropper-empty"></i> Aucun résultat ';
      '</div>';
    }
  }, {
    key: "userBadge",
    value: function userBadge(user) {
      return '<span class="badge bg-primary me-2 chat-badgeUser" data-user-id="' + user.id + '" id="chat-badgeUser-' + user.id + '">' + user.nom + ' ' + user.prenom + ' ' + '<a href="#" onclick="$(this).parent().remove()" class="ms-2 text-white bg-danger px-1 rounded chat-delete-badgeUser"><i class="fa fa-close"></i></a>' + '</span>';
    }
  }, {
    key: "clearUserBadge",
    value: function clearUserBadge() {
      $('.chat-badgeUser').each(function () {
        $(this).remove();
      });
    }
  }]);

  return CanalGroupsComponent;
}();

/***/ }),

/***/ "./assets/js/chat/components/ConversationBaseComponent.js":
/*!****************************************************************!*\
  !*** ./assets/js/chat/components/ConversationBaseComponent.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversationBaseComponent": () => (/* binding */ ConversationBaseComponent)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");







function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ConversationBaseComponent = /*#__PURE__*/function () {
  function ConversationBaseComponent() {
    _classCallCheck(this, ConversationBaseComponent);
  }

  _createClass(ConversationBaseComponent, [{
    key: "getEmptyMessages",
    value: function getEmptyMessages() {
      return '<div class="text-center mt-4 chat-empty-message">' + '<i class="fa-solid fa-eye-dropper-empty"></i> Aucun message disponible<br>' + '<small class="text-muted">Envoyer un message pour démarrer la discussion</small>' + '</div>';
    }
  }, {
    key: "getMessages",
    value: function getMessages(messages) {
      var template = '';

      if (messages.length > 0) {
        var that = this;
        messages.forEach(function (message) {
          template += that.getMessage(message);
        });
      } else {
        template += this.getEmptyMessages();
      }

      return '<ul class="list-group list-group-flush chat-list-group-messages">\n' + template + '</ul>';
    }
  }, {
    key: "getMessage",
    value: function getMessage(message) {
      var currentUserId = parseInt($('#current-user-id').text());
      var imgs = '';

      if (message.files != null && message.files.length > 0) {
        message.files.forEach(function (url) {
          imgs += '<div class="pb-2 pt-2 mt-2">' + '<img src="' + url + '" alt="le fichier ne peut être charger" class="chat-image" />' + '</div>';
        });
      }

      var avatar = '/user/avatar/' + message.user.id;
      var onerror = 'onerror="this.onerror=null; this.src=\'/assets/vuexy/images/portrait/small/avatar-s-11.jpg\'"';

      if (currentUserId !== message.user.id) {
        return '<li class="list-group-item  pb-2 ps-3 pe-5" data-id-user="' + message.user.id + '">\n' + '                <div class="row">\n' + '                    <div class="col-2 d-flex">\n' + '                        <img src="' + avatar + '" ' + onerror + ' alt="hugenerd" width="40" height="40" class="rounded-circle my-auto">\n' + '                    </div>\n' + '                    <div class="col-10 ps-2 rounded-3 bg-light-gray">\n' + '                        <span class="fw-bold line-height-13 fs-13">' + message.user.nom + ' ' + message.user.prenom + '</span><br>\n' + '                        <span class="p-0 line-height-13 text-muted fs-11 border-bottom pb-2">Envoyer ' + message.renduDateCreationMessage + '</span>\n' + imgs + '                        <p class=" fs-14 line-height-17 mt-2 mb-0 pt-2 pb-2 ">\n' + message.textes + '\n' + '                     </p>\n' + '                    </div>\n' + '                </div>\n' + '            </li>\n';
      } else {
        return '<li class="list-group-item ps-5  pb-2 text-end " data-id-user="' + message.user.id + '">\n' + '                <div class="row">\n' + '                    <div class="col-10 ps-2 rounded-3 bg-light-primary">\n' + '                        <span class="fw-bold line-height-13 fs-13 ">' + message.user.nom + ' ' + message.user.prenom + '</span><br>\n' + '                        <span class="p-0 line-height-13 fs-11    border-bottom border-color-light-primary pb-2">Envoyer ' + message.renduDateCreationMessage + '</span>\n' + imgs + '                        <p class=" fs-14 line-height-17 mb-0 mt-2  pt-2 pb-2 ">\n' + message.textes + '\n' + '                     </p>\n' + '                    </div>\n' + '                    <div class="col-2 d-flex">\n' + '                        <img src="' + avatar + '" ' + onerror + ' alt="hugenerd" width="40" height="40" class="rounded-circle my-auto">\n' + '                    </div>\n' + '                </div>\n' + '            </li>\n';
      }
    }
  }, {
    key: "getMessageFileTemplate",
    value: function getMessageFileTemplate(message) {
      var filesTemplate;
      return filesTemplate;
    }
  }, {
    key: "clearVu",
    value: function clearVu(conversationContainer) {
      $(conversationContainer).find('.canal-vu-container').remove();
    }
  }, {
    key: "clearFile",
    value: function clearFile(conversationContainer) {
      $(conversationContainer).find('.chat-files-preview').html('');
    }
  }]);

  return ConversationBaseComponent;
}();

/***/ }),

/***/ "./assets/js/chat/components/ConversationComponent.js":
/*!************************************************************!*\
  !*** ./assets/js/chat/components/ConversationComponent.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversationComponent": () => (/* binding */ ConversationComponent)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _helpers_base64__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../helpers/base64 */ "./assets/js/helpers/base64.js");
/* harmony import */ var _ConversationBaseComponent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ConversationBaseComponent */ "./assets/js/chat/components/ConversationBaseComponent.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
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



var ConversationComponent = /*#__PURE__*/function (_ConversationBaseComp) {
  _inherits(ConversationComponent, _ConversationBaseComp);

  var _super = _createSuper(ConversationComponent);

  function ConversationComponent() {
    _classCallCheck(this, ConversationComponent);

    return _super.apply(this, arguments);
  }

  _createClass(ConversationComponent, [{
    key: "getConversationContainer",
    value: function getConversationContainer(canal) {
      var inputCacheUser = '';
      var nomCanal = '';
      var current_user_id = parseInt($('#current-user-id').text());
      canal.membres.forEach(function (user) {
        inputCacheUser += '<input type="hidden" name="users[]" value="' + _helpers_base64__WEBPACK_IMPORTED_MODULE_16__.Base64.encode(user.id) + '" />\n';

        if (!canal.isGroup && user.id !== current_user_id) {
          nomCanal = user.nom + ' ' + user.prenom;
        }
      });

      if (canal.isGroup) {
        nomCanal = canal.nom;
      } // début initialisation du vu lorsque l'instance est chargé
      // si le canal est un singleCanal


      var vuTemplate = '';

      if (!canal.isGroup && canal.vus.length === 2) {
        vuTemplate = this.getVuTemplate()[0].outerHTML;
      }

      var isGroup = canal.isGroup ? 'true' : 'false';
      return '<div class="card shadow fs-14  chat-canal-instance chat-box-container mb-0 shadow-sm  " data-isGroup="' + isGroup + '" data-id="' + canal.id + '" id="canal-' + canal.id + '" style="width: 18rem;">\n' + '    <div class="card-header bg-princ text-white w-100 py-3">\n' + '        <div class="row">\n' + '            <div class="col-8 d-flex">\n' + '                <div class="my-auto">\n' + '                    <b class="ms-2 ">' + nomCanal + ' <i class="fa-brands fa-facebook-messenger"></i></b>\n' + '                </div>\n' + '            </div>\n' + '            <div class="col-4 text-end">\n' + '                <a href="#" class="text-white chat-btn-minimise me-2"><i class="fa-solid fa-angle-down"></i></a>\n' + '                <a href="#" class="text-white chat-btn-close"><i class="fa-solid fa-close"></i></a>\n' + '            </div>\n' + '        </div>\n' + '\n' + '    </div>\n' + '    <div class="card-body px-0">\n' + '        <!-- zone de messages --> \n' + '         ' + vuTemplate + '\n' + '    </div>\n' + '    <div class="card-footer p-0">\n' + '        <div class="chat-files-preview"></div>' + '        <div class="py-3 ps-2">\n' + '           <span class="users">' + inputCacheUser + '                <a href="#" class="text-danger speed-liveVideo-call pe-2"><i class="fa-solid fa-video"></i></a>' + '           </span> ' + '            <a href="#" class="text-secondary chat-uploadImage"><i class="fa-solid fa-image"></i></a>\n' + '        </div>\n' + '        <div class="input-group bg-white">\n' + '            <input type="text" class="form-control border-0 border-top  fs-12 rounded-0 py-3 chat-input-textes" placeholder="Entrer votre message ..." aria-label="Recipient\'s username with two button addons">\n' + '            <button class="btn btn-outline-secondary text-primary border-0 border-top chat-btn-send" data-code="' + canal.code + '" type="button"><i class="fa-solid fa-paper-plane"></i></button>\n' + '        </div>\n' + '\n' + '    </div>\n' + '</div>';
    }
  }, {
    key: "removeHighlight",
    value: function removeHighlight($currentObject) {
      $($currentObject).find('.card-header').removeClass('highlight-canal  bg-success text-white').addClass('bg-princ');
    }
  }, {
    key: "addHighligh",
    value: function addHighligh($currentObject) {
      $($currentObject).find('.card-header').addClass('highlight-canal bg-success text-white').removeClass('bg-princ');
    }
  }, {
    key: "getVuTemplate",
    value: function getVuTemplate() {
      var template = $('<div />', {
        "class": 'canal-vu-container text-end pe-3'
      });
      var vuTemplate = '<span class="fs-11 text-muted"><i class="fa-solid fa-eye"></i> <span>vu</span></span>';
      template.html(vuTemplate);
      return template;
    }
  }, {
    key: "addVu",
    value: function addVu(conversationContainer) {
      // si un vu existe déjà pas la peine de le rendre à nouveau
      var canalVuContainer = $(conversationContainer).find('.canal-vu-container');

      if (canalVuContainer.length === 0) {
        $(conversationContainer).find('.card-body').append(this.getVuTemplate());
      }
    }
  }, {
    key: "addUserTyping",
    value: function addUserTyping(conversationContainer, user) {
      // si un template existe déjà pas la peine de le rendre à nouveau
      var canalUserTyping = $(conversationContainer).find('.canal-userTyping');

      if (canalUserTyping.length === 0) {
        var template = $('<div />', {
          "class": 'canal-userTyping py-2 px-3  text-muted fs-11 text-end'
        });
        var vuTemplate = '<span class="fw-bold">' + user.prenom + ' ' + user.nom + '</span> est en train d\'écrire...';
        template.html(vuTemplate);
        $(conversationContainer).find('.card-body').append(template);
      }
    }
  }, {
    key: "removeUserTyping",
    value: function removeUserTyping(conversationContainer) {
      $(conversationContainer).find('.canal-userTyping').remove();
    }
  }]);

  return ConversationComponent;
}(_ConversationBaseComponent__WEBPACK_IMPORTED_MODULE_17__.ConversationBaseComponent);

/***/ }),

/***/ "./assets/js/chat/components/MenuComponent.js":
/*!****************************************************!*\
  !*** ./assets/js/chat/components/MenuComponent.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_users_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../images/users.jpg */ "./assets/images/users.jpg");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");







function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var MenuComponent = /*#__PURE__*/function () {
  function MenuComponent() {
    _classCallCheck(this, MenuComponent);
  }

  _createClass(MenuComponent, [{
    key: "getSingleCanal",
    value: // debut liste user coté menu flottant
    function getSingleCanal(canalsMessage) {
      var template = '';

      if (canalsMessage.length > 0) {
        var thisObj = this;
        canalsMessage.forEach(function (canal) {
          template += thisObj.getSingleCanalItem(canal);
        });
      } else {
        return this.getEmptySingleCanalMessage();
      }

      return '<ul class="list-group list-group-flush ">\n' + template + '</ul>';
    }
  }, {
    key: "getSingleCanalItem",
    value: function getSingleCanalItem(canalMessage) {
      var canalStringify = encodeURIComponent(JSON.stringify(canalMessage));
      var lastMessage = canalMessage.lastMessage ? canalMessage.lastMessage.textes.slice(0, 80) : 'Commencer votre première conversation...';
      var seenClass = !canalMessage.isSeen ? 'bg-grey-1' : '';
      var eyeSlashSection = !canalMessage.isSeen ? ' <div class="col-2 text-danger chat-not-seen">' + '        <i class="fa-solid fa-eye-slash"></i>' + ' </div>' : '';
      var current_user_id = parseInt($('#current-user-id').text());
      var membres = canalMessage.membres;
      var avatar = '/user/avatar/';
      var nomCanal = '';
      membres.forEach(function (user) {
        if (user.id !== current_user_id) {
          avatar += user.id;
          nomCanal = user.nom + ' ' + user.prenom;
        }
      });
      var lastMessageClass = !canalMessage.isSeen ? 'col-7' : 'col-9';
      var onerror = 'onerror="this.onerror=null; this.src=\'/assets/vuexy/images/portrait/small/avatar-s-11.jpg\'"';
      var component = '<li class="list-group-item chat-choose-canal ' + seenClass + ' pb-0 ps-3" data-canal-menu-id="' + canalMessage.id + '" data-canal="' + canalStringify + '" data-search="' + canalMessage.nom + '">\n' + '     <div class="row">\n' + '         <div class="col-3">\n' + '             <img src="' + avatar + '" ' + onerror + ' alt="hugenerd" width="50" height="50" class="rounded-circle">\n' + '          </div>\n' + '          <div class="' + lastMessageClass + ' ps-2">\n' + '              <span>' + nomCanal + '</span><br>\n' + '              <p class="text-muted fs-12 line-height-13 pb-3 mb-0 border-bottom">\n' + '              ' + lastMessage + '              </p>\n' + '          </div>\n' + eyeSlashSection + '     </div>\n';
      '</li>';
      return component;
    }
  }, {
    key: "getEmptySingleCanalMessage",
    value: function getEmptySingleCanalMessage() {
      return '<div class="text-center text-muted">\n' + '   <i class="fa-solid fa-eye-dropper-empty"></i> Aucune conversation disponible ';
      '</div>';
    } //  debut liste groupe canal coté menu

  }, {
    key: "getGroupsCanal",
    value: function getGroupsCanal(canalsMessage) {
      var template = '';

      if (canalsMessage.length > 0) {
        var thisObj = this;
        canalsMessage.forEach(function (canal) {
          template += thisObj.getGroupsCanalItem(canal);
        });
      } else {
        return this.getEmptyGroupsCanalMessage();
      }

      return '<ul class="list-group list-group-flush chat-list-groupCanal px-0">\n' + template + '</ul>';
    }
  }, {
    key: "getGroupsCanalItem",
    value: function getGroupsCanalItem(canalMessage) {
      var lastMessage = canalMessage.lastMessage != null ? canalMessage.lastMessage.textes.slice(0, 80) : 'Envoyer votre premier message';
      var canalStringify = encodeURIComponent(JSON.stringify(canalMessage));
      return '<li class="list-group-item chat-choose-canal  pb-0 ps-3" data-canal="' + canalStringify + '" data-search="' + canalMessage.nom + '">\n' + '     <div class="row">\n' + '         <div class="col-3">\n' + '             <img src="' + _images_users_jpg__WEBPACK_IMPORTED_MODULE_6__ + '" alt="hugenerd" width="50" height="50" class="rounded-circle">\n' + '          </div>\n' + '          <div class="col-9 ps-2 border-bottom">\n' + '              <span>' + canalMessage.nom + '</span><br>\n' + '              <p class="text-muted fs-12 line-height-13 pb-3 mb-0 ">\n' + '              ' + lastMessage + '              </p>\n' + '             <div class="text-end pb-3 chat-groupe-action"> \n' + '                <a href="#" class="chat-add-users text-success" data-canal-id="' + canalMessage.id + '"><i class="fa-solid fa-user-plus"></i></a>\n' + '                <a href="#" class="chat-remove-user text-danger ms-2" data-canal-id="' + canalMessage.id + '"><i class="fa-solid fa-right-from-bracket"></i></a>\n' + '             </div>' + '          </div>\n' + '     </div>\n' + '</li>';
    }
  }, {
    key: "getEmptyGroupsCanalMessage",
    value: function getEmptyGroupsCanalMessage() {
      return '<div class="text-center text-muted py-4">\n' + '   <i class="fa-solid fa-eye-dropper-empty"></i> Aucun groupe  ';
      '</div>';
    }
  }]);

  return MenuComponent;
}();

/***/ }),

/***/ "./assets/js/chat/components/NewConversationComponent.js":
/*!***************************************************************!*\
  !*** ./assets/js/chat/components/NewConversationComponent.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewConversationComponent": () => (/* binding */ NewConversationComponent)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _helpers_base64__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../helpers/base64 */ "./assets/js/helpers/base64.js");
/* harmony import */ var _ConversationBaseComponent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ConversationBaseComponent */ "./assets/js/chat/components/ConversationBaseComponent.js");
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



var NewConversationComponent = /*#__PURE__*/function (_ConversationBaseComp) {
  _inherits(NewConversationComponent, _ConversationBaseComp);

  var _super = _createSuper(NewConversationComponent);

  function NewConversationComponent() {
    _classCallCheck(this, NewConversationComponent);

    return _super.apply(this, arguments);
  }

  _createClass(NewConversationComponent, [{
    key: "getHeader",
    value: function getHeader(user) {
      return '<div class="mt-3 ms-2">\n' + '    <span type="button" class="btn btn-primary fw-bold btn-sm position-relative">\n' + '         ' + user.nom + ' ' + user.prenom + '\n' + '    <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">\n' + '       <span class="visually-hidden">New alerts</span>\n' + '       </span>\n' + '    </span>\n' + '</div>';
    }
  }, {
    key: "getConversationContainer",
    value: function getConversationContainer() {
      return '<div class="card shadow fs-14  chat-float-newOne chat-box-container mb-0 shadow-sm" style="width: 18rem;">\n' + '    <div class="card-header bg-princ w-100 py-3">\n' + '        <div class="row">\n' + '            <div class="col-8 d-flex">\n' + '                <div class="my-auto">\n' + '                    <b class="ms-2 ">Nouveau Message <i class="fa-brands fa-facebook-messenger"></i></b>\n' + '                </div>\n' + '            </div>\n' + '            <div class="col-4 text-end">\n' + '                <a href="#" class="text-white chat-btn-minimise me-2"><i class="fa-solid fa-angle-down"></i></a>\n' + '                <a href="#" class="text-white chat-btn-close"><i class="fa-solid fa-close"></i></a>\n' + '            </div>\n' + '        </div>\n' + '\n' + '    </div>\n' + '    <div class="card-sub-header">\n' + '        <div class="input-group">\n' + '            <input type="text" class="form-control  rounded-0 border-0 border-bottom py-3 fs-12" id="search-user" placeholder="Entrer le nom/e-mail du destinataire" aria-label="Recipient\'s username with two button addons">\n' + '        </div>\n' + '    </div>\n' + '    <div class="card-body px-0">\n' + '        <!-- zone de messages --> \n' + '\n' + '    </div>\n' + '    <div class="card-footer p-0">\n' + '        <div class="py-3 ps-2">\n' + '            <!-- <a href="#" class="text-danger pe-2"><i class="fa-solid fa-video"></i></a> -->\n' + '            <!-- <a href="#" class="text-secondary"><i class="fa-solid fa-image"></i></a> -->\n' + '        </div>\n' + '        <div class="input-group bg-white">\n' + '            <input type="text" class="form-control border-0 border-top  fs-12 rounded-0 py-3 chat-input-textes" placeholder="Entrer votre message ..." aria-label="Recipient\'s username with two button addons">\n' + '            <button class="btn btn-outline-secondary text-primary border-0 border-top chat-btn-send" type="button"><i class="fa-solid fa-paper-plane"></i></button>\n' + '        </div>\n' + '\n' + '    </div>\n' + '</div>';
    }
  }, {
    key: "getListUser",
    value: function getListUser() {
      var users = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var template = '';

      if (users.length > 0) {
        var that = this;
        users.forEach(function (user) {
          template += that.getListUserItem(user);
        });
      } else {
        return this.getEmptyListUserMessage();
      }

      return '<ul class="list-group list-group-flush ">\n' + template + '</ul>';
    }
  }, {
    key: "getListUserItem",
    value: function getListUserItem(user) {
      var userStringified = encodeURIComponent(JSON.stringify(user));
      var component = '<li class="list-group-item chat-choose-user  pb-0 ps-3" id="chat-user-' + user.id + '" data-user="' + userStringified + '">\n' + '     <div class="row">\n' + '         <div class="col-3">\n' + '             <img src="https://github.com/mdo.png" alt="hugenerd" width="50" height="50" class="rounded-circle">\n' + '          </div>\n' + '          <div class="col-9 ps-2">\n' + '              <span>' + user.nom + ' ' + user.prenom + '</span><br>\n' + '              <p class="text-muted fs-12 line-height-13 pb-3 mb-0 border-bottom">\n' + '              ' + user.email + '              </p>\n' + '          </div>\n' + '     </div>\n';
      '</li>';
      return component;
    }
  }, {
    key: "getEmptyListUserMessage",
    value: function getEmptyListUserMessage() {
      return '<div class="text-center">\n' + '   <i class="fa-solid fa-eye-dropper-empty"></i> Aucun résultat ';
      '</div>';
    }
  }]);

  return NewConversationComponent;
}(_ConversationBaseComponent__WEBPACK_IMPORTED_MODULE_15__.ConversationBaseComponent);

/***/ }),

/***/ "./assets/js/chat/helpers/chat_helpers.js":
/*!************************************************!*\
  !*** ./assets/js/chat/helpers/chat_helpers.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showMessageInstance": () => (/* binding */ showMessageInstance),
/* harmony export */   "updateMenu": () => (/* binding */ updateMenu)
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ConversationComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ConversationComponent */ "./assets/js/chat/components/ConversationComponent.js");
/* harmony import */ var _helpers_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/Loader */ "./assets/js/helpers/Loader.js");
/* harmony import */ var _chatSenderRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chatSenderRequest */ "./assets/js/chat/chatSenderRequest.js");
/* harmony import */ var _components_MenuComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MenuComponent */ "./assets/js/chat/components/MenuComponent.js");
/* harmony import */ var _components_NewConversationComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/NewConversationComponent */ "./assets/js/chat/components/NewConversationComponent.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






function showMessageInstance() {
  return _showMessageInstance.apply(this, arguments);
}

function _showMessageInstance() {
  _showMessageInstance = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var canal,
        conversationComponent,
        chatBoxContainer,
        messageConversationContainer,
        chat_instance,
        chat_instance_body,
        messages,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            canal = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
            conversationComponent = canal != null ? new _components_ConversationComponent__WEBPACK_IMPORTED_MODULE_4__.ConversationComponent() : new _components_NewConversationComponent__WEBPACK_IMPORTED_MODULE_8__.NewConversationComponent();
            chatBoxContainer = $('.chat-box-container');

            if (chatBoxContainer.length === 3) {
              chatBoxContainer.first().remove();
            }

            messageConversationContainer = $('.chat-conversations-container');

            if (messageConversationContainer.length === 0) {
              messageConversationContainer = $('<div />', {
                "class": 'chat-conversations-container d-flex'
              });
              $('body').append(messageConversationContainer);
            }

            $(messageConversationContainer).append(conversationComponent.getConversationContainer(canal));

            if (!(canal != null)) {
              _context.next = 18;
              break;
            }

            chat_instance = $('#canal-' + canal.id);
            chat_instance_body = $(chat_instance).find('.card-body');
            (0,_helpers_Loader__WEBPACK_IMPORTED_MODULE_5__.loaderOn)(chat_instance_body[0]);
            _context.next = 13;
            return (0,_chatSenderRequest__WEBPACK_IMPORTED_MODULE_6__.getMessageByCode)(canal.code);

          case 13:
            messages = _context.sent;
            // charger les messages
            chat_instance_body.prepend(conversationComponent.getMessages(messages));
            chat_instance_body[0].scrollTop = chat_instance_body[0].scrollHeight;
            (0,_helpers_Loader__WEBPACK_IMPORTED_MODULE_5__.loaderOff)(chat_instance_body[0]);
            return _context.abrupt("return", chat_instance);

          case 18:
            return _context.abrupt("return", null);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _showMessageInstance.apply(this, arguments);
}

function updateMenu(_x) {
  return _updateMenu.apply(this, arguments);
}

function _updateMenu() {
  _updateMenu = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(canal) {
    var menuComponent;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            menuComponent = new _components_MenuComponent__WEBPACK_IMPORTED_MODULE_7__.MenuComponent();

            if (canal.isGroup) {
              (0,_chatSenderRequest__WEBPACK_IMPORTED_MODULE_6__.getGroupeCanal)().then(function (groupeCanals) {
                $('.chat-groupe-canal').html(menuComponent.getGroupsCanal(groupeCanals));
              });
            } else {
              (0,_chatSenderRequest__WEBPACK_IMPORTED_MODULE_6__.getSingleCanal)().then(function (singleCanals) {
                $('.chat-single-canal').html(menuComponent.getSingleCanal(singleCanals));
              });
            }

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _updateMenu.apply(this, arguments);
}

/***/ }),

/***/ "./assets/js/helpers/Loader.js":
/*!*************************************!*\
  !*** ./assets/js/helpers/Loader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loaderOff": () => (/* binding */ loaderOff),
/* harmony export */   "loaderOn": () => (/* binding */ loaderOn)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_Preloader_image_1_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/Preloader-image-1.svg */ "./assets/images/Preloader-image-1.svg");
/* harmony import */ var _images_Web_Preloader_1_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/Web-Preloader-1.svg */ "./assets/images/Web-Preloader-1.svg");
/* harmony import */ var _images_3_Leg_Preloader_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/3-Leg-Preloader.svg */ "./assets/images/3-Leg-Preloader.svg");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");






function loader() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    'elementCible': undefined,
    'className': '',
    'directive': 'ON',
    'relative': 'OFF',
    'loaderWidth': null,
    'loaderHeight': null,
    'backdrop-color': null
  };

  if (options.elementCible !== undefined) {
    if (options.directive === 'ON' && $(options.elementCible).find('.loader-container').length === 0) {
      var position = options.relative === 'OFF' ? 'position-sticky' : 'position-relative';
      var backdrop_color = options["backdrop-color"] != null ? 'background:' + options['backdrop-color'] : '';
      var loaderContainer = $('<div />', {
        id: 'loader-container',
        "class": 'loader-container ' + position + ' bottom-0 left-0 w-100 h-100 bg-white overflow-hidden',
        style: backdrop_color
      });
      var loaderPostContainer = $('<div />', {
        "class": 'loader-post-container w-100 h-100 d-flex'
      });
      var imageWidth = options.loaderWidth != null ? ';width:' + options.loaderWidth : '';
      var imageHeight = options.loaderHeight != null ? 'height:' + options.loaderHeight : '';
      var image = $('<img />', {
        src: _images_3_Leg_Preloader_svg__WEBPACK_IMPORTED_MODULE_4__,
        "class": 'm-auto',
        style: imageHeight + imageWidth
      });
      loaderPostContainer.append(image);
      loaderContainer.append(loaderPostContainer);
      $(options.elementCible).each(function () {
        $(this).addClass('position-relative');
        $(this).append(loaderContainer);
      });
    } else if (options.directive === 'OFF') {
      $(options.elementCible).each(function () {
        $(this).find(".loader-container").remove();
      });
    }
  }
}

function loaderOn($element) {
  var $relative = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var $stylesOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    'loaderWidth': null,
    'loaderHeight': null,
    'backdrop-color': null
  };
  loader({
    'elementCible': $element,
    'directive': 'ON',
    'relative': $relative ? 'ON' : 'OFF',
    'loaderWidth': $stylesOptions.loaderWidth,
    'loaderHeight': $stylesOptions.loaderHeight,
    'backdrop-color': $stylesOptions["backdrop-color"]
  });
}
function loaderOff($element) {
  loader({
    'elementCible': $element,
    'directive': 'OFF'
  });
}

/***/ }),

/***/ "./assets/js/helpers/base64.js":
/*!*************************************!*\
  !*** ./assets/js/helpers/base64.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Base64": () => (/* binding */ Base64)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5__);






var Base64 = {
  // private property
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  // public method for encoding
  encode: function encode(input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    input = Base64._utf8_encode(input.toString());

    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = (chr1 & 3) << 4 | chr2 >> 4;
      enc3 = (chr2 & 15) << 2 | chr3 >> 6;
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
    }

    return output;
  },
  // public method for decoding
  decode: function decode(input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {
      enc1 = this._keyStr.indexOf(input.charAt(i++));
      enc2 = this._keyStr.indexOf(input.charAt(i++));
      enc3 = this._keyStr.indexOf(input.charAt(i++));
      enc4 = this._keyStr.indexOf(input.charAt(i++));
      chr1 = enc1 << 2 | enc2 >> 4;
      chr2 = (enc2 & 15) << 4 | enc3 >> 2;
      chr3 = (enc3 & 3) << 6 | enc4;
      output = output + String.fromCharCode(chr1);

      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }

      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }

    output = Base64._utf8_decode(output);
    return output;
  },
  // private method for UTF-8 encoding
  _utf8_encode: function _utf8_encode(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode(c >> 6 | 192);
        utftext += String.fromCharCode(c & 63 | 128);
      } else {
        utftext += String.fromCharCode(c >> 12 | 224);
        utftext += String.fromCharCode(c >> 6 & 63 | 128);
        utftext += String.fromCharCode(c & 63 | 128);
      }
    }

    return utftext;
  },
  // private method for UTF-8 decoding
  _utf8_decode: function _utf8_decode(utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;

    while (i < utftext.length) {
      c = utftext.charCodeAt(i);

      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if (c > 191 && c < 224) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode((c & 31) << 6 | c2 & 63);
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
        i += 3;
      }
    }

    return string;
  }
};

/***/ }),

/***/ "./assets/js/helpers/inputFilePreview.js":
/*!***********************************************!*\
  !*** ./assets/js/helpers/inputFilePreview.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "readURL": () => (/* binding */ readURL)
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










/**
 * fonction pour la prévisualisation d'image
 *
 * @param input
 */
function readURL(input, cible) {
  if (input.files && input.files[0]) {
    if (isImage(input)) {
      var reader = new FileReader();

      reader.onload = function (e) {
        var res = e.target.result;
        var split1 = res.split(";")[0];

        if (split1.includes("image")) {
          $(cible).attr('src', e.target.result);
        }
      };

      reader.readAsDataURL(input.files[0]);
      return true;
    }

    return false;
  }

  return false;
}

function isImage(_x) {
  return _isImage.apply(this, arguments);
}

function _isImage() {
  _isImage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee($file) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!($file.files && $file.files[0] && $file.files[0].name.match(/\.(jpg|jpeg|png|gif|bmp|ico)$/))) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", true);

          case 2:
            return _context.abrupt("return", false);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _isImage.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "./node_modules/core-js/internals/not-a-regexp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");

var TypeError = global.TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $includes = (__webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").includes);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


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


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.match.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : getMethod(regexp, MATCH);
      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./assets/images/3-Leg-Preloader.svg":
/*!*******************************************!*\
  !*** ./assets/images/3-Leg-Preloader.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/3-Leg-Preloader.78ef2f3b.svg";

/***/ }),

/***/ "./assets/images/Preloader-image-1.svg":
/*!*********************************************!*\
  !*** ./assets/images/Preloader-image-1.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Preloader-image-1.771fb7e6.svg";

/***/ }),

/***/ "./assets/images/Web-Preloader-1.svg":
/*!*******************************************!*\
  !*** ./assets/images/Web-Preloader-1.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/Web-Preloader-1.0c3733ec.svg";

/***/ }),

/***/ "./assets/images/users.jpg":
/*!*********************************!*\
  !*** ./assets/images/users.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/users.d0208610.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-464164","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-7d93ee","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_internals_dom-to-831329","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_web_d-930e15","vendors-node_modules_core-js_modules_es_promise_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-fb67f6","vendors-node_modules_regenerator-runtime_runtime_js","vendors-node_modules_core-js_modules_es_array_index-of_js-node_modules_core-js_modules_es_par-06157e","vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_find_js","vendors-node_modules_core-js_modules_web_url-search-params_js","vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_core-js_modules_es_array-690d99","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_objec-9f8e31"], () => (__webpack_exec__("./assets/js/chat/chat.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQSxHQUFHLElBQUksY0FBYztBQUNyQjs7Ozs7Ozs7Ozs7O0FDN0JhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxrQkFBa0IsbUJBQU8sQ0FBQyxxR0FBb0M7QUFDOUQsaUJBQWlCLG1CQUFPLENBQUMsbUZBQTJCO0FBQ3BELDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1QztBQUM1RSxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLDJCQUEyQixtQkFBTyxDQUFDLHlHQUFzQzs7QUFFekU7O0FBRUE7QUFDQTtBQUNBLElBQUksMEVBQTBFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDcEJZO0FBQ2IsV0FBVyxtQkFBTyxDQUFDLHFGQUE0QjtBQUMvQyxvQ0FBb0MsbUJBQU8sQ0FBQywrSEFBaUQ7QUFDN0YsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzVFLGdCQUFnQixtQkFBTyxDQUFDLCtFQUF5QjtBQUNqRCx5QkFBeUIsbUJBQU8sQ0FBQyxtR0FBbUM7QUFDcEUsaUJBQWlCLG1CQUFPLENBQUMsbUdBQW1DOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXQvY2hhdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hhdC9jaGF0R3JvdXBDYW5hbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hhdC9jaGF0TWVyY3VyZVRyYWl0ZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXQvY2hhdFNlbmRlclJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXQvY2hhdF9jYW5hbF9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hhdC9jaGF0X21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXQvY2hhdF9uZXdfb25lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGF0L2NvbXBvbmVudHMvQ2FuYWxHcm91cHNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXQvY29tcG9uZW50cy9Db252ZXJzYXRpb25CYXNlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGF0L2NvbXBvbmVudHMvQ29udmVyc2F0aW9uQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGF0L2NvbXBvbmVudHMvTWVudUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hhdC9jb21wb25lbnRzL05ld0NvbnZlcnNhdGlvbkNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hhdC9oZWxwZXJzL2NoYXRfaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaGVscGVycy9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hlbHBlcnMvYmFzZTY0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9oZWxwZXJzL2lucHV0RmlsZVByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NvcnJlY3QtaXMtcmVnZXhwLWxvZ2ljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9ub3QtYS1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmRhdGUudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5tYXRjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2xvYWRlck9mZiwgbG9hZGVyT259IGZyb20gXCIuLi9oZWxwZXJzL0xvYWRlclwiO1xyXG5pbXBvcnQge25vdGlmeVVzZXJTdG9wVHlwaW5nLCBub3RpZnlVc2VyVHlwaW5nLCBzZW5kTWVzc2FnZSwgdXBsb2FkRmlsZX0gZnJvbSBcIi4vY2hhdFNlbmRlclJlcXVlc3RcIjtcclxuaW1wb3J0IHtDb252ZXJzYXRpb25CYXNlQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnZlcnNhdGlvbkJhc2VDb21wb25lbnRcIjtcclxuaW1wb3J0IHt1cGRhdGVNZW51fSBmcm9tIFwiLi9oZWxwZXJzL2NoYXRfaGVscGVyc1wiO1xyXG5pbXBvcnQge3JlYWRVUkx9IGZyb20gXCIuLi9oZWxwZXJzL2lucHV0RmlsZVByZXZpZXdcIjtcclxucmVxdWlyZSgnLi9jaGF0X25ld19vbmUnKVxyXG5yZXF1aXJlKCcuL2NoYXRfbWVudScpXHJcbnJlcXVpcmUoJy4vY2hhdE1lcmN1cmVUcmFpdGVtZW50JylcclxucmVxdWlyZSgnLi9jaGF0X2NhbmFsX2luc3RhbmNlJylcclxucmVxdWlyZSgnLi9jaGF0R3JvdXBDYW5hbCcpXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBlbnZveWVyIHVuIG1lc3NhZ2VcclxuICAgICQodGhpcykub24oJ2NsaWNrJywgJy5jaGF0LWJ0bi1zZW5kJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBjaGF0Q29udGFpbmVyID0gJCh0aGlzKS5jbG9zZXN0KCcuY2hhdC1ib3gtY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgYm9keU1lc3NhZ2UgPSBjaGF0Q29udGFpbmVyLmZpbmQoJy5jYXJkLWJvZHknKTtcclxuICAgICAgICBjb25zdCBpbnB1dFRleHQgPSBjaGF0Q29udGFpbmVyLmZpbmQoJy5jaGF0LWlucHV0LXRleHRlcycpO1xyXG4gICAgICAgIGNvbnN0IGVtcHR5TWVzc2FnZSA9IGNoYXRDb250YWluZXIuZmluZCgnLmNoYXQtZW1wdHktbWVzc2FnZScpO1xyXG4gICAgICAgIGNvbnN0IGNvbnZlcnNhdGlvbkJhc2VDb21wb25lbnQgPSBuZXcgQ29udmVyc2F0aW9uQmFzZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIC8vIHNvaXQgb24gYSBsZSBjYW5hbCwgc29pdCBvbiBhIGxlIGNvZGVcclxuICAgICAgICBjb25zdCBjb2RlICA9ICQodGhpcykuYXR0cignZGF0YS1jb2RlJyk7XHJcbiAgICAgICAgbGV0IGZpbGVzID0gW107XHJcbiAgICAgICAgY2hhdENvbnRhaW5lci5maW5kKCdpbnB1dFtuYW1lPVwiZmlsZXNbXVwiXScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgZmlsZXMucHVzaCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBtZXNzYWdlVmFsdWUgPSBpbnB1dFRleHQudmFsKCk7XHJcbiAgICAgICAgaWYobWVzc2FnZVZhbHVlLmxlbmd0aCA+IDAgfHwgZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsb2FkZXJPbihib2R5TWVzc2FnZVswXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCBzZW5kTWVzc2FnZShtZXNzYWdlVmFsdWUsY29kZSwgZmlsZXMpXHJcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbkJhc2VDb21wb25lbnQuY2xlYXJWdShib2R5TWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbkJhc2VDb21wb25lbnQuY2xlYXJGaWxlKGNoYXRDb250YWluZXIpO1xyXG4gICAgICAgICAgICBjaGF0Q29udGFpbmVyLmZpbmQoJy5jaGF0LWxpc3QtZ3JvdXAtbWVzc2FnZXMnKS5hcHBlbmQoY29udmVyc2F0aW9uQmFzZUNvbXBvbmVudC5nZXRNZXNzYWdlKG1lc3NhZ2UpKVxyXG4gICAgICAgICAgICBpbnB1dFRleHQudmFsKCcnKTtcclxuICAgICAgICAgICAgYm9keU1lc3NhZ2VbMF0uc2Nyb2xsVG9wID0gYm9keU1lc3NhZ2VbMF0uc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgICAgICBsb2FkZXJPZmYoYm9keU1lc3NhZ2VbMF0pO1xyXG4gICAgICAgICAgICBpZihlbXB0eU1lc3NhZ2UubGVuZ3RoPjApIHtcclxuICAgICAgICAgICAgICAgIGVtcHR5TWVzc2FnZS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhd2FpdCB1cGRhdGVNZW51KG1lc3NhZ2UuY2FuYWwpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGFjdGl2ZXIgbGUgY29tcG9ydGVtZW50IHBhciBkw6lmYXVsdCBkZSBsJ2lucHV0RmlsZVxyXG4gICAgLy8gY29tcG9ydGVtZW50IHBhciBkw6lmYXV0IGFycsOpdGVyIGV0IHF1aSBlc3QgY2F1c8OpIHBhciBsJ8OpdsOobmVtZW50IGNsaWNrIGR1IHBhcmVudFxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCAnaW5wdXRbdHlwZT1cImZpbGVcIl0nLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB1cGxvYWQgZmlsZVxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCcuY2hhdC11cGxvYWRJbWFnZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRGaWxlID0gJCgnPGlucHV0IC8+Jywge1xyXG4gICAgICAgICAgICB0eXBlOiAnZmlsZScsXHJcbiAgICAgICAgICAgIGNsYXNzOidkLW5vbmUnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LWJveC1jb250YWluZXInKS5maW5kKCcuY2hhdC1maWxlcy1wcmV2aWV3JykuYXBwZW5kKGlucHV0RmlsZSk7XHJcblxyXG4gICAgICAgIGlucHV0RmlsZS50cmlnZ2VyKCdjbGljaycpO1xyXG5cclxuICAgIH0pXHJcblxyXG4gICAgJCh0aGlzKS5vbignY2hhbmdlJywnLmNoYXQtYm94LWNvbnRhaW5lciBpbnB1dFt0eXBlPVwiZmlsZVwiXScsYXN5bmMgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckltZyA9ICQoJzxkaXYgLz4nKTtcclxuICAgICAgICBjb25zdCBpbWcgPSAkKCc8aW1nIC8+Jywge1xyXG4gICAgICAgICAgICBjbGFzczonY2hhdC1maWxlLWl0ZW0nXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29udGFpbmVySW1nLmh0bWwoaW1nKTtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LWJveC1jb250YWluZXInKS5maW5kKCcuY2hhdC1maWxlcy1wcmV2aWV3JykuYXBwZW5kKGNvbnRhaW5lckltZyk7XHJcbiAgICAgICAgcmVhZFVSTCgkKHRoaXMpWzBdLCBpbWdbMF0pO1xyXG4gICAgICAgIGxvYWRlck9uKGNvbnRhaW5lckltZ1swXSwgZmFsc2UsIHtcclxuICAgICAgICAgICAgJ2xvYWRlcldpZHRoJyA6ICc0MHB4JyxcclxuICAgICAgICAgICAgJ2xvYWRlckhlaWdodCcgOiAnNDBweCcsXHJcbiAgICAgICAgICAgICdiYWNrZHJvcC1jb2xvcic6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSkgIWltcG9ydGFudCdcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBmaWxlTmFtZSA9IGF3YWl0IHVwbG9hZEZpbGUoJCh0aGlzKVswXSk7XHJcbiAgICAgICAgbG9hZGVyT2ZmKGNvbnRhaW5lckltZ1swXSk7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gJCh0aGlzKS5jbG9zZXN0KCcuY2hhdC1ib3gtY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgZmlsZU5hbWVJbnB1dCA9ICQoJzxpbnB1dCAvPicsIHtcclxuICAgICAgICAgICAgdHlwZTogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdmaWxlc1tdJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBmaWxlTmFtZUlucHV0LnZhbChmaWxlTmFtZSk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChmaWxlTmFtZUlucHV0KTtcclxuICAgIH0pXHJcblxyXG4gICAgLy8gc3VwcHJpbWVyIGxlIGNvbnRlbmV1ciBkdSBtZXNzYWdlXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsJy5jaGF0LWJ0bi1jbG9zZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuY2hhdC1ib3gtY29udGFpbmVyJykucmVtb3ZlKCk7XHJcbiAgICB9KVxyXG5cclxuICAgICQodGhpcykub24oJ2NsaWNrJywnLmNoYXQtYnRuLW1pbmltaXNlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LWJveC1jb250YWluZXIsLmNoYXQtZmxvYXQtbWVudScpLmFkZENsYXNzKCdjaGF0LW1pbmltaXNlZCcpO1xyXG4gICAgICAgICQodGhpcykuZmluZCgnaScpLnJlbW92ZUNsYXNzKCdmYS1hbmdsZS1kb3duJykuYWRkQ2xhc3MoJ2ZhLWFuZ2xlLXVwJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY2hhdC1idG4tbWF4aW1pc2UnKS5yZW1vdmVDbGFzcygnY2hhdC1idG4tbWluaW1pc2UnKTtcclxuICAgIH0pXHJcblxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCcuY2hhdC1idG4tbWF4aW1pc2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmNoYXQtYm94LWNvbnRhaW5lciwuY2hhdC1mbG9hdC1tZW51JykucmVtb3ZlQ2xhc3MoJ2NoYXQtbWluaW1pc2VkJyk7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCdpJykucmVtb3ZlQ2xhc3MoJ2ZhLWFuZ2xlLXVwJykuYWRkQ2xhc3MoJ2ZhLWFuZ2xlLWRvd24nKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjaGF0LWJ0bi1taW5pbWlzZScpLnJlbW92ZUNsYXNzKCdjaGF0LWJ0bi1tYXhpbWlzZScpO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKHRoaXMpLm9uKCdmb2N1cycsICcuY2hhdC1pbnB1dC10ZXh0ZXMnLGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgY2FuYWxfaWQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LWJveC1jb250YWluZXInKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgYXdhaXQgbm90aWZ5VXNlclR5cGluZyhjYW5hbF9pZClcclxuICAgIH0pO1xyXG5cclxuICAgICQodGhpcykub24oJ2ZvY3Vzb3V0JywnLmNoYXQtaW5wdXQtdGV4dGVzJyxhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGNhbmFsX2lkID0gJCh0aGlzKS5jbG9zZXN0KCcuY2hhdC1ib3gtY29udGFpbmVyJykuYXR0cignZGF0YS1pZCcpO1xyXG4gICAgICAgIGF3YWl0IG5vdGlmeVVzZXJTdG9wVHlwaW5nKGNhbmFsX2lkKVxyXG4gICAgfSlcclxufSk7XHJcbiIsImltcG9ydCB7XHJcbiAgICBjaGF0X2dyb3VwQ2FuYWxfYWRkVXNlcixcclxuICAgIGNoYXRfZ3JvdXBDYW5hbF9yZW1vdmVVc2VyLFxyXG4gICAgY3JlYXRlR3JvdXBDYW5hbCxcclxuICAgIGZpbmREZXN0aW5hdGFpcmVcclxufSBmcm9tIFwiLi9jaGF0U2VuZGVyUmVxdWVzdFwiO1xyXG5pbXBvcnQge2xvYWRlck9mZiwgbG9hZGVyT259IGZyb20gXCIuLi9oZWxwZXJzL0xvYWRlclwiO1xyXG5pbXBvcnQge0NhbmFsR3JvdXBzQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL0NhbmFsR3JvdXBzQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7TWVudUNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9NZW51Q29tcG9uZW50XCI7XHJcbmltcG9ydCB7TW9kYWx9IGZyb20gJ2Jvb3RzdHJhcCdcclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjYW5hbHNDb21wb25lbnQgPSBuZXcgQ2FuYWxHcm91cHNDb21wb25lbnQoKVxyXG4gICAgJCh0aGlzKS5vbignaW5wdXQnLCcuY2hhdFNlYXJjaFVzZXInLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGJveENyZWF0aW9uQ29udGFpbmVyID0gJCh0aGlzKS5jbG9zZXN0KCcuY2hhdC1tb2RhbC1jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBzZWFyY2hWYWx1ZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgY29uc3QgZGl2Q2hhdF91c2Vyc0xpc3QgPSBib3hDcmVhdGlvbkNvbnRhaW5lci5maW5kKCcuY2hhdF91c2Vyc0xpc3QnKTtcclxuICAgICAgICBpZihzZWFyY2hWYWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGRpdkNoYXRfdXNlcnNMaXN0Lmh0bWwoJycpO1xyXG4gICAgICAgICAgICBsb2FkZXJPbihkaXZDaGF0X3VzZXJzTGlzdFswXSwgJ09OJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgZmluZERlc3RpbmF0YWlyZShzZWFyY2hWYWx1ZSk7XHJcbiAgICAgICAgICAgIGRpdkNoYXRfdXNlcnNMaXN0Lmh0bWwoY2FuYWxzQ29tcG9uZW50LmdldExpc3RVc2VyKHVzZXJzKSlcclxuICAgICAgICAgICAgbG9hZGVyT2ZmKGRpdkNoYXRfdXNlcnNMaXN0WzBdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXZDaGF0X3VzZXJzTGlzdC5odG1sKCcnKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCcuY2hhdC1zZWxlY3QtdXNlcicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KCQodGhpcykuYXR0cignZGF0YS11c2VyJykpKVxyXG4gICAgICAgIGNvbnN0IGNoYXRfdXNlckJhZGdlTGlzdCA9ICQoJy5jaGF0X3VzZXJCYWRnZUxpc3QnKTtcclxuICAgICAgICBpZigkKCcjY2hhdC1iYWRnZVVzZXItJyt1c2VyLmlkKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY2hhdF91c2VyQmFkZ2VMaXN0LmFwcGVuZChjYW5hbHNDb21wb25lbnQudXNlckJhZGdlKHVzZXIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCcjY2hhdC1idG4tY3JlYXRlQ2FuYWwnLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0Tm9tID0gJCgnI2NoYXRfaW5wdXRDYW5hbE5hbWUnKTtcclxuICAgICAgICBjb25zdCBub20gPSBpbnB1dE5vbS52YWwoKTtcclxuICAgICAgICBjb25zdCBhbGVydEVycm9yID0gJCgnLmFsZXJ0LWVtcHR5LW5hbWUnKTtcclxuICAgICAgICBjb25zdCB1c2Vyc19pZCA9IGdldFVzZXJJZHNCeUJhZGdlKCQodGhpcykuY2xvc2VzdCgnLmNoYXQtbW9kYWwtY29udGFpbmVyJykpO1xyXG5cclxuICAgICAgICBpZihub20ubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgYWxlcnRFcnJvci5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNhbmFsTWVzc2FnZSA9IGF3YWl0IGNyZWF0ZUdyb3VwQ2FuYWwobm9tLCB1c2Vyc19pZCk7XHJcbiAgICAgICAgaWYoY2FuYWxNZXNzYWdlLmVycm9yKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0RXJyb3IucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICBjb25zdCBtZW51Q29tcG9uZW50ID0gbmV3IE1lbnVDb21wb25lbnQoKTtcclxuICAgICAgICAgICBjb25zdCBncm91cEluc3RhbmNlID0gbWVudUNvbXBvbmVudC5nZXRHcm91cHNDYW5hbEl0ZW0oY2FuYWxNZXNzYWdlKTtcclxuICAgICAgICAgICAkKCcuY2hhdC1saXN0LWdyb3VwQ2FuYWwnKS5hcHBlbmQoZ3JvdXBJbnN0YW5jZSk7XHJcbiAgICAgICAgICAgJCgnW2RhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCJdJykudHJpZ2dlcignY2xpY2snKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG4gICAgJCh0aGlzKS5vbignaGlkZGVuLmJzLm1vZGFsJywnI2NoYXRNb2RhbENyZWF0ZUdyb3VwcycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAkKCcjY2hhdF9pbnB1dENhbmFsTmFtZScpLnZhbCgnJyk7XHJcbiAgICAgICAgJCgnLmNoYXQtYmFkZ2VVc2VyJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuY2hhdF91c2Vyc0xpc3QnKS5odG1sKCcnKTtcclxuICAgICAgICAkKCcjY2hhdFNlYXJjaFVzZXInKS52YWwoJycpO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKHRoaXMpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCcuY2hhdC1tb2RhbC1hZGRVc2VycycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCAnI2NoYXQtYnRuLWFkZFVzZXJzJyxhc3luYyBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgbW9kYWxfY29udGFpbmVyID0gJCh0aGlzKS5jbG9zZXN0KCcuY2hhdC1tb2RhbC1jb250YWluZXInKVxyXG4gICAgICAgIGNvbnN0IHVzZXJzX2lkID0gZ2V0VXNlcklkc0J5QmFkZ2UobW9kYWxfY29udGFpbmVyKTtcclxuICAgICAgICBhd2FpdCBjaGF0X2dyb3VwQ2FuYWxfYWRkVXNlcihtb2RhbF9jb250YWluZXIuYXR0cignZGF0YS1jYW5hbC1pZCcpLCB1c2Vyc19pZClcclxuICAgICAgICBtb2RhbF9jb250YWluZXIuZmluZCgnLmFsZXJ0LXN1Y2Nlc3MnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJChtb2RhbF9jb250YWluZXIpLmZpbmQoJ1tkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiXScpLnRyaWdnZXIoJ2NsaWNrJylcclxuICAgICAgICB9LCA1MDApXHJcbiAgICB9KVxyXG5cclxuICAgICQodGhpcykub24oJ2NsaWNrJywgJy5jaGF0LXJlbW92ZS11c2VyJyxhc3luYyBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIGF3YWl0IGNoYXRfZ3JvdXBDYW5hbF9yZW1vdmVVc2VyKCQodGhpcykuYXR0cignZGF0YS1jYW5hbC1pZCcpKTtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LWNob29zZS1jYW5hbCcpLnJlbW92ZSgpXHJcbiAgICB9KVxyXG5cclxuXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZ2V0VXNlcklkc0J5QmFkZ2UoY29udGFpbmVyKVxyXG57XHJcbiAgICBsZXQgdXNlcnNfaWQgPSBbXTtcclxuICAgICQoY29udGFpbmVyKS5maW5kKCcuY2hhdC1iYWRnZVVzZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHVzZXJzX2lkLnB1c2goJCh0aGlzKS5hdHRyKCdkYXRhLXVzZXItaWQnKSlcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHVzZXJzX2lkO1xyXG59IiwiaW1wb3J0IHsgRXZlbnRTb3VyY2VQb2x5ZmlsbCB9IGZyb20gXCJldmVudC1zb3VyY2UtcG9seWZpbGwvc3JjL2V2ZW50c291cmNlLm1pbi5qc1wiO1xyXG5pbXBvcnQge0NvbnZlcnNhdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9Db252ZXJzYXRpb25Db21wb25lbnRcIjtcclxuaW1wb3J0IHtzaG93TWVzc2FnZUluc3RhbmNlLCB1cGRhdGVNZW51fSBmcm9tIFwiLi9oZWxwZXJzL2NoYXRfaGVscGVyc1wiO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAgIC8vIGRldGVjdGVyIHMnaWwgeSBhIHVuIG1lc3NhZ2VcclxuICAgIGNvbnN0IGNoYXRfbmV3TWVzc2FnZV90b3BpYyA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0LW5ld01lc3NhZ2UtdG9waWNcIikudGV4dENvbnRlbnQpO1xyXG4gICAgY29uc3QgY2hhdF92dV90b3BpYyA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0LXZ1LXRvcGljXCIpLnRleHRDb250ZW50KTtcclxuICAgIGNvbnN0IGNoYXRfdXNlclR5cGluZ190b3BpYyA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0LXVzZXJUeXBpbmctdG9waWNcIikudGV4dENvbnRlbnQpO1xyXG4gICAgY29uc3QgY2hhdF91c2VyU3RvcFR5cGluZ190b3BpYyA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0LXVzZXJTdG9wVHlwaW5nLXRvcGljXCIpLnRleHRDb250ZW50KTtcclxuICAgIGNvbnN0IGV2ZW50TmV3TWVzc2FnZSA9IG5ldyBFdmVudFNvdXJjZShjaGF0X25ld01lc3NhZ2VfdG9waWMpO1xyXG4gICAgY29uc3QgZXZlbnRWdSA9IG5ldyBFdmVudFNvdXJjZShjaGF0X3Z1X3RvcGljKTtcclxuICAgIGNvbnN0IGV2ZW50VXNlclR5cGluZyA9IG5ldyBFdmVudFNvdXJjZShjaGF0X3VzZXJUeXBpbmdfdG9waWMpO1xyXG4gICAgY29uc3QgZXZlbnRVc2VyU3RvcFR5cGluZyA9IG5ldyBFdmVudFNvdXJjZShjaGF0X3VzZXJTdG9wVHlwaW5nX3RvcGljKTtcclxuICAgIGNvbnN0IGNvbnZlcnNhdGlvbkNvbXBvbmVudCA9IG5ldyBDb252ZXJzYXRpb25Db21wb25lbnQoKTtcclxuICAgIC8vIHByw6lzZW5jZSBkJ3VuIG5vdXZlYXUgbWVzc2FnZVxyXG4gICAgZXZlbnROZXdNZXNzYWdlLm9ubWVzc2FnZSA9IGFzeW5jIGV2ZW50ID0+IHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcclxuICAgICAgICBjb25zdCBjYW5hbCA9IG1lc3NhZ2UuY2FuYWw7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IG1lc3NhZ2UudXNlcjtcclxuICAgICAgICAvLyBzaSB1bmUgaW5zdGFuY2UgZXN0IG91dmVydGVcclxuICAgICAgICBsZXQgakNhbmFsID0gJCgnI2NhbmFsLScrY2FuYWwuaWQpO1xyXG4gICAgICAgIGpDYW5hbC5maW5kKCcuY2hhdC1saXN0LWdyb3VwLW1lc3NhZ2VzJykuYXBwZW5kKGNvbnZlcnNhdGlvbkNvbXBvbmVudC5nZXRNZXNzYWdlKG1lc3NhZ2UpKTtcclxuICAgICAgICAvLyBzaSBsJ2luc3RhbmNlIG4nZXN0IHBhcyBvdXZlcnRlXHJcbiAgICAgICAgaWYoakNhbmFsLmxlbmd0aCA9PT0gMCApIHtcclxuICAgICAgICAgIGpDYW5hbCA9IGF3YWl0IHNob3dNZXNzYWdlSW5zdGFuY2UoY2FuYWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBtZXR0cmUgZW4gw6l2aWRlbmNlIGxlIGNhbmFsXHJcbiAgICAgICAgY29udmVyc2F0aW9uQ29tcG9uZW50LmFkZEhpZ2hsaWdoKGpDYW5hbClcclxuICAgICAgICAvLyBtZXR0cmUgw6Agam91ciBsZSBtZW51XHJcbiAgICAgICAgYXdhaXQgdXBkYXRlTWVudShjYW5hbClcclxuICAgIH1cclxuXHJcbiAgICAvLyBxdWFuZCBxdWVscXUndW4gdm9pdCBsZSBtZXNzYWdlXHJcbiAgICBldmVudFZ1Lm9ubWVzc2FnZSA9IGFzeW5jIGV2ZW50ID0+IHtcclxuICAgICAgICBjb25zdCBjYW5hbCA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgY29uc3QgZGVybmllck1lc3NhZ2VJdGVtID0gJCgnLmNoYXQtbGlzdC1ncm91cC1tZXNzYWdlcz4ubGlzdC1ncm91cC1pdGVtJykubGFzdCgpO1xyXG4gICAgICAgIGNvbnN0IGlkVXNlckVudm95ZXVyID0gcGFyc2VJbnQoZGVybmllck1lc3NhZ2VJdGVtLmF0dHIoJ2RhdGEtaWQtdXNlcicpKVxyXG4gICAgICAgIC8vIHNpIHVuZSBpbnN0YW5jZSBlc3Qgb3V2ZXJ0ZSBldCBxdWUgbGEgcGVyc29ubmUgcXVpIGEgdnUgbGUgbWVzc2FnZSBuJ2VzdCBwYXMgbCdlbnZveWV1clxyXG4gICAgICAgIGxldCBqQ2FuYWwgPSAkKCcjY2FuYWwtJytjYW5hbC5pZCk7XHJcbiAgICAgICAgY29udmVyc2F0aW9uQ29tcG9uZW50LmNsZWFyVnUoakNhbmFsKVxyXG4gICAgICAgIGlmKGpDYW5hbC5sZW5ndGggPiAwICYmIGlkVXNlckVudm95ZXVyICE9PSBjYW5hbC52dVBhci51c2VyLmlkICkge1xyXG4gICAgICAgICAgIC8vIHRvZG86IG1ldHRyZSB1biB2dVxyXG4gICAgICAgICAgICBjb252ZXJzYXRpb25Db21wb25lbnQuYWRkVnUoakNhbmFsLCBjYW5hbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHF1YW5kIHF1ZWxxdSd1biBlc3QgZW4gdHJhaW4gZCfDqWNyaXJlXHJcbiAgICBldmVudFVzZXJUeXBpbmcub25tZXNzYWdlID0gYXN5bmMgZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhbmFsID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcclxuICAgICAgICBjb252ZXJzYXRpb25Db21wb25lbnQuYWRkVXNlclR5cGluZygkKCcuY2hhdC1ib3gtY29udGFpbmVyW2lkPVwiY2FuYWwtJytjYW5hbC5pZCsnXCJdJyksIGNhbmFsLnVzZXJUeXBpbmcpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIHF1YW5kIHF1ZWxxdSd1biBhcnJldGUgZCfDqWNyaXJlXHJcbiAgICBldmVudFVzZXJTdG9wVHlwaW5nLm9ubWVzc2FnZSA9IGFzeW5jIGV2ZW50ID0+IHtcclxuICAgICAgICBjb25zdCBjYW5hbCA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgY29udmVyc2F0aW9uQ29tcG9uZW50LnJlbW92ZVVzZXJUeXBpbmcoJCgnLmNoYXQtYm94LWNvbnRhaW5lcltpZD1cImNhbmFsLScrY2FuYWwuaWQrJ1wiXScpLCBjYW5hbC51c2VyVHlwaW5nKVxyXG4gICAgfVxyXG5cclxuXHJcbn0pOyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaW5kRGVzdGluYXRhaXJlKGZpbmRlcikge1xyXG4gICAgaWYoZmluZGVyLmxlbmd0aCA+IDEpe1xyXG4gICAgICAgIHJldHVybiAoYXdhaXQgYXhpb3MuZ2V0KFJvdXRpbmcuZ2VuZXJhdGUoJ3VzZXJfZmluZERlc3QnLCB7ZmluZGVyOiBmaW5kZXJ9KSkpLmRhdGE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZXNzYWdlQnlDb2RlKGNvZGU9bnVsbClcclxue1xyXG4gICAgaWYoY29kZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiAoYXdhaXQgYXhpb3MuZ2V0KFJvdXRpbmcuZ2VuZXJhdGUoJ2NoYXRfZ2V0TWVzc2FnZV9ieUNvZGUnLCB7Y29kZSA6IGNvZGV9KSkpLmRhdGFcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW107XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kTWVzc2FnZShtZXNzYWdlLCBjb2RlLCBmaWxlcyA9IFtdKSB7XHJcbiAgICAvLyBlbnZveWVyIHVuIG1lc3NhZ2VcclxuICAgIGNvbnN0IGJvZHlSZXF1ZXN0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgYm9keVJlcXVlc3QuYXBwZW5kKCd0ZXh0ZXMnLCBtZXNzYWdlKTtcclxuICAgIGZpbGVzLmZvckVhY2goZnVuY3Rpb24oZmlsZU5hbWUpIHtcclxuICAgICAgICBib2R5UmVxdWVzdC5hcHBlbmQoJ2ZpbGVzW10nLCBmaWxlTmFtZSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gKGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgICAgICBSb3V0aW5nLmdlbmVyYXRlKCdjaGF0X2FkZE1lc3NhZ2UnLCB7Y29kZSA6IGNvZGV9KSxcclxuICAgICAgICAgICAgICAgIGJvZHlSZXF1ZXN0XHJcbiAgICAgICAgKSkuZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNpbmdsZUNhbmFsKClcclxue1xyXG4gIHJldHVybiAoYXdhaXQgYXhpb3MuZ2V0KFJvdXRpbmcuZ2VuZXJhdGUoJ2NoYXRfZ2V0Q2FuYWxTaW5nbGVNZXNzYWdlJykpKS5kYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R3JvdXBlQ2FuYWwoKVxyXG57XHJcbiAgICByZXR1cm4gKGF3YWl0IGF4aW9zLmdldChSb3V0aW5nLmdlbmVyYXRlKCdjaGF0X2dldENhbmFsTWVzc2FnZScpKSkuZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUdyb3VwQ2FuYWwobm9tLCB1c2Vyc19pZClcclxue1xyXG4gICAgY29uc3QgYm9keVJlcXVlc3QgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICBib2R5UmVxdWVzdC5hcHBlbmQoJ25vbScsIG5vbSk7XHJcbiAgICB1c2Vyc19pZC5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgYm9keVJlcXVlc3QuYXBwZW5kKCd1c2Vyc1tdJywgaWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChhd2FpdCBheGlvcy5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ2NoYXRfY3JlYXRlR3JvdXBDYW5hbCcpLCBib2R5UmVxdWVzdCkpLmRhdGFcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlZUNhbmFsKGNhbmFsX2lkKVxyXG57XHJcbiAgICByZXR1cm4gKGF3YWl0IGF4aW9zLmdldChSb3V0aW5nLmdlbmVyYXRlKCdjaGF0X3Z1TWVzc2FnZScsIHtpZDpjYW5hbF9pZH0pKSkuZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG5vdGlmeVVzZXJUeXBpbmcoY2FuYWxfaWQpXHJcbntcclxuICAgIHJldHVybiAoYXdhaXQgYXhpb3MuZ2V0KFJvdXRpbmcuZ2VuZXJhdGUoJ2NoYXRfbm90aWZ5VXNlclR5cGluZycsIHtpZDpjYW5hbF9pZH0pKSkuZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG5vdGlmeVVzZXJTdG9wVHlwaW5nKGNhbmFsX2lkKVxyXG57XHJcbiAgICByZXR1cm4gKGF3YWl0IGF4aW9zLmdldChSb3V0aW5nLmdlbmVyYXRlKCdjaGF0X25vdGlmeVVzZXJTdG9wVHlwaW5nJywge2lkOmNhbmFsX2lkfSkpKS5kYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hhdF9ncm91cENhbmFsX3JlbW92ZVVzZXIoY2FuYWxfaWQpXHJcbntcclxuICAgIHJldHVybiAoYXdhaXQgYXhpb3MuZGVsZXRlKFJvdXRpbmcuZ2VuZXJhdGUoJ2NoYXRfZ3JvdXBDYW5hbF9yZW1vdmVVc2VyJywge2lkOmNhbmFsX2lkLCBpbmNsdWRlTWU6dHJ1ZX0pKSkuZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoYXRfZ3JvdXBDYW5hbF9hZGRVc2VyKGNhbmFsX2lkLCB1c2Vyc19pZCkge1xyXG4gICAgY29uc3QgYm9keVJlcXVlc3QgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICB1c2Vyc19pZC5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgYm9keVJlcXVlc3QuYXBwZW5kKCd1c2Vyc1tdJywgaWQpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKGF3YWl0IGF4aW9zLnBvc3QoUm91dGluZy5nZW5lcmF0ZSgnY2hhdF9ncm91cENhbmFsX2FkZFVzZXInLCB7aWQ6Y2FuYWxfaWR9KSwgYm9keVJlcXVlc3QpKS5kYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGxvYWRGaWxlKGZpbGVVcGxvYWQpIHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGVVcGxvYWQuZmlsZXNbMF0pO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgID0gKGF3YWl0IGF4aW9zLnBvc3QoUm91dGluZy5nZW5lcmF0ZSgnY2hhdF9pbXBvcnRGaWxlJyksIGZvcm1EYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXHJcbiAgICAgICAgfVxyXG4gICAgfSkpLmRhdGE7XHJcbiAgICBpZighcmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZmlsZVVybDtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQge0NvbnZlcnNhdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9Db252ZXJzYXRpb25Db21wb25lbnRcIjtcclxuaW1wb3J0IHtzaG93TWVzc2FnZUluc3RhbmNlLCB1cGRhdGVNZW51fSBmcm9tIFwiLi9oZWxwZXJzL2NoYXRfaGVscGVyc1wiXHJcbmltcG9ydCB7c2VlQ2FuYWx9IGZyb20gXCIuL2NoYXRTZW5kZXJSZXF1ZXN0XCI7XHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgY29udmVyc2F0aW9uQ29tcG9uZW50ID0gbmV3IENvbnZlcnNhdGlvbkNvbXBvbmVudCgpO1xyXG4gICAgLy8gbG9yc3F1J29uIGNob2lzaSB1biBjYW5hbFxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCAnLmNoYXQtY2hvb3NlLWNhbmFsJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGNhbmFsID0gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQoJCh0aGlzKS5hdHRyKCdkYXRhLWNhbmFsJykpKTtcclxuICAgICAgICBpZigkKCcuY2hhdC1jYW5hbC1pbnN0YW5jZVtkYXRhLWlkPVwiJytjYW5hbC5pZCsnXCJdJykubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgc2hvd01lc3NhZ2VJbnN0YW5jZShjYW5hbCkudGhlbihmdW5jdGlvbigpe30pO1xyXG4gICAgICAgICAgICAvLyBvbiBlbnZvaWUgdW4gdnUgc2V1bGVtZW50IHNpIGxlIGNhbmFsIGVuIHF1ZXN0aW4gbidlc3QgcGFzIGVuY29yZSB2dVxyXG4gICAgICAgICAgICBpZigkKCdbZGF0YS1jYW5hbC1tZW51LWlkPVwiJytjYW5hbC5pZCsnXCJdJykuZmluZCgnLmNoYXQtbm90LXNlZW4nKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBzZWVDYW5hbChjYW5hbC5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHVwZGF0ZU1lbnUoY2FuYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQodGhpcykub24oJ2NsaWNrJywgJy5jaGF0LWNhbmFsLWluc3RhbmNlJyxhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCQodGhpcykuZmluZCgnLmhpZ2hsaWdodC1jYW5hbCcpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29udmVyc2F0aW9uQ29tcG9uZW50LnJlbW92ZUhpZ2hsaWdodCh0aGlzKTtcclxuICAgICAgICAgICAgYXdhaXQgc2VlQ2FuYWwoJCh0aGlzKS5hdHRyKCdkYXRhLWlkJykpO1xyXG4gICAgICAgICAgICBjb25zdCBtZW51SXRlbSA9ICQoJy5saXN0LWdyb3VwLWl0ZW0nKVxyXG4gICAgICAgICAgICBtZW51SXRlbS5yZW1vdmVDbGFzcygnYmctZ3JleS0xJylcclxuICAgICAgICAgICAgbWVudUl0ZW0uZmluZCgnLmNoYXQtbm90LXNlZW4nKS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KTsiLCJpbXBvcnQge2dldEdyb3VwZUNhbmFsLCBnZXRTaW5nbGVDYW5hbH0gZnJvbSBcIi4vY2hhdFNlbmRlclJlcXVlc3RcIjtcclxuaW1wb3J0IHtsb2FkZXJPZmYsIGxvYWRlck9ufSBmcm9tIFwiLi4vaGVscGVycy9Mb2FkZXJcIjtcclxuaW1wb3J0IHtNZW51Q29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvTWVudUNvbXBvbmVudCdcclxuaW1wb3J0IHtNb2RhbH0gZnJvbSAnYm9vdHN0cmFwJ1xyXG5pbXBvcnQge0NhbmFsR3JvdXBzQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL0NhbmFsR3JvdXBzQ29tcG9uZW50XCI7XHJcblxyXG4kKCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICAgY29uc3QgY2hhdFNpbmdsZUNhbmFsID0gJCgnLmNoYXQtc2luZ2xlLWNhbmFsJyk7XHJcbiAgICAgIGNvbnN0IGNoYXRHcm91cENhbmFsID0gJCgnLmNoYXQtZ3JvdXBlLWNhbmFsJyk7XHJcbiAgICAgIGNvbnN0IG1lbnVDb21wb25lbnQgPSBuZXcgTWVudUNvbXBvbmVudCgpO1xyXG4gICAgICAvLyBjaGFyZ2VyIGxlcyBjYW5hbHNcclxuICAgICAgbG9hZGVyT24oY2hhdFNpbmdsZUNhbmFsWzBdLCB0cnVlKTtcclxuICAgICAgZ2V0U2luZ2xlQ2FuYWwoKS50aGVuKGZ1bmN0aW9uKHNpbmdsZUNhbmFscykge1xyXG4gICAgICAgICAgICBjaGF0U2luZ2xlQ2FuYWwuaHRtbChtZW51Q29tcG9uZW50LmdldFNpbmdsZUNhbmFsKHNpbmdsZUNhbmFscykpO1xyXG4gICAgICAgICAgICBsb2FkZXJPZmYoY2hhdFNpbmdsZUNhbmFsWzBdKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBjaGFyZ2VyIGxlcyBncm91cGVzIGNhbmFsc1xyXG4gICAgICBsb2FkZXJPbihjaGF0R3JvdXBDYW5hbFswXSwgdHJ1ZSk7XHJcbiAgICAgIGdldEdyb3VwZUNhbmFsKCkudGhlbihmdW5jdGlvbihncm91cGVDYW5hbHMpIHtcclxuICAgICAgICAgICAgY2hhdEdyb3VwQ2FuYWwuaHRtbChtZW51Q29tcG9uZW50LmdldEdyb3Vwc0NhbmFsKGdyb3VwZUNhbmFscykpXHJcbiAgICAgICAgICAgIGxvYWRlck9mZihjaGF0R3JvdXBDYW5hbFswXSk7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAkKHRoaXMpLm9uKCdpbnB1dCcsJy5jaGF0LW1lbnUtc2VhcmNoJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaF92YWx1ZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3RDYW5hbCA9ICQoJy5jaGF0LWNob29zZS1jYW5hbCcpXHJcbiAgICAgICAgICAgIGlmKHNlYXJjaF92YWx1ZS5sZW5ndGg+MCkge1xyXG4gICAgICAgICAgICAgICAgICBsaXN0Q2FuYWwuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdkLW5vbmUnKVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICBsaXN0Q2FuYWwuZmlsdGVyKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFfc2VhcmNoID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNlYXJjaCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IGRhdGFfc2VhcmNoLnRvTG93ZXJDYXNlKCkubWF0Y2goc2VhcmNoX3ZhbHVlLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRjaCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICB9KS5yZW1vdmVDbGFzcygnZC1ub25lJylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgbGlzdENhbmFsLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnZC1ub25lJylcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgfSlcclxuICAgICAgJCh0aGlzKS5vbignY2xpY2snLCcuY2hhdC1hZGQtdXNlcnMnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgY29uc3QgY2FuYWxHcm91cENvbXBvbmVudCA9IG5ldyBDYW5hbEdyb3Vwc0NvbXBvbmVudCgpO1xyXG4gICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKGNhbmFsR3JvdXBDb21wb25lbnQuZ2V0TW9kYWxBZGRVc2VyKCQodGhpcykuYXR0cignZGF0YS1jYW5hbC1pZCcpKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsQWRkVXNlciA9IG5ldyBNb2RhbCgkKCcjY2hhdE1vZGFsQWRkVXNlcnMnKSk7XHJcbiAgICAgICAgICAgIG1vZGFsQWRkVXNlci5zaG93KClcclxuICAgICAgfSlcclxuXHJcbn0pO1xyXG5cclxuXHJcbiIsImltcG9ydCB7bG9hZGVyT2ZmLCBsb2FkZXJPbn0gZnJvbSBcIi4uL2hlbHBlcnMvTG9hZGVyXCI7XHJcbmltcG9ydCB7ZmluZERlc3RpbmF0YWlyZSwgZ2V0TWVzc2FnZUJ5Q29kZX0gZnJvbSBcIi4vY2hhdFNlbmRlclJlcXVlc3RcIjtcclxuaW1wb3J0IHtOZXdDb252ZXJzYXRpb25Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvTmV3Q29udmVyc2F0aW9uQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7c2hvd01lc3NhZ2VJbnN0YW5jZX0gZnJvbSBcIi4vaGVscGVycy9jaGF0X2hlbHBlcnNcIjtcclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBuZXdDb252ZXJzYXRpb25Db21wb25lbnQgPSBuZXcgTmV3Q29udmVyc2F0aW9uQ29tcG9uZW50KCk7XHJcbiAgICAvLyBub3V2ZWF1IG1lc3NhZ2VcclxuICAgICQodGhpcykub24oJ2NsaWNrJywgJy5jaGF0LWJ0bi1uZXdPbmUnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNob3dNZXNzYWdlSW5zdGFuY2UoKS50aGVuKHIgPT4ge30pXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyByZWNoZXJjaGUgZCd1biB1dGlsaXNhdGV1ciBzdXIgbGEgc2VjdGlvbiBub3V2ZWF1IG1lc3NhZ2VcclxuICAgICQodGhpcykub24oJ2lucHV0JywnI3NlYXJjaC11c2VyJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBib2R5TWVzc2FnZSA9ICQoJy5jaGF0LWZsb2F0LW5ld09uZT4uY2FyZC1ib2R5JylcclxuICAgICAgICBsb2FkZXJPbihib2R5TWVzc2FnZVswXSk7XHJcbiAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBmaW5kRGVzdGluYXRhaXJlKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gbmV3Q29udmVyc2F0aW9uQ29tcG9uZW50LmdldExpc3RVc2VyKHVzZXJzKTtcclxuICAgICAgICBib2R5TWVzc2FnZS5odG1sKHRlbXBsYXRlKTtcclxuICAgICAgICBsb2FkZXJPZmYoYm9keU1lc3NhZ2VbMF0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY2hvaXggZCd1biB1dGlsaXNhdGV1ciBwb3VyIG91dnJpciB1bmUgY29ubmV4aW9uXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsICcuY2hhdC1jaG9vc2UtdXNlcicsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgYm9keU1lc3NhZ2UgPSAkKCcuY2hhdC1mbG9hdC1uZXdPbmU+LmNhcmQtYm9keScpXHJcbiAgICAgICAgY29uc3Qgc3ViSGVhZGVyID0gJCgnLmNoYXQtZmxvYXQtbmV3T25lPi5jYXJkLXN1Yi1oZWFkZXInKVxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudCgkKHRoaXMpLmF0dHIoJ2RhdGEtdXNlcicpKSlcclxuICAgICAgICBib2R5TWVzc2FnZS5odG1sKCcnKTtcclxuICAgICAgICBzdWJIZWFkZXIuaHRtbChuZXdDb252ZXJzYXRpb25Db21wb25lbnQuZ2V0SGVhZGVyKHVzZXIpKVxyXG4gICAgICAgIGxvYWRlck9uKGJvZHlNZXNzYWdlWzBdKTtcclxuICAgICAgICBjb25zdCBtZXNzYWdlcyA9IGF3YWl0IGdldE1lc3NhZ2VCeUNvZGUodXNlci5jaGF0Q29kZSk7XHJcbiAgICAgICAgLy8gY2hhcmdlciBsZXMgbWVzc2FnZXNcclxuICAgICAgICBib2R5TWVzc2FnZS5odG1sKG5ld0NvbnZlcnNhdGlvbkNvbXBvbmVudC5nZXRNZXNzYWdlcyhtZXNzYWdlcykpO1xyXG5cclxuICAgICAgICAkKCcuY2hhdC1idG4tc2VuZCcpLmF0dHIoJ2RhdGEtY29kZScsIHVzZXIuY2hhdENvZGUpO1xyXG4gICAgICAgIGxvYWRlck9mZihib2R5TWVzc2FnZVswXSlcclxuICAgIH0pXHJcblxyXG59KTsiLCJleHBvcnQgY2xhc3MgQ2FuYWxHcm91cHNDb21wb25lbnQge1xyXG4gICAgdXNlcnM9W107XHJcbiAgICBnZXRNb2RhbEFkZFVzZXIoY2FuYWxfaWQpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICc8IS0tIE1vZGFsIC0tPlxcbicgK1xyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGUgdGV4dC1zdGFydCBjaGF0LW1vZGFsLWFkZFVzZXJzIGNoYXQtbW9kYWwtY29udGFpbmVyXCIgaWQ9XCJjaGF0TW9kYWxBZGRVc2Vyc1wiIGRhdGEtY2FuYWwtaWQ9XCInK2NhbmFsX2lkKydcIiB0YWJpbmRleD1cIi0xXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIiBpZD1cImV4YW1wbGVNb2RhbExhYmVsXCI+QWpvdXRlciBkZXMgbWVtYnJlcyBkYW5zIGxlIGdyb3VwZTwvaDU+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tY2xvc2VcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPjwvYnV0dG9uPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcbicrXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2VzcyBhbGVydC1lbXB0eS1uYW1lIGQtbm9uZVwiIHJvbGU9XCJhbGVydFwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICBFbnJlZ2lzdHJlbWVudCBlZmZlY3R1w6lcXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGF0X3VzZXJCYWRnZUxpc3QgbWItMlwiPlxcbicgK1xyXG4gICAgICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGRpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImV4YW1wbGVGb3JtQ29udHJvbElucHV0MVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPkFqb3V0ZXIgZGVzIG1lbWJyZXM8L2xhYmVsPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBjaGF0U2VhcmNoVXNlclwiIGlkPVwiY2hhdFNlYXJjaFVzZXJcIiBwbGFjZWhvbGRlcj1cIlJlY2hlcmNoZXIgdW4gdXRpbGlzYXRldXJcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhdF91c2Vyc0xpc3QgbXQtMlwiPlxcbicgK1xyXG4gICAgICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJ1xcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiPkZlcm1lcjwvYnV0dG9uPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgaWQ9XCJjaGF0LWJ0bi1hZGRVc2Vyc1wiPkVucmVnaXN0cmVyPC9idXR0b24+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGlzdFVzZXIodXNlcnMgPSBbXSlcclxuICAgIHtcclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSAnJztcclxuICAgICAgICBpZih1c2Vycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICB1c2Vycy5mb3JFYWNoKGZ1bmN0aW9uKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IHRoYXQuZ2V0TGlzdFVzZXJJdGVtKHVzZXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRFbXB0eUxpc3RVc2VyTWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICc8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2ggXCI+XFxuJyArXHJcbiAgICAgICAgICAgIHRlbXBsYXRlICtcclxuICAgICAgICAgICAgJzwvdWw+JztcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaXN0VXNlckl0ZW0odXNlcilcclxuICAgIHtcclxuICAgICAgICBjb25zdCB1c2VyU3RyaW5naWZpZWQgPSBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgICAgIGxldCBjb21wb25lbnQ9XHJcbiAgICAgICAgICAgICc8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gY2hhdC1zZWxlY3QtdXNlciAgcGItMCBwcy0zXCIgaWQ9XCJjaGF0LXVzZXItJyt1c2VyLmlkKydcIiBkYXRhLXVzZXI9XCInK3VzZXJTdHJpbmdpZmllZCsnXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMlwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL21kby5wbmdcIiBhbHQ9XCJodWdlbmVyZFwiIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIGNsYXNzPVwicm91bmRlZC1jaXJjbGVcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEwIHBzLTJcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgPHNwYW4+Jyt1c2VyLm5vbSsnICcrIHVzZXIucHJlbm9tKyc8L3NwYW4+PGJyPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWQgZnMtMTIgbGluZS1oZWlnaHQtMTMgcGItMyBtYi0wIGJvcmRlci1ib3R0b21cIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgJyt1c2VyLmVtYWlsK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICA8L3A+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgIDwvZGl2PlxcbidcclxuICAgICAgICAnPC9saT4nO1xyXG5cclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVtcHR5TGlzdFVzZXJNZXNzYWdlKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1leWUtZHJvcHBlci1lbXB0eVwiPjwvaT4gQXVjdW4gcsOpc3VsdGF0ICdcclxuICAgICAgICAnPC9kaXY+JztcclxuICAgIH1cclxuXHJcblxyXG4gICAgdXNlckJhZGdlKHVzZXIpXHJcbiAgIHtcclxuICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJiYWRnZSBiZy1wcmltYXJ5IG1lLTIgY2hhdC1iYWRnZVVzZXJcIiBkYXRhLXVzZXItaWQ9XCInK3VzZXIuaWQrJ1wiIGlkPVwiY2hhdC1iYWRnZVVzZXItJyt1c2VyLmlkKydcIj4nK3VzZXIubm9tKycgJyt1c2VyLnByZW5vbSsnICcgK1xyXG4gICAgICAgICAgICc8YSBocmVmPVwiI1wiIG9uY2xpY2s9XCIkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpXCIgY2xhc3M9XCJtcy0yIHRleHQtd2hpdGUgYmctZGFuZ2VyIHB4LTEgcm91bmRlZCBjaGF0LWRlbGV0ZS1iYWRnZVVzZXJcIj48aSBjbGFzcz1cImZhIGZhLWNsb3NlXCI+PC9pPjwvYT4nICtcclxuICAgICAgICAgICAnPC9zcGFuPidcclxuICAgfVxyXG5cclxuICAgY2xlYXJVc2VyQmFkZ2UoKVxyXG4gICB7XHJcbiAgICAgICAkKCcuY2hhdC1iYWRnZVVzZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgIH0pO1xyXG4gICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQ29udmVyc2F0aW9uQmFzZUNvbXBvbmVudCB7XHJcbiAgICBnZXRFbXB0eU1lc3NhZ2VzKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC00IGNoYXQtZW1wdHktbWVzc2FnZVwiPicgK1xyXG4gICAgICAgICAgICAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1leWUtZHJvcHBlci1lbXB0eVwiPjwvaT4gQXVjdW4gbWVzc2FnZSBkaXNwb25pYmxlPGJyPicgK1xyXG4gICAgICAgICAgICAnPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPkVudm95ZXIgdW4gbWVzc2FnZSBwb3VyIGTDqW1hcnJlciBsYSBkaXNjdXNzaW9uPC9zbWFsbD4nK1xyXG4gICAgICAgICAgICAnPC9kaXY+J1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1lc3NhZ2VzKG1lc3NhZ2VzKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9ICcnO1xyXG4gICAgICAgIGlmKG1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXNcclxuICAgICAgICAgICAgbWVzc2FnZXMuZm9yRWFjaChmdW5jdGlvbihtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSB0aGF0LmdldE1lc3NhZ2UobWVzc2FnZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZSArPSB0aGlzLmdldEVtcHR5TWVzc2FnZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICc8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2ggY2hhdC1saXN0LWdyb3VwLW1lc3NhZ2VzXCI+XFxuJyArXHJcbiAgICAgICAgICAgIHRlbXBsYXRlK1xyXG4gICAgICAgICAgICAnPC91bD4nXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldE1lc3NhZ2UobWVzc2FnZSlcclxuICAgIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlcklkID0gcGFyc2VJbnQoJCgnI2N1cnJlbnQtdXNlci1pZCcpLnRleHQoKSk7XHJcbiAgICAgICAgbGV0IGltZ3MgPSAnJztcclxuICAgICAgICBpZihtZXNzYWdlLmZpbGVzICE9bnVsbCAmJiBtZXNzYWdlLmZpbGVzLmxlbmd0aD4wKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UuZmlsZXMuZm9yRWFjaChmdW5jdGlvbih1cmwpIHtcclxuICAgICAgICAgICAgICAgaW1ncyArPSAnPGRpdiBjbGFzcz1cInBiLTIgcHQtMiBtdC0yXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGltZyBzcmM9XCInK3VybCsnXCIgYWx0PVwibGUgZmljaGllciBuZSBwZXV0IMOqdHJlIGNoYXJnZXJcIiBjbGFzcz1cImNoYXQtaW1hZ2VcIiAvPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2Pic7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhdmF0YXIgPSAnL3VzZXIvYXZhdGFyLycrbWVzc2FnZS51c2VyLmlkO1xyXG4gICAgICAgIGxldCBvbmVycm9yID0gJ29uZXJyb3I9XCJ0aGlzLm9uZXJyb3I9bnVsbDsgdGhpcy5zcmM9XFwnL2Fzc2V0cy92dWV4eS9pbWFnZXMvcG9ydHJhaXQvc21hbGwvYXZhdGFyLXMtMTEuanBnXFwnXCInXHJcbiAgICAgICAgaWYoY3VycmVudFVzZXJJZCAhPT0gbWVzc2FnZS51c2VyLmlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtICBwYi0yIHBzLTMgcGUtNVwiIGRhdGEtaWQtdXNlcj1cIicrbWVzc2FnZS51c2VyLmlkKydcIj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yIGQtZmxleFwiPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJythdmF0YXIrJ1wiICcrb25lcnJvcisnIGFsdD1cImh1Z2VuZXJkXCIgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZSBteS1hdXRvXCI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTAgcHMtMiByb3VuZGVkLTMgYmctbGlnaHQtZ3JheVwiPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnctYm9sZCBsaW5lLWhlaWdodC0xMyBmcy0xM1wiPicrbWVzc2FnZS51c2VyLm5vbSsnICcrbWVzc2FnZS51c2VyLnByZW5vbSsnPC9zcGFuPjxicj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtMCBsaW5lLWhlaWdodC0xMyB0ZXh0LW11dGVkIGZzLTExIGJvcmRlci1ib3R0b20gcGItMlwiPkVudm95ZXIgJyttZXNzYWdlLnJlbmR1RGF0ZUNyZWF0aW9uTWVzc2FnZSsnPC9zcGFuPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgaW1ncytcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIiBmcy0xNCBsaW5lLWhlaWdodC0xNyBtdC0yIG1iLTAgcHQtMiBwYi0yIFwiPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZS50ZXh0ZXMrJ1xcbicrXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgPC9wPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgIDwvbGk+XFxuJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJzxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBwcy01ICBwYi0yIHRleHQtZW5kIFwiIGRhdGEtaWQtdXNlcj1cIicrbWVzc2FnZS51c2VyLmlkKydcIj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMCBwcy0yIHJvdW5kZWQtMyBiZy1saWdodC1wcmltYXJ5XCI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmdy1ib2xkIGxpbmUtaGVpZ2h0LTEzIGZzLTEzIFwiPicrbWVzc2FnZS51c2VyLm5vbSsnICcrbWVzc2FnZS51c2VyLnByZW5vbSsnPC9zcGFuPjxicj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtMCBsaW5lLWhlaWdodC0xMyBmcy0xMSAgICBib3JkZXItYm90dG9tIGJvcmRlci1jb2xvci1saWdodC1wcmltYXJ5IHBiLTJcIj5FbnZveWVyICcrbWVzc2FnZS5yZW5kdURhdGVDcmVhdGlvbk1lc3NhZ2UrJzwvc3Bhbj5cXG4nICtcclxuICAgICAgICAgICAgICAgIGltZ3MrXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCIgZnMtMTQgbGluZS1oZWlnaHQtMTcgbWItMCBtdC0yICBwdC0yIHBiLTIgXCI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLnRleHRlcysnXFxuJytcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICA8L3A+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMiBkLWZsZXhcIj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIicrYXZhdGFyKydcIiAnK29uZXJyb3IrJyBhbHQ9XCJodWdlbmVyZFwiIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIGNsYXNzPVwicm91bmRlZC1jaXJjbGUgbXktYXV0b1wiPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgIDwvbGk+XFxuJztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRNZXNzYWdlRmlsZVRlbXBsYXRlKG1lc3NhZ2UpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGZpbGVzVGVtcGxhdGVcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBmaWxlc1RlbXBsYXRlXHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJWdShjb252ZXJzYXRpb25Db250YWluZXIpXHJcbiAgICB7XHJcbiAgICAgICAgJChjb252ZXJzYXRpb25Db250YWluZXIpLmZpbmQoJy5jYW5hbC12dS1jb250YWluZXInKS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckZpbGUoY29udmVyc2F0aW9uQ29udGFpbmVyKSB7XHJcbiAgICAgICAgJChjb252ZXJzYXRpb25Db250YWluZXIpLmZpbmQoJy5jaGF0LWZpbGVzLXByZXZpZXcnKS5odG1sKCcnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7QmFzZTY0fSBmcm9tIFwiLi4vLi4vaGVscGVycy9iYXNlNjRcIjtcclxuaW1wb3J0IHtDb252ZXJzYXRpb25CYXNlQ29tcG9uZW50fSBmcm9tIFwiLi9Db252ZXJzYXRpb25CYXNlQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udmVyc2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgQ29udmVyc2F0aW9uQmFzZUNvbXBvbmVudCB7XHJcbiAgICBnZXRDb252ZXJzYXRpb25Db250YWluZXIoY2FuYWwpIHtcclxuICAgICAgICBsZXQgaW5wdXRDYWNoZVVzZXIgPSAnJztcclxuICAgICAgICBsZXQgbm9tQ2FuYWwgPSAnJztcclxuICAgICAgICBjb25zdCBjdXJyZW50X3VzZXJfaWQgPSBwYXJzZUludCgkKCcjY3VycmVudC11c2VyLWlkJykudGV4dCgpKTtcclxuICAgICAgICBjYW5hbC5tZW1icmVzLmZvckVhY2goZnVuY3Rpb24odXNlcil7XHJcbiAgICAgICAgICAgIGlucHV0Q2FjaGVVc2VyKz0nPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwidXNlcnNbXVwiIHZhbHVlPVwiJytCYXNlNjQuZW5jb2RlKHVzZXIuaWQpKydcIiAvPlxcbic7XHJcbiAgICAgICAgICAgIGlmKCFjYW5hbC5pc0dyb3VwICYmIHVzZXIuaWQgIT09IGN1cnJlbnRfdXNlcl9pZCkge1xyXG4gICAgICAgICAgICAgICAgbm9tQ2FuYWwgPSB1c2VyLm5vbSsnICcrdXNlci5wcmVub207XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZihjYW5hbC5pc0dyb3VwKSB7XHJcbiAgICAgICAgICAgIG5vbUNhbmFsID0gY2FuYWwubm9tXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBkw6lidXQgaW5pdGlhbGlzYXRpb24gZHUgdnUgbG9yc3F1ZSBsJ2luc3RhbmNlIGVzdCBjaGFyZ8OpXHJcbiAgICAgICAgLy8gc2kgbGUgY2FuYWwgZXN0IHVuIHNpbmdsZUNhbmFsXHJcbiAgICAgICAgbGV0IHZ1VGVtcGxhdGUgPSAnJztcclxuICAgICAgICBpZighY2FuYWwuaXNHcm91cCAmJiBjYW5hbC52dXMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIHZ1VGVtcGxhdGUgPSB0aGlzLmdldFZ1VGVtcGxhdGUoKVswXS5vdXRlckhUTUw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpc0dyb3VwID0gY2FuYWwuaXNHcm91cCA/ICd0cnVlJzogJ2ZhbHNlJztcclxuICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJjYXJkIHNoYWRvdyBmcy0xNCAgY2hhdC1jYW5hbC1pbnN0YW5jZSBjaGF0LWJveC1jb250YWluZXIgbWItMCBzaGFkb3ctc20gIFwiIGRhdGEtaXNHcm91cD1cIicraXNHcm91cCsnXCIgZGF0YS1pZD1cIicrY2FuYWwuaWQrJ1wiIGlkPVwiY2FuYWwtJytjYW5hbC5pZCsnXCIgc3R5bGU9XCJ3aWR0aDogMThyZW07XCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIGJnLXByaW5jIHRleHQtd2hpdGUgdy0xMDAgcHktM1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTggZC1mbGV4XCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm15LWF1dG9cIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3M9XCJtcy0yIFwiPicrbm9tQ2FuYWwrJyA8aSBjbGFzcz1cImZhLWJyYW5kcyBmYS1mYWNlYm9vay1tZXNzZW5nZXJcIj48L2k+PC9iPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgdGV4dC1lbmRcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC13aGl0ZSBjaGF0LWJ0bi1taW5pbWlzZSBtZS0yXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1hbmdsZS1kb3duXCI+PC9pPjwvYT5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC13aGl0ZSBjaGF0LWJ0bi1jbG9zZVwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2xvc2VcIj48L2k+PC9hPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBweC0wXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDwhLS0gem9uZSBkZSBtZXNzYWdlcyAtLT4gXFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAnK3Z1VGVtcGxhdGUrJ1xcbicgK1xyXG4gICAgICAgICAgICAnICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlciBwLTBcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPGRpdiBjbGFzcz1cImNoYXQtZmlsZXMtcHJldmlld1wiPjwvZGl2PicrXHJcbiAgICAgICAgICAgICcgICAgICAgIDxkaXYgY2xhc3M9XCJweS0zIHBzLTJcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1c2Vyc1wiPicgK1xyXG4gICAgICAgICAgICBpbnB1dENhY2hlVXNlcitcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC1kYW5nZXIgc3BlZWQtbGl2ZVZpZGVvLWNhbGwgcGUtMlwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtdmlkZW9cIj48L2k+PC9hPicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICA8L3NwYW4+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtc2Vjb25kYXJ5IGNoYXQtdXBsb2FkSW1hZ2VcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWltYWdlXCI+PC9pPjwvYT5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBiZy13aGl0ZVwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgYm9yZGVyLTAgYm9yZGVyLXRvcCAgZnMtMTIgcm91bmRlZC0wIHB5LTMgY2hhdC1pbnB1dC10ZXh0ZXNcIiBwbGFjZWhvbGRlcj1cIkVudHJlciB2b3RyZSBtZXNzYWdlIC4uLlwiIGFyaWEtbGFiZWw9XCJSZWNpcGllbnRcXCdzIHVzZXJuYW1lIHdpdGggdHdvIGJ1dHRvbiBhZGRvbnNcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHRleHQtcHJpbWFyeSBib3JkZXItMCBib3JkZXItdG9wIGNoYXQtYnRuLXNlbmRcIiBkYXRhLWNvZGU9XCInK2NhbmFsLmNvZGUrJ1wiIHR5cGU9XCJidXR0b25cIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBhcGVyLXBsYW5lXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJ1xcbicgK1xyXG4gICAgICAgICAgICAnICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+J1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUhpZ2hsaWdodCgkY3VycmVudE9iamVjdClcclxuICAgIHtcclxuICAgICAgICAkKCRjdXJyZW50T2JqZWN0KS5maW5kKCcuY2FyZC1oZWFkZXInKS5yZW1vdmVDbGFzcygnaGlnaGxpZ2h0LWNhbmFsICBiZy1zdWNjZXNzIHRleHQtd2hpdGUnKS5hZGRDbGFzcygnYmctcHJpbmMnKVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEhpZ2hsaWdoKCRjdXJyZW50T2JqZWN0KVxyXG4gICAge1xyXG4gICAgICAgICQoJGN1cnJlbnRPYmplY3QpLmZpbmQoJy5jYXJkLWhlYWRlcicpLmFkZENsYXNzKCdoaWdobGlnaHQtY2FuYWwgYmctc3VjY2VzcyB0ZXh0LXdoaXRlJykucmVtb3ZlQ2xhc3MoJ2JnLXByaW5jJylcclxuICAgIH1cclxuXHJcbiAgICBnZXRWdVRlbXBsYXRlKClcclxuICAgIHtcclxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9ICQoJzxkaXYgLz4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOidjYW5hbC12dS1jb250YWluZXIgdGV4dC1lbmQgcGUtMydcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB2dVRlbXBsYXRlID0gJzxzcGFuIGNsYXNzPVwiZnMtMTEgdGV4dC1tdXRlZFwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtZXllXCI+PC9pPiA8c3Bhbj52dTwvc3Bhbj48L3NwYW4+J1xyXG4gICAgICAgIHRlbXBsYXRlLmh0bWwodnVUZW1wbGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFZ1KGNvbnZlcnNhdGlvbkNvbnRhaW5lcilcclxuICAgIHtcclxuICAgICAgICAvLyBzaSB1biB2dSBleGlzdGUgZMOpasOgIHBhcyBsYSBwZWluZSBkZSBsZSByZW5kcmUgw6Agbm91dmVhdVxyXG4gICAgICAgIGxldCBjYW5hbFZ1Q29udGFpbmVyID0gJChjb252ZXJzYXRpb25Db250YWluZXIpLmZpbmQoJy5jYW5hbC12dS1jb250YWluZXInKTtcclxuICAgICAgICBpZihjYW5hbFZ1Q29udGFpbmVyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAkKGNvbnZlcnNhdGlvbkNvbnRhaW5lcikuZmluZCgnLmNhcmQtYm9keScpLmFwcGVuZCh0aGlzLmdldFZ1VGVtcGxhdGUoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgYWRkVXNlclR5cGluZyhjb252ZXJzYXRpb25Db250YWluZXIsIHVzZXIpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gc2kgdW4gdGVtcGxhdGUgZXhpc3RlIGTDqWrDoCBwYXMgbGEgcGVpbmUgZGUgbGUgcmVuZHJlIMOgIG5vdXZlYXVcclxuICAgICAgICBsZXQgY2FuYWxVc2VyVHlwaW5nID0gJChjb252ZXJzYXRpb25Db250YWluZXIpLmZpbmQoJy5jYW5hbC11c2VyVHlwaW5nJyk7XHJcbiAgICAgICAgaWYoY2FuYWxVc2VyVHlwaW5nLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9ICQoJzxkaXYgLz4nLCB7XHJcbiAgICAgICAgICAgICAgICBjbGFzczonY2FuYWwtdXNlclR5cGluZyBweS0yIHB4LTMgIHRleHQtbXV0ZWQgZnMtMTEgdGV4dC1lbmQnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCB2dVRlbXBsYXRlID0gJzxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPicrdXNlci5wcmVub20rJyAnK3VzZXIubm9tKyc8L3NwYW4+IGVzdCBlbiB0cmFpbiBkXFwnw6ljcmlyZS4uLic7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlLmh0bWwodnVUZW1wbGF0ZSk7XHJcbiAgICAgICAgICAgICQoY29udmVyc2F0aW9uQ29udGFpbmVyKS5maW5kKCcuY2FyZC1ib2R5JykuYXBwZW5kKHRlbXBsYXRlKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlVXNlclR5cGluZyhjb252ZXJzYXRpb25Db250YWluZXIpIHtcclxuICAgICAgICAkKGNvbnZlcnNhdGlvbkNvbnRhaW5lcikuZmluZCgnLmNhbmFsLXVzZXJUeXBpbmcnKS5yZW1vdmUoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBsb2dvR3JvdXAgZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy91c2Vycy5qcGdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBkZWJ1dCBsaXN0ZSB1c2VyIGNvdMOpIG1lbnUgZmxvdHRhbnRcclxuXHJcbiAgICAgZ2V0U2luZ2xlQ2FuYWwoY2FuYWxzTWVzc2FnZSlcclxuICAgIHtcclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSAnJztcclxuICAgICAgICBpZihjYW5hbHNNZXNzYWdlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgdGhpc09iaiA9IHRoaXM7XHJcbiAgICAgICAgICAgIGNhbmFsc01lc3NhZ2UuZm9yRWFjaChmdW5jdGlvbihjYW5hbCkge1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gdGhpc09iai5nZXRTaW5nbGVDYW5hbEl0ZW0oY2FuYWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRFbXB0eVNpbmdsZUNhbmFsTWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICc8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2ggXCI+XFxuJyArXHJcbiAgICAgICAgICAgIHRlbXBsYXRlICtcclxuICAgICAgICAgICAgJzwvdWw+JztcclxuICAgIH1cclxuXHJcbiAgIGdldFNpbmdsZUNhbmFsSXRlbShjYW5hbE1lc3NhZ2UpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgY2FuYWxTdHJpbmdpZnkgPSBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY2FuYWxNZXNzYWdlKSk7XHJcbiAgICAgICAgY29uc3QgbGFzdE1lc3NhZ2UgPSBjYW5hbE1lc3NhZ2UubGFzdE1lc3NhZ2UgPyBjYW5hbE1lc3NhZ2UubGFzdE1lc3NhZ2UudGV4dGVzLnNsaWNlKDAsIDgwKSA6ICdDb21tZW5jZXIgdm90cmUgcHJlbWnDqHJlIGNvbnZlcnNhdGlvbi4uLic7XHJcbiAgICAgICAgY29uc3Qgc2VlbkNsYXNzID0gIWNhbmFsTWVzc2FnZS5pc1NlZW4gPyAnYmctZ3JleS0xJzonJztcclxuICAgICAgICBjb25zdCBleWVTbGFzaFNlY3Rpb24gPSAhY2FuYWxNZXNzYWdlLmlzU2VlbiA/XHJcbiAgICAgICAgICAgICcgPGRpdiBjbGFzcz1cImNvbC0yIHRleHQtZGFuZ2VyIGNoYXQtbm90LXNlZW5cIj4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1leWUtc2xhc2hcIj48L2k+JytcclxuICAgICAgICAgICAgJyA8L2Rpdj4nIDogJyc7XHJcbiAgICAgICAgY29uc3QgY3VycmVudF91c2VyX2lkID0gcGFyc2VJbnQoJCgnI2N1cnJlbnQtdXNlci1pZCcpLnRleHQoKSk7XHJcbiAgICAgICAgY29uc3QgbWVtYnJlcyA9IGNhbmFsTWVzc2FnZS5tZW1icmVzO1xyXG4gICAgICAgIGxldCBhdmF0YXIgPSAnL3VzZXIvYXZhdGFyLyc7XHJcbiAgICAgICAgbGV0IG5vbUNhbmFsID0gJyc7XHJcbiAgICAgICAgbWVtYnJlcy5mb3JFYWNoKGZ1bmN0aW9uKHVzZXIpe1xyXG4gICAgICAgICAgIGlmKHVzZXIuaWQgIT09IGN1cnJlbnRfdXNlcl9pZCkge1xyXG4gICAgICAgICAgICAgICBhdmF0YXIgKz0gdXNlci5pZDtcclxuICAgICAgICAgICAgICAgbm9tQ2FuYWwgPSB1c2VyLm5vbSsnICcrdXNlci5wcmVub207XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGxhc3RNZXNzYWdlQ2xhc3MgPSAhY2FuYWxNZXNzYWdlLmlzU2Vlbj8gJ2NvbC03JyA6ICdjb2wtOSc7XHJcbiAgICAgICAgbGV0IG9uZXJyb3IgPSAnb25lcnJvcj1cInRoaXMub25lcnJvcj1udWxsOyB0aGlzLnNyYz1cXCcvYXNzZXRzL3Z1ZXh5L2ltYWdlcy9wb3J0cmFpdC9zbWFsbC9hdmF0YXItcy0xMS5qcGdcXCdcIidcclxuICAgICAgICBsZXQgY29tcG9uZW50PVxyXG4gICAgICAgICAgICAnPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGNoYXQtY2hvb3NlLWNhbmFsICcrc2VlbkNsYXNzKycgcGItMCBwcy0zXCIgZGF0YS1jYW5hbC1tZW51LWlkPVwiJytjYW5hbE1lc3NhZ2UuaWQrJ1wiIGRhdGEtY2FuYWw9XCInK2NhbmFsU3RyaW5naWZ5KydcIiBkYXRhLXNlYXJjaD1cIicrY2FuYWxNZXNzYWdlLm5vbSsnXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgIDxpbWcgc3JjPVwiJythdmF0YXIrJ1wiICcrb25lcnJvcisnIGFsdD1cImh1Z2VuZXJkXCIgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZVwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgIDxkaXYgY2xhc3M9XCInK2xhc3RNZXNzYWdlQ2xhc3MrJyBwcy0yXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgIDxzcGFuPicrbm9tQ2FuYWwrJzwvc3Bhbj48YnI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1tdXRlZCBmcy0xMiBsaW5lLWhlaWdodC0xMyBwYi0zIG1iLTAgYm9yZGVyLWJvdHRvbVwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAnK2xhc3RNZXNzYWdlK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICA8L3A+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZXllU2xhc2hTZWN0aW9uK1xyXG4gICAgICAgICAgICAnICAgICA8L2Rpdj5cXG4nXHJcbiAgICAgICAgICAgICc8L2xpPic7XHJcblxyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RW1wdHlTaW5nbGVDYW5hbE1lc3NhZ2UoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtbXV0ZWRcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtZXllLWRyb3BwZXItZW1wdHlcIj48L2k+IEF1Y3VuZSBjb252ZXJzYXRpb24gZGlzcG9uaWJsZSAnXHJcbiAgICAgICAgJzwvZGl2Pic7XHJcbiAgICB9XHJcblxyXG4gICAvLyAgZGVidXQgbGlzdGUgZ3JvdXBlIGNhbmFsIGNvdMOpIG1lbnVcclxuICAgIGdldEdyb3Vwc0NhbmFsKGNhbmFsc01lc3NhZ2UpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gJyc7XHJcbiAgICAgICAgaWYoY2FuYWxzTWVzc2FnZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoaXNPYmogPSB0aGlzXHJcbiAgICAgICAgICAgIGNhbmFsc01lc3NhZ2UuZm9yRWFjaChmdW5jdGlvbihjYW5hbCkge1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gdGhpc09iai5nZXRHcm91cHNDYW5hbEl0ZW0oY2FuYWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRFbXB0eUdyb3Vwc0NhbmFsTWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICc8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2ggY2hhdC1saXN0LWdyb3VwQ2FuYWwgcHgtMFwiPlxcbicgK1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZSArXHJcbiAgICAgICAgICAgICc8L3VsPic7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R3JvdXBzQ2FuYWxJdGVtKGNhbmFsTWVzc2FnZSlcclxuICAgIHtcclxuICAgICAgICBsZXQgbGFzdE1lc3NhZ2UgPSBjYW5hbE1lc3NhZ2UubGFzdE1lc3NhZ2UgIT0gbnVsbCA/IGNhbmFsTWVzc2FnZS5sYXN0TWVzc2FnZS50ZXh0ZXMuc2xpY2UoMCwgODApIDogJ0Vudm95ZXIgdm90cmUgcHJlbWllciBtZXNzYWdlJztcclxuICAgICAgICBjb25zdCBjYW5hbFN0cmluZ2lmeSA9IGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjYW5hbE1lc3NhZ2UpKTtcclxuICAgICAgICByZXR1cm4gJzxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBjaGF0LWNob29zZS1jYW5hbCAgcGItMCBwcy0zXCIgZGF0YS1jYW5hbD1cIicgKyBjYW5hbFN0cmluZ2lmeSArICdcIiBkYXRhLXNlYXJjaD1cIicgKyBjYW5hbE1lc3NhZ2Uubm9tICsgJ1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICA8aW1nIHNyYz1cIicgKyBsb2dvR3JvdXAgKyAnXCIgYWx0PVwiaHVnZW5lcmRcIiB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIiBjbGFzcz1cInJvdW5kZWQtY2lyY2xlXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC05IHBzLTIgYm9yZGVyLWJvdHRvbVwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICA8c3Bhbj4nICsgY2FuYWxNZXNzYWdlLm5vbSArICc8L3NwYW4+PGJyPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWQgZnMtMTIgbGluZS1oZWlnaHQtMTMgcGItMyBtYi0wIFwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAnICsgbGFzdE1lc3NhZ2UgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICA8L3A+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZW5kIHBiLTMgY2hhdC1ncm91cGUtYWN0aW9uXCI+IFxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJjaGF0LWFkZC11c2VycyB0ZXh0LXN1Y2Nlc3NcIiBkYXRhLWNhbmFsLWlkPVwiJytjYW5hbE1lc3NhZ2UuaWQrJ1wiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtdXNlci1wbHVzXCI+PC9pPjwvYT5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiY2hhdC1yZW1vdmUtdXNlciB0ZXh0LWRhbmdlciBtcy0yXCIgZGF0YS1jYW5hbC1pZD1cIicrY2FuYWxNZXNzYWdlLmlkKydcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLXJpZ2h0LWZyb20tYnJhY2tldFwiPjwvaT48L2E+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgPC9kaXY+JytcclxuICAgICAgICAgICAgJyAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICc8L2xpPic7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RW1wdHlHcm91cHNDYW5hbE1lc3NhZ2UoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtbXV0ZWQgcHktNFwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1leWUtZHJvcHBlci1lbXB0eVwiPjwvaT4gQXVjdW4gZ3JvdXBlICAnXHJcbiAgICAgICAgJzwvZGl2Pic7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Jhc2U2NH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvYmFzZTY0XCI7XHJcbmltcG9ydCB7Q29udmVyc2F0aW9uQmFzZUNvbXBvbmVudH0gZnJvbSBcIi4vQ29udmVyc2F0aW9uQmFzZUNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld0NvbnZlcnNhdGlvbkNvbXBvbmVudCBleHRlbmRzIENvbnZlcnNhdGlvbkJhc2VDb21wb25lbnR7XHJcbiAgICBnZXRIZWFkZXIodXNlcilcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJtdC0zIG1zLTJcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICA8c3BhbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZnctYm9sZCBidG4tc20gcG9zaXRpb24tcmVsYXRpdmVcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICcrdXNlci5ub20rJyAnK3VzZXIucHJlbm9tKydcXG4nICtcclxuICAgICAgICAgICAgJyAgICA8c3BhbiBjbGFzcz1cInBvc2l0aW9uLWFic29sdXRlIHRvcC0wIHN0YXJ0LTEwMCB0cmFuc2xhdGUtbWlkZGxlIHAtMiBiZy1kYW5nZXIgYm9yZGVyIGJvcmRlci1saWdodCByb3VuZGVkLWNpcmNsZVwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+TmV3IGFsZXJ0czwvc3Bhbj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICA8L3NwYW4+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPC9zcGFuPlxcbicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nXHJcbiAgICB9XHJcbiAgICBnZXRDb252ZXJzYXRpb25Db250YWluZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwiY2FyZCBzaGFkb3cgZnMtMTQgIGNoYXQtZmxvYXQtbmV3T25lIGNoYXQtYm94LWNvbnRhaW5lciBtYi0wIHNoYWRvdy1zbVwiIHN0eWxlPVwid2lkdGg6IDE4cmVtO1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBiZy1wcmluYyB3LTEwMCBweS0zXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOCBkLWZsZXhcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXktYXV0b1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8YiBjbGFzcz1cIm1zLTIgXCI+Tm91dmVhdSBNZXNzYWdlIDxpIGNsYXNzPVwiZmEtYnJhbmRzIGZhLWZhY2Vib29rLW1lc3NlbmdlclwiPjwvaT48L2I+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNCB0ZXh0LWVuZFwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlIGNoYXQtYnRuLW1pbmltaXNlIG1lLTJcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWFuZ2xlLWRvd25cIj48L2k+PC9hPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlIGNoYXQtYnRuLWNsb3NlXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jbG9zZVwiPjwvaT48L2E+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICdcXG4nICtcclxuICAgICAgICAgICAgJyAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwiY2FyZC1zdWItaGVhZGVyXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgIHJvdW5kZWQtMCBib3JkZXItMCBib3JkZXItYm90dG9tIHB5LTMgZnMtMTJcIiBpZD1cInNlYXJjaC11c2VyXCIgcGxhY2Vob2xkZXI9XCJFbnRyZXIgbGUgbm9tL2UtbWFpbCBkdSBkZXN0aW5hdGFpcmVcIiBhcmlhLWxhYmVsPVwiUmVjaXBpZW50XFwncyB1c2VybmFtZSB3aXRoIHR3byBidXR0b24gYWRkb25zXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgcHgtMFwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8IS0tIHpvbmUgZGUgbWVzc2FnZXMgLS0+IFxcbicgK1xyXG4gICAgICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyIHAtMFwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8ZGl2IGNsYXNzPVwicHktMyBwcy0yXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8IS0tIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlciBwZS0yXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS12aWRlb1wiPjwvaT48L2E+IC0tPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPCEtLSA8YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC1zZWNvbmRhcnlcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWltYWdlXCI+PC9pPjwvYT4gLS0+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgYmctd2hpdGVcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGJvcmRlci0wIGJvcmRlci10b3AgIGZzLTEyIHJvdW5kZWQtMCBweS0zIGNoYXQtaW5wdXQtdGV4dGVzXCIgcGxhY2Vob2xkZXI9XCJFbnRyZXIgdm90cmUgbWVzc2FnZSAuLi5cIiBhcmlhLWxhYmVsPVwiUmVjaXBpZW50XFwncyB1c2VybmFtZSB3aXRoIHR3byBidXR0b24gYWRkb25zXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSB0ZXh0LXByaW1hcnkgYm9yZGVyLTAgYm9yZGVyLXRvcCBjaGF0LWJ0bi1zZW5kXCIgdHlwZT1cImJ1dHRvblwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGFwZXItcGxhbmVcIj48L2k+PC9idXR0b24+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGlzdFVzZXIodXNlcnMgPSBbXSlcclxuICAgIHtcclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSAnJztcclxuICAgICAgICBpZih1c2Vycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICB1c2Vycy5mb3JFYWNoKGZ1bmN0aW9uKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IHRoYXQuZ2V0TGlzdFVzZXJJdGVtKHVzZXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRFbXB0eUxpc3RVc2VyTWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICc8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2ggXCI+XFxuJyArXHJcbiAgICAgICAgICAgIHRlbXBsYXRlICtcclxuICAgICAgICAgICAgJzwvdWw+JztcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaXN0VXNlckl0ZW0odXNlcilcclxuICAgIHtcclxuICAgICAgICBjb25zdCB1c2VyU3RyaW5naWZpZWQgPSBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgICAgIGxldCBjb21wb25lbnQ9XHJcbiAgICAgICAgICAgICc8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gY2hhdC1jaG9vc2UtdXNlciAgcGItMCBwcy0zXCIgaWQ9XCJjaGF0LXVzZXItJyt1c2VyLmlkKydcIiBkYXRhLXVzZXI9XCInK3VzZXJTdHJpbmdpZmllZCsnXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL21kby5wbmdcIiBhbHQ9XCJodWdlbmVyZFwiIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIGNsYXNzPVwicm91bmRlZC1jaXJjbGVcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTkgcHMtMlwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICA8c3Bhbj4nK3VzZXIubm9tKycgJysgdXNlci5wcmVub20rJzwvc3Bhbj48YnI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1tdXRlZCBmcy0xMiBsaW5lLWhlaWdodC0xMyBwYi0zIG1iLTAgYm9yZGVyLWJvdHRvbVwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAnK3VzZXIuZW1haWwrXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgIDwvcD5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgPC9kaXY+XFxuJ1xyXG4gICAgICAgICc8L2xpPic7XHJcblxyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RW1wdHlMaXN0VXNlck1lc3NhZ2UoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWV5ZS1kcm9wcGVyLWVtcHR5XCI+PC9pPiBBdWN1biByw6lzdWx0YXQgJ1xyXG4gICAgICAgICc8L2Rpdj4nO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7Q29udmVyc2F0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db252ZXJzYXRpb25Db21wb25lbnRcIjtcclxuaW1wb3J0IHtsb2FkZXJPZmYsIGxvYWRlck9ufSBmcm9tIFwiLi4vLi4vaGVscGVycy9Mb2FkZXJcIjtcclxuaW1wb3J0IHtnZXRHcm91cGVDYW5hbCwgZ2V0TWVzc2FnZUJ5Q29kZSwgZ2V0U2luZ2xlQ2FuYWx9IGZyb20gXCIuLi9jaGF0U2VuZGVyUmVxdWVzdFwiO1xyXG5pbXBvcnQge01lbnVDb21wb25lbnR9IGZyb20gXCIuLi9jb21wb25lbnRzL01lbnVDb21wb25lbnRcIjtcclxuaW1wb3J0IHtOZXdDb252ZXJzYXRpb25Db21wb25lbnR9IGZyb20gXCIuLi9jb21wb25lbnRzL05ld0NvbnZlcnNhdGlvbkNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNob3dNZXNzYWdlSW5zdGFuY2UoY2FuYWw9bnVsbClcclxue1xyXG4gICAgY29uc3QgY29udmVyc2F0aW9uQ29tcG9uZW50ID0gY2FuYWwgIT1udWxsID8gbmV3IENvbnZlcnNhdGlvbkNvbXBvbmVudCgpIDogbmV3IE5ld0NvbnZlcnNhdGlvbkNvbXBvbmVudCgpO1xyXG4gICAgY29uc3QgY2hhdEJveENvbnRhaW5lciA9ICQoJy5jaGF0LWJveC1jb250YWluZXInKTtcclxuICAgIGlmKGNoYXRCb3hDb250YWluZXIubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgY2hhdEJveENvbnRhaW5lci5maXJzdCgpLnJlbW92ZSgpXHJcbiAgICB9XHJcbiAgICBsZXQgbWVzc2FnZUNvbnZlcnNhdGlvbkNvbnRhaW5lciA9ICQoJy5jaGF0LWNvbnZlcnNhdGlvbnMtY29udGFpbmVyJylcclxuICAgIGlmKG1lc3NhZ2VDb252ZXJzYXRpb25Db250YWluZXIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgIG1lc3NhZ2VDb252ZXJzYXRpb25Db250YWluZXIgPSAkKCc8ZGl2IC8+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogJ2NoYXQtY29udmVyc2F0aW9ucy1jb250YWluZXIgZC1mbGV4J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICAkKCdib2R5JykuYXBwZW5kKG1lc3NhZ2VDb252ZXJzYXRpb25Db250YWluZXIpXHJcbiAgICB9XHJcblxyXG4gICAgJChtZXNzYWdlQ29udmVyc2F0aW9uQ29udGFpbmVyKS5hcHBlbmQoY29udmVyc2F0aW9uQ29tcG9uZW50LmdldENvbnZlcnNhdGlvbkNvbnRhaW5lcihjYW5hbCkpO1xyXG4gICAgaWYoY2FuYWwgIT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IGNoYXRfaW5zdGFuY2UgPSAkKCcjY2FuYWwtJytjYW5hbC5pZCk7XHJcbiAgICAgICAgY29uc3QgY2hhdF9pbnN0YW5jZV9ib2R5ID0gJChjaGF0X2luc3RhbmNlKS5maW5kKCcuY2FyZC1ib2R5Jyk7XHJcbiAgICAgICAgbG9hZGVyT24oY2hhdF9pbnN0YW5jZV9ib2R5WzBdKTtcclxuICAgICAgICBjb25zdCBtZXNzYWdlcyA9IGF3YWl0IGdldE1lc3NhZ2VCeUNvZGUoY2FuYWwuY29kZSk7XHJcbiAgICAgICAgLy8gY2hhcmdlciBsZXMgbWVzc2FnZXNcclxuICAgICAgICBjaGF0X2luc3RhbmNlX2JvZHkucHJlcGVuZChjb252ZXJzYXRpb25Db21wb25lbnQuZ2V0TWVzc2FnZXMobWVzc2FnZXMpKTtcclxuICAgICAgICBjaGF0X2luc3RhbmNlX2JvZHlbMF0uc2Nyb2xsVG9wID0gY2hhdF9pbnN0YW5jZV9ib2R5WzBdLnNjcm9sbEhlaWdodDtcclxuICAgICAgICBsb2FkZXJPZmYoY2hhdF9pbnN0YW5jZV9ib2R5WzBdKTtcclxuICAgICAgICByZXR1cm4gY2hhdF9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lbnUoY2FuYWwpXHJcbntcclxuICAgIGNvbnN0IG1lbnVDb21wb25lbnQgPSBuZXcgTWVudUNvbXBvbmVudCgpO1xyXG4gICAgaWYoY2FuYWwuaXNHcm91cCkge1xyXG4gICAgICAgIGdldEdyb3VwZUNhbmFsKCkudGhlbihmdW5jdGlvbihncm91cGVDYW5hbHMpIHtcclxuICAgICAgICAgICAgJCgnLmNoYXQtZ3JvdXBlLWNhbmFsJykuaHRtbChtZW51Q29tcG9uZW50LmdldEdyb3Vwc0NhbmFsKGdyb3VwZUNhbmFscykpXHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZ2V0U2luZ2xlQ2FuYWwoKS50aGVuKGZ1bmN0aW9uKHNpbmdsZUNhbmFscykge1xyXG4gICAgICAgICAgICAkKCcuY2hhdC1zaW5nbGUtY2FuYWwnKS5odG1sKG1lbnVDb21wb25lbnQuZ2V0U2luZ2xlQ2FuYWwoc2luZ2xlQ2FuYWxzKSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCBjaXJjbGVJbWFnZSBmcm9tICcuLi8uLi9pbWFnZXMvUHJlbG9hZGVyLWltYWdlLTEuc3ZnJ1xyXG5pbXBvcnQgY2lyY2xlSW1hZ2UyIGZyb20gJy4uLy4uL2ltYWdlcy9XZWItUHJlbG9hZGVyLTEuc3ZnJ1xyXG5pbXBvcnQgY2lyY2xlSW1hZ2UzIGZyb20gJy4uLy4uL2ltYWdlcy8zLUxlZy1QcmVsb2FkZXIuc3ZnJ1xyXG5mdW5jdGlvbiBsb2FkZXIob3B0aW9ucz17XHJcbiAgICAnZWxlbWVudENpYmxlJyA6IHVuZGVmaW5lZCxcclxuICAgICdjbGFzc05hbWUnIDogJycsXHJcbiAgICAnZGlyZWN0aXZlJyA6ICdPTicsXHJcbiAgICAncmVsYXRpdmUnIDogJ09GRicsXHJcbiAgICAnbG9hZGVyV2lkdGgnIDogbnVsbCxcclxuICAgICdsb2FkZXJIZWlnaHQnIDogbnVsbCxcclxuICAgICdiYWNrZHJvcC1jb2xvcicgOiBudWxsXHJcbn0pXHJcbntcclxuICAgIGlmKG9wdGlvbnMuZWxlbWVudENpYmxlICE9PSB1bmRlZmluZWQgKVxyXG4gICAge1xyXG4gICAgICAgIGlmKCBvcHRpb25zLmRpcmVjdGl2ZSA9PT0gJ09OJyAmJiAkKG9wdGlvbnMuZWxlbWVudENpYmxlKS5maW5kKCcubG9hZGVyLWNvbnRhaW5lcicpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IG9wdGlvbnMucmVsYXRpdmUgPT09ICdPRkYnID8gJ3Bvc2l0aW9uLXN0aWNreScgOiAncG9zaXRpb24tcmVsYXRpdmUnO1xyXG4gICAgICAgICAgICBjb25zdCBiYWNrZHJvcF9jb2xvciA9IG9wdGlvbnNbXCJiYWNrZHJvcC1jb2xvclwiXSE9bnVsbCA/ICdiYWNrZ3JvdW5kOicrb3B0aW9uc1snYmFja2Ryb3AtY29sb3InXSA6ICcnO1xyXG4gICAgICAgICAgICBjb25zdCBsb2FkZXJDb250YWluZXIgPSAkKCc8ZGl2IC8+Jywge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdsb2FkZXItY29udGFpbmVyJyxcclxuICAgICAgICAgICAgICAgIGNsYXNzOiAnbG9hZGVyLWNvbnRhaW5lciAnK3Bvc2l0aW9uKycgYm90dG9tLTAgbGVmdC0wIHctMTAwIGgtMTAwIGJnLXdoaXRlIG92ZXJmbG93LWhpZGRlbicsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogYmFja2Ryb3BfY29sb3JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvYWRlclBvc3RDb250YWluZXIgPSAkKCc8ZGl2IC8+Jywge1xyXG4gICAgICAgICAgICAgICAgY2xhc3M6J2xvYWRlci1wb3N0LWNvbnRhaW5lciB3LTEwMCBoLTEwMCBkLWZsZXgnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZVdpZHRoID0gb3B0aW9ucy5sb2FkZXJXaWR0aCAhPSBudWxsID8gJzt3aWR0aDonK29wdGlvbnMubG9hZGVyV2lkdGggOiAnJztcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2VIZWlnaHQgPSBvcHRpb25zLmxvYWRlckhlaWdodCAhPSBudWxsID8gJ2hlaWdodDonK29wdGlvbnMubG9hZGVySGVpZ2h0IDogJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gJCgnPGltZyAvPicsIHtcclxuICAgICAgICAgICAgICAgIHNyYzogY2lyY2xlSW1hZ2UzLFxyXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdtLWF1dG8nLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IGltYWdlSGVpZ2h0K2ltYWdlV2lkdGhcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxvYWRlclBvc3RDb250YWluZXIuYXBwZW5kKGltYWdlKTtcclxuICAgICAgICAgICAgbG9hZGVyQ29udGFpbmVyLmFwcGVuZChsb2FkZXJQb3N0Q29udGFpbmVyKVxyXG4gICAgICAgICAgICAkKG9wdGlvbnMuZWxlbWVudENpYmxlKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygncG9zaXRpb24tcmVsYXRpdmUnKVxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hcHBlbmQobG9hZGVyQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2UgaWYob3B0aW9ucy5kaXJlY3RpdmUgPT09ICdPRkYnKSB7XHJcbiAgICAgICAgICAgICQob3B0aW9ucy5lbGVtZW50Q2libGUpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoXCIubG9hZGVyLWNvbnRhaW5lclwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkZXJPbigkZWxlbWVudCwgJHJlbGF0aXZlPWZhbHNlLCAkc3R5bGVzT3B0aW9ucyA9IHtcclxuICAgICdsb2FkZXJXaWR0aCcgOiBudWxsLFxyXG4gICAgJ2xvYWRlckhlaWdodCcgOiBudWxsLFxyXG4gICAgJ2JhY2tkcm9wLWNvbG9yJzogbnVsbFxyXG59KVxyXG57XHJcbiAgbG9hZGVyKHtcclxuICAgICAgJ2VsZW1lbnRDaWJsZScgOiAkZWxlbWVudCxcclxuICAgICAgJ2RpcmVjdGl2ZScgOiAnT04nLFxyXG4gICAgICAncmVsYXRpdmUnOiAkcmVsYXRpdmUgPyAnT04nIDogJ09GRicsXHJcbiAgICAgICdsb2FkZXJXaWR0aCcgOiAkc3R5bGVzT3B0aW9ucy5sb2FkZXJXaWR0aCxcclxuICAgICAgJ2xvYWRlckhlaWdodCcgOiAkc3R5bGVzT3B0aW9ucy5sb2FkZXJIZWlnaHQsXHJcbiAgICAgICdiYWNrZHJvcC1jb2xvcicgOiAkc3R5bGVzT3B0aW9uc1tcImJhY2tkcm9wLWNvbG9yXCJdXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRlck9mZigkZWxlbWVudClcclxue1xyXG4gICAgbG9hZGVyKHtcclxuICAgICAgICAnZWxlbWVudENpYmxlJyA6ICRlbGVtZW50LFxyXG4gICAgICAgICdkaXJlY3RpdmUnIDogJ09GRidcclxuICAgIH0pXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IEJhc2U2NCA9IHtcclxuXHJcbiAgICAvLyBwcml2YXRlIHByb3BlcnR5XHJcbiAgICBfa2V5U3RyIDogXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiLFxyXG5cclxuICAgIC8vIHB1YmxpYyBtZXRob2QgZm9yIGVuY29kaW5nXHJcbiAgICBlbmNvZGUgOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gXCJcIjtcclxuICAgICAgICB2YXIgY2hyMSwgY2hyMiwgY2hyMywgZW5jMSwgZW5jMiwgZW5jMywgZW5jNDtcclxuICAgICAgICB2YXIgaSA9IDA7XHJcblxyXG4gICAgICAgIGlucHV0ID0gQmFzZTY0Ll91dGY4X2VuY29kZShpbnB1dC50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgd2hpbGUgKGkgPCBpbnB1dC5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgICAgIGNocjEgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XHJcbiAgICAgICAgICAgIGNocjIgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XHJcbiAgICAgICAgICAgIGNocjMgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XHJcblxyXG4gICAgICAgICAgICBlbmMxID0gY2hyMSA+PiAyO1xyXG4gICAgICAgICAgICBlbmMyID0gKChjaHIxICYgMykgPDwgNCkgfCAoY2hyMiA+PiA0KTtcclxuICAgICAgICAgICAgZW5jMyA9ICgoY2hyMiAmIDE1KSA8PCAyKSB8IChjaHIzID4+IDYpO1xyXG4gICAgICAgICAgICBlbmM0ID0gY2hyMyAmIDYzO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzTmFOKGNocjIpKSB7XHJcbiAgICAgICAgICAgICAgICBlbmMzID0gZW5jNCA9IDY0O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzTmFOKGNocjMpKSB7XHJcbiAgICAgICAgICAgICAgICBlbmM0ID0gNjQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzEpICsgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmMyKSArXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzMpICsgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmM0KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBwdWJsaWMgbWV0aG9kIGZvciBkZWNvZGluZ1xyXG4gICAgZGVjb2RlIDogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IFwiXCI7XHJcbiAgICAgICAgdmFyIGNocjEsIGNocjIsIGNocjM7XHJcbiAgICAgICAgdmFyIGVuYzEsIGVuYzIsIGVuYzMsIGVuYzQ7XHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG5cclxuICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1teQS1aYS16MC05XFwrXFwvXFw9XS9nLCBcIlwiKTtcclxuXHJcbiAgICAgICAgd2hpbGUgKGkgPCBpbnB1dC5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgICAgIGVuYzEgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XHJcbiAgICAgICAgICAgIGVuYzIgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XHJcbiAgICAgICAgICAgIGVuYzMgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XHJcbiAgICAgICAgICAgIGVuYzQgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XHJcblxyXG4gICAgICAgICAgICBjaHIxID0gKGVuYzEgPDwgMikgfCAoZW5jMiA+PiA0KTtcclxuICAgICAgICAgICAgY2hyMiA9ICgoZW5jMiAmIDE1KSA8PCA0KSB8IChlbmMzID4+IDIpO1xyXG4gICAgICAgICAgICBjaHIzID0gKChlbmMzICYgMykgPDwgNikgfCBlbmM0O1xyXG5cclxuICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIxKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbmMzICE9IDY0KSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbmM0ICE9IDY0KSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3V0cHV0ID0gQmFzZTY0Ll91dGY4X2RlY29kZShvdXRwdXQpO1xyXG5cclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gcHJpdmF0ZSBtZXRob2QgZm9yIFVURi04IGVuY29kaW5nXHJcbiAgICBfdXRmOF9lbmNvZGUgOiBmdW5jdGlvbiAoc3RyaW5nKSB7XHJcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xcclxcbi9nLFwiXFxuXCIpO1xyXG4gICAgICAgIHZhciB1dGZ0ZXh0ID0gXCJcIjtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBzdHJpbmcubGVuZ3RoOyBuKyspIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjID0gc3RyaW5nLmNoYXJDb2RlQXQobik7XHJcblxyXG4gICAgICAgICAgICBpZiAoYyA8IDEyOCkge1xyXG4gICAgICAgICAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoKGMgPiAxMjcpICYmIChjIDwgMjA0OCkpIHtcclxuICAgICAgICAgICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyA+PiA2KSB8IDE5Mik7XHJcbiAgICAgICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiA2MykgfCAxMjgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDEyKSB8IDIyNCk7XHJcbiAgICAgICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjID4+IDYpICYgNjMpIHwgMTI4KTtcclxuICAgICAgICAgICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdXRmdGV4dDtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gcHJpdmF0ZSBtZXRob2QgZm9yIFVURi04IGRlY29kaW5nXHJcbiAgICBfdXRmOF9kZWNvZGUgOiBmdW5jdGlvbiAodXRmdGV4dCkge1xyXG4gICAgICAgIHZhciBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICB2YXIgYyA9IGMxID0gYzIgPSAwO1xyXG5cclxuICAgICAgICB3aGlsZSAoIGkgPCB1dGZ0ZXh0Lmxlbmd0aCApIHtcclxuXHJcbiAgICAgICAgICAgIGMgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYyA8IDEyOCkge1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XHJcbiAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZigoYyA+IDE5MSkgJiYgKGMgPCAyMjQpKSB7XHJcbiAgICAgICAgICAgICAgICBjMiA9IHV0ZnRleHQuY2hhckNvZGVBdChpKzEpO1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjICYgMzEpIDw8IDYpIHwgKGMyICYgNjMpKTtcclxuICAgICAgICAgICAgICAgIGkgKz0gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGMyID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkrMSk7XHJcbiAgICAgICAgICAgICAgICBjMyA9IHV0ZnRleHQuY2hhckNvZGVBdChpKzIpO1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjICYgMTUpIDw8IDEyKSB8ICgoYzIgJiA2MykgPDwgNikgfCAoYzMgJiA2MykpO1xyXG4gICAgICAgICAgICAgICAgaSArPSAzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0cmluZztcclxuICAgIH1cclxuXHJcbn0iLCIvKipcclxuICogZm9uY3Rpb24gcG91ciBsYSBwcsOpdmlzdWFsaXNhdGlvbiBkJ2ltYWdlXHJcbiAqXHJcbiAqIEBwYXJhbSBpbnB1dFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRVUkwoaW5wdXQsIGNpYmxlKSB7XHJcbiAgICBpZiAoaW5wdXQuZmlsZXMgJiYgaW5wdXQuZmlsZXNbMF0pIHtcclxuICAgICAgICBpZiAoaXNJbWFnZShpbnB1dCkpIHtcclxuICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBlLnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGxpdDEgPSByZXMuc3BsaXQoXCI7XCIpWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYoc3BsaXQxLmluY2x1ZGVzKFwiaW1hZ2VcIikpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoY2libGUpLmF0dHIoJ3NyYycsIGUudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGlucHV0LmZpbGVzWzBdKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaXNJbWFnZSgkZmlsZSkge1xyXG4gICAgaWYgKCRmaWxlLmZpbGVzICYmICRmaWxlLmZpbGVzWzBdICYmICRmaWxlLmZpbGVzWzBdLm5hbWUubWF0Y2goL1xcLihqcGd8anBlZ3xwbmd8Z2lmfGJtcHxpY28pJC8pICkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIE1BVENIID0gd2VsbEtub3duU3ltYm9sKCdtYXRjaCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICB2YXIgcmVnZXhwID0gLy4vO1xuICB0cnkge1xuICAgICcvLi8nW01FVEhPRF9OQU1FXShyZWdleHApO1xuICB9IGNhdGNoIChlcnJvcjEpIHtcbiAgICB0cnkge1xuICAgICAgcmVnZXhwW01BVENIXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuICcvLi8nW01FVEhPRF9OQU1FXShyZWdleHApO1xuICAgIH0gY2F0Y2ggKGVycm9yMikgeyAvKiBlbXB0eSAqLyB9XG4gIH0gcmV0dXJuIGZhbHNlO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcmVnZXhwJyk7XG5cbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNSZWdFeHAoaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFwiVGhlIG1ldGhvZCBkb2Vzbid0IGFjY2VwdCByZWd1bGFyIGV4cHJlc3Npb25zXCIpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkaW5jbHVkZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmNsdWRlcztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSB9LCB7XG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhlbCAvKiAsIGZyb21JbmRleCA9IDAgKi8pIHtcbiAgICByZXR1cm4gJGluY2x1ZGVzKHRoaXMsIGVsLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKCdpbmNsdWRlcycpO1xuIiwidmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG5cbnZhciBEYXRlUHJvdG90eXBlID0gRGF0ZS5wcm90b3R5cGU7XG52YXIgSU5WQUxJRF9EQVRFID0gJ0ludmFsaWQgRGF0ZSc7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciB1biREYXRlVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhEYXRlUHJvdG90eXBlW1RPX1NUUklOR10pO1xudmFyIGdldFRpbWUgPSB1bmN1cnJ5VGhpcyhEYXRlUHJvdG90eXBlLmdldFRpbWUpO1xuXG4vLyBgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1kYXRlLnByb3RvdHlwZS50b3N0cmluZ1xuaWYgKFN0cmluZyhuZXcgRGF0ZShOYU4pKSAhPSBJTlZBTElEX0RBVEUpIHtcbiAgcmVkZWZpbmUoRGF0ZVByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICB2YXIgdmFsdWUgPSBnZXRUaW1lKHRoaXMpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/IHVuJERhdGVUb1N0cmluZyh0aGlzKSA6IElOVkFMSURfREFURTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgUFJPUEVSX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLlBST1BFUjtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyICR0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHJlZ0V4cEZsYWdzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1mbGFncycpO1xuXG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciBSZWdFeHBQcm90b3R5cGUgPSBSZWdFeHAucHJvdG90eXBlO1xudmFyIG4kVG9TdHJpbmcgPSBSZWdFeHBQcm90b3R5cGVbVE9fU1RSSU5HXTtcbnZhciBnZXRGbGFncyA9IHVuY3VycnlUaGlzKHJlZ0V4cEZsYWdzKTtcblxudmFyIE5PVF9HRU5FUklDID0gZmFpbHMoZnVuY3Rpb24gKCkgeyByZXR1cm4gbiRUb1N0cmluZy5jYWxsKHsgc291cmNlOiAnYScsIGZsYWdzOiAnYicgfSkgIT0gJy9hL2InOyB9KTtcbi8vIEZGNDQtIFJlZ0V4cCN0b1N0cmluZyBoYXMgYSB3cm9uZyBuYW1lXG52YXIgSU5DT1JSRUNUX05BTUUgPSBQUk9QRVJfRlVOQ1RJT05fTkFNRSAmJiBuJFRvU3RyaW5nLm5hbWUgIT0gVE9fU1RSSU5HO1xuXG4vLyBgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbmlmIChOT1RfR0VORVJJQyB8fCBJTkNPUlJFQ1RfTkFNRSkge1xuICByZWRlZmluZShSZWdFeHAucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgdmFyIHAgPSAkdG9TdHJpbmcoUi5zb3VyY2UpO1xuICAgIHZhciByZiA9IFIuZmxhZ3M7XG4gICAgdmFyIGYgPSAkdG9TdHJpbmcocmYgPT09IHVuZGVmaW5lZCAmJiBpc1Byb3RvdHlwZU9mKFJlZ0V4cFByb3RvdHlwZSwgUikgJiYgISgnZmxhZ3MnIGluIFJlZ0V4cFByb3RvdHlwZSkgPyBnZXRGbGFncyhSKSA6IHJmKTtcbiAgICByZXR1cm4gJy8nICsgcCArICcvJyArIGY7XG4gIH0sIHsgdW5zYWZlOiB0cnVlIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgbm90QVJlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9ub3QtYS1yZWdleHAnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGNvcnJlY3RJc1JlZ0V4cExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtaXMtcmVnZXhwLWxvZ2ljJyk7XG5cbnZhciBzdHJpbmdJbmRleE9mID0gdW5jdXJyeVRoaXMoJycuaW5kZXhPZik7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlc1xuJCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFjb3JyZWN0SXNSZWdFeHBMb2dpYygnaW5jbHVkZXMnKSB9LCB7XG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2hTdHJpbmcgLyogLCBwb3NpdGlvbiA9IDAgKi8pIHtcbiAgICByZXR1cm4gISF+c3RyaW5nSW5kZXhPZihcbiAgICAgIHRvU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpLFxuICAgICAgdG9TdHJpbmcobm90QVJlZ0V4cChzZWFyY2hTdHJpbmcpKSxcbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG4gICAgKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAbWF0Y2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdtYXRjaCcsIGZ1bmN0aW9uIChNQVRDSCwgbmF0aXZlTWF0Y2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLm1hdGNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUubWF0Y2hcbiAgICBmdW5jdGlvbiBtYXRjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBtYXRjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGdldE1ldGhvZChyZWdleHAsIE1BVENIKTtcbiAgICAgIHJldHVybiBtYXRjaGVyID8gY2FsbChtYXRjaGVyLCByZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW01BVENIXSh0b1N0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAbWF0Y2hcbiAgICBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlTWF0Y2gsIHJ4LCBTKTtcblxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICBpZiAoIXJ4Lmdsb2JhbCkgcmV0dXJuIHJlZ0V4cEV4ZWMocngsIFMpO1xuXG4gICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB2YXIgbiA9IDA7XG4gICAgICB2YXIgcmVzdWx0O1xuICAgICAgd2hpbGUgKChyZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKSkgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIG1hdGNoU3RyID0gdG9TdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgQVtuXSA9IG1hdGNoU3RyO1xuICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgICBuKys7XG4gICAgICB9XG4gICAgICByZXR1cm4gbiA9PT0gMCA/IG51bGwgOiBBO1xuICAgIH1cbiAgXTtcbn0pO1xuIl0sIm5hbWVzIjpbImxvYWRlck9mZiIsImxvYWRlck9uIiwibm90aWZ5VXNlclN0b3BUeXBpbmciLCJub3RpZnlVc2VyVHlwaW5nIiwic2VuZE1lc3NhZ2UiLCJ1cGxvYWRGaWxlIiwiQ29udmVyc2F0aW9uQmFzZUNvbXBvbmVudCIsInVwZGF0ZU1lbnUiLCJyZWFkVVJMIiwicmVxdWlyZSIsIiQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNoYXRDb250YWluZXIiLCJjbG9zZXN0IiwiYm9keU1lc3NhZ2UiLCJmaW5kIiwiaW5wdXRUZXh0IiwiZW1wdHlNZXNzYWdlIiwiY29udmVyc2F0aW9uQmFzZUNvbXBvbmVudCIsImNvZGUiLCJhdHRyIiwiZmlsZXMiLCJlYWNoIiwicHVzaCIsInZhbCIsInJlbW92ZSIsIm1lc3NhZ2VWYWx1ZSIsImxlbmd0aCIsIm1lc3NhZ2UiLCJjbGVhclZ1IiwiY2xlYXJGaWxlIiwiYXBwZW5kIiwiZ2V0TWVzc2FnZSIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNhbmFsIiwic3RvcFByb3BhZ2F0aW9uIiwiaW5wdXRGaWxlIiwidHlwZSIsInRyaWdnZXIiLCJjb250YWluZXJJbWciLCJpbWciLCJodG1sIiwiZmlsZU5hbWUiLCJjb250YWluZXIiLCJmaWxlTmFtZUlucHV0IiwibmFtZSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjYW5hbF9pZCIsImNoYXRfZ3JvdXBDYW5hbF9hZGRVc2VyIiwiY2hhdF9ncm91cENhbmFsX3JlbW92ZVVzZXIiLCJjcmVhdGVHcm91cENhbmFsIiwiZmluZERlc3RpbmF0YWlyZSIsIkNhbmFsR3JvdXBzQ29tcG9uZW50IiwiTWVudUNvbXBvbmVudCIsIk1vZGFsIiwiY2FuYWxzQ29tcG9uZW50IiwiYm94Q3JlYXRpb25Db250YWluZXIiLCJzZWFyY2hWYWx1ZSIsImRpdkNoYXRfdXNlcnNMaXN0IiwidXNlcnMiLCJnZXRMaXN0VXNlciIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjaGF0X3VzZXJCYWRnZUxpc3QiLCJpZCIsInVzZXJCYWRnZSIsImlucHV0Tm9tIiwibm9tIiwiYWxlcnRFcnJvciIsInVzZXJzX2lkIiwiZ2V0VXNlcklkc0J5QmFkZ2UiLCJjYW5hbE1lc3NhZ2UiLCJlcnJvciIsIm1lbnVDb21wb25lbnQiLCJncm91cEluc3RhbmNlIiwiZ2V0R3JvdXBzQ2FuYWxJdGVtIiwibW9kYWxfY29udGFpbmVyIiwic2V0VGltZW91dCIsIkV2ZW50U291cmNlUG9seWZpbGwiLCJDb252ZXJzYXRpb25Db21wb25lbnQiLCJzaG93TWVzc2FnZUluc3RhbmNlIiwiY2hhdF9uZXdNZXNzYWdlX3RvcGljIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRleHRDb250ZW50IiwiY2hhdF92dV90b3BpYyIsImNoYXRfdXNlclR5cGluZ190b3BpYyIsImNoYXRfdXNlclN0b3BUeXBpbmdfdG9waWMiLCJldmVudE5ld01lc3NhZ2UiLCJFdmVudFNvdXJjZSIsImV2ZW50VnUiLCJldmVudFVzZXJUeXBpbmciLCJldmVudFVzZXJTdG9wVHlwaW5nIiwiY29udmVyc2F0aW9uQ29tcG9uZW50Iiwib25tZXNzYWdlIiwiZXZlbnQiLCJkYXRhIiwiakNhbmFsIiwiYWRkSGlnaGxpZ2giLCJkZXJuaWVyTWVzc2FnZUl0ZW0iLCJsYXN0IiwiaWRVc2VyRW52b3lldXIiLCJwYXJzZUludCIsInZ1UGFyIiwiYWRkVnUiLCJhZGRVc2VyVHlwaW5nIiwidXNlclR5cGluZyIsInJlbW92ZVVzZXJUeXBpbmciLCJheGlvcyIsImZpbmRlciIsImdldCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsImdldE1lc3NhZ2VCeUNvZGUiLCJib2R5UmVxdWVzdCIsIlVSTFNlYXJjaFBhcmFtcyIsImZvckVhY2giLCJwb3N0IiwiZ2V0U2luZ2xlQ2FuYWwiLCJnZXRHcm91cGVDYW5hbCIsInNlZUNhbmFsIiwiaW5jbHVkZU1lIiwiZmlsZVVwbG9hZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJmaWxlVXJsIiwidGhlbiIsInJlbW92ZUhpZ2hsaWdodCIsIm1lbnVJdGVtIiwiY2hhdFNpbmdsZUNhbmFsIiwiY2hhdEdyb3VwQ2FuYWwiLCJzaW5nbGVDYW5hbHMiLCJncm91cGVDYW5hbHMiLCJnZXRHcm91cHNDYW5hbCIsInNlYXJjaF92YWx1ZSIsImxpc3RDYW5hbCIsImZpbHRlciIsImRhdGFfc2VhcmNoIiwibWF0Y2giLCJ0b0xvd2VyQ2FzZSIsImNhbmFsR3JvdXBDb21wb25lbnQiLCJnZXRNb2RhbEFkZFVzZXIiLCJtb2RhbEFkZFVzZXIiLCJzaG93IiwiTmV3Q29udmVyc2F0aW9uQ29tcG9uZW50IiwibmV3Q29udmVyc2F0aW9uQ29tcG9uZW50IiwiciIsInRlbXBsYXRlIiwic3ViSGVhZGVyIiwiZ2V0SGVhZGVyIiwiY2hhdENvZGUiLCJtZXNzYWdlcyIsImdldE1lc3NhZ2VzIiwidGhhdCIsImdldExpc3RVc2VySXRlbSIsImdldEVtcHR5TGlzdFVzZXJNZXNzYWdlIiwidXNlclN0cmluZ2lmaWVkIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic3RyaW5naWZ5IiwiY29tcG9uZW50IiwicHJlbm9tIiwiZW1haWwiLCJnZXRFbXB0eU1lc3NhZ2VzIiwiY3VycmVudFVzZXJJZCIsInRleHQiLCJpbWdzIiwidXJsIiwiYXZhdGFyIiwib25lcnJvciIsInJlbmR1RGF0ZUNyZWF0aW9uTWVzc2FnZSIsInRleHRlcyIsImZpbGVzVGVtcGxhdGUiLCJjb252ZXJzYXRpb25Db250YWluZXIiLCJCYXNlNjQiLCJpbnB1dENhY2hlVXNlciIsIm5vbUNhbmFsIiwiY3VycmVudF91c2VyX2lkIiwibWVtYnJlcyIsImVuY29kZSIsImlzR3JvdXAiLCJ2dVRlbXBsYXRlIiwidnVzIiwiZ2V0VnVUZW1wbGF0ZSIsIm91dGVySFRNTCIsIiRjdXJyZW50T2JqZWN0IiwiY2FuYWxWdUNvbnRhaW5lciIsImNhbmFsVXNlclR5cGluZyIsImxvZ29Hcm91cCIsImNhbmFsc01lc3NhZ2UiLCJ0aGlzT2JqIiwiZ2V0U2luZ2xlQ2FuYWxJdGVtIiwiZ2V0RW1wdHlTaW5nbGVDYW5hbE1lc3NhZ2UiLCJjYW5hbFN0cmluZ2lmeSIsImxhc3RNZXNzYWdlIiwic2xpY2UiLCJzZWVuQ2xhc3MiLCJpc1NlZW4iLCJleWVTbGFzaFNlY3Rpb24iLCJsYXN0TWVzc2FnZUNsYXNzIiwiZ2V0RW1wdHlHcm91cHNDYW5hbE1lc3NhZ2UiLCJjaGF0Qm94Q29udGFpbmVyIiwiZmlyc3QiLCJtZXNzYWdlQ29udmVyc2F0aW9uQ29udGFpbmVyIiwiZ2V0Q29udmVyc2F0aW9uQ29udGFpbmVyIiwiY2hhdF9pbnN0YW5jZSIsImNoYXRfaW5zdGFuY2VfYm9keSIsInByZXBlbmQiLCJjaXJjbGVJbWFnZSIsImNpcmNsZUltYWdlMiIsImNpcmNsZUltYWdlMyIsImxvYWRlciIsIm9wdGlvbnMiLCJ1bmRlZmluZWQiLCJlbGVtZW50Q2libGUiLCJkaXJlY3RpdmUiLCJwb3NpdGlvbiIsInJlbGF0aXZlIiwiYmFja2Ryb3BfY29sb3IiLCJsb2FkZXJDb250YWluZXIiLCJzdHlsZSIsImxvYWRlclBvc3RDb250YWluZXIiLCJpbWFnZVdpZHRoIiwibG9hZGVyV2lkdGgiLCJpbWFnZUhlaWdodCIsImxvYWRlckhlaWdodCIsImltYWdlIiwic3JjIiwiJGVsZW1lbnQiLCIkcmVsYXRpdmUiLCIkc3R5bGVzT3B0aW9ucyIsIl9rZXlTdHIiLCJpbnB1dCIsIm91dHB1dCIsImNocjEiLCJjaHIyIiwiY2hyMyIsImVuYzEiLCJlbmMyIiwiZW5jMyIsImVuYzQiLCJpIiwiX3V0ZjhfZW5jb2RlIiwidG9TdHJpbmciLCJjaGFyQ29kZUF0IiwiaXNOYU4iLCJjaGFyQXQiLCJkZWNvZGUiLCJyZXBsYWNlIiwiaW5kZXhPZiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIl91dGY4X2RlY29kZSIsInN0cmluZyIsInV0ZnRleHQiLCJuIiwiYyIsImMxIiwiYzIiLCJjMyIsImNpYmxlIiwiaXNJbWFnZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJyZXMiLCJ0YXJnZXQiLCJyZXN1bHQiLCJzcGxpdDEiLCJzcGxpdCIsImluY2x1ZGVzIiwicmVhZEFzRGF0YVVSTCIsIiRmaWxlIl0sInNvdXJjZVJvb3QiOiIifQ==