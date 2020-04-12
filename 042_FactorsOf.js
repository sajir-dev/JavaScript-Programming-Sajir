factors = (num) => {
  let factors = [];
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
};

console.log(factors(28));
