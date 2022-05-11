'use strict';

// challenge 1

const data1 = [17,21,23];
const data2 = [12,5,-5,0,4];

const celsiusSymbol = ``;

function printForecast(arr) {
    let result = "";
    
    for(let i = 0; i < arr.length; i++) {
        result += ` ... ${arr[i]}°C in ${i + 1} days`;
    }

    return result;
}

console.log(printForecast(data1));
console.log(printForecast(data2));