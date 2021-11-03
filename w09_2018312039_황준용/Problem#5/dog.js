function validate() {
  let one = document.getElementById("1");
  let two = document.getElementById("2");
  let three = document.getElementById("3");
  let four = document.getElementById("4");
  let five = document.getElementById("5");
  let six = document.getElementById("6");
  let seven = document.getElementById("7");
  if (one.value.trim() == "") {
    one.style.backgroundColor = "red";
  }
  if (two.value.trim() == "") {
    two.style.backgroundColor = "red";
  } else {
    two.style.backgroundColor = "";
  }
  if (three.value.trim() == "") {
    three.style.backgroundColor = "red";
  } else {
    two.style.backgroundColor = "";
  }
  if (four.value.trim() == "") {
    four.style.backgroundColor = "red";
  } else {
    two.style.backgroundColor = "";
  }
  if (five.value.trim() == "") {
    five.style.backgroundColor = "red";
  } else {
    two.style.backgroundColor = "";
  }
  if (six.value.trim() == "") {
    six.style.backgroundColor = "red";
  } else {
    two.style.backgroundColor = "";
  }
  if (seven.value.trim() == "") {
    seven.style.backgroundColor = "red";
  } else {
    two.style.backgroundColor = "";
  }
}
