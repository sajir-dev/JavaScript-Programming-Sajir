greatestofthree = (a, b, c) => {
  let greatest = a;
  if (a > b && a > c) {
    greatest = a;
  } else if (b > a && b > c) {
    greatest = b;
  } else {
    greatest = c;
  }
  return greatest;
};
console.log(greatestofthree(203, 205, 202));
