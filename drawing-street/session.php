<?php
	session_start();
 $myname = $_SESSION['$se_username'];
	echo "欢迎您:".$myname;
?>