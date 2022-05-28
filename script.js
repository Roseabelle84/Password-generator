// Assignment code here
function generatePassword() {

  /* code starts here */
  //confirm(upper, lower, numbers, special characters,;);
  //var upper = confirm()
  // var lower = confirm()
  // var number = confirm ()
  // var special characters= confirm()
  //var lengthPrompt =parseInt(prompt("Choose between")
  var el_down = document.getElementById("ros");

  function gfg_Run() {
    el_down.innerHTML =
      Math.random().toString(36).slice(2) +
      Math.random().toString(36)
        .toUpperCase().slice(2);



    /* Function to generate combination of password */
    function generateP() {
      var pass = '';

      for (let i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random()
          * str.length + 1);

        pass += str.charAt(char)
      }

      return pass;
    }

    function gfg_Run() {
      el_down.innerHTML = generateP();
    }





  }
  var password = "password is anything from letters to numbers"

  /* code Ends here */

  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

//<button onclick = "gfg_Run()"> 


