countThree = (n) => {
  let threes = 0;
  for (let i = 1; i <= n; i++) {
    let nString = i.toString();

    for (let j = 0; j < nString.length; j++) {
      if (nString[j] === "3") {
        threes++;
      }
    }
  }
  return threes;
};

console.log(countThree(333));
