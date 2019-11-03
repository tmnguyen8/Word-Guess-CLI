var Word = require('./Word.js');
var inquirer = require('inquirer');

var letterArray = 'abcdefghijklmnopqrstuvwxyz';
var unitedStates = ['georgia', 'florida', 'texas'];

var randomIndex = Math.floor(Math.random()*unitedStates.length)
var randomWord = unitedStates[randomIndex];

var computerWord = new Word(randomWord);
var requiredNewWord = false;
var incorrectLetters = [];
var correctLetters = [];

var guessesLeft = 10;

function gameLogic () {
    if (requiredNewWord) {
        var randomIndex = Math.floor(Math.random()*unitedStates.length)
        var randomWord = unitedStates[randomIndex];
        var computerWord = new Word(randomWord);
        var requiredNewWord = false;
    }
    var wordComplete = [];

    if (wordComplete.includes(false)) {
        inquirer.prompt([
            {
                type: 'input',
                message: 'Select letter from a to z',
                name: 'userInput'
            }
        ]).then(function(input) {
            if (letterArray.includes(input.userInput) || input.userInput.length>1) {
                console.log('\nPlease try again\n');
                gameLogic();
            } else {
                if (incorrectLetters.includes(input.userInput) || correctLetters.includes(input) || input.userInput ==="") {
                    console.log("\nAlready guessed or Nothing was entered\n");
                    gameLogic();
                } else {
                    var wordCheckArray = [];
                    computerWord.userGuess(input.userInput);
                    computerWord.objArray.forEach(wordCheck);
                    if(wordCheckArray.join("") === wordComplete.join("")) {
                        console.log("\nIncorrect\n");
                        incorrectLetters.push(input.userInput);
                        guessesLeft--;
                    } else {
                        console.log('\nCorrect\n');
                        correctLetters.push(input.userInput);
                    }
                    computerWord();

                    console.log(`Guesses Left: ${guessesLeft} \n`);
                    console.log(`Letters Guessed: ${incorrectLetters.join(" ")} \n`)
                
                    if(guessesLeft > 0) {
                        gameLogic();
                    } else {
                        console.log('You have lost \n')
                    }
                    function wordCheck(key) {
                        wordCheckArray.push(key.guessed)
                    }
                }
            }
            
        })
    } else {
        console.log('You Win!')
    }
    function completeCheck(key) {
        wordComplete.push(key.guessed);
    }
}

function restartGame() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to:',
            choices: ["Play Again", "Exit"],
            name: 'restart'
        }
    ]).then(function(input) {
        if(input.restart === 'Play Again') {
            requiredNewWord = true;
            incorrectLetters = [];
            correctLetters = [];
            guessesLeft = 10;
            gameLogic();
        }
    })
}

gameLogic();
