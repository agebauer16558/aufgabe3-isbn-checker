const { caluclateISBNChecksum, checkISBN } = require("./check-isbn");

const button = document.getElementById("button");
const input1 = document.getElementById("input1");
const result = document.getElementById("result");

function handleClick(isbn) {
  result.style.display = "block";
  if (checkISBN(caluclateISBNChecksum(isbn))) {
    result.innerHTML = "valid";
    result.style.color = "green";
  } else {
    result.innerHTML = "ISBN is invalid";
    result.style.color = "red";
  }
}

button.addEventListener("click", () => handleClick(input1.value));

input1.addEventListener("focus", () => (result.style.display = "none"));
