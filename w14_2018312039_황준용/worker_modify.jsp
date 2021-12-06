<%@ page contentType="text/html;charset=utf-8" import="java.sql.*,myBean.DB.*, javax.naming.*" %>
<!DOCTYPE html>
<html>
<head>
<title>Employee Modify</title>
</head>
<body>
<%
	Worker w=new Worker();
		try {
				WorkerDB db = new WorkerDB();
				w=db.returnFind(request.getParameter("workernum"));
			}catch(NamingException e) {
				out.print(e);
				return;
			}catch(SQLException e) {
				out.print(e);
				return;
			}
	
	
%>
<form action="worker_modify_do.jsp" method="post" enctype="multipart/form-data">
	<!-- The employee number cannot be changed. --> 
	Worker Num : <input type="text" name="workernum" value=<%=w.getWorkernum()%> readOnly/>&nbsp;&nbsp;
	<!-- TO DO. Use the getter and setter functions of the Worker class. -->
	
</form>
</body>
</html>