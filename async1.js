
//1
console.log("Remove the excess spaces found in a string")
console.log(removeSpace("      I       love       You     "))

//2
console.log(" Return a Boolean if a number is divisible by 10")
console.log(divisibleBy10(10))

//3
console.log("Return the number of vowels in a string. Input: Success")
console.log(checkVowels("Success"));
console.log("Return the number of vowels in a string. Input: Gym")
console.log(checkVowels("gym"));

function removeSpace(x) {
  /* Regex Explanation: "\s" matches white space. "+" matches consecutive preceding tokens, in this case its "\s". 
    g indicates a globale serach through the string. */
  var regex = /\s+/g;
  //After repplacing excessive white space throughout string, trim the ends
  cleanString = x.replace(regex, " ").trim();
  return cleanString;
}

function divisibleBy10(x) {
  var isDivisable = x % 10 === 0;
  return isDivisable;
}

function checkVowels(x) {

//initalize variables
  var i = 0;
  var vowelCount = 0;
  var yCount = 0;
  let charCount = {a: 0, e:0, i:0, u:0}

  //iterate over string length
  for (i; i < x.length; i++) {

    //get character for current index
    char = x.charAt(i);

    //check if current char is a regular vowel
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
        //increment vowel count
      vowelCount++;


      switch (char) {
        //increment indiviudal count
        case "a": charCount.a++
          break;
        case "e": charCount.e++
          break;
        case "i": charCount.i++
          break;
        case "o": charCount.o++
          break;
        case "u": charCount.u++
          break;
      }
      //if no reg vowels found check for y exception
    } else if (char === "y") {
        //increment y count
      yCount++;
    }
  }

  if (vowelCount) {
    return { msg: `Out of ${x.length} characters, ${vowelCount} are vowels. ` , invidualVowelCount: charCount };
  } else {
    return { msg: `Out of ${x.length} characters, ${yCount} are vowels. This a Y scenario. `  };
  }
}
