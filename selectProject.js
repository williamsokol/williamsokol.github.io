var projFrameList = new Array();
var index = 0;

//https://api.github.com/repos/williamsokol/williamsokol.github.io/contents/Pages/ProjectFrames?ref=websiteV2
// test()
// async function test(){
//   var pages = await fetch('./Pages')
//   var b = await pages.text()
//   console.log(b)
// }


Start()
async function Start(){
  await GetCards();
  // change initial card
  changeCard(0);
}
async function GetCards() {
  var pages = await fetch('https://api.github.com/repos/williamsokol/williamsokol.github.io/contents/Pages/ProjectFrames?ref=websiteV2',{
    headers: {
      Accept: "application/vnd.github+json",
      // Authorization: "Bearer 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"
    }
  })
  var b = await pages.json()
  
  //projFrameList = b.map(v=>v.url);
  for(var i=0; i<b.length; i++){
    var temp = b[i].url
    var card = []
    card =  await fetch(temp)
    card = await card.json();
    projFrameList.push(card)
    
    //console.log(card)
  }
  
  console.log(projFrameList)
  //console.log(projFrameList[1].find(v=> v.name == "Description.html"))
}
async function changeCard(dir) { 
  //console.(project)
  index = (index + dir)%(projFrameList.length);
  index = index < 0? projFrameList.length-1 : index;
  
  var tempa = projFrameList[index].find(v=> v.name == "Card.html")
  var tempb = await fetch(tempa.download_url);
  var html = await tempb.text();

  tempa = projFrameList[index].find(v=> v.name == "Description.html");
  tempb = await fetch(tempa.download_url);
  var descript = await tempb.text()

  
  //console.log(descript);
  var card = document.getElementById('card');
  var cardDescription = document.getElementById('cardDescription');
  if(html.length > 100)
  {  
    card.src = HtmlToBlob(html);
  }else
  {  
    card.src = html + "?" + Date();
  }
  cardDescription.firstElementChild.src = HtmlToBlob(descript)
  console.log(index)
  
}

function HtmlToBlob(html)
{
  var doc = document.implementation.createHTMLDocument("New Document");
  doc.documentElement.innerHTML = html
  
  var blobContent = new Blob([doc.documentElement.innerHTML], { type: "text/html" })
  return URL.createObjectURL(blobContent);
}