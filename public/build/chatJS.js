"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["chatJS"],{

/***/ "./assets/js/chat/chat.js":
/*!********************************!*\
  !*** ./assets/js/chat/chat.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _components_ConversationComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ConversationComponent */ "./assets/js/chat/components/ConversationComponent.js");
/* harmony import */ var _helpers_chat_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/chat_helpers */ "./assets/js/chat/helpers/chat_helpers.js");
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
  var conversationComponent = new _components_ConversationComponent__WEBPACK_IMPORTED_MODULE_5__.ConversationComponent(); // présence d'un nouveau message

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
              return (0,_helpers_chat_helpers__WEBPACK_IMPORTED_MODULE_6__.showMessageInstance)(canal);

            case 8:
              jCanal = _context.sent;

            case 9:
              // mettre en évidence le canal
              conversationComponent.addHighligh(jCanal); // mettre à jour le menu

              _context.next = 12;
              return (0,_helpers_chat_helpers__WEBPACK_IMPORTED_MODULE_6__.updateMenu)(canal);

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

/***/ "./assets/images/3-Leg-Preloader.svg":
/*!*******************************************!*\
  !*** ./assets/images/3-Leg-Preloader.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/3-Leg-Preloader.78ef2f3b.svg";

/***/ }),

/***/ "./assets/images/Preloader-image-1.svg":
/*!*********************************************!*\
  !*** ./assets/images/Preloader-image-1.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/Preloader-image-1.771fb7e6.svg";

/***/ }),

/***/ "./assets/images/Web-Preloader-1.svg":
/*!*******************************************!*\
  !*** ./assets/images/Web-Preloader-1.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/Web-Preloader-1.0c3733ec.svg";

/***/ }),

