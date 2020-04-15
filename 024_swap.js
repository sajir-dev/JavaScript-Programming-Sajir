swap = (a, b) => {
  //3  5
  a = a + b; //8  5
  b = a - b; //8  3
  a = a - b; //5  3
  return [a, b];
};

console.log(swap(4, 8));
