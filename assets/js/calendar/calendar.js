
$(document).ready(function () {
    console.log("Calendar loaded.");
    
    

    function renderCalendly(calendarDOM, lienCalendly){
        try{
            Calendly.initInlineWidget({
                url: lienCalendly,
                parentElement: calendarDOM,
                prefill: {},
                utm: {}
               });
        }
        catch(err){
            throw new Error('Vous devez être connecté à Internet pour pouvoir consulter votre agenda.');
        }
    }

    function init(){
        try{
            let calendarDOM = document.getElementById('calendar');
            console.log(calendarDOM);
            if(calendarDOM) {
                let lienCalendly = calendarDOM.dataset.lienCalendly;
                renderCalendly(calendarDOM, lienCalendly);
            }
            
        } 
        catch(err){
         alert(err.message);
        }
    }

    init();
 });