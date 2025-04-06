let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, targetGuess) {
  if (humanGuess < 0 || humanGuess > 9) {
    alert("You have entered an invalid number. Try again!");
    return false;
  }
  let humanDiff = Math.abs(humanGuess - targetGuess);
  let computerDiff = Math.abs(computerGuess - targetGuess);

  if (humanDiff < computerDiff) {
    return true;
  } else if (humanDiff === computerDiff) {
    return true;
  } else if (humanDiff > computerDiff) {
    return false;
  }
}

function updateScore(winner) {
  winner = winner.toLowerCase();
  
  if (winner === "human") {
    humanScore += 1;
  } else if (winner === "computer") {
    computerScore += 1;
  }
}

function advanceRound() {
  currentRoundNumber += 1;
}
