numbersWithNineDivisors = (n) => {
  let NineDivisor = [];
  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count === 9) {
      NineDivisor.push(i);
    }
  }
  return NineDivisor;
};

console.log(numbersWithNineDivisors(333));
