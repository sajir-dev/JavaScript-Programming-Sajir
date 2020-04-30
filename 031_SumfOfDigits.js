sumOfDigits = (a) => {
  let number = a.toString();
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum = sum + parseInt(number[i]);
  }
  return sum;
};

console.log(sumOfDigits(12345));
