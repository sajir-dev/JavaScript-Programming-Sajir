armstrongInRange = (start, end) => {
  let num = start;
  let armstrongNos = [];

  armstrongcheck = (x) => {
    let runner = x;
    cubesum = 0;

    while (runner) {
      cubesum = cubesum + Math.pow(runner % 10, 3);
      runner = parseInt(runner / 10);
    }
    
    if (cubesum === x) {
      return true;
    } else {
      return false;
    }
  };

  while (num <= end) {
    if (armstrongcheck(num)) {
      armstrongNos.push(num);
    }
    num++;
  }
  return armstrongNos;
};

console.log(armstrongInRange(0, 1000));
