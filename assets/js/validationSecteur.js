import { Modal } from 'bootstrap';

$(function() {
    var urlPathName = window.location.pathname.split('/');
    var envSpace = urlPathName[1];

    // Function : Invalider un secteur
    function invalidateSecteur (that){
        let agentSecteurId = that.attr("data-agentSecteur-id");
        console.log(agentSecteurId)
        const urlValidateSecteur = `/${envSpace}/agent/secteur/${agentSecteurId}/invalidate`; // AdminAgentController or CoachAgentController

        that.attr('disabled', true)
        $.ajax({
            url: urlValidateSecteur,
            type: "POST",
            beforeSend : function(){
                that.html('<div class="spinner-border text-secondary" role="status"><span class="visually-hidden">Loading...</span></div>')
            },
            success: function(responseAjax){
                if (responseAjax.invalidation === 'successfully' ) {
                    that.html('OK');
                    setTimeout(function () {
                        that.html('Valider');
                    }, 1000);

                    let btn_secteur_status = that.parent().prev().children();
                    btn_secteur_status.removeClass('btn-success');
                    btn_secteur_status.addClass('btn-warning');
                    btn_secteur_status.html('Bloqué');
                }
            },
            error : function(){
                that.html('Erreur');
            }
        })
    }



    // Valider un secteur
    $('.js-validate-secteur-agent').on('click', function(){	
        let that =  $(this); 
        let agentSecteurId = that.attr("data-agentSecteur-id");
        const urlValidateSecteur = `/${envSpace}/agent/secteur/${agentSecteurId}/validate`; // AdminAgentController or CoachAgentController

        that.attr('disabled', true)
        $.ajax({
            url: urlValidateSecteur,
            type: "POST",
            beforeSend : function(){
                that.html('<div class="spinner-border text-secondary" role="status"><span class="visually-hidden">Loading...</span></div>')
            },
            success: function(responseAjax){
                if (responseAjax.validation === 'successfully' ) {
                    window.location.href = 'your_url';
                }
            },
            error : function(){
                that.html('Erreur');
            }
        })
    })



    // Event : Invalider un secteur 
    $('.js-invalidate-secteur-agent').on('click', function(){
        invalidateSecteur($(this))
    })

        
    // Ajout un/multiple Secteurs
    $('#js-btn-add-multiple-secteur').on('click', function(){
        let userId = $('#agent-id').text();

        // On récupère les id de tous les secteurs cochés					
        var selectedSecteurId = [];
        $.each($("#multiple_secteur_secteur input[type='checkbox']:checked"), function(){
            selectedSecteurId.push($(this).val());
        });

        
        let urlAddMultipletSecteur = `/${envSpace}/agent/secteur/multiple/add`;

        let data = {
            'userId' : userId,
            'selectedSecteurId' : selectedSecteurId
        };

        $.ajax({	
            url: urlAddMultipletSecteur,
            data: data,
            type: "POST",
            beforeSend : function(){
                $('#js-btn-add-multiple-secteur').html('<div class="spinner-border text-light" role="status"><span class="visually-hidden">Loading...</span></div>')
            },
            success: function(responseAjax){
                $('#modal-add-agent-secteur .btn-close').click()                
                $('#js-btn-add-multiple-secteur').html('<i class="fa-solid fa-floppy-disk"></i> Ajouter')

                // On ajoute dans la liste les nouveaux secteurs ajoutés
                var secteurAdd = responseAjax.secteurAdded;
                var toArraySecteur = Object.values(secteurAdd)
                
                toArraySecteur.forEach((element) => {
                    $('.body-sector-list').append(`
                        <tr>
                            <td></td>
                            <td>${element.nom}</td>
                            <td>${element.coach}</td>
                            <td>${element.dateValidation}</td>
                            <td><button class="btn  btn-success btn-sm"> Validé</button></td>
                            <td>
                                <button class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#modal-edit-agent-secteur"><i class="fa fa-edit"></i></button>
                                <button data-agentSecteur-id="${ element.agentSecteurId }" type="button" class="btn btn-sm  btn-outline-primary js-invalidate-secteur-agent waves-effect">Bloquer</button></td>
                        </tr>`);
                });

                $('.js-invalidate-secteur-agent').on('click', function(){
                    invalidateSecteur($(this))
                })			
                // Si la reponse renvoie une erreur(s) comme duplication du secteur
                let errorMessagesResponse = responseAjax.errorMessages; 
                if (errorMessagesResponse.length > 0 ) {
                    errorMessagesResponse.forEach(element => {
                        $('.alert-errorMessages').removeClass('d-none');
                        $('.alert-errorMessages').addClass('d-block');
                        $('.alert-errorMessages').append(element);
                    });
                }
            },
            error : function(){
                $('#js-btn-add-multiple-secteur').html('Erreur !');
            }
        });
    })

    $(this).on('click', '.edit-secteur', function(e) {
        e.preventDefault();
        let secteurId = $(this).attr('data-secteur-id');
        $('[name="secteur"]').val(secteurId);
    })
})	
