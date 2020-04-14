next20Leapyears = () => {
let i = 2024;
let leapYears = [];
while (i <= 2100) {
  leapYears.push(i);
  i = i + 4;
}
  return leapYears;
}

console.log (next20Leapyears())
