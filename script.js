// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

let lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let symbols = [];
let combinedPassword = [];
let genCharacterIndex = Math.floor(Math.random()*combinedPassword.length);

function generatePassword(){
  if (confirm('Do you want password to contain lowercase letters?')){
    combinedPassword = [...combinedPassword, ...lowerCaseLetters]
  }
  if (confirm('Do you want password to contain uppercase letters?')){
    combinedPassword = [...combinedPassword, ...upperCaseLetters]
  }
  if (confirm('Do you want password to contain numbers?')){
    combinedPassword = [...combinedPassword, ...numbers]
  }

  let passwordLength = prompt('How long is the password');
  for (let i = 0; i < passwordLength; i++) {
    const element = array[i]
    
  }

  return combinedPassword
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
