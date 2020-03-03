var lengthPass;
var lengthNumberCheck=false;
var lowerCase=false;
var upperCase=false;
var numberTrue=false;
var specialCharTrue=false; 
var checkPasswordTypes;
var count=0;
var i=0;
var passwordEl = document.querySelector('#password');
var generateEl = document.querySelector('#generate');
var copyEl = document.querySelector('#copy');

function checkLength(){
    if(lengthPass>=8 && lengthPass<=128 && lengthNumberCheck){
        lengthPass = Math.round(lengthPass);
        passwordType();
    }
    else{
        while(lengthPass < 8 || lengthPass > 128 || lengthNumberCheck == false ){
            lengthPass = parseInt(prompt("Enter a length between (8-128)"))
            lengthNumberCheck = Number.isInteger(lengthPass);
            // console.log(lengthPass)
            // console.log(lengthNumberCheck)
        }
        lengthPass = Math.round(lengthPass);
        // console.log("here")
        passwordType();

    }
}

function passwordType(){

    while(lowerCase == false && upperCase == false && numberTrue == false && specialCharTrue == false){
        lowerCase = confirm("Would you like lower case?");
        upperCase = confirm("Would you like upper case?");
        numberTrue = confirm('How about numbers?');
        specialCharTrue = confirm('Did you want to maybe use some special characters?');
        if(lowerCase == false && 
            upperCase == false &&
            numberTrue == false &&
            specialCharTrue == false){
                alert("You have to choose at least one type.");
            }
    }
    checkDecision();
}

function checkDecision(){
    
    checkPasswordTypes = confirm("It will have\nLower Case: " + lowerCase + "\nUpper Case: " + upperCase + '\nNumbers: ' +  numberTrue + "\nSpecial Characters: " + specialCharTrue);

    if(checkPasswordTypes == false){
        lowerCase = false;
        upperCase = false;
        numberTrue = false;
        specialCharTrue = false;
        passwordType()
    }else{
        generatePassword(lowerCase, upperCase, numberTrue, specialCharTrue, lengthPass);

    }
}


function generatePassword(l, u, n, s, lP){
    var lower = "abcdefghijklmnopqrstuvwxyz"
    // var lowerChar = lower.split('');
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // var upperChar = upper.split('');
    var numbers = "1234567890";
    // var numbersChar = numbers.split('');
    var special = ' !"' + "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    // var specialChar = special.split('');
    var passString = "";
    var passArray;
    var password = "";
    // console.log(lowerChar[3])
    if(l){
        passString = passString + lower;
    }
    if(u){
        passString = passString + upper;
    }

    if(n){
        passString = passString + numbers;
    }
    if(s){
        passString = passString + special;
    }
    passArray = passString.split('');
    for(i=0; i<lengthPass; i++){
        password = password + passArray[Math.floor(Math.random() * passArray.length)];
    }
    
    console.log(passString)
    console.log(passArray[1])
    console.log(password)
    passwordEl.textContent = password;

}

generateEl.addEventListener("click", function(){
    lowerCase = false;
    upperCase = false;
    lengthPass = 0;
    lengthNumberCheck = false;
    numberTrue = false;
    specialCharTrue = false;
    checkLength();
})

function copy() {
    var copyText = document.querySelector("#password");
    copyText.select();
    document.execCommand("copy");
  }
  
  document.querySelector("#copy").addEventListener("click", copy);






