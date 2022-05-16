'use strict';

// dom elements
const body = document.querySelector('body');
const diceImgEL = body.querySelector('.dice');
const player0EL = body.querySelector('.player--0');
const score0EL = player0EL.querySelector('#score--0');
const currentScore0EL = player0EL.querySelector('#current--0');
const player1EL = body.querySelector('.player--1');
const score1EL = player1EL.querySelector('#score--1');
const currentScore1EL = player1EL.querySelector('#current--1');
//btns
const btnRoll = body.querySelector('.btn--roll');
const btnHold = body.querySelector('.btn--hold');
const btnNew = body.querySelector('.btn--new');

// classes for css
const hiddenClass = 'hidden';
const activePlayerClass = 'player--active';
const winnerClass = 'player--winner';

// const function expressions
const randomNumberBetween = (min, max) => Math.trunc(Math.random() * max) + min;

const displayCurrentPlayersCurrentScore = () =>
    displayContent(currentPlayer.currentScoreEL, currentPlayer.currentScore);

const resetCurrentScore = () => currentPlayer.currentScore = defaultScore;

const displayContent = (element, mesasge) => element.textContent = mesasge;
    
// default game values 
const defaultScore = 0;
const minRoll = 1, maxRoll = 6;
const winNum = 100;
let playing = true;
let diceNum = 0;

// make players
function Player(id, name, playerEL, score, scoreEL, currentScore, currentScoreEL) {
    this.id = id;
    this.name = name;
    this.playerEL = playerEL;
    this.score = score;
    this.scoreEL = scoreEL;
    this.currentScore = currentScore;
    this.currentScoreEL = currentScoreEL;
}
let player0 = new Player(0,'Player 1', player0EL,0,score0EL,0,currentScore0EL);
let player1 = new Player(1,'Player 2',player1EL,0,score1EL,0,currentScore1EL);
let currentPlayer = player0;




// eventlisteners
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', hold);
btnNew.addEventListener('click', newGame);

// btn funtions
function rollDice(){
    if(playing){
        if(!diceNum){
            diceImgEL.classList.remove(hiddenClass);
        }
        diceNum = randomNumberBetween(minRoll,maxRoll);
    
        diceImgEL.src = `imgs/dice-${diceNum}.png`;
    
        if(diceNum !== minRoll){
            currentPlayer.currentScore += diceNum;
            displayCurrentPlayersCurrentScore();
        } else {
            resetCurrentScore();
            displayCurrentPlayersCurrentScore();
            switchCurrentPlayer();
        }
    }
}

function hold(){
    if(playing){
        if(currentPlayer.currentScore > 0){
            currentPlayer.score += currentPlayer.currentScore;
            displayContent(currentPlayer.scoreEL, currentPlayer.score);
            
            if(currentPlayer.score >= winNum){
                win();
                return;
            }
        
            resetCurrentScore();
            displayCurrentPlayersCurrentScore();
        
            switchCurrentPlayer();
        }
    }
}

function newGame(){
    playing = true;
    currentPlayer.playerEL.classList.remove(winnerClass);

    player0.score = defaultScore, player0.currentScore = defaultScore;
    player1.score = defaultScore; player1.currentScore = defaultScore;

    if(currentPlayer !== player0){
        switchCurrentPlayer();
    }

    displayContent(player0.scoreEL, player0.score);
    displayContent(player0.currentScoreEL, player0.currentScore);
    displayContent(player1.scoreEL, player1.score);
    displayContent(player1.currentScoreEL, player1.currentScore);

    if(!diceImgEL.classList.contains(hiddenClass)){
        diceImgEL.classList.add(hiddenClass);
    }
    diceNum = defaultScore;
}

// switch player
function switchCurrentPlayer(){
    currentPlayer = currentPlayer === player0 ? player1 : player0;

    player0EL.classList.toggle(activePlayerClass);
    player1EL.classList.toggle(activePlayerClass);
}

// winner found!
function win(){
    playing = false;

    currentPlayer.playerEL.classList.add(winnerClass);
    diceImgEL.classList.add(hiddenClass);
}