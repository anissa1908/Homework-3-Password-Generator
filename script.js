// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!,@,#,$, %,&,*';
var uppercase = confirm("Do you want to use uppercase?");
var lowercase = confirm("Do you want to use lower case?");
var numbers = confirm("Do you want to use numbers?");
var special = confirm("Do you want to use special characters?");
var workshopArr = [ ]
var finalResultArr = newFunction(); {

}; 


// Write password to the #password input
var userPasswordLengthChoice = confirm("How long do you want your password to be?");
  while (length < 8 || length > 128 ===true) length = (prompt),"Length must be at least 8 characters and no more than 128."; {
    
  }

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
  function makeid(length) {
    var finalResultArr= '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!,@,#,$, %,&,*';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

          
  //   // While there remain elements to shuffle...
  //    while (0 !== currentIndex) {
          
  //  // Pick a remaining element...
  //    randomIndex = Math.floor(Math.random() * currentIndex);
  //    currentIndex -= 1;
          
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
