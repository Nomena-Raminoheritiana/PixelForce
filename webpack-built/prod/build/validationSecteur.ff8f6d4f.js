(self.webpackChunk=self.webpackChunk||[]).push([[5542],{1171:(t,e,n)=>{"use strict";n(4916),n(3123),n(2222),n(2564),n(2479),n(9554),n(1539),n(4747),n(5169);var a=n(9755);a((function(){var t=window.location.pathname.split("/")[1];function e(e){var n=e.attr("data-agentSecteur-id");console.log(n);var r="/".concat(t,"/agent/secteur/").concat(n,"/invalidate");e.attr("disabled",!0),a.ajax({url:r,type:"POST",beforeSend:function(){e.html('<div class="spinner-border text-secondary" role="status"><span class="visually-hidden">Loading...</span></div>')},success:function(t){if("successfully"===t.invalidation){e.html("OK"),setTimeout((function(){e.html("Valider")}),1e3);var n=e.parent().prev().children();n.removeClass("btn-success"),n.addClass("btn-warning"),n.html("Bloqué")}},error:function(){e.html("Erreur")}})}a(".js-validate-secteur-agent").on("click",(function(){var e=a(this),n=e.attr("data-agentSecteur-id"),r="/".concat(t,"/agent/secteur/").concat(n,"/validate");e.attr("disabled",!0),a.ajax({url:r,type:"POST",beforeSend:function(){e.html('<div class="spinner-border text-secondary" role="status"><span class="visually-hidden">Loading...</span></div>')},success:function(t){"successfully"===t.validation&&window.location.reload()},error:function(){e.html("Erreur")}})})),a(".js-invalidate-secteur-agent").on("click",(function(){e(a(this))})),a("#js-btn-add-multiple-secteur").on("click",(function(){var n=a("#agent-id").text(),r=[];a.each(a("#multiple_secteur_secteur input[type='checkbox']:checked"),(function(){r.push(a(this).val())}));var s="/".concat(t,"/agent/secteur/multiple/add"),i={userId:n,selectedSecteurId:r};a.ajax({url:s,data:i,type:"POST",beforeSend:function(){a("#js-btn-add-multiple-secteur").html('<div class="spinner-border text-light" role="status"><span class="visually-hidden">Loading...</span></div>')},success:function(t){a("#modal-add-agent-secteur .btn-close").click(),a("#js-btn-add-multiple-secteur").html('<i class="fa-solid fa-floppy-disk"></i> Ajouter');var n=t.secteurAdded;Object.values(n).forEach((function(t){a(".body-sector-list").append("\n                        <tr>\n                            <td></td>\n                            <td>".concat(t.nom,"</td>\n                            <td>").concat(t.dateValidation,'</td>\n                            <td><button class="btn  btn-success btn-sm"> Validé</button></td>\n                            <td>\n                                <button class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#modal-edit-agent-secteur"><i class="fa fa-edit"></i></button>\n                                <button data-agentSecteur-id="').concat(t.agentSecteurId,'" type="button" class="btn btn-sm  btn-outline-primary js-invalidate-secteur-agent waves-effect">Bloquer</button></td>\n                        </tr>'))})),a(".js-invalidate-secteur-agent").on("click",(function(){e(a(this))}));var r=t.errorMessages;r.length>0&&r.forEach((function(t){a(".alert-errorMessages").removeClass("d-none"),a(".alert-errorMessages").addClass("d-block"),a(".alert-errorMessages").append(t)}))},error:function(){a("#js-btn-add-multiple-secteur").html("Erreur !")}})})),a(this).on("click",".edit-secteur",(function(t){t.preventDefault();var e=a(this).attr("data-secteur-id"),n=a(this).attr("data-agentSecteur-id");a('[name="secteur"]').val(e),a('[name="agentSecteur"]').val(n)}))}))},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:(t,e,n)=>{var a=n(317)("span").classList,r=a&&a.constructor&&a.constructor.prototype;t.exports=r===Object.prototype?void 0:r},4699:(t,e,n)=>{var a=n(9781),r=n(1702),s=n(1956),i=n(5656),c=r(n(5296).f),o=r([].push),l=function(t){return function(e){for(var n,r=i(e),l=s(r),u=l.length,d=0,f=[];u>d;)n=l[d++],a&&!c(r,n)||o(f,t?[n,r[n]]:r[n]);return f}};t.exports={entries:l(!0),values:l(!1)}},8053:(t,e,n)=>{var a=n(7854).TypeError;t.exports=function(t,e){if(t<e)throw a("Not enough arguments");return t}},2222:(t,e,n)=>{"use strict";var a=n(2109),r=n(7854),s=n(7293),i=n(3157),c=n(111),o=n(7908),l=n(6244),u=n(6135),d=n(5417),f=n(1194),v=n(5112),p=n(7392),h=v("isConcatSpreadable"),g=9007199254740991,b="Maximum allowed index exceeded",m=r.TypeError,S=p>=51||!s((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),L=f("concat"),y=function(t){if(!c(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)};a({target:"Array",proto:!0,forced:!S||!L},{concat:function(t){var e,n,a,r,s,i=o(this),c=d(i,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(y(s=-1===e?i:arguments[e])){if(f+(r=l(s))>g)throw m(b);for(n=0;n<r;n++,f++)n in s&&u(c,f,s[n])}else{if(f>=g)throw m(b);u(c,f++,s)}return c.length=f,c}})},2479:(t,e,n)=>{var a=n(2109),r=n(4699).values;a({target:"Object",stat:!0},{values:function(t){return r(t)}})},2564:(t,e,n)=>{var a=n(2109),r=n(7854),s=n(2104),i=n(614),c=n(8113),o=n(206),l=n(8053),u=/MSIE .\./.test(c),d=r.Function,f=function(t){return function(e,n){var a=l(arguments.length,1)>2,r=i(e)?e:d(e),c=a?o(arguments,2):void 0;return t(a?function(){s(r,this,c)}:r,n)}};a({global:!0,bind:!0,forced:u},{setTimeout:f(r.setTimeout),setInterval:f(r.setInterval)})}},t=>{t.O(0,[9755,2719,2273,2206],(()=>{return e=1171,t(t.s=e);var e}));t.O()}]);