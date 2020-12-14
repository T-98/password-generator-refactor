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

function shuffle(s) 
{
  var arr = s.split('');           // Convert String to array
  var n = arr.length;              // Length of the array
  
  for(var i=0 ; i<n-1 ; ++i) 
  {
    var j = Math.floor(Math.random() * n);
    //var j = getRandomInt(n);       // Get random of [0, n-1]
    
    var temp = arr[i];             // Swap arr[i] and arr[j]
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  s = arr.join('');                // Convert Array to string
  return s;                        // Return shuffled string
}

//generates the password
function generatePassword()
{
  var numCharacters = prompt("How many characters would you like your password to contain (Please enter uptill 128) ?");
  var special = "", number = "", lowercase = "", uppercase ="";
  var s, n, l, u;

  if(confirm("Click ok to confirm including special characters"))
  {
    special = getRandom("special");
    s = true;
  }

  if(confirm("Click ok to confirm including numbers"))
  {
     number = getRandom("number");
     n = true;
  }

  if(confirm("Click ok to confirm including lowercase characters"))
  {
     lowercase = getRandom("lowercase");
     l = true;
  }

  if(confirm("Click ok to confirm including uppercase characters"))
  {
     uppercase = getRandom("uppercase");
     u = true;
  }

  var characters = uppercase + lowercase + number + special;
  var charactersLength = characters.length;
  var password = '';
  console.log(lowercase);

  var i = 0;

  if(s)
  {
    var random = special.charAt(Math.floor(Math.random()*special.length));
    password += random;
    ++i;
  }  

  if(n)
  {
    var random = number.charAt(Math.floor(Math.random()*number.length));
    password += random;
    ++i;
  }  

  if(l)
  {
    var random = lowercase.charAt(Math.floor(Math.random()*lowercase.length));
    password += random;
    ++i;
  }  

  if(u)
  {
    var random = uppercase.charAt(Math.floor(Math.random()*uppercase.length));
    password += random;
    ++i;
  }  

  for (; i < numCharacters; i++ )
  {
    password += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return shuffle(password);
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
