(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_js_ImportVideoVimeo_js"],{

/***/ "./assets/js/ImportVideoVimeo.js":
/*!***************************************!*\
  !*** ./assets/js/ImportVideoVimeo.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendVideoToVimeo": () => (/* binding */ sendVideoToVimeo)
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_vimeo_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/vimeo-upload */ "./assets/js/modules/vimeo-upload.js");
/* harmony import */ var _modules_vimeo_upload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_vimeo_upload__WEBPACK_IMPORTED_MODULE_6__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







/**
 * fonction appeler lorsque l'on dépose ou choisisse un fichier via le bouton addFile.
 * Pour chaque fichier, uploader le contenu et affiche le resultat quand c'est terminé.
 */

var sendVideoToVimeo = function sendVideoToVimeo() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    selector: null,
    titre: null,
    description: null,
    progress: function progress() {},
    complete: function complete() {},
    error: function error() {}
  };
  var files = $(options.selector).get(0).files;
  /* Instantiate Vimeo Uploader */

  new (_modules_vimeo_upload__WEBPACK_IMPORTED_MODULE_6___default())({
    name: options.titre,
    description: options.description,
    "private": false,
    file: files[0],
    token: "db55e977ebbcdbd0380f3ff4783f11a2",
    upgrade_to_1080: false,
    onError: function onError(data) {
      options.error(data);
    },
    onProgress: function onProgress(data) {
      options.progress(Math.floor(data.loaded / data.total * 100));
    },
    onComplete: function () {
      var _onComplete = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(videoId, index) {
        var url, pretty;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = '/videos/' + videoId;
                pretty = null;

                if (index > -1) {
                  /* Le méta data contient tout les détails du video uploadé ito n lien : https://developer.vimeo.com/api/endpoints/videos#/{video_id} */
                  url = this.metadata[index].link;
                  pretty = JSON.stringify(this.metadata[index], null, 2);
                }

                options.complete(videoId, url, pretty);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onComplete(_x, _x2) {
        return _onComplete.apply(this, arguments);
      }

      return onComplete;
    }()
  }).upload();
};

/***/ }),

/***/ "./assets/js/modules/vimeo-upload.js":
/*!*******************************************!*\
  !*** ./assets/js/modules/vimeo-upload.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*
 | Vimeo-Upload: Upload videos to your Vimeo account directly from a
 |               browser or a Node.js app
 |
 |  ╭───╮╭─╮  
 |  │   ││ │╭─╮╭──┬──┬─╮╭───╮╭───╮   
 |  │   ││ │├─┤│ ╭╮ ╭╮ ││ ─ ││╭╮ │  ╭────────┬─────────────────────╮
 |  ╰╮  ╰╯╭╯│ ││ ││ ││ ││  ─┤│╰╯ │  | UPLOAD │ ▒▒▒▒▒▒▒▒▒▒▒░░░░ %75 | 
 |   ╰────╯ ╰─╯╰─╯╰─╯╰─╯╰───╯╰───╯  ╰────────┴─────────────────────╯                    
 |
 |
 | This project was released under Apache 2.0" license.
 |
 | @link      http://www.ecoach.com
 | @author    eCoach LMS Pty Ltd. Dev Team <developers@ecoach.com>
 | @credits   Built on vimeo-upload, https://github.com/websemantics/vimeo-upload
 */
