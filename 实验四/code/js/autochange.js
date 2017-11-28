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
