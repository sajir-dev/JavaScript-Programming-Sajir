digitsWords = (num) => {
  let numWord = {
    "0": "Zero",
    "1": "One",
    "2": "Two",
    "3": "Three",
    "4": "Four",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8": "Eight",
    "9": "Nine",
  };

  numString = "";
  
  let loopLength = num.toString().length;

  for (let i = 0; i < loopLength; i++) {
    numString = numString + ' ' + numWord[num.toString()[i]];
  }
  return numString;
};


console.log (digitsWords(2259));

//   let numWord = {
//     "0": "Zero",
//     "1": "One",
//     "2": "Two",
//     "3": "Three",
//     "4": "Four",
//     "5": "Five",
//     "6": "Six",
//     "7": "Seven",
//     "8": "Eight",
//     "9": "Nine",
//   };

//   let a = 892

//   let num = a.toString()

//   console.log(numWord[num[1]])
