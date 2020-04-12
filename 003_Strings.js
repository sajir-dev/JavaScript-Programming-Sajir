stringconcat = (str1, str2) => str1 + " " + str2;

reversestring = (str) => {
  rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str.charAt(i);
  }
  return rev;
};

reverseconcat = (str1, str2) => {
  return reversestring(stringconcat(str1, str2));
};


stringmix = (str1, str2)=>{
	let mixstring = ""
	for (let i = 0; i<(str1+str2).length; i++){
		if (i%2 == 0){
			mixstring = mixstring+str1.charAt(i/2)
		}else{
			mixstring = mixstring+str2.charAt(i/2-.5)
		}
	}
	return mixstring
}

splithalf = (str) => {
  return [str.slice(0, str.length / 2), str.slice(str.length / 2, str.length)];
};

removewhitespace = (str) => {
  let newString = str;
  for (let i = 0; i < newString.length; i++) {
    if (newString.charAt(i) == " ") {
      newString = newString.slice(0, i) + newString.slice(i + 1, str.length);
    }
  }
  return newString;
};

addcharacter = (str, chadd, ch) => {
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) == ch) {
      str = str.slice(0, i + 1) + chadd + str.slice(i + 1, str.length);
    }
  }
  return str;
};

console.log(addcharacter("Pazhampori", "X", "a"));

console.log(removewhitespace("Once Upon A Time In Mumbai"));

console.log(splithalf("wabcd"));

console.log(stringconcat("Hi", "Hello"));

console.log(reversestring("abcdef"));

console.log(reverseconcat("abcde", "fghij"));

console.log (stringmix("abc","def"))
