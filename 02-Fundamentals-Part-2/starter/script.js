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


// challange 3

function Person(firstName, lastName, height, weight){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function() 
            { return `${this.firstName} ${this.lastName}`; };
    this.height = height;
    this.weight = weight;
    this.calcBMI = function() 
        { return this.weight / (this.height * this.height); };
}

const mark = new Person("Mark", "Miller", 1.69, 78);

const john = new Person("John", "Smith", 1.95, 92);

const highestBMI = mark.calcBMI() > john.calcBMI() ? 
    mark : john;

const lowestBMI = mark.calcBMI() < john.calcBMI() ? 
    mark : john;

console.log(`${highestBMI.fullName()}'s BMI (${highestBMI.calcBMI().toFixed(1)}) is higher than ${lowestBMI.fullName()}'s (${lowestBMI.calcBMI().toFixed(1)})`);


// challange 4

const allBills = [22,295,176,440,37,105,10,1100,86,52];

const allTips = [];

const allTotal = [];

for(let i = 0; i < allBills.length; i++) {
    let tip = calcTip(allBills[i]);
    
    allTips.push(tip);
    allTotal.push(allBills[i] + tip);
}

const avgTotal = calcAverage(allTotal);

console.log(allBills, allTips, allTotal);
console.log(`Average total: ${avgTotal}`);


