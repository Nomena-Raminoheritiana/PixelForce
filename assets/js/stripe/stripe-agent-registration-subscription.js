$(function() {
    // Déclaration des variables/constantes
    var agent_accountStatus = $('input#agent_accountStatus').val();
    var stripePriceId = $('input#stripe_stripePriceId').val();
    var stripePriceName = $('input#stripe_stripePriceName').val();
    var planSubscriptionId = $('input#planSubscriptionId').val();
    var sessionAgentId = $('input#sessionAgentId').val(); // Contenant l'id de l'agent (USER)
    var nameHolder = $('input#stripe_nameHolder').val();
    var emailHolder = $('input#stripe_emailHolder').val();
    var postalCodeHolder = $('input#stripe_PostalCodeHolder').val();
    var stripeToken = $('input#stripe_stripeToken').val();
    var clientSecret = $('input#stripe_clientSecret').val();
    const urlStripeSubscription = $('input#stripe_url_stripeSubscription').val();
    const urlSuccessTransaction = $('input#stripe_urlSuccessTransaction').val();
    const stripe_urlErrorTransaction = $('input#stripe_urlErrorTransaction').val();
    const stripe_defaultButton = $('input#stripe_defaultButton').val();
    
    var clientSecret = $('input#stripe_clientSecret').val();
    
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
    card.update({value: {postalCode: postalCodeHolder}});

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
    var form = $('#subscription-payment-form');
    form.on('submit', function(event){
        event.preventDefault();
        cardButton.find('span.loader-submit').html('<div class="spinner-border text-white" role="status"><span class="visually-hidden">Loading...</span></div>');
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
                cardButton.find('span.loader-submit').html('')
                cardButton.find('span.label-button').html(stripe_defaultButton);
                cardButton.attr('disabled', false);
            }else if('paymentIntent' in result){
                cardButton.attr('disabled', true);

                createPaymentMethod(card);
            }
        })  
    }) 

    
    function createPaymentMethod(cardElement) {
        return stripe
            .createPaymentMethod({
                type: 'card',
                card: cardElement,
            })
            .then((result) => {
                if (result.error) {
                    displayError(error);
                } else {
                    createSubscription({
                        paymentMethodId: result.paymentMethod.id
                    });
                }
            });
    }


    function createSubscription({paymentMethodId}) {
        var data = {
            "agent_accountStatus": agent_accountStatus,
            "sessionAgentId": sessionAgentId,
            "stripePriceId": stripePriceId,
            "paymentMethodId": paymentMethodId,
            "stripePriceName": stripePriceName,
            "planSubscriptionId": planSubscriptionId
        };

        return (
            $.ajax({
                type: 'POST',
                async: false,
                url: urlStripeSubscription,
                data: JSON.stringify({data}),
                dataType  : 'json',
                headers: { 
                    'Content-type': 'application/json'
                },
                success :  function(responseAjax){
                    if (responseAjax.stripe_subscription_plan === 'successfully') {
                        document.location.href = urlSuccessTransaction+'/?stripe_subscription_plan=successfully';
                    } else if(responseAjax.stripe_subscription_plan  === 'error' && responseAjax.cause === 'different_agentId') {
                        document.location.href = stripe_urlErrorTransaction+'/?stripe_subscription_plan=error_different_agent_id';
                    }
                },
                error: function(error){
                    console.log('error', error)
                    
                    cardButton.find('span.loader-submit').html('');
                    cardButton.find('span.label-button').html(stripe_defaultButton);
                    cardButton.attr('disabled', false);
                    displayError.addClass('alert alert-danger');
                    displayError.text('Une erreur s\'est survenue, veuillez réessayer !');
                }
            })
        );
    }
})