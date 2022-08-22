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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGF0L2NoYXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXQvY2hhdEdyb3VwQ2FuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXQvY2hhdE1lcmN1cmVUcmFpdGVtZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGF0L2NoYXRTZW5kZXJSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGF0L2NoYXRfY2FuYWxfaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXQvY2hhdF9tZW51LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGF0L2NoYXRfbmV3X29uZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hhdC9jb21wb25lbnRzL0NhbmFsR3JvdXBzQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGF0L2NvbXBvbmVudHMvQ29udmVyc2F0aW9uQmFzZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hhdC9jb21wb25lbnRzL0NvbnZlcnNhdGlvbkNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hhdC9jb21wb25lbnRzL01lbnVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXQvY29tcG9uZW50cy9OZXdDb252ZXJzYXRpb25Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXQvaGVscGVycy9jaGF0X2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hlbHBlcnMvTG9hZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9oZWxwZXJzL2Jhc2U2NC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaGVscGVycy9pbnB1dEZpbGVQcmV2aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bG9hZGVyT2ZmLCBsb2FkZXJPbn0gZnJvbSBcIi4uL2hlbHBlcnMvTG9hZGVyXCI7XHJcbmltcG9ydCB7bm90aWZ5VXNlclN0b3BUeXBpbmcsIG5vdGlmeVVzZXJUeXBpbmcsIHNlbmRNZXNzYWdlLCB1cGxvYWRGaWxlfSBmcm9tIFwiLi9jaGF0U2VuZGVyUmVxdWVzdFwiO1xyXG5pbXBvcnQge0NvbnZlcnNhdGlvbkJhc2VDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvQ29udmVyc2F0aW9uQmFzZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQge3VwZGF0ZU1lbnV9IGZyb20gXCIuL2hlbHBlcnMvY2hhdF9oZWxwZXJzXCI7XHJcbmltcG9ydCB7cmVhZFVSTH0gZnJvbSBcIi4uL2hlbHBlcnMvaW5wdXRGaWxlUHJldmlld1wiO1xyXG5yZXF1aXJlKCcuL2NoYXRfbmV3X29uZScpXHJcbnJlcXVpcmUoJy4vY2hhdF9tZW51JylcclxucmVxdWlyZSgnLi9jaGF0TWVyY3VyZVRyYWl0ZW1lbnQnKVxyXG5yZXF1aXJlKCcuL2NoYXRfY2FuYWxfaW5zdGFuY2UnKVxyXG5yZXF1aXJlKCcuL2NoYXRHcm91cENhbmFsJylcclxuJChmdW5jdGlvbigpIHtcclxuICAgIC8vIGVudm95ZXIgdW4gbWVzc2FnZVxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCAnLmNoYXQtYnRuLXNlbmQnLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRDb250YWluZXIgPSAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LWJveC1jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBib2R5TWVzc2FnZSA9IGNoYXRDb250YWluZXIuZmluZCgnLmNhcmQtYm9keScpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0VGV4dCA9IGNoYXRDb250YWluZXIuZmluZCgnLmNoYXQtaW5wdXQtdGV4dGVzJyk7XHJcbiAgICAgICAgY29uc3QgZW1wdHlNZXNzYWdlID0gY2hhdENvbnRhaW5lci5maW5kKCcuY2hhdC1lbXB0eS1tZXNzYWdlJyk7XHJcbiAgICAgICAgY29uc3QgY29udmVyc2F0aW9uQmFzZUNvbXBvbmVudCA9IG5ldyBDb252ZXJzYXRpb25CYXNlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgLy8gc29pdCBvbiBhIGxlIGNhbmFsLCBzb2l0IG9uIGEgbGUgY29kZVxyXG4gICAgICAgIGNvbnN0IGNvZGUgID0gJCh0aGlzKS5hdHRyKCdkYXRhLWNvZGUnKTtcclxuICAgICAgICBsZXQgZmlsZXMgPSBbXTtcclxuICAgICAgICBjaGF0Q29udGFpbmVyLmZpbmQoJ2lucHV0W25hbWU9XCJmaWxlc1tdXCJdJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBmaWxlcy5wdXNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VWYWx1ZSA9IGlucHV0VGV4dC52YWwoKTtcclxuICAgICAgICBpZihtZXNzYWdlVmFsdWUubGVuZ3RoID4gMCB8fCBmaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxvYWRlck9uKGJvZHlNZXNzYWdlWzBdKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHNlbmRNZXNzYWdlKG1lc3NhZ2VWYWx1ZSxjb2RlLCBmaWxlcylcclxuICAgICAgICAgICAgY29udmVyc2F0aW9uQmFzZUNvbXBvbmVudC5jbGVhclZ1KGJvZHlNZXNzYWdlKTtcclxuICAgICAgICAgICAgY29udmVyc2F0aW9uQmFzZUNvbXBvbmVudC5jbGVhckZpbGUoY2hhdENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGNoYXRDb250YWluZXIuZmluZCgnLmNoYXQtbGlzdC1ncm91cC1tZXNzYWdlcycpLmFwcGVuZChjb252ZXJzYXRpb25CYXNlQ29tcG9uZW50LmdldE1lc3NhZ2UobWVzc2FnZSkpXHJcbiAgICAgICAgICAgIGlucHV0VGV4dC52YWwoJycpO1xyXG4gICAgICAgICAgICBib2R5TWVzc2FnZVswXS5zY3JvbGxUb3AgPSBib2R5TWVzc2FnZVswXS5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgICAgIGxvYWRlck9mZihib2R5TWVzc2FnZVswXSk7XHJcbiAgICAgICAgICAgIGlmKGVtcHR5TWVzc2FnZS5sZW5ndGg+MCkge1xyXG4gICAgICAgICAgICAgICAgZW1wdHlNZXNzYWdlLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF3YWl0IHVwZGF0ZU1lbnUobWVzc2FnZS5jYW5hbClcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYWN0aXZlciBsZSBjb21wb3J0ZW1lbnQgcGFyIGTDqWZhdWx0IGRlIGwnaW5wdXRGaWxlXHJcbiAgICAvLyBjb21wb3J0ZW1lbnQgcGFyIGTDqWZhdXQgYXJyw6l0ZXIgZXQgcXVpIGVzdCBjYXVzw6kgcGFyIGwnw6l2w6huZW1lbnQgY2xpY2sgZHUgcGFyZW50XHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsICdpbnB1dFt0eXBlPVwiZmlsZVwiXScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHVwbG9hZCBmaWxlXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsJy5jaGF0LXVwbG9hZEltYWdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBpbnB1dEZpbGUgPSAkKCc8aW5wdXQgLz4nLCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdmaWxlJyxcclxuICAgICAgICAgICAgY2xhc3M6J2Qtbm9uZSdcclxuICAgICAgICB9KVxyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmNoYXQtYm94LWNvbnRhaW5lcicpLmZpbmQoJy5jaGF0LWZpbGVzLXByZXZpZXcnKS5hcHBlbmQoaW5wdXRGaWxlKTtcclxuXHJcbiAgICAgICAgaW5wdXRGaWxlLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblxyXG4gICAgfSlcclxuXHJcbiAgICAkKHRoaXMpLm9uKCdjaGFuZ2UnLCcuY2hhdC1ib3gtY29udGFpbmVyIGlucHV0W3R5cGU9XCJmaWxlXCJdJyxhc3luYyBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVySW1nID0gJCgnPGRpdiAvPicpO1xyXG4gICAgICAgIGNvbnN0IGltZyA9ICQoJzxpbWcgLz4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOidjaGF0LWZpbGUtaXRlbSdcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb250YWluZXJJbWcuaHRtbChpbWcpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmNoYXQtYm94LWNvbnRhaW5lcicpLmZpbmQoJy5jaGF0LWZpbGVzLXByZXZpZXcnKS5hcHBlbmQoY29udGFpbmVySW1nKTtcclxuICAgICAgICByZWFkVVJMKCQodGhpcylbMF0sIGltZ1swXSk7XHJcbiAgICAgICAgbG9hZGVyT24oY29udGFpbmVySW1nWzBdLCBmYWxzZSwge1xyXG4gICAgICAgICAgICAnbG9hZGVyV2lkdGgnIDogJzQwcHgnLFxyXG4gICAgICAgICAgICAnbG9hZGVySGVpZ2h0JyA6ICc0MHB4JyxcclxuICAgICAgICAgICAgJ2JhY2tkcm9wLWNvbG9yJzogJ3JnYmEoMjU1LDI1NSwyNTUsMC41KSAhaW1wb3J0YW50J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGZpbGVOYW1lID0gYXdhaXQgdXBsb2FkRmlsZSgkKHRoaXMpWzBdKTtcclxuICAgICAgICBsb2FkZXJPZmYoY29udGFpbmVySW1nWzBdKTtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LWJveC1jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBmaWxlTmFtZUlucHV0ID0gJCgnPGlucHV0IC8+Jywge1xyXG4gICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgbmFtZTogJ2ZpbGVzW10nLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZpbGVOYW1lSW5wdXQudmFsKGZpbGVOYW1lKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGZpbGVOYW1lSW5wdXQpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvLyBzdXBwcmltZXIgbGUgY29udGVuZXVyIGR1IG1lc3NhZ2VcclxuICAgICQodGhpcykub24oJ2NsaWNrJywnLmNoYXQtYnRuLWNsb3NlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LWJveC1jb250YWluZXInKS5yZW1vdmUoKTtcclxuICAgIH0pXHJcblxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCcuY2hhdC1idG4tbWluaW1pc2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmNoYXQtYm94LWNvbnRhaW5lciwuY2hhdC1mbG9hdC1tZW51JykuYWRkQ2xhc3MoJ2NoYXQtbWluaW1pc2VkJyk7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCdpJykucmVtb3ZlQ2xhc3MoJ2ZhLWFuZ2xlLWRvd24nKS5hZGRDbGFzcygnZmEtYW5nbGUtdXAnKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjaGF0LWJ0bi1tYXhpbWlzZScpLnJlbW92ZUNsYXNzKCdjaGF0LWJ0bi1taW5pbWlzZScpO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsJy5jaGF0LWJ0bi1tYXhpbWlzZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuY2hhdC1ib3gtY29udGFpbmVyLC5jaGF0LWZsb2F0LW1lbnUnKS5yZW1vdmVDbGFzcygnY2hhdC1taW5pbWlzZWQnKTtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJ2knKS5yZW1vdmVDbGFzcygnZmEtYW5nbGUtdXAnKS5hZGRDbGFzcygnZmEtYW5nbGUtZG93bicpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2NoYXQtYnRuLW1pbmltaXNlJykucmVtb3ZlQ2xhc3MoJ2NoYXQtYnRuLW1heGltaXNlJyk7XHJcbiAgICB9KVxyXG5cclxuICAgICQodGhpcykub24oJ2ZvY3VzJywgJy5jaGF0LWlucHV0LXRleHRlcycsYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBjYW5hbF9pZCA9ICQodGhpcykuY2xvc2VzdCgnLmNoYXQtYm94LWNvbnRhaW5lcicpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAgICAgICBhd2FpdCBub3RpZnlVc2VyVHlwaW5nKGNhbmFsX2lkKVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCh0aGlzKS5vbignZm9jdXNvdXQnLCcuY2hhdC1pbnB1dC10ZXh0ZXMnLGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgY2FuYWxfaWQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LWJveC1jb250YWluZXInKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgYXdhaXQgbm90aWZ5VXNlclN0b3BUeXBpbmcoY2FuYWxfaWQpXHJcbiAgICB9KVxyXG59KTtcclxuIiwiaW1wb3J0IHtcclxuICAgIGNoYXRfZ3JvdXBDYW5hbF9hZGRVc2VyLFxyXG4gICAgY2hhdF9ncm91cENhbmFsX3JlbW92ZVVzZXIsXHJcbiAgICBjcmVhdGVHcm91cENhbmFsLFxyXG4gICAgZmluZERlc3RpbmF0YWlyZVxyXG59IGZyb20gXCIuL2NoYXRTZW5kZXJSZXF1ZXN0XCI7XHJcbmltcG9ydCB7bG9hZGVyT2ZmLCBsb2FkZXJPbn0gZnJvbSBcIi4uL2hlbHBlcnMvTG9hZGVyXCI7XHJcbmltcG9ydCB7Q2FuYWxHcm91cHNDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvQ2FuYWxHcm91cHNDb21wb25lbnRcIjtcclxuaW1wb3J0IHtNZW51Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL01lbnVDb21wb25lbnRcIjtcclxuaW1wb3J0IHtNb2RhbH0gZnJvbSAnYm9vdHN0cmFwJ1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGNhbmFsc0NvbXBvbmVudCA9IG5ldyBDYW5hbEdyb3Vwc0NvbXBvbmVudCgpXHJcbiAgICAkKHRoaXMpLm9uKCdpbnB1dCcsJy5jaGF0U2VhcmNoVXNlcicsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgYm94Q3JlYXRpb25Db250YWluZXIgPSAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LW1vZGFsLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBjb25zdCBkaXZDaGF0X3VzZXJzTGlzdCA9IGJveENyZWF0aW9uQ29udGFpbmVyLmZpbmQoJy5jaGF0X3VzZXJzTGlzdCcpO1xyXG4gICAgICAgIGlmKHNlYXJjaFZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZGl2Q2hhdF91c2Vyc0xpc3QuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgIGxvYWRlck9uKGRpdkNoYXRfdXNlcnNMaXN0WzBdLCAnT04nKTtcclxuICAgICAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBmaW5kRGVzdGluYXRhaXJlKHNlYXJjaFZhbHVlKTtcclxuICAgICAgICAgICAgZGl2Q2hhdF91c2Vyc0xpc3QuaHRtbChjYW5hbHNDb21wb25lbnQuZ2V0TGlzdFVzZXIodXNlcnMpKVxyXG4gICAgICAgICAgICBsb2FkZXJPZmYoZGl2Q2hhdF91c2Vyc0xpc3RbMF0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpdkNoYXRfdXNlcnNMaXN0Lmh0bWwoJycpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsJy5jaGF0LXNlbGVjdC11c2VyJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQoJCh0aGlzKS5hdHRyKCdkYXRhLXVzZXInKSkpXHJcbiAgICAgICAgY29uc3QgY2hhdF91c2VyQmFkZ2VMaXN0ID0gJCgnLmNoYXRfdXNlckJhZGdlTGlzdCcpO1xyXG4gICAgICAgIGlmKCQoJyNjaGF0LWJhZGdlVXNlci0nK3VzZXIuaWQpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjaGF0X3VzZXJCYWRnZUxpc3QuYXBwZW5kKGNhbmFsc0NvbXBvbmVudC51c2VyQmFkZ2UodXNlcikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsJyNjaGF0LWJ0bi1jcmVhdGVDYW5hbCcsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgaW5wdXROb20gPSAkKCcjY2hhdF9pbnB1dENhbmFsTmFtZScpO1xyXG4gICAgICAgIGNvbnN0IG5vbSA9IGlucHV0Tm9tLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IGFsZXJ0RXJyb3IgPSAkKCcuYWxlcnQtZW1wdHktbmFtZScpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJzX2lkID0gZ2V0VXNlcklkc0J5QmFkZ2UoJCh0aGlzKS5jbG9zZXN0KCcuY2hhdC1tb2RhbC1jb250YWluZXInKSk7XHJcblxyXG4gICAgICAgIGlmKG5vbS5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICBhbGVydEVycm9yLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2FuYWxNZXNzYWdlID0gYXdhaXQgY3JlYXRlR3JvdXBDYW5hbChub20sIHVzZXJzX2lkKTtcclxuICAgICAgICBpZihjYW5hbE1lc3NhZ2UuZXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnRFcnJvci5yZW1vdmVDbGFzcygnZC1ub25lJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgIGNvbnN0IG1lbnVDb21wb25lbnQgPSBuZXcgTWVudUNvbXBvbmVudCgpO1xyXG4gICAgICAgICAgIGNvbnN0IGdyb3VwSW5zdGFuY2UgPSBtZW51Q29tcG9uZW50LmdldEdyb3Vwc0NhbmFsSXRlbShjYW5hbE1lc3NhZ2UpO1xyXG4gICAgICAgICAgICQoJy5jaGF0LWxpc3QtZ3JvdXBDYW5hbCcpLmFwcGVuZChncm91cEluc3RhbmNlKTtcclxuICAgICAgICAgICAkKCdbZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIl0nKS50cmlnZ2VyKCdjbGljaycpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbiAgICAkKHRoaXMpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCcjY2hhdE1vZGFsQ3JlYXRlR3JvdXBzJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICQoJyNjaGF0X2lucHV0Q2FuYWxOYW1lJykudmFsKCcnKTtcclxuICAgICAgICAkKCcuY2hhdC1iYWRnZVVzZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5jaGF0X3VzZXJzTGlzdCcpLmh0bWwoJycpO1xyXG4gICAgICAgICQoJyNjaGF0U2VhcmNoVXNlcicpLnZhbCgnJyk7XHJcbiAgICB9KVxyXG5cclxuICAgICQodGhpcykub24oJ2hpZGRlbi5icy5tb2RhbCcsJy5jaGF0LW1vZGFsLWFkZFVzZXJzJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsICcjY2hhdC1idG4tYWRkVXNlcnMnLGFzeW5jIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBtb2RhbF9jb250YWluZXIgPSAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LW1vZGFsLWNvbnRhaW5lcicpXHJcbiAgICAgICAgY29uc3QgdXNlcnNfaWQgPSBnZXRVc2VySWRzQnlCYWRnZShtb2RhbF9jb250YWluZXIpO1xyXG4gICAgICAgIGF3YWl0IGNoYXRfZ3JvdXBDYW5hbF9hZGRVc2VyKG1vZGFsX2NvbnRhaW5lci5hdHRyKCdkYXRhLWNhbmFsLWlkJyksIHVzZXJzX2lkKVxyXG4gICAgICAgIG1vZGFsX2NvbnRhaW5lci5maW5kKCcuYWxlcnQtc3VjY2VzcycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKG1vZGFsX2NvbnRhaW5lcikuZmluZCgnW2RhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCJdJykudHJpZ2dlcignY2xpY2snKVxyXG4gICAgICAgIH0sIDUwMClcclxuICAgIH0pXHJcblxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCAnLmNoYXQtcmVtb3ZlLXVzZXInLGFzeW5jIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgYXdhaXQgY2hhdF9ncm91cENhbmFsX3JlbW92ZVVzZXIoJCh0aGlzKS5hdHRyKCdkYXRhLWNhbmFsLWlkJykpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmNoYXQtY2hvb3NlLWNhbmFsJykucmVtb3ZlKClcclxuICAgIH0pXHJcblxyXG5cclxufSk7XHJcblxyXG5mdW5jdGlvbiBnZXRVc2VySWRzQnlCYWRnZShjb250YWluZXIpXHJcbntcclxuICAgIGxldCB1c2Vyc19pZCA9IFtdO1xyXG4gICAgJChjb250YWluZXIpLmZpbmQoJy5jaGF0LWJhZGdlVXNlcicpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdXNlcnNfaWQucHVzaCgkKHRoaXMpLmF0dHIoJ2RhdGEtdXNlci1pZCcpKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdXNlcnNfaWQ7XHJcbn0iLCJpbXBvcnQge0NvbnZlcnNhdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9Db252ZXJzYXRpb25Db21wb25lbnRcIjtcclxuaW1wb3J0IHtzaG93TWVzc2FnZUluc3RhbmNlLCB1cGRhdGVNZW51fSBmcm9tIFwiLi9oZWxwZXJzL2NoYXRfaGVscGVyc1wiO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAgIC8vIGRldGVjdGVyIHMnaWwgeSBhIHVuIG1lc3NhZ2VcclxuICAgIGNvbnN0IGNoYXRfbmV3TWVzc2FnZV90b3BpYyA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0LW5ld01lc3NhZ2UtdG9waWNcIikudGV4dENvbnRlbnQpO1xyXG4gICAgY29uc3QgY2hhdF92dV90b3BpYyA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0LXZ1LXRvcGljXCIpLnRleHRDb250ZW50KTtcclxuICAgIGNvbnN0IGNoYXRfdXNlclR5cGluZ190b3BpYyA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0LXVzZXJUeXBpbmctdG9waWNcIikudGV4dENvbnRlbnQpO1xyXG4gICAgY29uc3QgY2hhdF91c2VyU3RvcFR5cGluZ190b3BpYyA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0LXVzZXJTdG9wVHlwaW5nLXRvcGljXCIpLnRleHRDb250ZW50KTtcclxuICAgIGNvbnN0IGV2ZW50TmV3TWVzc2FnZSA9IG5ldyBFdmVudFNvdXJjZShjaGF0X25ld01lc3NhZ2VfdG9waWMpO1xyXG4gICAgY29uc3QgZXZlbnRWdSA9IG5ldyBFdmVudFNvdXJjZShjaGF0X3Z1X3RvcGljKTtcclxuICAgIGNvbnN0IGV2ZW50VXNlclR5cGluZyA9IG5ldyBFdmVudFNvdXJjZShjaGF0X3VzZXJUeXBpbmdfdG9waWMpO1xyXG4gICAgY29uc3QgZXZlbnRVc2VyU3RvcFR5cGluZyA9IG5ldyBFdmVudFNvdXJjZShjaGF0X3VzZXJTdG9wVHlwaW5nX3RvcGljKTtcclxuICAgIGNvbnN0IGNvbnZlcnNhdGlvbkNvbXBvbmVudCA9IG5ldyBDb252ZXJzYXRpb25Db21wb25lbnQoKTtcclxuICAgIC8vIHByw6lzZW5jZSBkJ3VuIG5vdXZlYXUgbWVzc2FnZVxyXG4gICAgZXZlbnROZXdNZXNzYWdlLm9ubWVzc2FnZSA9IGFzeW5jIGV2ZW50ID0+IHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcclxuICAgICAgICBjb25zdCBjYW5hbCA9IG1lc3NhZ2UuY2FuYWw7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IG1lc3NhZ2UudXNlcjtcclxuICAgICAgICAvLyBzaSB1bmUgaW5zdGFuY2UgZXN0IG91dmVydGVcclxuICAgICAgICBsZXQgakNhbmFsID0gJCgnI2NhbmFsLScrY2FuYWwuaWQpO1xyXG4gICAgICAgIGpDYW5hbC5maW5kKCcuY2hhdC1saXN0LWdyb3VwLW1lc3NhZ2VzJykuYXBwZW5kKGNvbnZlcnNhdGlvbkNvbXBvbmVudC5nZXRNZXNzYWdlKG1lc3NhZ2UpKTtcclxuICAgICAgICAvLyBzaSBsJ2luc3RhbmNlIG4nZXN0IHBhcyBvdXZlcnRlXHJcbiAgICAgICAgaWYoakNhbmFsLmxlbmd0aCA9PT0gMCApIHtcclxuICAgICAgICAgIGpDYW5hbCA9IGF3YWl0IHNob3dNZXNzYWdlSW5zdGFuY2UoY2FuYWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBtZXR0cmUgZW4gw6l2aWRlbmNlIGxlIGNhbmFsXHJcbiAgICAgICAgY29udmVyc2F0aW9uQ29tcG9uZW50LmFkZEhpZ2hsaWdoKGpDYW5hbClcclxuICAgICAgICAvLyBtZXR0cmUgw6Agam91ciBsZSBtZW51XHJcbiAgICAgICAgYXdhaXQgdXBkYXRlTWVudShjYW5hbClcclxuICAgIH1cclxuXHJcbiAgICAvLyBxdWFuZCBxdWVscXUndW4gdm9pdCBsZSBtZXNzYWdlXHJcbiAgICBldmVudFZ1Lm9ubWVzc2FnZSA9IGFzeW5jIGV2ZW50ID0+IHtcclxuICAgICAgICBjb25zdCBjYW5hbCA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgY29uc3QgZGVybmllck1lc3NhZ2VJdGVtID0gJCgnLmNoYXQtbGlzdC1ncm91cC1tZXNzYWdlcz4ubGlzdC1ncm91cC1pdGVtJykubGFzdCgpO1xyXG4gICAgICAgIGNvbnN0IGlkVXNlckVudm95ZXVyID0gcGFyc2VJbnQoZGVybmllck1lc3NhZ2VJdGVtLmF0dHIoJ2RhdGEtaWQtdXNlcicpKVxyXG4gICAgICAgIC8vIHNpIHVuZSBpbnN0YW5jZSBlc3Qgb3V2ZXJ0ZSBldCBxdWUgbGEgcGVyc29ubmUgcXVpIGEgdnUgbGUgbWVzc2FnZSBuJ2VzdCBwYXMgbCdlbnZveWV1clxyXG4gICAgICAgIGxldCBqQ2FuYWwgPSAkKCcjY2FuYWwtJytjYW5hbC5pZCk7XHJcbiAgICAgICAgY29udmVyc2F0aW9uQ29tcG9uZW50LmNsZWFyVnUoakNhbmFsKVxyXG4gICAgICAgIGlmKGpDYW5hbC5sZW5ndGggPiAwICYmIGlkVXNlckVudm95ZXVyICE9PSBjYW5hbC52dVBhci51c2VyLmlkICkge1xyXG4gICAgICAgICAgIC8vIHRvZG86IG1ldHRyZSB1biB2dVxyXG4gICAgICAgICAgICBjb252ZXJzYXRpb25Db21wb25lbnQuYWRkVnUoakNhbmFsLCBjYW5hbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHF1YW5kIHF1ZWxxdSd1biBlc3QgZW4gdHJhaW4gZCfDqWNyaXJlXHJcbiAgICBldmVudFVzZXJUeXBpbmcub25tZXNzYWdlID0gYXN5bmMgZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhbmFsID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcclxuICAgICAgICBjb252ZXJzYXRpb25Db21wb25lbnQuYWRkVXNlclR5cGluZygkKCcuY2hhdC1ib3gtY29udGFpbmVyW2lkPVwiY2FuYWwtJytjYW5hbC5pZCsnXCJdJyksIGNhbmFsLnVzZXJUeXBpbmcpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIHF1YW5kIHF1ZWxxdSd1biBhcnJldGUgZCfDqWNyaXJlXHJcbiAgICBldmVudFVzZXJTdG9wVHlwaW5nLm9ubWVzc2FnZSA9IGFzeW5jIGV2ZW50ID0+IHtcclxuICAgICAgICBjb25zdCBjYW5hbCA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgY29udmVyc2F0aW9uQ29tcG9uZW50LnJlbW92ZVVzZXJUeXBpbmcoJCgnLmNoYXQtYm94LWNvbnRhaW5lcltpZD1cImNhbmFsLScrY2FuYWwuaWQrJ1wiXScpLCBjYW5hbC51c2VyVHlwaW5nKVxyXG4gICAgfVxyXG5cclxuXHJcbn0pOyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaW5kRGVzdGluYXRhaXJlKGZpbmRlcikge1xyXG4gICAgaWYoZmluZGVyLmxlbmd0aCA+IDEpe1xyXG4gICAgICAgIHJldHVybiAoYXdhaXQgYXhpb3MuZ2V0KFJvdXRpbmcuZ2VuZXJhdGUoJ3VzZXJfZmluZERlc3QnLCB7ZmluZGVyOiBmaW5kZXJ9KSkpLmRhdGE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZXNzYWdlQnlDb2RlKGNvZGU9bnVsbClcclxue1xyXG4gICAgaWYoY29kZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiAoYXdhaXQgYXhpb3MuZ2V0KFJvdXRpbmcuZ2VuZXJhdGUoJ2NoYXRfZ2V0TWVzc2FnZV9ieUNvZGUnLCB7Y29kZSA6IGNvZGV9KSkpLmRhdGFcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW107XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kTWVzc2FnZShtZXNzYWdlLCBjb2RlLCBmaWxlcyA9IFtdKSB7XHJcbiAgICAvLyBlbnZveWVyIHVuIG1lc3NhZ2VcclxuICAgIGNvbnN0IGJvZHlSZXF1ZXN0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgYm9keVJlcXVlc3QuYXBwZW5kKCd0ZXh0ZXMnLCBtZXNzYWdlKTtcclxuICAgIGZpbGVzLmZvckVhY2goZnVuY3Rpb24oZmlsZU5hbWUpIHtcclxuICAgICAgICBib2R5UmVxdWVzdC5hcHBlbmQoJ2ZpbGVzW10nLCBmaWxlTmFtZSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gKGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgICAgICBSb3V0aW5nLmdlbmVyYXRlKCdjaGF0X2FkZE1lc3NhZ2UnLCB7Y29kZSA6IGNvZGV9KSxcclxuICAgICAgICAgICAgICAgIGJvZHlSZXF1ZXN0XHJcbiAgICAgICAgKSkuZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNpbmdsZUNhbmFsKClcclxue1xyXG4gIHJldHVybiAoYXdhaXQgYXhpb3MuZ2V0KFJvdXRpbmcuZ2VuZXJhdGUoJ2NoYXRfZ2V0Q2FuYWxTaW5nbGVNZXNzYWdlJykpKS5kYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R3JvdXBlQ2FuYWwoKVxyXG57XHJcbiAgICByZXR1cm4gKGF3YWl0IGF4aW9zLmdldChSb3V0aW5nLmdlbmVyYXRlKCdjaGF0X2dldENhbmFsTWVzc2FnZScpKSkuZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUdyb3VwQ2FuYWwobm9tLCB1c2Vyc19pZClcclxue1xyXG4gICAgY29uc3QgYm9keVJlcXVlc3QgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICBib2R5UmVxdWVzdC5hcHBlbmQoJ25vbScsIG5vbSk7XHJcbiAgICB1c2Vyc19pZC5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgYm9keVJlcXVlc3QuYXBwZW5kKCd1c2Vyc1tdJywgaWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChhd2FpdCBheGlvcy5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ2NoYXRfY3JlYXRlR3JvdXBDYW5hbCcpLCBib2R5UmVxdWVzdCkpLmRhdGFcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlZUNhbmFsKGNhbmFsX2lkKVxyXG57XHJcbiAgICByZXR1cm4gKGF3YWl0IGF4aW9zLmdldChSb3V0aW5nLmdlbmVyYXRlKCdjaGF0X3Z1TWVzc2FnZScsIHtpZDpjYW5hbF9pZH0pKSkuZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG5vdGlmeVVzZXJUeXBpbmcoY2FuYWxfaWQpXHJcbntcclxuICAgIHJldHVybiAoYXdhaXQgYXhpb3MuZ2V0KFJvdXRpbmcuZ2VuZXJhdGUoJ2NoYXRfbm90aWZ5VXNlclR5cGluZycsIHtpZDpjYW5hbF9pZH0pKSkuZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG5vdGlmeVVzZXJTdG9wVHlwaW5nKGNhbmFsX2lkKVxyXG57XHJcbiAgICByZXR1cm4gKGF3YWl0IGF4aW9zLmdldChSb3V0aW5nLmdlbmVyYXRlKCdjaGF0X25vdGlmeVVzZXJTdG9wVHlwaW5nJywge2lkOmNhbmFsX2lkfSkpKS5kYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hhdF9ncm91cENhbmFsX3JlbW92ZVVzZXIoY2FuYWxfaWQpXHJcbntcclxuICAgIHJldHVybiAoYXdhaXQgYXhpb3MuZGVsZXRlKFJvdXRpbmcuZ2VuZXJhdGUoJ2NoYXRfZ3JvdXBDYW5hbF9yZW1vdmVVc2VyJywge2lkOmNhbmFsX2lkLCBpbmNsdWRlTWU6dHJ1ZX0pKSkuZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoYXRfZ3JvdXBDYW5hbF9hZGRVc2VyKGNhbmFsX2lkLCB1c2Vyc19pZCkge1xyXG4gICAgY29uc3QgYm9keVJlcXVlc3QgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICB1c2Vyc19pZC5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgYm9keVJlcXVlc3QuYXBwZW5kKCd1c2Vyc1tdJywgaWQpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKGF3YWl0IGF4aW9zLnBvc3QoUm91dGluZy5nZW5lcmF0ZSgnY2hhdF9ncm91cENhbmFsX2FkZFVzZXInLCB7aWQ6Y2FuYWxfaWR9KSwgYm9keVJlcXVlc3QpKS5kYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGxvYWRGaWxlKGZpbGVVcGxvYWQpIHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGVVcGxvYWQuZmlsZXNbMF0pO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgID0gKGF3YWl0IGF4aW9zLnBvc3QoUm91dGluZy5nZW5lcmF0ZSgnY2hhdF9pbXBvcnRGaWxlJyksIGZvcm1EYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXHJcbiAgICAgICAgfVxyXG4gICAgfSkpLmRhdGE7XHJcbiAgICBpZighcmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZmlsZVVybDtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQge0NvbnZlcnNhdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9Db252ZXJzYXRpb25Db21wb25lbnRcIjtcclxuaW1wb3J0IHtzaG93TWVzc2FnZUluc3RhbmNlLCB1cGRhdGVNZW51fSBmcm9tIFwiLi9oZWxwZXJzL2NoYXRfaGVscGVyc1wiXHJcbmltcG9ydCB7c2VlQ2FuYWx9IGZyb20gXCIuL2NoYXRTZW5kZXJSZXF1ZXN0XCI7XHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgY29udmVyc2F0aW9uQ29tcG9uZW50ID0gbmV3IENvbnZlcnNhdGlvbkNvbXBvbmVudCgpO1xyXG4gICAgLy8gbG9yc3F1J29uIGNob2lzaSB1biBjYW5hbFxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCAnLmNoYXQtY2hvb3NlLWNhbmFsJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGNhbmFsID0gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQoJCh0aGlzKS5hdHRyKCdkYXRhLWNhbmFsJykpKTtcclxuICAgICAgICBpZigkKCcuY2hhdC1jYW5hbC1pbnN0YW5jZVtkYXRhLWlkPVwiJytjYW5hbC5pZCsnXCJdJykubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgc2hvd01lc3NhZ2VJbnN0YW5jZShjYW5hbCkudGhlbihmdW5jdGlvbigpe30pO1xyXG4gICAgICAgICAgICAvLyBvbiBlbnZvaWUgdW4gdnUgc2V1bGVtZW50IHNpIGxlIGNhbmFsIGVuIHF1ZXN0aW4gbidlc3QgcGFzIGVuY29yZSB2dVxyXG4gICAgICAgICAgICBpZigkKCdbZGF0YS1jYW5hbC1tZW51LWlkPVwiJytjYW5hbC5pZCsnXCJdJykuZmluZCgnLmNoYXQtbm90LXNlZW4nKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBzZWVDYW5hbChjYW5hbC5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHVwZGF0ZU1lbnUoY2FuYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQodGhpcykub24oJ2NsaWNrJywgJy5jaGF0LWNhbmFsLWluc3RhbmNlJyxhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCQodGhpcykuZmluZCgnLmhpZ2hsaWdodC1jYW5hbCcpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29udmVyc2F0aW9uQ29tcG9uZW50LnJlbW92ZUhpZ2hsaWdodCh0aGlzKTtcclxuICAgICAgICAgICAgYXdhaXQgc2VlQ2FuYWwoJCh0aGlzKS5hdHRyKCdkYXRhLWlkJykpO1xyXG4gICAgICAgICAgICBjb25zdCBtZW51SXRlbSA9ICQoJy5saXN0LWdyb3VwLWl0ZW0nKVxyXG4gICAgICAgICAgICBtZW51SXRlbS5yZW1vdmVDbGFzcygnYmctZ3JleS0xJylcclxuICAgICAgICAgICAgbWVudUl0ZW0uZmluZCgnLmNoYXQtbm90LXNlZW4nKS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KTsiLCJpbXBvcnQge2dldEdyb3VwZUNhbmFsLCBnZXRTaW5nbGVDYW5hbH0gZnJvbSBcIi4vY2hhdFNlbmRlclJlcXVlc3RcIjtcclxuaW1wb3J0IHtsb2FkZXJPZmYsIGxvYWRlck9ufSBmcm9tIFwiLi4vaGVscGVycy9Mb2FkZXJcIjtcclxuaW1wb3J0IHtNZW51Q29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvTWVudUNvbXBvbmVudCdcclxuaW1wb3J0IHtNb2RhbH0gZnJvbSAnYm9vdHN0cmFwJ1xyXG5pbXBvcnQge0NhbmFsR3JvdXBzQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL0NhbmFsR3JvdXBzQ29tcG9uZW50XCI7XHJcblxyXG4kKCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICAgY29uc3QgY2hhdFNpbmdsZUNhbmFsID0gJCgnLmNoYXQtc2luZ2xlLWNhbmFsJyk7XHJcbiAgICAgIGNvbnN0IGNoYXRHcm91cENhbmFsID0gJCgnLmNoYXQtZ3JvdXBlLWNhbmFsJyk7XHJcbiAgICAgIGNvbnN0IG1lbnVDb21wb25lbnQgPSBuZXcgTWVudUNvbXBvbmVudCgpO1xyXG4gICAgICAvLyBjaGFyZ2VyIGxlcyBjYW5hbHNcclxuICAgICAgbG9hZGVyT24oY2hhdFNpbmdsZUNhbmFsWzBdLCB0cnVlKTtcclxuICAgICAgZ2V0U2luZ2xlQ2FuYWwoKS50aGVuKGZ1bmN0aW9uKHNpbmdsZUNhbmFscykge1xyXG4gICAgICAgICAgICBjaGF0U2luZ2xlQ2FuYWwuaHRtbChtZW51Q29tcG9uZW50LmdldFNpbmdsZUNhbmFsKHNpbmdsZUNhbmFscykpO1xyXG4gICAgICAgICAgICBsb2FkZXJPZmYoY2hhdFNpbmdsZUNhbmFsWzBdKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBjaGFyZ2VyIGxlcyBncm91cGVzIGNhbmFsc1xyXG4gICAgICBsb2FkZXJPbihjaGF0R3JvdXBDYW5hbFswXSwgdHJ1ZSk7XHJcbiAgICAgIGdldEdyb3VwZUNhbmFsKCkudGhlbihmdW5jdGlvbihncm91cGVDYW5hbHMpIHtcclxuICAgICAgICAgICAgY2hhdEdyb3VwQ2FuYWwuaHRtbChtZW51Q29tcG9uZW50LmdldEdyb3Vwc0NhbmFsKGdyb3VwZUNhbmFscykpXHJcbiAgICAgICAgICAgIGxvYWRlck9mZihjaGF0R3JvdXBDYW5hbFswXSk7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAkKHRoaXMpLm9uKCdpbnB1dCcsJy5jaGF0LW1lbnUtc2VhcmNoJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaF92YWx1ZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3RDYW5hbCA9ICQoJy5jaGF0LWNob29zZS1jYW5hbCcpXHJcbiAgICAgICAgICAgIGlmKHNlYXJjaF92YWx1ZS5sZW5ndGg+MCkge1xyXG4gICAgICAgICAgICAgICAgICBsaXN0Q2FuYWwuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdkLW5vbmUnKVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICBsaXN0Q2FuYWwuZmlsdGVyKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFfc2VhcmNoID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNlYXJjaCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IGRhdGFfc2VhcmNoLnRvTG93ZXJDYXNlKCkubWF0Y2goc2VhcmNoX3ZhbHVlLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRjaCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICB9KS5yZW1vdmVDbGFzcygnZC1ub25lJylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgbGlzdENhbmFsLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnZC1ub25lJylcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgfSlcclxuICAgICAgJCh0aGlzKS5vbignY2xpY2snLCcuY2hhdC1hZGQtdXNlcnMnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgY29uc3QgY2FuYWxHcm91cENvbXBvbmVudCA9IG5ldyBDYW5hbEdyb3Vwc0NvbXBvbmVudCgpO1xyXG4gICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKGNhbmFsR3JvdXBDb21wb25lbnQuZ2V0TW9kYWxBZGRVc2VyKCQodGhpcykuYXR0cignZGF0YS1jYW5hbC1pZCcpKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsQWRkVXNlciA9IG5ldyBNb2RhbCgkKCcjY2hhdE1vZGFsQWRkVXNlcnMnKSk7XHJcbiAgICAgICAgICAgIG1vZGFsQWRkVXNlci5zaG93KClcclxuICAgICAgfSlcclxuXHJcbn0pO1xyXG5cclxuXHJcbiIsImltcG9ydCB7bG9hZGVyT2ZmLCBsb2FkZXJPbn0gZnJvbSBcIi4uL2hlbHBlcnMvTG9hZGVyXCI7XHJcbmltcG9ydCB7ZmluZERlc3RpbmF0YWlyZSwgZ2V0TWVzc2FnZUJ5Q29kZX0gZnJvbSBcIi4vY2hhdFNlbmRlclJlcXVlc3RcIjtcclxuaW1wb3J0IHtOZXdDb252ZXJzYXRpb25Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvTmV3Q29udmVyc2F0aW9uQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7c2hvd01lc3NhZ2VJbnN0YW5jZX0gZnJvbSBcIi4vaGVscGVycy9jaGF0X2hlbHBlcnNcIjtcclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBuZXdDb252ZXJzYXRpb25Db21wb25lbnQgPSBuZXcgTmV3Q29udmVyc2F0aW9uQ29tcG9uZW50KCk7XHJcbiAgICAvLyBub3V2ZWF1IG1lc3NhZ2VcclxuICAgICQodGhpcykub24oJ2NsaWNrJywgJy5jaGF0LWJ0bi1uZXdPbmUnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNob3dNZXNzYWdlSW5zdGFuY2UoKS50aGVuKHIgPT4ge30pXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyByZWNoZXJjaGUgZCd1biB1dGlsaXNhdGV1ciBzdXIgbGEgc2VjdGlvbiBub3V2ZWF1IG1lc3NhZ2VcclxuICAgICQodGhpcykub24oJ2lucHV0JywnI3NlYXJjaC11c2VyJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBib2R5TWVzc2FnZSA9ICQoJy5jaGF0LWZsb2F0LW5ld09uZT4uY2FyZC1ib2R5JylcclxuICAgICAgICBsb2FkZXJPbihib2R5TWVzc2FnZVswXSk7XHJcbiAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBmaW5kRGVzdGluYXRhaXJlKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gbmV3Q29udmVyc2F0aW9uQ29tcG9uZW50LmdldExpc3RVc2VyKHVzZXJzKTtcclxuICAgICAgICBib2R5TWVzc2FnZS5odG1sKHRlbXBsYXRlKTtcclxuICAgICAgICBsb2FkZXJPZmYoYm9keU1lc3NhZ2VbMF0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY2hvaXggZCd1biB1dGlsaXNhdGV1ciBwb3VyIG91dnJpciB1bmUgY29ubmV4aW9uXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsICcuY2hhdC1jaG9vc2UtdXNlcicsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgYm9keU1lc3NhZ2UgPSAkKCcuY2hhdC1mbG9hdC1uZXdPbmU+LmNhcmQtYm9keScpXHJcbiAgICAgICAgY29uc3Qgc3ViSGVhZGVyID0gJCgnLmNoYXQtZmxvYXQtbmV3T25lPi5jYXJkLXN1Yi1oZWFkZXInKVxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudCgkKHRoaXMpLmF0dHIoJ2RhdGEtdXNlcicpKSlcclxuICAgICAgICBib2R5TWVzc2FnZS5odG1sKCcnKTtcclxuICAgICAgICBzdWJIZWFkZXIuaHRtbChuZXdDb252ZXJzYXRpb25Db21wb25lbnQuZ2V0SGVhZGVyKHVzZXIpKVxyXG4gICAgICAgIGxvYWRlck9uKGJvZHlNZXNzYWdlWzBdKTtcclxuICAgICAgICBjb25zdCBtZXNzYWdlcyA9IGF3YWl0IGdldE1lc3NhZ2VCeUNvZGUodXNlci5jaGF0Q29kZSk7XHJcbiAgICAgICAgLy8gY2hhcmdlciBsZXMgbWVzc2FnZXNcclxuICAgICAgICBib2R5TWVzc2FnZS5odG1sKG5ld0NvbnZlcnNhdGlvbkNvbXBvbmVudC5nZXRNZXNzYWdlcyhtZXNzYWdlcykpO1xyXG5cclxuICAgICAgICAkKCcuY2hhdC1idG4tc2VuZCcpLmF0dHIoJ2RhdGEtY29kZScsIHVzZXIuY2hhdENvZGUpO1xyXG4gICAgICAgIGxvYWRlck9mZihib2R5TWVzc2FnZVswXSlcclxuICAgIH0pXHJcblxyXG59KTsiLCJleHBvcnQgY2xhc3MgQ2FuYWxHcm91cHNDb21wb25lbnQge1xyXG4gICAgdXNlcnM9W107XHJcbiAgICBnZXRNb2RhbEFkZFVzZXIoY2FuYWxfaWQpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICc8IS0tIE1vZGFsIC0tPlxcbicgK1xyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGUgdGV4dC1zdGFydCBjaGF0LW1vZGFsLWFkZFVzZXJzIGNoYXQtbW9kYWwtY29udGFpbmVyXCIgaWQ9XCJjaGF0TW9kYWxBZGRVc2Vyc1wiIGRhdGEtY2FuYWwtaWQ9XCInK2NhbmFsX2lkKydcIiB0YWJpbmRleD1cIi0xXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIiBpZD1cImV4YW1wbGVNb2RhbExhYmVsXCI+QWpvdXRlciBkZXMgbWVtYnJlcyBkYW5zIGxlIGdyb3VwZTwvaDU+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tY2xvc2VcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPjwvYnV0dG9uPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcbicrXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2VzcyBhbGVydC1lbXB0eS1uYW1lIGQtbm9uZVwiIHJvbGU9XCJhbGVydFwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICBFbnJlZ2lzdHJlbWVudCBlZmZlY3R1w6lcXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGF0X3VzZXJCYWRnZUxpc3QgbWItMlwiPlxcbicgK1xyXG4gICAgICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGRpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImV4YW1wbGVGb3JtQ29udHJvbElucHV0MVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPkFqb3V0ZXIgZGVzIG1lbWJyZXM8L2xhYmVsPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBjaGF0U2VhcmNoVXNlclwiIGlkPVwiY2hhdFNlYXJjaFVzZXJcIiBwbGFjZWhvbGRlcj1cIlJlY2hlcmNoZXIgdW4gdXRpbGlzYXRldXJcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhdF91c2Vyc0xpc3QgbXQtMlwiPlxcbicgK1xyXG4gICAgICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJ1xcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiPkZlcm1lcjwvYnV0dG9uPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgaWQ9XCJjaGF0LWJ0bi1hZGRVc2Vyc1wiPkVucmVnaXN0cmVyPC9idXR0b24+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGlzdFVzZXIodXNlcnMgPSBbXSlcclxuICAgIHtcclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSAnJztcclxuICAgICAgICBpZih1c2Vycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICB1c2Vycy5mb3JFYWNoKGZ1bmN0aW9uKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IHRoYXQuZ2V0TGlzdFVzZXJJdGVtKHVzZXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRFbXB0eUxpc3RVc2VyTWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICc8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2ggXCI+XFxuJyArXHJcbiAgICAgICAgICAgIHRlbXBsYXRlICtcclxuICAgICAgICAgICAgJzwvdWw+JztcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaXN0VXNlckl0ZW0odXNlcilcclxuICAgIHtcclxuICAgICAgICBjb25zdCB1c2VyU3RyaW5naWZpZWQgPSBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgICAgIGxldCBjb21wb25lbnQ9XHJcbiAgICAgICAgICAgICc8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gY2hhdC1zZWxlY3QtdXNlciAgcGItMCBwcy0zXCIgaWQ9XCJjaGF0LXVzZXItJyt1c2VyLmlkKydcIiBkYXRhLXVzZXI9XCInK3VzZXJTdHJpbmdpZmllZCsnXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMlwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL21kby5wbmdcIiBhbHQ9XCJodWdlbmVyZFwiIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIGNsYXNzPVwicm91bmRlZC1jaXJjbGVcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEwIHBzLTJcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgPHNwYW4+Jyt1c2VyLm5vbSsnICcrIHVzZXIucHJlbm9tKyc8L3NwYW4+PGJyPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWQgZnMtMTIgbGluZS1oZWlnaHQtMTMgcGItMyBtYi0wIGJvcmRlci1ib3R0b21cIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgJyt1c2VyLmVtYWlsK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICA8L3A+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgIDwvZGl2PlxcbidcclxuICAgICAgICAnPC9saT4nO1xyXG5cclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVtcHR5TGlzdFVzZXJNZXNzYWdlKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1leWUtZHJvcHBlci1lbXB0eVwiPjwvaT4gQXVjdW4gcsOpc3VsdGF0ICdcclxuICAgICAgICAnPC9kaXY+JztcclxuICAgIH1cclxuXHJcblxyXG4gICAgdXNlckJhZGdlKHVzZXIpXHJcbiAgIHtcclxuICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJiYWRnZSBiZy1wcmltYXJ5IG1lLTIgY2hhdC1iYWRnZVVzZXJcIiBkYXRhLXVzZXItaWQ9XCInK3VzZXIuaWQrJ1wiIGlkPVwiY2hhdC1iYWRnZVVzZXItJyt1c2VyLmlkKydcIj4nK3VzZXIubm9tKycgJyt1c2VyLnByZW5vbSsnICcgK1xyXG4gICAgICAgICAgICc8YSBocmVmPVwiI1wiIG9uY2xpY2s9XCIkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpXCIgY2xhc3M9XCJtcy0yIHRleHQtd2hpdGUgYmctZGFuZ2VyIHB4LTEgcm91bmRlZCBjaGF0LWRlbGV0ZS1iYWRnZVVzZXJcIj48aSBjbGFzcz1cImZhIGZhLWNsb3NlXCI+PC9pPjwvYT4nICtcclxuICAgICAgICAgICAnPC9zcGFuPidcclxuICAgfVxyXG5cclxuICAgY2xlYXJVc2VyQmFkZ2UoKVxyXG4gICB7XHJcbiAgICAgICAkKCcuY2hhdC1iYWRnZVVzZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgIH0pO1xyXG4gICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQ29udmVyc2F0aW9uQmFzZUNvbXBvbmVudCB7XHJcbiAgICBnZXRFbXB0eU1lc3NhZ2VzKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC00IGNoYXQtZW1wdHktbWVzc2FnZVwiPicgK1xyXG4gICAgICAgICAgICAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1leWUtZHJvcHBlci1lbXB0eVwiPjwvaT4gQXVjdW4gbWVzc2FnZSBkaXNwb25pYmxlPGJyPicgK1xyXG4gICAgICAgICAgICAnPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPkVudm95ZXIgdW4gbWVzc2FnZSBwb3VyIGTDqW1hcnJlciBsYSBkaXNjdXNzaW9uPC9zbWFsbD4nK1xyXG4gICAgICAgICAgICAnPC9kaXY+J1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1lc3NhZ2VzKG1lc3NhZ2VzKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9ICcnO1xyXG4gICAgICAgIGlmKG1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXNcclxuICAgICAgICAgICAgbWVzc2FnZXMuZm9yRWFjaChmdW5jdGlvbihtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSB0aGF0LmdldE1lc3NhZ2UobWVzc2FnZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZSArPSB0aGlzLmdldEVtcHR5TWVzc2FnZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICc8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2ggY2hhdC1saXN0LWdyb3VwLW1lc3NhZ2VzXCI+XFxuJyArXHJcbiAgICAgICAgICAgIHRlbXBsYXRlK1xyXG4gICAgICAgICAgICAnPC91bD4nXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldE1lc3NhZ2UobWVzc2FnZSlcclxuICAgIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlcklkID0gcGFyc2VJbnQoJCgnI2N1cnJlbnQtdXNlci1pZCcpLnRleHQoKSk7XHJcbiAgICAgICAgbGV0IGltZ3MgPSAnJztcclxuICAgICAgICBpZihtZXNzYWdlLmZpbGVzICE9bnVsbCAmJiBtZXNzYWdlLmZpbGVzLmxlbmd0aD4wKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UuZmlsZXMuZm9yRWFjaChmdW5jdGlvbih1cmwpIHtcclxuICAgICAgICAgICAgICAgaW1ncyArPSAnPGRpdiBjbGFzcz1cInBiLTIgcHQtMiBtdC0yXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGltZyBzcmM9XCInK3VybCsnXCIgYWx0PVwibGUgZmljaGllciBuZSBwZXV0IMOqdHJlIGNoYXJnZXJcIiBjbGFzcz1cImNoYXQtaW1hZ2VcIiAvPicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2Pic7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhdmF0YXIgPSAnL3VzZXIvYXZhdGFyLycrbWVzc2FnZS51c2VyLmlkO1xyXG4gICAgICAgIGxldCBvbmVycm9yID0gJ29uZXJyb3I9XCJ0aGlzLm9uZXJyb3I9bnVsbDsgdGhpcy5zcmM9XFwnL2Fzc2V0cy92dWV4eS9pbWFnZXMvcG9ydHJhaXQvc21hbGwvYXZhdGFyLXMtMTEuanBnXFwnXCInXHJcbiAgICAgICAgaWYoY3VycmVudFVzZXJJZCAhPT0gbWVzc2FnZS51c2VyLmlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtICBwYi0yIHBzLTMgcGUtNVwiIGRhdGEtaWQtdXNlcj1cIicrbWVzc2FnZS51c2VyLmlkKydcIj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yIGQtZmxleFwiPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJythdmF0YXIrJ1wiICcrb25lcnJvcisnIGFsdD1cImh1Z2VuZXJkXCIgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZSBteS1hdXRvXCI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTAgcHMtMiByb3VuZGVkLTMgYmctbGlnaHQtZ3JheVwiPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnctYm9sZCBsaW5lLWhlaWdodC0xMyBmcy0xM1wiPicrbWVzc2FnZS51c2VyLm5vbSsnICcrbWVzc2FnZS51c2VyLnByZW5vbSsnPC9zcGFuPjxicj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtMCBsaW5lLWhlaWdodC0xMyB0ZXh0LW11dGVkIGZzLTExIGJvcmRlci1ib3R0b20gcGItMlwiPkVudm95ZXIgJyttZXNzYWdlLnJlbmR1RGF0ZUNyZWF0aW9uTWVzc2FnZSsnPC9zcGFuPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgaW1ncytcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIiBmcy0xNCBsaW5lLWhlaWdodC0xNyBtdC0yIG1iLTAgcHQtMiBwYi0yIFwiPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZS50ZXh0ZXMrJ1xcbicrXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgPC9wPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgIDwvbGk+XFxuJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJzxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBwcy01ICBwYi0yIHRleHQtZW5kIFwiIGRhdGEtaWQtdXNlcj1cIicrbWVzc2FnZS51c2VyLmlkKydcIj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMCBwcy0yIHJvdW5kZWQtMyBiZy1saWdodC1wcmltYXJ5XCI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmdy1ib2xkIGxpbmUtaGVpZ2h0LTEzIGZzLTEzIFwiPicrbWVzc2FnZS51c2VyLm5vbSsnICcrbWVzc2FnZS51c2VyLnByZW5vbSsnPC9zcGFuPjxicj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInAtMCBsaW5lLWhlaWdodC0xMyBmcy0xMSAgICBib3JkZXItYm90dG9tIGJvcmRlci1jb2xvci1saWdodC1wcmltYXJ5IHBiLTJcIj5FbnZveWVyICcrbWVzc2FnZS5yZW5kdURhdGVDcmVhdGlvbk1lc3NhZ2UrJzwvc3Bhbj5cXG4nICtcclxuICAgICAgICAgICAgICAgIGltZ3MrXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCIgZnMtMTQgbGluZS1oZWlnaHQtMTcgbWItMCBtdC0yICBwdC0yIHBiLTIgXCI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLnRleHRlcysnXFxuJytcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICA8L3A+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMiBkLWZsZXhcIj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIicrYXZhdGFyKydcIiAnK29uZXJyb3IrJyBhbHQ9XCJodWdlbmVyZFwiIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIGNsYXNzPVwicm91bmRlZC1jaXJjbGUgbXktYXV0b1wiPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgIDwvbGk+XFxuJztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRNZXNzYWdlRmlsZVRlbXBsYXRlKG1lc3NhZ2UpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGZpbGVzVGVtcGxhdGVcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBmaWxlc1RlbXBsYXRlXHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJWdShjb252ZXJzYXRpb25Db250YWluZXIpXHJcbiAgICB7XHJcbiAgICAgICAgJChjb252ZXJzYXRpb25Db250YWluZXIpLmZpbmQoJy5jYW5hbC12dS1jb250YWluZXInKS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckZpbGUoY29udmVyc2F0aW9uQ29udGFpbmVyKSB7XHJcbiAgICAgICAgJChjb252ZXJzYXRpb25Db250YWluZXIpLmZpbmQoJy5jaGF0LWZpbGVzLXByZXZpZXcnKS5odG1sKCcnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7QmFzZTY0fSBmcm9tIFwiLi4vLi4vaGVscGVycy9iYXNlNjRcIjtcclxuaW1wb3J0IHtDb252ZXJzYXRpb25CYXNlQ29tcG9uZW50fSBmcm9tIFwiLi9Db252ZXJzYXRpb25CYXNlQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udmVyc2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgQ29udmVyc2F0aW9uQmFzZUNvbXBvbmVudCB7XHJcbiAgICBnZXRDb252ZXJzYXRpb25Db250YWluZXIoY2FuYWwpIHtcclxuICAgICAgICBsZXQgaW5wdXRDYWNoZVVzZXIgPSAnJztcclxuICAgICAgICBsZXQgbm9tQ2FuYWwgPSAnJztcclxuICAgICAgICBjb25zdCBjdXJyZW50X3VzZXJfaWQgPSBwYXJzZUludCgkKCcjY3VycmVudC11c2VyLWlkJykudGV4dCgpKTtcclxuICAgICAgICBjYW5hbC5tZW1icmVzLmZvckVhY2goZnVuY3Rpb24odXNlcil7XHJcbiAgICAgICAgICAgIGlucHV0Q2FjaGVVc2VyKz0nPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwidXNlcnNbXVwiIHZhbHVlPVwiJytCYXNlNjQuZW5jb2RlKHVzZXIuaWQpKydcIiAvPlxcbic7XHJcbiAgICAgICAgICAgIGlmKCFjYW5hbC5pc0dyb3VwICYmIHVzZXIuaWQgIT09IGN1cnJlbnRfdXNlcl9pZCkge1xyXG4gICAgICAgICAgICAgICAgbm9tQ2FuYWwgPSB1c2VyLm5vbSsnICcrdXNlci5wcmVub207XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZihjYW5hbC5pc0dyb3VwKSB7XHJcbiAgICAgICAgICAgIG5vbUNhbmFsID0gY2FuYWwubm9tXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBkw6lidXQgaW5pdGlhbGlzYXRpb24gZHUgdnUgbG9yc3F1ZSBsJ2luc3RhbmNlIGVzdCBjaGFyZ8OpXHJcbiAgICAgICAgLy8gc2kgbGUgY2FuYWwgZXN0IHVuIHNpbmdsZUNhbmFsXHJcbiAgICAgICAgbGV0IHZ1VGVtcGxhdGUgPSAnJztcclxuICAgICAgICBpZighY2FuYWwuaXNHcm91cCAmJiBjYW5hbC52dXMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIHZ1VGVtcGxhdGUgPSB0aGlzLmdldFZ1VGVtcGxhdGUoKVswXS5vdXRlckhUTUw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpc0dyb3VwID0gY2FuYWwuaXNHcm91cCA/ICd0cnVlJzogJ2ZhbHNlJztcclxuICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJjYXJkIHNoYWRvdyBmcy0xNCAgY2hhdC1jYW5hbC1pbnN0YW5jZSBjaGF0LWJveC1jb250YWluZXIgbWItMCBzaGFkb3ctc20gIFwiIGRhdGEtaXNHcm91cD1cIicraXNHcm91cCsnXCIgZGF0YS1pZD1cIicrY2FuYWwuaWQrJ1wiIGlkPVwiY2FuYWwtJytjYW5hbC5pZCsnXCIgc3R5bGU9XCJ3aWR0aDogMThyZW07XCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIGJnLXByaW5jIHRleHQtd2hpdGUgdy0xMDAgcHktM1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTggZC1mbGV4XCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm15LWF1dG9cIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3M9XCJtcy0yIFwiPicrbm9tQ2FuYWwrJyA8aSBjbGFzcz1cImZhLWJyYW5kcyBmYS1mYWNlYm9vay1tZXNzZW5nZXJcIj48L2k+PC9iPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgdGV4dC1lbmRcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC13aGl0ZSBjaGF0LWJ0bi1taW5pbWlzZSBtZS0yXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1hbmdsZS1kb3duXCI+PC9pPjwvYT5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC13aGl0ZSBjaGF0LWJ0bi1jbG9zZVwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2xvc2VcIj48L2k+PC9hPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBweC0wXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDwhLS0gem9uZSBkZSBtZXNzYWdlcyAtLT4gXFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAnK3Z1VGVtcGxhdGUrJ1xcbicgK1xyXG4gICAgICAgICAgICAnICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlciBwLTBcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPGRpdiBjbGFzcz1cImNoYXQtZmlsZXMtcHJldmlld1wiPjwvZGl2PicrXHJcbiAgICAgICAgICAgICcgICAgICAgIDxkaXYgY2xhc3M9XCJweS0zIHBzLTJcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1c2Vyc1wiPicgK1xyXG4gICAgICAgICAgICBpbnB1dENhY2hlVXNlcitcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC1kYW5nZXIgc3BlZWQtbGl2ZVZpZGVvLWNhbGwgcGUtMlwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtdmlkZW9cIj48L2k+PC9hPicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICA8L3NwYW4+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtc2Vjb25kYXJ5IGNoYXQtdXBsb2FkSW1hZ2VcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWltYWdlXCI+PC9pPjwvYT5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBiZy13aGl0ZVwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgYm9yZGVyLTAgYm9yZGVyLXRvcCAgZnMtMTIgcm91bmRlZC0wIHB5LTMgY2hhdC1pbnB1dC10ZXh0ZXNcIiBwbGFjZWhvbGRlcj1cIkVudHJlciB2b3RyZSBtZXNzYWdlIC4uLlwiIGFyaWEtbGFiZWw9XCJSZWNpcGllbnRcXCdzIHVzZXJuYW1lIHdpdGggdHdvIGJ1dHRvbiBhZGRvbnNcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHRleHQtcHJpbWFyeSBib3JkZXItMCBib3JkZXItdG9wIGNoYXQtYnRuLXNlbmRcIiBkYXRhLWNvZGU9XCInK2NhbmFsLmNvZGUrJ1wiIHR5cGU9XCJidXR0b25cIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBhcGVyLXBsYW5lXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJ1xcbicgK1xyXG4gICAgICAgICAgICAnICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+J1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUhpZ2hsaWdodCgkY3VycmVudE9iamVjdClcclxuICAgIHtcclxuICAgICAgICAkKCRjdXJyZW50T2JqZWN0KS5maW5kKCcuY2FyZC1oZWFkZXInKS5yZW1vdmVDbGFzcygnaGlnaGxpZ2h0LWNhbmFsICBiZy1zdWNjZXNzIHRleHQtd2hpdGUnKS5hZGRDbGFzcygnYmctcHJpbmMnKVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEhpZ2hsaWdoKCRjdXJyZW50T2JqZWN0KVxyXG4gICAge1xyXG4gICAgICAgICQoJGN1cnJlbnRPYmplY3QpLmZpbmQoJy5jYXJkLWhlYWRlcicpLmFkZENsYXNzKCdoaWdobGlnaHQtY2FuYWwgYmctc3VjY2VzcyB0ZXh0LXdoaXRlJykucmVtb3ZlQ2xhc3MoJ2JnLXByaW5jJylcclxuICAgIH1cclxuXHJcbiAgICBnZXRWdVRlbXBsYXRlKClcclxuICAgIHtcclxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9ICQoJzxkaXYgLz4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOidjYW5hbC12dS1jb250YWluZXIgdGV4dC1lbmQgcGUtMydcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB2dVRlbXBsYXRlID0gJzxzcGFuIGNsYXNzPVwiZnMtMTEgdGV4dC1tdXRlZFwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtZXllXCI+PC9pPiA8c3Bhbj52dTwvc3Bhbj48L3NwYW4+J1xyXG4gICAgICAgIHRlbXBsYXRlLmh0bWwodnVUZW1wbGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFZ1KGNvbnZlcnNhdGlvbkNvbnRhaW5lcilcclxuICAgIHtcclxuICAgICAgICAvLyBzaSB1biB2dSBleGlzdGUgZMOpasOgIHBhcyBsYSBwZWluZSBkZSBsZSByZW5kcmUgw6Agbm91dmVhdVxyXG4gICAgICAgIGxldCBjYW5hbFZ1Q29udGFpbmVyID0gJChjb252ZXJzYXRpb25Db250YWluZXIpLmZpbmQoJy5jYW5hbC12dS1jb250YWluZXInKTtcclxuICAgICAgICBpZihjYW5hbFZ1Q29udGFpbmVyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAkKGNvbnZlcnNhdGlvbkNvbnRhaW5lcikuZmluZCgnLmNhcmQtYm9keScpLmFwcGVuZCh0aGlzLmdldFZ1VGVtcGxhdGUoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgYWRkVXNlclR5cGluZyhjb252ZXJzYXRpb25Db250YWluZXIsIHVzZXIpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gc2kgdW4gdGVtcGxhdGUgZXhpc3RlIGTDqWrDoCBwYXMgbGEgcGVpbmUgZGUgbGUgcmVuZHJlIMOgIG5vdXZlYXVcclxuICAgICAgICBsZXQgY2FuYWxVc2VyVHlwaW5nID0gJChjb252ZXJzYXRpb25Db250YWluZXIpLmZpbmQoJy5jYW5hbC11c2VyVHlwaW5nJyk7XHJcbiAgICAgICAgaWYoY2FuYWxVc2VyVHlwaW5nLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9ICQoJzxkaXYgLz4nLCB7XHJcbiAgICAgICAgICAgICAgICBjbGFzczonY2FuYWwtdXNlclR5cGluZyBweS0yIHB4LTMgIHRleHQtbXV0ZWQgZnMtMTEgdGV4dC1lbmQnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCB2dVRlbXBsYXRlID0gJzxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPicrdXNlci5wcmVub20rJyAnK3VzZXIubm9tKyc8L3NwYW4+IGVzdCBlbiB0cmFpbiBkXFwnw6ljcmlyZS4uLic7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlLmh0bWwodnVUZW1wbGF0ZSk7XHJcbiAgICAgICAgICAgICQoY29udmVyc2F0aW9uQ29udGFpbmVyKS5maW5kKCcuY2FyZC1ib2R5JykuYXBwZW5kKHRlbXBsYXRlKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlVXNlclR5cGluZyhjb252ZXJzYXRpb25Db250YWluZXIpIHtcclxuICAgICAgICAkKGNvbnZlcnNhdGlvbkNvbnRhaW5lcikuZmluZCgnLmNhbmFsLXVzZXJUeXBpbmcnKS5yZW1vdmUoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBsb2dvR3JvdXAgZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy91c2Vycy5qcGdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBkZWJ1dCBsaXN0ZSB1c2VyIGNvdMOpIG1lbnUgZmxvdHRhbnRcclxuXHJcbiAgICAgZ2V0U2luZ2xlQ2FuYWwoY2FuYWxzTWVzc2FnZSlcclxuICAgIHtcclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSAnJztcclxuICAgICAgICBpZihjYW5hbHNNZXNzYWdlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgdGhpc09iaiA9IHRoaXM7XHJcbiAgICAgICAgICAgIGNhbmFsc01lc3NhZ2UuZm9yRWFjaChmdW5jdGlvbihjYW5hbCkge1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gdGhpc09iai5nZXRTaW5nbGVDYW5hbEl0ZW0oY2FuYWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRFbXB0eVNpbmdsZUNhbmFsTWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICc8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2ggXCI+XFxuJyArXHJcbiAgICAgICAgICAgIHRlbXBsYXRlICtcclxuICAgICAgICAgICAgJzwvdWw+JztcclxuICAgIH1cclxuXHJcbiAgIGdldFNpbmdsZUNhbmFsSXRlbShjYW5hbE1lc3NhZ2UpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgY2FuYWxTdHJpbmdpZnkgPSBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY2FuYWxNZXNzYWdlKSk7XHJcbiAgICAgICAgY29uc3QgbGFzdE1lc3NhZ2UgPSBjYW5hbE1lc3NhZ2UubGFzdE1lc3NhZ2UgPyBjYW5hbE1lc3NhZ2UubGFzdE1lc3NhZ2UudGV4dGVzLnNsaWNlKDAsIDgwKSA6ICdDb21tZW5jZXIgdm90cmUgcHJlbWnDqHJlIGNvbnZlcnNhdGlvbi4uLic7XHJcbiAgICAgICAgY29uc3Qgc2VlbkNsYXNzID0gIWNhbmFsTWVzc2FnZS5pc1NlZW4gPyAnYmctZ3JleS0xJzonJztcclxuICAgICAgICBjb25zdCBleWVTbGFzaFNlY3Rpb24gPSAhY2FuYWxNZXNzYWdlLmlzU2VlbiA/XHJcbiAgICAgICAgICAgICcgPGRpdiBjbGFzcz1cImNvbC0yIHRleHQtZGFuZ2VyIGNoYXQtbm90LXNlZW5cIj4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1leWUtc2xhc2hcIj48L2k+JytcclxuICAgICAgICAgICAgJyA8L2Rpdj4nIDogJyc7XHJcbiAgICAgICAgY29uc3QgY3VycmVudF91c2VyX2lkID0gcGFyc2VJbnQoJCgnI2N1cnJlbnQtdXNlci1pZCcpLnRleHQoKSk7XHJcbiAgICAgICAgY29uc3QgbWVtYnJlcyA9IGNhbmFsTWVzc2FnZS5tZW1icmVzO1xyXG4gICAgICAgIGxldCBhdmF0YXIgPSAnL3VzZXIvYXZhdGFyLyc7XHJcbiAgICAgICAgbGV0IG5vbUNhbmFsID0gJyc7XHJcbiAgICAgICAgbWVtYnJlcy5mb3JFYWNoKGZ1bmN0aW9uKHVzZXIpe1xyXG4gICAgICAgICAgIGlmKHVzZXIuaWQgIT09IGN1cnJlbnRfdXNlcl9pZCkge1xyXG4gICAgICAgICAgICAgICBhdmF0YXIgKz0gdXNlci5pZDtcclxuICAgICAgICAgICAgICAgbm9tQ2FuYWwgPSAodXNlci5ub20gPz8gJycpKycgJysodXNlci5wcmVub20gPz8gJycpO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBsYXN0TWVzc2FnZUNsYXNzID0gIWNhbmFsTWVzc2FnZS5pc1NlZW4/ICdjb2wtNycgOiAnY29sLTknO1xyXG4gICAgICAgIGxldCBvbmVycm9yID0gJ29uZXJyb3I9XCJ0aGlzLm9uZXJyb3I9bnVsbDsgdGhpcy5zcmM9XFwnL2Fzc2V0cy92dWV4eS9pbWFnZXMvcG9ydHJhaXQvc21hbGwvYXZhdGFyLXMtMTEuanBnXFwnXCInXHJcbiAgICAgICAgbGV0IGNvbXBvbmVudD1cclxuICAgICAgICAgICAgJzxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBjaGF0LWNob29zZS1jYW5hbCAnK3NlZW5DbGFzcysnIHBiLTAgcHMtM1wiIGRhdGEtY2FuYWwtbWVudS1pZD1cIicrY2FuYWxNZXNzYWdlLmlkKydcIiBkYXRhLWNhbmFsPVwiJytjYW5hbFN0cmluZ2lmeSsnXCIgZGF0YS1zZWFyY2g9XCInK2NhbmFsTWVzc2FnZS5ub20rJ1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICA8aW1nIHNyYz1cIicrYXZhdGFyKydcIiAnK29uZXJyb3IrJyBhbHQ9XCJodWdlbmVyZFwiIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIGNsYXNzPVwicm91bmRlZC1jaXJjbGVcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICA8ZGl2IGNsYXNzPVwiJytsYXN0TWVzc2FnZUNsYXNzKycgcHMtMlwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICA8c3Bhbj4nK25vbUNhbmFsKyc8L3NwYW4+PGJyPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWQgZnMtMTIgbGluZS1oZWlnaHQtMTMgcGItMyBtYi0wIGJvcmRlci1ib3R0b21cIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgJytsYXN0TWVzc2FnZStcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgPC9wPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGV5ZVNsYXNoU2VjdGlvbitcclxuICAgICAgICAgICAgJyAgICAgPC9kaXY+XFxuJ1xyXG4gICAgICAgICAgICAnPC9saT4nO1xyXG5cclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVtcHR5U2luZ2xlQ2FuYWxNZXNzYWdlKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LW11dGVkXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWV5ZS1kcm9wcGVyLWVtcHR5XCI+PC9pPiBBdWN1bmUgY29udmVyc2F0aW9uIGRpc3BvbmlibGUgJ1xyXG4gICAgICAgICc8L2Rpdj4nO1xyXG4gICAgfVxyXG5cclxuICAgLy8gIGRlYnV0IGxpc3RlIGdyb3VwZSBjYW5hbCBjb3TDqSBtZW51XHJcbiAgICBnZXRHcm91cHNDYW5hbChjYW5hbHNNZXNzYWdlKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9ICcnO1xyXG4gICAgICAgIGlmKGNhbmFsc01lc3NhZ2UubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCB0aGlzT2JqID0gdGhpc1xyXG4gICAgICAgICAgICBjYW5hbHNNZXNzYWdlLmZvckVhY2goZnVuY3Rpb24oY2FuYWwpIHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IHRoaXNPYmouZ2V0R3JvdXBzQ2FuYWxJdGVtKGNhbmFsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RW1wdHlHcm91cHNDYW5hbE1lc3NhZ2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAnPHVsIGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoIGNoYXQtbGlzdC1ncm91cENhbmFsIHB4LTBcIj5cXG4nICtcclxuICAgICAgICAgICAgdGVtcGxhdGUgK1xyXG4gICAgICAgICAgICAnPC91bD4nO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEdyb3Vwc0NhbmFsSXRlbShjYW5hbE1lc3NhZ2UpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGxhc3RNZXNzYWdlID0gY2FuYWxNZXNzYWdlLmxhc3RNZXNzYWdlICE9IG51bGwgPyBjYW5hbE1lc3NhZ2UubGFzdE1lc3NhZ2UudGV4dGVzLnNsaWNlKDAsIDgwKSA6ICdFbnZveWVyIHZvdHJlIHByZW1pZXIgbWVzc2FnZSc7XHJcbiAgICAgICAgY29uc3QgY2FuYWxTdHJpbmdpZnkgPSBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY2FuYWxNZXNzYWdlKSk7XHJcbiAgICAgICAgcmV0dXJuICc8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gY2hhdC1jaG9vc2UtY2FuYWwgIHBiLTAgcHMtM1wiIGRhdGEtY2FuYWw9XCInICsgY2FuYWxTdHJpbmdpZnkgKyAnXCIgZGF0YS1zZWFyY2g9XCInICsgY2FuYWxNZXNzYWdlLm5vbSArICdcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgPGltZyBzcmM9XCInICsgbG9nb0dyb3VwICsgJ1wiIGFsdD1cImh1Z2VuZXJkXCIgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZVwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOSBwcy0yIGJvcmRlci1ib3R0b21cIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgPHNwYW4+JyArIGNhbmFsTWVzc2FnZS5ub20gKyAnPC9zcGFuPjxicj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkIGZzLTEyIGxpbmUtaGVpZ2h0LTEzIHBiLTMgbWItMCBcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgJyArIGxhc3RNZXNzYWdlICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgPC9wPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWVuZCBwYi0zIGNoYXQtZ3JvdXBlLWFjdGlvblwiPiBcXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiY2hhdC1hZGQtdXNlcnMgdGV4dC1zdWNjZXNzXCIgZGF0YS1jYW5hbC1pZD1cIicrY2FuYWxNZXNzYWdlLmlkKydcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLXVzZXItcGx1c1wiPjwvaT48L2E+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImNoYXQtcmVtb3ZlLXVzZXIgdGV4dC1kYW5nZXIgbXMtMlwiIGRhdGEtY2FuYWwtaWQ9XCInK2NhbmFsTWVzc2FnZS5pZCsnXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1yaWdodC1mcm9tLWJyYWNrZXRcIj48L2k+PC9hPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgIDwvZGl2PicrXHJcbiAgICAgICAgICAgICcgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnPC9saT4nO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVtcHR5R3JvdXBzQ2FuYWxNZXNzYWdlKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LW11dGVkIHB5LTRcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtZXllLWRyb3BwZXItZW1wdHlcIj48L2k+IEF1Y3VuIGdyb3VwZSAgJ1xyXG4gICAgICAgICc8L2Rpdj4nO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtCYXNlNjR9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2Jhc2U2NFwiO1xyXG5pbXBvcnQge0NvbnZlcnNhdGlvbkJhc2VDb21wb25lbnR9IGZyb20gXCIuL0NvbnZlcnNhdGlvbkJhc2VDb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdDb252ZXJzYXRpb25Db21wb25lbnQgZXh0ZW5kcyBDb252ZXJzYXRpb25CYXNlQ29tcG9uZW50e1xyXG4gICAgZ2V0SGVhZGVyKHVzZXIpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwibXQtMyBtcy0yXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPHNwYW4gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGZ3LWJvbGQgYnRuLXNtIHBvc2l0aW9uLXJlbGF0aXZlXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAnK3VzZXIubm9tKycgJyt1c2VyLnByZW5vbSsnXFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPHNwYW4gY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtMCBzdGFydC0xMDAgdHJhbnNsYXRlLW1pZGRsZSBwLTIgYmctZGFuZ2VyIGJvcmRlciBib3JkZXItbGlnaHQgcm91bmRlZC1jaXJjbGVcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPk5ldyBhbGVydHM8L3NwYW4+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgPC9zcGFuPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgIDwvc3Bhbj5cXG4nK1xyXG4gICAgICAgICAgICAnPC9kaXY+J1xyXG4gICAgfVxyXG4gICAgZ2V0Q29udmVyc2F0aW9uQ29udGFpbmVyKCkge1xyXG4gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cImNhcmQgc2hhZG93IGZzLTE0ICBjaGF0LWZsb2F0LW5ld09uZSBjaGF0LWJveC1jb250YWluZXIgbWItMCBzaGFkb3ctc21cIiBzdHlsZT1cIndpZHRoOiAxOHJlbTtcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgYmctcHJpbmMgdy0xMDAgcHktM1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTggZC1mbGV4XCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm15LWF1dG9cIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPGIgY2xhc3M9XCJtcy0yIFwiPk5vdXZlYXUgTWVzc2FnZSA8aSBjbGFzcz1cImZhLWJyYW5kcyBmYS1mYWNlYm9vay1tZXNzZW5nZXJcIj48L2k+PC9iPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgdGV4dC1lbmRcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC13aGl0ZSBjaGF0LWJ0bi1taW5pbWlzZSBtZS0yXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1hbmdsZS1kb3duXCI+PC9pPjwvYT5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC13aGl0ZSBjaGF0LWJ0bi1jbG9zZVwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2xvc2VcIj48L2k+PC9hPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cImNhcmQtc3ViLWhlYWRlclwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sICByb3VuZGVkLTAgYm9yZGVyLTAgYm9yZGVyLWJvdHRvbSBweS0zIGZzLTEyXCIgaWQ9XCJzZWFyY2gtdXNlclwiIHBsYWNlaG9sZGVyPVwiRW50cmVyIGxlIG5vbS9lLW1haWwgZHUgZGVzdGluYXRhaXJlXCIgYXJpYS1sYWJlbD1cIlJlY2lwaWVudFxcJ3MgdXNlcm5hbWUgd2l0aCB0d28gYnV0dG9uIGFkZG9uc1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHB4LTBcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPCEtLSB6b25lIGRlIG1lc3NhZ2VzIC0tPiBcXG4nICtcclxuICAgICAgICAgICAgJ1xcbicgK1xyXG4gICAgICAgICAgICAnICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlciBwLTBcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPGRpdiBjbGFzcz1cInB5LTMgcHMtMlwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPCEtLSA8YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC1kYW5nZXIgcGUtMlwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtdmlkZW9cIj48L2k+PC9hPiAtLT5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDwhLS0gPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtc2Vjb25kYXJ5XCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1pbWFnZVwiPjwvaT48L2E+IC0tPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIGJnLXdoaXRlXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBib3JkZXItMCBib3JkZXItdG9wICBmcy0xMiByb3VuZGVkLTAgcHktMyBjaGF0LWlucHV0LXRleHRlc1wiIHBsYWNlaG9sZGVyPVwiRW50cmVyIHZvdHJlIG1lc3NhZ2UgLi4uXCIgYXJpYS1sYWJlbD1cIlJlY2lwaWVudFxcJ3MgdXNlcm5hbWUgd2l0aCB0d28gYnV0dG9uIGFkZG9uc1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgdGV4dC1wcmltYXJ5IGJvcmRlci0wIGJvcmRlci10b3AgY2hhdC1idG4tc2VuZFwiIHR5cGU9XCJidXR0b25cIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBhcGVyLXBsYW5lXCI+PC9pPjwvYnV0dG9uPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJ1xcbicgK1xyXG4gICAgICAgICAgICAnICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+J1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpc3RVc2VyKHVzZXJzID0gW10pXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gJyc7XHJcbiAgICAgICAgaWYodXNlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgdXNlcnMuZm9yRWFjaChmdW5jdGlvbih1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSB0aGF0LmdldExpc3RVc2VySXRlbSh1c2VyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RW1wdHlMaXN0VXNlck1lc3NhZ2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAnPHVsIGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoIFwiPlxcbicgK1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZSArXHJcbiAgICAgICAgICAgICc8L3VsPic7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGlzdFVzZXJJdGVtKHVzZXIpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgdXNlclN0cmluZ2lmaWVkID0gZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgICAgICBsZXQgY29tcG9uZW50PVxyXG4gICAgICAgICAgICAnPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGNoYXQtY2hvb3NlLXVzZXIgIHBiLTAgcHMtM1wiIGlkPVwiY2hhdC11c2VyLScrdXNlci5pZCsnXCIgZGF0YS11c2VyPVwiJyt1c2VyU3RyaW5naWZpZWQrJ1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9tZG8ucG5nXCIgYWx0PVwiaHVnZW5lcmRcIiB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIiBjbGFzcz1cInJvdW5kZWQtY2lyY2xlXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC05IHBzLTJcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgPHNwYW4+Jyt1c2VyLm5vbSsnICcrIHVzZXIucHJlbm9tKyc8L3NwYW4+PGJyPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWQgZnMtMTIgbGluZS1oZWlnaHQtMTMgcGItMyBtYi0wIGJvcmRlci1ib3R0b21cIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgJyt1c2VyLmVtYWlsK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICA8L3A+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgIDwvZGl2PlxcbidcclxuICAgICAgICAnPC9saT4nO1xyXG5cclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVtcHR5TGlzdFVzZXJNZXNzYWdlKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1leWUtZHJvcHBlci1lbXB0eVwiPjwvaT4gQXVjdW4gcsOpc3VsdGF0ICdcclxuICAgICAgICAnPC9kaXY+JztcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge0NvbnZlcnNhdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udmVyc2F0aW9uQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7bG9hZGVyT2ZmLCBsb2FkZXJPbn0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvTG9hZGVyXCI7XHJcbmltcG9ydCB7Z2V0R3JvdXBlQ2FuYWwsIGdldE1lc3NhZ2VCeUNvZGUsIGdldFNpbmdsZUNhbmFsfSBmcm9tIFwiLi4vY2hhdFNlbmRlclJlcXVlc3RcIjtcclxuaW1wb3J0IHtNZW51Q29tcG9uZW50fSBmcm9tIFwiLi4vY29tcG9uZW50cy9NZW51Q29tcG9uZW50XCI7XHJcbmltcG9ydCB7TmV3Q29udmVyc2F0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi4vY29tcG9uZW50cy9OZXdDb252ZXJzYXRpb25Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaG93TWVzc2FnZUluc3RhbmNlKGNhbmFsPW51bGwpXHJcbntcclxuICAgIGNvbnN0IGNvbnZlcnNhdGlvbkNvbXBvbmVudCA9IGNhbmFsICE9bnVsbCA/IG5ldyBDb252ZXJzYXRpb25Db21wb25lbnQoKSA6IG5ldyBOZXdDb252ZXJzYXRpb25Db21wb25lbnQoKTtcclxuICAgIGNvbnN0IGNoYXRCb3hDb250YWluZXIgPSAkKCcuY2hhdC1ib3gtY29udGFpbmVyJyk7XHJcbiAgICBpZihjaGF0Qm94Q29udGFpbmVyLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgIGNoYXRCb3hDb250YWluZXIuZmlyc3QoKS5yZW1vdmUoKVxyXG4gICAgfVxyXG4gICAgbGV0IG1lc3NhZ2VDb252ZXJzYXRpb25Db250YWluZXIgPSAkKCcuY2hhdC1jb252ZXJzYXRpb25zLWNvbnRhaW5lcicpXHJcbiAgICBpZihtZXNzYWdlQ29udmVyc2F0aW9uQ29udGFpbmVyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICBtZXNzYWdlQ29udmVyc2F0aW9uQ29udGFpbmVyID0gJCgnPGRpdiAvPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6ICdjaGF0LWNvbnZlcnNhdGlvbnMtY29udGFpbmVyIGQtZmxleCdcclxuICAgICAgICB9KTtcclxuICAgICAgICAgJCgnYm9keScpLmFwcGVuZChtZXNzYWdlQ29udmVyc2F0aW9uQ29udGFpbmVyKVxyXG4gICAgfVxyXG5cclxuICAgICQobWVzc2FnZUNvbnZlcnNhdGlvbkNvbnRhaW5lcikuYXBwZW5kKGNvbnZlcnNhdGlvbkNvbXBvbmVudC5nZXRDb252ZXJzYXRpb25Db250YWluZXIoY2FuYWwpKTtcclxuICAgIGlmKGNhbmFsICE9IG51bGwpIHtcclxuICAgICAgICBjb25zdCBjaGF0X2luc3RhbmNlID0gJCgnI2NhbmFsLScrY2FuYWwuaWQpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRfaW5zdGFuY2VfYm9keSA9ICQoY2hhdF9pbnN0YW5jZSkuZmluZCgnLmNhcmQtYm9keScpO1xyXG4gICAgICAgIGxvYWRlck9uKGNoYXRfaW5zdGFuY2VfYm9keVswXSk7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZXMgPSBhd2FpdCBnZXRNZXNzYWdlQnlDb2RlKGNhbmFsLmNvZGUpO1xyXG4gICAgICAgIC8vIGNoYXJnZXIgbGVzIG1lc3NhZ2VzXHJcbiAgICAgICAgY2hhdF9pbnN0YW5jZV9ib2R5LnByZXBlbmQoY29udmVyc2F0aW9uQ29tcG9uZW50LmdldE1lc3NhZ2VzKG1lc3NhZ2VzKSk7XHJcbiAgICAgICAgY2hhdF9pbnN0YW5jZV9ib2R5WzBdLnNjcm9sbFRvcCA9IGNoYXRfaW5zdGFuY2VfYm9keVswXS5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgbG9hZGVyT2ZmKGNoYXRfaW5zdGFuY2VfYm9keVswXSk7XHJcbiAgICAgICAgcmV0dXJuIGNoYXRfaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVNZW51KGNhbmFsKVxyXG57XHJcbiAgICBjb25zdCBtZW51Q29tcG9uZW50ID0gbmV3IE1lbnVDb21wb25lbnQoKTtcclxuICAgIGlmKGNhbmFsLmlzR3JvdXApIHtcclxuICAgICAgICBnZXRHcm91cGVDYW5hbCgpLnRoZW4oZnVuY3Rpb24oZ3JvdXBlQ2FuYWxzKSB7XHJcbiAgICAgICAgICAgICQoJy5jaGF0LWdyb3VwZS1jYW5hbCcpLmh0bWwobWVudUNvbXBvbmVudC5nZXRHcm91cHNDYW5hbChncm91cGVDYW5hbHMpKVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGdldFNpbmdsZUNhbmFsKCkudGhlbihmdW5jdGlvbihzaW5nbGVDYW5hbHMpIHtcclxuICAgICAgICAgICAgJCgnLmNoYXQtc2luZ2xlLWNhbmFsJykuaHRtbChtZW51Q29tcG9uZW50LmdldFNpbmdsZUNhbmFsKHNpbmdsZUNhbmFscykpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgY2lyY2xlSW1hZ2UgZnJvbSAnLi4vLi4vaW1hZ2VzL1ByZWxvYWRlci1pbWFnZS0xLnN2ZydcclxuaW1wb3J0IGNpcmNsZUltYWdlMiBmcm9tICcuLi8uLi9pbWFnZXMvV2ViLVByZWxvYWRlci0xLnN2ZydcclxuaW1wb3J0IGNpcmNsZUltYWdlMyBmcm9tICcuLi8uLi9pbWFnZXMvMy1MZWctUHJlbG9hZGVyLnN2ZydcclxuZnVuY3Rpb24gbG9hZGVyKG9wdGlvbnM9e1xyXG4gICAgJ2VsZW1lbnRDaWJsZScgOiB1bmRlZmluZWQsXHJcbiAgICAnY2xhc3NOYW1lJyA6ICcnLFxyXG4gICAgJ2RpcmVjdGl2ZScgOiAnT04nLFxyXG4gICAgJ3JlbGF0aXZlJyA6ICdPRkYnLFxyXG4gICAgJ2xvYWRlcldpZHRoJyA6IG51bGwsXHJcbiAgICAnbG9hZGVySGVpZ2h0JyA6IG51bGwsXHJcbiAgICAnYmFja2Ryb3AtY29sb3InIDogbnVsbFxyXG59KVxyXG57XHJcbiAgICBpZihvcHRpb25zLmVsZW1lbnRDaWJsZSAhPT0gdW5kZWZpbmVkIClcclxuICAgIHtcclxuICAgICAgICBpZiggb3B0aW9ucy5kaXJlY3RpdmUgPT09ICdPTicgJiYgJChvcHRpb25zLmVsZW1lbnRDaWJsZSkuZmluZCgnLmxvYWRlci1jb250YWluZXInKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBvcHRpb25zLnJlbGF0aXZlID09PSAnT0ZGJyA/ICdwb3NpdGlvbi1zdGlja3knIDogJ3Bvc2l0aW9uLXJlbGF0aXZlJztcclxuICAgICAgICAgICAgY29uc3QgYmFja2Ryb3BfY29sb3IgPSBvcHRpb25zW1wiYmFja2Ryb3AtY29sb3JcIl0hPW51bGwgPyAnYmFja2dyb3VuZDonK29wdGlvbnNbJ2JhY2tkcm9wLWNvbG9yJ10gOiAnJztcclxuICAgICAgICAgICAgY29uc3QgbG9hZGVyQ29udGFpbmVyID0gJCgnPGRpdiAvPicsIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnbG9hZGVyLWNvbnRhaW5lcicsXHJcbiAgICAgICAgICAgICAgICBjbGFzczogJ2xvYWRlci1jb250YWluZXIgJytwb3NpdGlvbisnIGJvdHRvbS0wIGxlZnQtMCB3LTEwMCBoLTEwMCBiZy13aGl0ZSBvdmVyZmxvdy1oaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IGJhY2tkcm9wX2NvbG9yXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBsb2FkZXJQb3N0Q29udGFpbmVyID0gJCgnPGRpdiAvPicsIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzOidsb2FkZXItcG9zdC1jb250YWluZXIgdy0xMDAgaC0xMDAgZC1mbGV4J1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2VXaWR0aCA9IG9wdGlvbnMubG9hZGVyV2lkdGggIT0gbnVsbCA/ICc7d2lkdGg6JytvcHRpb25zLmxvYWRlcldpZHRoIDogJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlSGVpZ2h0ID0gb3B0aW9ucy5sb2FkZXJIZWlnaHQgIT0gbnVsbCA/ICdoZWlnaHQ6JytvcHRpb25zLmxvYWRlckhlaWdodCA6ICcnO1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9ICQoJzxpbWcgLz4nLCB7XHJcbiAgICAgICAgICAgICAgICBzcmM6IGNpcmNsZUltYWdlMyxcclxuICAgICAgICAgICAgICAgIGNsYXNzOiAnbS1hdXRvJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiBpbWFnZUhlaWdodCtpbWFnZVdpZHRoXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsb2FkZXJQb3N0Q29udGFpbmVyLmFwcGVuZChpbWFnZSk7XHJcbiAgICAgICAgICAgIGxvYWRlckNvbnRhaW5lci5hcHBlbmQobG9hZGVyUG9zdENvbnRhaW5lcilcclxuICAgICAgICAgICAgJChvcHRpb25zLmVsZW1lbnRDaWJsZSkuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3Bvc2l0aW9uLXJlbGF0aXZlJylcclxuICAgICAgICAgICAgICAgICQodGhpcykuYXBwZW5kKGxvYWRlckNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIGlmKG9wdGlvbnMuZGlyZWN0aXZlID09PSAnT0ZGJykge1xyXG4gICAgICAgICAgICAkKG9wdGlvbnMuZWxlbWVudENpYmxlKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKFwiLmxvYWRlci1jb250YWluZXJcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZGVyT24oJGVsZW1lbnQsICRyZWxhdGl2ZT1mYWxzZSwgJHN0eWxlc09wdGlvbnMgPSB7XHJcbiAgICAnbG9hZGVyV2lkdGgnIDogbnVsbCxcclxuICAgICdsb2FkZXJIZWlnaHQnIDogbnVsbCxcclxuICAgICdiYWNrZHJvcC1jb2xvcic6IG51bGxcclxufSlcclxue1xyXG4gIGxvYWRlcih7XHJcbiAgICAgICdlbGVtZW50Q2libGUnIDogJGVsZW1lbnQsXHJcbiAgICAgICdkaXJlY3RpdmUnIDogJ09OJyxcclxuICAgICAgJ3JlbGF0aXZlJzogJHJlbGF0aXZlID8gJ09OJyA6ICdPRkYnLFxyXG4gICAgICAnbG9hZGVyV2lkdGgnIDogJHN0eWxlc09wdGlvbnMubG9hZGVyV2lkdGgsXHJcbiAgICAgICdsb2FkZXJIZWlnaHQnIDogJHN0eWxlc09wdGlvbnMubG9hZGVySGVpZ2h0LFxyXG4gICAgICAnYmFja2Ryb3AtY29sb3InIDogJHN0eWxlc09wdGlvbnNbXCJiYWNrZHJvcC1jb2xvclwiXVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkZXJPZmYoJGVsZW1lbnQpXHJcbntcclxuICAgIGxvYWRlcih7XHJcbiAgICAgICAgJ2VsZW1lbnRDaWJsZScgOiAkZWxlbWVudCxcclxuICAgICAgICAnZGlyZWN0aXZlJyA6ICdPRkYnXHJcbiAgICB9KVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBCYXNlNjQgPSB7XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBwcm9wZXJ0eVxyXG4gICAgX2tleVN0ciA6IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIixcclxuXHJcbiAgICAvLyBwdWJsaWMgbWV0aG9kIGZvciBlbmNvZGluZ1xyXG4gICAgZW5jb2RlIDogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IFwiXCI7XHJcbiAgICAgICAgdmFyIGNocjEsIGNocjIsIGNocjMsIGVuYzEsIGVuYzIsIGVuYzMsIGVuYzQ7XHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG5cclxuICAgICAgICBpbnB1dCA9IEJhc2U2NC5fdXRmOF9lbmNvZGUoaW5wdXQudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgICAgICBjaHIxID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xyXG4gICAgICAgICAgICBjaHIyID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xyXG4gICAgICAgICAgICBjaHIzID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xyXG5cclxuICAgICAgICAgICAgZW5jMSA9IGNocjEgPj4gMjtcclxuICAgICAgICAgICAgZW5jMiA9ICgoY2hyMSAmIDMpIDw8IDQpIHwgKGNocjIgPj4gNCk7XHJcbiAgICAgICAgICAgIGVuYzMgPSAoKGNocjIgJiAxNSkgPDwgMikgfCAoY2hyMyA+PiA2KTtcclxuICAgICAgICAgICAgZW5jNCA9IGNocjMgJiA2MztcclxuXHJcbiAgICAgICAgICAgIGlmIChpc05hTihjaHIyKSkge1xyXG4gICAgICAgICAgICAgICAgZW5jMyA9IGVuYzQgPSA2NDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc05hTihjaHIzKSkge1xyXG4gICAgICAgICAgICAgICAgZW5jNCA9IDY0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgK1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmMxKSArIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jMikgK1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmMzKSArIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jNCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gcHVibGljIG1ldGhvZCBmb3IgZGVjb2RpbmdcclxuICAgIGRlY29kZSA6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBcIlwiO1xyXG4gICAgICAgIHZhciBjaHIxLCBjaHIyLCBjaHIzO1xyXG4gICAgICAgIHZhciBlbmMxLCBlbmMyLCBlbmMzLCBlbmM0O1xyXG4gICAgICAgIHZhciBpID0gMDtcclxuXHJcbiAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXkEtWmEtejAtOVxcK1xcL1xcPV0vZywgXCJcIik7XHJcblxyXG4gICAgICAgIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgICAgICBlbmMxID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xyXG4gICAgICAgICAgICBlbmMyID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xyXG4gICAgICAgICAgICBlbmMzID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xyXG4gICAgICAgICAgICBlbmM0ID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xyXG5cclxuICAgICAgICAgICAgY2hyMSA9IChlbmMxIDw8IDIpIHwgKGVuYzIgPj4gNCk7XHJcbiAgICAgICAgICAgIGNocjIgPSAoKGVuYzIgJiAxNSkgPDwgNCkgfCAoZW5jMyA+PiAyKTtcclxuICAgICAgICAgICAgY2hyMyA9ICgoZW5jMyAmIDMpIDw8IDYpIHwgZW5jNDtcclxuXHJcbiAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZW5jMyAhPSA2NCkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZW5jNCAhPSA2NCkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG91dHB1dCA9IEJhc2U2NC5fdXRmOF9kZWNvZGUob3V0cHV0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHByaXZhdGUgbWV0aG9kIGZvciBVVEYtOCBlbmNvZGluZ1xyXG4gICAgX3V0ZjhfZW5jb2RlIDogZnVuY3Rpb24gKHN0cmluZykge1xyXG4gICAgICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXHJcXG4vZyxcIlxcblwiKTtcclxuICAgICAgICB2YXIgdXRmdGV4dCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgc3RyaW5nLmxlbmd0aDsgbisrKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgYyA9IHN0cmluZy5jaGFyQ29kZUF0KG4pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGMgPCAxMjgpIHtcclxuICAgICAgICAgICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKChjID4gMTI3KSAmJiAoYyA8IDIwNDgpKSB7XHJcbiAgICAgICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPj4gNikgfCAxOTIpO1xyXG4gICAgICAgICAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjICYgNjMpIHwgMTI4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyA+PiAxMikgfCAyMjQpO1xyXG4gICAgICAgICAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyA+PiA2KSAmIDYzKSB8IDEyOCk7XHJcbiAgICAgICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiA2MykgfCAxMjgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHV0ZnRleHQ7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHByaXZhdGUgbWV0aG9kIGZvciBVVEYtOCBkZWNvZGluZ1xyXG4gICAgX3V0ZjhfZGVjb2RlIDogZnVuY3Rpb24gKHV0ZnRleHQpIHtcclxuICAgICAgICB2YXIgc3RyaW5nID0gXCJcIjtcclxuICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgdmFyIGMgPSBjMSA9IGMyID0gMDtcclxuXHJcbiAgICAgICAgd2hpbGUgKCBpIDwgdXRmdGV4dC5sZW5ndGggKSB7XHJcblxyXG4gICAgICAgICAgICBjID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGMgPCAxMjgpIHtcclxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xyXG4gICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoKGMgPiAxOTEpICYmIChjIDwgMjI0KSkge1xyXG4gICAgICAgICAgICAgICAgYzIgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSsxKTtcclxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyAmIDMxKSA8PCA2KSB8IChjMiAmIDYzKSk7XHJcbiAgICAgICAgICAgICAgICBpICs9IDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjMiA9IHV0ZnRleHQuY2hhckNvZGVBdChpKzEpO1xyXG4gICAgICAgICAgICAgICAgYzMgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSsyKTtcclxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyAmIDE1KSA8PCAxMikgfCAoKGMyICYgNjMpIDw8IDYpIHwgKGMzICYgNjMpKTtcclxuICAgICAgICAgICAgICAgIGkgKz0gMztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG59IiwiLyoqXHJcbiAqIGZvbmN0aW9uIHBvdXIgbGEgcHLDqXZpc3VhbGlzYXRpb24gZCdpbWFnZVxyXG4gKlxyXG4gKiBAcGFyYW0gaW5wdXRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWFkVVJMKGlucHV0LCBjaWJsZSkge1xyXG4gICAgaWYgKGlucHV0LmZpbGVzICYmIGlucHV0LmZpbGVzWzBdKSB7XHJcbiAgICAgICAgaWYgKGlzSW1hZ2UoaW5wdXQpKSB7XHJcbiAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gZS50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BsaXQxID0gcmVzLnNwbGl0KFwiO1wiKVswXTtcclxuICAgICAgICAgICAgICAgIGlmKHNwbGl0MS5pbmNsdWRlcyhcImltYWdlXCIpKXtcclxuICAgICAgICAgICAgICAgICAgICAkKGNpYmxlKS5hdHRyKCdzcmMnLCBlLnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChpbnB1dC5maWxlc1swXSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGlzSW1hZ2UoJGZpbGUpIHtcclxuICAgIGlmICgkZmlsZS5maWxlcyAmJiAkZmlsZS5maWxlc1swXSAmJiAkZmlsZS5maWxlc1swXS5uYW1lLm1hdGNoKC9cXC4oanBnfGpwZWd8cG5nfGdpZnxibXB8aWNvKSQvKSApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4iXSwibmFtZXMiOlsibG9hZGVyT2ZmIiwibG9hZGVyT24iLCJub3RpZnlVc2VyU3RvcFR5cGluZyIsIm5vdGlmeVVzZXJUeXBpbmciLCJzZW5kTWVzc2FnZSIsInVwbG9hZEZpbGUiLCJDb252ZXJzYXRpb25CYXNlQ29tcG9uZW50IiwidXBkYXRlTWVudSIsInJlYWRVUkwiLCJyZXF1aXJlIiwiJCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2hhdENvbnRhaW5lciIsImNsb3Nlc3QiLCJib2R5TWVzc2FnZSIsImZpbmQiLCJpbnB1dFRleHQiLCJlbXB0eU1lc3NhZ2UiLCJjb252ZXJzYXRpb25CYXNlQ29tcG9uZW50IiwiY29kZSIsImF0dHIiLCJmaWxlcyIsImVhY2giLCJwdXNoIiwidmFsIiwicmVtb3ZlIiwibWVzc2FnZVZhbHVlIiwibGVuZ3RoIiwibWVzc2FnZSIsImNsZWFyVnUiLCJjbGVhckZpbGUiLCJhcHBlbmQiLCJnZXRNZXNzYWdlIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiY2FuYWwiLCJzdG9wUHJvcGFnYXRpb24iLCJpbnB1dEZpbGUiLCJ0eXBlIiwidHJpZ2dlciIsImNvbnRhaW5lckltZyIsImltZyIsImh0bWwiLCJmaWxlTmFtZSIsImNvbnRhaW5lciIsImZpbGVOYW1lSW5wdXQiLCJuYW1lIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNhbmFsX2lkIiwiY2hhdF9ncm91cENhbmFsX2FkZFVzZXIiLCJjaGF0X2dyb3VwQ2FuYWxfcmVtb3ZlVXNlciIsImNyZWF0ZUdyb3VwQ2FuYWwiLCJmaW5kRGVzdGluYXRhaXJlIiwiQ2FuYWxHcm91cHNDb21wb25lbnQiLCJNZW51Q29tcG9uZW50IiwiTW9kYWwiLCJjYW5hbHNDb21wb25lbnQiLCJib3hDcmVhdGlvbkNvbnRhaW5lciIsInNlYXJjaFZhbHVlIiwiZGl2Q2hhdF91c2Vyc0xpc3QiLCJ1c2VycyIsImdldExpc3RVc2VyIiwidXNlciIsIkpTT04iLCJwYXJzZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNoYXRfdXNlckJhZGdlTGlzdCIsImlkIiwidXNlckJhZGdlIiwiaW5wdXROb20iLCJub20iLCJhbGVydEVycm9yIiwidXNlcnNfaWQiLCJnZXRVc2VySWRzQnlCYWRnZSIsImNhbmFsTWVzc2FnZSIsImVycm9yIiwibWVudUNvbXBvbmVudCIsImdyb3VwSW5zdGFuY2UiLCJnZXRHcm91cHNDYW5hbEl0ZW0iLCJtb2RhbF9jb250YWluZXIiLCJzZXRUaW1lb3V0IiwiQ29udmVyc2F0aW9uQ29tcG9uZW50Iiwic2hvd01lc3NhZ2VJbnN0YW5jZSIsImNoYXRfbmV3TWVzc2FnZV90b3BpYyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXh0Q29udGVudCIsImNoYXRfdnVfdG9waWMiLCJjaGF0X3VzZXJUeXBpbmdfdG9waWMiLCJjaGF0X3VzZXJTdG9wVHlwaW5nX3RvcGljIiwiZXZlbnROZXdNZXNzYWdlIiwiRXZlbnRTb3VyY2UiLCJldmVudFZ1IiwiZXZlbnRVc2VyVHlwaW5nIiwiZXZlbnRVc2VyU3RvcFR5cGluZyIsImNvbnZlcnNhdGlvbkNvbXBvbmVudCIsIm9ubWVzc2FnZSIsImV2ZW50IiwiZGF0YSIsImpDYW5hbCIsImFkZEhpZ2hsaWdoIiwiZGVybmllck1lc3NhZ2VJdGVtIiwibGFzdCIsImlkVXNlckVudm95ZXVyIiwicGFyc2VJbnQiLCJ2dVBhciIsImFkZFZ1IiwiYWRkVXNlclR5cGluZyIsInVzZXJUeXBpbmciLCJyZW1vdmVVc2VyVHlwaW5nIiwiYXhpb3MiLCJmaW5kZXIiLCJnZXQiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJnZXRNZXNzYWdlQnlDb2RlIiwiYm9keVJlcXVlc3QiLCJVUkxTZWFyY2hQYXJhbXMiLCJmb3JFYWNoIiwicG9zdCIsImdldFNpbmdsZUNhbmFsIiwiZ2V0R3JvdXBlQ2FuYWwiLCJzZWVDYW5hbCIsImluY2x1ZGVNZSIsImZpbGVVcGxvYWQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiaGVhZGVycyIsInJlc3BvbnNlIiwiZmlsZVVybCIsInRoZW4iLCJyZW1vdmVIaWdobGlnaHQiLCJtZW51SXRlbSIsImNoYXRTaW5nbGVDYW5hbCIsImNoYXRHcm91cENhbmFsIiwic2luZ2xlQ2FuYWxzIiwiZ3JvdXBlQ2FuYWxzIiwiZ2V0R3JvdXBzQ2FuYWwiLCJzZWFyY2hfdmFsdWUiLCJsaXN0Q2FuYWwiLCJmaWx0ZXIiLCJkYXRhX3NlYXJjaCIsIm1hdGNoIiwidG9Mb3dlckNhc2UiLCJjYW5hbEdyb3VwQ29tcG9uZW50IiwiZ2V0TW9kYWxBZGRVc2VyIiwibW9kYWxBZGRVc2VyIiwic2hvdyIsIk5ld0NvbnZlcnNhdGlvbkNvbXBvbmVudCIsIm5ld0NvbnZlcnNhdGlvbkNvbXBvbmVudCIsInIiLCJ0ZW1wbGF0ZSIsInN1YkhlYWRlciIsImdldEhlYWRlciIsImNoYXRDb2RlIiwibWVzc2FnZXMiLCJnZXRNZXNzYWdlcyIsInRoYXQiLCJnZXRMaXN0VXNlckl0ZW0iLCJnZXRFbXB0eUxpc3RVc2VyTWVzc2FnZSIsInVzZXJTdHJpbmdpZmllZCIsImVuY29kZVVSSUNvbXBvbmVudCIsInN0cmluZ2lmeSIsImNvbXBvbmVudCIsInByZW5vbSIsImVtYWlsIiwiZ2V0RW1wdHlNZXNzYWdlcyIsImN1cnJlbnRVc2VySWQiLCJ0ZXh0IiwiaW1ncyIsInVybCIsImF2YXRhciIsIm9uZXJyb3IiLCJyZW5kdURhdGVDcmVhdGlvbk1lc3NhZ2UiLCJ0ZXh0ZXMiLCJmaWxlc1RlbXBsYXRlIiwiY29udmVyc2F0aW9uQ29udGFpbmVyIiwiQmFzZTY0IiwiaW5wdXRDYWNoZVVzZXIiLCJub21DYW5hbCIsImN1cnJlbnRfdXNlcl9pZCIsIm1lbWJyZXMiLCJlbmNvZGUiLCJpc0dyb3VwIiwidnVUZW1wbGF0ZSIsInZ1cyIsImdldFZ1VGVtcGxhdGUiLCJvdXRlckhUTUwiLCIkY3VycmVudE9iamVjdCIsImNhbmFsVnVDb250YWluZXIiLCJjYW5hbFVzZXJUeXBpbmciLCJsb2dvR3JvdXAiLCJjYW5hbHNNZXNzYWdlIiwidGhpc09iaiIsImdldFNpbmdsZUNhbmFsSXRlbSIsImdldEVtcHR5U2luZ2xlQ2FuYWxNZXNzYWdlIiwiY2FuYWxTdHJpbmdpZnkiLCJsYXN0TWVzc2FnZSIsInNsaWNlIiwic2VlbkNsYXNzIiwiaXNTZWVuIiwiZXllU2xhc2hTZWN0aW9uIiwibGFzdE1lc3NhZ2VDbGFzcyIsImdldEVtcHR5R3JvdXBzQ2FuYWxNZXNzYWdlIiwiY2hhdEJveENvbnRhaW5lciIsImZpcnN0IiwibWVzc2FnZUNvbnZlcnNhdGlvbkNvbnRhaW5lciIsImdldENvbnZlcnNhdGlvbkNvbnRhaW5lciIsImNoYXRfaW5zdGFuY2UiLCJjaGF0X2luc3RhbmNlX2JvZHkiLCJwcmVwZW5kIiwiY2lyY2xlSW1hZ2UiLCJjaXJjbGVJbWFnZTIiLCJjaXJjbGVJbWFnZTMiLCJsb2FkZXIiLCJvcHRpb25zIiwidW5kZWZpbmVkIiwiZWxlbWVudENpYmxlIiwiZGlyZWN0aXZlIiwicG9zaXRpb24iLCJyZWxhdGl2ZSIsImJhY2tkcm9wX2NvbG9yIiwibG9hZGVyQ29udGFpbmVyIiwic3R5bGUiLCJsb2FkZXJQb3N0Q29udGFpbmVyIiwiaW1hZ2VXaWR0aCIsImxvYWRlcldpZHRoIiwiaW1hZ2VIZWlnaHQiLCJsb2FkZXJIZWlnaHQiLCJpbWFnZSIsInNyYyIsIiRlbGVtZW50IiwiJHJlbGF0aXZlIiwiJHN0eWxlc09wdGlvbnMiLCJfa2V5U3RyIiwiaW5wdXQiLCJvdXRwdXQiLCJjaHIxIiwiY2hyMiIsImNocjMiLCJlbmMxIiwiZW5jMiIsImVuYzMiLCJlbmM0IiwiaSIsIl91dGY4X2VuY29kZSIsInRvU3RyaW5nIiwiY2hhckNvZGVBdCIsImlzTmFOIiwiY2hhckF0IiwiZGVjb2RlIiwicmVwbGFjZSIsImluZGV4T2YiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJfdXRmOF9kZWNvZGUiLCJzdHJpbmciLCJ1dGZ0ZXh0IiwibiIsImMiLCJjMSIsImMyIiwiYzMiLCJjaWJsZSIsImlzSW1hZ2UiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicmVzIiwidGFyZ2V0IiwicmVzdWx0Iiwic3BsaXQxIiwic3BsaXQiLCJpbmNsdWRlcyIsInJlYWRBc0RhdGFVUkwiLCIkZmlsZSJdLCJzb3VyY2VSb290IjoiIn0=