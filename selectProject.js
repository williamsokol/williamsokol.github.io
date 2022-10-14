var projFrameList = new Array();


async function test()
{
  a = await fetch('https://raw.githubusercontent.com/williamsokol/williamsokol.github.io/websiteV2/Pages/ProjectFrames/RobotMove.html')
	//b = await a.json()
  b = await a.text()
  console.log(b)
  
}