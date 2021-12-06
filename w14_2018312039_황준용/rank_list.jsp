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
%>
// TO DO
