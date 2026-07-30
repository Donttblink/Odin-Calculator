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
const nRoot = function (a, b) {
  if (a >= 0) {
    return a ** (1 / b);
  }
  if (b % 2 !== 0) {
    return -((-a) ** (1 / b));
  }
};

const operate = function (num1, num2, operator) {
  if (operator === "+") {
    add(num1, num2);
  } else if (operator === "-") {
    subtract(num1, num2);
  } else if (operator === "*") {
    multiply(num1, num2);
  } else if (operator === "/") {
    divide(num1, num2);
  } else if (operator === "^") {
    power(num1, num2);
  } else if (operator === '"\u221A"') {
    nRoot(num1, num2);
  }
};
