psy = "images/psy.png";
var img = new Image();
img.src = psy;
let colorOptions = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F"
];
var count = 0;

window.onload = function() {
  var canvas = document.getElementById("centers");
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, count, 0, 225, 400, 0, 0, canvas.width, canvas.height);
  dance();
};

function dance() {
  var canvas = document.getElementById("centers");
  var ctx = canvas.getContext("2d");

  let psy = document.getElementById("psy");

  var timer = setInterval(function() {
    if (count >= 4725) {
      count = 0;
      clearInterval(timer);
      dance();
    }
    let colorString = "";
    for (let i = 0; i < 6; i++) {
      let val = Math.floor(Math.random() * 16);
      colorString += colorOptions[val];
    }

    psy.style.backgroundColor = "#" + colorString;
    count += 225;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, count, 0, 225, 400, 0, 0, canvas.width, canvas.height);
  }, 100);
}
