'use strict';

// dom elements
const body = document.querySelector('body');
const messageDisplay = body.querySelector('.message');
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
    if(!isGameOver){
        guessInput = body.querySelector('.guess').value;
        isWin = correctNumber === Number(guessInput);

        if(!guessInput){
            displayMessage(messageDisplay, noValueMessage);
        } else if (isWin){
            playerWins();
        } else {
            displayMessage(messageDisplay , guessInput > correctNumber 
            ? tooHighMessage : tooLowMessage)

            score--;

            if(score === loseNumber){
                gameOver();
            }
        } 
        displayMessage(scoreDisplay, score);
    }
}

function resetGame(){
    if(isWin){
        removeClass(body, winClass);
        removeClass(numberDisplay, winClass);
    } 
    if (isGameOver){
        removeClass(body, loseClass);
        removeClass(numberDisplay, loseClass);
    }

    // set and display default values
    score = defaultScore;
    displayMessage(scoreDisplay, score);
    displayMessage(numberDisplay, numberDispayDeafult);
    displayMessage(messageDisplay, defaultMessage);

    isWin = false, isGameOver = false;
    // give new correctNumber
    correctNumber = randomNumberBetween(minNumber,maxNumber);
}

// win and lose funtions

function playerWins(){
    displayMessage(messageDisplay,correctMessage);
    displayMessage(numberDisplay, correctNumber);

    // set and display highscore
    if(!highscore || highscore < score){
        highscore = score;
    } 
    displayMessage(highscoreDisplay, highscore);

    addClass(body, winClass);
    addClass(numberDisplay,winClass);
}

function gameOver(){
    displayMessage(messageDisplay,gameOverMessage);
    displayMessage(numberDisplay,correctNumber);
    isGameOver = true;

    addClass(body,loseClass);
    addClass(numberDisplay,loseClass);
}


// change textcontent of element
function displayMessage(element, mesasge){
    element.textContent = mesasge;
}

// funtions to add/remove element class
function addClass(element, classToAdd){
    element.classList.add(classToAdd);
}
function removeClass(element, classToRemove){
    element.classList.remove(classToRemove);
}