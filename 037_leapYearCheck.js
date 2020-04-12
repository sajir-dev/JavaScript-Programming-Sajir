leapyearcheck = (year) => {
  return year % 4 === 0 ? true : false;
};

console.log(leapyearcheck(2020));
