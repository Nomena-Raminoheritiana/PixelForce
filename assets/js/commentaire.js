import axios from 'axios';
$(document).ready(function() {
    // charger les commentaires de niveau 1
    chargerCommentaireN1();

    // charger les sous commentaires
    $(this).on('click', '.sub-comment', function(e){
        e.preventDefault();
    });

    // ajouter un commentaire
    $(this).on('click', '#add-comment', async function(e) {
        e.preventDefault();
        const commentaire_value = $($(this).attr('data-selector')).val();
        const params = new URLSearchParams();
        params.append('classWithNamespace', $(this).attr('data-owner-class'));
        params.append('ownerId', $(this).attr('data-owner-id'));
        params.append('textes', commentaire_value);
        params.append('parent_id', $(this).attr('data-parent-id'));
        params.append('template', $(this).attr('data-template-instance'));
        const response = (await axios.post(Routing.generate('commentaire_add'), params)).data;
        $('.load-comment').append(response.template);
        $($(this).attr('data-selector')).val('');
    })

});

function chargerCommentaireN1()
{
      $('.load-comment').each(async function() {
          const params = new URLSearchParams();
          params.append('template', $(this).attr('data-template'));
          params.append('ownerId', $(this).attr('data-owner-id'));
          params.append('classWithNamespace', $(this).attr('data-owner-class'));
          const response = (await axios.post(Routing.generate('commentaire_charger'), params)).data;
          $(this).html(response.commentaires);
      })
}