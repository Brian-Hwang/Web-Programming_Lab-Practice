window.onload = function() {
  const button = document.querySelector("button");
  button.addEventListener("click", event => {
    if (document.getElementById("type").value == "shift") shift();
    else random();
  });
};

function alerts() {
  alert("Hello world!");
}

function shift() {
  input = document.getElementById("plain_text").value;
  output = document.getElementById("output");
  select = parseInt(document.getElementById("val").value);
  list = [];

  //Alphabet
  for (let i = 0; i < 26; i++) {
    list[i] = (i + select) % 26;
  }
  console.log(list);
  //Encrypt
  let output_text = "";
  for (let i = 0; i < input.length; i++) {
    let char = input.charCodeAt(i);
    if (input[i] == " ") {
      output_text += " ";
    } else if ((65 <= char && char <= 90) || (97 <= char && char <= 122)) {
      console.log(char);
      if (65 <= char && char <= 90)
        output_text += String.fromCharCode(list[char - 65] + 65);
      else output_text += String.fromCharCode(list[char - 97] + 97);
    } else {
      output_text = "Invalid Input: Insert Char Only";
      break;
    }
  }

  output.innerHTML = output_text;
}

function random() {
  input = document.getElementById("plain_text").value;
  output = document.getElementById("output");
  list = [];

  //UpperCase
  for (let i = 0; i < 26; i++) {
    list[i] = 65 + i;
  }

  //LowerCase
  for (let i = 0; i < 26; i++) {
    list[26 + i] = 97 + i;
  }

  //Shuffle
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }

  //Encrypt
  let output_text = "";
  for (let i = 0; i < input.length; i++) {
    let char = input.charCodeAt(i);
    if (input[i] == " ") {
      output_text += " ";
    } else if ((65 <= char && char <= 90) || (97 <= char && char <= 122)) {
      if (65 <= char && char <= 90) char -= 65;
      else char -= 97;
      output_text += String.fromCharCode(list[char]);
    } else {
      output_text = "Invalid Input: Insert Char Only";
      break;
    }
  }

  output.innerHTML = output_text;
}
