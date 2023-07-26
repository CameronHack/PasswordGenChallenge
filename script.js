// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables defining what characters can be used in password generation
let lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let symbols = ['!', '?', '@', '#', '$', '%', '^', '&', '*', '/', '-', '_', '=', '+'];

// this block does the math to generate the password for you
function generatePassword() {
  // final password value
  let finalPass = "";
  // array of selected characters from the options below
  let combinedPassword = [];

  // ask user what characters should be present in their generated password
  if (confirm('Do you want password to contain lowercase letters?')) {
    combinedPassword = [...combinedPassword, ...lowerCaseLetters]
  }
  if (confirm('Do you want password to contain uppercase letters?')) {
    combinedPassword = [...combinedPassword, ...upperCaseLetters]
  }
  if (confirm('Do you want password to contain numbers?')) {
    combinedPassword = [...combinedPassword, ...numbers]
  }
  if (confirm('Do you want password to contain symbols?')) {
    combinedPassword = [...combinedPassword, ...symbols]
  }

  // asks the user to type in desired password length
  let passwordLength = prompt('Enter a password length between 8 and 128 characters');

  // if password length is greater than or equal to 8, less than or equal to 128, and your selected character array is greater than 0 your password will be generated
  if (passwordLength >= 8 && passwordLength <= 128 && combinedPassword.length > 0) {
    // generates a password based off the acceptable length you chose and the options of characters you decided in the above prompts
    for (let i = 0; i < passwordLength; i++) {
      let genCharacterIndex = Math.floor(Math.random() * combinedPassword.length);
      finalPass += combinedPassword[genCharacterIndex]
      // useful logs
      // console.log("combinedPassword array: " + combinedPassword)
      // console.log("combinedPassword length: " + combinedPassword.length)
      // console.log(genCharacterIndex)
    }
  } else {
    // if your password didnt fall into the acceptable selections then you will be prompted to try again
    confirm('😡 Invalid password length and/or no characters selected please TRY AGAIN! 😡')
  }

  // returns the final generated password to generatePassword function to be displayed
  // console.log('Your final password: ' + finalPass)
  // console.log('successful return')
  return finalPass

}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
