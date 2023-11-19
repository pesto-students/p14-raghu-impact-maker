function playGuessingGame(numToGuess, totalGuesses = 10) {
  let guessesLeft = totalGuesses;
  let userGuess = null;

  while (guessesLeft > 0) {
    userGuess = prompt(
      guessesLeft === totalGuesses
        ? "Enter a number between 1 and 100."
        : userGuess < numToGuess
        ? userGuess + " is too small. Guess a larger number."
        : userGuess + " is too large. Guess a smaller number."
    );


    if (userGuess === null) {
      return 0;
    }


    if (isNaN(userGuess) || userGuess.trim() === "") {
      alert("Please enter a number.");
      continue;
    }


    userGuess = Number(userGuess);


    if (userGuess === numToGuess) {
      return totalGuesses - guessesLeft + 1;
    } else {
      guessesLeft--;
    }
  }


  return 0;
}


console.log(playGuessingGame(5));
console.log(playGuessingGame(7, 3));
