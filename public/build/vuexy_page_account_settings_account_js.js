(self["webpackChunk"] = self["webpackChunk"] || []).push([["vuexy_page_account_settings_account_js"],{

/***/ "./assets/js/vuexy/js/scripts/pages/page-account-settings-account.js":
/*!***************************************************************************!*\
  !*** ./assets/js/vuexy/js/scripts/pages/page-account-settings-account.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
$(function () {
  'use strict'; // variables


  var form = $('.validate-form'),
      accountUploadImg = $('#account-upload-img'),
      accountUploadBtn = $('#account-upload'),
      accountUserImage = $('.uploadedAvatar'),
      accountResetBtn = $('#account-reset'),
      accountNumberMask = $('.account-number-mask'),
      accountZipCode = $('.account-zip-code'),
      select2 = $('.select2'); // Update user photo on click of button

  if (accountUserImage) {
    var resetImage = accountUserImage.attr('src');
    accountUploadBtn.on('change', function (e) {
      var reader = new FileReader(),
          files = e.target.files;

      reader.onload = function () {
        if (accountUploadImg) {
          accountUploadImg.attr('src', reader.result);
        }
      };

      reader.readAsDataURL(files[0]);
    });
    accountResetBtn.on('click', function () {
      accountUserImage.attr('src', resetImage);
    });
  } // jQuery Validation for all forms
  // --------------------------------------------------------------------


  if (form.length) {
    form.each(function () {
      var $this = $(this);
      $this.validate({
        rules: {
          firstName: {
            required: true
          },
          lastName: {
            required: true
          },
          accountActivation: {
            required: true
          }
        }
      });
      $this.on('submit', function (e) {
        e.preventDefault();
      });
    });
  } //phone


  if (accountNumberMask.length) {
    accountNumberMask.each(function () {
      new Cleave($(this), {
        phone: true,
        phoneRegionCode: 'US'
      });
    });
  } //zip code


  if (accountZipCode.length) {
    accountZipCode.each(function () {
      new Cleave($(this), {
        delimiter: '',
        numeral: true
      });
    });
  } // For all Select2


  if (select2.length) {
    select2.each(function () {
      var $this = $(this);
      $this.wrap('<div class="position-relative"></div>');
      $this.select2({
        dropdownParent: $this.parent()
      });
    });
  }
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/js/vuexy/js/scripts/pages/page-account-settings-account.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVleHlfcGFnZV9hY2NvdW50X3NldHRpbmdzX2FjY291bnRfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUFBLENBQUMsQ0FBQyxZQUFZO0FBQ1gsY0FBRCxDQURZLENBR1o7OztBQUNBLE1BQUlDLElBQUksR0FBR0QsQ0FBQyxDQUFDLGdCQUFELENBQVo7QUFBQSxNQUNFRSxnQkFBZ0IsR0FBR0YsQ0FBQyxDQUFDLHFCQUFELENBRHRCO0FBQUEsTUFFRUcsZ0JBQWdCLEdBQUdILENBQUMsQ0FBQyxpQkFBRCxDQUZ0QjtBQUFBLE1BR0VJLGdCQUFnQixHQUFHSixDQUFDLENBQUMsaUJBQUQsQ0FIdEI7QUFBQSxNQUlFSyxlQUFlLEdBQUdMLENBQUMsQ0FBQyxnQkFBRCxDQUpyQjtBQUFBLE1BS0VNLGlCQUFpQixHQUFHTixDQUFDLENBQUMsc0JBQUQsQ0FMdkI7QUFBQSxNQU1FTyxjQUFjLEdBQUdQLENBQUMsQ0FBQyxtQkFBRCxDQU5wQjtBQUFBLE1BT0VRLE9BQU8sR0FBR1IsQ0FBQyxDQUFDLFVBQUQsQ0FQYixDQUpZLENBYVo7O0FBRUEsTUFBSUksZ0JBQUosRUFBc0I7QUFDcEIsUUFBSUssVUFBVSxHQUFHTCxnQkFBZ0IsQ0FBQ00sSUFBakIsQ0FBc0IsS0FBdEIsQ0FBakI7QUFDQVAsSUFBQUEsZ0JBQWdCLENBQUNRLEVBQWpCLENBQW9CLFFBQXBCLEVBQThCLFVBQVVDLENBQVYsRUFBYTtBQUN6QyxVQUFJQyxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFiO0FBQUEsVUFDRUMsS0FBSyxHQUFHSCxDQUFDLENBQUNJLE1BQUYsQ0FBU0QsS0FEbkI7O0FBRUFGLE1BQUFBLE1BQU0sQ0FBQ0ksTUFBUCxHQUFnQixZQUFZO0FBQzFCLFlBQUlmLGdCQUFKLEVBQXNCO0FBQ3BCQSxVQUFBQSxnQkFBZ0IsQ0FBQ1EsSUFBakIsQ0FBc0IsS0FBdEIsRUFBNkJHLE1BQU0sQ0FBQ0ssTUFBcEM7QUFDRDtBQUNGLE9BSkQ7O0FBS0FMLE1BQUFBLE1BQU0sQ0FBQ00sYUFBUCxDQUFxQkosS0FBSyxDQUFDLENBQUQsQ0FBMUI7QUFDRCxLQVREO0FBV0FWLElBQUFBLGVBQWUsQ0FBQ00sRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsWUFBWTtBQUN0Q1AsTUFBQUEsZ0JBQWdCLENBQUNNLElBQWpCLENBQXNCLEtBQXRCLEVBQTZCRCxVQUE3QjtBQUNELEtBRkQ7QUFHRCxHQS9CVyxDQWlDWjtBQUNBOzs7QUFDQSxNQUFJUixJQUFJLENBQUNtQixNQUFULEVBQWlCO0FBQ2ZuQixJQUFBQSxJQUFJLENBQUNvQixJQUFMLENBQVUsWUFBWTtBQUNwQixVQUFJQyxLQUFLLEdBQUd0QixDQUFDLENBQUMsSUFBRCxDQUFiO0FBRUFzQixNQUFBQSxLQUFLLENBQUNDLFFBQU4sQ0FBZTtBQUNiQyxRQUFBQSxLQUFLLEVBQUU7QUFDTEMsVUFBQUEsU0FBUyxFQUFFO0FBQ1RDLFlBQUFBLFFBQVEsRUFBRTtBQURELFdBRE47QUFJTEMsVUFBQUEsUUFBUSxFQUFFO0FBQ1JELFlBQUFBLFFBQVEsRUFBRTtBQURGLFdBSkw7QUFPTEUsVUFBQUEsaUJBQWlCLEVBQUU7QUFDakJGLFlBQUFBLFFBQVEsRUFBRTtBQURPO0FBUGQ7QUFETSxPQUFmO0FBYUFKLE1BQUFBLEtBQUssQ0FBQ1gsRUFBTixDQUFTLFFBQVQsRUFBbUIsVUFBVUMsQ0FBVixFQUFhO0FBQzlCQSxRQUFBQSxDQUFDLENBQUNpQixjQUFGO0FBQ0QsT0FGRDtBQUdELEtBbkJEO0FBb0JELEdBeERXLENBMERaOzs7QUFDQSxNQUFJdkIsaUJBQWlCLENBQUNjLE1BQXRCLEVBQThCO0FBQzVCZCxJQUFBQSxpQkFBaUIsQ0FBQ2UsSUFBbEIsQ0FBdUIsWUFBWTtBQUNqQyxVQUFJUyxNQUFKLENBQVc5QixDQUFDLENBQUMsSUFBRCxDQUFaLEVBQW9CO0FBQ2xCK0IsUUFBQUEsS0FBSyxFQUFFLElBRFc7QUFFbEJDLFFBQUFBLGVBQWUsRUFBRTtBQUZDLE9BQXBCO0FBSUQsS0FMRDtBQU1ELEdBbEVXLENBb0VaOzs7QUFDQSxNQUFJekIsY0FBYyxDQUFDYSxNQUFuQixFQUEyQjtBQUN6QmIsSUFBQUEsY0FBYyxDQUFDYyxJQUFmLENBQW9CLFlBQVk7QUFDOUIsVUFBSVMsTUFBSixDQUFXOUIsQ0FBQyxDQUFDLElBQUQsQ0FBWixFQUFvQjtBQUNsQmlDLFFBQUFBLFNBQVMsRUFBRSxFQURPO0FBRWxCQyxRQUFBQSxPQUFPLEVBQUU7QUFGUyxPQUFwQjtBQUlELEtBTEQ7QUFNRCxHQTVFVyxDQThFWjs7O0FBQ0EsTUFBSTFCLE9BQU8sQ0FBQ1ksTUFBWixFQUFvQjtBQUNsQlosSUFBQUEsT0FBTyxDQUFDYSxJQUFSLENBQWEsWUFBWTtBQUN2QixVQUFJQyxLQUFLLEdBQUd0QixDQUFDLENBQUMsSUFBRCxDQUFiO0FBQ0FzQixNQUFBQSxLQUFLLENBQUNhLElBQU4sQ0FBVyx1Q0FBWDtBQUNBYixNQUFBQSxLQUFLLENBQUNkLE9BQU4sQ0FBYztBQUNaNEIsUUFBQUEsY0FBYyxFQUFFZCxLQUFLLENBQUNlLE1BQU47QUFESixPQUFkO0FBR0QsS0FORDtBQU9EO0FBQ0YsQ0F4RkEsQ0FBRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy92dWV4eS9qcy9zY3JpcHRzL3BhZ2VzL3BhZ2UtYWNjb3VudC1zZXR0aW5ncy1hY2NvdW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xyXG4gICgndXNlIHN0cmljdCcpO1xyXG5cclxuICAvLyB2YXJpYWJsZXNcclxuICB2YXIgZm9ybSA9ICQoJy52YWxpZGF0ZS1mb3JtJyksXHJcbiAgICBhY2NvdW50VXBsb2FkSW1nID0gJCgnI2FjY291bnQtdXBsb2FkLWltZycpLFxyXG4gICAgYWNjb3VudFVwbG9hZEJ0biA9ICQoJyNhY2NvdW50LXVwbG9hZCcpLFxyXG4gICAgYWNjb3VudFVzZXJJbWFnZSA9ICQoJy51cGxvYWRlZEF2YXRhcicpLFxyXG4gICAgYWNjb3VudFJlc2V0QnRuID0gJCgnI2FjY291bnQtcmVzZXQnKSxcclxuICAgIGFjY291bnROdW1iZXJNYXNrID0gJCgnLmFjY291bnQtbnVtYmVyLW1hc2snKSxcclxuICAgIGFjY291bnRaaXBDb2RlID0gJCgnLmFjY291bnQtemlwLWNvZGUnKSxcclxuICAgIHNlbGVjdDIgPSAkKCcuc2VsZWN0MicpO1xyXG5cclxuICAvLyBVcGRhdGUgdXNlciBwaG90byBvbiBjbGljayBvZiBidXR0b25cclxuXHJcbiAgaWYgKGFjY291bnRVc2VySW1hZ2UpIHtcclxuICAgIHZhciByZXNldEltYWdlID0gYWNjb3VudFVzZXJJbWFnZS5hdHRyKCdzcmMnKTtcclxuICAgIGFjY291bnRVcGxvYWRCdG4ub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpLFxyXG4gICAgICAgIGZpbGVzID0gZS50YXJnZXQuZmlsZXM7XHJcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGFjY291bnRVcGxvYWRJbWcpIHtcclxuICAgICAgICAgIGFjY291bnRVcGxvYWRJbWcuYXR0cignc3JjJywgcmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlc1swXSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhY2NvdW50UmVzZXRCdG4ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBhY2NvdW50VXNlckltYWdlLmF0dHIoJ3NyYycsIHJlc2V0SW1hZ2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBqUXVlcnkgVmFsaWRhdGlvbiBmb3IgYWxsIGZvcm1zXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBpZiAoZm9ybS5sZW5ndGgpIHtcclxuICAgIGZvcm0uZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAkdGhpcy52YWxpZGF0ZSh7XHJcbiAgICAgICAgcnVsZXM6IHtcclxuICAgICAgICAgIGZpcnN0TmFtZToge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGxhc3ROYW1lOiB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYWNjb3VudEFjdGl2YXRpb246IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICAkdGhpcy5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL3Bob25lXHJcbiAgaWYgKGFjY291bnROdW1iZXJNYXNrLmxlbmd0aCkge1xyXG4gICAgYWNjb3VudE51bWJlck1hc2suZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIG5ldyBDbGVhdmUoJCh0aGlzKSwge1xyXG4gICAgICAgIHBob25lOiB0cnVlLFxyXG4gICAgICAgIHBob25lUmVnaW9uQ29kZTogJ1VTJ1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy96aXAgY29kZVxyXG4gIGlmIChhY2NvdW50WmlwQ29kZS5sZW5ndGgpIHtcclxuICAgIGFjY291bnRaaXBDb2RlLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICBuZXcgQ2xlYXZlKCQodGhpcyksIHtcclxuICAgICAgICBkZWxpbWl0ZXI6ICcnLFxyXG4gICAgICAgIG51bWVyYWw6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIEZvciBhbGwgU2VsZWN0MlxyXG4gIGlmIChzZWxlY3QyLmxlbmd0aCkge1xyXG4gICAgc2VsZWN0Mi5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgJHRoaXMud3JhcCgnPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlXCI+PC9kaXY+Jyk7XHJcbiAgICAgICR0aGlzLnNlbGVjdDIoe1xyXG4gICAgICAgIGRyb3Bkb3duUGFyZW50OiAkdGhpcy5wYXJlbnQoKVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiJdLCJuYW1lcyI6WyIkIiwiZm9ybSIsImFjY291bnRVcGxvYWRJbWciLCJhY2NvdW50VXBsb2FkQnRuIiwiYWNjb3VudFVzZXJJbWFnZSIsImFjY291bnRSZXNldEJ0biIsImFjY291bnROdW1iZXJNYXNrIiwiYWNjb3VudFppcENvZGUiLCJzZWxlY3QyIiwicmVzZXRJbWFnZSIsImF0dHIiLCJvbiIsImUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiZmlsZXMiLCJ0YXJnZXQiLCJvbmxvYWQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwibGVuZ3RoIiwiZWFjaCIsIiR0aGlzIiwidmFsaWRhdGUiLCJydWxlcyIsImZpcnN0TmFtZSIsInJlcXVpcmVkIiwibGFzdE5hbWUiLCJhY2NvdW50QWN0aXZhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiQ2xlYXZlIiwicGhvbmUiLCJwaG9uZVJlZ2lvbkNvZGUiLCJkZWxpbWl0ZXIiLCJudW1lcmFsIiwid3JhcCIsImRyb3Bkb3duUGFyZW50IiwicGFyZW50Il0sInNvdXJjZVJvb3QiOiIifQ==