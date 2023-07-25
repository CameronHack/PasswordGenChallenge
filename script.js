// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

let lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let symbols = ['!', '?', '@', '#', '$', '%', '^', '&', '*', '/', '-', '_', '=', '+'];
let combinedPassword = [];
let finalPass = "";

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
  if (confirm('Do you want password to contain symbols?')){
    combinedPassword = [...combinedPassword, ...symbols]
  }

  console.log("combinedPassword array: " + combinedPassword)
  console.log("combinedPassword length: " + combinedPassword.length)

  let passwordLength = prompt('Enter a password length between 8 and 128 characters');

  // if (passwordLength < 8) {
  //   passwordLength = prompt('Too short please enter a number greater then 8');
  // } else if (passwordLength > 128){
  //   passwordLength = prompt('Too long please enter a number less then 128');
  // }

  if (passwordLength > 8 && passwordLength < 128) {
    for (let i = 0; i < passwordLength; i++) {
      let genCharacterIndex = Math.floor(Math.random()*combinedPassword.length);
      finalPass += combinedPassword[genCharacterIndex]
      console.log("combinedPassword array: " + combinedPassword)
      console.log("combinedPassword length: " + combinedPassword.length)
      console.log(genCharacterIndex)
    }
  } else {
    passwordLength = confirm('Invalid Password length please TRY AGAIN!')
  }


  console.log(finalPass)

  return finalPass
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
