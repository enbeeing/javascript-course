'use strict';

// variables

let dolphinsScores = [96,108,89];
dolphinsScores = [97,112,101];
dolphinsScores = [97,112,101];

let koalasScores = [88,91,110];
koalasScores = [109,95,123];
koalasScores = [109,95,106];

const dolphinsAverage = getAverageScore(dolphinsScores);
const koalasAverage = getAverageScore(koalasScores);

let winner = "";

// functions

function getAverageScore(arr){
    const sum = [...arr].reduce((a,b) => a + b, 0);

    return sum / [...arr].length;
}


// console logs

if(dolphinsAverage < 100 || koalasAverage < 100){
    winner = "No teams average's over 100";
} else {
    if(koalasAverage === dolphinsAverage){
        winner = "Draw";
    } else if (koalasAverage > dolphinsAverage){
        winner = `Koalas average is highest (${koalasAverage.toFixed(2)})`;
    } else {
        winner = `Dolphins average is highest (${dolphinsAverage.toFixed(2)})`;
    }
}

console.log(winner);