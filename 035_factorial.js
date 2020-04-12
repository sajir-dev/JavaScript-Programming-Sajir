reverse = (num) => {
  let rev = 0;
  let rem;
  let number = num;
  while (number > 0) {
    rev = rev * 10 + (number % 10);
    number = parseInt(number / 10);
  }
  return rev;
};

console.log(reverse(123));
