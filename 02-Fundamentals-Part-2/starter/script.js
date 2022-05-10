'use strict';

// challange 1

let dolphinsScores = [44,23,71];
dolphinsScores = [85,54,41];

let koalasScores = [65,54,49];
koalasScores = [23,34,27];

const calcAverage = (arr) => 
    ([...arr].reduce((a,b) => a + b, 0)) / [...arr].length;

const dolphinsAverage = calcAverage(dolphinsScores);

const koalasAverage = calcAverage(koalasScores);

function checkWinner(avgDolphins, avgKoalas){
    let winner, winnerScore, loserScore;

    if(avgDolphins > avgKoalas && avgDolphins >= 2 * avgKoalas){
        winner = "Dolphins"
        winnerScore = avgDolphins;
        loserScore = avgKoalas;
    } else if (avgKoalas >= 2 * avgDolphins) {
        winner = "Koalas"
        winnerScore = avgKoalas;
        loserScore = avgDolphins;
    }

    if(winner){
        console.log(`${winner} win (${winnerScore} vs. ${loserScore})`);
    } else {
        console.log("No ones win");
    }
}

checkWinner(dolphinsAverage, koalasAverage);


