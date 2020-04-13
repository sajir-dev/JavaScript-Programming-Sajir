primesInRange = (start, end) => {
  let num = start;
  let primes = [];

  primecheck = (x) => {
    for (i = 2; i < x; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  while (num <= end) {
    if (primecheck(num)) {
      primes.push(num);
    }
    num++;
  }
  return primes;
};

console.log(primesInRange(5, 490));
