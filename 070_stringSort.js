const stringSort = (string) => {
  let arr = string.split("");
  let temp = "";
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr.join("");
};

console.log(stringSort("face"));
