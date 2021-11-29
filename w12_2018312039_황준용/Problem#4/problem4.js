var Allowed = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
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
  "-",
  "_",
  "."
];
$(document).ready(function() {
  $("#button").click(function() {
    let output = $("#input").val();
    if (output == "") {
      $("#output").html("aaa");
    } else {
      output = step1(output);
      output = step2(output);
      output = step3(output);
      output = step4(output);
      output = step5(output);
      output = step6(output);
      output = step7(output);

      $("#output").html("Your recommended ID is: " + output);
    }
  });
});
function step1(input) {
  return input.toString().toLowerCase();
}
function step2(input) {
  var len = input.toString().length;
  for (var i = 0; i < len; i++) {
    if (jQuery.inArray(input.charAt(i), Allowed) == -1) {
      console.log(i, input.charAt(i));
      input = input.replace(input.charAt(i), "");
      len--;
      i--;
    }
  }
  return input;
}
function step3(input) {
  var len = input.toString().length;
  var check = false;
  for (var i = 0; i < len; i++) {
    console.log(i, input.charAt(i));

    if (!(input.charAt(i) == ".")) {
      check = false;
    } else {
      if (!check) {
        check = true;
      } else {
        input = input.substr(0, i) + input.substr(i + 1);
        console.log(i, input);
        len--;
        i--;
      }
    }
    console.log(i, input);
  }
  return input;
}
function step4(input) {
  if (input.charAt(0) == ".") {
    input = input.substr(1);
  }
  if (input.charAt(input.length - 1) == ".") {
    input = input.substr(0, input.length - 1);
  }
  return input;
}
function step5(input) {
  if (input.toString() == "") {
    return "aaa";
  }
  return input;
}
function step6(input) {
  input = input.substr(0, 15);
  input = step4(input);
  return input;
}
function step7(input) {
  if (input.length == 1) {
    input += input.charAt(0);
    input += input.charAt(0);
  } else if (input.length == 2) {
    input += input.charAt(1);
  }
  return input;
}
