isPalindrome = (str) => {
  for (i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
      break;
    }
  }
  return true;
};
console.log(isPalindrome("MALAYALAM"));
