// create a secret Number
var secretNumber = 6;

// ask user for guess
var stringGuess = prompt("Guess a number: ");

// convert the users' guess into a number instead of using the stringtype value
var guess = Number(stringGuess);

//check if guess equals to the secretNumber
if (guess === secretNumber) {
  alert("You guessed correct!!");
}

// otherwise, check if guess is too high
else if (guess > secretNumber){
  alert("That value is too high, guess again.");
}

// otherwise, check if guess is too low
else {
  alert("That value is too low, guesss again.");
}
