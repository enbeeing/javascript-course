'use strict';

// // hoisted and TDZ
// console.log(me);
// console.log(str());

// var me = 'Jonas';
// function str(){
//     return 'str';
// }

// let job = 'teacher';
// const year = 1991;
// const str2nd = () => '2nd str';


// console.log(job);
// console.log(year);
// console.log(str2nd());

// console.log(me === window.me);
// console.log(job === window.job);


// // just testing different possibilities with objects
let currentYear = 2022;

// class Person {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//         this.calcAge = function () {
//             return currentYear - this.year;
//         };
//     }
// }
// const jonas = new Person('Jonas',1992);
// console.log(jonas.calcAge());

// function Human (name, year) {
//     this.name = name;
//     this.year = year;
//     this.calcAge = function(){
//         return currentYear - this.year;
//     }
// }
// const ash = new Human('Ash', 1998);
// console.log(ash.name, ash.year, ash.calcAge());

// const chris = {
//     name: 'Chris',
//     year: 1990,
//     calcYear: function(){
//         return currentYear - this.year;
//     }
// }
// console.log(chris.calcYear());

// // this
// console.log('this:');

// console.log(this);

// const calcAge = function(year){
//     console.log(currentYear - year);
//     console.log(this);
// }
// calcAge(1997);

// const calcAgeArrow = (year) => {
//     console.log(currentYear - year);
//     console.log(this);
// }
// calcAgeArrow(1997);

// const jon = {
//     year: 1991,
//     calcAge: function(){
//         console.log(this);
//         console.log(currentYear - this.year);
//     }
// };
// jon.calcAge();

// const matilda = {
//     year: 2000,
// };
// matilda.calcAge = jon.calcAge;
// matilda.calcAge();

// const f = jon.calcAge;
// f();


// // regular vs. arrow functions: this
// const jon = {
//     firstName: 'Jon',
//     year: 1991,
//     calcAge: function(){
//         console.log(this);
//         console.log(currentYear - this.year);

//         // solution 1
//         // const self = this; 
//         // const isMillenial = function(){
//         //     console.log(self.year >= 1981 && self.year <= 1996);
//         // };
//         // solution 2
//         const isMillenial = () => console.log(this.year >= 1981 && this.year <= 1996);
//         isMillenial();
//     },
//     greet: () => console.log(`Hi ${jon.firstName}`),
// };
// jon.greet();
// jon.calcAge();

// // arguments not in arrow
// const addExpr = function(a,b){
//     console.log(arguments);
//     return a + b;
// };
// addExpr(2,5);
// addExpr(2,5,8,12);

// var addArrow = (a,b) => {
//     // console.log(arguments);
//     return a + b
// };
// addArrow(2,5);

// primitives vs objects (primitives vs reference types)
// primitive
let age = 30;
let oldAge = age;
age++;
console.log(age, oldAge);
// reference
const me = {
    name: 'Edd',
    age: 24,
};
const friend = me;
friend.age = 27;
console.log(me,friend);

// primitive
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName,oldLastName);
// copy object (not deep clone)
const missJessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
};
const mrsJessica = Object.assign({}, missJessica);
mrsJessica.lastName = 'Davis';
mrsJessica.family.push('Mary');
console.log(missJessica, mrsJessica);
