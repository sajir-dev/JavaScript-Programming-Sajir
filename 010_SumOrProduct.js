sumorproduct = (n, operation) => {
  let sum = 0;
  let product = 1;

  if (operation === "sum") {
    for (i = 1; i <= n; i++) {
      sum = sum + i;
    }
    return sum;
  } else if (operation === "product") {
    for (i = 1; i <= n; i++) {
      product = product * i;
    }
    return product;
  } else {
    return "operation is not defined";
  }
};

console.log(sumorproduct(10, 'product'));
