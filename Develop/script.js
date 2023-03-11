// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);

//creating the function to generate the password 
function generatePassword() {
//developing the string password
var password = "";
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


const passwordLength = prompt("How long would you like your password?");
//series of prompt or confirmed. having a prompts allow user to say yes while confirmed sends a true or false statement
//added codes 
var lowercase = confirm("Do you want lowercase?");
console.log(lowercase)
var upercase = confirm("Do you want uppercase?");
var numeric = confirm("Do you want to add an umber?");
var special = confirm("Do you want a special character?");

return password;
}

