// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

//generate password function, prompts for input and returns a password
function generatePassword() {
  //create arrays of A-Z, a-z, 0-9, and special characters
  const upperCaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const lowerCaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'k', 'y', 'z'];
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const specChars = [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']


  //prompt for password length and store result
  let userLengthInput = prompt('Please enter a password length between 8 and 128 characters.');

  //if user hits cancel, variable will be null. Check for that and exit method if true
  if (userLengthInput === null) {
    return "";
  }

  //validate that entry is between 8 and 128
  let pwLen = parseInt(userLengthInput);
  while (isNaN(pwLen) || pwLen < 8 || pwLen > 128) {
    userLengthInput = prompt('Your password length must be a number between 8 and 128. Please try again.');
    //if user hits cancel, variable will be null. Check for that and exit method if true
    if (userLengthInput === null) {
      return "";
    }
    pwLen = parseInt(userLengthInput);
  }


  /*LOWERCASE CHARACTER CHECK*/
  //check if user wants lowercase characters in password
  let userLCaseInput = confirm('Would you like lowercase characters in your password? Click OK for yes or Cancel for no.');


/*UPPER CASE CHARACTER CHECK*/
    //check if user wants uppercase characters in password
    let userUCaseInput = confirm('Would you like uppercase characters in your password? Click OK for yes or Cancel for no.');


/*NUMERIC CHARACTER CHECK*/
      //check if user wants numbers in password
  let userNumericInput = confirm('Would you like numeric characters in your password? Click OK for yes or Cancel for no.');



  /*SPECIAL CHARACTER CHECK*/
    //check if user wants special characters in password
    let userSpecCharInput = confirm('Would you like special characters in your password? Click OK for yes or Cancel for no.');



    if (!userLCaseInput && !userUCaseInput && !userNumericInput && !userSpecCharInput){
      alert('You must choose at least one type of character. Please start over.');
      return '';
    }
    
    //first collect all characters to be used in password. This is
    // to ensure all desired characters are used at least once

    //also add chars to array of possibleChars if they are usable in password
 let passwordArray = new Array();
 let possibleChars = new Array();
 let randNum = 0;

 //check if lowercase is to be used. If so, pick one to ensure at least one is in password
 if (pwLCase) {
   randNum = Math.floor(Math.random()*(lowerCaseChars.length));
   passwordArray.push(lowerCaseChars[randNum]);
   possibleChars.push(lowerCaseChars);
 }

 //check if uppercasae is to be used. If so, pick one to ensure at least one is in password
 if (pwUCase) {
  randNum = Math.floor(Math.random()*(upperCaseChars.length));
  passwordArray.push(upperCaseChars[randNum]);
  possibleChars.push(upperCaseChars);
}

//check if numeric is to be used. If so, pick one to ensure at least one is in password
if (pwNumeric) {
  randNum = Math.floor(Math.random()*(digits.length));
  passwordArray.push(digits[randNum]);
  possibleChars.push(digits);
}

//check if special chars are to be used. If so, pick one to ensure at least one is in password
if (pwSpecChar) {
  randNum = Math.floor(Math.random()*(specChars.length));
  passwordArray.push(specChars[randNum]);
  possibleChars.push(specChars);
}

//figure out how many chars to get
const numCharsToPick = pwLen-passwordArray.length;
//Fill out remainder of password Array
for (let i = 0; i <numCharsToPick; i++){
  //choose type of char first with random number
  randNum = Math.floor(Math.random()*possibleChars.length);
  //choose char with a different random number
  let innerRandNum = Math.floor(Math.random()*(possibleChars[randNum].length));
  //add new char to password array
  passwordArray.push(possibleChars[randNum][innerRandNum]);
}

//finally, randomize password order using possible characters
let password = '';
for (let i = 0; i<pwLen; i++){
  randNum = Math.floor(Math.random()*passwordArray.length);
  password+=passwordArray[randNum];
  passwordArray.splice(randNum,1);
}
return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
