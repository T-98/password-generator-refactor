// Assignment code here


//returns lowercase, uppercase, special or number on call
function getRandom(bool)
{
  var characters = '';
  if(bool == "uppercase") { characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; }
  else if(bool == "lowercase") { characters ='abcdefghijklmnopqrstuvwxyz'; }
  else if(bool == "number"){ characters = '0123456789'; }
  else  characters = '!\"§$%&/()=?\u{20ac}';

  return characters;
}

//generates the password
function generatePassword()
{
  var numCharacters = prompt("How many characters would you like your password to contain (Please enter uptill 128) ?");

  if(confirm("Click ok to confirm including special characters"))
  {
   var special = getRandom("special");
  }

  if(confirm("Click ok to confirm including numbers"))
  {
    var number = getRandom("number");
  }

  if(confirm("Click ok to confirm including lowercase characters"))
  {
    var lowercase = getRandom("lowercase");
  }

  if(confirm("Click ok to confirm including uppercase characters"))
  {
    var uppercase = getRandom("uppercase");
  }


  var characters = uppercase.concat(lowercase, number, special);
  var charactersLength = characters.length;
  var password = '';
  
  for ( var i = 0; i < numCharacters; i++ )
  {
    password += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  console.log(special);
  console.log(number);
  console.log(lowercase);
  console.log(uppercase);
  console.log(password);

  return password;
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
