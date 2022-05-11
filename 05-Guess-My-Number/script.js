'use strict';

// dom elements
const body = document.querySelector('body');
// btns
const checkBtn = body.querySelector('.check');
const againBtn = body.querySelector('.again');
const displayMessage = body.querySelector('.message');

// messages to player
const correctMessage = `🎉 Correct number`;
// const notCorrectMessage = `❌ Try again`;
const noValueMessage = `🛑 No number!`;
const tooHighMessage = `📈 Too high!`;
const tooLowMessage = `📉 Too low!`;

// random numbergenerater 
const randomNumberBetween = (min, max) => Math.trunc(Math.random() * max) + min;

// game rules
const correctNumber = randomNumberBetween(1,20);
let guessInput, isWin;

//remove this when game is done!!
body.querySelector('.number').textContent = correctNumber;

// btn eventlisteners
checkBtn.addEventListener('click', checkNumber);

// btn functions
function checkNumber(){
    guessInput = body.querySelector('.guess').value;
    isWin = correctNumber == guessInput;

    if(!guessInput){
        displayMessage.textContent = noValueMessage;
    } else if (isWin){
        displayMessage.textContent = correctMessage;
    } else if (guessInput > correctNumber){
        displayMessage.textContent = tooHighMessage;
    } else if (guessInput < correctNumber){
        displayMessage.textContent = tooLowMessage;
    }
}
