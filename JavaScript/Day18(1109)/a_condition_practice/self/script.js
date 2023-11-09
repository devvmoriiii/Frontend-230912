let age = parseInt(prompt("Please enter your age."));

if (age < 0 || 200 < age) {
  console.log("Invalid age.");
}

// --------------

let score = parseInt(prompt("Please enter your score."));

if (score < 0 || score > 100) {
  console.log("Invalid score.");
} else {
  if (90 <= score) console.log("A");
  else if (80 <= score) console.log("B");
  else if (70 <= score) console.log("C");
  else if (60 <= score) console.log("D");
  else console.log("F");
}

// --------------

let day = new Date().getDay();

switch (day) {
  case 0:
    console.log("It's Sunday. Take a rest!");
    break;
  case 1 :
  case 2 :
  case 3 :
  case 4 :
  case 5 :
    console.log("It's a weekday. Let's work hard!");
    break;
  case 6:
    console.log("It's Saturday. Enjoy your weekend!");
    break;
  default :
    console.log("Invalid day.")
}

// --------------

const html = document.querySelector("html");
const select = document.querySelector("select");

document.body.style.padding = "10px";

function update (BGColor, textColor) {
  html.style.backgroundColor = BGColor;
  html.style.color = textColor;
}

select.onchange = function() {
  select.value === "black" ? update("black", "white") : update("white", "black");
}