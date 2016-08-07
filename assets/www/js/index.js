var strng=new Array();
var pc=1;
var lvl=1;
var bin=0;
var bis=0;
var win=0;
var c;


function get_strng()
{
	for(i=0;i<=(lvl+2);i++)
	{
		strng[i]=Math.floor(Math.random()*9)+1;
	}
}
	
function mains()
{
	$("#startbtn0").hide();
	get_strng();
	show_strng();
}
	
	
function select_strng(n)
{
	var bn="#b"+n;
	$(bn).buttonMarkup({theme: 'a'});
    setTimeout(function(){$(bn).buttonMarkup({theme: 'b'});},500);
	if(n!=strng[bis])
	{
		$("#wrong").popup("open");
		bis=0;
		setTimeout(function(){$("#wrong").popup("close");setTimeout(function(){mains();},1000);},1000);
	}
	else if(bis==(lvl+2))
	{
		if(win<9)
		{
		$("#right").popup("open");
		bis=0;
		win++;
		$("#winstat").text(win);
		setTimeout(function(){$("#right").popup("close");setTimeout(function(){mains();},1000);},1000);
        }
		else
		{
		lvl++;
		win=0;
		$("#winstat").text(win);	
		$("#pup").popup("open");
		$("#startbtn0").show();
		}
	}
    else
	{
		bis++;
	}
}
	
	
function show_strng()
{
	if(bin<=(lvl+2))
	{
	var bn="#b"+strng[bin];
    $(bn).buttonMarkup({theme: 'a'});
    setTimeout(function(){$(bn).buttonMarkup({theme: 'b'});},500);
    bin++;
	setTimeout(function(){show_strng();},1000);
	}
	else
	{
		bin=0;
	}
}	
	
	
	
function stop_mains()
{
 pc=1;
 bin=0;
 bis=0;
 win=0;
 	$("#winstat").text(win);
	$("#startbtn0").show();
}
	
	
	
