let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const compareGuesses = (human, computer, target) => {
	let targetValue = Math.floor(Math.random() * 10);

	let computerGuess = Math.floor(Math.random() * 10);

	console.log('targetValue', targetValue);
	let humanGuessValue = Math.abs(targetValue - human);
	console.log('humanGuessValue', humanGuessValue);
	console.log('human', human);
	let computerGuessValue = Math.abs(targetValue - computerGuess);
	console.log('computerGessValue', computerGuessValue);
	console.log('computerGuess', computerGuess);

	if (humanGuessValue > computerGuessValue) {
		return 'the computer wins';
	} else if (humanGuessValue < computerGuessValue) {
		return 'the human wins';
	} else {
		return 'it is a miraculous tie';
	}
};

console.log(compareGuesses(5));
