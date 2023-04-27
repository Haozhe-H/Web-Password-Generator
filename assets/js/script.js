// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var numberChar = "0123456789";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "~!@#$%^&*()_+-=`{}|[]\;':,./<>?";

function generatePassword(){

  var password = "";
  var passwordContent = "";

  var userPasswordLength = prompt("How many characters would you like to have in the password? The length have to be within 8 and 128 characters");
  if(!isNaN(userPasswordLength)){
    userPasswordLength = userPasswordLength;
  }else{
    alert("Only numbers are accepted here")
  }

  if(userPasswordLength < 8 || userPasswordLength > 128){
    alert("The length of the password must between 8 and 128 characters")
    var userPasswordLength = prompt("How many characters would you like to have in the password? The length have to be within 8 and 128 characters");
  }

  var upperChoice = confirm("Do you want UPPER CASE characters in the password?")
  if(upperChoice){
    passwordContent += upperChar;
  }

  var lowerChoice = confirm("Do you want LOWER CASE characters in the password?")
  if(lowerChoice){
    passwordContent += lowerChar;
  }

  var numberChoice = confirm("Do you want NUMBERS in the password?")
  if(numberChoice){
    passwordContent += numberChar;
  }

  var specialChoice = confirm("Do you want SPECIAL characters in the password?")
  if(specialChoice){
    passwordContent += specialChar;
  }

  for(let i = 0; i < userPasswordLength; i++){
    password += passwordContent.charAt(Math.floor(Math.random()*passwordContent.length));
  }

  console.log(password);
  return(password)
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log(passwordText);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
