import {getGroupeCanal, getSingleCanal} from "./chatSenderRequest";
import {loaderOff, loaderOn} from "../helpers/Loader";
import {MenuComponent} from './components/MenuComponent'

$(document).ready( async function() {
      const chatSingleCanal = $('.chat-single-canal');
      const chatGroupCanal = $('.chat-groupe-canal');
      const menuComponent = new MenuComponent();
      // charger les canals
      loaderOn(chatSingleCanal[0], true);
      getSingleCanal().then(function(singleCanals) {
            chatSingleCanal.html(menuComponent.getSingleCanal(singleCanals))
            loaderOff(chatSingleCanal[0]);
      });

      // charger les groupes canals
      loaderOn(chatGroupCanal[0], true);
      getGroupeCanal().then(function(groupeCanals) {
            chatGroupCanal.html(menuComponent.getGroupsCanal(groupeCanals))
            loaderOff(chatGroupCanal[0]);
      })

      $(this).on('input','.chat-menu-search', function(e) {
            e.preventDefault();
            const search_value = $(this).val();
            const listCanal = $('.chat-choose-canal')
            if(search_value.length>0) {
                  listCanal.each(function(){
                        $(this).addClass('d-none')
                  })
                  listCanal.filter(function(e) {
                        let data_search = $(this).attr('data-search');
                        const match = data_search.toLowerCase().match(search_value.toLowerCase());
                        if(match === null) {
                              return false;
                        }
                        return match.length > 0;

                  }).removeClass('d-none')
            } else {
                  listCanal.each(function(){
                        $(this).removeClass('d-none')
                  })
            }

      })

});


