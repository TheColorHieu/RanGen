// Assignment Code
var generateBtn = document.querySelector("#generate");
//entering characters variables 
var numbersOption = " 0123456789";
var uppercaseOption ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseOption ="abcdefghijklmnopqrstuvwxyz";
var specialOption = "!@#$%^&*()";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

generateBtn.addEventListener("click", writePassword);

//creating the function to generate the password 
function generatePassword() {
//developing the string password

var password = "";


//length of password 
var passwordLength = prompt("How long would you like your password?");
//series of prompt or confirmed. having a prompts allow user to say yes while confirmed sends a true or false statement
  var lowerCase = confirm("Do you want a Lowercase?")
  var upperCase = confirm("Do you want a Upperrcase?")
  var numbers = confirm("Do you want a Number?")
  var specialChar = confirm("Do you want a Special Character?")
//next line helps user know that they need at to say yes to at least one of the conditions
if ( passwordLength <= 8 || passwordLength >= 128){
  alert("Your password is not long enough. Please try again.");
}
else if ( upperCase === false && numbers === false && specialChar === false){
  alert("You must choose at least one password criteria")
  var lowerCase = confirm("Do you want a Lowercase?")
  var upperCase = confirm("Do you want a Upperrcase?")
  var numbers = confirm("Do you want a Number?")
  var specialChar = confirm("Do you want a Special Character?")
  
}



//next couple lines shows the user option for their passwords
//start of if statements

// var lowerCase = confirm("Do you want lowercase?");
// if(lowerCase === true){
// password = password +getRandomValue(lowerCase);  
// }

// var upperCase = confirm("Do you want uppercase?");
// if(upperCase === true){
//   password = password +getRandomValue(upperCase); 
// }

// var numbers = confirm("Do you want to add an number?");
// if(numbers === true){
//   password = password +getRandomValue(numbers); 
// }

// var specialChar = confirm("Do you want a special character?");
// if(special === true){
//   password = password +getRandomValue(special);
// }




//for loop 
for (let i =password.length; i < length; i++){
  password = password +getRandomValue(numbers);
  password = password +getRandomValue(upperCase);
  password = password +getRandomValue(lowerCase);
  password = password +getRandomValue(special);

}

return password.substring(0,passwordLength);
}

function getRandomValue(str){
  const randomIndex = Math.floor(Math.random() * str.length);
  returnstr[randomIndex];
}
}
