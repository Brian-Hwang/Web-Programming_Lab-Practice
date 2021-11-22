window.onload = function() {
  var canvas = document.getElementById("centers");
  var ctx = canvas.getContext("2d");
  var image1 = document.getElementById("img1");
  var image2 = document.getElementById("img2");
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  image1.addEventListener("change", evt => make(evt, 1));
  image2.addEventListener("change", evt => make(evt, 2));
};

function content_1() {
  document.getElementById("meme1").innerText = document.getElementById(
    "text1"
  ).value;
}
function content_2() {
  document.getElementById("meme2").innerText = document.getElementById(
    "text2"
  ).value;
}

function make(e, num) {
  console.log(num);
  var canvas = document.getElementById("centers");
  var ctx = canvas.getContext("2d");
  let file = e.target.files[0];
  let reader = new FileReader();
  reader.onload = function(file) {
    let filed = file.target.result;
    let img = new Image();
    img.onload = function() {
      if (num == 1) {
        ctx.drawImage(img, 20, 20, 280, 300);
      } else {
        ctx.drawImage(img, 20, 380, 280, 300);
      }
    };
    img.src = filed;
  };
  reader.readAsDataURL(file);
}
