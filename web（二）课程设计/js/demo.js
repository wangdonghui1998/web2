$(document).ready(function(){
		var $count1=0;
		$("#username").focus(function(){
			if(this.value=="用户名/手机号/邮箱/身份证号")
				this.value="";
		})

		$("#pas1").focus(function(){
			if(this.value=="密码")
				this.value="";
		})

		$("#username").blur(function(){
			var $userName=$('input[name="username"]');
			if($userName.val()==""&&$count1==0)
			{
				$("#username").after('<span class="red" id="red">用户名不能为空</span>');
				$count1++;
			}
			else if($userName.val()!="")
			{
				$("#red").remove();
			}
		})

		var $count2=0;
		$("#pas1").blur(function(){
			var $Pas1=$('input[name="pas1"]').val();
			if($Pas1==""&&$count2==0)
			{
				$("#pas1").after('<span class="red" id="password1">密码不能为空</span>');
				$count2++;
			}
			else if($Pas1!="")
			{
				$("#password1").remove();
			}
		});

	

		//登录按钮
		$("#denglu").click(function(){
			var $userName=$("#username").val();
			var $pas=$("#pas1").val();
			if($userName!=""&&$pas!=""&&$userName!="用户名/手机号/邮箱/身份证号")
			{
				window.location.href="index.html";
			}
			 else
			 {
			 	alert("信息填入不完整，请返回填写");
			 }
		});

		$("#zhuce").click(function(){
			var $userName=$("#username").val();
			var $pas=$("#pas1").val();
			if($userName!=""&&$pas!=""&&$userName!="用户名/手机号/邮箱/身份证号")
			{
				window.location.href="index.html";
			}
			else
			{
				alert("信息填入不完整，请返回填写");
			}
		});
	});