/***/ "./assets/images/users.jpg":
/*!*********************************!*\
  !*** ./assets/images/users.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/users.d0208610.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-464164","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-7d93ee","vendors-node_modules_core-js_internals_dom-iterables_js-node_modules_core-js_internals_dom-to-831329","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_web_d-930e15","vendors-node_modules_core-js_modules_es_promise_js","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-fb67f6","vendors-node_modules_regenerator-runtime_runtime_js","vendors-node_modules_core-js_modules_es_array_index-of_js-node_modules_core-js_modules_es_par-06157e","vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_find_js","vendors-node_modules_core-js_modules_web_url-search-params_js","vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_core-js_modules_es_array-690d99","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-c1e187"], () => (__webpack_exec__("./assets/js/chat/chat.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hhdC9jaGF0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGF0L2NoYXRHcm91cENhbmFsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGF0L2NoYXRNZXJjdXJlVHJhaXRlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hhdC9jaGF0U2VuZGVyUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hhdC9jaGF0X2NhbmFsX2luc3RhbmNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGF0L2NoYXRfbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hhdC9jaGF0X25ld19vbmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXQvY29tcG9uZW50cy9DYW5hbEdyb3Vwc0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hhdC9jb21wb25lbnRzL0NvbnZlcnNhdGlvbkJhc2VDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXQvY29tcG9uZW50cy9Db252ZXJzYXRpb25Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXQvY29tcG9uZW50cy9NZW51Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGF0L2NvbXBvbmVudHMvTmV3Q29udmVyc2F0aW9uQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGF0L2hlbHBlcnMvY2hhdF9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9oZWxwZXJzL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaGVscGVycy9iYXNlNjQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hlbHBlcnMvaW5wdXRGaWxlUHJldmlldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2xvYWRlck9mZiwgbG9hZGVyT259IGZyb20gXCIuLi9oZWxwZXJzL0xvYWRlclwiO1xyXG5pbXBvcnQge25vdGlmeVVzZXJTdG9wVHlwaW5nLCBub3RpZnlVc2VyVHlwaW5nLCBzZW5kTWVzc2FnZSwgdXBsb2FkRmlsZX0gZnJvbSBcIi4vY2hhdFNlbmRlclJlcXVlc3RcIjtcclxuaW1wb3J0IHtDb252ZXJzYXRpb25CYXNlQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnZlcnNhdGlvbkJhc2VDb21wb25lbnRcIjtcclxuaW1wb3J0IHt1cGRhdGVNZW51fSBmcm9tIFwiLi9oZWxwZXJzL2NoYXRfaGVscGVyc1wiO1xyXG5pbXBvcnQge3JlYWRVUkx9IGZyb20gXCIuLi9oZWxwZXJzL2lucHV0RmlsZVByZXZpZXdcIjtcclxucmVxdWlyZSgnLi9jaGF0X25ld19vbmUnKVxyXG5yZXF1aXJlKCcuL2NoYXRfbWVudScpXHJcbnJlcXVpcmUoJy4vY2hhdE1lcmN1cmVUcmFpdGVtZW50JylcclxucmVxdWlyZSgnLi9jaGF0X2NhbmFsX2luc3RhbmNlJylcclxucmVxdWlyZSgnLi9jaGF0R3JvdXBDYW5hbCcpXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBlbnZveWVyIHVuIG1lc3NhZ2VcclxuICAgICQodGhpcykub24oJ2NsaWNrJywgJy5jaGF0LWJ0bi1zZW5kJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBjaGF0Q29udGFpbmVyID0gJCh0aGlzKS5jbG9zZXN0KCcuY2hhdC1ib3gtY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgYm9keU1lc3NhZ2UgPSBjaGF0Q29udGFpbmVyLmZpbmQoJy5jYXJkLWJvZHknKTtcclxuICAgICAgICBjb25zdCBpbnB1dFRleHQgPSBjaGF0Q29udGFpbmVyLmZpbmQoJy5jaGF0LWlucHV0LXRleHRlcycpO1xyXG4gICAgICAgIGNvbnN0IGVtcHR5TWVzc2FnZSA9IGNoYXRDb250YWluZXIuZmluZCgnLmNoYXQtZW1wdHktbWVzc2FnZScpO1xyXG4gICAgICAgIGNvbnN0IGNvbnZlcnNhdGlvbkJhc2VDb21wb25lbnQgPSBuZXcgQ29udmVyc2F0aW9uQmFzZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIC8vIHNvaXQgb24gYSBsZSBjYW5hbCwgc29pdCBvbiBhIGxlIGNvZGVcclxuICAgICAgICBjb25zdCBjb2RlICA9ICQodGhpcykuYXR0cignZGF0YS1jb2RlJyk7XHJcbiAgICAgICAgbGV0IGZpbGVzID0gW107XHJcbiAgICAgICAgY2hhdENvbnRhaW5lci5maW5kKCdpbnB1dFtuYW1lPVwiZmlsZXNbXVwiXScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgZmlsZXMucHVzaCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBtZXNzYWdlVmFsdWUgPSBpbnB1dFRleHQudmFsKCk7XHJcbiAgICAgICAgaWYobWVzc2FnZVZhbHVlLmxlbmd0aCA+IDAgfHwgZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsb2FkZXJPbihib2R5TWVzc2FnZVswXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCBzZW5kTWVzc2FnZShtZXNzYWdlVmFsdWUsY29kZSwgZmlsZXMpXHJcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbkJhc2VDb21wb25lbnQuY2xlYXJWdShib2R5TWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbkJhc2VDb21wb25lbnQuY2xlYXJGaWxlKGNoYXRDb250YWluZXIpO1xyXG4gICAgICAgICAgICBjaGF0Q29udGFpbmVyLmZpbmQoJy5jaGF0LWxpc3QtZ3JvdXAtbWVzc2FnZXMnKS5hcHBlbmQoY29udmVyc2F0aW9uQmFzZUNvbXBvbmVudC5nZXRNZXNzYWdlKG1lc3NhZ2UpKVxyXG4gICAgICAgICAgICBpbnB1dFRleHQudmFsKCcnKTtcclxuICAgICAgICAgICAgYm9keU1lc3NhZ2VbMF0uc2Nyb2xsVG9wID0gYm9keU1lc3NhZ2VbMF0uc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgICAgICBsb2FkZXJPZmYoYm9keU1lc3NhZ2VbMF0pO1xyXG4gICAgICAgICAgICBpZihlbXB0eU1lc3NhZ2UubGVuZ3RoPjApIHtcclxuICAgICAgICAgICAgICAgIGVtcHR5TWVzc2FnZS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhd2FpdCB1cGRhdGVNZW51KG1lc3NhZ2UuY2FuYWwpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGFjdGl2ZXIgbGUgY29tcG9ydGVtZW50IHBhciBkw6lmYXVsdCBkZSBsJ2lucHV0RmlsZVxyXG4gICAgLy8gY29tcG9ydGVtZW50IHBhciBkw6lmYXV0IGFycsOpdGVyIGV0IHF1aSBlc3QgY2F1c8OpIHBhciBsJ8OpdsOobmVtZW50IGNsaWNrIGR1IHBhcmVudFxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCAnaW5wdXRbdHlwZT1cImZpbGVcIl0nLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB1cGxvYWQgZmlsZVxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCcuY2hhdC11cGxvYWRJbWFnZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRGaWxlID0gJCgnPGlucHV0IC8+Jywge1xyXG4gICAgICAgICAgICB0eXBlOiAnZmlsZScsXHJcbiAgICAgICAgICAgIGNsYXNzOidkLW5vbmUnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LWJveC1jb250YWluZXInKS5maW5kKCcuY2hhdC1maWxlcy1wcmV2aWV3JykuYXBwZW5kKGlucHV0RmlsZSk7XHJcblxyXG4gICAgICAgIGlucHV0RmlsZS50cmlnZ2VyKCdjbGljaycpO1xyXG5cclxuICAgIH0pXHJcblxyXG4gICAgJCh0aGlzKS5vbignY2hhbmdlJywnLmNoYXQtYm94LWNvbnRhaW5lciBpbnB1dFt0eXBlPVwiZmlsZVwiXScsYXN5bmMgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckltZyA9ICQoJzxkaXYgLz4nKTtcclxuICAgICAgICBjb25zdCBpbWcgPSAkKCc8aW1nIC8+Jywge1xyXG4gICAgICAgICAgICBjbGFzczonY2hhdC1maWxlLWl0ZW0nXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29udGFpbmVySW1nLmh0bWwoaW1nKTtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LWJveC1jb250YWluZXInKS5maW5kKCcuY2hhdC1maWxlcy1wcmV2aWV3JykuYXBwZW5kKGNvbnRhaW5lckltZyk7XHJcbiAgICAgICAgcmVhZFVSTCgkKHRoaXMpWzBdLCBpbWdbMF0pO1xyXG4gICAgICAgIGxvYWRlck9uKGNvbnRhaW5lckltZ1swXSwgZmFsc2UsIHtcclxuICAgICAgICAgICAgJ2xvYWRlcldpZHRoJyA6ICc0MHB4JyxcclxuICAgICAgICAgICAgJ2xvYWRlckhlaWdodCcgOiAnNDBweCcsXHJcbiAgICAgICAgICAgICdiYWNrZHJvcC1jb2xvcic6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSkgIWltcG9ydGFudCdcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBmaWxlTmFtZSA9IGF3YWl0IHVwbG9hZEZpbGUoJCh0aGlzKVswXSk7XHJcbiAgICAgICAgbG9hZGVyT2ZmKGNvbnRhaW5lckltZ1swXSk7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gJCh0aGlzKS5jbG9zZXN0KCcuY2hhdC1ib3gtY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgZmlsZU5hbWVJbnB1dCA9ICQoJzxpbnB1dCAvPicsIHtcclxuICAgICAgICAgICAgdHlwZTogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdmaWxlc1tdJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBmaWxlTmFtZUlucHV0LnZhbChmaWxlTmFtZSk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChmaWxlTmFtZUlucHV0KTtcclxuICAgIH0pXHJcblxyXG4gICAgLy8gc3VwcHJpbWVyIGxlIGNvbnRlbmV1ciBkdSBtZXNzYWdlXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsJy5jaGF0LWJ0bi1jbG9zZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuY2hhdC1ib3gtY29udGFpbmVyJykucmVtb3ZlKCk7XHJcbiAgICB9KVxyXG5cclxuICAgICQodGhpcykub24oJ2NsaWNrJywnLmNoYXQtYnRuLW1pbmltaXNlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LWJveC1jb250YWluZXIsLmNoYXQtZmxvYXQtbWVudScpLmFkZENsYXNzKCdjaGF0LW1pbmltaXNlZCcpO1xyXG4gICAgICAgICQodGhpcykuZmluZCgnaScpLnJlbW92ZUNsYXNzKCdmYS1hbmdsZS1kb3duJykuYWRkQ2xhc3MoJ2ZhLWFuZ2xlLXVwJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY2hhdC1idG4tbWF4aW1pc2UnKS5yZW1vdmVDbGFzcygnY2hhdC1idG4tbWluaW1pc2UnKTtcclxuICAgIH0pXHJcblxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCcuY2hhdC1idG4tbWF4aW1pc2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmNoYXQtYm94LWNvbnRhaW5lciwuY2hhdC1mbG9hdC1tZW51JykucmVtb3ZlQ2xhc3MoJ2NoYXQtbWluaW1pc2VkJyk7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCdpJykucmVtb3ZlQ2xhc3MoJ2ZhLWFuZ2xlLXVwJykuYWRkQ2xhc3MoJ2ZhLWFuZ2xlLWRvd24nKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjaGF0LWJ0bi1taW5pbWlzZScpLnJlbW92ZUNsYXNzKCdjaGF0LWJ0bi1tYXhpbWlzZScpO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKHRoaXMpLm9uKCdmb2N1cycsICcuY2hhdC1pbnB1dC10ZXh0ZXMnLGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgY2FuYWxfaWQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LWJveC1jb250YWluZXInKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgYXdhaXQgbm90aWZ5VXNlclR5cGluZyhjYW5hbF9pZClcclxuICAgIH0pO1xyXG5cclxuICAgICQodGhpcykub24oJ2ZvY3Vzb3V0JywnLmNoYXQtaW5wdXQtdGV4dGVzJyxhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGNhbmFsX2lkID0gJCh0aGlzKS5jbG9zZXN0KCcuY2hhdC1ib3gtY29udGFpbmVyJykuYXR0cignZGF0YS1pZCcpO1xyXG4gICAgICAgIGF3YWl0IG5vdGlmeVVzZXJTdG9wVHlwaW5nKGNhbmFsX2lkKVxyXG4gICAgfSlcclxufSk7XHJcbiIsImltcG9ydCB7XHJcbiAgICBjaGF0X2dyb3VwQ2FuYWxfYWRkVXNlcixcclxuICAgIGNoYXRfZ3JvdXBDYW5hbF9yZW1vdmVVc2VyLFxyXG4gICAgY3JlYXRlR3JvdXBDYW5hbCxcclxuICAgIGZpbmREZXN0aW5hdGFpcmVcclxufSBmcm9tIFwiLi9jaGF0U2VuZGVyUmVxdWVzdFwiO1xyXG5pbXBvcnQge2xvYWRlck9mZiwgbG9hZGVyT259IGZyb20gXCIuLi9oZWxwZXJzL0xvYWRlclwiO1xyXG5pbXBvcnQge0NhbmFsR3JvdXBzQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL0NhbmFsR3JvdXBzQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7TWVudUNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9NZW51Q29tcG9uZW50XCI7XHJcbmltcG9ydCB7TW9kYWx9IGZyb20gJ2Jvb3RzdHJhcCdcclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjYW5hbHNDb21wb25lbnQgPSBuZXcgQ2FuYWxHcm91cHNDb21wb25lbnQoKVxyXG4gICAgJCh0aGlzKS5vbignaW5wdXQnLCcuY2hhdFNlYXJjaFVzZXInLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGJveENyZWF0aW9uQ29udGFpbmVyID0gJCh0aGlzKS5jbG9zZXN0KCcuY2hhdC1tb2RhbC1jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBzZWFyY2hWYWx1ZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgY29uc3QgZGl2Q2hhdF91c2Vyc0xpc3QgPSBib3hDcmVhdGlvbkNvbnRhaW5lci5maW5kKCcuY2hhdF91c2Vyc0xpc3QnKTtcclxuICAgICAgICBpZihzZWFyY2hWYWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGRpdkNoYXRfdXNlcnNMaXN0Lmh0bWwoJycpO1xyXG4gICAgICAgICAgICBsb2FkZXJPbihkaXZDaGF0X3VzZXJzTGlzdFswXSwgJ09OJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgZmluZERlc3RpbmF0YWlyZShzZWFyY2hWYWx1ZSk7XHJcbiAgICAgICAgICAgIGRpdkNoYXRfdXNlcnNMaXN0Lmh0bWwoY2FuYWxzQ29tcG9uZW50LmdldExpc3RVc2VyKHVzZXJzKSlcclxuICAgICAgICAgICAgbG9hZGVyT2ZmKGRpdkNoYXRfdXNlcnNMaXN0WzBdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXZDaGF0X3VzZXJzTGlzdC5odG1sKCcnKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCcuY2hhdC1zZWxlY3QtdXNlcicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KCQodGhpcykuYXR0cignZGF0YS11c2VyJykpKVxyXG4gICAgICAgIGNvbnN0IGNoYXRfdXNlckJhZGdlTGlzdCA9ICQoJy5jaGF0X3VzZXJCYWRnZUxpc3QnKTtcclxuICAgICAgICBpZigkKCcjY2hhdC1iYWRnZVVzZXItJyt1c2VyLmlkKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY2hhdF91c2VyQmFkZ2VMaXN0LmFwcGVuZChjYW5hbHNDb21wb25lbnQudXNlckJhZGdlKHVzZXIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCcjY2hhdC1idG4tY3JlYXRlQ2FuYWwnLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0Tm9tID0gJCgnI2NoYXRfaW5wdXRDYW5hbE5hbWUnKTtcclxuICAgICAgICBjb25zdCBub20gPSBpbnB1dE5vbS52YWwoKTtcclxuICAgICAgICBjb25zdCBhbGVydEVycm9yID0gJCgnLmFsZXJ0LWVtcHR5LW5hbWUnKTtcclxuICAgICAgICBjb25zdCB1c2Vyc19pZCA9IGdldFVzZXJJZHNCeUJhZGdlKCQodGhpcykuY2xvc2VzdCgnLmNoYXQtbW9kYWwtY29udGFpbmVyJykpO1xyXG5cclxuICAgICAgICBpZihub20ubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgYWxlcnRFcnJvci5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNhbmFsTWVzc2FnZSA9IGF3YWl0IGNyZWF0ZUdyb3VwQ2FuYWwobm9tLCB1c2Vyc19pZCk7XHJcbiAgICAgICAgaWYoY2FuYWxNZXNzYWdlLmVycm9yKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0RXJyb3IucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICBjb25zdCBtZW51Q29tcG9uZW50ID0gbmV3IE1lbnVDb21wb25lbnQoKTtcclxuICAgICAgICAgICBjb25zdCBncm91cEluc3RhbmNlID0gbWVudUNvbXBvbmVudC5nZXRHcm91cHNDYW5hbEl0ZW0oY2FuYWxNZXNzYWdlKTtcclxuICAgICAgICAgICAkKCcuY2hhdC1saXN0LWdyb3VwQ2FuYWwnKS5hcHBlbmQoZ3JvdXBJbnN0YW5jZSk7XHJcbiAgICAgICAgICAgJCgnW2RhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCJdJykudHJpZ2dlcignY2xpY2snKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG4gICAgJCh0aGlzKS5vbignaGlkZGVuLmJzLm1vZGFsJywnI2NoYXRNb2RhbENyZWF0ZUdyb3VwcycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAkKCcjY2hhdF9pbnB1dENhbmFsTmFtZScpLnZhbCgnJyk7XHJcbiAgICAgICAgJCgnLmNoYXQtYmFkZ2VVc2VyJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuY2hhdF91c2Vyc0xpc3QnKS5odG1sKCcnKTtcclxuICAgICAgICAkKCcjY2hhdFNlYXJjaFVzZXInKS52YWwoJycpO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKHRoaXMpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCcuY2hhdC1tb2RhbC1hZGRVc2VycycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCAnI2NoYXQtYnRuLWFkZFVzZXJzJyxhc3luYyBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgbW9kYWxfY29udGFpbmVyID0gJCh0aGlzKS5jbG9zZXN0KCcuY2hhdC1tb2RhbC1jb250YWluZXInKVxyXG4gICAgICAgIGNvbnN0IHVzZXJzX2lkID0gZ2V0VXNlcklkc0J5QmFkZ2UobW9kYWxfY29udGFpbmVyKTtcclxuICAgICAgICBhd2FpdCBjaGF0X2dyb3VwQ2FuYWxfYWRkVXNlcihtb2RhbF9jb250YWluZXIuYXR0cignZGF0YS1jYW5hbC1pZCcpLCB1c2Vyc19pZClcclxuICAgICAgICBtb2RhbF9jb250YWluZXIuZmluZCgnLmFsZXJ0LXN1Y2Nlc3MnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJChtb2RhbF9jb250YWluZXIpLmZpbmQoJ1tkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiXScpLnRyaWdnZXIoJ2NsaWNrJylcclxuICAgICAgICB9LCA1MDApXHJcbiAgICB9KVxyXG5cclxuICAgICQodGhpcykub24oJ2NsaWNrJywgJy5jaGF0LXJlbW92ZS11c2VyJyxhc3luYyBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIGF3YWl0IGNoYXRfZ3JvdXBDYW5hbF9yZW1vdmVVc2VyKCQodGhpcykuYXR0cignZGF0YS1jYW5hbC1pZCcpKTtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LWNob29zZS1jYW5hbCcpLnJlbW92ZSgpXHJcbiAgICB9KVxyXG5cclxuXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZ2V0VXNlcklkc0J5QmFkZ2UoY29udGFpbmVyKVxyXG57XHJcbiAgICBsZXQgdXNlcnNfaWQgPSBbXTtcclxuICAgICQoY29udGFpbmVyKS5maW5kKCcuY2hhdC1iYWRnZVVzZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHVzZXJzX2lkLnB1c2goJCh0aGlzKS5hdHRyKCdkYXRhLXVzZXItaWQnKSlcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHVzZXJzX2lkO1xyXG59IiwiaW1wb3J0IHtDb252ZXJzYXRpb25Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvQ29udmVyc2F0aW9uQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7c2hvd01lc3NhZ2VJbnN0YW5jZSwgdXBkYXRlTWVudX0gZnJvbSBcIi4vaGVscGVycy9jaGF0X2hlbHBlcnNcIjtcclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBkZXRlY3RlciBzJ2lsIHkgYSB1biBtZXNzYWdlXHJcbiAgICBjb25zdCBjaGF0X25ld01lc3NhZ2VfdG9waWMgPSBKU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdC1uZXdNZXNzYWdlLXRvcGljXCIpLnRleHRDb250ZW50KTtcclxuICAgIGNvbnN0IGNoYXRfdnVfdG9waWMgPSBKU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdC12dS10b3BpY1wiKS50ZXh0Q29udGVudCk7XHJcbiAgICBjb25zdCBjaGF0X3VzZXJUeXBpbmdfdG9waWMgPSBKU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdC11c2VyVHlwaW5nLXRvcGljXCIpLnRleHRDb250ZW50KTtcclxuICAgIGNvbnN0IGNoYXRfdXNlclN0b3BUeXBpbmdfdG9waWMgPSBKU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdC11c2VyU3RvcFR5cGluZy10b3BpY1wiKS50ZXh0Q29udGVudCk7XHJcbiAgICBjb25zdCBldmVudE5ld01lc3NhZ2UgPSBuZXcgRXZlbnRTb3VyY2UoY2hhdF9uZXdNZXNzYWdlX3RvcGljKTtcclxuICAgIGNvbnN0IGV2ZW50VnUgPSBuZXcgRXZlbnRTb3VyY2UoY2hhdF92dV90b3BpYyk7XHJcbiAgICBjb25zdCBldmVudFVzZXJUeXBpbmcgPSBuZXcgRXZlbnRTb3VyY2UoY2hhdF91c2VyVHlwaW5nX3RvcGljKTtcclxuICAgIGNvbnN0IGV2ZW50VXNlclN0b3BUeXBpbmcgPSBuZXcgRXZlbnRTb3VyY2UoY2hhdF91c2VyU3RvcFR5cGluZ190b3BpYyk7XHJcbiAgICBjb25zdCBjb252ZXJzYXRpb25Db21wb25lbnQgPSBuZXcgQ29udmVyc2F0aW9uQ29tcG9uZW50KCk7XHJcbiAgICAvLyBwcsOpc2VuY2UgZCd1biBub3V2ZWF1IG1lc3NhZ2VcclxuICAgIGV2ZW50TmV3TWVzc2FnZS5vbm1lc3NhZ2UgPSBhc3luYyBldmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgY29uc3QgY2FuYWwgPSBtZXNzYWdlLmNhbmFsO1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBtZXNzYWdlLnVzZXI7XHJcbiAgICAgICAgLy8gc2kgdW5lIGluc3RhbmNlIGVzdCBvdXZlcnRlXHJcbiAgICAgICAgbGV0IGpDYW5hbCA9ICQoJyNjYW5hbC0nK2NhbmFsLmlkKTtcclxuICAgICAgICBqQ2FuYWwuZmluZCgnLmNoYXQtbGlzdC1ncm91cC1tZXNzYWdlcycpLmFwcGVuZChjb252ZXJzYXRpb25Db21wb25lbnQuZ2V0TWVzc2FnZShtZXNzYWdlKSk7XHJcbiAgICAgICAgLy8gc2kgbCdpbnN0YW5jZSBuJ2VzdCBwYXMgb3V2ZXJ0ZVxyXG4gICAgICAgIGlmKGpDYW5hbC5sZW5ndGggPT09IDAgKSB7XHJcbiAgICAgICAgICBqQ2FuYWwgPSBhd2FpdCBzaG93TWVzc2FnZUluc3RhbmNlKGNhbmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbWV0dHJlIGVuIMOpdmlkZW5jZSBsZSBjYW5hbFxyXG4gICAgICAgIGNvbnZlcnNhdGlvbkNvbXBvbmVudC5hZGRIaWdobGlnaChqQ2FuYWwpXHJcbiAgICAgICAgLy8gbWV0dHJlIMOgIGpvdXIgbGUgbWVudVxyXG4gICAgICAgIGF3YWl0IHVwZGF0ZU1lbnUoY2FuYWwpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcXVhbmQgcXVlbHF1J3VuIHZvaXQgbGUgbWVzc2FnZVxyXG4gICAgZXZlbnRWdS5vbm1lc3NhZ2UgPSBhc3luYyBldmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FuYWwgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xyXG4gICAgICAgIGNvbnN0IGRlcm5pZXJNZXNzYWdlSXRlbSA9ICQoJy5jaGF0LWxpc3QtZ3JvdXAtbWVzc2FnZXM+Lmxpc3QtZ3JvdXAtaXRlbScpLmxhc3QoKTtcclxuICAgICAgICBjb25zdCBpZFVzZXJFbnZveWV1ciA9IHBhcnNlSW50KGRlcm5pZXJNZXNzYWdlSXRlbS5hdHRyKCdkYXRhLWlkLXVzZXInKSlcclxuICAgICAgICAvLyBzaSB1bmUgaW5zdGFuY2UgZXN0IG91dmVydGUgZXQgcXVlIGxhIHBlcnNvbm5lIHF1aSBhIHZ1IGxlIG1lc3NhZ2Ugbidlc3QgcGFzIGwnZW52b3lldXJcclxuICAgICAgICBsZXQgakNhbmFsID0gJCgnI2NhbmFsLScrY2FuYWwuaWQpO1xyXG4gICAgICAgIGNvbnZlcnNhdGlvbkNvbXBvbmVudC5jbGVhclZ1KGpDYW5hbClcclxuICAgICAgICBpZihqQ2FuYWwubGVuZ3RoID4gMCAmJiBpZFVzZXJFbnZveWV1ciAhPT0gY2FuYWwudnVQYXIudXNlci5pZCApIHtcclxuICAgICAgICAgICAvLyB0b2RvOiBtZXR0cmUgdW4gdnVcclxuICAgICAgICAgICAgY29udmVyc2F0aW9uQ29tcG9uZW50LmFkZFZ1KGpDYW5hbCwgY2FuYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBxdWFuZCBxdWVscXUndW4gZXN0IGVuIHRyYWluIGQnw6ljcmlyZVxyXG4gICAgZXZlbnRVc2VyVHlwaW5nLm9ubWVzc2FnZSA9IGFzeW5jIGV2ZW50ID0+IHtcclxuICAgICAgICBjb25zdCBjYW5hbCA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgY29udmVyc2F0aW9uQ29tcG9uZW50LmFkZFVzZXJUeXBpbmcoJCgnLmNoYXQtYm94LWNvbnRhaW5lcltpZD1cImNhbmFsLScrY2FuYWwuaWQrJ1wiXScpLCBjYW5hbC51c2VyVHlwaW5nKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBxdWFuZCBxdWVscXUndW4gYXJyZXRlIGQnw6ljcmlyZVxyXG4gICAgZXZlbnRVc2VyU3RvcFR5cGluZy5vbm1lc3NhZ2UgPSBhc3luYyBldmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FuYWwgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xyXG4gICAgICAgIGNvbnZlcnNhdGlvbkNvbXBvbmVudC5yZW1vdmVVc2VyVHlwaW5nKCQoJy5jaGF0LWJveC1jb250YWluZXJbaWQ9XCJjYW5hbC0nK2NhbmFsLmlkKydcIl0nKSwgY2FuYWwudXNlclR5cGluZylcclxuICAgIH1cclxuXHJcblxyXG59KTsiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmluZERlc3RpbmF0YWlyZShmaW5kZXIpIHtcclxuICAgIGlmKGZpbmRlci5sZW5ndGggPiAxKXtcclxuICAgICAgICByZXR1cm4gKGF3YWl0IGF4aW9zLmdldChSb3V0aW5nLmdlbmVyYXRlKCd1c2VyX2ZpbmREZXN0Jywge2ZpbmRlcjogZmluZGVyfSkpKS5kYXRhO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWVzc2FnZUJ5Q29kZShjb2RlPW51bGwpXHJcbntcclxuICAgIGlmKGNvZGUgIT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gKGF3YWl0IGF4aW9zLmdldChSb3V0aW5nLmdlbmVyYXRlKCdjaGF0X2dldE1lc3NhZ2VfYnlDb2RlJywge2NvZGUgOiBjb2RlfSkpKS5kYXRhXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFtdO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2UobWVzc2FnZSwgY29kZSwgZmlsZXMgPSBbXSkge1xyXG4gICAgLy8gZW52b3llciB1biBtZXNzYWdlXHJcbiAgICBjb25zdCBib2R5UmVxdWVzdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICAgIGJvZHlSZXF1ZXN0LmFwcGVuZCgndGV4dGVzJywgbWVzc2FnZSk7XHJcbiAgICBmaWxlcy5mb3JFYWNoKGZ1bmN0aW9uKGZpbGVOYW1lKSB7XHJcbiAgICAgICAgYm9keVJlcXVlc3QuYXBwZW5kKCdmaWxlc1tdJywgZmlsZU5hbWUpXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIChhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICAgICAgUm91dGluZy5nZW5lcmF0ZSgnY2hhdF9hZGRNZXNzYWdlJywge2NvZGUgOiBjb2RlfSksXHJcbiAgICAgICAgICAgICAgICBib2R5UmVxdWVzdFxyXG4gICAgICAgICkpLmRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTaW5nbGVDYW5hbCgpXHJcbntcclxuICByZXR1cm4gKGF3YWl0IGF4aW9zLmdldChSb3V0aW5nLmdlbmVyYXRlKCdjaGF0X2dldENhbmFsU2luZ2xlTWVzc2FnZScpKSkuZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdyb3VwZUNhbmFsKClcclxue1xyXG4gICAgcmV0dXJuIChhd2FpdCBheGlvcy5nZXQoUm91dGluZy5nZW5lcmF0ZSgnY2hhdF9nZXRDYW5hbE1lc3NhZ2UnKSkpLmRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHcm91cENhbmFsKG5vbSwgdXNlcnNfaWQpXHJcbntcclxuICAgIGNvbnN0IGJvZHlSZXF1ZXN0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgYm9keVJlcXVlc3QuYXBwZW5kKCdub20nLCBub20pO1xyXG4gICAgdXNlcnNfaWQuZm9yRWFjaChmdW5jdGlvbihpZCkge1xyXG4gICAgICAgIGJvZHlSZXF1ZXN0LmFwcGVuZCgndXNlcnNbXScsIGlkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoYXdhaXQgYXhpb3MucG9zdChSb3V0aW5nLmdlbmVyYXRlKCdjaGF0X2NyZWF0ZUdyb3VwQ2FuYWwnKSwgYm9keVJlcXVlc3QpKS5kYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWVDYW5hbChjYW5hbF9pZClcclxue1xyXG4gICAgcmV0dXJuIChhd2FpdCBheGlvcy5nZXQoUm91dGluZy5nZW5lcmF0ZSgnY2hhdF92dU1lc3NhZ2UnLCB7aWQ6Y2FuYWxfaWR9KSkpLmRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBub3RpZnlVc2VyVHlwaW5nKGNhbmFsX2lkKVxyXG57XHJcbiAgICByZXR1cm4gKGF3YWl0IGF4aW9zLmdldChSb3V0aW5nLmdlbmVyYXRlKCdjaGF0X25vdGlmeVVzZXJUeXBpbmcnLCB7aWQ6Y2FuYWxfaWR9KSkpLmRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBub3RpZnlVc2VyU3RvcFR5cGluZyhjYW5hbF9pZClcclxue1xyXG4gICAgcmV0dXJuIChhd2FpdCBheGlvcy5nZXQoUm91dGluZy5nZW5lcmF0ZSgnY2hhdF9ub3RpZnlVc2VyU3RvcFR5cGluZycsIHtpZDpjYW5hbF9pZH0pKSkuZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoYXRfZ3JvdXBDYW5hbF9yZW1vdmVVc2VyKGNhbmFsX2lkKVxyXG57XHJcbiAgICByZXR1cm4gKGF3YWl0IGF4aW9zLmRlbGV0ZShSb3V0aW5nLmdlbmVyYXRlKCdjaGF0X2dyb3VwQ2FuYWxfcmVtb3ZlVXNlcicsIHtpZDpjYW5hbF9pZCwgaW5jbHVkZU1lOnRydWV9KSkpLmRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGF0X2dyb3VwQ2FuYWxfYWRkVXNlcihjYW5hbF9pZCwgdXNlcnNfaWQpIHtcclxuICAgIGNvbnN0IGJvZHlSZXF1ZXN0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgdXNlcnNfaWQuZm9yRWFjaChmdW5jdGlvbihpZCkge1xyXG4gICAgICAgIGJvZHlSZXF1ZXN0LmFwcGVuZCgndXNlcnNbXScsIGlkKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChhd2FpdCBheGlvcy5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ2NoYXRfZ3JvdXBDYW5hbF9hZGRVc2VyJywge2lkOmNhbmFsX2lkfSksIGJvZHlSZXF1ZXN0KSkuZGF0YVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkRmlsZShmaWxlVXBsb2FkKSB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlVXBsb2FkLmZpbGVzWzBdKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlICA9IChhd2FpdCBheGlvcy5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ2NoYXRfaW1wb3J0RmlsZScpLCBmb3JtRGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xyXG4gICAgICAgIH1cclxuICAgIH0pKS5kYXRhO1xyXG4gICAgaWYoIXJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmZpbGVVcmw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IHtDb252ZXJzYXRpb25Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvQ29udmVyc2F0aW9uQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7c2hvd01lc3NhZ2VJbnN0YW5jZSwgdXBkYXRlTWVudX0gZnJvbSBcIi4vaGVscGVycy9jaGF0X2hlbHBlcnNcIlxyXG5pbXBvcnQge3NlZUNhbmFsfSBmcm9tIFwiLi9jaGF0U2VuZGVyUmVxdWVzdFwiO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGNvbnZlcnNhdGlvbkNvbXBvbmVudCA9IG5ldyBDb252ZXJzYXRpb25Db21wb25lbnQoKTtcclxuICAgIC8vIGxvcnNxdSdvbiBjaG9pc2kgdW4gY2FuYWxcclxuICAgICQodGhpcykub24oJ2NsaWNrJywgJy5jaGF0LWNob29zZS1jYW5hbCcsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBjb25zdCBjYW5hbCA9IEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KCQodGhpcykuYXR0cignZGF0YS1jYW5hbCcpKSk7XHJcbiAgICAgICAgaWYoJCgnLmNoYXQtY2FuYWwtaW5zdGFuY2VbZGF0YS1pZD1cIicrY2FuYWwuaWQrJ1wiXScpLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgICAgIHNob3dNZXNzYWdlSW5zdGFuY2UoY2FuYWwpLnRoZW4oZnVuY3Rpb24oKXt9KTtcclxuICAgICAgICAgICAgLy8gb24gZW52b2llIHVuIHZ1IHNldWxlbWVudCBzaSBsZSBjYW5hbCBlbiBxdWVzdGluIG4nZXN0IHBhcyBlbmNvcmUgdnVcclxuICAgICAgICAgICAgaWYoJCgnW2RhdGEtY2FuYWwtbWVudS1pZD1cIicrY2FuYWwuaWQrJ1wiXScpLmZpbmQoJy5jaGF0LW5vdC1zZWVuJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgc2VlQ2FuYWwoY2FuYWwuaWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB1cGRhdGVNZW51KGNhbmFsKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsICcuY2hhdC1jYW5hbC1pbnN0YW5jZScsYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZigkKHRoaXMpLmZpbmQoJy5oaWdobGlnaHQtY2FuYWwnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbkNvbXBvbmVudC5yZW1vdmVIaWdobGlnaHQodGhpcyk7XHJcbiAgICAgICAgICAgIGF3YWl0IHNlZUNhbmFsKCQodGhpcykuYXR0cignZGF0YS1pZCcpKTtcclxuICAgICAgICAgICAgY29uc3QgbWVudUl0ZW0gPSAkKCcubGlzdC1ncm91cC1pdGVtJylcclxuICAgICAgICAgICAgbWVudUl0ZW0ucmVtb3ZlQ2xhc3MoJ2JnLWdyZXktMScpXHJcbiAgICAgICAgICAgIG1lbnVJdGVtLmZpbmQoJy5jaGF0LW5vdC1zZWVuJykucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSk7IiwiaW1wb3J0IHtnZXRHcm91cGVDYW5hbCwgZ2V0U2luZ2xlQ2FuYWx9IGZyb20gXCIuL2NoYXRTZW5kZXJSZXF1ZXN0XCI7XHJcbmltcG9ydCB7bG9hZGVyT2ZmLCBsb2FkZXJPbn0gZnJvbSBcIi4uL2hlbHBlcnMvTG9hZGVyXCI7XHJcbmltcG9ydCB7TWVudUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL01lbnVDb21wb25lbnQnXHJcbmltcG9ydCB7TW9kYWx9IGZyb20gJ2Jvb3RzdHJhcCdcclxuaW1wb3J0IHtDYW5hbEdyb3Vwc0NvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9DYW5hbEdyb3Vwc0NvbXBvbmVudFwiO1xyXG5cclxuJCggYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnN0IGNoYXRTaW5nbGVDYW5hbCA9ICQoJy5jaGF0LXNpbmdsZS1jYW5hbCcpO1xyXG4gICAgICBjb25zdCBjaGF0R3JvdXBDYW5hbCA9ICQoJy5jaGF0LWdyb3VwZS1jYW5hbCcpO1xyXG4gICAgICBjb25zdCBtZW51Q29tcG9uZW50ID0gbmV3IE1lbnVDb21wb25lbnQoKTtcclxuICAgICAgLy8gY2hhcmdlciBsZXMgY2FuYWxzXHJcbiAgICAgIGxvYWRlck9uKGNoYXRTaW5nbGVDYW5hbFswXSwgdHJ1ZSk7XHJcbiAgICAgIGdldFNpbmdsZUNhbmFsKCkudGhlbihmdW5jdGlvbihzaW5nbGVDYW5hbHMpIHtcclxuICAgICAgICAgICAgY2hhdFNpbmdsZUNhbmFsLmh0bWwobWVudUNvbXBvbmVudC5nZXRTaW5nbGVDYW5hbChzaW5nbGVDYW5hbHMpKTtcclxuICAgICAgICAgICAgbG9hZGVyT2ZmKGNoYXRTaW5nbGVDYW5hbFswXSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gY2hhcmdlciBsZXMgZ3JvdXBlcyBjYW5hbHNcclxuICAgICAgbG9hZGVyT24oY2hhdEdyb3VwQ2FuYWxbMF0sIHRydWUpO1xyXG4gICAgICBnZXRHcm91cGVDYW5hbCgpLnRoZW4oZnVuY3Rpb24oZ3JvdXBlQ2FuYWxzKSB7XHJcbiAgICAgICAgICAgIGNoYXRHcm91cENhbmFsLmh0bWwobWVudUNvbXBvbmVudC5nZXRHcm91cHNDYW5hbChncm91cGVDYW5hbHMpKVxyXG4gICAgICAgICAgICBsb2FkZXJPZmYoY2hhdEdyb3VwQ2FuYWxbMF0pO1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgJCh0aGlzKS5vbignaW5wdXQnLCcuY2hhdC1tZW51LXNlYXJjaCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2hfdmFsdWUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0Q2FuYWwgPSAkKCcuY2hhdC1jaG9vc2UtY2FuYWwnKVxyXG4gICAgICAgICAgICBpZihzZWFyY2hfdmFsdWUubGVuZ3RoPjApIHtcclxuICAgICAgICAgICAgICAgICAgbGlzdENhbmFsLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZC1ub25lJylcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgbGlzdENhbmFsLmZpbHRlcihmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhX3NlYXJjaCA9ICQodGhpcykuYXR0cignZGF0YS1zZWFyY2gnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBkYXRhX3NlYXJjaC50b0xvd2VyQ2FzZSgpLm1hdGNoKHNlYXJjaF92YWx1ZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobWF0Y2ggPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaC5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgfSkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIGxpc3RDYW5hbC5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgIH0pXHJcbiAgICAgICQodGhpcykub24oJ2NsaWNrJywnLmNoYXQtYWRkLXVzZXJzJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbmFsR3JvdXBDb21wb25lbnQgPSBuZXcgQ2FuYWxHcm91cHNDb21wb25lbnQoKTtcclxuICAgICAgICAgICAgJCgnYm9keScpLmFwcGVuZChjYW5hbEdyb3VwQ29tcG9uZW50LmdldE1vZGFsQWRkVXNlcigkKHRoaXMpLmF0dHIoJ2RhdGEtY2FuYWwtaWQnKSkpO1xyXG4gICAgICAgICAgICBjb25zdCBtb2RhbEFkZFVzZXIgPSBuZXcgTW9kYWwoJCgnI2NoYXRNb2RhbEFkZFVzZXJzJykpO1xyXG4gICAgICAgICAgICBtb2RhbEFkZFVzZXIuc2hvdygpXHJcbiAgICAgIH0pXHJcblxyXG59KTtcclxuXHJcblxyXG4iLCJpbXBvcnQge2xvYWRlck9mZiwgbG9hZGVyT259IGZyb20gXCIuLi9oZWxwZXJzL0xvYWRlclwiO1xyXG5pbXBvcnQge2ZpbmREZXN0aW5hdGFpcmUsIGdldE1lc3NhZ2VCeUNvZGV9IGZyb20gXCIuL2NoYXRTZW5kZXJSZXF1ZXN0XCI7XHJcbmltcG9ydCB7TmV3Q29udmVyc2F0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL05ld0NvbnZlcnNhdGlvbkNvbXBvbmVudFwiO1xyXG5pbXBvcnQge3Nob3dNZXNzYWdlSW5zdGFuY2V9IGZyb20gXCIuL2hlbHBlcnMvY2hhdF9oZWxwZXJzXCI7XHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgbmV3Q29udmVyc2F0aW9uQ29tcG9uZW50ID0gbmV3IE5ld0NvbnZlcnNhdGlvbkNvbXBvbmVudCgpO1xyXG4gICAgLy8gbm91dmVhdSBtZXNzYWdlXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsICcuY2hhdC1idG4tbmV3T25lJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzaG93TWVzc2FnZUluc3RhbmNlKCkudGhlbihyID0+IHt9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcmVjaGVyY2hlIGQndW4gdXRpbGlzYXRldXIgc3VyIGxhIHNlY3Rpb24gbm91dmVhdSBtZXNzYWdlXHJcbiAgICAkKHRoaXMpLm9uKCdpbnB1dCcsJyNzZWFyY2gtdXNlcicsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgYm9keU1lc3NhZ2UgPSAkKCcuY2hhdC1mbG9hdC1uZXdPbmU+LmNhcmQtYm9keScpXHJcbiAgICAgICAgbG9hZGVyT24oYm9keU1lc3NhZ2VbMF0pO1xyXG4gICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgZmluZERlc3RpbmF0YWlyZSgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IG5ld0NvbnZlcnNhdGlvbkNvbXBvbmVudC5nZXRMaXN0VXNlcih1c2Vycyk7XHJcbiAgICAgICAgYm9keU1lc3NhZ2UuaHRtbCh0ZW1wbGF0ZSk7XHJcbiAgICAgICAgbG9hZGVyT2ZmKGJvZHlNZXNzYWdlWzBdKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNob2l4IGQndW4gdXRpbGlzYXRldXIgcG91ciBvdXZyaXIgdW5lIGNvbm5leGlvblxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCAnLmNoYXQtY2hvb3NlLXVzZXInLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGJvZHlNZXNzYWdlID0gJCgnLmNoYXQtZmxvYXQtbmV3T25lPi5jYXJkLWJvZHknKVxyXG4gICAgICAgIGNvbnN0IHN1YkhlYWRlciA9ICQoJy5jaGF0LWZsb2F0LW5ld09uZT4uY2FyZC1zdWItaGVhZGVyJylcclxuICAgICAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQoJCh0aGlzKS5hdHRyKCdkYXRhLXVzZXInKSkpXHJcbiAgICAgICAgYm9keU1lc3NhZ2UuaHRtbCgnJyk7XHJcbiAgICAgICAgc3ViSGVhZGVyLmh0bWwobmV3Q29udmVyc2F0aW9uQ29tcG9uZW50LmdldEhlYWRlcih1c2VyKSlcclxuICAgICAgICBsb2FkZXJPbihib2R5TWVzc2FnZVswXSk7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZXMgPSBhd2FpdCBnZXRNZXNzYWdlQnlDb2RlKHVzZXIuY2hhdENvZGUpO1xyXG4gICAgICAgIC8vIGNoYXJnZXIgbGVzIG1lc3NhZ2VzXHJcbiAgICAgICAgYm9keU1lc3NhZ2UuaHRtbChuZXdDb252ZXJzYXRpb25Db21wb25lbnQuZ2V0TWVzc2FnZXMobWVzc2FnZXMpKTtcclxuXHJcbiAgICAgICAgJCgnLmNoYXQtYnRuLXNlbmQnKS5hdHRyKCdkYXRhLWNvZGUnLCB1c2VyLmNoYXRDb2RlKTtcclxuICAgICAgICBsb2FkZXJPZmYoYm9keU1lc3NhZ2VbMF0pXHJcbiAgICB9KVxyXG5cclxufSk7IiwiZXhwb3J0IGNsYXNzIENhbmFsR3JvdXBzQ29tcG9uZW50IHtcclxuICAgIHVzZXJzPVtdO1xyXG4gICAgZ2V0TW9kYWxBZGRVc2VyKGNhbmFsX2lkKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAnPCEtLSBNb2RhbCAtLT5cXG4nICtcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlIHRleHQtc3RhcnQgY2hhdC1tb2RhbC1hZGRVc2VycyBjaGF0LW1vZGFsLWNvbnRhaW5lclwiIGlkPVwiY2hhdE1vZGFsQWRkVXNlcnNcIiBkYXRhLWNhbmFsLWlkPVwiJytjYW5hbF9pZCsnXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPkFqb3V0ZXIgZGVzIG1lbWJyZXMgZGFucyBsZSBncm91cGU8L2g1PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWNsb3NlXCIgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj48L2J1dHRvbj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cXG4nK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3MgYWxlcnQtZW1wdHktbmFtZSBkLW5vbmVcIiByb2xlPVwiYWxlcnRcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgRW5yZWdpc3RyZW1lbnQgZWZmZWN0dcOpXFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPC9kaXY+JytcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhdF91c2VyQmFkZ2VMaXN0IG1iLTJcIj5cXG4nICtcclxuICAgICAgICAgICAgJ1xcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxkaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJleGFtcGxlRm9ybUNvbnRyb2xJbnB1dDFcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5Bam91dGVyIGRlcyBtZW1icmVzPC9sYWJlbD5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgY2hhdFNlYXJjaFVzZXJcIiBpZD1cImNoYXRTZWFyY2hVc2VyXCIgcGxhY2Vob2xkZXI9XCJSZWNoZXJjaGVyIHVuIHV0aWxpc2F0ZXVyXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXRfdXNlcnNMaXN0IG10LTJcIj5cXG4nICtcclxuICAgICAgICAgICAgJ1xcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICdcXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIj5GZXJtZXI8L2J1dHRvbj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGlkPVwiY2hhdC1idG4tYWRkVXNlcnNcIj5FbnJlZ2lzdHJlcjwvYnV0dG9uPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+J1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpc3RVc2VyKHVzZXJzID0gW10pXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gJyc7XHJcbiAgICAgICAgaWYodXNlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgdXNlcnMuZm9yRWFjaChmdW5jdGlvbih1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSB0aGF0LmdldExpc3RVc2VySXRlbSh1c2VyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RW1wdHlMaXN0VXNlck1lc3NhZ2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAnPHVsIGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoIFwiPlxcbicgK1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZSArXHJcbiAgICAgICAgICAgICc8L3VsPic7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGlzdFVzZXJJdGVtKHVzZXIpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgdXNlclN0cmluZ2lmaWVkID0gZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgICAgICBsZXQgY29tcG9uZW50PVxyXG4gICAgICAgICAgICAnPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGNoYXQtc2VsZWN0LXVzZXIgIHBiLTAgcHMtM1wiIGlkPVwiY2hhdC11c2VyLScrdXNlci5pZCsnXCIgZGF0YS11c2VyPVwiJyt1c2VyU3RyaW5naWZpZWQrJ1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9tZG8ucG5nXCIgYWx0PVwiaHVnZW5lcmRcIiB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIiBjbGFzcz1cInJvdW5kZWQtY2lyY2xlXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMCBwcy0yXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgIDxzcGFuPicrdXNlci5ub20rJyAnKyB1c2VyLnByZW5vbSsnPC9zcGFuPjxicj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkIGZzLTEyIGxpbmUtaGVpZ2h0LTEzIHBiLTMgbWItMCBib3JkZXItYm90dG9tXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICcrdXNlci5lbWFpbCtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgPC9wPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICA8L2Rpdj5cXG4nXHJcbiAgICAgICAgJzwvbGk+JztcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbXB0eUxpc3RVc2VyTWVzc2FnZSgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtZXllLWRyb3BwZXItZW1wdHlcIj48L2k+IEF1Y3VuIHLDqXN1bHRhdCAnXHJcbiAgICAgICAgJzwvZGl2Pic7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVzZXJCYWRnZSh1c2VyKVxyXG4gICB7XHJcbiAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiYmFkZ2UgYmctcHJpbWFyeSBtZS0yIGNoYXQtYmFkZ2VVc2VyXCIgZGF0YS11c2VyLWlkPVwiJyt1c2VyLmlkKydcIiBpZD1cImNoYXQtYmFkZ2VVc2VyLScrdXNlci5pZCsnXCI+Jyt1c2VyLm5vbSsnICcrdXNlci5wcmVub20rJyAnICtcclxuICAgICAgICAgICAnPGEgaHJlZj1cIiNcIiBvbmNsaWNrPVwiJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmUoKVwiIGNsYXNzPVwibXMtMiB0ZXh0LXdoaXRlIGJnLWRhbmdlciBweC0xIHJvdW5kZWQgY2hhdC1kZWxldGUtYmFkZ2VVc2VyXCI+PGkgY2xhc3M9XCJmYSBmYS1jbG9zZVwiPjwvaT48L2E+JyArXHJcbiAgICAgICAgICAgJzwvc3Bhbj4nXHJcbiAgIH1cclxuXHJcbiAgIGNsZWFyVXNlckJhZGdlKClcclxuICAge1xyXG4gICAgICAgJCgnLmNoYXQtYmFkZ2VVc2VyJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICAgICB9KTtcclxuICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIENvbnZlcnNhdGlvbkJhc2VDb21wb25lbnQge1xyXG4gICAgZ2V0RW1wdHlNZXNzYWdlcygpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtNCBjaGF0LWVtcHR5LW1lc3NhZ2VcIj4nICtcclxuICAgICAgICAgICAgJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtZXllLWRyb3BwZXItZW1wdHlcIj48L2k+IEF1Y3VuIG1lc3NhZ2UgZGlzcG9uaWJsZTxicj4nICtcclxuICAgICAgICAgICAgJzxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj5FbnZveWVyIHVuIG1lc3NhZ2UgcG91ciBkw6ltYXJyZXIgbGEgZGlzY3Vzc2lvbjwvc21hbGw+JytcclxuICAgICAgICAgICAgJzwvZGl2PidcclxuICAgIH1cclxuXHJcbiAgICBnZXRNZXNzYWdlcyhtZXNzYWdlcylcclxuICAgIHtcclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSAnJztcclxuICAgICAgICBpZihtZXNzYWdlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzLmZvckVhY2goZnVuY3Rpb24obWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gdGhhdC5nZXRNZXNzYWdlKG1lc3NhZ2UpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGVtcGxhdGUgKz0gdGhpcy5nZXRFbXB0eU1lc3NhZ2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnPHVsIGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoIGNoYXQtbGlzdC1ncm91cC1tZXNzYWdlc1wiPlxcbicgK1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZStcclxuICAgICAgICAgICAgJzwvdWw+J1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRNZXNzYWdlKG1lc3NhZ2UpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXJJZCA9IHBhcnNlSW50KCQoJyNjdXJyZW50LXVzZXItaWQnKS50ZXh0KCkpO1xyXG4gICAgICAgIGxldCBpbWdzID0gJyc7XHJcbiAgICAgICAgaWYobWVzc2FnZS5maWxlcyAhPW51bGwgJiYgbWVzc2FnZS5maWxlcy5sZW5ndGg+MCkge1xyXG4gICAgICAgICAgICBtZXNzYWdlLmZpbGVzLmZvckVhY2goZnVuY3Rpb24odXJsKSB7XHJcbiAgICAgICAgICAgICAgIGltZ3MgKz0gJzxkaXYgY2xhc3M9XCJwYi0yIHB0LTIgbXQtMlwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxpbWcgc3JjPVwiJyt1cmwrJ1wiIGFsdD1cImxlIGZpY2hpZXIgbmUgcGV1dCDDqnRyZSBjaGFyZ2VyXCIgY2xhc3M9XCJjaGF0LWltYWdlXCIgLz4nK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYXZhdGFyID0gJy91c2VyL2F2YXRhci8nK21lc3NhZ2UudXNlci5pZDtcclxuICAgICAgICBsZXQgb25lcnJvciA9ICdvbmVycm9yPVwidGhpcy5vbmVycm9yPW51bGw7IHRoaXMuc3JjPVxcJy9hc3NldHMvdnVleHkvaW1hZ2VzL3BvcnRyYWl0L3NtYWxsL2F2YXRhci1zLTExLmpwZ1xcJ1wiJ1xyXG4gICAgICAgIGlmKGN1cnJlbnRVc2VySWQgIT09IG1lc3NhZ2UudXNlci5pZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJzxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSAgcGItMiBwcy0zIHBlLTVcIiBkYXRhLWlkLXVzZXI9XCInK21lc3NhZ2UudXNlci5pZCsnXCI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMiBkLWZsZXhcIj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIicrYXZhdGFyKydcIiAnK29uZXJyb3IrJyBhbHQ9XCJodWdlbmVyZFwiIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIGNsYXNzPVwicm91bmRlZC1jaXJjbGUgbXktYXV0b1wiPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEwIHBzLTIgcm91bmRlZC0zIGJnLWxpZ2h0LWdyYXlcIj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZ3LWJvbGQgbGluZS1oZWlnaHQtMTMgZnMtMTNcIj4nK21lc3NhZ2UudXNlci5ub20rJyAnK21lc3NhZ2UudXNlci5wcmVub20rJzwvc3Bhbj48YnI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLTAgbGluZS1oZWlnaHQtMTMgdGV4dC1tdXRlZCBmcy0xMSBib3JkZXItYm90dG9tIHBiLTJcIj5FbnZveWVyICcrbWVzc2FnZS5yZW5kdURhdGVDcmVhdGlvbk1lc3NhZ2UrJzwvc3Bhbj5cXG4nICtcclxuICAgICAgICAgICAgICAgIGltZ3MrXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCIgZnMtMTQgbGluZS1oZWlnaHQtMTcgbXQtMiBtYi0wIHB0LTIgcGItMiBcIj5cXG4nICtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UudGV4dGVzKydcXG4nK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgIDwvcD5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICA8L2xpPlxcbic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICc8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gcHMtNSAgcGItMiB0ZXh0LWVuZCBcIiBkYXRhLWlkLXVzZXI9XCInK21lc3NhZ2UudXNlci5pZCsnXCI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTAgcHMtMiByb3VuZGVkLTMgYmctbGlnaHQtcHJpbWFyeVwiPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnctYm9sZCBsaW5lLWhlaWdodC0xMyBmcy0xMyBcIj4nK21lc3NhZ2UudXNlci5ub20rJyAnK21lc3NhZ2UudXNlci5wcmVub20rJzwvc3Bhbj48YnI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLTAgbGluZS1oZWlnaHQtMTMgZnMtMTEgICAgYm9yZGVyLWJvdHRvbSBib3JkZXItY29sb3ItbGlnaHQtcHJpbWFyeSBwYi0yXCI+RW52b3llciAnK21lc3NhZ2UucmVuZHVEYXRlQ3JlYXRpb25NZXNzYWdlKyc8L3NwYW4+XFxuJyArXHJcbiAgICAgICAgICAgICAgICBpbWdzK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiIGZzLTE0IGxpbmUtaGVpZ2h0LTE3IG1iLTAgbXQtMiAgcHQtMiBwYi0yIFwiPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZS50ZXh0ZXMrJ1xcbicrXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgPC9wPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTIgZC1mbGV4XCI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCInK2F2YXRhcisnXCIgJytvbmVycm9yKycgYWx0PVwiaHVnZW5lcmRcIiB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiBjbGFzcz1cInJvdW5kZWQtY2lyY2xlIG15LWF1dG9cIj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICA8L2xpPlxcbic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0TWVzc2FnZUZpbGVUZW1wbGF0ZShtZXNzYWdlKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBmaWxlc1RlbXBsYXRlXHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZmlsZXNUZW1wbGF0ZVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyVnUoY29udmVyc2F0aW9uQ29udGFpbmVyKVxyXG4gICAge1xyXG4gICAgICAgICQoY29udmVyc2F0aW9uQ29udGFpbmVyKS5maW5kKCcuY2FuYWwtdnUtY29udGFpbmVyJykucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJGaWxlKGNvbnZlcnNhdGlvbkNvbnRhaW5lcikge1xyXG4gICAgICAgICQoY29udmVyc2F0aW9uQ29udGFpbmVyKS5maW5kKCcuY2hhdC1maWxlcy1wcmV2aWV3JykuaHRtbCgnJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Jhc2U2NH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvYmFzZTY0XCI7XHJcbmltcG9ydCB7Q29udmVyc2F0aW9uQmFzZUNvbXBvbmVudH0gZnJvbSBcIi4vQ29udmVyc2F0aW9uQmFzZUNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnZlcnNhdGlvbkNvbXBvbmVudCBleHRlbmRzIENvbnZlcnNhdGlvbkJhc2VDb21wb25lbnQge1xyXG4gICAgZ2V0Q29udmVyc2F0aW9uQ29udGFpbmVyKGNhbmFsKSB7XHJcbiAgICAgICAgbGV0IGlucHV0Q2FjaGVVc2VyID0gJyc7XHJcbiAgICAgICAgbGV0IG5vbUNhbmFsID0gJyc7XHJcbiAgICAgICAgY29uc3QgY3VycmVudF91c2VyX2lkID0gcGFyc2VJbnQoJCgnI2N1cnJlbnQtdXNlci1pZCcpLnRleHQoKSk7XHJcbiAgICAgICAgY2FuYWwubWVtYnJlcy5mb3JFYWNoKGZ1bmN0aW9uKHVzZXIpe1xyXG4gICAgICAgICAgICBpbnB1dENhY2hlVXNlcis9JzxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInVzZXJzW11cIiB2YWx1ZT1cIicrQmFzZTY0LmVuY29kZSh1c2VyLmlkKSsnXCIgLz5cXG4nO1xyXG4gICAgICAgICAgICBpZighY2FuYWwuaXNHcm91cCAmJiB1c2VyLmlkICE9PSBjdXJyZW50X3VzZXJfaWQpIHtcclxuICAgICAgICAgICAgICAgIG5vbUNhbmFsID0gdXNlci5ub20rJyAnK3VzZXIucHJlbm9tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYoY2FuYWwuaXNHcm91cCkge1xyXG4gICAgICAgICAgICBub21DYW5hbCA9IGNhbmFsLm5vbVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZMOpYnV0IGluaXRpYWxpc2F0aW9uIGR1IHZ1IGxvcnNxdWUgbCdpbnN0YW5jZSBlc3QgY2hhcmfDqVxyXG4gICAgICAgIC8vIHNpIGxlIGNhbmFsIGVzdCB1biBzaW5nbGVDYW5hbFxyXG4gICAgICAgIGxldCB2dVRlbXBsYXRlID0gJyc7XHJcbiAgICAgICAgaWYoIWNhbmFsLmlzR3JvdXAgJiYgY2FuYWwudnVzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICB2dVRlbXBsYXRlID0gdGhpcy5nZXRWdVRlbXBsYXRlKClbMF0ub3V0ZXJIVE1MO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaXNHcm91cCA9IGNhbmFsLmlzR3JvdXAgPyAndHJ1ZSc6ICdmYWxzZSc7XHJcbiAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwiY2FyZCBzaGFkb3cgZnMtMTQgIGNoYXQtY2FuYWwtaW5zdGFuY2UgY2hhdC1ib3gtY29udGFpbmVyIG1iLTAgc2hhZG93LXNtICBcIiBkYXRhLWlzR3JvdXA9XCInK2lzR3JvdXArJ1wiIGRhdGEtaWQ9XCInK2NhbmFsLmlkKydcIiBpZD1cImNhbmFsLScrY2FuYWwuaWQrJ1wiIHN0eWxlPVwid2lkdGg6IDE4cmVtO1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBiZy1wcmluYyB0ZXh0LXdoaXRlIHctMTAwIHB5LTNcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC04IGQtZmxleFwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJteS1hdXRvXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzPVwibXMtMiBcIj4nK25vbUNhbmFsKycgPGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtZmFjZWJvb2stbWVzc2VuZ2VyXCI+PC9pPjwvYj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IHRleHQtZW5kXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtd2hpdGUgY2hhdC1idG4tbWluaW1pc2UgbWUtMlwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtYW5nbGUtZG93blwiPjwvaT48L2E+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtd2hpdGUgY2hhdC1idG4tY2xvc2VcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNsb3NlXCI+PC9pPjwvYT5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJ1xcbicgK1xyXG4gICAgICAgICAgICAnICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgcHgtMFwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8IS0tIHpvbmUgZGUgbWVzc2FnZXMgLS0+IFxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgJyt2dVRlbXBsYXRlKydcXG4nICtcclxuICAgICAgICAgICAgJyAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXIgcC0wXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDxkaXYgY2xhc3M9XCJjaGF0LWZpbGVzLXByZXZpZXdcIj48L2Rpdj4nK1xyXG4gICAgICAgICAgICAnICAgICAgICA8ZGl2IGNsYXNzPVwicHktMyBwcy0yXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidXNlcnNcIj4nICtcclxuICAgICAgICAgICAgaW5wdXRDYWNoZVVzZXIrXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtZGFuZ2VyIHNwZWVkLWxpdmVWaWRlby1jYWxsIHBlLTJcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLXZpZGVvXCI+PC9pPjwvYT4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgPC9zcGFuPiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeSBjaGF0LXVwbG9hZEltYWdlXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1pbWFnZVwiPjwvaT48L2E+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgYmctd2hpdGVcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGJvcmRlci0wIGJvcmRlci10b3AgIGZzLTEyIHJvdW5kZWQtMCBweS0zIGNoYXQtaW5wdXQtdGV4dGVzXCIgcGxhY2Vob2xkZXI9XCJFbnRyZXIgdm90cmUgbWVzc2FnZSAuLi5cIiBhcmlhLWxhYmVsPVwiUmVjaXBpZW50XFwncyB1c2VybmFtZSB3aXRoIHR3byBidXR0b24gYWRkb25zXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSB0ZXh0LXByaW1hcnkgYm9yZGVyLTAgYm9yZGVyLXRvcCBjaGF0LWJ0bi1zZW5kXCIgZGF0YS1jb2RlPVwiJytjYW5hbC5jb2RlKydcIiB0eXBlPVwiYnV0dG9uXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wYXBlci1wbGFuZVwiPjwvaT48L2J1dHRvbj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICdcXG4nICtcclxuICAgICAgICAgICAgJyAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJzwvZGl2PidcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVIaWdobGlnaHQoJGN1cnJlbnRPYmplY3QpXHJcbiAgICB7XHJcbiAgICAgICAgJCgkY3VycmVudE9iamVjdCkuZmluZCgnLmNhcmQtaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2hpZ2hsaWdodC1jYW5hbCAgYmctc3VjY2VzcyB0ZXh0LXdoaXRlJykuYWRkQ2xhc3MoJ2JnLXByaW5jJylcclxuICAgIH1cclxuXHJcbiAgICBhZGRIaWdobGlnaCgkY3VycmVudE9iamVjdClcclxuICAgIHtcclxuICAgICAgICAkKCRjdXJyZW50T2JqZWN0KS5maW5kKCcuY2FyZC1oZWFkZXInKS5hZGRDbGFzcygnaGlnaGxpZ2h0LWNhbmFsIGJnLXN1Y2Nlc3MgdGV4dC13aGl0ZScpLnJlbW92ZUNsYXNzKCdiZy1wcmluYycpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VnVUZW1wbGF0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSAkKCc8ZGl2IC8+Jywge1xyXG4gICAgICAgICAgICBjbGFzczonY2FuYWwtdnUtY29udGFpbmVyIHRleHQtZW5kIHBlLTMnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgdnVUZW1wbGF0ZSA9ICc8c3BhbiBjbGFzcz1cImZzLTExIHRleHQtbXV0ZWRcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWV5ZVwiPjwvaT4gPHNwYW4+dnU8L3NwYW4+PC9zcGFuPidcclxuICAgICAgICB0ZW1wbGF0ZS5odG1sKHZ1VGVtcGxhdGUpO1xyXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRWdShjb252ZXJzYXRpb25Db250YWluZXIpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gc2kgdW4gdnUgZXhpc3RlIGTDqWrDoCBwYXMgbGEgcGVpbmUgZGUgbGUgcmVuZHJlIMOgIG5vdXZlYXVcclxuICAgICAgICBsZXQgY2FuYWxWdUNvbnRhaW5lciA9ICQoY29udmVyc2F0aW9uQ29udGFpbmVyKS5maW5kKCcuY2FuYWwtdnUtY29udGFpbmVyJyk7XHJcbiAgICAgICAgaWYoY2FuYWxWdUNvbnRhaW5lci5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgJChjb252ZXJzYXRpb25Db250YWluZXIpLmZpbmQoJy5jYXJkLWJvZHknKS5hcHBlbmQodGhpcy5nZXRWdVRlbXBsYXRlKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFkZFVzZXJUeXBpbmcoY29udmVyc2F0aW9uQ29udGFpbmVyLCB1c2VyKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHNpIHVuIHRlbXBsYXRlIGV4aXN0ZSBkw6lqw6AgcGFzIGxhIHBlaW5lIGRlIGxlIHJlbmRyZSDDoCBub3V2ZWF1XHJcbiAgICAgICAgbGV0IGNhbmFsVXNlclR5cGluZyA9ICQoY29udmVyc2F0aW9uQ29udGFpbmVyKS5maW5kKCcuY2FuYWwtdXNlclR5cGluZycpO1xyXG4gICAgICAgIGlmKGNhbmFsVXNlclR5cGluZy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgdGVtcGxhdGUgPSAkKCc8ZGl2IC8+Jywge1xyXG4gICAgICAgICAgICAgICAgY2xhc3M6J2NhbmFsLXVzZXJUeXBpbmcgcHktMiBweC0zICB0ZXh0LW11dGVkIGZzLTExIHRleHQtZW5kJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgdnVUZW1wbGF0ZSA9ICc8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj4nK3VzZXIucHJlbm9tKycgJyt1c2VyLm5vbSsnPC9zcGFuPiBlc3QgZW4gdHJhaW4gZFxcJ8OpY3JpcmUuLi4nO1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZS5odG1sKHZ1VGVtcGxhdGUpO1xyXG4gICAgICAgICAgICAkKGNvbnZlcnNhdGlvbkNvbnRhaW5lcikuZmluZCgnLmNhcmQtYm9keScpLmFwcGVuZCh0ZW1wbGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVVzZXJUeXBpbmcoY29udmVyc2F0aW9uQ29udGFpbmVyKSB7XHJcbiAgICAgICAgJChjb252ZXJzYXRpb25Db250YWluZXIpLmZpbmQoJy5jYW5hbC11c2VyVHlwaW5nJykucmVtb3ZlKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgbG9nb0dyb3VwIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvdXNlcnMuanBnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gZGVidXQgbGlzdGUgdXNlciBjb3TDqSBtZW51IGZsb3R0YW50XHJcblxyXG4gICAgIGdldFNpbmdsZUNhbmFsKGNhbmFsc01lc3NhZ2UpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gJyc7XHJcbiAgICAgICAgaWYoY2FuYWxzTWVzc2FnZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoaXNPYmogPSB0aGlzO1xyXG4gICAgICAgICAgICBjYW5hbHNNZXNzYWdlLmZvckVhY2goZnVuY3Rpb24oY2FuYWwpIHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IHRoaXNPYmouZ2V0U2luZ2xlQ2FuYWxJdGVtKGNhbmFsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RW1wdHlTaW5nbGVDYW5hbE1lc3NhZ2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAnPHVsIGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoIFwiPlxcbicgK1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZSArXHJcbiAgICAgICAgICAgICc8L3VsPic7XHJcbiAgICB9XHJcblxyXG4gICBnZXRTaW5nbGVDYW5hbEl0ZW0oY2FuYWxNZXNzYWdlKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGNhbmFsU3RyaW5naWZ5ID0gZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNhbmFsTWVzc2FnZSkpO1xyXG4gICAgICAgIGNvbnN0IGxhc3RNZXNzYWdlID0gY2FuYWxNZXNzYWdlLmxhc3RNZXNzYWdlID8gY2FuYWxNZXNzYWdlLmxhc3RNZXNzYWdlLnRleHRlcy5zbGljZSgwLCA4MCkgOiAnQ29tbWVuY2VyIHZvdHJlIHByZW1pw6hyZSBjb252ZXJzYXRpb24uLi4nO1xyXG4gICAgICAgIGNvbnN0IHNlZW5DbGFzcyA9ICFjYW5hbE1lc3NhZ2UuaXNTZWVuID8gJ2JnLWdyZXktMSc6Jyc7XHJcbiAgICAgICAgY29uc3QgZXllU2xhc2hTZWN0aW9uID0gIWNhbmFsTWVzc2FnZS5pc1NlZW4gP1xyXG4gICAgICAgICAgICAnIDxkaXYgY2xhc3M9XCJjb2wtMiB0ZXh0LWRhbmdlciBjaGF0LW5vdC1zZWVuXCI+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtZXllLXNsYXNoXCI+PC9pPicrXHJcbiAgICAgICAgICAgICcgPC9kaXY+JyA6ICcnO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRfdXNlcl9pZCA9IHBhcnNlSW50KCQoJyNjdXJyZW50LXVzZXItaWQnKS50ZXh0KCkpO1xyXG4gICAgICAgIGNvbnN0IG1lbWJyZXMgPSBjYW5hbE1lc3NhZ2UubWVtYnJlcztcclxuICAgICAgICBsZXQgYXZhdGFyID0gJy91c2VyL2F2YXRhci8nO1xyXG4gICAgICAgIGxldCBub21DYW5hbCA9ICcnO1xyXG4gICAgICAgIG1lbWJyZXMuZm9yRWFjaChmdW5jdGlvbih1c2VyKXtcclxuICAgICAgICAgICBpZih1c2VyLmlkICE9PSBjdXJyZW50X3VzZXJfaWQpIHtcclxuICAgICAgICAgICAgICAgYXZhdGFyICs9IHVzZXIuaWQ7XHJcbiAgICAgICAgICAgICAgIG5vbUNhbmFsID0gdXNlci5ub20rJyAnK3VzZXIucHJlbm9tO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBsYXN0TWVzc2FnZUNsYXNzID0gIWNhbmFsTWVzc2FnZS5pc1NlZW4/ICdjb2wtNycgOiAnY29sLTknO1xyXG4gICAgICAgIGxldCBvbmVycm9yID0gJ29uZXJyb3I9XCJ0aGlzLm9uZXJyb3I9bnVsbDsgdGhpcy5zcmM9XFwnL2Fzc2V0cy92dWV4eS9pbWFnZXMvcG9ydHJhaXQvc21hbGwvYXZhdGFyLXMtMTEuanBnXFwnXCInXHJcbiAgICAgICAgbGV0IGNvbXBvbmVudD1cclxuICAgICAgICAgICAgJzxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBjaGF0LWNob29zZS1jYW5hbCAnK3NlZW5DbGFzcysnIHBiLTAgcHMtM1wiIGRhdGEtY2FuYWwtbWVudS1pZD1cIicrY2FuYWxNZXNzYWdlLmlkKydcIiBkYXRhLWNhbmFsPVwiJytjYW5hbFN0cmluZ2lmeSsnXCIgZGF0YS1zZWFyY2g9XCInK2NhbmFsTWVzc2FnZS5ub20rJ1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICA8aW1nIHNyYz1cIicrYXZhdGFyKydcIiAnK29uZXJyb3IrJyBhbHQ9XCJodWdlbmVyZFwiIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIGNsYXNzPVwicm91bmRlZC1jaXJjbGVcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICA8ZGl2IGNsYXNzPVwiJytsYXN0TWVzc2FnZUNsYXNzKycgcHMtMlwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICA8c3Bhbj4nK25vbUNhbmFsKyc8L3NwYW4+PGJyPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWQgZnMtMTIgbGluZS1oZWlnaHQtMTMgcGItMyBtYi0wIGJvcmRlci1ib3R0b21cIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgJytsYXN0TWVzc2FnZStcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgPC9wPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGV5ZVNsYXNoU2VjdGlvbitcclxuICAgICAgICAgICAgJyAgICAgPC9kaXY+XFxuJ1xyXG4gICAgICAgICAgICAnPC9saT4nO1xyXG5cclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVtcHR5U2luZ2xlQ2FuYWxNZXNzYWdlKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LW11dGVkXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWV5ZS1kcm9wcGVyLWVtcHR5XCI+PC9pPiBBdWN1bmUgY29udmVyc2F0aW9uIGRpc3BvbmlibGUgJ1xyXG4gICAgICAgICc8L2Rpdj4nO1xyXG4gICAgfVxyXG5cclxuICAgLy8gIGRlYnV0IGxpc3RlIGdyb3VwZSBjYW5hbCBjb3TDqSBtZW51XHJcbiAgICBnZXRHcm91cHNDYW5hbChjYW5hbHNNZXNzYWdlKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9ICcnO1xyXG4gICAgICAgIGlmKGNhbmFsc01lc3NhZ2UubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCB0aGlzT2JqID0gdGhpc1xyXG4gICAgICAgICAgICBjYW5hbHNNZXNzYWdlLmZvckVhY2goZnVuY3Rpb24oY2FuYWwpIHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IHRoaXNPYmouZ2V0R3JvdXBzQ2FuYWxJdGVtKGNhbmFsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RW1wdHlHcm91cHNDYW5hbE1lc3NhZ2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAnPHVsIGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoIGNoYXQtbGlzdC1ncm91cENhbmFsIHB4LTBcIj5cXG4nICtcclxuICAgICAgICAgICAgdGVtcGxhdGUgK1xyXG4gICAgICAgICAgICAnPC91bD4nO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEdyb3Vwc0NhbmFsSXRlbShjYW5hbE1lc3NhZ2UpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGxhc3RNZXNzYWdlID0gY2FuYWxNZXNzYWdlLmxhc3RNZXNzYWdlICE9IG51bGwgPyBjYW5hbE1lc3NhZ2UubGFzdE1lc3NhZ2UudGV4dGVzLnNsaWNlKDAsIDgwKSA6ICdFbnZveWVyIHZvdHJlIHByZW1pZXIgbWVzc2FnZSc7XHJcbiAgICAgICAgY29uc3QgY2FuYWxTdHJpbmdpZnkgPSBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY2FuYWxNZXNzYWdlKSk7XHJcbiAgICAgICAgcmV0dXJuICc8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gY2hhdC1jaG9vc2UtY2FuYWwgIHBiLTAgcHMtM1wiIGRhdGEtY2FuYWw9XCInICsgY2FuYWxTdHJpbmdpZnkgKyAnXCIgZGF0YS1zZWFyY2g9XCInICsgY2FuYWxNZXNzYWdlLm5vbSArICdcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgPGltZyBzcmM9XCInICsgbG9nb0dyb3VwICsgJ1wiIGFsdD1cImh1Z2VuZXJkXCIgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZVwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOSBwcy0yIGJvcmRlci1ib3R0b21cIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgPHNwYW4+JyArIGNhbmFsTWVzc2FnZS5ub20gKyAnPC9zcGFuPjxicj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkIGZzLTEyIGxpbmUtaGVpZ2h0LTEzIHBiLTMgbWItMCBcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgJyArIGxhc3RNZXNzYWdlICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgPC9wPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWVuZCBwYi0zIGNoYXQtZ3JvdXBlLWFjdGlvblwiPiBcXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiY2hhdC1hZGQtdXNlcnMgdGV4dC1zdWNjZXNzXCIgZGF0YS1jYW5hbC1pZD1cIicrY2FuYWxNZXNzYWdlLmlkKydcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLXVzZXItcGx1c1wiPjwvaT48L2E+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImNoYXQtcmVtb3ZlLXVzZXIgdGV4dC1kYW5nZXIgbXMtMlwiIGRhdGEtY2FuYWwtaWQ9XCInK2NhbmFsTWVzc2FnZS5pZCsnXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1yaWdodC1mcm9tLWJyYWNrZXRcIj48L2k+PC9hPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgIDwvZGl2PicrXHJcbiAgICAgICAgICAgICcgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnPC9saT4nO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVtcHR5R3JvdXBzQ2FuYWxNZXNzYWdlKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LW11dGVkIHB5LTRcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtZXllLWRyb3BwZXItZW1wdHlcIj48L2k+IEF1Y3VuIGdyb3VwZSAgJ1xyXG4gICAgICAgICc8L2Rpdj4nO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtCYXNlNjR9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2Jhc2U2NFwiO1xyXG5pbXBvcnQge0NvbnZlcnNhdGlvbkJhc2VDb21wb25lbnR9IGZyb20gXCIuL0NvbnZlcnNhdGlvbkJhc2VDb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdDb252ZXJzYXRpb25Db21wb25lbnQgZXh0ZW5kcyBDb252ZXJzYXRpb25CYXNlQ29tcG9uZW50e1xyXG4gICAgZ2V0SGVhZGVyKHVzZXIpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwibXQtMyBtcy0yXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPHNwYW4gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGZ3LWJvbGQgYnRuLXNtIHBvc2l0aW9uLXJlbGF0aXZlXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAnK3VzZXIubm9tKycgJyt1c2VyLnByZW5vbSsnXFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPHNwYW4gY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtMCBzdGFydC0xMDAgdHJhbnNsYXRlLW1pZGRsZSBwLTIgYmctZGFuZ2VyIGJvcmRlciBib3JkZXItbGlnaHQgcm91bmRlZC1jaXJjbGVcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPk5ldyBhbGVydHM8L3NwYW4+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgPC9zcGFuPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgIDwvc3Bhbj5cXG4nK1xyXG4gICAgICAgICAgICAnPC9kaXY+J1xyXG4gICAgfVxyXG4gICAgZ2V0Q29udmVyc2F0aW9uQ29udGFpbmVyKCkge1xyXG4gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cImNhcmQgc2hhZG93IGZzLTE0ICBjaGF0LWZsb2F0LW5ld09uZSBjaGF0LWJveC1jb250YWluZXIgbWItMCBzaGFkb3ctc21cIiBzdHlsZT1cIndpZHRoOiAxOHJlbTtcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgYmctcHJpbmMgdy0xMDAgcHktM1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTggZC1mbGV4XCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm15LWF1dG9cIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3M9XCJtcy0yIFwiPk5vdXZlYXUgTWVzc2FnZSA8aSBjbGFzcz1cImZhLWJyYW5kcyBmYS1mYWNlYm9vay1tZXNzZW5nZXJcIj48L2k+PC9iPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgdGV4dC1lbmRcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC13aGl0ZSBjaGF0LWJ0bi1taW5pbWlzZSBtZS0yXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1hbmdsZS1kb3duXCI+PC9pPjwvYT5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC13aGl0ZSBjaGF0LWJ0bi1jbG9zZVwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2xvc2VcIj48L2k+PC9hPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cImNhcmQtc3ViLWhlYWRlclwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sICByb3VuZGVkLTAgYm9yZGVyLTAgYm9yZGVyLWJvdHRvbSBweS0zIGZzLTEyXCIgaWQ9XCJzZWFyY2gtdXNlclwiIHBsYWNlaG9sZGVyPVwiRW50cmVyIGxlIG5vbS9lLW1haWwgZHUgZGVzdGluYXRhaXJlXCIgYXJpYS1sYWJlbD1cIlJlY2lwaWVudFxcJ3MgdXNlcm5hbWUgd2l0aCB0d28gYnV0dG9uIGFkZG9uc1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHB4LTBcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPCEtLSB6b25lIGRlIG1lc3NhZ2VzIC0tPiBcXG4nICtcclxuICAgICAgICAgICAgJ1xcbicgK1xyXG4gICAgICAgICAgICAnICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlciBwLTBcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPGRpdiBjbGFzcz1cInB5LTMgcHMtMlwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPCEtLSA8YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC1kYW5nZXIgcGUtMlwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtdmlkZW9cIj48L2k+PC9hPiAtLT5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDwhLS0gPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtc2Vjb25kYXJ5XCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1pbWFnZVwiPjwvaT48L2E+IC0tPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIGJnLXdoaXRlXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBib3JkZXItMCBib3JkZXItdG9wICBmcy0xMiByb3VuZGVkLTAgcHktMyBjaGF0LWlucHV0LXRleHRlc1wiIHBsYWNlaG9sZGVyPVwiRW50cmVyIHZvdHJlIG1lc3NhZ2UgLi4uXCIgYXJpYS1sYWJlbD1cIlJlY2lwaWVudFxcJ3MgdXNlcm5hbWUgd2l0aCB0d28gYnV0dG9uIGFkZG9uc1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgdGV4dC1wcmltYXJ5IGJvcmRlci0wIGJvcmRlci10b3AgY2hhdC1idG4tc2VuZFwiIHR5cGU9XCJidXR0b25cIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBhcGVyLXBsYW5lXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJ1xcbicgK1xyXG4gICAgICAgICAgICAnICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+J1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpc3RVc2VyKHVzZXJzID0gW10pXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gJyc7XHJcbiAgICAgICAgaWYodXNlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgdXNlcnMuZm9yRWFjaChmdW5jdGlvbih1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSB0aGF0LmdldExpc3RVc2VySXRlbSh1c2VyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RW1wdHlMaXN0VXNlck1lc3NhZ2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAnPHVsIGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoIFwiPlxcbicgK1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZSArXHJcbiAgICAgICAgICAgICc8L3VsPic7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGlzdFVzZXJJdGVtKHVzZXIpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgdXNlclN0cmluZ2lmaWVkID0gZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgICAgICBsZXQgY29tcG9uZW50PVxyXG4gICAgICAgICAgICAnPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGNoYXQtY2hvb3NlLXVzZXIgIHBiLTAgcHMtM1wiIGlkPVwiY2hhdC11c2VyLScrdXNlci5pZCsnXCIgZGF0YS11c2VyPVwiJyt1c2VyU3RyaW5naWZpZWQrJ1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9tZG8ucG5nXCIgYWx0PVwiaHVnZW5lcmRcIiB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIiBjbGFzcz1cInJvdW5kZWQtY2lyY2xlXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC05IHBzLTJcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgPHNwYW4+Jyt1c2VyLm5vbSsnICcrIHVzZXIucHJlbm9tKyc8L3NwYW4+PGJyPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWQgZnMtMTIgbGluZS1oZWlnaHQtMTMgcGItMyBtYi0wIGJvcmRlci1ib3R0b21cIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgJyt1c2VyLmVtYWlsK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICA8L3A+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgIDwvZGl2PlxcbidcclxuICAgICAgICAnPC9saT4nO1xyXG5cclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVtcHR5TGlzdFVzZXJNZXNzYWdlKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1leWUtZHJvcHBlci1lbXB0eVwiPjwvaT4gQXVjdW4gcsOpc3VsdGF0ICdcclxuICAgICAgICAnPC9kaXY+JztcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge0NvbnZlcnNhdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udmVyc2F0aW9uQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7bG9hZGVyT2ZmLCBsb2FkZXJPbn0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvTG9hZGVyXCI7XHJcbmltcG9ydCB7Z2V0R3JvdXBlQ2FuYWwsIGdldE1lc3NhZ2VCeUNvZGUsIGdldFNpbmdsZUNhbmFsfSBmcm9tIFwiLi4vY2hhdFNlbmRlclJlcXVlc3RcIjtcclxuaW1wb3J0IHtNZW51Q29tcG9uZW50fSBmcm9tIFwiLi4vY29tcG9uZW50cy9NZW51Q29tcG9uZW50XCI7XHJcbmltcG9ydCB7TmV3Q29udmVyc2F0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi4vY29tcG9uZW50cy9OZXdDb252ZXJzYXRpb25Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaG93TWVzc2FnZUluc3RhbmNlKGNhbmFsPW51bGwpXHJcbntcclxuICAgIGNvbnN0IGNvbnZlcnNhdGlvbkNvbXBvbmVudCA9IGNhbmFsICE9bnVsbCA/IG5ldyBDb252ZXJzYXRpb25Db21wb25lbnQoKSA6IG5ldyBOZXdDb252ZXJzYXRpb25Db21wb25lbnQoKTtcclxuICAgIGNvbnN0IGNoYXRCb3hDb250YWluZXIgPSAkKCcuY2hhdC1ib3gtY29udGFpbmVyJyk7XHJcbiAgICBpZihjaGF0Qm94Q29udGFpbmVyLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgIGNoYXRCb3hDb250YWluZXIuZmlyc3QoKS5yZW1vdmUoKVxyXG4gICAgfVxyXG4gICAgbGV0IG1lc3NhZ2VDb252ZXJzYXRpb25Db250YWluZXIgPSAkKCcuY2hhdC1jb252ZXJzYXRpb25zLWNvbnRhaW5lcicpXHJcbiAgICBpZihtZXNzYWdlQ29udmVyc2F0aW9uQ29udGFpbmVyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICBtZXNzYWdlQ29udmVyc2F0aW9uQ29udGFpbmVyID0gJCgnPGRpdiAvPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6ICdjaGF0LWNvbnZlcnNhdGlvbnMtY29udGFpbmVyIGQtZmxleCdcclxuICAgICAgICB9KTtcclxuICAgICAgICAgJCgnYm9keScpLmFwcGVuZChtZXNzYWdlQ29udmVyc2F0aW9uQ29udGFpbmVyKVxyXG4gICAgfVxyXG5cclxuICAgICQobWVzc2FnZUNvbnZlcnNhdGlvbkNvbnRhaW5lcikuYXBwZW5kKGNvbnZlcnNhdGlvbkNvbXBvbmVudC5nZXRDb252ZXJzYXRpb25Db250YWluZXIoY2FuYWwpKTtcclxuICAgIGlmKGNhbmFsICE9IG51bGwpIHtcclxuICAgICAgICBjb25zdCBjaGF0X2luc3RhbmNlID0gJCgnI2NhbmFsLScrY2FuYWwuaWQpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRfaW5zdGFuY2VfYm9keSA9ICQoY2hhdF9pbnN0YW5jZSkuZmluZCgnLmNhcmQtYm9keScpO1xyXG4gICAgICAgIGxvYWRlck9uKGNoYXRfaW5zdGFuY2VfYm9keVswXSk7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZXMgPSBhd2FpdCBnZXRNZXNzYWdlQnlDb2RlKGNhbmFsLmNvZGUpO1xyXG4gICAgICAgIC8vIGNoYXJnZXIgbGVzIG1lc3NhZ2VzXHJcbiAgICAgICAgY2hhdF9pbnN0YW5jZV9ib2R5LnByZXBlbmQoY29udmVyc2F0aW9uQ29tcG9uZW50LmdldE1lc3NhZ2VzKG1lc3NhZ2VzKSk7XHJcbiAgICAgICAgY2hhdF9pbnN0YW5jZV9ib2R5WzBdLnNjcm9sbFRvcCA9IGNoYXRfaW5zdGFuY2VfYm9keVswXS5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgbG9hZGVyT2ZmKGNoYXRfaW5zdGFuY2VfYm9keVswXSk7XHJcbiAgICAgICAgcmV0dXJuIGNoYXRfaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVNZW51KGNhbmFsKVxyXG57XHJcbiAgICBjb25zdCBtZW51Q29tcG9uZW50ID0gbmV3IE1lbnVDb21wb25lbnQoKTtcclxuICAgIGlmKGNhbmFsLmlzR3JvdXApIHtcclxuICAgICAgICBnZXRHcm91cGVDYW5hbCgpLnRoZW4oZnVuY3Rpb24oZ3JvdXBlQ2FuYWxzKSB7XHJcbiAgICAgICAgICAgICQoJy5jaGF0LWdyb3VwZS1jYW5hbCcpLmh0bWwobWVudUNvbXBvbmVudC5nZXRHcm91cHNDYW5hbChncm91cGVDYW5hbHMpKVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGdldFNpbmdsZUNhbmFsKCkudGhlbihmdW5jdGlvbihzaW5nbGVDYW5hbHMpIHtcclxuICAgICAgICAgICAgJCgnLmNoYXQtc2luZ2xlLWNhbmFsJykuaHRtbChtZW51Q29tcG9uZW50LmdldFNpbmdsZUNhbmFsKHNpbmdsZUNhbmFscykpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgY2lyY2xlSW1hZ2UgZnJvbSAnLi4vLi4vaW1hZ2VzL1ByZWxvYWRlci1pbWFnZS0xLnN2ZydcclxuaW1wb3J0IGNpcmNsZUltYWdlMiBmcm9tICcuLi8uLi9pbWFnZXMvV2ViLVByZWxvYWRlci0xLnN2ZydcclxuaW1wb3J0IGNpcmNsZUltYWdlMyBmcm9tICcuLi8uLi9pbWFnZXMvMy1MZWctUHJlbG9hZGVyLnN2ZydcclxuZnVuY3Rpb24gbG9hZGVyKG9wdGlvbnM9e1xyXG4gICAgJ2VsZW1lbnRDaWJsZScgOiB1bmRlZmluZWQsXHJcbiAgICAnY2xhc3NOYW1lJyA6ICcnLFxyXG4gICAgJ2RpcmVjdGl2ZScgOiAnT04nLFxyXG4gICAgJ3JlbGF0aXZlJyA6ICdPRkYnLFxyXG4gICAgJ2xvYWRlcldpZHRoJyA6IG51bGwsXHJcbiAgICAnbG9hZGVySGVpZ2h0JyA6IG51bGwsXHJcbiAgICAnYmFja2Ryb3AtY29sb3InIDogbnVsbFxyXG59KVxyXG57XHJcbiAgICBpZihvcHRpb25zLmVsZW1lbnRDaWJsZSAhPT0gdW5kZWZpbmVkIClcclxuICAgIHtcclxuICAgICAgICBpZiggb3B0aW9ucy5kaXJlY3RpdmUgPT09ICdPTicgJiYgJChvcHRpb25zLmVsZW1lbnRDaWJsZSkuZmluZCgnLmxvYWRlci1jb250YWluZXInKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBvcHRpb25zLnJlbGF0aXZlID09PSAnT0ZGJyA/ICdwb3NpdGlvbi1zdGlja3knIDogJ3Bvc2l0aW9uLXJlbGF0aXZlJztcclxuICAgICAgICAgICAgY29uc3QgYmFja2Ryb3BfY29sb3IgPSBvcHRpb25zW1wiYmFja2Ryb3AtY29sb3JcIl0hPW51bGwgPyAnYmFja2dyb3VuZDonK29wdGlvbnNbJ2JhY2tkcm9wLWNvbG9yJ10gOiAnJztcclxuICAgICAgICAgICAgY29uc3QgbG9hZGVyQ29udGFpbmVyID0gJCgnPGRpdiAvPicsIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnbG9hZGVyLWNvbnRhaW5lcicsXHJcbiAgICAgICAgICAgICAgICBjbGFzczogJ2xvYWRlci1jb250YWluZXIgJytwb3NpdGlvbisnIGJvdHRvbS0wIGxlZnQtMCB3LTEwMCBoLTEwMCBiZy13aGl0ZSBvdmVyZmxvdy1oaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IGJhY2tkcm9wX2NvbG9yXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBsb2FkZXJQb3N0Q29udGFpbmVyID0gJCgnPGRpdiAvPicsIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzOidsb2FkZXItcG9zdC1jb250YWluZXIgdy0xMDAgaC0xMDAgZC1mbGV4J1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2VXaWR0aCA9IG9wdGlvbnMubG9hZGVyV2lkdGggIT0gbnVsbCA/ICc7d2lkdGg6JytvcHRpb25zLmxvYWRlcldpZHRoIDogJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlSGVpZ2h0ID0gb3B0aW9ucy5sb2FkZXJIZWlnaHQgIT0gbnVsbCA/ICdoZWlnaHQ6JytvcHRpb25zLmxvYWRlckhlaWdodCA6ICcnO1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9ICQoJzxpbWcgLz4nLCB7XHJcbiAgICAgICAgICAgICAgICBzcmM6IGNpcmNsZUltYWdlMyxcclxuICAgICAgICAgICAgICAgIGNsYXNzOiAnbS1hdXRvJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiBpbWFnZUhlaWdodCtpbWFnZVdpZHRoXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsb2FkZXJQb3N0Q29udGFpbmVyLmFwcGVuZChpbWFnZSk7XHJcbiAgICAgICAgICAgIGxvYWRlckNvbnRhaW5lci5hcHBlbmQobG9hZGVyUG9zdENvbnRhaW5lcilcclxuICAgICAgICAgICAgJChvcHRpb25zLmVsZW1lbnRDaWJsZSkuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3Bvc2l0aW9uLXJlbGF0aXZlJylcclxuICAgICAgICAgICAgICAgICQodGhpcykuYXBwZW5kKGxvYWRlckNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIGlmKG9wdGlvbnMuZGlyZWN0aXZlID09PSAnT0ZGJykge1xyXG4gICAgICAgICAgICAkKG9wdGlvbnMuZWxlbWVudENpYmxlKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKFwiLmxvYWRlci1jb250YWluZXJcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZGVyT24oJGVsZW1lbnQsICRyZWxhdGl2ZT1mYWxzZSwgJHN0eWxlc09wdGlvbnMgPSB7XHJcbiAgICAnbG9hZGVyV2lkdGgnIDogbnVsbCxcclxuICAgICdsb2FkZXJIZWlnaHQnIDogbnVsbCxcclxuICAgICdiYWNrZHJvcC1jb2xvcic6IG51bGxcclxufSlcclxue1xyXG4gIGxvYWRlcih7XHJcbiAgICAgICdlbGVtZW50Q2libGUnIDogJGVsZW1lbnQsXHJcbiAgICAgICdkaXJlY3RpdmUnIDogJ09OJyxcclxuICAgICAgJ3JlbGF0aXZlJzogJHJlbGF0aXZlID8gJ09OJyA6ICdPRkYnLFxyXG4gICAgICAnbG9hZGVyV2lkdGgnIDogJHN0eWxlc09wdGlvbnMubG9hZGVyV2lkdGgsXHJcbiAgICAgICdsb2FkZXJIZWlnaHQnIDogJHN0eWxlc09wdGlvbnMubG9hZGVySGVpZ2h0LFxyXG4gICAgICAnYmFja2Ryb3AtY29sb3InIDogJHN0eWxlc09wdGlvbnNbXCJiYWNrZHJvcC1jb2xvclwiXVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkZXJPZmYoJGVsZW1lbnQpXHJcbntcclxuICAgIGxvYWRlcih7XHJcbiAgICAgICAgJ2VsZW1lbnRDaWJsZScgOiAkZWxlbWVudCxcclxuICAgICAgICAnZGlyZWN0aXZlJyA6ICdPRkYnXHJcbiAgICB9KVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBCYXNlNjQgPSB7XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBwcm9wZXJ0eVxyXG4gICAgX2tleVN0ciA6IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIixcclxuXHJcbiAgICAvLyBwdWJsaWMgbWV0aG9kIGZvciBlbmNvZGluZ1xyXG4gICAgZW5jb2RlIDogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IFwiXCI7XHJcbiAgICAgICAgdmFyIGNocjEsIGNocjIsIGNocjMsIGVuYzEsIGVuYzIsIGVuYzMsIGVuYzQ7XHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG5cclxuICAgICAgICBpbnB1dCA9IEJhc2U2NC5fdXRmOF9lbmNvZGUoaW5wdXQudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgICAgICBjaHIxID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xyXG4gICAgICAgICAgICBjaHIyID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xyXG4gICAgICAgICAgICBjaHIzID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xyXG5cclxuICAgICAgICAgICAgZW5jMSA9IGNocjEgPj4gMjtcclxuICAgICAgICAgICAgZW5jMiA9ICgoY2hyMSAmIDMpIDw8IDQpIHwgKGNocjIgPj4gNCk7XHJcbiAgICAgICAgICAgIGVuYzMgPSAoKGNocjIgJiAxNSkgPDwgMikgfCAoY2hyMyA+PiA2KTtcclxuICAgICAgICAgICAgZW5jNCA9IGNocjMgJiA2MztcclxuXHJcbiAgICAgICAgICAgIGlmIChpc05hTihjaHIyKSkge1xyXG4gICAgICAgICAgICAgICAgZW5jMyA9IGVuYzQgPSA2NDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc05hTihjaHIzKSkge1xyXG4gICAgICAgICAgICAgICAgZW5jNCA9IDY0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgK1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmMxKSArIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jMikgK1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmMzKSArIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jNCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gcHVibGljIG1ldGhvZCBmb3IgZGVjb2RpbmdcclxuICAgIGRlY29kZSA6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBcIlwiO1xyXG4gICAgICAgIHZhciBjaHIxLCBjaHIyLCBjaHIzO1xyXG4gICAgICAgIHZhciBlbmMxLCBlbmMyLCBlbmMzLCBlbmM0O1xyXG4gICAgICAgIHZhciBpID0gMDtcclxuXHJcbiAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXkEtWmEtejAtOVxcK1xcL1xcPV0vZywgXCJcIik7XHJcblxyXG4gICAgICAgIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgICAgICBlbmMxID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xyXG4gICAgICAgICAgICBlbmMyID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xyXG4gICAgICAgICAgICBlbmMzID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xyXG4gICAgICAgICAgICBlbmM0ID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xyXG5cclxuICAgICAgICAgICAgY2hyMSA9IChlbmMxIDw8IDIpIHwgKGVuYzIgPj4gNCk7XHJcbiAgICAgICAgICAgIGNocjIgPSAoKGVuYzIgJiAxNSkgPDwgNCkgfCAoZW5jMyA+PiAyKTtcclxuICAgICAgICAgICAgY2hyMyA9ICgoZW5jMyAmIDMpIDw8IDYpIHwgZW5jNDtcclxuXHJcbiAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZW5jMyAhPSA2NCkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZW5jNCAhPSA2NCkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG91dHB1dCA9IEJhc2U2NC5fdXRmOF9kZWNvZGUob3V0cHV0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHByaXZhdGUgbWV0aG9kIGZvciBVVEYtOCBlbmNvZGluZ1xyXG4gICAgX3V0ZjhfZW5jb2RlIDogZnVuY3Rpb24gKHN0cmluZykge1xyXG4gICAgICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXHJcXG4vZyxcIlxcblwiKTtcclxuICAgICAgICB2YXIgdXRmdGV4dCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgc3RyaW5nLmxlbmd0aDsgbisrKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgYyA9IHN0cmluZy5jaGFyQ29kZUF0KG4pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGMgPCAxMjgpIHtcclxuICAgICAgICAgICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKChjID4gMTI3KSAmJiAoYyA8IDIwNDgpKSB7XHJcbiAgICAgICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPj4gNikgfCAxOTIpO1xyXG4gICAgICAgICAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjICYgNjMpIHwgMTI4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyA+PiAxMikgfCAyMjQpO1xyXG4gICAgICAgICAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyA+PiA2KSAmIDYzKSB8IDEyOCk7XHJcbiAgICAgICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiA2MykgfCAxMjgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHV0ZnRleHQ7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHByaXZhdGUgbWV0aG9kIGZvciBVVEYtOCBkZWNvZGluZ1xyXG4gICAgX3V0ZjhfZGVjb2RlIDogZnVuY3Rpb24gKHV0ZnRleHQpIHtcclxuICAgICAgICB2YXIgc3RyaW5nID0gXCJcIjtcclxuICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgdmFyIGMgPSBjMSA9IGMyID0gMDtcclxuXHJcbiAgICAgICAgd2hpbGUgKCBpIDwgdXRmdGV4dC5sZW5ndGggKSB7XHJcblxyXG4gICAgICAgICAgICBjID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGMgPCAxMjgpIHtcclxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xyXG4gICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoKGMgPiAxOTEpICYmIChjIDwgMjI0KSkge1xyXG4gICAgICAgICAgICAgICAgYzIgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSsxKTtcclxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyAmIDMxKSA8PCA2KSB8IChjMiAmIDYzKSk7XHJcbiAgICAgICAgICAgICAgICBpICs9IDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjMiA9IHV0ZnRleHQuY2hhckNvZGVBdChpKzEpO1xyXG4gICAgICAgICAgICAgICAgYzMgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSsyKTtcclxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyAmIDE1KSA8PCAxMikgfCAoKGMyICYgNjMpIDw8IDYpIHwgKGMzICYgNjMpKTtcclxuICAgICAgICAgICAgICAgIGkgKz0gMztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG59IiwiLyoqXHJcbiAqIGZvbmN0aW9uIHBvdXIgbGEgcHLDqXZpc3VhbGlzYXRpb24gZCdpbWFnZVxyXG4gKlxyXG4gKiBAcGFyYW0gaW5wdXRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWFkVVJMKGlucHV0LCBjaWJsZSkge1xyXG4gICAgaWYgKGlucHV0LmZpbGVzICYmIGlucHV0LmZpbGVzWzBdKSB7XHJcbiAgICAgICAgaWYgKGlzSW1hZ2UoaW5wdXQpKSB7XHJcbiAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gZS50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BsaXQxID0gcmVzLnNwbGl0KFwiO1wiKVswXTtcclxuICAgICAgICAgICAgICAgIGlmKHNwbGl0MS5pbmNsdWRlcyhcImltYWdlXCIpKXtcclxuICAgICAgICAgICAgICAgICAgICAkKGNpYmxlKS5hdHRyKCdzcmMnLCBlLnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChpbnB1dC5maWxlc1swXSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGlzSW1hZ2UoJGZpbGUpIHtcclxuICAgIGlmICgkZmlsZS5maWxlcyAmJiAkZmlsZS5maWxlc1swXSAmJiAkZmlsZS5maWxlc1swXS5uYW1lLm1hdGNoKC9cXC4oanBnfGpwZWd8cG5nfGdpZnxibXB8aWNvKSQvKSApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iXSwibmFtZXMiOlsibG9hZGVyT2ZmIiwibG9hZGVyT24iLCJub3RpZnlVc2VyU3RvcFR5cGluZyIsIm5vdGlmeVVzZXJUeXBpbmciLCJzZW5kTWVzc2FnZSIsInVwbG9hZEZpbGUiLCJDb252ZXJzYXRpb25CYXNlQ29tcG9uZW50IiwidXBkYXRlTWVudSIsInJlYWRVUkwiLCJyZXF1aXJlIiwiJCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2hhdENvbnRhaW5lciIsImNsb3Nlc3QiLCJib2R5TWVzc2FnZSIsImZpbmQiLCJpbnB1dFRleHQiLCJlbXB0eU1lc3NhZ2UiLCJjb252ZXJzYXRpb25CYXNlQ29tcG9uZW50IiwiY29kZSIsImF0dHIiLCJmaWxlcyIsImVhY2giLCJwdXNoIiwidmFsIiwicmVtb3ZlIiwibWVzc2FnZVZhbHVlIiwibGVuZ3RoIiwibWVzc2FnZSIsImNsZWFyVnUiLCJjbGVhckZpbGUiLCJhcHBlbmQiLCJnZXRNZXNzYWdlIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiY2FuYWwiLCJzdG9wUHJvcGFnYXRpb24iLCJpbnB1dEZpbGUiLCJ0eXBlIiwidHJpZ2dlciIsImNvbnRhaW5lckltZyIsImltZyIsImh0bWwiLCJmaWxlTmFtZSIsImNvbnRhaW5lciIsImZpbGVOYW1lSW5wdXQiLCJuYW1lIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNhbmFsX2lkIiwiY2hhdF9ncm91cENhbmFsX2FkZFVzZXIiLCJjaGF0X2dyb3VwQ2FuYWxfcmVtb3ZlVXNlciIsImNyZWF0ZUdyb3VwQ2FuYWwiLCJmaW5kRGVzdGluYXRhaXJlIiwiQ2FuYWxHcm91cHNDb21wb25lbnQiLCJNZW51Q29tcG9uZW50IiwiTW9kYWwiLCJjYW5hbHNDb21wb25lbnQiLCJib3hDcmVhdGlvbkNvbnRhaW5lciIsInNlYXJjaFZhbHVlIiwiZGl2Q2hhdF91c2Vyc0xpc3QiLCJ1c2VycyIsImdldExpc3RVc2VyIiwidXNlciIsIkpTT04iLCJwYXJzZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNoYXRfdXNlckJhZGdlTGlzdCIsImlkIiwidXNlckJhZGdlIiwiaW5wdXROb20iLCJub20iLCJhbGVydEVycm9yIiwidXNlcnNfaWQiLCJnZXRVc2VySWRzQnlCYWRnZSIsImNhbmFsTWVzc2FnZSIsImVycm9yIiwibWVudUNvbXBvbmVudCIsImdyb3VwSW5zdGFuY2UiLCJnZXRHcm91cHNDYW5hbEl0ZW0iLCJtb2RhbF9jb250YWluZXIiLCJzZXRUaW1lb3V0IiwiQ29udmVyc2F0aW9uQ29tcG9uZW50Iiwic2hvd01lc3NhZ2VJbnN0YW5jZSIsImNoYXRfbmV3TWVzc2FnZV90b3BpYyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXh0Q29udGVudCIsImNoYXRfdnVfdG9waWMiLCJjaGF0X3VzZXJUeXBpbmdfdG9waWMiLCJjaGF0X3VzZXJTdG9wVHlwaW5nX3RvcGljIiwiZXZlbnROZXdNZXNzYWdlIiwiRXZlbnRTb3VyY2UiLCJldmVudFZ1IiwiZXZlbnRVc2VyVHlwaW5nIiwiZXZlbnRVc2VyU3RvcFR5cGluZyIsImNvbnZlcnNhdGlvbkNvbXBvbmVudCIsIm9ubWVzc2FnZSIsImV2ZW50IiwiZGF0YSIsImpDYW5hbCIsImFkZEhpZ2hsaWdoIiwiZGVybmllck1lc3NhZ2VJdGVtIiwibGFzdCIsImlkVXNlckVudm95ZXVyIiwicGFyc2VJbnQiLCJ2dVBhciIsImFkZFZ1IiwiYWRkVXNlclR5cGluZyIsInVzZXJUeXBpbmciLCJyZW1vdmVVc2VyVHlwaW5nIiwiYXhpb3MiLCJmaW5kZXIiLCJnZXQiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJnZXRNZXNzYWdlQnlDb2RlIiwiYm9keVJlcXVlc3QiLCJVUkxTZWFyY2hQYXJhbXMiLCJmb3JFYWNoIiwicG9zdCIsImdldFNpbmdsZUNhbmFsIiwiZ2V0R3JvdXBlQ2FuYWwiLCJzZWVDYW5hbCIsImluY2x1ZGVNZSIsImZpbGVVcGxvYWQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiaGVhZGVycyIsInJlc3BvbnNlIiwiZmlsZVVybCIsInRoZW4iLCJyZW1vdmVIaWdobGlnaHQiLCJtZW51SXRlbSIsImNoYXRTaW5nbGVDYW5hbCIsImNoYXRHcm91cENhbmFsIiwic2luZ2xlQ2FuYWxzIiwiZ3JvdXBlQ2FuYWxzIiwiZ2V0R3JvdXBzQ2FuYWwiLCJzZWFyY2hfdmFsdWUiLCJsaXN0Q2FuYWwiLCJmaWx0ZXIiLCJkYXRhX3NlYXJjaCIsIm1hdGNoIiwidG9Mb3dlckNhc2UiLCJjYW5hbEdyb3VwQ29tcG9uZW50IiwiZ2V0TW9kYWxBZGRVc2VyIiwibW9kYWxBZGRVc2VyIiwic2hvdyIsIk5ld0NvbnZlcnNhdGlvbkNvbXBvbmVudCIsIm5ld0NvbnZlcnNhdGlvbkNvbXBvbmVudCIsInIiLCJ0ZW1wbGF0ZSIsInN1YkhlYWRlciIsImdldEhlYWRlciIsImNoYXRDb2RlIiwibWVzc2FnZXMiLCJnZXRNZXNzYWdlcyIsInRoYXQiLCJnZXRMaXN0VXNlckl0ZW0iLCJnZXRFbXB0eUxpc3RVc2VyTWVzc2FnZSIsInVzZXJTdHJpbmdpZmllZCIsImVuY29kZVVSSUNvbXBvbmVudCIsInN0cmluZ2lmeSIsImNvbXBvbmVudCIsInByZW5vbSIsImVtYWlsIiwiZ2V0RW1wdHlNZXNzYWdlcyIsImN1cnJlbnRVc2VySWQiLCJ0ZXh0IiwiaW1ncyIsInVybCIsImF2YXRhciIsIm9uZXJyb3IiLCJyZW5kdURhdGVDcmVhdGlvbk1lc3NhZ2UiLCJ0ZXh0ZXMiLCJmaWxlc1RlbXBsYXRlIiwiY29udmVyc2F0aW9uQ29udGFpbmVyIiwiQmFzZTY0IiwiaW5wdXRDYWNoZVVzZXIiLCJub21DYW5hbCIsImN1cnJlbnRfdXNlcl9pZCIsIm1lbWJyZXMiLCJlbmNvZGUiLCJpc0dyb3VwIiwidnVUZW1wbGF0ZSIsInZ1cyIsImdldFZ1VGVtcGxhdGUiLCJvdXRlckhUTUwiLCIkY3VycmVudE9iamVjdCIsImNhbmFsVnVDb250YWluZXIiLCJjYW5hbFVzZXJUeXBpbmciLCJsb2dvR3JvdXAiLCJjYW5hbHNNZXNzYWdlIiwidGhpc09iaiIsImdldFNpbmdsZUNhbmFsSXRlbSIsImdldEVtcHR5U2luZ2xlQ2FuYWxNZXNzYWdlIiwiY2FuYWxTdHJpbmdpZnkiLCJsYXN0TWVzc2FnZSIsInNsaWNlIiwic2VlbkNsYXNzIiwiaXNTZWVuIiwiZXllU2xhc2hTZWN0aW9uIiwibGFzdE1lc3NhZ2VDbGFzcyIsImdldEVtcHR5R3JvdXBzQ2FuYWxNZXNzYWdlIiwiY2hhdEJveENvbnRhaW5lciIsImZpcnN0IiwibWVzc2FnZUNvbnZlcnNhdGlvbkNvbnRhaW5lciIsImdldENvbnZlcnNhdGlvbkNvbnRhaW5lciIsImNoYXRfaW5zdGFuY2UiLCJjaGF0X2luc3RhbmNlX2JvZHkiLCJwcmVwZW5kIiwiY2lyY2xlSW1hZ2UiLCJjaXJjbGVJbWFnZTIiLCJjaXJjbGVJbWFnZTMiLCJsb2FkZXIiLCJvcHRpb25zIiwidW5kZWZpbmVkIiwiZWxlbWVudENpYmxlIiwiZGlyZWN0aXZlIiwicG9zaXRpb24iLCJyZWxhdGl2ZSIsImJhY2tkcm9wX2NvbG9yIiwibG9hZGVyQ29udGFpbmVyIiwic3R5bGUiLCJsb2FkZXJQb3N0Q29udGFpbmVyIiwiaW1hZ2VXaWR0aCIsImxvYWRlcldpZHRoIiwiaW1hZ2VIZWlnaHQiLCJsb2FkZXJIZWlnaHQiLCJpbWFnZSIsInNyYyIsIiRlbGVtZW50IiwiJHJlbGF0aXZlIiwiJHN0eWxlc09wdGlvbnMiLCJfa2V5U3RyIiwiaW5wdXQiLCJvdXRwdXQiLCJjaHIxIiwiY2hyMiIsImNocjMiLCJlbmMxIiwiZW5jMiIsImVuYzMiLCJlbmM0IiwiaSIsIl91dGY4X2VuY29kZSIsInRvU3RyaW5nIiwiY2hhckNvZGVBdCIsImlzTmFOIiwiY2hhckF0IiwiZGVjb2RlIiwicmVwbGFjZSIsImluZGV4T2YiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJfdXRmOF9kZWNvZGUiLCJzdHJpbmciLCJ1dGZ0ZXh0IiwibiIsImMiLCJjMSIsImMyIiwiYzMiLCJjaWJsZSIsImlzSW1hZ2UiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicmVzIiwidGFyZ2V0IiwicmVzdWx0Iiwic3BsaXQxIiwic3BsaXQiLCJpbmNsdWRlcyIsInJlYWRBc0RhdGFVUkwiLCIkZmlsZSJdLCJzb3VyY2VSb290IjoiIn0=