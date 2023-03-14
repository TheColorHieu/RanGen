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

var password = "";


//length of password 
var passwordLength = prompt("How long would you like your password?");

//next couple lines shows the user option for their passwords
//series of prompt or confirmed. having a prompts allow user to say yes while confirmed sends a true or false statement
  var lowerCase = confirm("Do you want a Lowercase?")
  var upperCase = confirm("Do you want a Upperrcase?")
  var numbers = confirm("Do you want a Number?")
  var specialChar = confirm("Do you want a Special Character?")
  console.log(passwordLength);
  console.log(lowerCase);
  console.log(upperCase);
  console.log(numbers);
  console.log(specialChar);
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
//start of if statements
if (lowerCase){
  password += lowerCaseOption;
}
if (upperCase){
  password += upperCaseOption;
}
if (numbers){
  password += numbersOption;
}
if (specialChar){
  password += specialChar;
}




//for loop to help create the password
for (let i =password.length; i < length; i++){
  password += password.charAt(Math.floor(Math.random() * passwordLength))
}

return password
}


}
