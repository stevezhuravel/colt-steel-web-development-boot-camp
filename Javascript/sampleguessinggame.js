// create secretNumber
var secretNumber = 4;
// ask user for guess
var stringGuess = prompt("Guess a Number");
var guess = Number(stringGuess);

// check if guess is right 
if(guess === secretNumber){
    alert("You got it right");
}

//otherwise, check if higher
else if (guess > secretNumber){
    alert("Too high guess again");
}
//otherwise check if it lower
else{ (guess < secretNumber)
    alert("Too high guess again");
}
