$(function() {
    // Déclaration des variables/constantes
    
    var sessionAgentId = $('input#sessionAgentId').val();
    var stripeToken = $('input#stripe_stripeToken').val();
    var clientSecret = $('input#stripe_clientSecret').val();
    const urlStripeCheckout = $('input#stripe_url_stripeCheckout').val();
    const urlSuccessTransaction = $('input#stripe_urlSuccessTransaction').val();
    const stripe_urlErrorTransaction = $('input#stripe_urlErrorTransaction').val();
    

    var nameHolder = '';
    var emailHolder = '';
    
    var stripe = Stripe(stripeToken);
    var elements = stripe.elements();
    var displayError = $('#card-errors');

    var styleCustom ={
        base: {
            fontSize: '16px',
            fontWeight: '500',
            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
            color: '#2532d'
        },
        invalid: {
            iconColor: '#FFC7EE',
            color: '#FFC7EE',
        }
    }

    // Monter notre form à l'objet Stripe 
    var card = elements.create('card', {style: styleCustom});

    card.mount("#card-elements");

    // Message Error 
    card.on('change', function(event) {

        if (event.error) {
            displayError.addClass('alert alert-danger');
            displayError.text(event.error.message);

        } else {
            displayError.removeClass('alert alert-danger');
            displayError.text('')
        }
    })

    var cardButton = $('#card-button-submit');
    var form = $('#single-payment-form');
    form.on('submit', function(event){
        event.preventDefault();
        cardButton.html('<div class="spinner-border text-white" role="status"><span class="visually-hidden">Loading...</span></div>');
        cardButton.attr('disabled', true);


        stripe.handleCardPayment(
            clientSecret,
            card,
            {
                payment_method_data: {
                    billing_details: {
                        name : nameHolder,
                        email : emailHolder
                    }
                }
            }
        ).then((result) => {
            if (result.error) {
                displayError.addClass('alert alert-danger');
                displayError.text(result.error.message);
                cardButton.html('<i class="fa-solid fa-cart-shopping me-1"></i> <span>Essayer (en 14 jours) !</span>');
                cardButton.attr('disabled', false);
            }else if('paymentIntent' in result){
                cardButton.attr('disabled', true);

                var data = {
                    "paymentIntent": result.paymentIntent,
                    "sessionAgentId": sessionAgentId
                };

                $.ajax({
                    type: "POST",
                    url: urlStripeCheckout, 
                    data: data,
                    success: function(responseAjax){
                        
                        if (responseAjax.stripe_checkout === 'successfully') {
                            document.location.href = urlSuccessTransaction+'/?stripe_checkout=successfully';
                        } else if(responseAjax.stripe_checkout  === 'error' && responseAjax.cause === 'different_agentId') {
                            document.location.href = stripe_urlErrorTransaction+'/?stripe_checkout=error_different_agent_id';
                        }
                    }
                })
            }
        })  
    }) 

    $('#inscription_agent_prenom').on('change', function(){
        nameHolder = $('#inscription_agent_prenom').val(); 
    })


    $('#inscription_agent_email').on('change', function(){
        emailHolder = $('#inscription_agent_email').val(); 
    })

})