fibonacci = (limit) => {
  let series = [1, 1];
  for (let i = 2; i <= limit - 1; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series;
};

console.log(fibonacci(10));
