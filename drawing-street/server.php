<?php
session_start();
$userArr = array(
	"admin"=>"admin888",
	"huoqing"=>"123456",
    "admin2"=>"admin2",
);
$username = $_POST["username"];
$pwd = $_POST["pwd"];
if(array_key_exists($username,$userArr)&&$userArr[$username]==$pwd){
//确认用户名密码成功
	echo "登陆成功,页面正在跳转";
	echo '<meta http-equiv="Refresh" content="2;url=./index.html">';
	$_SESSION['$se_username'] = $username;
}else{
//确认用户名密码失败
echo "登陆失败";
}
?>