<%@ page contentType="text/html;charset=utf-8" 
			import="myBean.DB.*, java.sql.*, javax.naming.NamingException"%>
<!DOCTYPE html >
<html>
<head>
<title>Division Modify</title>
</head>
<body>


<%
String sidx = request.getParameter("idx");
int idx=Integer.parseInt(sidx);
String code = "";
String dname = "";
String used = "";

Class.forName("com.mysql.cj.jdbc.Driver"); 

String DB_URL = "jdbc:mysql://localhost:3306/employee?useSSL=false";

String DB_USER = "root";
String DB_PASSWORD= "1234";

Connection con= null;
PreparedStatement pstmt = null;
ResultSet rs   = null;
try {
    con = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD); 
    // TO DO
    /*
	Get division information from division table using idx value in division_list.jsp. The loaded values are stored in the code, dname and used variables respectively.
	*/
    
} catch (SQLException e) {
      out.println("err:"+e.toString());
      return;
} 
%>
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
<!-- TO DO. Make a Form which send some information to division_modify_do.jsp-->

</body>
</html>