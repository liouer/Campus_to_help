
window.onload=function(){//获取该页面账号是否为空，后端传值
	//var person=‘<%=uName%>’ 
	//if(console.log("person"=="")){//账号为空则显示登录注册，else显示登出
	if(1==1){//测试例子
		document.getElementById('logout').style.display='none';
		document.getElementById('login').style.display='block';
		document.getElementById('registered').style.display='block';
	}
	else{
		document.getElementById('logout').style.display='block';
		document.getElementById('login').style.display='none';
		document.getElementById('registered').style.display='none';
	}
}