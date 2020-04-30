const toggleChars = (string) => {
  let toggledString = string.split("");
  for (let i = 0; i < toggledString.length; i++) {
    if (toggledString[i] >= "a" && toggledString[i] <= "z") {
      toggledString[i] = toggledString[i].toUpperCase();
    } else {
      toggledString[i] = toggledString[i].toLowerCase();
    }
  }
  return toggledString.join("");
};

console.log(toggleChars("hallelujah!"));
