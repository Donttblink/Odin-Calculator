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
