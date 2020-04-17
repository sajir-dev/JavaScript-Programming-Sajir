const stringLength = (string) => {
  return (string.lastIndexOf(string.slice(-1))+1);
};

console.log(stringLength("asdfghjjkl"));
