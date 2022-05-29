// Assignment code here
function generatePassword() {

  /* code starts here */
  //confirm(upper, lower, numbers, special characters,;);
  //var upper = confirm()
  // var lower = confirm()
  // var number = confirm ()
  // var special characters= confirm()
  //var lengthPrompt =parseInt(prompt("Choose between")
  var passwordLength = Number.parseInt(prompt("Please, Enter password length?"))
  if (Number.isNaN(passwordLength)) {
    alert("Please, enter a number.")
    return ""
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please, pick a number between 8 and 128")
    return ""
  }
  var validCharacters = ""
  var lowerCase = confirm("Would you like a lowercase letter in your password")
  if (lowerCase) {
    validCharacters += "abcdefghijklmnopqrstuvwxyz"
  }
  var upperCase = confirm("Would you like a uppercase letter in your password")
  if (upperCase) {
    validCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  var symbols = confirm("Would you like a symbol in your password?")
  if (symbols) {
    validCharacters += "!@#$%^&*"
  }
  if (validCharacters === "") {
    alert("Please, select at least one type of character")
    return ""
  }
  var password = ""

  for (let i = 1; i <= passwordLength; i++) {
    var index = Math.floor(Math.random() * validCharacters.length);

    password += validCharacters.charAt(index)
  }


  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//<button onclick = "gfg_Run()"> 

generateBtn.addEventListener("click", writePassword)
