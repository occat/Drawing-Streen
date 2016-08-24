<?php
	session_start();
 $myname = $_SESSION['$se_username'];
	echo "您的用户名为:".$myname;
?>