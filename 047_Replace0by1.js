replaceNo = (num) => {
  numstring = num.toString();

  for (let i = 0; i < numstring.length; i++) {
    if (numstring[i] == "0") {
      numstring =
        numstring.slice(0, i) + "1" + numstring.slice(i + 1, numstring.length);
    }
  }

  return numstring;
};

console.log(replaceNo(10000));
