<%@ page contentType="text/html;charset=utf-8" import="java.sql.*, myBean.DB.*, javax.naming.*" %>
<!DOCTYPE html>
<html>
<head>
<title>Division Registration</title>
</head>
<body>

<script>
function chk(){//This is a function that warns you to enter information if it is not entered.
	var chkcode = document.getElementById("code");
	var chkrname = document.getElementById("dname");
	
	if(chkcode.value=="")
	{alert("Please enter division code.");
	chkcode.focus(); return false;}
	else if(chkrname.value=="")
	{alert("Please enter division name.");
	chkrname.focus(); return false;}
	return true;
	
}
</script>
<!-- TO DO. Make a Form which send some information to division_add_do.jsp -->

</body>
</html>