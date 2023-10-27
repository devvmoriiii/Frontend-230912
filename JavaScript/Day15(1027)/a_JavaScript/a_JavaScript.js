const btn = document.querySelector("button");

function updateName() {
  const text = prompt("Enter a new text.");
  btn.textContent = text;
}

btn.addEventListener("click", updateName)