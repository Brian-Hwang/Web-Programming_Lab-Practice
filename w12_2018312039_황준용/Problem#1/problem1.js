$(document).ready(function() {
  var canvas = document.getElementById("centers");
  var ctx = canvas.getContext("2d");

  $("#button1").click(function() {
    ctx.beginPath();
    ctx.moveTo(200, 50);
    ctx.lineTo(350, 350);
    ctx.lineTo(50, 350);
    ctx.lineTo(200, 50);
    ctx.fillStyle = "red";
    ctx.strokeStyle = "black";
    ctx.lineWidth = "3";
    ctx.fill();
    ctx.stroke();
  });
  $("#button2").click(function() {
    ctx.beginPath();
    ctx.moveTo(350, 50);
    ctx.lineTo(300, 370);
    ctx.lineTo(100, 150);
    ctx.lineTo(350, 50);
    ctx.fillStyle = "red";
    ctx.strokeStyle = "black";
    ctx.lineWidth = "3";
    ctx.fill();
    ctx.stroke();
  });
  $("#button3").click(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
});
