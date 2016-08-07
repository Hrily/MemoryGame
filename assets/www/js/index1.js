var strng1=new Array();
var sin=0;
var skl=0;
var ssk=0;



function get_strng1()
{
	strng1[sin]=Math.floor(Math.random()*9+1);
	sin++;
}
	
	
function main1()
{
	$("#startbtn").hide();
	get_strng1();
	show_strng1();
}
	
	
function show_strng1()
{
	if(skl<=sin-1)
	{
	var bn="#b1"+strng1[skl];
    $(bn).buttonMarkup({theme: 'a'});
    setTimeout(function(){$(bn).buttonMarkup({theme: 'b'});},500);
    skl++;
	setTimeout(function(){show_strng1();},1000);
	}
	else
	{
		skl=0;
	}
}	
	

function sel_strng1(n)
{
	var bn="#b1"+n;
	$(bn).buttonMarkup({theme: 'a'});
    setTimeout(function(){$(bn).buttonMarkup({theme: 'b'});},500);
	if(n!=strng1[ssk])
	{
		$("#wrong1").popup("open");
		ssk=0;
		sin=0;
		skl=0;
	    $("#startbtn").show();
		$("#serieslvl").text("1");
	}
	else if(ssk==sin-1)
	{
		$("#right1").popup("open");
		ssk=0;
		$("#serieslvl").text(sin+1);
		setTimeout(function(){$("#right1").popup("close");setTimeout(function(){main1();},1000);},1000);
	}
	else
	{ssk++;}
}	


function stop_strng1()
{
	if(sin!=0)
	{
	ssk=0;
	sin=0;
	skl=0;
    $("#startbtn").show();
	$("#serieslvl").text("1");
	}
	else
	{window.location="#index";}
}
	

	
