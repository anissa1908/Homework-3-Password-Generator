// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assigned variables
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!,@,#,$, %,&,*';

var workshopArr = [ ]
var finalResultArr = newFunction(); {

}; 


// Write password to the #password input
var userPasswordLengthChoice = confirm("How long do you want your password to be?");
  while (length < 8 || length > 128 ===true) length = (prompt),"Length must be at least 8 characters and no more than 128."; {
    
  }

// Add event listener to generate button
generateBtn.addEventListener("click"), writePassword()
{  generatePassword();
}

// Prompting system to generate a password
function generatePassword() {
  return [];
}
  function characters(arr) {
    for(var i = 0; i < characters.length; i++) {
          arr.push(characters[i]);
      };
      return arr
    };
   
// Adding conditions
  var workshopArr = [];
          if (userPasswordLengthChoice === true) {
            number(workshopArr);
          };
        
  var workshopArr = [];
          if (userPasswordLengthChoice=== false) {
            alert= ("Your password is not long enough!");
          }

  // function shuffle(array) {
  //     var currentIndex = array.length, temporaryValue, randomIndex;
  

          
  //   // While there remain elements to shuffle...
  //    while (0 !== currentIndex) {
          
  //  // Pick a remaining element...
  //    randomIndex = Math.floor(Math.random() * currentIndex);
  //    currentIndex -= 1;
  function makeid(length) {
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!,@,#,$, %,&,*';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
          
  // // And swap it with the current element.
  //    temporaryValue = array[currentIndex];
  //    array[currentIndex] = array[randomIndex];
  //    array[randomIndex] = temporaryValue;
  //   }
          
  //     return array;
  //         }


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click"), function()
 {  generatePassword();
}
