gcd = (a, b) => {
  let gcd = 1;
  let limit = a < b ? a : b;
  for (let i = 1; i <= limit; i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

console.log(gcd(32, 128));
