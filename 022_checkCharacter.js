checkCharacter = (ch) => {
  switch (true) {
    case "A" <= ch && ch <= "Z":
      return "Given character is an uppercase letter";
    case "c" <= ch && ch <= "z":
      return "Given character is a lowercase letter";
    case "!" <= ch && ch <= "@":
      return "Given character is a special character";
    default:
      return "The given character is neither an alphabet nor a special character under ASCII standards";
  }
};
