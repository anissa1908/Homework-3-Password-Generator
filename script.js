// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assigned variables
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var special = '!,@,#,$, %,&,*';
var workshopArr = [ ];
var finalResultArr = generatePassword(); {

}; 

// Write password to the #password input
  function enterpassword(params) {
    
  }

// Add event listener to generate button
generateBtn.addEventListener("click"), function() {
  finalResultArr.innerHTML = " ";
}

// Prompting system to generate a password
  function upper(arr) {
    for(var i = 0; i < upper.length; i++) {
          arr.push(upper[i]);
      };
      return arr
    };

  function lower(arr) {
    for(var i = 0; i < lower.length; i++) {
            arr.push(lower[i]);
        };
        return arr
    };

  function numbers(arr) {
    for(var i = 0; i < numbers.length; i++) {
              arr.push(numbers[i]);
        };
     return arr
    };

  function special(arr) {
    for(var i = 0; i < special.length; i++) {
                arr.push(special[i]);
        };
     return arr
    };


      for(var i = 0; i < finalResultArr.length
   
// Adding conditions
          if (userPasswordLengthChoice === true) {
            number(workshopArr);
          };
      
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

