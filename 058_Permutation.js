permutation = (people, seats) => {
  let count = 1;
  for (i = people; i >= seats; i--) {
    count = count * i;
  }
  return count;
};

console.log(permutation(5,3))