'use strict';

// variables

let markHeight = 1.69, markMass = 78;

// markHeight = 1.88, markMass = 95;

let johnHeight = 1.95, johnMass = 92;

// johnHeight = 1.76, johnMass = 85;

const markBMI = getBMIResult(markHeight,markMass);

const johnBMI = getBMIResult(johnHeight,johnMass);

const markHigherBMI = markBMI > johnBMI;


// functions

function getBMIResult(height, mass){
    return mass / (height * height);
}


// console logs

console.log(markHigherBMI);