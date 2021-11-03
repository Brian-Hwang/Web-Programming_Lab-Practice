function mult() {
  let one = document.getElementById("one").value;
  let two = document.getElementById("two").value;
  let result = document.getElementById("ans");
  console.log(one * two);
  if (isNaN(one * two)) {
    result.innerHTML = "Invalid Input";
  } else {
    result.innerHTML = "The Result is: " + one * two;
  }
}

function div() {
  let one = document.getElementById("one").value;
  let two = document.getElementById("two").value;
  let result = document.getElementById("ans");
  if (isNaN(one / two)) {
    result.innerHTML = "Invalid Input";
  } else {
    result.innerHTML = "The Result is: " + one / two;
  }
}
