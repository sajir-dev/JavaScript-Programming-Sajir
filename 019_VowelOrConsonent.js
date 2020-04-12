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
    console.log("It is a vowel");
  } else {
    console.log("It is a consonent");
  }
  return 1;
};
vowelOrConsonent("b");
