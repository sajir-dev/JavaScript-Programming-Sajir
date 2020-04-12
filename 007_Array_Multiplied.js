multiply = (arr, k) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i] * k;
  }
  return newArr;
};

console.log(multiply([1, 2, 3], 10));
