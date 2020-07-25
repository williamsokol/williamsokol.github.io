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
        //console.log(a,"|",b,a>b);
        return c; 
    };

    
    thing.sort(sortByDateDesc);
    
    return thing
    
}

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    var postlist = new Array();
    var posttimes = new Array();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        
            // gets the entire html file of the folder logpost in this case and labels it thing
            thing = this.responseText
            searchFor = /.html</g
            a=0;
            b=0;
            var str = "";
            

            // greps file for .html and then backs up leter by letter till you hot the file name and all
            while ((dothtmls = searchFor.exec(thing)) != null ){

                str = "";
                //console.log(dothtmls.index);
                
                a = dothtmls.index;

                while (thing[a]  != '>' ){
                    a--;
                }
                a++;
                while(thing[a] != '<'){
                    str = str + thing[a];
                    a++;
                }
                

                
                posttimes[b]  = fetchHeaders(str);
                //console.log(fetchHeader(str));
                postlist[b++]  = str;
               
                
                
            } 
            data = postDataArray(postlist,posttimes);
            
                             
        }
    };
    xhttp.open("GET", "logpost/", false);
    xhttp.send();
    //console.log(data); 
    return(data);
}

function fetchHeaders(url) {
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            
            time = xhttp.getResponseHeader("last-modified");
            //console.log(xhttp.getResponseHeader("last-modified"));
               
        }
    };
    
    xhttp.open("HEAD", "logpost/" + url, false);
    xhttp.send();
    
    return(time);
    
    
}

