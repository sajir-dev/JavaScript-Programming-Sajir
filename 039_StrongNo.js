strongNoCheck = (num) => {
  factorial = (k) => {
    let fact = 1;
    for (let i = 1; i <= k; i++) {
      fact = fact * i;
    }
    return fact;
  };

  let factorialsum = 0;
  let number = num;
  while (number > 0) {
    let fact = factorial(number % 10);
    factorialsum = factorialsum + fact;
    number = parseInt(number / 10);
  }

  return factorialsum === num ? true : false;
};

console.log(strongNoCheck(40585));
