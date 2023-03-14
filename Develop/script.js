// Assignment Code
var generateBtn = document.querySelector("#generate");
//entering characters variables 
var numbersOption = " 0123456789";
var upperCaseOption ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseOption ="abcdefghijklmnopqrstuvwxyz";
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
var userOption ="";
var password = "";
var randomString = "";



//length of password 
var passwordLength = prompt("How long would you like your password?");

//next couple lines shows the user option for their passwords
//series of prompt or confirmed. having a prompts allow user to say yes while confirmed sends a true or false statement
  var lowerCase = confirm("Do you want a Lowercase?")
  var upperCase = confirm("Do you want a Upperrcase?")
  var numbers = confirm("Do you want a Number?")
  var specialChar = confirm("Do you want a Special Character?")
  
//showing if the password length is long enough 
if ( passwordLength <= 8 || passwordLength >= 128){
  alert("Your password is not long enough. Please try again.");
}
//next line helps user know that they need at to say yes to at least one of the conditions
else if (lowerCase ===false && upperCase === false && numbers === false && specialChar === false){
  alert("You must choose at least one password criteria")
  var lowerCase = confirm("Do you want a Lowercase?")
  var upperCase = confirm("Do you want a Upperrcase?")
  var numbers = confirm("Do you want a Number?")
  var specialChar = confirm("Do you want a Special Character?")
}
//start of if statements
if (lowerCase){
  userOption += lowerCaseOption;
}
if (upperCase){
  userOption += upperCaseOption;
}
if (numbers){
  userOption += numbersOption;
}
if (specialChar){
  userOption += specialOption;
}


//for loop to help create the password
for (let i =0; i < passwordLength; i++){
  randomString += userOption.charAt(Math.floor(Math.random() * userOption.length));
}
password = randomString;
//returns password
return password;
}

}
