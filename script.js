// Assignment code here
function generatePassword() {
  /* code starts here */
  //confirm(upper, lower, numbers, special characters,;);
  //var upper = confirm()
  // var lower = confirm()
  // var number = confirm ()
  // var special characters= confirm()
  //var lengthPrompt =parseInt(prompt("Choose between ")
  var password = ""
  /* code Ends here */
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
