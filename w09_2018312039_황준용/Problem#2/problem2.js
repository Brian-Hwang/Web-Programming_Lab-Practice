function Color() {
  let colorOptions = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
  ];
  let mycolor = document.getElementById("mycolor");
  mycolor.innerHTML = "asdf";
  let colorString = "";
  for (let i = 0; i < 6; i++) {
    let val = Math.floor(Math.random() * 16);
    console.log(val);
    colorString += colorOptions[val];
  }
  mycolor.innerHTML = colorString;
  // colorString = "#" + colorString;
  document.body.style.backgroundColor = "#" + colorString;
}
