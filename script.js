// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = ["A", "B", "C", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '#', '$', '%', '&', '*'];


var workshopArr = [ ];
var finalResultArr = [ ]; 

// Write password to the #password input
var userPasswordLengthChoice = prompt("Enter a password containing 8 characters.");

for( i = 0; uppercase.length; i++) {
  newArr.uppercase.push(uppercase[i]), 

  // console.log("uppercase + [i]);)

for( i = 0; lowercase.length; i++) {
    newArr.lowercase.push(uppercase[i]), 
  
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
