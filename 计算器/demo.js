var str="";
var resultNum="";
// 显示函数

function showData(id){
	str=str+document.getElementById(id).value;

	document.getElementById("result").innerHTML=str;
}

// 清除键 
function clearData(){
	document.getElementById("result").innerHTML = 0;
	str=" ";
}
//计算
function caculate(){
    resultNum=eval(str);
	str="";
	document.getElementById("result").innerHTML=resultNum;
	str=resultNum;

}

	
	
		 


