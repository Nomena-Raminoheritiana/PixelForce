(self["webpackChunk"] = self["webpackChunk"] || []).push([["ckeditorForm"],{

/***/ "./assets/js/ckeditorForm.js":
/*!***********************************!*\
  !*** ./assets/js/ckeditorForm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
$(function () {
  /**
   * Permet de mettre à jour les donnés insérées dans les champs ckEditor
   * 
   * Car après avoir intégré CkEditor, les champs d'origines restent null et ckEditor les changent avec ses propres champs personnalisés
   * Les champs d'origines se mettent seulement en display:none
   */
  function updateFieldCkeditor(fields) {
    $.each(fields, function (key, value) {
      $('#' + key).val(value.getData());
    });
  }

  $('#edit-formation').on('click', function (e) {
    e.preventDefault();
    updateFieldCkeditor(CKEDITOR.instances);
  });
  $('#submit-formation').on('click', function (e) {
    e.preventDefault();
    updateFieldCkeditor(CKEDITOR.instances);
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/js/ckeditorForm.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2tlZGl0b3JGb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBQSxDQUFDLENBQUMsWUFBWTtBQUVWO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJLFdBQVNDLG1CQUFULENBQTZCQyxNQUE3QixFQUFxQztBQUNqQ0YsSUFBQUEsQ0FBQyxDQUFDRyxJQUFGLENBQU9ELE1BQVAsRUFBZSxVQUFVRSxHQUFWLEVBQWVDLEtBQWYsRUFBc0I7QUFDakNMLE1BQUFBLENBQUMsQ0FBQyxNQUFNSSxHQUFQLENBQUQsQ0FBYUUsR0FBYixDQUFpQkQsS0FBSyxDQUFDRSxPQUFOLEVBQWpCO0FBQ0gsS0FGRDtBQUdIOztBQUVEUCxFQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQlEsRUFBckIsQ0FBd0IsT0FBeEIsRUFBa0MsVUFBU0MsQ0FBVCxFQUFXO0FBQ3pDQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQVQsSUFBQUEsbUJBQW1CLENBQUNVLFFBQVEsQ0FBQ0MsU0FBVixDQUFuQjtBQUVILEdBSkQ7QUFNQVosRUFBQUEsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJRLEVBQXZCLENBQTBCLE9BQTFCLEVBQW9DLFVBQVNDLENBQVQsRUFBVztBQUMzQ0EsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FULElBQUFBLG1CQUFtQixDQUFDVSxRQUFRLENBQUNDLFNBQVYsQ0FBbkI7QUFDSCxHQUhEO0FBS0gsQ0F6QkEsQ0FBRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9ja2VkaXRvckZvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJtZXQgZGUgbWV0dHJlIMOgIGpvdXIgbGVzIGRvbm7DqXMgaW5zw6lyw6llcyBkYW5zIGxlcyBjaGFtcHMgY2tFZGl0b3JcclxuICAgICAqIFxyXG4gICAgICogQ2FyIGFwcsOocyBhdm9pciBpbnTDqWdyw6kgQ2tFZGl0b3IsIGxlcyBjaGFtcHMgZCdvcmlnaW5lcyByZXN0ZW50IG51bGwgZXQgY2tFZGl0b3IgbGVzIGNoYW5nZW50IGF2ZWMgc2VzIHByb3ByZXMgY2hhbXBzIHBlcnNvbm5hbGlzw6lzXHJcbiAgICAgKiBMZXMgY2hhbXBzIGQnb3JpZ2luZXMgc2UgbWV0dGVudCBzZXVsZW1lbnQgZW4gZGlzcGxheTpub25lXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUZpZWxkQ2tlZGl0b3IoZmllbGRzKSB7XHJcbiAgICAgICAgJC5lYWNoKGZpZWxkcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgJCgnIycgKyBrZXkpLnZhbCh2YWx1ZS5nZXREYXRhKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICQoJyNlZGl0LWZvcm1hdGlvbicpLm9uKCdjbGljaycsICBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdXBkYXRlRmllbGRDa2VkaXRvcihDS0VESVRPUi5pbnN0YW5jZXMpXHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI3N1Ym1pdC1mb3JtYXRpb24nKS5vbignY2xpY2snLCAgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHVwZGF0ZUZpZWxkQ2tlZGl0b3IoQ0tFRElUT1IuaW5zdGFuY2VzKVxyXG4gICAgfSk7XHJcbiAgICBcclxufSlcclxuIl0sIm5hbWVzIjpbIiQiLCJ1cGRhdGVGaWVsZENrZWRpdG9yIiwiZmllbGRzIiwiZWFjaCIsImtleSIsInZhbHVlIiwidmFsIiwiZ2V0RGF0YSIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiQ0tFRElUT1IiLCJpbnN0YW5jZXMiXSwic291cmNlUm9vdCI6IiJ9