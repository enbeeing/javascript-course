'use strict';

// challenge 1

let markHeight = 1.69, markMass = 78;
markHeight = 1.88, markMass = 95;

let johnHeight = 1.95, johnMass = 92;
johnHeight = 1.76, johnMass = 85;

const markBMI = getBMIResult(markHeight,markMass);

const johnBMI = getBMIResult(johnHeight,johnMass);

const markHigherBMI = markBMI > johnBMI;


function getBMIResult(height, mass){
    return mass / (height * height);
}

console.log(markHigherBMI);

// challenge 2

if(markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})!`);
} else{
    console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Marks's (${markBMI.toFixed(2)})!`);
}

// challenge 3

let dolphinsScores = [96,108,89];
dolphinsScores = [97,112,101];
dolphinsScores = [97,112,101];

let koalasScores = [88,91,110];
koalasScores = [109,95,123];
koalasScores = [109,95,106];

const dolphinsAverage = getAverageScore(dolphinsScores);
const koalasAverage = getAverageScore(koalasScores);

let winner = "";

function getAverageScore(arr){
    const sum = arr.reduce((a,b) => a + b, 0);

    return sum / arr.length;
}

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

// challenge 4

let bill = 275;
bill = 40;
bill = 430;

const tip = calcTip(bill);

const totalValue = bill + tip;

function calcTip(bill){
    return bill * ((bill >= 50 && bill <= 300 ? 15 : 20) / 100);
}

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`);