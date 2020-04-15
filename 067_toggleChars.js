const toggleChars = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (string[i] <= "z" && string[i] >= "a") {
      string=string.substring(0, i)+string[i].toUpperCase()+string.substring(i+1, string.length)                       //push(string[i].toUpperCase());
    } else {
        string=string.substring(0, i)+string[i].toLowerCase()+string.substring(i+1, string.length)
    }
  }
  return string;
};

console.log(toggleChars("UndaPori"));
