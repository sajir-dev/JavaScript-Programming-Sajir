quadraticEqn = (a, b, c) => {
  let d = b * b - 4 * a * c;
  if (d > 0) {
    return [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)]
  } else if (d === 0) {
    return -b / (2 * a);
  } else {
    return "No solution possible";
  }
};

console.log(quadraticEqn(2, 8, 12))
