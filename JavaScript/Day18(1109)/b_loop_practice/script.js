let fruits = ["apple", "banana", "cherry"];

console.log("for문");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// ======================

console.log("while문");

let while_i = 0;
while (while_i < fruits.length) {
  console.log(fruits[while_i]);
  while_i++;
}

// ======================

console.log("do-while문");
let doWhile_i = 0;
do {
  console.log(fruits[doWhile_i]);
  doWhile_i++;
} while (doWhile_i < fruits.length);

// ======================

let userInput;
do {
  userInput = prompt("Enter a number greater than 10.");
} while (userInput <= 10);
