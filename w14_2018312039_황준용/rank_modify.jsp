<%@ page contentType="text/html;charset=utf-8" 
			import="myBean.DB.*, java.sql.*, javax.naming.NamingException"%>
<!DOCTYPE html >
<html>
<head>
<title>Rank Modify</title>
</head>
<body>


<%
String sidx = request.getParameter("idx");
int idx=Integer.parseInt(sidx);
String code = "";
String rname = "";
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
    String sql = "SELECT * FROM `rank` WHERE idx =? "; 
    //TO DO
 
    rs.close();    
    pstmt.close();    
    con.close(); 	

} catch (SQLException e) {
      out.println("err:"+e.toString());
      return;
} 
%>
<!-- TO DO -->

</body>
</html>