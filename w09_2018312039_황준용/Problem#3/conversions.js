function convert() {
  let type = document.getElementById("convert").value;
  let input = document.getElementById("input");
  let output = document.getElementById("answer");
  if (type == "kgtopounds") {
    output.innerHTML = String(input.value * 2.20462262);
  } else {
    output.innerHTML = String(input.value * 0.45359237);
  }
}
