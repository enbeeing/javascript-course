'use strict';

// dom elements
const body = document.querySelector('body');
const displayMessage = body.querySelector('.message');
const scoreDisplay = body.querySelector('.score');
const highscoreDisplay = body.querySelector('.highscore');
const numberDisplay = body.querySelector('.number');
// btns
const checkBtn = body.querySelector('.check');
const againBtn = body.querySelector('.again');

// messages to player
const defaultMessage = "Start guessing...";
const correctMessage = `🎉 Correct number!`;
const noValueMessage = `⛔ No number!`;
const tooHighMessage = `📈 Too high!`;
const tooLowMessage = `📉 Too low!`;
const gameOverMessage = `💥 You lost the game!`;

// random numbergenerater 
const randomNumberBetween = (min, max) => Math.trunc(Math.random() * max) + min;

// game rules
const defaultScore = 20;
let correctNumber = randomNumberBetween(1,20), score = defaultScore;
let isWin = false, isGameOver = false;
let guessInput, highscore;

// btn eventlisteners
checkBtn.addEventListener('click', checkNumber);
againBtn.addEventListener('click', resetGame);

// btn functions
function checkNumber(){
    guessInput = body.querySelector('.guess').value;
    isWin = correctNumber === Number(guessInput);

    if(!isGameOver){
        if(!guessInput){
            displayMessage.textContent = noValueMessage;
        } else if (isWin){
            playerWins();
        } else if (score > 1){
            if (guessInput > correctNumber){
                displayMessage.textContent = tooHighMessage;
            } else if (guessInput < correctNumber){
                displayMessage.textContent = tooLowMessage;
            }
            score--;
        } else {
            gameOver();
        }
        scoreDisplay.textContent = score;
    }
}

function resetGame(){
    if(isWin){
        body.classList.remove('win');
        numberDisplay.classList.remove('win');
    } 
    if(isGameOver){
        body.classList.remove('lose');
        numberDisplay.classList.remove('lose');
    }

    // set and display default values
    score = defaultScore;
    scoreDisplay.textContent = score;
    numberDisplay.textContent = "?";
    displayMessage.textContent = defaultMessage;

    isWin = false, isGameOver = false;
    // give new number
    correctNumber = randomNumberBetween(1,20);
}

// win and lose funtions

function playerWins(){
    displayMessage.textContent = correctMessage;
    numberDisplay.textContent = correctNumber;

    // set and display highscore
    if(!highscore){
        highscore = score;
    } else if (highscore < score) {
        highscore = score;
    }
    highscoreDisplay.textContent = highscore;

    // add class and style in css
    body.classList.add('win');
    numberDisplay.classList.add('win');
}

function gameOver(){
    displayMessage.textContent = gameOverMessage;
    numberDisplay.textContent = correctNumber;
    score--;
    isGameOver = true;

    // add class and style in css
    body.classList.add('lose');
    numberDisplay.classList.add('lose');
}
