daysInMonth = (year, month) => {
  let date = new Date(year, month, 0);
  return date.getDate();
};

console.log(daysInMonth(2021, 2));
