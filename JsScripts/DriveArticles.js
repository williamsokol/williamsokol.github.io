//things to do on start of adding script here:

// include google api
// var script = document.createElement('script');
// script.type = 'text/javascript';
// script.src = 'https://apis.google.com/js/api.js';
// document.head.appendChild(script);
// console.log("test");

gapi.load('client', initClient)

var GoogleAuth;

function initClient() {
    GoogleAuth = gapi.client.init({
      //'apiKey': 'AIzaSyDZJMC3J8GLuXBslOWaewHV3We5cIprCDM',
      'clientId': '419474436140-1d04mic934dqd0vjakr75be1kukotngh.apps.googleusercontent.com',
      'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest', 'https://script.googleapis.com/$discovery/rest?version=v1']
    }).then(function () {                         //I have no idea what this bit on the end is doing, the code works without it.
        
        const event  = new CustomEvent('googleLoggedin');
        document.dispatchEvent(event);
    
    });
    
    console.log("initiation complete");
}

// gapi.load("client:auth2", function() {
// gapi.auth2.init({client_id: "419474436140-1d04mic934dqd0vjakr75be1kukotngh.apps.googleusercontent.com"});
// });

function execute() {
    return gapi.client.drive.files.list({
        'q' : "'1STx7_sT-bQI9v_ZH3ui6ksc6Lc0VbkQE' in parents",
        "fields" : "files/webViewLink , files/name, files/id"
    })
        .then(function(response) {
        // Handle the results here (response.result has the parsed body).
        createList(response)
        console.log("Response", response);
        },
        function(err) { console.error("Execute error", err); });
}
function fetchHTMLPage(id){
    //console.log(id);
    gapi.client.script.scripts.run({
        'scriptId': "AKfycbycGRSXL5kupueeofpCHQy6JwWU2HWuprFeSkG9NcZkTksqkZPpcHd0tg2Ik0fbDBXIcg",
        'resource': {
        'function': 'getGoogleDocumentAsHTML',
        'parameters':[
          id
        ]
        }
      }).then(function(response){
          console.log(response.result);
          turnHTMLToUrl(response.result.response.result);
      });
}

function turnHTMLToUrl(html) {
    let doc = document.implementation.createHTMLDocument("New Document");
    
    doc.documentElement.innerHTML =  html

    console.log(doc.documentURI);
    changeCss(doc);

    url = URL.createObjectURL(new Blob([doc.documentElement.innerHTML], {type: "text/html"}));
    // const link = document.createElement('a');
    // link.href = url;
    // link.innerText = 'Open the array URL';
    //document.body.appendChild(link); 
    const event  = new CustomEvent('loadedArticle');
    document.dispatchEvent(event);   
    
    
    //window.location.href = url;
    console.log("loaded article");
}

function changeCss(doc) {
    // do it by adding a css file to script
    //get css file
    var link = doc.createElement( "link" );
    link.href = "https://williamsokol.github.io/css/Articles.css";
    link.rel = "stylesheet";
    link.type = "text/css";
    // add css to doc
    doc.getElementsByTagName( "head" )[0].appendChild( link );

}


