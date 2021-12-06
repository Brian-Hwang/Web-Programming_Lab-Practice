<%@ page  contentType="text/html;charset=utf-8" 
		import="java.sql.*" %>
<%
Class.forName("com.mysql.cj.jdbc.Driver"); 

String DB_URL = "jdbc:mysql://localhost:3306/employee?useSSL=false";

String DB_USER = "root";
String DB_PASSWORD= "1234";

Connection con= null;
Statement stmt = null;
ResultSet rs   = null;

try {
    
    con = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
    stmt = con.createStatement(); 
    String query = "SELECT * FROM employee.division ";  
    rs = stmt.executeQuery(query); 

%>
<a href="mainpage.html">Main</a><br/>
<table border="1" style="border-collapse:collapse"><!-- This is a table that displays the division code, division name, and whether it is used. -->
<tr style="background-color:#dddddd">
</tr>
<!-- TO DO -->

<%

	rs.close();   
    stmt.close();    
    con.close(); 

} catch (SQLException e) {
      out.println("err:"+e.toString());
      return;
} 
%>