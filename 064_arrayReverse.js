const arrayReverse = (arr) => {
  let reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  return reverse;
};

console.log(arrayReverse([12, 3, 5]));
