add = (a, b) => a + b;

substract = (a, b) => {
  return a > b ? a - b : b - a;
};

multiply = (a, b) => a * b;

divide = (a, b) => a / b;

modulus = (a) => {
  return a >= 0 ? a : a * -1;
};

lessthan = (a, b) => {
  return a < b ? a : b;
};

greaterthan = (a, b) => {
  return a > b ? a : b;
};

equalto = (a, b) => {
  return a == b ? "equal" : "not equal";
};

console.log(equalto(5, 5));

console.log(greaterthan(4, 5));

console.log(lessthan(4, 5));
