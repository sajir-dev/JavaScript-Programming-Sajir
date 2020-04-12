armstongcheck = (num) => {
  let cubesum = 0;
  let number = num;
  while (number > 0) {
    let cube = Math.pow(number % 10, 3);
    cubesum = cubesum + cube;
    number = parseInt(number / 10);
  }
  return cubesum === num ? true : false;
};

console.log(armstongcheck(0));
