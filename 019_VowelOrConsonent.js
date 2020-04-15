vowelOrConsonent = (ch) => {
  if (
    ch === "a" ||
    ch === "A" ||
    ch === "e" ||
    ch === "E" ||
    ch === "i" ||
    ch === "I" ||
    ch === "o" ||
    ch === "O" ||
    ch === "u" ||
    ch === "U"
  ) {
    return ("It is a vowel");
  } else {
    return ("It is a consonent");
  }
};
console.log(vowelOrConsonent("b"));
