
/* exported gapiLoaded */
/* exported gisLoaded */
/* exported handleAuthClick */
/* exported handleSignoutClick */

// TODO(developer): Set to client ID and API key from the Developer Console
const CLIENT_ID = $('#google_client_id').text();
const API_KEY = $('#google_api_key').text();



// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/people/v1/rest';

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/contacts.readonly';

let tokenClient;
let gapiInited = false;
let gisInited = false;
let contacts = {};
let agentId = $('#agentId').text();

$('#signout_button').css('visibility', 'hidden');

gapiLoaded();
gisLoaded();

/**
* Callback after api.js is loaded.
*/
function gapiLoaded() {
    gapi.load('client', intializeGapiClient);
}

/**
* Callback after the API client is loaded. Loads the
* discovery doc to initialize the API.
*/
async function intializeGapiClient() {
    await gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
    });
    gapiInited = true;
    maybeEnableButtons();
}

/**
* Callback after Google Identity Services are loaded.
*/
function gisLoaded() {
        tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '', // defined later
    });
    gisInited = true;
    maybeEnableButtons();
}

/**
* Enables user interaction after all libraries are loaded.
*/
function maybeEnableButtons() {
    if (gapiInited && gisInited) {
        $('#authorize_button').removeClass('d-none');
    }
}

/**
*  Sign in the user upon button click.
*/
function handleAuthClick() {
    tokenClient.callback = async (resp) => {
    if (resp.error !== undefined) {
        throw (resp);
    }
        $('#signout_button').css('visibility', 'visible');
        $('#authorize_button').text('Rafraichir');
        $('form#contact_form').removeClass('d-none');
        

        await listConnectionNames();
    };

    if (gapi.client.getToken() === null) {
        // Prompt the user to select a Google Account and ask for consent to share their data
        // when establishing a new session.
        tokenClient.requestAccessToken({prompt: 'consent'});
    } else {
        // Skip display of account chooser and consent dialog for an existing session.
        tokenClient.requestAccessToken({prompt: ''});
    }
}

/**
*  Sign out the user upon button click.
*/
function handleSignoutClick() {
    const token = gapi.client.getToken();
    if (token !== null) {
        google.accounts.oauth2.revoke(token.access_token);
        gapi.client.setToken('');
        $('#content').text('');
        $('#authorize_button').text('Authorize');
        $('#signout_button').css('visibility', 'hidden');
    }
}

/**
* Print the display name if available for 10 connections.
*/
async function listConnectionNames() {
    let response;
    try {
        // Fetch first 10 files
        response = await gapi.client.people.people.connections.list({
            'resourceName': 'people/me',
            'pageSize': 50,
            'personFields': 'names,phoneNumbers,emailAddresses,addresses',
            'sortOrder': 'FIRST_NAME_ASCENDING'
        });
    } catch (err) {
        $('#content').text(err.message);
        return;
    }

    const connections = response.result.connections;
    if (!connections || connections.length == 0) {
        $('#content').text('No connections found.');
        
        return;
    }

    for (let index = 0; index < connections.length; index++) {
        connections[index].names[0]	
        $('#before_list_checkbox').append(`
            <input type="checkbox" id="contact_${index}" name="contact_${index}" value="${index}" class="checkClass">
            <label for="contact_${index}"> ${connections[index].names[0].displayName}</label><br>
        `);
    }
    $('form#contact_form #btn_submit_form').removeClass('d-none');
    $('form#contact_form #btn_submit_form').addClass('d-block');
    $('#btn_export_mobile_pdf').removeClass('d-none');
    $('#btn_export_mobile_pdf').addClass('d-block');
    $('#btn_export_mobile_excel').removeClass('d-none');
    $('#btn_export_mobile_excel').addClass('d-block');
    $('#check-all').removeClass('d-none');
    $('#check-all').addClass('d-block');
    
    contacts = connections;

}


/**
 * Permet d'exporter des tableau en fichier csv 
 */
