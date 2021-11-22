img_seal = "images/Awkward_seal.png";
img_no = "images/No_after5times.png";
img_yes = "images/Yes_answer.png";

var init_img = new Image();
init_img.src = img_seal;
var no_img = new Image();
no_img.src = img_no;
var yes_img = new Image();
yes_img.src = img_yes;
let count = Number(0);

window.onload = function() {
  var canvas = document.getElementById("centers");
  var ctx = canvas.getContext("2d");
  ctx.drawImage(init_img, 0, 0, canvas.width, canvas.height);
  document.getElementById("no").addEventListener("mouseenter", changeLocation);
};

function changeImage() {
  var canvas = document.getElementById("centers");
  var ctx = canvas.getContext("2d");
  let txt = document.getElementById("no_times");
  txt.innerHTML = "";
  count = 0;

  ctx.drawImage(yes_img, 0, 0, canvas.width, canvas.height);
}

function changeLocation() {
  let button = document.getElementById("no");
  let txt = document.getElementById("no_times");
  var canvas = document.getElementById("centers");
  var ctx = canvas.getContext("2d");
  var rand_x = Math.floor(Math.random() * 500);
  var rand_y = Math.floor(Math.random() * 300);
  button.style.top = rand_y + "px";
  button.style.left = rand_x + "px";
  if (count == 4) {
    count++;
    txt.innerHTML = 'You are trying to say "No" ' + count + " times";
    count = 0;
    ctx.drawImage(no_img, 0, 0, canvas.width, canvas.height);
    alert("You are really hurting me!!");
  } else {
    count++;
    txt.innerHTML = 'You are trying to say "No" ' + count + " times";
  }
}
