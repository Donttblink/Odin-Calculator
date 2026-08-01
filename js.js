const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const clear = document.querySelector(".clear");
const selectOperator = document.querySelectorAll(".operator");
const del = document.querySelector(".delete");
const enter = document.querySelector("#enter");
const decimal = document.querySelector("#btn-decimal");

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
    } else if (display.textContent === "0" && button.textContent !== ".") {
      display.textContent = button.textContent;
    } else {
      display.textContent += button.textContent;
    }
  });
});

clear.addEventListener("click", () => {
  clearCalculator();
  display.textContent = "0";
});

del.addEventListener("click", () => {
  display.textContent = display.textContent.slice(0, -1) || "0";
});

decimal.addEventListener("click", () => {
  if (display.textContent.includes(".")) {
    return;
  } else {
    display.textContent += decimal.textContent;
  }
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

const keyMap = {
  0: "#btn-0",
  1: "#btn-1",
  2: "#btn-2",
  3: "#btn-3",
  4: "#btn-4",
  5: "#btn-5",
  6: "#btn-6",
  7: "#btn-7",
  8: "#btn-8",
  9: "#btn-9",
  ".": "#btn-decimal",
  "+": "#add",
  "-": "#subtract",
  "*": "#multiply",
  "/": "#divide",
  "^": "#power",
  Enter: "#enter",
  "=": "#enter",
  Backspace: ".delete",
  Escape: ".clear",
};

document.addEventListener("keydown", (e) => {
  const selector = keyMap[e.key];
  if (selector) {
    e.preventDefault();
    document.querySelector(selector).click();
  }
});
