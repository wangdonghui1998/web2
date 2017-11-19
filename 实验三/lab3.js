var com=["很差","较差","一般","好","非常好"];
var stars=document.getElementsByTagName('img');
var con=false;

function starPic(id)
{	
	if(con==true)
	{
		return 0;
	}
	else
	{
	if(id<=2)
	{
		for(var i=0;i<id;i++)
		{
			stars[i].src="images/star1.png";
		}
	}
	else if(id>2)
	{
		for(var j=0;j<id;j++)
		{
			stars[j].src="images/star2.png";
		}
	}
	}
	document.getElementById('word').value=com[id-1];
	
}

function hide(id)
{
		
	
	if (con==true)
	{
		return 0;
	}
	else if(con==false)
	{
		for(var n=0;n<id;n++)
		{
			stars[n].src="images/star0.png";
				
		}
		document.getElementById('word').value="";
	}		

}

function qd(id)
{
	if(id<=2)
	{
		for(var i=0;i<id;i++)
		{
			stars[i].src='images/star1.png';
		}
	}
	else if(id>2)
	{
		for(var j=0;j<id;j++)
		{
			stars[j].src="images/star2.png";
		}
	}
	document.getElementById('word').value=com[id-1];
	con=true;
}


