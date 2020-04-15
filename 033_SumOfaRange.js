sumOfRange = (start, end) => {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum = sum + i;
  }
  return sum;
};
console.log(sumOfRange(15, 17));
