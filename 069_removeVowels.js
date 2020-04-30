const noOfVowels = (string) => {
  let consonents = "";
  for (let i = 0; i < string.length; i++) {
    if (  
    string[i] !== "a" &&
    string[i] !== "e" &&
    string[i] !== "i" &&
    string[i] !== "o" &&
    string[i] !== "u" &&
    string[i] !== "A" &&
    string[i] !== "E" &&
    string[i] !== "I" &&
    string[i] !== "O" &&
    string[i] !== "U" ) {
      consonents = consonents.concat(string[i]);
    }
  }
  return consonents;
};

console.log(noOfVowels("iiiiiiiiaaaaaaaaaeeeeeeeeeee"));
