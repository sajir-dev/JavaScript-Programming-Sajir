isSumOfPrime = (num) => {
  primenumbers = (n) => {
    isPrime = (x) => {
      for (let j = 2; j < x; j++) {
        if (x % j === 0) {
          return false;
        }
      }
      return true;
    };

    let primes = [];
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  };

  let primesUnderN = primenumbers(num);

  for (let i = 0; i < primesUnderN.length; i++) {
    for (let j = 0; j <= primesUnderN.length; j++) {
      if (num === primesUnderN[i] + primesUnderN[j]) {
        return true;
      }
    }
  }
  return false;
};

console.log(isSumOfPrime(100));
