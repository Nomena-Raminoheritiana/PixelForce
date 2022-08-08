(self["webpackChunk"] = self["webpackChunk"] || []).push([["tag"],{

/***/ "./assets/js/tag.js":
/*!**************************!*\
  !*** ./assets/js/tag.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
$(document).ready(function () {
  var couleurSelectioner = $('[name="tag[couleur]"]').val();
  $('.tag-lg[data-value="' + couleurSelectioner + '"]').addClass('active');
  $(this).on('click', '.tag-lg', function (e) {
    e.preventDefault();
    var value = $(this).attr('data-value');
    $('[name="tag[couleur]"]').val(value);
    $('.tag-lg').each(function () {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/js/tag.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFDekIsTUFBSUMsa0JBQWtCLEdBQUdILENBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCSSxHQUEzQixFQUF6QjtBQUNBSixFQUFBQSxDQUFDLENBQUMseUJBQXVCRyxrQkFBdkIsR0FBMEMsSUFBM0MsQ0FBRCxDQUFrREUsUUFBbEQsQ0FBMkQsUUFBM0Q7QUFDQUwsRUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxFQUFSLENBQVcsT0FBWCxFQUFvQixTQUFwQixFQUErQixVQUFTQyxDQUFULEVBQVk7QUFDdkNBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQU1DLEtBQUssR0FBR1QsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVSxJQUFSLENBQWEsWUFBYixDQUFkO0FBQ0FWLElBQUFBLENBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCSSxHQUEzQixDQUErQkssS0FBL0I7QUFDQVQsSUFBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhVyxJQUFiLENBQWtCLFlBQVc7QUFDekJYLE1BQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVksV0FBUixDQUFvQixRQUFwQjtBQUNILEtBRkQ7QUFHQVosSUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSyxRQUFSLENBQWlCLFFBQWpCO0FBQ0gsR0FSRDtBQVNILENBWkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGFnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IGNvdWxldXJTZWxlY3Rpb25lciA9ICQoJ1tuYW1lPVwidGFnW2NvdWxldXJdXCJdJykudmFsKCk7XHJcbiAgICAkKCcudGFnLWxnW2RhdGEtdmFsdWU9XCInK2NvdWxldXJTZWxlY3Rpb25lcisnXCJdJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCh0aGlzKS5vbignY2xpY2snLCAnLnRhZy1sZycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdmFsdWUnKTtcclxuICAgICAgICAkKCdbbmFtZT1cInRhZ1tjb3VsZXVyXVwiXScpLnZhbCh2YWx1ZSk7XHJcbiAgICAgICAgJCgnLnRhZy1sZycpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJylcclxuICAgIH0pXHJcbn0pOyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNvdWxldXJTZWxlY3Rpb25lciIsInZhbCIsImFkZENsYXNzIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsImF0dHIiLCJlYWNoIiwicmVtb3ZlQ2xhc3MiXSwic291cmNlUm9vdCI6IiJ9