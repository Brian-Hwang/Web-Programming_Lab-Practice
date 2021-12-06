<%@ page  contentType="text/html;charset=utf-8" 
		import="java.sql.*" %>
		
<%
request.setCharacterEncoding("utf-8");
Class.forName("com.mysql.cj.jdbc.Driver"); 
String DB_URL = "jdbc:mysql://localhost:3306/employee?useSSL=false";
String DB_USER = "root";
String DB_PASSWORD= "1234";

Connection con= null;
PreparedStatement pstmt = null;
ResultSet rs   = null;

//TO DO
