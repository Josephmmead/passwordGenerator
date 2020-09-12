// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "\\", "_", "+", "<", ">", "?", "'",];
var IntegerCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  
  function generatePassword() {
    var confirmLength = (prompt("Please provide us with required length of your password."));

    // while (confirmLength === null)
    //   alert("You will need to enter a number between 8 and");
    //   var confirmLength = (prompt("Please provide us with required length of your password."));}

    // Confirming that the password length is between 8 and 128 characters long and that it is a number
    while (isNaN(confirmLength) || confirmLength <= 7 || confirmLength >= 129) {
      alert("Your password needs to be between 8 and 128 characters long.");
      var confirmLength = (prompt("Please provide us with required length of your password."));}

      

      // confirmation email that the value provided is within the guidelines
      alert("Your password will be " + confirmLength + " characters long.");

    // Confirm messages asking the user for the criteria they want within their password
    var confirmLowerCaseCharacters = confirm("Do you want your password to include lower case letters?");
    var confirmUpperCaseCharacters = confirm("Do you want your password to include upper case letters?");
    var confirmSpecialCharacters = confirm("Do you want your password to include special characters letters?");
    var confirmIntegerCharacters = confirm("Do you want your password to include numbers?");

    // Checking to see if the user declined all criteria above
    while (confirmLowerCaseCharacters !== true && confirmUpperCaseCharacters !== true && confirmSpecialCharacters !== true && confirmIntegerCharacters !== true) {
      alert("You have declined all the criteria for your password. Please choose at least one option.");
      var confirmLowerCaseCharacters = confirm("Do you want your password to include lower case letters?");
      var confirmUpperCaseCharacters = confirm("Do you want your password to include upper case letters?");
      var confirmSpecialCharacters = confirm("Do you want your password to include special characters letters?");
      var confirmIntegerCharacters = confirm("Do you want your password to include numbers?");
  }
  // Empty array to be filled by below statements
  var passwordArray = []

  // Empty string that will be filled with randomly selected items 
  var randomPassword = ""
    
  // These are taking the confirms and adding them to the passwordArray if they were selected
  if (confirmLowerCaseCharacters) {
    passwordArray = passwordArray.concat(lowerCaseCharacters)
  };

  if (confirmUpperCaseCharacters) {
    passwordArray = passwordArray.concat(upperCaseCharacters)
  };

  if (confirmSpecialCharacters) {
    passwordArray = passwordArray.concat(specialCharacters)
  };
  
  if (confirmIntegerCharacters) {
    passwordArray = passwordArray.concat(IntegerCharacters)
  };

    //Pulling random items from the approved array passwordArray
    for (var i = 0; i < confirmLength; i++) {
      randomPassword = randomPassword + passwordArray[Math.floor(Math.random() * passwordArray.length)];
      console.log(randomPassword)
    };
    return randomPassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}