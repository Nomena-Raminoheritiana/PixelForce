(self.webpackChunk=self.webpackChunk||[]).push([[2143],{4180:(e,t,n)=>{var r={"./hello_controller.js":4695};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=4180},8205:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={}},4695:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});n(8304),n(489),n(1539),n(2419),n(8011),n(9070),n(2526),n(1817),n(2165),n(6992),n(8783),n(3948);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}function u(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var l=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(s,e);var t,n,r,u=c(s);function s(){return o(this,s),u.apply(this,arguments)}return t=s,(n=[{key:"connect",value:function(){this.element.textContent="Hello Stimulus! Edit me in assets/controllers/hello_controller.js"}}])&&i(t.prototype,n),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(n(6599).Qr)},9437:(e,t,n)=>{"use strict";n(9826),n(1539),n(9755),n(3333),(0,n(2192).x)(n(4180));var r=n(9755);n.g.$=n.g.jQuery=r,r(document).ready((function(){r(".sortable").DataTable({paging:!1,ordering:!0,info:!1,searching:!1});r(this).on("click",'[data-bs-toggle="dropdown"]',(function(e){e.preventDefault(),e.stopPropagation();var t=r(this).attr("id");t?r(this).closest(".dropdown").find('[aria-labelledby="'+t+'"]').first().toggleClass("show"):r(this).next(".dropdown-menu").first().toggleClass("show"),!0})).on("click","body",(function(){r(".dropdown-menu").each((function(){r(this).removeClass("show")}))})),r('[data-bs-toggle="popover"]').each((function(){new bootstrap.Popover(this,{container:"body",trigger:"hover"})})),r('[data-toggle="tooltip"]').each((function(){r(this).tooltip()}))})),n(9837)},5562:(e,t,n)=>{var r=n(9755);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(9600),n(1249),n(9826),n(1539),n(9070),n(7941),n(2526),n(7327),n(5003),n(9554),n(4747),n(9337),n(3321),t.q6=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t,o="meet.jit.si",a={roomName:r,parentNode:e},c=i(i({},a),n);new JitsiMeetExternalAPI(o,c)},t.bB=function(){return Array.apply(null,Array(30)).map((function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";return e[Math.floor(Math.random()*e.length)]})).join("")},t.Qn=function(){var e=r("#live_video").find("iframe");e.length>0&&e.remove()}},9837:(e,t,n)=>{"use strict";n.r(t);n(5666),n(6992),n(1539),n(8783),n(3948),n(1637),n(9826),n(2526),n(1817),n(2165),n(8674);var r=n(5169),o=n(9669),i=n.n(o),a=n(5562),c=n(9755);function u(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){u(i,r,o,a,c,"next",e)}function c(e){u(i,r,o,a,c,"throw",e)}a(void 0)}))}}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}c((function(){var e=null,t=!1,n=new AbortController,o="null",u=!1,f=!0;c(this).on("click",".speed-liveVideo-call",(function(o){o.preventDefault(),o.stopPropagation();var u=c(this).attr("id-recepteur"),s=c(this).attr("id-envoyeur");(0,a.Qn)(),c(".chargement-live").removeClass("d-none"),new r.u_(c("#modal-live-Video-Rapide")[0],{keyboard:!1}).show(),e=(0,a.bB)();var l=new URLSearchParams;l.append("userA",s),l.append("userB",u),l.append("code",e),l.append("signal",n.signal),c(this).closest(".users").find('[name="users[]"]').each((function(){this.checked&&l.append("users[]",c(this).val())})),c(this).closest(".users").find('input[type="hidden"][name="users[]"]').each((function(){l.append("users[]",c(this).val())})),i().post(Routing.generate("coach_zoom_liveRapide"),l).then((function(n){t=!0,(0,a.q6)(c("#live_video")[0],e,{width:"100%",height:"100%",onload:function(){c(".chargement-live").addClass("d-none")}})})).catch((function(e){console.log(e)}))})),c(this).on("hide.bs.modal","#modal-live-Video-Rapide",(function(){(0,a.Qn)(),!1===t?n.abort():(i().get(Routing.generate("live_destruct",{code:e})),t=!1),c(".alert-absolute").html("")})),c(this).on("click",".join-live",(function(e){e.preventDefault(),t=!0,u=!0,f=!1,"object"==l(o)?o.hide():(o=new r.u_(c("#ModalJoinCall")[0])).hide(),new r.u_(c("#modal-live-Video-Rapide")[0],{keyboard:!1}).show(),(0,a.q6)(c("#live_video")[0],c(this).attr("id-live"),{width:"100%",height:"100%",onload:function(){c(".chargement-live").addClass("d-none")}})})),c(this).on("click",".remove-live",function(){var e=s(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),"object"==l(o)&&(o.hide(),u=!0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),c(this).on("click",".call-rapel",function(){var e=s(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c(this).closest(".alert").remove(),e.next=4,i().post(Routing.generate("coach_zoom_rappelerAgent",{encodedUser:c(this).attr("data-user-id")}));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}());var p=document.getElementById("live-call-topic");if(p){var d=JSON.parse(p.textContent);new EventSource(d).onmessage=function(){var e=s(regeneratorRuntime.mark((function e(n){var a,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.parse(n.data),e.next=3,i().get(Routing.generate("agent_zoom_rejoindreReunion",{code:a.code}));case 3:"object"!=l((u=e.sent).data)&&!1===t?(c("#ModalJoinCall").length>0?c("#ModalJoinCall").replaceWith(u.data):c("body").append(u.data),"object"!=l(o)||o.hide(),(o=new r.u_(c("#ModalJoinCall")[0],{keyboard:!1})).show()):"object"==l(o)&&(o.hide(),o="");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}var h=document.getElementById("live-refus-topic");if(h){var v=JSON.parse(h.textContent);new EventSource(v).onmessage=function(){var e=s(regeneratorRuntime.mark((function e(t){var n,r,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=JSON.parse(t.data),r=c("#model-alert"),o=r.clone(),i="data-"+n.user.id,o.attr("id",i),o.removeClass("d-none").addClass(" mb-1"),o.find(".nom-participant").html(n.user.nom+" "+n.user.prenom),c("#modal-live-Video-Rapide").find(".alert-absolute").append(o),c('[id="'+i+'"]').addClass("show"),c('[id="'+i+'"]').find(".call-rapel").attr("data-user-id",n.user.id);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}c(this).on("hide.bs.modal","#ModalJoinCall",function(){var e=s(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f&&c(".remove-live").each(s(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get(Routing.generate("agent_zoom_refuserReunion",{code:c(this).attr("id-live")}));case 2:case"end":return e.stop()}}),e,this)})))),u||c(this).remove();case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()),c(this).on("show.bs.modal","#ModalJoinCall",function(){var e=s(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f=!0;case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}},e=>{e.O(0,[9755,2719,1386,8674,5666,7165,2206,5633],(()=>{return t=9437,e(e.s=t);var t}));e.O()}]);