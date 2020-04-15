perfectNumber = (num) => {
  let factorsum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      factorsum = factorsum + i;
    }
  }
  return factorsum === num ? true : false;
};

console.log(perfectNumber(496));
