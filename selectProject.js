var projFrameList = new Array();


async function test() {
  var a = await fetch('https://raw.githubusercontent.com/williamsokol/williamsokol.github.io/websiteV2/Pages/ProjectFrames/test.html')
  //b = await a.json()
  var html = await a.text()
  console.log(html.length)
  var card = document.getElementById('card');
  if(html.length > 500){
    var doc = document.implementation.createHTMLDocument("New Document");
    doc.documentElement.innerHTML = html
    
    var blobContent = new Blob([doc.documentElement.innerHTML], { type: "text/html" })
    card.src = URL.createObjectURL(blobContent);
  }else{
    card.src = html;
  }
  console.log(card.src)

}