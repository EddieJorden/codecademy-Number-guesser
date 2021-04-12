let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const compareGuesses = (human) => {
	let targetValue = Math.floor(Math.random() * 10);
	console.log('targetValue', targetValue);

	let computerGuess = Math.floor(Math.random() * 10);
	console.log('computerGuess', computerGuess);

	let humanGuessValue = Math.abs(targetValue - human);
	console.log('humanGuessValue', humanGuessValue);
	console.log('human', human);

	let computerGuessValue = Math.abs(targetValue - computerGuess);
	console.log('computerGuessValue', computerGuessValue);
	console.log('computerGuess', computerGuess);
	console.log('humanScore', humanScore);

	if (humanGuessValue > computerGuessValue) {
		return false, computerScore + 1;
	}
	if (humanGuessValue < computerGuessValue) {
		return true, humanScore + 1;
	} else {
		return true;
	}
};

var compareGuessesResult = compareGuesses(5); /* global var*/

const updateScore = (newVar) => {
	if (newVar) {
		console.log('compareGuessResult', compareGuessesResult);
		humanScore + 1;
	} else {
		computerScore + 1;
	}
};

var props = updateScore();

const scoreUpdate = (arbitrary) => {
	props;
};

console.log('updateScore', props);
