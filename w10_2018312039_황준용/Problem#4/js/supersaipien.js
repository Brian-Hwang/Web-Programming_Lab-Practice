let counta = 3;
let countb = 102;
function add() {
  let monster = document.getElementById("monsters").checked;
  let evil = document.getElementById("monsters").checked;
  let people = document.getElementById("people");
  var newchild = document.createElement("div");
  if (monster) {
    newchild.className = "person monster";
    counta++;
    newchild.id = counta;
  } else {
    newchild.className = "person evil";
    countb++;
    newchild.id = countb;
  }
  people.appendChild(newchild);
  console.log(newchild.id);
}

function kill() {
  let monster = document.getElementById("monsters").checked;
  let evil = document.getElementById("monsters").checked;
  let people = document.getElementById("people");

  if (monster) {
    let much = Math.floor(Math.random() * counta) + 1;
    for (let i = 1; i < much; i++) {
      let child = document.getElementById(i.toString());
      child.classList.remove("monster");
      child.classList.add("splat");
      // child.remove;
    }
  } else {
  }
}

function clean() {}

function stomp() {}

function supers() {
  let saipien = document.getElementById("supersaipien");
  if (saipien.src.indexOf("images/supersaipien1.png") != -1) {
    saipien.src = "images/supersaipien2.png";
  } else {
    saipien.src = "images/supersaipien1.png";
  }
}

function patrol() {
  let timecontrol = 0;
  let saipien = document.getElementById("supersaipien");
  let people = document.getElementById("people");
  people.style.marginTop = "280px";
  saipien.style.position = "absolute";
  saipien.style.left = "750px";
  saipien.style.top = "150px";
  // saipien.style.marginleft = "0";
  // saipien.style.marginright = "0";
  saipien.style.width = "150px";
  // saipien.style.marginLeft = "auto";
  let way = 1;

  // saipien.style.left = "0px";
  let frame = setInterval(function() {
    // console.log(saipien.style.left, parseInt(saipien.style.left) + way + "px");
    saipien.style.left = parseInt(saipien.style.left) + way + "px";

    if (timecontrol % 200 == 0) {
      way *= -1;
    }
    timecontrol++;
    console.log(way);
  }, 20);
}
