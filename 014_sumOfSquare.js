sumofsquares = (num) => {
  square = (x) => {
    return x * x;
  };
  for (let i = 1; i <= num / 2; i++) {
    for (let j = 1; j <= num / 2; j++) {
      if (square(i) + square(j) === num) {
        return num + " is the sum of squares of " + i + " and " + j;
      }
    }
  }
  return num + " cannot be represented as sum of squares of two numbers";
};

console.log(sumofsquares(89));
