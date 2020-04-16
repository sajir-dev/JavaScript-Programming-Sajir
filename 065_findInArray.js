const arrayFind = (arr, x) => {   
    for (let i = 0; i<arr.length ; i++) {
      if (arr[i]===x) return true;
    }
    return false;
};
console.log(arrayFind([12, 3, 5, 10], 100));
  
