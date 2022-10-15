var projFrameList = new Array();


async function test()
{
  var a = await fetch('https://raw.githubusercontent.com/williamsokol/williamsokol.github.io/websiteV2/Pages/ProjectFrames/RobotMove.html')
	//b = await a.json()
  var html = await a.text()

  var card = document.getElementById('card');
  
  var doc = document.implementation.createHTMLDocument("New Document");  
  doc.documentElement.innerHTML =  html

  
  var blobContent = new Blob([ doc.documentElement.innerHTML ], {type: "text/html"})
  card.src = URL.createObjectURL(blobContent);
  console.log(card.src)
  
}