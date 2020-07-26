function postData (postlist,posttimes){
    this.postlist = postlist;
    this.posttimes = posttimes;
}

function postDataArray(postlist,posttimes){
    thing = new Array;

    // turns the 2 arrays into a single struct array
    for(i=0;i<postlist.length;i++){
        thing[i] = new postData(postlist[i],posttimes[i]);
    }
    
    // organzies the array by date lastmodefiyed (posttimes)
    sortByDateDesc = function (a, b) {
        a = a.posttimes;
        
        b = b.posttimes;
        c = a > b ? -1 : a < b ? 1 : 0;
        console.log(a,"|",b,a>b);
        return c; 
    };

    
    thing.sort(sortByDateDesc);
    
    return thing
    
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    var postlist = new Array();
    var posttimes = new Array();
    var data;

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            
            j = JSON.parse( this.response);
            //console.log(j);
            
            for (i=0;i<j.length;i++){
                
                postlist[i] = j[i].name;
                posttimes[i]  = fetchHeaders(postlist[i]);

                //console.log(xhttp.getResponseHeader('last-modified'));
            }
           
            
            console.log(postlist,posttimes);
            data = postDataArray(postlist,posttimes);
           
                             
        }
    };
    xhttp.open("GET", "https://api.github.com/repos/williamsokol/williamsokol.github.io/contents/logpost", false);
    xhttp.send();
    //console.log(data); 
    return(data);
}

function fetchHeaders(url) {
    
    var time;
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200) {
            
            commitData = JSON.parse(this.response);
            
            time = commitData[0].commit.committer.date;
            //console.log(commitData[0].commit.committer.date > commitData[1].commit.committer.date);
               
        }
    };
    
    
    xhttp.open("GET", "https://api.github.com/repos/williamsokol/williamsokol.github.io/commits?path=logpost/" + url, false);
    xhttp.send();
    
    return(time);
    
    
}

