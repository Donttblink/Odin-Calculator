let num1;
let num2;
let operator;

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
  if (operator === "+") {
    answer = add(num1, num2);
    return answer;
  } else if (operator === "-") {
    answer = subtract(num1, num2);
    return answer;
  } else if (operator === "*") {
    answer = multiply(num1, num2);
    return answer;
  } else if (operator === "/") {
    answer = divide(num1, num2);
    return answer;
  } else if (operator === "^") {
    answer = power(num1, num2);
    return answer;
  }
};

const numbers = document.querySelectorAll('.number');

const display = document.querySelector('.display');

let currentInput = "";

numbers.forEach((button) => {
  button.addEventListener('click', () =>
  {
    currentInput = button.textContent;
    display.textContent += currentInput;

  })
});

const clear = document.querySelector(".clear");

clear.addEventListener('click', () => {
  currentInput = "0";
  display.textContent = currentInput;
});
