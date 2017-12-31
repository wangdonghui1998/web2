$(document).ready(function(){
	$("#daohang>ul>li").bind('mouseover',function() // 顶级菜单项的鼠标移入操作 
	{ 
		$(this).children('ul').slideDown('fast'); 
 
	}).bind('mouseleave',function() // 顶级菜单项的鼠标移出操作 
	{ 
		$(this).children('ul').slideUp('fast'); 
	}); 
 
	$('#daohang>ul>li>ul li').bind('mouseover',function() // 子菜单的鼠标移入操作 
	{ 
		$(this).children('ul').slideDown('fast'); 
 
	}).bind('mouseleave',function() // 子菜单的鼠标移出操作 
	{ 
 
		$(this).children('ul').slideUp('fast'); 
	}); 
})

window.onload=function(){
	var time=10;
	picScroll=document.getElementById("picScroll");
	picScroll1=document.getElementById("picScroll1");
	var id=setInterval(changeToLeft,time);
	//鼠标经过时暂停图片滚动
	picScroll.onmouseover=function(){
		clearInterval(id);
	}
	//鼠标离开后图片继续滚动
	picScroll.onmouseout=function(){
		id=setInterval(changeToLeft,time);
	}
}
//图片向左滚动自定义函数实现
function changeToLeft(){
	if(picScroll.scrollLeft>=(picScroll1.offsetWidth)){
		picScroll.scrollLeft=0;
	}
	else{
		picScroll.scrollLeft+=1;
	}
}
