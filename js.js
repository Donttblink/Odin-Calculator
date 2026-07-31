const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const clear = document.querySelector(".clear");
const selectOperator = document.querySelectorAll(".operator");
const del = document.querySelector(".delete");
const enter = document.querySelector("#enter");

let currentInput = "";
let num1;
let num2;
let operator;
let shouldReset = true;
let hasOperator = false;

const add = function (a, b) {
  return a + b;
};
const subtract = function (a, b) {
  return a - b;
};
const multiply = function (a, b) {
  return a * b;
};
const divide = function (a, b) {
  return a / b;
};
const power = function (a, b) {
  return a ** b;
};

const operate = function (num1, operator, num2) {
  let answer;
  if (operator === "+") return add(num1, num2);
  if (operator === "-") return subtract(num1, num2);
  if (operator === "*") return multiply(num1, num2);
  if (operator === "/") {
    if (num2 === 0) return "Nice Try Einstein";
    return divide(num1, num2);
  }
  if (operator === "^") return power(num1, num2);
};

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    if (shouldReset) {
      display.textContent = button.textContent;
      shouldReset = false;
    } else {
      display.textContent += button.textContent;
    }
  });
});

clear.addEventListener("click", () => {
  display.textContent = "0";
  num1 = undefined;
  num2 = undefined;
  operator = undefined;
  shouldReset = true;
});

selectOperator.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator !== undefined && !shouldReset) {
      num2 = Number(display.textContent);
      const result = operate(num1, operator, num2);
      display.textContent = result;
      num1 = result;
    } else {
      num1 = Number(display.textContent);
    }
    operator = button.textContent;
    shouldReset = true;
  });
});

enter.addEventListener("click", () => {
  num2 = Number(display.textContent);
  const result = operate(num1, operator, num2);
  display.textContent = result;
  num1 = result;
  shouldReset = true;
});
