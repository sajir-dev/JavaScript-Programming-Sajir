const stringLength = (string) => {
  let i = 0;
  let length = 0;
  while (string.indexOf(string[i + 1]) !== -1) {
    if (string.lastIndexOf(string[i + 1]) >= string.lastIndexOf(string[i])) {
      length = string.lastIndexOf(string[i + 1]);
    }
    i++;
  }
  return length + 1;
};

console.log(stringLength("asdfghjjkl"));
