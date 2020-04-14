characterCheck = (ch) => {
  if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
    return "The given character is an alphabet";
  } else {
    return "The given character is not an alphabet";
  }
};

console.log(characterCheck("5"));
