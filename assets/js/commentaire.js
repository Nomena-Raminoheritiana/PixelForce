import axios from 'axios';
$(document).ready(function() {
    // charger les commentaires de niveau 1
    chargerCommentaireN1();

    // clique répondre pour afficher le textearea
    $(this).on('click', '.repondre-commentaire', function(e){
        e.preventDefault();
        $(this).closest('.commentaire-instance').next('.commentaire-input').removeClass('d-none')
    });

    // ajouter un commentaire
    $(this).on('click', '.add-comment', async function(e) {
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

    // modifier un commentaire
    let commentairesEdit = {};
    $(this).on('click','.update-commentaire', function(e) {
        e.preventDefault();
        const htmlSelector = $(this).attr('data-id-commentaire-html');
        const textes = $(htmlSelector).html();
        commentairesEdit.forEach(function (element) {
            console.log(element)
        })
        commentairesEdit[htmlSelector] = textes;
        const textArea = $('<textarea />', {
           id: 'commmentaire-textarea-edition',
            class: 'w-100',
            css: {
               height: '237px'
            }
        });
        textArea.html(textes);
        $(htmlSelector).html(textArea);
    })

    // afficher les réponse
    $(this).on('click','.afficher-commentaire', async function(e) {
        e.preventDefault();
        const response = await chargerSousCommentaire($(this).attr('data-parent-id'), $(this).attr('data-template'));
        $(this).closest('.displayResponse').find('>.load-sous-commentaires').html(response.commentaires)
    });

    // annuler réponse
    $(this).on('click', '.annuler-reponse', function(e) {
        e.preventDefault();
        $(this).closest('.commentaire-input').addClass('d-none');
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

async function chargerSousCommentaire(parentId, template)
{
    const params = new URLSearchParams();
    params.append('template', template);
    return (await axios.post(Routing.generate('commentaire_chargerSousCommentaire', {encodedCommentaire: parentId}), params)).data;
}