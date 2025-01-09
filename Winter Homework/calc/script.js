let displayValue = "";
let firstOp = 0;
let secondOp = 0;
let currentOp = 0;

function updateDisplay() {
  let display = document.getElementById("display");
  display.innerText = displayValue;
}

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function chooseOperation(operation) {
  if (currentOp !== 0) calculate();
  firstOp = parseFloat(displayValue);
  currentOp = operation;
  displayValue = "";
}

function calculate() {
  secondOp = parseFloat(displayValue);
  if (currentOp === "/" && secondOp === 0) {
    alert("no lol");
    clearDisplay();
    return;
  }

  let result;
  switch (currentOp) {
    case "+":
      result = firstOp + secondOp;
      break;
    case "-":
      result = firstOp - secondOp;
      break;
    case "*":
      result = firstOp * secondOp;
      break;
    case "/":
      result = firstOp / secondOp;
      break;
  }
  displayValue = result.toString();
  currentOp = 0;
  updateDisplay();
}

function clearDisplay() {
  displayValue = "";
  firstOp = 0;
  secondOp = 0;
  currentOp = 0;
  updateDisplay();
}