;

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return root.VimeoUpload = factory();
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  // -------------------------------------------------------------------------
  // RetryHandler Class

  /**
   * Helper for implementing retries with backoff. Initial retry
   * delay is 1 second, increasing by 2x (+jitter) for subsequent retries
   *
   * @constructor
   */
  var RetryHandler = function RetryHandler() {
    this.interval = 1000; // Start at one second

    this.maxInterval = 60 * 1000; // Don't wait longer than a minute
  };
  /**
   * Invoke the function after waiting
   *
   * @param {function} fn Function to invoke
   */


  RetryHandler.prototype.retry = function (fn) {
    setTimeout(fn, this.interval);
    this.interval = this.nextInterval_();
  };
  /**
   * Reset the counter (e.g. after successful request)
   */


  RetryHandler.prototype.reset = function () {
    this.interval = 1000;
  };
  /**
   * Calculate the next wait time.
   * @return {number} Next wait interval, in milliseconds
   *
   * @private
   */


  RetryHandler.prototype.nextInterval_ = function () {
    var interval = this.interval * 2 + this.getRandomInt_(0, 1000);
    return Math.min(interval, this.maxInterval);
  };
  /**
   * Get a random int in the range of min to max. Used to add jitter to wait times.
   *
   * @param {number} min Lower bounds
   * @param {number} max Upper bounds
   * @private
   */


  RetryHandler.prototype.getRandomInt_ = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }; // -------------------------------------------------------------------------
  // Private data

  /* Library defaults, can be changed using the 'defaults' member method,
    - api_url (string), vimeo api url
  - name (string), default video name
  - description (string), default video description
  - contentType (string), video content type
  - token (string), vimeo api token
  - file (object), video file
  - metadata (array), data to associate with the video
  - upgrade_to_1080 (boolean), set video resolution to high definition
  - offset (int),
  - chunkSize (int),
  - retryHandler (RetryHandler), hanlder class
  - onComplete (function), handler for onComplete event
  - onProgress (function), handler for onProgress event
  - onError (function), handler for onError event
    */


  var defaults = {
    api_url: 'https://api.vimeo.com',
    name: 'Default name',
    description: 'Default description',
    contentType: 'application/offset+octet-stream',
    api_version: '3.4',
    token: null,
    file: {},
    metadata: [],
    upgrade_to_1080: false,
    offset: 0,
    chunkSize: 0,
    retryHandler: new RetryHandler(),
    onComplete: function onComplete() {},
    onProgress: function onProgress() {},
    onError: function onError() {}
  };
  /**
   * Helper class for resumable uploads using XHR/CORS. Can upload any Blob-like item, whether
   * files or in-memory constructs.
   *
   * @example
   * var content = new Blob(["Hello world"], {"type": "text/plain"})
   * var uploader = new VimeoUpload({
   *   file: content,
   *   token: accessToken,
   *   onComplete: function(data) { ... }
   *   onError: function(data) { ... }
   * })
   * uploader.upload()
   *
   * @constructor
   * @param {object} options Hash of options
   * @param {string} options.token Access token
   * @param {blob} options.file Blob-like item to upload
   * @param {string} [options.fileId] ID of file if replacing
   * @param {object} [options.params] Additional query parameters
   * @param {string} [options.contentType] Content-type, if overriding the type of the blob.
   * @param {object} [options.metadata] File metadata
   * @param {function} [options.onComplete] Callback for when upload is complete
   * @param {function} [options.onProgress] Callback for status for the in-progress upload
   * @param {function} [options.onError] Callback if upload fails
   */

  var me = function me(opts) {
    /* copy user options or use default values */
    for (var i in defaults) {
      this[i] = opts[i] !== undefined ? opts[i] : defaults[i];
    }

    this.accept = 'application/vnd.vimeo.*+json;version=' + this.api_version;
    this.httpMethod = opts.fileId ? 'PUT' : 'POST';
    this.videoData = {
      name: opts.name > '' ? opts.name : defaults.name,
      description: opts.description > '' ? opts.description : defaults.description,
      privacy: {
        view: opts["private"] ? 'nobody' : 'anybody'
      }
    };

    if (!(this.url = opts.url)) {
      var params = opts.params || {};
      /*  TODO params.uploadType = 'resumable' */

      this.url = this.buildUrl_(opts.fileId, params, opts.baseUrl);
    }
  }; // -------------------------------------------------------------------------
  // Public methods

  /*
    Override class defaults
        Parameters:
      - opts (object): name value pairs
    */


  me.prototype.defaults = function (opts) {
    return defaults;
    /* TODO $.extend(true, defaults, opts) */
  };
  /**
   * Initiate the upload (Get vimeo ticket number and upload url)
   */


  me.prototype.upload = function () {
    var xhr = new XMLHttpRequest();
    xhr.open(this.httpMethod, this.url, true);

    if (this.token) {
      xhr.setRequestHeader('Authorization', 'Bearer ' + this.token);
    }

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', this.accept);

    xhr.onload = function (e) {
      // get vimeo upload  url, user (for available quote), ticket id and complete url
      if (e.target.status < 400) {
        var response = JSON.parse(e.target.responseText);
        this.url = response.upload.upload_link;
        this.video_url = response.uri;
        this.user = response.user;
        this.ticket_id = response.ticket_id;
        this.complete_url = defaults.api_url + response.complete_uri;
        this.sendFile_();
      } else {
        this.onUploadError_(e);
      }
    }.bind(this);

    xhr.onerror = this.onUploadError_.bind(this);
    var body = this.videoData;
    body.upload = {
      approach: 'tus',
      size: this.file.size
    };
    xhr.send(JSON.stringify(body));
  }; // -------------------------------------------------------------------------
  // Private methods

  /**
   * Send the actual file content.
   *
   * @private
   */


  me.prototype.sendFile_ = function () {
    var content = this.file;
    var end = this.file.size;

    if (this.offset || this.chunkSize) {
      // Only bother to slice the file if we're either resuming or uploading in chunks
      if (this.chunkSize) {
        end = Math.min(this.offset + this.chunkSize, this.file.size);
      }

      content = content.slice(this.offset, end);
    }

    var xhr = new XMLHttpRequest();
    xhr.open('PATCH', this.url, true);
    xhr.setRequestHeader('Accept', this.accept);
    xhr.setRequestHeader('Tus-Resumable', '1.0.0');
    xhr.setRequestHeader('Upload-Offset', this.offset);
    xhr.setRequestHeader('Content-Type', this.contentType);

    if (xhr.upload) {
      xhr.upload.addEventListener('progress', this.onProgress);
    }

    xhr.onload = this.onContentUploadSuccess_.bind(this);
    xhr.onerror = this.onContentUploadError_.bind(this);
    xhr.send(content);
  };
  /**
   * Query for the state of the file for resumption.
   *
   * @private
   */


  me.prototype.resume_ = function () {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', this.url, true);
    xhr.setRequestHeader('Tus-Resumable', '1.0.0');
    xhr.setRequestHeader('Accept', this.accept);

    if (xhr.upload) {
      xhr.upload.addEventListener('progress', this.onProgress);
    }

    var onload = function onload(e) {
      var response = JSON.parse(e.target.responseText);
      this.offset = response.offset;

      if (this.offset >= this.file.size) {
        this.onContentUploadSuccess_(e);
      } else {
        this.sendFile_();
      }
    };

    xhr.onload = onload.bind(this);
    xhr.onerror = this.onContentUploadError_.bind(this);
    xhr.send();
  };
  /**
   * Extract the last saved range if available in the request.
   *
   * @param {XMLHttpRequest} xhr Request object
   */


  me.prototype.extractRange_ = function (xhr) {
    var range = xhr.getResponseHeader('Range');

    if (range) {
      this.offset = parseInt(range.match(/\d+/g).pop(), 10) + 1;
    }
  };
  /**
   * The final step is to call vimeo.videos.upload.complete to queue up
   * the video for transcoding.
   *
   * If successful call 'onUpdateVideoData_'
   *
   * @private
   */


  me.prototype.complete_ = function (xhr) {
    var video_id = this.video_url.split('/').pop();
    this.onComplete(video_id);
  };
  /**
   * Handle successful responses for uploads. Depending on the context,
   * may continue with uploading the next chunk of the file or, if complete,
   * invokes vimeo complete service.
   *
   * @private
   * @param {object} e XHR event
   */


  me.prototype.onContentUploadSuccess_ = function (e) {
    if (e.target.status >= 200 && e.target.status < 300) {
      this.complete_();
    } else if (e.target.status == 308) {
      this.extractRange_(e.target);
      this.retryHandler.reset();
      this.sendFile_();
    }
  };
  /**
   * Handles errors for uploads. Either retries or aborts depending
   * on the error.
   *
   * @private
   * @param {object} e XHR event
   */


  me.prototype.onContentUploadError_ = function (e) {
    if (e.target.status && e.target.status < 500) {
      this.onError(e.target.response);
    } else {
      this.retryHandler.retry(this.resume_());
    }
  };
  /**
   * Handles errors for the complete request.
   *
   * @private
   * @param {object} e XHR event
   */


  me.prototype.onCompleteError_ = function (e) {
    this.onError(e.target.response); // TODO - Retries for initial upload
  };
  /**
   * Handles errors for the initial request.
   *
   * @private
   * @param {object} e XHR event
   */


  me.prototype.onUploadError_ = function (e) {
    this.onError(e.target.response); // TODO - Retries for initial upload
  };
  /**
   * Construct a query string from a hash/object
   *
   * @private
   * @param {object} [params] Key/value pairs for query string
   * @return {string} query string
   */


  me.prototype.buildQuery_ = function (params) {
    params = params || {};
    return Object.keys(params).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&');
  };
  /**
   * Build the drive upload URL
   *
   * @private
   * @param {string} [id] File ID if replacing
   * @param {object} [params] Query parameters
   * @return {string} URL
   */


  me.prototype.buildUrl_ = function (id, params, baseUrl) {
    var url = baseUrl || defaults.api_url + '/me/videos';

    if (id) {
      url += id;
    }

    var query = this.buildQuery_(params);

    if (query) {
      url += '?' + query;
    }

    return url;
  };

  return me;
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJN0MsR0FBRyxHQUFHNkMsT0FBTyxJQUFJbkIsUUFBUSxDQUFDQyxPQUFULEdBQW1CLFlBQXhDOztBQUNBLFFBQUlxRSxFQUFKLEVBQVE7QUFDSmhHLE1BQUFBLEdBQUcsSUFBSWdHLEVBQVA7QUFDSDs7QUFDRCxRQUFJQyxLQUFLLEdBQUcsS0FBS1IsV0FBTCxDQUFpQjlDLE1BQWpCLENBQVo7O0FBQ0EsUUFBSXNELEtBQUosRUFBVztBQUNQakcsTUFBQUEsR0FBRyxJQUFJLE1BQU1pRyxLQUFiO0FBQ0g7O0FBQ0QsV0FBT2pHLEdBQVA7QUFDSCxHQVZEOztBQVlBLFNBQU9pQyxFQUFQO0FBQ0gsQ0EzWEEsQ0FBRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9JbXBvcnRWaWRlb1ZpbWVvLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL3ZpbWVvLXVwbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmltZW9VcGxvYWQgZnJvbSAnLi9tb2R1bGVzL3ZpbWVvLXVwbG9hZCdcclxuLyoqXHJcbiAqIGZvbmN0aW9uIGFwcGVsZXIgbG9yc3F1ZSBsJ29uIGTDqXBvc2Ugb3UgY2hvaXNpc3NlIHVuIGZpY2hpZXIgdmlhIGxlIGJvdXRvbiBhZGRGaWxlLlxyXG4gKiBQb3VyIGNoYXF1ZSBmaWNoaWVyLCB1cGxvYWRlciBsZSBjb250ZW51IGV0IGFmZmljaGUgbGUgcmVzdWx0YXQgcXVhbmQgYydlc3QgdGVybWluw6kuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2VuZFZpZGVvVG9WaW1lbyA9IGZ1bmN0aW9uKG9wdGlvbnM9e1xyXG4gICAgc2VsZWN0b3I6bnVsbCxcclxuICAgIHRpdHJlOm51bGwsXHJcbiAgICBkZXNjcmlwdGlvbjpudWxsLFxyXG4gICAgcHJvZ3Jlc3M6ICgpPT57fSxcclxuICAgIGNvbXBsZXRlOigpPT57fSxcclxuICAgIGVycm9yOigpPT57fX0pIHtcclxuICAgIGxldCBmaWxlcyA9ICQob3B0aW9ucy5zZWxlY3RvcikuZ2V0KDApLmZpbGVzO1xyXG4gICAgLyogSW5zdGFudGlhdGUgVmltZW8gVXBsb2FkZXIgKi9cclxuICAgIChuZXcgVmltZW9VcGxvYWQoe1xyXG4gICAgICAgIG5hbWU6IG9wdGlvbnMudGl0cmUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IG9wdGlvbnMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgcHJpdmF0ZTogZmFsc2UsXHJcbiAgICAgICAgZmlsZTogZmlsZXNbMF0sXHJcbiAgICAgICAgdG9rZW46IHByb2Nlc3MuZW52LlZJTUVPX0FDQ0VTU19UT0tFTixcclxuICAgICAgICB1cGdyYWRlX3RvXzEwODA6IGZhbHNlLFxyXG4gICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5lcnJvcihkYXRhKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uUHJvZ3Jlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5wcm9ncmVzcyhNYXRoLmZsb29yKGRhdGEubG9hZGVkIC8gZGF0YS50b3RhbCoxMDApKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25Db21wbGV0ZTogYXN5bmMgZnVuY3Rpb24odmlkZW9JZCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgbGV0IHVybCA9ICcvdmlkZW9zLycgKyB2aWRlb0lkO1xyXG4gICAgICAgICAgICBsZXQgcHJldHR5ID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIC8qIExlIG3DqXRhIGRhdGEgY29udGllbnQgdG91dCBsZXMgZMOpdGFpbHMgZHUgdmlkZW8gdXBsb2Fkw6kgaXRvIG4gbGllbiA6IGh0dHBzOi8vZGV2ZWxvcGVyLnZpbWVvLmNvbS9hcGkvZW5kcG9pbnRzL3ZpZGVvcyMve3ZpZGVvX2lkfSAqL1xyXG4gICAgICAgICAgICAgICAgdXJsID0gdGhpcy5tZXRhZGF0YVtpbmRleF0ubGlua1xyXG4gICAgICAgICAgICAgICAgcHJldHR5ID0gSlNPTi5zdHJpbmdpZnkodGhpcy5tZXRhZGF0YVtpbmRleF0sIG51bGwsIDIpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wdGlvbnMuY29tcGxldGUodmlkZW9JZCwgdXJsLCBwcmV0dHkpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9KSkudXBsb2FkKCk7XHJcbn07XHJcbiIsIi8qXHJcbiB8IFZpbWVvLVVwbG9hZDogVXBsb2FkIHZpZGVvcyB0byB5b3VyIFZpbWVvIGFjY291bnQgZGlyZWN0bHkgZnJvbSBhXHJcbiB8ICAgICAgICAgICAgICAgYnJvd3NlciBvciBhIE5vZGUuanMgYXBwXHJcbiB8XHJcbiB8ICDila3ilIDilIDilIDila7ila3ilIDila4gIFxyXG4gfCAg4pSCICAg4pSC4pSCIOKUguKVreKUgOKVruKVreKUgOKUgOKUrOKUgOKUgOKUrOKUgOKVruKVreKUgOKUgOKUgOKVruKVreKUgOKUgOKUgOKVriAgIFxyXG4gfCAg4pSCICAg4pSC4pSCIOKUguKUnOKUgOKUpOKUgiDila3ila4g4pWt4pWuIOKUguKUgiDilIAg4pSC4pSC4pWt4pWuIOKUgiAg4pWt4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSs4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pWuXHJcbiB8ICDilbDila4gIOKVsOKVr+KVreKVr+KUgiDilILilIIg4pSC4pSCIOKUguKUgiDilILilIIgIOKUgOKUpOKUguKVsOKVryDilIIgIHwgVVBMT0FEIOKUgiDilpLilpLilpLilpLilpLilpLilpLilpLilpLilpLilpLilpHilpHilpHilpEgJTc1IHwgXHJcbiB8ICAg4pWw4pSA4pSA4pSA4pSA4pWvIOKVsOKUgOKVr+KVsOKUgOKVr+KVsOKUgOKVr+KVsOKUgOKVr+KVsOKUgOKUgOKUgOKVr+KVsOKUgOKUgOKUgOKVryAg4pWw4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pS04pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pWvICAgICAgICAgICAgICAgICAgICBcclxuIHxcclxuIHxcclxuIHwgVGhpcyBwcm9qZWN0IHdhcyByZWxlYXNlZCB1bmRlciBBcGFjaGUgMi4wXCIgbGljZW5zZS5cclxuIHxcclxuIHwgQGxpbmsgICAgICBodHRwOi8vd3d3LmVjb2FjaC5jb21cclxuIHwgQGF1dGhvciAgICBlQ29hY2ggTE1TIFB0eSBMdGQuIERldiBUZWFtIDxkZXZlbG9wZXJzQGVjb2FjaC5jb20+XHJcbiB8IEBjcmVkaXRzICAgQnVpbHQgb24gdmltZW8tdXBsb2FkLCBodHRwczovL2dpdGh1Yi5jb20vd2Vic2VtYW50aWNzL3ZpbWVvLXVwbG9hZFxyXG4gKi9cclxuXHJcbjtcclxuKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcclxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuICAgICAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHJvb3QuVmltZW9VcGxvYWQgPSBmYWN0b3J5KCkpXHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcclxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByb290LlZpbWVvVXBsb2FkID0gZmFjdG9yeSgpXHJcbiAgICB9XHJcbn0odGhpcywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gUmV0cnlIYW5kbGVyIENsYXNzXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZWxwZXIgZm9yIGltcGxlbWVudGluZyByZXRyaWVzIHdpdGggYmFja29mZi4gSW5pdGlhbCByZXRyeVxyXG4gICAgICogZGVsYXkgaXMgMSBzZWNvbmQsIGluY3JlYXNpbmcgYnkgMnggKCtqaXR0ZXIpIGZvciBzdWJzZXF1ZW50IHJldHJpZXNcclxuICAgICAqXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqL1xyXG4gICAgdmFyIFJldHJ5SGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSAxMDAwIC8vIFN0YXJ0IGF0IG9uZSBzZWNvbmRcclxuICAgICAgICB0aGlzLm1heEludGVydmFsID0gNjAgKiAxMDAwOyAvLyBEb24ndCB3YWl0IGxvbmdlciB0aGFuIGEgbWludXRlXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZva2UgdGhlIGZ1bmN0aW9uIGFmdGVyIHdhaXRpbmdcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBpbnZva2VcclxuICAgICAqL1xyXG4gICAgUmV0cnlIYW5kbGVyLnByb3RvdHlwZS5yZXRyeSA9IGZ1bmN0aW9uKGZuKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChmbiwgdGhpcy5pbnRlcnZhbClcclxuICAgICAgICB0aGlzLmludGVydmFsID0gdGhpcy5uZXh0SW50ZXJ2YWxfKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0IHRoZSBjb3VudGVyIChlLmcuIGFmdGVyIHN1Y2Nlc3NmdWwgcmVxdWVzdClcclxuICAgICAqL1xyXG4gICAgUmV0cnlIYW5kbGVyLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSAxMDAwXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGUgdGhlIG5leHQgd2FpdCB0aW1lLlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBOZXh0IHdhaXQgaW50ZXJ2YWwsIGluIG1pbGxpc2Vjb25kc1xyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIFJldHJ5SGFuZGxlci5wcm90b3R5cGUubmV4dEludGVydmFsXyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBpbnRlcnZhbCA9IHRoaXMuaW50ZXJ2YWwgKiAyICsgdGhpcy5nZXRSYW5kb21JbnRfKDAsIDEwMDApXHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKGludGVydmFsLCB0aGlzLm1heEludGVydmFsKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGEgcmFuZG9tIGludCBpbiB0aGUgcmFuZ2Ugb2YgbWluIHRvIG1heC4gVXNlZCB0byBhZGQgaml0dGVyIHRvIHdhaXQgdGltZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pbiBMb3dlciBib3VuZHNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXggVXBwZXIgYm91bmRzXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBSZXRyeUhhbmRsZXIucHJvdG90eXBlLmdldFJhbmRvbUludF8gPSBmdW5jdGlvbihtaW4sIG1heCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gUHJpdmF0ZSBkYXRhXHJcblxyXG4gICAgLyogTGlicmFyeSBkZWZhdWx0cywgY2FuIGJlIGNoYW5nZWQgdXNpbmcgdGhlICdkZWZhdWx0cycgbWVtYmVyIG1ldGhvZCxcclxuXHJcbiAgICAtIGFwaV91cmwgKHN0cmluZyksIHZpbWVvIGFwaSB1cmxcclxuICAgIC0gbmFtZSAoc3RyaW5nKSwgZGVmYXVsdCB2aWRlbyBuYW1lXHJcbiAgICAtIGRlc2NyaXB0aW9uIChzdHJpbmcpLCBkZWZhdWx0IHZpZGVvIGRlc2NyaXB0aW9uXHJcbiAgICAtIGNvbnRlbnRUeXBlIChzdHJpbmcpLCB2aWRlbyBjb250ZW50IHR5cGVcclxuICAgIC0gdG9rZW4gKHN0cmluZyksIHZpbWVvIGFwaSB0b2tlblxyXG4gICAgLSBmaWxlIChvYmplY3QpLCB2aWRlbyBmaWxlXHJcbiAgICAtIG1ldGFkYXRhIChhcnJheSksIGRhdGEgdG8gYXNzb2NpYXRlIHdpdGggdGhlIHZpZGVvXHJcbiAgICAtIHVwZ3JhZGVfdG9fMTA4MCAoYm9vbGVhbiksIHNldCB2aWRlbyByZXNvbHV0aW9uIHRvIGhpZ2ggZGVmaW5pdGlvblxyXG4gICAgLSBvZmZzZXQgKGludCksXHJcbiAgICAtIGNodW5rU2l6ZSAoaW50KSxcclxuICAgIC0gcmV0cnlIYW5kbGVyIChSZXRyeUhhbmRsZXIpLCBoYW5sZGVyIGNsYXNzXHJcbiAgICAtIG9uQ29tcGxldGUgKGZ1bmN0aW9uKSwgaGFuZGxlciBmb3Igb25Db21wbGV0ZSBldmVudFxyXG4gICAgLSBvblByb2dyZXNzIChmdW5jdGlvbiksIGhhbmRsZXIgZm9yIG9uUHJvZ3Jlc3MgZXZlbnRcclxuICAgIC0gb25FcnJvciAoZnVuY3Rpb24pLCBoYW5kbGVyIGZvciBvbkVycm9yIGV2ZW50XHJcblxyXG4gICAgKi9cclxuXHJcbiAgICB2YXIgZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgYXBpX3VybDogJ2h0dHBzOi8vYXBpLnZpbWVvLmNvbScsXHJcbiAgICAgICAgbmFtZTogJ0RlZmF1bHQgbmFtZScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdEZWZhdWx0IGRlc2NyaXB0aW9uJyxcclxuICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL29mZnNldCtvY3RldC1zdHJlYW0nLFxyXG4gICAgICAgIGFwaV92ZXJzaW9uOiAnMy40JyxcclxuICAgICAgICB0b2tlbjogbnVsbCxcclxuICAgICAgICBmaWxlOiB7fSxcclxuICAgICAgICBtZXRhZGF0YTogW10sXHJcbiAgICAgICAgdXBncmFkZV90b18xMDgwOiBmYWxzZSxcclxuICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgY2h1bmtTaXplOiAwLFxyXG4gICAgICAgIHJldHJ5SGFuZGxlcjogbmV3IFJldHJ5SGFuZGxlcigpLFxyXG4gICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKCkge30sXHJcbiAgICAgICAgb25Qcm9ncmVzczogZnVuY3Rpb24oKSB7fSxcclxuICAgICAgICBvbkVycm9yOiBmdW5jdGlvbigpIHt9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZWxwZXIgY2xhc3MgZm9yIHJlc3VtYWJsZSB1cGxvYWRzIHVzaW5nIFhIUi9DT1JTLiBDYW4gdXBsb2FkIGFueSBCbG9iLWxpa2UgaXRlbSwgd2hldGhlclxyXG4gICAgICogZmlsZXMgb3IgaW4tbWVtb3J5IGNvbnN0cnVjdHMuXHJcbiAgICAgKlxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIHZhciBjb250ZW50ID0gbmV3IEJsb2IoW1wiSGVsbG8gd29ybGRcIl0sIHtcInR5cGVcIjogXCJ0ZXh0L3BsYWluXCJ9KVxyXG4gICAgICogdmFyIHVwbG9hZGVyID0gbmV3IFZpbWVvVXBsb2FkKHtcclxuICAgICAqICAgZmlsZTogY29udGVudCxcclxuICAgICAqICAgdG9rZW46IGFjY2Vzc1Rva2VuLFxyXG4gICAgICogICBvbkNvbXBsZXRlOiBmdW5jdGlvbihkYXRhKSB7IC4uLiB9XHJcbiAgICAgKiAgIG9uRXJyb3I6IGZ1bmN0aW9uKGRhdGEpIHsgLi4uIH1cclxuICAgICAqIH0pXHJcbiAgICAgKiB1cGxvYWRlci51cGxvYWQoKVxyXG4gICAgICpcclxuICAgICAqIEBjb25zdHJ1Y3RvclxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgSGFzaCBvZiBvcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50b2tlbiBBY2Nlc3MgdG9rZW5cclxuICAgICAqIEBwYXJhbSB7YmxvYn0gb3B0aW9ucy5maWxlIEJsb2ItbGlrZSBpdGVtIHRvIHVwbG9hZFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmZpbGVJZF0gSUQgb2YgZmlsZSBpZiByZXBsYWNpbmdcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucy5wYXJhbXNdIEFkZGl0aW9uYWwgcXVlcnkgcGFyYW1ldGVyc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNvbnRlbnRUeXBlXSBDb250ZW50LXR5cGUsIGlmIG92ZXJyaWRpbmcgdGhlIHR5cGUgb2YgdGhlIGJsb2IuXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnMubWV0YWRhdGFdIEZpbGUgbWV0YWRhdGFcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLm9uQ29tcGxldGVdIENhbGxiYWNrIGZvciB3aGVuIHVwbG9hZCBpcyBjb21wbGV0ZVxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMub25Qcm9ncmVzc10gQ2FsbGJhY2sgZm9yIHN0YXR1cyBmb3IgdGhlIGluLXByb2dyZXNzIHVwbG9hZFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW29wdGlvbnMub25FcnJvcl0gQ2FsbGJhY2sgaWYgdXBsb2FkIGZhaWxzXHJcbiAgICAgKi9cclxuICAgIHZhciBtZSA9IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHJcbiAgICAgICAgLyogY29weSB1c2VyIG9wdGlvbnMgb3IgdXNlIGRlZmF1bHQgdmFsdWVzICovXHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBkZWZhdWx0cykge1xyXG4gICAgICAgICAgICB0aGlzW2ldID0gKG9wdHNbaV0gIT09IHVuZGVmaW5lZCkgPyBvcHRzW2ldIDogZGVmYXVsdHNbaV1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hY2NlcHQgPSAnYXBwbGljYXRpb24vdm5kLnZpbWVvLioranNvbjt2ZXJzaW9uPScgKyB0aGlzLmFwaV92ZXJzaW9uXHJcblxyXG4gICAgICAgIHRoaXMuaHR0cE1ldGhvZCA9IG9wdHMuZmlsZUlkID8gJ1BVVCcgOiAnUE9TVCdcclxuXHJcbiAgICAgICAgdGhpcy52aWRlb0RhdGEgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IChvcHRzLm5hbWUgPiAnJykgPyBvcHRzLm5hbWUgOiBkZWZhdWx0cy5uYW1lLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogKG9wdHMuZGVzY3JpcHRpb24gPiAnJykgPyBvcHRzLmRlc2NyaXB0aW9uIDogZGVmYXVsdHMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHByaXZhY3k6IHsgdmlldzogb3B0cy5wcml2YXRlID8gJ25vYm9keScgOiAnYW55Ym9keScgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCEodGhpcy51cmwgPSBvcHRzLnVybCkpIHtcclxuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IG9wdHMucGFyYW1zIHx8IHt9IC8qICBUT0RPIHBhcmFtcy51cGxvYWRUeXBlID0gJ3Jlc3VtYWJsZScgKi9cclxuICAgICAgICAgICAgdGhpcy51cmwgPSB0aGlzLmJ1aWxkVXJsXyhvcHRzLmZpbGVJZCwgcGFyYW1zLCBvcHRzLmJhc2VVcmwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIFB1YmxpYyBtZXRob2RzXHJcblxyXG4gICAgLypcclxuICAgICAgT3ZlcnJpZGUgY2xhc3MgZGVmYXVsdHNcclxuXHJcbiAgICAgICAgUGFyYW1ldGVyczpcclxuICAgICAgICAtIG9wdHMgKG9iamVjdCk6IG5hbWUgdmFsdWUgcGFpcnNcclxuXHJcbiAgICAqL1xyXG5cclxuICAgIG1lLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uKG9wdHMpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdHMgLyogVE9ETyAkLmV4dGVuZCh0cnVlLCBkZWZhdWx0cywgb3B0cykgKi9cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYXRlIHRoZSB1cGxvYWQgKEdldCB2aW1lbyB0aWNrZXQgbnVtYmVyIGFuZCB1cGxvYWQgdXJsKVxyXG4gICAgICovXHJcbiAgICBtZS5wcm90b3R5cGUudXBsb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXHJcbiAgICAgICAgeGhyLm9wZW4odGhpcy5odHRwTWV0aG9kLCB0aGlzLnVybCwgdHJ1ZSlcclxuICAgICAgICBpZiAodGhpcy50b2tlbikge1xyXG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyB0aGlzLnRva2VuKVxyXG4gICAgICAgIH1cclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKVxyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCB0aGlzLmFjY2VwdClcclxuXHJcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgLy8gZ2V0IHZpbWVvIHVwbG9hZCAgdXJsLCB1c2VyIChmb3IgYXZhaWxhYmxlIHF1b3RlKSwgdGlja2V0IGlkIGFuZCBjb21wbGV0ZSB1cmxcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnN0YXR1cyA8IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gSlNPTi5wYXJzZShlLnRhcmdldC5yZXNwb25zZVRleHQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVybCA9IHJlc3BvbnNlLnVwbG9hZC51cGxvYWRfbGlua1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb191cmwgPSByZXNwb25zZS51cmlcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHJlc3BvbnNlLnVzZXJcclxuICAgICAgICAgICAgICAgIHRoaXMudGlja2V0X2lkID0gcmVzcG9uc2UudGlja2V0X2lkXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlX3VybCA9IGRlZmF1bHRzLmFwaV91cmwgKyByZXNwb25zZS5jb21wbGV0ZV91cmlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZEZpbGVfKClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25VcGxvYWRFcnJvcl8oZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0uYmluZCh0aGlzKVxyXG5cclxuICAgICAgICB4aHIub25lcnJvciA9IHRoaXMub25VcGxvYWRFcnJvcl8uYmluZCh0aGlzKVxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB0aGlzLnZpZGVvRGF0YVxyXG4gICAgICAgIGJvZHkudXBsb2FkID0ge1xyXG4gICAgICAgICAgICBhcHByb2FjaDogJ3R1cycsXHJcbiAgICAgICAgICAgIHNpemU6IHRoaXMuZmlsZS5zaXplXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGJvZHkpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIFByaXZhdGUgbWV0aG9kc1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VuZCB0aGUgYWN0dWFsIGZpbGUgY29udGVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBtZS5wcm90b3R5cGUuc2VuZEZpbGVfID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGNvbnRlbnQgPSB0aGlzLmZpbGVcclxuICAgICAgICB2YXIgZW5kID0gdGhpcy5maWxlLnNpemVcclxuXHJcbiAgICAgICAgaWYgKHRoaXMub2Zmc2V0IHx8IHRoaXMuY2h1bmtTaXplKSB7XHJcbiAgICAgICAgICAgIC8vIE9ubHkgYm90aGVyIHRvIHNsaWNlIHRoZSBmaWxlIGlmIHdlJ3JlIGVpdGhlciByZXN1bWluZyBvciB1cGxvYWRpbmcgaW4gY2h1bmtzXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNodW5rU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgZW5kID0gTWF0aC5taW4odGhpcy5vZmZzZXQgKyB0aGlzLmNodW5rU2l6ZSwgdGhpcy5maWxlLnNpemUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc2xpY2UodGhpcy5vZmZzZXQsIGVuZClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxyXG4gICAgICAgIHhoci5vcGVuKCdQQVRDSCcsIHRoaXMudXJsLCB0cnVlKVxyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCB0aGlzLmFjY2VwdClcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignVHVzLVJlc3VtYWJsZScsICcxLjAuMCcpXHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1VwbG9hZC1PZmZzZXQnLCB0aGlzLm9mZnNldClcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgdGhpcy5jb250ZW50VHlwZSlcclxuXHJcbiAgICAgICAgaWYgKHhoci51cGxvYWQpIHtcclxuICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIHRoaXMub25Qcm9ncmVzcylcclxuICAgICAgICB9XHJcbiAgICAgICAgeGhyLm9ubG9hZCA9IHRoaXMub25Db250ZW50VXBsb2FkU3VjY2Vzc18uYmluZCh0aGlzKVxyXG4gICAgICAgIHhoci5vbmVycm9yID0gdGhpcy5vbkNvbnRlbnRVcGxvYWRFcnJvcl8uYmluZCh0aGlzKVxyXG4gICAgICAgIHhoci5zZW5kKGNvbnRlbnQpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBRdWVyeSBmb3IgdGhlIHN0YXRlIG9mIHRoZSBmaWxlIGZvciByZXN1bXB0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIG1lLnByb3RvdHlwZS5yZXN1bWVfID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXHJcbiAgICAgICAgeGhyLm9wZW4oJ0hFQUQnLCB0aGlzLnVybCwgdHJ1ZSlcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignVHVzLVJlc3VtYWJsZScsICcxLjAuMCcpO1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCB0aGlzLmFjY2VwdClcclxuICAgICAgICBpZiAoeGhyLnVwbG9hZCkge1xyXG4gICAgICAgICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgdGhpcy5vblByb2dyZXNzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvbmxvYWQgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IEpTT04ucGFyc2UoZS50YXJnZXQucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgICB0aGlzLm9mZnNldCA9IHJlc3BvbnNlLm9mZnNldFxyXG4gICAgICAgICAgICBpZiAodGhpcy5vZmZzZXQgPj0gdGhpcy5maWxlLnNpemUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25Db250ZW50VXBsb2FkU3VjY2Vzc18oZSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZEZpbGVfKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB4aHIub25sb2FkID0gb25sb2FkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgeGhyLm9uZXJyb3IgPSB0aGlzLm9uQ29udGVudFVwbG9hZEVycm9yXy5iaW5kKHRoaXMpXHJcbiAgICAgICAgeGhyLnNlbmQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXh0cmFjdCB0aGUgbGFzdCBzYXZlZCByYW5nZSBpZiBhdmFpbGFibGUgaW4gdGhlIHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyIFJlcXVlc3Qgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIG1lLnByb3RvdHlwZS5leHRyYWN0UmFuZ2VfID0gZnVuY3Rpb24oeGhyKSB7XHJcbiAgICAgICAgdmFyIHJhbmdlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdSYW5nZScpXHJcbiAgICAgICAgaWYgKHJhbmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gcGFyc2VJbnQocmFuZ2UubWF0Y2goL1xcZCsvZykucG9wKCksIDEwKSArIDFcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZmluYWwgc3RlcCBpcyB0byBjYWxsIHZpbWVvLnZpZGVvcy51cGxvYWQuY29tcGxldGUgdG8gcXVldWUgdXBcclxuICAgICAqIHRoZSB2aWRlbyBmb3IgdHJhbnNjb2RpbmcuXHJcbiAgICAgKlxyXG4gICAgICogSWYgc3VjY2Vzc2Z1bCBjYWxsICdvblVwZGF0ZVZpZGVvRGF0YV8nXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgbWUucHJvdG90eXBlLmNvbXBsZXRlXyA9IGZ1bmN0aW9uKHhocikge1xyXG4gICAgICAgIGNvbnN0IHZpZGVvX2lkID0gdGhpcy52aWRlb191cmwuc3BsaXQoJy8nKS5wb3AoKVxyXG4gICAgICAgIHRoaXMub25Db21wbGV0ZSh2aWRlb19pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGUgc3VjY2Vzc2Z1bCByZXNwb25zZXMgZm9yIHVwbG9hZHMuIERlcGVuZGluZyBvbiB0aGUgY29udGV4dCxcclxuICAgICAqIG1heSBjb250aW51ZSB3aXRoIHVwbG9hZGluZyB0aGUgbmV4dCBjaHVuayBvZiB0aGUgZmlsZSBvciwgaWYgY29tcGxldGUsXHJcbiAgICAgKiBpbnZva2VzIHZpbWVvIGNvbXBsZXRlIHNlcnZpY2UuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlIFhIUiBldmVudFxyXG4gICAgICovXHJcbiAgICBtZS5wcm90b3R5cGUub25Db250ZW50VXBsb2FkU3VjY2Vzc18gPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnN0YXR1cyA+PSAyMDAgJiYgZS50YXJnZXQuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVfKClcclxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnN0YXR1cyA9PSAzMDgpIHtcclxuICAgICAgICAgICAgdGhpcy5leHRyYWN0UmFuZ2VfKGUudGFyZ2V0KVxyXG4gICAgICAgICAgICB0aGlzLnJldHJ5SGFuZGxlci5yZXNldCgpXHJcbiAgICAgICAgICAgIHRoaXMuc2VuZEZpbGVfKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIGVycm9ycyBmb3IgdXBsb2Fkcy4gRWl0aGVyIHJldHJpZXMgb3IgYWJvcnRzIGRlcGVuZGluZ1xyXG4gICAgICogb24gdGhlIGVycm9yLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZSBYSFIgZXZlbnRcclxuICAgICAqL1xyXG4gICAgbWUucHJvdG90eXBlLm9uQ29udGVudFVwbG9hZEVycm9yXyA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuc3RhdHVzICYmIGUudGFyZ2V0LnN0YXR1cyA8IDUwMCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uRXJyb3IoZS50YXJnZXQucmVzcG9uc2UpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXRyeUhhbmRsZXIucmV0cnkodGhpcy5yZXN1bWVfKCkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlcyBlcnJvcnMgZm9yIHRoZSBjb21wbGV0ZSByZXF1ZXN0LlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZSBYSFIgZXZlbnRcclxuICAgICAqL1xyXG4gICAgbWUucHJvdG90eXBlLm9uQ29tcGxldGVFcnJvcl8gPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgdGhpcy5vbkVycm9yKGUudGFyZ2V0LnJlc3BvbnNlKTsgLy8gVE9ETyAtIFJldHJpZXMgZm9yIGluaXRpYWwgdXBsb2FkXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIGVycm9ycyBmb3IgdGhlIGluaXRpYWwgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGUgWEhSIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIG1lLnByb3RvdHlwZS5vblVwbG9hZEVycm9yXyA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB0aGlzLm9uRXJyb3IoZS50YXJnZXQucmVzcG9uc2UpOyAvLyBUT0RPIC0gUmV0cmllcyBmb3IgaW5pdGlhbCB1cGxvYWRcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdCBhIHF1ZXJ5IHN0cmluZyBmcm9tIGEgaGFzaC9vYmplY3RcclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIEtleS92YWx1ZSBwYWlycyBmb3IgcXVlcnkgc3RyaW5nXHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IHF1ZXJ5IHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBtZS5wcm90b3R5cGUuYnVpbGRRdWVyeV8gPSBmdW5jdGlvbihwYXJhbXMpIHtcclxuICAgICAgICBwYXJhbXMgPSBwYXJhbXMgfHwge31cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMocGFyYW1zKS5tYXAoZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSlcclxuICAgICAgICB9KS5qb2luKCcmJylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkIHRoZSBkcml2ZSB1cGxvYWQgVVJMXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbaWRdIEZpbGUgSUQgaWYgcmVwbGFjaW5nXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gUXVlcnkgcGFyYW1ldGVyc1xyXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBVUkxcclxuICAgICAqL1xyXG4gICAgbWUucHJvdG90eXBlLmJ1aWxkVXJsXyA9IGZ1bmN0aW9uKGlkLCBwYXJhbXMsIGJhc2VVcmwpIHtcclxuICAgICAgICB2YXIgdXJsID0gYmFzZVVybCB8fCBkZWZhdWx0cy5hcGlfdXJsICsgJy9tZS92aWRlb3MnXHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgIHVybCArPSBpZFxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLmJ1aWxkUXVlcnlfKHBhcmFtcylcclxuICAgICAgICBpZiAocXVlcnkpIHtcclxuICAgICAgICAgICAgdXJsICs9ICc/JyArIHF1ZXJ5XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmxcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbWVcclxufSkpXHJcbiJdLCJuYW1lcyI6WyJWaW1lb1VwbG9hZCIsInNlbmRWaWRlb1RvVmltZW8iLCJvcHRpb25zIiwic2VsZWN0b3IiLCJ0aXRyZSIsImRlc2NyaXB0aW9uIiwicHJvZ3Jlc3MiLCJjb21wbGV0ZSIsImVycm9yIiwiZmlsZXMiLCIkIiwiZ2V0IiwibmFtZSIsImZpbGUiLCJ0b2tlbiIsInByb2Nlc3MiLCJlbnYiLCJWSU1FT19BQ0NFU1NfVE9LRU4iLCJ1cGdyYWRlX3RvXzEwODAiLCJvbkVycm9yIiwiZGF0YSIsIm9uUHJvZ3Jlc3MiLCJNYXRoIiwiZmxvb3IiLCJsb2FkZWQiLCJ0b3RhbCIsIm9uQ29tcGxldGUiLCJ2aWRlb0lkIiwiaW5kZXgiLCJ1cmwiLCJwcmV0dHkiLCJtZXRhZGF0YSIsImxpbmsiLCJKU09OIiwic3RyaW5naWZ5IiwidXBsb2FkIiwicm9vdCIsImZhY3RvcnkiLCJkZWZpbmUiLCJhbWQiLCJtb2R1bGUiLCJleHBvcnRzIiwiUmV0cnlIYW5kbGVyIiwiaW50ZXJ2YWwiLCJtYXhJbnRlcnZhbCIsInByb3RvdHlwZSIsInJldHJ5IiwiZm4iLCJzZXRUaW1lb3V0IiwibmV4dEludGVydmFsXyIsInJlc2V0IiwiZ2V0UmFuZG9tSW50XyIsIm1pbiIsIm1heCIsInJhbmRvbSIsImRlZmF1bHRzIiwiYXBpX3VybCIsImNvbnRlbnRUeXBlIiwiYXBpX3ZlcnNpb24iLCJvZmZzZXQiLCJjaHVua1NpemUiLCJyZXRyeUhhbmRsZXIiLCJtZSIsIm9wdHMiLCJpIiwidW5kZWZpbmVkIiwiYWNjZXB0IiwiaHR0cE1ldGhvZCIsImZpbGVJZCIsInZpZGVvRGF0YSIsInByaXZhY3kiLCJ2aWV3IiwicGFyYW1zIiwiYnVpbGRVcmxfIiwiYmFzZVVybCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbmxvYWQiLCJlIiwidGFyZ2V0Iiwic3RhdHVzIiwicmVzcG9uc2UiLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsInVwbG9hZF9saW5rIiwidmlkZW9fdXJsIiwidXJpIiwidXNlciIsInRpY2tldF9pZCIsImNvbXBsZXRlX3VybCIsImNvbXBsZXRlX3VyaSIsInNlbmRGaWxlXyIsIm9uVXBsb2FkRXJyb3JfIiwiYmluZCIsIm9uZXJyb3IiLCJib2R5IiwiYXBwcm9hY2giLCJzaXplIiwic2VuZCIsImNvbnRlbnQiLCJlbmQiLCJzbGljZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkNvbnRlbnRVcGxvYWRTdWNjZXNzXyIsIm9uQ29udGVudFVwbG9hZEVycm9yXyIsInJlc3VtZV8iLCJleHRyYWN0UmFuZ2VfIiwicmFuZ2UiLCJnZXRSZXNwb25zZUhlYWRlciIsInBhcnNlSW50IiwibWF0Y2giLCJwb3AiLCJjb21wbGV0ZV8iLCJ2aWRlb19pZCIsInNwbGl0Iiwib25Db21wbGV0ZUVycm9yXyIsImJ1aWxkUXVlcnlfIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJpZCIsInF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==