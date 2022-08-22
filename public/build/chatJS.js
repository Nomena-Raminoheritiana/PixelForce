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
  var eventNewMessage = new event_source_polyfill_src_eventsource_min_js__WEBPACK_IMPORTED_MODULE_5__.EventSourcePolyfill(chat_newMessage_topic, {
    header: {
      'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.c6_7faKRwz4VbZwLt7a1ivjCIi1U6jxNhQ3dPYYY7Ec'
    }
  });
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
          var _user$nom, _user$prenom;

          avatar += user.id;
          nomCanal = ((_user$nom = user.nom) !== null && _user$nom !== void 0 ? _user$nom : '') + ' ' + ((_user$prenom = user.prenom) !== null && _user$prenom !== void 0 ? _user$prenom : '');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hhdC9jaGF0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGF0L2NoYXRHcm91cENhbmFsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGF0L2NoYXRNZXJjdXJlVHJhaXRlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hhdC9jaGF0U2VuZGVyUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hhdC9jaGF0X2NhbmFsX2luc3RhbmNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGF0L2NoYXRfbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hhdC9jaGF0X25ld19vbmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXQvY29tcG9uZW50cy9DYW5hbEdyb3Vwc0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hhdC9jb21wb25lbnRzL0NvbnZlcnNhdGlvbkJhc2VDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXQvY29tcG9uZW50cy9Db252ZXJzYXRpb25Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXQvY29tcG9uZW50cy9NZW51Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGF0L2NvbXBvbmVudHMvTmV3Q29udmVyc2F0aW9uQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGF0L2hlbHBlcnMvY2hhdF9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9oZWxwZXJzL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaGVscGVycy9iYXNlNjQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hlbHBlcnMvaW5wdXRGaWxlUHJldmlldy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29ycmVjdC1pcy1yZWdleHAtbG9naWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25vdC1hLXJlZ2V4cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZGF0ZS50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLmluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLm1hdGNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bG9hZGVyT2ZmLCBsb2FkZXJPbn0gZnJvbSBcIi4uL2hlbHBlcnMvTG9hZGVyXCI7XHJcbmltcG9ydCB7bm90aWZ5VXNlclN0b3BUeXBpbmcsIG5vdGlmeVVzZXJUeXBpbmcsIHNlbmRNZXNzYWdlLCB1cGxvYWRGaWxlfSBmcm9tIFwiLi9jaGF0U2VuZGVyUmVxdWVzdFwiO1xyXG5pbXBvcnQge0NvbnZlcnNhdGlvbkJhc2VDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvQ29udmVyc2F0aW9uQmFzZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQge3VwZGF0ZU1lbnV9IGZyb20gXCIuL2hlbHBlcnMvY2hhdF9oZWxwZXJzXCI7XHJcbmltcG9ydCB7cmVhZFVSTH0gZnJvbSBcIi4uL2hlbHBlcnMvaW5wdXRGaWxlUHJldmlld1wiO1xyXG5yZXF1aXJlKCcuL2NoYXRfbmV3X29uZScpXHJcbnJlcXVpcmUoJy4vY2hhdF9tZW51JylcclxucmVxdWlyZSgnLi9jaGF0TWVyY3VyZVRyYWl0ZW1lbnQnKVxyXG5yZXF1aXJlKCcuL2NoYXRfY2FuYWxfaW5zdGFuY2UnKVxyXG5yZXF1aXJlKCcuL2NoYXRHcm91cENhbmFsJylcclxuJChmdW5jdGlvbigpIHtcclxuICAgIC8vIGVudm95ZXIgdW4gbWVzc2FnZVxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCAnLmNoYXQtYnRuLXNlbmQnLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRDb250YWluZXIgPSAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LWJveC1jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBib2R5TWVzc2FnZSA9IGNoYXRDb250YWluZXIuZmluZCgnLmNhcmQtYm9keScpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0VGV4dCA9IGNoYXRDb250YWluZXIuZmluZCgnLmNoYXQtaW5wdXQtdGV4dGVzJyk7XHJcbiAgICAgICAgY29uc3QgZW1wdHlNZXNzYWdlID0gY2hhdENvbnRhaW5lci5maW5kKCcuY2hhdC1lbXB0eS1tZXNzYWdlJyk7XHJcbiAgICAgICAgY29uc3QgY29udmVyc2F0aW9uQmFzZUNvbXBvbmVudCA9IG5ldyBDb252ZXJzYXRpb25CYXNlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgLy8gc29pdCBvbiBhIGxlIGNhbmFsLCBzb2l0IG9uIGEgbGUgY29kZVxyXG4gICAgICAgIGNvbnN0IGNvZGUgID0gJCh0aGlzKS5hdHRyKCdkYXRhLWNvZGUnKTtcclxuICAgICAgICBsZXQgZmlsZXMgPSBbXTtcclxuICAgICAgICBjaGF0Q29udGFpbmVyLmZpbmQoJ2lucHV0W25hbWU9XCJmaWxlc1tdXCJdJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBmaWxlcy5wdXNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VWYWx1ZSA9IGlucHV0VGV4dC52YWwoKTtcclxuICAgICAgICBpZihtZXNzYWdlVmFsdWUubGVuZ3RoID4gMCB8fCBmaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxvYWRlck9uKGJvZHlNZXNzYWdlWzBdKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHNlbmRNZXNzYWdlKG1lc3NhZ2VWYWx1ZSxjb2RlLCBmaWxlcylcclxuICAgICAgICAgICAgY29udmVyc2F0aW9uQmFzZUNvbXBvbmVudC5jbGVhclZ1KGJvZHlNZXNzYWdlKTtcclxuICAgICAgICAgICAgY29udmVyc2F0aW9uQmFzZUNvbXBvbmVudC5jbGVhckZpbGUoY2hhdENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGNoYXRDb250YWluZXIuZmluZCgnLmNoYXQtbGlzdC1ncm91cC1tZXNzYWdlcycpLmFwcGVuZChjb252ZXJzYXRpb25CYXNlQ29tcG9uZW50LmdldE1lc3NhZ2UobWVzc2FnZSkpXHJcbiAgICAgICAgICAgIGlucHV0VGV4dC52YWwoJycpO1xyXG4gICAgICAgICAgICBib2R5TWVzc2FnZVswXS5zY3JvbGxUb3AgPSBib2R5TWVzc2FnZVswXS5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgICAgIGxvYWRlck9mZihib2R5TWVzc2FnZVswXSk7XHJcbiAgICAgICAgICAgIGlmKGVtcHR5TWVzc2FnZS5sZW5ndGg+MCkge1xyXG4gICAgICAgICAgICAgICAgZW1wdHlNZXNzYWdlLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF3YWl0IHVwZGF0ZU1lbnUobWVzc2FnZS5jYW5hbClcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYWN0aXZlciBsZSBjb21wb3J0ZW1lbnQgcGFyIGTDqWZhdWx0IGRlIGwnaW5wdXRGaWxlXHJcbiAgICAvLyBjb21wb3J0ZW1lbnQgcGFyIGTDqWZhdXQgYXJyw6l0ZXIgZXQgcXVpIGVzdCBjYXVzw6kgcGFyIGwnw6l2w6huZW1lbnQgY2xpY2sgZHUgcGFyZW50XHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsICdpbnB1dFt0eXBlPVwiZmlsZVwiXScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHVwbG9hZCBmaWxlXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsJy5jaGF0LXVwbG9hZEltYWdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBpbnB1dEZpbGUgPSAkKCc8aW5wdXQgLz4nLCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdmaWxlJyxcclxuICAgICAgICAgICAgY2xhc3M6J2Qtbm9uZSdcclxuICAgICAgICB9KVxyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmNoYXQtYm94LWNvbnRhaW5lcicpLmZpbmQoJy5jaGF0LWZpbGVzLXByZXZpZXcnKS5hcHBlbmQoaW5wdXRGaWxlKTtcclxuXHJcbiAgICAgICAgaW5wdXRGaWxlLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblxyXG4gICAgfSlcclxuXHJcbiAgICAkKHRoaXMpLm9uKCdjaGFuZ2UnLCcuY2hhdC1ib3gtY29udGFpbmVyIGlucHV0W3R5cGU9XCJmaWxlXCJdJyxhc3luYyBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVySW1nID0gJCgnPGRpdiAvPicpO1xyXG4gICAgICAgIGNvbnN0IGltZyA9ICQoJzxpbWcgLz4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOidjaGF0LWZpbGUtaXRlbSdcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb250YWluZXJJbWcuaHRtbChpbWcpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmNoYXQtYm94LWNvbnRhaW5lcicpLmZpbmQoJy5jaGF0LWZpbGVzLXByZXZpZXcnKS5hcHBlbmQoY29udGFpbmVySW1nKTtcclxuICAgICAgICByZWFkVVJMKCQodGhpcylbMF0sIGltZ1swXSk7XHJcbiAgICAgICAgbG9hZGVyT24oY29udGFpbmVySW1nWzBdLCBmYWxzZSwge1xyXG4gICAgICAgICAgICAnbG9hZGVyV2lkdGgnIDogJzQwcHgnLFxyXG4gICAgICAgICAgICAnbG9hZGVySGVpZ2h0JyA6ICc0MHB4JyxcclxuICAgICAgICAgICAgJ2JhY2tkcm9wLWNvbG9yJzogJ3JnYmEoMjU1LDI1NSwyNTUsMC41KSAhaW1wb3J0YW50J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGZpbGVOYW1lID0gYXdhaXQgdXBsb2FkRmlsZSgkKHRoaXMpWzBdKTtcclxuICAgICAgICBsb2FkZXJPZmYoY29udGFpbmVySW1nWzBdKTtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LWJveC1jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBmaWxlTmFtZUlucHV0ID0gJCgnPGlucHV0IC8+Jywge1xyXG4gICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgbmFtZTogJ2ZpbGVzW10nLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZpbGVOYW1lSW5wdXQudmFsKGZpbGVOYW1lKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGZpbGVOYW1lSW5wdXQpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvLyBzdXBwcmltZXIgbGUgY29udGVuZXVyIGR1IG1lc3NhZ2VcclxuICAgICQodGhpcykub24oJ2NsaWNrJywnLmNoYXQtYnRuLWNsb3NlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LWJveC1jb250YWluZXInKS5yZW1vdmUoKTtcclxuICAgIH0pXHJcblxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCcuY2hhdC1idG4tbWluaW1pc2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmNoYXQtYm94LWNvbnRhaW5lciwuY2hhdC1mbG9hdC1tZW51JykuYWRkQ2xhc3MoJ2NoYXQtbWluaW1pc2VkJyk7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCdpJykucmVtb3ZlQ2xhc3MoJ2ZhLWFuZ2xlLWRvd24nKS5hZGRDbGFzcygnZmEtYW5nbGUtdXAnKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjaGF0LWJ0bi1tYXhpbWlzZScpLnJlbW92ZUNsYXNzKCdjaGF0LWJ0bi1taW5pbWlzZScpO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsJy5jaGF0LWJ0bi1tYXhpbWlzZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuY2hhdC1ib3gtY29udGFpbmVyLC5jaGF0LWZsb2F0LW1lbnUnKS5yZW1vdmVDbGFzcygnY2hhdC1taW5pbWlzZWQnKTtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJ2knKS5yZW1vdmVDbGFzcygnZmEtYW5nbGUtdXAnKS5hZGRDbGFzcygnZmEtYW5nbGUtZG93bicpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2NoYXQtYnRuLW1pbmltaXNlJykucmVtb3ZlQ2xhc3MoJ2NoYXQtYnRuLW1heGltaXNlJyk7XHJcbiAgICB9KVxyXG5cclxuICAgICQodGhpcykub24oJ2ZvY3VzJywgJy5jaGF0LWlucHV0LXRleHRlcycsYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBjYW5hbF9pZCA9ICQodGhpcykuY2xvc2VzdCgnLmNoYXQtYm94LWNvbnRhaW5lcicpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAgICAgICBhd2FpdCBub3RpZnlVc2VyVHlwaW5nKGNhbmFsX2lkKVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCh0aGlzKS5vbignZm9jdXNvdXQnLCcuY2hhdC1pbnB1dC10ZXh0ZXMnLGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgY2FuYWxfaWQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LWJveC1jb250YWluZXInKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgYXdhaXQgbm90aWZ5VXNlclN0b3BUeXBpbmcoY2FuYWxfaWQpXHJcbiAgICB9KVxyXG59KTtcclxuIiwiaW1wb3J0IHtcclxuICAgIGNoYXRfZ3JvdXBDYW5hbF9hZGRVc2VyLFxyXG4gICAgY2hhdF9ncm91cENhbmFsX3JlbW92ZVVzZXIsXHJcbiAgICBjcmVhdGVHcm91cENhbmFsLFxyXG4gICAgZmluZERlc3RpbmF0YWlyZVxyXG59IGZyb20gXCIuL2NoYXRTZW5kZXJSZXF1ZXN0XCI7XHJcbmltcG9ydCB7bG9hZGVyT2ZmLCBsb2FkZXJPbn0gZnJvbSBcIi4uL2hlbHBlcnMvTG9hZGVyXCI7XHJcbmltcG9ydCB7Q2FuYWxHcm91cHNDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvQ2FuYWxHcm91cHNDb21wb25lbnRcIjtcclxuaW1wb3J0IHtNZW51Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL01lbnVDb21wb25lbnRcIjtcclxuaW1wb3J0IHtNb2RhbH0gZnJvbSAnYm9vdHN0cmFwJ1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGNhbmFsc0NvbXBvbmVudCA9IG5ldyBDYW5hbEdyb3Vwc0NvbXBvbmVudCgpXHJcbiAgICAkKHRoaXMpLm9uKCdpbnB1dCcsJy5jaGF0U2VhcmNoVXNlcicsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgYm94Q3JlYXRpb25Db250YWluZXIgPSAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LW1vZGFsLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBjb25zdCBkaXZDaGF0X3VzZXJzTGlzdCA9IGJveENyZWF0aW9uQ29udGFpbmVyLmZpbmQoJy5jaGF0X3VzZXJzTGlzdCcpO1xyXG4gICAgICAgIGlmKHNlYXJjaFZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZGl2Q2hhdF91c2Vyc0xpc3QuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgIGxvYWRlck9uKGRpdkNoYXRfdXNlcnNMaXN0WzBdLCAnT04nKTtcclxuICAgICAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBmaW5kRGVzdGluYXRhaXJlKHNlYXJjaFZhbHVlKTtcclxuICAgICAgICAgICAgZGl2Q2hhdF91c2Vyc0xpc3QuaHRtbChjYW5hbHNDb21wb25lbnQuZ2V0TGlzdFVzZXIodXNlcnMpKVxyXG4gICAgICAgICAgICBsb2FkZXJPZmYoZGl2Q2hhdF91c2Vyc0xpc3RbMF0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpdkNoYXRfdXNlcnNMaXN0Lmh0bWwoJycpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsJy5jaGF0LXNlbGVjdC11c2VyJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQoJCh0aGlzKS5hdHRyKCdkYXRhLXVzZXInKSkpXHJcbiAgICAgICAgY29uc3QgY2hhdF91c2VyQmFkZ2VMaXN0ID0gJCgnLmNoYXRfdXNlckJhZGdlTGlzdCcpO1xyXG4gICAgICAgIGlmKCQoJyNjaGF0LWJhZGdlVXNlci0nK3VzZXIuaWQpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjaGF0X3VzZXJCYWRnZUxpc3QuYXBwZW5kKGNhbmFsc0NvbXBvbmVudC51c2VyQmFkZ2UodXNlcikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsJyNjaGF0LWJ0bi1jcmVhdGVDYW5hbCcsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgaW5wdXROb20gPSAkKCcjY2hhdF9pbnB1dENhbmFsTmFtZScpO1xyXG4gICAgICAgIGNvbnN0IG5vbSA9IGlucHV0Tm9tLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IGFsZXJ0RXJyb3IgPSAkKCcuYWxlcnQtZW1wdHktbmFtZScpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJzX2lkID0gZ2V0VXNlcklkc0J5QmFkZ2UoJCh0aGlzKS5jbG9zZXN0KCcuY2hhdC1tb2RhbC1jb250YWluZXInKSk7XHJcblxyXG4gICAgICAgIGlmKG5vbS5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICBhbGVydEVycm9yLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2FuYWxNZXNzYWdlID0gYXdhaXQgY3JlYXRlR3JvdXBDYW5hbChub20sIHVzZXJzX2lkKTtcclxuICAgICAgICBpZihjYW5hbE1lc3NhZ2UuZXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnRFcnJvci5yZW1vdmVDbGFzcygnZC1ub25lJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgIGNvbnN0IG1lbnVDb21wb25lbnQgPSBuZXcgTWVudUNvbXBvbmVudCgpO1xyXG4gICAgICAgICAgIGNvbnN0IGdyb3VwSW5zdGFuY2UgPSBtZW51Q29tcG9uZW50LmdldEdyb3Vwc0NhbmFsSXRlbShjYW5hbE1lc3NhZ2UpO1xyXG4gICAgICAgICAgICQoJy5jaGF0LWxpc3QtZ3JvdXBDYW5hbCcpLmFwcGVuZChncm91cEluc3RhbmNlKTtcclxuICAgICAgICAgICAkKCdbZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIl0nKS50cmlnZ2VyKCdjbGljaycpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbiAgICAkKHRoaXMpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCcjY2hhdE1vZGFsQ3JlYXRlR3JvdXBzJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICQoJyNjaGF0X2lucHV0Q2FuYWxOYW1lJykudmFsKCcnKTtcclxuICAgICAgICAkKCcuY2hhdC1iYWRnZVVzZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5jaGF0X3VzZXJzTGlzdCcpLmh0bWwoJycpO1xyXG4gICAgICAgICQoJyNjaGF0U2VhcmNoVXNlcicpLnZhbCgnJyk7XHJcbiAgICB9KVxyXG5cclxuICAgICQodGhpcykub24oJ2hpZGRlbi5icy5tb2RhbCcsJy5jaGF0LW1vZGFsLWFkZFVzZXJzJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsICcjY2hhdC1idG4tYWRkVXNlcnMnLGFzeW5jIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBtb2RhbF9jb250YWluZXIgPSAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LW1vZGFsLWNvbnRhaW5lcicpXHJcbiAgICAgICAgY29uc3QgdXNlcnNfaWQgPSBnZXRVc2VySWRzQnlCYWRnZShtb2RhbF9jb250YWluZXIpO1xyXG4gICAgICAgIGF3YWl0IGNoYXRfZ3JvdXBDYW5hbF9hZGRVc2VyKG1vZGFsX2NvbnRhaW5lci5hdHRyKCdkYXRhLWNhbmFsLWlkJyksIHVzZXJzX2lkKVxyXG4gICAgICAgIG1vZGFsX2NvbnRhaW5lci5maW5kKCcuYWxlcnQtc3VjY2VzcycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKG1vZGFsX2NvbnRhaW5lcikuZmluZCgnW2RhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCJdJykudHJpZ2dlcignY2xpY2snKVxyXG4gICAgICAgIH0sIDUwMClcclxuICAgIH0pXHJcblxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCAnLmNoYXQtcmVtb3ZlLXVzZXInLGFzeW5jIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgYXdhaXQgY2hhdF9ncm91cENhbmFsX3JlbW92ZVVzZXIoJCh0aGlzKS5hdHRyKCdkYXRhLWNhbmFsLWlkJykpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmNoYXQtY2hvb3NlLWNhbmFsJykucmVtb3ZlKClcclxuICAgIH0pXHJcblxyXG5cclxufSk7XHJcblxyXG5mdW5jdGlvbiBnZXRVc2VySWRzQnlCYWRnZShjb250YWluZXIpXHJcbntcclxuICAgIGxldCB1c2Vyc19pZCA9IFtdO1xyXG4gICAgJChjb250YWluZXIpLmZpbmQoJy5jaGF0LWJhZGdlVXNlcicpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdXNlcnNfaWQucHVzaCgkKHRoaXMpLmF0dHIoJ2RhdGEtdXNlci1pZCcpKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdXNlcnNfaWQ7XHJcbn0iLCJpbXBvcnQgeyBFdmVudFNvdXJjZVBvbHlmaWxsIH0gZnJvbSBcImV2ZW50LXNvdXJjZS1wb2x5ZmlsbC9zcmMvZXZlbnRzb3VyY2UubWluLmpzXCI7XHJcbmltcG9ydCB7Q29udmVyc2F0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnZlcnNhdGlvbkNvbXBvbmVudFwiO1xyXG5pbXBvcnQge3Nob3dNZXNzYWdlSW5zdGFuY2UsIHVwZGF0ZU1lbnV9IGZyb20gXCIuL2hlbHBlcnMvY2hhdF9oZWxwZXJzXCI7XHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gZGV0ZWN0ZXIgcydpbCB5IGEgdW4gbWVzc2FnZVxyXG4gICAgY29uc3QgY2hhdF9uZXdNZXNzYWdlX3RvcGljID0gSlNPTi5wYXJzZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXQtbmV3TWVzc2FnZS10b3BpY1wiKS50ZXh0Q29udGVudCk7XHJcbiAgICBjb25zdCBjaGF0X3Z1X3RvcGljID0gSlNPTi5wYXJzZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXQtdnUtdG9waWNcIikudGV4dENvbnRlbnQpO1xyXG4gICAgY29uc3QgY2hhdF91c2VyVHlwaW5nX3RvcGljID0gSlNPTi5wYXJzZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXQtdXNlclR5cGluZy10b3BpY1wiKS50ZXh0Q29udGVudCk7XHJcbiAgICBjb25zdCBjaGF0X3VzZXJTdG9wVHlwaW5nX3RvcGljID0gSlNPTi5wYXJzZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXQtdXNlclN0b3BUeXBpbmctdG9waWNcIikudGV4dENvbnRlbnQpO1xyXG4gICAgY29uc3QgZXZlbnROZXdNZXNzYWdlID0gbmV3IEV2ZW50U291cmNlUG9seWZpbGwoY2hhdF9uZXdNZXNzYWdlX3RvcGljLCB7XHJcbiAgICAgICAgaGVhZGVyIDoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArICdleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKdFpYSmpkWEpsSWpwN0luQjFZbXhwYzJnaU9sc2lLaUpkZlgwLmM2XzdmYUtSd3o0VmJad0x0N2ExaXZqQ0lpMVU2anhOaFEzZFBZWVk3RWMnXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBldmVudFZ1ID0gbmV3IEV2ZW50U291cmNlKGNoYXRfdnVfdG9waWMpO1xyXG4gICAgY29uc3QgZXZlbnRVc2VyVHlwaW5nID0gbmV3IEV2ZW50U291cmNlKGNoYXRfdXNlclR5cGluZ190b3BpYyk7XHJcbiAgICBjb25zdCBldmVudFVzZXJTdG9wVHlwaW5nID0gbmV3IEV2ZW50U291cmNlKGNoYXRfdXNlclN0b3BUeXBpbmdfdG9waWMpO1xyXG4gICAgY29uc3QgY29udmVyc2F0aW9uQ29tcG9uZW50ID0gbmV3IENvbnZlcnNhdGlvbkNvbXBvbmVudCgpO1xyXG4gICAgLy8gcHLDqXNlbmNlIGQndW4gbm91dmVhdSBtZXNzYWdlXHJcbiAgICBldmVudE5ld01lc3NhZ2Uub25tZXNzYWdlID0gYXN5bmMgZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xyXG4gICAgICAgIGNvbnN0IGNhbmFsID0gbWVzc2FnZS5jYW5hbDtcclxuICAgICAgICBjb25zdCB1c2VyID0gbWVzc2FnZS51c2VyO1xyXG4gICAgICAgIC8vIHNpIHVuZSBpbnN0YW5jZSBlc3Qgb3V2ZXJ0ZVxyXG4gICAgICAgIGxldCBqQ2FuYWwgPSAkKCcjY2FuYWwtJytjYW5hbC5pZCk7XHJcbiAgICAgICAgakNhbmFsLmZpbmQoJy5jaGF0LWxpc3QtZ3JvdXAtbWVzc2FnZXMnKS5hcHBlbmQoY29udmVyc2F0aW9uQ29tcG9uZW50LmdldE1lc3NhZ2UobWVzc2FnZSkpO1xyXG4gICAgICAgIC8vIHNpIGwnaW5zdGFuY2Ugbidlc3QgcGFzIG91dmVydGVcclxuICAgICAgICBpZihqQ2FuYWwubGVuZ3RoID09PSAwICkge1xyXG4gICAgICAgICAgakNhbmFsID0gYXdhaXQgc2hvd01lc3NhZ2VJbnN0YW5jZShjYW5hbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIG1ldHRyZSBlbiDDqXZpZGVuY2UgbGUgY2FuYWxcclxuICAgICAgICBjb252ZXJzYXRpb25Db21wb25lbnQuYWRkSGlnaGxpZ2goakNhbmFsKVxyXG4gICAgICAgIC8vIG1ldHRyZSDDoCBqb3VyIGxlIG1lbnVcclxuICAgICAgICBhd2FpdCB1cGRhdGVNZW51KGNhbmFsKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHF1YW5kIHF1ZWxxdSd1biB2b2l0IGxlIG1lc3NhZ2VcclxuICAgIGV2ZW50VnUub25tZXNzYWdlID0gYXN5bmMgZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhbmFsID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcclxuICAgICAgICBjb25zdCBkZXJuaWVyTWVzc2FnZUl0ZW0gPSAkKCcuY2hhdC1saXN0LWdyb3VwLW1lc3NhZ2VzPi5saXN0LWdyb3VwLWl0ZW0nKS5sYXN0KCk7XHJcbiAgICAgICAgY29uc3QgaWRVc2VyRW52b3lldXIgPSBwYXJzZUludChkZXJuaWVyTWVzc2FnZUl0ZW0uYXR0cignZGF0YS1pZC11c2VyJykpXHJcbiAgICAgICAgLy8gc2kgdW5lIGluc3RhbmNlIGVzdCBvdXZlcnRlIGV0IHF1ZSBsYSBwZXJzb25uZSBxdWkgYSB2dSBsZSBtZXNzYWdlIG4nZXN0IHBhcyBsJ2Vudm95ZXVyXHJcbiAgICAgICAgbGV0IGpDYW5hbCA9ICQoJyNjYW5hbC0nK2NhbmFsLmlkKTtcclxuICAgICAgICBjb252ZXJzYXRpb25Db21wb25lbnQuY2xlYXJWdShqQ2FuYWwpXHJcbiAgICAgICAgaWYoakNhbmFsLmxlbmd0aCA+IDAgJiYgaWRVc2VyRW52b3lldXIgIT09IGNhbmFsLnZ1UGFyLnVzZXIuaWQgKSB7XHJcbiAgICAgICAgICAgLy8gdG9kbzogbWV0dHJlIHVuIHZ1XHJcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbkNvbXBvbmVudC5hZGRWdShqQ2FuYWwsIGNhbmFsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcXVhbmQgcXVlbHF1J3VuIGVzdCBlbiB0cmFpbiBkJ8OpY3JpcmVcclxuICAgIGV2ZW50VXNlclR5cGluZy5vbm1lc3NhZ2UgPSBhc3luYyBldmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FuYWwgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xyXG4gICAgICAgIGNvbnZlcnNhdGlvbkNvbXBvbmVudC5hZGRVc2VyVHlwaW5nKCQoJy5jaGF0LWJveC1jb250YWluZXJbaWQ9XCJjYW5hbC0nK2NhbmFsLmlkKydcIl0nKSwgY2FuYWwudXNlclR5cGluZylcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gcXVhbmQgcXVlbHF1J3VuIGFycmV0ZSBkJ8OpY3JpcmVcclxuICAgIGV2ZW50VXNlclN0b3BUeXBpbmcub25tZXNzYWdlID0gYXN5bmMgZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhbmFsID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcclxuICAgICAgICBjb252ZXJzYXRpb25Db21wb25lbnQucmVtb3ZlVXNlclR5cGluZygkKCcuY2hhdC1ib3gtY29udGFpbmVyW2lkPVwiY2FuYWwtJytjYW5hbC5pZCsnXCJdJyksIGNhbmFsLnVzZXJUeXBpbmcpXHJcbiAgICB9XHJcblxyXG5cclxufSk7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmREZXN0aW5hdGFpcmUoZmluZGVyKSB7XHJcbiAgICBpZihmaW5kZXIubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgcmV0dXJuIChhd2FpdCBheGlvcy5nZXQoUm91dGluZy5nZW5lcmF0ZSgndXNlcl9maW5kRGVzdCcsIHtmaW5kZXI6IGZpbmRlcn0pKSkuZGF0YTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2VCeUNvZGUoY29kZT1udWxsKVxyXG57XHJcbiAgICBpZihjb2RlICE9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIChhd2FpdCBheGlvcy5nZXQoUm91dGluZy5nZW5lcmF0ZSgnY2hhdF9nZXRNZXNzYWdlX2J5Q29kZScsIHtjb2RlIDogY29kZX0pKSkuZGF0YVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbXTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKG1lc3NhZ2UsIGNvZGUsIGZpbGVzID0gW10pIHtcclxuICAgIC8vIGVudm95ZXIgdW4gbWVzc2FnZVxyXG4gICAgY29uc3QgYm9keVJlcXVlc3QgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICBib2R5UmVxdWVzdC5hcHBlbmQoJ3RleHRlcycsIG1lc3NhZ2UpO1xyXG4gICAgZmlsZXMuZm9yRWFjaChmdW5jdGlvbihmaWxlTmFtZSkge1xyXG4gICAgICAgIGJvZHlSZXF1ZXN0LmFwcGVuZCgnZmlsZXNbXScsIGZpbGVOYW1lKVxyXG4gICAgfSlcclxuICAgIHJldHVybiAoYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgIFJvdXRpbmcuZ2VuZXJhdGUoJ2NoYXRfYWRkTWVzc2FnZScsIHtjb2RlIDogY29kZX0pLFxyXG4gICAgICAgICAgICAgICAgYm9keVJlcXVlc3RcclxuICAgICAgICApKS5kYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2luZ2xlQ2FuYWwoKVxyXG57XHJcbiAgcmV0dXJuIChhd2FpdCBheGlvcy5nZXQoUm91dGluZy5nZW5lcmF0ZSgnY2hhdF9nZXRDYW5hbFNpbmdsZU1lc3NhZ2UnKSkpLmRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRHcm91cGVDYW5hbCgpXHJcbntcclxuICAgIHJldHVybiAoYXdhaXQgYXhpb3MuZ2V0KFJvdXRpbmcuZ2VuZXJhdGUoJ2NoYXRfZ2V0Q2FuYWxNZXNzYWdlJykpKS5kYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlR3JvdXBDYW5hbChub20sIHVzZXJzX2lkKVxyXG57XHJcbiAgICBjb25zdCBib2R5UmVxdWVzdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICAgIGJvZHlSZXF1ZXN0LmFwcGVuZCgnbm9tJywgbm9tKTtcclxuICAgIHVzZXJzX2lkLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcclxuICAgICAgICBib2R5UmVxdWVzdC5hcHBlbmQoJ3VzZXJzW10nLCBpZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKGF3YWl0IGF4aW9zLnBvc3QoUm91dGluZy5nZW5lcmF0ZSgnY2hhdF9jcmVhdGVHcm91cENhbmFsJyksIGJvZHlSZXF1ZXN0KSkuZGF0YVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VlQ2FuYWwoY2FuYWxfaWQpXHJcbntcclxuICAgIHJldHVybiAoYXdhaXQgYXhpb3MuZ2V0KFJvdXRpbmcuZ2VuZXJhdGUoJ2NoYXRfdnVNZXNzYWdlJywge2lkOmNhbmFsX2lkfSkpKS5kYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbm90aWZ5VXNlclR5cGluZyhjYW5hbF9pZClcclxue1xyXG4gICAgcmV0dXJuIChhd2FpdCBheGlvcy5nZXQoUm91dGluZy5nZW5lcmF0ZSgnY2hhdF9ub3RpZnlVc2VyVHlwaW5nJywge2lkOmNhbmFsX2lkfSkpKS5kYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbm90aWZ5VXNlclN0b3BUeXBpbmcoY2FuYWxfaWQpXHJcbntcclxuICAgIHJldHVybiAoYXdhaXQgYXhpb3MuZ2V0KFJvdXRpbmcuZ2VuZXJhdGUoJ2NoYXRfbm90aWZ5VXNlclN0b3BUeXBpbmcnLCB7aWQ6Y2FuYWxfaWR9KSkpLmRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGF0X2dyb3VwQ2FuYWxfcmVtb3ZlVXNlcihjYW5hbF9pZClcclxue1xyXG4gICAgcmV0dXJuIChhd2FpdCBheGlvcy5kZWxldGUoUm91dGluZy5nZW5lcmF0ZSgnY2hhdF9ncm91cENhbmFsX3JlbW92ZVVzZXInLCB7aWQ6Y2FuYWxfaWQsIGluY2x1ZGVNZTp0cnVlfSkpKS5kYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hhdF9ncm91cENhbmFsX2FkZFVzZXIoY2FuYWxfaWQsIHVzZXJzX2lkKSB7XHJcbiAgICBjb25zdCBib2R5UmVxdWVzdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICAgIHVzZXJzX2lkLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcclxuICAgICAgICBib2R5UmVxdWVzdC5hcHBlbmQoJ3VzZXJzW10nLCBpZCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoYXdhaXQgYXhpb3MucG9zdChSb3V0aW5nLmdlbmVyYXRlKCdjaGF0X2dyb3VwQ2FuYWxfYWRkVXNlcicsIHtpZDpjYW5hbF9pZH0pLCBib2R5UmVxdWVzdCkpLmRhdGFcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwbG9hZEZpbGUoZmlsZVVwbG9hZCkge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZVVwbG9hZC5maWxlc1swXSk7XHJcbiAgICBjb25zdCByZXNwb25zZSAgPSAoYXdhaXQgYXhpb3MucG9zdChSb3V0aW5nLmdlbmVyYXRlKCdjaGF0X2ltcG9ydEZpbGUnKSwgZm9ybURhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcclxuICAgICAgICB9XHJcbiAgICB9KSkuZGF0YTtcclxuICAgIGlmKCFyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5maWxlVXJsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCB7Q29udmVyc2F0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnZlcnNhdGlvbkNvbXBvbmVudFwiO1xyXG5pbXBvcnQge3Nob3dNZXNzYWdlSW5zdGFuY2UsIHVwZGF0ZU1lbnV9IGZyb20gXCIuL2hlbHBlcnMvY2hhdF9oZWxwZXJzXCJcclxuaW1wb3J0IHtzZWVDYW5hbH0gZnJvbSBcIi4vY2hhdFNlbmRlclJlcXVlc3RcIjtcclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjb252ZXJzYXRpb25Db21wb25lbnQgPSBuZXcgQ29udmVyc2F0aW9uQ29tcG9uZW50KCk7XHJcbiAgICAvLyBsb3JzcXUnb24gY2hvaXNpIHVuIGNhbmFsXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsICcuY2hhdC1jaG9vc2UtY2FuYWwnLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgY2FuYWwgPSBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudCgkKHRoaXMpLmF0dHIoJ2RhdGEtY2FuYWwnKSkpO1xyXG4gICAgICAgIGlmKCQoJy5jaGF0LWNhbmFsLWluc3RhbmNlW2RhdGEtaWQ9XCInK2NhbmFsLmlkKydcIl0nKS5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICBzaG93TWVzc2FnZUluc3RhbmNlKGNhbmFsKS50aGVuKGZ1bmN0aW9uKCl7fSk7XHJcbiAgICAgICAgICAgIC8vIG9uIGVudm9pZSB1biB2dSBzZXVsZW1lbnQgc2kgbGUgY2FuYWwgZW4gcXVlc3RpbiBuJ2VzdCBwYXMgZW5jb3JlIHZ1XHJcbiAgICAgICAgICAgIGlmKCQoJ1tkYXRhLWNhbmFsLW1lbnUtaWQ9XCInK2NhbmFsLmlkKydcIl0nKS5maW5kKCcuY2hhdC1ub3Qtc2VlbicpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHNlZUNhbmFsKGNhbmFsLmlkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgdXBkYXRlTWVudShjYW5hbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCAnLmNoYXQtY2FuYWwtaW5zdGFuY2UnLGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5maW5kKCcuaGlnaGxpZ2h0LWNhbmFsJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb252ZXJzYXRpb25Db21wb25lbnQucmVtb3ZlSGlnaGxpZ2h0KHRoaXMpO1xyXG4gICAgICAgICAgICBhd2FpdCBzZWVDYW5hbCgkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtID0gJCgnLmxpc3QtZ3JvdXAtaXRlbScpXHJcbiAgICAgICAgICAgIG1lbnVJdGVtLnJlbW92ZUNsYXNzKCdiZy1ncmV5LTEnKVxyXG4gICAgICAgICAgICBtZW51SXRlbS5maW5kKCcuY2hhdC1ub3Qtc2VlbicpLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pOyIsImltcG9ydCB7Z2V0R3JvdXBlQ2FuYWwsIGdldFNpbmdsZUNhbmFsfSBmcm9tIFwiLi9jaGF0U2VuZGVyUmVxdWVzdFwiO1xyXG5pbXBvcnQge2xvYWRlck9mZiwgbG9hZGVyT259IGZyb20gXCIuLi9oZWxwZXJzL0xvYWRlclwiO1xyXG5pbXBvcnQge01lbnVDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9NZW51Q29tcG9uZW50J1xyXG5pbXBvcnQge01vZGFsfSBmcm9tICdib290c3RyYXAnXHJcbmltcG9ydCB7Q2FuYWxHcm91cHNDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvQ2FuYWxHcm91cHNDb21wb25lbnRcIjtcclxuXHJcbiQoIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zdCBjaGF0U2luZ2xlQ2FuYWwgPSAkKCcuY2hhdC1zaW5nbGUtY2FuYWwnKTtcclxuICAgICAgY29uc3QgY2hhdEdyb3VwQ2FuYWwgPSAkKCcuY2hhdC1ncm91cGUtY2FuYWwnKTtcclxuICAgICAgY29uc3QgbWVudUNvbXBvbmVudCA9IG5ldyBNZW51Q29tcG9uZW50KCk7XHJcbiAgICAgIC8vIGNoYXJnZXIgbGVzIGNhbmFsc1xyXG4gICAgICBsb2FkZXJPbihjaGF0U2luZ2xlQ2FuYWxbMF0sIHRydWUpO1xyXG4gICAgICBnZXRTaW5nbGVDYW5hbCgpLnRoZW4oZnVuY3Rpb24oc2luZ2xlQ2FuYWxzKSB7XHJcbiAgICAgICAgICAgIGNoYXRTaW5nbGVDYW5hbC5odG1sKG1lbnVDb21wb25lbnQuZ2V0U2luZ2xlQ2FuYWwoc2luZ2xlQ2FuYWxzKSk7XHJcbiAgICAgICAgICAgIGxvYWRlck9mZihjaGF0U2luZ2xlQ2FuYWxbMF0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIGNoYXJnZXIgbGVzIGdyb3VwZXMgY2FuYWxzXHJcbiAgICAgIGxvYWRlck9uKGNoYXRHcm91cENhbmFsWzBdLCB0cnVlKTtcclxuICAgICAgZ2V0R3JvdXBlQ2FuYWwoKS50aGVuKGZ1bmN0aW9uKGdyb3VwZUNhbmFscykge1xyXG4gICAgICAgICAgICBjaGF0R3JvdXBDYW5hbC5odG1sKG1lbnVDb21wb25lbnQuZ2V0R3JvdXBzQ2FuYWwoZ3JvdXBlQ2FuYWxzKSlcclxuICAgICAgICAgICAgbG9hZGVyT2ZmKGNoYXRHcm91cENhbmFsWzBdKTtcclxuICAgICAgfSlcclxuXHJcbiAgICAgICQodGhpcykub24oJ2lucHV0JywnLmNoYXQtbWVudS1zZWFyY2gnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VhcmNoX3ZhbHVlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAgICAgY29uc3QgbGlzdENhbmFsID0gJCgnLmNoYXQtY2hvb3NlLWNhbmFsJylcclxuICAgICAgICAgICAgaWYoc2VhcmNoX3ZhbHVlLmxlbmd0aD4wKSB7XHJcbiAgICAgICAgICAgICAgICAgIGxpc3RDYW5hbC5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2Qtbm9uZScpXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIGxpc3RDYW5hbC5maWx0ZXIoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YV9zZWFyY2ggPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc2VhcmNoJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gZGF0YV9zZWFyY2gudG9Mb3dlckNhc2UoKS5tYXRjaChzZWFyY2hfdmFsdWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2gubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgIH0pLnJlbW92ZUNsYXNzKCdkLW5vbmUnKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBsaXN0Q2FuYWwuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICB9KVxyXG4gICAgICAkKHRoaXMpLm9uKCdjbGljaycsJy5jaGF0LWFkZC11c2VycycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBjYW5hbEdyb3VwQ29tcG9uZW50ID0gbmV3IENhbmFsR3JvdXBzQ29tcG9uZW50KCk7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoY2FuYWxHcm91cENvbXBvbmVudC5nZXRNb2RhbEFkZFVzZXIoJCh0aGlzKS5hdHRyKCdkYXRhLWNhbmFsLWlkJykpKTtcclxuICAgICAgICAgICAgY29uc3QgbW9kYWxBZGRVc2VyID0gbmV3IE1vZGFsKCQoJyNjaGF0TW9kYWxBZGRVc2VycycpKTtcclxuICAgICAgICAgICAgbW9kYWxBZGRVc2VyLnNob3coKVxyXG4gICAgICB9KVxyXG5cclxufSk7XHJcblxyXG5cclxuIiwiaW1wb3J0IHtsb2FkZXJPZmYsIGxvYWRlck9ufSBmcm9tIFwiLi4vaGVscGVycy9Mb2FkZXJcIjtcclxuaW1wb3J0IHtmaW5kRGVzdGluYXRhaXJlLCBnZXRNZXNzYWdlQnlDb2RlfSBmcm9tIFwiLi9jaGF0U2VuZGVyUmVxdWVzdFwiO1xyXG5pbXBvcnQge05ld0NvbnZlcnNhdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9OZXdDb252ZXJzYXRpb25Db21wb25lbnRcIjtcclxuaW1wb3J0IHtzaG93TWVzc2FnZUluc3RhbmNlfSBmcm9tIFwiLi9oZWxwZXJzL2NoYXRfaGVscGVyc1wiO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IG5ld0NvbnZlcnNhdGlvbkNvbXBvbmVudCA9IG5ldyBOZXdDb252ZXJzYXRpb25Db21wb25lbnQoKTtcclxuICAgIC8vIG5vdXZlYXUgbWVzc2FnZVxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCAnLmNoYXQtYnRuLW5ld09uZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2hvd01lc3NhZ2VJbnN0YW5jZSgpLnRoZW4ociA9PiB7fSlcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJlY2hlcmNoZSBkJ3VuIHV0aWxpc2F0ZXVyIHN1ciBsYSBzZWN0aW9uIG5vdXZlYXUgbWVzc2FnZVxyXG4gICAgJCh0aGlzKS5vbignaW5wdXQnLCcjc2VhcmNoLXVzZXInLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGJvZHlNZXNzYWdlID0gJCgnLmNoYXQtZmxvYXQtbmV3T25lPi5jYXJkLWJvZHknKVxyXG4gICAgICAgIGxvYWRlck9uKGJvZHlNZXNzYWdlWzBdKTtcclxuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IGZpbmREZXN0aW5hdGFpcmUoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBuZXdDb252ZXJzYXRpb25Db21wb25lbnQuZ2V0TGlzdFVzZXIodXNlcnMpO1xyXG4gICAgICAgIGJvZHlNZXNzYWdlLmh0bWwodGVtcGxhdGUpO1xyXG4gICAgICAgIGxvYWRlck9mZihib2R5TWVzc2FnZVswXSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjaG9peCBkJ3VuIHV0aWxpc2F0ZXVyIHBvdXIgb3V2cmlyIHVuZSBjb25uZXhpb25cclxuICAgICQodGhpcykub24oJ2NsaWNrJywgJy5jaGF0LWNob29zZS11c2VyJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBib2R5TWVzc2FnZSA9ICQoJy5jaGF0LWZsb2F0LW5ld09uZT4uY2FyZC1ib2R5JylcclxuICAgICAgICBjb25zdCBzdWJIZWFkZXIgPSAkKCcuY2hhdC1mbG9hdC1uZXdPbmU+LmNhcmQtc3ViLWhlYWRlcicpXHJcbiAgICAgICAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KCQodGhpcykuYXR0cignZGF0YS11c2VyJykpKVxyXG4gICAgICAgIGJvZHlNZXNzYWdlLmh0bWwoJycpO1xyXG4gICAgICAgIHN1YkhlYWRlci5odG1sKG5ld0NvbnZlcnNhdGlvbkNvbXBvbmVudC5nZXRIZWFkZXIodXNlcikpXHJcbiAgICAgICAgbG9hZGVyT24oYm9keU1lc3NhZ2VbMF0pO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gYXdhaXQgZ2V0TWVzc2FnZUJ5Q29kZSh1c2VyLmNoYXRDb2RlKTtcclxuICAgICAgICAvLyBjaGFyZ2VyIGxlcyBtZXNzYWdlc1xyXG4gICAgICAgIGJvZHlNZXNzYWdlLmh0bWwobmV3Q29udmVyc2F0aW9uQ29tcG9uZW50LmdldE1lc3NhZ2VzKG1lc3NhZ2VzKSk7XHJcblxyXG4gICAgICAgICQoJy5jaGF0LWJ0bi1zZW5kJykuYXR0cignZGF0YS1jb2RlJywgdXNlci5jaGF0Q29kZSk7XHJcbiAgICAgICAgbG9hZGVyT2ZmKGJvZHlNZXNzYWdlWzBdKVxyXG4gICAgfSlcclxuXHJcbn0pOyIsImV4cG9ydCBjbGFzcyBDYW5hbEdyb3Vwc0NvbXBvbmVudCB7XHJcbiAgICB1c2Vycz1bXTtcclxuICAgIGdldE1vZGFsQWRkVXNlcihjYW5hbF9pZClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gJzwhLS0gTW9kYWwgLS0+XFxuJyArXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZSB0ZXh0LXN0YXJ0IGNoYXQtbW9kYWwtYWRkVXNlcnMgY2hhdC1tb2RhbC1jb250YWluZXJcIiBpZD1cImNoYXRNb2RhbEFkZFVzZXJzXCIgZGF0YS1jYW5hbC1pZD1cIicrY2FuYWxfaWQrJ1wiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5Bam91dGVyIGRlcyBtZW1icmVzIGRhbnMgbGUgZ3JvdXBlPC9oNT5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1jbG9zZVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+PC9idXR0b24+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxuJytcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzIGFsZXJ0LWVtcHR5LW5hbWUgZC1ub25lXCIgcm9sZT1cImFsZXJ0XCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIEVucmVnaXN0cmVtZW50IGVmZmVjdHXDqVxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDwvZGl2PicrXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXRfdXNlckJhZGdlTGlzdCBtYi0yXCI+XFxuJyArXHJcbiAgICAgICAgICAgICdcXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8ZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZXhhbXBsZUZvcm1Db250cm9sSW5wdXQxXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+QWpvdXRlciBkZXMgbWVtYnJlczwvbGFiZWw+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGNoYXRTZWFyY2hVc2VyXCIgaWQ9XCJjaGF0U2VhcmNoVXNlclwiIHBsYWNlaG9sZGVyPVwiUmVjaGVyY2hlciB1biB1dGlsaXNhdGV1clwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGF0X3VzZXJzTGlzdCBtdC0yXCI+XFxuJyArXHJcbiAgICAgICAgICAgICdcXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCI+RmVybWVyPC9idXR0b24+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBpZD1cImNoYXQtYnRuLWFkZFVzZXJzXCI+RW5yZWdpc3RyZXI8L2J1dHRvbj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJzwvZGl2PidcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaXN0VXNlcih1c2VycyA9IFtdKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9ICcnO1xyXG4gICAgICAgIGlmKHVzZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHVzZXJzLmZvckVhY2goZnVuY3Rpb24odXNlcikge1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gdGhhdC5nZXRMaXN0VXNlckl0ZW0odXNlcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEVtcHR5TGlzdFVzZXJNZXNzYWdlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJzx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaCBcIj5cXG4nICtcclxuICAgICAgICAgICAgdGVtcGxhdGUgK1xyXG4gICAgICAgICAgICAnPC91bD4nO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpc3RVc2VySXRlbSh1c2VyKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHVzZXJTdHJpbmdpZmllZCA9IGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudD1cclxuICAgICAgICAgICAgJzxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBjaGF0LXNlbGVjdC11c2VyICBwYi0wIHBzLTNcIiBpZD1cImNoYXQtdXNlci0nK3VzZXIuaWQrJ1wiIGRhdGEtdXNlcj1cIicrdXNlclN0cmluZ2lmaWVkKydcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vbWRvLnBuZ1wiIGFsdD1cImh1Z2VuZXJkXCIgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZVwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTAgcHMtMlwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICA8c3Bhbj4nK3VzZXIubm9tKycgJysgdXNlci5wcmVub20rJzwvc3Bhbj48YnI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1tdXRlZCBmcy0xMiBsaW5lLWhlaWdodC0xMyBwYi0zIG1iLTAgYm9yZGVyLWJvdHRvbVwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAnK3VzZXIuZW1haWwrXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgIDwvcD5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgPC9kaXY+XFxuJ1xyXG4gICAgICAgICc8L2xpPic7XHJcblxyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RW1wdHlMaXN0VXNlck1lc3NhZ2UoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWV5ZS1kcm9wcGVyLWVtcHR5XCI+PC9pPiBBdWN1biByw6lzdWx0YXQgJ1xyXG4gICAgICAgICc8L2Rpdj4nO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1c2VyQmFkZ2UodXNlcilcclxuICAge1xyXG4gICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImJhZGdlIGJnLXByaW1hcnkgbWUtMiBjaGF0LWJhZGdlVXNlclwiIGRhdGEtdXNlci1pZD1cIicrdXNlci5pZCsnXCIgaWQ9XCJjaGF0LWJhZGdlVXNlci0nK3VzZXIuaWQrJ1wiPicrdXNlci5ub20rJyAnK3VzZXIucHJlbm9tKycgJyArXHJcbiAgICAgICAgICAgJzxhIGhyZWY9XCIjXCIgb25jbGljaz1cIiQodGhpcykucGFyZW50KCkucmVtb3ZlKClcIiBjbGFzcz1cIm1zLTIgdGV4dC13aGl0ZSBiZy1kYW5nZXIgcHgtMSByb3VuZGVkIGNoYXQtZGVsZXRlLWJhZGdlVXNlclwiPjxpIGNsYXNzPVwiZmEgZmEtY2xvc2VcIj48L2k+PC9hPicgK1xyXG4gICAgICAgICAgICc8L3NwYW4+J1xyXG4gICB9XHJcblxyXG4gICBjbGVhclVzZXJCYWRnZSgpXHJcbiAgIHtcclxuICAgICAgICQoJy5jaGF0LWJhZGdlVXNlcicpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgfSk7XHJcbiAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBDb252ZXJzYXRpb25CYXNlQ29tcG9uZW50IHtcclxuICAgIGdldEVtcHR5TWVzc2FnZXMoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG10LTQgY2hhdC1lbXB0eS1tZXNzYWdlXCI+JyArXHJcbiAgICAgICAgICAgICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWV5ZS1kcm9wcGVyLWVtcHR5XCI+PC9pPiBBdWN1biBtZXNzYWdlIGRpc3BvbmlibGU8YnI+JyArXHJcbiAgICAgICAgICAgICc8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+RW52b3llciB1biBtZXNzYWdlIHBvdXIgZMOpbWFycmVyIGxhIGRpc2N1c3Npb248L3NtYWxsPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWVzc2FnZXMobWVzc2FnZXMpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gJyc7XHJcbiAgICAgICAgaWYobWVzc2FnZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpc1xyXG4gICAgICAgICAgICBtZXNzYWdlcy5mb3JFYWNoKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IHRoYXQuZ2V0TWVzc2FnZShtZXNzYWdlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlICs9IHRoaXMuZ2V0RW1wdHlNZXNzYWdlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJzx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaCBjaGF0LWxpc3QtZ3JvdXAtbWVzc2FnZXNcIj5cXG4nICtcclxuICAgICAgICAgICAgdGVtcGxhdGUrXHJcbiAgICAgICAgICAgICc8L3VsPidcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWVzc2FnZShtZXNzYWdlKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VySWQgPSBwYXJzZUludCgkKCcjY3VycmVudC11c2VyLWlkJykudGV4dCgpKTtcclxuICAgICAgICBsZXQgaW1ncyA9ICcnO1xyXG4gICAgICAgIGlmKG1lc3NhZ2UuZmlsZXMgIT1udWxsICYmIG1lc3NhZ2UuZmlsZXMubGVuZ3RoPjApIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5maWxlcy5mb3JFYWNoKGZ1bmN0aW9uKHVybCkge1xyXG4gICAgICAgICAgICAgICBpbWdzICs9ICc8ZGl2IGNsYXNzPVwicGItMiBwdC0yIG10LTJcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aW1nIHNyYz1cIicrdXJsKydcIiBhbHQ9XCJsZSBmaWNoaWVyIG5lIHBldXQgw6p0cmUgY2hhcmdlclwiIGNsYXNzPVwiY2hhdC1pbWFnZVwiIC8+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGF2YXRhciA9ICcvdXNlci9hdmF0YXIvJyttZXNzYWdlLnVzZXIuaWQ7XHJcbiAgICAgICAgbGV0IG9uZXJyb3IgPSAnb25lcnJvcj1cInRoaXMub25lcnJvcj1udWxsOyB0aGlzLnNyYz1cXCcvYXNzZXRzL3Z1ZXh5L2ltYWdlcy9wb3J0cmFpdC9zbWFsbC9hdmF0YXItcy0xMS5qcGdcXCdcIidcclxuICAgICAgICBpZihjdXJyZW50VXNlcklkICE9PSBtZXNzYWdlLnVzZXIuaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICc8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gIHBiLTIgcHMtMyBwZS01XCIgZGF0YS1pZC11c2VyPVwiJyttZXNzYWdlLnVzZXIuaWQrJ1wiPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTIgZC1mbGV4XCI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCInK2F2YXRhcisnXCIgJytvbmVycm9yKycgYWx0PVwiaHVnZW5lcmRcIiB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiBjbGFzcz1cInJvdW5kZWQtY2lyY2xlIG15LWF1dG9cIj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMCBwcy0yIHJvdW5kZWQtMyBiZy1saWdodC1ncmF5XCI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmdy1ib2xkIGxpbmUtaGVpZ2h0LTEzIGZzLTEzXCI+JyttZXNzYWdlLnVzZXIubm9tKycgJyttZXNzYWdlLnVzZXIucHJlbm9tKyc8L3NwYW4+PGJyPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC0wIGxpbmUtaGVpZ2h0LTEzIHRleHQtbXV0ZWQgZnMtMTEgYm9yZGVyLWJvdHRvbSBwYi0yXCI+RW52b3llciAnK21lc3NhZ2UucmVuZHVEYXRlQ3JlYXRpb25NZXNzYWdlKyc8L3NwYW4+XFxuJyArXHJcbiAgICAgICAgICAgICAgICBpbWdzK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiIGZzLTE0IGxpbmUtaGVpZ2h0LTE3IG10LTIgbWItMCBwdC0yIHBiLTIgXCI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLnRleHRlcysnXFxuJytcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICA8L3A+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgPC9saT5cXG4nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHBzLTUgIHBiLTIgdGV4dC1lbmQgXCIgZGF0YS1pZC11c2VyPVwiJyttZXNzYWdlLnVzZXIuaWQrJ1wiPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEwIHBzLTIgcm91bmRlZC0zIGJnLWxpZ2h0LXByaW1hcnlcIj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZ3LWJvbGQgbGluZS1oZWlnaHQtMTMgZnMtMTMgXCI+JyttZXNzYWdlLnVzZXIubm9tKycgJyttZXNzYWdlLnVzZXIucHJlbm9tKyc8L3NwYW4+PGJyPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC0wIGxpbmUtaGVpZ2h0LTEzIGZzLTExICAgIGJvcmRlci1ib3R0b20gYm9yZGVyLWNvbG9yLWxpZ2h0LXByaW1hcnkgcGItMlwiPkVudm95ZXIgJyttZXNzYWdlLnJlbmR1RGF0ZUNyZWF0aW9uTWVzc2FnZSsnPC9zcGFuPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgaW1ncytcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIiBmcy0xNCBsaW5lLWhlaWdodC0xNyBtYi0wIG10LTIgIHB0LTIgcGItMiBcIj5cXG4nICtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UudGV4dGVzKydcXG4nK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgIDwvcD5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yIGQtZmxleFwiPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJythdmF0YXIrJ1wiICcrb25lcnJvcisnIGFsdD1cImh1Z2VuZXJkXCIgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZSBteS1hdXRvXCI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgPC9saT5cXG4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldE1lc3NhZ2VGaWxlVGVtcGxhdGUobWVzc2FnZSlcclxuICAgIHtcclxuICAgICAgICBsZXQgZmlsZXNUZW1wbGF0ZVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZpbGVzVGVtcGxhdGVcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclZ1KGNvbnZlcnNhdGlvbkNvbnRhaW5lcilcclxuICAgIHtcclxuICAgICAgICAkKGNvbnZlcnNhdGlvbkNvbnRhaW5lcikuZmluZCgnLmNhbmFsLXZ1LWNvbnRhaW5lcicpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyRmlsZShjb252ZXJzYXRpb25Db250YWluZXIpIHtcclxuICAgICAgICAkKGNvbnZlcnNhdGlvbkNvbnRhaW5lcikuZmluZCgnLmNoYXQtZmlsZXMtcHJldmlldycpLmh0bWwoJycpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtCYXNlNjR9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2Jhc2U2NFwiO1xyXG5pbXBvcnQge0NvbnZlcnNhdGlvbkJhc2VDb21wb25lbnR9IGZyb20gXCIuL0NvbnZlcnNhdGlvbkJhc2VDb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb252ZXJzYXRpb25Db21wb25lbnQgZXh0ZW5kcyBDb252ZXJzYXRpb25CYXNlQ29tcG9uZW50IHtcclxuICAgIGdldENvbnZlcnNhdGlvbkNvbnRhaW5lcihjYW5hbCkge1xyXG4gICAgICAgIGxldCBpbnB1dENhY2hlVXNlciA9ICcnO1xyXG4gICAgICAgIGxldCBub21DYW5hbCA9ICcnO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRfdXNlcl9pZCA9IHBhcnNlSW50KCQoJyNjdXJyZW50LXVzZXItaWQnKS50ZXh0KCkpO1xyXG4gICAgICAgIGNhbmFsLm1lbWJyZXMuZm9yRWFjaChmdW5jdGlvbih1c2VyKXtcclxuICAgICAgICAgICAgaW5wdXRDYWNoZVVzZXIrPSc8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ1c2Vyc1tdXCIgdmFsdWU9XCInK0Jhc2U2NC5lbmNvZGUodXNlci5pZCkrJ1wiIC8+XFxuJztcclxuICAgICAgICAgICAgaWYoIWNhbmFsLmlzR3JvdXAgJiYgdXNlci5pZCAhPT0gY3VycmVudF91c2VyX2lkKSB7XHJcbiAgICAgICAgICAgICAgICBub21DYW5hbCA9IHVzZXIubm9tKycgJyt1c2VyLnByZW5vbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKGNhbmFsLmlzR3JvdXApIHtcclxuICAgICAgICAgICAgbm9tQ2FuYWwgPSBjYW5hbC5ub21cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGTDqWJ1dCBpbml0aWFsaXNhdGlvbiBkdSB2dSBsb3JzcXVlIGwnaW5zdGFuY2UgZXN0IGNoYXJnw6lcclxuICAgICAgICAvLyBzaSBsZSBjYW5hbCBlc3QgdW4gc2luZ2xlQ2FuYWxcclxuICAgICAgICBsZXQgdnVUZW1wbGF0ZSA9ICcnO1xyXG4gICAgICAgIGlmKCFjYW5hbC5pc0dyb3VwICYmIGNhbmFsLnZ1cy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgdnVUZW1wbGF0ZSA9IHRoaXMuZ2V0VnVUZW1wbGF0ZSgpWzBdLm91dGVySFRNTDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGlzR3JvdXAgPSBjYW5hbC5pc0dyb3VwID8gJ3RydWUnOiAnZmFsc2UnO1xyXG4gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cImNhcmQgc2hhZG93IGZzLTE0ICBjaGF0LWNhbmFsLWluc3RhbmNlIGNoYXQtYm94LWNvbnRhaW5lciBtYi0wIHNoYWRvdy1zbSAgXCIgZGF0YS1pc0dyb3VwPVwiJytpc0dyb3VwKydcIiBkYXRhLWlkPVwiJytjYW5hbC5pZCsnXCIgaWQ9XCJjYW5hbC0nK2NhbmFsLmlkKydcIiBzdHlsZT1cIndpZHRoOiAxOHJlbTtcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgYmctcHJpbmMgdGV4dC13aGl0ZSB3LTEwMCBweS0zXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOCBkLWZsZXhcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXktYXV0b1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8YiBjbGFzcz1cIm1zLTIgXCI+Jytub21DYW5hbCsnIDxpIGNsYXNzPVwiZmEtYnJhbmRzIGZhLWZhY2Vib29rLW1lc3NlbmdlclwiPjwvaT48L2I+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNCB0ZXh0LWVuZFwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlIGNoYXQtYnRuLW1pbmltaXNlIG1lLTJcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWFuZ2xlLWRvd25cIj48L2k+PC9hPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlIGNoYXQtYnRuLWNsb3NlXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jbG9zZVwiPjwvaT48L2E+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICdcXG4nICtcclxuICAgICAgICAgICAgJyAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHB4LTBcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPCEtLSB6b25lIGRlIG1lc3NhZ2VzIC0tPiBcXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICcrdnVUZW1wbGF0ZSsnXFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyIHAtMFwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhdC1maWxlcy1wcmV2aWV3XCI+PC9kaXY+JytcclxuICAgICAgICAgICAgJyAgICAgICAgPGRpdiBjbGFzcz1cInB5LTMgcHMtMlwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVzZXJzXCI+JyArXHJcbiAgICAgICAgICAgIGlucHV0Q2FjaGVVc2VyK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlciBzcGVlZC1saXZlVmlkZW8tY2FsbCBwZS0yXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS12aWRlb1wiPjwvaT48L2E+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgIDwvc3Bhbj4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC1zZWNvbmRhcnkgY2hhdC11cGxvYWRJbWFnZVwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtaW1hZ2VcIj48L2k+PC9hPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIGJnLXdoaXRlXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBib3JkZXItMCBib3JkZXItdG9wICBmcy0xMiByb3VuZGVkLTAgcHktMyBjaGF0LWlucHV0LXRleHRlc1wiIHBsYWNlaG9sZGVyPVwiRW50cmVyIHZvdHJlIG1lc3NhZ2UgLi4uXCIgYXJpYS1sYWJlbD1cIlJlY2lwaWVudFxcJ3MgdXNlcm5hbWUgd2l0aCB0d28gYnV0dG9uIGFkZG9uc1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgdGV4dC1wcmltYXJ5IGJvcmRlci0wIGJvcmRlci10b3AgY2hhdC1idG4tc2VuZFwiIGRhdGEtY29kZT1cIicrY2FuYWwuY29kZSsnXCIgdHlwZT1cImJ1dHRvblwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGFwZXItcGxhbmVcIj48L2k+PC9idXR0b24+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlSGlnaGxpZ2h0KCRjdXJyZW50T2JqZWN0KVxyXG4gICAge1xyXG4gICAgICAgICQoJGN1cnJlbnRPYmplY3QpLmZpbmQoJy5jYXJkLWhlYWRlcicpLnJlbW92ZUNsYXNzKCdoaWdobGlnaHQtY2FuYWwgIGJnLXN1Y2Nlc3MgdGV4dC13aGl0ZScpLmFkZENsYXNzKCdiZy1wcmluYycpXHJcbiAgICB9XHJcblxyXG4gICAgYWRkSGlnaGxpZ2goJGN1cnJlbnRPYmplY3QpXHJcbiAgICB7XHJcbiAgICAgICAgJCgkY3VycmVudE9iamVjdCkuZmluZCgnLmNhcmQtaGVhZGVyJykuYWRkQ2xhc3MoJ2hpZ2hsaWdodC1jYW5hbCBiZy1zdWNjZXNzIHRleHQtd2hpdGUnKS5yZW1vdmVDbGFzcygnYmctcHJpbmMnKVxyXG4gICAgfVxyXG5cclxuICAgIGdldFZ1VGVtcGxhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gJCgnPGRpdiAvPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6J2NhbmFsLXZ1LWNvbnRhaW5lciB0ZXh0LWVuZCBwZS0zJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHZ1VGVtcGxhdGUgPSAnPHNwYW4gY2xhc3M9XCJmcy0xMSB0ZXh0LW11dGVkXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1leWVcIj48L2k+IDxzcGFuPnZ1PC9zcGFuPjwvc3Bhbj4nXHJcbiAgICAgICAgdGVtcGxhdGUuaHRtbCh2dVRlbXBsYXRlKTtcclxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVnUoY29udmVyc2F0aW9uQ29udGFpbmVyKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHNpIHVuIHZ1IGV4aXN0ZSBkw6lqw6AgcGFzIGxhIHBlaW5lIGRlIGxlIHJlbmRyZSDDoCBub3V2ZWF1XHJcbiAgICAgICAgbGV0IGNhbmFsVnVDb250YWluZXIgPSAkKGNvbnZlcnNhdGlvbkNvbnRhaW5lcikuZmluZCgnLmNhbmFsLXZ1LWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGlmKGNhbmFsVnVDb250YWluZXIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICQoY29udmVyc2F0aW9uQ29udGFpbmVyKS5maW5kKCcuY2FyZC1ib2R5JykuYXBwZW5kKHRoaXMuZ2V0VnVUZW1wbGF0ZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhZGRVc2VyVHlwaW5nKGNvbnZlcnNhdGlvbkNvbnRhaW5lciwgdXNlcilcclxuICAgIHtcclxuICAgICAgICAvLyBzaSB1biB0ZW1wbGF0ZSBleGlzdGUgZMOpasOgIHBhcyBsYSBwZWluZSBkZSBsZSByZW5kcmUgw6Agbm91dmVhdVxyXG4gICAgICAgIGxldCBjYW5hbFVzZXJUeXBpbmcgPSAkKGNvbnZlcnNhdGlvbkNvbnRhaW5lcikuZmluZCgnLmNhbmFsLXVzZXJUeXBpbmcnKTtcclxuICAgICAgICBpZihjYW5hbFVzZXJUeXBpbmcubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlID0gJCgnPGRpdiAvPicsIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzOidjYW5hbC11c2VyVHlwaW5nIHB5LTIgcHgtMyAgdGV4dC1tdXRlZCBmcy0xMSB0ZXh0LWVuZCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZ1VGVtcGxhdGUgPSAnPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+Jyt1c2VyLnByZW5vbSsnICcrdXNlci5ub20rJzwvc3Bhbj4gZXN0IGVuIHRyYWluIGRcXCfDqWNyaXJlLi4uJztcclxuICAgICAgICAgICAgdGVtcGxhdGUuaHRtbCh2dVRlbXBsYXRlKTtcclxuICAgICAgICAgICAgJChjb252ZXJzYXRpb25Db250YWluZXIpLmZpbmQoJy5jYXJkLWJvZHknKS5hcHBlbmQodGVtcGxhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVVc2VyVHlwaW5nKGNvbnZlcnNhdGlvbkNvbnRhaW5lcikge1xyXG4gICAgICAgICQoY29udmVyc2F0aW9uQ29udGFpbmVyKS5maW5kKCcuY2FuYWwtdXNlclR5cGluZycpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IGxvZ29Hcm91cCBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzL3VzZXJzLmpwZ1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQge1xyXG5cclxuICAgIC8vIGRlYnV0IGxpc3RlIHVzZXIgY290w6kgbWVudSBmbG90dGFudFxyXG5cclxuICAgICBnZXRTaW5nbGVDYW5hbChjYW5hbHNNZXNzYWdlKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9ICcnO1xyXG4gICAgICAgIGlmKGNhbmFsc01lc3NhZ2UubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCB0aGlzT2JqID0gdGhpcztcclxuICAgICAgICAgICAgY2FuYWxzTWVzc2FnZS5mb3JFYWNoKGZ1bmN0aW9uKGNhbmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSB0aGlzT2JqLmdldFNpbmdsZUNhbmFsSXRlbShjYW5hbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEVtcHR5U2luZ2xlQ2FuYWxNZXNzYWdlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJzx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaCBcIj5cXG4nICtcclxuICAgICAgICAgICAgdGVtcGxhdGUgK1xyXG4gICAgICAgICAgICAnPC91bD4nO1xyXG4gICAgfVxyXG5cclxuICAgZ2V0U2luZ2xlQ2FuYWxJdGVtKGNhbmFsTWVzc2FnZSlcclxuICAgIHtcclxuICAgICAgICBjb25zdCBjYW5hbFN0cmluZ2lmeSA9IGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjYW5hbE1lc3NhZ2UpKTtcclxuICAgICAgICBjb25zdCBsYXN0TWVzc2FnZSA9IGNhbmFsTWVzc2FnZS5sYXN0TWVzc2FnZSA/IGNhbmFsTWVzc2FnZS5sYXN0TWVzc2FnZS50ZXh0ZXMuc2xpY2UoMCwgODApIDogJ0NvbW1lbmNlciB2b3RyZSBwcmVtacOocmUgY29udmVyc2F0aW9uLi4uJztcclxuICAgICAgICBjb25zdCBzZWVuQ2xhc3MgPSAhY2FuYWxNZXNzYWdlLmlzU2VlbiA/ICdiZy1ncmV5LTEnOicnO1xyXG4gICAgICAgIGNvbnN0IGV5ZVNsYXNoU2VjdGlvbiA9ICFjYW5hbE1lc3NhZ2UuaXNTZWVuID9cclxuICAgICAgICAgICAgJyA8ZGl2IGNsYXNzPVwiY29sLTIgdGV4dC1kYW5nZXIgY2hhdC1ub3Qtc2VlblwiPicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWV5ZS1zbGFzaFwiPjwvaT4nK1xyXG4gICAgICAgICAgICAnIDwvZGl2PicgOiAnJztcclxuICAgICAgICBjb25zdCBjdXJyZW50X3VzZXJfaWQgPSBwYXJzZUludCgkKCcjY3VycmVudC11c2VyLWlkJykudGV4dCgpKTtcclxuICAgICAgICBjb25zdCBtZW1icmVzID0gY2FuYWxNZXNzYWdlLm1lbWJyZXM7XHJcbiAgICAgICAgbGV0IGF2YXRhciA9ICcvdXNlci9hdmF0YXIvJztcclxuICAgICAgICBsZXQgbm9tQ2FuYWwgPSAnJztcclxuICAgICAgICBtZW1icmVzLmZvckVhY2goZnVuY3Rpb24odXNlcil7XHJcbiAgICAgICAgICAgaWYodXNlci5pZCAhPT0gY3VycmVudF91c2VyX2lkKSB7XHJcbiAgICAgICAgICAgICAgIGF2YXRhciArPSB1c2VyLmlkO1xyXG4gICAgICAgICAgICAgICBub21DYW5hbCA9ICh1c2VyLm5vbSA/PyAnJykrJyAnKyh1c2VyLnByZW5vbSA/PyAnJyk7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGxhc3RNZXNzYWdlQ2xhc3MgPSAhY2FuYWxNZXNzYWdlLmlzU2Vlbj8gJ2NvbC03JyA6ICdjb2wtOSc7XHJcbiAgICAgICAgbGV0IG9uZXJyb3IgPSAnb25lcnJvcj1cInRoaXMub25lcnJvcj1udWxsOyB0aGlzLnNyYz1cXCcvYXNzZXRzL3Z1ZXh5L2ltYWdlcy9wb3J0cmFpdC9zbWFsbC9hdmF0YXItcy0xMS5qcGdcXCdcIidcclxuICAgICAgICBsZXQgY29tcG9uZW50PVxyXG4gICAgICAgICAgICAnPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGNoYXQtY2hvb3NlLWNhbmFsICcrc2VlbkNsYXNzKycgcGItMCBwcy0zXCIgZGF0YS1jYW5hbC1tZW51LWlkPVwiJytjYW5hbE1lc3NhZ2UuaWQrJ1wiIGRhdGEtY2FuYWw9XCInK2NhbmFsU3RyaW5naWZ5KydcIiBkYXRhLXNlYXJjaD1cIicrY2FuYWxNZXNzYWdlLm5vbSsnXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgIDxpbWcgc3JjPVwiJythdmF0YXIrJ1wiICcrb25lcnJvcisnIGFsdD1cImh1Z2VuZXJkXCIgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZVwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgIDxkaXYgY2xhc3M9XCInK2xhc3RNZXNzYWdlQ2xhc3MrJyBwcy0yXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgIDxzcGFuPicrbm9tQ2FuYWwrJzwvc3Bhbj48YnI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1tdXRlZCBmcy0xMiBsaW5lLWhlaWdodC0xMyBwYi0zIG1iLTAgYm9yZGVyLWJvdHRvbVwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAnK2xhc3RNZXNzYWdlK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICA8L3A+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZXllU2xhc2hTZWN0aW9uK1xyXG4gICAgICAgICAgICAnICAgICA8L2Rpdj5cXG4nXHJcbiAgICAgICAgICAgICc8L2xpPic7XHJcblxyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RW1wdHlTaW5nbGVDYW5hbE1lc3NhZ2UoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtbXV0ZWRcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtZXllLWRyb3BwZXItZW1wdHlcIj48L2k+IEF1Y3VuZSBjb252ZXJzYXRpb24gZGlzcG9uaWJsZSAnXHJcbiAgICAgICAgJzwvZGl2Pic7XHJcbiAgICB9XHJcblxyXG4gICAvLyAgZGVidXQgbGlzdGUgZ3JvdXBlIGNhbmFsIGNvdMOpIG1lbnVcclxuICAgIGdldEdyb3Vwc0NhbmFsKGNhbmFsc01lc3NhZ2UpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gJyc7XHJcbiAgICAgICAgaWYoY2FuYWxzTWVzc2FnZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoaXNPYmogPSB0aGlzXHJcbiAgICAgICAgICAgIGNhbmFsc01lc3NhZ2UuZm9yRWFjaChmdW5jdGlvbihjYW5hbCkge1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gdGhpc09iai5nZXRHcm91cHNDYW5hbEl0ZW0oY2FuYWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRFbXB0eUdyb3Vwc0NhbmFsTWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICc8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2ggY2hhdC1saXN0LWdyb3VwQ2FuYWwgcHgtMFwiPlxcbicgK1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZSArXHJcbiAgICAgICAgICAgICc8L3VsPic7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R3JvdXBzQ2FuYWxJdGVtKGNhbmFsTWVzc2FnZSlcclxuICAgIHtcclxuICAgICAgICBsZXQgbGFzdE1lc3NhZ2UgPSBjYW5hbE1lc3NhZ2UubGFzdE1lc3NhZ2UgIT0gbnVsbCA/IGNhbmFsTWVzc2FnZS5sYXN0TWVzc2FnZS50ZXh0ZXMuc2xpY2UoMCwgODApIDogJ0Vudm95ZXIgdm90cmUgcHJlbWllciBtZXNzYWdlJztcclxuICAgICAgICBjb25zdCBjYW5hbFN0cmluZ2lmeSA9IGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjYW5hbE1lc3NhZ2UpKTtcclxuICAgICAgICByZXR1cm4gJzxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBjaGF0LWNob29zZS1jYW5hbCAgcGItMCBwcy0zXCIgZGF0YS1jYW5hbD1cIicgKyBjYW5hbFN0cmluZ2lmeSArICdcIiBkYXRhLXNlYXJjaD1cIicgKyBjYW5hbE1lc3NhZ2Uubm9tICsgJ1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICA8aW1nIHNyYz1cIicgKyBsb2dvR3JvdXAgKyAnXCIgYWx0PVwiaHVnZW5lcmRcIiB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIiBjbGFzcz1cInJvdW5kZWQtY2lyY2xlXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC05IHBzLTIgYm9yZGVyLWJvdHRvbVwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICA8c3Bhbj4nICsgY2FuYWxNZXNzYWdlLm5vbSArICc8L3NwYW4+PGJyPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWQgZnMtMTIgbGluZS1oZWlnaHQtMTMgcGItMyBtYi0wIFwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAnICsgbGFzdE1lc3NhZ2UgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICA8L3A+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZW5kIHBiLTMgY2hhdC1ncm91cGUtYWN0aW9uXCI+IFxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJjaGF0LWFkZC11c2VycyB0ZXh0LXN1Y2Nlc3NcIiBkYXRhLWNhbmFsLWlkPVwiJytjYW5hbE1lc3NhZ2UuaWQrJ1wiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtdXNlci1wbHVzXCI+PC9pPjwvYT5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiY2hhdC1yZW1vdmUtdXNlciB0ZXh0LWRhbmdlciBtcy0yXCIgZGF0YS1jYW5hbC1pZD1cIicrY2FuYWxNZXNzYWdlLmlkKydcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLXJpZ2h0LWZyb20tYnJhY2tldFwiPjwvaT48L2E+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgPC9kaXY+JytcclxuICAgICAgICAgICAgJyAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICc8L2xpPic7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RW1wdHlHcm91cHNDYW5hbE1lc3NhZ2UoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtbXV0ZWQgcHktNFwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1leWUtZHJvcHBlci1lbXB0eVwiPjwvaT4gQXVjdW4gZ3JvdXBlICAnXHJcbiAgICAgICAgJzwvZGl2Pic7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Jhc2U2NH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvYmFzZTY0XCI7XHJcbmltcG9ydCB7Q29udmVyc2F0aW9uQmFzZUNvbXBvbmVudH0gZnJvbSBcIi4vQ29udmVyc2F0aW9uQmFzZUNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld0NvbnZlcnNhdGlvbkNvbXBvbmVudCBleHRlbmRzIENvbnZlcnNhdGlvbkJhc2VDb21wb25lbnR7XHJcbiAgICBnZXRIZWFkZXIodXNlcilcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJtdC0zIG1zLTJcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICA8c3BhbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZnctYm9sZCBidG4tc20gcG9zaXRpb24tcmVsYXRpdmVcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICcrdXNlci5ub20rJyAnK3VzZXIucHJlbm9tKydcXG4nICtcclxuICAgICAgICAgICAgJyAgICA8c3BhbiBjbGFzcz1cInBvc2l0aW9uLWFic29sdXRlIHRvcC0wIHN0YXJ0LTEwMCB0cmFuc2xhdGUtbWlkZGxlIHAtMiBiZy1kYW5nZXIgYm9yZGVyIGJvcmRlci1saWdodCByb3VuZGVkLWNpcmNsZVwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+TmV3IGFsZXJ0czwvc3Bhbj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICA8L3NwYW4+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPC9zcGFuPlxcbicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nXHJcbiAgICB9XHJcbiAgICBnZXRDb252ZXJzYXRpb25Db250YWluZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwiY2FyZCBzaGFkb3cgZnMtMTQgIGNoYXQtZmxvYXQtbmV3T25lIGNoYXQtYm94LWNvbnRhaW5lciBtYi0wIHNoYWRvdy1zbVwiIHN0eWxlPVwid2lkdGg6IDE4cmVtO1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBiZy1wcmluYyB3LTEwMCBweS0zXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOCBkLWZsZXhcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXktYXV0b1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8YiBjbGFzcz1cIm1zLTIgXCI+Tm91dmVhdSBNZXNzYWdlIDxpIGNsYXNzPVwiZmEtYnJhbmRzIGZhLWZhY2Vib29rLW1lc3NlbmdlclwiPjwvaT48L2I+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNCB0ZXh0LWVuZFwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlIGNoYXQtYnRuLW1pbmltaXNlIG1lLTJcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWFuZ2xlLWRvd25cIj48L2k+PC9hPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlIGNoYXQtYnRuLWNsb3NlXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jbG9zZVwiPjwvaT48L2E+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICdcXG4nICtcclxuICAgICAgICAgICAgJyAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwiY2FyZC1zdWItaGVhZGVyXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgIHJvdW5kZWQtMCBib3JkZXItMCBib3JkZXItYm90dG9tIHB5LTMgZnMtMTJcIiBpZD1cInNlYXJjaC11c2VyXCIgcGxhY2Vob2xkZXI9XCJFbnRyZXIgbGUgbm9tL2UtbWFpbCBkdSBkZXN0aW5hdGFpcmVcIiBhcmlhLWxhYmVsPVwiUmVjaXBpZW50XFwncyB1c2VybmFtZSB3aXRoIHR3byBidXR0b24gYWRkb25zXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgcHgtMFwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8IS0tIHpvbmUgZGUgbWVzc2FnZXMgLS0+IFxcbicgK1xyXG4gICAgICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyIHAtMFwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8ZGl2IGNsYXNzPVwicHktMyBwcy0yXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8IS0tIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlciBwZS0yXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS12aWRlb1wiPjwvaT48L2E+IC0tPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPCEtLSA8YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC1zZWNvbmRhcnlcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWltYWdlXCI+PC9pPjwvYT4gLS0+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgYmctd2hpdGVcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGJvcmRlci0wIGJvcmRlci10b3AgIGZzLTEyIHJvdW5kZWQtMCBweS0zIGNoYXQtaW5wdXQtdGV4dGVzXCIgcGxhY2Vob2xkZXI9XCJFbnRyZXIgdm90cmUgbWVzc2FnZSAuLi5cIiBhcmlhLWxhYmVsPVwiUmVjaXBpZW50XFwncyB1c2VybmFtZSB3aXRoIHR3byBidXR0b24gYWRkb25zXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSB0ZXh0LXByaW1hcnkgYm9yZGVyLTAgYm9yZGVyLXRvcCBjaGF0LWJ0bi1zZW5kXCIgdHlwZT1cImJ1dHRvblwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGFwZXItcGxhbmVcIj48L2k+PC9idXR0b24+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGlzdFVzZXIodXNlcnMgPSBbXSlcclxuICAgIHtcclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSAnJztcclxuICAgICAgICBpZih1c2Vycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICB1c2Vycy5mb3JFYWNoKGZ1bmN0aW9uKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IHRoYXQuZ2V0TGlzdFVzZXJJdGVtKHVzZXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRFbXB0eUxpc3RVc2VyTWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICc8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2ggXCI+XFxuJyArXHJcbiAgICAgICAgICAgIHRlbXBsYXRlICtcclxuICAgICAgICAgICAgJzwvdWw+JztcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaXN0VXNlckl0ZW0odXNlcilcclxuICAgIHtcclxuICAgICAgICBjb25zdCB1c2VyU3RyaW5naWZpZWQgPSBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgICAgIGxldCBjb21wb25lbnQ9XHJcbiAgICAgICAgICAgICc8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gY2hhdC1jaG9vc2UtdXNlciAgcGItMCBwcy0zXCIgaWQ9XCJjaGF0LXVzZXItJyt1c2VyLmlkKydcIiBkYXRhLXVzZXI9XCInK3VzZXJTdHJpbmdpZmllZCsnXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL21kby5wbmdcIiBhbHQ9XCJodWdlbmVyZFwiIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIGNsYXNzPVwicm91bmRlZC1jaXJjbGVcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTkgcHMtMlwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICA8c3Bhbj4nK3VzZXIubm9tKycgJysgdXNlci5wcmVub20rJzwvc3Bhbj48YnI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1tdXRlZCBmcy0xMiBsaW5lLWhlaWdodC0xMyBwYi0zIG1iLTAgYm9yZGVyLWJvdHRvbVwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAnK3VzZXIuZW1haWwrXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgIDwvcD5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgPC9kaXY+XFxuJ1xyXG4gICAgICAgICc8L2xpPic7XHJcblxyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RW1wdHlMaXN0VXNlck1lc3NhZ2UoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWV5ZS1kcm9wcGVyLWVtcHR5XCI+PC9pPiBBdWN1biByw6lzdWx0YXQgJ1xyXG4gICAgICAgICc8L2Rpdj4nO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7Q29udmVyc2F0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db252ZXJzYXRpb25Db21wb25lbnRcIjtcclxuaW1wb3J0IHtsb2FkZXJPZmYsIGxvYWRlck9ufSBmcm9tIFwiLi4vLi4vaGVscGVycy9Mb2FkZXJcIjtcclxuaW1wb3J0IHtnZXRHcm91cGVDYW5hbCwgZ2V0TWVzc2FnZUJ5Q29kZSwgZ2V0U2luZ2xlQ2FuYWx9IGZyb20gXCIuLi9jaGF0U2VuZGVyUmVxdWVzdFwiO1xyXG5pbXBvcnQge01lbnVDb21wb25lbnR9IGZyb20gXCIuLi9jb21wb25lbnRzL01lbnVDb21wb25lbnRcIjtcclxuaW1wb3J0IHtOZXdDb252ZXJzYXRpb25Db21wb25lbnR9IGZyb20gXCIuLi9jb21wb25lbnRzL05ld0NvbnZlcnNhdGlvbkNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNob3dNZXNzYWdlSW5zdGFuY2UoY2FuYWw9bnVsbClcclxue1xyXG4gICAgY29uc3QgY29udmVyc2F0aW9uQ29tcG9uZW50ID0gY2FuYWwgIT1udWxsID8gbmV3IENvbnZlcnNhdGlvbkNvbXBvbmVudCgpIDogbmV3IE5ld0NvbnZlcnNhdGlvbkNvbXBvbmVudCgpO1xyXG4gICAgY29uc3QgY2hhdEJveENvbnRhaW5lciA9ICQoJy5jaGF0LWJveC1jb250YWluZXInKTtcclxuICAgIGlmKGNoYXRCb3hDb250YWluZXIubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgY2hhdEJveENvbnRhaW5lci5maXJzdCgpLnJlbW92ZSgpXHJcbiAgICB9XHJcbiAgICBsZXQgbWVzc2FnZUNvbnZlcnNhdGlvbkNvbnRhaW5lciA9ICQoJy5jaGF0LWNvbnZlcnNhdGlvbnMtY29udGFpbmVyJylcclxuICAgIGlmKG1lc3NhZ2VDb252ZXJzYXRpb25Db250YWluZXIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgIG1lc3NhZ2VDb252ZXJzYXRpb25Db250YWluZXIgPSAkKCc8ZGl2IC8+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogJ2NoYXQtY29udmVyc2F0aW9ucy1jb250YWluZXIgZC1mbGV4J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICAkKCdib2R5JykuYXBwZW5kKG1lc3NhZ2VDb252ZXJzYXRpb25Db250YWluZXIpXHJcbiAgICB9XHJcblxyXG4gICAgJChtZXNzYWdlQ29udmVyc2F0aW9uQ29udGFpbmVyKS5hcHBlbmQoY29udmVyc2F0aW9uQ29tcG9uZW50LmdldENvbnZlcnNhdGlvbkNvbnRhaW5lcihjYW5hbCkpO1xyXG4gICAgaWYoY2FuYWwgIT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IGNoYXRfaW5zdGFuY2UgPSAkKCcjY2FuYWwtJytjYW5hbC5pZCk7XHJcbiAgICAgICAgY29uc3QgY2hhdF9pbnN0YW5jZV9ib2R5ID0gJChjaGF0X2luc3RhbmNlKS5maW5kKCcuY2FyZC1ib2R5Jyk7XHJcbiAgICAgICAgbG9hZGVyT24oY2hhdF9pbnN0YW5jZV9ib2R5WzBdKTtcclxuICAgICAgICBjb25zdCBtZXNzYWdlcyA9IGF3YWl0IGdldE1lc3NhZ2VCeUNvZGUoY2FuYWwuY29kZSk7XHJcbiAgICAgICAgLy8gY2hhcmdlciBsZXMgbWVzc2FnZXNcclxuICAgICAgICBjaGF0X2luc3RhbmNlX2JvZHkucHJlcGVuZChjb252ZXJzYXRpb25Db21wb25lbnQuZ2V0TWVzc2FnZXMobWVzc2FnZXMpKTtcclxuICAgICAgICBjaGF0X2luc3RhbmNlX2JvZHlbMF0uc2Nyb2xsVG9wID0gY2hhdF9pbnN0YW5jZV9ib2R5WzBdLnNjcm9sbEhlaWdodDtcclxuICAgICAgICBsb2FkZXJPZmYoY2hhdF9pbnN0YW5jZV9ib2R5WzBdKTtcclxuICAgICAgICByZXR1cm4gY2hhdF9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lbnUoY2FuYWwpXHJcbntcclxuICAgIGNvbnN0IG1lbnVDb21wb25lbnQgPSBuZXcgTWVudUNvbXBvbmVudCgpO1xyXG4gICAgaWYoY2FuYWwuaXNHcm91cCkge1xyXG4gICAgICAgIGdldEdyb3VwZUNhbmFsKCkudGhlbihmdW5jdGlvbihncm91cGVDYW5hbHMpIHtcclxuICAgICAgICAgICAgJCgnLmNoYXQtZ3JvdXBlLWNhbmFsJykuaHRtbChtZW51Q29tcG9uZW50LmdldEdyb3Vwc0NhbmFsKGdyb3VwZUNhbmFscykpXHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZ2V0U2luZ2xlQ2FuYWwoKS50aGVuKGZ1bmN0aW9uKHNpbmdsZUNhbmFscykge1xyXG4gICAgICAgICAgICAkKCcuY2hhdC1zaW5nbGUtY2FuYWwnKS5odG1sKG1lbnVDb21wb25lbnQuZ2V0U2luZ2xlQ2FuYWwoc2luZ2xlQ2FuYWxzKSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCBjaXJjbGVJbWFnZSBmcm9tICcuLi8uLi9pbWFnZXMvUHJlbG9hZGVyLWltYWdlLTEuc3ZnJ1xyXG5pbXBvcnQgY2lyY2xlSW1hZ2UyIGZyb20gJy4uLy4uL2ltYWdlcy9XZWItUHJlbG9hZGVyLTEuc3ZnJ1xyXG5pbXBvcnQgY2lyY2xlSW1hZ2UzIGZyb20gJy4uLy4uL2ltYWdlcy8zLUxlZy1QcmVsb2FkZXIuc3ZnJ1xyXG5mdW5jdGlvbiBsb2FkZXIob3B0aW9ucz17XHJcbiAgICAnZWxlbWVudENpYmxlJyA6IHVuZGVmaW5lZCxcclxuICAgICdjbGFzc05hbWUnIDogJycsXHJcbiAgICAnZGlyZWN0aXZlJyA6ICdPTicsXHJcbiAgICAncmVsYXRpdmUnIDogJ09GRicsXHJcbiAgICAnbG9hZGVyV2lkdGgnIDogbnVsbCxcclxuICAgICdsb2FkZXJIZWlnaHQnIDogbnVsbCxcclxuICAgICdiYWNrZHJvcC1jb2xvcicgOiBudWxsXHJcbn0pXHJcbntcclxuICAgIGlmKG9wdGlvbnMuZWxlbWVudENpYmxlICE9PSB1bmRlZmluZWQgKVxyXG4gICAge1xyXG4gICAgICAgIGlmKCBvcHRpb25zLmRpcmVjdGl2ZSA9PT0gJ09OJyAmJiAkKG9wdGlvbnMuZWxlbWVudENpYmxlKS5maW5kKCcubG9hZGVyLWNvbnRhaW5lcicpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IG9wdGlvbnMucmVsYXRpdmUgPT09ICdPRkYnID8gJ3Bvc2l0aW9uLXN0aWNreScgOiAncG9zaXRpb24tcmVsYXRpdmUnO1xyXG4gICAgICAgICAgICBjb25zdCBiYWNrZHJvcF9jb2xvciA9IG9wdGlvbnNbXCJiYWNrZHJvcC1jb2xvclwiXSE9bnVsbCA/ICdiYWNrZ3JvdW5kOicrb3B0aW9uc1snYmFja2Ryb3AtY29sb3InXSA6ICcnO1xyXG4gICAgICAgICAgICBjb25zdCBsb2FkZXJDb250YWluZXIgPSAkKCc8ZGl2IC8+Jywge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdsb2FkZXItY29udGFpbmVyJyxcclxuICAgICAgICAgICAgICAgIGNsYXNzOiAnbG9hZGVyLWNvbnRhaW5lciAnK3Bvc2l0aW9uKycgYm90dG9tLTAgbGVmdC0wIHctMTAwIGgtMTAwIGJnLXdoaXRlIG92ZXJmbG93LWhpZGRlbicsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogYmFja2Ryb3BfY29sb3JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvYWRlclBvc3RDb250YWluZXIgPSAkKCc8ZGl2IC8+Jywge1xyXG4gICAgICAgICAgICAgICAgY2xhc3M6J2xvYWRlci1wb3N0LWNvbnRhaW5lciB3LTEwMCBoLTEwMCBkLWZsZXgnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZVdpZHRoID0gb3B0aW9ucy5sb2FkZXJXaWR0aCAhPSBudWxsID8gJzt3aWR0aDonK29wdGlvbnMubG9hZGVyV2lkdGggOiAnJztcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2VIZWlnaHQgPSBvcHRpb25zLmxvYWRlckhlaWdodCAhPSBudWxsID8gJ2hlaWdodDonK29wdGlvbnMubG9hZGVySGVpZ2h0IDogJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gJCgnPGltZyAvPicsIHtcclxuICAgICAgICAgICAgICAgIHNyYzogY2lyY2xlSW1hZ2UzLFxyXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdtLWF1dG8nLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IGltYWdlSGVpZ2h0K2ltYWdlV2lkdGhcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxvYWRlclBvc3RDb250YWluZXIuYXBwZW5kKGltYWdlKTtcclxuICAgICAgICAgICAgbG9hZGVyQ29udGFpbmVyLmFwcGVuZChsb2FkZXJQb3N0Q29udGFpbmVyKVxyXG4gICAgICAgICAgICAkKG9wdGlvbnMuZWxlbWVudENpYmxlKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygncG9zaXRpb24tcmVsYXRpdmUnKVxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hcHBlbmQobG9hZGVyQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2UgaWYob3B0aW9ucy5kaXJlY3RpdmUgPT09ICdPRkYnKSB7XHJcbiAgICAgICAgICAgICQob3B0aW9ucy5lbGVtZW50Q2libGUpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoXCIubG9hZGVyLWNvbnRhaW5lclwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkZXJPbigkZWxlbWVudCwgJHJlbGF0aXZlPWZhbHNlLCAkc3R5bGVzT3B0aW9ucyA9IHtcclxuICAgICdsb2FkZXJXaWR0aCcgOiBudWxsLFxyXG4gICAgJ2xvYWRlckhlaWdodCcgOiBudWxsLFxyXG4gICAgJ2JhY2tkcm9wLWNvbG9yJzogbnVsbFxyXG59KVxyXG57XHJcbiAgbG9hZGVyKHtcclxuICAgICAgJ2VsZW1lbnRDaWJsZScgOiAkZWxlbWVudCxcclxuICAgICAgJ2RpcmVjdGl2ZScgOiAnT04nLFxyXG4gICAgICAncmVsYXRpdmUnOiAkcmVsYXRpdmUgPyAnT04nIDogJ09GRicsXHJcbiAgICAgICdsb2FkZXJXaWR0aCcgOiAkc3R5bGVzT3B0aW9ucy5sb2FkZXJXaWR0aCxcclxuICAgICAgJ2xvYWRlckhlaWdodCcgOiAkc3R5bGVzT3B0aW9ucy5sb2FkZXJIZWlnaHQsXHJcbiAgICAgICdiYWNrZHJvcC1jb2xvcicgOiAkc3R5bGVzT3B0aW9uc1tcImJhY2tkcm9wLWNvbG9yXCJdXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRlck9mZigkZWxlbWVudClcclxue1xyXG4gICAgbG9hZGVyKHtcclxuICAgICAgICAnZWxlbWVudENpYmxlJyA6ICRlbGVtZW50LFxyXG4gICAgICAgICdkaXJlY3RpdmUnIDogJ09GRidcclxuICAgIH0pXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IEJhc2U2NCA9IHtcclxuXHJcbiAgICAvLyBwcml2YXRlIHByb3BlcnR5XHJcbiAgICBfa2V5U3RyIDogXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiLFxyXG5cclxuICAgIC8vIHB1YmxpYyBtZXRob2QgZm9yIGVuY29kaW5nXHJcbiAgICBlbmNvZGUgOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gXCJcIjtcclxuICAgICAgICB2YXIgY2hyMSwgY2hyMiwgY2hyMywgZW5jMSwgZW5jMiwgZW5jMywgZW5jNDtcclxuICAgICAgICB2YXIgaSA9IDA7XHJcblxyXG4gICAgICAgIGlucHV0ID0gQmFzZTY0Ll91dGY4X2VuY29kZShpbnB1dC50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgd2hpbGUgKGkgPCBpbnB1dC5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgICAgIGNocjEgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XHJcbiAgICAgICAgICAgIGNocjIgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XHJcbiAgICAgICAgICAgIGNocjMgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XHJcblxyXG4gICAgICAgICAgICBlbmMxID0gY2hyMSA+PiAyO1xyXG4gICAgICAgICAgICBlbmMyID0gKChjaHIxICYgMykgPDwgNCkgfCAoY2hyMiA+PiA0KTtcclxuICAgICAgICAgICAgZW5jMyA9ICgoY2hyMiAmIDE1KSA8PCAyKSB8IChjaHIzID4+IDYpO1xyXG4gICAgICAgICAgICBlbmM0ID0gY2hyMyAmIDYzO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzTmFOKGNocjIpKSB7XHJcbiAgICAgICAgICAgICAgICBlbmMzID0gZW5jNCA9IDY0O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzTmFOKGNocjMpKSB7XHJcbiAgICAgICAgICAgICAgICBlbmM0ID0gNjQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzEpICsgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmMyKSArXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzMpICsgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmM0KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBwdWJsaWMgbWV0aG9kIGZvciBkZWNvZGluZ1xyXG4gICAgZGVjb2RlIDogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IFwiXCI7XHJcbiAgICAgICAgdmFyIGNocjEsIGNocjIsIGNocjM7XHJcbiAgICAgICAgdmFyIGVuYzEsIGVuYzIsIGVuYzMsIGVuYzQ7XHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG5cclxuICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1teQS1aYS16MC05XFwrXFwvXFw9XS9nLCBcIlwiKTtcclxuXHJcbiAgICAgICAgd2hpbGUgKGkgPCBpbnB1dC5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgICAgIGVuYzEgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XHJcbiAgICAgICAgICAgIGVuYzIgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XHJcbiAgICAgICAgICAgIGVuYzMgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XHJcbiAgICAgICAgICAgIGVuYzQgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XHJcblxyXG4gICAgICAgICAgICBjaHIxID0gKGVuYzEgPDwgMikgfCAoZW5jMiA+PiA0KTtcclxuICAgICAgICAgICAgY2hyMiA9ICgoZW5jMiAmIDE1KSA8PCA0KSB8IChlbmMzID4+IDIpO1xyXG4gICAgICAgICAgICBjaHIzID0gKChlbmMzICYgMykgPDwgNikgfCBlbmM0O1xyXG5cclxuICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIxKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbmMzICE9IDY0KSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbmM0ICE9IDY0KSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3V0cHV0ID0gQmFzZTY0Ll91dGY4X2RlY29kZShvdXRwdXQpO1xyXG5cclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gcHJpdmF0ZSBtZXRob2QgZm9yIFVURi04IGVuY29kaW5nXHJcbiAgICBfdXRmOF9lbmNvZGUgOiBmdW5jdGlvbiAoc3RyaW5nKSB7XHJcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xcclxcbi9nLFwiXFxuXCIpO1xyXG4gICAgICAgIHZhciB1dGZ0ZXh0ID0gXCJcIjtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBzdHJpbmcubGVuZ3RoOyBuKyspIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjID0gc3RyaW5nLmNoYXJDb2RlQXQobik7XHJcblxyXG4gICAgICAgICAgICBpZiAoYyA8IDEyOCkge1xyXG4gICAgICAgICAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoKGMgPiAxMjcpICYmIChjIDwgMjA0OCkpIHtcclxuICAgICAgICAgICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyA+PiA2KSB8IDE5Mik7XHJcbiAgICAgICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiA2MykgfCAxMjgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDEyKSB8IDIyNCk7XHJcbiAgICAgICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjID4+IDYpICYgNjMpIHwgMTI4KTtcclxuICAgICAgICAgICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdXRmdGV4dDtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gcHJpdmF0ZSBtZXRob2QgZm9yIFVURi04IGRlY29kaW5nXHJcbiAgICBfdXRmOF9kZWNvZGUgOiBmdW5jdGlvbiAodXRmdGV4dCkge1xyXG4gICAgICAgIHZhciBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICB2YXIgYyA9IGMxID0gYzIgPSAwO1xyXG5cclxuICAgICAgICB3aGlsZSAoIGkgPCB1dGZ0ZXh0Lmxlbmd0aCApIHtcclxuXHJcbiAgICAgICAgICAgIGMgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYyA8IDEyOCkge1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XHJcbiAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZigoYyA+IDE5MSkgJiYgKGMgPCAyMjQpKSB7XHJcbiAgICAgICAgICAgICAgICBjMiA9IHV0ZnRleHQuY2hhckNvZGVBdChpKzEpO1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjICYgMzEpIDw8IDYpIHwgKGMyICYgNjMpKTtcclxuICAgICAgICAgICAgICAgIGkgKz0gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGMyID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkrMSk7XHJcbiAgICAgICAgICAgICAgICBjMyA9IHV0ZnRleHQuY2hhckNvZGVBdChpKzIpO1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjICYgMTUpIDw8IDEyKSB8ICgoYzIgJiA2MykgPDwgNikgfCAoYzMgJiA2MykpO1xyXG4gICAgICAgICAgICAgICAgaSArPSAzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0cmluZztcclxuICAgIH1cclxuXHJcbn0iLCIvKipcclxuICogZm9uY3Rpb24gcG91ciBsYSBwcsOpdmlzdWFsaXNhdGlvbiBkJ2ltYWdlXHJcbiAqXHJcbiAqIEBwYXJhbSBpbnB1dFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRVUkwoaW5wdXQsIGNpYmxlKSB7XHJcbiAgICBpZiAoaW5wdXQuZmlsZXMgJiYgaW5wdXQuZmlsZXNbMF0pIHtcclxuICAgICAgICBpZiAoaXNJbWFnZShpbnB1dCkpIHtcclxuICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBlLnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcGxpdDEgPSByZXMuc3BsaXQoXCI7XCIpWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYoc3BsaXQxLmluY2x1ZGVzKFwiaW1hZ2VcIikpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoY2libGUpLmF0dHIoJ3NyYycsIGUudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGlucHV0LmZpbGVzWzBdKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaXNJbWFnZSgkZmlsZSkge1xyXG4gICAgaWYgKCRmaWxlLmZpbGVzICYmICRmaWxlLmZpbGVzWzBdICYmICRmaWxlLmZpbGVzWzBdLm5hbWUubWF0Y2goL1xcLihqcGd8anBlZ3xwbmd8Z2lmfGJtcHxpY28pJC8pICkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIE1BVENIID0gd2VsbEtub3duU3ltYm9sKCdtYXRjaCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICB2YXIgcmVnZXhwID0gLy4vO1xuICB0cnkge1xuICAgICcvLi8nW01FVEhPRF9OQU1FXShyZWdleHApO1xuICB9IGNhdGNoIChlcnJvcjEpIHtcbiAgICB0cnkge1xuICAgICAgcmVnZXhwW01BVENIXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuICcvLi8nW01FVEhPRF9OQU1FXShyZWdleHApO1xuICAgIH0gY2F0Y2ggKGVycm9yMikgeyAvKiBlbXB0eSAqLyB9XG4gIH0gcmV0dXJuIGZhbHNlO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcmVnZXhwJyk7XG5cbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNSZWdFeHAoaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFwiVGhlIG1ldGhvZCBkb2Vzbid0IGFjY2VwdCByZWd1bGFyIGV4cHJlc3Npb25zXCIpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkaW5jbHVkZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmNsdWRlcztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSB9LCB7XG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhlbCAvKiAsIGZyb21JbmRleCA9IDAgKi8pIHtcbiAgICByZXR1cm4gJGluY2x1ZGVzKHRoaXMsIGVsLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKCdpbmNsdWRlcycpO1xuIiwidmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG5cbnZhciBEYXRlUHJvdG90eXBlID0gRGF0ZS5wcm90b3R5cGU7XG52YXIgSU5WQUxJRF9EQVRFID0gJ0ludmFsaWQgRGF0ZSc7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciB1biREYXRlVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhEYXRlUHJvdG90eXBlW1RPX1NUUklOR10pO1xudmFyIGdldFRpbWUgPSB1bmN1cnJ5VGhpcyhEYXRlUHJvdG90eXBlLmdldFRpbWUpO1xuXG4vLyBgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1kYXRlLnByb3RvdHlwZS50b3N0cmluZ1xuaWYgKFN0cmluZyhuZXcgRGF0ZShOYU4pKSAhPSBJTlZBTElEX0RBVEUpIHtcbiAgcmVkZWZpbmUoRGF0ZVByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICB2YXIgdmFsdWUgPSBnZXRUaW1lKHRoaXMpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/IHVuJERhdGVUb1N0cmluZyh0aGlzKSA6IElOVkFMSURfREFURTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgUFJPUEVSX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLlBST1BFUjtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyICR0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHJlZ0V4cEZsYWdzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1mbGFncycpO1xuXG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciBSZWdFeHBQcm90b3R5cGUgPSBSZWdFeHAucHJvdG90eXBlO1xudmFyIG4kVG9TdHJpbmcgPSBSZWdFeHBQcm90b3R5cGVbVE9fU1RSSU5HXTtcbnZhciBnZXRGbGFncyA9IHVuY3VycnlUaGlzKHJlZ0V4cEZsYWdzKTtcblxudmFyIE5PVF9HRU5FUklDID0gZmFpbHMoZnVuY3Rpb24gKCkgeyByZXR1cm4gbiRUb1N0cmluZy5jYWxsKHsgc291cmNlOiAnYScsIGZsYWdzOiAnYicgfSkgIT0gJy9hL2InOyB9KTtcbi8vIEZGNDQtIFJlZ0V4cCN0b1N0cmluZyBoYXMgYSB3cm9uZyBuYW1lXG52YXIgSU5DT1JSRUNUX05BTUUgPSBQUk9QRVJfRlVOQ1RJT05fTkFNRSAmJiBuJFRvU3RyaW5nLm5hbWUgIT0gVE9fU1RSSU5HO1xuXG4vLyBgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbmlmIChOT1RfR0VORVJJQyB8fCBJTkNPUlJFQ1RfTkFNRSkge1xuICByZWRlZmluZShSZWdFeHAucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgdmFyIHAgPSAkdG9TdHJpbmcoUi5zb3VyY2UpO1xuICAgIHZhciByZiA9IFIuZmxhZ3M7XG4gICAgdmFyIGYgPSAkdG9TdHJpbmcocmYgPT09IHVuZGVmaW5lZCAmJiBpc1Byb3RvdHlwZU9mKFJlZ0V4cFByb3RvdHlwZSwgUikgJiYgISgnZmxhZ3MnIGluIFJlZ0V4cFByb3RvdHlwZSkgPyBnZXRGbGFncyhSKSA6IHJmKTtcbiAgICByZXR1cm4gJy8nICsgcCArICcvJyArIGY7XG4gIH0sIHsgdW5zYWZlOiB0cnVlIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgbm90QVJlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9ub3QtYS1yZWdleHAnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGNvcnJlY3RJc1JlZ0V4cExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtaXMtcmVnZXhwLWxvZ2ljJyk7XG5cbnZhciBzdHJpbmdJbmRleE9mID0gdW5jdXJyeVRoaXMoJycuaW5kZXhPZik7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlc1xuJCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFjb3JyZWN0SXNSZWdFeHBMb2dpYygnaW5jbHVkZXMnKSB9LCB7XG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2hTdHJpbmcgLyogLCBwb3NpdGlvbiA9IDAgKi8pIHtcbiAgICByZXR1cm4gISF+c3RyaW5nSW5kZXhPZihcbiAgICAgIHRvU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpLFxuICAgICAgdG9TdHJpbmcobm90QVJlZ0V4cChzZWFyY2hTdHJpbmcpKSxcbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG4gICAgKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAbWF0Y2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdtYXRjaCcsIGZ1bmN0aW9uIChNQVRDSCwgbmF0aXZlTWF0Y2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLm1hdGNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUubWF0Y2hcbiAgICBmdW5jdGlvbiBtYXRjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBtYXRjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGdldE1ldGhvZChyZWdleHAsIE1BVENIKTtcbiAgICAgIHJldHVybiBtYXRjaGVyID8gY2FsbChtYXRjaGVyLCByZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW01BVENIXSh0b1N0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAbWF0Y2hcbiAgICBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlTWF0Y2gsIHJ4LCBTKTtcblxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICBpZiAoIXJ4Lmdsb2JhbCkgcmV0dXJuIHJlZ0V4cEV4ZWMocngsIFMpO1xuXG4gICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB2YXIgbiA9IDA7XG4gICAgICB2YXIgcmVzdWx0O1xuICAgICAgd2hpbGUgKChyZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKSkgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIG1hdGNoU3RyID0gdG9TdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgQVtuXSA9IG1hdGNoU3RyO1xuICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgICBuKys7XG4gICAgICB9XG4gICAgICByZXR1cm4gbiA9PT0gMCA/IG51bGwgOiBBO1xuICAgIH1cbiAgXTtcbn0pO1xuIl0sIm5hbWVzIjpbImxvYWRlck9mZiIsImxvYWRlck9uIiwibm90aWZ5VXNlclN0b3BUeXBpbmciLCJub3RpZnlVc2VyVHlwaW5nIiwic2VuZE1lc3NhZ2UiLCJ1cGxvYWRGaWxlIiwiQ29udmVyc2F0aW9uQmFzZUNvbXBvbmVudCIsInVwZGF0ZU1lbnUiLCJyZWFkVVJMIiwicmVxdWlyZSIsIiQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNoYXRDb250YWluZXIiLCJjbG9zZXN0IiwiYm9keU1lc3NhZ2UiLCJmaW5kIiwiaW5wdXRUZXh0IiwiZW1wdHlNZXNzYWdlIiwiY29udmVyc2F0aW9uQmFzZUNvbXBvbmVudCIsImNvZGUiLCJhdHRyIiwiZmlsZXMiLCJlYWNoIiwicHVzaCIsInZhbCIsInJlbW92ZSIsIm1lc3NhZ2VWYWx1ZSIsImxlbmd0aCIsIm1lc3NhZ2UiLCJjbGVhclZ1IiwiY2xlYXJGaWxlIiwiYXBwZW5kIiwiZ2V0TWVzc2FnZSIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNhbmFsIiwic3RvcFByb3BhZ2F0aW9uIiwiaW5wdXRGaWxlIiwidHlwZSIsInRyaWdnZXIiLCJjb250YWluZXJJbWciLCJpbWciLCJodG1sIiwiZmlsZU5hbWUiLCJjb250YWluZXIiLCJmaWxlTmFtZUlucHV0IiwibmFtZSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjYW5hbF9pZCIsImNoYXRfZ3JvdXBDYW5hbF9hZGRVc2VyIiwiY2hhdF9ncm91cENhbmFsX3JlbW92ZVVzZXIiLCJjcmVhdGVHcm91cENhbmFsIiwiZmluZERlc3RpbmF0YWlyZSIsIkNhbmFsR3JvdXBzQ29tcG9uZW50IiwiTWVudUNvbXBvbmVudCIsIk1vZGFsIiwiY2FuYWxzQ29tcG9uZW50IiwiYm94Q3JlYXRpb25Db250YWluZXIiLCJzZWFyY2hWYWx1ZSIsImRpdkNoYXRfdXNlcnNMaXN0IiwidXNlcnMiLCJnZXRMaXN0VXNlciIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjaGF0X3VzZXJCYWRnZUxpc3QiLCJpZCIsInVzZXJCYWRnZSIsImlucHV0Tm9tIiwibm9tIiwiYWxlcnRFcnJvciIsInVzZXJzX2lkIiwiZ2V0VXNlcklkc0J5QmFkZ2UiLCJjYW5hbE1lc3NhZ2UiLCJlcnJvciIsIm1lbnVDb21wb25lbnQiLCJncm91cEluc3RhbmNlIiwiZ2V0R3JvdXBzQ2FuYWxJdGVtIiwibW9kYWxfY29udGFpbmVyIiwic2V0VGltZW91dCIsIkV2ZW50U291cmNlUG9seWZpbGwiLCJDb252ZXJzYXRpb25Db21wb25lbnQiLCJzaG93TWVzc2FnZUluc3RhbmNlIiwiY2hhdF9uZXdNZXNzYWdlX3RvcGljIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRleHRDb250ZW50IiwiY2hhdF92dV90b3BpYyIsImNoYXRfdXNlclR5cGluZ190b3BpYyIsImNoYXRfdXNlclN0b3BUeXBpbmdfdG9waWMiLCJldmVudE5ld01lc3NhZ2UiLCJoZWFkZXIiLCJldmVudFZ1IiwiRXZlbnRTb3VyY2UiLCJldmVudFVzZXJUeXBpbmciLCJldmVudFVzZXJTdG9wVHlwaW5nIiwiY29udmVyc2F0aW9uQ29tcG9uZW50Iiwib25tZXNzYWdlIiwiZXZlbnQiLCJkYXRhIiwiakNhbmFsIiwiYWRkSGlnaGxpZ2giLCJkZXJuaWVyTWVzc2FnZUl0ZW0iLCJsYXN0IiwiaWRVc2VyRW52b3lldXIiLCJwYXJzZUludCIsInZ1UGFyIiwiYWRkVnUiLCJhZGRVc2VyVHlwaW5nIiwidXNlclR5cGluZyIsInJlbW92ZVVzZXJUeXBpbmciLCJheGlvcyIsImZpbmRlciIsImdldCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsImdldE1lc3NhZ2VCeUNvZGUiLCJib2R5UmVxdWVzdCIsIlVSTFNlYXJjaFBhcmFtcyIsImZvckVhY2giLCJwb3N0IiwiZ2V0U2luZ2xlQ2FuYWwiLCJnZXRHcm91cGVDYW5hbCIsInNlZUNhbmFsIiwiaW5jbHVkZU1lIiwiZmlsZVVwbG9hZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJmaWxlVXJsIiwidGhlbiIsInJlbW92ZUhpZ2hsaWdodCIsIm1lbnVJdGVtIiwiY2hhdFNpbmdsZUNhbmFsIiwiY2hhdEdyb3VwQ2FuYWwiLCJzaW5nbGVDYW5hbHMiLCJncm91cGVDYW5hbHMiLCJnZXRHcm91cHNDYW5hbCIsInNlYXJjaF92YWx1ZSIsImxpc3RDYW5hbCIsImZpbHRlciIsImRhdGFfc2VhcmNoIiwibWF0Y2giLCJ0b0xvd2VyQ2FzZSIsImNhbmFsR3JvdXBDb21wb25lbnQiLCJnZXRNb2RhbEFkZFVzZXIiLCJtb2RhbEFkZFVzZXIiLCJzaG93IiwiTmV3Q29udmVyc2F0aW9uQ29tcG9uZW50IiwibmV3Q29udmVyc2F0aW9uQ29tcG9uZW50IiwiciIsInRlbXBsYXRlIiwic3ViSGVhZGVyIiwiZ2V0SGVhZGVyIiwiY2hhdENvZGUiLCJtZXNzYWdlcyIsImdldE1lc3NhZ2VzIiwidGhhdCIsImdldExpc3RVc2VySXRlbSIsImdldEVtcHR5TGlzdFVzZXJNZXNzYWdlIiwidXNlclN0cmluZ2lmaWVkIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic3RyaW5naWZ5IiwiY29tcG9uZW50IiwicHJlbm9tIiwiZW1haWwiLCJnZXRFbXB0eU1lc3NhZ2VzIiwiY3VycmVudFVzZXJJZCIsInRleHQiLCJpbWdzIiwidXJsIiwiYXZhdGFyIiwib25lcnJvciIsInJlbmR1RGF0ZUNyZWF0aW9uTWVzc2FnZSIsInRleHRlcyIsImZpbGVzVGVtcGxhdGUiLCJjb252ZXJzYXRpb25Db250YWluZXIiLCJCYXNlNjQiLCJpbnB1dENhY2hlVXNlciIsIm5vbUNhbmFsIiwiY3VycmVudF91c2VyX2lkIiwibWVtYnJlcyIsImVuY29kZSIsImlzR3JvdXAiLCJ2dVRlbXBsYXRlIiwidnVzIiwiZ2V0VnVUZW1wbGF0ZSIsIm91dGVySFRNTCIsIiRjdXJyZW50T2JqZWN0IiwiY2FuYWxWdUNvbnRhaW5lciIsImNhbmFsVXNlclR5cGluZyIsImxvZ29Hcm91cCIsImNhbmFsc01lc3NhZ2UiLCJ0aGlzT2JqIiwiZ2V0U2luZ2xlQ2FuYWxJdGVtIiwiZ2V0RW1wdHlTaW5nbGVDYW5hbE1lc3NhZ2UiLCJjYW5hbFN0cmluZ2lmeSIsImxhc3RNZXNzYWdlIiwic2xpY2UiLCJzZWVuQ2xhc3MiLCJpc1NlZW4iLCJleWVTbGFzaFNlY3Rpb24iLCJsYXN0TWVzc2FnZUNsYXNzIiwiZ2V0RW1wdHlHcm91cHNDYW5hbE1lc3NhZ2UiLCJjaGF0Qm94Q29udGFpbmVyIiwiZmlyc3QiLCJtZXNzYWdlQ29udmVyc2F0aW9uQ29udGFpbmVyIiwiZ2V0Q29udmVyc2F0aW9uQ29udGFpbmVyIiwiY2hhdF9pbnN0YW5jZSIsImNoYXRfaW5zdGFuY2VfYm9keSIsInByZXBlbmQiLCJjaXJjbGVJbWFnZSIsImNpcmNsZUltYWdlMiIsImNpcmNsZUltYWdlMyIsImxvYWRlciIsIm9wdGlvbnMiLCJ1bmRlZmluZWQiLCJlbGVtZW50Q2libGUiLCJkaXJlY3RpdmUiLCJwb3NpdGlvbiIsInJlbGF0aXZlIiwiYmFja2Ryb3BfY29sb3IiLCJsb2FkZXJDb250YWluZXIiLCJzdHlsZSIsImxvYWRlclBvc3RDb250YWluZXIiLCJpbWFnZVdpZHRoIiwibG9hZGVyV2lkdGgiLCJpbWFnZUhlaWdodCIsImxvYWRlckhlaWdodCIsImltYWdlIiwic3JjIiwiJGVsZW1lbnQiLCIkcmVsYXRpdmUiLCIkc3R5bGVzT3B0aW9ucyIsIl9rZXlTdHIiLCJpbnB1dCIsIm91dHB1dCIsImNocjEiLCJjaHIyIiwiY2hyMyIsImVuYzEiLCJlbmMyIiwiZW5jMyIsImVuYzQiLCJpIiwiX3V0ZjhfZW5jb2RlIiwidG9TdHJpbmciLCJjaGFyQ29kZUF0IiwiaXNOYU4iLCJjaGFyQXQiLCJkZWNvZGUiLCJyZXBsYWNlIiwiaW5kZXhPZiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIl91dGY4X2RlY29kZSIsInN0cmluZyIsInV0ZnRleHQiLCJuIiwiYyIsImMxIiwiYzIiLCJjMyIsImNpYmxlIiwiaXNJbWFnZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJyZXMiLCJ0YXJnZXQiLCJyZXN1bHQiLCJzcGxpdDEiLCJzcGxpdCIsImluY2x1ZGVzIiwicmVhZEFzRGF0YVVSTCIsIiRmaWxlIl0sInNvdXJjZVJvb3QiOiIifQ==