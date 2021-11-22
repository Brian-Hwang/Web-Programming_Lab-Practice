// class Circle {
//   constructor(rad) {
//     this.rad = rad;
//   }
// }
//
// var radius;
// var circle;
//
// circle = new Circle(radius);
// circle.setPosition(getWidth() / 2, getHeight() / 2);
// add(circle);

window.onload = function() {
  let circle = document.getElementById("circle");
  circle.ondragstart = function() {
    return false;
  };
  circle.style.width = "30px";
  circle.style.height = "30px";
  var radius = parseInt(circle.style.width);
  circle.style.width = circle.style.height = radius + "px";
  circle.style.borderRadius = radius / 2 + "px";
  document.onmouseup = bigger;

  circle.onmousedown = changePosition;
};

function bigger() {
  let circle = document.getElementById("circle");
  var radius = parseInt(circle.style.width);
  radius += 5;
  circle.style.width = circle.style.height = radius + "px";
  circle.style.borderRadius = radius / 2 + "px";
}

function changePosition(event) {
  let circle = document.getElementById("circle");
  document.addEventListener("mousemove", move);
  circle.onmouseup = stop;
}

function move(event) {
  circle.style.top = event.pageY - circle.offsetWidth / 2 + "px";
  circle.style.left = event.pageX - circle.offsetWidth / 2 + "px";
}

function stop() {
  document.removeEventListener("mousemove", move);
  circle.onmouseup = null;
}
