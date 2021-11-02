//things to do on start of adding script here:

// include google api
// var script = document.createElement('script');
// script.type = 'text/javascript';
// script.src = 'https://apis.google.com/js/api.js';
// document.head.appendChild(script);
// console.log("test");

gapi.load('client', initClient);

var GoogleAuth;

function initClient() {
    GoogleAuth = gapi.client.init({
      //'apiKey': 'AIzaSyDZJMC3J8GLuXBslOWaewHV3We5cIprCDM',
      'clientId': '419474436140-1d04mic934dqd0vjakr75be1kukotngh.apps.googleusercontent.com',
      'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
    }).then(function () {                         //I have no idea what this bit on the end is doing, the code works without it.
        
        gapi.auth2.getAuthInstance()
        .then(instance => {
            GoogleAuth = instance
        }, err => {
            console.log(err)
        })
        console.log(GoogleAuth);
        //GoogleAuth.isSignedIn.listen(signinChanged);
        //console.log(GoogleAuth);
        execute();
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
// function getThing(response)
// {

//     var newPost = document.getElementById("pages");   
//     for (var i=0; i<response.result.files.length; i++){
//         var id = response.result.files[i].id;
//         var link =  "https://docs.google.com/document/d/"+id+"/pub";
//         console.log("https://docs.google.com/document/d/"+id+"/pub", id);

//         newPost.innerHTML += '<a href="'+link+'"> <br/>stuff </a>';
//     }
// }


