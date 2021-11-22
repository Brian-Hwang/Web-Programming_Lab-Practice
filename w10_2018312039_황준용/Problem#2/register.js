window.onload = function() {
  const button = document.querySelector("button");
  button.addEventListener("click", event => {
    console.log("ASDF");
    validate();
  });
};
var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  let one = document.getElementById("1");
  let two = document.getElementById("2");
  let three = document.getElementById("3");
  let four = document.getElementById("4");
  let five = document.getElementById("5");
  let six = document.getElementById("6");
  let seven = document.getElementById("7");
  let eight = document.getElementById("8");
  let nine = document.getElementById("9");
  let ten = document.getElementById("10");
  let isval = true;
  one.style.backgroundColor = "white";
  two.style.backgroundColor = "white";
  three.style.backgroundColor = "white";
  four.style.backgroundColor = "white";
  five.style.backgroundColor = "white";
  six.style.backgroundColor = "white";
  seven.style.backgroundColor = "white";
  eight.style.backgroundColor = "white";
  nine.style.backgroundColor = "white";
  ten.style.backgroundColor = "white";

  if (one.value.trim() == "") {
    isval = false;
    one.style.backgroundColor = "red";
  }
  if (
    two.value.trim() == "" ||
    !two.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/)
  ) {
    isval = false;
    two.style.backgroundColor = "red";
  }

  if (
    three.value.trim() == "" ||
    !(Math.trunc(three.value) > 0) ||
    three.value.length < 5
  ) {
    console.log(three.value);
    isval = false;
    three.style.backgroundColor = "red";
  }
  if (four.value.trim() == "") {
    isval = false;
    four.style.backgroundColor = "red";
  }
  if (
    five.value.trim() == "" ||
    !(Math.trunc(five.value) > 0) ||
    five.value.length < 8
  ) {
    isval = false;
    five.style.backgroundColor = "red";
  }
  if (six.value.trim() == "") {
    isval = false;
    six.style.backgroundColor = "red";
  }
  if (
    seven.value.trim() == "" ||
    !seven.value.match(/^\d{4}\-\d{1,2}\-\d{1,2}$/) ||
    !(
      parseInt(seven.value.split("-")[0], 10) < 1000 ||
      parseInt(seven.value.split("-")[0], 10) > 3000 ||
      parseInt(seven.value.split("-")[1], 10) == 0 ||
      parseInt(seven.value.split("-")[1], 10) > 12 ||
      (parseInt(seven.value.split("-")[2], 10) > 0 &&
        parseInt(seven.value.split("-")[2], 10) <=
          months[parseInt(seven.value.split("-")[1], 10) - 1])
    )
  ) {
    if (
      parseInt(seven.value.split("-")[0], 10) % 400 == 0 ||
      (parseInt(seven.value.split("-")[0], 10) % 100 != 0 &&
        parseInt(seven.value.split("-")[0], 10) % 4 == 0 &&
        parseInt(seven.value.split("-")[1], 10) == 2 &&
        parseInt(seven.value.split("-")[2], 10) == 29)
    ) {
      isval = true;
    } else {
      isval = false;
      seven.style.backgroundColor = "red";
    }
  }
  if (eight.value.trim() == "" || eight.value.lenght < 6) {
    isval = false;
    eight.style.backgroundColor = "red";
  }
  if (
    nine.value.trim() == "" ||
    nine.value.length < 6 ||
    eight.value != nine.value
  ) {
    isval = false;
    nine.style.backgroundColor = "red";
  }
  if (ten.value.trim() == "") {
    isval = false;
    ten.style.backgroundColor = "red";
  }

  if (isval) {
    alert("Congratulations! You registered the Web Programming course");
  }
}

function isdate(dateString) {
  // First check for the pattern
  // var regex_date = /^\d{4}\-\d{1,2}\-\d{1,2}$/;

  if (!dateString.match(/^\d{4}\-\d{1,2}\-\d{1,2}$/)) {
    return false;
  }

  // Parse the date parts to integers
  var parts = seven.value.split("-");
  var day = parseInt(seven.value.split("-")[2], 10);
  var month = parseInt(seven.value.split("-")[1], 10);
  var year = parseInt(seven.value.split("-")[0], 10);

  // Check the ranges of month and year
  if (
    parseInt(seven.value.split("-")[0], 10) < 1000 ||
    parseInt(seven.value.split("-")[0], 10) > 3000 ||
    parseInt(seven.value.split("-")[1], 10) == 0 ||
    parseInt(seven.value.split("-")[1], 10) > 12
  ) {
    return false;
  }

  var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Adjust for leap years
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
    months[1] = 29;
  }

  // Check the range of the day
  return (
    parseInt(seven.value.split("-")[2], 10) > 0 &&
    parseInt(seven.value.split("-")[2], 10) <=
      months[parseInt(seven.value.split("-")[1], 10) - 1]
  );
}
