var color=document.getElementsByClassName("square");
var test=document.getElementById("xyz");
var back=document.getElementById("xy");
var na=document.getElementById("na");
var naz=document.getElementById("naz");
var colors=[];
var coloras;
colorRandomize();

naz.addEventListener("click",function(){
	colorRandomize();
	na.textContent="CLICK ON ANY SQUARE!!";
	if(naz.textContent==="PLAY AGAIN!!")
		{naz.textContent="NEW COLORS";}
})

for(var i=0;i<6;i++)
	{color[i].addEventListener("click", function() {
	var click=this.style.background;
	if(coloras === click)
		{for(var j=0;j<6;j++)
			{color[j].style.background=coloras;}
		 back.style.background=coloras;
		 na.textContent="YOU GOT IT RIGHT";
		 naz.textContent="PLAY AGAIN!!"}
	else
		{this.style.background="white";
		 na.textContent="IT'S WRONG TRY AGAIN";}
	})}

function colorRandomize()
{colors=[];
for(var i=0;i<6;i++)
	{colors.push(colorpick());
	 color[i].style.background=colors[i];}
colorassign();}

function colorassign()
{coloras=colors[Math.floor(Math.random()*6)];
 test.textContent=coloras;}

function colorpick()
{var r=Math.floor(Math.random()*255);
var g=Math.floor(Math.random()*255);
var b=Math.floor(Math.random()*255);
return "rgb("+r+", "+g+", "+b+")";}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

