let firstNumber = prompt("Enter a number");
let secondNumber = prompt("Enter another number");

while (firstNumber === null || secondNumber === null) {
  alert("You must enter a number");
  firstNumber = prompt("Enter a number");
  secondNumber = prompt("Enter another number");
}

const p = document.createElement("p");
const span = document.createElement("span");
span.className = "highlight-text";

if (isNaN(firstNumber) || isNaN(secondNumber) || !Number.isInteger(Number(firstNumber)) || !Number.isInteger(Number(secondNumber))) {
  span.textContent = "Error!";

  p.appendChild(span);
  p.innerHTML += ` You must enter integers. You entered "${firstNumber}" and "${secondNumber}". Try again.`;
} else {
  span.textContent = Number(firstNumber) + Number(secondNumber);

  p.innerHTML += `${firstNumber} + ${secondNumber} = ${span.outerHTML}`;
}

document.getElementById("content").appendChild(p);
