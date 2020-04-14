multiplicationtable = () => {
  let table = ""; let ch = '  '
  for (let i = 1; i <= 12; i++) {
    for (let j = 1; j <= 10; j++) {
      if ((i * j).toString.length === 1) {
        ch = '    ';
      }
      table = table + ch + (i * j).toString();
    }
    table = table + "\n";
  }
  return table;
};

console.log(multiplicationtable());
