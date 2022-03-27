// Assignment Code
var generateBtn = document.querySelector("#generate");
/*Below is an array for capital letters*/
let upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",];
  /*An array for lowercase letters*/
let lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
/*An array for special characters*/
let specialChar = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "|",
  "]",
  "^",
  "_",
  "`",
  "{",
  "}",
  "~",
];
/*An array for numbers*/
let numbers = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
/*A soon to be array for the passowrd length?*/
let passwordLength = []

/*below is the function that will runn through each of the arrays*/
function generatePassword () {
    var passwordLength = prompt("How long do you want your password to be?(8-128 Characters)");
    var hasSpecialChar = confirm("Include special character?");
    var hasLowerCase = confirm("Include lower case letters?");
    var hasUpperCase = confirm ("Include upper case letters?");
    var hasNumbers = confirm("Include numbers?")

    var passwordSelections = {
        passwordLength: passwordLength,
        hasSpecialChar: hasSpecialChar,
        hasLowerCase: hasUpperCase,
        hasUpperCase: hasLowerCase,
        hasNumbers: hasNumbers,
    }
    /*these variables store a checkpoint to use in the if statements*/
    var result = [];
    var requiredCharacters = [];

    /*The function that returns a random selection from each of the arrays using the below if statements*/
    function selectRand(array){
      return array[Math.floor(Math.random() * array.length)];
    }

/* The following if statements run through each of the character arrays up above*/
if (passwordSelections.hasSpecialChar) {
  result.push(selectRand(specialChar));
  requiredCharacters = requiredCharacters.concat(specialChar);
}
if (passwordSelections.hasLowerCase) {
  result.push(selectRand(lowerCase));
  requiredCharacters = requiredCharacters.concat(lowerCase);
}
if (passwordSelections.hasUpperCase) {
  result.push(selectRand(upperCase));
  requiredCharacters = requiredCharacters.concat(upperCase);
}
if (passwordSelections.hasNumbers) {
  result.push(selectRand(numbers));
  requiredCharacters = requiredCharacters.concat(numbers);
}
/*sets the length of the ouput to the chosen user length*/
var currentLength = result.length
/*Below combines the results of the if staements into a random result*/
for(var index = 0; index <passwordSelections.passwordLength - currentLength; index++) {
  var random = selectRand(requiredCharacters);
  result.push(random);
  
  }
  /*this returns the result to the #password box on the document*/
return result.join('');
}

  // Write password to the #password input
  /*This function writes the code into the #password box in the document and shows it to the user*/
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);