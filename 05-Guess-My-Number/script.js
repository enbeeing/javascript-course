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
const numberDispayDeafult = "?";

// classes for css
const winClass = 'win';
const loseClass = 'lose';

// random numbergenerater 
const randomNumberBetween = (min, max) => Math.trunc(Math.random() * max) + min;

// game rules
const minNumber = 1, maxNumber = 20, defaultScore = 20, loseNumber = Number(0);
let correctNumber = randomNumberBetween(minNumber,maxNumber), score = defaultScore;
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
        } else {
            displayMessage.textContent = guessInput > correctNumber 
            ? tooHighMessage : tooLowMessage;

            score--;

            if(score === loseNumber){
                gameOver();
            }
        } 
        scoreDisplay.textContent = score;
    }
}

function resetGame(){
    if(isWin){
        body.classList.remove(winClass);
        numberDisplay.classList.remove(winClass);
    } 
    if (isGameOver){
        body.classList.remove(loseClass);
        numberDisplay.classList.remove(loseClass);
    }

    // set and display default values
    score = defaultScore;
    scoreDisplay.textContent = score;
    numberDisplay.textContent = numberDispayDeafult;
    displayMessage.textContent = defaultMessage;

    isWin = false, isGameOver = false;
    // give new correctNumber
    correctNumber = randomNumberBetween(minNumber,maxNumber);
}

// win and lose funtions

function playerWins(){
    displayMessage.textContent = correctMessage;
    numberDisplay.textContent = correctNumber;

    // set and display highscore
    if(!highscore || highscore < score){
        highscore = score;
    } 
    highscoreDisplay.textContent = highscore;

    // add class and style in css
    body.classList.add(winClass);
    numberDisplay.classList.add(winClass);
}

function gameOver(){
    displayMessage.textContent = gameOverMessage;
    numberDisplay.textContent = correctNumber;
    isGameOver = true;

    // add class and style in css
    body.classList.add(loseClass);
    numberDisplay.classList.add(loseClass);
}