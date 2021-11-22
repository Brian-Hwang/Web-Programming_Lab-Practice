"use strict";

let atground = "";

window.onload = function() {
  let ball = document.getElementById("ball");
  atground = parseInt(ball.style.top);
  ball.style.top = "0px";
  bounce("ball", 0);
};

function bounce(ball_name, init_height) {
  let ball = document.getElementById(ball_name);
  let velocity = 0;
  let down = 1;
  let frame = setInterval(function() {
    fall(ball_name, velocity, down);
    if (parseInt(ball.style.top) == atground) {
      down = -1;
      velocity *= 3 / 4;
    }
    if (down == -1 && velocity <= 0) {
      clearInterval(frame);
      bounce(ball_name, parseInt(ball.style.top));
    }
    velocity += down;
  }, 20);
}

function fall(ball_name, velocity, down) {
  let ball = document.getElementById(ball_name);
  ball.style.top =
    parseInt(ball.style.top, 10) + parseInt(velocity * down) + "px";
  if (parseInt(ball.style.top) >= atground) {
    ball.style.top = atground + "px";
  }
}
