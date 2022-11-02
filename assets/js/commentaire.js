import axios from 'axios';
import Modal from "bootstrap/js/src/modal";
$(document).ready(function() {
    // charger les commentaires de niveau 1
    chargerCommentaireN1();
    // ajouter un commentaire
    $(this).on('click', '.add-comment', async function(e) {
        e.preventDefault();
        const commentaire_value = $($(this).attr('data-selector')).val();
        const parentId = $(this).attr('data-parent-id');
        const params = new URLSearchParams();
        params.append('classWithNamespace', $(this).attr('data-owner-class'));
        params.append('ownerId', $(this).attr('data-owner-id'));
        params.append('textes', commentaire_value);
        params.append('parent_id', parentId);
        params.append('template', $(this).attr('data-template-instance'));
        const response = (await axios.post(Routing.generate('commentaire_add'), params)).data;
        if(parentId === undefined) {
            $('.load-comment').append(response.template);
        } else {
            const container_sous_commentaire =  $('#commentaire-'+parentId).find('.load-sous-commentaires').first();
            const chargement_commentaire = container_sous_commentaire.find('>.chargement-commentaire');
            if(chargement_commentaire.length>0) {
                container_sous_commentaire.removeClass('d-none');
                chargement_commentaire.remove();
            }
            container_sous_commentaire.append(response.template);
        }

        $($(this).attr('data-selector')).val('');
    })

    // modifier un commentaire
    const commentaire_modif_modal = new Modal($('#modification-commentaire')[0]);
    $(this).on('click','.update-commentaire', function(e) {
        e.preventDefault();
        const htmlSelector = $(this).attr('data-id-commentaire-html');
        const textes = $(htmlSelector).html();
        const commentaire_id = $(this).attr('data-id');
        $('#confirmer-maj').attr('data-commentaire-id', commentaire_id).attr('data-id-commentaire-html', htmlSelector);
        commentaire_modif_modal.show();
        $('#updated-commentaire-contents').html(textes);
    });

    // confirmer le mise à jour
    $(this).on('click','#confirmer-maj', async function(e) {
        e.preventDefault();
        const JqueryObjOldTextes = $(this).attr('data-id-commentaire-html');
        const response = await edit($(this).attr('data-commentaire-id'),$('#updated-commentaire-contents').val());
        const newTextes = response.commentaire.textes;
        $(JqueryObjOldTextes).html(newTextes);
        commentaire_modif_modal.hide();
    });

    // supprimer commentaire
    const modalSuppression = new Modal($('#suppression-commentaire')[0]);
    $(this).on('click','.supprimer-commentaire', function(e) {
        e.preventDefault();
        const id_commentaire = $(this).attr('data-id');
        const token = $(this).attr('data-token');
        modalSuppression.show();
        const btn_confirmation = $('#confirmer-suppression');
        btn_confirmation.attr('data-id', id_commentaire);
        btn_confirmation.attr('data-token', token);
    });
    // confirmer la suppression
    $(this).on('click', '#confirmer-suppression', async function(e) {
        e.preventDefault();
        const id_commentaire = $(this).attr('data-id');
        const token = $(this).attr('data-token');
        const response = await supprimerCommentaire(id_commentaire, token);
        if(response.message === 'ok') {
            $('#commentaire-'+id_commentaire).remove();
            modalSuppression.hide();
        } else {
            window.alert('le commentaire n\'a pas pu être supprimer')
        }
    });

    // clique répondre pour afficher le textearea
    $(this).on('click', '.repondre-commentaire', function(e){
        e.preventDefault();
        $(this).closest('.commentaire-instance').next('.commentaire-input').removeClass('d-none')
    });

    // afficher les réponse
    $(this).on('click','.afficher-commentaire', async function(e) {
        e.preventDefault();
        $(this).closest('.displayResponse').find('>.load-sous-commentaires').removeClass('d-none');
        const response = await chargerSousCommentaire($(this).attr('data-parent-id'), $(this).attr('data-template'));
        $(this).closest('.displayResponse').find('>.load-sous-commentaires').html(response.commentaires);
        $(this).find('>.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');
        $(this).find('>.libelle').attr('data-libelle-afficher',$(this).find('>.libelle').html());
        $(this).find('>.libelle').html('masquer les réponses');
        $(this).attr('data-cacher-commentaire', 'cacher');
        $(this).removeClass('afficher-commentaire');

    });

    // cacher les commentaires
    $(this).on('click','[data-cacher-commentaire="cacher"]', function(e) {
        e.preventDefault();
        $(this).closest('.displayResponse').find('>.load-sous-commentaires').addClass('d-none');
        $(this).attr('data-afficher-commentaire','afficher').removeAttr('data-cacher-commentaire');
        $(this).find('>.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
        $(this).find('>.libelle').html($(this).find('>.libelle').attr('data-libelle-afficher'));
    });

    // afficher les commentaires
    $(this).on('click','[data-afficher-commentaire="afficher"]', function(e) {
        e.preventDefault();
        $(this).closest('.displayResponse').find('>.load-sous-commentaires').removeClass('d-none');
        $(this).attr('data-cacher-commentaire','cacher').removeAttr('data-afficher-commentaire');
        $(this).find('>.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');
        $(this).find('>.libelle').html('masquer les réponses');
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

async function supprimerCommentaire(id, token)
{
    return (await axios.delete(Routing.generate('commentaire_supprimer', {id: id, token: token}))).data;
}

async function edit(id, textes)
{
    const params = new URLSearchParams();
    params.append('textes', textes);
    return (await axios.put(Routing.generate('commentaire_edit', {id: id}), params)).data;
}