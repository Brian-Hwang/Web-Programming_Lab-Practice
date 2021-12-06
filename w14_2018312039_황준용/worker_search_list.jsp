<%@ page  contentType="text/html;charset=utf-8" 
		import="java.sql.*" %>
<head>
<title>Search for Employee Information</title>
</head>
<!-- TO DO. If you want to add css for pagination, add it here -->


<a href="mainpage.html">Main</a>&nbsp;&nbsp;&nbsp;
<a href="worker_show_retired.jsp">List of Retirees</a><br/><br/>

<form action="worker_search_list.jsp" method="post">
	Employee Number<input type="radio" name="choice" checked="checked" value="workernum">
	Name<input type="radio" name="choice" value="name">
	<input type="search" name="search" >
	<input type="submit" value="Search" >
</form>
<%
request.setCharacterEncoding("utf-8");
Class.forName("com.mysql.cj.jdbc.Driver"); 
String DB_URL = "jdbc:mysql://localhost:3306/employee?useSSL=false";
String DB_USER = "root";
String DB_PASSWORD= "1234";

Connection con= null;
PreparedStatement pstmt = null;
ResultSet rs   = null;

String choice=request.getParameter("choice");
String search=request.getParameter("search");

// TO DO Receive the search value from the user, extract the result from the db, and display it as a table.


