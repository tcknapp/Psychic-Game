

var computerGuess = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var userGuess = ['a ','b ','c ','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guessLeft = 9;
var guessSoFar = [];


var userGuess = null;


// The psychics guess - chooses random letter
var psychicGuess = computerGuess[Math.floor(Math.random() * computerGuess.length)];

console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessLeft + " Guesses so far: " + guessSoFar + " Computer picked: " + psychicGuess);

// Alerts the key the user pressed (userGuess).
console.log("User guess: " + userGuess);

// Alerts the Computer's guess.
console.log("Computer guess: " + computerGuess);


//Starts "listening"
document.onkeyup = function(event) {
        

    // When user presses key, it records to userGuess, make sure guess valid, changes to lowercase
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


    // Adds userGuess, takes away 1 "guesses left"
    if (guessSoFar.indexOf(userGuess) < 0 && computerGuess.indexOf(userGuess) >= 0) {
        guessSoFar[guessSoFar.length]=userGuess;
        guessLeft--;
    }

    // if psychicGuess is correct, records win, resets guesses left 
    if (psychicGuess === userGuess) {
        wins++;
        console.log("You win!");
        guessLeft = 9;
        guessSoFar = [];
        psychicGuess = computerGuess[Math.floor(Math.random() * computerGuess.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessLeft + " Guesses so far: " + guessSoFar + " Computer picked: " + psychicGuess);
        alert("You must be psychic!");

    }

    // if user does not guess correctly, records loss, resets guesses and guesses left
    if (guessLeft === 0) {
        losses++;
        console.log("You lose!");
        guessLeft = 9;
        guessSoFar = [];
        psychicGuess = computerGuess[Math.floor(Math.random() * computerGuess.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessLeft + " Guesses so far: " + guessSoFar + " Computer picked: " + psychicGuess);
        alert("You're no psychic, Sorry.")
    }

    
    //For HTML 
    var html = "<h3>Guess what letter I\'m thinking of...</h3>" + "<h3>Wins: " + wins + "</h3>" + "<h3>Losses: " + losses + "</h3>" + "<h3>Guesses Left: " + guessLeft + "</h3></p>" + "<h3>Your guesses so far: " + guessSoFar + "</h3>";

	document.querySelector("#game").innerHTML = html;

}

