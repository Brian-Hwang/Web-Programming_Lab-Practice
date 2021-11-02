function changeImage() {
  let image = document.getElementById("chelsea");
  if (image.src.indexOf("img/mount.jpg") != -1) {
    image.src = "img/logo.png";
  } else {
    image.src = "img/mount.jpg";
  }
}
