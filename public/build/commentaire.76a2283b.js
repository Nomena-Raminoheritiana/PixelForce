"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8757],{9136:(e,t,a)=>{a(5666),a(6992),a(1539),a(8783),a(3948),a(1637),a(9826),a(8674);var n=a(9669),r=a.n(n),i=a(516),s=a(9755);function o(e,t,a,n,r,i,s){try{var o=e[i](s),c=o.value}catch(e){return void a(e)}o.done?t(c):Promise.resolve(c).then(n,r)}function c(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var i=e.apply(t,a);function s(e){o(i,n,r,s,c,"next",e)}function c(e){o(i,n,r,s,c,"throw",e)}s(void 0)}))}}function m(e,t){return u.apply(this,arguments)}function u(){return(u=c(regeneratorRuntime.mark((function e(t,a){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new URLSearchParams).append("template",a),e.next=4,r().post(Routing.generate("commentaire_chargerSousCommentaire",{encodedCommentaire:t}),n);case 4:return e.abrupt("return",e.sent.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t){return p.apply(this,arguments)}function p(){return(p=c(regeneratorRuntime.mark((function e(t,a){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r().delete(Routing.generate("commentaire_supprimer",{id:t,token:a}));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e,t){return h.apply(this,arguments)}function h(){return(h=c(regeneratorRuntime.mark((function e(t,a){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new URLSearchParams).append("textes",a),e.next=4,r().put(Routing.generate("commentaire_edit",{id:t}),n);case 4:return e.abrupt("return",e.sent.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s(document).ready((function(){s(".load-comment").each(c(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new URLSearchParams).append("template",s(this).attr("data-template")),t.append("ownerId",s(this).attr("data-owner-id")),t.append("classWithNamespace",s(this).attr("data-owner-class")),e.next=6,r().post(Routing.generate("commentaire_charger"),t);case 6:a=e.sent.data,s(this).html(a.commentaires);case 8:case"end":return e.stop()}}),e,this)})))),s(this).on("click",".add-comment",function(){var e=c(regeneratorRuntime.mark((function e(t){var a,n,i,o,c,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=s(s(this).attr("data-selector")).val(),n=s(this).attr("data-parent-id"),(i=new URLSearchParams).append("classWithNamespace",s(this).attr("data-owner-class")),i.append("ownerId",s(this).attr("data-owner-id")),i.append("textes",a),i.append("parent_id",n),i.append("template",s(this).attr("data-template-instance")),e.next=11,r().post(Routing.generate("commentaire_add"),i);case 11:o=e.sent.data,void 0===n?s(".load-comment").append(o.template):(c=s("#commentaire-"+n).find(".load-sous-commentaires").first(),(m=c.find(">.chargement-commentaire")).length>0&&(c.removeClass("d-none"),m.remove()),c.append(o.template)),s(s(this).attr("data-selector")).val("");case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}());var e=new i.Z(s("#modification-commentaire")[0]);s(this).on("click",".update-commentaire",(function(t){t.preventDefault();var a=s(this).attr("data-id-commentaire-html"),n=s(a).html(),r=s(this).attr("data-id");s("#confirmer-maj").attr("data-commentaire-id",r).attr("data-id-commentaire-html",a),e.show(),s("#updated-commentaire-contents").html(n)})),s(this).on("click","#confirmer-maj",function(){var t=c(regeneratorRuntime.mark((function t(a){var n,r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=s(this).attr("data-id-commentaire-html"),t.next=4,l(s(this).attr("data-commentaire-id"),s("#updated-commentaire-contents").val());case 4:r=t.sent,i=r.commentaire.textes,s(n).html(i),e.hide();case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}());var t=new i.Z(s("#suppression-commentaire")[0]);s(this).on("click",".supprimer-commentaire",(function(e){e.preventDefault();var a=s(this).attr("data-id"),n=s(this).attr("data-token");t.show();var r=s("#confirmer-suppression");r.attr("data-id",a),r.attr("data-token",n)})),s(this).on("click","#confirmer-suppression",function(){var e=c(regeneratorRuntime.mark((function e(a){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=s(this).attr("data-id"),r=s(this).attr("data-token"),e.next=5,d(n,r);case 5:"ok"===e.sent.message?(s("#commentaire-"+n).remove(),t.hide()):window.alert("le commentaire n'a pas pu être supprimer");case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()),s(this).on("click",".repondre-commentaire",(function(e){e.preventDefault(),s(this).closest(".commentaire-instance").next(".commentaire-input").removeClass("d-none")})),s(this).on("click",".afficher-commentaire",function(){var e=c(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s(this).closest(".displayResponse").find(">.load-sous-commentaires").removeClass("d-none"),e.next=4,m(s(this).attr("data-parent-id"),s(this).attr("data-template"));case 4:a=e.sent,s(this).closest(".displayResponse").find(">.load-sous-commentaires").html(a.commentaires),s(this).find(">.fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-up"),s(this).find(">.libelle").attr("data-libelle-afficher",s(this).find(">.libelle").html()),s(this).find(">.libelle").html("masquer les réponses"),s(this).attr("data-cacher-commentaire","cacher"),s(this).removeClass("afficher-commentaire");case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()),s(this).on("click",'[data-cacher-commentaire="cacher"]',(function(e){e.preventDefault(),s(this).closest(".displayResponse").find(">.load-sous-commentaires").addClass("d-none"),s(this).attr("data-afficher-commentaire","afficher").removeAttr("data-cacher-commentaire"),s(this).find(">.fa-angle-up").removeClass("fa-angle-up").addClass("fa-angle-down"),s(this).find(">.libelle").html(s(this).find(">.libelle").attr("data-libelle-afficher"))})),s(this).on("click",'[data-afficher-commentaire="afficher"]',(function(e){e.preventDefault(),s(this).closest(".displayResponse").find(">.load-sous-commentaires").removeClass("d-none"),s(this).attr("data-cacher-commentaire","cacher").removeAttr("data-afficher-commentaire"),s(this).find(">.fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-up"),s(this).find(">.libelle").html("masquer les réponses")})),s(this).on("click",".annuler-reponse",(function(e){e.preventDefault(),s(this).closest(".commentaire-input").addClass("d-none")}))}))}},e=>{e.O(0,[9755,2719,8674,5666,7165,9237],(()=>{return t=9136,e(e.s=t);var t}));e.O()}]);