(self["webpackChunk"] = self["webpackChunk"] || []).push([["vuexy_app_user_view_js"],{

/***/ "./assets/js/vuexy/js/scripts/pages/app-user-view.js":
/*!***********************************************************!*\
  !*** ./assets/js/vuexy/js/scripts/pages/app-user-view.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

/*=========================================================================================
    File Name: app-user-view.js
    Description: User View page
    --------------------------------------------------------------------------------------
    Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
(function () {
  var suspendUser = document.querySelector('.suspend-user'); // Suspend User javascript

  if (suspendUser) {
    suspendUser.onclick = function () {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert user!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Suspend user!',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-outline-danger ms-1'
        },
        buttonsStyling: false
      }).then(function (result) {
        if (result.value) {
          Swal.fire({
            icon: 'success',
            title: 'Suspended!',
            text: 'User has been suspended.',
            customClass: {
              confirmButton: 'btn btn-success'
            }
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            title: 'Cancelled',
            text: 'Cancelled Suspension :)',
            icon: 'error',
            customClass: {
              confirmButton: 'btn btn-success'
            }
          });
        }
      });
    };
  } //? Billing page have multiple buttons
  // Cancel Subscription alert


  var cancelSubscription = document.querySelectorAll('.cancel-subscription'); // Alert With Functional Confirm Button

  if (cancelSubscription) {
    cancelSubscription.forEach(function (cancelBtn) {
      cancelBtn.onclick = function () {
        Swal.fire({
          text: 'Are you sure you would like to cancel your subscription?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          customClass: {
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn btn-outline-danger ms-1'
          },
          buttonsStyling: false
        }).then(function (result) {
          if (result.value) {
            Swal.fire({
              icon: 'success',
              title: 'Unsubscribed!',
              text: 'Your subscription cancelled successfully.',
              customClass: {
                confirmButton: 'btn btn-success'
              }
            });
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
              title: 'Cancelled',
              text: 'Unsubscription Cancelled!!',
              icon: 'error',
              customClass: {
                confirmButton: 'btn btn-success'
              }
            });
          }
        });
      };
    });
  }
})();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_obj-7bb33f"], () => (__webpack_exec__("./assets/js/vuexy/js/scripts/pages/app-user-view.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VEQsTUFTTyxJQUFJSSxNQUFNLENBQUNFLE9BQVAsS0FBbUJkLElBQUksQ0FBQ2UsYUFBTCxDQUFtQkMsTUFBMUMsRUFBa0Q7QUFDdkRoQixZQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNSQyxjQUFBQSxLQUFLLEVBQUUsV0FEQztBQUVSQyxjQUFBQSxJQUFJLEVBQUUsNEJBRkU7QUFHUkMsY0FBQUEsSUFBSSxFQUFFLE9BSEU7QUFJUkcsY0FBQUEsV0FBVyxFQUFFO0FBQ1hDLGdCQUFBQSxhQUFhLEVBQUU7QUFESjtBQUpMLGFBQVY7QUFRRDtBQUNGLFNBOUJEO0FBK0JELE9BaENEO0FBaUNELEtBbENEO0FBbUNEO0FBQ0YsQ0FuRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdnVleHkvanMvc2NyaXB0cy9wYWdlcy9hcHAtdXNlci12aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIEZpbGUgTmFtZTogYXBwLXVzZXItdmlldy5qc1xyXG4gICAgRGVzY3JpcHRpb246IFVzZXIgVmlldyBwYWdlXHJcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgSXRlbSBOYW1lOiBWdWV4eSAgLSBWdWVqcywgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXHJcbiAgICBBdXRob3I6IFBJWElOVkVOVFxyXG4gICAgQXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuKGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBzdXNwZW5kVXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdXNwZW5kLXVzZXInKTtcclxuXHJcbiAgLy8gU3VzcGVuZCBVc2VyIGphdmFzY3JpcHRcclxuICBpZiAoc3VzcGVuZFVzZXIpIHtcclxuICAgIHN1c3BlbmRVc2VyLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgdGl0bGU6ICdBcmUgeW91IHN1cmU/JyxcclxuICAgICAgICB0ZXh0OiBcIllvdSB3b24ndCBiZSBhYmxlIHRvIHJldmVydCB1c2VyIVwiLFxyXG4gICAgICAgIGljb246ICd3YXJuaW5nJyxcclxuICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnWWVzLCBTdXNwZW5kIHVzZXIhJyxcclxuICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tcHJpbWFyeScsXHJcbiAgICAgICAgICBjYW5jZWxCdXR0b246ICdidG4gYnRuLW91dGxpbmUtZGFuZ2VyIG1zLTEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1N1c3BlbmRlZCEnLFxyXG4gICAgICAgICAgICB0ZXh0OiAnVXNlciBoYXMgYmVlbiBzdXNwZW5kZWQuJyxcclxuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1zdWNjZXNzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kaXNtaXNzID09PSBTd2FsLkRpc21pc3NSZWFzb24uY2FuY2VsKSB7XHJcbiAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NhbmNlbGxlZCcsXHJcbiAgICAgICAgICAgIHRleHQ6ICdDYW5jZWxsZWQgU3VzcGVuc2lvbiA6KScsXHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogJ2J0biBidG4tc3VjY2VzcydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLz8gQmlsbGluZyBwYWdlIGhhdmUgbXVsdGlwbGUgYnV0dG9uc1xyXG4gIC8vIENhbmNlbCBTdWJzY3JpcHRpb24gYWxlcnRcclxuICBjb25zdCBjYW5jZWxTdWJzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FuY2VsLXN1YnNjcmlwdGlvbicpO1xyXG5cclxuICAvLyBBbGVydCBXaXRoIEZ1bmN0aW9uYWwgQ29uZmlybSBCdXR0b25cclxuICBpZiAoY2FuY2VsU3Vic2NyaXB0aW9uKSB7XHJcbiAgICBjYW5jZWxTdWJzY3JpcHRpb24uZm9yRWFjaChjYW5jZWxCdG4gPT4ge1xyXG4gICAgICBjYW5jZWxCdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgdGV4dDogJ0FyZSB5b3Ugc3VyZSB5b3Ugd291bGQgbGlrZSB0byBjYW5jZWwgeW91ciBzdWJzY3JpcHRpb24/JyxcclxuICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcclxuICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1llcycsXHJcbiAgICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1wcmltYXJ5JyxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiAnYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBtcy0xJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZVxyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ1Vuc3Vic2NyaWJlZCEnLFxyXG4gICAgICAgICAgICAgIHRleHQ6ICdZb3VyIHN1YnNjcmlwdGlvbiBjYW5jZWxsZWQgc3VjY2Vzc2Z1bGx5LicsXHJcbiAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246ICdidG4gYnRuLXN1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRpc21pc3MgPT09IFN3YWwuRGlzbWlzc1JlYXNvbi5jYW5jZWwpIHtcclxuICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ0NhbmNlbGxlZCcsXHJcbiAgICAgICAgICAgICAgdGV4dDogJ1Vuc3Vic2NyaXB0aW9uIENhbmNlbGxlZCEhJyxcclxuICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiAnYnRuIGJ0bi1zdWNjZXNzJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6WyJzdXNwZW5kVXNlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9uY2xpY2siLCJTd2FsIiwiZmlyZSIsInRpdGxlIiwidGV4dCIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvblRleHQiLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsImRpc21pc3MiLCJEaXNtaXNzUmVhc29uIiwiY2FuY2VsIiwiY2FuY2VsU3Vic2NyaXB0aW9uIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJjYW5jZWxCdG4iXSwic291cmNlUm9vdCI6IiJ9