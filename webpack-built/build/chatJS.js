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
/* harmony import */ var _components_ConversationComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ConversationComponent */ "./assets/js/chat/components/ConversationComponent.js");
/* harmony import */ var _helpers_chat_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/chat_helpers */ "./assets/js/chat/helpers/chat_helpers.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


$(function () {// detecter s'il y a un message
  // const chat_newMessage_topic = JSON.parse(document.getElementById("chat-newMessage-topic").textContent);
  // const chat_vu_topic = JSON.parse(document.getElementById("chat-vu-topic").textContent);
  // const chat_userTyping_topic = JSON.parse(document.getElementById("chat-userTyping-topic").textContent);
  // const chat_userStopTyping_topic = JSON.parse(document.getElementById("chat-userStopTyping-topic").textContent);
  // const eventNewMessage = new EventSource(chat_newMessage_topic);
  // const eventVu = new EventSource(chat_vu_topic);
  // const eventUserTyping = new EventSource(chat_userTyping_topic);
  // const eventUserStopTyping = new EventSource(chat_userStopTyping_topic);
  // const conversationComponent = new ConversationComponent();
  // présence d'un nouveau message
  // eventNewMessage.onmessage = async event => {
  //     const message = JSON.parse(event.data);
  //     const canal = message.canal;
  //     const user = message.user;
  //     // si une instance est ouverte
  //     let jCanal = $('#canal-'+canal.id);
  //     jCanal.find('.chat-list-group-messages').append(conversationComponent.getMessage(message));
  //     // si l'instance n'est pas ouverte
  //     if(jCanal.length === 0 ) {
  //       jCanal = await showMessageInstance(canal);
  //     }
  //     // mettre en évidence le canal
  //     conversationComponent.addHighligh(jCanal)
  //     // mettre à jour le menu
  //     await updateMenu(canal)
  // }
  // quand quelqu'un voit le message
  // eventVu.onmessage = async event => {
  //     const canal = JSON.parse(event.data);
  //     const dernierMessageItem = $('.chat-list-group-messages>.list-group-item').last();
  //     const idUserEnvoyeur = parseInt(dernierMessageItem.attr('data-id-user'))
  //     // si une instance est ouverte et que la personne qui a vu le message n'est pas l'envoyeur
  //     let jCanal = $('#canal-'+canal.id);
  //     conversationComponent.clearVu(jCanal)
  //     if(jCanal.length > 0 && idUserEnvoyeur !== canal.vuPar.user.id ) {
  //        // todo: mettre un vu
  //         conversationComponent.addVu(jCanal, canal);
  //     }
  // }
  // quand quelqu'un est en train d'écrire
  // eventUserTyping.onmessage = async event => {
  //     const canal = JSON.parse(event.data);
  //     conversationComponent.addUserTyping($('.chat-box-container[id="canal-'+canal.id+'"]'), canal.userTyping)
  // }
  //
  // // quand quelqu'un arrete d'écrire
  // eventUserStopTyping.onmessage = async event => {
  //     const canal = JSON.parse(event.data);
  //     conversationComponent.removeUserTyping($('.chat-box-container[id="canal-'+canal.id+'"]'), canal.userTyping)
  // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBaUN1TyxLQUFLLENBQUN2TyxLQUFOLENBQVksQ0FBWixFQUFleUIsSUFBZixDQUFvQndFLEtBQXBCLENBQTBCLCtCQUExQixDQUR6QztBQUFBO0FBQUE7QUFBQTs7QUFBQSw2Q0FFZSxJQUZmOztBQUFBO0FBQUEsNkNBSVcsS0FKWDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGF0L2NoYXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXQvY2hhdEdyb3VwQ2FuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXQvY2hhdE1lcmN1cmVUcmFpdGVtZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGF0L2NoYXRTZW5kZXJSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGF0L2NoYXRfY2FuYWxfaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXQvY2hhdF9tZW51LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGF0L2NoYXRfbmV3X29uZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hhdC9jb21wb25lbnRzL0NhbmFsR3JvdXBzQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jaGF0L2NvbXBvbmVudHMvQ29udmVyc2F0aW9uQmFzZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hhdC9jb21wb25lbnRzL0NvbnZlcnNhdGlvbkNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hhdC9jb21wb25lbnRzL01lbnVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXQvY29tcG9uZW50cy9OZXdDb252ZXJzYXRpb25Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NoYXQvaGVscGVycy9jaGF0X2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hlbHBlcnMvTG9hZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9oZWxwZXJzL2Jhc2U2NC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaGVscGVycy9pbnB1dEZpbGVQcmV2aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bG9hZGVyT2ZmLCBsb2FkZXJPbn0gZnJvbSBcIi4uL2hlbHBlcnMvTG9hZGVyXCI7XHJcbmltcG9ydCB7bm90aWZ5VXNlclN0b3BUeXBpbmcsIG5vdGlmeVVzZXJUeXBpbmcsIHNlbmRNZXNzYWdlLCB1cGxvYWRGaWxlfSBmcm9tIFwiLi9jaGF0U2VuZGVyUmVxdWVzdFwiO1xyXG5pbXBvcnQge0NvbnZlcnNhdGlvbkJhc2VDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvQ29udmVyc2F0aW9uQmFzZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQge3VwZGF0ZU1lbnV9IGZyb20gXCIuL2hlbHBlcnMvY2hhdF9oZWxwZXJzXCI7XHJcbmltcG9ydCB7cmVhZFVSTH0gZnJvbSBcIi4uL2hlbHBlcnMvaW5wdXRGaWxlUHJldmlld1wiO1xyXG5yZXF1aXJlKCcuL2NoYXRfbmV3X29uZScpXHJcbnJlcXVpcmUoJy4vY2hhdF9tZW51JylcclxucmVxdWlyZSgnLi9jaGF0TWVyY3VyZVRyYWl0ZW1lbnQnKVxyXG5yZXF1aXJlKCcuL2NoYXRfY2FuYWxfaW5zdGFuY2UnKVxyXG5yZXF1aXJlKCcuL2NoYXRHcm91cENhbmFsJylcclxuJChmdW5jdGlvbigpIHtcclxuICAgIC8vIGVudm95ZXIgdW4gbWVzc2FnZVxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCAnLmNoYXQtYnRuLXNlbmQnLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGNoYXRDb250YWluZXIgPSAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LWJveC1jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBib2R5TWVzc2FnZSA9IGNoYXRDb250YWluZXIuZmluZCgnLmNhcmQtYm9keScpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0VGV4dCA9IGNoYXRDb250YWluZXIuZmluZCgnLmNoYXQtaW5wdXQtdGV4dGVzJyk7XHJcbiAgICAgICAgY29uc3QgZW1wdHlNZXNzYWdlID0gY2hhdENvbnRhaW5lci5maW5kKCcuY2hhdC1lbXB0eS1tZXNzYWdlJyk7XHJcbiAgICAgICAgY29uc3QgY29udmVyc2F0aW9uQmFzZUNvbXBvbmVudCA9IG5ldyBDb252ZXJzYXRpb25CYXNlQ29tcG9uZW50KCk7XHJcbiAgICAgICAgLy8gc29pdCBvbiBhIGxlIGNhbmFsLCBzb2l0IG9uIGEgbGUgY29kZVxyXG4gICAgICAgIGNvbnN0IGNvZGUgID0gJCh0aGlzKS5hdHRyKCdkYXRhLWNvZGUnKTtcclxuICAgICAgICBsZXQgZmlsZXMgPSBbXTtcclxuICAgICAgICBjaGF0Q29udGFpbmVyLmZpbmQoJ2lucHV0W25hbWU9XCJmaWxlc1tdXCJdJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBmaWxlcy5wdXNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VWYWx1ZSA9IGlucHV0VGV4dC52YWwoKTtcclxuICAgICAgICBpZihtZXNzYWdlVmFsdWUubGVuZ3RoID4gMCB8fCBmaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxvYWRlck9uKGJvZHlNZXNzYWdlWzBdKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHNlbmRNZXNzYWdlKG1lc3NhZ2VWYWx1ZSxjb2RlLCBmaWxlcylcclxuICAgICAgICAgICAgY29udmVyc2F0aW9uQmFzZUNvbXBvbmVudC5jbGVhclZ1KGJvZHlNZXNzYWdlKTtcclxuICAgICAgICAgICAgY29udmVyc2F0aW9uQmFzZUNvbXBvbmVudC5jbGVhckZpbGUoY2hhdENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGNoYXRDb250YWluZXIuZmluZCgnLmNoYXQtbGlzdC1ncm91cC1tZXNzYWdlcycpLmFwcGVuZChjb252ZXJzYXRpb25CYXNlQ29tcG9uZW50LmdldE1lc3NhZ2UobWVzc2FnZSkpXHJcbiAgICAgICAgICAgIGlucHV0VGV4dC52YWwoJycpO1xyXG4gICAgICAgICAgICBib2R5TWVzc2FnZVswXS5zY3JvbGxUb3AgPSBib2R5TWVzc2FnZVswXS5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgICAgIGxvYWRlck9mZihib2R5TWVzc2FnZVswXSk7XHJcbiAgICAgICAgICAgIGlmKGVtcHR5TWVzc2FnZS5sZW5ndGg+MCkge1xyXG4gICAgICAgICAgICAgICAgZW1wdHlNZXNzYWdlLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF3YWl0IHVwZGF0ZU1lbnUobWVzc2FnZS5jYW5hbClcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYWN0aXZlciBsZSBjb21wb3J0ZW1lbnQgcGFyIGTDqWZhdWx0IGRlIGwnaW5wdXRGaWxlXHJcbiAgICAvLyBjb21wb3J0ZW1lbnQgcGFyIGTDqWZhdXQgYXJyw6l0ZXIgZXQgcXVpIGVzdCBjYXVzw6kgcGFyIGwnw6l2w6huZW1lbnQgY2xpY2sgZHUgcGFyZW50XHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsICdpbnB1dFt0eXBlPVwiZmlsZVwiXScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHVwbG9hZCBmaWxlXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsJy5jaGF0LXVwbG9hZEltYWdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBpbnB1dEZpbGUgPSAkKCc8aW5wdXQgLz4nLCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdmaWxlJyxcclxuICAgICAgICAgICAgY2xhc3M6J2Qtbm9uZSdcclxuICAgICAgICB9KVxyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmNoYXQtYm94LWNvbnRhaW5lcicpLmZpbmQoJy5jaGF0LWZpbGVzLXByZXZpZXcnKS5hcHBlbmQoaW5wdXRGaWxlKTtcclxuXHJcbiAgICAgICAgaW5wdXRGaWxlLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblxyXG4gICAgfSlcclxuXHJcbiAgICAkKHRoaXMpLm9uKCdjaGFuZ2UnLCcuY2hhdC1ib3gtY29udGFpbmVyIGlucHV0W3R5cGU9XCJmaWxlXCJdJyxhc3luYyBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVySW1nID0gJCgnPGRpdiAvPicpO1xyXG4gICAgICAgIGNvbnN0IGltZyA9ICQoJzxpbWcgLz4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOidjaGF0LWZpbGUtaXRlbSdcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb250YWluZXJJbWcuaHRtbChpbWcpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmNoYXQtYm94LWNvbnRhaW5lcicpLmZpbmQoJy5jaGF0LWZpbGVzLXByZXZpZXcnKS5hcHBlbmQoY29udGFpbmVySW1nKTtcclxuICAgICAgICByZWFkVVJMKCQodGhpcylbMF0sIGltZ1swXSk7XHJcbiAgICAgICAgbG9hZGVyT24oY29udGFpbmVySW1nWzBdLCBmYWxzZSwge1xyXG4gICAgICAgICAgICAnbG9hZGVyV2lkdGgnIDogJzQwcHgnLFxyXG4gICAgICAgICAgICAnbG9hZGVySGVpZ2h0JyA6ICc0MHB4JyxcclxuICAgICAgICAgICAgJ2JhY2tkcm9wLWNvbG9yJzogJ3JnYmEoMjU1LDI1NSwyNTUsMC41KSAhaW1wb3J0YW50J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGZpbGVOYW1lID0gYXdhaXQgdXBsb2FkRmlsZSgkKHRoaXMpWzBdKTtcclxuICAgICAgICBsb2FkZXJPZmYoY29udGFpbmVySW1nWzBdKTtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LWJveC1jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBmaWxlTmFtZUlucHV0ID0gJCgnPGlucHV0IC8+Jywge1xyXG4gICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgbmFtZTogJ2ZpbGVzW10nLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZpbGVOYW1lSW5wdXQudmFsKGZpbGVOYW1lKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKGZpbGVOYW1lSW5wdXQpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvLyBzdXBwcmltZXIgbGUgY29udGVuZXVyIGR1IG1lc3NhZ2VcclxuICAgICQodGhpcykub24oJ2NsaWNrJywnLmNoYXQtYnRuLWNsb3NlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LWJveC1jb250YWluZXInKS5yZW1vdmUoKTtcclxuICAgIH0pXHJcblxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCcuY2hhdC1idG4tbWluaW1pc2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmNoYXQtYm94LWNvbnRhaW5lciwuY2hhdC1mbG9hdC1tZW51JykuYWRkQ2xhc3MoJ2NoYXQtbWluaW1pc2VkJyk7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCdpJykucmVtb3ZlQ2xhc3MoJ2ZhLWFuZ2xlLWRvd24nKS5hZGRDbGFzcygnZmEtYW5nbGUtdXAnKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjaGF0LWJ0bi1tYXhpbWlzZScpLnJlbW92ZUNsYXNzKCdjaGF0LWJ0bi1taW5pbWlzZScpO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsJy5jaGF0LWJ0bi1tYXhpbWlzZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuY2hhdC1ib3gtY29udGFpbmVyLC5jaGF0LWZsb2F0LW1lbnUnKS5yZW1vdmVDbGFzcygnY2hhdC1taW5pbWlzZWQnKTtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJ2knKS5yZW1vdmVDbGFzcygnZmEtYW5nbGUtdXAnKS5hZGRDbGFzcygnZmEtYW5nbGUtZG93bicpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2NoYXQtYnRuLW1pbmltaXNlJykucmVtb3ZlQ2xhc3MoJ2NoYXQtYnRuLW1heGltaXNlJyk7XHJcbiAgICB9KVxyXG5cclxuICAgICQodGhpcykub24oJ2ZvY3VzJywgJy5jaGF0LWlucHV0LXRleHRlcycsYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBjYW5hbF9pZCA9ICQodGhpcykuY2xvc2VzdCgnLmNoYXQtYm94LWNvbnRhaW5lcicpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAgICAgICBhd2FpdCBub3RpZnlVc2VyVHlwaW5nKGNhbmFsX2lkKVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCh0aGlzKS5vbignZm9jdXNvdXQnLCcuY2hhdC1pbnB1dC10ZXh0ZXMnLGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgY2FuYWxfaWQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LWJveC1jb250YWluZXInKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgYXdhaXQgbm90aWZ5VXNlclN0b3BUeXBpbmcoY2FuYWxfaWQpXHJcbiAgICB9KVxyXG59KTtcclxuIiwiaW1wb3J0IHtcclxuICAgIGNoYXRfZ3JvdXBDYW5hbF9hZGRVc2VyLFxyXG4gICAgY2hhdF9ncm91cENhbmFsX3JlbW92ZVVzZXIsXHJcbiAgICBjcmVhdGVHcm91cENhbmFsLFxyXG4gICAgZmluZERlc3RpbmF0YWlyZVxyXG59IGZyb20gXCIuL2NoYXRTZW5kZXJSZXF1ZXN0XCI7XHJcbmltcG9ydCB7bG9hZGVyT2ZmLCBsb2FkZXJPbn0gZnJvbSBcIi4uL2hlbHBlcnMvTG9hZGVyXCI7XHJcbmltcG9ydCB7Q2FuYWxHcm91cHNDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvQ2FuYWxHcm91cHNDb21wb25lbnRcIjtcclxuaW1wb3J0IHtNZW51Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL01lbnVDb21wb25lbnRcIjtcclxuaW1wb3J0IHtNb2RhbH0gZnJvbSAnYm9vdHN0cmFwJ1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGNhbmFsc0NvbXBvbmVudCA9IG5ldyBDYW5hbEdyb3Vwc0NvbXBvbmVudCgpXHJcbiAgICAkKHRoaXMpLm9uKCdpbnB1dCcsJy5jaGF0U2VhcmNoVXNlcicsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgYm94Q3JlYXRpb25Db250YWluZXIgPSAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LW1vZGFsLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBjb25zdCBkaXZDaGF0X3VzZXJzTGlzdCA9IGJveENyZWF0aW9uQ29udGFpbmVyLmZpbmQoJy5jaGF0X3VzZXJzTGlzdCcpO1xyXG4gICAgICAgIGlmKHNlYXJjaFZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZGl2Q2hhdF91c2Vyc0xpc3QuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgIGxvYWRlck9uKGRpdkNoYXRfdXNlcnNMaXN0WzBdLCAnT04nKTtcclxuICAgICAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBmaW5kRGVzdGluYXRhaXJlKHNlYXJjaFZhbHVlKTtcclxuICAgICAgICAgICAgZGl2Q2hhdF91c2Vyc0xpc3QuaHRtbChjYW5hbHNDb21wb25lbnQuZ2V0TGlzdFVzZXIodXNlcnMpKVxyXG4gICAgICAgICAgICBsb2FkZXJPZmYoZGl2Q2hhdF91c2Vyc0xpc3RbMF0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpdkNoYXRfdXNlcnNMaXN0Lmh0bWwoJycpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsJy5jaGF0LXNlbGVjdC11c2VyJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQoJCh0aGlzKS5hdHRyKCdkYXRhLXVzZXInKSkpXHJcbiAgICAgICAgY29uc3QgY2hhdF91c2VyQmFkZ2VMaXN0ID0gJCgnLmNoYXRfdXNlckJhZGdlTGlzdCcpO1xyXG4gICAgICAgIGlmKCQoJyNjaGF0LWJhZGdlVXNlci0nK3VzZXIuaWQpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjaGF0X3VzZXJCYWRnZUxpc3QuYXBwZW5kKGNhbmFsc0NvbXBvbmVudC51c2VyQmFkZ2UodXNlcikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsJyNjaGF0LWJ0bi1jcmVhdGVDYW5hbCcsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgaW5wdXROb20gPSAkKCcjY2hhdF9pbnB1dENhbmFsTmFtZScpO1xyXG4gICAgICAgIGNvbnN0IG5vbSA9IGlucHV0Tm9tLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IGFsZXJ0RXJyb3IgPSAkKCcuYWxlcnQtZW1wdHktbmFtZScpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJzX2lkID0gZ2V0VXNlcklkc0J5QmFkZ2UoJCh0aGlzKS5jbG9zZXN0KCcuY2hhdC1tb2RhbC1jb250YWluZXInKSk7XHJcblxyXG4gICAgICAgIGlmKG5vbS5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICBhbGVydEVycm9yLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2FuYWxNZXNzYWdlID0gYXdhaXQgY3JlYXRlR3JvdXBDYW5hbChub20sIHVzZXJzX2lkKTtcclxuICAgICAgICBpZihjYW5hbE1lc3NhZ2UuZXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnRFcnJvci5yZW1vdmVDbGFzcygnZC1ub25lJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgIGNvbnN0IG1lbnVDb21wb25lbnQgPSBuZXcgTWVudUNvbXBvbmVudCgpO1xyXG4gICAgICAgICAgIGNvbnN0IGdyb3VwSW5zdGFuY2UgPSBtZW51Q29tcG9uZW50LmdldEdyb3Vwc0NhbmFsSXRlbShjYW5hbE1lc3NhZ2UpO1xyXG4gICAgICAgICAgICQoJy5jaGF0LWxpc3QtZ3JvdXBDYW5hbCcpLmFwcGVuZChncm91cEluc3RhbmNlKTtcclxuICAgICAgICAgICAkKCdbZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIl0nKS50cmlnZ2VyKCdjbGljaycpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbiAgICAkKHRoaXMpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCcjY2hhdE1vZGFsQ3JlYXRlR3JvdXBzJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICQoJyNjaGF0X2lucHV0Q2FuYWxOYW1lJykudmFsKCcnKTtcclxuICAgICAgICAkKCcuY2hhdC1iYWRnZVVzZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5jaGF0X3VzZXJzTGlzdCcpLmh0bWwoJycpO1xyXG4gICAgICAgICQoJyNjaGF0U2VhcmNoVXNlcicpLnZhbCgnJyk7XHJcbiAgICB9KVxyXG5cclxuICAgICQodGhpcykub24oJ2hpZGRlbi5icy5tb2RhbCcsJy5jaGF0LW1vZGFsLWFkZFVzZXJzJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsICcjY2hhdC1idG4tYWRkVXNlcnMnLGFzeW5jIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBtb2RhbF9jb250YWluZXIgPSAkKHRoaXMpLmNsb3Nlc3QoJy5jaGF0LW1vZGFsLWNvbnRhaW5lcicpXHJcbiAgICAgICAgY29uc3QgdXNlcnNfaWQgPSBnZXRVc2VySWRzQnlCYWRnZShtb2RhbF9jb250YWluZXIpO1xyXG4gICAgICAgIGF3YWl0IGNoYXRfZ3JvdXBDYW5hbF9hZGRVc2VyKG1vZGFsX2NvbnRhaW5lci5hdHRyKCdkYXRhLWNhbmFsLWlkJyksIHVzZXJzX2lkKVxyXG4gICAgICAgIG1vZGFsX2NvbnRhaW5lci5maW5kKCcuYWxlcnQtc3VjY2VzcycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKG1vZGFsX2NvbnRhaW5lcikuZmluZCgnW2RhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCJdJykudHJpZ2dlcignY2xpY2snKVxyXG4gICAgICAgIH0sIDUwMClcclxuICAgIH0pXHJcblxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCAnLmNoYXQtcmVtb3ZlLXVzZXInLGFzeW5jIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgYXdhaXQgY2hhdF9ncm91cENhbmFsX3JlbW92ZVVzZXIoJCh0aGlzKS5hdHRyKCdkYXRhLWNhbmFsLWlkJykpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmNoYXQtY2hvb3NlLWNhbmFsJykucmVtb3ZlKClcclxuICAgIH0pXHJcblxyXG5cclxufSk7XHJcblxyXG5mdW5jdGlvbiBnZXRVc2VySWRzQnlCYWRnZShjb250YWluZXIpXHJcbntcclxuICAgIGxldCB1c2Vyc19pZCA9IFtdO1xyXG4gICAgJChjb250YWluZXIpLmZpbmQoJy5jaGF0LWJhZGdlVXNlcicpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdXNlcnNfaWQucHVzaCgkKHRoaXMpLmF0dHIoJ2RhdGEtdXNlci1pZCcpKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdXNlcnNfaWQ7XHJcbn0iLCJpbXBvcnQge0NvbnZlcnNhdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9Db252ZXJzYXRpb25Db21wb25lbnRcIjtcclxuaW1wb3J0IHtzaG93TWVzc2FnZUluc3RhbmNlLCB1cGRhdGVNZW51fSBmcm9tIFwiLi9oZWxwZXJzL2NoYXRfaGVscGVyc1wiO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAgIC8vIGRldGVjdGVyIHMnaWwgeSBhIHVuIG1lc3NhZ2VcclxuICAgIC8vIGNvbnN0IGNoYXRfbmV3TWVzc2FnZV90b3BpYyA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0LW5ld01lc3NhZ2UtdG9waWNcIikudGV4dENvbnRlbnQpO1xyXG4gICAgLy8gY29uc3QgY2hhdF92dV90b3BpYyA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0LXZ1LXRvcGljXCIpLnRleHRDb250ZW50KTtcclxuICAgIC8vIGNvbnN0IGNoYXRfdXNlclR5cGluZ190b3BpYyA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0LXVzZXJUeXBpbmctdG9waWNcIikudGV4dENvbnRlbnQpO1xyXG4gICAgLy8gY29uc3QgY2hhdF91c2VyU3RvcFR5cGluZ190b3BpYyA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0LXVzZXJTdG9wVHlwaW5nLXRvcGljXCIpLnRleHRDb250ZW50KTtcclxuICAgIC8vIGNvbnN0IGV2ZW50TmV3TWVzc2FnZSA9IG5ldyBFdmVudFNvdXJjZShjaGF0X25ld01lc3NhZ2VfdG9waWMpO1xyXG4gICAgLy8gY29uc3QgZXZlbnRWdSA9IG5ldyBFdmVudFNvdXJjZShjaGF0X3Z1X3RvcGljKTtcclxuICAgIC8vIGNvbnN0IGV2ZW50VXNlclR5cGluZyA9IG5ldyBFdmVudFNvdXJjZShjaGF0X3VzZXJUeXBpbmdfdG9waWMpO1xyXG4gICAgLy8gY29uc3QgZXZlbnRVc2VyU3RvcFR5cGluZyA9IG5ldyBFdmVudFNvdXJjZShjaGF0X3VzZXJTdG9wVHlwaW5nX3RvcGljKTtcclxuICAgIC8vIGNvbnN0IGNvbnZlcnNhdGlvbkNvbXBvbmVudCA9IG5ldyBDb252ZXJzYXRpb25Db21wb25lbnQoKTtcclxuICAgIC8vIHByw6lzZW5jZSBkJ3VuIG5vdXZlYXUgbWVzc2FnZVxyXG4gICAgLy8gZXZlbnROZXdNZXNzYWdlLm9ubWVzc2FnZSA9IGFzeW5jIGV2ZW50ID0+IHtcclxuICAgIC8vICAgICBjb25zdCBtZXNzYWdlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcclxuICAgIC8vICAgICBjb25zdCBjYW5hbCA9IG1lc3NhZ2UuY2FuYWw7XHJcbiAgICAvLyAgICAgY29uc3QgdXNlciA9IG1lc3NhZ2UudXNlcjtcclxuICAgIC8vICAgICAvLyBzaSB1bmUgaW5zdGFuY2UgZXN0IG91dmVydGVcclxuICAgIC8vICAgICBsZXQgakNhbmFsID0gJCgnI2NhbmFsLScrY2FuYWwuaWQpO1xyXG4gICAgLy8gICAgIGpDYW5hbC5maW5kKCcuY2hhdC1saXN0LWdyb3VwLW1lc3NhZ2VzJykuYXBwZW5kKGNvbnZlcnNhdGlvbkNvbXBvbmVudC5nZXRNZXNzYWdlKG1lc3NhZ2UpKTtcclxuICAgIC8vICAgICAvLyBzaSBsJ2luc3RhbmNlIG4nZXN0IHBhcyBvdXZlcnRlXHJcbiAgICAvLyAgICAgaWYoakNhbmFsLmxlbmd0aCA9PT0gMCApIHtcclxuICAgIC8vICAgICAgIGpDYW5hbCA9IGF3YWl0IHNob3dNZXNzYWdlSW5zdGFuY2UoY2FuYWwpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAvLyBtZXR0cmUgZW4gw6l2aWRlbmNlIGxlIGNhbmFsXHJcbiAgICAvLyAgICAgY29udmVyc2F0aW9uQ29tcG9uZW50LmFkZEhpZ2hsaWdoKGpDYW5hbClcclxuICAgIC8vICAgICAvLyBtZXR0cmUgw6Agam91ciBsZSBtZW51XHJcbiAgICAvLyAgICAgYXdhaXQgdXBkYXRlTWVudShjYW5hbClcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBxdWFuZCBxdWVscXUndW4gdm9pdCBsZSBtZXNzYWdlXHJcbiAgICAvLyBldmVudFZ1Lm9ubWVzc2FnZSA9IGFzeW5jIGV2ZW50ID0+IHtcclxuICAgIC8vICAgICBjb25zdCBjYW5hbCA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XHJcbiAgICAvLyAgICAgY29uc3QgZGVybmllck1lc3NhZ2VJdGVtID0gJCgnLmNoYXQtbGlzdC1ncm91cC1tZXNzYWdlcz4ubGlzdC1ncm91cC1pdGVtJykubGFzdCgpO1xyXG4gICAgLy8gICAgIGNvbnN0IGlkVXNlckVudm95ZXVyID0gcGFyc2VJbnQoZGVybmllck1lc3NhZ2VJdGVtLmF0dHIoJ2RhdGEtaWQtdXNlcicpKVxyXG4gICAgLy8gICAgIC8vIHNpIHVuZSBpbnN0YW5jZSBlc3Qgb3V2ZXJ0ZSBldCBxdWUgbGEgcGVyc29ubmUgcXVpIGEgdnUgbGUgbWVzc2FnZSBuJ2VzdCBwYXMgbCdlbnZveWV1clxyXG4gICAgLy8gICAgIGxldCBqQ2FuYWwgPSAkKCcjY2FuYWwtJytjYW5hbC5pZCk7XHJcbiAgICAvLyAgICAgY29udmVyc2F0aW9uQ29tcG9uZW50LmNsZWFyVnUoakNhbmFsKVxyXG4gICAgLy8gICAgIGlmKGpDYW5hbC5sZW5ndGggPiAwICYmIGlkVXNlckVudm95ZXVyICE9PSBjYW5hbC52dVBhci51c2VyLmlkICkge1xyXG4gICAgLy8gICAgICAgIC8vIHRvZG86IG1ldHRyZSB1biB2dVxyXG4gICAgLy8gICAgICAgICBjb252ZXJzYXRpb25Db21wb25lbnQuYWRkVnUoakNhbmFsLCBjYW5hbCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHF1YW5kIHF1ZWxxdSd1biBlc3QgZW4gdHJhaW4gZCfDqWNyaXJlXHJcbiAgICAvLyBldmVudFVzZXJUeXBpbmcub25tZXNzYWdlID0gYXN5bmMgZXZlbnQgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IGNhbmFsID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcclxuICAgIC8vICAgICBjb252ZXJzYXRpb25Db21wb25lbnQuYWRkVXNlclR5cGluZygkKCcuY2hhdC1ib3gtY29udGFpbmVyW2lkPVwiY2FuYWwtJytjYW5hbC5pZCsnXCJdJyksIGNhbmFsLnVzZXJUeXBpbmcpXHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gLy8gcXVhbmQgcXVlbHF1J3VuIGFycmV0ZSBkJ8OpY3JpcmVcclxuICAgIC8vIGV2ZW50VXNlclN0b3BUeXBpbmcub25tZXNzYWdlID0gYXN5bmMgZXZlbnQgPT4ge1xyXG4gICAgLy8gICAgIGNvbnN0IGNhbmFsID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcclxuICAgIC8vICAgICBjb252ZXJzYXRpb25Db21wb25lbnQucmVtb3ZlVXNlclR5cGluZygkKCcuY2hhdC1ib3gtY29udGFpbmVyW2lkPVwiY2FuYWwtJytjYW5hbC5pZCsnXCJdJyksIGNhbmFsLnVzZXJUeXBpbmcpXHJcbiAgICAvLyB9XHJcblxyXG5cclxufSk7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmREZXN0aW5hdGFpcmUoZmluZGVyKSB7XHJcbiAgICBpZihmaW5kZXIubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgcmV0dXJuIChhd2FpdCBheGlvcy5nZXQoUm91dGluZy5nZW5lcmF0ZSgndXNlcl9maW5kRGVzdCcsIHtmaW5kZXI6IGZpbmRlcn0pKSkuZGF0YTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2VCeUNvZGUoY29kZT1udWxsKVxyXG57XHJcbiAgICBpZihjb2RlICE9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIChhd2FpdCBheGlvcy5nZXQoUm91dGluZy5nZW5lcmF0ZSgnY2hhdF9nZXRNZXNzYWdlX2J5Q29kZScsIHtjb2RlIDogY29kZX0pKSkuZGF0YVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbXTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKG1lc3NhZ2UsIGNvZGUsIGZpbGVzID0gW10pIHtcclxuICAgIC8vIGVudm95ZXIgdW4gbWVzc2FnZVxyXG4gICAgY29uc3QgYm9keVJlcXVlc3QgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICBib2R5UmVxdWVzdC5hcHBlbmQoJ3RleHRlcycsIG1lc3NhZ2UpO1xyXG4gICAgZmlsZXMuZm9yRWFjaChmdW5jdGlvbihmaWxlTmFtZSkge1xyXG4gICAgICAgIGJvZHlSZXF1ZXN0LmFwcGVuZCgnZmlsZXNbXScsIGZpbGVOYW1lKVxyXG4gICAgfSlcclxuICAgIHJldHVybiAoYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgIFJvdXRpbmcuZ2VuZXJhdGUoJ2NoYXRfYWRkTWVzc2FnZScsIHtjb2RlIDogY29kZX0pLFxyXG4gICAgICAgICAgICAgICAgYm9keVJlcXVlc3RcclxuICAgICAgICApKS5kYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2luZ2xlQ2FuYWwoKVxyXG57XHJcbiAgcmV0dXJuIChhd2FpdCBheGlvcy5nZXQoUm91dGluZy5nZW5lcmF0ZSgnY2hhdF9nZXRDYW5hbFNpbmdsZU1lc3NhZ2UnKSkpLmRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRHcm91cGVDYW5hbCgpXHJcbntcclxuICAgIHJldHVybiAoYXdhaXQgYXhpb3MuZ2V0KFJvdXRpbmcuZ2VuZXJhdGUoJ2NoYXRfZ2V0Q2FuYWxNZXNzYWdlJykpKS5kYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlR3JvdXBDYW5hbChub20sIHVzZXJzX2lkKVxyXG57XHJcbiAgICBjb25zdCBib2R5UmVxdWVzdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICAgIGJvZHlSZXF1ZXN0LmFwcGVuZCgnbm9tJywgbm9tKTtcclxuICAgIHVzZXJzX2lkLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcclxuICAgICAgICBib2R5UmVxdWVzdC5hcHBlbmQoJ3VzZXJzW10nLCBpZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKGF3YWl0IGF4aW9zLnBvc3QoUm91dGluZy5nZW5lcmF0ZSgnY2hhdF9jcmVhdGVHcm91cENhbmFsJyksIGJvZHlSZXF1ZXN0KSkuZGF0YVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VlQ2FuYWwoY2FuYWxfaWQpXHJcbntcclxuICAgIHJldHVybiAoYXdhaXQgYXhpb3MuZ2V0KFJvdXRpbmcuZ2VuZXJhdGUoJ2NoYXRfdnVNZXNzYWdlJywge2lkOmNhbmFsX2lkfSkpKS5kYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbm90aWZ5VXNlclR5cGluZyhjYW5hbF9pZClcclxue1xyXG4gICAgcmV0dXJuIChhd2FpdCBheGlvcy5nZXQoUm91dGluZy5nZW5lcmF0ZSgnY2hhdF9ub3RpZnlVc2VyVHlwaW5nJywge2lkOmNhbmFsX2lkfSkpKS5kYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbm90aWZ5VXNlclN0b3BUeXBpbmcoY2FuYWxfaWQpXHJcbntcclxuICAgIHJldHVybiAoYXdhaXQgYXhpb3MuZ2V0KFJvdXRpbmcuZ2VuZXJhdGUoJ2NoYXRfbm90aWZ5VXNlclN0b3BUeXBpbmcnLCB7aWQ6Y2FuYWxfaWR9KSkpLmRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGF0X2dyb3VwQ2FuYWxfcmVtb3ZlVXNlcihjYW5hbF9pZClcclxue1xyXG4gICAgcmV0dXJuIChhd2FpdCBheGlvcy5kZWxldGUoUm91dGluZy5nZW5lcmF0ZSgnY2hhdF9ncm91cENhbmFsX3JlbW92ZVVzZXInLCB7aWQ6Y2FuYWxfaWQsIGluY2x1ZGVNZTp0cnVlfSkpKS5kYXRhO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hhdF9ncm91cENhbmFsX2FkZFVzZXIoY2FuYWxfaWQsIHVzZXJzX2lkKSB7XHJcbiAgICBjb25zdCBib2R5UmVxdWVzdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuICAgIHVzZXJzX2lkLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcclxuICAgICAgICBib2R5UmVxdWVzdC5hcHBlbmQoJ3VzZXJzW10nLCBpZCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoYXdhaXQgYXhpb3MucG9zdChSb3V0aW5nLmdlbmVyYXRlKCdjaGF0X2dyb3VwQ2FuYWxfYWRkVXNlcicsIHtpZDpjYW5hbF9pZH0pLCBib2R5UmVxdWVzdCkpLmRhdGFcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwbG9hZEZpbGUoZmlsZVVwbG9hZCkge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZVVwbG9hZC5maWxlc1swXSk7XHJcbiAgICBjb25zdCByZXNwb25zZSAgPSAoYXdhaXQgYXhpb3MucG9zdChSb3V0aW5nLmdlbmVyYXRlKCdjaGF0X2ltcG9ydEZpbGUnKSwgZm9ybURhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcclxuICAgICAgICB9XHJcbiAgICB9KSkuZGF0YTtcclxuICAgIGlmKCFyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5maWxlVXJsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCB7Q29udmVyc2F0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnZlcnNhdGlvbkNvbXBvbmVudFwiO1xyXG5pbXBvcnQge3Nob3dNZXNzYWdlSW5zdGFuY2UsIHVwZGF0ZU1lbnV9IGZyb20gXCIuL2hlbHBlcnMvY2hhdF9oZWxwZXJzXCJcclxuaW1wb3J0IHtzZWVDYW5hbH0gZnJvbSBcIi4vY2hhdFNlbmRlclJlcXVlc3RcIjtcclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjb252ZXJzYXRpb25Db21wb25lbnQgPSBuZXcgQ29udmVyc2F0aW9uQ29tcG9uZW50KCk7XHJcbiAgICAvLyBsb3JzcXUnb24gY2hvaXNpIHVuIGNhbmFsXHJcbiAgICAkKHRoaXMpLm9uKCdjbGljaycsICcuY2hhdC1jaG9vc2UtY2FuYWwnLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgY2FuYWwgPSBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudCgkKHRoaXMpLmF0dHIoJ2RhdGEtY2FuYWwnKSkpO1xyXG4gICAgICAgIGlmKCQoJy5jaGF0LWNhbmFsLWluc3RhbmNlW2RhdGEtaWQ9XCInK2NhbmFsLmlkKydcIl0nKS5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICBzaG93TWVzc2FnZUluc3RhbmNlKGNhbmFsKS50aGVuKGZ1bmN0aW9uKCl7fSk7XHJcbiAgICAgICAgICAgIC8vIG9uIGVudm9pZSB1biB2dSBzZXVsZW1lbnQgc2kgbGUgY2FuYWwgZW4gcXVlc3RpbiBuJ2VzdCBwYXMgZW5jb3JlIHZ1XHJcbiAgICAgICAgICAgIGlmKCQoJ1tkYXRhLWNhbmFsLW1lbnUtaWQ9XCInK2NhbmFsLmlkKydcIl0nKS5maW5kKCcuY2hhdC1ub3Qtc2VlbicpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHNlZUNhbmFsKGNhbmFsLmlkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgdXBkYXRlTWVudShjYW5hbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCAnLmNoYXQtY2FuYWwtaW5zdGFuY2UnLGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5maW5kKCcuaGlnaGxpZ2h0LWNhbmFsJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb252ZXJzYXRpb25Db21wb25lbnQucmVtb3ZlSGlnaGxpZ2h0KHRoaXMpO1xyXG4gICAgICAgICAgICBhd2FpdCBzZWVDYW5hbCgkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtID0gJCgnLmxpc3QtZ3JvdXAtaXRlbScpXHJcbiAgICAgICAgICAgIG1lbnVJdGVtLnJlbW92ZUNsYXNzKCdiZy1ncmV5LTEnKVxyXG4gICAgICAgICAgICBtZW51SXRlbS5maW5kKCcuY2hhdC1ub3Qtc2VlbicpLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pOyIsImltcG9ydCB7Z2V0R3JvdXBlQ2FuYWwsIGdldFNpbmdsZUNhbmFsfSBmcm9tIFwiLi9jaGF0U2VuZGVyUmVxdWVzdFwiO1xyXG5pbXBvcnQge2xvYWRlck9mZiwgbG9hZGVyT259IGZyb20gXCIuLi9oZWxwZXJzL0xvYWRlclwiO1xyXG5pbXBvcnQge01lbnVDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9NZW51Q29tcG9uZW50J1xyXG5pbXBvcnQge01vZGFsfSBmcm9tICdib290c3RyYXAnXHJcbmltcG9ydCB7Q2FuYWxHcm91cHNDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvQ2FuYWxHcm91cHNDb21wb25lbnRcIjtcclxuXHJcbiQoIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zdCBjaGF0U2luZ2xlQ2FuYWwgPSAkKCcuY2hhdC1zaW5nbGUtY2FuYWwnKTtcclxuICAgICAgY29uc3QgY2hhdEdyb3VwQ2FuYWwgPSAkKCcuY2hhdC1ncm91cGUtY2FuYWwnKTtcclxuICAgICAgY29uc3QgbWVudUNvbXBvbmVudCA9IG5ldyBNZW51Q29tcG9uZW50KCk7XHJcbiAgICAgIC8vIGNoYXJnZXIgbGVzIGNhbmFsc1xyXG4gICAgICBsb2FkZXJPbihjaGF0U2luZ2xlQ2FuYWxbMF0sIHRydWUpO1xyXG4gICAgICBnZXRTaW5nbGVDYW5hbCgpLnRoZW4oZnVuY3Rpb24oc2luZ2xlQ2FuYWxzKSB7XHJcbiAgICAgICAgICAgIGNoYXRTaW5nbGVDYW5hbC5odG1sKG1lbnVDb21wb25lbnQuZ2V0U2luZ2xlQ2FuYWwoc2luZ2xlQ2FuYWxzKSk7XHJcbiAgICAgICAgICAgIGxvYWRlck9mZihjaGF0U2luZ2xlQ2FuYWxbMF0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIGNoYXJnZXIgbGVzIGdyb3VwZXMgY2FuYWxzXHJcbiAgICAgIGxvYWRlck9uKGNoYXRHcm91cENhbmFsWzBdLCB0cnVlKTtcclxuICAgICAgZ2V0R3JvdXBlQ2FuYWwoKS50aGVuKGZ1bmN0aW9uKGdyb3VwZUNhbmFscykge1xyXG4gICAgICAgICAgICBjaGF0R3JvdXBDYW5hbC5odG1sKG1lbnVDb21wb25lbnQuZ2V0R3JvdXBzQ2FuYWwoZ3JvdXBlQ2FuYWxzKSlcclxuICAgICAgICAgICAgbG9hZGVyT2ZmKGNoYXRHcm91cENhbmFsWzBdKTtcclxuICAgICAgfSlcclxuXHJcbiAgICAgICQodGhpcykub24oJ2lucHV0JywnLmNoYXQtbWVudS1zZWFyY2gnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VhcmNoX3ZhbHVlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAgICAgY29uc3QgbGlzdENhbmFsID0gJCgnLmNoYXQtY2hvb3NlLWNhbmFsJylcclxuICAgICAgICAgICAgaWYoc2VhcmNoX3ZhbHVlLmxlbmd0aD4wKSB7XHJcbiAgICAgICAgICAgICAgICAgIGxpc3RDYW5hbC5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2Qtbm9uZScpXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIGxpc3RDYW5hbC5maWx0ZXIoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YV9zZWFyY2ggPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc2VhcmNoJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gZGF0YV9zZWFyY2gudG9Mb3dlckNhc2UoKS5tYXRjaChzZWFyY2hfdmFsdWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2gubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgIH0pLnJlbW92ZUNsYXNzKCdkLW5vbmUnKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBsaXN0Q2FuYWwuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICB9KVxyXG4gICAgICAkKHRoaXMpLm9uKCdjbGljaycsJy5jaGF0LWFkZC11c2VycycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBjYW5hbEdyb3VwQ29tcG9uZW50ID0gbmV3IENhbmFsR3JvdXBzQ29tcG9uZW50KCk7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoY2FuYWxHcm91cENvbXBvbmVudC5nZXRNb2RhbEFkZFVzZXIoJCh0aGlzKS5hdHRyKCdkYXRhLWNhbmFsLWlkJykpKTtcclxuICAgICAgICAgICAgY29uc3QgbW9kYWxBZGRVc2VyID0gbmV3IE1vZGFsKCQoJyNjaGF0TW9kYWxBZGRVc2VycycpKTtcclxuICAgICAgICAgICAgbW9kYWxBZGRVc2VyLnNob3coKVxyXG4gICAgICB9KVxyXG5cclxufSk7XHJcblxyXG5cclxuIiwiaW1wb3J0IHtsb2FkZXJPZmYsIGxvYWRlck9ufSBmcm9tIFwiLi4vaGVscGVycy9Mb2FkZXJcIjtcclxuaW1wb3J0IHtmaW5kRGVzdGluYXRhaXJlLCBnZXRNZXNzYWdlQnlDb2RlfSBmcm9tIFwiLi9jaGF0U2VuZGVyUmVxdWVzdFwiO1xyXG5pbXBvcnQge05ld0NvbnZlcnNhdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9OZXdDb252ZXJzYXRpb25Db21wb25lbnRcIjtcclxuaW1wb3J0IHtzaG93TWVzc2FnZUluc3RhbmNlfSBmcm9tIFwiLi9oZWxwZXJzL2NoYXRfaGVscGVyc1wiO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IG5ld0NvbnZlcnNhdGlvbkNvbXBvbmVudCA9IG5ldyBOZXdDb252ZXJzYXRpb25Db21wb25lbnQoKTtcclxuICAgIC8vIG5vdXZlYXUgbWVzc2FnZVxyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCAnLmNoYXQtYnRuLW5ld09uZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2hvd01lc3NhZ2VJbnN0YW5jZSgpLnRoZW4ociA9PiB7fSlcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJlY2hlcmNoZSBkJ3VuIHV0aWxpc2F0ZXVyIHN1ciBsYSBzZWN0aW9uIG5vdXZlYXUgbWVzc2FnZVxyXG4gICAgJCh0aGlzKS5vbignaW5wdXQnLCcjc2VhcmNoLXVzZXInLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGJvZHlNZXNzYWdlID0gJCgnLmNoYXQtZmxvYXQtbmV3T25lPi5jYXJkLWJvZHknKVxyXG4gICAgICAgIGxvYWRlck9uKGJvZHlNZXNzYWdlWzBdKTtcclxuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IGZpbmREZXN0aW5hdGFpcmUoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBuZXdDb252ZXJzYXRpb25Db21wb25lbnQuZ2V0TGlzdFVzZXIodXNlcnMpO1xyXG4gICAgICAgIGJvZHlNZXNzYWdlLmh0bWwodGVtcGxhdGUpO1xyXG4gICAgICAgIGxvYWRlck9mZihib2R5TWVzc2FnZVswXSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjaG9peCBkJ3VuIHV0aWxpc2F0ZXVyIHBvdXIgb3V2cmlyIHVuZSBjb25uZXhpb25cclxuICAgICQodGhpcykub24oJ2NsaWNrJywgJy5jaGF0LWNob29zZS11c2VyJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBib2R5TWVzc2FnZSA9ICQoJy5jaGF0LWZsb2F0LW5ld09uZT4uY2FyZC1ib2R5JylcclxuICAgICAgICBjb25zdCBzdWJIZWFkZXIgPSAkKCcuY2hhdC1mbG9hdC1uZXdPbmU+LmNhcmQtc3ViLWhlYWRlcicpXHJcbiAgICAgICAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KCQodGhpcykuYXR0cignZGF0YS11c2VyJykpKVxyXG4gICAgICAgIGJvZHlNZXNzYWdlLmh0bWwoJycpO1xyXG4gICAgICAgIHN1YkhlYWRlci5odG1sKG5ld0NvbnZlcnNhdGlvbkNvbXBvbmVudC5nZXRIZWFkZXIodXNlcikpXHJcbiAgICAgICAgbG9hZGVyT24oYm9keU1lc3NhZ2VbMF0pO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gYXdhaXQgZ2V0TWVzc2FnZUJ5Q29kZSh1c2VyLmNoYXRDb2RlKTtcclxuICAgICAgICAvLyBjaGFyZ2VyIGxlcyBtZXNzYWdlc1xyXG4gICAgICAgIGJvZHlNZXNzYWdlLmh0bWwobmV3Q29udmVyc2F0aW9uQ29tcG9uZW50LmdldE1lc3NhZ2VzKG1lc3NhZ2VzKSk7XHJcblxyXG4gICAgICAgICQoJy5jaGF0LWJ0bi1zZW5kJykuYXR0cignZGF0YS1jb2RlJywgdXNlci5jaGF0Q29kZSk7XHJcbiAgICAgICAgbG9hZGVyT2ZmKGJvZHlNZXNzYWdlWzBdKVxyXG4gICAgfSlcclxuXHJcbn0pOyIsImV4cG9ydCBjbGFzcyBDYW5hbEdyb3Vwc0NvbXBvbmVudCB7XHJcbiAgICB1c2Vycz1bXTtcclxuICAgIGdldE1vZGFsQWRkVXNlcihjYW5hbF9pZClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gJzwhLS0gTW9kYWwgLS0+XFxuJyArXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZSB0ZXh0LXN0YXJ0IGNoYXQtbW9kYWwtYWRkVXNlcnMgY2hhdC1tb2RhbC1jb250YWluZXJcIiBpZD1cImNoYXRNb2RhbEFkZFVzZXJzXCIgZGF0YS1jYW5hbC1pZD1cIicrY2FuYWxfaWQrJ1wiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5Bam91dGVyIGRlcyBtZW1icmVzIGRhbnMgbGUgZ3JvdXBlPC9oNT5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1jbG9zZVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+PC9idXR0b24+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxuJytcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzIGFsZXJ0LWVtcHR5LW5hbWUgZC1ub25lXCIgcm9sZT1cImFsZXJ0XCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIEVucmVnaXN0cmVtZW50IGVmZmVjdHXDqVxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDwvZGl2PicrXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXRfdXNlckJhZGdlTGlzdCBtYi0yXCI+XFxuJyArXHJcbiAgICAgICAgICAgICdcXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8ZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZXhhbXBsZUZvcm1Db250cm9sSW5wdXQxXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+QWpvdXRlciBkZXMgbWVtYnJlczwvbGFiZWw+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGNoYXRTZWFyY2hVc2VyXCIgaWQ9XCJjaGF0U2VhcmNoVXNlclwiIHBsYWNlaG9sZGVyPVwiUmVjaGVyY2hlciB1biB1dGlsaXNhdGV1clwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGF0X3VzZXJzTGlzdCBtdC0yXCI+XFxuJyArXHJcbiAgICAgICAgICAgICdcXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCI+RmVybWVyPC9idXR0b24+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBpZD1cImNoYXQtYnRuLWFkZFVzZXJzXCI+RW5yZWdpc3RyZXI8L2J1dHRvbj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJzwvZGl2PidcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaXN0VXNlcih1c2VycyA9IFtdKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9ICcnO1xyXG4gICAgICAgIGlmKHVzZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHVzZXJzLmZvckVhY2goZnVuY3Rpb24odXNlcikge1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gdGhhdC5nZXRMaXN0VXNlckl0ZW0odXNlcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEVtcHR5TGlzdFVzZXJNZXNzYWdlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJzx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaCBcIj5cXG4nICtcclxuICAgICAgICAgICAgdGVtcGxhdGUgK1xyXG4gICAgICAgICAgICAnPC91bD4nO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpc3RVc2VySXRlbSh1c2VyKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHVzZXJTdHJpbmdpZmllZCA9IGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudD1cclxuICAgICAgICAgICAgJzxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBjaGF0LXNlbGVjdC11c2VyICBwYi0wIHBzLTNcIiBpZD1cImNoYXQtdXNlci0nK3VzZXIuaWQrJ1wiIGRhdGEtdXNlcj1cIicrdXNlclN0cmluZ2lmaWVkKydcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vbWRvLnBuZ1wiIGFsdD1cImh1Z2VuZXJkXCIgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZVwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTAgcHMtMlwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICA8c3Bhbj4nK3VzZXIubm9tKycgJysgdXNlci5wcmVub20rJzwvc3Bhbj48YnI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1tdXRlZCBmcy0xMiBsaW5lLWhlaWdodC0xMyBwYi0zIG1iLTAgYm9yZGVyLWJvdHRvbVwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAnK3VzZXIuZW1haWwrXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgIDwvcD5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgPC9kaXY+XFxuJ1xyXG4gICAgICAgICc8L2xpPic7XHJcblxyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RW1wdHlMaXN0VXNlck1lc3NhZ2UoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWV5ZS1kcm9wcGVyLWVtcHR5XCI+PC9pPiBBdWN1biByw6lzdWx0YXQgJ1xyXG4gICAgICAgICc8L2Rpdj4nO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1c2VyQmFkZ2UodXNlcilcclxuICAge1xyXG4gICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImJhZGdlIGJnLXByaW1hcnkgbWUtMiBjaGF0LWJhZGdlVXNlclwiIGRhdGEtdXNlci1pZD1cIicrdXNlci5pZCsnXCIgaWQ9XCJjaGF0LWJhZGdlVXNlci0nK3VzZXIuaWQrJ1wiPicrdXNlci5ub20rJyAnK3VzZXIucHJlbm9tKycgJyArXHJcbiAgICAgICAgICAgJzxhIGhyZWY9XCIjXCIgb25jbGljaz1cIiQodGhpcykucGFyZW50KCkucmVtb3ZlKClcIiBjbGFzcz1cIm1zLTIgdGV4dC13aGl0ZSBiZy1kYW5nZXIgcHgtMSByb3VuZGVkIGNoYXQtZGVsZXRlLWJhZGdlVXNlclwiPjxpIGNsYXNzPVwiZmEgZmEtY2xvc2VcIj48L2k+PC9hPicgK1xyXG4gICAgICAgICAgICc8L3NwYW4+J1xyXG4gICB9XHJcblxyXG4gICBjbGVhclVzZXJCYWRnZSgpXHJcbiAgIHtcclxuICAgICAgICQoJy5jaGF0LWJhZGdlVXNlcicpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgfSk7XHJcbiAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBDb252ZXJzYXRpb25CYXNlQ29tcG9uZW50IHtcclxuICAgIGdldEVtcHR5TWVzc2FnZXMoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG10LTQgY2hhdC1lbXB0eS1tZXNzYWdlXCI+JyArXHJcbiAgICAgICAgICAgICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWV5ZS1kcm9wcGVyLWVtcHR5XCI+PC9pPiBBdWN1biBtZXNzYWdlIGRpc3BvbmlibGU8YnI+JyArXHJcbiAgICAgICAgICAgICc8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+RW52b3llciB1biBtZXNzYWdlIHBvdXIgZMOpbWFycmVyIGxhIGRpc2N1c3Npb248L3NtYWxsPicrXHJcbiAgICAgICAgICAgICc8L2Rpdj4nXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWVzc2FnZXMobWVzc2FnZXMpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gJyc7XHJcbiAgICAgICAgaWYobWVzc2FnZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpc1xyXG4gICAgICAgICAgICBtZXNzYWdlcy5mb3JFYWNoKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IHRoYXQuZ2V0TWVzc2FnZShtZXNzYWdlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlICs9IHRoaXMuZ2V0RW1wdHlNZXNzYWdlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJzx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaCBjaGF0LWxpc3QtZ3JvdXAtbWVzc2FnZXNcIj5cXG4nICtcclxuICAgICAgICAgICAgdGVtcGxhdGUrXHJcbiAgICAgICAgICAgICc8L3VsPidcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWVzc2FnZShtZXNzYWdlKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VySWQgPSBwYXJzZUludCgkKCcjY3VycmVudC11c2VyLWlkJykudGV4dCgpKTtcclxuICAgICAgICBsZXQgaW1ncyA9ICcnO1xyXG4gICAgICAgIGlmKG1lc3NhZ2UuZmlsZXMgIT1udWxsICYmIG1lc3NhZ2UuZmlsZXMubGVuZ3RoPjApIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5maWxlcy5mb3JFYWNoKGZ1bmN0aW9uKHVybCkge1xyXG4gICAgICAgICAgICAgICBpbWdzICs9ICc8ZGl2IGNsYXNzPVwicGItMiBwdC0yIG10LTJcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aW1nIHNyYz1cIicrdXJsKydcIiBhbHQ9XCJsZSBmaWNoaWVyIG5lIHBldXQgw6p0cmUgY2hhcmdlclwiIGNsYXNzPVwiY2hhdC1pbWFnZVwiIC8+JytcclxuICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGF2YXRhciA9ICcvdXNlci9hdmF0YXIvJyttZXNzYWdlLnVzZXIuaWQ7XHJcbiAgICAgICAgbGV0IG9uZXJyb3IgPSAnb25lcnJvcj1cInRoaXMub25lcnJvcj1udWxsOyB0aGlzLnNyYz1cXCcvYXNzZXRzL3Z1ZXh5L2ltYWdlcy9wb3J0cmFpdC9zbWFsbC9hdmF0YXItcy0xMS5qcGdcXCdcIidcclxuICAgICAgICBpZihjdXJyZW50VXNlcklkICE9PSBtZXNzYWdlLnVzZXIuaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICc8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gIHBiLTIgcHMtMyBwZS01XCIgZGF0YS1pZC11c2VyPVwiJyttZXNzYWdlLnVzZXIuaWQrJ1wiPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTIgZC1mbGV4XCI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCInK2F2YXRhcisnXCIgJytvbmVycm9yKycgYWx0PVwiaHVnZW5lcmRcIiB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiBjbGFzcz1cInJvdW5kZWQtY2lyY2xlIG15LWF1dG9cIj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMCBwcy0yIHJvdW5kZWQtMyBiZy1saWdodC1ncmF5XCI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmdy1ib2xkIGxpbmUtaGVpZ2h0LTEzIGZzLTEzXCI+JyttZXNzYWdlLnVzZXIubm9tKycgJyttZXNzYWdlLnVzZXIucHJlbm9tKyc8L3NwYW4+PGJyPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC0wIGxpbmUtaGVpZ2h0LTEzIHRleHQtbXV0ZWQgZnMtMTEgYm9yZGVyLWJvdHRvbSBwYi0yXCI+RW52b3llciAnK21lc3NhZ2UucmVuZHVEYXRlQ3JlYXRpb25NZXNzYWdlKyc8L3NwYW4+XFxuJyArXHJcbiAgICAgICAgICAgICAgICBpbWdzK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiIGZzLTE0IGxpbmUtaGVpZ2h0LTE3IG10LTIgbWItMCBwdC0yIHBiLTIgXCI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLnRleHRlcysnXFxuJytcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICA8L3A+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgPC9saT5cXG4nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIHBzLTUgIHBiLTIgdGV4dC1lbmQgXCIgZGF0YS1pZC11c2VyPVwiJyttZXNzYWdlLnVzZXIuaWQrJ1wiPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEwIHBzLTIgcm91bmRlZC0zIGJnLWxpZ2h0LXByaW1hcnlcIj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZ3LWJvbGQgbGluZS1oZWlnaHQtMTMgZnMtMTMgXCI+JyttZXNzYWdlLnVzZXIubm9tKycgJyttZXNzYWdlLnVzZXIucHJlbm9tKyc8L3NwYW4+PGJyPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC0wIGxpbmUtaGVpZ2h0LTEzIGZzLTExICAgIGJvcmRlci1ib3R0b20gYm9yZGVyLWNvbG9yLWxpZ2h0LXByaW1hcnkgcGItMlwiPkVudm95ZXIgJyttZXNzYWdlLnJlbmR1RGF0ZUNyZWF0aW9uTWVzc2FnZSsnPC9zcGFuPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgaW1ncytcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIiBmcy0xNCBsaW5lLWhlaWdodC0xNyBtYi0wIG10LTIgIHB0LTIgcGItMiBcIj5cXG4nICtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UudGV4dGVzKydcXG4nK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgIDwvcD5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0yIGQtZmxleFwiPlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJythdmF0YXIrJ1wiICcrb25lcnJvcisnIGFsdD1cImh1Z2VuZXJkXCIgd2lkdGg9XCI0MFwiIGhlaWdodD1cIjQwXCIgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZSBteS1hdXRvXCI+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgPC9saT5cXG4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldE1lc3NhZ2VGaWxlVGVtcGxhdGUobWVzc2FnZSlcclxuICAgIHtcclxuICAgICAgICBsZXQgZmlsZXNUZW1wbGF0ZVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZpbGVzVGVtcGxhdGVcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclZ1KGNvbnZlcnNhdGlvbkNvbnRhaW5lcilcclxuICAgIHtcclxuICAgICAgICAkKGNvbnZlcnNhdGlvbkNvbnRhaW5lcikuZmluZCgnLmNhbmFsLXZ1LWNvbnRhaW5lcicpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyRmlsZShjb252ZXJzYXRpb25Db250YWluZXIpIHtcclxuICAgICAgICAkKGNvbnZlcnNhdGlvbkNvbnRhaW5lcikuZmluZCgnLmNoYXQtZmlsZXMtcHJldmlldycpLmh0bWwoJycpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtCYXNlNjR9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2Jhc2U2NFwiO1xyXG5pbXBvcnQge0NvbnZlcnNhdGlvbkJhc2VDb21wb25lbnR9IGZyb20gXCIuL0NvbnZlcnNhdGlvbkJhc2VDb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb252ZXJzYXRpb25Db21wb25lbnQgZXh0ZW5kcyBDb252ZXJzYXRpb25CYXNlQ29tcG9uZW50IHtcclxuICAgIGdldENvbnZlcnNhdGlvbkNvbnRhaW5lcihjYW5hbCkge1xyXG4gICAgICAgIGxldCBpbnB1dENhY2hlVXNlciA9ICcnO1xyXG4gICAgICAgIGxldCBub21DYW5hbCA9ICcnO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRfdXNlcl9pZCA9IHBhcnNlSW50KCQoJyNjdXJyZW50LXVzZXItaWQnKS50ZXh0KCkpO1xyXG4gICAgICAgIGNhbmFsLm1lbWJyZXMuZm9yRWFjaChmdW5jdGlvbih1c2VyKXtcclxuICAgICAgICAgICAgaW5wdXRDYWNoZVVzZXIrPSc8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ1c2Vyc1tdXCIgdmFsdWU9XCInK0Jhc2U2NC5lbmNvZGUodXNlci5pZCkrJ1wiIC8+XFxuJztcclxuICAgICAgICAgICAgaWYoIWNhbmFsLmlzR3JvdXAgJiYgdXNlci5pZCAhPT0gY3VycmVudF91c2VyX2lkKSB7XHJcbiAgICAgICAgICAgICAgICBub21DYW5hbCA9IHVzZXIubm9tKycgJyt1c2VyLnByZW5vbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKGNhbmFsLmlzR3JvdXApIHtcclxuICAgICAgICAgICAgbm9tQ2FuYWwgPSBjYW5hbC5ub21cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGTDqWJ1dCBpbml0aWFsaXNhdGlvbiBkdSB2dSBsb3JzcXVlIGwnaW5zdGFuY2UgZXN0IGNoYXJnw6lcclxuICAgICAgICAvLyBzaSBsZSBjYW5hbCBlc3QgdW4gc2luZ2xlQ2FuYWxcclxuICAgICAgICBsZXQgdnVUZW1wbGF0ZSA9ICcnO1xyXG4gICAgICAgIGlmKCFjYW5hbC5pc0dyb3VwICYmIGNhbmFsLnZ1cy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgdnVUZW1wbGF0ZSA9IHRoaXMuZ2V0VnVUZW1wbGF0ZSgpWzBdLm91dGVySFRNTDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGlzR3JvdXAgPSBjYW5hbC5pc0dyb3VwID8gJ3RydWUnOiAnZmFsc2UnO1xyXG4gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cImNhcmQgc2hhZG93IGZzLTE0ICBjaGF0LWNhbmFsLWluc3RhbmNlIGNoYXQtYm94LWNvbnRhaW5lciBtYi0wIHNoYWRvdy1zbSAgXCIgZGF0YS1pc0dyb3VwPVwiJytpc0dyb3VwKydcIiBkYXRhLWlkPVwiJytjYW5hbC5pZCsnXCIgaWQ9XCJjYW5hbC0nK2NhbmFsLmlkKydcIiBzdHlsZT1cIndpZHRoOiAxOHJlbTtcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgYmctcHJpbmMgdGV4dC13aGl0ZSB3LTEwMCBweS0zXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOCBkLWZsZXhcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXktYXV0b1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8YiBjbGFzcz1cIm1zLTIgXCI+Jytub21DYW5hbCsnIDxpIGNsYXNzPVwiZmEtYnJhbmRzIGZhLWZhY2Vib29rLW1lc3NlbmdlclwiPjwvaT48L2I+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNCB0ZXh0LWVuZFwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlIGNoYXQtYnRuLW1pbmltaXNlIG1lLTJcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWFuZ2xlLWRvd25cIj48L2k+PC9hPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlIGNoYXQtYnRuLWNsb3NlXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jbG9zZVwiPjwvaT48L2E+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICdcXG4nICtcclxuICAgICAgICAgICAgJyAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHB4LTBcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPCEtLSB6b25lIGRlIG1lc3NhZ2VzIC0tPiBcXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICcrdnVUZW1wbGF0ZSsnXFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyIHAtMFwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhdC1maWxlcy1wcmV2aWV3XCI+PC9kaXY+JytcclxuICAgICAgICAgICAgJyAgICAgICAgPGRpdiBjbGFzcz1cInB5LTMgcHMtMlwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVzZXJzXCI+JyArXHJcbiAgICAgICAgICAgIGlucHV0Q2FjaGVVc2VyK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlciBzcGVlZC1saXZlVmlkZW8tY2FsbCBwZS0yXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS12aWRlb1wiPjwvaT48L2E+JyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgIDwvc3Bhbj4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC1zZWNvbmRhcnkgY2hhdC11cGxvYWRJbWFnZVwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtaW1hZ2VcIj48L2k+PC9hPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIGJnLXdoaXRlXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBib3JkZXItMCBib3JkZXItdG9wICBmcy0xMiByb3VuZGVkLTAgcHktMyBjaGF0LWlucHV0LXRleHRlc1wiIHBsYWNlaG9sZGVyPVwiRW50cmVyIHZvdHJlIG1lc3NhZ2UgLi4uXCIgYXJpYS1sYWJlbD1cIlJlY2lwaWVudFxcJ3MgdXNlcm5hbWUgd2l0aCB0d28gYnV0dG9uIGFkZG9uc1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgdGV4dC1wcmltYXJ5IGJvcmRlci0wIGJvcmRlci10b3AgY2hhdC1idG4tc2VuZFwiIGRhdGEtY29kZT1cIicrY2FuYWwuY29kZSsnXCIgdHlwZT1cImJ1dHRvblwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGFwZXItcGxhbmVcIj48L2k+PC9idXR0b24+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlSGlnaGxpZ2h0KCRjdXJyZW50T2JqZWN0KVxyXG4gICAge1xyXG4gICAgICAgICQoJGN1cnJlbnRPYmplY3QpLmZpbmQoJy5jYXJkLWhlYWRlcicpLnJlbW92ZUNsYXNzKCdoaWdobGlnaHQtY2FuYWwgIGJnLXN1Y2Nlc3MgdGV4dC13aGl0ZScpLmFkZENsYXNzKCdiZy1wcmluYycpXHJcbiAgICB9XHJcblxyXG4gICAgYWRkSGlnaGxpZ2goJGN1cnJlbnRPYmplY3QpXHJcbiAgICB7XHJcbiAgICAgICAgJCgkY3VycmVudE9iamVjdCkuZmluZCgnLmNhcmQtaGVhZGVyJykuYWRkQ2xhc3MoJ2hpZ2hsaWdodC1jYW5hbCBiZy1zdWNjZXNzIHRleHQtd2hpdGUnKS5yZW1vdmVDbGFzcygnYmctcHJpbmMnKVxyXG4gICAgfVxyXG5cclxuICAgIGdldFZ1VGVtcGxhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gJCgnPGRpdiAvPicsIHtcclxuICAgICAgICAgICAgY2xhc3M6J2NhbmFsLXZ1LWNvbnRhaW5lciB0ZXh0LWVuZCBwZS0zJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHZ1VGVtcGxhdGUgPSAnPHNwYW4gY2xhc3M9XCJmcy0xMSB0ZXh0LW11dGVkXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1leWVcIj48L2k+IDxzcGFuPnZ1PC9zcGFuPjwvc3Bhbj4nXHJcbiAgICAgICAgdGVtcGxhdGUuaHRtbCh2dVRlbXBsYXRlKTtcclxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVnUoY29udmVyc2F0aW9uQ29udGFpbmVyKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHNpIHVuIHZ1IGV4aXN0ZSBkw6lqw6AgcGFzIGxhIHBlaW5lIGRlIGxlIHJlbmRyZSDDoCBub3V2ZWF1XHJcbiAgICAgICAgbGV0IGNhbmFsVnVDb250YWluZXIgPSAkKGNvbnZlcnNhdGlvbkNvbnRhaW5lcikuZmluZCgnLmNhbmFsLXZ1LWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGlmKGNhbmFsVnVDb250YWluZXIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICQoY29udmVyc2F0aW9uQ29udGFpbmVyKS5maW5kKCcuY2FyZC1ib2R5JykuYXBwZW5kKHRoaXMuZ2V0VnVUZW1wbGF0ZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhZGRVc2VyVHlwaW5nKGNvbnZlcnNhdGlvbkNvbnRhaW5lciwgdXNlcilcclxuICAgIHtcclxuICAgICAgICAvLyBzaSB1biB0ZW1wbGF0ZSBleGlzdGUgZMOpasOgIHBhcyBsYSBwZWluZSBkZSBsZSByZW5kcmUgw6Agbm91dmVhdVxyXG4gICAgICAgIGxldCBjYW5hbFVzZXJUeXBpbmcgPSAkKGNvbnZlcnNhdGlvbkNvbnRhaW5lcikuZmluZCgnLmNhbmFsLXVzZXJUeXBpbmcnKTtcclxuICAgICAgICBpZihjYW5hbFVzZXJUeXBpbmcubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlID0gJCgnPGRpdiAvPicsIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzOidjYW5hbC11c2VyVHlwaW5nIHB5LTIgcHgtMyAgdGV4dC1tdXRlZCBmcy0xMSB0ZXh0LWVuZCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZ1VGVtcGxhdGUgPSAnPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+Jyt1c2VyLnByZW5vbSsnICcrdXNlci5ub20rJzwvc3Bhbj4gZXN0IGVuIHRyYWluIGRcXCfDqWNyaXJlLi4uJztcclxuICAgICAgICAgICAgdGVtcGxhdGUuaHRtbCh2dVRlbXBsYXRlKTtcclxuICAgICAgICAgICAgJChjb252ZXJzYXRpb25Db250YWluZXIpLmZpbmQoJy5jYXJkLWJvZHknKS5hcHBlbmQodGVtcGxhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVVc2VyVHlwaW5nKGNvbnZlcnNhdGlvbkNvbnRhaW5lcikge1xyXG4gICAgICAgICQoY29udmVyc2F0aW9uQ29udGFpbmVyKS5maW5kKCcuY2FuYWwtdXNlclR5cGluZycpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IGxvZ29Hcm91cCBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzL3VzZXJzLmpwZ1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQge1xyXG5cclxuICAgIC8vIGRlYnV0IGxpc3RlIHVzZXIgY290w6kgbWVudSBmbG90dGFudFxyXG5cclxuICAgICBnZXRTaW5nbGVDYW5hbChjYW5hbHNNZXNzYWdlKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9ICcnO1xyXG4gICAgICAgIGlmKGNhbmFsc01lc3NhZ2UubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCB0aGlzT2JqID0gdGhpcztcclxuICAgICAgICAgICAgY2FuYWxzTWVzc2FnZS5mb3JFYWNoKGZ1bmN0aW9uKGNhbmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSB0aGlzT2JqLmdldFNpbmdsZUNhbmFsSXRlbShjYW5hbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEVtcHR5U2luZ2xlQ2FuYWxNZXNzYWdlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJzx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaCBcIj5cXG4nICtcclxuICAgICAgICAgICAgdGVtcGxhdGUgK1xyXG4gICAgICAgICAgICAnPC91bD4nO1xyXG4gICAgfVxyXG5cclxuICAgZ2V0U2luZ2xlQ2FuYWxJdGVtKGNhbmFsTWVzc2FnZSlcclxuICAgIHtcclxuICAgICAgICBjb25zdCBjYW5hbFN0cmluZ2lmeSA9IGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjYW5hbE1lc3NhZ2UpKTtcclxuICAgICAgICBjb25zdCBsYXN0TWVzc2FnZSA9IGNhbmFsTWVzc2FnZS5sYXN0TWVzc2FnZSA/IGNhbmFsTWVzc2FnZS5sYXN0TWVzc2FnZS50ZXh0ZXMuc2xpY2UoMCwgODApIDogJ0NvbW1lbmNlciB2b3RyZSBwcmVtacOocmUgY29udmVyc2F0aW9uLi4uJztcclxuICAgICAgICBjb25zdCBzZWVuQ2xhc3MgPSAhY2FuYWxNZXNzYWdlLmlzU2VlbiA/ICdiZy1ncmV5LTEnOicnO1xyXG4gICAgICAgIGNvbnN0IGV5ZVNsYXNoU2VjdGlvbiA9ICFjYW5hbE1lc3NhZ2UuaXNTZWVuID9cclxuICAgICAgICAgICAgJyA8ZGl2IGNsYXNzPVwiY29sLTIgdGV4dC1kYW5nZXIgY2hhdC1ub3Qtc2VlblwiPicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWV5ZS1zbGFzaFwiPjwvaT4nK1xyXG4gICAgICAgICAgICAnIDwvZGl2PicgOiAnJztcclxuICAgICAgICBjb25zdCBjdXJyZW50X3VzZXJfaWQgPSBwYXJzZUludCgkKCcjY3VycmVudC11c2VyLWlkJykudGV4dCgpKTtcclxuICAgICAgICBjb25zdCBtZW1icmVzID0gY2FuYWxNZXNzYWdlLm1lbWJyZXM7XHJcbiAgICAgICAgbGV0IGF2YXRhciA9ICcvdXNlci9hdmF0YXIvJztcclxuICAgICAgICBsZXQgbm9tQ2FuYWwgPSAnJztcclxuICAgICAgICBtZW1icmVzLmZvckVhY2goZnVuY3Rpb24odXNlcil7XHJcbiAgICAgICAgICAgaWYodXNlci5pZCAhPT0gY3VycmVudF91c2VyX2lkKSB7XHJcbiAgICAgICAgICAgICAgIGF2YXRhciArPSB1c2VyLmlkO1xyXG4gICAgICAgICAgICAgICBub21DYW5hbCA9IHVzZXIubm9tKycgJyt1c2VyLnByZW5vbTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgbGFzdE1lc3NhZ2VDbGFzcyA9ICFjYW5hbE1lc3NhZ2UuaXNTZWVuPyAnY29sLTcnIDogJ2NvbC05JztcclxuICAgICAgICBsZXQgb25lcnJvciA9ICdvbmVycm9yPVwidGhpcy5vbmVycm9yPW51bGw7IHRoaXMuc3JjPVxcJy9hc3NldHMvdnVleHkvaW1hZ2VzL3BvcnRyYWl0L3NtYWxsL2F2YXRhci1zLTExLmpwZ1xcJ1wiJ1xyXG4gICAgICAgIGxldCBjb21wb25lbnQ9XHJcbiAgICAgICAgICAgICc8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gY2hhdC1jaG9vc2UtY2FuYWwgJytzZWVuQ2xhc3MrJyBwYi0wIHBzLTNcIiBkYXRhLWNhbmFsLW1lbnUtaWQ9XCInK2NhbmFsTWVzc2FnZS5pZCsnXCIgZGF0YS1jYW5hbD1cIicrY2FuYWxTdHJpbmdpZnkrJ1wiIGRhdGEtc2VhcmNoPVwiJytjYW5hbE1lc3NhZ2Uubm9tKydcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgPGltZyBzcmM9XCInK2F2YXRhcisnXCIgJytvbmVycm9yKycgYWx0PVwiaHVnZW5lcmRcIiB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIiBjbGFzcz1cInJvdW5kZWQtY2lyY2xlXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgPGRpdiBjbGFzcz1cIicrbGFzdE1lc3NhZ2VDbGFzcysnIHBzLTJcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgPHNwYW4+Jytub21DYW5hbCsnPC9zcGFuPjxicj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkIGZzLTEyIGxpbmUtaGVpZ2h0LTEzIHBiLTMgbWItMCBib3JkZXItYm90dG9tXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICcrbGFzdE1lc3NhZ2UrXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgIDwvcD5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICBleWVTbGFzaFNlY3Rpb24rXHJcbiAgICAgICAgICAgICcgICAgIDwvZGl2PlxcbidcclxuICAgICAgICAgICAgJzwvbGk+JztcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbXB0eVNpbmdsZUNhbmFsTWVzc2FnZSgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC1tdXRlZFwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1leWUtZHJvcHBlci1lbXB0eVwiPjwvaT4gQXVjdW5lIGNvbnZlcnNhdGlvbiBkaXNwb25pYmxlICdcclxuICAgICAgICAnPC9kaXY+JztcclxuICAgIH1cclxuXHJcbiAgIC8vICBkZWJ1dCBsaXN0ZSBncm91cGUgY2FuYWwgY290w6kgbWVudVxyXG4gICAgZ2V0R3JvdXBzQ2FuYWwoY2FuYWxzTWVzc2FnZSlcclxuICAgIHtcclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSAnJztcclxuICAgICAgICBpZihjYW5hbHNNZXNzYWdlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgdGhpc09iaiA9IHRoaXNcclxuICAgICAgICAgICAgY2FuYWxzTWVzc2FnZS5mb3JFYWNoKGZ1bmN0aW9uKGNhbmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSB0aGlzT2JqLmdldEdyb3Vwc0NhbmFsSXRlbShjYW5hbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEVtcHR5R3JvdXBzQ2FuYWxNZXNzYWdlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJzx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaCBjaGF0LWxpc3QtZ3JvdXBDYW5hbCBweC0wXCI+XFxuJyArXHJcbiAgICAgICAgICAgIHRlbXBsYXRlICtcclxuICAgICAgICAgICAgJzwvdWw+JztcclxuICAgIH1cclxuXHJcbiAgICBnZXRHcm91cHNDYW5hbEl0ZW0oY2FuYWxNZXNzYWdlKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBsYXN0TWVzc2FnZSA9IGNhbmFsTWVzc2FnZS5sYXN0TWVzc2FnZSAhPSBudWxsID8gY2FuYWxNZXNzYWdlLmxhc3RNZXNzYWdlLnRleHRlcy5zbGljZSgwLCA4MCkgOiAnRW52b3llciB2b3RyZSBwcmVtaWVyIG1lc3NhZ2UnO1xyXG4gICAgICAgIGNvbnN0IGNhbmFsU3RyaW5naWZ5ID0gZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNhbmFsTWVzc2FnZSkpO1xyXG4gICAgICAgIHJldHVybiAnPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGNoYXQtY2hvb3NlLWNhbmFsICBwYi0wIHBzLTNcIiBkYXRhLWNhbmFsPVwiJyArIGNhbmFsU3RyaW5naWZ5ICsgJ1wiIGRhdGEtc2VhcmNoPVwiJyArIGNhbmFsTWVzc2FnZS5ub20gKyAnXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgIDxpbWcgc3JjPVwiJyArIGxvZ29Hcm91cCArICdcIiBhbHQ9XCJodWdlbmVyZFwiIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIGNsYXNzPVwicm91bmRlZC1jaXJjbGVcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTkgcHMtMiBib3JkZXItYm90dG9tXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgIDxzcGFuPicgKyBjYW5hbE1lc3NhZ2Uubm9tICsgJzwvc3Bhbj48YnI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1tdXRlZCBmcy0xMiBsaW5lLWhlaWdodC0xMyBwYi0zIG1iLTAgXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICcgKyBsYXN0TWVzc2FnZSArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgIDwvcD5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1lbmQgcGItMyBjaGF0LWdyb3VwZS1hY3Rpb25cIj4gXFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImNoYXQtYWRkLXVzZXJzIHRleHQtc3VjY2Vzc1wiIGRhdGEtY2FuYWwtaWQ9XCInK2NhbmFsTWVzc2FnZS5pZCsnXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS11c2VyLXBsdXNcIj48L2k+PC9hPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJjaGF0LXJlbW92ZS11c2VyIHRleHQtZGFuZ2VyIG1zLTJcIiBkYXRhLWNhbmFsLWlkPVwiJytjYW5hbE1lc3NhZ2UuaWQrJ1wiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtcmlnaHQtZnJvbS1icmFja2V0XCI+PC9pPjwvYT5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICA8L2Rpdj4nK1xyXG4gICAgICAgICAgICAnICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJzwvbGk+JztcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbXB0eUdyb3Vwc0NhbmFsTWVzc2FnZSgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgdGV4dC1tdXRlZCBweS00XCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWV5ZS1kcm9wcGVyLWVtcHR5XCI+PC9pPiBBdWN1biBncm91cGUgICdcclxuICAgICAgICAnPC9kaXY+JztcclxuICAgIH1cclxufSIsImltcG9ydCB7QmFzZTY0fSBmcm9tIFwiLi4vLi4vaGVscGVycy9iYXNlNjRcIjtcclxuaW1wb3J0IHtDb252ZXJzYXRpb25CYXNlQ29tcG9uZW50fSBmcm9tIFwiLi9Db252ZXJzYXRpb25CYXNlQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3Q29udmVyc2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgQ29udmVyc2F0aW9uQmFzZUNvbXBvbmVudHtcclxuICAgIGdldEhlYWRlcih1c2VyKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cIm10LTMgbXMtMlwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgIDxzcGFuIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBmdy1ib2xkIGJ0bi1zbSBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgJyt1c2VyLm5vbSsnICcrdXNlci5wcmVub20rJ1xcbicgK1xyXG4gICAgICAgICAgICAnICAgIDxzcGFuIGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgdG9wLTAgc3RhcnQtMTAwIHRyYW5zbGF0ZS1taWRkbGUgcC0yIGJnLWRhbmdlciBib3JkZXIgYm9yZGVyLWxpZ2h0IHJvdW5kZWQtY2lyY2xlXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj5OZXcgYWxlcnRzPC9zcGFuPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgIDwvc3Bhbj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICA8L3NwYW4+XFxuJytcclxuICAgICAgICAgICAgJzwvZGl2PidcclxuICAgIH1cclxuICAgIGdldENvbnZlcnNhdGlvbkNvbnRhaW5lcigpIHtcclxuICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJjYXJkIHNoYWRvdyBmcy0xNCAgY2hhdC1mbG9hdC1uZXdPbmUgY2hhdC1ib3gtY29udGFpbmVyIG1iLTAgc2hhZG93LXNtXCIgc3R5bGU9XCJ3aWR0aDogMThyZW07XCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIGJnLXByaW5jIHctMTAwIHB5LTNcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC04IGQtZmxleFwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJteS1hdXRvXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzPVwibXMtMiBcIj5Ob3V2ZWF1IE1lc3NhZ2UgPGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtZmFjZWJvb2stbWVzc2VuZ2VyXCI+PC9pPjwvYj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00IHRleHQtZW5kXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtd2hpdGUgY2hhdC1idG4tbWluaW1pc2UgbWUtMlwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtYW5nbGUtZG93blwiPjwvaT48L2E+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtd2hpdGUgY2hhdC1idG4tY2xvc2VcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNsb3NlXCI+PC9pPjwvYT5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJ1xcbicgK1xyXG4gICAgICAgICAgICAnICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJjYXJkLXN1Yi1oZWFkZXJcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCAgcm91bmRlZC0wIGJvcmRlci0wIGJvcmRlci1ib3R0b20gcHktMyBmcy0xMlwiIGlkPVwic2VhcmNoLXVzZXJcIiBwbGFjZWhvbGRlcj1cIkVudHJlciBsZSBub20vZS1tYWlsIGR1IGRlc3RpbmF0YWlyZVwiIGFyaWEtbGFiZWw9XCJSZWNpcGllbnRcXCdzIHVzZXJuYW1lIHdpdGggdHdvIGJ1dHRvbiBhZGRvbnNcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBweC0wXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDwhLS0gem9uZSBkZSBtZXNzYWdlcyAtLT4gXFxuJyArXHJcbiAgICAgICAgICAgICdcXG4nICtcclxuICAgICAgICAgICAgJyAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXIgcC0wXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDxkaXYgY2xhc3M9XCJweS0zIHBzLTJcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDwhLS0gPGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtZGFuZ2VyIHBlLTJcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLXZpZGVvXCI+PC9pPjwvYT4gLS0+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8IS0tIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeVwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtaW1hZ2VcIj48L2k+PC9hPiAtLT5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBiZy13aGl0ZVwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgYm9yZGVyLTAgYm9yZGVyLXRvcCAgZnMtMTIgcm91bmRlZC0wIHB5LTMgY2hhdC1pbnB1dC10ZXh0ZXNcIiBwbGFjZWhvbGRlcj1cIkVudHJlciB2b3RyZSBtZXNzYWdlIC4uLlwiIGFyaWEtbGFiZWw9XCJSZWNpcGllbnRcXCdzIHVzZXJuYW1lIHdpdGggdHdvIGJ1dHRvbiBhZGRvbnNcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHRleHQtcHJpbWFyeSBib3JkZXItMCBib3JkZXItdG9wIGNoYXQtYnRuLXNlbmRcIiB0eXBlPVwiYnV0dG9uXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wYXBlci1wbGFuZVwiPjwvaT48L2J1dHRvbj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgPC9kaXY+XFxuJyArXHJcbiAgICAgICAgICAgICdcXG4nICtcclxuICAgICAgICAgICAgJyAgICA8L2Rpdj5cXG4nICtcclxuICAgICAgICAgICAgJzwvZGl2PidcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaXN0VXNlcih1c2VycyA9IFtdKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9ICcnO1xyXG4gICAgICAgIGlmKHVzZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHVzZXJzLmZvckVhY2goZnVuY3Rpb24odXNlcikge1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gdGhhdC5nZXRMaXN0VXNlckl0ZW0odXNlcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEVtcHR5TGlzdFVzZXJNZXNzYWdlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJzx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaCBcIj5cXG4nICtcclxuICAgICAgICAgICAgdGVtcGxhdGUgK1xyXG4gICAgICAgICAgICAnPC91bD4nO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpc3RVc2VySXRlbSh1c2VyKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHVzZXJTdHJpbmdpZmllZCA9IGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudD1cclxuICAgICAgICAgICAgJzxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBjaGF0LWNob29zZS11c2VyICBwYi0wIHBzLTNcIiBpZD1cImNoYXQtdXNlci0nK3VzZXIuaWQrJ1wiIGRhdGEtdXNlcj1cIicrdXNlclN0cmluZ2lmaWVkKydcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vbWRvLnBuZ1wiIGFsdD1cImh1Z2VuZXJkXCIgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZVwiPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOSBwcy0yXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgIDxzcGFuPicrdXNlci5ub20rJyAnKyB1c2VyLnByZW5vbSsnPC9zcGFuPjxicj5cXG4nICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkIGZzLTEyIGxpbmUtaGVpZ2h0LTEzIHBiLTMgbWItMCBib3JkZXItYm90dG9tXCI+XFxuJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICcrdXNlci5lbWFpbCtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgPC9wPlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgIDwvZGl2PlxcbicgK1xyXG4gICAgICAgICAgICAnICAgICA8L2Rpdj5cXG4nXHJcbiAgICAgICAgJzwvbGk+JztcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbXB0eUxpc3RVc2VyTWVzc2FnZSgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cXG4nICtcclxuICAgICAgICAgICAgJyAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtZXllLWRyb3BwZXItZW1wdHlcIj48L2k+IEF1Y3VuIHLDqXN1bHRhdCAnXHJcbiAgICAgICAgJzwvZGl2Pic7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtDb252ZXJzYXRpb25Db21wb25lbnR9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnZlcnNhdGlvbkNvbXBvbmVudFwiO1xyXG5pbXBvcnQge2xvYWRlck9mZiwgbG9hZGVyT259IGZyb20gXCIuLi8uLi9oZWxwZXJzL0xvYWRlclwiO1xyXG5pbXBvcnQge2dldEdyb3VwZUNhbmFsLCBnZXRNZXNzYWdlQnlDb2RlLCBnZXRTaW5nbGVDYW5hbH0gZnJvbSBcIi4uL2NoYXRTZW5kZXJSZXF1ZXN0XCI7XHJcbmltcG9ydCB7TWVudUNvbXBvbmVudH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWVudUNvbXBvbmVudFwiO1xyXG5pbXBvcnQge05ld0NvbnZlcnNhdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmV3Q29udmVyc2F0aW9uQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hvd01lc3NhZ2VJbnN0YW5jZShjYW5hbD1udWxsKVxyXG57XHJcbiAgICBjb25zdCBjb252ZXJzYXRpb25Db21wb25lbnQgPSBjYW5hbCAhPW51bGwgPyBuZXcgQ29udmVyc2F0aW9uQ29tcG9uZW50KCkgOiBuZXcgTmV3Q29udmVyc2F0aW9uQ29tcG9uZW50KCk7XHJcbiAgICBjb25zdCBjaGF0Qm94Q29udGFpbmVyID0gJCgnLmNoYXQtYm94LWNvbnRhaW5lcicpO1xyXG4gICAgaWYoY2hhdEJveENvbnRhaW5lci5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICBjaGF0Qm94Q29udGFpbmVyLmZpcnN0KCkucmVtb3ZlKClcclxuICAgIH1cclxuICAgIGxldCBtZXNzYWdlQ29udmVyc2F0aW9uQ29udGFpbmVyID0gJCgnLmNoYXQtY29udmVyc2F0aW9ucy1jb250YWluZXInKVxyXG4gICAgaWYobWVzc2FnZUNvbnZlcnNhdGlvbkNvbnRhaW5lci5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgbWVzc2FnZUNvbnZlcnNhdGlvbkNvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiAnY2hhdC1jb252ZXJzYXRpb25zLWNvbnRhaW5lciBkLWZsZXgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQobWVzc2FnZUNvbnZlcnNhdGlvbkNvbnRhaW5lcilcclxuICAgIH1cclxuXHJcbiAgICAkKG1lc3NhZ2VDb252ZXJzYXRpb25Db250YWluZXIpLmFwcGVuZChjb252ZXJzYXRpb25Db21wb25lbnQuZ2V0Q29udmVyc2F0aW9uQ29udGFpbmVyKGNhbmFsKSk7XHJcbiAgICBpZihjYW5hbCAhPSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgY2hhdF9pbnN0YW5jZSA9ICQoJyNjYW5hbC0nK2NhbmFsLmlkKTtcclxuICAgICAgICBjb25zdCBjaGF0X2luc3RhbmNlX2JvZHkgPSAkKGNoYXRfaW5zdGFuY2UpLmZpbmQoJy5jYXJkLWJvZHknKTtcclxuICAgICAgICBsb2FkZXJPbihjaGF0X2luc3RhbmNlX2JvZHlbMF0pO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gYXdhaXQgZ2V0TWVzc2FnZUJ5Q29kZShjYW5hbC5jb2RlKTtcclxuICAgICAgICAvLyBjaGFyZ2VyIGxlcyBtZXNzYWdlc1xyXG4gICAgICAgIGNoYXRfaW5zdGFuY2VfYm9keS5wcmVwZW5kKGNvbnZlcnNhdGlvbkNvbXBvbmVudC5nZXRNZXNzYWdlcyhtZXNzYWdlcykpO1xyXG4gICAgICAgIGNoYXRfaW5zdGFuY2VfYm9keVswXS5zY3JvbGxUb3AgPSBjaGF0X2luc3RhbmNlX2JvZHlbMF0uc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgIGxvYWRlck9mZihjaGF0X2luc3RhbmNlX2JvZHlbMF0pO1xyXG4gICAgICAgIHJldHVybiBjaGF0X2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlTWVudShjYW5hbClcclxue1xyXG4gICAgY29uc3QgbWVudUNvbXBvbmVudCA9IG5ldyBNZW51Q29tcG9uZW50KCk7XHJcbiAgICBpZihjYW5hbC5pc0dyb3VwKSB7XHJcbiAgICAgICAgZ2V0R3JvdXBlQ2FuYWwoKS50aGVuKGZ1bmN0aW9uKGdyb3VwZUNhbmFscykge1xyXG4gICAgICAgICAgICAkKCcuY2hhdC1ncm91cGUtY2FuYWwnKS5odG1sKG1lbnVDb21wb25lbnQuZ2V0R3JvdXBzQ2FuYWwoZ3JvdXBlQ2FuYWxzKSlcclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBnZXRTaW5nbGVDYW5hbCgpLnRoZW4oZnVuY3Rpb24oc2luZ2xlQ2FuYWxzKSB7XHJcbiAgICAgICAgICAgICQoJy5jaGF0LXNpbmdsZS1jYW5hbCcpLmh0bWwobWVudUNvbXBvbmVudC5nZXRTaW5nbGVDYW5hbChzaW5nbGVDYW5hbHMpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IGNpcmNsZUltYWdlIGZyb20gJy4uLy4uL2ltYWdlcy9QcmVsb2FkZXItaW1hZ2UtMS5zdmcnXHJcbmltcG9ydCBjaXJjbGVJbWFnZTIgZnJvbSAnLi4vLi4vaW1hZ2VzL1dlYi1QcmVsb2FkZXItMS5zdmcnXHJcbmltcG9ydCBjaXJjbGVJbWFnZTMgZnJvbSAnLi4vLi4vaW1hZ2VzLzMtTGVnLVByZWxvYWRlci5zdmcnXHJcbmZ1bmN0aW9uIGxvYWRlcihvcHRpb25zPXtcclxuICAgICdlbGVtZW50Q2libGUnIDogdW5kZWZpbmVkLFxyXG4gICAgJ2NsYXNzTmFtZScgOiAnJyxcclxuICAgICdkaXJlY3RpdmUnIDogJ09OJyxcclxuICAgICdyZWxhdGl2ZScgOiAnT0ZGJyxcclxuICAgICdsb2FkZXJXaWR0aCcgOiBudWxsLFxyXG4gICAgJ2xvYWRlckhlaWdodCcgOiBudWxsLFxyXG4gICAgJ2JhY2tkcm9wLWNvbG9yJyA6IG51bGxcclxufSlcclxue1xyXG4gICAgaWYob3B0aW9ucy5lbGVtZW50Q2libGUgIT09IHVuZGVmaW5lZCApXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIG9wdGlvbnMuZGlyZWN0aXZlID09PSAnT04nICYmICQob3B0aW9ucy5lbGVtZW50Q2libGUpLmZpbmQoJy5sb2FkZXItY29udGFpbmVyJykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gb3B0aW9ucy5yZWxhdGl2ZSA9PT0gJ09GRicgPyAncG9zaXRpb24tc3RpY2t5JyA6ICdwb3NpdGlvbi1yZWxhdGl2ZSc7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhY2tkcm9wX2NvbG9yID0gb3B0aW9uc1tcImJhY2tkcm9wLWNvbG9yXCJdIT1udWxsID8gJ2JhY2tncm91bmQ6JytvcHRpb25zWydiYWNrZHJvcC1jb2xvciddIDogJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvYWRlckNvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ2xvYWRlci1jb250YWluZXInLFxyXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdsb2FkZXItY29udGFpbmVyICcrcG9zaXRpb24rJyBib3R0b20tMCBsZWZ0LTAgdy0xMDAgaC0xMDAgYmctd2hpdGUgb3ZlcmZsb3ctaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiBiYWNrZHJvcF9jb2xvclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgbG9hZGVyUG9zdENvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7XHJcbiAgICAgICAgICAgICAgICBjbGFzczonbG9hZGVyLXBvc3QtY29udGFpbmVyIHctMTAwIGgtMTAwIGQtZmxleCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlV2lkdGggPSBvcHRpb25zLmxvYWRlcldpZHRoICE9IG51bGwgPyAnO3dpZHRoOicrb3B0aW9ucy5sb2FkZXJXaWR0aCA6ICcnO1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZUhlaWdodCA9IG9wdGlvbnMubG9hZGVySGVpZ2h0ICE9IG51bGwgPyAnaGVpZ2h0Oicrb3B0aW9ucy5sb2FkZXJIZWlnaHQgOiAnJztcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSAkKCc8aW1nIC8+Jywge1xyXG4gICAgICAgICAgICAgICAgc3JjOiBjaXJjbGVJbWFnZTMsXHJcbiAgICAgICAgICAgICAgICBjbGFzczogJ20tYXV0bycsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogaW1hZ2VIZWlnaHQraW1hZ2VXaWR0aFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbG9hZGVyUG9zdENvbnRhaW5lci5hcHBlbmQoaW1hZ2UpO1xyXG4gICAgICAgICAgICBsb2FkZXJDb250YWluZXIuYXBwZW5kKGxvYWRlclBvc3RDb250YWluZXIpXHJcbiAgICAgICAgICAgICQob3B0aW9ucy5lbGVtZW50Q2libGUpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdwb3NpdGlvbi1yZWxhdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFwcGVuZChsb2FkZXJDb250YWluZXIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSBpZihvcHRpb25zLmRpcmVjdGl2ZSA9PT0gJ09GRicpIHtcclxuICAgICAgICAgICAgJChvcHRpb25zLmVsZW1lbnRDaWJsZSkuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZChcIi5sb2FkZXItY29udGFpbmVyXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRlck9uKCRlbGVtZW50LCAkcmVsYXRpdmU9ZmFsc2UsICRzdHlsZXNPcHRpb25zID0ge1xyXG4gICAgJ2xvYWRlcldpZHRoJyA6IG51bGwsXHJcbiAgICAnbG9hZGVySGVpZ2h0JyA6IG51bGwsXHJcbiAgICAnYmFja2Ryb3AtY29sb3InOiBudWxsXHJcbn0pXHJcbntcclxuICBsb2FkZXIoe1xyXG4gICAgICAnZWxlbWVudENpYmxlJyA6ICRlbGVtZW50LFxyXG4gICAgICAnZGlyZWN0aXZlJyA6ICdPTicsXHJcbiAgICAgICdyZWxhdGl2ZSc6ICRyZWxhdGl2ZSA/ICdPTicgOiAnT0ZGJyxcclxuICAgICAgJ2xvYWRlcldpZHRoJyA6ICRzdHlsZXNPcHRpb25zLmxvYWRlcldpZHRoLFxyXG4gICAgICAnbG9hZGVySGVpZ2h0JyA6ICRzdHlsZXNPcHRpb25zLmxvYWRlckhlaWdodCxcclxuICAgICAgJ2JhY2tkcm9wLWNvbG9yJyA6ICRzdHlsZXNPcHRpb25zW1wiYmFja2Ryb3AtY29sb3JcIl1cclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZGVyT2ZmKCRlbGVtZW50KVxyXG57XHJcbiAgICBsb2FkZXIoe1xyXG4gICAgICAgICdlbGVtZW50Q2libGUnIDogJGVsZW1lbnQsXHJcbiAgICAgICAgJ2RpcmVjdGl2ZScgOiAnT0ZGJ1xyXG4gICAgfSlcclxufVxyXG4iLCJleHBvcnQgY29uc3QgQmFzZTY0ID0ge1xyXG5cclxuICAgIC8vIHByaXZhdGUgcHJvcGVydHlcclxuICAgIF9rZXlTdHIgOiBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCIsXHJcblxyXG4gICAgLy8gcHVibGljIG1ldGhvZCBmb3IgZW5jb2RpbmdcclxuICAgIGVuY29kZSA6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgIHZhciBvdXRwdXQgPSBcIlwiO1xyXG4gICAgICAgIHZhciBjaHIxLCBjaHIyLCBjaHIzLCBlbmMxLCBlbmMyLCBlbmMzLCBlbmM0O1xyXG4gICAgICAgIHZhciBpID0gMDtcclxuXHJcbiAgICAgICAgaW5wdXQgPSBCYXNlNjQuX3V0ZjhfZW5jb2RlKGlucHV0LnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICB3aGlsZSAoaSA8IGlucHV0Lmxlbmd0aCkge1xyXG5cclxuICAgICAgICAgICAgY2hyMSA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcclxuICAgICAgICAgICAgY2hyMiA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcclxuICAgICAgICAgICAgY2hyMyA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcclxuXHJcbiAgICAgICAgICAgIGVuYzEgPSBjaHIxID4+IDI7XHJcbiAgICAgICAgICAgIGVuYzIgPSAoKGNocjEgJiAzKSA8PCA0KSB8IChjaHIyID4+IDQpO1xyXG4gICAgICAgICAgICBlbmMzID0gKChjaHIyICYgMTUpIDw8IDIpIHwgKGNocjMgPj4gNik7XHJcbiAgICAgICAgICAgIGVuYzQgPSBjaHIzICYgNjM7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNOYU4oY2hyMikpIHtcclxuICAgICAgICAgICAgICAgIGVuYzMgPSBlbmM0ID0gNjQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNOYU4oY2hyMykpIHtcclxuICAgICAgICAgICAgICAgIGVuYzQgPSA2NDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jMSkgKyB0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzIpICtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jMykgKyB0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzQpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHB1YmxpYyBtZXRob2QgZm9yIGRlY29kaW5nXHJcbiAgICBkZWNvZGUgOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gXCJcIjtcclxuICAgICAgICB2YXIgY2hyMSwgY2hyMiwgY2hyMztcclxuICAgICAgICB2YXIgZW5jMSwgZW5jMiwgZW5jMywgZW5jNDtcclxuICAgICAgICB2YXIgaSA9IDA7XHJcblxyXG4gICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW15BLVphLXowLTlcXCtcXC9cXD1dL2csIFwiXCIpO1xyXG5cclxuICAgICAgICB3aGlsZSAoaSA8IGlucHV0Lmxlbmd0aCkge1xyXG5cclxuICAgICAgICAgICAgZW5jMSA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcclxuICAgICAgICAgICAgZW5jMiA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcclxuICAgICAgICAgICAgZW5jMyA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcclxuICAgICAgICAgICAgZW5jNCA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcclxuXHJcbiAgICAgICAgICAgIGNocjEgPSAoZW5jMSA8PCAyKSB8IChlbmMyID4+IDQpO1xyXG4gICAgICAgICAgICBjaHIyID0gKChlbmMyICYgMTUpIDw8IDQpIHwgKGVuYzMgPj4gMik7XHJcbiAgICAgICAgICAgIGNocjMgPSAoKGVuYzMgJiAzKSA8PCA2KSB8IGVuYzQ7XHJcblxyXG4gICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjEpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVuYzMgIT0gNjQpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVuYzQgIT0gNjQpIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvdXRwdXQgPSBCYXNlNjQuX3V0ZjhfZGVjb2RlKG91dHB1dCk7XHJcblxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBwcml2YXRlIG1ldGhvZCBmb3IgVVRGLTggZW5jb2RpbmdcclxuICAgIF91dGY4X2VuY29kZSA6IGZ1bmN0aW9uIChzdHJpbmcpIHtcclxuICAgICAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvXFxyXFxuL2csXCJcXG5cIik7XHJcbiAgICAgICAgdmFyIHV0ZnRleHQgPSBcIlwiO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHN0cmluZy5sZW5ndGg7IG4rKykge1xyXG5cclxuICAgICAgICAgICAgdmFyIGMgPSBzdHJpbmcuY2hhckNvZGVBdChuKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjIDwgMTI4KSB7XHJcbiAgICAgICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZigoYyA+IDEyNykgJiYgKGMgPCAyMDQ4KSkge1xyXG4gICAgICAgICAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDYpIHwgMTkyKTtcclxuICAgICAgICAgICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPj4gMTIpIHwgMjI0KTtcclxuICAgICAgICAgICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgPj4gNikgJiA2MykgfCAxMjgpO1xyXG4gICAgICAgICAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjICYgNjMpIHwgMTI4KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1dGZ0ZXh0O1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBwcml2YXRlIG1ldGhvZCBmb3IgVVRGLTggZGVjb2RpbmdcclxuICAgIF91dGY4X2RlY29kZSA6IGZ1bmN0aW9uICh1dGZ0ZXh0KSB7XHJcbiAgICAgICAgdmFyIHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgIHZhciBjID0gYzEgPSBjMiA9IDA7XHJcblxyXG4gICAgICAgIHdoaWxlICggaSA8IHV0ZnRleHQubGVuZ3RoICkge1xyXG5cclxuICAgICAgICAgICAgYyA9IHV0ZnRleHQuY2hhckNvZGVBdChpKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjIDwgMTI4KSB7XHJcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcclxuICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKChjID4gMTkxKSAmJiAoYyA8IDIyNCkpIHtcclxuICAgICAgICAgICAgICAgIGMyID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkrMSk7XHJcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgJiAzMSkgPDwgNikgfCAoYzIgJiA2MykpO1xyXG4gICAgICAgICAgICAgICAgaSArPSAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYzIgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSsxKTtcclxuICAgICAgICAgICAgICAgIGMzID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkrMik7XHJcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgJiAxNSkgPDwgMTIpIHwgKChjMiAmIDYzKSA8PCA2KSB8IChjMyAmIDYzKSk7XHJcbiAgICAgICAgICAgICAgICBpICs9IDM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3RyaW5nO1xyXG4gICAgfVxyXG5cclxufSIsIi8qKlxyXG4gKiBmb25jdGlvbiBwb3VyIGxhIHByw6l2aXN1YWxpc2F0aW9uIGQnaW1hZ2VcclxuICpcclxuICogQHBhcmFtIGlucHV0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVhZFVSTChpbnB1dCwgY2libGUpIHtcclxuICAgIGlmIChpbnB1dC5maWxlcyAmJiBpbnB1dC5maWxlc1swXSkge1xyXG4gICAgICAgIGlmIChpc0ltYWdlKGlucHV0KSkge1xyXG4gICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGUudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0MSA9IHJlcy5zcGxpdChcIjtcIilbMF07XHJcbiAgICAgICAgICAgICAgICBpZihzcGxpdDEuaW5jbHVkZXMoXCJpbWFnZVwiKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgJChjaWJsZSkuYXR0cignc3JjJywgZS50YXJnZXQucmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoaW5wdXQuZmlsZXNbMF0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBpc0ltYWdlKCRmaWxlKSB7XHJcbiAgICBpZiAoJGZpbGUuZmlsZXMgJiYgJGZpbGUuZmlsZXNbMF0gJiYgJGZpbGUuZmlsZXNbMF0ubmFtZS5tYXRjaCgvXFwuKGpwZ3xqcGVnfHBuZ3xnaWZ8Ym1wfGljbykkLykgKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIl0sIm5hbWVzIjpbImxvYWRlck9mZiIsImxvYWRlck9uIiwibm90aWZ5VXNlclN0b3BUeXBpbmciLCJub3RpZnlVc2VyVHlwaW5nIiwic2VuZE1lc3NhZ2UiLCJ1cGxvYWRGaWxlIiwiQ29udmVyc2F0aW9uQmFzZUNvbXBvbmVudCIsInVwZGF0ZU1lbnUiLCJyZWFkVVJMIiwicmVxdWlyZSIsIiQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNoYXRDb250YWluZXIiLCJjbG9zZXN0IiwiYm9keU1lc3NhZ2UiLCJmaW5kIiwiaW5wdXRUZXh0IiwiZW1wdHlNZXNzYWdlIiwiY29udmVyc2F0aW9uQmFzZUNvbXBvbmVudCIsImNvZGUiLCJhdHRyIiwiZmlsZXMiLCJlYWNoIiwicHVzaCIsInZhbCIsInJlbW92ZSIsIm1lc3NhZ2VWYWx1ZSIsImxlbmd0aCIsIm1lc3NhZ2UiLCJjbGVhclZ1IiwiY2xlYXJGaWxlIiwiYXBwZW5kIiwiZ2V0TWVzc2FnZSIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNhbmFsIiwic3RvcFByb3BhZ2F0aW9uIiwiaW5wdXRGaWxlIiwidHlwZSIsInRyaWdnZXIiLCJjb250YWluZXJJbWciLCJpbWciLCJodG1sIiwiZmlsZU5hbWUiLCJjb250YWluZXIiLCJmaWxlTmFtZUlucHV0IiwibmFtZSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjYW5hbF9pZCIsImNoYXRfZ3JvdXBDYW5hbF9hZGRVc2VyIiwiY2hhdF9ncm91cENhbmFsX3JlbW92ZVVzZXIiLCJjcmVhdGVHcm91cENhbmFsIiwiZmluZERlc3RpbmF0YWlyZSIsIkNhbmFsR3JvdXBzQ29tcG9uZW50IiwiTWVudUNvbXBvbmVudCIsIk1vZGFsIiwiY2FuYWxzQ29tcG9uZW50IiwiYm94Q3JlYXRpb25Db250YWluZXIiLCJzZWFyY2hWYWx1ZSIsImRpdkNoYXRfdXNlcnNMaXN0IiwidXNlcnMiLCJnZXRMaXN0VXNlciIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjaGF0X3VzZXJCYWRnZUxpc3QiLCJpZCIsInVzZXJCYWRnZSIsImlucHV0Tm9tIiwibm9tIiwiYWxlcnRFcnJvciIsInVzZXJzX2lkIiwiZ2V0VXNlcklkc0J5QmFkZ2UiLCJjYW5hbE1lc3NhZ2UiLCJlcnJvciIsIm1lbnVDb21wb25lbnQiLCJncm91cEluc3RhbmNlIiwiZ2V0R3JvdXBzQ2FuYWxJdGVtIiwibW9kYWxfY29udGFpbmVyIiwic2V0VGltZW91dCIsIkNvbnZlcnNhdGlvbkNvbXBvbmVudCIsInNob3dNZXNzYWdlSW5zdGFuY2UiLCJheGlvcyIsImZpbmRlciIsImdldCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsImRhdGEiLCJnZXRNZXNzYWdlQnlDb2RlIiwiYm9keVJlcXVlc3QiLCJVUkxTZWFyY2hQYXJhbXMiLCJmb3JFYWNoIiwicG9zdCIsImdldFNpbmdsZUNhbmFsIiwiZ2V0R3JvdXBlQ2FuYWwiLCJzZWVDYW5hbCIsImluY2x1ZGVNZSIsImZpbGVVcGxvYWQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiaGVhZGVycyIsInJlc3BvbnNlIiwiZmlsZVVybCIsImNvbnZlcnNhdGlvbkNvbXBvbmVudCIsInRoZW4iLCJyZW1vdmVIaWdobGlnaHQiLCJtZW51SXRlbSIsImNoYXRTaW5nbGVDYW5hbCIsImNoYXRHcm91cENhbmFsIiwic2luZ2xlQ2FuYWxzIiwiZ3JvdXBlQ2FuYWxzIiwiZ2V0R3JvdXBzQ2FuYWwiLCJzZWFyY2hfdmFsdWUiLCJsaXN0Q2FuYWwiLCJmaWx0ZXIiLCJkYXRhX3NlYXJjaCIsIm1hdGNoIiwidG9Mb3dlckNhc2UiLCJjYW5hbEdyb3VwQ29tcG9uZW50IiwiZ2V0TW9kYWxBZGRVc2VyIiwibW9kYWxBZGRVc2VyIiwic2hvdyIsIk5ld0NvbnZlcnNhdGlvbkNvbXBvbmVudCIsIm5ld0NvbnZlcnNhdGlvbkNvbXBvbmVudCIsInIiLCJ0ZW1wbGF0ZSIsInN1YkhlYWRlciIsImdldEhlYWRlciIsImNoYXRDb2RlIiwibWVzc2FnZXMiLCJnZXRNZXNzYWdlcyIsInRoYXQiLCJnZXRMaXN0VXNlckl0ZW0iLCJnZXRFbXB0eUxpc3RVc2VyTWVzc2FnZSIsInVzZXJTdHJpbmdpZmllZCIsImVuY29kZVVSSUNvbXBvbmVudCIsInN0cmluZ2lmeSIsImNvbXBvbmVudCIsInByZW5vbSIsImVtYWlsIiwiZ2V0RW1wdHlNZXNzYWdlcyIsImN1cnJlbnRVc2VySWQiLCJwYXJzZUludCIsInRleHQiLCJpbWdzIiwidXJsIiwiYXZhdGFyIiwib25lcnJvciIsInJlbmR1RGF0ZUNyZWF0aW9uTWVzc2FnZSIsInRleHRlcyIsImZpbGVzVGVtcGxhdGUiLCJjb252ZXJzYXRpb25Db250YWluZXIiLCJCYXNlNjQiLCJpbnB1dENhY2hlVXNlciIsIm5vbUNhbmFsIiwiY3VycmVudF91c2VyX2lkIiwibWVtYnJlcyIsImVuY29kZSIsImlzR3JvdXAiLCJ2dVRlbXBsYXRlIiwidnVzIiwiZ2V0VnVUZW1wbGF0ZSIsIm91dGVySFRNTCIsIiRjdXJyZW50T2JqZWN0IiwiY2FuYWxWdUNvbnRhaW5lciIsImNhbmFsVXNlclR5cGluZyIsImxvZ29Hcm91cCIsImNhbmFsc01lc3NhZ2UiLCJ0aGlzT2JqIiwiZ2V0U2luZ2xlQ2FuYWxJdGVtIiwiZ2V0RW1wdHlTaW5nbGVDYW5hbE1lc3NhZ2UiLCJjYW5hbFN0cmluZ2lmeSIsImxhc3RNZXNzYWdlIiwic2xpY2UiLCJzZWVuQ2xhc3MiLCJpc1NlZW4iLCJleWVTbGFzaFNlY3Rpb24iLCJsYXN0TWVzc2FnZUNsYXNzIiwiZ2V0RW1wdHlHcm91cHNDYW5hbE1lc3NhZ2UiLCJjaGF0Qm94Q29udGFpbmVyIiwiZmlyc3QiLCJtZXNzYWdlQ29udmVyc2F0aW9uQ29udGFpbmVyIiwiZ2V0Q29udmVyc2F0aW9uQ29udGFpbmVyIiwiY2hhdF9pbnN0YW5jZSIsImNoYXRfaW5zdGFuY2VfYm9keSIsInByZXBlbmQiLCJjaXJjbGVJbWFnZSIsImNpcmNsZUltYWdlMiIsImNpcmNsZUltYWdlMyIsImxvYWRlciIsIm9wdGlvbnMiLCJ1bmRlZmluZWQiLCJlbGVtZW50Q2libGUiLCJkaXJlY3RpdmUiLCJwb3NpdGlvbiIsInJlbGF0aXZlIiwiYmFja2Ryb3BfY29sb3IiLCJsb2FkZXJDb250YWluZXIiLCJzdHlsZSIsImxvYWRlclBvc3RDb250YWluZXIiLCJpbWFnZVdpZHRoIiwibG9hZGVyV2lkdGgiLCJpbWFnZUhlaWdodCIsImxvYWRlckhlaWdodCIsImltYWdlIiwic3JjIiwiJGVsZW1lbnQiLCIkcmVsYXRpdmUiLCIkc3R5bGVzT3B0aW9ucyIsIl9rZXlTdHIiLCJpbnB1dCIsIm91dHB1dCIsImNocjEiLCJjaHIyIiwiY2hyMyIsImVuYzEiLCJlbmMyIiwiZW5jMyIsImVuYzQiLCJpIiwiX3V0ZjhfZW5jb2RlIiwidG9TdHJpbmciLCJjaGFyQ29kZUF0IiwiaXNOYU4iLCJjaGFyQXQiLCJkZWNvZGUiLCJyZXBsYWNlIiwiaW5kZXhPZiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIl91dGY4X2RlY29kZSIsInN0cmluZyIsInV0ZnRleHQiLCJuIiwiYyIsImMxIiwiYzIiLCJjMyIsImNpYmxlIiwiaXNJbWFnZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJyZXMiLCJ0YXJnZXQiLCJyZXN1bHQiLCJzcGxpdDEiLCJzcGxpdCIsImluY2x1ZGVzIiwicmVhZEFzRGF0YVVSTCIsIiRmaWxlIl0sInNvdXJjZVJvb3QiOiIifQ==