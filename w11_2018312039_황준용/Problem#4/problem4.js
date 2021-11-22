luffy = "images/luffy.png";
var img = new Image();
img.src = luffy;

var count = 0;

window.onload = function() {
  var canvas = document.getElementById("centers");
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, count, 0, 150, 128, 0, 0, canvas.width, canvas.height);
};

function skill() {
  var canvas = document.getElementById("centers");
  var ctx = canvas.getContext("2d");
  document.getElementById("img1").src = "images/lufface2.png";
  document.getElementById("img2").src = "images/lufface.png";

  var timer = setInterval(function() {
    if (count > 2900) {
      count = 0;
      ctx.drawImage(img, count, 0, 150, 128, 0, 0, canvas.width, canvas.height);
      clearInterval(timer);
      document.getElementById("img1").src = "#";
      document.getElementById("img2").src = "#";
    }

    count += 150;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, count, 0, 150, 128, 0, 0, canvas.width, canvas.height);
  }, 100);
}
