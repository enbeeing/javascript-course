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

const checkWinner = (avgDolphins, avgKoalas) => {
    let winner, winnerScore, loserScore, result;

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
        result = `${winner} win (${winnerScore} vs. ${loserScore})`;
    } else {
        result = "No ones win";
    }

    return result;
}

console.log(checkWinner(dolphinsAverage, koalasAverage));


// challange 2

const bills = [125, 555, 44];

const calcTip = (bill) => bill * ((bill >= 50 && bill <= 300 ? 15 : 20) / 100);

const tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

for(let i = 0; i < bills.length; i++){
    console.log
    (`The bill was ${bills[i]}, the tip was ${tips[i]}, and the total value ${total[i]}`);
}