function exportToCsv(rows) {
    var CsvString = "";

    rows.forEach(function(RowItem, RowIndex) {
        RowItem.forEach(function(ColItem, ColIndex) {
            CsvString += ColItem + ';';
        });
        CsvString += "\r\n";
    });

    CsvString = "data:application/csv;charset=utf-8,%EF%BB%BF" + encodeURI(CsvString);
    var x = document.createElement("A");
    x.setAttribute("href", CsvString );

    x.setAttribute("download",`contact.csv`);
    document.body.appendChild(x);
    x.click();
}


$('#authorize_button').on('click', function(){
    handleAuthClick()
})

// Exportation contact en fichier excel
$('#btn_export_mobile_excel').on('click', function(e){
    let that = $(this);
    that.attr('disabled', true);

    var indexConnexions = [];
    var contactsChecked = [];

    $('form#contact_form input[type="checkbox"]:checked').each(function () {
        indexConnexions.push($(this).val());
    });

    indexConnexions.forEach(element => {
        contactsChecked.push(contacts[element]);
    });

    let datas = {
        'contacts' : contactsChecked,
    }

    const urlExportMobile =  '/agent/mobile/contacts/exportExcel';
    $.ajax({
        url: urlExportMobile,
        type: "POST",
        data: datas,
        beforeSend : function(){
            $('#spinner_loader').html('<div class="spinner-border text-secondary" role="status"><span class="visually-hidden">Loading...</span></div>')
        },
        success: function(responseAjax){
            $('#spinner_loader').html('');
            that.attr('disabled', false)
            if(responseAjax.contacts === 'empty'){
                $('#spinner_loader').html('Veuillez cocher au moin, un contat');
            }
            if (responseAjax.contacts === 'successfully') { 
                exportToCsv(responseAjax.datas);
            }
        },
        error : function(){
            that.html('Erreur');
        }
    })

});

// Exportation contact en fichier PDF
$('#btn_export_mobile_pdf').on('click', function(e){
    // let that = $(this);
    // that.attr('disabled', true);

    var indexConnexions = [];
    var contactsChecked = [];

    $('form#contact_form input[type="checkbox"]:checked').each(function () {
        indexConnexions.push($(this).val());
    });

    indexConnexions.forEach(element => {
        contactsChecked.push(contacts[element]);
    });

    let datas = {
        'contacts' : contactsChecked,
    }

    const urlExportMobile =  '/agent/mobile/contacts/exportPdf';
    $.ajax({
        url: urlExportMobile,
        type: "POST",
        data: datas,
        beforeSend : function(){
            $('#spinner_loader').html('<div class="spinner-border text-secondary" role="status"><span class="visually-hidden">Loading...</span></div>')
        },
        success: function(responseAjax){
            $('#spinner_loader').html('');
            // that.attr('disabled', false)
        },
        error : function(){
            $('#spinner_loader').html('');
        }
    })

});

// Permet d'importer les contacts vers PixelForce
$('#contact_form').on('submit', function(e){
    e.preventDefault();
    $('#btn_submit_form').attr('disabled', true)

    var indexConnexions = [];
    var contactsChecked = [];


    $('form#contact_form input[type="checkbox"]:checked').each(function () {
        indexConnexions.push($(this).val());
    });

    indexConnexions.forEach(element => {
        contactsChecked.push(contacts[element]);
    });

    let datas = {
        'contacts' : contactsChecked,
        'agentId' : agentId
    }

    const urlPostContact = '/agent/contact/mobile/import';
    $.ajax({
        url: urlPostContact,
        type: "POST",
        data: datas,
        beforeSend : function(){
            $('#spinner_loader').html('<div class="spinner-border text-secondary" role="status"><span class="visually-hidden">Loading...</span></div>')
        },
        success: function(responseAjax){
            $('#spinner_loader').html('');
            if (responseAjax.contact === 'added' ) {
                window.location.href = '/agent/contact/liste?contactMobile=added';
            }
        },
        error : function(){
            $('#spinner_loader').html('Erreur');
        }
    })
})


// TOUT COCHER
$(":radio#cocher").click(function(){
    $(':checkbox.checkClass').prop('checked', true);
    $(":radio#decocher").prop('checked', false);
});
// TOUT DE-COCHER
$(":radio#decocher").click(function(){
    $(':checkbox.checkClass').prop('checked', false);
    $(":radio#cocher").prop('checked', false);
});
