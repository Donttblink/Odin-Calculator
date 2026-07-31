const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const clear = document.querySelector(".clear");
const selectOperator = document.querySelectorAll(".operator");
const del = document.querySelector(".delete");
const enter = document.querySelector("#enter");

let num1;
let num2;
let operator;
let lastOperator;
let lastNum2;
let shouldReset = true;

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
  if (operator === "+") return add(num1, num2);
  if (operator === "-") return subtract(num1, num2);
  if (operator === "*") return multiply(num1, num2);
  if (operator === "/") {
    if (num2 === 0) return "Nice Try Einstein";
    return divide(num1, num2);
  }
  if (operator === "^") return power(num1, num2);
};

function showResult(value) {
  if (typeof value === "string") {
    display.textContent = value;
  } else {
    display.textContent = Math.round(value * 1000000) / 1000000;
  }
}

const clearCalculator = function () {
  num1 = undefined;
  num2 = undefined;
  operator = undefined;
  lastOperator = undefined;
  lastNum2 = undefined;
  shouldReset = true;
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
  clearCalculator();
  display.textContent = "0";
});

selectOperator.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator !== undefined && !shouldReset) {
      num2 = Number(display.textContent);
      const result = operate(num1, operator, num2);
      showResult(result);
      if (typeof result === "string") {
        clearCalculator();
        return;
      }
      num1 = result;
    } else if (!shouldReset) {
      num1 = Number(display.textContent);
    }
    operator = button.textContent;
    shouldReset = true;
  });
});

enter.addEventListener("click", () => {
  if (operator !== undefined) {
    num2 = Number(display.textContent);
    lastOperator = operator;
    lastNum2 = num2;
  } else if (lastOperator !== undefined) {
    num2 = lastNum2;
    operator = lastOperator;
  } else {
    return;
  }

  const result = operate(num1, operator, num2);
  showResult(result);
  if (typeof result === "string") {
    clearCalculator();
    return;
  }

  num1 = result;
  operator = undefined;
  shouldReset = true;
});
