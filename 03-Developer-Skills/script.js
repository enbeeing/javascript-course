'use strict';

// challenge 1

const data1 = [17,21,23];
const data2 = [12,5,-5,0,4];

const celsiusSymbol = ``;

function printForecast(arr) {
    let result = "";
    
    arr.forEach((element, index) => {
        result += ` ... ${element}°C in ${index + 1} days`;
    });

    return result;
}

console.log(printForecast(data1));
console.log(printForecast(data2));