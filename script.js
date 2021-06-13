// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays Of Possible Options
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var loweCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?', '~', '-', '_', '+', '.', '<', '>', '/', '[', ']', "'", '"', '=', '`', '|', ';', ':'];

//functions for user options and statements for the minimum requirements to be met
function questions() {
  var Valid = false;
  do {
    var length = prompt('Make a password between 8 and 128 characters');
    var askNumbers = confirm('Should your password include numbers');
    var askLowerCase = confirm('Should your password include lower case letters');
    var askUpperCase = confirm('Should your password include upper case letters');
    var askSpecial = confirm('Should your password include special characters');
    var responses = {
      length: length,
      askNumbers: askNumbers,
      askLowerCase: askLowerCase,
      askUpperCase: askUpperCase,
      askSpecial: askSpecial
    }
    if ((length < 8) || (length > 128))
      alert('Choose password between 8 and 128');
    else if ((!askNumbers) && (!askLowerCase) && (!askUpperCase) && (!askSpecial))
      alert('One type must be selected.');
    else
      Valid = true;

  } while (!Valid);
  return responses;

}

// Joins all user responses and results for a strong password
function generatePassword() {
  var passwordOptions = questions();
  var possibleCombo = [];
  var finalPassword = "";


  if (passwordOptions.askNumbers) {
    for (var b of numbers)
      possibleCombo.push(b);
  }

  if (passwordOptions.askLowerCase) {
    for (var b of lowerCase)
      possibleCombo.push(b);
  }
  if (passwordOptions.askUpperCase) {
    for (var b of upperCase)
      possibleCombo.push(b);
  }
  if (passwordOptions.askSpecial) {
    for (var b of special)
      possibleCombo.push(b);
  }

  console.log(possibleCombo);

  for (var b = 0; b < passwordOptions.length; b++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
  }
  console.log(finalPassword);

  return finalPassword;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
