// Begin: create variables for user selections
var passwordLength = 0 ;
var includeLowercase = null;
var includeUppercase = null;
var includeNumeric = null;
var includeSymbols = null;
// End: create variables for user selections


// Begin: specify array values to be included based on user selections
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "@", "#", "*", "&", "$", "%", "+", ":", ";", "=", "?", "^", "_", "-", "~"];
var options = [];
// End: specify array values to be included based on user selections


// Start function to generate password
function generatePassword () {
  // Prompt for desired Password Length
  passwordLength = prompt("How many characters would you like your password to be? Choose a value between 8 and 128.");
  // Present alert if no number is input or if number is less than 8 or if number is greater than 128 & return null so generatePassword() != "undefined"
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("You must enter a value between 8 and 128.");
    return null;
  } else {
    // else move on to confirm other options
    includeLowercase = confirm("Include Lowercase?\nSelect 'OK' for 'Yes', 'Cancel' for 'No'.");
    includeUppercase = confirm("Include Uppercase?\nSelect 'OK' for 'Yes', 'Cancel' for 'No'.");
    includeNumeric = confirm("Include Numbers?\nSelect 'OK' for 'Yes', 'Cancel' for 'No'.");
    includeSymbols = confirm("Include Symbols?\nSelect 'OK' for 'Yes', 'Cancel' for 'No'.");
  }

   // Check that at least one "include" option is made, present alert if not & return null so generatePassword() != "undefined"
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSymbols) {
    alert("You must include at least one option: Lowercase, Uppercase, Numbers, and/or Symbols.");
    return null;
  } 

  // Add user selections to options array
  if (includeLowercase) {
    options.push(...lowercase);
  }
  if (includeUppercase) {
   options.push(...uppercase);
  }
  if (includeNumeric) {
   options.push(...numeric);
  }
  if (includeSymbols) {
    options.push(...symbols);
  }

  // Once options array is built, extract random data from it and put into password string until it's the same length as passwordLength
  var passwordString = "";
  for (var i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * options.length);
    passwordString += options[index];
  }

  // Return the generated passwordString, so it gets placed in generatePassword() function
  return passwordString;

}
// End function to generate password


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
