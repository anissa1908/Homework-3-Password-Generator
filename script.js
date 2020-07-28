// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = ["A", "B", "C", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '#', '$', '%', '&', '*'];
var finalResultArr = newFunction(); 

// Write password to the #password input
var userPasswordLengthChoice = prompt("How long do you want your password to be?");
  while (length < 8 || length > 128) length = (prompt),"Length must be at least 8 characters and no more than 128."; {
    alert
  }

var uppercase = confirm("Do you want to use uppercase?");
var lowercase = confirm("Do you want to use lower case?");
var numbers = confirm("Do you want to use numbers?");
var special = confirm("Do you want to use special characters?");

function newFunction() {
  return [];
}

  function uppercase(arr) {
    for(var i = 0; i < uppercaseArr.length; i++) {
          arr.push(uppercaseArr[i]);
      };
      return arr
    };

  function lowercase(arr) {
      for(var i = 0; i < lowercaseArr.length; i++) {
            arr.push(lowercaseArr[i]);
        };
        return arr
      };

  function numbers(arr) {
        for(var i = 0; i < numbersArr.length; i++) {
              arr.push(numbersArr[i]);
          };
          return arr
        };

  function special(arr) {
          for(var i = 0; i < specialArr.length; i++) {
                arr.push(specialArr[i]);
            };
            return arr
          };

  var workshopArr = [];
          if (userChoiceNumber === true) {
            number(workshopArr);
          };

  var workshopArr = [];
          if (userChoiceNumber === false) {
            alert = ("");
          }

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
// generateBtn.addEventListener("click", function()
//  {  
// }
