var data;

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

function trimDates(dates){

    for(i=0;i<dates.length;i++){
        str = "";
        a = 0;

        while(dates[i].posttimes[a] != 'T'){
            str = str + dates[i].posttimes[a];
            
            a++;
        }
        data[i].posttimes = str;
    }
    console.log(data);
    return str;
}

function loadDoc(input) {
    var xhttp = new XMLHttpRequest();
    var postlist = new Array();
    var posttimes = new Array();

    

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
      
            j = JSON.parse( this.response);
            //console.log(j);
            
            for (i=0;i<j.length;i++){
                
                postlist[i] = j[i].name;
                posttimes[i]  = fetchDate(input,postlist[i]);

                //console.log(xhttp.getResponseHeader('last-modified'));
            }
           
            console.log(postlist,posttimes);
            
            data = postDataArray(postlist,posttimes);               //order the posts based on date
            
            //console.log(data.posttimes + " tihng");
            data.posttimes = trimDates(data);             //just to make dates look good when displayed on website
           
        }
    };
    xhttp.open("GET", "https://api.github.com/repos/williamsokol/williamsokol.github.io/contents/" + input, false);
    xhttp.send();
    //console.log(data); 
    return(data);
}

function fetchDate(input ,url) {

    var time;
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200) {
            
            commitData = JSON.parse(this.response);
            
            time = commitData[0].commit.committer.date;
            //console.log(commitData[0].commit.committer.date > commitData[1].commit.committer.date);
               
        }
    };
    
    xhttp.open("GET", "https://api.github.com/repos/williamsokol/williamsokol.github.io/commits?path="+ input +"/" + url, false);
    xhttp.send();
    
    return(time);
}




