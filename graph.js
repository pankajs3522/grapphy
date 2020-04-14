
function findbig(x,y)
{
	//Function to convert separate vales of their respective axis
	
	
var bigx = new Array();
var bigy = new Array();

	for(i=0;i<x.length;i++)
	{
		bigx[i]=x[i];  //Separate X-Axis Coords
		bigy[i]=y[i];  //Separate Y-Axis Coords
	}
	alert(bigx.sort(function(a, b){return b-a}));
	alert(bigy.sort(function(a, b){return b-a}));
	drawGraphComplete(x,y,bigx,bigy);
}

function drawGraph(x,y)
{
	findbig(x,y);
}
	
	function drawGraphComplete(x,y,bigx,bigy)
	{
		//Function to plot points on Graph
		
	x1=0;
	y1=0;
	document.getElementById("svgdiv").innerHTML='<svg id="svgr" height="100" width="100"><line x1="0" y1="0" x2="0" y2="100" style="stroke:rgb(255,0,0);stroke-width:2" /><line x1="0" y1="0" x2="100" y2="0" style="stroke:rgb(255,0,0);stroke-width:2" />';

  for(i=0;i<x.length;i++)
  {
 
	document.getElementById("svgr").innerHTML=document.getElementById("svgr").innerHTML+
	  '<line stroke-linecap="round" onmouseover="op('+i+')" value="'+y[i]+'" onmouseout="op1()" class="tooltip" x1="'+x1+'" y1="'+y1+'" x2="'+x[i]+'" y2="'+y[i]+'" style="stroke-width:2;cursor:hand" />'
	 x1=x[i];
  y1=y[i];
	}
	document.getElementById("svgdiv").innerHTML=document.getElementById("svgdiv").innerHTML+"</svg>";
	
}


function op(a)
{
	//Function to Display tooltiptext

window.addEventListener('mousemove', function (e) {
            xr = e.pageX;
            yr = e.pageY;
			document.getElementById("ttx").style.top=yr+"px";
	document.getElementById("ttx").style.left=xr+"px";
	document.getElementById("ttx").innerHTML=a;

	});
      
	document.getElementById("ttx").style.visibility="visible";
	document.getElementById("ttx").style.opacity="1";

	 
}

function op1(e)
{
	document.getElementById("ttx").style.visibility="hidden";
	document.getElementById("ttx").style.opacity="0";

}


