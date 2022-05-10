'use strict';

let bill = 275;
bill = 40;
bill = 430;

const tip = getTip(bill);

const totalValue = bill + tip;

function getTip(bill){
    return bill * ((bill >= 50 && bill <= 300 ? 15 : 20) / 100);
}

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`);