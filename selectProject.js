var projFrameList = new Array();
var index = 0;

//https://api.github.com/repos/williamsokol/williamsokol.github.io/contents/Pages/ProjectFrames?ref=websiteV2
GetCards();
async function GetCards() {
  var a = await fetch('https://api.github.com/repos/williamsokol/williamsokol.github.io/contents/Pages/ProjectFrames?ref=websiteV2')
  var b = await a.json()
  projFrameList = b.map(v=>v.download_url);
  console.log(projFrameList)
}
async function test() { 
  //console.(project)
  index = (index + 1)%(projFrameList.length);
  var a = await fetch(projFrameList[index])
  //b = await a.json()
  var html = await a.text()
  console.log(html.length)
  var card = document.getElementById('card');
  if(html.length > 100){
    var doc = document.implementation.createHTMLDocument("New Document");
    doc.documentElement.innerHTML = html
    
    var blobContent = new Blob([doc.documentElement.innerHTML], { type: "text/html" })
    card.src = URL.createObjectURL(blobContent);
  }else{
    card.src = html;
  }
  console.log(index)
  
}